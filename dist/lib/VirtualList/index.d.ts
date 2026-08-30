import { VirtualItem } from '@tanstack/react-virtual';
import { default as React } from 'react';
type VirtualListProps = {
    height: number;
    itemCount: number;
    itemSize: number | ((index: number) => number);
    renderer: (item: VirtualItem) => JSX.Element;
    className?: string;
};
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const VirtualList: React.ForwardRefExoticComponent<VirtualListProps & React.RefAttributes<HTMLDivElement>>;
export {};
