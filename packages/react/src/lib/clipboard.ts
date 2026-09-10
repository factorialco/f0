/**
 * Writes `text` to the clipboard and reports whether it landed, so callers can
 * gate their "Copied" feedback on it.
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // A rejection here is usually a permission prompt, not a missing API.
  }

  return copyWithExecCommand(text)
}

/**
 * Deprecated, but the only clipboard write on http:// origins and in older
 * Safari. It copies the selection, hence the off-screen textarea.
 */
const copyWithExecCommand = (text: string): boolean => {
  if (typeof document === "undefined" || !document.body) {
    return false
  }

  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "")
  textarea.setAttribute("aria-hidden", "true")
  textarea.style.position = "fixed"
  textarea.style.top = "-9999px"
  textarea.style.opacity = "0"

  const previouslyFocused = document.activeElement

  document.body.appendChild(textarea)

  try {
    textarea.select()
    return document.execCommand?.("copy") ?? false
  } catch {
    return false
  } finally {
    textarea.remove()
    if (previouslyFocused instanceof HTMLElement) {
      previouslyFocused.focus()
    }
  }
}
