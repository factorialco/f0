import { ReactNode } from 'react';
interface TwoColumnsItemType {
    title: string;
    info: string | ReactNode;
}
interface TwoColumnsListType {
    title?: string;
    titleValue?: string;
    titleTooltip?: {
        label?: string;
        description: string;
    };
    list: TwoColumnsItemType[];
}
export declare const TwoColumnsList: import('react').ForwardRefExoticComponent<TwoColumnsListType & import('react').RefAttributes<HTMLDivElement>>;
export {};
