import { F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import type { IconType } from "@factorialco/f0-react"

export function PlaceholderTab({
  icon,
  title,
  description,
}: {
  icon: IconType
  title: string
  description: string
}) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-xl border border-dashed border-f1-border-secondary p-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-f1-background-secondary">
        <F0Icon icon={icon} size="md" />
      </div>
      <F0Heading content={title} variant="heading" as="h2" />
      <F0Text content={description} variant="body" />
      <span className="text-xs uppercase tracking-wide text-f1-foreground-secondary">
        Out of scope for this prototype
      </span>
    </div>
  )
}
