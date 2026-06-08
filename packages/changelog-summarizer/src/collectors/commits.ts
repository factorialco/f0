import { execSync } from "child_process";
import type { CommitEntry } from "../types.js";

const PACKAGE_PATHS = [
  "packages/react",
  "packages/react-native",
  "packages/core",
];

// git log format: hash|author|date|subject
const LOG_FORMAT = "%H|%an|%ad|%s";
const DATE_FORMAT = "format:%Y-%m-%d";

export function collectCommits(
  repoRoot: string,
  from: Date,
  to: Date,
): CommitEntry[] {
  const fromStr = from.toISOString().split("T")[0];
  // Add one day to "to" so --until is exclusive-end (git treats it as "before this date at 00:00")
  const toDate = new Date(to);
  toDate.setDate(toDate.getDate() + 1);
  const toStr = toDate.toISOString().split("T")[0];

  const pathArgs = PACKAGE_PATHS.join(" ");

  let output: string;
  try {
    output = execSync(
      `git log --since="${fromStr}" --until="${toStr}" --no-merges --format="${LOG_FORMAT}" --date="${DATE_FORMAT}" -- ${pathArgs}`,
      { cwd: repoRoot, encoding: "utf-8" },
    ).trim();
  } catch (err) {
    throw new Error(`git log failed: ${String(err)}`);
  }

  if (!output) return [];

  const commits: CommitEntry[] = [];

  for (const line of output.split("\n")) {
    const parts = line.split("|");
    if (parts.length < 4) continue;

    const [hash, author, date, ...subjectParts] = parts;
    const message = subjectParts.join("|"); // subject may contain pipes

    // Determine which packages this commit touches via git show --name-only
    let touchedPackages: string[];
    try {
      const files: string[] = execSync(
        `git show --name-only --format="" ${hash}`,
        {
          cwd: repoRoot,
          encoding: "utf-8",
        },
      )
        .trim()
        .split("\n")
        .filter((line): line is string => line.length > 0);

      touchedPackages = PACKAGE_PATHS.filter((pkg) =>
        files.some((f) => f.startsWith(pkg + "/")),
      );
    } catch {
      touchedPackages = [];
    }

    commits.push({
      hash: hash.substring(0, 8),
      message,
      author,
      date,
      packages: touchedPackages,
    });
  }

  return commits;
}
