import { type RefObject, useCallback, useEffect, useRef, useState } from "react"

type UseMessageScrollOptions = {
  viewportRef: RefObject<HTMLDivElement | null>
  contentRef: RefObject<HTMLDivElement | null>
  endRef: RefObject<HTMLDivElement | null>
  lastTurnRef: RefObject<HTMLDivElement | null>
  turnsCount: number
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
}: UseMessageScrollOptions): UseMessageScrollReturn {
  const [turnMinHeight, setTurnMinHeight] = useState(0)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const prevTurnsCountRef = useRef(turnsCount)

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

  // Auto-scroll the last turn to the top when the user sends a message
  useEffect(() => {
    if (turnsCount > prevTurnsCountRef.current) {
      requestAnimationFrame(() => {
        lastTurnRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      })
    }
    // Reset scroll state when conversation is cleared
    if (turnsCount === 0) {
      setShowScrollBtn(false)
    }
    prevTurnsCountRef.current = turnsCount
  }, [turnsCount, lastTurnRef])

  return { showScrollBtn, turnMinHeight, scrollToBottom }
}
