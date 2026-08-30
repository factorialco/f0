import { ButtonDropdownGroup, ButtonDropdownItem, ButtonDropdownSize, ButtonDropdownVariant, F0ButtonDropdownProps } from './types.ts';
export type F0DropdownButtonProps<T = string> = {
    size?: ButtonDropdownSize;
    items: ButtonDropdownItem<T>[] | ButtonDropdownGroup<T>[] | ButtonDropdownGroup<T>;
    variant?: ButtonDropdownVariant;
    value?: T;
    disabled?: boolean;
    loading?: boolean;
    onClick: (value: T, item: ButtonDropdownItem<T>) => void;
};
export declare const F0ButtonDropdown: import('../../lib/data-testid/index.tsx').WithDataTestIdReturnType<(props: F0ButtonDropdownProps) => import("react").JSX.Element>;
