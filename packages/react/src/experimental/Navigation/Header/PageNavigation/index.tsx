import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { ChevronDown, ChevronUp } from "@/icons/app"

export type NavigationProps = {
  previous?: {
    url: string
    title: string
  }
  next?: {
    url: string
    title: string
  }
  counter?: {
    current: number
    total: number
  }
}

function PageNavigationLink({
  icon,
  href,
  label,
  disabled,
}: {
  icon: IconType
  href: string
  label: string
  disabled?: boolean
}) {
  return (
    <F0Button
      href={href}
      title={label}
      aria-label={label}
      disabled={disabled}
      size="sm"
      variant="outline"
      label={label}
      icon={icon}
      hideLabel
    />
  )
}

export function PageNavigation({ previous, next, counter }: NavigationProps) {
  return (
    <div className="flex items-center gap-3">
      {counter && (
        <span className="text-sm text-f1-foreground-secondary">
          {counter.current}/{counter.total}
        </span>
      )}
      <div className="flex items-center gap-2">
        <PageNavigationLink
          icon={ChevronUp}
          label={previous?.title || "Previous"}
          href={previous?.url || ""}
          disabled={!previous}
        />
        <PageNavigationLink
          icon={ChevronDown}
          label={next?.title || "Next"}
          href={next?.url || ""}
          disabled={!next}
        />
      </div>
    </div>
  )
}
