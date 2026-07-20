import { resolveStoryUrl } from "../collectors/stories.js";
import type {
  SummaryEnhancementEntry,
  SummaryJson,
  SummaryNewEntry,
  SummaryStabilizedEntry,
} from "../types.js";

/**
 * Deterministic plain-English replacements applied to every product-facing
 * string emitted by the LLM. The model is told to avoid jargon in the prompt
 * but we enforce a final pass so the published message is predictable.
 */
const JARGON_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\bprops\b/gi, "options"],
  [/\bprop\b/gi, "option"],
  [/\bcanvas mode\b/gi, "edit mode"],
  [/\bi18n\b/gi, "translations"],
  [/\bPageHeader\b/g, "page title area"],
  [/\bPageAction\b/g, "page title button"],
  [/\bblast radius\b/gi, ""],
  [
    /\bclarifying question UX\b/gi,
    "ability to ask clarifying questions mid-conversation",
  ],
  [/\bmotion polish\b/gi, "smoother animations"],
  [/\bpersistence\b/gi, "remembers your state between sessions"],
];

/** Normalize raw PR-body markdown into Slack-friendly inline text. */
function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, "") // drop heading markers (## Summary → Summary)
    .replace(/\*\*([^*]+)\*\*/g, "*$1*") // **bold** → *bold*
    .replace(/`{1,3}([^`]+)`{1,3}/g, "`$1`") // collapse code fences to inline
    .replace(/\s*\n+\s*/g, " ") // flatten line breaks
    .replace(/\s{2,}/g, " ")
    .replace(/^Summary\s+/i, "") // the leading "Summary" label adds nothing
    .trim();
}

function dejargon(text: string): string {
  let out = text;
  for (const [regex, replacement] of JARGON_REPLACEMENTS) {
    out = out.replace(regex, replacement);
  }
  // Collapse the double spaces / dangling " — " that omissions can leave behind.
  out = out.replace(/\s{2,}/g, " ").replace(/\s+—\s+\./g, ".").trim();
  return out;
}

function storybookLink(
  componentName: string,
  storyUrls: Map<string, string>,
): string | null {
  return resolveStoryUrl(componentName, storyUrls);
}

function joinSummaryAndDetail(summary: string, detail?: string): string {
  const s = dejargon(summary).replace(/\s+$/, "");
  if (!detail) return s;
  const d = dejargon(detail).replace(/^\s+/, "");
  if (d.length === 0) return s;
  // Ensure a clean separator without doubling punctuation.
  const trimmedSummary = s.replace(/[.\s]+$/, "");
  return `${trimmedSummary} — ${d}`;
}

function bulletNew(
  entry: SummaryNewEntry,
  storyUrls: Map<string, string>,
): string {
  const component = entry.component.trim();
  const text = joinSummaryAndDetail(entry.summary, entry.detail);
  let head = `• *${component}* — ${text}`;
  if (entry.author && entry.author.trim().length > 0) {
    head += ` _— by ${entry.author.trim()}_`;
  }

  // Prefer a pre-resolved deep-link to a specific story; otherwise fall back to
  // the component's docs page.
  const deepLink = entry.url;
  const docsLink = entry.storybook ? storybookLink(component, storyUrls) : null;
  const url = deepLink ?? docsLink;
  if (url) {
    const label = deepLink ? "View story" : "View in Storybook";
    return `${head}\n_<${url}|${label}>_`;
  }
  return head;
}

function bulletEnhancement(
  entry: SummaryEnhancementEntry,
  storyUrls: Map<string, string>,
): string {
  // Same shape as `new` entries for now; kept separate so we can diverge later.
  return bulletNew(entry as SummaryNewEntry, storyUrls);
}

function bulletStabilized(
  entry: SummaryStabilizedEntry,
  storyUrls: Map<string, string>,
): string {
  // Same shape as `new` entries; kept separate so we can diverge later.
  return bulletNew(entry as SummaryNewEntry, storyUrls);
}

/**
 * Strip markdown code fences and try to recover from the most common JSON
 * formatting mistake made by LLMs (Groq especially): literal newlines inside
 * a JSON string value, which would otherwise make `JSON.parse` fail.
 */
function stripFences(raw: string): string {
  let s = raw.trim();
  if (s.startsWith("```")) {
    s = s.replace(/^```(?:json)?\s*\n?/i, "");
    s = s.replace(/```\s*$/i, "");
  }
  return s.trim();
}

function sanitizeJsonNewlines(raw: string): string {
  // Walk the string; while inside a "double-quoted" region replace literal \n
  // and \r with their escaped forms. Respect backslash escapes so we don't
  // double-escape already-escaped quotes.
  let out = "";
  let inString = false;
  let escape = false;

  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];

    if (escape) {
      out += ch;
      escape = false;
      continue;
    }

    if (ch === "\\") {
      out += ch;
      escape = true;
      continue;
    }

    if (ch === '"') {
      inString = !inString;
      out += ch;
      continue;
    }

    if (inString && ch === "\n") {
      out += "\\n";
      continue;
    }
    if (inString && ch === "\r") {
      out += "\\r";
      continue;
    }
    if (inString && ch === "\t") {
      out += "\\t";
      continue;
    }

    out += ch;
  }

  return out;
}

export function parseSummaryJson(raw: string): SummaryJson {
  const stripped = stripFences(raw);
  const sanitized = sanitizeJsonNewlines(stripped);

  let parsed: unknown;
  try {
    parsed = JSON.parse(sanitized);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Failed to parse LLM output as JSON (${msg}). First 200 chars: ${sanitized.slice(0, 200)}`,
    );
  }

  if (
    typeof parsed !== "object" ||
    parsed === null ||
    !("sections" in parsed)
  ) {
    throw new Error("LLM output JSON is missing a top-level `sections` object");
  }

  return parsed as SummaryJson;
}

function isNonEmpty<T>(arr: T[] | undefined): arr is T[] {
  return Array.isArray(arr) && arr.length > 0;
}

function hasText(s: string | undefined): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

/**
 * Convert the parsed JSON into the `---`-separated plain text expected by the
 * Slack publishing step in `changelog-summary.yaml`.
 *
 * Returns `null` when every section is empty so the caller can fall back to
 * an "_No changes this week._" placeholder.
 */
export function jsonToSlackText(
  json: SummaryJson,
  storyUrls: Map<string, string>,
): string | null {
  const sections = json.sections ?? {};
  const parts: string[] = [];

  if (isNonEmpty(sections.new)) {
    const bullets = sections.new.map((e) => bulletNew(e, storyUrls)).join("\n\n");
    parts.push(`🚀 What's new\n\n${bullets}`);
  }

  if (isNonEmpty(sections.stabilized)) {
    const bullets = sections.stabilized
      .map((e) => bulletStabilized(e, storyUrls))
      .join("\n\n");
    parts.push(`✅ Now stable — safe to use\n\n${bullets}`);
  }

  if (isNonEmpty(sections.enhancements)) {
    const bullets = sections.enhancements
      .map((e) => bulletEnhancement(e, storyUrls))
      .join("\n\n");
    parts.push(`✨ Enhancements\n\n${bullets}`);
  }

  if (isNonEmpty(sections.breaking_changes)) {
    const bullets = sections.breaking_changes
      .map((e) => {
        const head = `• *${e.component.trim()}* — ${dejargon(e.summary)}`;
        const migration = hasText(e.migration)
          ? `\n_What to do: ${dejargon(stripMarkdown(e.migration))}_`
          : "";
        return `${head}${migration}`;
      })
      .join("\n\n");
    parts.push(`⚠️ Breaking changes — you may need to update your code\n\n${bullets}`);
  }

  if (parts.length === 0) return null;

  return parts.join("\n---\n");
}
