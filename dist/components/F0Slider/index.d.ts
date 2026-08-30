export type { F0SliderProps, F0SliderTooltipMode } from './types';
export { sliderTooltipModes } from './types';
/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export declare const F0Slider: import('react').ForwardRefExoticComponent<Omit<import('./types').F0SliderProps & import('react').RefAttributes<HTMLDivElement> & import('../../lib/data-testid').WithDataTestIdProps, "ref"> & import('react').RefAttributes<HTMLDivElement>> & Pick<import('react').ForwardRefExoticComponent<import('./types').F0SliderProps & import('react').RefAttributes<HTMLDivElement>>, never> & {
    Skeleton: ({ hideLabel }: import('./F0SliderSkeleton').F0SliderSkeletonProps) => import("react").JSX.Element;
};
