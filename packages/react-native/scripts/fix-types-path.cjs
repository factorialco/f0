#!/usr/bin/env node

/**
 * Script to fix TypeScript declaration file paths after build
 *
 * react-native-builder-bob may preserve the src/ directory structure,
 * generating types in lib/typescript/src/ instead of lib/typescript/
 * This script ensures types are at the correct location regardless of where bob generates them.
 */

const fs = require("fs");
const path = require("path");

const TYPESCRIPT_OUTPUT = path.join(__dirname, "..", "lib", "typescript");
const SRC_TYPES_DIR = path.join(TYPESCRIPT_OUTPUT, "src");
const EXPECTED_INDEX = path.join(TYPESCRIPT_OUTPUT, "index.d.ts");

function fixTypesPath() {
  // Check if types are already at the correct location
  if (fs.existsSync(EXPECTED_INDEX)) {
    // Types are already at the root, but check if src/ also exists (shouldn't happen, but be safe)
    if (fs.existsSync(SRC_TYPES_DIR)) {
      console.log(
        "⚠ Both lib/typescript/index.d.ts and lib/typescript/src/ exist. Cleaning up src/...",
      );
      try {
        fs.rmSync(SRC_TYPES_DIR, { recursive: true, force: true });
        console.log("✅ Removed duplicate src/ directory");
      } catch (error) {
        console.warn("⚠ Could not remove src/ directory:", error.message);
      }
    } else {
      console.log("ℹ Types are already at the correct location (lib/typescript/index.d.ts)");
    }
    return;
  }

  // Check if src/ directory exists in typescript output
  if (!fs.existsSync(SRC_TYPES_DIR)) {
    console.log(
      "⚠ No types found at lib/typescript/index.d.ts or lib/typescript/src/. Build may have failed.",
    );
    return;
  }

  console.log(
    "🔄 Moving TypeScript declarations from lib/typescript/src/ to lib/typescript/...",
  );

  // Move all files from src/ to parent directory
  const files = fs.readdirSync(SRC_TYPES_DIR);

  files.forEach((file) => {
    const srcPath = path.join(SRC_TYPES_DIR, file);
    const destPath = path.join(TYPESCRIPT_OUTPUT, file);

    // If destination exists and is a directory, merge it
    if (fs.existsSync(destPath) && fs.statSync(destPath).isDirectory()) {
      // Merge directory contents
      const subFiles = fs.readdirSync(srcPath);
      subFiles.forEach((subFile) => {
        const subSrcPath = path.join(srcPath, subFile);
        const subDestPath = path.join(destPath, subFile);
        if (fs.existsSync(subDestPath)) {
          fs.rmSync(subDestPath, { recursive: true, force: true });
        }
        fs.renameSync(subSrcPath, subDestPath);
      });
      try {
        fs.rmdirSync(srcPath);
      } catch (error) {
        // Directory might not be empty
      }
    } else {
      // Remove destination if exists
      if (fs.existsSync(destPath)) {
        fs.rmSync(destPath, { recursive: true, force: true });
      }
      // Move file/directory
      fs.renameSync(srcPath, destPath);
    }
  });

  // Remove empty src/ directory
  try {
    fs.rmSync(SRC_TYPES_DIR, { recursive: true, force: true });
  } catch (error) {
    // Directory might not be empty if there are nested directories
    console.warn("⚠ Could not remove src/ directory:", error.message);
  }

  // Verify the fix worked
  if (fs.existsSync(EXPECTED_INDEX)) {
    console.log("✅ Fixed TypeScript declaration paths");
  } else {
    console.error(
      "❌ Failed to fix TypeScript declaration paths. index.d.ts not found at expected location.",
    );
    process.exit(1);
  }
}

fixTypesPath();
