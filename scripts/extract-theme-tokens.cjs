#!/usr/bin/env node
/**
 * Theme Token Extractor & Comparison Tool
 * 
 * Extracts all theme tokens from @elastic/eui-theme-common TypeScript definitions
 * and compares them with your custom theme implementation.
 * 
 * Usage:
 *   node scripts/extract-theme-tokens.cjs [eui-repo-path]
 * 
 * Output:
 *   - TOKENS.md - A markdown checklist showing implementation status
 *   - tokens.json - Structured JSON with original and custom values
 */

const fs = require('fs');
const path = require('path');

// Default paths
const DEFAULT_EUI_PATH = '/home/marius/projects/eui';
const CUSTOM_THEME_PATH = path.join(__dirname, '..', 'packages', 'eui-theme-hacker', 'src', 'variables');
const OUTPUT_DIR = path.join(__dirname, '..');

/**
 * Parse TypeScript type definitions to extract token names
 */
function extractTokensFromFile(filePath, categoryName) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const tokens = [];

  const lines = content.split('\n');
  let currentComment = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('/**') || line.trim().startsWith('*')) {
      currentComment += line + '\n';
      continue;
    }
    
    const propMatch = line.match(/^\s*(\w+)\s*\??\s*:\s*([^;]+);/);
    if (propMatch) {
      const [, name, type] = propMatch;
      
      if (['export', 'type', 'interface', 'import'].includes(name)) {
        currentComment = '';
        continue;
      }
      
      const deprecated = currentComment.toLowerCase().includes('@deprecated');
      const description = currentComment
        .replace(/\/\*\*|\*\/|\*/g, '')
        .replace(/@deprecated[^\n]*/gi, '')
        .replace(/@[\w]+[^\n]*/g, '')
        .replace(/\n/g, ' ')
        .trim()
        .substring(0, 200);

      tokens.push({
        name: name.trim(),
        type: type.trim().substring(0, 50),
        description: description || undefined,
        deprecated,
        hasColorModeSwitch: type.includes('ColorModeSwitch'),
      });
      
      currentComment = '';
    } else if (line.trim() && !line.trim().startsWith('//')) {
      currentComment = '';
    }
  }

  return tokens.length > 0 ? {
    name: categoryName,
    file: path.basename(filePath),
    tokens,
  } : null;
}

/**
 * Parse a TypeScript file to extract exported object values
 * Handles nested objects and flattens them with dot notation
 */
function extractValuesFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const values = {};

  /**
   * Recursively parse object content to extract key-value pairs
   */
  const parseObjectLiteral = (str, prefix = '') => {
    // Remove leading/trailing braces and whitespace
    str = str.trim();
    if (str.startsWith('{')) str = str.slice(1);
    if (str.endsWith('}')) str = str.slice(0, -1);
    
    // Remove single-line comments (but preserve strings)
    str = str.replace(/\/\/[^\n]*\n/g, '\n');
    
    let depth = 0;
    let currentKey = '';
    let currentValue = '';
    let inKey = true;
    let inString = false;
    let stringChar = '';
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const prevChar = i > 0 ? str[i - 1] : '';
      
      // Handle string boundaries
      if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
        }
      }
      
      if (inString) {
        if (inKey) currentKey += char;
        else currentValue += char;
        continue;
      }
      
      // Track brace depth
      if (char === '{' || char === '[' || char === '(') depth++;
      if (char === '}' || char === ']' || char === ')') depth--;
      
      // Colon separates key from value (only at depth 0)
      if (char === ':' && depth === 0 && inKey) {
        inKey = false;
        continue;
      }
      
      // Comma separates entries (only at depth 0)
      if (char === ',' && depth === 0 && !inKey) {
        // Process the key-value pair
        processKeyValue(currentKey.trim(), currentValue.trim(), prefix, values, parseObjectLiteral);
        currentKey = '';
        currentValue = '';
        inKey = true;
        continue;
      }
      
      if (inKey) {
        currentKey += char;
      } else {
        currentValue += char;
      }
    }
    
    // Don't forget the last pair
    if (currentKey.trim() && currentValue.trim()) {
      processKeyValue(currentKey.trim(), currentValue.trim(), prefix, values, parseObjectLiteral);
    }
  };

  /**
   * Process a single key-value pair
   */
  const processKeyValue = (key, value, prefix, values, parseObjectLiteral) => {
    // Clean up the key
    key = key.replace(/['"]/g, '').trim();
    if (!key) return;
    
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    // Handle nested object
    if (value.startsWith('{') && value.endsWith('}')) {
      parseObjectLiteral(value, fullKey);
      return;
    }
    
    // Handle string values
    if ((value.startsWith("'") && value.endsWith("'")) ||
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith('`') && value.endsWith('`'))) {
      values[fullKey] = value.slice(1, -1);
      return;
    }
    
    // Handle numbers
    if (/^-?\d+(\.\d+)?$/.test(value)) {
      values[fullKey] = parseFloat(value);
      return;
    }
    
    // Handle references (CONSTANT.property or identifier)
    if (/^[A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)*$/.test(value)) {
      values[fullKey] = `[ref:${value}]`;
      return;
    }
    
    // Handle 'as const' suffixed values
    const asConstMatch = value.match(/^(['"`].*['"`])\s+as\s+const$/);
    if (asConstMatch) {
      const innerVal = asConstMatch[1];
      values[fullKey] = innerVal.slice(1, -1);
      return;
    }
    
    // Handle other expressions (template literals, function calls, etc.)
    if (value) {
      values[fullKey] = `[expr:${value.substring(0, 50)}]`;
    }
  };

  // Find const declarations with object literals
  // Handle multi-line objects by finding balanced braces
  const findObjectLiterals = () => {
    const constRegex = /(?:export\s+)?const\s+(\w+)(?:\s*:\s*[^=]+)?\s*=\s*\{/g;
    let match;
    
    while ((match = constRegex.exec(content)) !== null) {
      const varName = match[1];
      const startIdx = match.index + match[0].length - 1; // Position of opening brace
      
      // Find the matching closing brace
      let depth = 1;
      let endIdx = startIdx + 1;
      let inString = false;
      let stringChar = '';
      
      while (endIdx < content.length && depth > 0) {
        const char = content[endIdx];
        const prevChar = content[endIdx - 1];
        
        if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
          if (!inString) {
            inString = true;
            stringChar = char;
          } else if (char === stringChar) {
            inString = false;
          }
        }
        
        if (!inString) {
          if (char === '{') depth++;
          if (char === '}') depth--;
        }
        endIdx++;
      }
      
      if (depth === 0) {
        const objectContent = content.substring(startIdx, endIdx);
        parseObjectLiteral(objectContent, varName);
      }
    }
  };

  findObjectLiterals();

  // Also try to find simple exports
  const simpleExportRegex = /export\s+const\s+(\w+)\s*=\s*(['"`][^'"`]*['"`]|\d+);/g;
  let match;
  while ((match = simpleExportRegex.exec(content)) !== null) {
    const key = match[1];
    const value = match[2];
    if (value.startsWith("'") || value.startsWith('"') || value.startsWith('`')) {
      values[key] = value.slice(1, -1);
    } else {
      values[key] = parseFloat(value);
    }
  }

  return values;
}

/**
 * Load and parse all custom theme files
 */
function loadCustomTheme(themePath) {
  const customTokens = {
    colors: {},
    typography: {},
    size: {},
    borders: {},
    shadows: {},
    animation: {},
    breakpoint: {},
    levels: {},
    focus: {},
    buttons: {},
    forms: {},
    components: {},
  };

  const fileMappings = {
    '_typography.ts': 'typography',
    '_size.ts': 'size',
    '_borders.ts': 'borders',
    '_shadows.ts': 'shadows',
    '_animation.ts': 'animation',
    '_breakpoint.ts': 'breakpoint',
    '_levels.ts': 'levels',
    '_focus.ts': 'focus',
    '_buttons.ts': 'buttons',
    '_forms.ts': 'forms',
    '_components.ts': 'components',
  };

  // Load main variable files
  for (const [filename, category] of Object.entries(fileMappings)) {
    const filePath = path.join(themePath, filename);
    const values = extractValuesFromFile(filePath);
    customTokens[category] = values;
  }

  // Load color files
  const colorsDir = path.join(themePath, 'colors');
  if (fs.existsSync(colorsDir)) {
    const colorFiles = fs.readdirSync(colorsDir).filter(f => f.endsWith('.ts'));
    for (const file of colorFiles) {
      const values = extractValuesFromFile(path.join(colorsDir, file));
      Object.assign(customTokens.colors, values);
    }
  }

  return customTokens;
}

/**
 * Map EUI category names to custom theme category keys
 */
function getCategoryMapping(euiCategoryName) {
  const mapping = {
    'Colors': 'colors',
    'Typography': 'typography',
    'Size': 'size',
    'Borders': 'borders',
    'Shadows': 'shadows',
    'Animations': 'animation',
    'Breakpoints': 'breakpoint',
    'Z-Index Levels': 'levels',
    'Focus States': 'focus',
    'Button Colors': 'buttons',
    'Form Colors': 'forms',
    'Component Colors': 'components',
    'Theme Flags': 'flags',
  };
  return mapping[euiCategoryName] || euiCategoryName.toLowerCase();
}

/**
 * Find a matching custom token for an EUI token
 */
function findCustomToken(tokenName, customCategory, allCustomTokens, categoryName) {
  // Direct match in the category
  for (const [key, value] of Object.entries(customCategory)) {
    const keyParts = key.split('.');
    const lastPart = keyParts[keyParts.length - 1];
    if (lastPart === tokenName || key.endsWith(`.${tokenName}`)) {
      return { key, value };
    }
  }

  // Search in nested structures (e.g., typography.scale.m, buttons.DARK.backgroundPrimary)
  for (const [key, value] of Object.entries(customCategory)) {
    if (key.includes(`.${tokenName}`) || key.endsWith(`.${tokenName}`)) {
      return { key, value };
    }
  }

  // For color tokens, search across all color exports
  if (allCustomTokens && allCustomTokens.colors) {
    for (const [key, value] of Object.entries(allCustomTokens.colors)) {
      const keyParts = key.split('.');
      const lastPart = keyParts[keyParts.length - 1];
      if (lastPart === tokenName) {
        return { key, value };
      }
    }
  }

  // For buttons, forms, components - search in their LIGHT/DARK structures
  if (categoryName === 'buttons' || categoryName === 'forms' || categoryName === 'components') {
    // Search all custom tokens that might contain this token
    const searchCategories = [categoryName, 'colors'];
    for (const cat of searchCategories) {
      const catTokens = allCustomTokens[cat] || {};
      for (const [key, value] of Object.entries(catTokens)) {
        // Match patterns like: buttons.DARK.backgroundPrimary, dark_button_colors.backgroundPrimary
        // forms.DARK.background, dark_form_colors.background
        // components.DARK.codeBackground
        const keyParts = key.split('.');
        const lastPart = keyParts[keyParts.length - 1];
        if (lastPart === tokenName) {
          return { key, value };
        }
      }
    }
  }

  return null;
}

/**
 * Extract all theme tokens from eui-theme-common
 */
function extractAllTokens(euiPath, customTokens) {
  const commonPath = path.join(euiPath, 'packages/eui-theme-common/src/global_styling/variables');
  
  const categoryFiles = [
    { file: 'colors.ts', name: 'Colors' },
    { file: 'typography.ts', name: 'Typography' },
    { file: 'size.ts', name: 'Size' },
    { file: 'borders.ts', name: 'Borders' },
    { file: 'shadow.ts', name: 'Shadows' },
    { file: 'animations.ts', name: 'Animations' },
    { file: 'breakpoint.ts', name: 'Breakpoints' },
    { file: 'levels.ts', name: 'Z-Index Levels' },
    { file: 'states.ts', name: 'Focus States' },
    { file: 'buttons.ts', name: 'Button Colors' },
    { file: 'forms.ts', name: 'Form Colors' },
    { file: 'components.ts', name: 'Component Colors' },
    { file: 'flags.ts', name: 'Theme Flags' },
  ];

  const categories = [];
  
  for (const { file, name } of categoryFiles) {
    const filePath = path.join(commonPath, file);
    const category = extractTokensFromFile(filePath, name);
    if (category) {
      const customCategoryKey = getCategoryMapping(name);
      const customCategory = customTokens[customCategoryKey] || {};

      // Enhance each token with implementation status
      category.tokens = category.tokens.map(token => {
        const customMatch = findCustomToken(token.name, customCategory, customTokens, customCategoryKey);
        return {
          ...token,
          implemented: !!customMatch,
          customKey: customMatch?.key || null,
          customValue: customMatch?.value || null,
        };
      });

      // Calculate implementation stats
      const implemented = category.tokens.filter(t => t.implemented && !t.deprecated).length;
      const active = category.tokens.filter(t => !t.deprecated).length;
      category.implementedCount = implemented;
      category.activeCount = active;
      category.implementationPercent = active > 0 ? Math.round((implemented / active) * 100) : 0;

      categories.push(category);
    }
  }

  const totalTokens = categories.reduce((sum, cat) => sum + cat.tokens.length, 0);
  const deprecatedTokens = categories.reduce(
    (sum, cat) => sum + cat.tokens.filter(t => t.deprecated).length, 
    0
  );
  const implementedTokens = categories.reduce(
    (sum, cat) => sum + cat.tokens.filter(t => t.implemented && !t.deprecated).length,
    0
  );
  const activeTokens = totalTokens - deprecatedTokens;

  return {
    version: '1.0.0',
    extractedAt: new Date().toISOString(),
    categories,
    summary: {
      totalCategories: categories.length,
      totalTokens,
      activeTokens,
      deprecatedTokens,
      implementedTokens,
      implementationPercent: activeTokens > 0 ? Math.round((implementedTokens / activeTokens) * 100) : 0,
    },
  };
}

/**
 * Generate markdown checklist with implementation status
 */
function generateMarkdown(tokens) {
  const statusEmoji = (implemented, deprecated) => {
    if (deprecated) return '⚠️';
    return implemented ? '✅' : '⬜';
  };

  const lines = [
    '# EUI Theme Tokens - Implementation Status',
    '',
    `> Auto-generated on ${new Date().toLocaleDateString()}`,
    '',
    '## Summary',
    '',
    `| Metric | Count |`,
    `|--------|-------|`,
    `| **Total Categories** | ${tokens.summary.totalCategories} |`,
    `| **Total Tokens** | ${tokens.summary.totalTokens} |`,
    `| **Active Tokens** | ${tokens.summary.activeTokens} |`,
    `| **Deprecated Tokens** | ${tokens.summary.deprecatedTokens} |`,
    `| **Implemented** | ${tokens.summary.implementedTokens}/${tokens.summary.activeTokens} (${tokens.summary.implementationPercent}%) |`,
    '',
    '## Progress by Category',
    '',
    '| Category | Progress | Implemented |',
    '|----------|----------|-------------|',
  ];

  for (const category of tokens.categories) {
    const bar = '█'.repeat(Math.floor(category.implementationPercent / 10)) + 
                '░'.repeat(10 - Math.floor(category.implementationPercent / 10));
    lines.push(`| ${category.name} | ${bar} ${category.implementationPercent}% | ${category.implementedCount}/${category.activeCount} |`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');

  for (const category of tokens.categories) {
    lines.push(`## ${category.name}`);
    lines.push('');
    lines.push(`Source: \`${category.file}\` | Progress: **${category.implementationPercent}%** (${category.implementedCount}/${category.activeCount})`);
    lines.push('');
    
    const active = category.tokens.filter(t => !t.deprecated);
    const deprecated = category.tokens.filter(t => t.deprecated);
    
    if (active.length > 0) {
      // Split into implemented and pending
      const implemented = active.filter(t => t.implemented);
      const pending = active.filter(t => !t.implemented);

      if (implemented.length > 0) {
        lines.push('### ✅ Implemented');
        lines.push('');
        lines.push('| Token | Type | Custom Value |');
        lines.push('|-------|------|--------------|');
        for (const token of implemented) {
          const displayValue = token.customValue 
            ? (typeof token.customValue === 'string' ? `\`${token.customValue.substring(0, 40)}\`` : `\`${token.customValue}\``)
            : '-';
          lines.push(`| \`${token.name}\` | \`${token.type}\` | ${displayValue} |`);
        }
        lines.push('');
      }

      if (pending.length > 0) {
        lines.push('### ⬜ Pending');
        lines.push('');
        lines.push('| Token | Type | Color Mode |');
        lines.push('|-------|------|------------|');
        for (const token of pending) {
          const colorMode = token.hasColorModeSwitch ? 'LIGHT/DARK' : '-';
          lines.push(`| \`${token.name}\` | \`${token.type}\` | ${colorMode} |`);
        }
        lines.push('');
      }
    }
    
    if (deprecated.length > 0) {
      lines.push('<details>');
      lines.push(`<summary>⚠️ Deprecated Tokens (${deprecated.length})</summary>`);
      lines.push('');
      lines.push('| Token | Note |');
      lines.push('|-------|------|');
      for (const token of deprecated) {
        const desc = token.description || 'See documentation';
        lines.push(`| \`${token.name}\` | ${desc.substring(0, 60)} |`);
      }
      lines.push('');
      lines.push('</details>');
      lines.push('');
    }
  }

  // Quick reference section
  lines.push('---');
  lines.push('');
  lines.push('## Quick Reference: Required Theme Shape');
  lines.push('');
  lines.push('```typescript');
  lines.push('import { EuiThemeShape } from "@elastic/eui-theme-common";');
  lines.push('');
  lines.push('const myTheme: EuiThemeShape = {');
  lines.push('  colors: { LIGHT: {...}, DARK: {...}, ghost: "...", ink: "...", ... },');
  lines.push('  base: 16,');
  lines.push('  size: { xxs: "...", xs: "...", s: "...", m: "...", ... },');
  lines.push('  font: { family: "...", scale: {...}, weight: {...}, ... },');
  lines.push('  border: { color: "...", width: {...}, radius: {...}, ... },');
  lines.push('  focus: { color: "...", ... },');
  lines.push('  animation: { extraFast: "...", fast: "...", ... },');
  lines.push('  breakpoint: { xs: 0, s: 575, m: 768, ... },');
  lines.push('  levels: { content: 0, header: 1000, ... },');
  lines.push('  shadows: { euiShadowXSmall: "...", ... },');
  lines.push('  components: { buttons: {...}, forms: {...}, LIGHT: {...}, DARK: {...} },');
  lines.push('  flags: { ... },');
  lines.push('};');
  lines.push('```');
  lines.push('');

  return lines.join('\n');
}

// Main execution
const euiPath = process.argv[2] || DEFAULT_EUI_PATH;

console.log(`Extracting tokens from: ${euiPath}`);
console.log(`Comparing with custom theme at: ${CUSTOM_THEME_PATH}`);
console.log('');

// Load custom theme
console.log('Loading custom theme...');
const customTokens = loadCustomTheme(CUSTOM_THEME_PATH);
const customTokenCount = Object.values(customTokens).reduce((sum, cat) => sum + Object.keys(cat).length, 0);
console.log(`  Found ${customTokenCount} custom token values`);

// Extract and compare
console.log('Extracting EUI tokens...');
const tokens = extractAllTokens(euiPath, customTokens);

// Write JSON
const jsonPath = path.join(OUTPUT_DIR, 'tokens.json');
fs.writeFileSync(jsonPath, JSON.stringify(tokens, null, 2));
console.log(`Written: ${jsonPath}`);

// Write Markdown
const mdPath = path.join(OUTPUT_DIR, 'TOKENS.md');
fs.writeFileSync(mdPath, generateMarkdown(tokens));
console.log(`Written: ${mdPath}`);

console.log('\n📊 Summary:');
console.log(`  Categories: ${tokens.summary.totalCategories}`);
console.log(`  Total Tokens: ${tokens.summary.totalTokens}`);
console.log(`  Active Tokens: ${tokens.summary.activeTokens}`);
console.log(`  Deprecated: ${tokens.summary.deprecatedTokens}`);
console.log(`  ✅ Implemented: ${tokens.summary.implementedTokens}/${tokens.summary.activeTokens} (${tokens.summary.implementationPercent}%)`);

// Show per-category breakdown
console.log('\n📁 By Category:');
for (const cat of tokens.categories) {
  const bar = '█'.repeat(Math.floor(cat.implementationPercent / 10)) + 
              '░'.repeat(10 - Math.floor(cat.implementationPercent / 10));
  console.log(`  ${cat.name.padEnd(20)} ${bar} ${cat.implementationPercent.toString().padStart(3)}% (${cat.implementedCount}/${cat.activeCount})`);
}
