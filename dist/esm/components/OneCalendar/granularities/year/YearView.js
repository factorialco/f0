import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { AnimatePresence as i, motion as a } from "motion/react";
import { endOfYear as o, isAfter as s, isBefore as c, isSameYear as l, isWithinInterval as u, startOfYear as d } from "date-fns";
//#region src/components/OneCalendar/granularities/year/YearView.tsx
function f({ mode: f, selected: p, onSelect: m, decade: h, motionDirection: g = 1, minDate: _, maxDate: v }) {
	let y = /* @__PURE__ */ new Date(), b = (e) => !!(e && typeof e == "object" && ("from" in e || "to" in e)), x = Math.floor(h / 10) * 10, S = [
		x - 1,
		...Array.from({ length: 10 }, (e, t) => x + t),
		x + 10
	], C = (e) => {
		let t = new Date(e, 0, 1);
		if (f === "single") m?.({
			from: d(t),
			to: o(t)
		});
		else if (f === "range") {
			if (!p || !b(p)) m?.({
				from: t,
				to: void 0
			});
			else if (p && p.from && !p.to) {
				if (l(p.from, t)) m?.({
					from: d(p.from),
					to: o(p.from)
				});
				else {
					let e = c(p.from, t) ? p.from : t, n = c(p.from, t) ? t : p.from;
					m?.({
						from: d(e),
						to: o(n)
					});
				}
			} else m?.({
				from: t,
				to: void 0
			});
		}
	}, w = (e) => {
		if (!p) return !1;
		if (!b(p)) return p.getFullYear() === e;
		if (p.from && p.to) {
			let t = new Date(e, 6, 1);
			return u(t, {
				start: p.from,
				end: p.to
			});
		}
		return p.from ? p.from.getFullYear() === e : !1;
	}, T = (e) => e === y.getFullYear(), E = (e) => !p || !b(p) || !p.from ? !1 : p.from.getFullYear() === e, D = (e) => !p || !b(p) || !p.to ? !1 : p.to.getFullYear() === e, O = (e) => e < x || e >= x + 10;
	return /* @__PURE__ */ n(i, {
		mode: "popLayout",
		initial: !1,
		custom: g,
		children: /* @__PURE__ */ n(a.div, {
			className: "grid grid-cols-4 gap-y-3",
			custom: g,
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
			children: S.map((i) => {
				let a = w(i), l = E(i), u = D(i), p = O(i), m = T(i), h = new Date(i, 0, 1), g = _ && c(d(h), _) || v && s(o(h), v);
				return /* @__PURE__ */ r("button", {
					onClick: () => C(i),
					disabled: g,
					className: e("relative isolate flex h-10 items-center justify-center rounded-md font-medium text-f1-foreground transition-colors duration-100 after:absolute after:inset-0 after:z-0 after:rounded-md after:bg-f1-background-selected-bold after:opacity-0 after:transition-all after:duration-100 after:content-['']", !g && "hover:bg-f1-background-hover hover:after:bg-f1-background-selected-bold-hover", g && "cursor-not-allowed text-f1-foreground-secondary", t(), p && "[&>span]:font-normal [&>span]:text-f1-foreground-secondary", a && f === "single" && "bg-f1-background-selected-bold after:opacity-100 hover:bg-f1-background-selected-bold-hover [&>span]:z-10 [&>span]:text-f1-foreground-inverse [&>span]:opacity-100", a && f === "range" && "rounded-none bg-f1-background-selected hover:bg-f1-background-selected [&:nth-child(4n+1)]:rounded-s-md [&:nth-child(4n+4)]:rounded-e-md [&>span]:text-f1-foreground-selected [&>span]:opacity-100", (l || u) && f === "range" && "rounded-none bg-f1-background-selected after:opacity-100 [&>span]:z-10 [&>span]:text-f1-foreground-inverse [&>span]:opacity-100", l && f === "range" && u && "rounded-s-md", u && f === "range" && "rounded-e-md"),
					children: [/* @__PURE__ */ n("span", { children: i }), m && /* @__PURE__ */ n("div", { className: e("absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100", a && f === "single" && "bg-f1-background", (l || u) && "bg-f1-background", !l && !u && a && f === "range" && "bg-f1-background-selected-bold") })]
				}, i);
			})
		}, h)
	});
}
//#endregion
export { f as YearView };
