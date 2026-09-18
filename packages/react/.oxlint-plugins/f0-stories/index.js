/**
 * f0-stories — local oxlint JS plugin for Storybook story rules.
 */

/**
 * Story sources: the CSF file itself, and anything under a `__stories__/`
 * folder — the fixtures and mock widgets a story imports render into the same
 * tree, so they move its output just as surely as the story body does.
 */
const STORY_SOURCE = /\.stories\.[cm]?[jt]sx?$|[\\/]__stories__[\\/]/

/** `Object.method` accessed as a plain (non-computed) member. */
const isMemberOf = (node, object, property) =>
  node?.type === "MemberExpression" &&
  !node.computed &&
  node.object?.type === "Identifier" &&
  node.object.name === object &&
  node.property?.type === "Identifier" &&
  node.property.name === property

/** The reads that return something different on every run. */
const MOVING_CALLS = [
  ["Math", "random"],
  ["Date", "now"],
  ["performance", "now"],
  ["crypto", "randomUUID"],
]

/** `Math.random()` and friends — or a bare `new Date()`, which reads the clock. */
const movingSource = (node) => {
  if (node?.type === "CallExpression") {
    const found = MOVING_CALLS.find(([object, property]) =>
      isMemberOf(node.callee, object, property)
    )
    return found ? `${found[0]}.${found[1]}()` : null
  }
  // `new Date(…)` with an argument is a fixed date — the fix, not the problem.
  if (
    node?.type === "NewExpression" &&
    node.callee?.type === "Identifier" &&
    node.callee.name === "Date" &&
    (node.arguments?.length ?? 0) === 0
  ) {
    return "new Date()"
  }
  return null
}

/**
 * Props and object keys whose value ends up in an accessible name.
 *
 * Two families. The first renders as the name directly — a label, a title, a
 * heading. The second is a date or time that a component formats and then puts
 * in the name: `F0VersionHistory` builds `aria-label="Version {date} by
 * {author}"`, chat bubbles announce a sent time, and so on.
 */
const NAMING_KEYS = new Set([
  "alt",
  "ariaLabel",
  "aria-label",
  "caption",
  "description",
  "heading",
  "label",
  "name",
  "placeholder",
  "subtitle",
  "text",
  "title",
  "tooltip",
  // Formatted into a name by the component that receives them.
  "createdAt",
  "date",
  "datetime",
  "editedAt",
  "sentAt",
  "time",
  "timestamp",
  "updatedAt",
])

/** JSX attributes that name the element they sit on. */
const NAMING_ATTRIBUTES = new Set([
  "alt",
  "aria-description",
  "aria-label",
  "aria-placeholder",
  "aria-roledescription",
  "aria-valuetext",
  "label",
  "placeholder",
  "title",
])

const isNamingKey = (property) => {
  if (property?.type !== "Property" || property.computed) return false
  const key = property.key?.name ?? property.key?.value
  return typeof key === "string" && NAMING_KEYS.has(key)
}

/**
 * Walk a subtree looking for a moving read, and hand each one to `report`.
 *
 * Stops descending into a nested property whose key is *not* a naming one, so
 * `title: { id: Math.random() }` stays quiet — the random value is the id
 * there, not the title.
 */
const findMovingReads = (node, report) => {
  if (!node || typeof node !== "object") return

  if (Array.isArray(node)) {
    for (const child of node) findMovingReads(child, report)
    return
  }
  if (typeof node.type !== "string") return

  const source = movingSource(node)
  if (source) {
    report(node, source)
    return
  }

  // A nested property carries a key of its own, and the `Property` visitor
  // below reaches it independently. Stopping here keeps `title: { id:
  // Math.random() }` quiet and avoids reporting a nested name twice.
  if (node.type === "Property") return

  for (const [key, child] of Object.entries(node)) {
    if (key === "parent" || key === "type") continue
    findMovingReads(child, report)
  }
}

/**
 * A story's *accessible names* must be the same on every run.
 *
 * CI captures each story's aria surface — its `role` + accessible-name pairs —
 * and diffs it against the baseline from the latest `main` run
 * (`.scripts/check-aria-surface.ts`). A name built from `Math.random()` or the
 * clock is therefore reported as a rename on every run of every PR, whichever
 * files that PR touched, which buries the real renames the check exists to
 * catch.
 *
 * Deliberately narrow: it only reports a moving read that lands somewhere a
 * name comes from — rendered JSX text, a naming attribute, or a fixture key
 * that a component formats into a name. A random id, key, coordinate or delay
 * never reaches the accessible name, so it is none of this rule's business.
 *
 * A story that genuinely needs the real clock in a naming position — a
 * "relative time" demo, say — keeps it behind a disable comment naming the
 * reason, so it lands in the diff where a reviewer can judge it.
 */
const noNondeterministicStoryNames = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Story accessible names must not depend on the clock or a random number.",
    },
    messages: {
      naming:
        "`{{source}}` ends up in this story's accessible name ({{position}}). CI diffs each story's names against `main`, so a moving value reports a phantom rename on every PR. Derive it from a fixed index or a seeded sequence, or pass a fixed date — or keep it behind an oxlint-disable comment saying why the real value is needed.",
    },
    schema: [],
  },
  create(context) {
    const filename = context.filename ?? context.getFilename?.() ?? ""
    // Registered as a plain warning rather than through an override, so the
    // rule decides for itself where it applies.
    if (!STORY_SOURCE.test(filename)) return {}

    const report = (position) => (node, source) =>
      context.report({
        node,
        messageId: "naming",
        data: { source, position },
      })

    return {
      // `title: \`Title ${Math.random()}\`` — a fixture key a component names
      // itself from.
      Property(node) {
        if (!isNamingKey(node)) return
        const key = node.key?.name ?? node.key?.value
        findMovingReads(node.value, report(`\`${key}\``))
      },

      // `<img alt={…} />`, `<button aria-label={…} />`
      JSXAttribute(node) {
        const name = node.name?.name
        if (typeof name !== "string" || !NAMING_ATTRIBUTES.has(name)) return
        findMovingReads(node.value, report(`\`${name}\``))
      },

      // `<p>{…}</p>` — rendered text is the accessible name of what wraps it.
      JSXElement(node) {
        for (const child of node.children ?? []) {
          if (child?.type !== "JSXExpressionContainer") continue
          findMovingReads(child.expression, report("rendered text"))
        }
      },
      JSXFragment(node) {
        for (const child of node.children ?? []) {
          if (child?.type !== "JSXExpressionContainer") continue
          findMovingReads(child.expression, report("rendered text"))
        }
      },
    }
  },
}

export default {
  meta: { name: "f0-stories" },
  rules: { "no-nondeterministic-story-names": noNondeterministicStoryNames },
}
