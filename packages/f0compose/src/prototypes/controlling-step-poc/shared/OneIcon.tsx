import { forwardRef, useId, type SVGProps } from "react"

/**
 * Official Factorial One mark — the 4-petal gradient, from design's
 * `One-fill-colour.svg`. Use this for anything One-related (the
 * "Submit with One" dropdown item, the in-context One nudge button…).
 *
 * Authored exactly like an f0 app icon (forwardRef + viewBox + spread
 * props, no hard-coded width/height) so it satisfies f0's `IconType`
 * and drops into any `icon` slot — f0 controls the size. The four
 * petals share one gradient def; the fills are baked in (it's a brand
 * mark, not a monochrome glyph), so it intentionally ignores
 * currentColor.
 */

// The four petals (bottom / left / right / top). The petals fill the
// 0–40 box edge-to-edge, whereas f0's app glyphs sit padded inside a 24
// box (~67% fill). At equal render size the One mark looked ~1.5× too
// big in menus, so we pad the viewBox to match f0's fill ratio
// (40 / 60 ≈ 0.67).
const PETAL_PATHS = [
  "M19.9927 31.0499C24.5641 31.0499 29.0421 32.5754 32.5659 35.5274C29.0421 38.3841 24.564 40.0013 19.9927 40.0013C15.2314 40.0011 10.8502 38.2885 7.42187 35.5274C10.9455 32.6707 15.4215 31.05 19.9927 31.0499Z",
  "M4.4751 7.42682C7.33163 10.9504 8.95128 15.4265 8.95142 19.9976C8.95141 24.5689 7.42697 29.0471 4.4751 32.5709C1.6183 29.047 -4.73047e-07 24.569 0 19.9976C0.000143503 15.2362 1.71391 10.8552 4.4751 7.42682Z",
  "M35.5298 7.42682C38.3863 10.9504 40.006 15.4265 40.0061 19.9976C40.0061 24.5689 38.4817 29.0471 35.5298 32.5709C32.673 29.047 31.0547 24.569 31.0547 19.9976C31.0548 15.2362 32.7686 10.8552 35.5298 7.42682Z",
  "M19.9927 6.10352e-05C24.5641 6.15191e-05 29.0421 1.52558 32.5659 4.4776C29.0421 7.33426 24.564 8.95148 19.9927 8.95148C15.2314 8.95133 10.8502 7.23866 7.42187 4.4776C10.9455 1.62093 15.4215 0.000200814 19.9927 6.10352e-05Z",
]

function OneMark({ gradientId }: { gradientId: string }) {
  return (
    <>
      {PETAL_PATHS.map((d, i) => (
        <path key={i} d={d} fill={`url(#${gradientId})`} />
      ))}
      <defs>
        <linearGradient
          id={gradientId}
          x1="40.0061"
          y1="20.0007"
          x2="0"
          y2="20.0007"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A1ADE5" />
          <stop offset="0.5" stopColor="#E51943" stopOpacity="0.7" />
          <stop offset="1" stopColor="#E55619" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </>
  )
}

const OneIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const gradientId = useId()
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 60 60"
        fill="none"
        ref={ref}
        {...props}
      >
        <OneMark gradientId={gradientId} />
      </svg>
    )
  }
)
OneIcon.displayName = "OneIcon"

/**
 * Same mark, but it does a slow, continuous spin WHILE its nearest
 * interactive ancestor is hovered — the "New expense" menu row in the
 * dropdown, or the "Skip the form" CTA button in the banner — and rests
 * otherwise.
 *
 * Pure CSS, no per-element wiring: a `<style>` inside the inline SVG
 * (inline-SVG styles apply document-wide) targets `button:hover` /
 * `[role="menuitem"]:hover` ancestors of THIS mark, scoped by a unique
 * class so it never touches other icons. Because each dropdown row is
 * its own `menuitem` and only this row carries the mark, only the
 * hovered row spins. Satisfies `IconType`, so it drops straight into
 * any `icon` slot — the dropdown item AND the F0Button icon.
 */
const OneIconHoverSpin = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const gradientId = useId()
    const spinClass = `one-hover-${useId().replace(/:/g, "")}`
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 60 60"
        fill="none"
        ref={ref}
        {...props}
      >
        <style>{`
          @keyframes ${spinClass}-kf {
            to { transform: rotate(360deg); }
          }
          button:hover .${spinClass},
          [role="menuitem"]:hover .${spinClass} {
            transform-box: fill-box;
            transform-origin: center;
            animation: ${spinClass}-kf 2s linear infinite;
          }
        `}</style>
        <g className={spinClass}>
          <OneMark gradientId={gradientId} />
        </g>
      </svg>
    )
  }
)
OneIconHoverSpin.displayName = "OneIconHoverSpin"

export default OneIcon
export { OneIconHoverSpin }
