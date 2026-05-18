import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0TagStatus, Variant } from "@/components/tags/F0TagStatus"
import { Counter } from "@/ui/Counter"
import { Plus } from "@/icons/app"

import type { LaneSelection } from "../types"

type LaneHeaderProps = {
  label: string
  variant?: Variant
  count: number
  onPrimaryAction?: () => void
  selection?: LaneSelection
}

export const LaneHeader = ({
  label,
  variant,
  count,
  onPrimaryAction,
  selection,
}: LaneHeaderProps) => {
  const showPrimary = Boolean(onPrimaryAction)

  return (
    <div className="flex items-center gap-2 px-1 pb-0.5 pt-2">
      {selection && (
        <F0Checkbox
          title={selection.selectAllLabel}
          hideLabel
          checked={selection.selected ?? false}
          indeterminate={selection.indeterminate ?? false}
          onCheckedChange={selection.onSelectAll}
          disabled={count === 0}
        />
      )}
      <F0TagStatus text={label} variant={variant || "neutral"} />
      <Counter size="md" type="default" value={count} />
      {showPrimary && (
        <div className="ml-auto flex items-center gap-1 pr-1">
          <F0Button
            variant="ghost"
            size="sm"
            label="Add"
            icon={Plus}
            hideLabel
            onClick={onPrimaryAction}
          />
        </div>
      )}
    </div>
  )
}
