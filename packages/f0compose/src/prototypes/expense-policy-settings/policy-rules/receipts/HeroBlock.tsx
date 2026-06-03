import { F0Box, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { Receipt } from "@factorialco/f0-react/icons/app"

/** Accent (brand neutral) palette — Receipts is the "evidence"
 * surface, deliberately quiet rather than tonal. */
export function HeroBlock(props: { title: string; description: string }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="sm" paddingBottom="lg">
      <div className="w-12 h-12 rounded-md flex items-center justify-center bg-f1-background-accent/5 mb-1">
        <F0Icon icon={Receipt} color="accent" size="lg" />
      </div>
      <F0Heading content={props.title} variant="heading-large" />
      <F0Text content={props.description}
        variant="description" />
    </F0Box>
  )
}
