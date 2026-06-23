import { ReactNode } from "react"

import {
  metadataRenderer,
  ValueDisplayRendererDefinition,
  type ValueDisplayTableAlignment,
} from "@/ui/value-display"
import { RecordType } from "@/hooks/datasource"
import { TranslationsType } from "@/lib/providers/i18n/i18n-provider-defaults"

import type { TableHeaderInfo } from "@/experimental/OneTable"

import { VisualizationType } from "./visualizations/collection/types"

export type { TableHeaderInfo }

export type RendererDefinition = ValueDisplayRendererDefinition

export type PropertyDefinition<T> = {
  label: string

  /**
   * Optional header info. Pass a string for a short text tooltip, or a
   * {@link TableHeaderInfo} object for a structured hoverable card. Only
   * rendered by the table visualization's column headers.
   */
  info?: string | TableHeaderInfo

  /**
   * Function that extracts and formats the value from an item.
   * Should return an object matching the expected args for the specified renderer type.
   *
   * Example usage:
   * {
   *   render: (item) => ({
   *     type: "avatar",
   *     value: {
   *       type: "person",
   *       firstName: item.firstName,
   *       lastName: item.lastName,
   *     }
   *   })
   * }
   */
  render: (item: T) => RendererDefinition | string | number | undefined

  /**
   * Function that determines if the property should be hidden for a given item.
   * Should return true if the property should be hidden, false otherwise.
   */
  hide?: (item: T) => boolean
}

const undefinedValueByVisualization: Partial<
  Record<VisualizationType, string | undefined> & { default: string }
> = {
  default: "-",
  list: undefined,
}

export const renderProperty = <R extends RecordType>(
  item: R,
  property: PropertyDefinition<R>,
  visualization: VisualizationType,
  i18n: TranslationsType,
  options?: {
    tableAlign?: ValueDisplayTableAlignment
  }
): ReactNode => {
  const renderDefinition = property.render(item)

  const undefinedValue =
    visualization in undefinedValueByVisualization
      ? undefinedValueByVisualization[visualization]
      : undefinedValueByVisualization.default

  return metadataRenderer(
    renderDefinition as ValueDisplayRendererDefinition,
    {
      visualization,
      i18n,
      tableAlign: options?.tableAlign,
    },
    undefinedValue
  )
}
