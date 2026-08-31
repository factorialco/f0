import { ActionDefinition } from '../../item-actions';
export declare const statusToChecked: <T extends {
    checked: boolean;
    indeterminate: boolean;
    selectedCount?: number;
}>(status: T | undefined) => boolean | "indeterminate";
/**
 * Converts the item actions definition to dropdown items
 * @param actions - The item actions definition to convert
 * @param item - The item to convert the actions for
 * @returns An array of dropdown items
 */
export declare const actionsToDropdownItems: (actions: ActionDefinition[] | undefined) => (import('../../../../experimental/Navigation/Dropdown/internal').DropdownItemSeparator | {
    type: "item";
    label: string;
    description?: string | undefined;
    critical?: boolean | undefined;
    icon?: import('../../../../f0').IconType | undefined;
    disabled?: boolean | undefined;
    disabledTooltip?: string | undefined;
    onClick: () => void;
    enabled?: boolean;
    hideLabel?: boolean;
    hideInMobileDropdown?: boolean;
})[];
