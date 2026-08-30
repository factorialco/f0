"use client";
import { cn as e, focusRing as t } from "../../lib/utils.js";
import { HoverCard as n, HoverCardContent as r, HoverCardTrigger as i } from "../../ui/hover-card.js";
import { F0TableOfContent as a } from "../../experimental/Navigation/F0TableOfContent/index.js";
import { CollapsedBars as o } from "./components/CollapsedBars.js";
import { useDeferredClose as s } from "./useDeferredClose.js";
import { useCallback as c, useRef as l, useState as u } from "react";
import { cva as d } from "cva";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/F0TableOfContentPopover/F0TableOfContentPopover.tsx
var m = 300, h = 0, g = d({
	base: "w-auto overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-0 shadow-lg",
	variants: { size: {
		sm: "max-h-[240px]",
		md: "max-h-[400px]",
		lg: "max-h-[600px]"
	} },
	defaultVariants: { size: "md" }
});
function _({ title: d, items: _, className: v, activeItem: y, collapsible: b = !1, sortable: x, onReorder: S, showChildrenCounter: C = !1, barsAlign: w = "left", size: T = "md", variant: E = "light", portalContainer: D }) {
	let [O, k] = u(!1), A = l(!1), j = l(null), { deferClose: M } = s(j, () => k(!1)), N = (e) => {
		!e && M() || (e && !O && (A.current = !0), k(e));
	}, P = c((e) => {
		j.current = e, !(!e || !A.current) && (A.current = !1, requestAnimationFrame(() => {
			e.querySelector("[data-active]")?.scrollIntoView({
				block: "center",
				behavior: "smooth"
			});
		}));
	}, []);
	return /* @__PURE__ */ p(n, {
		open: O,
		onOpenChange: N,
		openDelay: h,
		closeDelay: m,
		children: [/* @__PURE__ */ f(i, {
			asChild: !0,
			children: /* @__PURE__ */ f("button", {
				className: e(t(), "flex cursor-pointer items-center rounded-md px-1.5 py-1", v),
				"aria-label": d ?? "Menu",
				children: /* @__PURE__ */ f(o, {
					items: _,
					activeItem: y,
					align: w,
					variant: E
				})
			})
		}), /* @__PURE__ */ f(r, {
			ref: P,
			side: w === "left" ? "right" : "left",
			align: "center",
			sideOffset: -28,
			container: D,
			className: e(g({ size: T }), !d && "pt-2", "scrollbar-macos"),
			children: /* @__PURE__ */ f(a, {
				title: d,
				items: _,
				activeItem: y,
				collapsible: b,
				sortable: x,
				onReorder: S,
				hideChildrenCounter: !C,
				scrollable: !1
			})
		})]
	});
}
//#endregion
export { _ as F0TableOfContentPopover };
