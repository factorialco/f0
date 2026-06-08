/**
 * Fetch pull request bodies from the GitHub REST API to give the LLM richer
 * context about what each PR actually did. Only feature PRs are fetched —
 * bug fixes are noisy and the CHANGELOG one-liner is usually enough.
 */

const REPO = "factorialco/f0";
const API_BASE = `https://api.github.com/repos/${REPO}`;
const SEARCH_BASE = "https://api.github.com/search/issues";
const MAX_BODY_CHARS = 600;
const REQUEST_DELAY_MS = 150;

export interface PrInfo {
  number: number;
  body: string;
}

/** A merged pull request, as returned by the search API. */
export interface MergedPr {
  number: number;
  title: string;
  author: string;
  labels: string[];
}

/** A single file changed by a pull request. */
export interface PrFile {
  filename: string;
  /** "added" | "modified" | "removed" | "renamed" | "copied" | "changed" */
  status: string;
  /** Unified diff for the file. Omitted by GitHub for very large/binary files. */
  patch?: string;
}

function ghHeaders(token?: string): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "factorial-one-changelog-summarizer",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

const PR_NUMBER_REGEX = /(?:#|\/pull\/)(\d{2,})/g;

/**
 * Extract PR numbers from arbitrary text. Recognises `#1234` and `/pull/1234`
 * patterns. Returns a deduplicated list sorted in descending order so the most
 * recent PRs are fetched first.
 */
export function extractPrNumbers(text: string): number[] {
  if (!text) return [];

  const seen = new Set<number>();
  for (const match of text.matchAll(PR_NUMBER_REGEX)) {
    const n = Number.parseInt(match[1], 10);
    if (Number.isFinite(n) && n > 0) seen.add(n);
  }

  return [...seen].sort((a, b) => b - a);
}

function cleanBoilerplate(body: string): string {
  // Strip common Factorial PR template sections that add no signal.
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  const cleaned: string[] = [];

  // Headings (markdown) that mark template noise we want to drop along with
  // everything below them until the next heading of equal or higher level.
  const NOISE_HEADINGS =
    /^#{1,6}\s+(checklist|how to test|how to qa|qa|screenshots?|videos?|notes for reviewers?|related (issues|tickets|prs)|references?)\s*$/i;

  let skip = false;
  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+/);
    if (headingMatch) {
      skip = NOISE_HEADINGS.test(line);
      if (skip) continue;
    }
    if (skip) continue;

    // Strip HTML comments often left over from templates.
    if (/^<!--/.test(line) || /-->$/.test(line)) continue;

    cleaned.push(line);
  }

  return cleaned.join("\n").trim();
}

function truncateAtSentence(text: string, max: number): string {
  if (text.length <= max) return text;

  const slice = text.slice(0, max);
  // Prefer breaking at the last sentence boundary.
  const lastStop = Math.max(
    slice.lastIndexOf(". "),
    slice.lastIndexOf("! "),
    slice.lastIndexOf("? "),
    slice.lastIndexOf(".\n"),
    slice.lastIndexOf("!\n"),
    slice.lastIndexOf("?\n"),
  );

  if (lastStop > max * 0.5) {
    return `${slice.slice(0, lastStop + 1).trim()}…`;
  }

  return `${slice.trim()}…`;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch PR bodies sequentially with a small delay between calls to stay well
 * below GitHub's secondary rate limits.
 *
 * - 403/404 are treated as "skip" (they happen when the workflow token lacks
 *   permission for a PR, or the PR was deleted). They don't break the run.
 * - Network errors log a warning and are skipped.
 * - When no `token` is provided we still try unauthenticated; this is the
 *   developer-machine path with low traffic.
 */
export async function fetchPrBodies(
  prNumbers: number[],
  token?: string,
): Promise<Map<number, PrInfo>> {
  const map = new Map<number, PrInfo>();
  if (prNumbers.length === 0) return map;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "factorial-one-changelog-summarizer",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  for (const num of prNumbers) {
    try {
      const res = await fetch(`${API_BASE}/pulls/${num}`, { headers });

      if (res.status === 403 || res.status === 404) {
        console.error(
          `[github] PR #${num}: HTTP ${res.status} — skipping`,
        );
        await sleep(REQUEST_DELAY_MS);
        continue;
      }

      if (!res.ok) {
        console.error(
          `[github] PR #${num}: HTTP ${res.status} — skipping`,
        );
        await sleep(REQUEST_DELAY_MS);
        continue;
      }

      const json = (await res.json()) as { body?: string | null };
      const rawBody = typeof json.body === "string" ? json.body : "";
      const cleaned = cleanBoilerplate(rawBody);
      const truncated = truncateAtSentence(cleaned, MAX_BODY_CHARS);

      if (truncated.length > 0) {
        map.set(num, { number: num, body: truncated });
        console.error(
          `[github] PR #${num}: fetched (${truncated.length} chars)`,
        );
      } else {
        console.error(`[github] PR #${num}: empty body — skipping`);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[github] PR #${num}: error (${msg}) — skipping`);
    }

    await sleep(REQUEST_DELAY_MS);
  }

  return map;
}

/**
 * List pull requests merged into `main` within [from, to] (inclusive,
 * YYYY-MM-DD). Uses the Search API and paginates. This is the backbone of the
 * summary: a merged PR is "what actually shipped", with a real author and a
 * conventional-commit title we can classify deterministically.
 */
export async function listMergedPRs(
  from: string,
  to: string,
  token?: string,
): Promise<MergedPr[]> {
  const headers = ghHeaders(token);
  const q = `repo:${REPO} is:pr is:merged base:main merged:${from}..${to}`;
  const all: MergedPr[] = [];

  for (let page = 1; page <= 10; page++) {
    const url = `${SEARCH_BASE}?q=${encodeURIComponent(q)}&per_page=100&page=${page}&sort=created&order=asc`;
    let res: Response;
    try {
      res = await fetch(url, { headers });
    } catch (err) {
      console.error(
        `[github] search PRs page ${page}: ${err instanceof Error ? err.message : String(err)}`,
      );
      break;
    }

    if (!res.ok) {
      console.error(`[github] search PRs page ${page}: HTTP ${res.status}`);
      break;
    }

    const json = (await res.json()) as {
      items?: Array<{
        number: number;
        title: string;
        user?: { login?: string };
        labels?: Array<{ name?: string }>;
      }>;
    };

    const items = json.items ?? [];
    for (const it of items) {
      all.push({
        number: it.number,
        title: it.title,
        author: it.user?.login ?? "",
        labels: (it.labels ?? [])
          .map((l) => l.name ?? "")
          .filter((n) => n.length > 0),
      });
    }

    if (items.length < 100) break;
    await sleep(REQUEST_DELAY_MS);
  }

  console.error(`[github] Found ${all.length} merged PRs in ${from}..${to}`);
  return all;
}

/**
 * Fetch the list of files changed by a PR, including the per-file unified diff
 * (`patch`). We read the diff to detect deterministic signals — e.g. a story's
 * `tags` gaining `"stable"` (a stabilization) or a new `*.stories.tsx` (a new
 * component/pattern) — instead of trusting the PR title or the LLM.
 */
export async function fetchPrFiles(
  prNumber: number,
  token?: string,
): Promise<PrFile[]> {
  const headers = ghHeaders(token);
  const files: PrFile[] = [];

  for (let page = 1; page <= 10; page++) {
    let res: Response;
    try {
      res = await fetch(
        `${API_BASE}/pulls/${prNumber}/files?per_page=100&page=${page}`,
        { headers },
      );
    } catch (err) {
      console.error(
        `[github] PR #${prNumber} files: ${err instanceof Error ? err.message : String(err)}`,
      );
      break;
    }

    if (!res.ok) {
      if (res.status !== 404) {
        console.error(`[github] PR #${prNumber} files: HTTP ${res.status}`);
      }
      break;
    }

    const json = (await res.json()) as Array<{
      filename: string;
      status: string;
      patch?: string;
    }>;

    for (const f of json) {
      files.push({ filename: f.filename, status: f.status, patch: f.patch });
    }

    if (json.length < 100) break;
    await sleep(REQUEST_DELAY_MS);
  }

  return files;
}
