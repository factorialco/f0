import { Dispatch, SetStateAction } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon/F0Icon"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import {
  AlertCircleLine,
  Check,
  CheckDouble,
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

import { useSurveyFormBuilderContext } from "../../../Context"
import { RatingOptionType } from "../../../lib"
import { QuestionType } from "../../../types"
import { RATING_OPTIONS, useQuestionActions } from "./useQuestionActions"

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
  currentDatasetKey,
  questionTypes,
  currentRatingType,
  isQuestionTypeAllowed,
  onSelectQuestionType,
  onSelectRatingType,
}: {
  label: string
  value: QuestionType
  currentDatasetKey?: string
  questionTypes: {
    label: string
    questionType: QuestionType
    icon: IconType
    datasetKey?: string
  }[]
  currentRatingType: RatingOptionType | null
  isQuestionTypeAllowed: (type: QuestionType) => boolean
  onSelectQuestionType: (type: QuestionType, datasetKey?: string) => void
  onSelectRatingType: (type: RatingOptionType) => void
}) => {
  const { t } = useI18n()
  const regularTypes = questionTypes.filter((item) => !item.datasetKey)
  // Group dataset types by datasetKey so each dataset gets one sub-submenu
  const datasetKeys = Array.from(
    new Set(
      questionTypes
        .filter((item) => !!item.datasetKey)
        .map((item) => item.datasetKey as string)
    )
  )

  const selectedOptionLabel = currentDatasetKey
    ? (questionTypes.find(
        (option) =>
          option.questionType === value &&
          option.datasetKey === currentDatasetKey
      )?.label ?? undefined)
    : (questionTypes.find(
        (option) => option.questionType === value && !option.datasetKey
      )?.label ?? undefined)

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
          {regularTypes.map((questionType) => {
            const isRating = questionType.questionType === "rating"
            const isSelected =
              value === questionType.questionType && !currentDatasetKey

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
          {datasetKeys.length > 0 && (
            <>
              <DropdownMenuSeparator />
              {datasetKeys.map((dk) => {
                // Find the single-select entry for this dataset (for icon/label)
                const singleEntry = questionTypes.find(
                  (item) =>
                    item.datasetKey === dk &&
                    item.questionType === "dropdown-single"
                )
                return (
                  <DropdownMenuSub key={dk}>
                    <DropdownMenuSubTrigger className="mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover">
                      <div className="flex w-full flex-row items-center gap-2">
                        {singleEntry && (
                          <F0Icon icon={singleEntry.icon} color="default" />
                        )}
                        <span className="flex-1 text-base font-medium">
                          {singleEntry?.label ?? dk}
                        </span>
                        {currentDatasetKey === dk && (
                          <F0Icon icon={Check} color="default" />
                        )}
                      </div>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {isQuestionTypeAllowed("dropdown-single") && (
                          <DropdownMenuItem
                            onClick={() =>
                              onSelectQuestionType("dropdown-single", dk)
                            }
                          >
                            <div className="flex w-full flex-row items-center gap-2">
                              <F0Icon icon={Check} color="default" />
                              <span className="flex-1">
                                {t("surveyFormBuilder.labels.singleSelection")}
                              </span>
                              {currentDatasetKey === dk &&
                                value === "dropdown-single" && (
                                  <F0Icon icon={Check} color="default" />
                                )}
                            </div>
                          </DropdownMenuItem>
                        )}
                        {isQuestionTypeAllowed("dropdown-multi") && (
                          <DropdownMenuItem
                            onClick={() =>
                              onSelectQuestionType("dropdown-multi", dk)
                            }
                          >
                            <div className="flex w-full flex-row items-center gap-2">
                              <F0Icon icon={CheckDouble} color="default" />
                              <span className="flex-1">
                                {t("surveyFormBuilder.labels.multiSelection")}
                              </span>
                              {currentDatasetKey === dk &&
                                value === "dropdown-multi" && (
                                  <F0Icon icon={Check} color="default" />
                                )}
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
      <F0Icon icon={icon} />
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

  const { isQuestionTypeAllowed } = useSurveyFormBuilderContext()

  const {
    question,
    questionTypes,
    currentRatingType,
    currentDatasetKey,
    isMultiSelectEnabled,
    disallowOptionalQuestions,
    handleChangeRequired,
    handleSelectQuestionType,
    handleSelectRatingType,
    handleToggleMultiSelect,
    handleDuplicate,
    handleDelete,
  } = useQuestionActions({
    questionId,
    questionType,
    canDelete: canDeleteQuestion,
  })

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger tabIndex={-1} asChild>
        <F0Button
          icon={Ellipsis}
          label={t("surveyFormBuilder.labels.actions")}
          size="md"
          variant="ghost"
          tooltip={false}
          hideLabel
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start">
        <DropdownMenuLabel className="p-4 pb-2 font-medium text-f1-foreground-secondary">
          {t("surveyFormBuilder.labels.questionOptions")}
        </DropdownMenuLabel>
        {!disallowOptionalQuestions && (
          <DropdownMenuGroup>
            <ToggleItem
              label={t("surveyFormBuilder.labels.required")}
              icon={AlertCircleLine}
              checked={!!question?.required}
              onChange={handleChangeRequired}
            />
          </DropdownMenuGroup>
        )}
        {!!currentDatasetKey && (
          <DropdownMenuGroup>
            <ToggleItem
              label={t("surveyFormBuilder.labels.allowMultiSelection")}
              icon={CheckDouble}
              checked={isMultiSelectEnabled}
              onChange={handleToggleMultiSelect}
            />
          </DropdownMenuGroup>
        )}
        <DropdownMenuGroup>
          <QuestionTypeMenuItem
            label={t("surveyFormBuilder.labels.questionType")}
            value={questionType}
            currentDatasetKey={currentDatasetKey}
            questionTypes={questionTypes}
            currentRatingType={currentRatingType}
            isQuestionTypeAllowed={isQuestionTypeAllowed}
            onSelectQuestionType={handleSelectQuestionType}
            onSelectRatingType={handleSelectRatingType}
          />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <SimpleItem
            label={t("surveyFormBuilder.actions.duplicateQuestion")}
            icon={LayersFront}
            onClick={handleDuplicate}
          />
          {canDeleteQuestion && (
            <SimpleItem
              label={t("surveyFormBuilder.actions.deleteQuestion")}
              icon={Delete}
              onClick={handleDelete}
              critical
            />
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
