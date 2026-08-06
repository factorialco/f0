import { type Locale } from "date-fns"
import * as locales from "date-fns/locale"

import { useL10n } from "./l10n-provider"

/** Every date-fns locale by its own `code` (`pt-BR`, `sr-Latn`, …), lowercased. */
const localesByCode = new Map(
  Object.values(locales).map((locale) => [locale.code.toLowerCase(), locale])
)

/**
 * The date-fns locale for the locale configured on `L10nProvider`, preferring
 * the regional variant so `pt-BR` does not degrade to `pt`. English and
 * anything date-fns does not ship resolve to `en-US`, its own default.
 *
 * Components must pass this to every date-fns call rather than relying on
 * `setDefaultOptions`: the library bundles its own date-fns instance, so a host
 * app's global defaults never reach it.
 */
export function useDateFnsLocale(): Locale {
  const key = useL10n().locale.toLowerCase()
  const language = key.split("-")[0] ?? ""

  return localesByCode.get(key) ?? localesByCode.get(language) ?? locales.enUS
}
