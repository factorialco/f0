import { DataAttributes } from '../../global.types';
interface CheckboxProps extends DataAttributes {
    /**
     * The title of the checkbox
     */
    title?: string;
    /**
     * The id of the checkbox
     */
    id?: string;
    /**
     * The checked state of the checkbox
     * @default false
     */
    checked?: boolean;
    /**
     * Whether the checkbox is indeterminate
     * @default false
     */
    indeterminate?: boolean;
    /**
     * The callback function that is called when the checkbox is checked
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Whether the checkbox is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The value of the checkbox
     */
    value?: string;
    /**
     * Whether to hide the label
     * @default false
     */
    hideLabel?: boolean;
    /**
     * Whether the checkbox is only presentational, so it does not have functionality
     * @default false
     */
    presentational?: boolean;
    /**
     * Whether the checkbox should stop event propagation
     * @default false
     */
    stopPropagation?: boolean;
    /**
     * The name of the checkbox
     */
    name?: string;
    /**
     * Whether the checkbox is required
     * @default false
     */
    required?: boolean;
}
declare function _F0Checkbox({ title, onCheckedChange, id, disabled, indeterminate, checked, value, hideLabel, presentational, stopPropagation, name, required, ...rest }: CheckboxProps): import("react").JSX.Element;
export declare const F0Checkbox: import('../../lib/data-testid').WithDataTestIdReturnType<typeof _F0Checkbox>;
export {};
