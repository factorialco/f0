import { DropdownItemObject } from '../../experimental/Navigation/Dropdown/internal.tsx';
export type PrimaryActionItemDefinition = Pick<DropdownItemObject, "label" | "icon" | "description"> & {
    loading?: boolean;
    onClick?: () => void | Promise<void>;
    disabled?: boolean;
    tooltip?: (params: {
        disabled: boolean;
        loading: boolean;
    }) => string | undefined;
};
/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
export type PrimaryActionsDefinitionFn = () => PrimaryActionItemDefinition | PrimaryActionItemDefinition[] | undefined;
/**
 * Get the primaryActionsItems from the primaryActionsDefinition or the actions property
 */
export declare const getPrimaryActions: (primaryActions: PrimaryActionsDefinitionFn | undefined) => PrimaryActionItemDefinition[];
/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
export type SecondaryActionItem = Pick<DropdownItemObject, "label" | "icon" | "description" | "critical"> & {
    enabled?: boolean;
    hideLabelWhenExpanded?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void | Promise<void>;
    tooltip?: (params: {
        disabled: boolean;
        loading: boolean;
    }) => string | undefined;
    /** A count shown to the right of the label, e.g. how many items the action
     * concerns. Ignored while the action is collapsed into the overflow menu. */
    counterValue?: number;
};
export type SecondaryActionGroup = {
    label?: string;
    items: SecondaryActionItem[];
};
export type SecondaryActionsItems = SecondaryActionItem[] | SecondaryActionItem[][] | SecondaryActionGroup[];
export declare const MAX_EXPANDED_ACTIONS = 2;
type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? [...Acc, N][number] : Enumerate<N, [...Acc, Acc["length"]]>;
export type SecondaryActionsDefinition = {
    expanded: Enumerate<typeof MAX_EXPANDED_ACTIONS>;
    actions: () => SecondaryActionsItems | undefined;
} | (() => SecondaryActionsItems | undefined);
/**
 * Get the secondaryActionsItems from the secondaryActionsDefinition or the actions property
 */
export declare const getSecondaryActions: (secondaryActions: SecondaryActionsDefinition | undefined) => SecondaryActionGroup[];
/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @returns An array of filtered actions
 */
export declare const filterActions: (groups: SecondaryActionGroup[]) => SecondaryActionGroup[];
/** Upsell button rendered in the collection toolbar. */
export type UpsellActionDefinition = {
    label: string;
    onClick: () => void | Promise<void>;
    /** Show the upsell icon. Defaults to true. */
    showIcon?: boolean;
    /** Button variant. Defaults to "outlinePromote". */
    variant?: "promote" | "outlinePromote";
    disabled?: boolean;
};
/** Returns the upsell action, or undefined to hide it. */
export type UpsellActionDefinitionFn = () => UpsellActionDefinition | undefined;
export declare const getUpsellAction: (upsellAction: UpsellActionDefinitionFn | undefined) => UpsellActionDefinition | undefined;
export {};
