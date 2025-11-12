import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Icon } from "@/components/F0Icon/F0Icon"
import { CheckCircleLine, Delete, Handle } from "@/icons/app"
import { cn } from "@/lib/utils"

export type OnClickOptionActionParams = {
  value: string
  index: number
  action: "remove" | "mark-as-correct"
}

export type OnChangeLabelParams = {
  value: string
  index: number
  newLabel: string
}

type SelectOptionProps = {
  value: string
  label: string
  selected: boolean
  onClick: (value: string) => void
  index: number
  onChangeLabel: (params: OnChangeLabelParams) => void
  onClickAction: (params: OnClickOptionActionParams) => void
  disabled?: boolean
  correct?: boolean
}

export const SelectOption = ({
  value,
  label,
  selected,
  onClick,
  onClickAction,
  onChangeLabel,
  index,
  disabled,
}: SelectOptionProps) => {
  const handleClick = () => {
    if (disabled) return
    onClick(value)
  }

  const handleClickAction = (action: OnClickOptionActionParams["action"]) => {
    onClickAction({ value, index, action })
  }

  const handleClickMarkAsCorrect = () => {
    handleClickAction("mark-as-correct")
  }

  const handleClickRemove = () => {
    handleClickAction("remove")
  }

  const handleChangeLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value
    onChangeLabel({ value, index, newLabel })
  }

  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 rounded-md py-1 pl-2 pr-1 hover:bg-f1-background-hover",
        !disabled && "cursor-pointer"
      )}
      onClick={handleClick}
    >
      <div className={cn("block", disabled && "group-hover:hidden")}>
        <F0Checkbox
          checked={selected}
          onCheckedChange={handleClick}
          disabled={disabled}
          hideLabel
        />
      </div>
      <div className={cn("hidden scale-75", disabled && "group-hover:block")}>
        <div className="flex aspect-square w-6 items-center justify-center">
          <F0Icon icon={Handle} size="sm" />
        </div>
      </div>
      {disabled ? (
        <input
          type="text"
          placeholder="Type anything you want here..."
          value={label}
          onChange={handleChangeLabel}
          className="flex-1 font-medium"
        />
      ) : (
        <p className="flex-1 font-medium">{label}</p>
      )}
      {disabled ? (
        <div className="flex-row items-center gap-1 opacity-0 group-hover:opacity-100">
          <F0Button
            label="Mark as correct"
            variant="ghost"
            icon={CheckCircleLine}
            onClick={handleClickMarkAsCorrect}
            hideLabel
          />
          <F0Button
            label="Remove"
            variant="ghost"
            icon={Delete}
            hideLabel
            onClick={handleClickRemove}
          />
        </div>
      ) : (
        <div className="min-h-8" />
      )}
    </div>
  )
}
