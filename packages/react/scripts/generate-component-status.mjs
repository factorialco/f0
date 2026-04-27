/**
 * generate-component-status.mjs
 *
 * Scans all *.stories.tsx files under src/ and extracts component status metadata:
 * - component name (from title or filename)
 * - zone (components, patterns, sds, kits, experimental, layouts, deprecated, internal)
 * - API status tag (stable, experimental, deprecated, internal — from story tags)
 * - has unit tests (.test.tsx exists alongside the story)
 * - has docs (.mdx file exists alongside the story)
 *
 * Usage: node scripts/generate-component-status.mjs
 * Output: docs/component-status-data.json
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const srcDir = resolve(rootDir, "src");
const outputFile = resolve(rootDir, "docs/component-status-data.json");

// Get all story files
const storyFilesRaw = execSync(`find ${srcDir} -name "*.stories.tsx"`, {
  encoding: "utf-8",
}).trim();

const storyFiles = storyFilesRaw.split("\n").filter(Boolean);

/**
 * Determine zone from file path
 */
function getZone(filePath) {
  const relative = filePath.replace(srcDir + "/", "");
  if (relative.startsWith("components/")) return "components";
  if (relative.startsWith("patterns/")) return "patterns";
  if (relative.startsWith("sds/")) return "sds";
  if (relative.startsWith("kits/")) return "kits";
  if (relative.startsWith("experimental/")) return "experimental";
  if (relative.startsWith("layouts/")) return "layouts";
  if (relative.startsWith("deprecated/")) return "deprecated";
  if (relative.startsWith("ui/")) return "internal";
  if (relative.startsWith("lib/")) return "internal";
  if (relative.startsWith("hooks/")) return "hooks";
  return "other";
}

/**
 * Extract tags array from story file content using regex
 */
function extractTags(content) {
  // Match: tags: ["...", "...", ...]
  const match = content.match(/tags:\s*\[([^\]]+)\]/);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((t) => t.trim().replace(/['"]/g, ""))
    .filter(Boolean);
}

/**
 * Extract title from story meta
 */
function extractTitle(content) {
  const match = content.match(/title:\s*["']([^"']+)["']/);
  return match ? match[1] : null;
}

/**
 * Determine API status from tags
 */
function getApiStatus(tags) {
  if (tags.includes("stable")) return "stable";
  if (tags.includes("deprecated")) return "deprecated";
  if (tags.includes("internal")) return "internal";
  if (tags.includes("experimental")) return "experimental";
  return "unknown";
}

/**
 * Check if component has unit tests
 */
function hasUnitTests(storyFilePath) {
  const dir = dirname(storyFilePath);
  // Check in same dir or parent __tests__ dir
  const parentDir = resolve(dir, "..");
  const grandParentDir = resolve(dir, "../..");

  // Common patterns: __tests__ folder at component root
  const testsDir1 = resolve(dir, "__tests__");
  const testsDir2 = resolve(parentDir, "__tests__");
  const testsDir3 = resolve(grandParentDir, "__tests__");

  for (const testsDir of [testsDir1, testsDir2, testsDir3]) {
    if (existsSync(testsDir)) return true;
  }

  // Also check for .test.tsx in same directory or parent
  try {
    const result = execSync(
      `find ${grandParentDir} -name "*.test.tsx" -o -name "*.test.ts" 2>/dev/null | head -1`,
      { encoding: "utf-8", timeout: 3000 },
    ).trim();
    if (result) return true;
  } catch {
    // ignore
  }

  return false;
}

/**
 * Check if component has MDX docs
 */
function hasMdxDocs(storyFilePath) {
  const dir = dirname(storyFilePath);
  const parentDir = resolve(dir, "..");
  const grandParentDir = resolve(dir, "../..");

  for (const searchDir of [dir, parentDir, grandParentDir]) {
    try {
      const result = execSync(
        `find ${searchDir} -maxdepth 1 -name "*.mdx" 2>/dev/null | head -1`,
        {
          encoding: "utf-8",
          timeout: 3000,
        },
      ).trim();
      if (result) return true;
    } catch {
      // ignore
    }
  }
  return false;
}

// Process all story files
const components = [];
const seen = new Set();

for (const filePath of storyFiles) {
  try {
    const content = readFileSync(filePath, "utf-8");
    const tags = extractTags(content);
    const title = extractTitle(content);
    const zone = getZone(filePath);

    // Skip internal/ui stories unless they have meaningful status
    if (zone === "internal" && !tags.includes("stable")) continue;
    // Skip example stories
    if (filePath.includes("/examples/")) continue;
    // Skip internal stories that are sub-stories (no-sidebar)
    if (tags.includes("no-sidebar") && !tags.includes("stable")) continue;

    const apiStatus = getApiStatus(tags);
    const storyName = title || basename(filePath, ".stories.tsx");

    // Deduplicate by title+zone (some components have multiple story files)
    const key = `${storyName}::${zone}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const unitTests = hasUnitTests(filePath);
    const mdxDocs = hasMdxDocs(filePath);

    components.push({
      name: storyName,
      zone,
      apiStatus,
      tags: tags.filter((t) => !["autodocs", "no-sidebar", "!dev"].includes(t)),
      hasUnitTests: unitTests,
      hasMdxDocs: mdxDocs,
      storyFile: filePath.replace(srcDir + "/", ""),
    });
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

// Sort by zone, then name
components.sort((a, b) => {
  if (a.zone !== b.zone) return a.zone.localeCompare(b.zone);
  return a.name.localeCompare(b.name);
});

// Summary stats
const stats = {
  total: components.length,
  byStatus: {
    stable: components.filter((c) => c.apiStatus === "stable").length,
    experimental: components.filter((c) => c.apiStatus === "experimental")
      .length,
    deprecated: components.filter((c) => c.apiStatus === "deprecated").length,
    internal: components.filter((c) => c.apiStatus === "internal").length,
    unknown: components.filter((c) => c.apiStatus === "unknown").length,
  },
  byZone: {},
  withUnitTests: components.filter((c) => c.hasUnitTests).length,
  withMdxDocs: components.filter((c) => c.hasMdxDocs).length,
};

for (const c of components) {
  stats.byZone[c.zone] = (stats.byZone[c.zone] || 0) + 1;
}

const output = { generatedAt: new Date().toISOString(), stats, components };
writeFileSync(outputFile, JSON.stringify(output, null, 2));

console.log(`\nComponent Status Report`);
console.log(`=======================`);
console.log(`Total components: ${stats.total}`);
console.log(`\nBy status:`);
for (const [status, count] of Object.entries(stats.byStatus)) {
  console.log(`  ${status}: ${count}`);
}
console.log(`\nBy zone:`);
for (const [zone, count] of Object.entries(stats.byZone)) {
  console.log(`  ${zone}: ${count}`);
}
console.log(`\nWith unit tests: ${stats.withUnitTests}`);
console.log(`With MDX docs:   ${stats.withMdxDocs}`);
console.log(`\nOutput written to: ${outputFile}`);
