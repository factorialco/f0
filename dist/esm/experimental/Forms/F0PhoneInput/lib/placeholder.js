import { getExampleNumber as e } from "libphonenumber-js";
import t from "libphonenumber-js/examples.mobile.json";
//#region src/experimental/Forms/F0PhoneInput/lib/placeholder.ts
var n = (n) => e(n, t)?.formatNational(), r = (n) => e(n, t)?.formatInternational();
//#endregion
export { r as exampleInternationalPlaceholder, n as exampleNationalPlaceholder };
