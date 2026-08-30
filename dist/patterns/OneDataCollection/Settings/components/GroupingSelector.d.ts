import { F0SelectStatic as F0SelectComponent } from '../../../../components/F0Select/F0Select';
import { GroupingDefinition, GroupingState, RecordType } from '../../../../hooks/datasource';
type GroupingSelectorProps<R extends RecordType, Grouping extends GroupingDefinition<R>> = {
    SelectComponent: typeof F0SelectComponent;
    grouping?: Grouping;
    currentGrouping?: GroupingState<R, Grouping>;
    onGroupingChange?: (groupingState: GroupingState<R, Grouping>) => void;
    hideLabel?: boolean;
};
export declare const GroupingSelector: <R extends RecordType, Grouping extends GroupingDefinition<R>>({ SelectComponent, grouping, currentGrouping, onGroupingChange, hideLabel, }: GroupingSelectorProps<R, Grouping>) => import("react").JSX.Element | null;
export {};
