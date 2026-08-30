import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { OverflowList as n } from "../../ui/OverflowList/index.js";
import { Chip as r } from "../OneChip/index.js";
import { ChipCounter as i } from "./ChipCounter.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/F0ChipList/index.tsx
var s = ({ chips: e, max: t = 4, remainingCount: s, layout: c = "compact" }) => {
	if (c === "fill") return /* @__PURE__ */ a(n, {
		items: e,
		renderListItem: (e) => /* @__PURE__ */ a(r, { ...e }),
		renderDropdownItem: () => null,
		forceShowingOverflowIndicator: s !== void 0,
		renderOverflowIndicator: (t) => /* @__PURE__ */ a(i, {
			count: (s ?? 0) + t,
			list: s ? void 0 : e.slice(e.length - t)
		}),
		overflowIndicatorWithPopover: !1,
		className: "flex-1"
	});
	let l = e.slice(0, t), u = e.slice(t), d = s ?? e.length - t, f = d > 0;
	return /* @__PURE__ */ o("div", {
		className: "flex items-center gap-2",
		children: [l.map((e, t) => /* @__PURE__ */ a(r, { ...e }, t)), f && /* @__PURE__ */ a(i, {
			count: d,
			list: s ? void 0 : u
		})]
	});
};
s.displayName = "F0ChipList";
var c = e(t("F0ChipList", s));
//#endregion
export { c as F0ChipList };
