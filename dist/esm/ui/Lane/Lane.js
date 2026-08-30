import { cn as e } from "../../lib/utils.js";
import t from "../../icons/app/Plus.js";
import { ButtonInternal as n } from "../../components/F0Button/internal.js";
import { ScrollArea as r } from "../scrollarea.js";
import { Spinner as i } from "../Spinner/index.js";
import { F0Card as a } from "../../components/F0Card/F0Card.js";
import { useInfiniteScrollPagination as o } from "../../patterns/OneDataCollection/hooks/useInfiniteScrollPagination.js";
import { LaneHeader as s } from "./components/LaneHeader.js";
import { LoadingSkeleton as c } from "./components/LoadingSkeleton.js";
import l from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { AnimatePresence as p, motion as m } from "motion/react";
//#region src/ui/Lane/Lane.tsx
function h({ title: h, items: g, renderCard: _, getKey: v, emptyState: y, fetchMore: b, variant: x = "neutral", color: S, loading: C = !1, hasMore: w = !1, loadingMore: T = !1, total: E, onPrimaryAction: D, onFooterAction: O, dropPlaceholderIndex: k }) {
	let A = {
		type: "infinite-scroll",
		cursor: null,
		hasMore: w,
		total: g.length + +!!w,
		perPage: 3
	}, { loadingIndicatorRef: j } = o(A, C, T, b ?? (() => {})), M = !!O;
	return /* @__PURE__ */ f("div", {
		className: "shadow-sm group relative flex h-full w-[322px] flex-col",
		children: [
			/* @__PURE__ */ d(s, {
				label: h || "Lane",
				variant: x,
				color: S,
				count: E ?? g.length,
				onPrimaryAction: D
			}),
			/* @__PURE__ */ d("div", {
				className: e("relative flex h-full min-h-0 flex-1 flex-col px-1 pb-1", (M || g.length === 0) && "pb-11", !M && g.length === 0 && k !== void 0 && "pb-1"),
				children: C ? /* @__PURE__ */ f(r, {
					className: e("relative h-full flex-1 rounded-lg", C && "select-none opacity-50 transition-opacity"),
					children: [/* @__PURE__ */ d(c, {}), /* @__PURE__ */ d(p, { children: /* @__PURE__ */ d(m.div, {
						className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						children: /* @__PURE__ */ d(i, {})
					}) })]
				}) : g.length === 0 && k === void 0 ? y : /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(r, {
					className: "relative h-full flex-1",
					children: /* @__PURE__ */ f("div", {
						className: e("relative", T && "select-none opacity-50 transition-opacity"),
						"aria-live": T ? "polite" : void 0,
						"aria-busy": T ? "true" : void 0,
						children: [g.length === 0 && k !== void 0 ? /* @__PURE__ */ d("div", {
							className: "relative my-1 mt-1.5",
							children: /* @__PURE__ */ d(a.Skeleton, { compact: !0 })
						}) : g.map((e, t) => {
							let n = v(e, t);
							return /* @__PURE__ */ d(l.Fragment, { children: _(e, t) }, n);
						}), (T || w) && /* @__PURE__ */ d(c, { ref: j })]
					})
				}), T && /* @__PURE__ */ d(p, { children: /* @__PURE__ */ d(m.div, {
					className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					children: /* @__PURE__ */ d(i, {})
				}) })] })
			}),
			M && /* @__PURE__ */ d("div", {
				className: "pointer-events-none absolute inset-x-1 bottom-1.5 z-20 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100",
				children: /* @__PURE__ */ d(n, {
					variant: "ghost",
					size: "md",
					className: "w-full justify-center",
					icon: t,
					label: "Add",
					hideLabel: !0,
					onClick: O
				})
			})
		]
	});
}
//#endregion
export { h as Lane };
