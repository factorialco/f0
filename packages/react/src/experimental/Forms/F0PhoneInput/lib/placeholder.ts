import type { CountryCode as PhoneCountry } from "libphonenumber-js"
import { getExampleNumber } from "libphonenumber-js"
import examples from "libphonenumber-js/examples.mobile.json"

/** National example (`612 34 56 78`) — the trigger chip already shows the dial code */
export const exampleNationalPlaceholder = (
  country: PhoneCountry
): string | undefined => getExampleNumber(country, examples)?.formatNational()

/**
 * International example (`+34 612 34 56 78`) for the country-less state —
 * teaches that the number starts with a dial code, which also selects the country.
 */
export const exampleInternationalPlaceholder = (
  country: PhoneCountry
): string | undefined =>
  getExampleNumber(country, examples)?.formatInternational()
