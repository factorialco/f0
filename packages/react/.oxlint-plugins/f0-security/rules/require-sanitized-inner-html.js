/**
 * The `__html` handed to `dangerouslySetInnerHTML` must come from a sanitizer.
 *
 * This is a SHALLOW, same-file check, and it is worth being honest about that:
 * it resolves a direct sanitizer call, a local `const` bound to one (including
 * through `useMemo` and a ternary), and static literals. Route the HTML through
 * a helper in another module and this rule sees nothing.
 *
 * So it is a tripwire, not a proof. It catches the accidental case — someone
 * pasting a value straight into `__html` — which is the case that actually
 * happens. A determined bypass was never in scope for a lint rule.
 */
const DEFAULT_SANITIZERS = [
  "sanitize",
  "parseMarkdown",
  "parseMarkdownDocument",
]

export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Require the `__html` passed to `dangerouslySetInnerHTML` to come from a sanitizer.",
    },
    messages: {
      unsanitized:
        "`__html` here is not visibly sanitized. Pass it through {{sanitizers}} (or a static literal). If it is safe by construction, say why in a comment and add the helper to the rule's `sanitizers` option.",
    },
    schema: [
      {
        type: "object",
        properties: {
          sanitizers: { type: "array", items: { type: "string" } },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const sanitizers = new Set(
      context.options?.[0]?.sanitizers ?? DEFAULT_SANITIZERS
    )

    const isSanitizerCall = (node) => {
      if (node?.type !== "CallExpression") return false
      const callee = node.callee
      const name =
        callee?.type === "MemberExpression"
          ? callee.property?.name
          : callee?.name
      return sanitizers.has(name)
    }

    const isStaticString = (node) =>
      node?.type === "Literal" ||
      (node?.type === "TemplateLiteral" && node.expressions.length === 0)

    /** `useMemo(() => X, deps)` → X, so the memoized sanitizer is still visible. */
    const unwrapMemo = (node) => {
      if (
        node?.type === "CallExpression" &&
        node.callee?.name === "useMemo" &&
        (node.arguments[0]?.type === "ArrowFunctionExpression" ||
          node.arguments[0]?.type === "FunctionExpression") &&
        node.arguments[0].body?.type !== "BlockStatement"
      ) {
        return node.arguments[0].body
      }
      return node
    }

    const isSafe = (node) => {
      const value = unwrapMemo(node)
      if (!value) return true // `undefined` renders nothing.
      if (isSanitizerCall(value) || isStaticString(value)) return true
      // `markdown ? parseMarkdown(x) : undefined` — safe only if both arms are.
      if (value.type === "ConditionalExpression") {
        return isSafe(value.consequent) && isSafe(value.alternate)
      }
      if (value.type === "Identifier") {
        if (value.name === "undefined") return true
        const binding = context.sourceCode
          ?.getScope(value)
          ?.references?.find(
            (reference) => reference.identifier === value
          )?.resolved
        if (!binding) return false
        // A `let` that is reassigned later is only as safe as its narrowest
        // write: `let html = ""` followed by `html = clone(el)` must not pass
        // on the strength of its initializer.
        const writes = (binding.references ?? []).filter((r) => r.writeExpr)
        if (writes.length > 0) {
          return writes.every((r) => isSafe(r.writeExpr))
        }
        const declarator = binding.defs?.[0]?.node
        if (declarator?.type === "VariableDeclarator" && declarator.init) {
          return isSafe(declarator.init)
        }
        return false
      }
      return false
    }

    const check = (node, htmlValue) => {
      if (isSafe(htmlValue)) return
      context.report({
        node,
        messageId: "unsanitized",
        data: {
          sanitizers: [...sanitizers].map((s) => `\`${s}()\``).join(", "),
        },
      })
    }

    /** Pull the `__html` value out of a `{ __html: ... }` object. */
    const htmlValueOf = (objectExpression) =>
      objectExpression?.type === "ObjectExpression"
        ? objectExpression.properties.find(
            (property) =>
              property.type === "Property" && property.key?.name === "__html"
          )?.value
        : undefined

    return {
      JSXAttribute(node) {
        if (node.name?.name !== "dangerouslySetInnerHTML") return
        const expression =
          node.value?.type === "JSXExpressionContainer"
            ? node.value.expression
            : undefined
        check(node, htmlValueOf(expression))
      },

      Property(node) {
        if (node.computed) return
        const key = node.key?.name ?? node.key?.value
        if (key !== "dangerouslySetInnerHTML") return
        check(node, htmlValueOf(node.value))
      },
    }
  },
}
