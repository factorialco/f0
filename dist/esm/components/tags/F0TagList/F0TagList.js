import { OverflowList as e } from "../../../ui/OverflowList/index.js";
import { Tag as t } from "../F0Tag/F0Tag.js";
import { TagCounter as n } from "./components/TagCounter.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/tags/F0TagList/F0TagList.tsx
var i = ({ type: i, tags: a, max: o = 4, remainingCount: s }) => {
	let c = a.map((e) => ({
		type: i,
		...e
	}));
	return /* @__PURE__ */ r(e, {
		items: c,
		max: o,
		min: 1,
		fluidItems: !0,
		renderListItem: (e) => /* @__PURE__ */ r(t, { tag: e }),
		renderDropdownItem: () => null,
		forceShowingOverflowIndicator: s !== void 0,
		renderOverflowIndicator: (e) => /* @__PURE__ */ r(n, {
			count: (s ?? 0) + e,
			list: s ? void 0 : c.slice(c.length - e)
		}),
		overflowIndicatorWithPopover: !1,
		className: "min-w-0 flex-1"
	});
};
i.displayName = "F0TagList";
//#endregion
export { i as F0TagList };
