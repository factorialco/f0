import { useEffect } from "react"
import { parse } from "twemoji-parser"

type Rules = {
  disallowEmpty?: boolean
  minLength?: number
  maxLength?: number
  disallowEmojis?: boolean
}

/**
 * Checks if the given text contains any emojis
 */
const containsEmojis = (text: string): boolean => {
  // Use twemoji-parser to detect emojis reliably
  const emojiEntities = parse(text)
  return emojiEntities.length > 0
}

const textFormatEnforcer = (
  text: string,
  rules: Rules,
  warn = false,
  componentName = ""
) => {
  /** Every rule reports the same way: a warning, or a thrown error. */
  const report = (message: string) => {
    if (warn) {
      console.warn(message)
    } else {
      throw Error(message)
    }
  }

  if (rules.disallowEmpty && text.length === 0) {
    report(`${componentName}: You need to provide some text that is not empty`)
  }

  if (rules.maxLength !== undefined && text.length > rules.maxLength) {
    report(
      `${componentName}: "${text}" should have no more than ${rules.maxLength} characters`
    )
  }

  if (rules.minLength !== undefined && text.length < rules.minLength) {
    report(
      `${componentName}: "${text}" should have at least ${rules.minLength} characters`
    )
  }

  if (rules.disallowEmojis && containsEmojis(text)) {
    report(`${componentName}: Emojis are not allowed here: "${text}"`)
  }
}

export const useTextFormatEnforcer = (
  text?: string,
  rules?: Rules,
  options: { warn?: boolean; componentName: string } = {
    warn: undefined,
    componentName: "",
  }
) => {
  useEffect(() => {
    if (text !== undefined && rules) {
      const warn = options.warn ?? true
      textFormatEnforcer(text, rules, warn, options.componentName)
    }
  }, [text, rules, options])
}

export { containsEmojis }
