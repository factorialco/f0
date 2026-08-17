import { type F0Rect } from "../types"
import { clamp } from "../utils/aspect"

export type GridSolverInput = {
  count: number
  width: number
  height: number
  gap: number
  /**
   * How far a tile may stray from `preferredAspect` to fill its cell. Inside
   * this range the tile simply IS the cell, so the grid leaves no dead space.
   */
  minAspect: number
  maxAspect: number
  /** Only breaks ties between layouts of equal area. */
  preferredAspect: number
  /** Below this a tile stops being useful; the solver overflows instead. */
  minTileWidth: number
}

export type GridSolution = {
  rows: number
  cols: number
  tileWidth: number
  tileHeight: number
  /** Tiles that fit. `count - visibleCount` go to the overflow chip. */
  visibleCount: number
}

/** Layouts within this much of the best area count as a tie. */
const AREA_EPSILON = 0.99

/**
 * Picks the rows × cols split that maximises tile AREA, letting each tile take
 * the shape of its own cell within `[minAspect, maxAspect]`.
 *
 * Taking the cell's shape is the whole point: inside the range the tile IS the
 * cell, so the block covers the container completely instead of letterboxing a
 * fixed 16:9 box inside every cell and then centring the leftovers. It is what
 * Google Meet's Dynamic layouts do, and it only works because cameras are
 * painted with `object-cover`.
 *
 * Area alone is now enough to pick the conventional layouts (2→1×2, 6→2×3,
 * 9→3×3…) because filling the container well IS the conventional layout. The
 * previous implementation needed an orientation tie-break precisely because a
 * fixed ratio made area a poor signal.
 *
 * O(n) with the n we care about, and pure, so it is tested without rendering.
 */
export const solveGrid = ({
  count,
  width,
  height,
  gap,
  minAspect,
  maxAspect,
  preferredAspect,
  minTileWidth,
}: GridSolverInput): GridSolution => {
  let remaining = Math.max(1, Math.floor(count))

  while (remaining >= 1) {
    let best: GridSolution | null = null
    let bestArea = 0
    let bestShape = Number.POSITIVE_INFINITY

    for (let rows = 1; rows <= remaining; rows++) {
      const cols = Math.ceil(remaining / rows)
      const cellWidth = (width - gap * (cols - 1)) / cols
      const cellHeight = (height - gap * (rows - 1)) / rows
      if (cellWidth <= 0 || cellHeight <= 0) continue

      const aspect = clamp(cellWidth / cellHeight, minAspect, maxAspect)
      let tileWidth = cellWidth
      let tileHeight = tileWidth / aspect
      if (tileHeight > cellHeight) {
        tileHeight = cellHeight
        tileWidth = tileHeight * aspect
      }

      const area = tileWidth * tileHeight
      // Log distance, so twice and half the target are equally far off.
      const shape = Math.abs(Math.log(aspect / preferredAspect))

      const bigger = area > bestArea
      const tiedAndBetterShaped =
        area >= bestArea * AREA_EPSILON && shape < bestShape

      if (!best || bigger || tiedAndBetterShaped) {
        best = { rows, cols, tileWidth, tileHeight, visibleCount: remaining }
        bestArea = Math.max(bestArea, area)
        bestShape = Math.min(bestShape, shape)
      }
    }

    if (best && best.tileWidth >= minTileWidth) return best
    // Too cramped: one more participant moves to the overflow chip, re-solve.
    remaining--
  }

  // Not even one tile clears the minimum. Something still has to render, so the
  // last resort ignores it rather than showing an empty room.
  const aspect = clamp(
    height > 0 ? width / height : preferredAspect,
    minAspect,
    maxAspect
  )
  let tileWidth = Math.max(0, width)
  let tileHeight = tileWidth / aspect
  if (tileHeight > height) {
    tileHeight = Math.max(0, height)
    tileWidth = tileHeight * aspect
  }

  return { rows: 1, cols: 1, tileWidth, tileHeight, visibleCount: 1 }
}

/**
 * Places the solved tiles, centring the block and any orphan last row. Returns
 * absolute rects so the caller can animate x/y/width/height directly — no
 * `scale`, which is what would warp the video mid-flight.
 */
export const layoutGrid = (
  solution: GridSolution,
  box: { width: number; height: number },
  gap: number
): F0Rect[] => {
  const rects: F0Rect[] = []
  const blockHeight =
    solution.rows * solution.tileHeight + gap * (solution.rows - 1)
  const offsetY = (box.height - blockHeight) / 2

  let placed = 0
  for (let row = 0; row < solution.rows; row++) {
    const inRow = Math.min(solution.cols, solution.visibleCount - placed)
    if (inRow <= 0) break
    const rowWidth = inRow * solution.tileWidth + gap * (inRow - 1)
    const offsetX = (box.width - rowWidth) / 2

    for (let col = 0; col < inRow; col++) {
      rects.push({
        x: offsetX + col * (solution.tileWidth + gap),
        y: offsetY + row * (solution.tileHeight + gap),
        width: solution.tileWidth,
        height: solution.tileHeight,
      })
    }
    placed += inRow
  }

  return rects
}
