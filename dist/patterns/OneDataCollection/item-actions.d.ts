import { DropdownItemObject, DropdownItemSeparator } from '../../experimental/Navigation/Dropdown/internal';
import { RecordType } from '../../hooks/datasource';
export type ActionDefinition = DropdownItemSeparator | (Pick<DropdownItemObject, "label" | "icon" | "description" | "critical" | "disabled" | "disabledTooltip"> & {
    onClick: () => void;
    /**
     * `false` REMOVES the action from the menu (see `filterItemActions`). To
     * instead keep it VISIBLE but greyed-out and non-interactive, leave
     * `enabled` unset and use `disabled` (+ `disabledTooltip` to explain why).
     */
    enabled?: boolean;
    type?: "primary" | "secondary" | "other";
    hideLabel?: boolean;
    hideInMobileDropdown?: boolean;
});
export type ItemActionsDefinition<T extends RecordType> = (item: T) => ActionDefinition[] | undefined;
/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @param item - The item to filter the actions for
 * @returns An array of filtered actions
 */
export declare const filterItemActions: <T extends RecordType>(actions: ItemActionsDefinition<T> | undefined, item: T) => ActionDefinition[];
