/**
 * Sidebar remap — a design layer over Storybook's physical folder structure.
 *
 * Storybook decides a story's sidebar section by prepending the `titlePrefix`
 * of the matched `stories` entry (see `.storybook/main.ts`) to the story's own
 * `title`. That coupling means relocating a component to another *section*
 * normally requires physically moving its folder and rewriting every import.
 *
 * These pure helpers back a custom indexer (in `.storybook/main.ts`) that
 * breaks the coupling WITHOUT moving files: the indexer parses the story as
 * usual, then rewrites the leading section segment of the resulting title. The
 * file stays put, all `@/` imports keep working, and the component appears
 * under a different section.
 *
 * NOTE: `SIDEBAR_REMAP` is intentionally EMPTY. This module is the reusable
 * mechanism, not a set of edits — with no rules the indexer is a no-op. Add a
 * rule only when you need to move a component ACROSS sections (something the
 * built-in `titlePrefix` cannot express, since it is per-directory). For plain
 * section renames or nesting, prefer editing `titlePrefix` directly.
 */

export type SidebarRemapRule = {
  /** Matched against a story file's (slash-normalised) absolute path. */
  pattern: RegExp
  /** Top-level section that replaces the physical one derived from titlePrefix. */
  section: string
}

/**
 * Remap rules. Empty by default. Example — show `F0Button` (which lives in
 * `src/components`) under `Experimental` without moving it:
 *
 *   { pattern: /\/components\/F0Button\/.*\.stories\.[jt]sx?$/, section: "Experimental" }
 */
export const SIDEBAR_REMAP: SidebarRemapRule[] = []

/**
 * A single RegExp matching every remapped file, for an indexer's `test`.
 * With no rules it returns a never-match pattern so the indexer stays inert.
 */
export const buildRemapTest = (
  rules: SidebarRemapRule[] = SIDEBAR_REMAP
): RegExp =>
  rules.length === 0
    ? /(?!)/
    : new RegExp(rules.map(({ pattern }) => `(?:${pattern.source})`).join("|"))

/** Returns the target section for a file, or `undefined` if no rule matches. */
export const resolveRemapSection = (
  fileName: string,
  rules: SidebarRemapRule[] = SIDEBAR_REMAP
): string | undefined => {
  const normalized = fileName.replace(/\\/g, "/")
  return rules.find(({ pattern }) => pattern.test(normalized))?.section
}

/**
 * Replace the leading section segment (e.g. "Components/…") with the mapped
 * section (e.g. "Experimental/…"). Storybook's parser has already applied the
 * physical `titlePrefix`, so the first path segment is always that section.
 */
export const remapTitle = (title: string, section: string): string =>
  [section, ...title.split("/").slice(1)].join("/")
