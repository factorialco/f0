import { d as e, t } from "./OneEllipsis-DuhKMtYp.js";
import { D as n, S as r, f as i, ht as a, s as o } from "./variants-B0wDByLy.js";
import { n as s, t as c } from "./utils-CVzxZnoI.js";
import { E as l, F as u, M as d, O as f, P as p, c as m, d as h, f as g, i as _, l as v, n as y, o as ee, p as b, r as x, s as S, t as C, u as w } from "./tooltip-BPSwDQpD.js";
import { i as T, l as E, m as te, r as D, u as O } from "./F0Button-BJ1vAMQc.js";
import { a as k, i as A, r as ne, t as re } from "./F0AvatarIcon-CA2HDqKH.js";
import { $ as ie, B as ae, C as oe, D as j, F as se, H as ce, J as le, K as ue, L as de, Q as fe, T as pe, Z as me, a as he, at as ge, c as M, ct as _e, dt as ve, i as ye, it as be, nt as N, o as xe, p as Se, rt as Ce, s as we, st as Te, t as Ee, tt as De, ut as Oe, x as ke, y as Ae } from "./F0Checkbox-8vfzQrD0.js";
import { t as je } from "./CheckCircle-KIInZpvd.js";
import { t as Me } from "./Cross-BIv5udZr.js";
import { a as Ne, i as Pe, n as Fe, r as P, t as Ie, v as Le, x as Re, y as ze } from "./progress-BwOpf5S2.js";
import { n as Be, t as Ve } from "./F0Link-zUXJEoxw.js";
import { a as He, c as Ue, h as We, p as Ge, s as Ke } from "./F0Avatar-AdTCknCK.js";
import { n as qe } from "./skeleton-gsHEXIPQ.js";
import * as F from "react";
import { Fragment as Je, forwardRef as I, useCallback as Ye, useRef as Xe, useState as Ze } from "react";
import { Fragment as Qe, jsx as L, jsxs as R } from "react/jsx-runtime";
var $e = I((e, t) => /* @__PURE__ */ L("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ L("path", {
		d: "M15.0004 3.34998C17.016 3.35019 18.6508 4.98466 18.6508 7.00037V17.7982C18.6502 19.6203 16.5246 20.6154 15.1244 19.4496L12.8646 17.5668C12.364 17.1496 11.6368 17.1496 11.1361 17.5668L8.87636 19.4496C7.47621 20.616 5.35061 19.6204 5.35 17.7982V7.00037C5.35 4.98453 6.98455 3.34998 9.00039 3.34998H15.0004ZM9.00039 4.65076C7.70252 4.65076 6.65078 5.7025 6.65078 7.00037V17.7982C6.65139 18.5184 7.49091 18.9117 8.04433 18.4506L10.3041 16.5677C11.2868 15.7491 12.714 15.7491 13.6967 16.5677L15.9564 18.4506C16.5099 18.9112 17.3494 18.5182 17.35 17.7982V7.00037C17.35 5.70263 16.2981 4.65097 15.0004 4.65076H9.00039Z",
		fill: "currentColor"
	})
})), et = I((e, t) => /* @__PURE__ */ L("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ L("path", {
		d: "M15.0004 3.34998C17.016 3.35019 18.6508 4.98466 18.6508 7.00037V17.7982C18.6502 19.6203 16.5246 20.6154 15.1244 19.4496L12.8646 17.5668C12.364 17.1496 11.6368 17.1496 11.1361 17.5668L8.87636 19.4496C7.47621 20.616 5.35061 19.6204 5.35 17.7982V7.00037C5.35 4.98453 6.98455 3.34998 9.00039 3.34998H15.0004Z",
		fill: "currentColor"
	})
})), tt = I((e, t) => /* @__PURE__ */ L("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ L("path", {
		stroke: "currentColor",
		d: "M11.4375 6C11.09 5.38228 10.4364 5 9.72763 5H7.19998C6.07987 5 5.51982 5 5.092 5.21799C4.71567 5.40973 4.40971 5.71569 4.21796 6.09202C3.99998 6.51984 3.99998 7.07989 3.99998 8.2V14.2C3.99998 15.8802 3.99998 16.7202 4.32696 17.362C4.61458 17.9265 5.07352 18.3854 5.63801 18.673C6.27974 19 7.11982 19 8.79998 19H15.2C16.8801 19 17.7202 19 18.3619 18.673C18.9264 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9264 7.6146 18.3619 7.32698C17.7202 7 16.8801 7 15.2 7H13.1473C12.4386 7 11.7849 6.61772 11.4375 6V6Z"
	})
})), nt = {
	info: A,
	warning: ne,
	critical: k,
	positive: je
}, rt = I(({ text: e, level: t, info: r }, i) => {
	te(e, {
		disallowEmpty: !0,
		disallowEmojis: !0
	}, { componentName: "F0TagAlert" });
	let a = {
		info: "info",
		warning: "warning",
		critical: "critical",
		positive: "positive"
	}[t];
	return /* @__PURE__ */ L(ge, {
		ref: i,
		className: c("pl-0.5", {
			info: "bg-f1-background-info text-f1-foreground-info",
			warning: "bg-f1-background-warning text-f1-foreground-warning",
			critical: "bg-f1-background-critical text-f1-foreground-critical",
			positive: "bg-f1-background-positive text-f1-foreground-positive"
		}[t]),
		left: /* @__PURE__ */ L(n, {
			icon: nt[t],
			size: "md",
			"aria-hidden": !0,
			color: a
		}),
		text: e,
		info: r
	});
});
rt.displayName = "F0TagAlert";
//#endregion
//#region src/components/tags/F0TagAlert/index.tsx
var it = e(rt), z = F.forwardRef(({ className: e, href: t, onClick: n, disabled: r, children: a, ...o }, s) => {
	let { actions: l } = i();
	return /* @__PURE__ */ R("div", {
		ref: s,
		role: "article",
		className: c("flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-4 shadow", (t || n) && !r && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", e),
		...o,
		onClick: () => {
			if (!r && !t && n) return n();
		},
		children: [t && !r && /* @__PURE__ */ L(O, {
			href: t,
			className: "absolute inset-0 block",
			tabIndex: 0,
			children: /* @__PURE__ */ L("span", {
				className: "sr-only",
				children: l.view
			})
		}), a]
	});
});
z.displayName = "Card";
var at = F.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ L("div", {
	ref: n,
	className: c("flex flex-row gap-1.5", e),
	...t
}));
at.displayName = "CardHeader";
var ot = F.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ L("h3", {
	ref: n,
	className: c("text-base font-medium text-f1-foreground", e),
	...t
}));
ot.displayName = "CardTitle";
var st = F.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ L("h3", {
	ref: n,
	className: c("line-clamp-1 text-base font-normal text-f1-foreground-secondary", e),
	...t
}));
st.displayName = "CardSubtitle";
var ct = F.forwardRef(({ className: e, content: t }, r) => /* @__PURE__ */ L("div", {
	ref: r,
	className: c("-ml-1 flex h-6 w-6 items-center justify-center", e),
	children: /* @__PURE__ */ L(x, { children: /* @__PURE__ */ R(C, { children: [/* @__PURE__ */ L(_, {
		className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
		"aria-label": t,
		children: /* @__PURE__ */ L(n, {
			icon: Te,
			size: "md"
		})
	}), /* @__PURE__ */ L(y, { children: /* @__PURE__ */ L("p", { children: t }) })] }) })
}));
ct.displayName = "CardInfo";
var lt = F.forwardRef(({ className: e, title: t, icon: r = _e, href: i, ...a }, o) => {
	let s = c("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-transparent bg-transparent", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e), l = /* @__PURE__ */ L(n, {
		size: "sm",
		icon: r,
		className: "text-f1-icon-bold"
	});
	if (!i) {
		let { target: e, rel: n, download: r, type: i, ...c } = a;
		return /* @__PURE__ */ L("button", {
			ref: o,
			className: s,
			"aria-label": t,
			type: "button",
			...c,
			children: l
		});
	}
	return /* @__PURE__ */ L(O, {
		ref: o,
		className: s,
		role: "button",
		"aria-label": t,
		href: i,
		...a,
		children: l
	});
});
lt.displayName = "CardLink";
var ut = F.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ L("div", {
	ref: n,
	className: c("relative flex grow flex-col", e),
	...t
}));
ut.displayName = "CardContent";
var dt = F.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ L("div", {
	ref: n,
	className: c("flex items-center", e),
	...t
}));
dt.displayName = "CardFooter";
var ft = F.forwardRef(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ L("div", {
		ref: n,
		className: c("flex text-3xl font-semibold", e),
		...t
	});
});
dt.displayName = "CardComment";
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/compareAsc.mjs
function pt(e, t) {
	let n = N(e), r = N(t), i = n.getTime() - r.getTime();
	return i < 0 ? -1 : i > 0 ? 1 : i;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructNow.mjs
function mt(e) {
	return De(e, Date.now());
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/getRoundingMethod.mjs
function ht(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/formatDistanceStrict.mjs
function gt(e, t, n) {
	let r = ue(), i = n?.locale ?? r.locale ?? se, a = pt(e, t);
	if (isNaN(a)) throw RangeError("Invalid time value");
	let o = Object.assign({}, n, {
		addSuffix: n?.addSuffix,
		comparison: a
	}), s, c;
	a > 0 ? (s = N(t), c = N(e)) : (s = N(e), c = N(t));
	let l = ht(n?.roundingMethod ?? "round"), u = c.getTime() - s.getTime(), d = u / le, f = (u - (ce(c) - ce(s))) / le, p = n?.unit, m;
	if (m = p || (d < 1 ? "second" : d < 60 ? "minute" : d < 1440 ? "hour" : f < 43200 ? "day" : f < 525600 ? "month" : "year"), m === "second") {
		let e = l(u / 1e3);
		return i.formatDistance("xSeconds", e, o);
	}
	if (m === "minute") {
		let e = l(d);
		return i.formatDistance("xMinutes", e, o);
	}
	if (m === "hour") {
		let e = l(d / 60);
		return i.formatDistance("xHours", e, o);
	}
	if (m === "day") {
		let e = l(f / me);
		return i.formatDistance("xDays", e, o);
	}
	if (m === "month") {
		let e = l(f / fe);
		return e === 12 && p !== "month" ? i.formatDistance("xYears", 1, o) : i.formatDistance("xMonths", e, o);
	}
	{
		let e = l(f / ie);
		return i.formatDistance("xYears", e, o);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/formatDistanceToNowStrict.mjs
function _t(e, t) {
	return gt(e, mt(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isToday.mjs
function vt(e) {
	return ae(e, mt(e));
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isYesterday.mjs
function yt(e) {
	return ae(e, pe(mt(e), 1));
}
//#endregion
//#region src/lib/date.ts
function bt(e, t) {
	return j(e, "p", { locale: t });
}
function xt(e) {
	return j(e, "HH:mm");
}
function St(e, t) {
	return j(e, "LLL", { locale: t });
}
function Ct(e) {
	return e.getDate();
}
function wt(e, t) {
	return _t(e, {
		addSuffix: !0,
		locale: t
	});
}
function Tt(e, { locale: t, yesterdayRelative: n = !0 }) {
	return vt(e) ? wt(e, t) : yt(e) ? n ? wt(e, t) : j(e, "p", { locale: t }) : j(e, "PPPp", { locale: t });
}
var Et = (e, t) => {
	let n = {
		today: [],
		yesterday: [],
		lastWeek: [],
		lastMonth: []
	};
	return e.forEach((e) => {
		let r = e[t], i = Math.abs(de(r, /* @__PURE__ */ new Date()));
		vt(r) ? n.today.push(e) : yt(r) ? n.yesterday.push(e) : i <= 7 ? n.lastWeek.push(e) : i <= 30 ? n.lastMonth.push(e) : n[r.getFullYear()] = [...n[r.getFullYear()] || [], e];
	}), n;
}, Dt = e(({ date: e, "aria-label": t, "aria-labelledby": n }) => {
	let r = ke(), i = Ct(e), a = St(e, r);
	return /* @__PURE__ */ R("div", {
		className: "flex h-10 w-10 flex-col items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
		"aria-label": t,
		"aria-labelledby": n,
		children: [/* @__PURE__ */ L("div", {
			className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary",
			children: a
		}), /* @__PURE__ */ L("div", {
			className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground",
			children: i
		})]
	});
});
//#endregion
//#region src/kits/Charts/CategoryBarChart/CategoryBarTooltipContent.tsx
function Ot(e, t) {
	let n = t > 0 ? e / t * 100 : 0;
	return n % 1 == 0 ? n.toFixed(0) : n.toFixed(1);
}
function kt(e, t, n) {
	return e.map((e, r) => ({
		...e,
		key: `${e.name}-${r}`,
		percentage: t > 0 ? e.value / t * 100 : 0,
		color: n(e, r)
	})).filter((e) => e.percentage > 0);
}
function At(e, t) {
	return e.map((e) => ({
		key: e.key,
		name: e.name,
		color: e.color,
		valueLabel: `${e.value} (${Ot(e.value, t)}%)`
	}));
}
function jt({ items: e, activeKey: t }) {
	let n = e.some((e) => e.key === t);
	return /* @__PURE__ */ L(y, {
		className: "flex flex-col gap-0.5 text-sm",
		children: e.map((e) => /* @__PURE__ */ R("div", {
			className: c("flex items-center gap-1", n && e.key !== t && "opacity-50"),
			children: [
				/* @__PURE__ */ L("div", {
					className: "h-2.5 w-2.5 shrink-0 rounded-full",
					style: { backgroundColor: e.color }
				}),
				/* @__PURE__ */ L("span", {
					className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary",
					children: e.name
				}),
				/* @__PURE__ */ L("span", {
					className: "ml-auto font-mono font-medium tabular-nums text-f1-foreground-inverse",
					children: e.valueLabel
				})
			]
		}, e.key))
	});
}
//#endregion
//#region ../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs
var Mt = {
	grad: .9,
	turn: 360,
	rad: 360 / (2 * Math.PI)
}, B = function(e) {
	return typeof e == "string" ? e.length > 0 : typeof e == "number";
}, V = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n + 0;
}, H = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e > t ? e : t;
}, Nt = function(e) {
	return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
}, Pt = function(e) {
	return {
		r: H(e.r, 0, 255),
		g: H(e.g, 0, 255),
		b: H(e.b, 0, 255),
		a: H(e.a)
	};
}, Ft = function(e) {
	return {
		r: V(e.r),
		g: V(e.g),
		b: V(e.b),
		a: V(e.a, 3)
	};
}, It = /^#([0-9a-f]{3,8})$/i, Lt = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, Rt = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: 60 * (s < 0 ? s + 6 : s),
		s: a ? o / a * 100 : 0,
		v: a / 255 * 100,
		a: i
	};
}, zt = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: 255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l],
		g: 255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l],
		b: 255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l],
		a: i
	};
}, Bt = function(e) {
	return {
		h: Nt(e.h),
		s: H(e.s, 0, 100),
		l: H(e.l, 0, 100),
		a: H(e.a)
	};
}, Vt = function(e) {
	return {
		h: V(e.h),
		s: V(e.s),
		l: V(e.l),
		a: V(e.a, 3)
	};
}, Ht = function(e) {
	return zt((n = (t = e).s, {
		h: t.h,
		s: (n *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0 ? 2 * n / (r + n) * 100 : 0,
		v: r + n,
		a: t.a
	}));
	var t, n, r;
}, U = function(e) {
	return {
		h: (t = Rt(e)).h,
		s: (i = (200 - (n = t.s)) * (r = t.v) / 100) > 0 && i < 200 ? n * r / 100 / (i <= 100 ? i : 200 - i) * 100 : 0,
		l: i / 2,
		a: t.a
	};
	var t, n, r, i;
}, Ut = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Wt = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Gt = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Kt = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, qt = {
	string: [
		[function(e) {
			var t = It.exec(e);
			return t ? (e = t[1]).length <= 4 ? {
				r: parseInt(e[0] + e[0], 16),
				g: parseInt(e[1] + e[1], 16),
				b: parseInt(e[2] + e[2], 16),
				a: e.length === 4 ? V(parseInt(e[3] + e[3], 16) / 255, 2) : 1
			} : e.length === 6 || e.length === 8 ? {
				r: parseInt(e.substr(0, 2), 16),
				g: parseInt(e.substr(2, 2), 16),
				b: parseInt(e.substr(4, 2), 16),
				a: e.length === 8 ? V(parseInt(e.substr(6, 2), 16) / 255, 2) : 1
			} : null : null;
		}, "hex"],
		[function(e) {
			var t = Gt.exec(e) || Kt.exec(e);
			return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Pt({
				r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
				g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
				b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
				a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
			}) : null;
		}, "rgb"],
		[function(e) {
			var t = Ut.exec(e) || Wt.exec(e);
			if (!t) return null;
			var n, r;
			return Ht(Bt({
				h: (n = t[1], r = t[2], r === void 0 && (r = "deg"), Number(n) * (Mt[r] || 1)),
				s: Number(t[3]),
				l: Number(t[4]),
				a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
			}));
		}, "hsl"]
	],
	object: [
		[function(e) {
			var t = e.r, n = e.g, r = e.b, i = e.a, a = i === void 0 ? 1 : i;
			return B(t) && B(n) && B(r) ? Pt({
				r: Number(t),
				g: Number(n),
				b: Number(r),
				a: Number(a)
			}) : null;
		}, "rgb"],
		[function(e) {
			var t = e.h, n = e.s, r = e.l, i = e.a, a = i === void 0 ? 1 : i;
			return !B(t) || !B(n) || !B(r) ? null : Ht(Bt({
				h: Number(t),
				s: Number(n),
				l: Number(r),
				a: Number(a)
			}));
		}, "hsl"],
		[function(e) {
			var t = e.h, n = e.s, r = e.v, i = e.a, a = i === void 0 ? 1 : i;
			return !B(t) || !B(n) || !B(r) ? null : zt(function(e) {
				return {
					h: Nt(e.h),
					s: H(e.s, 0, 100),
					v: H(e.v, 0, 100),
					a: H(e.a)
				};
			}({
				h: Number(t),
				s: Number(n),
				v: Number(r),
				a: Number(a)
			}));
		}, "hsv"]
	]
}, Jt = function(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n][0](e);
		if (r) return [r, t[n][1]];
	}
	return [null, void 0];
}, Yt = function(e) {
	return typeof e == "string" ? Jt(e.trim(), qt.string) : typeof e == "object" && e ? Jt(e, qt.object) : [null, void 0];
}, Xt = function(e, t) {
	var n = U(e);
	return {
		h: n.h,
		s: H(n.s + 100 * t, 0, 100),
		l: n.l,
		a: n.a
	};
}, Zt = function(e) {
	return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
}, Qt = function(e, t) {
	var n = U(e);
	return {
		h: n.h,
		s: n.s,
		l: H(n.l + 100 * t, 0, 100),
		a: n.a
	};
}, $t = function() {
	function e(e) {
		this.parsed = Yt(e)[0], this.rgba = this.parsed || {
			r: 0,
			g: 0,
			b: 0,
			a: 1
		};
	}
	return e.prototype.isValid = function() {
		return this.parsed !== null;
	}, e.prototype.brightness = function() {
		return V(Zt(this.rgba), 2);
	}, e.prototype.isDark = function() {
		return Zt(this.rgba) < .5;
	}, e.prototype.isLight = function() {
		return Zt(this.rgba) >= .5;
	}, e.prototype.toHex = function() {
		return e = Ft(this.rgba), t = e.r, n = e.g, r = e.b, a = (i = e.a) < 1 ? Lt(V(255 * i)) : "", "#" + Lt(t) + Lt(n) + Lt(r) + a;
		var e, t, n, r, i, a;
	}, e.prototype.toRgb = function() {
		return Ft(this.rgba);
	}, e.prototype.toRgbString = function() {
		return e = Ft(this.rgba), t = e.r, n = e.g, r = e.b, (i = e.a) < 1 ? "rgba(" + t + ", " + n + ", " + r + ", " + i + ")" : "rgb(" + t + ", " + n + ", " + r + ")";
		var e, t, n, r, i;
	}, e.prototype.toHsl = function() {
		return Vt(U(this.rgba));
	}, e.prototype.toHslString = function() {
		return e = Vt(U(this.rgba)), t = e.h, n = e.s, r = e.l, (i = e.a) < 1 ? "hsla(" + t + ", " + n + "%, " + r + "%, " + i + ")" : "hsl(" + t + ", " + n + "%, " + r + "%)";
		var e, t, n, r, i;
	}, e.prototype.toHsv = function() {
		return e = Rt(this.rgba), {
			h: V(e.h),
			s: V(e.s),
			v: V(e.v),
			a: V(e.a, 3)
		};
		var e;
	}, e.prototype.invert = function() {
		return W({
			r: 255 - (e = this.rgba).r,
			g: 255 - e.g,
			b: 255 - e.b,
			a: e.a
		});
		var e;
	}, e.prototype.saturate = function(e) {
		return e === void 0 && (e = .1), W(Xt(this.rgba, e));
	}, e.prototype.desaturate = function(e) {
		return e === void 0 && (e = .1), W(Xt(this.rgba, -e));
	}, e.prototype.grayscale = function() {
		return W(Xt(this.rgba, -1));
	}, e.prototype.lighten = function(e) {
		return e === void 0 && (e = .1), W(Qt(this.rgba, e));
	}, e.prototype.darken = function(e) {
		return e === void 0 && (e = .1), W(Qt(this.rgba, -e));
	}, e.prototype.rotate = function(e) {
		return e === void 0 && (e = 15), this.hue(this.hue() + e);
	}, e.prototype.alpha = function(e) {
		return typeof e == "number" ? W({
			r: (t = this.rgba).r,
			g: t.g,
			b: t.b,
			a: e
		}) : V(this.rgba.a, 3);
		var t;
	}, e.prototype.hue = function(e) {
		var t = U(this.rgba);
		return typeof e == "number" ? W({
			h: e,
			s: t.s,
			l: t.l,
			a: t.a
		}) : V(t.h);
	}, e.prototype.isEqual = function(e) {
		return this.toHex() === W(e).toHex();
	}, e;
}(), W = function(e) {
	return e instanceof $t ? e : new $t(e);
}, en = [
	"lilac",
	"barbie",
	"smoke",
	"army",
	"flubber",
	"indigo",
	"camel",
	"radical",
	"viridian",
	"orange",
	"red",
	"grass",
	"malibu",
	"yellow",
	"purple"
], tn = {
	lilac: M.lilac[50],
	barbie: M.barbie[50],
	smoke: M.smoke[50],
	army: M.army[50],
	flubber: M.flubber[50],
	indigo: M.indigo[50],
	camel: M.camel[50],
	radical: M.radical[50],
	viridian: M.viridian[50],
	orange: M.orange[50],
	red: M.red[50],
	grass: M.grass[50],
	malibu: M.malibu[50],
	yellow: M.yellow[50],
	purple: M.purple[50]
};
function nn(e) {
	return G(tn[e]);
}
function G(e) {
	return W(`hsl(${e})`).toHex();
}
function rn(e, t, n) {
	if (typeof document > "u") return G(t);
	let r = n ?? document.documentElement, i = getComputedStyle(r).getPropertyValue(e).trim();
	return i ? W(`hsl(${i})`).toHex() : G(t);
}
var an = [
	G(M.viridian[50]),
	G(M.purple[50]),
	G(M.barbie[50]),
	G(M.yellow[50]),
	G(M.indigo[50]),
	G(M.lilac[70]),
	G(M.smoke[60]),
	G(M.malibu[70]),
	G(M.grass[50]),
	G(M.red[60])
];
function on(e) {
	return an[e % an.length] ?? "#999";
}
var sn = .12;
function cn(e) {
	return W(e).darken(sn).toHex();
}
function ln(e, t, n) {
	let r = W(e).toRgb(), i = W(t).toRgb();
	return W({
		r: Math.round(r.r + (i.r - r.r) * n),
		g: Math.round(r.g + (i.g - r.g) * n),
		b: Math.round(r.b + (i.b - r.b) * n)
	}).toHex();
}
function un(e, t, n, r) {
	return e ? nn(e) : t || (r ? ln(r.lightColor, r.baseColor, r.ratio) : on(n));
}
//#endregion
//#region src/lib/numeric/utils/isEmptyNumeric.ts
var dn = (e) => e == null || typeof e == "object" && "value" in e && (e.value === void 0 || e.value === null) && typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null), fn = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0, pn = (e, t = {}) => {
	if (dn(e)) return t.emptyPlaceholder || "";
	t = {
		locale: "en-US",
		decimalPlaces: 2,
		hideUnits: !1,
		compact: !1,
		emptyPlaceholder: "",
		useGrouping: !0,
		unitsSpaced: !1,
		...t
	}, typeof e == "number" && (e = { value: e });
	let n = fn(e);
	if (n === void 0) return t.emptyPlaceholder || "";
	let r = new Intl.NumberFormat(t.locale, {
		maximumFractionDigits: t.decimalPlaces,
		notation: t.compact ? "compact" : "standard",
		compactDisplay: t.compact ? "short" : void 0,
		useGrouping: t.useGrouping
	}).format(n);
	if (t.hideUnits || !e.units) return r;
	let i = t.unitsSpaced ? " " : "";
	return e.unitsPosition === "prepend" ? `${e.units}${i}${r}` : `${r}${i}${e.units}`;
}, mn = (e) => e == null ? { value: void 0 } : typeof e == "number" ? { value: e } : e, hn = (e, t) => {
	if (e == null) return {
		numericValue: { value: void 0 },
		formatter: t?.formatter || pn,
		formatterOptions: t?.formatterOptions || {}
	};
	let n = {
		formatter: t?.formatter || pn,
		formatterOptions: t?.formatterOptions || {}
	};
	return typeof e == "number" ? {
		numericValue: { value: e },
		...n
	} : typeof e == "object" && e && "numericValue" in e ? {
		numericValue: mn(e.numericValue),
		formatter: e.formatter ? e.formatter : n.formatter,
		formatterOptions: {
			...n.formatterOptions,
			...e.formatterOptions
		}
	} : {
		...n,
		numericValue: e
	};
}, gn = () => {
	let { locale: e } = oe();
	return Ye((t, n) => hn(t, {
		...n,
		formatterOptions: {
			locale: e,
			...n?.formatterOptions
		}
	}), [e]);
}, _n = {
	"-1": ve,
	1: Oe
}, vn = {
	"-1": "negative",
	0: "neutral",
	1: "positive"
}, yn = I(({ percentage: e, amount: t, invertStatus: r, info: i, hint: a, nullText: o }, s) => {
	let l = gn(), u = l(t, { formatterOptions: { decimalPlaces: 2 } }), d = l(e, { formatterOptions: {
		decimalPlaces: 0,
		emptyPlaceholder: o ?? "N/A"
	} }), f = fn(d.numericValue), p = fn(u.numericValue), m = "", h = null, g = "", _ = "null", v = a;
	if (dn(p)) m = o ?? "N/A", v = void 0;
	else {
		let e = Math.sign(f ?? 0).toString();
		_ = vn[Math.sign((f ?? 0) * (r ? -1 : 1)).toString()], m = [dn(f) ? null : d.formatter({
			...d.numericValue,
			units: "%",
			unitsPosition: "append"
		}, d.formatterOptions), u.formatter(u.numericValue, u.formatterOptions)].filter(Boolean).join(" · "), g = `${_} balance`, h = _ === "neutral" ? null : /* @__PURE__ */ L(n, {
			icon: _n[e],
			size: "sm",
			className: c({
				positive: "text-f1-icon-positive",
				neutral: "text-f1-icon-secondary",
				negative: "text-f1-icon-critical"
			}[_])
		});
	}
	return /* @__PURE__ */ L(ge, {
		ref: s,
		className: c({
			positive: "bg-f1-background-positive text-f1-foreground-positive",
			neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
			negative: "bg-f1-background-critical text-f1-foreground-critical",
			null: "text-f1-foreground-secondary"
		}[_]),
		info: i,
		hint: v,
		left: h,
		additionalAccessibleText: g,
		text: m
	});
});
yn.displayName = "F0TagBalance";
//#endregion
//#region src/components/tags/F0TagBalance/index.tsx
var bn = e(yn), xn = I(({ name: e, src: t }, n) => /* @__PURE__ */ L(we, {
	ref: n,
	avatar: {
		type: "company",
		name: e,
		src: t
	},
	text: e
}));
xn.displayName = "F0TagCompany";
//#endregion
//#region src/components/tags/F0TagCompany/index.tsx
var Sn = e(xn), Cn = I(({ name: e, src: t }, n) => /* @__PURE__ */ L(we, {
	ref: n,
	avatar: {
		type: "team",
		name: e,
		src: t
	},
	text: e
}));
Cn.displayName = "F0TagTeam";
//#endregion
//#region src/components/tags/F0TagTeam/index.tsx
var wn = e(Cn), Tn = (e) => {
	let { type: t } = e;
	if (t === "dot") return /* @__PURE__ */ L(xe, { ...e });
	if (t === "person") return /* @__PURE__ */ L(he, { ...e });
	if (t === "team") return /* @__PURE__ */ L(wn, { ...e });
	if (t === "company") return /* @__PURE__ */ L(Sn, { ...e });
	if (t === "alert") return /* @__PURE__ */ L(it, { ...e });
	if (t === "status") return /* @__PURE__ */ L(be, { ...e });
	if (t === "balance") return /* @__PURE__ */ L(bn, { ...e });
	if (t === "raw") return /* @__PURE__ */ L(ye, { ...e });
}, En = ({ tag: e }) => Tn(e) || "Invalid tag type";
//#endregion
//#region src/components/F0Card/components/CardActions.tsx
function Dn({ primaryAction: e, secondaryActions: t, compact: n = !1 }) {
	let i = r("(min-width: 640px)");
	if (!(e || a())) return null;
	return /* @__PURE__ */ R(dt, {
		className: c("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative z-[2] -mx-4 -mb-4 mt-4 cursor-auto border-0 border-t border-solid border-t-f1-border-secondary px-4 pb-4 pt-4", n && "-mb-3 pb-3 pt-3"),
		onClick: (e) => e.stopPropagation(),
		children: [t && /* @__PURE__ */ L("div", {
			className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
			children: Array.isArray(t) ? t.map((e, t) => /* @__PURE__ */ L(D, {
				label: e.label,
				icon: e.icon,
				variant: "outline",
				onClick: (t) => {
					t.stopPropagation(), e.onClick();
				},
				hideLabel: i && t > 0,
				size: i ? n ? "sm" : "md" : "lg"
			}, t)) : /* @__PURE__ */ L(Ve, {
				href: t.href,
				target: t.target,
				disabled: t.disabled,
				onClick: (e) => e.stopPropagation(),
				"data-testid": "secondary-link",
				children: t.label
			})
		}), e && /* @__PURE__ */ L("div", {
			className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center",
			children: /* @__PURE__ */ L(D, {
				label: e.label,
				icon: e.icon,
				variant: e.variant,
				onClick: (t) => {
					t.stopPropagation(), e.onClick();
				},
				size: i ? n ? "sm" : "md" : "lg",
				"data-testid": "primary-button"
			})
		})]
	});
	function a() {
		return t ? "href" in t || "length" in t && t.length > 0 : !1;
	}
}
//#endregion
//#region src/components/F0Card/components/CardAlert.tsx
var On = {
	info: "bg-f1-background-info",
	warning: "bg-f1-background-warning",
	critical: "bg-f1-background-critical",
	positive: "bg-f1-background-positive"
}, kn = {
	info: "hsl(var(--info-50) / 0.12)",
	warning: "hsl(var(--warning-50) / 0.12)",
	critical: "hsl(var(--critical-50) / 0.12)",
	positive: "hsl(var(--positive-50) / 0.12)"
}, An = {
	info: "text-f1-foreground-info",
	warning: "text-f1-foreground-warning",
	critical: "text-f1-foreground-critical",
	positive: "text-f1-foreground-positive"
}, jn = {
	critical: "critical",
	warning: "warning",
	info: "info",
	positive: "positive"
}, Mn = {
	critical: k,
	warning: ne,
	info: A,
	positive: je
};
function Nn({ onClose: e }) {
	let { actions: t } = i();
	return /* @__PURE__ */ L(D, {
		icon: Me,
		label: t.close,
		hideLabel: !0,
		variant: "ghost",
		size: "md",
		onClick: e,
		type: "button"
	});
}
function Pn({ variant: e, title: t, icon: r, dismissible: i = !1, onDismiss: a, action: o }) {
	return /* @__PURE__ */ R("div", {
		role: e === "critical" || e === "warning" ? "alert" : "status",
		className: "flex items-center gap-1 rounded-t-xl px-3 py-1.5",
		children: [
			/* @__PURE__ */ L("div", {
				className: "flex h-5 w-5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ L(n, {
					icon: r ?? Mn[e],
					size: "md",
					color: jn[e]
				})
			}),
			/* @__PURE__ */ L("span", {
				className: c("flex-1 text-base font-medium", An[e]),
				children: t
			}),
			o ? /* @__PURE__ */ L(D, {
				label: o.label,
				variant: "outline",
				size: "sm",
				disabled: o.disabled,
				..."href" in o ? { href: o.href } : {
					onClick: o.onClick,
					type: "button"
				}
			}) : i && a && /* @__PURE__ */ L(Nn, { onClose: a })
		]
	});
}
var Fn = I(function({ alert: e, fullHeight: t, children: n }, r) {
	return e.visible === !1 ? /* @__PURE__ */ L("div", {
		ref: r,
		className: c(t && "h-full"),
		children: n
	}) : /* @__PURE__ */ R("div", {
		ref: r,
		className: c("rounded-xl", On[e.variant], t && "flex h-full flex-col"),
		children: [/* @__PURE__ */ L(Pn, { ...e }), /* @__PURE__ */ L("div", {
			className: c(t && "flex flex-1 flex-col"),
			children: n
		})]
	});
});
Fn.displayName = "CardAlertWrapper";
//#endregion
//#region src/components/F0Card/components/CardAvatar.tsx
var In = ({ avatar: e, size: t }) => e.type === "emoji" ? /* @__PURE__ */ L(Ue, {
	emoji: e.emoji,
	size: t
}) : e.type === "file" ? /* @__PURE__ */ L(Ke, {
	file: e.file,
	size: t
}) : e.type === "icon" ? /* @__PURE__ */ L(re, {
	icon: e.icon,
	size: t
}) : e.type === "module" ? /* @__PURE__ */ L(We, {
	module: e.module,
	size: t
}) : e.type === "alert" ? /* @__PURE__ */ L(Be, {
	type: e.variant,
	size: t
}) : e.type === "date" ? /* @__PURE__ */ L(Dt, { date: e.date }) : /* @__PURE__ */ L(Ce, {
	avatar: e,
	size: t
});
function Ln({ avatar: e, overlay: t = !1, compact: n = !1, size: r }) {
	let i = e.type === "person", a = r ?? (n ? "sm" : "lg");
	return /* @__PURE__ */ L("div", {
		className: c("mb-1.5 flex h-fit w-fit", t && !n && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && i && "rounded-full", (n || r) && "mb-0"),
		"data-testid": "card-avatar",
		children: /* @__PURE__ */ L(In, {
			avatar: e,
			size: a
		})
	});
}
//#endregion
//#region src/ui/value-display/types/alertTag/alertTag.tsx
var Rn = (e) => /* @__PURE__ */ L("div", {
	"data-cell-type": "alert-tag",
	children: /* @__PURE__ */ L(it, {
		level: e.level,
		text: e.label
	})
}), zn = "min-h-6 items-center", K = {
	text: "",
	avatar: "",
	avatarList: "",
	multiline: "self-start pt-0.5"
};
//#endregion
//#region src/ui/value-display/utils.ts
function Bn(e) {
	return typeof e == "object" && !!e && "placeholder" in e && typeof e.placeholder == "string";
}
function q(e, t) {
	return Bn(e) ? typeof e == "object" && e && t in e ? e[t] === void 0 : !0 : !1;
}
function J(e, t) {
	if (e !== void 0 && typeof e != "object") return e;
	if (!e || typeof e != "object") return;
	let n = t in e ? e[t] : void 0, r = Bn(e) ? e.placeholder : void 0;
	if (n !== void 0) return t === "date" && typeof n == "object" && n && "getTime" in n ? new Date(n.getTime()) : n;
	if (r !== void 0) return r;
}
function Vn(e) {
	if (Hn(e)) try {
		return e.toLocaleDateString();
	} catch {
		return String(e);
	}
	let t = J(e, "date");
	if (Hn(t)) try {
		return t.toLocaleDateString();
	} catch {
		return String(t);
	}
	return typeof t == "string" ? t : t == null ? "" : String(t);
}
function Hn(e) {
	return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
//#endregion
//#region src/ui/value-display/types/number/number.tsx
var Un = (e, t) => {
	let n = J(e, "number"), r = q(e, "number"), i = {
		unitsPosition: "right",
		units: "",
		...typeof e == "object" && "number" in e ? e : {
			decimalPlaces: void 0,
			number: n
		}
	};
	return /* @__PURE__ */ R("div", {
		className: c("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", K.text], r && "text-f1-foreground-secondary"),
		children: [
			i.unitsPosition === "left" && i.units && /* @__PURE__ */ L(Wn, { units: i.units }),
			i.decimalPlaces === void 0 ? i.number?.toString() ?? "" : i.number?.toFixed(i.decimalPlaces),
			i.unitsPosition === "right" && i.units && /* @__PURE__ */ L(Wn, { units: i.units })
		]
	});
}, Wn = ({ units: e }) => /* @__PURE__ */ L("span", { children: e.toString() }), Gn = (e, t) => {
	let n = {
		symbolPosition: "right",
		symbol: "",
		...typeof e == "object" && "amount" in e ? e : { amount: e }
	};
	return Un({
		...typeof e == "object" && "amount" in e ? e : {},
		number: n.amount,
		decimalPlaces: n.currency?.decimalPlaces,
		units: n.currency?.symbol,
		unitsPosition: n.currency?.symbolPosition
	}, t);
}, Kn = (e, t) => {
	let n = e.type ?? "person";
	return /* @__PURE__ */ L("div", {
		className: c("pointer-events-auto w-full", t.visualization === "table" && K.avatarList),
		children: /* @__PURE__ */ L(Pe, {
			type: n,
			avatars: e.avatarList,
			size: "xs",
			max: e.max
		})
	});
}, Y = 52, X = 6, qn = 2, Jn = 72, Yn = 2, Xn = "categorical-5", Zn = "categorical-1", Qn = .5, $n = "categorical-1";
function er(e) {
	return e;
}
function tr(e) {
	return String(e);
}
function nr({ point: e, scaleMax: t, formatLabel: n, formatValue: r, formatTooltip: i }) {
	let { label: a, value: o, secondaryValue: s, neutralValue: c, neutralFullHeight: l } = e, u = n(a), d = r(o), f = i?.({
		point: e,
		formattedLabel: u,
		formattedValue: d
	}) ?? `${u} – ${d}`, p = Math.max(c ?? 0, 0), m = o + p, h = s != null && m < s, g = s != null && o > s, v = t > 0 ? Math.round(o / t * Y) : 0, ee = l ? Y : t > 0 ? Math.round(p / t * Y) : 0, b = Math.min(ee, Y - v), S = s != null && t > 0 && !h ? Math.round(Math.min(o, s) / t * Y) : v, w = g ? Math.round(Y * ((o - (s ?? 0)) / t)) : 0;
	return /* @__PURE__ */ L(x, {
		delayDuration: 100,
		disableHoverableContent: !0,
		children: /* @__PURE__ */ R(C, { children: [/* @__PURE__ */ L(_, {
			asChild: !0,
			children: /* @__PURE__ */ L("div", {
				className: "flex-shrink-0 cursor-default rounded-sm transition-opacity hover:opacity-90",
				style: {
					width: X,
					height: Y,
					minHeight: Y,
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					alignItems: "stretch"
				},
				role: "img",
				"aria-label": f,
				children: o === 0 && b === 0 ? /* @__PURE__ */ L("div", {
					className: "rounded-sm bg-f1-border-secondary",
					style: {
						width: X,
						height: Yn,
						minHeight: Yn
					}
				}) : l ? /* @__PURE__ */ L("div", {
					className: "rounded-sm bg-f1-border-secondary",
					style: {
						width: X,
						height: Y,
						minHeight: Y
					}
				}) : h ? /* @__PURE__ */ R(Qe, { children: [v > 0 && /* @__PURE__ */ L("div", { style: {
					width: X,
					height: v,
					backgroundColor: P(Xn),
					borderRadius: b > 0 ? "2px 2px 0 0" : 2
				} }), b > 0 && /* @__PURE__ */ L("div", {
					className: "bg-f1-border-secondary",
					style: {
						width: X,
						height: b,
						borderRadius: v > 0 ? "0 0 2px 2px" : 2
					}
				})] }) : g && w > 0 ? /* @__PURE__ */ R(Qe, { children: [/* @__PURE__ */ L("div", { style: {
					width: X,
					height: w,
					backgroundColor: P($n),
					borderRadius: "2px 2px 0 0"
				} }), /* @__PURE__ */ L("div", { style: {
					width: X,
					height: S,
					backgroundColor: P(Zn, Qn),
					borderRadius: "0 0 2px 2px"
				} })] }) : /* @__PURE__ */ R(Qe, { children: [v > 0 && /* @__PURE__ */ L("div", { style: {
					width: X,
					height: v,
					backgroundColor: P(Zn, Qn),
					borderRadius: b > 0 ? "2px 2px 0 0" : 2
				} }), b > 0 && /* @__PURE__ */ L("div", {
					className: "bg-f1-border-secondary",
					style: {
						width: X,
						height: b,
						borderRadius: v > 0 ? "0 0 2px 2px" : 2
					}
				})] })
			})
		}), /* @__PURE__ */ L(y, {
			className: "pointer-events-none z-[100] max-w-xs",
			side: "top",
			sideOffset: 6,
			children: /* @__PURE__ */ L("p", {
				className: "font-semibold",
				children: f
			})
		})] })
	});
}
var rr = (e, t) => {
	let n = e?.dataPoints;
	if (!n || !Array.isArray(n) || n.length === 0) return /* @__PURE__ */ L("div", {
		className: c("text-f1-foreground-secondary", t.visualization === "table" && K.text),
		"data-cell-type": "barSeries",
		children: "–"
	});
	let r = e.formatLabel ?? er, i = e.formatValue ?? tr, a = Math.max(...n.map((e) => Math.max(e.value + Math.max(e.neutralValue ?? 0, 0), e.secondaryValue ?? 0)), 0), o = e.scaleMax ?? Math.max(a, 1);
	return /* @__PURE__ */ L("div", {
		className: c("flex items-center justify-end gap-0.5 overflow-visible py-1", t.visualization === "table" && "pt-0.5"),
		style: {
			minHeight: Jn,
			height: Jn,
			minWidth: n.length * 8 - qn
		},
		"data-cell-type": "barSeries",
		role: "img",
		"aria-label": "Bar series",
		children: n.map((t, n) => /* @__PURE__ */ L("div", {
			className: "pointer-events-auto",
			children: /* @__PURE__ */ L(nr, {
				point: t,
				scaleMax: o,
				formatLabel: r,
				formatValue: i,
				formatTooltip: e.formatTooltip
			})
		}, `${t.label}-${n}`))
	});
}, ir = new Set(en);
function ar(e) {
	return ir.has(e) ? nn(e) : P(e);
}
var or = 40;
function sr() {
	return "flex h-5 w-full items-center";
}
function cr(e) {
	return e.visualization === "table" ? { minWidth: 80 } : {
		minHeight: or,
		minWidth: 80
	};
}
function lr({ meta: e }) {
	return /* @__PURE__ */ L("div", {
		className: c("text-f1-foreground-secondary", e.visualization === "table" && K.text),
		"data-cell-type": "categoryBarChart",
		children: "–"
	});
}
function ur({ dataPoints: e, total: t, hideTooltip: n, meta: r }) {
	let [i, a] = Ze(void 0), o = kt(e, t, (e, t) => e.color ? ar(e.color) : Fe(t)), l = At(o, t);
	return /* @__PURE__ */ L(x, {
		delayDuration: 350,
		children: /* @__PURE__ */ R(C, { children: [/* @__PURE__ */ L(_, {
			asChild: !0,
			children: /* @__PURE__ */ L("div", {
				className: c(sr(), "pointer-events-auto", s(), r.visualization === "table" && "-my-2.5 box-content py-2.5"),
				style: cr(r),
				"data-cell-type": "categoryBarChart",
				role: "group",
				"aria-label": "Category bar chart",
				tabIndex: 0,
				children: /* @__PURE__ */ L("div", {
					className: "flex h-2 w-full gap-1 overflow-hidden",
					onMouseLeave: () => a(void 0),
					onMouseOver: (e) => {
						e.target === e.currentTarget && a(void 0);
					},
					children: o.map((e) => /* @__PURE__ */ L("div", {
						className: "pointer-events-auto h-full overflow-hidden rounded-2xs",
						style: {
							width: `${e.percentage}%`,
							backgroundColor: e.color
						},
						role: "img",
						"aria-label": `${e.name}: ${e.value} (${Ot(e.value, t)}%)`,
						onMouseEnter: () => a(e.key)
					}, e.key))
				})
			})
		}), !n && l.length > 0 && /* @__PURE__ */ L(jt, {
			items: l,
			activeKey: i
		})] })
	});
}
var dr = (e, t) => {
	if (e?.loading) return /* @__PURE__ */ L("div", {
		className: sr(),
		style: cr(t),
		"data-cell-type": "categoryBarChart",
		"aria-busy": "true",
		children: /* @__PURE__ */ L(E, { className: "h-2 w-full rounded-2xs" })
	});
	let n = e?.dataPoints;
	if (!n || !Array.isArray(n) || n.length === 0) return /* @__PURE__ */ L(lr, { meta: t });
	let r = n.reduce((e, t) => e + t.value, 0);
	return r === 0 ? /* @__PURE__ */ L(lr, { meta: t }) : /* @__PURE__ */ L(ur, {
		dataPoints: n,
		total: r,
		hideTooltip: e.hideTooltip,
		meta: t
	});
}, fr = (e, t) => /* @__PURE__ */ R("div", {
	className: c("flex items-center gap-2", t.visualization === "table" && K.avatar),
	children: [/* @__PURE__ */ L(Ce, {
		avatar: {
			type: "company",
			name: e.name,
			src: e.src
		},
		size: "xs"
	}), /* @__PURE__ */ L("span", {
		className: "text-f1-foreground",
		children: e.name.toString()
	})]
}), pr = " / ", mr = "–", hr = {
	neutral: "text-f1-foreground",
	secondary: "text-f1-foreground-secondary",
	positive: "text-f1-foreground-positive",
	critical: "text-f1-foreground-critical",
	warning: "text-f1-foreground-warning",
	info: "text-f1-foreground-info",
	selected: "text-f1-foreground-selected"
}, Z = (e, t) => e === void 0 ? t === void 0 ? {
	kind: "text",
	text: mr,
	isMissing: !0
} : {
	kind: "text",
	text: t,
	isMissing: !0
} : {
	kind: "text",
	text: e,
	isMissing: !1
}, gr = (e) => {
	if (e.length === 0 || !e.every((e) => e.isMissing)) return null;
	let [t] = e;
	return t.kind === "text" ? t.text : mr;
}, _r = ({ number: e, units: t, unitsPosition: n, decimalPlaces: r }) => {
	let i = n ?? "right", a = t ?? "";
	return {
		value: r === void 0 ? e?.toString() ?? "" : e?.toFixed(r) ?? "",
		units: a,
		unitsPosition: i
	};
}, vr = ({ parts: e }) => /* @__PURE__ */ R(Qe, { children: [
	e.unitsPosition === "left" && e.units && /* @__PURE__ */ L("span", { children: e.units.toString() }),
	e.value,
	e.unitsPosition === "right" && e.units && /* @__PURE__ */ L("span", { children: e.units.toString() })
] }), yr = (e) => {
	switch (e.type) {
		case "text": return Z(e.value === void 0 ? void 0 : e.value.toString(), e.placeholder);
		case "number": return e.value === void 0 ? Z(void 0, e.placeholder) : {
			kind: "formatted",
			parts: _r({
				number: e.value,
				decimalPlaces: e.decimalPlaces,
				units: e.units,
				unitsPosition: e.unitsPosition
			}),
			isMissing: !1
		};
		case "percentage": return e.value === void 0 ? Z(void 0, e.placeholder) : Z(`${_r({
			number: e.value,
			decimalPlaces: e.decimalPlaces
		}).value}%`);
		case "amount": return e.value === void 0 ? Z(void 0, e.placeholder) : {
			kind: "formatted",
			parts: _r({
				number: e.value,
				decimalPlaces: e.currency?.decimalPlaces,
				units: e.currency?.symbol,
				unitsPosition: e.currency?.symbolPosition
			}),
			isMissing: !1
		};
	}
}, br = (e, t) => e || (t ? "secondary" : "neutral"), xr = (e, t) => {
	let n = c("flex flex-1 items-center text-f1-foreground", t.visualization === "table" && [t.tableAlign === "right" && "justify-end", K.text]);
	if (e.segments.length === 0) return /* @__PURE__ */ L("div", {
		className: n,
		"data-cell-type": "compound",
		children: /* @__PURE__ */ L("span", {
			className: hr.secondary,
			children: mr
		})
	});
	let r = e.separator ?? pr, i = e.segments.map((e) => yr(e)), a = gr(i);
	return a === null ? /* @__PURE__ */ L("div", {
		className: n,
		"data-cell-type": "compound",
		children: e.segments.map((e, t) => {
			let n = i[t], a = br(e.tone, n.isMissing);
			return /* @__PURE__ */ R(Je, { children: [t > 0 && /* @__PURE__ */ L("span", {
				className: c(hr.secondary, "whitespace-pre"),
				children: r
			}), /* @__PURE__ */ L("span", {
				className: c(hr[a], n.kind === "formatted" && "inline-flex items-center gap-1"),
				children: n.kind === "formatted" ? /* @__PURE__ */ L(vr, { parts: n.parts }) : n.text
			})] }, `${e.type}-${t}`);
		})
	}) : /* @__PURE__ */ L("div", {
		className: n,
		"data-cell-type": "compound",
		children: /* @__PURE__ */ L("span", {
			className: hr.secondary,
			children: a
		})
	});
}, Sr = (e, t) => /* @__PURE__ */ R("div", {
	className: "flex gap-1",
	children: [/* @__PURE__ */ L("span", {
		className: "text-f1-foreground-secondary",
		children: t.i18n.collections.summaries.types.count
	}), `${e.label}`]
}), Cr = (e, n) => {
	let r = e.label ?? n.i18n.countries[e.code] ?? e.code;
	return /* @__PURE__ */ R("div", {
		"data-cell-type": "country",
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ L(He, {
			size: "xs",
			flag: e.code,
			"aria-label": r
		}), /* @__PURE__ */ L(t, {
			className: "min-w-0 flex-1 text-f1-foreground",
			tag: "span",
			children: r
		})]
	});
}, wr = (e, t) => {
	let n = Vn(e), r = q(e, "date");
	return /* @__PURE__ */ L("div", {
		className: c("monospace text-f1-foreground", r && "text-f1-foreground-secondary", t.visualization === "table" && K.text),
		children: n
	});
}, Tr = {
	positive: Oe,
	negative: ve
}, Er = (e) => {
	let { deltaStatus: t } = e, r = Tr[t];
	return /* @__PURE__ */ R("div", {
		className: "flex items-center gap-1 pt-0.5",
		children: [/* @__PURE__ */ L(n, {
			icon: r,
			color: t == "positive" ? "positive" : "critical"
		}), /* @__PURE__ */ L("span", {
			className: "text-f1-foreground font-normal",
			children: e.label
		})]
	});
}, Dr = (e) => /* @__PURE__ */ L("div", {
	"data-cell-type": "dot-tag",
	children: /* @__PURE__ */ L(xe, {
		text: e.label,
		color: e.color
	})
}), Or = (e) => /* @__PURE__ */ R("div", {
	className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
	"data-cell-type": "file",
	children: [
		/* @__PURE__ */ L(Ke, { file: e }),
		" ",
		/* @__PURE__ */ L("span", { children: e.name })
	]
}), kr = (e, t) => /* @__PURE__ */ L("div", {
	className: c("flex items-center gap-2", t.visualization === "table" && K.avatar),
	children: /* @__PURE__ */ L(Le, {
		tooltip: e.tooltip,
		children: /* @__PURE__ */ R("div", {
			className: "inline-flex items-center gap-2",
			children: [/* @__PURE__ */ L(n, {
				icon: e.icon,
				"aria-label": e.hideLabel ? e.label : void 0
			}), e.hideLabel ? /* @__PURE__ */ L("span", {
				className: "sr-only",
				children: e.label
			}) : /* @__PURE__ */ L("span", {
				className: "text-f1-foreground",
				children: e.label
			})]
		})
	})
}), Ar = (e) => /* @__PURE__ */ L(kr, {
	icon: tt,
	label: e.name
}), jr = 480;
function Mr(e) {
	try {
		let t = new Date(e);
		return Number.isNaN(t.getTime()) ? e : t.toLocaleDateString(void 0, {
			day: "numeric",
			month: "long"
		});
	} catch {
		return e;
	}
}
function Nr(e) {
	let t = Math.floor(e / 60), n = e % 60;
	return n === 0 ? `${t}h` : `${t}h ${n}m`;
}
function Pr(e) {
	return {
		label: e.date,
		value: e.value,
		...e.plannedValue == null ? {} : { secondaryValue: e.plannedValue },
		...e.justifiedAbsenceValue == null ? {} : { neutralValue: e.justifiedAbsenceValue },
		...e.justifiedAbsenceFullDay ? { neutralFullHeight: e.justifiedAbsenceFullDay } : {},
		...e.neutralLabel == null ? {} : { neutralLabel: e.neutralLabel }
	};
}
function Fr(e) {
	let t = e.dataPoints.map(Pr), n = e.workedLabel ?? "Worked", r = e.justifiedAbsenceLabel ?? "Justified absence", i = Math.max(...e.dataPoints.map((e) => Math.max(e.value + Math.max(e.justifiedAbsenceValue ?? 0, 0), e.plannedValue ?? 0)), jr * .1);
	return {
		dataPoints: t,
		formatLabel: Mr,
		formatValue: Nr,
		formatTooltip: ({ point: e, formattedLabel: t, formattedValue: i }) => {
			let a = [`${n} ${i}`], o = e.neutralLabel ?? r;
			return e.neutralFullHeight ? a.push(o) : e.neutralValue != null && e.neutralValue > 0 && a.push(`${o} ${Nr(e.neutralValue)}`), `${t} - ${a.join(", ")}`;
		},
		scaleMax: Math.min(i, jr)
	};
}
var Ir = (e, t) => {
	let n = e?.dataPoints;
	return !n || !Array.isArray(n) || n.length === 0 ? /* @__PURE__ */ L("div", {
		className: c("text-f1-foreground-secondary", t.visualization === "table" && K.text),
		"data-cell-type": "hourDistribution",
		children: "–"
	}) : rr(Fr(e), t);
}, Lr = (e) => typeof e == "object" && e && "lines" in e ? e.lines : void 0, Rr = (e) => (typeof e == "object" && !!e && "full" in e && e.full) ?? !1, zr = (e, n) => {
	let r = J(e, "text")?.toString() || "", i = q(e, "text"), a = Rr(e), o = Lr(e) || 3;
	return /* @__PURE__ */ L(t, {
		className: c("whitespace-pre-wrap break-words text-f1-foreground", i && "text-f1-foreground-secondary", n.visualization === "table" && K.multiline),
		lines: o,
		disabled: a,
		children: r
	});
}, Br = 100, Vr = 12, Hr = (e, t) => {
	let n = J(e, "percentage"), r = q(e, "percentage");
	if (n === void 0) return null;
	if (r) return /* @__PURE__ */ L("span", {
		className: c("text-f1-foreground", r && "text-f1-foreground-secondary", t.visualization === "table" && K.text),
		"data-cell-type": "percentage",
		children: n
	});
	let i = Br / 2, a = i - Vr / 2, o = 2 * Math.PI * 32, s = (100 - Math.min(Number(n), 100)) / 100 * o, l = typeof e == "object" && "label" in e;
	return /* @__PURE__ */ R("div", {
		className: "flex items-center gap-2",
		"data-cell-type": "percentage",
		children: [/* @__PURE__ */ R("svg", {
			viewBox: `0 0 ${Br} ${Br}`,
			className: "h-7 w-7 -rotate-90 transform",
			children: [/* @__PURE__ */ L("circle", {
				cx: i,
				cy: i,
				r: a,
				className: "fill-f1-background-positive"
			}), /* @__PURE__ */ L("circle", {
				cx: i,
				cy: i,
				r: 32,
				className: "stroke-f1-background-positive-bold",
				fill: "none",
				strokeWidth: Vr,
				strokeDasharray: o,
				strokeDashoffset: s,
				strokeLinecap: "round"
			})]
		}), /* @__PURE__ */ L("span", {
			className: "text-f1-foreground",
			children: l ? e.label : `${n}%`
		})]
	});
}, Ur = (e, n) => {
	let r = `${e.firstName.toString()} ${e.lastName.toString()}`;
	return /* @__PURE__ */ R("div", {
		className: c("flex min-w-0 flex-1 items-center gap-2", n.visualization === "table" && K.avatar),
		children: [/* @__PURE__ */ L(Ce, {
			avatar: {
				type: "person",
				firstName: e.firstName.toString(),
				lastName: e.lastName.toString(),
				src: e.src,
				badge: e.badge,
				deactivated: e.deactivated
			},
			size: "xs"
		}), /* @__PURE__ */ L(t, {
			className: c("min-w-0 flex-1", e.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
			tag: "span",
			children: r
		})]
	});
}, Wr = (e, t) => {
	let n = J(e, "value"), r = q(e, "value");
	if (n === void 0) return null;
	if (r) return /* @__PURE__ */ L("span", {
		className: "text-f1-foreground-secondary",
		"data-cell-type": "progressBar",
		children: n
	});
	let i = n, a = typeof e == "object" && "max" in e ? e.max ?? 100 : 100, o = typeof e == "object" && "label" in e ? e.label : void 0, s = typeof e == "object" && "hideLabel" in e ? e.hideLabel : void 0, c = typeof e == "object" && "color" in e ? e.color : void 0, l = P(c || "categorical-1"), u = i / a * 100;
	return /* @__PURE__ */ R("div", {
		className: "flex w-full items-center gap-2",
		"data-cell-type": "progressBar",
		children: [/* @__PURE__ */ L("div", {
			className: "min-w-16 flex-grow",
			children: /* @__PURE__ */ L(Ie, {
				color: l,
				value: u,
				max: 100,
				getValueLabel: (e) => `${(e ?? 0).toFixed(1)}% ${o}`,
				"aria-label": o,
				className: "w-full"
			})
		}), !s && /* @__PURE__ */ L("div", {
			className: "flex-shrink-0 text-sm font-medium text-f1-foreground",
			children: o
		})]
	});
}, Gr = 4, Kr = "categorical-1", qr = .5, Jr = 4, Yr = {
	sm: "h-1.5",
	md: "h-2",
	lg: "h-3"
}, Xr = {
	sm: "text-xs",
	md: "text-sm",
	lg: "text-sm"
}, Zr = "h-full transition-all duration-300 ease-in-out motion-reduce:transition-none", Qr = "[background-image:repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(0,0,0,0.16)_3px,rgba(0,0,0,0.16)_6px)] dark:[background-image:repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(255,255,255,0.2)_3px,rgba(255,255,255,0.2)_6px)]";
function $r(e) {
	return `${e % 1 == 0 ? e.toFixed(0) : e.toFixed(1)}%`;
}
var ei = /\D*$/;
function ti(e, t, n) {
	let r = n(e), i = n(t), a = i.match(ei)?.[0] ?? "";
	return `${(a && r.endsWith(a) ? r.slice(0, -a.length) : "") || r} / ${i}`;
}
function ni({ pct: e, color: t }) {
	let n = P(t);
	if (e <= 100) return /* @__PURE__ */ L("div", {
		className: Zr,
		style: {
			width: `${Math.max(0, e)}%`,
			backgroundColor: n
		}
	});
	let r = 100 / e * 100;
	return /* @__PURE__ */ R("div", {
		className: "flex h-full w-full",
		children: [/* @__PURE__ */ L("div", {
			className: Zr,
			style: {
				width: `${r}%`,
				backgroundColor: n
			}
		}), /* @__PURE__ */ L("div", {
			className: Zr,
			style: {
				width: `${100 - r}%`,
				backgroundColor: P(t, qr)
			}
		})]
	});
}
function ri(e, t, n) {
	let r = e.max ?? 100, i = e.value === void 0 || !Number.isFinite(e.value) || !Number.isFinite(r) || r <= 0, a = i ? 0 : e.value / r * 100, o = e.canceled ? t.progressSeries.canceled : i ? t.progressSeries.noData : `${ti(e.value, r, n)} (${$r(a)})`;
	return {
		bar: e,
		isEmpty: i,
		pct: a,
		caption: e.canceled || i ? e.caption ?? "" : e.caption ?? $r(a),
		tooltip: e.tooltip ?? (e.label ? `${e.label} · ${o}` : o)
	};
}
function ii({ resolved: e, rounded: t, hideTooltip: n }) {
	let { bar: r, isEmpty: i, pct: a, tooltip: o } = e;
	return /* @__PURE__ */ R(C, { children: [/* @__PURE__ */ L(_, {
		asChild: !0,
		children: /* @__PURE__ */ L("div", {
			role: "img",
			"aria-label": o,
			tabIndex: 0,
			className: c("pointer-events-auto relative h-full min-w-[3px] flex-1 cursor-default overflow-hidden", s(), t, r.canceled ? c("bg-f1-foreground-disabled", Qr) : "bg-f1-background-secondary"),
			children: !i && !r.canceled && /* @__PURE__ */ L(ni, {
				pct: a,
				color: r.color ?? Kr
			})
		})
	}), !n && /* @__PURE__ */ L(y, {
		className: "text-sm",
		children: o
	})] });
}
function ai({ label: e, caption: t, textClass: n }) {
	return !e && !t ? null : /* @__PURE__ */ R("div", {
		className: c("flex items-center gap-1 truncate", n),
		children: [e && /* @__PURE__ */ L("span", {
			className: "text-f1-foreground",
			children: e
		}), t && /* @__PURE__ */ L("span", {
			className: "text-f1-foreground-secondary",
			children: t
		})]
	});
}
function oi(e, t) {
	return e <= 0 || t <= 0 ? [] : e <= t ? Array.from({ length: e }, (e, t) => t) : Array.from({ length: t }, (n, r) => Math.floor(r * e / t));
}
var si = I(({ bars: e, maxLabels: t = Gr, hideTooltip: n, formatValue: r = String, size: a = "md", loading: o }, s) => {
	let l = i();
	if (o) return /* @__PURE__ */ L("div", {
		ref: s,
		className: "w-full",
		"aria-busy": "true",
		"aria-live": "polite",
		children: /* @__PURE__ */ L(E, { className: c("w-full rounded-2xs", Yr[a]) })
	});
	let u = e.length > Jr, d = u ? "gap-0.5" : "gap-1", f = u ? "rounded-2xs" : "rounded-full", p = new Set(oi(e.length, t)), m = e.map((e) => ri(e, l, r)), h = m.some((e, t) => p.has(t) && (e.bar.label || e.caption));
	return /* @__PURE__ */ L("div", {
		ref: s,
		className: "flex w-full flex-col gap-1",
		children: /* @__PURE__ */ R(x, { children: [/* @__PURE__ */ L("div", {
			className: c("flex w-full", Yr[a], d),
			children: m.map((e, t) => /* @__PURE__ */ L(ii, {
				resolved: e,
				rounded: f,
				hideTooltip: n
			}, `${e.bar.label}-${t}`))
		}), h && /* @__PURE__ */ L("div", {
			className: c("flex w-full", d),
			"aria-hidden": "true",
			children: m.map((e, t) => /* @__PURE__ */ L("div", {
				className: "min-w-[3px] flex-1 overflow-hidden",
				children: p.has(t) && /* @__PURE__ */ L(ai, {
					label: e.bar.label,
					caption: e.caption,
					textClass: Xr[a]
				})
			}, `${e.bar.label}-${t}`))
		})] })
	});
});
si.displayName = "F0ProgressSeries";
var ci = e(a("F0ProgressSeries", si)), li = 40, ui = 80;
function di(e) {
	return e.visualization === "table" ? { minWidth: ui } : {
		minHeight: li,
		minWidth: ui
	};
}
var fi = (e, t) => {
	let n = e?.bars;
	return !e?.loading && (!Array.isArray(n) || n.length === 0) ? /* @__PURE__ */ L("div", {
		className: c("text-f1-foreground-secondary", t.visualization === "table" && K.text),
		"data-cell-type": "progressSeries",
		children: "–"
	}) : /* @__PURE__ */ L("div", {
		className: "flex w-full items-center",
		style: di(t),
		"data-cell-type": "progressSeries",
		"aria-busy": e.loading || void 0,
		children: /* @__PURE__ */ L(ci, {
			...e,
			bars: n ?? []
		})
	});
}, pi = (e) => /* @__PURE__ */ L("div", {
	"data-cell-type": "status",
	children: /* @__PURE__ */ L(Le, {
		tooltip: e.tooltip,
		children: /* @__PURE__ */ L("div", {
			className: "w-fit max-w-full",
			children: /* @__PURE__ */ L(be, {
				variant: e.status,
				text: e.label,
				icon: e.icon,
				additionalAccessibleText: ze(e.tooltip)
			})
		})
	})
}), mi = (e, t) => /* @__PURE__ */ R("div", {
	className: "flex gap-1",
	children: [/* @__PURE__ */ L("span", {
		className: "text-f1-foreground-secondary",
		children: t.i18n.collections.summaries.types.sum
	}), `${e.label}`]
}), hi = {
	default: void 0,
	neutral: "border-none bg-f1-background-secondary text-f1-foreground-secondary"
}, gi = (e) => /* @__PURE__ */ L("div", {
	"data-cell-type": "tag",
	children: /* @__PURE__ */ L(ye, {
		text: e.label,
		icon: e.icon,
		className: hi[e.variant ?? "default"]
	})
}), _i, vi = "HoverCard", [yi, bi] = d(vi, [b]), xi = b(), [Si, Ci] = yi(vi), wi = (e) => {
	let { __scopeHoverCard: t, children: n, open: r, defaultOpen: i, onOpenChange: a, openDelay: o = 700, closeDelay: s = 300 } = e, c = xi(t), l = F.useRef(0), u = F.useRef(0), d = F.useRef(!1), f = F.useRef(!1), [p, m] = ee({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: vi
	}), h = F.useCallback(() => {
		clearTimeout(u.current), l.current = window.setTimeout(() => m(!0), o);
	}, [o, m]), _ = F.useCallback(() => {
		clearTimeout(l.current), !d.current && !f.current && (u.current = window.setTimeout(() => m(!1), s));
	}, [s, m]), v = F.useCallback(() => m(!1), [m]);
	return F.useEffect(() => () => {
		clearTimeout(l.current), clearTimeout(u.current);
	}, []), /* @__PURE__ */ L(Si, {
		scope: t,
		open: p,
		onOpenChange: m,
		onOpen: h,
		onClose: _,
		onDismiss: v,
		hasSelectionRef: d,
		isPointerDownOnContentRef: f,
		children: /* @__PURE__ */ L(g, {
			...c,
			children: n
		})
	});
};
wi.displayName = vi;
var Ti = "HoverCardTrigger", Ei = F.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = Ci(Ti, n), a = xi(n);
	return /* @__PURE__ */ L(v, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ L(f.a, {
			"data-state": i.open ? "open" : "closed",
			...r,
			ref: t,
			onPointerEnter: u(e.onPointerEnter, Q(i.onOpen)),
			onPointerLeave: u(e.onPointerLeave, Q(i.onClose)),
			onFocus: u(e.onFocus, i.onOpen),
			onBlur: u(e.onBlur, i.onClose),
			onTouchStart: u(e.onTouchStart, (e) => e.preventDefault())
		})
	});
});
Ei.displayName = Ti;
var Di = "HoverCardPortal", [Oi, ki] = yi(Di, { forceMount: void 0 }), Ai = (e) => {
	let { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e, a = Ci(Di, t);
	return /* @__PURE__ */ L(Oi, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ L(S, {
			present: n || a.open,
			children: /* @__PURE__ */ L(m, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Ai.displayName = Di;
var ji = "HoverCardContent", Mi = F.forwardRef((e, t) => {
	let n = ki(ji, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...i } = e, a = Ci(ji, e.__scopeHoverCard);
	return /* @__PURE__ */ L(S, {
		present: r || a.open,
		children: /* @__PURE__ */ L(Ni, {
			"data-state": a.open ? "open" : "closed",
			...i,
			onPointerEnter: u(e.onPointerEnter, Q(a.onOpen)),
			onPointerLeave: u(e.onPointerLeave, Q(a.onClose)),
			ref: t
		})
	});
});
Mi.displayName = ji;
var Ni = F.forwardRef((e, t) => {
	let { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, ...s } = e, c = Ci(ji, n), d = xi(n), f = F.useRef(null), m = p(t, f), [g, _] = F.useState(!1);
	return F.useEffect(() => {
		if (g) {
			let e = document.body;
			return _i = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = _i, e.style.webkitUserSelect = _i;
			};
		}
	}, [g]), F.useEffect(() => {
		if (f.current) {
			let e = () => {
				_(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (c.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [c.isPointerDownOnContentRef, c.hasSelectionRef]), F.useEffect(() => {
		f.current && Ii(f.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ L(l, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: o,
		onEscapeKeyDown: r,
		onPointerDownOutside: i,
		onFocusOutside: u(a, (e) => {
			e.preventDefault();
		}),
		onDismiss: c.onDismiss,
		children: /* @__PURE__ */ L(h, {
			...d,
			...s,
			onPointerDown: u(s.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && _(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
			}),
			ref: m,
			style: {
				...s.style,
				userSelect: g ? "text" : void 0,
				WebkitUserSelect: g ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), Pi = "HoverCardArrow", Fi = F.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = xi(n);
	return /* @__PURE__ */ L(w, {
		...i,
		...r,
		ref: t
	});
});
Fi.displayName = Pi;
function Q(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function Ii(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
var Li = wi, Ri = Ei, zi = Ai, Bi = Mi, Vi = Li, Hi = Ri, Ui = F.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, container: r, ...i }, a) => /* @__PURE__ */ L(zi, {
	container: r,
	children: /* @__PURE__ */ L(Bi, {
		ref: a,
		align: t,
		sideOffset: n,
		className: c("z-50 w-[200px] rounded bg-f1-background-inverse font-medium text-f1-foreground-inverse outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
		...i
	})
}));
Ui.displayName = Bi.displayName;
//#endregion
//#region src/components/tags/F0TagList/components/TagCounter.tsx
var Wi = ({ count: e, list: t }) => {
	let n = /* @__PURE__ */ L(ye, { text: `+${e}` });
	return t?.length ? /* @__PURE__ */ R(Vi, { children: [/* @__PURE__ */ L(Hi, { children: /* @__PURE__ */ L("span", {
		className: "pointer-events-auto relative z-[1] cursor-pointer",
		children: n
	}) }), /* @__PURE__ */ L(Ui, {
		side: "top",
		className: "w-fit bg-f1-background text-f1-foreground shadow-md ring-1 ring-f1-border-secondary",
		children: /* @__PURE__ */ L(Se, {
			className: "flex max-h-[220px] w-fit flex-col",
			children: t.map((e, t) => /* @__PURE__ */ L("div", {
				className: "flex w-max max-w-72 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
				children: e.description ? /* @__PURE__ */ L(o, {
					label: e.description,
					children: /* @__PURE__ */ L("div", { children: /* @__PURE__ */ L(En, { tag: e }) })
				}) : /* @__PURE__ */ L(En, { tag: e })
			}, t))
		})
	})] }) : n;
};
Wi.displayName = "TagCounter";
//#endregion
//#region src/components/tags/F0TagList/F0TagList.tsx
var Gi = ({ type: e, tags: t, max: n = 4, remainingCount: r }) => {
	let i = t.map((t) => ({
		type: e,
		...t
	}));
	return /* @__PURE__ */ L(Ae, {
		items: i,
		max: n,
		min: 1,
		fluidItems: !0,
		renderListItem: (e) => /* @__PURE__ */ L(En, { tag: e }),
		renderDropdownItem: () => null,
		forceShowingOverflowIndicator: r !== void 0,
		renderOverflowIndicator: (e) => /* @__PURE__ */ L(Wi, {
			count: (r ?? 0) + e,
			list: r ? void 0 : i.slice(i.length - e)
		}),
		overflowIndicatorWithPopover: !1,
		className: "min-w-0 flex-1"
	});
};
Gi.displayName = "F0TagList";
//#endregion
//#region src/components/tags/F0TagList/index.tsx
var Ki = e(Gi), $ = {
	text: (e, n) => {
		let r = J(e, "text"), i = q(e, "text"), a = r?.toString() ?? "";
		return /* @__PURE__ */ L(t, {
			lines: 1,
			tag: "span",
			className: c("text-f1-foreground", i && "text-f1-foreground-secondary", n.visualization === "table" && K.text),
			children: a
		});
	},
	longText: zr,
	number: Un,
	date: wr,
	amount: Gn,
	compound: xr,
	avatarList: Kn,
	status: pi,
	alertTag: Rn,
	person: Ur,
	percentage: Hr,
	progressBar: Wr,
	progressSeries: fi,
	barSeries: rr,
	categoryBarChart: dr,
	hourDistribution: Ir,
	company: fr,
	team: (e, t) => /* @__PURE__ */ R("div", {
		className: c("flex items-center gap-2", t.visualization === "table" && K.avatar),
		children: [/* @__PURE__ */ L(Ce, {
			avatar: {
				type: "team",
				name: e.name,
				src: e.src
			},
			size: "xs"
		}), /* @__PURE__ */ L("span", {
			className: "text-f1-foreground",
			children: e.name.toString()
		})]
	}),
	tag: gi,
	dotTag: Dr,
	tagList: (e) => /* @__PURE__ */ L(Ki, {
		type: e.type,
		tags: e.tags,
		max: e.max
	}),
	icon: kr,
	file: Or,
	folder: Ar,
	country: Cr,
	delta: Er,
	summary: mi,
	count: Sr
}, qi = (e) => e !== void 0 && typeof e == "object", Ji = (e, t, n) => {
	let { type: r, value: i } = qi(e) ? e : {
		type: "text",
		value: e ?? n
	}, a = $[r];
	return a ? i === void 0 ? n : a(i, {
		visualization: t.visualization,
		i18n: t.i18n,
		tableAlign: t.tableAlign
	}) : `[Invalid ${r} renderer]`;
}, Yi = {
	text: $.text,
	number: $.number,
	date: $.date,
	amount: $.amount,
	person: $.person,
	company: $.company,
	team: $.team,
	status: $.status,
	tag: $.tag,
	avatarList: $.avatarList,
	tagList: $.tagList,
	alertTag: $.alertTag,
	dotTag: $.dotTag,
	file: $.file,
	folder: $.folder,
	progressBar: $.progressBar
};
function Xi({ metadata: e }) {
	let { type: t, value: r } = e.property, i = Yi[t];
	if (!i) return /* @__PURE__ */ R("div", {
		className: "flex h-8 items-center gap-1.5",
		children: ["icon" in e && e.icon && /* @__PURE__ */ L(n, {
			icon: e.icon,
			color: "default",
			size: "md"
		}), /* @__PURE__ */ R("span", { children: ["Unsupported property type: ", t] })]
	});
	let a = i;
	return /* @__PURE__ */ R("div", {
		className: "flex h-8 items-center gap-1.5",
		children: ["icon" in e && e.icon && /* @__PURE__ */ L("div", {
			className: "pointer-events-auto flex items-center",
			children: /* @__PURE__ */ L(o, {
				label: e.property.label,
				children: /* @__PURE__ */ L(n, {
					icon: e.icon,
					color: "default",
					size: "md"
				})
			})
		}), a(r, { visualization: "card" })]
	});
}
//#endregion
//#region src/components/F0Card/components/CardOptions.tsx
function Zi({ otherActions: e, selectable: t = !1, selected: n = !1, onSelect: r, bookmark: a, title: o, overlay: s = !1 }) {
	let l = i(), u = e && e.length > 0, [d, f] = Ze(!1);
	return !u && !t && !a ? null : /* @__PURE__ */ R("div", {
		className: c("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (d || n || a?.bookmarked) && "delay-0 sm:opacity-100", s && "pointer-events-auto absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
		children: [
			u && /* @__PURE__ */ L("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ L(Ne, {
					items: e,
					open: d,
					onOpenChange: f,
					children: /* @__PURE__ */ L(T, {
						label: l.actions.other,
						icon: Re,
						variant: "ghost",
						size: "sm",
						hideLabel: !0,
						pressed: d,
						compact: !0,
						"data-testid": "card-options-dropdown",
						onClick: (e) => e.stopPropagation()
					})
				})
			}),
			t && /* @__PURE__ */ L("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ L(Ee, {
					title: o,
					checked: n,
					onCheckedChange: r,
					hideLabel: !0,
					stopPropagation: !0
				})
			}),
			a && /* @__PURE__ */ L("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ L(T, {
					label: a.label ?? o ?? l.actions.save,
					icon: a.bookmarked ? et : $e,
					variant: "ghost",
					size: "sm",
					hideLabel: !0,
					pressed: a.bookmarked,
					compact: !0,
					"data-testid": "card-bookmark-toggle",
					onClick: (e) => {
						e.stopPropagation(), a.onBookmarkChange(!a.bookmarked);
					}
				})
			})
		]
	});
}
//#endregion
//#region src/components/F0Card/CardInternal.tsx
var Qi = [
	"contain",
	"cover",
	"fit-width",
	"fit-height",
	"scale-down"
], $i = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
], ea = ["default", "video"], ta = {
	xs: "h-24",
	sm: "h-32",
	md: "h-40",
	lg: "h-48",
	xl: "h-64"
}, na = {
	contain: "object-contain h-full w-full",
	cover: "object-cover h-full w-full",
	"fit-width": "w-full h-auto",
	"fit-height": "object-contain h-full w-auto",
	"scale-down": "object-scale-down h-full w-full"
};
function ra(e) {
	return na[e];
}
var ia = I(function({ compact: e = !1, avatar: n, image: r, imageFit: i = "fit-width", imageSize: a = "sm", imageAspectRatio: o = "default", blurredBackground: l = !0, title: u, description: d, metadata: f, children: p, link: m, primaryAction: h, secondaryActions: g, otherActions: _, bookmark: v, selectable: y = !1, subtleBorder: ee = !1, selected: b = !1, onSelect: x, onClick: S, forceVerticalMetadata: C = !1, fullHeight: w = !1, disableOverlayLink: T = !1, alert: E }, te) {
	let D = Xe(null), O = !T && (!!m || !!S), k = (e) => {
		D?.current?.click(), S?.(), e.preventDefault(), e.stopPropagation();
	}, A = /* @__PURE__ */ R(z, {
		className: c("group relative bg-f1-background shadow-none transition-all", ee && "border-f1-border-secondary", e && "p-3", w && "h-full", (y || _ && _.length > 0) && !b && "hover:border-f1-border", m && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", b && "border-f1-border-selected bg-f1-background-selected-secondary"),
		style: E && E.visible !== !1 && !b ? {
			borderColor: kn[E.variant],
			borderWidth: "2px"
		} : void 0,
		onClick: S,
		"data-testid": "card",
		ref: E && E.visible !== !1 ? void 0 : te,
		children: [
			m && !T && /* @__PURE__ */ L(Ve, {
				href: m,
				variant: "unstyled",
				className: c("z-1 absolute inset-0 block rounded-xl", s()),
				"aria-label": u,
				ref: D,
				children: "\xA0"
			}),
			r && /* @__PURE__ */ R("div", {
				className: c("pointer-events-none relative -mx-3 -mt-3 mb-4 rounded-md", o === "video" ? "aspect-video" : ta[a], e && "-mx-2 -mt-2 mb-3", i === "fit-height" && "flex items-center justify-center overflow-hidden", i === "fit-width" && "flex items-center justify-center overflow-hidden", i !== "fit-width" && i !== "fit-height" && "overflow-hidden"),
				children: [
					l && (i === "contain" || i === "fit-width" || i === "fit-height" || i === "scale-down") && /* @__PURE__ */ L("div", {
						className: "absolute inset-0 z-0 rounded-md",
						style: {
							backgroundImage: `url(${r})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							filter: "blur(20px)",
							opacity: .4,
							transform: "scale(1.1)"
						},
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ L(Ge, {
						src: r,
						alt: u,
						className: c(ra(i))
					}),
					/* @__PURE__ */ L(Zi, {
						otherActions: _,
						selectable: y,
						selected: b,
						onSelect: x,
						bookmark: v,
						title: u,
						overlay: !0
					})
				]
			}),
			/* @__PURE__ */ R("div", {
				className: c("flex grow flex-col gap-2", O && "cursor-pointer"),
				...O ? { onClick: (e) => {
					e.target instanceof Element && e.target.closest("a[href], input, select, textarea, [aria-haspopup]:not([aria-haspopup=\"false\"])") || k(e);
				} } : {},
				children: [
					/* @__PURE__ */ R("div", {
						className: "flex flex-row items-start justify-between gap-1",
						children: [/* @__PURE__ */ R(at, {
							...O ? {
								onClick: (e) => {
									k(e);
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && k(e);
								},
								role: "button",
								"aria-label": u
							} : {},
							className: c("relative flex-col gap-0 p-0", r && !e && "pt-3", e && "flex-row items-center gap-2"),
							children: [n && /* @__PURE__ */ L(Ln, {
								avatar: n,
								overlay: !!r,
								compact: e
							}), /* @__PURE__ */ R("div", {
								className: c("flex flex-col gap-0"),
								children: [/* @__PURE__ */ L(ot, {
									className: c("text-lg font-semibold text-f1-foreground", e && "line-clamp-1 text-base"),
									children: u
								}), d && /* @__PURE__ */ L(st, {
									className: c("text-base text-f1-foreground-secondary"),
									children: /* @__PURE__ */ L(t, {
										lines: e ? 2 : 3,
										children: d
									})
								})]
							})]
						}), !r && /* @__PURE__ */ L(Zi, {
							otherActions: _,
							selectable: y,
							selected: b,
							onSelect: x,
							bookmark: v,
							title: u
						})]
					}),
					f && /* @__PURE__ */ L("div", {
						className: c("relative z-10 flex flex-col gap-0.5", e && "gap-x-3 gap-y-0", C && "flex-col gap-y-0.5"),
						children: f.map((e, t) => /* @__PURE__ */ L(Xi, { metadata: e }, t))
					}),
					p && /* @__PURE__ */ L(ut, {
						className: "pointer-events-none relative z-10 [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_select]:pointer-events-auto [&_textarea]:pointer-events-auto [&_[role='button']]:pointer-events-auto [&_[tabindex]]:pointer-events-auto",
						onClick: (e) => e.stopPropagation(),
						children: p
					})
				]
			}),
			/* @__PURE__ */ L(Dn, {
				primaryAction: h,
				secondaryActions: g,
				compact: e
			})
		]
	});
	return E && E.visible !== !1 ? /* @__PURE__ */ L(Fn, {
		ref: te,
		alert: E,
		fullHeight: w,
		children: A
	}) : A;
}), aa = ({ compact: e = !1 }) => /* @__PURE__ */ R(z, {
	className: c("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ R(at, {
		className: c("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
		children: [/* @__PURE__ */ L(E, { className: c("h-10 w-10 rounded-full", e && "h-6 w-6") }), /* @__PURE__ */ R("div", {
			className: c("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
			children: [/* @__PURE__ */ L(ot, {
				className: "flex h-6 items-center",
				children: /* @__PURE__ */ L(E, { className: c("h-4 w-20 rounded-md", e && "h-3") })
			}), /* @__PURE__ */ L(st, {
				className: "flex h-5 items-center",
				children: /* @__PURE__ */ L(E, { className: "h-3 w-12 rounded-md" })
			})]
		})]
	}), /* @__PURE__ */ L(ut, {
		className: "flex flex-col gap-0",
		children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ R("div", {
			className: "flex h-6 items-center gap-1.5",
			children: [/* @__PURE__ */ L(E, { className: "h-4 w-4 rounded-full" }), /* @__PURE__ */ L(E, { className: "h-3 w-full max-w-20 rounded-md" })]
		}, t))
	})]
}), oa = [
	"info",
	"warning",
	"critical",
	"positive"
], sa = ["forceVerticalMetadata", "disableOverlayLink"], ca = I((e, t) => {
	let n = sa.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ L(ia, {
		ref: t,
		...n
	});
}), la = ({ compact: e = !1 }) => /* @__PURE__ */ L(aa, { compact: e });
ca.displayName = "F0Card";
var ua = e(qe(ca, la));
//#endregion
export { st as $, an as A, Dt as B, bn as C, G as D, fn as E, un as F, yt as G, bt as H, jt as I, z as J, vt as K, kt as L, on as M, nn as N, en as O, rn as P, at as Q, Ot as R, Sn as S, pn as T, xt as U, Et as V, Tt as W, ut as X, ft as Y, dt as Z, Ln as _, Qi as a, En as b, Ji as c, Vi as d, ot as et, Ui as f, zn as g, Wr as h, ea as i, $e as it, ln as j, cn as k, Ki as l, ci as m, oa as n, tt as nt, $i as o, Hi as p, ht as q, ia as r, et as rt, Yi as s, ua as t, it as tt, Wi as u, Fn as v, gn as w, wn as x, kn as y, At as z };
