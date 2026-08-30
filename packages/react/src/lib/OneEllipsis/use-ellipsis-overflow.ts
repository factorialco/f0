import { useEffect, useState, type RefObject } from "react"

interface UseEllipsisOverflowOptions {
  disabled: boolean
  lines: number
  onChange?: (hasEllipsis: boolean) => void
  ref: RefObject<HTMLElement | null> | null
}

const checkForEllipsis = (element: HTMLElement, lines: number) => {
  if (lines > 1) {
    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight)
    return element.scrollHeight > lineHeight * lines
  }

  return element.scrollWidth > element.clientWidth
}

export function useEllipsisOverflow({
  disabled,
  lines,
  onChange,
  ref,
}: UseEllipsisOverflowOptions) {
  const [hasEllipsis, setHasEllipsis] = useState(false)

  useEffect(
    function observeEllipsis() {
      const element = ref?.current
      if (!element) return
      if (disabled) {
        setHasEllipsis(false)
        onChange?.(false)
        return
      }

      const updateEllipsis = () => {
        const nextHasEllipsis = checkForEllipsis(element, lines)
        setHasEllipsis(nextHasEllipsis)
        onChange?.(nextHasEllipsis)
      }

      updateEllipsis()
      const animationFrame = requestAnimationFrame(updateEllipsis)
      const timeout = setTimeout(updateEllipsis, 100)
      const resizeObserver = new ResizeObserver(updateEllipsis)
      resizeObserver.observe(element)

      return () => {
        cancelAnimationFrame(animationFrame)
        clearTimeout(timeout)
        resizeObserver.disconnect()
      }
    },
    [disabled, lines, onChange, ref]
  )

  return hasEllipsis
}
