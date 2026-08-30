import { granularityDefinitions as e } from "../../components/OneCalendar/granularities/index.js";
//#region src/ui/DatePickerPopup/compareTo.ts
var t = (t, n, r) => {
	let i = e[r];
	return i ? i.add(t, n) : {
		from: /* @__PURE__ */ new Date(),
		to: /* @__PURE__ */ new Date()
	};
};
//#endregion
export { t as getCompareToValue };
