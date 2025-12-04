#!/usr/bin/env node
/**
 * Theme Token Extractor
 * 
 * Extracts all theme tokens from @elastic/eui-theme-common TypeScript definitions
 * and generates a checklist for implementing a complete EUI theme.
 * 
 * Usage:
 *   node scripts/extract-theme-tokens.js [eui-repo-path]
 * 
 * Output:
 *   - TOKENS.md - A markdown checklist of all tokens to implement
 *   - tokens.json - Structured JSON of all token categories and their types
 */

const fs = require('fs');
const path = require('path');

// Default paths - adjust if needed
const DEFAULT_EUI_PATH = '/home/marius/projects/eui';
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

  // Match property definitions in type/interface blocks
  // Handles: propertyName: Type; and propertyName?: Type;
  const lines = content.split('\n');
  let currentComment = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Collect JSDoc comments
    if (line.trim().startsWith('/**') || line.trim().startsWith('*')) {
      currentComment += line + '\n';
      continue;
    }
    
    // Match property: Type pattern
    const propMatch = line.match(/^\s*(\w+)\s*\??\s*:\s*([^;]+);/);
    if (propMatch) {
      const [, name, type] = propMatch;
      
      // Skip internal/meta properties
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
 * Extract all theme tokens from eui-theme-common
 */
function extractAllTokens(euiPath) {
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
      categories.push(category);
    }
  }

  const totalTokens = categories.reduce((sum, cat) => sum + cat.tokens.length, 0);
  const deprecatedTokens = categories.reduce(
    (sum, cat) => sum + cat.tokens.filter(t => t.deprecated).length, 
    0
  );

  return {
    version: '1.0.0',
    extractedAt: new Date().toISOString(),
    categories,
    summary: {
      totalCategories: categories.length,
      totalTokens,
      deprecatedTokens,
    },
  };
}

/**
 * Generate markdown checklist
 */
function generateMarkdown(tokens) {
  const lines = [
    '# EUI Theme Tokens Reference',
    '',
    `> Auto-generated on ${new Date().toLocaleDateString()}`,
    '',
    '## Summary',
    '',
    `- **Total Categories**: ${tokens.summary.totalCategories}`,
    `- **Total Tokens**: ${tokens.summary.totalTokens}`,
    `- **Deprecated Tokens**: ${tokens.summary.deprecatedTokens}`,
    '',
    '## Implementation Status',
    '',
    'Use this checklist to track theme implementation progress.',
    '',
  ];

  for (const category of tokens.categories) {
    lines.push(`### ${category.name}`);
    lines.push('');
    lines.push(`Source: \`${category.file}\``);
    lines.push('');
    
    // Group by deprecated vs active
    const active = category.tokens.filter(t => !t.deprecated);
    const deprecated = category.tokens.filter(t => t.deprecated);
    
    if (active.length > 0) {
      lines.push('#### Active Tokens');
      lines.push('');
      lines.push('| Status | Token | Type | Color Mode |');
      lines.push('|--------|-------|------|------------|');
      for (const token of active) {
        const colorMode = token.hasColorModeSwitch ? '✓ LIGHT/DARK' : '-';
        lines.push(`| [ ] | \`${token.name}\` | \`${token.type}\` | ${colorMode} |`);
      }
      lines.push('');
    }
    
    if (deprecated.length > 0) {
      lines.push('<details>');
      lines.push(`<summary>Deprecated Tokens (${deprecated.length})</summary>`);
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

  // Add quick reference section
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

const tokens = extractAllTokens(euiPath);

// Write JSON
const jsonPath = path.join(OUTPUT_DIR, 'tokens.json');
fs.writeFileSync(jsonPath, JSON.stringify(tokens, null, 2));
console.log(`Written: ${jsonPath}`);

// Write Markdown
const mdPath = path.join(OUTPUT_DIR, 'TOKENS.md');
fs.writeFileSync(mdPath, generateMarkdown(tokens));
console.log(`Written: ${mdPath}`);

console.log('\nSummary:');
console.log(`  Categories: ${tokens.summary.totalCategories}`);
console.log(`  Total Tokens: ${tokens.summary.totalTokens}`);
console.log(`  Deprecated: ${tokens.summary.deprecatedTokens}`);

