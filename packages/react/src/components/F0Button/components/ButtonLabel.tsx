import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

interface ButtonLabelProps {
  className?: string
  label: string
  onOverflowChange: (overflows: boolean) => void
}

export function ButtonLabel({
  className,
  label,
  onOverflowChange,
}: ButtonLabelProps) {
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(
    function observeLabelOverflow() {
      const element = labelRef.current
      if (!element) return

      const updateOverflow = () => {
        onOverflowChange(element.scrollWidth > element.clientWidth)
      }

      updateOverflow()
      const animationFrame = requestAnimationFrame(updateOverflow)
      const timeout = setTimeout(updateOverflow, 100)
      const resizeObserver = new ResizeObserver(updateOverflow)
      resizeObserver.observe(element)

      return () => {
        cancelAnimationFrame(animationFrame)
        clearTimeout(timeout)
        resizeObserver.disconnect()
      }
    },
    [label, onOverflowChange]
  )

  return (
    <span
      ref={labelRef}
      className={cn(
        "block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
        className
      )}
    >
      {label}
    </span>
  )
}
