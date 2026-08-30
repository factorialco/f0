import { NestedVariant } from '../../../../../../hooks/datasource/types/nested.typings';
interface Props {
    nestedVariant: NestedVariant;
    withHasMore: boolean;
    withAddRowActions: boolean;
    isSticky?: boolean;
}
export declare const useCalculateConectorHeight: ({ nestedVariant, withHasMore, withAddRowActions, isSticky, }: Props) => {
    setFirstChildRef: (element: HTMLTableRowElement | null) => void;
    setLastChildRef: (element: HTMLTableRowElement | null) => void;
    calculatedHeight: number;
};
export {};
