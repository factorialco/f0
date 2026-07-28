import { useEffect, useState } from "react"

// Raw WebVTT payloads begin with the "WEBVTT" magic line; anything else is
// treated as a URL to a .vtt resource.
const isRawVtt = (value: string): boolean =>
  value.trimStart().startsWith("WEBVTT")

export interface VttSource {
  /** `src` for a `<track>` element, or `undefined` when nothing is passed. */
  trackSrc: string | undefined
  /**
   * Whether the media element needs `crossOrigin` for the resource to load
   * (true only for a remote URL — raw VTT is served from a same-origin blob).
   */
  needsCrossOrigin: boolean
}

/**
 * Resolves a WebVTT string into a `<track>` src: a URL is used directly; raw
 * WebVTT (starting with "WEBVTT") is served from a same-origin blob so no CORS
 * setup is needed. Shared by the captions and audio-description tracks.
 */
export function useVttSource(value: string | undefined): VttSource {
  const rawVtt = value !== undefined && isRawVtt(value)

  const [blobUrl, setBlobUrl] = useState<string>()
  useEffect(() => {
    if (value === undefined || !isRawVtt(value)) {
      setBlobUrl(undefined)
      return
    }
    const url = URL.createObjectURL(new Blob([value], { type: "text/vtt" }))
    setBlobUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [value])

  return {
    trackSrc: value === undefined ? undefined : rawVtt ? blobUrl : value,
    needsCrossOrigin: value !== undefined && !rawVtt,
  }
}
