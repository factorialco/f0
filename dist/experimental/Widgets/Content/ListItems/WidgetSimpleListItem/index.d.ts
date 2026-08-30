import { ComponentProps } from 'react';
import { IconType } from '../../../../../components/F0Icon';
import { F0TagAlert } from '../../../../../components/tags/F0TagAlert';
import { F0TagRaw } from '../../../../../components/tags/F0TagRaw';
export type WidgetSimpleListItemProps<Id extends string | number = string | number> = {
    id: Id;
    title: string;
    icon?: IconType;
    iconClassName?: string;
    rightIcon?: IconType;
    rightIconClassName?: string;
    count?: number;
    alert?: ComponentProps<typeof F0TagAlert>;
    rawTag?: ComponentProps<typeof F0TagRaw>;
    onClick?: (id: Id) => void;
};
export declare function WidgetSimpleListItem({ id, title, alert, rawTag, count, icon, rightIcon, iconClassName, rightIconClassName, onClick, }: WidgetSimpleListItemProps): import("react").JSX.Element;
