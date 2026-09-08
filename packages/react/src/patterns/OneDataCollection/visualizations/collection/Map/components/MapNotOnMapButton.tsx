import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0Icon } from "@/components/F0Icon"
import { Pin } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Counter } from "@/ui/Counter"
import { Text } from "@/ui/Text"

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
   * Avatars for the leftmost slot. `null` when the records cannot be shown as
   * one avatar list - a mix of people and companies, say - in which case a pin
   * stands in.
   */
  avatars: MapNotOnMapAvatar[] | null
  onClick: () => void
  dataTestId?: string
}

/**
 * The count of records the map could not place, on the map surface beside the
 * panel toggle. A ghost button carrying who is missing on the left, the group's
 * name, and how many on the right; pressing it opens the panel to the section
 * that lists them. Bare: `F0Map` puts it on the control card with the toggle.
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
    {avatars && avatars.length > 0 ? (
      <F0AvatarList
        type="person"
        avatars={avatars}
        size="xs"
        max={3}
        noTooltip
      />
    ) : (
      <span className="flex px-1 text-f1-icon">
        <F0Icon icon={Pin} size="sm" />
      </span>
    )}
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
    <Counter value={count} size="sm" />
  </button>
)
