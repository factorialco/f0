/**
 * f0-security — local oxlint JS plugin.
 *
 * These are ESLint-format rules. The repo lints with oxlint, whose `jsPlugins`
 * option loads ESLint plugins from a path, so the rules below run under the
 * same `pnpm lint` that CI runs. They are NOT visible in editors: oxc marks JS
 * plugins experimental and does not support them in the language server yet.
 *
 * Each rule guards one way `dangerouslySetInnerHTML` goes wrong. See
 * .scripts/README-f0-security.md for why these are rules rather than a ratchet
 * script: unlike the inline-styles gate, the codebase has ~1 violation each, so
 * they can ship as `error` with no baseline.
 */
import noSpreadAfterInnerHtml from "./rules/no-spread-after-inner-html.js"
import requireSanitizedInnerHtml from "./rules/require-sanitized-inner-html.js"
import requireStyleNonce from "./rules/require-style-nonce.js"

export default {
  meta: { name: "f0-security" },
  rules: {
    "no-spread-after-inner-html": noSpreadAfterInnerHtml,
    "require-sanitized-inner-html": requireSanitizedInnerHtml,
    "require-style-nonce": requireStyleNonce,
  },
}
