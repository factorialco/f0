import type { GranularityDefinitionKey } from "@/experimental/OneCalendar"
import type { DatePreset } from "@/components/F0DatePicker"

import type { BaseFieldDefinition } from "../types"

/**
 * Date field definition (renders F0DatePicker component)
 */
export interface DateFieldDefinition extends BaseFieldDefinition {
  type: "date"
  /** Available granularities for the date picker (default: ["day"]) */
  granularities?: GranularityDefinitionKey[]
  /** Minimum selectable date */
  minDate?: Date
  /** Maximum selectable date */
  maxDate?: Date
  /** Preset date options to display */
  presets?: DatePreset[]
  /** Whether the date can be cleared */
  clearable?: boolean
}
