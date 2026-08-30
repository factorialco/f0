import { TextareaHTMLAttributes } from 'react';
import { InputFieldProps } from '../components/F0InputField';
export type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value" | "onFocus" | "onBlur"> & {
    value?: string;
    /** Maximum height in pixels. When set, the textarea scrolls beyond this height instead of growing. */
    maxHeight?: number;
} & Pick<InputFieldProps<string>, "label" | "labelIcon" | "icon" | "hideLabel" | "maxLength" | "clearable" | "placeholder" | "onChange" | "value" | "onClear" | "onFocus" | "onBlur" | "error" | "status" | "hint" | "onKeyDown" | "size" | "loading" | "required">;
declare const Textarea: import('react').ForwardRefExoticComponent<Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "onFocus" | "onBlur"> & {
    value?: string;
    /** Maximum height in pixels. When set, the textarea scrolls beyond this height instead of growing. */
    maxHeight?: number;
} & Pick<InputFieldProps<string>, "label" | "value" | "onChange" | "size" | "icon" | "onFocus" | "onBlur" | "onKeyDown" | "status" | "loading" | "maxLength" | "placeholder" | "required" | "error" | "hideLabel" | "hint" | "labelIcon" | "clearable" | "onClear"> & import('react').RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
