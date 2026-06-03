import { F0Icon } from "@factorialco/f0-react"

/**
 * The tinted icon tile that opens a section header — the same glyph
 * treatment the policy-rules `HeroBlock`s use (48×48 rounded tile, a
 * soft-tinted background, a matching coloured glyph). Extracted so the
 * core pages (Expense types, Approval flows, Certified documents),
 * whose title is the in-canvas breadcrumb leaf rather than a HeroBlock,
 * can show the same tile above their title and read consistently with
 * the rest of the setup.
 *
 * `bgClass` must be one of the precompiled `bg-f1-background-*` tints
 * (info / promote / positive / accent / warning) — the same set the
 * HeroBlocks already use, so the classes are guaranteed to be in
 * f0-react's compiled stylesheet.
 */
export function SectionIconTile(props: {
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  color: React.ComponentProps<typeof F0Icon>["color"]
  bgClass: string
}) {
  return (
    <div
      className={`w-12 h-12 rounded-md flex items-center justify-center ${props.bgClass} mb-1`}
      aria-hidden
    >
      <F0Icon icon={props.icon} color={props.color} size="lg" />
    </div>
  )
}
