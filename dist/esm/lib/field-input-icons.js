import e from "../icons/app/Calendar.js";
import t from "../icons/app/Clock.js";
import n from "../icons/app/Envelope.js";
import r from "../icons/app/Link.js";
//#region src/lib/field-input-icons.ts
var i = {
	url: r,
	email: n,
	time: t,
	date: e,
	datetime: e
};
function a(e) {
	if (e) return i[e];
}
//#endregion
export { i as FIELD_INPUT_ICONS, a as getFieldInputIcon };
