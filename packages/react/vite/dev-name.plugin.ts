export const devName = () => ({
  visitor: {
    JSXElement(path: any) {
      const openingElement = path.node.openingElement
      const componentName = openingElement.name.name

      if (componentName && /^[A-Z]/.test(componentName)) {
        const hasAttr = openingElement.attributes.some((attr) =>
          attr.name?.name.startsWith("data-dev-name")
        )

        if (!hasAttr) {
          // Generate a random string of size 5
          const randomStr = Math.random().toString(36).substring(2, 7)
          const dataDevNameAttribute = `data-dev-name-${randomStr}`
          openingElement.attributes.push({
            type: "JSXAttribute",
            name: { type: "JSXIdentifier", name: dataDevNameAttribute },
            value: { type: "StringLiteral", value: componentName },
          })
        }
      }
    },
  },
})
