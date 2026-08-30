import { DropdownItem } from '../../../../experimental/Navigation/Dropdown';
import { BlockActionGroup, BlockProps } from './types';
/**
 * Converts the item actions definition to dropdown items
 * @param actions - The item actions definition to convert
 * @param item - The item to convert the actions for
 * @returns An array of dropdown items
 */
export declare const actionsToLayoutBlockActionItems: (actions: BlockActionGroup[] | undefined) => DropdownItem[];
export declare const Block: import('react').ForwardRefExoticComponent<BlockProps & import('react').RefAttributes<HTMLDivElement>>;
