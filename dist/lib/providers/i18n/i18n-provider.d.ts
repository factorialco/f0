import { ReactNode } from 'react';
import { TranslationKey, TranslationsType } from './i18n-provider-defaults';
export type I18nContextType = TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};
export interface I18nProviderProps {
    children: ReactNode;
    translations: TranslationsType;
}
export declare function I18nProvider({ children, translations, }: I18nProviderProps): JSX.Element;
export declare function useI18n(): TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};
export declare const buildTranslations: (translations: TranslationsType) => TranslationsType;
export type I18nStrings = TranslationsType;
export type { TranslationsType };
