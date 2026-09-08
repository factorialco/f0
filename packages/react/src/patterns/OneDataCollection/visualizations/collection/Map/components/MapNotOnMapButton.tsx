import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0Icon } from "@/components/F0Icon"
import { Pin } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"

import type { MapPanelSectionTone } from "./MapPanelSection"

/** The people a "not on map" count stands for, when it can show them. */
export type MapNotOnMapAvatar = {
  firstName: string
  lastName: string
  src?: string
}

export interface MapNotOnMapButtonProps {
  /** The full sentence, already localized and counted ("3 not on map"). */
  label: string
  tone: MapPanelSectionTone
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
 * panel toggle. A ghost button carrying who is missing on the left and how many
 * on the right; pressing it opens the panel, where the "Not on map" section
 * lists them. Bare: `F0Map` puts it on the control card with the toggle.
 */
export const MapNotOnMapButton = ({
  label,
  tone,
  avatars,
  onClick,
  dataTestId,
}: MapNotOnMapButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    data-testid={dataTestId}
    data-tone={tone}
    className={cn(
      "flex h-8 items-center gap-2 rounded-md pl-1 pr-2 text-sm font-medium",
      "text-f1-foreground hover:bg-f1-background-hover",
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
    <span
      className={cn(
        "whitespace-nowrap tabular-nums",
        tone === "attention" && "text-f1-foreground-warning"
      )}
    >
      {label}
    </span>
  </button>
)
