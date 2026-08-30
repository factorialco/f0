import { ComponentProps } from 'react';
import { F0FormLikeComponent } from '../../../patterns/F0Form/types';
import { ImageContextValue } from '../../imageHandler';
import { LinkContextValue } from '../../linkHandler';
import { DataCollectionStorageHandler } from '../datacollection/types';
import { I18nProviderProps } from '../i18n';
import { L10nProviderProps } from '../l10n';
import { HourCycle } from '../user-platafform/types';
interface LayoutProps {
    fullScreen?: boolean;
    addBodyClasses?: boolean;
}
export declare const useLayout: () => {
    inLayoutContext: boolean;
    element: HTMLElement | null;
};
export declare const LayoutProvider: React.FC<{
    children: React.ReactNode;
} & LayoutProps>;
export declare const useFormComponent: () => F0FormLikeComponent | undefined;
export declare const F0Provider: React.FC<{
    children: React.ReactNode;
    link?: LinkContextValue;
    privacyModeInitiallyEnabled?: boolean;
    image?: ImageContextValue;
    layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">;
    i18n: Omit<I18nProviderProps, "children">;
    l10n: Omit<L10nProviderProps, "children">;
    /**
     * Global user preference for how times are displayed and edited (12h/24h).
     * When set, F0 time fields render/parse in this hour cycle so the app can
     * honor the user's preference instead of the browser locale. When omitted,
     * time fields use the native browser-locale input.
     */
    hourCycle?: HourCycle;
    isDev?: boolean;
    showExperimentalWarnings?: boolean;
    dataCollectionStorageHandler?: DataCollectionStorageHandler;
    renderDataTestIdAttribute?: boolean;
    /**
     * Custom form component to use instead of the default F0Form in
     * AI canvas form panels. Useful for platform-level wrappers that
     * auto-provide `renderCustomField` or `useUpload`.
     *
     * Cast overloaded components when passing:
     * ```tsx
     * <F0Provider formComponent={FactorialF0Form as F0FormLikeComponent} />
     * ```
     */
    formComponent?: F0FormLikeComponent;
}>;
export {};
