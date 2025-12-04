#!/bin/bash
# Release script for eui-theme-hacker
# Usage: ./scripts/release.sh [patch|minor|major]

set -e

BUMP_TYPE=${1:-patch}
PACKAGE_DIR="packages/eui-theme-hacker"

echo "Starting release process..."

# Navigate to package directory
cd "$PACKAGE_DIR"

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"

# Bump version
npm version $BUMP_TYPE --no-git-tag-version
NEW_VERSION=$(node -p "require('./package.json').version")
echo "New version: $NEW_VERSION"

# Clean and build
echo "Building..."
yarn build

# Create tarball (for preview)
echo "Packing..."
npm pack

# Get tarball name
TARBALL="p1llus-eui-theme-hacker-${NEW_VERSION}.tgz"

# Show results
echo ""
echo "Release ready!"
echo ""
echo "Tarball: $PACKAGE_DIR/$TARBALL"
echo "Size: $(du -h $TARBALL | cut -f1)"
echo ""
echo "Next steps:"
echo "1. git add -A && git commit -m 'Release v$NEW_VERSION'"
echo "2. git tag v$NEW_VERSION"
echo "3. git push && git push --tags"
echo "4. Publish to npm: cd $PACKAGE_DIR && npm publish"
echo ""
echo "Users can install with:"
echo "npm install @p1llus/eui-theme-hacker"

