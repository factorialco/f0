/**
 * Build a map from component name to its precise Storybook docs URL by
 * fetching the published Storybook's `index.json`, and (optionally) resolve
 * deep-links to individual stories.
 *
 * IMPORTANT: we never scan local story files. Local titles (e.g.
 * `Button/Button`) often differ from the published titles (e.g.
 * `Components/Button/Button`), so the only reliable source of truth is the
 * deployed Storybook.
 */

const STORYBOOK_BASE = "https://ds.factorial.dev";
const STORYBOOK_INDEX_URL = `${STORYBOOK_BASE}/index.json`;

interface StorybookIndexEntry {
  id: string;
  title: string;
  name?: string;
  type?: string;
}

interface StorybookIndex {
  entries: Record<string, StorybookIndexEntry>;
}

/**
 * Resolved Storybook index:
 * - `docsUrlByKey`: component lookup-key → docs page URL
 * - `docsIdByKey`:  component lookup-key → docs id prefix (e.g. `components-card`)
 * - `storyIds`:     every individual story id (type `"story"`), used to verify
 *                   a deep-link actually exists before we emit it
 */
export interface StoryIndex {
  docsUrlByKey: Map<string, string>;
  docsIdByKey: Map<string, string>;
  storyIds: Set<string>;
  /** Component key → a representative story URL (fallback when there's no docs page). */
  storyUrlByKey: Map<string, string>;
  /** Component key → best URL: the docs page if it exists, else a story. */
  urlByKey: Map<string, string>;
}

/**
 * Derive lookup keys for a Storybook docs entry from its title. Only the last
 * segment of the title path is meaningful for matching component names — the
 * leading folders (e.g. `Components/`, `SDS/AI/`) are organisational noise.
 *
 * Examples:
 *   "Components/Button/Button"     → ["button", "f0button"]
 *   "Patterns/Forms/F0Form"        → ["f0form", "form"]
 *   "SDS/AI/F0AiChat"              → ["f0aichat", "aichat"]
 */
const GENERIC_SEGMENTS =
  /^(components?|patterns?|kits?|sds|lib|library|hooks?|utilities|charts?|experimental|forms?|navigation|information|actions?|home|communities|data|datacollection|visualizations?|inputs?|layouts?|surveys?|ai)$/i;

export function keysForTitle(title: string): string[] {
  const segments = title.split("/").map((s) => s.trim()).filter(Boolean);
  if (segments.length === 0) return [];

  const keys = new Set<string>();
  const addVariants = (name: string) => {
    const lower = name.toLowerCase().replace(/\s+/g, "");
    if (lower.length === 0) return;
    keys.add(lower);
    if (lower.startsWith("f0")) {
      const stripped = lower.slice(2);
      if (stripped.length > 0) keys.add(stripped);
    } else {
      keys.add(`f0${lower}`);
    }
  };

  // The leaf segment is the primary key (e.g. "Components/Card" → card/f0card).
  addVariants(segments[segments.length - 1]);

  // Also index component-like ancestor folders, so docs split into sub-pages
  // (e.g. "Kits/F0DataChart/Bar") still resolve by the component name
  // ("f0datachart"), not only the leaf ("bar").
  for (const seg of segments.slice(0, -1)) {
    if (GENERIC_SEGMENTS.test(seg)) continue;
    if (/^(F0|One)/.test(seg) || /^[A-Z][A-Za-z0-9]+$/.test(seg)) {
      addVariants(seg);
    }
  }

  return [...keys];
}

/**
 * Fetch the published Storybook `index.json` and build the resolved index.
 * Returns empty maps/sets (never throws) if the network call fails — callers
 * should treat a missing URL as "no precise link available".
 */
export async function collectStoryIndex(): Promise<StoryIndex> {
  const docsUrlByKey = new Map<string, string>();
  const docsIdByKey = new Map<string, string>();
  const storyIds = new Set<string>();
  const storyUrlByKey = new Map<string, string>();

  const build = (): StoryIndex => {
    // Best URL per component: prefer the docs page, fall back to a story so a
    // component that's visible in Storybook always gets a link.
    const urlByKey = new Map(storyUrlByKey);
    for (const [key, url] of docsUrlByKey) urlByKey.set(key, url);
    return { docsUrlByKey, docsIdByKey, storyIds, storyUrlByKey, urlByKey };
  };

  try {
    const res = await fetch(STORYBOOK_INDEX_URL);
    if (!res.ok) {
      console.error(
        `[stories] Failed to fetch index.json: HTTP ${res.status} — continuing without Storybook links`,
      );
      return build();
    }

    const index = (await res.json()) as StorybookIndex;
    if (!index?.entries || typeof index.entries !== "object") {
      console.error(
        "[stories] index.json missing 'entries' object — continuing without Storybook links",
      );
      return build();
    }

    let docsCount = 0;
    for (const entry of Object.values(index.entries)) {
      if (typeof entry.id !== "string" || typeof entry.title !== "string") {
        continue;
      }

      if (entry.type === "story") {
        storyIds.add(entry.id);
        const storyUrl = `${STORYBOOK_BASE}/?path=/story/${entry.id}`;
        for (const key of keysForTitle(entry.title)) {
          // First story per component wins (usually the primary/default).
          if (!storyUrlByKey.has(key)) storyUrlByKey.set(key, storyUrl);
        }
        continue;
      }

      if (entry.type !== "docs") continue;

      const url = `${STORYBOOK_BASE}/?path=/docs/${entry.id}`;
      const prefix = entry.id.replace(/--documentation$/, "");
      for (const key of keysForTitle(entry.title)) {
        // First docs entry wins.
        if (!docsUrlByKey.has(key)) {
          docsUrlByKey.set(key, url);
          docsIdByKey.set(key, prefix);
        }
      }
      docsCount += 1;
    }

    console.error(
      `[stories] Indexed ${docsCount} docs pages, ${storyIds.size} stories, ${docsUrlByKey.size}+${storyUrlByKey.size} keys`,
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(
      `[stories] Could not fetch Storybook index (${msg}) — continuing without Storybook links`,
    );
  }

  return build();
}

/**
 * Backwards-compatible helper returning just the component → docs URL map.
 */
export async function collectStoryUrls(): Promise<Map<string, string>> {
  return (await collectStoryIndex()).urlByKey;
}

function lookupKeys(componentName: string): string[] {
  const raw = componentName.trim();
  if (raw.length === 0) return [];
  const lower = raw.toLowerCase();
  const compact = lower.replace(/\s+/g, "");

  const variants = new Set<string>();
  variants.add(lower);
  variants.add(compact);
  if (compact.startsWith("f0")) {
    const stripped = compact.slice(2);
    if (stripped.length > 0) variants.add(stripped);
  } else {
    variants.add(`f0${compact}`);
  }
  // Components are often coded with a `One` prefix but published without it
  // (e.g. `OneEmptyState` → `Components/EmptyState`, `OneDataCollection` →
  // `Patterns/Data collection`). Try the de-prefixed form too.
  if (compact.startsWith("one")) {
    const stripped = compact.slice(3);
    if (stripped.length > 0) variants.add(stripped);
  }
  return [...variants];
}

/**
 * Resolve a Storybook docs URL for a component name. Returns `null` when no
 * precise match exists — callers MUST NOT fall back to a generic search URL.
 */
export function resolveStoryUrl(
  componentName: string,
  storyUrls: Map<string, string>,
): string | null {
  for (const variant of lookupKeys(componentName)) {
    const url = storyUrls.get(variant);
    if (url) return url;
  }
  return null;
}

/**
 * Convert a story's exported name (e.g. `WithAlertAction`) to the kebab id
 * segment Storybook uses (`with-alert-action`). Approximate — we always verify
 * the resulting id against the real index before using it, so a mismatch just
 * means we fall back to the component docs page (never a broken link).
 */
export function kebabFromExport(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Za-z])([0-9])/g, "$1-$2")
    .replace(/([0-9])([A-Za-z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");
}

/**
 * Resolve a deep-link to a SPECIFIC story for `componentName` given an exported
 * story name from the PR diff. Returns `null` unless the computed story id
 * actually exists in the published index — that verification is what keeps the
 * link veracious.
 */
export function resolveStoryDeepLink(
  componentName: string,
  exportName: string,
  index: StoryIndex,
): string | null {
  let prefix: string | undefined;
  for (const variant of lookupKeys(componentName)) {
    prefix = index.docsIdByKey.get(variant);
    if (prefix) break;
  }
  if (!prefix) return null;

  const id = `${prefix}--${kebabFromExport(exportName)}`;
  if (index.storyIds.has(id)) {
    return `${STORYBOOK_BASE}/?path=/story/${id}`;
  }
  return null;
}
