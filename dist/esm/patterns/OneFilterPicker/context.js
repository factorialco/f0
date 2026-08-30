import { createContext as e } from "react";
//#region src/patterns/OneFilterPicker/context.ts
var t = e({
	filters: {},
	value: {},
	presets: [],
	presetsLoading: !1,
	removeFilterValue: () => {},
	setFiltersValue: () => {},
	isFiltersOpen: !1,
	setIsFiltersOpen: () => {},
	emitFilterChange: () => {},
	emitPresetClick: () => {},
	mode: "default",
	displayCounter: !1,
	resultCount: void 0,
	selectedPresetId: void 0,
	onSelectPreset: void 0,
	editablePresetIds: void 0,
	onEditPreset: void 0,
	presetActionState: "none",
	onPresetAction: void 0
});
//#endregion
export { t as FiltersContext };
