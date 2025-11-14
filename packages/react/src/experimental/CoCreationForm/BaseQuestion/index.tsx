import { F0Button } from "@/components/F0Button"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import {
  AcademicCap,
  Add,
  Check,
  CheckDouble,
  Delete,
  Ellipsis,
  LayersFront,
  List,
  Numbers,
  Star,
  TextSize,
} from "@/icons/app"
import { cn } from "@/lib/utils"
import { useCallback, useMemo, useState } from "react"
import { useDragContext } from "../SelectQuestion/DragContext"
import { BaseQuestionOnChangeParams, QuestionType } from "../types"
import { ActionType, BaseQuestionProps } from "./types"

export type { BaseQuestionPropsForOtherQuestionComponents } from "./types"

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const BaseQuestion = ({
  id,
  index,
  title,
  description,
  onChange,
  children,
  required,
  isEditMode,
  onAddNewElement,
  onAction,
}: BaseQuestionProps) => {
  const [isNewQuestionDropdownOpen, setIsNewQuestionDropdownOpen] =
    useState(false)
  const [actionsDropdownOpen, setActionsDropdownOpen] = useState(false)

  const { isDragging } = useDragContext()

  const baseOnChangeParams: BaseQuestionOnChangeParams = useMemo(
    () => ({
      id,
      title,
      description,
      required,
    }),
    [id, title, description, required]
  )

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.({
        ...baseOnChangeParams,
        title: e.target.value,
      })
    },
    [baseOnChangeParams, onChange]
  )

  const handleChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.({
        ...baseOnChangeParams,
        description: e.target.value,
      })
    },
    [baseOnChangeParams, onChange]
  )

  const handleAddNewQuestion = useCallback(
    (type: QuestionType) => {
      onAddNewElement?.({
        type,
        index,
      })
    },
    [onAddNewElement, index]
  )

  const handleAction = useCallback(
    (type: ActionType) => {
      onAction?.({
        questionId: id,
        type,
        index,
      })
    },
    [onAction, id, index]
  )

  const actions = useMemo(
    () => [
      {
        label: "Duplicate question",
        icon: LayersFront,
        onClick: () => handleAction("duplicate"),
      },
      {
        label: "Delete question",
        icon: Delete,
        onClick: () => handleAction("delete"),
        critical: true,
      },
    ],
    [handleAction]
  )

  const newQuestionDropdownItems = useMemo<DropdownInternalProps["items"]>(
    () => [
      {
        label: "Section",
        icon: AcademicCap,
        onClick: () => handleAddNewQuestion("section"),
      },
      {
        type: "separator",
      },
      {
        label: "Rating",
        icon: Star,
        onClick: () => handleAddNewQuestion("rating"),
      },
      {
        label: "Multiple choice",
        icon: CheckDouble,
        onClick: () => handleAddNewQuestion("select"),
      },
      {
        label: "Single choice",
        icon: Check,
        onClick: () => handleAddNewQuestion("select"),
      },
      {
        label: "Text",
        icon: TextSize,
        onClick: () => handleAddNewQuestion("text"),
      },
      {
        label: "Long text",
        icon: List,
        onClick: () => handleAddNewQuestion("text"),
      },
      {
        label: "Numeric",
        icon: Numbers,
        onClick: () => handleAddNewQuestion("numeric"),
      },
    ],
    [handleAddNewQuestion]
  )

  return (
    <div
      className={cn(
        "group/question relative flex w-full flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4",
        !isDragging && "hover:border-f1-border-hover"
      )}
    >
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-row gap-2">
          <textarea
            value={title}
            onChange={handleChangeTitle}
            disabled={!isEditMode}
            className="w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden"
            style={TEXT_AREA_STYLE}
          />
          <div
            className={cn(
              "opacity-0 group-hover/question:opacity-100",
              actionsDropdownOpen && "opacity-100"
            )}
          >
            <Dropdown
              items={actions}
              icon={Ellipsis}
              open={actionsDropdownOpen}
              onOpenChange={setActionsDropdownOpen}
              align="start"
            >
              <F0Button
                icon={Ellipsis}
                label="Actions"
                size="md"
                variant="ghost"
                tooltip={false}
                hideLabel
              />
            </Dropdown>
          </div>
        </div>
        <textarea
          value={description}
          onChange={handleChangeDescription}
          disabled={!isEditMode}
          className="w-full resize-none px-2 text-f1-foreground-secondary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden"
          style={TEXT_AREA_STYLE}
        />
      </div>
      {children}
      {isEditMode && (
        <div
          className={cn(
            "absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100",
            isNewQuestionDropdownOpen && "opacity-100"
          )}
        >
          <Dropdown
            items={newQuestionDropdownItems}
            icon={Add}
            size="sm"
            open={isNewQuestionDropdownOpen}
            onOpenChange={setIsNewQuestionDropdownOpen}
            align="center"
          />
        </div>
      )}
    </div>
  )
}
