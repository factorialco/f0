type HTMLString = string;
export type PostDescriptionProps = {
    content: HTMLString;
    collapsed?: boolean;
    id?: string;
    className?: string;
    tabIndex?: number;
};
export declare const BasePostDescription: import('react').ForwardRefExoticComponent<PostDescriptionProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const PostDescriptionSkeleton: () => import("react").JSX.Element;
export declare const PostDescription: import('react').ForwardRefExoticComponent<PostDescriptionProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: () => import("react").JSX.Element;
};
export {};
