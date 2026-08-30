import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useL10n as r } from "../../../../lib/providers/l10n/l10n-provider.js";
import { isAfterOrEqual as i, isBeforeOrEqual as a, toDateRange as o } from "../../utils.js";
import { findPeriodByDate as s, formatPeriodRange as c, periodsOfYear as l, toPeriodRange as u } from "./utils.js";
import { useEffect as d, useRef as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import { AnimatePresence as h, motion as g } from "motion/react";
//#region src/components/OneCalendar/granularities/periods/PeriodsView.tsx
function _({ periods: _, header: v, year: y, motionDirection: b = 1, selected: x, onSelect: S, minDate: C, maxDate: w, compact: T = !1 }) {
	let E = n(), D = r(), O = f(null);
	d(() => {
		O.current?.scrollIntoView({ block: "nearest" });
	}, []);
	let k = s(_, o(x ?? void 0)?.from), A = l(_, y);
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-2",
		children: [v && /* @__PURE__ */ p("div", {
			className: "px-2 font-medium text-f1-foreground-secondary",
			children: v
		}), /* @__PURE__ */ p(h, {
			mode: "popLayout",
			initial: !1,
			custom: b,
			children: /* @__PURE__ */ p(g.div, {
				className: e("grid max-h-72 grid-cols-2 overflow-y-auto", T ? "gap-0.5" : "gap-1"),
				custom: b,
				variants: {
					hidden: (e) => ({
						opacity: 0,
						x: e === 1 ? T ? 20 : 40 : T ? -20 : -40
					}),
					visible: {
						opacity: 1,
						x: 0
					},
					exit: (e) => ({
						opacity: 0,
						x: e === 1 ? T ? -20 : -40 : T ? 20 : 40
					})
				},
				initial: "hidden",
				animate: "visible",
				exit: "exit",
				transition: {
					duration: T ? .1 : .15,
					ease: [
						.455,
						.03,
						.515,
						.955
					]
				},
				children: A.length === 0 ? /* @__PURE__ */ p("div", {
					className: "col-span-2 py-4 text-center text-f1-foreground-secondary",
					children: E.date.granularities.periods.empty
				}) : A.map((n) => {
					let r = u(n), o = n === k, s = !i(r.to, C) || !a(r.from, w);
					return /* @__PURE__ */ m("button", {
						type: "button",
						ref: o ? O : void 0,
						onClick: () => S?.(r),
						disabled: s,
						"aria-pressed": o,
						className: e("flex flex-col items-start rounded-md text-left transition-colors duration-100", T ? "gap-0 px-2 py-1" : "gap-0.5 px-3 py-2", !s && !o && "hover:bg-f1-background-hover", o && "bg-f1-background-selected", s && "cursor-not-allowed opacity-50", t()),
						children: [/* @__PURE__ */ p("span", {
							className: e("font-medium text-f1-foreground", o && "text-f1-foreground-selected"),
							children: n.label
						}), /* @__PURE__ */ p("span", {
							className: "text-sm text-f1-foreground-secondary",
							children: c(n, D.locale)
						})]
					}, `${n.label}-${r.from.getTime()}`);
				})
			}, y)
		})]
	});
}
//#endregion
export { _ as PeriodsView };
