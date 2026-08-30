import { SelectPrimitiveProps } from './radix-ui/select.tsx';
type SelectOption = {
    value: string;
    label: string;
};
export type SelectProps<T extends string = string> = SelectPrimitiveProps<T> & {
    as?: "list";
    placeholder?: string;
    options?: SelectOption[];
};
/**
 * Select Root component
 */
declare const Select: {
    <T extends string = string>(props: SelectProps<T>): import("react").JSX.Element;
    displayName: string;
};
export { Select };
