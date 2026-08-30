import { experimentalComponent as e } from "./lib/experimental.js";
import { selectSizes as t, selectVariants as n } from "./components/F0Select/types.js";
import { F0SelectInternal as r } from "./components/F0Select/F0Select.js";
import { OneFilterPicker as i } from "./patterns/OneFilterPicker/OneFilterPicker.js";
import { ActiveFiltersChips as a } from "./components/F0Select/components/ActiveFiltersChips.js";
import { forwardRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/components/F0Select/index.tsx
var c = o(function(e, t) {
	return /* @__PURE__ */ s(r, {
		...e,
		ref: t,
		OneFilterPickerComponent: i,
		ActiveFiltersChipsComponent: a
	});
});
c.displayName = "ConfiguredF0Select";
var l = e("F0Select", c);
//#endregion
export { l as F0Select, t as selectSizes, n as selectVariants };
