/**
 * The running-clock indicator: a breathing core inside a soft halo, the
 * same two-layer mark f0's own clock-in card uses (Angel, 2026-09-15 —
 * a bare dot was "only part of it").
 */
export function ClockDot({ size = 10 }: { size?: number }) {
  return (
    <span
      className="relative inline-block shrink-0 align-middle"
      style={{ width: size, height: size }}
    >
      <span className="home-clock-halo absolute inset-0 rounded-full bg-f1-background-positive-bold opacity-20" />
      <span className="home-clock-dot absolute inset-[25%] rounded-full bg-f1-background-positive-bold" />
    </span>
  )
}
