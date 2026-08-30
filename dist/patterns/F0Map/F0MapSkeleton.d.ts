import { WithDataTestIdProps } from '../../lib/data-testid';
export interface F0MapSkeletonProps extends WithDataTestIdProps {
    /** @private */
    className?: string;
}
/**
 * Loading placeholder: a plain pulsing surface in the shared `Skeleton`
 * component's tone. Shown while a consumer is still fetching what the map
 * should display; the map paints its own basemap once mounted, so this needs
 * no map-like illustration.
 */
export declare const F0MapSkeleton: ({ dataTestId, className, }: F0MapSkeletonProps) => import("react").JSX.Element;
