import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { cn, focusRing } from "@/lib/utils"
import { Counter } from "@/ui/Counter"
import { Text } from "@/ui/Text"

/** How many faces show before the rest fold into the "+N" bubble. */
const MAX_FACES = 3

/** The people a "not on map" count stands for, when it can show them. */
export type MapNotOnMapAvatar = {
  firstName: string
  lastName: string
  src?: string
}

export interface MapNotOnMapButtonProps {
  /** The group's name, as the panel section is titled ("Not on map"). */
  title: string
  count: number
  /** The whole thing as one sentence for assistive tech ("3 not on map"). */
  ariaLabel: string
  /**
   * Every unplaced record as an avatar: the list is the count, showing the
   * first few and folding the rest into its own "+N". `null` when the records
   * cannot be shown as one avatar list - a mix of people and companies, say -
   * in which case a plain counter stands in.
   */
  avatars: MapNotOnMapAvatar[] | null
  onClick: () => void
  dataTestId?: string
}

/**
 * The count of records the map could not place, on the map surface beside the
 * panel toggle. A ghost button: the group's name, then who is missing as an
 * avatar list whose overflow bubble is the count. Pressing it opens the panel
 * to the section that lists them. Bare: `F0Map` puts it on a control card.
 */
export const MapNotOnMapButton = ({
  title,
  count,
  ariaLabel,
  avatars,
  onClick,
  dataTestId,
}: MapNotOnMapButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    data-testid={dataTestId}
    className={cn(
      "flex h-8 items-center gap-2 rounded-md pl-2 pr-2.5",
      "hover:bg-f1-background-hover",
      focusRing()
    )}
  >
    <span className="whitespace-nowrap">
      {/* The label variant in secondary. F0Text takes no colour, so this is the
          primitive it wraps, with the one class it cannot be given. */}
      <Text
        variant="label"
        content={title}
        markdown={false}
        className="text-f1-foreground-secondary"
      />
    </span>
    {avatars && avatars.length > 0 ? (
      // Three faces, then a "+N" bubble that is the count. `sm`, not `xs`: at
      // `xs` the bubble is an ellipsis icon with the number only for screen
      // readers. And the rest go in as `remainingCount` rather than as items,
      // which keeps the bubble a plain element - given the items themselves
      // it becomes a disclosure button, a button inside this button.
      <F0AvatarList
        type="person"
        avatars={avatars.slice(0, MAX_FACES)}
        remainingCount={Math.max(count - MAX_FACES, 0)}
        size="sm"
        max={MAX_FACES}
        noTooltip
      />
    ) : (
      <Counter value={count} size="sm" />
    )}
  </button>
)
