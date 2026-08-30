import { SortingsDefinition, SortingsState } from '../../../../hooks/datasource/types/sortings.typings';
export declare const EmptySortingValue = "__no-sorting__";
export declare const SortingSelector: <Sortings extends SortingsDefinition>({ currentSortings, sortings, onChange, }: {
    sortings: SortingsDefinition;
    currentSortings: SortingsState<Sortings>;
    onChange: (sorting: SortingsState<Sortings>) => void;
}) => import("react").JSX.Element;
