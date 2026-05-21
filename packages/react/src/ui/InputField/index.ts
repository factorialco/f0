/**
 * @deprecated Moved to `@/components/InputField`.
 *
 * InputField was promoted from an internal `ui/` primitive to a documented
 * component so teams can compose new inputs on top of it. Update your imports:
 *
 *   - import { InputField } from "@/ui/InputField"
 *   + import { InputField } from "@/components/InputField"
 *
 * This re-export is kept for backwards compatibility and will be removed in 2.0.0.
 *
 * @removeIn 2.0.0
 */
export * from "@/components/InputField"
