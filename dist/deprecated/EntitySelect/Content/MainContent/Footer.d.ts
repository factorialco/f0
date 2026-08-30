import { Action } from '../../../../components/F0Select/components/SelectBottomActions';
interface Props {
    actions?: Action[];
    selectAllLabel?: string;
    clearLabel?: string;
    disabled?: boolean;
    allVisibleSelected?: boolean;
    anyVisibleSelected?: boolean;
    loading?: boolean;
    singleSelector?: boolean;
    onSelectAll?: () => void;
    onClear?: () => void;
    totalFilteredEntities?: number;
}
export declare const Footer: ({ actions, selectAllLabel, clearLabel, disabled, allVisibleSelected, anyVisibleSelected, loading, singleSelector, onSelectAll, onClear, }: Props) => import("react").JSX.Element | null;
export {};
