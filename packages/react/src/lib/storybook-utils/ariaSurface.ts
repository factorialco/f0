/**
 * The **aria surface**: the set of `role` + accessible-name pairs a story
 * renders.
 *
 * This is the contract consumers actually query — `getByRole("button", { name:
 * "Clear" })` in a unit test, `cy.findByRole(...)` in a Cypress suite — and
 * nothing else in CI watches it:
 *
 * - the public API surface check (`.scripts/check-api-surface.ts`) runs
 *   `ts.createProgram` over the rolled-up `.d.ts` files. Declarations hold
 *   types, not values, so an `aria-label` hardcoded in a component body (there
 *   are dozens — `F0InputField`'s "Clear", `Arrows`' "Increase"/"Decrease",
 *   `pagination`'s "Go to next page") can change with a byte-identical diff.
 * - axe (`.storybook/test-runner.ts`) is an *absolute* check: it asks "does
 *   this element have a name?", never "is it the same name as last week?". A
 *   rename from "Clear" to "Clear input" keeps every rule green.
 * - Chromatic diffs pixels. A DOM change that renders identically passes.
 *
 * So this module extracts the queryable identity of every node in a story and
 * the diff script (`.scripts/check-aria-surface.ts`) compares it against the
 * baseline captured on `main`.
 *
 * NOTE: kept dependency-free and side-effect-free on purpose — the Storybook
 * test-runner imports it through its own loader (with an explicit `.ts`
 * extension, see the import in `.storybook/test-runner.ts`).
 */

/** One node of a Playwright aria snapshot, reduced to what a query can target. */
export interface AriaNode {
  role: string
  /** The accessible name, or `null` when the node has none. */
  name: string | null
  /** Heading level, when the node carries `[level=N]`. */
  level: number | null
}

/**
 * Roles worth tracking even when they carry no accessible name.
 *
 * An unnamed node can't break a name-based query, so by default a node only
 * enters the surface once it has a name — that keeps prose-heavy stories from
 * emitting a wall of anonymous `paragraph` / `listitem` entries that churn on
 * every copy edit.
 *
 * These roles are the exception: tests routinely query them bare
 * (`getByRole("button")`, `within(getByRole("dialog"))`), so their *count*
 * matters even nameless. Deliberately excludes `list`, `listitem` and
 * `paragraph`, which are the noisiest structural roles in this library.
 */
export const NAMELESS_ROLES_TRACKED: ReadonlySet<string> = new Set([
  "alert",
  "alertdialog",
  "banner",
  "button",
  "cell",
  "checkbox",
  "columnheader",
  "combobox",
  "complementary",
  "contentinfo",
  "dialog",
  "form",
  "grid",
  "gridcell",
  "heading",
  "link",
  "listbox",
  "main",
  "menu",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "navigation",
  "option",
  "progressbar",
  "radio",
  "region",
  "row",
  "rowheader",
  "search",
  "searchbox",
  "slider",
  "spinbutton",
  "status",
  "switch",
  "tab",
  "table",
  "tablist",
  "tabpanel",
  "textbox",
  "toolbar",
  "tooltip",
  "tree",
  "treeitem",
])

/**
 * Snapshot entries that are content rather than a queryable role. Playwright
 * emits raw strings as `- text: …`; `text` is not an ARIA role, and the copy it
 * carries changes on every wording tweak.
 */
const NON_ROLE_ENTRIES: ReadonlySet<string> = new Set(["text"])

/** Matches a YAML list item, capturing everything after the `- `. */
const NODE_LINE = /^\s*-\s+(.*)$/
/** A role token: the leading identifier of a node header. */
const ROLE_TOKEN = /^([a-zA-Z][a-zA-Z-]*)/
/** A double-quoted accessible name, allowing backslash escapes. */
const QUOTED_NAME = /^\s+"((?:[^"\\]|\\.)*)"/
const LEVEL_ATTR = /\[level=(\d+)\]/

/**
 * Read a YAML single-quoted scalar starting at index 0, returning its decoded
 * contents (`''` is an escaped `'`). Playwright wraps a whole node header in
 * single quotes when the accessible name contains characters YAML would
 * otherwise read as syntax — e.g. `- 'button "It''s here"'`.
 *
 * Returns `null` when the scalar is never closed (a truncated line).
 */
function readSingleQuoted(s: string): string | null {
  let out = ""
  let i = 1
  while (i < s.length) {
    if (s[i] === "'") {
      if (s[i + 1] === "'") {
        out += "'"
        i += 2
        continue
      }
      return out
    }
    out += s[i]
    i++
  }
  return null
}

/**
 * Parse one node header (the text after `- `) into its queryable identity.
 * Returns `null` for content entries and anything unparseable — a malformed
 * line must never take the run down.
 */
export function parseNodeHeader(raw: string): AriaNode | null {
  let s = raw.trim()
  if (!s) return null

  if (s.startsWith("'")) {
    const decoded = readSingleQuoted(s)
    if (decoded === null) return null
    s = decoded
  }

  const roleMatch = ROLE_TOKEN.exec(s)
  if (!roleMatch) return null
  const role = roleMatch[1]
  if (NON_ROLE_ENTRIES.has(role)) return null

  let rest = s.slice(role.length)

  let name: string | null = null
  const nameMatch = QUOTED_NAME.exec(rest)
  if (nameMatch) {
    // Undo the backslash escaping Playwright applies inside the quotes.
    name = nameMatch[1].replace(/\\(.)/g, "$1")
    rest = rest.slice(nameMatch[0].length)
  }

  const levelMatch = LEVEL_ATTR.exec(rest)
  const level = levelMatch ? Number(levelMatch[1]) : null

  return { role, name, level }
}

/**
 * The stable key a node is counted under — and the string shown in the PR
 * comment. Mirrors how the node would be queried:
 *
 *   button "Clear"
 *   heading "Settings" [level=2]
 *   textbox
 */
export function nodeKey(node: AriaNode): string {
  const name = node.name ? ` "${node.name}"` : ""
  const level = node.level !== null ? ` [level=${node.level}]` : ""
  return `${node.role}${name}${level}`
}

/** A story's aria surface: node key → how many times it appears. */
export type AriaSurface = Record<string, number>

/**
 * Reduce a Playwright `ariaSnapshot()` string to the story's aria surface.
 *
 * Counts, not a set: "there used to be three buttons named Remove and now
 * there is one" is exactly the kind of break a `getAllByRole` assertion trips
 * over, and a set would hide it.
 */
export function extractAriaSurface(snapshot: string): AriaSurface {
  const surface: AriaSurface = {}
  for (const line of snapshot.split("\n")) {
    const lineMatch = NODE_LINE.exec(line)
    if (!lineMatch) continue

    const node = parseNodeHeader(lineMatch[1])
    if (!node) continue
    // Unnamed nodes only count for the roles tests query bare.
    if (!node.name && !NAMELESS_ROLES_TRACKED.has(node.role)) continue

    const key = nodeKey(node)
    surface[key] = (surface[key] ?? 0) + 1
  }
  return surface
}
