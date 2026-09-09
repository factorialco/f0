import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type SVGProps,
} from "react"

import {
  approvedAgentArtwork,
  mountApprovedAgentMotion,
} from "./approvedAgentMotion.js"

/** The approved artwork supplied as an F0Button icon, without rebuilding its animation. */
export const FactorialAgentIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement> & { animate?: "normal" | "animate"; once?: boolean }
>(function FactorialAgentIcon(
  { animate: _animate, once = false, className, ...props },
  forwardedRef
) {
  const scene = useRef<SVGSVGElement>(null)
  useImperativeHandle(forwardedRef, () => scene.current!, [])
  useEffect(
    () =>
      scene.current
        ? mountApprovedAgentMotion(scene.current, { once })
        : undefined,
    [once]
  )
  // F0's standard icon wrapper forces thin path strokes; the approved eyes own their stroke weight.
  const motionClassName = className
    ?.split(" ")
    .filter((token) => !token.includes("]:stroke-"))
    .join(" ")
  return (
    <svg
      {...props}
      className={motionClassName}
      ref={scene}
      viewBox="100 0 400 400"
      overflow="hidden"
      aria-hidden="true"
      focusable="false"
      data-factorial-agent-icon
      dangerouslySetInnerHTML={{ __html: approvedAgentArtwork }}
    />
  )
})
