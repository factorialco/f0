import { useEffect, useState } from "react"
import {
  knownImageSize,
  measureImageSize,
  type ImageIntrinsicSize,
} from "../utils/image-size"

/**
 * The proportions of an image the transcript has to lay out: what the host
 * declared, or what the file turns out to be when it declares nothing.
 *
 * Hosts that send dimensions get the box reserved before a byte arrives, which
 * is the whole point of the layout. Photos from hosts that don't, and Open Graph
 * previews (whose type carries no size at all), would otherwise be cropped into
 * a fixed box forever — so the file is measured once and the row reflows. Once
 * per URL per session: the cache behind this survives Virtuoso recycling rows.
 *
 * Returns `undefined` while it is still unknown and `null` once the image is
 * known not to decode, so a caller can tell "not yet" from "never".
 */
export const useIntrinsicImageSize = (
  src?: string,
  declared?: { width?: number; height?: number }
): ImageIntrinsicSize | null | undefined => {
  const declaredWidth = declared?.width
  const declaredHeight = declared?.height
  const hasDeclared = Boolean(declaredWidth && declaredHeight)
  // State only as a wake-up call: the answer itself is read from the module
  // cache below, which is what survives a row being destroyed and rebuilt. A
  // fresh object every time, so a failure (`null`) still re-renders.
  const [, setMeasured] = useState<{
    src: string
    size: ImageIntrinsicSize | null
  } | null>(null)

  useEffect(() => {
    if (!src || hasDeclared) {
      return
    }
    let cancelled = false
    void measureImageSize(src).then((size) => {
      if (!cancelled) {
        setMeasured({ src, size })
      }
    })
    return () => {
      cancelled = true
    }
  }, [src, hasDeclared])

  if (declaredWidth && declaredHeight) {
    return { width: declaredWidth, height: declaredHeight }
  }
  return src ? knownImageSize(src) : undefined
}
