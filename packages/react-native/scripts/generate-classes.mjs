#!/usr/bin/env node

/**
 * Script to extract all Tailwind classes from tv() calls and className strings
 * Generates src/styles/classes.css with @source inline() for Tailwind CSS v4
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SRC_DIR = join(__dirname, "..", "src");
const OUTPUT_FILE_CSS = join(__dirname, "..", "src", "styles", "classes.css");

/**
 * Extract classes from a string (handles space-separated classes)
 */
function extractClassesFromString(str) {
  if (!str || typeof str !== "string") return [];

  // Split by whitespace and filter empty strings
  return str
    .trim()
    .split(/\s+/)
    .filter((cls) => cls.length > 0);
}

/**
 * Validate if a string looks like a valid Tailwind class
 */
function isValidTailwindClass(cls) {
  // Must not contain JS operators or special chars that indicate expressions
  // But allow:
  // - Brackets for arbitrary values like p-[3px]
  // - Colons for state variants like hover:bg-f1-background-hover, focus-visible:outline
  // - Slashes for opacity modifiers like text-f1-foreground-inverse/90
  // - Selectors like [&_svg]:text-f1-icon-secondary, *:flex-1
  const hasBrackets = cls.match(/^[a-z]+-\[/);
  const hasStateVariant = cls.match(/^(hover|focus|focus-visible|active|disabled|group-hover|group-focus|dark|light):/);
  const hasOpacityModifier = cls.match(/\/\d+$/);
  const hasSelector = cls.match(/^(\*|\[&[^\]]+\]):/); // *:flex-1 or [&_svg]:text-f1-icon-secondary
  
  if (cls.match(/[${}()=<>!&|?]/) && !hasBrackets && !hasStateVariant && !hasOpacityModifier && !hasSelector) {
    return false;
  }

  // Must not start with uppercase (likely a variable or component name)
  if (cls.match(/^[A-Z]/)) {
    return false;
  }

  // Remove state variant prefix for validation (e.g., "hover:bg-red" -> "bg-red")
  // Also remove selector prefixes like *: or [&_svg]:
  const classWithoutSelector = cls.replace(/^(\*|\[&[^\]]+\]):/, "");
  const classWithoutVariant = classWithoutSelector.replace(/^(hover|focus|focus-visible|active|disabled|group-hover|group-focus|dark|light):/, "");
  const classWithoutOpacity = classWithoutVariant.replace(/\/\d+$/, "");

  // Must be a valid Tailwind class pattern:
  // - Contains a dash (most Tailwind classes have dashes)
  // - Or is a common utility without dash (flex, items, justify, etc.)
  // - Or matches pattern like px-2.5 (with decimal)
  // - Or matches arbitrary values like p-[3px], w-[14px]
  return (
    classWithoutOpacity.includes("-") ||
    /^[a-z]+-[a-z0-9.]/.test(classWithoutOpacity) || // e.g., px-2.5, py-1.5
    /^[a-z]+-\[/.test(classWithoutOpacity) || // e.g., p-[3px], w-[14px]
    [
      "flex",
      "items",
      "justify",
      "text",
      "bg",
      "border",
      "rounded",
      "p",
      "m",
      "w",
      "h",
      "gap",
      "opacity",
      "aspect",
      "shrink",
      "grow",
      "sr-only",
      "whitespace",
      "line-clamp",
      "tabular",
      "uppercase",
      "font",
      "leading",
      "cursor",
      "overflow",
      "relative",
      "absolute",
      "z-",
      "inset",
      "top",
      "right",
      "bottom",
      "left",
      "min-w",
      "max-w",
      "drop-shadow",
      "stroke",
      "self-",
      "inline-",
      "no-underline",
      "outline",
      "transition",
      "group",
      "text-inherit",
    ].some((prefix) => classWithoutOpacity.startsWith(prefix)) ||
    hasStateVariant !== null || // Accept any class with valid state variant prefix
    hasSelector !== null || // Accept any class with valid selector prefix (*:, [&_svg]:, etc.)
    classWithoutOpacity === "outline" || // Accept standalone outline
    classWithoutOpacity.match(/^outline-\d+$/) // Accept outline-2, outline-4, etc.
  );
}

/**
 * Extract classes from tv() call using regex parsing
 */
function extractClassesFromTVCall(content) {
  const classes = new Set();

  // Match tv({ ... }) calls - handle multiline with [\s\S]
  const tvCallRegex = /tv\s*\(\s*\{([\s\S]*?)\}\s*\)/g;
  let match;

  while ((match = tvCallRegex.exec(content)) !== null) {
    const tvContent = match[1];

    // Extract base classes
    const baseMatch = tvContent.match(/base\s*:\s*["']([^"']+)["']/);
    if (baseMatch) {
      extractClassesFromString(baseMatch[1]).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }

    // Extract variant classes - handle nested objects
    const variantsMatch = tvContent.match(
      /variants\s*:\s*\{([\s\S]*?)\}(?=\s*(?:,|defaultVariants|$))/,
    );
    if (variantsMatch) {
      const variantsContent = variantsMatch[1];

      // Extract all string literals from variants (handles nested structure)
      // Match string literals that are values (not keys) in object properties
      const stringLiteralRegex = /:\s*["']([^"']+)["']/g;
      let stringMatch;
      while (
        (stringMatch = stringLiteralRegex.exec(variantsContent)) !== null
      ) {
        const classString = stringMatch[1];
        // Only add if it looks like Tailwind classes (contains common patterns)
        if (
          classString &&
          classString.length > 0 &&
          !classString.match(
            /^(default|true|false|sm|md|lg|xl|xs|primary|secondary|tertiary|ghost|danger|outline|neutral|promote|selected|base|rounded)$/,
          )
        ) {
          extractClassesFromString(classString).forEach((cls) => {
            if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
              classes.add(cls);
            }
          });
        }
      }
    }

    // Extract slots if present
    const slotsMatch = tvContent.match(
      /slots\s*:\s*\{([\s\S]*?)\}(?=\s*(?:,|variants|defaultVariants|$))/,
    );
    if (slotsMatch) {
      const slotsContent = slotsMatch[1];
      const stringLiteralRegex = /["']([^"']+)["']/g;
      let stringMatch;
      while ((stringMatch = stringLiteralRegex.exec(slotsContent)) !== null) {
        const classString = stringMatch[1];
        if (
          classString &&
          (classString.includes("-") ||
            classString.includes(" ") ||
            /^[a-z]/.test(classString))
        ) {
          extractClassesFromString(classString).forEach((cls) => {
            if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
              classes.add(cls);
            }
          });
        }
      }
    }
  }

  return classes;
}

/**
 * Extract classes from cn() calls
 * Handles patterns like:
 * - cn("class1 class2")
 * - cn("class1", condition && "class2")
 * - cn("class1", selected && "class2 class3")
 */
function extractClassesFromCnCall(content) {
  const classes = new Set();

  // Match cn(...) calls - handle nested parentheses and multiline
  // This regex finds cn( and matches balanced parentheses
  const cnCallRegex = /cn\s*\(/g;
  let match;

  while ((match = cnCallRegex.exec(content)) !== null) {
    const startPos = match.index + match[0].length;
    let depth = 1;
    let pos = startPos;
    let inString = false;
    let stringChar = null;
    let cnContent = "";

    // Extract the full cn() call content by matching balanced parentheses
    while (pos < content.length && depth > 0) {
      const char = content[pos];
      const prevChar = pos > 0 ? content[pos - 1] : "";

      // Handle string literals
      if (!inString && (char === '"' || char === "'" || char === "`")) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar && prevChar !== "\\") {
        inString = false;
        stringChar = null;
      }

      if (!inString) {
        if (char === "(") depth++;
        if (char === ")") depth--;
      }

      if (depth > 0) {
        cnContent += char;
      }
      pos++;
    }

    // Extract string literals from cn() arguments
    // Match: "string" or 'string' or `string` (but skip template literals with ${})
    const stringLiteralRegex = /(["'])((?:\\\1|(?!\1).)*?)\1/g;
    let stringMatch;

    while ((stringMatch = stringLiteralRegex.exec(cnContent)) !== null) {
      const classString = stringMatch[2];
      // Skip template literals with expressions
      if (stringMatch[1] === "`" && classString.includes("${")) {
        continue;
      }

      // Extract classes from the string
      extractClassesFromString(classString).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }

    // Also handle conditional expressions like: condition && "class"
    // Match patterns like: something && "class1 class2"
    const conditionalRegex = /&&\s*["']([^"']+)["']/g;
    let condMatch;
    while ((condMatch = conditionalRegex.exec(cnContent)) !== null) {
      extractClassesFromString(condMatch[1]).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
  }

  return classes;
}

/**
 * Extract classes from className strings in JSX/TSX
 * Handles:
 * - className="class1 class2"
 * - className={`base ${condition ? "class" : ""}`}
 * - className={condition ? "class1" : "class2"}
 * - className={{ info: "class" }[level]}
 */
function extractClassesFromClassName(content) {
  const classes = new Set();

  // Match className="..." or className={'...'} (simple strings only)
  const classNameRegex = /className\s*=\s*["']([^"'`]+)["']/g;
  let match;

  while ((match = classNameRegex.exec(content)) !== null) {
    extractClassesFromString(match[1]).forEach((cls) => {
      if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
        classes.add(cls);
      }
    });
  }

  // Match simple template literals without expressions: className={`static classes`}
  const classNameTemplateRegex = /className\s*=\s*{`([^`$]+)`}/g;
  while ((match = classNameTemplateRegex.exec(content)) !== null) {
    // Only process if no ${} expressions
    if (!match[1].includes("${")) {
      extractClassesFromString(match[1]).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
  }

  // Match template literals with expressions: className={`base ${condition ? "class1" : "class2"}`}
  const classNameTemplateWithExprRegex = /className\s*=\s*{`([^`]*)`}/g;
  while ((match = classNameTemplateWithExprRegex.exec(content)) !== null) {
    const templateContent = match[1];
    
    // Extract static classes from template (parts before ${})
    const staticParts = templateContent.split(/\$\{/);
    staticParts.forEach((part, index) => {
      if (index === 0) {
        // First part is before any ${} expressions
        extractClassesFromString(part.trim()).forEach((cls) => {
          if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
            classes.add(cls);
          }
        });
      } else {
        // Parts after ${} - extract classes from expressions
        // Extract ALL string literals from this part (including those in ternary expressions)
        // This will catch: condition ? "class1" : "class2" and other patterns
        const stringLiteralRegex = /["']([^"']+)["']/g;
        let stringMatch;
        while ((stringMatch = stringLiteralRegex.exec(part)) !== null) {
          const classString = stringMatch[1];
          // Skip empty strings
          if (classString.trim().length > 0) {
            extractClassesFromString(classString).forEach((cls) => {
              if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
                classes.add(cls);
              }
            });
          }
        }
        
        // Also extract string literals that appear after the expression closes
        // Match content after } that might contain classes
        const afterExpr = part.split(/}/)[1];
        if (afterExpr) {
          extractClassesFromString(afterExpr.trim()).forEach((cls) => {
            if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
              classes.add(cls);
            }
          });
        }
      }
    });
  }

  // Match ternary expressions directly in className: className={condition ? "class1" : "class2"}
  const ternaryClassNameRegex = /className\s*=\s*\{([^}]*)\?\s*["']([^"']+)["']\s*:\s*["']([^"']+)["']/g;
  while ((match = ternaryClassNameRegex.exec(content)) !== null) {
    extractClassesFromString(match[2]).forEach((cls) => {
      if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
        classes.add(cls);
      }
    });
    extractClassesFromString(match[3]).forEach((cls) => {
      if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
        classes.add(cls);
      }
    });
  }

  // Match object property access patterns: { info: "class" }[level]
  // Extract string values from object literals used in className
  const objectPatternRegex = /\{([^}]*)\}\s*\[/g;
  while ((match = objectPatternRegex.exec(content)) !== null) {
    const objectContent = match[1];
    // Extract string values from object properties
    const propValueRegex = /:\s*["']([^"']+)["']/g;
    let propMatch;
    while ((propMatch = propValueRegex.exec(objectContent)) !== null) {
      extractClassesFromString(propMatch[1]).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
  }

  return classes;
}

/**
 * Extract classes from return statements and function bodies
 * Handles:
 * - return "class1 class2";
 * - case "variant": return "class";
 * - return condition ? "class1" : "class2";
 * - Objects with class values: { color: "text-f1-foreground-accent" }
 */
function extractClassesFromReturnStatements(content) {
  const classes = new Set();

  // Extract return statements with string literals
  // Match: return "class1 class2";
  const returnRegex = /return\s+["']([^"']+)["']/g;
  let match;
  while ((match = returnRegex.exec(content)) !== null) {
    extractClassesFromString(match[1]).forEach((cls) => {
      if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
        classes.add(cls);
      }
    });
  }

  // Extract ternary expressions in return statements
  // Match: return condition ? "class1" : "class2";
  const returnTernaryRegex = /return\s+[^?]*\?\s*["']([^"']+)["']\s*:\s*["']([^"']+)["']/g;
  while ((match = returnTernaryRegex.exec(content)) !== null) {
    extractClassesFromString(match[1]).forEach((cls) => {
      if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
        classes.add(cls);
      }
    });
    extractClassesFromString(match[2]).forEach((cls) => {
      if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
        classes.add(cls);
      }
    });
  }

  // Extract classes from object literals with class values
  // Match: { key: "class1 class2", otherKey: "class3" }
  // This handles patterns like FILE_TYPE_MAP and other constant objects
  const objectLiteralRegex = /:\s*["']([^"']+)["']/g;
  while ((match = objectLiteralRegex.exec(content)) !== null) {
    const classString = match[1];
    // Only process if it looks like Tailwind classes (contains dash or common patterns)
    if (
      classString.includes("-") ||
      classString.startsWith("text-") ||
      classString.startsWith("bg-") ||
      classString.startsWith("border-")
    ) {
      extractClassesFromString(classString).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
  }

  return classes;
}

/**
 * Recursively get all TypeScript/TSX files
 */
function getAllSourceFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules, lib, and other build directories
      // Note: We include "experimental" folder because it contains components that are used
      if (
        !["node_modules", "lib", ".git", "playground"].includes(
          file,
        )
      ) {
        getAllSourceFiles(filePath, fileList);
      }
    } else if (
      file.match(/\.(ts|tsx)$/) &&
      !file.match(/\.(spec|test|stories|d)\.(ts|tsx)$/)
    ) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Main function to generate classes file
 */
function generateClassesFile() {
  console.log("🔍 Scanning source files for Tailwind classes...");

  const allClasses = new Set();
  const sourceFiles = getAllSourceFiles(SRC_DIR);

  console.log(`📁 Found ${sourceFiles.length} source files`);

  sourceFiles.forEach((filePath) => {
    try {
      const content = readFileSync(filePath, "utf-8");

      // Extract from tv() calls
      const tvClasses = extractClassesFromTVCall(content);
      tvClasses.forEach((cls) => allClasses.add(cls));

      // Extract from cn() calls (most common pattern in React Native)
      const cnClasses = extractClassesFromCnCall(content);
      cnClasses.forEach((cls) => allClasses.add(cls));

      // Extract from className strings (direct className="..." usage, ternaries, templates)
      const classNameClasses = extractClassesFromClassName(content);
      classNameClasses.forEach((cls) => allClasses.add(cls));

      // Extract from return statements and function bodies (functions that return class strings)
      const returnClasses = extractClassesFromReturnStatements(content);
      returnClasses.forEach((cls) => allClasses.add(cls));
    } catch (error) {
      console.warn(
        `⚠️  Error reading ${relative(process.cwd(), filePath)}:`,
        error.message,
      );
    }
  });

  // Sort classes for better readability
  const sortedClasses = Array.from(allClasses).sort();

  console.log(`✅ Extracted ${sortedClasses.length} unique classes`);

  // Generate the output file
  const classString = sortedClasses.join(" ");

  // Generate CSS file with @source inline() (works reliably with Tailwind v4)
  const outputCSS = `/**
 * Auto-generated CSS file containing all Tailwind classes used in @factorialco/f0-react-native
 * 
 * This file is automatically generated during build - DO NOT EDIT MANUALLY
 * 
 * ✅ RECOMMENDED: Import this file in your global.css to ensure all F0 component classes
 * are detected by Tailwind CSS v4, even when node_modules scanning fails.
 * 
 * Usage in your global.css:
 * @import '@factorialco/f0-react-native/classes.css';
 * 
 * This uses Tailwind's @source inline() directive which works reliably with node_modules
 * and pnpm, unlike @source file paths.
 * 
 * Why this works:
 * - Tailwind CSS v4 has known issues scanning node_modules (GitHub #19040)
 * - @source inline() forces Tailwind to include specific classes
 * - Works with pnpm, npm, and yarn
 * - No need to scan entire node_modules directory
 */

/* Force Tailwind to include all F0 component classes using inline() */
@source inline("${classString}");
`;

  // Write CSS file
  try {
    writeFileSync(OUTPUT_FILE_CSS, outputCSS, "utf-8");
    console.log(
      `✅ Generated classes.css: ${relative(process.cwd(), OUTPUT_FILE_CSS)}`,
    );
    console.log(`   Contains ${sortedClasses.length} unique classes`);
    console.log(
      `   💡 Use @import '@factorialco/f0-react-native/classes.css' in your global.css`,
    );
  } catch (error) {
    console.error("❌ Error writing classes.css:", error);
    process.exit(1);
  }
}

// Run the generator
generateClassesFile();
