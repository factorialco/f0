type LoadingSkeletonProps = {
    /**
     * Whether to render placeholder skeletons. When false, the component acts as an invisible sentinel for infinite scroll.
     */
    showPlaceholders?: boolean;
    /**
     * Number of skeleton cards to render when placeholders are shown.
     * @default 3
     */
    count?: number;
};
export declare const LoadingSkeleton: import('react').ForwardRefExoticComponent<LoadingSkeletonProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
