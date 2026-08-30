import { openFormDialog as e } from "../F0Form/openFormDialog.js";
import { F0Form as t } from "../F0Form/F0Form.js";
import { openFormWizard as n } from "../F0WizardForm/openFormWizard.js";
//#region src/patterns/forms/index.ts
function r(r) {
	let { mode: i, ...a } = r;
	return i === "wizard" ? n(a) : e(a, t);
}
var i = { open: r };
//#endregion
export { i as forms };
