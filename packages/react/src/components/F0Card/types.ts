import { IconType } from "@/components/F0Icon"
import { valueDisplayRenderers } from "@/components/value-display"

import { CardPropertyType } from "./components/CardMetadata"

/**
 * Card metadata property renderers.
 * Each metadata item consists of an icon and a property with its data.
 */
export type CardMetadataProperty = {
  [K in CardPropertyType]: {
    type: K
    value: Parameters<(typeof valueDisplayRenderers)[K]>[0]
  }
}[CardPropertyType]

export type CardMetadata =
  | {
      icon: IconType
      tooltip?: string
      property: Exclude<CardMetadataProperty, { type: "file" }>
    }
  | {
      property: Extract<CardMetadataProperty, { type: "file" }>
    }
