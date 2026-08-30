import { F0SelectItemObject } from '../types';
export type SelectAllProps = {
    selectedCount: number | Promise<number>;
    value: boolean;
    indeterminate: boolean;
    onChange: (checked: boolean) => void;
    hideCheckbox?: boolean;
    items?: F0SelectItemObject<string>[];
    paddingTop?: boolean;
};
export declare const SelectAll: ({ selectedCount, indeterminate, value, onChange, hideCheckbox, items, paddingTop, }: SelectAllProps) => import("react").JSX.Element;
