import { ReactNode } from "react"
import { ValueDisplayVisualizationType } from "./types.ts"
import { AlertTagCell } from "./types/alertTag"
import { AmountCell } from "./types/amount"
import { AvatarListCell } from "./types/avatarList"
import { CompanyCell } from "./types/company"
import { DateCell } from "./types/date"
import { DotTagCell } from "./types/dotTag"
import { FileCell } from "./types/file"
import { FolderCell } from "./types/folder"
import { IconCell } from "./types/icon"
import { LongTextCell } from "./types/longText"
import { NumberCell } from "./types/number"
import { PercentageCell } from "./types/percentage"
import { PersonCell } from "./types/person"
import { StatusCell } from "./types/status"
import { TagCell } from "./types/tag"
import { TagListCell } from "./types/tagList"
import { TeamCell } from "./types/team"
import { TextCell } from "./types/text"

export type ValueDisplayRendererContext = {
  visualization: ValueDisplayVisualizationType
}

/**
 * The renderer function to use for a property.
 */
export type ValueDisplayRenderer = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The any type for the definition parameter is acceptable here since the actual type safety is enforced by the MetadataRendererDefinition type when it's used in practice.
  def: any,
  context: ValueDisplayRendererContext,
  undefinedValue?: string
) => ReactNode

export const valueDisplayRenderers = {
  text: TextCell,
  longText: LongTextCell,
  number: NumberCell,
  date: DateCell,
  amount: AmountCell,
  avatarList: AvatarListCell,
  status: StatusCell,
  alertTag: AlertTagCell,
  person: PersonCell,
  percentage: PercentageCell,
  company: CompanyCell,
  team: TeamCell,
  tag: TagCell,
  dotTag: DotTagCell,
  tagList: TagListCell,
  icon: IconCell,
  file: FileCell,
  folder: FolderCell,
} as const satisfies Record<string, ValueDisplayRenderer>

/**
 * The type of renderer to use for a property.
 */
export type ValueDisplayRendererType = keyof typeof valueDisplayRenderers

/**
 * The definition of a renderer.
 * Union type of all possible renderer definitions to ensure the value is the type related the `type`{ [RenderedType]: RendererFuncArgument }.
 */
export type ValueDisplayRendererDefinition = {
  [K in keyof typeof valueDisplayRenderers]: {
    type: K
    value: Parameters<(typeof valueDisplayRenderers)[K]>[0]
  }
}[keyof typeof valueDisplayRenderers]

export type ValueDisplayDefinition = {
  render: ValueDisplayRendererDefinition | string | number | undefined
}

/**
 * Renders a value for a given item and property definition.
 * Used by both table and card visualizations to ensure consistent rendering.
 */
const renderIsRendererDefinition = (
  renderDef: ValueDisplayRendererDefinition | string | number | undefined
): renderDef is ValueDisplayRendererDefinition => {
  return renderDef !== undefined && typeof renderDef === "object"
}

/**
 * Renders the value of a metadata property
 * @param args
 * @param context
 * @returns
 */

export const metadataRenderer: ValueDisplayRenderer = (
  def,
  context,
  undefinedValue
): ReactNode => {
  const { type, value } = renderIsRendererDefinition(def)
    ? def
    : ({
        type: "text" as const,
        value: def ?? undefinedValue,
      } satisfies ValueDisplayRendererDefinition)

  // Type assertion to ensure the renderer function is typed correctly as typescript can't infer the type correctly
  const renderer = valueDisplayRenderers[type] as (
    arg: Parameters<(typeof valueDisplayRenderers)[typeof type]>[0],
    context: ValueDisplayRendererContext
  ) => ReactNode

  if (!renderer) {
    return `[Invalid ${type} renderer]`
  }

  if (value === undefined) {
    return undefinedValue
  }

  return renderer(value, {
    visualization: context.visualization,
  })
}
