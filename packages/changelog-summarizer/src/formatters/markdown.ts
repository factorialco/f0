import type { ChangelogEntry, CommitEntry } from "../types.js";

const PACKAGE_PATH_MAP: Record<string, string> = {
  "@factorialco/f0-react": "packages/react",
  "@factorialco/f0-react-native": "packages/react-native",
  "@factorialco/f0-core": "packages/core",
};

function formatChangelogEntry(entry: ChangelogEntry): string {
  const lines: string[] = [
    `### ${entry.package} v${entry.version} (${entry.date})`,
  ];

  if (entry.features.length > 0) {
    lines.push("Features:");
    entry.features.forEach((f: string) => lines.push(`  - ${f}`));
  }

  if (entry.bugFixes.length > 0) {
    lines.push("Bug fixes:");
    entry.bugFixes.forEach((b: string) => lines.push(`  - ${b}`));
  }

  return lines.join("\n");
}

function formatCommits(commits: CommitEntry[]): string {
  if (commits.length === 0)
    return "_No additional commits outside changelog entries._";

  return commits
    .map(
      (c) =>
        `- [${c.hash}] ${c.message} (${c.author}, ${c.date})` +
        (c.packages.length > 0 ? ` [${c.packages.join(", ")}]` : ""),
    )
    .join("\n");
}

function getContributors(
  packageName: string,
  commits: CommitEntry[],
): string[] {
  const pkgPath = PACKAGE_PATH_MAP[packageName];
  if (!pkgPath) return [];

  const seen = new Set<string>();
  const authors: string[] = [];

  for (const commit of commits) {
    if (commit.packages.includes(pkgPath) && !seen.has(commit.author)) {
      // Skip bot/release commits — only real people
      if (
        !commit.message.startsWith("chore: release") &&
        commit.author.length > 0
      ) {
        seen.add(commit.author);
        authors.push(commit.author);
      }
    }
  }

  return authors;
}

export function buildContextMessage(
  changelogs: ChangelogEntry[],
  commits: CommitEntry[],
  from: string,
  to: string,
): string {
  const sections: string[] = [`Weekly summary period: ${from} to ${to}`, ""];

  const packageNames = [
    "@factorialco/f0-react",
    "@factorialco/f0-react-native",
    "@factorialco/f0-core",
  ];

  for (const pkg of packageNames) {
    const entries = changelogs.filter((e) => e.package === pkg);
    const label = pkg.replace("@factorialco/", "").toUpperCase();
    const contributors = getContributors(pkg, commits);

    sections.push(`## ${label} changelog entries`);

    if (entries.length === 0) {
      sections.push("_No changelog entries for this period._");
    } else {
      entries.forEach((e) => sections.push(formatChangelogEntry(e)));
    }

    if (contributors.length > 0) {
      sections.push(`Contributors: ${contributors.join(", ")}`);
    }

    sections.push("");
  }

  // Only include commits that are not already referenced in changelog entries
  const changelogText = changelogs
    .flatMap((e) => [...e.features, ...e.bugFixes])
    .join("");
  const changelogHashes = new Set(changelogText.match(/[a-f0-9]{7,}/g) ?? []);

  const extraCommits = commits.filter((c) => !changelogHashes.has(c.hash));

  sections.push("## Additional commits not in changelog");
  sections.push(formatCommits(extraCommits));

  return sections.join("\n");
}
