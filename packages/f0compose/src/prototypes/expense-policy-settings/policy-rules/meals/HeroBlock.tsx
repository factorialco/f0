import { F0Box, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { Coffee } from "@factorialco/f0-react/icons/app"

/**
 * Hero block for the Meals & hospitality page.
 *
 * Vertical composition: tinted icon tile sits ABOVE the H1 +
 * description, not beside it. This reads as a section opener
 * (icon-as-glyph-of-the-section) rather than a heading-with-
 * leading-icon.
 *
 * Tinting:
 *   - Tile background: `bg-f1-background-info` (soft blue).
 *   - Icon colour: `color="info"` (matching blue glyph).
 *
 * Both tokens ship in f0-react's pre-compiled stylesheet \u2014
 * verified via `grep` against `dist/styles.css`. No arbitrary
 * values, no inline colours.
 */
export function HeroBlock(props: { title: string; description: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm" paddingBottom="lg">
      <div className="w-12 h-12 rounded-md flex items-center justify-center bg-f1-background-info/5 mb-1">
        <F0Icon icon={Coffee} color="info" size="lg" />
      </div>
      <F0Heading content={props.title} variant="heading-large" />
      <F0Text content={props.description}
        variant="description" />
    </F0Box>
  )
}
