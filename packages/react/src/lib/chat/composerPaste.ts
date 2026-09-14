import type { ClipboardEvent } from "react"

export function handleComposerPaste(
  event: ClipboardEvent<HTMLTextAreaElement>,
  attachFiles: (files: File[]) => void,
  setText: (text: string, caret: number) => void
): boolean {
  const files = Array.from(event.clipboardData.files)
  if (files.length === 0) {
    return false
  }

  event.preventDefault()
  const text = event.clipboardData.getData?.("text/plain") ?? ""
  if (text) {
    const textarea = event.currentTarget
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const next = `${textarea.value.slice(0, start)}${text}${textarea.value.slice(end)}`
    setText(next, start + text.length)
  }
  attachFiles(files)
  return true
}
