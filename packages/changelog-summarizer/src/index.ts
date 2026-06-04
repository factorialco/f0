#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import {
  listMergedPRs,
  fetchPrFiles,
  fetchPrBodies,
  type PrFile,
} from "./collectors/github.js";
import {
  classifyMergedPrs,
  parseConventionalTitle,
  TYPES_NEEDING_FILES,
  type PrWithFiles,
} from "./collectors/prs.js";
import { collectStoryIndex } from "./collectors/stories.js";
import { resolveApiKey, resolveModel } from "./providers.js";
import { polishSummary, reconcileSummary } from "./summarizer.js";
import { jsonToSlackText } from "./formatters/json-formatter.js";
import { buildBlocks } from "./formatters/blockkit.js";
import type { Provider, SummaryJson } from "./types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const LAST_RUN_CACHE_PATH = ".cache/summarizer-last-run";
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
  ignoreLastRun: boolean,
): { from: Date; to: Date } {
  const to = toArg ? parseDate(toArg, "--to") : new Date();
  to.setHours(23, 59, 59, 999);

  if (fromArg) {
    return { from: parseDate(fromArg, "--from"), to };
  }

  // Try to read last successful run date from cache
  const cachePath = join(repoRoot, LAST_RUN_CACHE_PATH);
  if (!ignoreLastRun && existsSync(cachePath)) {
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
  } else if (ignoreLastRun) {
    console.error("[dates] --ignore-last-run set, skipping cache");
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
      "--ignore-last-run",
      "Ignore the cached last-run date and always fall back to 7 days ago",
    )
    .option(
      "--debug",
      "Save collected context (changelogs, commits, prompt) to a tmp folder before calling the LLM",
    )
    .option(
      "--debug-dir <path>",
      "Directory to save debug files (default: /tmp/changelog-summarizer-debug-{timestamp})",
    )
    .option(
      "--github-token <token>",
      "GitHub token used to fetch PR descriptions (falls back to $GITHUB_TOKEN)",
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
    ignoreLastRun?: boolean;
    debug?: boolean;
    debugDir?: string;
    githubToken?: string;
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
  const { from, to } = resolveDates(
    opts.from,
    opts.to,
    repoRoot,
    opts.ignoreLastRun ?? false,
  );
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
    const defaultPromptPath = join(__dirname, "prompts", "product-v3.md");
    systemPrompt = readFileSync(defaultPromptPath, "utf-8");
  }

  // ---- Collect: merged PRs are the source of truth for what shipped ----
  const githubToken = opts.githubToken ?? process.env["GITHUB_TOKEN"];

  console.error("[collect] Fetching Storybook index…");
  const storyIndex = await collectStoryIndex();

  console.error("[collect] Listing merged PRs…");
  const prs = await listMergedPRs(fromStr, toStr, githubToken);

  console.error("[collect] Fetching changed files / PR bodies…");
  const withFiles: PrWithFiles[] = [];
  for (const pr of prs) {
    const { type, breaking } = parseConventionalTitle(pr.title);
    let files: PrFile[] = [];
    if (breaking || TYPES_NEEDING_FILES.has(type)) {
      files = await fetchPrFiles(pr.number, githubToken);
    }
    let body: string | undefined;
    if (breaking) {
      body = (await fetchPrBodies([pr.number], githubToken)).get(pr.number)
        ?.body;
    }
    withFiles.push({ ...pr, files, body });
  }

  const facts = classifyMergedPrs(withFiles, storyIndex);

  // Technical thread reply (for engineers): bug fixes + infra + thanks.
  const threadParts: string[] = [];
  if (facts.fixes.length > 0)
    threadParts.push(`Fixes this week: ${facts.fixes.join("; ")}.`);
  if (facts.infra.length > 0)
    threadParts.push(`Infra & tooling: ${facts.infra.join("; ")}.`);
  if (facts.contributors.length > 0)
    threadParts.push(
      `Thanks to ${facts.contributors.map((c) => `@${c}`).join(", ")}.`,
    );

  const skeleton: SummaryJson = {
    ...facts.skeleton,
    thread_details: threadParts.join(" "),
  };

  // Empty week → short placeholder.
  const hasContent = Object.values(skeleton.sections).some((v) =>
    Array.isArray(v) ? v.length > 0 : Boolean(v),
  );
  if (!hasContent) {
    console.error("[warn] No product-visible changes for the given date range");
    const emptyMessage = `:f0-dev: F0 Weekly Summary (${fromStr} – ${toStr})\n---\n_No changes this week._`;
    if (opts.output) writeFileSync(resolve(opts.output), emptyMessage);
    else process.stdout.write(emptyMessage + "\n");
    saveLastRunDate(repoRoot);
    return;
  }

  // ---- Polish: the LLM rewrites each summary into product language with the
  //      "why", bounded to the facts above (it may drop/merge, never invent).
  //      If it fails, we publish the factual summary as-is.
  let finalJson: SummaryJson = skeleton;
  try {
    console.error(`[llm] Polishing summary with ${provider}…`);
    const polished = await polishSummary(model, systemPrompt, skeleton);
    finalJson = reconcileSummary(skeleton, polished);
  } catch (err) {
    console.error(
      `[llm] Polish failed (${err instanceof Error ? err.message : String(err)}) — using the factual summary`,
    );
  }

  if (opts.debug) {
    const debugDir = opts.debugDir ?? "/tmp/changelog-summarizer-debug";
    mkdirSync(debugDir, { recursive: true });
    writeFileSync(
      join(debugDir, "skeleton.json"),
      JSON.stringify(skeleton, null, 2),
    );
    writeFileSync(
      join(debugDir, "final.json"),
      JSON.stringify(finalJson, null, 2),
    );
    console.error(`[debug] Wrote skeleton.json + final.json to ${debugDir}/`);
  }

  const summary =
    jsonToSlackText(finalJson, storyIndex.urlByKey) ?? "_No changes this week._";

  // Product-focused message only: title + the product sections. Bug fixes and
  // infra are intentionally NOT published (too technical for this audience).
  const publishText = `:f0-dev: F0 Weekly Summary (${fromStr} – ${toStr})\n---\n${summary}`;

  // Pre-render the Block Kit payload so the workflow just posts it (no fragile
  // bash parsing, and long sections are split under Slack's 3000-char limit).
  const payload = JSON.stringify({ blocks: buildBlocks(publishText) }, null, 2);

  if (opts.output) {
    const outputPath = resolve(opts.output);
    writeFileSync(outputPath, publishText);
    const blocksPath = outputPath.replace(/(\.[^./]+)?$/, ".blocks.json");
    writeFileSync(blocksPath, payload);
    console.error(`[done] Summary written to ${outputPath}`);
    console.error(`[done] Block Kit payload written to ${blocksPath}`);

    const githubOutput = process.env["GITHUB_OUTPUT"];
    if (githubOutput) {
      try {
        writeFileSync(githubOutput, `blocks_file=${blocksPath}\n`, { flag: "a" });
      } catch (err) {
        console.warn(
          `[done] Could not append blocks_file to GITHUB_OUTPUT: ${err instanceof Error ? err.message : String(err)}`,
        );
      }
    }
  } else {
    process.stdout.write(publishText + "\n");
  }

  // Save last run date for next invocation
  saveLastRunDate(repoRoot);
}

main().catch((err) => {
  console.error("Error:", err instanceof Error ? err.message : String(err));
  process.exit(1);
});
