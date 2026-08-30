import { IconType } from '../../../../components/F0Icon';
export type ActivityItemProps = {
    id: string;
    createdAt: Date;
    title: string;
    description?: string;
    icon?: IconType;
    category: string;
    isUnread?: boolean;
    onClick: (id: string) => void;
    onVisible?: (id: string) => void;
};
export declare const BaseActivityItem: ({ id, createdAt, title, description, icon, category, isUnread, onClick, onVisible, }: ActivityItemProps) => import("react").JSX.Element;
export declare const ActivityItemSkeleton: () => import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const ActivityItem: (({ id, createdAt, title, description, icon, category, isUnread, onClick, onVisible, }: ActivityItemProps) => import("react").JSX.Element) & {
    Skeleton: () => import("react").JSX.Element;
};
