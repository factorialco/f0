import { Reorder } from "motion/react"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Icon } from "@/components/F0Icon/F0Icon"
import { CheckCircleLine, Cross, Delete, Handle } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useDragContext } from "../../../DragContext"
import { OnClickOptionActionParams, SelectOptionProps } from "./types"

function RadioIndicator({
  checked,
  disabled,
}: {
  checked: boolean
  disabled?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        checked
          ? "bg-f1-background-selected-bold"
          : "border border-solid border-f1-border bg-f1-background",
        disabled && "opacity-50"
      )}
    >
      {checked && <div className="h-2 w-2 rounded-full bg-f1-background" />}
    </div>
  )
}

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const SelectOption = ({
  index,
  option,
  onClick,
  onClickAction,
  onChangeLabel,
  disabled,
  answering,
  selected,
  correct,
  locked,
  type,
}: SelectOptionProps) => {
  const { value, label } = option

  const { isDragging, setIsDragging, setDraggedItemId, draggedItemId } =
    useDragContext()
  const { t } = useI18n()

  const isDraggingThisItem = isDragging && draggedItemId === value

  const handleClick = () => {
    if (!disabled && !answering) return // edit mode — do not select answer
    onClick(value)
  }

  const handleClickAction = (action: OnClickOptionActionParams["action"]) => {
    onClickAction({ value, index, action })
  }

  const handleClickMarkAsCorrect = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    handleClickAction("mark-as-correct")
  }

  const handleClickRemove = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    handleClickAction("remove")
  }

  const handleChangeLabel = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newLabel = event.target.value
    onChangeLabel({ value, index, newLabel })
  }

  const handleDragStart = () => {
    setIsDragging(true)
    setDraggedItemId(value)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
  }

  const shouldToggleLeft = isDragging
    ? isDraggingThisItem
    : !disabled && !answering

  const dragEnabled = !disabled && !answering && !locked

  return (
    <Reorder.Item
      value={option}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragListener={dragEnabled}
      layout="position"
      as="div"
    >
      <div
        className={cn(
          "group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover",
          (disabled || answering) && "cursor-pointer",
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
          {type === "multi-select" ? (
            <F0Checkbox
              title={label}
              checked={answering ? !!selected : false}
              onCheckedChange={handleClick}
              disabled={!answering}
              presentational={!answering}
              hideLabel
            />
          ) : (
            <RadioIndicator
              checked={answering ? !!selected : false}
              disabled={!answering}
            />
          )}
        </div>
        <div
          className={cn(
            "hidden scale-75 cursor-grab",
            dragEnabled && "active:cursor-grabbing",
            shouldToggleLeft && "group-hover:block",
            isDragging && "cursor-grabbing",
            !dragEnabled && "cursor-not-allowed"
          )}
        >
          <div
            className={cn(
              "flex aspect-square scale-90 items-center justify-center",
              type === "multi-select" ? "w-6" : "w-5"
            )}
          >
            <F0Icon icon={Handle} size="sm" />
          </div>
        </div>
        {!disabled && !answering && !locked ? (
          <textarea
            placeholder={t(
              "surveyFormBuilder.selectQuestion.optionPlaceholder"
            )}
            value={label}
            onChange={handleChangeLabel}
            className="flex-1 resize-none font-medium"
            style={TEXT_AREA_STYLE}
          />
        ) : (
          <p className="flex-1 font-medium">{label}</p>
        )}
        {!disabled && !answering && correct && (
          <span className="text-sm font-medium text-f1-foreground-positive">
            {t("surveyFormBuilder.selectQuestion.correct")}
          </span>
        )}
        {!disabled && !answering && !locked ? (
          <div className="hidden flex-row items-center gap-1 group-hover:inline-block">
            <F0Button
              label={t("surveyFormBuilder.selectQuestion.markAsCorrect")}
              variant="ghost"
              icon={correct ? Cross : CheckCircleLine}
              onClick={handleClickMarkAsCorrect}
              hideLabel
            />
            <F0Button
              label={t("surveyFormBuilder.selectQuestion.remove")}
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
