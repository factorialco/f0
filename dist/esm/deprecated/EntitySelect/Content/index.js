import { MainContent as e } from "./MainContent/index.js";
import { SecondaryContent as t } from "./SecondaryContent/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/deprecated/EntitySelect/Content/index.tsx
var i = 500, a = 520, o = 210, s = ({ groupView: s, onRemove: c, onSubItemRemove: l, selectedEntities: u, selectedLabel: d, width: f, singleSelector: p = !1, loading: m = !1, hiddenAvatar: h = !1, actions: g, onCreate: _, onCreateLabel: v, ...y }) => {
	let b = !m && !p && !((f ?? a) < i), x = f ?? a, S = b ? x - o : x;
	return /* @__PURE__ */ r("div", {
		className: "flex overflow-hidden",
		style: {
			height: p && (!g || g.length === 0) ? "435px" : "473px",
			width: x
		},
		children: [/* @__PURE__ */ n("div", {
			className: "min-h-0 flex-1",
			style: { width: S + 1 + "px" },
			children: /* @__PURE__ */ n(e, {
				...y,
				groupView: s,
				onRemove: c,
				onSubItemRemove: l,
				selectedEntities: u,
				singleSelector: p,
				loading: m,
				disabled: y.disabled,
				hiddenAvatar: h,
				actions: g,
				onCreate: _,
				onCreateLabel: v
			})
		}), b && /* @__PURE__ */ n("div", {
			className: "min-h-0",
			style: { width: "210px" },
			children: /* @__PURE__ */ n(t, {
				groupView: s,
				onRemove: c,
				onSubItemRemove: l,
				selectedEntities: u ?? [],
				selectedLabel: d,
				disabled: y.disabled,
				hiddenAvatar: h
			})
		})]
	});
};
//#endregion
export { s as Content };
