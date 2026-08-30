import { default as React } from 'react';
import { Tag } from './types';
export interface PlainEllipsisProps {
    children: string;
    className?: string;
    disabled?: boolean;
    lines?: number;
    noTooltip?: boolean;
    tag?: Tag;
}
declare const PlainEllipsis: React.ForwardRefExoticComponent<PlainEllipsisProps & React.RefAttributes<HTMLElement>>;
export { PlainEllipsis, PlainEllipsis as OneEllipsis };
