import type { AppLocale } from "./i18n"

/** The imported screens use the existing prototype's profile, without a second settings provider. */
import { useProfile } from "../../../profileStore"
export function useLocale(): AppLocale {
  return "en"
}
export function useNavConfig() {
  return { config: { role: useProfile() } }
}
