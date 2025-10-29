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

const textFormatEnforcer = (text: string, rules: Rules) => {
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

  if (rules.disallowEmojis && containsEmojis(text)) {
    throw Error(`Emojis are not allowed here: "${text}"`)
  }
}

export const useTextFormatEnforcer = (text?: string, rules?: Rules) => {
  useEffect(() => {
    if (text !== undefined && rules) {
      textFormatEnforcer(text, rules)
    }
  }, [text, rules])
}

export { containsEmojis }
