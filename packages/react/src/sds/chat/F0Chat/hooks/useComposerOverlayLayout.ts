import { useLayoutEffect, useRef } from "react"

import { CHAT_COMPOSER_HEIGHT_PROPERTY } from "../utils/chat-layout"

const isResizeObserverSizeList = (
  value: ResizeObserverSize | readonly ResizeObserverSize[]
): value is readonly ResizeObserverSize[] => Array.isArray(value)

/**
 * Keeps transcript spacing in sync with the floating composer without routing
 * its changing height through React or re-rendering Virtuoso.
 */
export const useComposerOverlayLayout = (enabled: boolean) => {
  const shellRef = useRef<HTMLDivElement>(null)
  const composerOverlayRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const shell = shellRef.current
    const composer = composerOverlayRef.current

    if (!shell) return

    if (!enabled || !composer) {
      shell.style.setProperty(CHAT_COMPOSER_HEIGHT_PROPERTY, "0px")
      return
    }

    let lastHeight = -1
    const publishHeight = (height: number) => {
      const nextHeight = Math.ceil(height)
      if (nextHeight === lastHeight) return

      lastHeight = nextHeight
      shell.style.setProperty(CHAT_COMPOSER_HEIGHT_PROPERTY, `${nextHeight}px`)
    }
    const measure = () => publishHeight(composer.getBoundingClientRect().height)

    measure()

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure)
      return () => window.removeEventListener("resize", measure)
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      const borderBoxSize:
        | ResizeObserverSize
        | readonly ResizeObserverSize[]
        | undefined = entry?.borderBoxSize
      const size = borderBoxSize
        ? isResizeObserverSizeList(borderBoxSize)
          ? borderBoxSize[0]
          : borderBoxSize
        : undefined

      publishHeight(size?.blockSize ?? composer.getBoundingClientRect().height)
    })

    observer.observe(composer)
    return () => observer.disconnect()
  }, [enabled])

  return { shellRef, composerOverlayRef }
}
