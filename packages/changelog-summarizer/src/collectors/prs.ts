/**
 * Turn merged pull requests into a deterministic, factual summary skeleton.
 *
 * The whole point of this module is veracity: every entry is derived from a
 * real merged PR — its conventional-commit title (type + scope) and its changed
 * files (the diff) — NOT from the LLM. The LLM only rewrites the wording
 * afterwards, fact-checked against this skeleton.
 *
 * Signals (per PR, in priority order):
 *   1. New component/pattern  → a `*.stories.tsx` file was ADDED.
 *   2. Stabilization          → an existing story diff NEWLY adds a
 *                               `tags: [… "stable" …]` line (promoted to stable).
 *   3. Breaking change        → conventional `!` in the title.
 *   4. Enhancement            → `feat`/`perf` on a resolvable component, with a
 *                               deep-link to the specific story the PR added.
 *   5. Fix                    → `fix` (folded into the technical thread reply).
 *   6. Infrastructure / other → everything else (folded into the thread reply).
 */

import type {
  SummaryBreakingChangeEntry,
  SummaryEnhancementEntry,
  SummaryJson,
  SummaryNewEntry,
  SummaryStabilizedEntry,
} from "../types.js";
import type { MergedPr, PrFile } from "./github.js";
import {
  resolveStoryDeepLink,
  resolveStoryUrl,
  type StoryIndex,
} from "./stories.js";

export interface PrWithFiles extends MergedPr {
  files: PrFile[];
  /** PR description, fetched for breaking-change PRs to explain the migration. */
  body?: string;
}

/** Conventional-commit types whose diff we must inspect to find new/stable. */
export const TYPES_NEEDING_FILES = new Set(["feat", "perf", "refactor", "docs"]);

interface ParsedTitle {
  type: string;
  scope?: string;
  breaking: boolean;
  subject: string;
}

const TITLE_RE = /^(\w+)(?:\(([^)]+)\))?(!)?:\s*(.+)$/;

export function parseConventionalTitle(title: string): ParsedTitle {
  const m = title.trim().match(TITLE_RE);
  if (!m) return { type: "", breaking: false, subject: title.trim() };
  return {
    type: m[1].toLowerCase(),
    scope: m[2]?.trim() || undefined,
    breaking: m[3] === "!",
    subject: m[4].trim(),
  };
}

const STORY_RE = /\.stories\.tsx$/;
const REACT_SRC = "packages/react/src/";

// Folder/segment words that are never a component name.
const GENERIC = new Set([
  "components", "patterns", "kits", "sds", "lib", "hooks", "experimental",
  "utilities", "ui", "react", "core", "docs", "ai", "examples", "playground",
  "internal", "dashboard", "deps", "repo", "ci", "build",
]);

/** A real F0 component name: PascalCase, or F0/One-prefixed. No slashes. */
function isComponentName(name: string | null | undefined): name is string {
  if (!name || name.includes("/")) return false;
  if (GENERIC.has(name.toLowerCase())) return false;
  return /^(F0|One)/.test(name) || /^[A-Z][A-Za-z0-9]+$/.test(name);
}

function isReactStory(path: string): boolean {
  return path.startsWith(REACT_SRC) && STORY_RE.test(path);
}

/** Extract a (validated) component name from a story file path, else null. */
function componentFromStoryPath(path: string): string | null {
  const parts = path.split("/");
  const storiesIdx = parts.findIndex((p) => p === "__stories__");
  let candidate: string | null = null;
  if (storiesIdx > 0) {
    candidate = parts[storiesIdx - 1];
  } else {
    const fileIdx = parts.findIndex((p) => STORY_RE.test(p));
    if (fileIdx > 0) {
      const base = parts[fileIdx].replace(STORY_RE, "");
      candidate = base.toLowerCase() === "index" ? parts[fileIdx - 1] : base;
    }
  }
  return isComponentName(candidate) ? candidate : null;
}

/**
 * Detect a brand-new component/pattern from the PR title: "add/introduce
 * <Component>", where <Component> is the OBJECT of the verb and looks like a
 * component name (PascalCase / F0·One). This distinguishes "add F0Graph
 * pattern" (new) from "add alert option" (an enhancement of an existing
 * component — "alert" isn't a component). New-vs-enhancement is ultimately a
 * judgement call the LLM finalises; this just gets the common cases right.
 */
function newComponentFromTitle(
  subject: string,
): { component: string; kind: "pattern" | "component" } | null {
  // "add <Component> [experimental] component|pattern" — the trailing
  // "component"/"pattern" keyword is what separates a genuinely new component
  // from a docs PR ("add <Component> Storybook documentation") or a feature
  // ("add alert option").
  const m = subject.match(
    /\b(?:[Aa]dd(?:s|ed)?|[Ii]ntroduces?|[Nn]ew)\s+(?:the\s+|an?\s+)?((?:F0|One)[A-Za-z0-9]+|[A-Z][A-Za-z0-9]{2,})\s+(?:\w+\s+){0,2}(component|pattern)s?\b/,
  );
  if (!m || !isComponentName(m[1])) return null;
  return {
    component: m[1],
    kind: m[2].toLowerCase() === "pattern" ? "pattern" : "component",
  };
}

/**
 * Resolve a component name from the PR title — the last PascalCase / F0·One
 * token that actually exists in Storybook. Used when the conventional scope is
 * generic (e.g. `feat(react): … in SurveyFormBuilder`) so we name the real
 * component instead of a folder picked off a story path.
 */
function componentFromTitle(
  subject: string,
  storyIndex?: StoryIndex,
): string | null {
  if (!storyIndex) return null;
  const tokens = subject.match(/\b(?:F0|One)?[A-Z][A-Za-z0-9]+\b/g) ?? [];
  let best: string | null = null;
  for (const t of tokens) {
    if (isComponentName(t) && resolveStoryUrl(t, storyIndex.urlByKey)) best = t;
  }
  return best;
}

const MDX_RE = /\.mdx$/;

/**
 * Extract the component a `.mdx` doc file belongs to. In F0, writing a
 * component's manual MDX documentation is the final Definition-of-Done step —
 * so a newly ADDED `<Component>.mdx` is the reliable signal that the component
 * is now genuinely stable (vs. just carrying a `stable` tag set prematurely).
 */
function componentFromMdxPath(path: string): string | null {
  if (!path.startsWith(REACT_SRC) || !MDX_RE.test(path)) return null;
  const parts = path.split("/");
  const storiesIdx = parts.findIndex((p) => p === "__stories__");
  const candidate = storiesIdx > 0 ? parts[storiesIdx - 1] : parts[parts.length - 2];
  return isComponentName(candidate) ? candidate : null;
}

/**
 * Components stabilized by a PR = those whose manual MDX docs were ADDED in it
 * (DoD complete). Detected purely from the PR's changed files, so a `stable`
 * tag set without the accompanying docs does NOT count.
 */
function stabilizedComponents(files: PrFile[]): string[] {
  return [
    ...new Set(
      files
        .filter((f) => f.status === "added")
        .map((f) => componentFromMdxPath(f.filename))
        .filter((c): c is string => c !== null),
    ),
  ];
}

/** Story exports added by this diff (e.g. `+export const WithAlertAction = …`). */
function addedStoryExports(patch?: string): string[] {
  if (!patch) return [];
  const out: string[] = [];
  for (const l of patch.split("\n")) {
    if (!l.startsWith("+") || l.startsWith("+++")) continue;
    const m = l.match(/^\+\s*export const (\w+)\s*[:=]/);
    if (m && !/^(meta|default)$/i.test(m[1])) out.push(m[1]);
  }
  return out;
}

function scopeIsComponent(scope?: string): scope is string {
  return isComponentName(scope);
}

function cleanSubject(subject: string): string {
  const s = subject.replace(/\s+#\d+\s*$/, "").replace(/[.\s]+$/, "").trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export interface PrFacts {
  skeleton: SummaryJson;
  fixes: string[];
  infra: string[];
  contributors: string[];
  unclassified: string[];
}

export function classifyMergedPrs(
  prs: PrWithFiles[],
  storyIndex?: StoryIndex,
  foundationsAuthors?: Set<string>,
): PrFacts {
  const newEntries: SummaryNewEntry[] = [];
  const stabilized: SummaryStabilizedEntry[] = [];
  const enhancements: SummaryEnhancementEntry[] = [];
  // Raw per-PR enhancements, grouped by component after the loop so a component
  // with several PRs this period becomes ONE bullet (less noise).
  const rawEnhancements: Array<{
    component: string;
    summary: string;
    author: string;
    url?: string;
  }> = [];
  const breaking: SummaryBreakingChangeEntry[] = [];
  const fixes: string[] = [];
  const infra: string[] = [];
  const contributors = new Set<string>();
  const unclassified: string[] = [];

  for (const pr of prs) {
    const { type, scope, breaking: isBreaking, subject } =
      parseConventionalTitle(pr.title);
    const summary = cleanSubject(subject);
    const reactStories = pr.files.filter((f) => isReactStory(f.filename));

    // 1. New component/pattern — the PR title introduces it ("add <Component>").
    //    Adding a feature to an existing component is NOT new — it's an
    //    enhancement.
    const newComp = newComponentFromTitle(subject);
    if (newComp) {
      newEntries.push({
        component: newComp.component,
        summary,
        detail: newComp.kind === "pattern" ? "New pattern" : undefined,
        storybook: true,
        author: pr.author,
      });
      contributors.add(pr.author);
      continue;
    }

    // 2. Stabilization — the component's manual MDX docs were added (the final
    //    Definition-of-Done step). NOT inferred from the `stable` tag alone.
    //    AND only counts if the author is on the F0/Foundations team: only
    //    Foundations promotes to stable; other teams can ship new components
    //    but can't mark something stable.
    const stabilizedComps = stabilizedComponents(pr.files);
    if (stabilizedComps.length > 0) {
      const byFoundations =
        !foundationsAuthors || foundationsAuthors.has(pr.author);
      if (byFoundations) {
        for (const component of stabilizedComps) {
          stabilized.push({
            component,
            summary: "Now documented and stable — safe to use in production",
            storybook: true,
            author: pr.author,
          });
        }
        contributors.add(pr.author);
        continue;
      }
      // MDX docs added by a non-Foundations author → NOT a stable promotion.
      // Fall through and let it be classified as an enhancement/other instead.
    }

    // 3. Breaking change
    if (isBreaking) {
      breaking.push({
        component: isComponentName(scope) ? scope : "F0",
        summary,
        // The PR description carries the migration; the LLM polishes it later.
        migration: pr.body?.trim() ?? "",
      });
      contributors.add(pr.author);
      continue;
    }

    // 4. Enhancement (feat/perf on a resolvable component, with story deep-link)
    if (type === "feat" || type === "perf") {
      const component = scopeIsComponent(scope)
        ? scope
        : componentFromTitle(subject, storyIndex) ??
          reactStories
            .map((f) => componentFromStoryPath(f.filename))
            .find((c): c is string => c !== null) ??
          null;

      if (component) {
        let url: string | undefined;
        if (storyIndex) {
          const exports = reactStories.flatMap((f) =>
            addedStoryExports(f.patch),
          );
          for (const ex of exports) {
            const link = resolveStoryDeepLink(component, ex, storyIndex);
            if (link) {
              url = link;
              break;
            }
          }
        }
        rawEnhancements.push({ component, summary, author: pr.author, url });
        contributors.add(pr.author);
      } else {
        // A feature with no resolvable component → keep it out of the clean
        // product sections; let it live in the technical thread instead.
        infra.push(summary);
      }
      continue;
    }

    // 5. Fix
    if (type === "fix") {
      fixes.push(summary);
      continue;
    }

    // 6. Infra / other
    infra.push(summary);
    if (type === "") unclassified.push(`#${pr.number} ${pr.title}`);
  }

  // Group enhancements by component: one bullet per component, with the extra
  // changes folded into `detail`. A deep-link is only kept when the component
  // had a single enhancement (otherwise it's ambiguous → docs page).
  const byComponent = new Map<string, typeof rawEnhancements>();
  for (const e of rawEnhancements) {
    const list = byComponent.get(e.component) ?? [];
    list.push(e);
    byComponent.set(e.component, list);
  }
  for (const [component, group] of byComponent) {
    const summaries = [...new Set(group.map((g) => g.summary))];
    const authors = [...new Set(group.map((g) => g.author))].filter(Boolean);
    enhancements.push({
      component,
      summary: summaries[0],
      detail:
        summaries.length > 1
          ? `Also: ${summaries.slice(1).join("; ")}`
          : undefined,
      storybook: true,
      author: authors.join(", "),
      url: group.length === 1 ? group[0].url : undefined,
    });
  }

  const skeleton: SummaryJson = {
    sections: {
      ...(newEntries.length > 0 ? { new: newEntries } : {}),
      ...(stabilized.length > 0 ? { stabilized } : {}),
      ...(enhancements.length > 0 ? { enhancements } : {}),
      ...(breaking.length > 0 ? { breaking_changes: breaking } : {}),
    },
  };

  return {
    skeleton,
    fixes,
    infra,
    contributors: [...contributors].filter(Boolean),
    unclassified,
  };
}
