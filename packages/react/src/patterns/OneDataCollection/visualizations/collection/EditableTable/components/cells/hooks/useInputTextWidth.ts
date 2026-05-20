import { useCallback, useState } from "react"

let measureCanvas: HTMLCanvasElement | null = null
function getTextWidth(text: string, font: string): number {
  if (!measureCanvas) measureCanvas = document.createElement("canvas")
  const ctx = measureCanvas.getContext("2d")
  if (!ctx) return 0
  ctx.font = font
  return Math.ceil(ctx.measureText(text).width)
}

/**
 * Returns the pixel width of the given text, measured using the actual
 * computed font of the first <input> found inside the referenced container.
 *
 * The F0NumberInput component forces w-full at every wrapper level, making it
 * impossible to shrink-wrap with CSS alone. This hook lets us set an explicit
 * container width so the input + currency label hug the content tightly.
 */
export function useInputTextWidth(text: string, extraPx = 26, minPx = 48) {
  const [font, setFont] = useState<string | null>(null)

  // Captures the real computed font from the first <input> inside the node.
  // Without this, the fallback measurement would be inaccurate because the
  // actual rendered font-family and font-size may differ.
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const input = node.querySelector("input")
      if (input) {
        setFont(getComputedStyle(input).font)
      }
    }
  }, [])

  const width = font
    ? Math.max(getTextWidth(text || "\u00A0", font) + extraPx, minPx)
    : undefined

  return { ref, width }
}
