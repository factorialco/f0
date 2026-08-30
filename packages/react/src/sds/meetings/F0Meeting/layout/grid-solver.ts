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
  /** Only breaks ties between layouts of equal quality. */
  preferredAspect: number
  /** Below this a tile stops being useful; the solver overflows instead. */
  minTileWidth: number
}

/** One row of the grid. Rows may hold different counts, so also different widths. */
export type GridRow = {
  count: number
  tileWidth: number
  tileHeight: number
}

export type GridSolution = {
  rows: number
  /** Widest row's tile count. */
  cols: number
  /** The NARROWEST row's tile — the worst case, which is what limits are about. */
  tileWidth: number
  tileHeight: number
  /** Tiles that fit. `count - visibleCount` go to the overflow chip. */
  visibleCount: number
  rowSpecs: GridRow[]
}

/** Layouts within this much of the best area count as a tie. */
const AREA_EPSILON = 0.99

/**
 * Spreads `count` over `rows` as evenly as possible, fuller rows first.
 *
 * `Math.ceil(count / rows)` for every row is what used to leave a hole: five
 * people over two rows became 3 + 3 with one cell empty, instead of 3 + 2 with
 * none.
 */
const distribute = (count: number, rows: number): number[] => {
  const base = Math.floor(count / rows)
  const extra = count % rows
  return Array.from({ length: rows }, (_, row) => base + (row < extra ? 1 : 0))
}

/** Fits a tile into its cell, taking the cell's shape within the range. */
const fitCell = (
  cellWidth: number,
  cellHeight: number,
  minAspect: number,
  maxAspect: number
): { width: number; height: number; aspect: number } => {
  const aspect = clamp(cellWidth / cellHeight, minAspect, maxAspect)
  let width = cellWidth
  let height = width / aspect
  if (height > cellHeight) {
    height = cellHeight
    width = height * aspect
  }
  return { width, height, aspect }
}

/**
 * Picks the row split that makes the SMALLEST tile as large as possible, with
 * each row filling the container's width on its own.
 *
 * Two ideas do the work. A tile takes the shape of its own cell within
 * `[minAspect, maxAspect]`, so inside that range the tile IS the cell and the
 * block covers the container instead of letterboxing a fixed 16:9 box in every
 * cell. And rows are sized independently, so an incomplete last row spreads its
 * tiles over the full width rather than leaving the missing cells as a hole —
 * three people fill the room, they do not sit next to an empty square.
 *
 * Maximin rather than total area: the person in the worst seat is the one who
 * decides whether a layout is usable, and total area would happily starve one
 * row to fatten another.
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
      const rowHeight = (height - gap * (rows - 1)) / rows
      if (rowHeight <= 0) continue

      const counts = distribute(remaining, rows)
      const specs: GridRow[] = []
      // The smallest tile stands for the layout, so it must stay a REAL tile:
      // taking its width from one row and its height from another describes a
      // rectangle that the grid never draws.
      let worst: GridRow | null = null
      let worstArea = Number.POSITIVE_INFINITY
      let shape = 0
      let viable = true

      for (const inRow of counts) {
        const cellWidth = (width - gap * (inRow - 1)) / inRow
        if (cellWidth <= 0) {
          viable = false
          break
        }
        const tile = fitCell(cellWidth, rowHeight, minAspect, maxAspect)
        const spec = {
          count: inRow,
          tileWidth: tile.width,
          tileHeight: tile.height,
        }
        specs.push(spec)
        const area = tile.width * tile.height
        if (area < worstArea) {
          worstArea = area
          worst = spec
        }
        // Log distance, so twice and half the target are equally far off.
        shape += Math.abs(Math.log(tile.aspect / preferredAspect))
      }

      if (!viable || !worst) continue

      const averageShape = shape / specs.length
      const bigger = worstArea > bestArea
      const tiedAndBetterShaped =
        worstArea >= bestArea * AREA_EPSILON && averageShape < bestShape

      if (!best || bigger || tiedAndBetterShaped) {
        best = {
          rows,
          cols: Math.max(...counts),
          tileWidth: worst.tileWidth,
          tileHeight: worst.tileHeight,
          visibleCount: remaining,
          rowSpecs: specs,
        }
        bestArea = Math.max(bestArea, worstArea)
        bestShape = Math.min(bestShape, averageShape)
      }
    }

    if (best && best.tileWidth >= minTileWidth) return best
    // Too cramped: one more participant moves to the overflow chip, re-solve.
    remaining--
  }

  // Not even one tile clears the minimum. Something still has to render, so the
  // last resort ignores it rather than showing an empty room.
  const tile = fitCell(
    Math.max(0, width),
    Math.max(0, height),
    minAspect,
    maxAspect
  )

  return {
    rows: 1,
    cols: 1,
    tileWidth: tile.width,
    tileHeight: tile.height,
    visibleCount: 1,
    rowSpecs: [{ count: 1, tileWidth: tile.width, tileHeight: tile.height }],
  }
}

/**
 * Places the solved tiles. Rows sit in equal-height slots that span the
 * container, and each row centres its own tiles inside its slot — so a row
 * that the aspect clamp shrank is centred rather than pinned to a corner.
 *
 * Returns absolute rects so the caller can animate x/y/width/height directly —
 * no `scale`, which is what would warp the video mid-flight.
 */
export const layoutGrid = (
  solution: GridSolution,
  box: { width: number; height: number },
  gap: number
): F0Rect[] => {
  const rects: F0Rect[] = []
  const slotHeight = (box.height - gap * (solution.rows - 1)) / solution.rows

  solution.rowSpecs.forEach((row, index) => {
    const rowWidth = row.count * row.tileWidth + gap * (row.count - 1)
    const offsetX = (box.width - rowWidth) / 2
    const slotY = index * (slotHeight + gap)
    const offsetY = slotY + (slotHeight - row.tileHeight) / 2

    for (let column = 0; column < row.count; column++) {
      rects.push({
        x: offsetX + column * (row.tileWidth + gap),
        y: offsetY,
        width: row.tileWidth,
        height: row.tileHeight,
      })
    }
  })

  return rects
}
