import { CountryCode as PhoneCountry } from 'libphonenumber-js';
import { CountryCode } from '../../../../lib/countries';
import { F0PhoneInputChangeMeta, F0PhoneInputValue } from '../types';
export declare const toPhoneCountry: (code: CountryCode | undefined) => PhoneCountry | undefined;
export declare const toCountryCode: (country: PhoneCountry | undefined) => CountryCode | undefined;
export declare const dialCodeFor: (country: PhoneCountry) => string;
export declare const countryForDialCode: (dialCode: string) => PhoneCountry | undefined;
/**
 * Main country for a partial international number whose exact territory is
 * not derivable yet ("+44" or "+4479" → GB). Calling codes are prefix-free,
 * so the first prefix found in the metadata is the number's calling code.
 */
export declare const countryForPartialE164: (partialE164: string, allowed?: PhoneCountry[]) => PhoneCountry | undefined;
/**
 * Normalizes any stored `{ prefix, number }` shape — including legacy ones
 * where `number` holds a full international number, or where the national
 * number still carries a trunk prefix — into the E.164-ish string
 * react-phone-number-input works with.
 */
export declare const valueToE164: (value: F0PhoneInputValue | undefined, fallbackCountry?: PhoneCountry) => string | undefined;
/**
 * Converts the internal E.164-ish string back to the structured pair.
 * Partial numbers fall back to the currently selected country's dial code;
 * numbers with an unknown dial code are passed through untouched.
 * A bare dial code with no national digits is an empty value — the country
 * selection lives in the component's country state, not in the pair.
 */
export declare const e164ToValue: (e164: string | undefined, country: PhoneCountry | undefined) => F0PhoneInputValue | undefined;
/**
 * Standalone validators for the structured pair, matching the `isValid` /
 * `isPossible` flags of the change meta: "valid" checks the country's number
 * patterns, "possible" only checks the length. For form schemas.
 * `fallbackCountry` must mirror the input's `defaultCountry` so prefix-less
 * legacy values validate exactly as the input renders them.
 */
export declare const isValidPhoneValue: (value: F0PhoneInputValue | undefined, fallbackCountry?: CountryCode) => boolean;
export declare const isPossiblePhoneValue: (value: F0PhoneInputValue | undefined, fallbackCountry?: CountryCode) => boolean;
export declare const buildMeta: (e164: string | undefined, country: PhoneCountry | undefined) => F0PhoneInputChangeMeta;
/**
 * Country to pre-select for an incoming value: the number's own country when
 * derivable, the stored prefix's country otherwise.
 */
export declare const countryForValue: (value: F0PhoneInputValue | undefined) => PhoneCountry | undefined;
