import { CalloutInternalProps, CalloutSkeletonProps } from './types';
export type F0CalloutProps = CalloutInternalProps;
export declare const F0Callout: import('react').ForwardRefExoticComponent<Omit<CalloutInternalProps & import('react').RefAttributes<HTMLDivElement> & import('../../../../lib/data-testid').WithDataTestIdProps, "ref"> & import('react').RefAttributes<HTMLDivElement>> & Pick<import('react').ForwardRefExoticComponent<CalloutInternalProps & import('react').RefAttributes<HTMLDivElement>>, never> & {
    Skeleton: ({ compact, variant }: CalloutSkeletonProps) => import("react").JSX.Element;
};
