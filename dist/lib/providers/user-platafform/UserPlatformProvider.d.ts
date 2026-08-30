import { HourCycle, Platform } from './types';
type Context = {
    platform: Platform;
    isDev: boolean;
    showExperimentalWarnings: boolean;
    renderDataTestIdAttribute: boolean;
    /**
     * Global user preference for how times are displayed and edited (12h/24h).
     * Left `undefined` when the app doesn't set it, in which case time fields
     * fall back to the native browser-locale input.
     */
    hourCycle?: HourCycle;
};
type UserPlatformProviderProps = {
    children: React.ReactNode;
} & Partial<Context>;
export declare const UserPlatformProvider: ({ children, platform, isDev, showExperimentalWarnings, renderDataTestIdAttribute, hourCycle, }: UserPlatformProviderProps) => import("react").JSX.Element;
export declare const useIsDev: () => boolean;
export declare function useUserPlatform(): Platform;
/**
 * Returns whether data-testid attributes should be rendered.
 * When false (default when outside UserPlatformProvider), withDataTestId
 * returns the original content without the wrapper or attribute.
 */
export declare function useRenderDataTestIdAttribute(): boolean;
export declare function useShowExperimentalWarnings(): boolean;
/**
 * Returns the app's global hour-cycle preference (12h/24h), or `undefined`
 * when it isn't set — in which case time fields use the native browser-locale
 * input. Set it via the `hourCycle` prop on `F0Provider`.
 */
export declare function useHourCycle(): HourCycle | undefined;
export {};
