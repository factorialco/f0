import { CardSelectableContainer as e } from "../../../../components/CardSelectable/index.js";
import { CardSelectDepsContext as t } from "./CardSelectDepsContext.js";
import { useContext as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/cardSelect/CardSelectFieldRenderer.tsx
function i({ field: i, formField: a }) {
	let o = n(t), s = i.options.map((e) => ({
		value: e.value,
		title: e.label,
		description: e.description,
		selectedContent: o?.get(e.value)
	}));
	return /* @__PURE__ */ r(e, {
		grouped: i.grouped !== !1,
		items: s,
		value: a.value,
		onChange: (e) => a.onChange(e),
		label: i.label,
		disabled: i.disabled
	});
}
//#endregion
export { i as CardSelectFieldRenderer };
