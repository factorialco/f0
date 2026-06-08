/**
 * @deprecated Renamed to `F0InputField`. Update your imports:
 *
 *   - import { InputField } from "@/components/InputField"
 *   + import { F0InputField } from "@/components/F0InputField"
 *
 * The `F0` prefix marks the component as part of the F0 design system so it can
 * coexist unambiguously with legacy `Input` components.
 *
 * This re-export is kept for backwards compatibility and will be removed in 2.0.0.
 *
 * @removeIn 2.0.0
 */
export {
  F0InputField as InputField,
  type InputFieldProps,
} from "@/components/F0InputField"
export * from "@/components/F0InputField/types"
