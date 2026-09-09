/**
 * Writes `text` to the clipboard and reports whether it landed.
 *
 * Callers gate their success feedback on the return value: a "Copied" tick
 * shown after a rejected write is a lie the user only discovers when they
 * paste. `navigator.clipboard` is missing on insecure origins and rejects
 * without a user gesture, so the textarea path is not dead code.
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // Fall through to the legacy path rather than reporting failure straight
    // away — a rejected promise here is usually a permission prompt, not a
    // browser without any clipboard at all.
  }

  return copyWithExecCommand(text)
}

/**
 * `document.execCommand("copy")` is deprecated but still the only clipboard
 * write available on http:// origins and in older Safari. It copies the
 * current selection, so the text has to be selected in a real, focused node
 * first — hence the off-screen textarea.
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
