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
  warn: boolean = false,
  componentName: string = ""
) => {
  if (rules.disallowEmpty && text.length === 0) {
    const errorMessage = `${componentName}: You need to provide some text that is not empty`
    if (warn) {
      console.warn(errorMessage)
    } else {
      throw Error(errorMessage)
    }
  }

  if (rules.maxLength !== undefined && text.length > rules.maxLength) {
    const errorMessage = `${componentName}: "${text}" should have no more than ${rules.maxLength} characters`
    if (warn) {
      console.warn(errorMessage)
    } else {
      throw Error(errorMessage)
    }
  }

  if (rules.minLength !== undefined && text.length < rules.minLength) {
    const errorMessage = `${componentName}: "${text}" should have at least ${rules.minLength} characters`
    if (warn) {
      console.warn(errorMessage)
    } else {
      throw Error(errorMessage)
    }
  }

  if (rules.disallowEmojis && containsEmojis(text)) {
    const errorMessage = `${componentName}: Emojis are not allowed here: "${text}"`
    if (warn) {
      console.warn(errorMessage)
    } else {
      throw Error(errorMessage)
    }
  }
}

export const useTextFormatEnforcer = (
  text?: string,
  rules?: Rules,
  options: { warn: boolean; componentName: string } = {
    warn: false,
    componentName: "",
  }
) => {
  useEffect(() => {
    if (text !== undefined && rules) {
      textFormatEnforcer(text, rules, options.warn, options.componentName)
    }
  }, [text, rules, options.warn, options.componentName])
}

export { containsEmojis }
