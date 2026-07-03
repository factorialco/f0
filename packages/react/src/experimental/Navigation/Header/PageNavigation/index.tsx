import { ButtonInternal } from "@/components/F0Button/internal"
import { IconType } from "@/components/F0Icon"
import { ChevronLeft, ChevronRight } from "@/icons/app"

/**
 * One prev/next target. Carry a `url` for full-page detail navigation
 * (renders a link) OR an `onClick` for id-based navigation that swaps content
 * in place — a mounted sidepanel/dialog that never changes the URL (renders a
 * button). `onClick` wins when both are present.
 */
export type NavigationTarget = {
  title: string
  url?: string
  onClick?: () => void
}

export type NavigationProps = {
  previous?: NavigationTarget
  next?: NavigationTarget
  counter?: {
    current: number
    total: number
  }
}

function PageNavigationLink({
  icon,
  target,
  fallbackLabel,
}: {
  icon: IconType
  target: NavigationTarget | undefined
  fallbackLabel: string
}) {
  // No target → no previous/next element → disabled, no affordance.
  const disabled = !target
  const label = target?.title || fallbackLabel
  // Prefer the id-based callback over a URL when both are provided.
  const onClick = target?.onClick
  const href = onClick ? undefined : target?.url

  // `ButtonInternal` chooses anchor vs button by whether the `href` *key* is
  // present. An enabled callback target renders as a button (so onClick
  // fires); url and disabled targets stay on the link path — the disabled
  // link renders a <span aria-disabled> that picks up the shared disabled
  // styling (opacity + pointer-events-none). `type: "button"` keeps the
  // callback arrow from submitting a surrounding form (e.g. a dialog body).
  const elementProps = onClick
    ? { onClick, type: "button" as const }
    : { href: href ?? "" }

  return (
    <ButtonInternal
      {...elementProps}
      title={disabled ? undefined : label}
      aria-label={label}
      disabled={disabled}
      // A disabled arrow means "no previous/next element" — a tooltip (auto
      // or native title) on it is just noise.
      noAutoTooltip={disabled}
      noTitle={disabled}
      size="sm"
      variant="outline"
      label={label}
      icon={icon}
      hideLabel
    />
  )
}

export function PageNavigation({
  previous,
  next,
  counter,
  counterPosition = "start",
}: NavigationProps & { counterPosition?: "start" | "end" }) {
  const counterElement = counter ? (
    <span className="text-sm text-f1-foreground-secondary">
      {counter.current}/{counter.total}
    </span>
  ) : null

  return (
    <div className="flex items-center gap-3">
      {counterPosition === "start" && counterElement}
      <div className="flex items-center gap-2">
        <PageNavigationLink
          icon={ChevronLeft}
          target={previous}
          fallbackLabel="Previous"
        />
        <PageNavigationLink
          icon={ChevronRight}
          target={next}
          fallbackLabel="Next"
        />
      </div>
      {counterPosition === "end" && counterElement}
    </div>
  )
}
