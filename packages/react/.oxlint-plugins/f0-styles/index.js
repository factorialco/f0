/**
 * f0-styles — local oxlint JS plugin for styling rules.
 */

/**
 * See through a type assertion to the object underneath.
 *
 * React's `CSSProperties` has no index signature for `--*`, so setting a custom
 * property needs `as CSSProperties` — which is exactly the shape this rule most
 * wants to recognise. Without this, the recommended fix would trip the rule.
 */
const unwrap = (node) =>
  node?.type === "TSAsExpression" ||
  node?.type === "TSSatisfiesExpression" ||
  node?.type === "TSTypeAssertion" ||
  node?.type === "TSNonNullExpression"
    ? unwrap(node.expression)
    : node

/** Does every value in the object literal look like a constant? */
const allValuesConstant = (node) =>
  node.type === "ObjectExpression" &&
  node.properties.length > 0 &&
  node.properties.every(
    (property) =>
      property.type === "Property" &&
      (property.value?.type === "Literal" ||
        (property.value?.type === "TemplateLiteral" &&
          property.value.expressions.length === 0))
  )

/**
 * Styling belongs in Tailwind classes, not an inline `style` prop.
 *
 * An inline style bypasses the design tokens, outranks any class a consumer
 * writes, and is invisible to the Tailwind build — so it gets no theming, no
 * responsive variants and no purging.
 *
 * Truly dynamic values (a measured offset, a `${percentage}%` width, a colour
 * that arrives as data) cannot be classes and are a legitimate exception. Take
 * it with a disable comment naming the reason, so it lands in the diff where a
 * reviewer can judge it.
 */
const noInlineStyles = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Disallow the inline `style` prop; styling comes from Tailwind classes.",
    },
    messages: {
      // Split so the message says which kind of work this is: a mechanical
      // conversion, or a judgement call about whether the value is really
      // dynamic. The two need very different amounts of thought.
      constant:
        "Inline `style` with constant values ({{properties}}) — express it as Tailwind classes.",
      dynamic:
        "Inline `style` ({{properties}}). Use Tailwind classes; if the value is genuinely dynamic (a measured offset, a `${percentage}%` width, a colour from data), keep it and add an oxlint-disable comment saying why.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name?.name !== "style") return

        const value = unwrap(
          node.value?.type === "JSXExpressionContainer"
            ? node.value.expression
            : undefined
        )

        // A CSS custom property is the one thing a class genuinely cannot set
        // per-instance, and it is how F0 threads a dynamic value INTO the
        // token system rather than around it.
        const properties =
          value?.type === "ObjectExpression"
            ? value.properties.flatMap((property) =>
                property.type === "Property" && !property.computed
                  ? [property.key?.name ?? property.key?.value ?? "?"]
                  : []
              )
            : []
        if (properties.some((name) => String(name).startsWith("--"))) return

        context.report({
          node,
          messageId: value && allValuesConstant(value) ? "constant" : "dynamic",
          data: {
            properties:
              properties.length > 0 ? properties.join(", ") : "spread",
          },
        })
      },
    }
  },
}

export default {
  meta: { name: "f0-styles" },
  rules: { "no-inline-styles": noInlineStyles },
}
