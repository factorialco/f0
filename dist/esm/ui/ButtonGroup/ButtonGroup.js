import { cn as e } from "../../lib/utils.js";
import t from "../../icons/app/Ellipsis.js";
import { F0Button as n } from "../../components/F0Button/F0Button.js";
import { Dropdown as r, MobileDropdown as i } from "../../experimental/Navigation/Dropdown/index.js";
import { useOverflowCalculation as a } from "../OverflowList/useOverflowCalculation.js";
import { F0ButtonDropdown as o } from "../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import { buttonGroupVariants as s } from "./variants.js";
import { useEffect as c, useMemo as l, useRef as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { useMediaQuery as m, useResizeObserver as h } from "usehooks-ts";
//#region src/ui/ButtonGroup/ButtonGroup.tsx
var g = {
	sm: 640,
	md: 768,
	"container-md": 448
}, _ = (e) => "type" in e && e.type === "separator", v = (e) => "type" in e && e.type === "split", y = (e) => !("type" in e), b = (e, t, r) => /* @__PURE__ */ f(n, {
	label: e.label,
	icon: e.icon,
	iconPosition: e.iconPosition,
	variant: e.critical ? "critical" : r,
	size: t,
	disabled: e.disabled,
	loading: e.loading,
	hideLabel: e.hideLabel,
	tooltip: e.tooltip,
	...e.href == null ? { onClick: e.onClick } : {
		href: e.href,
		target: e.target
	}
}, e.id), x = (e, t, n) => {
	let { id: r, type: i, ...a } = e;
	return /* @__PURE__ */ f(o, {
		...a,
		size: t,
		variant: n
	}, r);
}, S = (e, t) => /* @__PURE__ */ f(n, {
	label: e.label,
	variant: "outline",
	size: t,
	disabled: e.disabled,
	href: e.href,
	target: e.target
}, "secondary-link"), C = (e, t) => {
	let n = e.variant ?? "default";
	return v(e) ? x(e, t, n) : b(e, t, n);
};
function w({ primaryAction: t, secondaryActions: n, otherActions: r = [], size: i = "md", align: a = "end", stack: o = "none", fullWidthOnStack: c = !1, reverseOnStack: l = !1, canOverflow: d = !0, className: p }) {
	let _ = u(null), { width: v = 0 } = h({
		ref: _,
		box: "border-box"
	}), y = o === "sm" || o === "md" ? g[o] : g.md, b = m(`(min-width: ${y}px)`, { initializeWithValue: !1 }), x = o === "none" ? !0 : o === "container-md" ? v >= g["container-md"] : b, S = typeof i == "string" ? i : i.base, C = typeof i == "string" ? i : i.md, w = x ? C : S, D = {
		primaryAction: t,
		secondaryItems: Array.isArray(n) ? n : [],
		secondaryLink: n != null && !Array.isArray(n) ? n : void 0,
		otherActions: r,
		size: w,
		align: a,
		canOverflow: d
	};
	return /* @__PURE__ */ f("div", {
		ref: _,
		role: "group",
		className: e(x ? "flex w-full items-center gap-md [&>*:not(:first-child)]:shrink-0" : s({
			align: a,
			stack: o,
			fullWidthOnStack: c,
			reverseOnStack: l
		}), p),
		children: x ? /* @__PURE__ */ f(E, { ...D }, "row") : /* @__PURE__ */ f(T, { ...D }, "stacked")
	});
}
function T({ primaryAction: e, secondaryItems: t, secondaryLink: n, otherActions: r, size: a }) {
	let o = t.filter((e) => !_(e)).map((e) => v(e) ? x(e, a, "outline") : b(e, a, "outline"));
	return /* @__PURE__ */ p(d, { children: [
		r.length > 0 && /* @__PURE__ */ f(i, { items: r }),
		o,
		n && S(n, a),
		e && C(e, a)
	] });
}
function E({ primaryAction: n, secondaryItems: i, secondaryLink: o, otherActions: s, size: u, align: m, canOverflow: h }) {
	let g = l(() => i.filter(y), [i]), { containerRef: w, measurementContainerRef: T, customOverflowIndicatorRef: E, visibleItems: O, overflowItems: k, isInitialized: A } = a(g, 8);
	c(() => {
		T.current?.setAttribute("inert", "");
	}, [T]);
	let j = h && A ? O : g, M = h && A ? k : [], N = new Set(j.map((e) => e.id)), P = n ? C(n, u) : null, F = i.filter(v), I = i[i.length - 1], L = I != null && _(I) && (F.length > 0 || P != null), R = [];
	i.forEach((e, t) => {
		if (!v(e)) {
			if (_(e)) {
				R.push({
					kind: "sep",
					key: `sep-${t}`
				});
				return;
			}
			N.has(e.id) && R.push({
				kind: "node",
				node: b(e, u, "outline")
			});
		}
	});
	let z = R.filter((e, t) => e.kind === "node" || R[t - 1]?.kind === "node" && R[t + 1]?.kind === "node"), B = [
		...M.map((e) => ({
			label: e.label,
			icon: e.icon,
			onClick: e.onClick,
			href: e.href,
			critical: e.critical
		})),
		...M.length > 0 && s.length > 0 ? [{ type: "separator" }] : [],
		...s
	];
	return /* @__PURE__ */ p(d, { children: [
		/* @__PURE__ */ p("div", {
			ref: w,
			className: e("relative flex flex-1 items-center gap-md [&>*]:shrink-0", h && "min-w-0", m === "end" && "justify-end"),
			children: [
				h && /* @__PURE__ */ f("div", {
					ref: T,
					"aria-hidden": "true",
					className: "pointer-events-none invisible absolute left-0 top-0 flex items-center gap-md whitespace-nowrap",
					children: g.map((e) => b(e, u, "outline"))
				}),
				B.length > 0 && /* @__PURE__ */ f("div", {
					ref: E,
					children: /* @__PURE__ */ f(r, {
						items: B,
						icon: t,
						size: u
					})
				}),
				z.map((e) => e.kind === "sep" ? /* @__PURE__ */ f(D, {}, e.key) : e.node),
				o && S(o, u)
			]
		}),
		F.map((e) => x(e, u, "outline")),
		L && /* @__PURE__ */ f(D, {}),
		P
	] });
}
function D() {
	return /* @__PURE__ */ f("div", {
		role: "separator",
		"aria-orientation": "vertical",
		className: "h-4 w-px self-center bg-f1-border-secondary"
	});
}
//#endregion
export { w as ButtonGroup, D as ButtonGroupSeparator };
