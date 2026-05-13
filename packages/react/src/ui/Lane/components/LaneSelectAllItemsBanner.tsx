import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"

import type { LaneSelectAllItemsConfig } from "../types"

type LaneSelectAllItemsBannerProps = {
  config: LaneSelectAllItemsConfig
}

export const LaneSelectAllItemsBanner = ({
  config,
}: LaneSelectAllItemsBannerProps) => {
  const {
    allItemsSelected,
    allItemsSelectedLabel,
    loadedSelectionLabel,
    selectAllItemsLabel,
    onSelectAllItems,
  } = config

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-center justify-between gap-2 px-3 py-1.5",
        "bg-f1-background-secondary",
        "text-f1-sm text-f1-foreground-secondary"
      )}
    >
      <span>
        {allItemsSelected ? allItemsSelectedLabel : loadedSelectionLabel}
      </span>
      {!allItemsSelected && selectAllItemsLabel && (
        <F0Button
          variant="outline"
          size="sm"
          label={selectAllItemsLabel}
          onClick={onSelectAllItems}
        />
      )}
    </div>
  )
}
