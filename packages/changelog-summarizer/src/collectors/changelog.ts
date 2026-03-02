import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { ChangelogEntry } from "../types.js";

const PACKAGES: Array<{ name: string; path: string }> = [
  { name: "@factorialco/f0-react", path: "packages/react" },
  { name: "@factorialco/f0-react-native", path: "packages/react-native" },
  { name: "@factorialco/f0-core", path: "packages/core" },
];

// Matches lines like: ## [1.384.0](https://...) (2026-02-27)
const VERSION_HEADER_RE =
  /^## \[(\d+\.\d+\.\d+)\]\(([^)]+)\) \((\d{4}-\d{2}-\d{2})\)$/;

function parseChangelog(
  content: string,
  packageName: string,
  from: Date,
  to: Date,
): ChangelogEntry[] {
  const lines = content.split("\n");
  const entries: ChangelogEntry[] = [];

  let current: ChangelogEntry | null = null;
  let section: "features" | "bugFixes" | null = null;

  const flush = () => {
    if (current) entries.push(current);
    current = null;
    section = null;
  };

  for (const line of lines) {
    const headerMatch = VERSION_HEADER_RE.exec(line);

    if (headerMatch) {
      flush();

      const [, version, compareUrl, dateStr] = headerMatch;
      const entryDate = new Date(dateStr);

      // Only include entries within [from, to] (inclusive)
      if (entryDate >= from && entryDate <= to) {
        current = {
          package: packageName,
          version,
          date: dateStr,
          features: [],
          bugFixes: [],
          compareUrl,
        };
      }
      continue;
    }

    if (!current) continue;

    if (line.startsWith("### Features")) {
      section = "features";
      continue;
    }

    if (line.startsWith("### Bug Fixes")) {
      section = "bugFixes";
      continue;
    }

    // A new h3 section that isn't features or bug fixes
    if (line.startsWith("### ")) {
      section = null;
      continue;
    }

    // Bullet entry
    if (section && line.match(/^\* /)) {
      const text = line.replace(/^\* /, "").trim();
      current[section].push(text);
    }
  }

  flush();

  return entries;
}

export function collectChangelogs(
  repoRoot: string,
  from: Date,
  to: Date,
): ChangelogEntry[] {
  const entries: ChangelogEntry[] = [];

  for (const pkg of PACKAGES) {
    const changelogPath = join(repoRoot, pkg.path, "CHANGELOG.md");

    if (!existsSync(changelogPath)) {
      console.warn(
        `[changelog] No CHANGELOG.md found at ${changelogPath}, skipping.`,
      );
      continue;
    }

    const content = readFileSync(changelogPath, "utf-8");
    const parsed = parseChangelog(content, pkg.name, from, to);
    entries.push(...parsed);
  }

  return entries;
}
