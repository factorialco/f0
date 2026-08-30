import { Dispatch } from 'react';
import { DataAttributes } from '../../../global.types';
export type TabItem = {
    label: string;
    index?: boolean;
    variant?: "default" | "upsell";
    onClick?: () => void;
} & DataAttributes & ({
    href: string;
} | {
    id: string;
});
export interface TabsProps {
    tabs: TabItem[];
    activeTabId?: string;
    setActiveTabId?: Dispatch<string>;
    secondary?: boolean;
    embedded?: boolean;
}
export declare const BaseTabs: React.FC<TabsProps>;
export declare const TabsSkeleton: React.FC<Pick<TabsProps, "secondary">>;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Tabs: import('../../../lib/data-testid').WithDataTestIdReturnType<import('react').FC<TabsProps> & {
    Skeleton: import('react').FC<Pick<TabsProps, "secondary">>;
}>;
