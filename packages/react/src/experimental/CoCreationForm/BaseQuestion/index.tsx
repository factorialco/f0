import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { AcademicCap, Add } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useCallback, useMemo, useState } from "react"
import { useQuestionTypes } from "../constants"
import { useCoCreationFormContext } from "../Context"
import { useDragContext } from "../DragContext"
import { CoCreationFormCallbacks, QuestionType } from "../types"
import { ActionsMenu } from "./ActionsMenu"
import { BaseQuestionProps } from "./types"

export type { BaseQuestionPropsForOtherQuestionComponents } from "./types"

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const BaseQuestion = ({
  id,
  title,
  description,
  children,
  // required,
  descriptionVisible,
  type: questionType,
}: BaseQuestionProps) => {
  const { onQuestionChange, onAddNewElement, isEditMode } =
    useCoCreationFormContext()

  const [isNewQuestionDropdownOpen, setIsNewQuestionDropdownOpen] =
    useState(false)
  const [actionsDropdownOpen, setActionsDropdownOpen] = useState(false)

  const { isDragging } = useDragContext()
  const { t } = useI18n()

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onQuestionChange?.({
        id,
        type: questionType,
        title: e.target.value,
      } as Parameters<
        NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
      >[0])
    },
    [id, questionType, onQuestionChange]
  )

  const handleChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onQuestionChange?.({
        id,
        type: questionType,
        description: e.target.value,
      } as Parameters<
        NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
      >[0])
    },
    [id, questionType, onQuestionChange]
  )

  const handleAddNewQuestion = useCallback(
    (type: QuestionType) => {
      onAddNewElement?.({
        type,
        afterId: id,
      })
    },
    [onAddNewElement, id]
  )

  const handleAddNewSection = useCallback(() => {
    onAddNewElement?.({
      type: "section",
      afterId: id,
    })
  }, [onAddNewElement, id])

  const questionTypes = useQuestionTypes()

  const newQuestionDropdownItems = useMemo<DropdownInternalProps["items"]>(
    () => [
      {
        label: t("coCreationForm.questionTypes.section"),
        icon: AcademicCap,
        onClick: handleAddNewSection,
      },
      {
        type: "separator",
      },
      ...questionTypes.map((questionType) => ({
        ...questionType,
        onClick: () => handleAddNewQuestion(questionType.questionType),
      })),
    ],
    [handleAddNewQuestion, handleAddNewSection, questionTypes, t]
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
            aria-label={t("coCreationForm.labels.title")}
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
              questionId={id}
              questionType={questionType}
            />
          </div>
        </div>
        {descriptionVisible && (
          <textarea
            value={description}
            aria-label={t("coCreationForm.labels.description")}
            onChange={handleChangeDescription}
            disabled={!isEditMode}
            className="w-full resize-none px-2 text-f1-foreground-secondary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden"
            style={TEXT_AREA_STYLE}
          />
        )}
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
