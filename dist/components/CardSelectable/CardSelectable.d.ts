import { ReactElement } from 'react';
import { WithDataTestIdProps } from '../../lib/data-testid';
import { CardSelectableItem, CardSelectableValue } from './types';
interface CardSelectableProps<T extends CardSelectableValue> {
    item: CardSelectableItem<T>;
    selected: boolean;
    disabled: boolean;
    multiple: boolean;
    onSelect: () => void;
    /** When true, shows a toggle/switch indicator instead of checkbox/radio */
    isToggle?: boolean;
    /** When true, renders without individual card borders (for grouped layout) */
    grouped?: boolean;
    /** When true, uses 12px padding instead of 16px (standalone cards only) */
    compact?: boolean;
}
/**
 * Generic component type so consumers can use <F0Select<T, R> />.
 * Preserves dataTestId and CardSelectable
 */
type CardSelectableGeneric = <T extends CardSelectableValue>(props: CardSelectableProps<T> & WithDataTestIdProps) => ReactElement | null;
export declare const CardSelectable: CardSelectableGeneric;
export {};
