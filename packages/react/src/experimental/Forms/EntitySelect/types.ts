import { InputFieldProps } from "@/ui/InputField"
import { PopoverProps } from "@radix-ui/react-popover"
import { Action } from "../Fields/Select/SelectBottomActions"

export type EntitySelectSubEntity = {
  subId: EntityId
  subName: string
  subAvatar?: string
  subSearchKeys?: string[]
}

export type EntitySelectEntity = {
  id: EntityId
  name: string
  avatar?: string
  expanded?: boolean
  searchKeys?: string[]
  subItems?: EntitySelectSubEntity[]
}

export type EntitySelectNamedGroup = {
  value: string
  label: string
  groupType?: "avatar" | "team"
}

interface EntitySelectCommonProps<T>
  extends Omit<PopoverProps, "children" | "modal">,
    Pick<
      InputFieldProps<string>,
      | "label"
      | "labelIcon"
      | "icon"
      | "error"
      | "status"
      | "hint"
      | "hideLabel"
      | "maxLength"
      | "disabled"
      | "placeholder"
      | "loading"
      | "required"
      | "readonly"
      | "append"
      | "size"
    > {
  entities: EntitySelectEntity[]
  groups: EntitySelectNamedGroup[]
  selectedGroup: string
  selectedItemsCopy: string
  notFoundTitle: string
  notFoundSubtitle: string
  onItemExpandedChange: (id: EntityId, expanded: boolean) => void
  onGroupChange: (value: string | null) => void
  disabled?: boolean
  zIndex?: number
  loading?: boolean
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
  selectedEntities?: EntitySelectEntity[]
  alwaysOpen?: boolean
  defaultOpen?: boolean
  width?: number
  hiddenAvatar?: boolean
  applySearchToGroup?: boolean
  onCreate?: (partialName: string) => void
  onCreateLabel?: string
  actions?: Action[]
  value?: T
}

export type FlattenedItem = {
  parent: EntitySelectEntity | null
  subItem: EntitySelectSubEntity & {
    expanded?: boolean
    subItems?: EntitySelectSubEntity[]
  }
}

export interface EntitySelectSingleProps<T> extends EntitySelectCommonProps<T> {
  onSelect: (entity: EntitySelectEntity | null) => void
  singleSelector: true
}

export interface EntitySelectMultipleProps<T>
  extends EntitySelectCommonProps<T> {
  onSelect: (entities: EntitySelectEntity[]) => void
  singleSelector: false | undefined
}

export type EntitySelectProps<T> =
  | EntitySelectSingleProps<T>
  | EntitySelectMultipleProps<T>

export type EntityId = number | string
