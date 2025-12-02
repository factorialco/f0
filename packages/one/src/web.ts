/**
 * @factorialco/one/web - Web-specific entry point
 *
 * This entry point exports components optimized for web usage.
 * Use this when you need web-specific features or want to ensure
 * tree-shaking only includes web-compatible code.
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
