import { TranslationsType } from "@/lib/providers/i18n"

export type FilterTypeSchema<Options extends object = never> = {
  options: Options extends never ? never : Options
  label: string
}

export type FilterTypeComponentProps<
  Value = unknown,
  Options extends object = never,
> = {
  schema: FilterTypeSchema<Options>
  value: Value
  onChange: (value: Value) => void
}

export type FilterTypeContext<Options extends object = never> = {
  schema: FilterTypeSchema<Options>
  i18n: TranslationsType
}

export type FilterTypeDefinition<
  Value = unknown,
  Options extends object = never,
  EmptyValue = Value,
> = {
  /** Check if the value is empty */
  emptyValue: EmptyValue
  isEmpty: (value: Value, context: FilterTypeContext<Options>) => boolean
  /** Render the filter form */
  render: <Schema extends FilterTypeSchema<Options>>(props: {
    schema: Schema
    value: Value
    onChange: (value: Value) => void
  }) => React.ReactNode
  /**
   * The value label to display in the filter chips
   */
  chipLabel: (
    value: Value,
    context: FilterTypeContext<Options>
  ) => string | Promise<string>

  /**
   * The default options to render a filter of this type, for example max and min date for a date filter, the list of options for an in filter, etc
   */
  defaultOptions?: Options
  /**
   * The height of the filter form container in pixels
   */
  formHeight?: number
}
