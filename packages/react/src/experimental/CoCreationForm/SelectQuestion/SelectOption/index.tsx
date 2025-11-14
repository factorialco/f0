import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Icon } from "@/components/F0Icon/F0Icon"
import { CheckCircleLine, Delete, Handle } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Reorder } from "motion/react"
import { useDragContext } from "../DragContext"
import { OnClickOptionActionParams, SelectOptionProps } from "./types"

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const SelectOption = ({
  index,
  option,
  selected,
  onClick,
  onClickAction,
  onChangeLabel,
  isEditMode,
  correct,
}: SelectOptionProps) => {
  const { value, label } = option

  const { isDragging, setIsDragging, setDraggedItemId, draggedItemId } =
    useDragContext()

  const isDraggingThisItem = isDragging && draggedItemId === value

  const handleClick = () => {
    if (isEditMode) return
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

  const handleChangeLabel = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newLabel = event.target.value
    const newValue = `item-${index + 1}`
    onChangeLabel({ value: newValue, index, newLabel })
  }

  const handleDragStart = () => {
    setIsDragging(true)
    setDraggedItemId(value)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
  }

  const shouldToggleLeft = isDragging ? isDraggingThisItem : isEditMode

  return (
    <Reorder.Item
      value={option}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragListener={!!isEditMode}
      as="div"
    >
      <div
        className={cn(
          "group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover",
          !isEditMode && "cursor-pointer",
          isDragging && "!cursor-grabbing active:!cursor-grabbing"
        )}
        onClick={handleClick}
      >
        <div
          className={cn(
            "block",
            shouldToggleLeft ? "group-hover:hidden" : "cursor-default",
            isDragging && "cursor-grabbing [&_button]:cursor-grabbing"
          )}
        >
          <F0Checkbox
            checked={!!(selected && !isEditMode)}
            onCheckedChange={handleClick}
            disabled={isEditMode}
            hideLabel
          />
        </div>
        <div
          className={cn(
            "hidden scale-75 cursor-grab active:cursor-grabbing",
            shouldToggleLeft && "group-hover:block",
            isDragging && "!cursor-grabbing"
          )}
        >
          <div className="flex aspect-square w-6 scale-90 items-center justify-center">
            <F0Icon icon={Handle} size="sm" />
          </div>
        </div>
        {isEditMode ? (
          <textarea
            placeholder="Type anything you want here..."
            value={label}
            onChange={handleChangeLabel}
            className="flex-1 resize-none font-medium"
            style={TEXT_AREA_STYLE}
          />
        ) : (
          <p className="flex-1 font-medium">{label}</p>
        )}
        {isEditMode && correct && (
          <span className="text-sm font-medium text-f1-foreground-positive">
            Correct
          </span>
        )}
        {isEditMode ? (
          <div className="hidden flex-row items-center gap-1 group-hover:inline-block">
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
    </Reorder.Item>
  )
}
