import { experimentalComponent } from "@/lib/experimental"

export { F0DatePicker as _F0DatePicker } from "./F0DatePicker"
export * from "./presets"
export * from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0DatePicker = experimentalComponent<typeof _F0DatePicker>(
  "F0DatePicker",
  _F0DatePicker
)
