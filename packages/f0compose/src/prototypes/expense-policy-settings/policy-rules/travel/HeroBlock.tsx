import { F0Box, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { Plane } from "@factorialco/f0-react/icons/app"

/**
 * Travel hero — same composition as Meals' HeroBlock (tinted icon
 * tile above H1 + lead) but with the Travel tonal accent.
 *
 * Tile uses `bg-f1-background-promote/5` (promote-50 @ 5% alpha)
 * — the default `bg-f1-background-promote` ships at 30% alpha
 * which read as dark warm and swallowed the icon. 5% is light
 * yellow, just enough to separate the tile from white while the
 * promote-coloured icon stays the dominant element.
 */
export function HeroBlock(props: { title: string; description: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm" paddingBottom="lg">
      <div className="w-12 h-12 rounded-md flex items-center justify-center bg-f1-background-promote/5 mb-1">
        <F0Icon icon={Plane} color="promote" size="lg" />
      </div>
      <F0Heading content={props.title} variant="heading-large" />
      <F0Text content={props.description}
        variant="description" />
    </F0Box>
  )
}
