#!/usr/bin/env node

/**
 * Script to switch package.json main field between development and build modes
 * 
 * Usage:
 *   node scripts/set-main.cjs dev    - Set main to expo-router/entry (development)
 *   node scripts/set-main.cjs build  - Set main to ./lib/module/index.js (build)
 */

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const mode = process.argv[2];

if (mode === 'dev') {
  // Development mode: use expo-router entry
  packageJson.main = 'expo-router/entry';
  console.log('✅ Set main to "expo-router/entry" (development mode)');
} else if (mode === 'build') {
  // Build mode: use compiled output
  packageJson.main = './lib/module/index.js';
  console.log('✅ Set main to "./lib/module/index.js" (build mode)');
} else {
  console.error('❌ Invalid mode. Use "dev" or "build"');
  console.error('Usage: node scripts/set-main.cjs [dev|build]');
  process.exit(1);
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
