import { AiBannerInternalProps, AiBannerSkeletonProps } from './types';
export type F0AiBannerProps = AiBannerInternalProps;
export declare const F0AiBanner: import('react').ForwardRefExoticComponent<Omit<AiBannerInternalProps & import('react').RefAttributes<HTMLDivElement> & import('../../../../lib/data-testid').WithDataTestIdProps, "ref"> & import('react').RefAttributes<HTMLDivElement>> & Pick<import('react').ForwardRefExoticComponent<AiBannerInternalProps & import('react').RefAttributes<HTMLDivElement>>, never> & {
    Skeleton: ({ compact }: AiBannerSkeletonProps) => import("react").JSX.Element;
};
