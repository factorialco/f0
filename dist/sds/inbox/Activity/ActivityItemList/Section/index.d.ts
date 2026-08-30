import { default as React } from 'react';
import { ActivityItemProps } from '../../ActivityItem';
export type SectionProps = {
    title: string;
    items: Omit<ActivityItemProps, "onClick">[];
    onClickItem: (id: string) => void;
    onItemVisible?: (id: string) => void;
};
export declare const Section: (({ title, items, onClickItem, onItemVisible, }: SectionProps) => React.JSX.Element) & {
    Skeleton: ({ title, numItems, }: {
        title: string;
        numItems: number;
    }) => React.JSX.Element;
};
