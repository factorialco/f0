import { CountryCode as PhoneCountry } from 'libphonenumber-js';
import { PhoneInputSize } from '../types';
/**
 * Option shape react-phone-number-input passes to its `countrySelectComponent`
 */
export type CountrySelectOption = {
    value?: PhoneCountry;
    label: string;
    divider?: boolean;
};
type CountrySelectProps = {
    value?: PhoneCountry;
    options: CountrySelectOption[];
    onChange: (value?: PhoneCountry) => void;
    disabled?: boolean;
    readOnly?: boolean;
    size: PhoneInputSize;
    /**
     * Exposes `onChange` (react-phone-number-input's internal country setter)
     * to F0PhoneInput, which has no other handle on the library's country state
     * — used to auto-select the main country of a shared dial code.
     */
    selectCountryRef?: React.MutableRefObject<((value?: PhoneCountry) => void) | null>;
};
export declare const CountrySelect: ({ value, options, onChange, disabled, readOnly, size, selectCountryRef, }: CountrySelectProps) => import("react").JSX.Element;
export {};
