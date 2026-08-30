interface EnhanceErrorBannerProps {
    error: string;
    onDismiss: () => void;
    /** Overrides the dismiss button copy (defaults to the enhance one) */
    dismissLabel?: string;
}
declare const EnhanceErrorBanner: ({ error, onDismiss, dismissLabel, }: EnhanceErrorBannerProps) => import("react").JSX.Element;
export { EnhanceErrorBanner };
export type { EnhanceErrorBannerProps };
