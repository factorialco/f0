import { ActionBarGroup, ActionBarItem, ActionBarStatus, F0ActionBarRef } from '../../../../components/F0ActionBar';
export type { ActionBarGroup, ActionBarItem, ActionBarStatus, F0ActionBarRef };
interface OneDataCollectionActionBarProps {
    isOpen: boolean;
    primaryActions?: ActionBarItem[] | ActionBarGroup[] | ActionBarGroup;
    secondaryActions?: ActionBarItem[];
    selectedNumber?: number;
    onUnselect?: () => void;
    warningMessage?: string;
    allPagesSelection?: boolean;
    isAllItemsSelected?: boolean;
    totalItems?: number;
    status?: ActionBarStatus;
}
export declare const OneDataCollectionActionBar: import('react').ForwardRefExoticComponent<OneDataCollectionActionBarProps & import('react').RefAttributes<F0ActionBarRef>>;
