/**
 * End-to-end preview from REAL merged PRs — the deterministic, no-hallucination
 * path. Lists PRs merged into main in a date range, classifies them from their
 * title + changed files (NO LLM), renders the Slack message, and writes a Block
 * Kit payload you can paste into https://app.slack.com/block-kit-builder.
 *
 * Run from `packages/changelog-summarizer/`:
 *   GITHUB_TOKEN=$(gh auth token) pnpm tsx scripts/preview-prs.ts --from 2026-04-27 --to 2026-05-26
 */

import { writeFileSync } from "fs";
import {
  fetchPrBodies,
  fetchPrFiles,
  listMergedPRs,
  type PrFile,
} from "../src/collectors/github.js";
import {
  classifyMergedPrs,
  TYPES_NEEDING_FILES,
  parseConventionalTitle,
  type PrWithFiles,
} from "../src/collectors/prs.js";
import {
  collectStoryIndex,
  resolveStoryUrl,
} from "../src/collectors/stories.js";
import {
  jsonToSlackText,
  parseSummaryJson,
} from "../src/formatters/json-formatter.js";
import type { SummaryJson } from "../src/types.js";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

async function main(): Promise<void> {
  const from = arg("from") ?? "2026-04-27";
  const to = arg("to") ?? "2026-05-26";
  const token = process.env["GITHUB_TOKEN"];
  if (!token) {
    console.error(
      "⚠️  No GITHUB_TOKEN — run with `GITHUB_TOKEN=$(gh auth token) ...` (unauthenticated calls hit low rate limits).",
    );
  }

  console.error(`[preview-prs] Listing merged PRs ${from} → ${to}…`);
  const prs = await listMergedPRs(from, to, token);

  // Only inspect files for PR types that can introduce a new component or a
  // stabilization (or breaking changes). fix/chore/ci/etc. are bucketed by
  // title alone — no need for an extra API call per PR.
  console.error("[preview-prs] Fetching changed files for relevant PRs…");
  const withFiles: PrWithFiles[] = [];
  for (const pr of prs) {
    const { type, breaking } = parseConventionalTitle(pr.title);
    let files: PrFile[] = [];
    if (breaking || TYPES_NEEDING_FILES.has(type)) {
      files = await fetchPrFiles(pr.number, token);
    }
    // Breaking changes need the PR description to explain the migration.
    let body: string | undefined;
    if (breaking) {
      const bodies = await fetchPrBodies([pr.number], token);
      body = bodies.get(pr.number)?.body;
    }
    withFiles.push({ ...pr, files, body });
  }

  const storyIndex = await collectStoryIndex();
  const storyUrls = storyIndex.urlByKey;
  const facts = classifyMergedPrs(withFiles, storyIndex);

  // Compose the technical thread reply deterministically from fixes + infra.
  const threadParts: string[] = [];
  if (facts.fixes.length > 0) {
    threadParts.push(`Fixes this week: ${facts.fixes.join("; ")}.`);
  }
  if (facts.infra.length > 0) {
    threadParts.push(`Infra & tooling: ${facts.infra.join("; ")}.`);
  }
  if (facts.contributors.length > 0) {
    threadParts.push(
      `Thanks to ${facts.contributors.map((c) => `@${c}`).join(", ")}.`,
    );
  }

  const summaryJson: SummaryJson = {
    ...facts.skeleton,
    thread_details: threadParts.join(" "),
  };

  // Round-trip through the parser to exercise the same path as production.
  const json = parseSummaryJson(JSON.stringify(summaryJson));
  const slackText = jsonToSlackText(json, storyUrls);
  if (!slackText) {
    console.error("[preview-prs] No product-visible changes in this window.");
    return;
  }

  const summaryFile = `:f0-dev: F0 Weekly Summary (${from} – ${to})\n---\n${slackText}`;
  writeFileSync("/tmp/zerito-prs.md", summaryFile);
  writeFileSync("/tmp/zerito-prs-thread.txt", summaryJson.thread_details ?? "");
  writeFileSync(
    "/tmp/zerito-prs-blocks.json",
    JSON.stringify({ blocks: buildBlocks(summaryFile) }, null, 2),
  );

  // Report
  const s = json.sections;
  console.error("\n✅ PR-driven preview ready (deterministic, no LLM):");
  console.error("   /tmp/zerito-prs.md / -thread.txt / -blocks.json");
  console.error(
    `\n   ${prs.length} merged PRs → new:${s.new?.length ?? 0} stabilized:${s.stabilized?.length ?? 0} enhancements:${s.enhancements?.length ?? 0} breaking:${s.breaking_changes?.length ?? 0} | fixes:${facts.fixes.length} infra:${facts.infra.length}`,
  );
  if (s.stabilized?.length) {
    console.error("\n   ✅ Now stable (from newly-added MDX docs = DoD complete):");
    for (const e of s.stabilized) console.error(`      ${e.component} (by ${e.author})`);
  }
  console.error("\n   Links resolved (★ = deep-link to a specific story):");
  for (const e of [...(s.new ?? []), ...(s.stabilized ?? []), ...(s.enhancements ?? [])]) {
    const deep = e.url;
    const url = deep ?? resolveStoryUrl(e.component, storyUrls);
    const tag = deep ? "★ story deep-link" : url ? "docs page" : "(no link)";
    console.error(`      ${e.component.padEnd(24)} ${tag}`);
  }
  if (facts.unclassified.length) {
    console.error(`\n   ⚠️ Unclassified (non-conventional titles): ${facts.unclassified.length}`);
  }
}

interface BlockKitBlock {
  type: string;
  text?: { type: string; text: string; emoji?: boolean };
}

/** Split a section body into <3000-char chunks at bullet boundaries. */
function chunkMrkdwn(body: string, limit = 2900): string[] {
  if (body.length <= limit) return [body];
  const bullets = body.split("\n\n");
  const chunks: string[] = [];
  let current = "";
  for (const bullet of bullets) {
    const candidate = current ? `${current}\n\n${bullet}` : bullet;
    if (candidate.length > limit && current) {
      chunks.push(current);
      current = bullet;
    } else {
      current = candidate;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

function buildBlocks(content: string): BlockKitBlock[] {
  const lines = content.split("\n");
  const blocks: BlockKitBlock[] = [
    { type: "header", text: { type: "plain_text", text: lines[0], emoji: true } },
  ];
  let firstSeen = false;
  let segment: string[] = [];
  const flush = () => {
    if (segment.length === 0) return;
    blocks.push({ type: "divider" });
    blocks.push({
      type: "header",
      text: { type: "plain_text", text: segment[0], emoji: true },
    });
    for (const chunk of chunkMrkdwn(segment.slice(1).join("\n"))) {
      blocks.push({ type: "section", text: { type: "mrkdwn", text: chunk } });
    }
    segment = [];
  };
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line === "---") {
      if (!firstSeen) {
        firstSeen = true;
        segment = [];
        continue;
      }
      flush();
      continue;
    }
    segment.push(line);
  }
  if (firstSeen) flush();
  return blocks;
}

main().catch((err) => {
  console.error("Error:", err instanceof Error ? err.stack : String(err));
  process.exit(1);
});
