import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { ChevronDown } from "@/icons/app"
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
  hideLabel = false,
  maxLength,
  loading = false,
  required = false,
  readonly = false,
  append,
}: {
  selected: string
  selectedEntities: EntitySelectEntity[]
  hiddenAvatar?: boolean
} & Pick<
  InputFieldProps<string>,
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

  const showAvatar = !hiddenAvatar && !!avatar

  return (
    <>
      <InputField
        label={label}
        labelIcon={labelIcon}
        {...(showAvatar
          ? {
              avatar: {
                type: "person",
                firstName: avatar,
                lastName: "",
              },
            }
          : {
              icon: !!icon && !value ? icon : undefined,
            })}
        error={error}
        status={status}
        hint={hint}
        hideLabel={hideLabel}
        maxLength={maxLength}
        clearable={false}
        value={value || ""}
        placeholder={placeholder}
        disabled={disabled}
        loading={loading}
        required={required}
        readonly={readonly}
        append={
          append ?? (
            <div className="h-[16px] w-[16px]">
              <F0Icon
                icon={ChevronDown}
                size="sm"
                color="default"
                className="rounded-2xs p-0.5"
              />
            </div>
          )
        }
        className="min-w-[100px]"
      >
        <OneEllipsis tag="span">{value || ""}</OneEllipsis>
      </InputField>
    </>
  )
}
