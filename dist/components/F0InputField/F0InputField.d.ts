import { AriaAttributes, AutoFill } from 'react';
import { AvatarVariant } from '../avatars/F0Avatar/types';
import { IconType } from '../F0Icon';
import { InputFieldStatus } from './types';
export declare const INPUTFIELD_SIZES: readonly ["sm", "md"];
export type InputFieldSize = (typeof INPUTFIELD_SIZES)[number];
/**
 * Design system primitive. Do NOT use in product code.
 *
 * `F0InputField` is the shared chrome (label, status, icon, append, clear,
 * loading, focus/hover/disabled styles, a11y wiring) used by every writable
 * F0 input. It is intentionally not exported from `@factorialco/f0-react`.
 *
 * Product code must use the dedicated `F0*Input` components instead:
 *   - F0TextInput, F0NumberInput, F0SearchInput, F0TextAreaInput,
 *     F0DurationInput, F0DatePicker, F0Select, ...
 *
 * Use `F0InputField` only when you are adding a new input type to the design
 * system itself (e.g. F0CurrencyInput, F0PhoneInput, F0PercentageInput).
 */
export type InputFieldProps<T> = {
    id?: string;
    autoFocus?: boolean;
    label: string;
    placeholder?: string;
    labelIcon?: IconType;
    hideLabel?: boolean;
    hidePlaceholder?: boolean;
    name?: string;
    onClickPlaceholder?: () => void;
    onClickChildren?: () => void;
    onClickContent?: () => void;
    value?: T | undefined;
    onChange?: (value: T) => void;
    size?: InputFieldSize;
    error?: string | boolean;
    status?: InputFieldStatus;
    hint?: string;
    disabled?: boolean;
    className?: string;
    required?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    role?: string;
    autocomplete?: AutoFill;
    inputRef?: React.Ref<unknown>;
    "aria-controls"?: AriaAttributes["aria-controls"];
    "aria-expanded"?: AriaAttributes["aria-expanded"];
    /** The two remaining pieces of the combobox contract. Without
     * `aria-activedescendant` a field that drives a list it doesn't contain can
     * never announce the active option: focus stays in the input while the
     * selection moves elsewhere, so a screen reader hears nothing. */
    "aria-activedescendant"?: AriaAttributes["aria-activedescendant"];
    "aria-autocomplete"?: AriaAttributes["aria-autocomplete"];
    onClear?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    canGrow?: boolean;
    children: React.ReactNode & {
        onFocus?: () => void;
        onBlur?: () => void;
        onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
        onChange?: (value: T | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        value?: T;
    };
    icon?: IconType;
    isEmpty?: (value: T | undefined) => boolean;
    emptyValue?: T;
    maxLength?: number;
    hideMaxLength?: boolean;
    append?: React.ReactNode;
    appendTag?: string;
    lengthProvider?: (value: T | undefined) => number;
    loading?: boolean;
    avatar?: AvatarVariant;
    loadingIndicator?: {
        /**
         * If true, the loading spinner will be displayed over the content without affecting the layout
         */
        asOverlay?: boolean;
        /**
         * The offset of the loading spinner from the content
         */
        offset?: number;
    };
    /**
     * Renders a button toggle inside the input field
     */
    buttonToggle?: {
        label: string | [string, string];
        icon: IconType | [IconType, IconType];
        selected: boolean;
        disabled?: boolean;
        onChange: (selected: boolean) => void;
    };
    transparent?: boolean;
};
declare const F0InputField: import('react').ForwardRefExoticComponent<InputFieldProps<string> & import('react').RefAttributes<HTMLDivElement>>;
export { F0InputField };
