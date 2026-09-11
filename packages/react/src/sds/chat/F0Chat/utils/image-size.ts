export type ImageIntrinsicSize = { width: number; height: number }

/**
 * Intrinsic sizes, remembered for the life of the conversation.
 *
 * Outside the React tree for the same reason the media warmer is (see
 * media-warmup.ts): Virtuoso destroys rows that leave its window, so a size
 * held in component state is lost and re-measured — and re-measuring is a
 * reflow. Here, scrolling back over a photo already seen lays it out at the
 * right size on the first render.
 */
const sizes = new Map<string, ImageIntrinsicSize>()
const pending = new Map<string, Promise<ImageIntrinsicSize | null>>()

/** What is already known about a URL, synchronously. */
export const knownImageSize = (url: string): ImageIntrinsicSize | undefined =>
  sizes.get(url)

/**
 * Decodes an image off-tree just to learn its proportions.
 *
 * Only used when the host sends no `width`/`height`: a photo is laid out from
 * what it says about itself, and this is the fallback for hosts that say
 * nothing. The URL is normally already in flight for the tile itself, so this
 * is a cache hit rather than a second download.
 */
export const measureImageSize = (
  url: string
): Promise<ImageIntrinsicSize | null> => {
  const known = sizes.get(url)
  if (known) {
    return Promise.resolve(known)
  }
  const inFlight = pending.get(url)
  if (inFlight) {
    return inFlight
  }
  if (typeof Image === "undefined") {
    return Promise.resolve(null)
  }

  const measuring = new Promise<ImageIntrinsicSize | null>((resolve) => {
    const image = new Image()
    image.onload = () => {
      const size = { width: image.naturalWidth, height: image.naturalHeight }
      // A decode that yields no dimensions (SVG without a width attribute, a
      // broken file) is not worth caching as a fact.
      if (size.width > 0 && size.height > 0) {
        sizes.set(url, size)
        resolve(size)
        return
      }
      resolve(null)
    }
    image.onerror = () => resolve(null)
    image.src = url
  })
  const tracked = measuring.finally(() => {
    pending.delete(url)
  })
  pending.set(url, tracked)
  return tracked
}
