/**
 * A props spread that lands AFTER `dangerouslySetInnerHTML` overwrites it.
 *
 * When the element's props type extends `HTMLAttributes`, `dangerouslySetInnerHTML`
 * is a legal prop, so a caller can pass their own and silently replace whatever
 * the component sanitized. The component's sanitization contract stops holding
 * without anything in the component looking wrong.
 *
 * Ordering is the whole fix: spread first, then set `dangerouslySetInnerHTML`,
 * and the sanitized value always wins.
 */
export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow a props spread after `dangerouslySetInnerHTML`, which lets a caller override sanitized HTML.",
    },
    messages: {
      spreadAfter:
        "`{{spread}}` is spread after `dangerouslySetInnerHTML`, so a caller can override the sanitized HTML. Move the spread above `dangerouslySetInnerHTML`, or omit the key from it.",
    },
    schema: [],
  },
  create(context) {
    /** Report every spread that sits after the first `dangerouslySetInnerHTML`. */
    const checkAttributes = (attributes) => {
      const dangerIndex = attributes.findIndex(
        (attribute) =>
          attribute.type === "JSXAttribute" &&
          attribute.name?.name === "dangerouslySetInnerHTML"
      )
      if (dangerIndex === -1) return

      for (const attribute of attributes.slice(dangerIndex + 1)) {
        if (attribute.type !== "JSXSpreadAttribute") continue
        const { argument } = attribute
        context.report({
          node: attribute,
          messageId: "spreadAfter",
          data: {
            spread: argument?.name ? `...${argument.name}` : "...spread",
          },
        })
      }
    }

    return {
      JSXOpeningElement(node) {
        checkAttributes(node.attributes)
      },

      // `createElement(tag, { ...props, dangerouslySetInnerHTML })` has the same
      // hazard, and Text.tsx / OneEllipsis build their props exactly this way.
      ObjectExpression(node) {
        const dangerIndex = node.properties.findIndex(
          (property) =>
            property.type === "Property" &&
            !property.computed &&
            (property.key?.name === "dangerouslySetInnerHTML" ||
              property.key?.value === "dangerouslySetInnerHTML")
        )
        if (dangerIndex === -1) return

        for (const property of node.properties.slice(dangerIndex + 1)) {
          if (property.type !== "SpreadElement") continue
          context.report({
            node: property,
            messageId: "spreadAfter",
            data: {
              spread: property.argument?.name
                ? `...${property.argument.name}`
                : "...spread",
            },
          })
        }
      },
    }
  },
}
