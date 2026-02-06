import { Dispatch, SetStateAction, useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon/F0Icon"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import {
  AlertCircleLine,
  Check,
  Delete,
  Ellipsis,
  Hub,
  LayersFront,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { useQuestionTypes } from "../../constants"
import { useCoCreationFormContext } from "../../Context"
import {
  detectRatingOptionType,
  getDefaultParamsForQuestionType,
  getRatingOptions,
  RatingOptionType,
} from "../../lib"
import { CoCreationFormCallbacks, QuestionType } from "../../types"

const RATING_OPTIONS: { label: string; value: RatingOptionType }[] = [
  { label: "1 - 5", value: "1-5" },
  { label: "1 - 10", value: "1-10" },
  { label: "Emojis", value: "emojis" },
]

const ToggleItem = ({
  label,
  icon,
  checked,
  onChange,
}: {
  label: string
  icon: IconType
  checked: boolean
  onChange: (checked: boolean) => void
}) => (
  <DropdownMenuItem
    className="!pb-2.5 pr-4"
    onClick={(e) => {
      e.preventDefault()
      onChange(!checked)
    }}
  >
    <div className="flex w-full flex-row items-center gap-2">
      <F0Icon icon={icon} color="default" />
      <span className="flex-1">{label}</span>
      <Switch
        title={label}
        checked={checked}
        onCheckedChange={onChange}
        hideLabel
      />
    </div>
  </DropdownMenuItem>
)

const QuestionTypeMenuItem = ({
  label,
  value,
  questionTypes,
  currentRatingType,
  onSelectQuestionType,
  onSelectRatingType,
}: {
  label: string
  value: QuestionType
  questionTypes: { label: string; questionType: QuestionType; icon: IconType }[]
  currentRatingType: RatingOptionType | null
  onSelectQuestionType: (type: QuestionType) => void
  onSelectRatingType: (type: RatingOptionType) => void
}) => {
  const selectedOptionLabel = questionTypes.find(
    (option) => option.questionType === value
  )?.label

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover">
        <div className="flex w-full flex-row items-center gap-2">
          <F0Icon icon={Hub} color="default" />
          <span className="flex-1 text-base font-medium">{label}</span>
          {!!selectedOptionLabel && (
            <span className="mr-1 text-base text-f1-foreground-secondary">
              {selectedOptionLabel}
            </span>
          )}
        </div>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {questionTypes.map((questionType) => {
            const isRating = questionType.questionType === "rating"
            const isSelected = value === questionType.questionType

            if (isRating) {
              return (
                <DropdownMenuSub key={questionType.questionType}>
                  <DropdownMenuSubTrigger className="mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover">
                    <div className="flex w-full flex-row items-center gap-2 text-base font-medium">
                      <F0Icon icon={questionType.icon} color="default" />
                      <span className="flex-1">{questionType.label}</span>
                      {currentRatingType && (
                        <span className="mr-1 text-base text-f1-foreground-secondary">
                          {
                            RATING_OPTIONS.find(
                              (opt) => opt.value === currentRatingType
                            )?.label
                          }
                        </span>
                      )}
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {RATING_OPTIONS.map((ratingOption) => (
                        <DropdownMenuItem
                          key={ratingOption.value}
                          onClick={() => onSelectRatingType(ratingOption.value)}
                        >
                          <div className="flex w-full flex-row items-center gap-2 pl-2">
                            <span className="flex-1">{ratingOption.label}</span>
                            {currentRatingType === ratingOption.value && (
                              <F0Icon icon={Check} color="default" />
                            )}
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              )
            }

            return (
              <DropdownMenuItem
                key={questionType.questionType}
                onClick={() => onSelectQuestionType(questionType.questionType)}
              >
                <div className="flex w-full flex-row items-center gap-2">
                  <F0Icon icon={questionType.icon} color="default" />
                  <span className="flex-1">{questionType.label}</span>
                  {isSelected && <F0Icon icon={Check} color="default" />}
                </div>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}

const SimpleItem = ({
  label,
  icon,
  onClick,
  critical,
}: {
  label: string
  icon: IconType
  onClick: () => void
  critical?: boolean
}) => (
  <DropdownMenuItem
    onClick={onClick}
    className={cn(critical ? "text-f1-foreground-critical" : undefined)}
  >
    <div className="flex w-full flex-row items-center gap-2">
      <F0Icon icon={icon} color={critical ? "critical" : "default"} />
      <span className="flex-1">{label}</span>
    </div>
  </DropdownMenuItem>
)

type ActionsMenuProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  questionId: string
  questionType: QuestionType
  canDeleteQuestion?: boolean
}

export function ActionsMenu({
  open,
  setOpen,
  questionId,
  questionType,
  canDeleteQuestion = true,
}: ActionsMenuProps) {
  const { t } = useI18n()

  const {
    onQuestionChange,
    getQuestionById,
    deleteElement,
    onDuplicateElement,
    disallowOptionalQuestions,
  } = useCoCreationFormContext()

  const question = useMemo(
    () => getQuestionById(questionId),
    [questionId, getQuestionById]
  )

  const questionTypes = useQuestionTypes()

  const currentRatingType = useMemo(() => {
    if (
      questionType !== "rating" ||
      !question ||
      !("options" in question) ||
      question.type !== "rating"
    ) {
      return null
    }
    // Type guard: rating questions have options with number values
    const ratingOptions = question.options
    if (
      !Array.isArray(ratingOptions) ||
      ratingOptions.length === 0 ||
      typeof ratingOptions[0]?.value !== "number"
    ) {
      return null
    }

    // TypeScript type assertion: we've verified this is a rating question with number options
    return detectRatingOptionType(
      ratingOptions as { value: number; label: string }[]
    )
  }, [questionType, question])

  const handleChangeRequired = (checked: boolean) => {
    onQuestionChange?.({
      id: questionId,
      type: questionType,
      required: checked,
    } as Parameters<
      NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
    >[0])
  }

  const handleSelectQuestionType = (newQuestionType: QuestionType) => {
    const changingType =
      newQuestionType !== questionType &&
      !(
        (newQuestionType === "select" || newQuestionType === "multi-select") &&
        question &&
        "options" in question &&
        !!question.options.length
      )

    onQuestionChange?.({
      id: questionId,
      type: newQuestionType,
      ...(changingType && {
        ...getDefaultParamsForQuestionType(newQuestionType),
      }),
    } as Parameters<
      NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
    >[0])
  }

  const handleSelectRatingType = (ratingType: RatingOptionType) => {
    if (questionType !== "rating") return

    onQuestionChange?.({
      id: questionId,
      type: "rating",
      value: 0,
      options: getRatingOptions(ratingType),
    } as Parameters<
      NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
    >[0])
  }

  const handleDuplicateQuestion = () => {
    onDuplicateElement?.({ elementId: questionId, type: questionType })
  }

  const handleDeleteQuestion = () => {
    deleteElement(questionId)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger tabIndex={-1} asChild>
        <F0Button
          icon={Ellipsis}
          label={t("coCreationForm.labels.actions")}
          size="md"
          variant="ghost"
          tooltip={false}
          hideLabel
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start">
        <DropdownMenuLabel className="p-4 pb-2 font-medium text-f1-foreground-secondary">
          {t("coCreationForm.labels.questionOptions")}
        </DropdownMenuLabel>
        {!disallowOptionalQuestions && (
          <DropdownMenuGroup>
            <ToggleItem
              label={t("coCreationForm.labels.required")}
              icon={AlertCircleLine}
              checked={!!question?.required}
              onChange={handleChangeRequired}
            />
          </DropdownMenuGroup>
        )}
        <DropdownMenuGroup>
          <QuestionTypeMenuItem
            label={t("coCreationForm.labels.questionType")}
            value={questionType}
            questionTypes={questionTypes}
            currentRatingType={currentRatingType}
            onSelectQuestionType={handleSelectQuestionType}
            onSelectRatingType={handleSelectRatingType}
          />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <SimpleItem
            label={t("coCreationForm.actions.duplicateQuestion")}
            icon={LayersFront}
            onClick={handleDuplicateQuestion}
          />
          {canDeleteQuestion && (
            <SimpleItem
              label={t("coCreationForm.actions.deleteQuestion")}
              icon={Delete}
              onClick={handleDeleteQuestion}
            />
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
