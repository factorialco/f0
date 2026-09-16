/**
 * An inline `<style>` element needs a `nonce` to survive a strict CSP.
 *
 * Under a `style-src` without `'unsafe-inline'`, an inline stylesheet with no
 * nonce is dropped by the browser — silently. The component still renders, it
 * just loses whatever the stylesheet was doing (chart colours, scrollbar
 * hiding). Nothing throws, so this fails in a consumer's hardened deployment
 * and nowhere else.
 *
 * f0 has no nonce plumbing yet, so the two elements that predate this rule are
 * listed in `allow` rather than suppressed inline. Keeping them in one place
 * makes the debt legible and keeps the rule live for anything new — which is
 * the point: this rule exists to stop the third one from being added.
 */
export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Require a `nonce` on inline `<style>` elements so they survive a strict CSP.",
    },
    messages: {
      missingNonce:
        "`<style>` has no `nonce`, so a strict CSP (`style-src` without `'unsafe-inline'`) drops it silently. Pass a `nonce`, or move the rules into a Tailwind layer.",
    },
    schema: [
      {
        type: "object",
        properties: {
          allow: { type: "array", items: { type: "string" } },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const allow = context.options?.[0]?.allow ?? []
    const filename = (
      context.filename ??
      context.getFilename?.() ??
      ""
    ).replace(/\\/g, "/")
    if (allow.some((suffix) => filename.endsWith(suffix))) return {}

    return {
      JSXOpeningElement(node) {
        if (node.name?.type !== "JSXIdentifier" || node.name.name !== "style") {
          return
        }
        const hasNonce = node.attributes.some(
          (attribute) =>
            attribute.type === "JSXAttribute" &&
            attribute.name?.name === "nonce"
        )
        // A spread could carry the nonce; do not guess against it.
        const hasSpread = node.attributes.some(
          (attribute) => attribute.type === "JSXSpreadAttribute"
        )
        if (hasNonce || hasSpread) return
        context.report({ node, messageId: "missingNonce" })
      },
    }
  },
}
