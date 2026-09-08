/**
 * f0-react — local oxlint JS plugin wrapping rules from eslint-plugin-react.
 *
 * `jsx-no-leaked-render` upstream matches every JSX expression container, so
 * `open={isOpen && !disabled}` is reported like `{items.length && <List />}`.
 * Only the second one leaks a value into the rendered output. This wrapper
 * runs the upstream rule (same options, same autofix) on element and fragment
 * children only, and leaves attribute values alone.
 */
import react from "eslint-plugin-react"

const upstream = react.rules["jsx-no-leaked-render"]
const SELECTOR = 'JSXExpressionContainer > LogicalExpression[operator="&&"]'

export default {
  meta: { name: "f0-react" },
  rules: {
    "jsx-no-leaked-render": {
      meta: upstream.meta,
      create(context) {
        const listeners = upstream.create(context)
        const onLogicalAnd = listeners[SELECTOR]
        return {
          [`JSXElement > ${SELECTOR}`]: onLogicalAnd,
          [`JSXFragment > ${SELECTOR}`]: onLogicalAnd,
        }
      },
    },
  },
}
