import { useL10n as e } from "./l10n-provider.js";
import * as t from "date-fns/locale";
//#region src/lib/providers/l10n/use-date-fns-locale.ts
var n = new Map(Object.values(t).map((e) => [e.code.toLowerCase(), e]));
function r() {
	let r = e().locale.toLowerCase(), i = r.split("-")[0] ?? "";
	return n.get(r) ?? n.get(i) ?? t.enUS;
}
//#endregion
export { r as useDateFnsLocale };
