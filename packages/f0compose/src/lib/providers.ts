/**
 * Default provider configuration for f0compose. The framework wires
 * `F0Provider` with these defaults at the app root so f0 components
 * have the I18n / L10n contexts they need.
 *
 * Designers should NOT touch this file.
 */

import { defaultTranslations } from "@factorialco/f0-react"

export const defaultI18nTranslations = defaultTranslations

export const defaultL10n = {
  locale: "en",
  date: {
    // Match f0's default (Monday-first week).
    weekStartsOn: 1 as const,
  },
}
