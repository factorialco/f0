import { useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { AcademicCap, Add, Check, CheckDouble } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
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
  hiddenActions,
}: BaseQuestionProps) => {
  const {
    onQuestionChange,
    onAddNewElement,
    disabled,
    answering,
    getIsSingleQuestionInSection,
    getSectionContainingQuestion,
    isQuestionTypeAllowed,
  } = useSurveyFormBuilderContext()

  const containingSection = getSectionContainingQuestion(id)

  const locked = containingSection?.locked || questionLocked

  const isWithinSection = !!containingSection

  const [isNewQuestionDropdownOpen, setIsNewQuestionDropdownOpen] =
    useState(false)
  const [actionsDropdownOpen, setActionsDropdownOpen] = useState(false)

  const { isDragging } = useDragContext()
  const { t } = useI18n()

  // The textareas are controlled, but consumers may back the title/description
  // with an eventually-consistent store (e.g. CopilotKit's `useCoAgent`, whose
  // state propagation lands via a subscription callback rather than the React
  // batch that fires the keystroke handler). In that gap React would re-render
  // with a stale `value` prop, snap the DOM back, and bump the caret to the
  // end — making mid-string typing impossible. Keep a synchronous local mirror
  // so the textarea always reflects the just-typed value on the very next
  // render; pull from the parent only when it diverges from what we last
  // emitted (e.g. an AI-driven edit or programmatic reset).
  const [localTitle, setLocalTitle] = useState(title)
  const lastEmittedTitleRef = useRef(title)
  const [localDescription, setLocalDescription] = useState(description ?? "")
  const lastEmittedDescriptionRef = useRef(description ?? "")

  useEffect(() => {
    if (title !== lastEmittedTitleRef.current) {
      setLocalTitle(title)
      lastEmittedTitleRef.current = title
    }
  }, [title])

  useEffect(() => {
    const next = description ?? ""
    if (next !== lastEmittedDescriptionRef.current) {
      setLocalDescription(next)
      lastEmittedDescriptionRef.current = next
    }
  }, [description])

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = e.target.value
    setLocalTitle(next)
    lastEmittedTitleRef.current = next
    onQuestionChange?.({
      id,
      type: questionType,
      title: next,
    } as Parameters<
      NonNullable<SurveyFormBuilderCallbacks["onQuestionChange"]>
    >[0])
  }

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const next = e.target.value
    setLocalDescription(next)
    lastEmittedDescriptionRef.current = next
    onQuestionChange?.({
      id,
      type: questionType,
      description: next,
    } as Parameters<
      NonNullable<SurveyFormBuilderCallbacks["onQuestionChange"]>
    >[0])
  }

  const handleAddNewQuestion = (type: QuestionType, datasetKey?: string) => {
    onAddNewElement?.({
      type,
      afterId: id,
      datasetKey,
    })
  }

  const handleAddNewSection = () => {
    onAddNewElement?.({
      type: "section",
      afterId: id,
    })
  }

  const questionTypes = useQuestionTypes()
  const regularTypes = questionTypes.filter((qt) => !qt.datasetKey)
  const datasetKeys = Array.from(
    new Set(
      questionTypes
        .filter((qt) => !!qt.datasetKey)
        .map((qt) => qt.datasetKey as string)
    )
  )

  const isSingleQuestionInSection = getIsSingleQuestionInSection(id)

  const titleRef = useRef<HTMLTextAreaElement>(null)
  // One-shot: focuses the title on first mount for freshly added questions,
  // then flips off so any subsequent effect run (StrictMode double-invoke, or
  // a stray remount from upstream identity churn) cannot bump the caret to
  // the end while the user is mid-edit.
  const pendingFocusRef = useRef(!isSingleQuestionInSection)

  useEffect(() => {
    if (pendingFocusRef.current) {
      titleRef.current?.focus({ preventScroll: true })
      pendingFocusRef.current = false
    }
  }, [])

  const inputDisabled = disabled || locked || answering

  const showCursorNotAllowed = !answering && inputDisabled

  return (
    <div
      id={`co-creation-question-${id}`}
      className={cn(
        "group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background px-3 py-4",
        !isDragging && !answering && "hover:border-f1-border-hover",
        !answering || !!description ? "gap-4" : "gap-2"
      )}
    >
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-row gap-2">
          <div className="relative w-full">
            {answering ? (
              <div className="w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold text-f1-foreground">
                {title || t("surveyFormBuilder.labels.titlePlaceholder")}
                {required && (
                  <span className="text-f1-foreground-critical"> *</span>
                )}
              </div>
            ) : (
              <>
                <textarea
                  ref={titleRef}
                  value={localTitle}
                  aria-label={t("surveyFormBuilder.labels.title")}
                  placeholder={t("surveyFormBuilder.labels.titlePlaceholder")}
                  onChange={handleChangeTitle}
                  disabled={inputDisabled}
                  className={cn(
                    "w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden",
                    showCursorNotAllowed && "cursor-not-allowed"
                  )}
                  style={TEXT_AREA_STYLE}
                />
                <div className="textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold">
                  <span className="opacity-0">
                    {localTitle ||
                      t("surveyFormBuilder.labels.titlePlaceholder")}
                  </span>
                  {required && (
                    <span
                      className={cn(
                        "text-f1-foreground-critical",
                        !localTitle && "text-f1-foreground-secondary"
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
                hiddenActions={hiddenActions}
              />
            </div>
          )}
        </div>
        {answering ? (
          description ? (
            <p className="w-full whitespace-pre-wrap break-words px-2 text-f1-foreground-secondary">
              {description}
            </p>
          ) : null
        ) : (
          <textarea
            value={localDescription}
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
          <DropdownMenu
            open={isNewQuestionDropdownOpen}
            onOpenChange={setIsNewQuestionDropdownOpen}
          >
            <DropdownMenuTrigger asChild>
              <F0Button
                icon={Add}
                label={t("surveyFormBuilder.actions.addQuestion")}
                size="sm"
                variant="outline"
                hideLabel
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-80">
              {!isWithinSection && (
                <>
                  <DropdownMenuItem onClick={handleAddNewSection}>
                    <div className="flex w-full flex-row items-center gap-2">
                      <F0Icon icon={AcademicCap} color="default" />
                      <span className="flex-1 text-base font-medium">
                        {t("surveyFormBuilder.questionTypes.section")}
                      </span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              {regularTypes.map((qt) => (
                <DropdownMenuItem
                  key={qt.questionType}
                  onClick={() => handleAddNewQuestion(qt.questionType)}
                >
                  <div className="flex w-full flex-row items-center gap-2">
                    <F0Icon icon={qt.icon} color="default" />
                    <span className="flex-1 text-base font-medium">
                      {qt.label}
                    </span>
                  </div>
                </DropdownMenuItem>
              ))}
              {datasetKeys.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  {datasetKeys.map((dk) => {
                    const entry = questionTypes.find(
                      (qt) =>
                        qt.datasetKey === dk &&
                        qt.questionType === "dropdown-single"
                    )
                    return (
                      <DropdownMenuSub key={dk}>
                        <DropdownMenuSubTrigger className="mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover">
                          <div className="flex w-full flex-row items-center gap-2">
                            {entry && (
                              <F0Icon icon={entry.icon} color="default" />
                            )}
                            <span className="flex-1 text-base font-medium">
                              {entry?.label ?? dk}
                            </span>
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {isQuestionTypeAllowed("dropdown-single") && (
                              <DropdownMenuItem
                                onClick={() =>
                                  handleAddNewQuestion("dropdown-single", dk)
                                }
                              >
                                <div className="flex w-full flex-row items-center gap-2">
                                  <F0Icon icon={Check} color="default" />
                                  <span className="flex-1">
                                    {t(
                                      "surveyFormBuilder.labels.singleSelection"
                                    )}
                                  </span>
                                </div>
                              </DropdownMenuItem>
                            )}
                            {isQuestionTypeAllowed("dropdown-multi") && (
                              <DropdownMenuItem
                                onClick={() =>
                                  handleAddNewQuestion("dropdown-multi", dk)
                                }
                              >
                                <div className="flex w-full flex-row items-center gap-2">
                                  <F0Icon icon={CheckDouble} color="default" />
                                  <span className="flex-1">
                                    {t(
                                      "surveyFormBuilder.labels.multiSelection"
                                    )}
                                  </span>
                                </div>
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    )
                  })}
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  )
}
