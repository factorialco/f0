import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { AnimatePresence as a, motion as o } from "motion/react";
import { endOfMonth as s, isAfter as c, isBefore as l, isSameMonth as u, isWithinInterval as d, startOfMonth as f } from "date-fns";
//#region src/components/OneCalendar/granularities/month/MonthView.tsx
function p({ mode: p, selected: m, onSelect: h, year: g, motionDirection: _ = 1, minDate: v, maxDate: y, compact: b = !1 }) {
	let x = n(), S = [
		{
			name: x.date.month.january,
			index: 0
		},
		{
			name: x.date.month.february,
			index: 1
		},
		{
			name: x.date.month.march,
			index: 2
		},
		{
			name: x.date.month.april,
			index: 3
		},
		{
			name: x.date.month.may,
			index: 4
		},
		{
			name: x.date.month.june,
			index: 5
		},
		{
			name: x.date.month.july,
			index: 6
		},
		{
			name: x.date.month.august,
			index: 7
		},
		{
			name: x.date.month.september,
			index: 8
		},
		{
			name: x.date.month.october,
			index: 9
		},
		{
			name: x.date.month.november,
			index: 10
		},
		{
			name: x.date.month.december,
			index: 11
		}
	], C = /* @__PURE__ */ new Date(), w = (e) => !!(e && typeof e == "object" && ("from" in e || "to" in e)), T = (e) => {
		let t = new Date(g, e, 1), n = f(t), r = s(t);
		if (p === "single") h?.({
			from: n,
			to: r
		});
		else if (p === "range") {
			if (!m || !w(m)) h?.({
				from: t,
				to: void 0
			});
			else if (m.from && !m.to) {
				let e = m.from;
				if (u(e, t)) h?.({
					from: f(t),
					to: s(t)
				});
				else {
					let n = l(e, t) ? e : t, r = l(e, t) ? t : e;
					h?.({
						from: f(n),
						to: s(r)
					});
				}
			} else h?.({
				from: t,
				to: void 0
			});
		}
	}, E = (e) => e === C.getMonth() && g === C.getFullYear(), D = (e) => {
		if (!m) return !1;
		if (!w(m)) return m.getMonth() === e && m.getFullYear() === g;
		if (m.from && m.to) {
			let t = new Date(g, e, 15);
			return d(t, {
				start: m.from,
				end: m.to
			});
		}
		return m.from ? m.from.getMonth() === e && m.from.getFullYear() === g : !1;
	}, O = (e) => !m || !w(m) || !m.from ? !1 : m.from.getMonth() === e && m.from.getFullYear() === g, k = (e) => !m || !w(m) || !m.to ? !1 : m.to.getMonth() === e && m.to.getFullYear() === g;
	return /* @__PURE__ */ r(a, {
		mode: "popLayout",
		initial: !1,
		custom: _,
		children: /* @__PURE__ */ r(o.div, {
			className: e("grid gap-y-3", b ? "grid-cols-2 gap-y-2" : "grid-cols-3"),
			custom: _,
			variants: {
				hidden: (e) => ({
					opacity: 0,
					x: e === 1 ? b ? 20 : 40 : b ? -20 : -40
				}),
				visible: {
					opacity: 1,
					x: 0
				},
				exit: (e) => ({
					opacity: 0,
					x: e === 1 ? b ? -20 : -40 : b ? 20 : 40
				})
			},
			initial: "hidden",
			animate: "visible",
			exit: "exit",
			transition: {
				duration: b ? .1 : .15,
				ease: [
					.455,
					.03,
					.515,
					.955
				]
			},
			children: S.map((n) => {
				let a = E(n.index), o = D(n.index), u = O(n.index), d = k(n.index), m = new Date(g, n.index, 1), h = f(m), _ = s(m), x = v && l(h, v) || y && c(_, y);
				return /* @__PURE__ */ i("button", {
					type: "button",
					onClick: () => T(n.index),
					disabled: x,
					className: e("relative isolate flex items-center justify-center font-medium text-f1-foreground transition-colors duration-100 after:absolute after:inset-0 after:z-0 after:bg-f1-background-selected-bold after:opacity-0 after:transition-all after:duration-100 after:content-['']", b ? "h-8 rounded-sm after:rounded-sm" : "h-10 rounded-md after:rounded-md", !x && "hover:bg-f1-background-hover hover:after:bg-f1-background-selected-bold-hover", x && "cursor-not-allowed text-f1-foreground-secondary", t(), o && p === "single" && "bg-f1-background-selected-bold after:opacity-100 hover:bg-f1-background-selected-bold-hover [&>span]:z-10 [&>span]:text-f1-foreground-inverse", o && p === "range" && e("rounded-none bg-f1-background-selected hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected", b ? "[&:nth-child(4n+1)]:rounded-s-sm [&:nth-child(4n+4)]:rounded-e-sm" : "[&:nth-child(3n+1)]:rounded-s-md [&:nth-child(3n+3)]:rounded-e-md"), (u || d) && p === "range" && "rounded-none bg-f1-background-selected after:opacity-100 [&>span]:z-10 [&>span]:text-f1-foreground-inverse", u && p === "range" && d && (b ? "rounded-s-sm" : "rounded-s-md"), d && p === "range" && (b ? "rounded-e-sm" : "rounded-e-md")),
					children: [/* @__PURE__ */ r("span", { children: n.name }), a && /* @__PURE__ */ r("div", { className: e("absolute inset-x-0 z-20 mx-auto h-0.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100", b ? "bottom-0.5 w-1" : "bottom-1 w-1.5", o && p === "single" && "bg-f1-background", (u || d) && "bg-f1-background", !u && !d && o && p === "range" && "bg-f1-background-selected-bold") })]
				}, n.index);
			})
		}, g)
	});
}
//#endregion
export { p as MonthView };
