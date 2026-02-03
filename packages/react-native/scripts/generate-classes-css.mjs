#!/usr/bin/env node

/**
 * Script to extract all Tailwind classes from source files and generate classes.css
 * 
 * This script scans all TypeScript/TSX files in src/ and extracts Tailwind classes
 * from string literals in className props, tv() calls, cn() calls, and direct string assignments.
 * 
 * The output is a CSS file with @source inline() directive that ensures all
 * classes are available in consuming applications, even when Tailwind CSS v4
 * fails to scan node_modules.
 */

import { readFileSync, writeFileSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { glob } = require("glob");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SRC_DIR = join(__dirname, "..", "src");
const OUTPUT_FILE = join(__dirname, "..", "src", "styles", "classes.css");

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
  const hasSelector = cls.match(/^(\*|\[&[^\]]+\]):/);
  
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
      "flex", "items", "justify", "text", "bg", "border", "rounded", "p", "m", "w", "h", "gap",
      "opacity", "aspect", "shrink", "grow", "sr-only", "whitespace", "line-clamp", "tabular",
      "uppercase", "font", "leading", "cursor", "overflow", "relative", "absolute", "z-",
      "inset", "top", "right", "bottom", "left", "min-w", "max-w", "drop-shadow", "stroke",
      "self-", "inline-", "no-underline", "outline", "transition", "group", "text-inherit",
      "col-", "row-", "duration", "dot-tag", "module",
    ].some((prefix) => classWithoutOpacity.startsWith(prefix)) ||
    hasStateVariant !== null ||
    hasSelector !== null ||
    classWithoutOpacity === "outline" ||
    classWithoutOpacity.match(/^outline-\d+$/) !== null
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
          if (classString && classString.length > 0) {
            extractClassesFromString(classString).forEach((cls) => {
              if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
                classes.add(cls);
              }
            });
          }
        }
      }
    });
  }

  // Match direct ternary operators: className={condition ? "class1" : "class2"}
  const ternaryRegex = /className\s*=\s*\{\s*[^?]+\?\s*["']([^"']+)["']\s*:\s*["']([^"']+)["']\s*\}/g;
  while ((match = ternaryRegex.exec(content)) !== null) {
    if (match[1]) {
      extractClassesFromString(match[1]).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
    if (match[2]) {
      extractClassesFromString(match[2]).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
  }

  // Match object property access: className={{ info: "class" }[level]}
  const objectPropertyRegex = /className\s*=\s*\{\s*\{[^}]+\}\s*\[[^\]]+\]\s*\}/g;
  while ((match = objectPropertyRegex.exec(content)) !== null) {
    // Extract string literals from the object
    const objectContent = match[0];
    const stringLiteralRegex = /:\s*["']([^"']+)["']/g;
    let stringMatch;
    while ((stringMatch = stringLiteralRegex.exec(objectContent)) !== null) {
      const classString = stringMatch[1];
      if (classString && classString.length > 0) {
        extractClassesFromString(classString).forEach((cls) => {
          if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
            classes.add(cls);
          }
        });
      }
    }
  }

  return classes;
}

/**
 * Extract classes from return statements and function bodies
 * Handles patterns like:
 * - return "text-f1-icon";
 * - return isPressed ? "class1" : "class2";
 * - color: "text-f1-foreground-accent"
 */
function extractClassesFromReturnStatements(content) {
  const classes = new Set();

  // Match return statements with string literals: return "class-name"
  const returnStringRegex = /return\s+["']([^"']+)["']/g;
  let match;
  while ((match = returnStringRegex.exec(content)) !== null) {
    const classString = match[1];
    if (classString && classString.length > 0 && isValidTailwindClass(classString)) {
      extractClassesFromString(classString).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
  }

  // Match return statements with ternary: return condition ? "class1" : "class2"
  const returnTernaryRegex = /return\s+[^?]+\?\s*["']([^"']+)["']\s*:\s*["']([^"']+)["']/g;
  while ((match = returnTernaryRegex.exec(content)) !== null) {
    if (match[1]) {
      extractClassesFromString(match[1]).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
    if (match[2]) {
      extractClassesFromString(match[2]).forEach((cls) => {
        if (cls && cls.length > 0 && isValidTailwindClass(cls)) {
          classes.add(cls);
        }
      });
    }
  }

  // Match object properties with class strings: color: "text-f1-foreground-accent"
  const objectPropertyRegex = /(?:color|className|class)\s*:\s*["']([^"']+)["']/g;
  while ((match = objectPropertyRegex.exec(content)) !== null) {
    const classString = match[1];
    if (classString && classString.length > 0) {
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
 * Main function to generate classes.css
 */
async function generateClassesCSS() {
  console.log("🔍 Scanning source files for Tailwind classes...");

  // Use glob to find all TypeScript/TSX files
  const files = await glob("**/*.{ts,tsx}", {
    cwd: SRC_DIR,
    ignore: [
      "**/node_modules/**",
      "**/lib/**",
      "**/*.spec.ts",
      "**/*.spec.tsx",
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.stories.ts",
      "**/*.stories.tsx",
      "**/*.d.ts",
    ],
    absolute: false,
  });

  console.log(`📁 Found ${files.length} source files`);

  const allClasses = new Set();

  // Process each file
  for (const file of files) {
    const filePath = join(SRC_DIR, file);
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
  }

  // Sort classes for consistent output
  const sortedClasses = Array.from(allClasses).sort();

  console.log(`✅ Extracted ${sortedClasses.length} unique classes`);

  // Validate that px-2.5 is included
  const hasPx25 = sortedClasses.includes("px-2.5");
  if (hasPx25) {
    console.log("✅ Verified: px-2.5 is included");
  } else {
    console.warn("⚠️  Warning: px-2.5 is NOT included in the generated classes");
    console.warn("   This may indicate an issue with the extraction logic");
  }

  // Generate CSS file with @source inline() (works reliably with Tailwind v4)
  const classString = sortedClasses.join(" ");
  const cssContent = `/**
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

  // Write the file
  try {
    writeFileSync(OUTPUT_FILE, cssContent, "utf-8");
    console.log(
      `✅ Generated classes.css: ${relative(process.cwd(), OUTPUT_FILE)}`,
    );
    console.log(`   Contains ${sortedClasses.length} unique classes`);
  } catch (error) {
    console.error("❌ Error writing classes.css:", error);
    process.exit(1);
  }
}

// Run the generator
generateClassesCSS().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
