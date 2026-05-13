import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0TagStatus, Variant } from "@/components/tags/F0TagStatus"
import { Counter } from "@/ui/Counter"
import { Plus } from "@/icons/app"

type LaneHeaderProps = {
  label: string
  variant?: Variant
  count: number
  onPrimaryAction?: () => void
  selectable?: boolean
  selected?: boolean
  indeterminate?: boolean
  onSelectAll?: (checked: boolean) => void
  selectAllLabel?: string
}

export const LaneHeader = ({
  label,
  variant,
  count,
  onPrimaryAction,
  selectable = false,
  selected = false,
  indeterminate = false,
  onSelectAll,
  selectAllLabel,
}: LaneHeaderProps) => {
  const showPrimary = Boolean(onPrimaryAction)

  return (
    <div className="flex items-center gap-2 px-1 pb-0.5 pt-2">
      {selectable && (
        <F0Checkbox
          title={selectAllLabel}
          hideLabel
          checked={selected}
          indeterminate={indeterminate}
          onCheckedChange={onSelectAll}
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
