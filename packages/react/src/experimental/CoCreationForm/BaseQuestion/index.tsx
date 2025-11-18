import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { AcademicCap, Add } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useCallback, useMemo, useState } from "react"
import { useQuestionTypes } from "../constants"
import { useDragContext } from "../DragContext"
import { BaseQuestionOnChangeParams, QuestionType } from "../types"
import { ActionsMenu } from "./ActionsMenu"
import { BaseQuestionProps } from "./types"

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
  descriptionVisible,
  type: questionType,
  isEditMode,
  onAddNewElement,
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
      type: questionType,
      descriptionVisible,
    }),
    [id, title, description, required, questionType, descriptionVisible]
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

  const questionTypes = useQuestionTypes()

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
      ...questionTypes.map((questionType) => ({
        ...questionType,
        onClick: () => handleAddNewQuestion(questionType.questionType),
      })),
    ],
    [handleAddNewQuestion, questionTypes, t]
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
            <ActionsMenu
              open={actionsDropdownOpen}
              setOpen={setActionsDropdownOpen}
              onChange={onChange}
              onChangeParams={baseOnChangeParams}
            />
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
