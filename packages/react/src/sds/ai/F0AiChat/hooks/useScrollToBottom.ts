import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Simplified scroll-to-bottom hook.
 * Provides a scroll utility and a "scroll to bottom" button visibility flag.
 */
export function useScrollToBottom() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const [showScrollToBottom, setShowScrollToBottom] = useState(false)

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior })
  }, [])

  useEffect(() => {
    const el = messagesContainerRef.current
    if (!el) return

    const handleScroll = () => {
      const distanceFromBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight
      setShowScrollToBottom(distanceFromBottom > el.clientHeight)
    }

    el.addEventListener("scroll", handleScroll, { passive: true })
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    messagesEndRef,
    messagesContainerRef,
    showScrollToBottom,
    scrollToBottom,
  }
}
