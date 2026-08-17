import { type RefObject, useCallback, useEffect, useRef, useState } from "react"

type UseMessageScrollOptions = {
  viewportRef: RefObject<HTMLDivElement | null>
  contentRef: RefObject<HTMLDivElement | null>
  endRef: RefObject<HTMLDivElement | null>
  lastTurnRef: RefObject<HTMLDivElement | null>
  turnsCount: number
  /**
   * When true, pauses the ResizeObserver-driven turnMinHeight updates. Use
   * this during transient input-area size changes (e.g. the clarifying
   * question panel appearing/disappearing) to prevent the last turn's
   * reserved minHeight from shrinking/growing and causing a visible
   * content jump while the user is interacting.
   */
  freezeTurnMinHeight?: boolean
}

type UseMessageScrollReturn = {
  showScrollBtn: boolean
  turnMinHeight: number
  scrollToBottom: (behavior?: ScrollBehavior) => void
}

/**
 * Encapsulates scroll-to-bottom detection, ResizeObserver-based height
 * measurement, and auto-scroll behaviour for the messages container.
 */
export function useMessageScroll({
  viewportRef,
  contentRef,
  endRef,
  lastTurnRef,
  turnsCount,
  freezeTurnMinHeight = false,
}: UseMessageScrollOptions): UseMessageScrollReturn {
  const [turnMinHeight, setTurnMinHeight] = useState(0)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const prevTurnsCountRef = useRef(turnsCount)
  const freezeRef = useRef(freezeTurnMinHeight)
  freezeRef.current = freezeTurnMinHeight

  const scrollToBottom = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      endRef.current?.scrollIntoView({ behavior })
    },
    [endRef]
  )

  // Measure usable height for the last turn
  useEffect(() => {
    const viewport = viewportRef.current
    const content = contentRef.current
    if (!viewport || !content) return
    const observer = new ResizeObserver(() => {
      // Skip updates while frozen — the input area is transiently
      // resizing (e.g. clarifying panel animating in/out) and we want
      // the reserved last-turn minHeight to stay put so messages above
      // don't shift.
      if (freezeRef.current) return
      const py =
        parseFloat(getComputedStyle(content).paddingTop) +
        parseFloat(getComputedStyle(content).paddingBottom) +
        1 // +1 for the sentinel element
      setTurnMinHeight(viewport.clientHeight - py)
    })
    observer.observe(viewport)
    observer.observe(content)
    return () => observer.disconnect()
  }, [viewportRef, contentRef])

  // Scroll tracking
  const handleScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight
    setShowScrollBtn(distanceFromBottom > clientHeight)
  }, [viewportRef])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    el.addEventListener("scroll", handleScroll, { passive: true })
    return () => el.removeEventListener("scroll", handleScroll)
  }, [handleScroll, viewportRef])

  // Auto-scroll the new last turn so it sits flush at the top of the
  // viewport. We compute the delta with getBoundingClientRect (rather than
  // `scrollIntoView({ block: "start" })`) so the result is exact regardless
  // of offsetParent and CSS padding quirks. We also wait two animation
  // frames: one for React's commit, another for the ResizeObserver-driven
  // `turnMinHeight` to apply — without that the viewport's scrollHeight is
  // still short and the scroll lands a few pixels above the target.
  useEffect(() => {
    if (turnsCount > prevTurnsCountRef.current) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const viewport = viewportRef.current
          const lastTurn = lastTurnRef.current
          if (!viewport || !lastTurn) return
          const viewportRect = viewport.getBoundingClientRect()
          const turnRect = lastTurn.getBoundingClientRect()
          const target = viewport.scrollTop + (turnRect.top - viewportRect.top)
          viewport.scrollTo({ top: target, behavior: "smooth" })
        })
      })
    }
    // Reset scroll state when conversation is cleared
    if (turnsCount === 0) {
      setShowScrollBtn(false)
    }
    prevTurnsCountRef.current = turnsCount
  }, [turnsCount, lastTurnRef, viewportRef])

  return { showScrollBtn, turnMinHeight, scrollToBottom }
}
