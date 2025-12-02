/**
 * @factorialco/one/expo - Expo/React Native entry point
 *
 * This entry point exports components optimized for Expo and React Native usage.
 * Use this when building for mobile platforms to ensure compatibility
 * and optimal tree-shaking.
 */

// AiChat components (expo - fullscreen version)
// TODO: Review - FullScreen components structure and dependencies
export {
  ActionItem,
  AiChatProvider,
  AiFullscreenChat, // Expo-only: FullScreen chat component
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
