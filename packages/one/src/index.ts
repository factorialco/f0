/**
 * @factorialco/one - Main entry point
 *
 * This is the main export point for the ONE components library.
 * It exports all components that are available for both web and expo platforms.
 */

// AiChat components (web - sidebar version only, no FullScreen)
export {
  ActionItem,
  AiChat,
  AiChatProvider,
  useAiChat,
  type ActionItemProps,
  type AiChatProviderProps,
} from "./components/AiChat/exports"

// I18n provider
export {
  I18nProvider,
  buildTranslations,
  defaultTranslations,
  useI18n,
  type I18nContextType,
  type I18nProviderProps,
  type I18nStrings,
  type TranslationKey,
  type TranslationsType,
} from "./lib/providers/i18n"
