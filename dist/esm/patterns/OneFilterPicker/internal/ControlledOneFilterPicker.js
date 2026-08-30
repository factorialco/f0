import { FilterPickerStateModeContext as e } from "./stateMode.js";
import { OneFilterPicker as t } from "../OneFilterPicker.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/internal/ControlledOneFilterPicker.tsx
function r(r) {
	return /* @__PURE__ */ n(e.Provider, {
		value: "controlled",
		children: /* @__PURE__ */ n(t, { ...r })
	});
}
r.displayName = "ControlledOneFilterPicker";
//#endregion
export { r as ControlledOneFilterPicker };
