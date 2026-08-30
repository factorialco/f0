import { ControlledOneFilterPicker as e } from "../../../OneFilterPicker/internal/ControlledOneFilterPicker.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/FilterBar/FilterBar.tsx
function n({ filters: n, value: r, presets: i, presetsLoading: a, onChange: o }) {
	return !n && !i ? null : /* @__PURE__ */ t(e, {
		filters: n,
		value: r,
		presets: i,
		presetsLoading: a,
		onChange: o,
		displayCounter: !0
	});
}
//#endregion
export { n as FilterBar };
