import { WithDataTestIdProps } from '../../lib/data-testid';
import { DatePickerPopupProps } from '../../ui/DatePickerPopup/DatePickerPopup';
export interface OneDatePickerProps extends Omit<DatePickerPopupProps, "children">, WithDataTestIdProps {
    hideNavigation?: boolean;
    hideGoToCurrent?: boolean;
}
declare function _OneDateNavigator({ onSelect, defaultValue, presets, granularities, hideNavigation, hideGoToCurrent, compareTo, defaultCompareTo, onCompareToChange, value, dataTestId, periods, ...props }: OneDatePickerProps): import("react").JSX.Element;
export declare const OneDateNavigator: typeof _OneDateNavigator;
export {};
