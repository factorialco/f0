import { ComponentProps, HTMLInputTypeAttribute } from 'react';
import { Input as ShadcnInput } from '../../ui/input';
import { InputFieldProps } from '../F0InputField';
export type InputInternalProps = Pick<ComponentProps<typeof ShadcnInput>, "ref" | "id" | "aria-describedby" | "aria-invalid"> & Pick<InputFieldProps<string>, "autoFocus" | "required" | "disabled" | "size" | "onChange" | "value" | "placeholder" | "clearable" | "maxLength" | "label" | "labelIcon" | "icon" | "hideLabel" | "name" | "error" | "status" | "hint" | "autocomplete" | "buttonToggle" | "hideMaxLength" | "loading" | "transparent" | "onBlur" | "readonly"> & {
    /**
     * `"private"` is a non-HTML subtype for sensitive, non-credential data:
     * masked like a password but with no lock icon and with password managers
     * disabled. It never reaches the DOM (mapped to text/password internally).
     */
    type?: Exclude<HTMLInputTypeAttribute, "number"> | "private";
    onPressEnter?: () => void;
};
declare const InputInternal: import('react').ForwardRefExoticComponent<Omit<InputInternalProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export { InputInternal };
