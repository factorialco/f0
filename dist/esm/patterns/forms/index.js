import { openFormDialog as e } from "../F0Form/openFormDialog.js";
import { openFormWizard as t } from "../F0WizardForm/openFormWizard.js";
//#region src/patterns/forms/index.ts
function n(n) {
	let { mode: r, ...i } = n;
	return r === "wizard" ? t(i) : e(i);
}
var r = { open: n };
//#endregion
export { r as forms };
