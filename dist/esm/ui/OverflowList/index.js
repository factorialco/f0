import { cn as e, focusRing as t } from "../../lib/utils.js";
import { Skeleton as n } from "../skeleton.js";
import { Popover as r, PopoverContent as i, PopoverTrigger as a } from "../popover.js";
import { OverflowIndicator as o } from "./OverflowIndicator/index.js";
import { useOverflowCalculation as s } from "./useOverflowCalculation.js";
import { useCallback as c, useMemo as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/ui/OverflowList/index.tsx
var m = function({ items: m, renderListItem: h, renderDropdownItem: g, overflowIndicatorWithPopover: _ = !0, renderOverflowIndicator: v, forceShowingOverflowIndicator: y = !1, className: b = "", gap: x = 8, max: S, min: C = 0, fluidItems: w = !1, itemsWidth: T }) {
	let [E, D] = u(!1), O = c((e) => {
		D(e);
	}, []), { containerRef: k, overflowButtonRef: A, customOverflowIndicatorRef: j, measurementContainerRef: M, visibleItems: N, overflowItems: P, isInitialized: F } = s(m, x, {
		max: S,
		min: C,
		itemsWidth: T
	}), I = l(() => /* @__PURE__ */ f(o, {
		totalItemsCount: m.length,
		isOpen: E,
		count: P.length
	}), [
		m.length,
		E,
		P.length
	]), L = l(() => F ? null : m.map((e, t) => /* @__PURE__ */ f(n, { className: "h-2 w-20 rounded-md" }, `placeholder-${t}`)), [m, F]), R = y || P.length > 0, z = "flex min-w-0 items-center justify-start whitespace-nowrap";
	return /* @__PURE__ */ p("div", {
		ref: k,
		className: e("relative flex items-center", b),
		style: {
			gap: x > 0 ? `${x}px` : void 0,
			marginLeft: x < 0 ? `${-x}px` : void 0
		},
		children: [
			!T && /* @__PURE__ */ f("div", {
				ref: M,
				"aria-hidden": "true",
				className: e("pointer-events-none invisible absolute left-0 top-0 w-max opacity-0", z),
				style: { gap: x > 0 ? `${x}px` : void 0 },
				"data-testid": "overflow-measurement-container",
				children: m.map((e, t) => /* @__PURE__ */ f("div", {
					"data-testid": "overflow-measurement-item",
					style: { marginLeft: x < 0 ? `${x}px` : void 0 },
					children: h(e, t, !1)
				}, `measure-${t}`))
			}),
			/* @__PURE__ */ p("div", {
				className: e(z, w && "[&>*]:min-w-0"),
				style: { gap: x > 0 ? `${x}px` : void 0 },
				"data-testid": "overflow-visible-container",
				children: [F && N.map((e, t) => /* @__PURE__ */ f("div", {
					className: "transition-all duration-150",
					"data-testid": "overflow-visible-item",
					style: { marginLeft: x < 0 ? `${x}px` : void 0 },
					children: h(e, t, !0)
				}, `item-${t}`)), L]
			}),
			R && /* @__PURE__ */ f(d, { children: _ ? /* @__PURE__ */ p(r, {
				open: E,
				onOpenChange: O,
				children: [/* @__PURE__ */ f(a, {
					asChild: !0,
					children: /* @__PURE__ */ f("button", {
						ref: A,
						className: e("inline-flex flex-shrink-0 items-center", t()),
						children: v?.(P.length, E) ?? I
					})
				}), /* @__PURE__ */ f(i, {
					className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
					align: "end",
					children: /* @__PURE__ */ f("div", {
						className: "flex flex-col",
						children: P.map((e, t) => /* @__PURE__ */ f("div", { children: g(e, t) }, `overflow-item-${t}`))
					})
				})]
			}) : /* @__PURE__ */ f("div", {
				ref: j,
				children: v?.(P.length, !1) ?? I
			}) })
		]
	});
};
m.displayName = "OverflowList";
//#endregion
export { m as OverflowList };
