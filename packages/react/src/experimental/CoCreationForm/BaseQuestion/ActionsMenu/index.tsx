import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon/F0Icon"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import {
  AlertCircleLine,
  AlignTextLeft,
  Check,
  Delete,
  Ellipsis,
  Hub,
  LayersFront,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
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
import { Dispatch, SetStateAction, useCallback, useMemo } from "react"
import { useQuestionTypes } from "../../constants"
import { useCoCreationFormContext } from "../../Context"
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
}: {
  label: string
  icon: IconType
  onClick: () => void
}) => (
  <DropdownMenuItem onClick={onClick}>
    <div className="flex w-full flex-row items-center gap-2">
      <F0Icon icon={icon} color="default" />
      <span className="flex-1">{label}</span>
    </div>
  </DropdownMenuItem>
)

type ActionsMenuProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  questionId: string
  questionType: QuestionType
}

export function ActionsMenu({
  open,
  setOpen,
  questionId,
  questionType,
}: ActionsMenuProps) {
  const { t } = useI18n()

  const { onQuestionChange, getQuestionById, deleteElement } =
    useCoCreationFormContext()

  const question = useMemo(
    () => getQuestionById(questionId),
    [questionId, getQuestionById]
  )

  const questionTypes = useQuestionTypes()

  const handleChangeRequired = useCallback(
    (checked: boolean) => {
      onQuestionChange?.({
        id: questionId,
        type: questionType,
        required: checked,
      } as Parameters<
        NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
      >[0])
    },
    [questionId, questionType, onQuestionChange]
  )

  const handleChangeDescriptionVisible = useCallback(
    (checked: boolean) => {
      onQuestionChange?.({
        id: questionId,
        type: questionType,
        descriptionVisible: checked,
      } as Parameters<
        NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
      >[0])
    },
    [questionId, questionType, onQuestionChange]
  )

  const handleSelectQuestionType = useCallback(
    (newQuestionType: QuestionType) => {
      onQuestionChange?.({
        id: questionId,
        type: newQuestionType,
      } as Parameters<
        NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
      >[0])
    },
    [questionId, onQuestionChange]
  )

  const handleDuplicateQuestion = useCallback(() => {}, [])

  const handleDeleteQuestion = useCallback(() => {
    deleteElement(questionId)
  }, [questionId, deleteElement])

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
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
        <DropdownMenuGroup>
          <ToggleItem
            label={t("coCreationForm.labels.required")}
            icon={AlertCircleLine}
            checked={!!question?.required}
            onChange={handleChangeRequired}
          />
          <ToggleItem
            label={t("coCreationForm.labels.description")}
            icon={AlignTextLeft}
            checked={!!question?.descriptionVisible}
            onChange={handleChangeDescriptionVisible}
          />
        </DropdownMenuGroup>
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
          <SimpleItem
            label={t("coCreationForm.actions.deleteQuestion")}
            icon={Delete}
            onClick={handleDeleteQuestion}
          />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
