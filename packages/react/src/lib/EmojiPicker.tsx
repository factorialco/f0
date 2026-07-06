import { type RefObject, useEffect, useRef } from "react"

// Side-effect import: registers the <em-emoji-picker> custom element so it is
// available in the custom-element registry.
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

    // Construct the class from the custom-element registry, NOT the one
    // @emoji-mart/react imports. Passing a `ref` makes emoji-mart render the
    // picker into that element (light DOM), exactly like @emoji-mart/react — so
    // clicks behave identically. `new` on the *registered* class is legal;
    // @emoji-mart/react instead throws "Illegal constructor" when a duplicated,
    // unregistered copy of the class lands in the bundle.
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
