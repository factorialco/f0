/**
 * A bare trend line for a metric card. Shared by the headcount banner and
 * by the card One quotes back at you when you click its button, so the
 * two are literally the same drawing.
 *
 * Normalised to the series' own min/max — these are shapes, not scales,
 * and a fixed domain would flatten every one of them.
 */
export function Sparkline({
  series,
  className = "h-14 w-full",
  area = false,
}: {
  series: number[]
  className?: string
  /**
   * Fill the space under the line (Figma 2730:462813, the People screen's
   * banner, which draws the trend as a filled band). currentColor at low
   * alpha, so the fill follows whatever colour the line is given.
   */
  area?: boolean
}) {
  const min = Math.min(...series)
  const max = Math.max(...series)
  // A flat series would divide by zero; park it on the mid-line instead.
  const span = max - min || 1
  const coords = series.map((value, i) => {
    const x = (i / (series.length - 1)) * 300
    const y = 36 - ((value - min) / span) * 32
    return `${x.toFixed(1)},${y.toFixed(1)}`
  })
  const points = coords.join(" ")

  return (
    <svg
      viewBox="0 0 300 40"
      className={`block ${className}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      {area && (
        // Closed down to the baseline. Its own element rather than a
        // stroked polygon: a shared shape would round the baseline
        // corners along with the line.
        <polygon
          points={`${points} 300,40 0,40`}
          fill="currentColor"
          fillOpacity="0.12"
          stroke="none"
        />
      )}
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
