type TextFormatRules = {
  disallowEmpty?: boolean
  minLength?: number
  maxLength?: number
}

/**
 * Validates text against formatting rules synchronously.
 * Only runs in development builds to avoid runtime throws in production.
 */
export const enforceTextFormat = (
  text: string | undefined,
  rules: TextFormatRules
) => {
  if (typeof __DEV__ !== "undefined" && !__DEV__) return
  if (text === undefined) return

  if (rules.disallowEmpty && text.length === 0) {
    throw Error("You need to provide some text that is not empty")
  }

  if (rules.maxLength !== undefined && text.length > rules.maxLength) {
    throw Error(
      `"${text}" should have no more than ${rules.maxLength} characters`
    )
  }

  if (rules.minLength !== undefined && text.length < rules.minLength) {
    throw Error(`"${text}" should have at least ${rules.minLength} characters`)
  }
}

/**
 * @deprecated Use `enforceTextFormat` directly (synchronous, dev-only).
 */
export const useTextFormatEnforcer = (
  text?: string,
  rules?: TextFormatRules
) => {
  if (text !== undefined && rules) {
    enforceTextFormat(text, rules)
  }
}
