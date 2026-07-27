import { useEffect, useRef, useState, type ReactNode } from "react"

/** Plenty for a 160px crop; the full document renders in the viewer. */
const THUMB_MAX_CHARS = 4096

/**
 * Plain-text snapshot for the chat's text/markdown card (the raw source, not
 * rendered markdown — like a file manager's preview). Lazy-loaded by
 * `ChatDocumentAttachmentCard`; default export required by `lazy()`.
 */
const ChatTextThumbnail = ({
  url,
  onError,
  onRendered,
}: {
  url: string
  /** The card falls back to the plain file chip when the file can't load. */
  onError: () => void
  /** Text painted — the card crossfades its skeleton out. */
  onRendered: () => void
}): ReactNode => {
  const [text, setText] = useState<string | null>(null)
  // Latest-callback refs: the card passes inline arrows, and the fetch effect
  // must only re-run when the URL changes.
  const onErrorRef = useRef(onError)
  onErrorRef.current = onError
  const onRenderedRef = useRef(onRendered)
  onRenderedRef.current = onRendered

  useEffect(() => {
    let cancelled = false
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`)
        return response.text()
      })
      .then((content) => {
        if (cancelled) return
        if (content.trim() === "") {
          onErrorRef.current()
          return
        }
        setText(content.slice(0, THUMB_MAX_CHARS))
        onRenderedRef.current()
      })
      .catch(() => {
        if (!cancelled) onErrorRef.current()
      })
    return () => {
      cancelled = true
    }
  }, [url])

  if (text === null) return null

  return (
    <pre className="m-0 whitespace-pre-wrap break-words bg-f1-background p-3 text-left font-mono text-xs leading-5 text-f1-foreground-secondary">
      {text}
    </pre>
  )
}

export default ChatTextThumbnail
