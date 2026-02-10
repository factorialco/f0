import { IconType } from "../../Icon";
export type ActivityItemProps = {
    id: string;
    date: string;
    title: string;
    description?: string;
    icon?: IconType;
    category: string;
    isUnread?: boolean;
    onPress: (id: string) => void;
};
export declare const ActivityItem: ({ id, date, title, description, icon, category, isUnread, onPress, }: ActivityItemProps) => import("react").JSX.Element;
export declare const ActivityItemSkeleton: () => import("react").JSX.Element;
//# sourceMappingURL=index.d.ts.map