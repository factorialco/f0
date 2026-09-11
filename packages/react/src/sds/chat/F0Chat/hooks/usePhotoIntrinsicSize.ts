import { useEffect, useState } from "react"
import { type F0ChatImageAttachment } from "../types"
import {
  knownImageSize,
  measureImageSize,
  type ImageIntrinsicSize,
} from "../utils/image-size"

/**
 * The proportions of a lone photo: what the host declared, or what the file
 * turns out to be when it declares nothing.
 *
 * Hosts that send `width`/`height` get the box reserved before a byte arrives,
 * which is the whole point of the layout. Hosts that don't would otherwise have
 * every photo cropped into a square forever, so the file is measured once and
 * the row reflows — once per URL per session, never again on the way back.
 */
export const usePhotoIntrinsicSize = (
  image?: F0ChatImageAttachment
): ImageIntrinsicSize | undefined => {
  const declaredWidth = image?.width
  const declaredHeight = image?.height
  const declared =
    declaredWidth && declaredHeight
      ? { width: declaredWidth, height: declaredHeight }
      : undefined
  // The tile paints the thumbnail when there is one, so that is the file whose
  // proportions decide the box.
  const src = image ? (image.thumbnailUrl ?? image.url) : undefined
  const [measured, setMeasured] = useState<{
    src: string
    size: ImageIntrinsicSize
  } | null>(null)

  useEffect(() => {
    if (!src || declaredWidth || declaredHeight) {
      return
    }
    let cancelled = false
    void measureImageSize(src).then((size) => {
      if (!cancelled && size) {
        setMeasured({ src, size })
      }
    })
    return () => {
      cancelled = true
    }
  }, [src, declaredWidth, declaredHeight])

  if (declared) {
    return declared
  }
  if (!src) {
    return undefined
  }
  // The module cache first: it survives row recycling, the state does not.
  return (
    knownImageSize(src) ?? (measured?.src === src ? measured.size : undefined)
  )
}
