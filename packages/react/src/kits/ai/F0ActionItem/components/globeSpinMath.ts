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
export const PAUSE_MS = 300
// Period of the slow precession of the rotation axis. Long enough to be
// imperceptible inside a single cycle, but breaks the visual loop over time.
export const PRECESSION_MS = 12000
const SEGS = 40
// The One mark, measured off the official artwork. Each of its four lenses is
// the intersection of the mark circle with a second circle of radius LENS_R
// centred LENS_C away — both in units of the mark radius. LENS_C > 1 (that
// centre falls OUTSIDE the mark) is why no spherical cap can reproduce the
// lens, at any angle or tilt: a circle drawn on a sphere always projects to an
// ellipse centred inside the disc. Hence LENS_EDGE below.
const LENS_C = 1.5472
const LENS_R = 0.9947
// Each quad is grown slightly around its own centre so neighbours overlap and
// their antialiased edges don't leave hairline seams. It must be RELATIVE:
// a fixed offset in user units is ~5% of the whole mark at size 20, which
// turns the silhouette into visible sawtooth.
const QUAD_DILATE = 1.05
const COLOR_A: [number, number, number] = [255, 60, 0]
const COLOR_B: [number, number, number] = [160, 140, 220]

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

// Trapezoidal velocity: ramp up over SPIN_RAMP, coast, ramp down. The mark
// still settles into the resting logo instead of stopping dead, but it gets
// there without the dead time a symmetric cubic ease produces — that one spent
// ~380ms either side of the pause moving too slowly to see (35% of the cycle
// reading as stopped) and then compensated with a 1080°/s whip. Same two
// turns, same duration, peak velocity down to ~420°/s.
const SPIN_RAMP = 0.15
export function spinEase(t: number): number {
  // Clamp first. Callers derive `t` from wall-clock deltas, and the ramp is
  // quadratic: unclamped, a negative `t` comes back POSITIVE (t² / 2r / area),
  // so a clock that briefly runs backwards would jump the mark most of a turn
  // instead of holding it at rest.
  if (t <= 0) return 0
  if (t >= 1) return 1
  // Area under the unit-height trapezoid; dividing by it makes spinEase(1) = 1.
  // Numerically equal to where the ramp down starts, but a different quantity —
  // they are spelled out separately on purpose.
  const area = 1 - SPIN_RAMP
  if (t <= SPIN_RAMP) return (t * t) / (2 * SPIN_RAMP) / area
  if (t >= 1 - SPIN_RAMP) {
    const u = 1 - t
    return (area - (u * u) / (2 * SPIN_RAMP)) / area
  }
  return (t - SPIN_RAMP / 2) / area
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

// ─── Frame builder ────────────────────────────────────────────────────────────
const SPEED = Math.sqrt(VEL_X ** 2 + VEL_Y ** 2)
const PATH_AXIS: V = [VEL_X / SPEED, VEL_Y / SPEED, 0]
// Rings of quads from the centre of a lens out to its edge.
const LAT_STEPS = 6
const GRID_STRIDE = SEGS + 1
const GRID_SIZE = (LAT_STEPS + 1) * GRID_STRIDE
export const QUAD_POOL_SIZE = 4 * LAT_STEPS * SEGS // 960

// Angular radius of a lens, per azimuth around its axis. Solving
//   (cosθ − LENS_C)² + (sinθ·cosφ)² = LENS_R²
// for cosθ gives the patch on the sphere that projects EXACTLY to the mark's
// lens when it faces the viewer — 39.0° towards the tips, 56.5° towards the
// waist. A cap would be a single constant here, which is precisely what it
// cannot be. Azimuth-only, so it is built once at module load.
const LENS_EDGE: number[] = (() => {
  const a = LENS_C
  const r2 = LENS_R * LENS_R
  const out = new Array<number>(SEGS + 1)
  for (let si = 0; si <= SEGS; si++) {
    const lon = (si / SEGS) * Math.PI * 2
    const k = Math.sin(lon) ** 2
    const c =
      k < 1e-9
        ? (a * a + 1 - r2) / (2 * a)
        : (a - Math.sqrt(a * a - k * (a * a + 1 - k - r2))) / k
    out[si] = Math.acos(Math.max(-1, Math.min(1, c)))
  }
  return out
})()

// Azimuth trig, hoisted — it no longer depends on anything per-frame.
const COS_LON: number[] = new Array(SEGS + 1)
const SIN_LON: number[] = new Array(SEGS + 1)
for (let si = 0; si <= SEGS; si++) {
  const lon = (si / SEGS) * Math.PI * 2
  COS_LON[si] = Math.cos(lon)
  SIN_LON[si] = Math.sin(lon)
}

// The four lenses are one patch repeated at 0/90/180/270° about the view axis,
// which is what makes the resting mark four-fold symmetric like the logo.
const Q_LENS: Q[] = [0, 1, 2, 3].map((k) => qRot(0, 0, 1, (k * Math.PI) / 2))

// Scratch for the per-frame lens rotations — overwritten before every read.
const _capQs: Q[] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
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

  const angle = progress * TOTAL_ANGLE

  // Precess PATH_AXIS around Z so the axis itself slowly rotates over time.
  const precessQ = qRot(0, 0, 1, axisPhase * 2 * Math.PI)
  rotVecInto(precessQ, PATH_AXIS[0], PATH_AXIS[1], PATH_AXIS[2], _scratchV)
  const qDelta = qRot(_scratchV[0], _scratchV[1], _scratchV[2], angle)
  for (let k = 0; k < 4; k++) _capQs[k] = qMul(qDelta, Q_LENS[k])

  let count = 0

  for (let capIdx = 0; capIdx < 4; capIdx++) {
    const q = _capQs[capIdx]

    // Build the grid for this lens into the pool. Mutates `grid` in place.
    // Colatitude runs 0..LENS_EDGE[si], so the patch boundary follows the
    // mark's lens instead of a circle of constant radius.
    for (let li = 0; li <= LAT_STEPS; li++) {
      const f = li / LAT_STEPS
      const t = Math.sin(f * Math.PI)
      const row = li * GRID_STRIDE
      for (let si = 0; si <= SEGS; si++) {
        const colat = f * LENS_EDGE[si]
        const sc = Math.sin(colat)
        rotVecInto(
          q,
          sc * COS_LON[si],
          Math.cos(colat),
          sc * SIN_LON[si],
          _scratchV
        )
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

        // Vertices, dilated from the quad centre. Inlined per vertex — no
        // function-call overhead and no intermediate tuples in the hot path.
        const px0 = p00.x * R - cxq
        const py0 = p00.y * R - cyq
        const ax = cx + cxq + px0 * QUAD_DILATE
        const ay = cy - cyq - py0 * QUAD_DILATE

        const px1 = p01.x * R - cxq
        const py1 = p01.y * R - cyq
        const bx = cx + cxq + px1 * QUAD_DILATE
        const by = cy - cyq - py1 * QUAD_DILATE

        const px2 = p11.x * R - cxq
        const py2 = p11.y * R - cyq
        const dxv = cx + cxq + px2 * QUAD_DILATE
        const dyv = cy - cyq - py2 * QUAD_DILATE

        const px3 = p10.x * R - cxq
        const py3 = p10.y * R - cyq
        const ex = cx + cxq + px3 * QUAD_DILATE
        const ey = cy - cyq - py3 * QUAD_DILATE

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
