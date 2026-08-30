import { CountryCode as PhoneCountry } from 'libphonenumber-js';
/** National example (`612 34 56 78`) — the trigger chip already shows the dial code */
export declare const exampleNationalPlaceholder: (country: PhoneCountry) => string | undefined;
/**
 * International example (`+34 612 34 56 78`) for the country-less state —
 * teaches that the number starts with a dial code, which also selects the country.
 */
export declare const exampleInternationalPlaceholder: (country: PhoneCountry) => string | undefined;
