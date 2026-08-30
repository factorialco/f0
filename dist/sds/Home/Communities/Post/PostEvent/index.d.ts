export type PostEventProps = {
    title: string;
    mediaUrl?: string;
    place?: string;
    date: Date;
};
export declare const BasePostEvent: ({ title, mediaUrl, place, date, }: PostEventProps) => import("react").JSX.Element;
export declare const PostEventSkeleton: () => import("react").JSX.Element;
export declare const PostEvent: (({ title, mediaUrl, place, date, }: PostEventProps) => import("react").JSX.Element) & {
    Skeleton: () => import("react").JSX.Element;
};
