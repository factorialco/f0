import { type F0Rect } from "../types"

export const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value))

/**
 * Rounding the measured box before solving stops the layout from recomputing on
 * every sub-pixel of a window drag-resize.
 */
export const round4 = (value: number): number => Math.round(value / 4) * 4

/** Largest box of `aspect` ratio that fits inside `box`, centred. */
export const fitInto = (
  box: { width: number; height: number },
  aspect: number
): F0Rect => {
  let width = box.width
  let height = width / aspect
  if (height > box.height) {
    height = box.height
    width = height * aspect
  }
  return {
    x: (box.width - width) / 2,
    y: (box.height - height) / 2,
    width,
    height,
  }
}
