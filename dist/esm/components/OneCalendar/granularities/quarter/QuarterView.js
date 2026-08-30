import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { AnimatePresence as i, motion as a } from "motion/react";
import { isAfter as o, isBefore as s, isWithinInterval as c } from "date-fns";
//#region src/components/OneCalendar/granularities/quarter/QuarterView.tsx
var l = (e) => Math.floor(e / 3) + 1, u = (e) => e >= 1 && e <= 4 ? [
	0,
	1,
	2
].map((t) => t + (e - 1) * 3) : [], d = (e, t) => {
	let n = u(e), r = n[0], i = n[n.length - 1];
	return {
		from: new Date(t, r, 1),
		to: new Date(t, i + 1, 0)
	};
}, f = ({ mode: u, selected: f, onSelect: p, year: m, motionDirection: h = 1, minDate: g, maxDate: _ }) => {
	let v = [
		1,
		2,
		3,
		4
	], y = /* @__PURE__ */ new Date(), b = y.getFullYear(), x = l(y.getMonth()), S = Math.floor(m / 5) * 5, C = Array.from({ length: 5 }, (e, t) => S + t), w = (e) => !!(e && typeof e == "object" && ("from" in e || "to" in e)), T = (e, t) => {
		let n = d(e, t);
		if (u === "single") p?.(n.from);
		else if (u === "range") {
			if (!f || !w(f)) p?.({
				from: n.from,
				to: void 0
			});
			else if (f && f.from && !f.to) {
				let r = f.from, i = l(r.getMonth()), a = r.getFullYear();
				if (i === e && a === t) p?.({
					from: n.from,
					to: n.to
				});
				else {
					let e = d(i, a), t = s(e.from, n.from) ? e.from : n.from, r = o(e.to, n.to) ? e.to : n.to;
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
		if (!f) return !1;
		let n = d(e, t);
		if (!n.to) return !1;
		if (w(f)) {
			let r = f.from, i = f.to;
			if (r && i) return c(n.from, {
				start: r,
				end: i
			}) || c(n.to, {
				start: r,
				end: i
			}) || s(n.from, r) && o(n.to, i);
			if (r) return l(r.getMonth()) === e && r.getFullYear() === t;
		} else return l(f.getMonth()) === e && f.getFullYear() === t;
		return !1;
	}, D = (e, t) => e === x && t === b, O = (e, t) => {
		if (!f || !w(f) || !f.from) return !1;
		let n = f.from;
		return l(n.getMonth()) === e && n.getFullYear() === t;
	}, k = (e, t) => {
		if (!f || !w(f) || !f.to) return !1;
		let n = f.to;
		return l(n.getMonth()) === e && n.getFullYear() === t;
	};
	return /* @__PURE__ */ n(i, {
		mode: "popLayout",
		initial: !1,
		custom: h,
		children: /* @__PURE__ */ n(a.div, {
			className: "flex flex-col gap-4",
			custom: h,
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
						let c = E(a, i), l = D(a, i), f = O(a, i), p = k(a, i), m = d(a, i), h = g && s(m.from, g) || _ && m.to && o(m.to, _);
						return /* @__PURE__ */ r("button", {
							onClick: () => T(a, i),
							disabled: h,
							className: e("relative isolate flex h-10 flex-1 items-center justify-center rounded-md p-2 tabular-nums", "after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded-md after:ring-1 after:ring-inset after:ring-f1-border-secondary after:transition-all after:duration-100 after:content-['']", h && "cursor-not-allowed text-f1-foreground-secondary", !h && "hover:after:bg-f1-background-hover", t(), (f || p) && "after:inset-x-0", c && "after:bg-f1-background-selected-bold after:ring-0 hover:after:bg-f1-background-selected-bold-hover [&>span]:text-f1-foreground-inverse", c && !f && !p && u === "range" && "rounded-none bg-f1-background-selected after:opacity-0 after:transition-none first:rounded-l-md last:rounded-r-md hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected"),
							children: [
								f && /* @__PURE__ */ n("div", { className: "absolute inset-y-0 right-0 z-0 w-1/2 bg-f1-background-selected" }),
								p && /* @__PURE__ */ n("div", { className: "absolute inset-y-0 left-0 z-0 w-1/2 bg-f1-background-selected" }),
								/* @__PURE__ */ r("span", {
									className: "z-10 font-medium",
									children: ["Q", a]
								}),
								l && /* @__PURE__ */ n("div", { className: e("absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100", c && u === "single" && "bg-f1-background", (f || p) && "bg-f1-background", !f && !p && c && u === "range" && "bg-f1-background-selected-bold") })
							]
						}, `${i}-Q${a}`);
					})
				})]
			}, i))
		}, m)
	});
};
//#endregion
export { f as QuarterView };
