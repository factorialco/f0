import { AvatarVariant } from "@/components/avatars/F0Avatar/F0Avatar"
import { IconType } from "@/components/F0Icon/types"
import { I18nContextType } from "@/lib/providers/i18n"

export type FilterTypeSchema<
  Options extends object = never,
  OptionalOptions extends boolean = false,
> = {
  label: string
} & (Options extends never
  ? {}
  : OptionalOptions extends true
    ? {
        options?: Options
      }
    : {
        options: Options
      })

export type FilterTypeComponentProps<
  Value = unknown,
  Options extends object = never,
  OptionalOptions extends boolean = false,
> = {
  schema: FilterTypeSchema<Options, OptionalOptions>
  value: Value
  onChange: (value: Value) => void
  isCompactMode?: boolean
}

export type FilterTypeContext<Options extends object = never> = {
  schema: FilterTypeSchema<Options>
  i18n: I18nContextType
}

export type ChipLabel = {
  label: string
} & (
  | {
      icon: IconType
      avatar?: never
    }
  | {
      icon?: never
      avatar: AvatarVariant
    }
  | {
      icon?: never
      avatar?: never
    }
)

export type FilterTypeDefinition<
  Value = unknown,
  Options extends object = never,
  EmptyValue = Value,
> = {
  /** Check if the value is empty */
  emptyValue: EmptyValue
  isEmpty: (
    value: Value | undefined,
    context: FilterTypeContext<Options>
  ) => boolean
  /** Render the filter form */
  render: <Schema extends FilterTypeSchema<Options>>(props: {
    schema: Schema
    value: Value
    onChange: (value: Value) => void
    isCompactMode?: boolean
  }) => React.ReactNode
  /**
   * The value label to display in the filter chips
   */
  chipLabel: (
    value: Value,
    context: FilterTypeContext<Options>
  ) => string | ChipLabel | Promise<string | ChipLabel>

  /**
   * The default options to render a filter of this type, for example max and min date for a date filter, the list of options for an in filter, etc
   */
  defaultOptions?: Options
  /**
   * The height of the filter form container in pixels
   */
  formHeight?: number
}
