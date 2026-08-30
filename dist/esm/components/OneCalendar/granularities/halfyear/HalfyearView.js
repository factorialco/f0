import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { AnimatePresence as i, motion as a } from "motion/react";
import { endOfMonth as o, isAfter as s, isBefore as c, isWithinInterval as l, startOfMonth as u } from "date-fns";
//#region src/components/OneCalendar/granularities/halfyear/HalfyearView.tsx
var d = (e) => e < 6 ? 1 : 2, f = (e, t) => {
	let n = e === 1 ? 0 : 6, r = e === 1 ? 5 : 11;
	return {
		from: u(new Date(t, n, 1)),
		to: o(new Date(t, r + 1, 0))
	};
}, p = ({ mode: o, selected: u, onSelect: p, year: m, minDate: h, maxDate: g, motionDirection: _ = 1 }) => {
	let v = [1, 2], y = /* @__PURE__ */ new Date(), b = y.getFullYear(), x = d(y.getMonth()), S = Math.floor(m / 5) * 5, C = Array.from({ length: 5 }, (e, t) => S + t), w = (e) => !!(e && typeof e == "object" && ("from" in e || "to" in e)), T = (e, t) => {
		let n = f(e, t);
		if (o === "single") p?.(n.from);
		else if (o === "range") {
			if (!u || !w(u)) p?.({
				from: n.from,
				to: void 0
			});
			else if (u && u.from && !u.to) {
				let r = u.from, i = d(r.getMonth()), a = r.getFullYear();
				if (i === e && a === t) p?.({
					from: n.from,
					to: n.to
				});
				else {
					let e = f(i, a), t = c(e.from, n.from) ? e.from : n.from, r = s(e.to, n.to) ? e.to : n.to;
					p?.({
						from: t,
						to: r
					});
				}
			} else p?.({
				from: n.from,
				to: void 0
			});
		}
	}, E = (e, t) => {
		if (!u) return !1;
		let n = f(e, t);
		if (w(u)) {
			let r = u.from, i = u.to;
			if (r && i) return l(n.from, {
				start: r,
				end: i
			}) || !!n.to && l(n.to, {
				start: r,
				end: i
			}) || c(n.from, r) && !!n.to && s(n.to, i);
			if (r) return d(r.getMonth()) === e && r.getFullYear() === t;
		} else return d(u.getMonth()) === e && u.getFullYear() === t;
		return !1;
	}, D = (e, t) => e === x && t === b, O = (e, t) => {
		if (!u || !w(u) || !u.from) return !1;
		let n = u.from;
		return d(n.getMonth()) === e && n.getFullYear() === t;
	}, k = (e, t) => {
		if (!u || !w(u) || !u.to) return !1;
		let n = u.to;
		return d(n.getMonth()) === e && n.getFullYear() === t;
	};
	return /* @__PURE__ */ n(i, {
		mode: "popLayout",
		initial: !1,
		custom: _,
		children: /* @__PURE__ */ n(a.div, {
			className: "flex flex-col gap-4",
			custom: _,
			variants: {
				hidden: (e) => ({
					opacity: 0,
					x: e === 1 ? 40 : -40
				}),
				visible: {
					opacity: 1,
					x: 0
				},
				exit: (e) => ({
					opacity: 0,
					x: e === 1 ? -40 : 40
				})
			},
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: C.map((i) => /* @__PURE__ */ r("div", {
				className: "flex items-center justify-center gap-3 pl-1.5",
				children: [/* @__PURE__ */ n("div", {
					className: "text-medium text-right text-sm tabular-nums text-f1-foreground-secondary",
					children: i
				}), /* @__PURE__ */ n("div", {
					className: "flex flex-1",
					children: v.map((a) => {
						let l = E(a, i), u = D(a, i), d = O(a, i), p = k(a, i), m = f(a, i), _ = h && c(m.from, h) || g && m.to && s(m.to, g);
						return /* @__PURE__ */ r("button", {
							onClick: () => T(a, i),
							disabled: _,
							className: e("relative isolate flex h-10 flex-1 items-center justify-center rounded-md p-2 tabular-nums", "after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded-md after:ring-1 after:ring-inset after:ring-f1-border-secondary after:transition-all after:duration-100 after:content-['']", _ && "cursor-not-allowed text-f1-foreground-secondary", !_ && "hover:after:bg-f1-background-hover", t(), (d || p) && "after:inset-x-0", l && "after:bg-f1-background-selected-bold after:ring-0 hover:after:bg-f1-background-selected-bold-hover [&>span]:text-f1-foreground-inverse", l && !d && !p && o === "range" && "rounded-none bg-f1-background-selected after:opacity-0 after:transition-none first:rounded-l-md last:rounded-r-md hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected"),
							children: [
								d && /* @__PURE__ */ n("div", { className: "absolute inset-y-0 right-0 z-0 w-1/2 bg-f1-background-selected" }),
								p && /* @__PURE__ */ n("div", { className: "absolute inset-y-0 left-0 z-0 w-1/2 bg-f1-background-selected" }),
								/* @__PURE__ */ r("span", {
									className: "z-10 font-medium",
									children: ["H", a]
								}),
								u && /* @__PURE__ */ n("div", { className: e("absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100", l && o === "single" && "bg-f1-background", (d || p) && "bg-f1-background", !d && !p && l && o === "range" && "bg-f1-background-selected-bold") })
							]
						}, `${i}-H${a}`);
					})
				})]
			}, i))
		}, m)
	});
};
//#endregion
export { p as HalfYearView, d as getHalfYearFromMonth, f as getHalfYearRange };
