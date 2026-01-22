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
import { getDefaultParamsForQuestionType } from "../../lib"
import { CoCreationFormCallbacks, QuestionType } from "../../types"

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
    className="pr-3"
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

const SubMenuItem = <Value extends string>({
  label,
  value,
  options,
  icon,
  onSelect,
}: {
  label: string
  value: Value
  options: { label: string; value: Value; icon: IconType }[]
  icon: IconType
  onSelect: (value: Value) => void
}) => {
  const selectedOptionLabel = options.find(
    (option) => option.value === value
  )?.label

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="px-3 py-2">
        <div className="flex w-full flex-row items-center gap-2">
          <F0Icon icon={icon} color="default" />
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
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onSelect(option.value)}
            >
              <div className="flex w-full flex-row items-center gap-2">
                <F0Icon icon={option.icon} color="default" />
                <span className="flex-1">{option.label}</span>
                {value === option.value && (
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
          <SubMenuItem<QuestionType>
            label={t("coCreationForm.labels.questionType")}
            value={questionType}
            options={questionTypes.map((questionType) => ({
              label: questionType.label,
              value: questionType.questionType,
              icon: questionType.icon,
            }))}
            onSelect={handleSelectQuestionType}
            icon={Hub}
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
