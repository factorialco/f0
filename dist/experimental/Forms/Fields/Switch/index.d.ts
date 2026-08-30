import { DataAttributes } from '../../../../global.types';
interface SwitchProps extends DataAttributes {
    /**
     * The title of the switch
     */
    title?: string;
    /**
     * The id of the switch
     */
    id?: string;
    /**
     * The checked state of the switch
     * @default false
     */
    checked?: boolean;
    /**
     * The callback function that is called when the switch is toggled
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Whether the switch is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The value of the switch
     */
    value?: string;
    /**
     * Whether to hide the label
     * @default false
     */
    hideLabel?: boolean;
    /**
     * Whether the switch is only presentational, so it does not have functionality
     * @default false
     */
    presentational?: boolean;
    /**
     * Whether the switch is required (must be true)
     * @default false
     */
    required?: boolean;
}
declare function _Switch({ title, onCheckedChange, id, disabled, checked, value, hideLabel, presentational, required, ...rest }: SwitchProps): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Switch: typeof _Switch;
export {};
