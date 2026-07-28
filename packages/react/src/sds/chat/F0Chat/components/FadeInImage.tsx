import { type ComponentProps, type ReactNode, useState } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

/**
 * `<img>` that fades in once it decodes, so media never pops into the
 * transcript. Cached images render opaque immediately (`complete` is checked
 * synchronously when the ref attaches) — only real network loads fade.
 * Opacity only: the caller must reserve the box (width/height attrs or fixed
 * classes), so no re-measure is introduced.
 */
export const FadeInImage = ({
  className,
  onLoad,
  ...props
}: ComponentProps<"img">): ReactNode => {
  const reducedMotion = useReducedMotion()
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      {...props}
      ref={(el) => {
        if (el?.complete) setLoaded(true)
      }}
      onLoad={(event) => {
        setLoaded(true)
        onLoad?.(event)
      }}
      className={cn(
        !reducedMotion && "transition-opacity duration-200",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
    />
  )
}
