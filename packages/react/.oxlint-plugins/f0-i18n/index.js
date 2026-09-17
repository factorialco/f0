/**
 * f0-i18n — local oxlint JS plugin for the translation layer.
 */

/** Names that carry copy, as a whole name or a camelCase suffix. */
const TEXT_WORDS =
  "label|title|subtitle|description|placeholder|text|message|tooltip|caption|heading|hint|cta|alt|copy|prompt|legend"
const TEXT_SUFFIX = new RegExp(`(^|[a-z])(${TEXT_WORDS})s?$`, "i")

/** Text-bearing names the suffix rule cannot express (they contain a dash). */
const TEXT_EXACT = new Set([
  "aria-label",
  "aria-description",
  "aria-roledescription",
  "aria-valuetext",
  "aria-placeholder",
  "content",
])

/** `showTooltip`, `hasTitle`, `noLabel` … end in a text word but hold a flag. */
const BOOLEAN_PREFIX =
  /^(is|has|show|hide|should|can|with|without|enable|disable|use|no|allow|omit)[A-Z]/

/**
 * Names that never hold copy, however prose-like the value reads. Only the
 * prose pass consults this — a text-bearing name always wins.
 */
const NON_COPY_NAMES = new Set([
  // Identifiers and routing.
  "name",
  "id",
  "key",
  "type",
  "role",
  "variant",
  "value",
  "href",
  "src",
  "url",
  "path",
  "testId",
  "data-testid",
  "event",
  "icon",
  "color",
  "format",
  // Presentation.
  "className",
  "class",
  "style",
  "fontFamily",
  "font",
  // HTML plumbing whose values are keywords — `rel="noopener noreferrer"`.
  "rel",
  "target",
  "download",
  "charSet",
  "crossOrigin",
  "referrerPolicy",
  "autoComplete",
  "inputMode",
  "enterKeyHint",
  "sandbox",
  "srcSet",
  "sizes",
  "media",
  "accept",
  "encType",
  "method",
  "action",
  "dir",
  "lang",
  "slot",
])

/**
 * Props whose object value is a style or animation declaration. CSS values
 * (`overflow: "hidden auto"`) read as prose but are never copy, so the whole
 * subtree is skipped.
 */
const STYLE_CONTAINERS = new Set([
  "style",
  "css",
  "sx",
  // framer-motion.
  "animate",
  "initial",
  "exit",
  "transition",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView",
])

/**
 * Elements whose text is machine or device text. `<kbd>Enter</kbd>` reads what
 * is printed on the key, and the sentence beside it is translated separately.
 */
const NON_COPY_ELEMENTS = new Set(["kbd", "code", "pre", "samp", "var"])

/** `w-6`, `text-f1-foreground-warning`, `md:flex-1` — CSS classes, not copy. */
const CLASS_TOKEN = /^-?[a-z][a-z0-9]*([-:/.][a-z0-9[\]%.]+)+$/

/**
 * One word of prose. Deliberately no dash, colon or slash — that omission is
 * what rejects Tailwind ("flex items-center") and font stacks.
 */
const PROSE_WORD =
  /^[("“]?([A-Za-z]+(['’][A-Za-z]+)?|\{\{\w+\}\}|\d+([.,]\d+)?)[.,!?:;)"”]*$/

const decodeEntities = (s) => s.replace(/&[a-z]+;|&#\d+;/gi, " ")

const isTextBearingName = (name) =>
  TEXT_EXACT.has(name) || (!BOOLEAN_PREFIX.test(name) && TEXT_SUFFIX.test(name))

/** Does this literal read as something a user sees? */
function readsAsCopy(raw) {
  const value = decodeEntities(raw).trim()
  if (value.length < 2 || !/[A-Za-z]/.test(value)) return false
  if (/^(https?:)?\/\//.test(value) || value.startsWith("/")) return false
  if (value.split(/\s+/).every((token) => CLASS_TOKEN.test(token))) return false
  // A single uncapitalised token is an identifier, enum member or CSS value.
  if (!/\s/.test(value) && !/^[A-Z]/.test(value)) return false
  return true
}

/** Does it read as prose? Used where the name tells us nothing. */
function readsAsProse(raw) {
  const value = decodeEntities(raw).trim()
  if (!readsAsCopy(value)) return false
  const words = value.split(/\s+/)
  if (words.length < 2) return false
  return words.every((word) => PROSE_WORD.test(word))
}

/** The string a node holds, or undefined if it is not a plain literal. */
function literalOf(node) {
  if (!node) return undefined
  if (node.type === "Literal" && typeof node.value === "string") {
    return node.value
  }
  if (node.type === "TemplateLiteral" && node.expressions.length === 0) {
    return node.quasis.map((q) => q.value.cooked ?? "").join("")
  }
  return undefined
}

const nameOf = (node) =>
  node?.type === "JSXNamespacedName"
    ? `${node.namespace.name}:${node.name.name}`
    : (node?.name ?? node?.value)

const startOf = (node) => node.range?.[0] ?? node.start
const endOf = (node) => node.range?.[1] ?? node.end

/**
 * User-visible copy must come from the i18n layer, not a string literal.
 *
 * A literal is untranslatable by construction: no consumer dictionary can reach
 * it, so every locale renders English. This covers the positions where the debt
 * actually hides — not just JSX text, but attributes, object properties at any
 * depth, and default parameter values.
 */
const noUntranslatedCopy = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow hardcoded user-visible copy; it must come from useI18n()/t().",
    },
    messages: {
      named:
        "Untranslated copy: `{{name}}` = {{value}}. Read it from `useI18n()`/`t()` — a literal cannot be translated, so every locale renders English.",
      prose:
        "Untranslated copy: {{value}} bound to `{{name}}`. Read it from `useI18n()`/`t()` — a literal cannot be translated.",
      text: "Untranslated copy in JSX text: {{value}}. Read it from `useI18n()`/`t()` — a literal cannot be translated.",
    },
    schema: [],
  },
  create(context) {
    // Ranges of style/animation object literals, whose contents are CSS values
    // rather than copy. A DFS visits the container before its properties, so
    // collecting as we go is enough — no ancestor walking needed.
    const skipRanges = []
    const inSkippedRange = (node) => {
      const start = startOf(node)
      return skipRanges.some(([from, to]) => start >= from && start <= to)
    }

    const quote = (value) => JSON.stringify(value)

    /** Apply the name-driven rule, falling back to the prose rule. */
    const consider = (node, name, value) => {
      if (isTextBearingName(name)) {
        if (readsAsCopy(value)) {
          context.report({
            node,
            messageId: "named",
            data: { name, value: quote(value) },
          })
        }
        return
      }
      if (!NON_COPY_NAMES.has(name) && readsAsProse(value)) {
        context.report({
          node,
          messageId: "prose",
          data: { name, value: quote(value) },
        })
      }
    }

    return {
      JSXAttribute(node) {
        const name = nameOf(node.name)
        if (typeof name !== "string") return
        if (STYLE_CONTAINERS.has(name)) {
          if (node.value)
            skipRanges.push([startOf(node.value), endOf(node.value)])
          return
        }
        const value = literalOf(
          node.value?.type === "JSXExpressionContainer"
            ? node.value.expression
            : node.value
        )
        if (value !== undefined) consider(node, name, value)
      },

      Property(node) {
        if (node.computed) return
        const name = nameOf(node.key)
        if (typeof name !== "string") return
        if (STYLE_CONTAINERS.has(name)) {
          skipRanges.push([startOf(node), endOf(node)])
          return
        }
        if (inSkippedRange(node)) return
        const value = literalOf(node.value)
        if (value !== undefined) consider(node, name, value)
      },

      // `function f({ label = "Actions" })` and `const { label = "x" } = props`
      AssignmentPattern(node) {
        if (node.left?.type !== "Identifier") return
        if (inSkippedRange(node)) return
        const value = literalOf(node.right)
        if (value !== undefined) consider(node, node.left.name, value)
      },

      // Handled from the element rather than from JSXText, so the parent's tag
      // is known without relying on parent pointers.
      JSXElement(node) {
        const tag = nameOf(node.openingElement?.name)
        if (typeof tag === "string" && NON_COPY_ELEMENTS.has(tag)) return
        for (const child of node.children ?? []) {
          if (child.type !== "JSXText") continue
          const value = child.value
          if (readsAsCopy(value)) {
            context.report({
              node: child,
              messageId: "text",
              data: {
                value: quote(decodeEntities(value).trim().replace(/\s+/g, " ")),
              },
            })
          }
        }
      },
    }
  },
}

export default {
  meta: { name: "f0-i18n" },
  rules: { "no-untranslated-copy": noUntranslatedCopy },
}
