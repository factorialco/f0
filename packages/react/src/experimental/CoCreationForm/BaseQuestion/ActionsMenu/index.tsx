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
import { Dispatch, SetStateAction, useCallback } from "react"
import { useQuestionTypes } from "../../constants"
import { BaseQuestionOnChangeParams, QuestionType } from "../../types"

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
  <DropdownMenuItem className="pr-3">
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

const SimpleItem = ({ label, icon }: { label: string; icon: IconType }) => (
  <DropdownMenuItem>
    <div className="flex w-full flex-row items-center gap-2">
      <F0Icon icon={icon} color="default" />
      <span className="flex-1">{label}</span>
    </div>
  </DropdownMenuItem>
)

type ActionsMenuProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onChangeParams: BaseQuestionOnChangeParams
  onChange?: (params: BaseQuestionOnChangeParams) => void
}

export function ActionsMenu({
  open,
  setOpen,
  onChange,
  onChangeParams,
}: ActionsMenuProps) {
  const { t } = useI18n()

  const questionTypes = useQuestionTypes()

  const handleChangeRequired = useCallback(
    (checked: boolean) => {
      if (!onChangeParams) return

      onChange?.({
        ...onChangeParams,
        required: checked,
      })
    },
    [onChange, onChangeParams]
  )

  const handleChangeDescriptionVisible = useCallback(
    (checked: boolean) => {
      if (!onChangeParams) return

      onChange?.({
        ...onChangeParams,
        descriptionVisible: checked,
      })
    },
    [onChange, onChangeParams]
  )

  const handleSelectQuestionType = useCallback(
    (newQuestionType: QuestionType) => {
      if (!onChangeParams) return

      onChange?.({
        ...onChangeParams,
        type: newQuestionType,
      })
    },
    [onChange, onChangeParams]
  )

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <F0Button
          icon={Ellipsis}
          label="Actions"
          size="md"
          variant="ghost"
          tooltip={false}
          hideLabel
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start">
        <DropdownMenuLabel className="p-4 pb-2 font-medium text-f1-foreground-secondary">
          Question options
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <ToggleItem
            label="Required"
            icon={AlertCircleLine}
            checked={false}
            onChange={handleChangeRequired}
          />
          <ToggleItem
            label="Description"
            icon={AlignTextLeft}
            checked={false}
            onChange={handleChangeDescriptionVisible}
          />
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <SubMenuItem<QuestionType>
            label="Question type"
            value={onChangeParams?.type}
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
          />
          <SimpleItem
            label={t("coCreationForm.actions.deleteQuestion")}
            icon={Delete}
          />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
