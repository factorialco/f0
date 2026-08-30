import { WidgetSimpleListItemProps } from '../../ListItems/WidgetSimpleListItem';
type Props<Id extends string | number = string | number> = {
    items: Omit<WidgetSimpleListItemProps<Id>, "onClick">[];
    minSize?: number;
    gap?: number;
    onClickItem?: (id: Id) => void;
    showAllItems?: boolean;
};
export type WidgetSimpleListProps = Props;
export declare function WidgetSimpleList({ items, gap, minSize, onClickItem, showAllItems, }: Props): import("react").JSX.Element;
export {};
