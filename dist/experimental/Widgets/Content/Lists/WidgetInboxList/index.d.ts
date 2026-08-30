import { ComponentProps } from 'react';
import { VerticalOverflowList } from '../../../../../ui/VerticalOverflowList';
import { WidgetInboxListItemProps } from '../../ListItems/WidgetInboxListItem';
type Props<Id extends string | number = string | number> = {
    items: Omit<WidgetInboxListItemProps<Id>, "onClick">[];
    minSize?: number;
    onClickItem?: (id: Id) => void;
    showAllItems?: boolean;
} & Pick<ComponentProps<typeof VerticalOverflowList>, "onVisibleItemsChange">;
export type WidgetInboxListProps = Props;
export declare function WidgetInboxList({ items, minSize, onClickItem, showAllItems, onVisibleItemsChange, }: Props): import("react").JSX.Element;
export {};
