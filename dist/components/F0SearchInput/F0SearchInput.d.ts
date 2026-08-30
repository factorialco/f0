import { InputFieldProps } from '../F0InputField';
export type F0SearchInputProps = {
    value?: string;
    threshold?: number;
    debounceTime?: number;
    autoFocus?: boolean;
    /**
     * Defaults to `-1`, which is right for the search box of a list that is
     * already reachable some other way. A search box that IS the way in — a
     * combobox — has to be tabbable, or focus can leave it and never come back.
     */
    tabIndex?: number;
} & Pick<InputFieldProps<string>, "size" | "loading" | "clearable" | "placeholder" | "disabled" | "onBlur" | "onFocus" | "onChange" | "name" | "role" | "onKeyDown" | "aria-controls" | "aria-expanded" | "aria-activedescendant" | "aria-autocomplete">;
declare const F0SearchInput: import('react').ForwardRefExoticComponent<{
    value?: string;
    threshold?: number;
    debounceTime?: number;
    autoFocus?: boolean;
    /**
     * Defaults to `-1`, which is right for the search box of a list that is
     * already reachable some other way. A search box that IS the way in — a
     * combobox — has to be tabbable, or focus can leave it and never come back.
     */
    tabIndex?: number;
} & Pick<InputFieldProps<string>, "onChange" | "name" | "size" | "role" | "aria-activedescendant" | "aria-autocomplete" | "aria-controls" | "aria-expanded" | "onFocus" | "onBlur" | "onKeyDown" | "loading" | "disabled" | "placeholder" | "clearable"> & import('react').RefAttributes<HTMLInputElement>>;
export { F0SearchInput };
