import { useEffect, useRef } from "react"

// Side-effect import: registers the <em-emoji-picker> custom element so
// document.createElement returns the registered class.
import "emoji-mart"

import { RenderErrorBoundary } from "@/lib/RenderErrorBoundary"

type EmojiMartElement = HTMLElement & {
  // emoji-mart reads `this.props` inside connectedCallback (fired on append) to
  // build the picker, and only wires later `update()` calls once its internal
  // component ref exists. Seeding `props` before append is what `new Picker(props)`
  // did implicitly via the constructor.
  props?: object
  update?: (props: object) => void
}

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
  const elementRef = useRef<EmojiMartElement | null>(null)
  const propsRef = useRef(props)
  propsRef.current = props

  // createElement (not `new`, which @emoji-mart/react uses) instantiates the
  // *registered* element class. With a duplicated emoji-mart class in the
  // bundle, `new` on the unregistered copy throws "Illegal constructor" and
  // crashes the page.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const element = document.createElement(
      "em-emoji-picker"
    ) as EmojiMartElement
    elementRef.current = element
    // Seed props *before* appending: connectedCallback reads `this.props`
    // synchronously on append to build the picker. A post-append `update()`
    // is dropped because emoji-mart's attributeChangedCallback bails while its
    // internal component ref doesn't exist yet, leaving callbacks (onEmojiSelect)
    // and options unset — so selecting an emoji would do nothing.
    element.props = propsRef.current
    container.appendChild(element)

    return () => {
      element.remove()
      elementRef.current = null
    }
  }, [])

  // Push later prop changes to the live element (as @emoji-mart/react does).
  useEffect(() => {
    elementRef.current?.update?.(props)
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
