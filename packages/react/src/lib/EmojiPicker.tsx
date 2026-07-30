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

const INVALID_EMOJI_BUTTON_ARIA = [
  "aria-posinset",
  "aria-selected",
  "aria-setsize",
] as const

/**
 * emoji-mart currently places listbox-only ARIA attributes on native buttons.
 * Keep the valid button names/activation model while removing attributes that
 * are not permitted for the button role. The observer also covers search and
 * category changes that replace buttons inside the shadow root.
 */
function observeEmojiButtonAria(element: EmojiMartElement): () => void {
  let observer: MutationObserver | null = null
  let animationFrame: number | null = null
  let attempts = 0

  const connect = () => {
    const root = element.shadowRoot
    if (!root) {
      if (attempts < 10) {
        attempts += 1
        animationFrame = requestAnimationFrame(connect)
      }
      return
    }

    const normalize = () => {
      const selector = INVALID_EMOJI_BUTTON_ARIA.map(
        (attribute) => `button[${attribute}]`
      ).join(",")
      for (const button of root.querySelectorAll(selector)) {
        for (const attribute of INVALID_EMOJI_BUTTON_ARIA) {
          button.removeAttribute(attribute)
        }
      }

      // Emoji buttons use roving tabindex and are not tabbable until the
      // picker moves focus into them. Make the independently scrollable list
      // reachable so keyboard users can scroll it before choosing an emoji.
      root.querySelector<HTMLElement>(".scroll")?.setAttribute("tabindex", "0")
    }

    normalize()
    observer = new MutationObserver(normalize)
    observer.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [...INVALID_EMOJI_BUTTON_ARIA],
    })
  }

  connect()

  return () => {
    observer?.disconnect()
    if (animationFrame !== null) cancelAnimationFrame(animationFrame)
  }
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
    const stopObservingAria = observeEmojiButtonAria(element)

    return () => {
      stopObservingAria()
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
