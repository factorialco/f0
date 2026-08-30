import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { CardSelectable as n } from "./CardSelectable.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/CardSelectable/index.tsx
function i(e) {
	let { items: i, disabled: a = !1, label: o, layout: s = "vertical", multiple: c, isToggle: l, grouped: u, compact: d } = e, f = c === !0, p = (t) => {
		if (f) {
			let n = e, r = n.value ?? [], i = r.includes(t) ? r.filter((e) => e !== t) : [...r, t];
			n.onChange?.(i);
		} else {
			let n = e;
			l && n.value === t ? n.onChange?.(void 0) : n.onChange?.(t);
		}
	}, m = (t) => f ? (e.value ?? []).includes(t) : e.value === t, h = l || f ? "group" : "radiogroup";
	return u ? /* @__PURE__ */ r("div", {
		role: h,
		"aria-label": o,
		className: "overflow-hidden rounded-xl border border-solid border-f1-border",
		children: i.map((e, o) => /* @__PURE__ */ r("div", {
			className: t(o !== i.length - 1 && "border-0 border-b border-solid border-f1-border"),
			children: /* @__PURE__ */ r(n, {
				item: e,
				selected: m(e.value),
				disabled: a,
				multiple: f,
				onSelect: () => p(e.value),
				isToggle: l,
				grouped: !0,
				compact: d
			})
		}, String(e.value)))
	}) : /* @__PURE__ */ r("div", {
		role: h,
		"aria-label": o,
		className: t("flex gap-3", s === "vertical" ? "flex-col" : "flex-row"),
		children: i.map((e) => /* @__PURE__ */ r(n, {
			item: e,
			selected: m(e.value),
			disabled: a,
			multiple: f,
			onSelect: () => p(e.value),
			isToggle: l,
			compact: d
		}, String(e.value)))
	});
}
var a = e(i);
//#endregion
export { a as CardSelectableContainer };
