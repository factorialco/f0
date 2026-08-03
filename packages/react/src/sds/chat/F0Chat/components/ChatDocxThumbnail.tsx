import { useEffect, useRef, useState, type ReactNode } from "react"

import { renderAsync } from "docx-preview"

/**
 * First-page snapshot for the chat's Word card: docx-preview renders the
 * document at its natural page width into a hidden-overflow host, and the
 * result is scaled down to the card. Kept in its own module so docx-preview
 * (+ jszip) land in a lazy chunk fetched only when a card scrolls into view —
 * `ChatDocumentAttachmentCard` loads it via `React.lazy`. Default export
 * required by `lazy()`.
 */
const ChatDocxThumbnail = ({
  url,
  width,
  onError,
  onRendered,
}: {
  url: string
  /** Target snapshot width in CSS pixels (the card crops the height). */
  width: number
  /** The card falls back to the plain file chip when the document can't load. */
  onError: () => void
  /** Document painted — the card crossfades its skeleton out. */
  onRendered: () => void
}): ReactNode => {
  const hostRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)
  // Latest-callback refs: the card passes inline arrows, and the render effect
  // must only re-run when the URL changes.
  const onErrorRef = useRef(onError)
  onErrorRef.current = onError
  const onRenderedRef = useRef(onRendered)
  onRenderedRef.current = onRendered

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    let cancelled = false
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`)
        return response.blob()
      })
      .then((blob) => {
        if (cancelled) return
        // No wrapper chrome for the snapshot — just the page content; the
        // card provides the white background and the crop.
        return renderAsync(blob, host, undefined, {
          inWrapper: false,
          breakPages: false,
          ignoreLastRenderedPageBreak: true,
          renderHeaders: false,
          renderFooters: false,
        }).then(() => {
          if (cancelled) return
          const naturalWidth = host.scrollWidth
          setScale(naturalWidth > 0 ? Math.min(1, width / naturalWidth) : 1)
          onRenderedRef.current()
        })
      })
      .catch(() => {
        if (!cancelled) onErrorRef.current()
      })
    return () => {
      cancelled = true
    }
  }, [url, width])

  return (
    <div className="overflow-hidden bg-f1-background text-left">
      <div
        ref={hostRef}
        style={
          scale !== null
            ? { transform: `scale(${scale})`, transformOrigin: "top left" }
            : undefined
        }
      />
    </div>
  )
}

export default ChatDocxThumbnail
