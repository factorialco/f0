import { default as React } from 'react';
import { SectionProps } from './Section';
export type ActivityItemListProps = Pick<SectionProps, "items" | "onClickItem"> & {
    onEndReached?: () => void;
    onEndReachedItemsThreshold?: number;
    loadingMoreItems?: boolean;
};
export declare const BaseActivityItemList: ({ items, loadingMoreItems, onClickItem, onEndReached, onEndReachedItemsThreshold, }: ActivityItemListProps) => React.JSX.Element;
export declare const ActivityItemListSkeleton: () => React.JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const ActivityItemList: (({ items, loadingMoreItems, onClickItem, onEndReached, onEndReachedItemsThreshold, }: ActivityItemListProps) => React.JSX.Element) & {
    Skeleton: () => React.JSX.Element;
};
