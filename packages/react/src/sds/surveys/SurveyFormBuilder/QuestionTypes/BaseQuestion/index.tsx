import { useState } from "react"

import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { AcademicCap, Add } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { FormMessage } from "@/ui/form"

import { useQuestionTypes } from "../../constants"
import { useSurveyFormBuilderContext } from "../../Context"
import { useDragContext } from "../../DragContext"
import { SurveyFormBuilderCallbacks, QuestionType } from "../../types"
import { ActionsMenu } from "./ActionsMenu"
import { BaseQuestionProps } from "./types"

export type { BaseQuestionPropsForOtherQuestionComponents } from "./types"
export { useQuestionDisabled } from "./useQuestionDisabled"

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const BaseQuestion = ({
  id,
  title,
  description,
  children,
  required,
  locked: questionLocked,
  type: questionType,
}: BaseQuestionProps) => {
  const {
    onQuestionChange,
    onAddNewElement,
    disabled,
    answering,
    getIsSingleQuestionInSection,
    getSectionContainingQuestion,
  } = useSurveyFormBuilderContext()

  const containingSection = getSectionContainingQuestion(id)

  const locked = containingSection?.locked || questionLocked

  const isWithinSection = !!containingSection

  const [isNewQuestionDropdownOpen, setIsNewQuestionDropdownOpen] =
    useState(false)
  const [actionsDropdownOpen, setActionsDropdownOpen] = useState(false)

  const { isDragging } = useDragContext()
  const { t } = useI18n()

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onQuestionChange?.({
      id,
      type: questionType,
      title: e.target.value,
    } as Parameters<
      NonNullable<SurveyFormBuilderCallbacks["onQuestionChange"]>
    >[0])
  }

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onQuestionChange?.({
      id,
      type: questionType,
      description: e.target.value,
    } as Parameters<
      NonNullable<SurveyFormBuilderCallbacks["onQuestionChange"]>
    >[0])
  }

  const handleAddNewQuestion = (type: QuestionType) => {
    onAddNewElement?.({
      type,
      afterId: id,
    })
  }

  const handleAddNewSection = () => {
    onAddNewElement?.({
      type: "section",
      afterId: id,
    })
  }

  const questionTypes = useQuestionTypes()

  const newQuestionDropdownItems: DropdownInternalProps["items"] = [
    ...(!isWithinSection
      ? [
          {
            label: t("surveyFormBuilder.questionTypes.section"),
            icon: AcademicCap,
            onClick: handleAddNewSection,
          },
          {
            type: "separator" as const,
          },
        ]
      : []),
    ...questionTypes.map((questionType) => ({
      ...questionType,
      onClick: () => handleAddNewQuestion(questionType.questionType),
    })),
  ]

  const isSingleQuestionInSection = getIsSingleQuestionInSection(id)

  const inputDisabled = disabled || locked || answering

  const showCursorNotAllowed = !answering && inputDisabled

  return (
    <div
      id={`co-creation-question-${id}`}
      className={cn(
        "group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4",
        !isDragging && !answering && "hover:border-f1-border-hover",
        !answering || !!description ? "gap-4" : "gap-2"
      )}
    >
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-row gap-2">
          <div className="relative w-full">
            {answering ? (
              <div className="w-full px-2 py-1 text-lg font-semibold text-f1-foreground">
                {title || t("surveyFormBuilder.labels.titlePlaceholder")}
                {required && (
                  <span className="text-f1-foreground-critical"> *</span>
                )}
              </div>
            ) : (
              <>
                <textarea
                  value={title}
                  aria-label={t("surveyFormBuilder.labels.title")}
                  placeholder={t("surveyFormBuilder.labels.titlePlaceholder")}
                  onChange={handleChangeTitle}
                  disabled={inputDisabled}
                  className={cn(
                    "w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                    showCursorNotAllowed && "cursor-not-allowed"
                  )}
                  style={TEXT_AREA_STYLE}
                  autoFocus={!isSingleQuestionInSection}
                />
                <div className="textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold">
                  <span className="opacity-0">
                    {title || t("surveyFormBuilder.labels.titlePlaceholder")}
                  </span>
                  {required && (
                    <span
                      className={cn(
                        "text-f1-foreground-critical",
                        !title && "text-f1-foreground-secondary"
                      )}
                    >
                      {" "}
                      *
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
          {!disabled && !answering && !locked && (
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
                canDeleteQuestion={
                  !isWithinSection || !isSingleQuestionInSection
                }
              />
            </div>
          )}
        </div>
        {answering ? (
          description ? (
            <p className="w-full px-2 text-f1-foreground-secondary">
              {description}
            </p>
          ) : null
        ) : (
          <textarea
            value={description}
            aria-label={t("surveyFormBuilder.labels.description")}
            placeholder={t(
              "surveyFormBuilder.labels.questionDescriptionPlaceholder"
            )}
            onChange={handleChangeDescription}
            disabled={inputDisabled}
            className={cn(
              "w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden",
              showCursorNotAllowed && "cursor-not-allowed"
            )}
            style={TEXT_AREA_STYLE}
          />
        )}
      </div>
      {children}
      {answering && (
        <FormMessage
          className="-mt-2"
          fallback={
            required
              ? t("forms.validation.required")
              : t("forms.validation.invalidType")
          }
        />
      )}
      {!disabled && !answering && !containingSection?.locked && (
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
