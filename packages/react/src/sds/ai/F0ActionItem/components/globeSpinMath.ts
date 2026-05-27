// Pure JS math for the globe-spin animation. No DOM, no React, no SVG —
// fully portable to React Native (only the render layer differs per platform).
//
// Performance-critical: every frame at 60fps touches this file. The shape is
// deliberately allocation-free in the hot path — callers pass a pre-allocated
// state object (`createGlobeSpinState()`) and `buildFrameInto` mutates it.

// ─── Config ───────────────────────────────────────────────────────────────────
export const VEL_X = 60
export const VEL_Y = 40
export const SPIN_MS = 2000
export const PAUSE_MS = 500
// Period of the slow precession of the rotation axis. Long enough to be
// imperceptible inside a single cycle, but breaks the visual loop over time.
export const PRECESSION_MS = 12000
const ROWS = 2
const SEGS = 40
const COLOR_A: [number, number, number] = [255, 60, 0]
const COLOR_B: [number, number, number] = [160, 140, 220]

const INIT_A = { x: -12, y: 0, z: 0 }
const INIT_B = { x: -12, y: 12, z: 90 }

// Calibrated latEdge factors per size (controls form vs gap ratio).
// Interpolates automatically for unlisted sizes.
const LAT_FACTORS: Record<number, number> = {
  20: 0.72,
  28: 0.66,
  32: 0.72,
  60: 0.77,
  80: 0.8,
  120: 0.85,
}

// ─── Types ────────────────────────────────────────────────────────────────────
type Q = [number, number, number, number]
type V = [number, number, number]

export type Quad = {
  // Canonical SVG-polygon points: "x1,y1 x2,y2 x3,y3 x4,y4".
  points: string
  color: string
  avgZ: number
}

type GridPoint = { x: number; y: number; z: number; t: number }

export type GlobeSpinState = {
  quads: Quad[]
  grid: GridPoint[]
}

// ─── Math helpers ─────────────────────────────────────────────────────────────
const D2R = Math.PI / 180
const LAT_BASE = (ROWS / 8) * Math.PI
// Two full rotations per spin. Multiple of 2π → end orientation matches the
// start, so the pause-to-spin loop has no visual jump.
const TOTAL_ANGLE = 4 * Math.PI

function qMul(a: Q, b: Q): Q {
  return [
    a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
    a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
    a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
    a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0],
  ]
}

function qNorm(q: Q): Q {
  const n = Math.sqrt(q[0] ** 2 + q[1] ** 2 + q[2] ** 2 + q[3] ** 2)
  return [q[0] / n, q[1] / n, q[2] / n, q[3] / n]
}

function qRot(ax: number, ay: number, az: number, ang: number): Q {
  const s = Math.sin(ang / 2)
  return [Math.cos(ang / 2), ax * s, ay * s, az * s]
}

// Module-level scratch vector — `rotVecInto` writes its result here so the
// hot loop doesn't allocate a 3-tuple per call (~1100 allocations/frame saved).
const _scratchV: V = [0, 0, 0]

function rotVecInto(q: Q, x: number, y: number, z: number, out: V): void {
  const w = q[0]
  const qx = q[1]
  const qy = q[2]
  const qz = q[3]
  const tx = 2 * (qy * z - qz * y)
  const ty = 2 * (qz * x - qx * z)
  const tz = 2 * (qx * y - qy * x)
  out[0] = x + w * tx + qy * tz - qz * ty
  out[1] = y + w * ty + qz * tx - qx * tz
  out[2] = z + w * tz + qx * ty - qy * tx
}

function eulerToQ(ex: number, ey: number, ez: number): Q {
  const qx = qRot(1, 0, 0, ex * D2R)
  const qy = qRot(0, 1, 0, ey * D2R)
  const qz = qRot(0, 0, 1, ez * D2R)
  return qNorm(qMul(qMul(qy, qx), qz))
}

// Cubic ease-in-out — smooth acceleration into the spin and gentle
// deceleration into the pause, instead of a constant-velocity rotation.
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// ─── Color LUT ───────────────────────────────────────────────────────────────
// 256 pre-computed `rgb(r,g,b)` strings spanning COLOR_A → COLOR_B. Each frame
// looks up the closest entry instead of allocating a fresh string per quad
// (~700 string allocations/frame saved). 256 levels is well below the eye's
// gradient discrimination, so the LUT is visually lossless.
const COLOR_LUT_SIZE = 256
const COLOR_LUT: string[] = (() => {
  const out: string[] = new Array(COLOR_LUT_SIZE)
  for (let i = 0; i < COLOR_LUT_SIZE; i++) {
    const t = i / (COLOR_LUT_SIZE - 1)
    const r = Math.round(COLOR_A[0] + (COLOR_B[0] - COLOR_A[0]) * t)
    const g = Math.round(COLOR_A[1] + (COLOR_B[1] - COLOR_A[1]) * t)
    const b = Math.round(COLOR_A[2] + (COLOR_B[2] - COLOR_A[2]) * t)
    out[i] = `rgb(${r},${g},${b})`
  }
  return out
})()

function colorFor(t: number): string {
  // Clamp + quantize to LUT index. `t` is expected in [0, 1].
  const i =
    t <= 0 ? 0 : t >= 1 ? COLOR_LUT_SIZE - 1 : (t * (COLOR_LUT_SIZE - 1)) | 0
  return COLOR_LUT[i]
}

function getLatFactor(size: number): number {
  const sizes = Object.keys(LAT_FACTORS)
    .map(Number)
    .sort((a, b) => a - b)
  if (size <= sizes[0]) return LAT_FACTORS[sizes[0]]
  if (size >= sizes[sizes.length - 1])
    return LAT_FACTORS[sizes[sizes.length - 1]]
  for (let i = 0; i < sizes.length - 1; i++) {
    if (size >= sizes[i] && size <= sizes[i + 1]) {
      const t = (size - sizes[i]) / (sizes[i + 1] - sizes[i])
      return (
        LAT_FACTORS[sizes[i]] +
        (LAT_FACTORS[sizes[i + 1]] - LAT_FACTORS[sizes[i]]) * t
      )
    }
  }
  return 0.72
}

// ─── Frame builder ────────────────────────────────────────────────────────────
const SPEED = Math.sqrt(VEL_X ** 2 + VEL_Y ** 2)
const PATH_AXIS: V = [VEL_X / SPEED, VEL_Y / SPEED, 0]
const Q_INIT_A = eulerToQ(INIT_A.x, INIT_A.y, INIT_A.z)
const Q_INIT_B = eulerToQ(INIT_B.x, INIT_B.y, INIT_B.z)

const LAT_STEPS = ROWS * 3
const GRID_STRIDE = SEGS + 1
const GRID_SIZE = (LAT_STEPS + 1) * GRID_STRIDE
export const QUAD_POOL_SIZE = 4 * LAT_STEPS * SEGS // 960

// Per-component scratch arrays for the cap rotations. Allocated once at module
// load — shared across all spinners because each call to `buildFrameInto`
// fully overwrites them before reading.
const _capQs: Q[] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]
const _compareAvgZ = (a: Quad, b: Quad): number => a.avgZ - b.avgZ

export function createGlobeSpinState(): GlobeSpinState {
  const quads: Quad[] = new Array(QUAD_POOL_SIZE)
  for (let i = 0; i < QUAD_POOL_SIZE; i++) {
    quads[i] = { points: "", color: "", avgZ: Infinity }
  }
  const grid: GridPoint[] = new Array(GRID_SIZE)
  for (let i = 0; i < GRID_SIZE; i++) {
    grid[i] = { x: 0, y: 0, z: 0, t: 0 }
  }
  return { quads, grid }
}

/**
 * Build one frame of the globe-spin animation into a caller-owned state pool.
 * Returns the count of active (non-culled) quads — those occupy `state.quads[0..count)`
 * after the call, sorted by ascending `avgZ` (back-to-front).
 *
 * @param state        Pool created by `createGlobeSpinState()`. Reused across frames.
 * @param progress     Eased 0..1 within the current spin cycle.
 * @param size         Pixel size of the spinner.
 * @param axisPhase    Monotonic 0..1 that wraps every PRECESSION_MS. Drives a
 *                     gentle precession of the rotation axis so the loop never
 *                     visually repeats.
 */
export function buildFrameInto(
  state: GlobeSpinState,
  progress: number,
  size: number,
  axisPhase: number
): number {
  const { quads, grid } = state
  const R = size * 0.392
  const cx = size / 2
  const cy = size / 2
  const latEdge = LAT_BASE * getLatFactor(size)

  const angle = progress * TOTAL_ANGLE

  // Precess PATH_AXIS around Z so the axis itself slowly rotates over time.
  const precessQ = qRot(0, 0, 1, axisPhase * 2 * Math.PI)
  rotVecInto(precessQ, PATH_AXIS[0], PATH_AXIS[1], PATH_AXIS[2], _scratchV)
  const qDelta = qRot(_scratchV[0], _scratchV[1], _scratchV[2], angle)
  const qA = qMul(qDelta, Q_INIT_A)
  const qB = qMul(qDelta, Q_INIT_B)
  // Pack into scratch array so the per-cap loop is a plain index lookup.
  _capQs[0] = qA
  _capQs[1] = qB

  let count = 0

  // Four caps: (qA,+1), (qA,-1), (qB,+1), (qB,-1).
  for (let capIdx = 0; capIdx < 4; capIdx++) {
    const q = _capQs[capIdx >> 1]
    const sign = capIdx & 1 ? -1 : 1

    // Build the grid for this cap into the pool. Mutates `grid` in place.
    for (let li = 0; li <= LAT_STEPS; li++) {
      const lat = sign * (Math.PI / 2 - (li / LAT_STEPS) * latEdge)
      const cl = Math.cos(lat)
      const sl = Math.sin(lat)
      const t = Math.sin((li / LAT_STEPS) * Math.PI)
      const row = li * GRID_STRIDE
      for (let si = 0; si <= SEGS; si++) {
        const lon = (si / SEGS) * Math.PI * 2
        rotVecInto(q, cl * Math.cos(lon), sl, cl * Math.sin(lon), _scratchV)
        const cell = grid[row + si]
        cell.x = _scratchV[0]
        cell.y = _scratchV[1]
        cell.z = _scratchV[2]
        cell.t = t
      }
    }

    // Build quads from the grid into the pool.
    for (let li = 0; li < LAT_STEPS; li++) {
      const rowA = li * GRID_STRIDE
      const rowB = (li + 1) * GRID_STRIDE
      for (let si = 0; si < SEGS; si++) {
        const p00 = grid[rowA + si]
        const p01 = grid[rowA + si + 1]
        const p10 = grid[rowB + si]
        const p11 = grid[rowB + si + 1]

        const avgT = (p00.t + p01.t + p10.t + p11.t) * 0.25
        if (avgT < 0.001) continue

        const mx = (p00.x + p01.x + p10.x + p11.x) * 0.25
        const my = (p00.y + p01.y + p10.y + p11.y) * 0.25
        const avgZ = (p00.z + p01.z + p10.z + p11.z) * 0.25
        const cxq = mx * R
        const cyq = my * R

        // Inlined `ep` for each vertex — same math as before, no function-call
        // overhead and no intermediate tuples in the hot path.
        const px0 = p00.x * R - cxq
        const py0 = p00.y * R - cyq
        const d0 = Math.sqrt(px0 * px0 + py0 * py0)
        const f0 = d0 > 0 ? (d0 + 0.9) / d0 : 1
        const ax = cx + cxq + px0 * f0
        const ay = cy - cyq - py0 * f0

        const px1 = p01.x * R - cxq
        const py1 = p01.y * R - cyq
        const d1 = Math.sqrt(px1 * px1 + py1 * py1)
        const f1 = d1 > 0 ? (d1 + 0.9) / d1 : 1
        const bx = cx + cxq + px1 * f1
        const by = cy - cyq - py1 * f1

        const px2 = p11.x * R - cxq
        const py2 = p11.y * R - cyq
        const d2 = Math.sqrt(px2 * px2 + py2 * py2)
        const f2 = d2 > 0 ? (d2 + 0.9) / d2 : 1
        const dxv = cx + cxq + px2 * f2
        const dyv = cy - cyq - py2 * f2

        const px3 = p10.x * R - cxq
        const py3 = p10.y * R - cyq
        const d3 = Math.sqrt(px3 * px3 + py3 * py3)
        const f3 = d3 > 0 ? (d3 + 0.9) / d3 : 1
        const ex = cx + cxq + px3 * f3
        const ey = cy - cyq - py3 * f3

        const slot = quads[count]
        slot.points = `${ax},${ay} ${bx},${by} ${dxv},${dyv} ${ex},${ey}`
        slot.color = colorFor((mx + 1) * 0.5)
        slot.avgZ = avgZ
        count++
      }
    }
  }

  // Mark inactive slots so they sort to the end of the pool.
  for (let i = count; i < QUAD_POOL_SIZE; i++) {
    quads[i].avgZ = Infinity
  }
  quads.sort(_compareAvgZ)

  return count
}
