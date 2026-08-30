import e from "../../../../icons/app/Suitcase.js";
import { TreeSelector as t } from "./TreeSelector.js";
import { useMemo as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/sds/Home/ClockIn/ClockInControls/ProjectSelector.tsx
var i = (e) => e.map((e) => ({
	id: e.id,
	name: e.name,
	children: e.subprojects?.length ? i(e.subprojects) : void 0
}));
function a({ projects: a, projectId: o, onChangeProjectId: s, label: c, searchPlaceholder: l, required: u = !0, disabled: d }) {
	let f = n(() => i(a), [a]);
	return /* @__PURE__ */ r(t, {
		items: f,
		value: o,
		onChange: s,
		label: c,
		searchPlaceholder: l,
		fieldIcon: e,
		required: u,
		disabled: d
	});
}
//#endregion
export { a as ProjectSelector, i as toProjectTree };
