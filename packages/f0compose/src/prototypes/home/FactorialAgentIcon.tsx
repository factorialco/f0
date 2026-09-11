import { F0OneIcon } from "@factorialco/f0-react"
import { forwardRef, type SVGProps } from "react"

/** Compatibility adapter: every existing One entry now uses F0's One identity. */
export const FactorialAgentIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement> & { animate?: "normal" | "animate"; once?: boolean }
>(function FactorialAgentIcon(
  { animate: _animate, once: _once, width, height: _height, ...props },
  ref
) {
  return (
    <F0OneIcon {...props} ref={ref} size={Number(width) >= 40 ? "lg" : "sm"} />
  )
})
