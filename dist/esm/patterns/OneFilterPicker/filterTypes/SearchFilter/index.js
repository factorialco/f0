import e from "../../../../icons/app/AlertCircle.js";
import { SearchFilter as t } from "./SearchFilter.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/SearchFilter/index.tsx
var r = {
	emptyValue: "",
	defaultOptions: { strictToggle: !1 },
	render: (e) => /* @__PURE__ */ n(t, { ...e }),
	isEmpty: (e) => typeof e == "object" && "value" in e ? e.value?.trim() === "" : (e ?? "").trim() === "",
	chipLabel: (t) => typeof t == "object" && "value" in t ? {
		label: t.value,
		icon: t.strict ? e : void 0,
		avatar: void 0
	} : t ?? ""
};
//#endregion
export { r as default, r as searchFilter };
