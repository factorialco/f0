import { Arrow } from "@/experimental/Forms/Fields/Select/components/Arrow"
import { cn } from "@/lib/utils"
import { InputField, InputFieldProps } from "@/ui/InputField"
import { useMemo } from "react"
import {
  EntitySelectEntity,
  EntitySelectSubEntity,
  FlattenedItem,
} from "../types"

export const Trigger = ({
  placeholder,
  selected,
  selectedEntities,
  disabled = false,
  hiddenAvatar = false,
  label,
  labelIcon,
  icon,
  error,
  status,
  hint,
  onClickContent,
  hideLabel = false,
  maxLength,
  loading = false,
  required = false,
  readonly = false,
  append,
  size = "sm",
  open,
}: {
  selected: string
  selectedEntities: EntitySelectEntity[]
  hiddenAvatar?: boolean
  open?: boolean
} & Pick<
  InputFieldProps<string>,
  | "onClickContent"
  | "label"
  | "labelIcon"
  | "icon"
  | "error"
  | "status"
  | "hint"
  | "hideLabel"
  | "maxLength"
  | "value"
  | "disabled"
  | "placeholder"
  | "loading"
  | "required"
  | "readonly"
  | "append"
  | "size"
>) => {
  const groupView = useMemo(
    () =>
      selectedEntities.some(
        (entity) => entity.subItems && entity.subItems.length > 0
      ),
    [selectedEntities]
  )
  const flattenedList = useMemo<FlattenedItem[]>(() => {
    return !groupView
      ? selectedEntities.map((el) => ({
          parent: null,
          subItem: {
            subId: el.id,
            subName: el.name,
            subAvatar: el.avatar,
          } as EntitySelectSubEntity,
        }))
      : selectedEntities.flatMap((entity) =>
          (entity.subItems ?? []).map((subItem) => ({
            parent: entity,
            subItem,
          }))
        )
  }, [groupView, selectedEntities])

  const value =
    flattenedList.length === 0
      ? undefined
      : flattenedList.length === 1
        ? flattenedList[0].subItem.subName
        : flattenedList.length + " " + selected

  const avatar =
    flattenedList.length === 1 ? flattenedList[0].subItem.subName : undefined

  return (
    <InputField
      onClickContent={onClickContent}
      role="combobox"
      label={label}
      labelIcon={labelIcon}
      aria-expanded={false}
      aria-controls="listbox"
      icon={!!icon && !value ? icon : undefined}
      error={error}
      status={status}
      hint={hint}
      hideLabel={hideLabel}
      maxLength={maxLength}
      clearable={false}
      value={value}
      disabled={disabled}
      loading={loading}
      required={required}
      readonly={readonly}
      size={size}
      avatar={
        hiddenAvatar || !avatar
          ? undefined
          : {
              type: "person",
              firstName: avatar,
              lastName: "",
              src: flattenedList[0].subItem.subAvatar,
            }
      }
      append={
        append ?? (
          <div className={cn(size === "sm" ? "" : "-mt-2")}>
            {/* This is a temporary solution (to use Select component arrow) */}
            <Arrow open={open} disabled={disabled} size={size} />
          </div>
        )
      }
    >
      <span
        role="button"
        className={cn(
          "my-auto flex items-center pr-1",
          placeholder && "text-f1-foreground-secondary",
          value && "text-f1-foreground",
          (flattenedList.length === 1 && !hiddenAvatar) || (icon && !value)
            ? "pl-8"
            : "pl-2"
        )}
      >
        {flattenedList.length === 0
          ? placeholder
          : flattenedList.length === 1
            ? flattenedList[0].subItem.subName
            : flattenedList.length + " " + selected}
      </span>
    </InputField>
  )
}
