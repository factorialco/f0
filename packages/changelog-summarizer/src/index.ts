#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { collectChangelogs } from "./collectors/changelog.js";
import { collectCommits } from "./collectors/commits.js";
import { resolveApiKey, resolveModel } from "./providers.js";
import { generateSummary } from "./summarizer.js";
import { buildContextMessage } from "./formatters/markdown.js";
import type { Provider } from "./types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const LAST_RUN_CACHE_PATH = ".cache/last-run";
const VALID_PROVIDERS: Provider[] = ["openai", "anthropic", "google", "groq"];

/**
 * Parse a date string that must be in YYYY-MM-DD format.
 * Throws a descriptive error if the format is wrong or the result is an
 * invalid date (e.g. "2026-02-30").
 */
function parseDate(value: string, flag: string): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(
      `${flag} must be in YYYY-MM-DD format (received: "${value}")`,
    );
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${flag} is not a valid date (received: "${value}")`);
  }
  return date;
}

function detectRepoRoot(startDir: string): string {
  try {
    return execSync("git rev-parse --show-toplevel", {
      cwd: startDir,
      encoding: "utf-8",
    }).trim();
  } catch {
    throw new Error(
      "Could not detect git repo root. Run from within the repository or pass --repo-root.",
    );
  }
}

function resolveDates(
  fromArg: string | undefined,
  toArg: string | undefined,
  repoRoot: string,
): { from: Date; to: Date } {
  const to = toArg ? parseDate(toArg, "--to") : new Date();
  to.setHours(23, 59, 59, 999);

  if (fromArg) {
    return { from: parseDate(fromArg, "--from"), to };
  }

  // Try to read last successful run date from cache
  const cachePath = join(repoRoot, LAST_RUN_CACHE_PATH);
  if (existsSync(cachePath)) {
    const raw = readFileSync(cachePath, "utf-8").trim();
    const lastRun = new Date(raw);
    if (!Number.isNaN(lastRun.getTime())) {
      // Use whichever gives the shorter/more conservative window:
      // the day after the last run vs. 7 days ago
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const from = lastRun > sevenDaysAgo ? lastRun : sevenDaysAgo;
      console.error(
        `[dates] Using from=${from.toISOString().split("T")[0]} (cache/7d heuristic)`,
      );
      return { from, to };
    }
    console.error(
      `[dates] Cache file contained invalid date "${raw}", ignoring`,
    );
  }

  // Fallback: last 7 days
  const from = new Date();
  from.setDate(from.getDate() - 7);
  console.error("[dates] No cache found, using last 7 days as default range");
  return { from, to };
}

function saveLastRunDate(repoRoot: string): void {
  const cacheDir = join(repoRoot, ".cache");
  try {
    mkdirSync(cacheDir, { recursive: true });
    writeFileSync(
      join(repoRoot, LAST_RUN_CACHE_PATH),
      new Date().toISOString().split("T")[0],
    );
  } catch {
    console.warn("[cache] Could not save last-run date");
  }
}

function saveDebugFiles(
  debugDir: string,
  data: {
    fromStr: string;
    toStr: string;
    changelogs: ReturnType<typeof collectChangelogs>;
    commits: ReturnType<typeof collectCommits>;
    systemPrompt: string;
    contextMessage: string;
  },
): void {
  mkdirSync(debugDir, { recursive: true });

  writeFileSync(
    join(debugDir, "changelogs.json"),
    JSON.stringify(data.changelogs, null, 2),
  );

  writeFileSync(
    join(debugDir, "commits.json"),
    JSON.stringify(data.commits, null, 2),
  );

  writeFileSync(join(debugDir, "system-prompt.md"), data.systemPrompt);

  writeFileSync(join(debugDir, "context-message.md"), data.contextMessage);

  const meta = {
    from: data.fromStr,
    to: data.toStr,
    changelogEntries: data.changelogs.length,
    commits: data.commits.length,
    generatedAt: new Date().toISOString(),
  };
  writeFileSync(join(debugDir, "meta.json"), JSON.stringify(meta, null, 2));

  console.error(`[debug] Context saved to ${debugDir}/`);
  console.error(
    `[debug]   changelogs.json    — ${data.changelogs.length} entries`,
  );
  console.error(
    `[debug]   commits.json       — ${data.commits.length} commits`,
  );
  console.error(`[debug]   system-prompt.md   — system prompt`);
  console.error(`[debug]   context-message.md — full LLM user message`);
  console.error(`[debug]   meta.json          — run metadata`);
}

async function main(): Promise<void> {
  const program = new Command();

  program
    .name("changelog-summarizer")
    .description(
      "Generate an AI-powered weekly summary of F0 changelog entries and commits",
    )
    .requiredOption(
      "--provider <provider>",
      `AI provider to use (${VALID_PROVIDERS.join(", ")})`,
    )
    .option(
      "--model <model>",
      "Model identifier (defaults to provider's recommended model)",
    )
    .option(
      "--api-key <key>",
      "API key for the provider (falls back to the provider's env var)",
    )
    .option(
      "--from <date>",
      "Start date in YYYY-MM-DD format (default: 7 days ago or last run)",
    )
    .option("--to <date>", "End date in YYYY-MM-DD format (default: today)")
    .option("--prompt <file>", "Path to a custom prompt markdown file")
    .option("--output <file>", "Write the summary to a file instead of stdout")
    .option(
      "--repo-root <path>",
      "Path to the git repo root (auto-detected by default)",
    )
    .option(
      "--debug",
      "Save collected context (changelogs, commits, prompt) to a tmp folder before calling the LLM",
    )
    .option(
      "--debug-dir <path>",
      "Directory to save debug files (default: /tmp/changelog-summarizer-debug-{timestamp})",
    )
    .parse(process.argv);

  const opts = program.opts<{
    provider: string;
    model?: string;
    apiKey?: string;
    from?: string;
    to?: string;
    prompt?: string;
    output?: string;
    repoRoot?: string;
    debug?: boolean;
    debugDir?: string;
  }>();

  // Validate provider
  if (!VALID_PROVIDERS.includes(opts.provider as Provider)) {
    console.error(
      `Error: unknown provider "${opts.provider}". Valid options: ${VALID_PROVIDERS.join(", ")}`,
    );
    process.exit(1);
  }

  const provider = opts.provider as Provider;

  // Resolve repo root
  const repoRoot = opts.repoRoot
    ? resolve(opts.repoRoot)
    : detectRepoRoot(process.cwd());

  console.error(`[init] Repo root: ${repoRoot}`);

  // Resolve dates
  const { from, to } = resolveDates(opts.from, opts.to, repoRoot);
  const fromStr = from.toISOString().split("T")[0];
  const toStr = to.toISOString().split("T")[0];
  console.error(`[init] Date range: ${fromStr} → ${toStr}`);

  // Resolve API key and model
  const apiKey = resolveApiKey(provider, opts.apiKey);
  const model = resolveModel(provider, opts.model, apiKey);

  // Load prompt
  let systemPrompt: string;
  if (opts.prompt) {
    const promptPath = resolve(opts.prompt);
    if (!existsSync(promptPath)) {
      console.error(`Error: prompt file not found: ${promptPath}`);
      process.exit(1);
    }
    systemPrompt = readFileSync(promptPath, "utf-8");
  } else {
    const defaultPromptPath = join(__dirname, "prompts", "default.md");
    systemPrompt = readFileSync(defaultPromptPath, "utf-8");
  }

  // Collect data
  console.error("[collect] Reading changelogs…");
  const changelogs = collectChangelogs(repoRoot, from, to);
  console.error(`[collect] Found ${changelogs.length} changelog entries`);

  console.error("[collect] Reading commits…");
  const commits = collectCommits(repoRoot, from, to);
  console.error(`[collect] Found ${commits.length} commits`);

  // Save debug files if requested
  if (opts.debug) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const debugDir =
      opts.debugDir ?? `/tmp/changelog-summarizer-debug-${timestamp}`;

    const contextMessage = buildContextMessage(
      changelogs,
      commits,
      fromStr,
      toStr,
    );

    saveDebugFiles(debugDir, {
      fromStr,
      toStr,
      changelogs,
      commits,
      systemPrompt,
      contextMessage,
    });
  }

  // Check for empty context
  if (changelogs.length === 0 && commits.length === 0) {
    console.error("[warn] No changes found for the given date range");
    const emptyMessage = `## F0 Weekly Summary (${fromStr} – ${toStr})\n\n_No changes this week._`;
    if (opts.output) {
      writeFileSync(resolve(opts.output), emptyMessage);
    } else {
      process.stdout.write(emptyMessage + "\n");
    }
    return;
  }

  // Generate summary
  console.error(`[llm] Generating summary with ${provider}…`);
  const summary = await generateSummary(model, systemPrompt, {
    from: fromStr,
    to: toStr,
    changelogs,
    commits,
  });

  // Prepend a header with the date range
  const output = `## F0 Weekly Summary (${fromStr} – ${toStr})\n\n${summary}`;

  // Output
  if (opts.output) {
    writeFileSync(resolve(opts.output), output);
    console.error(`[done] Summary written to ${opts.output}`);
  } else {
    process.stdout.write(output + "\n");
  }

  // Save last run date for next invocation
  saveLastRunDate(repoRoot);
}

main().catch((err) => {
  console.error("Error:", err instanceof Error ? err.message : String(err));
  process.exit(1);
});
