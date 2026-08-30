import { DropdownItem, DropdownItemSeparator } from '../../../../../experimental/Navigation/Dropdown/internal';
import { ActionDefinition } from '../../../item-actions';
type ItemActionsRowProps = {
    className?: string;
    primaryItemActions: Exclude<ActionDefinition, DropdownItemSeparator>[];
    dropdownItemActions: DropdownItem[];
    handleDropDownOpenChange: (open: boolean) => void;
};
export declare const ItemActionsRow: ({ className, primaryItemActions, dropdownItemActions, handleDropDownOpenChange, }: ItemActionsRowProps) => import("react").JSX.Element;
export {};
