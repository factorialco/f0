import { type RefObject, useEffect, useRef } from "react"

// Registers the <em-emoji-picker> custom element (side-effect import).
import "emoji-mart"

import { RenderErrorBoundary } from "@/lib/RenderErrorBoundary"

type EmojiMartInstance = { update?: (props: object) => void }
type EmojiMartPickerCtor = new (props: object) => EmojiMartInstance

export type EmojiPickerProps = {
  data?: unknown
  onEmojiSelect?: (emoji: { native: string }) => void
  locale?: string
  icons?: "outline" | "solid" | "auto"
  set?: string
  theme?: "light" | "dark" | "auto"
  emojiButtonSize?: number
  emojiButtonRadius?: string
  emojiSize?: number
  maxFrequentRows?: number
  skinTonePosition?: "preview" | "search" | "none"
  previewPosition?: "top" | "bottom" | "none"
  searchPosition?: "sticky" | "static" | "none" | "top"
  navPosition?: "top" | "bottom" | "none"
  dynamicWidth?: boolean
}

function EmojiPickerElement(props: EmojiPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<EmojiMartInstance | null>(null)
  const propsRef = useRef(props)
  propsRef.current = props

  useEffect(() => {
    if (!containerRef.current) return

    // Build from the *registered* class, not the copy @emoji-mart/react imports
    // (a duplicated, unregistered copy is what throws "Illegal constructor").
    // Passing `ref` renders the picker into the div in light-DOM mode — like
    // @emoji-mart/react — so clicks keep working inside popovers.
    const Picker = customElements.get("em-emoji-picker") as
      | EmojiMartPickerCtor
      | undefined
    if (!Picker) return

    instanceRef.current = new Picker({
      ...propsRef.current,
      ref: containerRef as RefObject<HTMLDivElement>,
    })

    return () => {
      instanceRef.current = null
    }
  }, [])

  // Push later prop changes to the live instance (as @emoji-mart/react does).
  useEffect(() => {
    instanceRef.current?.update?.(props)
  })

  return <div ref={containerRef} />
}

/**
 * Emoji-mart's <em-emoji-picker> wrapped as a React component (drop-in for
 * `@emoji-mart/react`). Wrapped in a render error boundary so a mount failure
 * degrades to nothing instead of unmounting the surrounding UI.
 */
export function EmojiPicker(props: EmojiPickerProps) {
  return (
    <RenderErrorBoundary
      onError={(error) => {
        // Keep it observable (Sentry breadcrumb / console) without crashing.
        console.error("EmojiPicker failed to mount", error)
      }}
    >
      <EmojiPickerElement {...props} />
    </RenderErrorBoundary>
  )
}
