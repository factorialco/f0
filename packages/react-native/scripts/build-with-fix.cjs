#!/usr/bin/env node

/**
 * Wrapper script to build with react-native-builder-bob and fix type paths
 * 
 * Strategy: 
 * 1. Execute bob build --target typescript first to generate types
 * 2. Move types from src/ to root if needed
 * 3. Update package.json paths
 * 4. Execute full bob build (which will now validate correctly)
 */

const { execSync, spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const packageJsonPath = path.join(rootDir, "package.json");
const TYPESCRIPT_OUTPUT = path.join(rootDir, "lib", "typescript");
const SRC_TYPES_DIR = path.join(TYPESCRIPT_OUTPUT, "src");
const EXPECTED_INDEX = path.join(TYPESCRIPT_OUTPUT, "index.d.ts");

// Read current package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
const originalTypesPath = packageJson.types;
const originalExportsTypes = {
  import: packageJson.exports?.["."]?.import?.types,
  require: packageJson.exports?.["."]?.require?.types,
};

// Check if we should skip type validation (for development/debugging)
const SKIP_TYPE_VALIDATION = process.env.SKIP_TYPE_VALIDATION === "true" || process.argv.includes("--skip-type-validation");

console.log("🔨 Building with react-native-builder-bob...\n");

// Function to restore package.json
function restorePackageJson() {
  packageJson.types = originalTypesPath;
  if (packageJson.exports?.["."]?.import) {
    packageJson.exports["."].import.types = originalExportsTypes.import;
  }
  if (packageJson.exports?.["."]?.require) {
    packageJson.exports["."].require.types = originalExportsTypes.require;
  }
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
}

// Function to move types from src/ to root
function moveTypesFromSrc() {
  if (!fs.existsSync(SRC_TYPES_DIR)) {
    return false;
  }

  console.log("🔄 Moving TypeScript declarations from lib/typescript/src/ to lib/typescript/...");
  
  const files = fs.readdirSync(SRC_TYPES_DIR);
  
  files.forEach((file) => {
    const srcPath = path.join(SRC_TYPES_DIR, file);
    const destPath = path.join(TYPESCRIPT_OUTPUT, file);
    
    // Remove destination if exists
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true, force: true });
    }
    
    // Move file/directory
    try {
      fs.renameSync(srcPath, destPath);
    } catch (error) {
      console.warn(`⚠ Could not move ${file}:`, error.message);
    }
  });
  
  // Remove empty src/ directory
  try {
    fs.rmSync(SRC_TYPES_DIR, { recursive: true, force: true });
  } catch (error) {
    console.warn("⚠ Could not remove src/ directory:", error.message);
  }
  
  console.log("✅ Moved TypeScript declarations to correct location");
  return true;
}

try {
  // Step 1: Check if types already exist at the correct location
  // If they do, we can skip the temporary path configuration
  const typesAlreadyExist = fs.existsSync(EXPECTED_INDEX);
  
  if (!typesAlreadyExist) {
    // Step 1: Point package.json to where bob might generate types (src/) temporarily
    console.log("📝 Step 1: Configuring package.json paths temporarily...");
    const tempTypesPath = "./lib/typescript/src/index.d.ts";
    packageJson.types = tempTypesPath;
    if (packageJson.exports?.["."]?.import) {
      packageJson.exports["."].import.types = tempTypesPath;
    }
    if (packageJson.exports?.["."]?.require) {
      packageJson.exports["."].require.types = tempTypesPath;
    }
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  } else {
    console.log("📝 Step 1: Types already exist, skipping temporary path configuration...");
  }

  // Step 2: Run bob build --target typescript first (this will generate types but may fail validation)
  console.log("🔨 Step 2: Generating TypeScript declarations...");
  let typesGenerated = false;
  try {
    // Use spawnSync to show output while capturing exit code
    const result = spawnSync("npx", ["react-native-builder-bob", "build", "--target", "typescript"], {
      cwd: rootDir,
      stdio: "inherit",
      shell: true,
    });
    
    if (result.status === 0) {
      typesGenerated = true;
    } else {
      // Check if types were generated despite the error
      const typesExist = fs.existsSync(SRC_TYPES_DIR) || fs.existsSync(EXPECTED_INDEX);
      if (typesExist) {
        console.warn("\n⚠ Build exited with error, but types were generated. Continuing...\n");
        typesGenerated = true;
      } else {
        throw new Error(`Build failed with exit code ${result.status}`);
      }
    }
  } catch (error) {
    // Check if types were generated (bob generates types before validation)
    const typesExist = fs.existsSync(SRC_TYPES_DIR) || fs.existsSync(EXPECTED_INDEX);
    
    if (typesExist) {
      console.warn("\n⚠ Build reported errors, but types exist. Continuing...\n");
      typesGenerated = true;
    } else {
      // Real error, restore and throw
      console.error("❌ Build failed and no types were generated");
      restorePackageJson();
      throw error;
    }
  }

  // Step 3: Move types from src/ to root if needed
  console.log("\n🔧 Step 3: Fixing type file locations...");
  
  // Check where types were actually generated
  const typesInRoot = fs.existsSync(EXPECTED_INDEX);
  const typesInSrc = fs.existsSync(path.join(SRC_TYPES_DIR, "index.d.ts"));
  
  if (typesInRoot) {
    console.log("✅ Types are already at the correct location (lib/typescript/index.d.ts)");
    // Clean up src/ if it exists (might be empty or have duplicates)
    if (fs.existsSync(SRC_TYPES_DIR)) {
      console.log("🧹 Cleaning up duplicate src/ directory...");
      try {
        fs.rmSync(SRC_TYPES_DIR, { recursive: true, force: true });
        console.log("✅ Removed duplicate src/ directory");
      } catch (error) {
        console.warn("⚠ Could not remove src/ directory:", error.message);
      }
    }
  } else if (typesInSrc) {
    // Types were generated in src/, need to move them
    console.log("🔄 Types found in lib/typescript/src/, moving to root...");
    const moved = moveTypesFromSrc();
    if (!moved) {
      if (SKIP_TYPE_VALIDATION) {
        console.warn("⚠ Could not move types, but continuing due to SKIP_TYPE_VALIDATION");
      } else {
        restorePackageJson();
        throw new Error("Failed to move types from src/ to root");
      }
    }
  } else {
    // No types found at all
    if (SKIP_TYPE_VALIDATION) {
      console.warn("⚠ No types found, but continuing due to SKIP_TYPE_VALIDATION");
    } else {
      restorePackageJson();
      throw new Error("Types not found at expected location after build");
    }
  }

  // Step 4: Update package.json to point to final location
  console.log("\n📝 Step 4: Updating package.json to final paths...");
  packageJson.types = "./lib/typescript/index.d.ts";
  if (packageJson.exports?.["."]?.import) {
    packageJson.exports["."].import.types = "./lib/typescript/index.d.ts";
  }
  if (packageJson.exports?.["."]?.require) {
    packageJson.exports["."].require.types = "./lib/typescript/index.d.ts";
  }
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

  // Step 5: Verify types exist before running full build
  if (!fs.existsSync(EXPECTED_INDEX)) {
    if (SKIP_TYPE_VALIDATION) {
      console.warn("\n⚠ Types not found, but continuing due to SKIP_TYPE_VALIDATION");
    } else {
      restorePackageJson();
      throw new Error("Types not found at expected location after moving");
    }
  }

  // Step 6: Run full bob build (now paths are correct, validation should pass)
  console.log("\n🔨 Step 5: Running full build...");
  execSync("npx react-native-builder-bob build", {
    cwd: rootDir,
    stdio: "inherit",
  });

  // Step 7: Final verification
  if (fs.existsSync(EXPECTED_INDEX)) {
    console.log("\n✅ Build completed successfully!");
    console.log("   Types are at: lib/typescript/index.d.ts");
  } else {
    restorePackageJson();
    throw new Error("Types not found at expected location after full build");
  }
} catch (error) {
  // Restore original paths on error
  console.error("\n❌ Build failed, restoring package.json...");
  restorePackageJson();
  
  console.error("Error:", error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
}
