// Pure JS math for the globe-spin animation. No DOM, no React, no SVG —
// fully portable to React Native (only the render layer differs per platform).

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
  // Works directly in <svg><polygon points={...} /> on web AND in
  // react-native-svg's <Polygon points={...} /> when porting to native.
  points: string
  color: string
  avgZ: number
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

function rotVec(q: Q, [x, y, z]: V): V {
  const [w, qx, qy, qz] = q
  const tx = 2 * (qy * z - qz * y)
  const ty = 2 * (qz * x - qx * z)
  const tz = 2 * (qx * y - qy * x)
  return [
    x + w * tx + qy * tz - qz * ty,
    y + w * ty + qz * tx - qx * tz,
    z + w * tz + qx * ty - qy * tx,
  ]
}

function eulerToQ(ex: number, ey: number, ez: number): Q {
  const qx = qRot(1, 0, 0, ex * D2R)
  const qy = qRot(0, 1, 0, ey * D2R)
  const qz = qRot(0, 0, 1, ez * D2R)
  return qNorm(qMul(qMul(qy, qx), qz))
}

function lerpColor(
  c1: [number, number, number],
  c2: [number, number, number],
  t: number
): string {
  return `rgb(${Math.round(c1[0] + (c2[0] - c1[0]) * t)},${Math.round(c1[1] + (c2[1] - c1[1]) * t)},${Math.round(c1[2] + (c2[2] - c1[2]) * t)})`
}

// Cubic ease-in-out — smooth acceleration into the spin and gentle
// deceleration into the pause, instead of a constant-velocity rotation.
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
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

/**
 * Build one frame of the globe-spin animation.
 *
 * @param progress     Eased 0..1 within the current spin cycle.
 * @param size         Pixel size of the spinner.
 * @param axisPhase    Monotonic 0..1 that wraps slowly (≈12s period). Drives a
 *                     gentle precession of the rotation axis so each spin
 *                     reveals a slightly different great circle — the loop
 *                     never visually repeats.
 */
export function buildFrame(
  progress: number,
  size: number,
  axisPhase = 0
): Quad[] {
  const R = size * 0.392
  const cx = size / 2
  const cy = size / 2
  const latEdge = LAT_BASE * getLatFactor(size)
  const latSteps = ROWS * 3

  const angle = progress * TOTAL_ANGLE

  // Precess PATH_AXIS around Z so the axis itself slowly rotates over time.
  const precessQ = qRot(0, 0, 1, axisPhase * 2 * Math.PI)
  const [pax, pay, paz] = rotVec(precessQ, PATH_AXIS)
  const qDelta = qRot(pax, pay, paz, angle)
  const qA = qMul(qDelta, Q_INIT_A)
  const qB = qMul(qDelta, Q_INIT_B)

  const all: Quad[] = []

  for (const [q, sign] of [
    [qA, 1],
    [qA, -1],
    [qB, 1],
    [qB, -1],
  ] as [Q, number][]) {
    const grid: { x: number; y: number; z: number; t: number }[][] = []
    for (let li = 0; li <= latSteps; li++) {
      const lat = sign * (Math.PI / 2 - (li / latSteps) * latEdge)
      const row: { x: number; y: number; z: number; t: number }[] = []
      for (let si = 0; si <= SEGS; si++) {
        const lon = (si / SEGS) * Math.PI * 2
        const cl = Math.cos(lat),
          sl = Math.sin(lat)
        const [wx, wy, wz] = rotVec(q, [
          cl * Math.cos(lon),
          sl,
          cl * Math.sin(lon),
        ])
        row.push({
          x: wx,
          y: wy,
          z: wz,
          t: Math.sin((li / latSteps) * Math.PI),
        })
      }
      grid.push(row)
    }
    for (let li = 0; li < latSteps; li++) {
      for (let si = 0; si < SEGS; si++) {
        const p00 = grid[li][si],
          p01 = grid[li][si + 1]
        const p10 = grid[li + 1][si],
          p11 = grid[li + 1][si + 1]
        if ((p00.t + p01.t + p10.t + p11.t) / 4 < 0.001) continue

        const mx = (p00.x + p01.x + p10.x + p11.x) / 4
        const avgZ = (p00.z + p01.z + p10.z + p11.z) / 4
        const cxq = mx * R
        const cyq = ((p00.y + p01.y + p10.y + p11.y) / 4) * R

        const ep = (p: { x: number; y: number }): [number, number] => {
          const dx = p.x * R - cxq,
            dy = p.y * R - cyq
          const d = Math.sqrt(dx * dx + dy * dy)
          const f = d > 0 ? (d + 0.9) / d : 1
          return [cx + cxq + dx * f, cy - cyq - dy * f]
        }

        const [ax, ay] = ep(p00),
          [bx, by] = ep(p01)
        const [dx, dy] = ep(p11),
          [ex, ey] = ep(p10)

        all.push({
          points: `${ax},${ay} ${bx},${by} ${dx},${dy} ${ex},${ey}`,
          color: lerpColor(COLOR_A, COLOR_B, (mx + 1) / 2),
          avgZ,
        })
      }
    }
  }

  all.sort((a, b) => a.avgZ - b.avgZ)
  return all
}
