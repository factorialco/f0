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
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useCallback, useMemo, useState } from "react"
import { useDragContext } from "../DragContext"
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
  const { t } = useI18n()

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
        label: t("coCreationForm.actions.duplicateQuestion"),
        icon: LayersFront,
        onClick: () => handleAction("duplicate"),
      },
      {
        label: t("coCreationForm.actions.deleteQuestion"),
        icon: Delete,
        onClick: () => handleAction("delete"),
        critical: true,
      },
    ],
    [handleAction, t]
  )

  const newQuestionDropdownItems = useMemo<DropdownInternalProps["items"]>(
    () => [
      {
        label: t("coCreationForm.questionTypes.section"),
        icon: AcademicCap,
        onClick: () => handleAddNewQuestion("section"),
      },
      {
        type: "separator",
      },
      {
        label: t("coCreationForm.questionTypes.rating"),
        icon: Star,
        onClick: () => handleAddNewQuestion("rating"),
      },
      {
        label: t("coCreationForm.questionTypes.multipleChoice"),
        icon: CheckDouble,
        onClick: () => handleAddNewQuestion("select"),
      },
      {
        label: t("coCreationForm.questionTypes.singleChoice"),
        icon: Check,
        onClick: () => handleAddNewQuestion("select"),
      },
      {
        label: t("coCreationForm.questionTypes.text"),
        icon: TextSize,
        onClick: () => handleAddNewQuestion("text"),
      },
      {
        label: t("coCreationForm.questionTypes.longText"),
        icon: List,
        onClick: () => handleAddNewQuestion("text"),
      },
      {
        label: t("coCreationForm.questionTypes.numeric"),
        icon: Numbers,
        onClick: () => handleAddNewQuestion("numeric"),
      },
    ],
    [handleAddNewQuestion, t]
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
            aria-label="Title"
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
                label={t("coCreationForm.actions.actions")}
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
          aria-label="Description"
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
