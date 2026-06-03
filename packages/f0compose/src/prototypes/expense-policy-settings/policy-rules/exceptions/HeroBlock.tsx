import { F0Box, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { Shield } from "@factorialco/f0-react/icons/app"

/** Warning (amber) tonal accent — Exceptions is the "override"
 * surface, the amber signals it deserves attention rather than
 * being a routine setting. */
export function HeroBlock(props: { title: string; description: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm" paddingBottom="lg">
      <div className="w-12 h-12 rounded-md flex items-center justify-center bg-f1-background-warning/5 mb-1">
        <F0Icon icon={Shield} color="warning" size="lg" />
      </div>
      <F0Heading content={props.title} variant="heading-large" />
      <F0Text content={props.description}
        variant="description" />
    </F0Box>
  )
}
