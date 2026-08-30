import { n as e } from "./data-testid-0GIWgc6Q.js";
import { _ as t, f as n, s as r } from "./variants-BhCxKzs5.js";
import { n as i, t as a } from "./utils-CVzxZnoI.js";
import { i as o, l as s, m as c, r as l, u } from "./F0Button-CYTXun0O.js";
import { E as d, F as f, M as p, O as m, P as h, c as g, d as _, f as v, i as ee, l as y, n as te, o as b, p as ne, r as re, s as x, t as S, u as ie } from "./tooltip-BPSwDQpD.js";
import { a as C, i as w, r as T, t as ae } from "./F0AvatarIcon-dGQ2qbg6.js";
import { $ as oe, A as se, H as ce, M as le, O as ue, P as E, T as de, W as fe, Y as pe, _t as me, a as he, at as ge, ct as _e, dt as ve, ft as ye, ht as be, i as D, it as xe, lt as O, mt as Se, o as Ce, ot as we, p as Te, q as Ee, s as De, t as Oe, tt as ke, ut as k, vt as Ae, y as je } from "./F0Checkbox-Bc_SibvL.js";
import { t as Me } from "./CheckCircle-KIInZpvd.js";
import { t as Ne } from "./Cross-BIv5udZr.js";
import { a as Pe, i as Fe, r as Ie, t as Le, v as Re, x as ze, y as Be } from "./progress-dgj09l6I.js";
import { n as Ve, t as He } from "./F0Link-AFRf9ShT.js";
import { _ as A, c as Ue, h as We, p as Ge, s as Ke } from "./F0Avatar-BNV2fsD_.js";
import { n as qe } from "./skeleton-gsHEXIPQ.js";
import "./purify.es-m7dSeJ6J.js";
import * as j from "react";
import { forwardRef as M, useCallback as Je, useRef as Ye, useState as Xe } from "react";
import { jsx as N, jsxs as P } from "react/jsx-runtime";
var Ze = M((e, t) => /* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ N("path", {
		d: "M15.0004 3.34998C17.016 3.35019 18.6508 4.98466 18.6508 7.00037V17.7982C18.6502 19.6203 16.5246 20.6154 15.1244 19.4496L12.8646 17.5668C12.364 17.1496 11.6368 17.1496 11.1361 17.5668L8.87636 19.4496C7.47621 20.616 5.35061 19.6204 5.35 17.7982V7.00037C5.35 4.98453 6.98455 3.34998 9.00039 3.34998H15.0004ZM9.00039 4.65076C7.70252 4.65076 6.65078 5.7025 6.65078 7.00037V17.7982C6.65139 18.5184 7.49091 18.9117 8.04433 18.4506L10.3041 16.5677C11.2868 15.7491 12.714 15.7491 13.6967 16.5677L15.9564 18.4506C16.5099 18.9112 17.3494 18.5182 17.35 17.7982V7.00037C17.35 5.70263 16.2981 4.65097 15.0004 4.65076H9.00039Z",
		fill: "currentColor"
	})
})), Qe = M((e, t) => /* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ N("path", {
		d: "M15.0004 3.34998C17.016 3.35019 18.6508 4.98466 18.6508 7.00037V17.7982C18.6502 19.6203 16.5246 20.6154 15.1244 19.4496L12.8646 17.5668C12.364 17.1496 11.6368 17.1496 11.1361 17.5668L8.87636 19.4496C7.47621 20.616 5.35061 19.6204 5.35 17.7982V7.00037C5.35 4.98453 6.98455 3.34998 9.00039 3.34998H15.0004Z",
		fill: "currentColor"
	})
})), $e = M((e, t) => /* @__PURE__ */ N("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ N("path", {
		stroke: "currentColor",
		d: "M11.4375 6C11.09 5.38228 10.4364 5 9.72763 5H7.19998C6.07987 5 5.51982 5 5.092 5.21799C4.71567 5.40973 4.40971 5.71569 4.21796 6.09202C3.99998 6.51984 3.99998 7.07989 3.99998 8.2V14.2C3.99998 15.8802 3.99998 16.7202 4.32696 17.362C4.61458 17.9265 5.07352 18.3854 5.63801 18.673C6.27974 19 7.11982 19 8.79998 19H15.2C16.8801 19 17.7202 19 18.3619 18.673C18.9264 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9264 7.6146 18.3619 7.32698C17.7202 7 16.8801 7 15.2 7H13.1473C12.4386 7 11.7849 6.61772 11.4375 6V6Z"
	})
})), et = {
	info: w,
	warning: T,
	critical: C,
	positive: Me
}, tt = M(({ text: e, level: n, info: r }, i) => {
	c(e, {
		disallowEmpty: !0,
		disallowEmojis: !0
	}, { componentName: "F0TagAlert" });
	let o = {
		info: "info",
		warning: "warning",
		critical: "critical",
		positive: "positive"
	}[n];
	return /* @__PURE__ */ N(ye, {
		ref: i,
		className: a("pl-0.5", {
			info: "bg-f1-background-info text-f1-foreground-info",
			warning: "bg-f1-background-warning text-f1-foreground-warning",
			critical: "bg-f1-background-critical text-f1-foreground-critical",
			positive: "bg-f1-background-positive text-f1-foreground-positive"
		}[n]),
		left: /* @__PURE__ */ N(t, {
			icon: et[n],
			size: "md",
			"aria-hidden": !0,
			color: o
		}),
		text: e,
		info: r
	});
});
tt.displayName = "F0TagAlert";
//#endregion
//#region src/components/tags/F0TagAlert/index.tsx
var nt = e(tt), F = j.forwardRef(({ className: e, href: t, onClick: r, disabled: i, children: o, ...s }, c) => {
	let { actions: l } = n();
	return /* @__PURE__ */ P("div", {
		ref: c,
		role: "article",
		className: a("flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-4 shadow", (t || r) && !i && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", e),
		...s,
		onClick: () => {
			if (!i && !t && r) return r();
		},
		children: [t && !i && /* @__PURE__ */ N(u, {
			href: t,
			className: "absolute inset-0 block",
			tabIndex: 0,
			children: /* @__PURE__ */ N("span", {
				className: "sr-only",
				children: l.view
			})
		}), o]
	});
});
F.displayName = "Card";
var I = j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ N("div", {
	ref: n,
	className: a("flex flex-row gap-1.5", e),
	...t
}));
I.displayName = "CardHeader";
var L = j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ N("h3", {
	ref: n,
	className: a("text-base font-medium text-f1-foreground", e),
	...t
}));
L.displayName = "CardTitle";
var R = j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ N("h3", {
	ref: n,
	className: a("line-clamp-1 text-base font-normal text-f1-foreground-secondary", e),
	...t
}));
R.displayName = "CardSubtitle";
var rt = j.forwardRef(({ className: e, content: n }, r) => /* @__PURE__ */ N("div", {
	ref: r,
	className: a("-ml-1 flex h-6 w-6 items-center justify-center", e),
	children: /* @__PURE__ */ N(re, { children: /* @__PURE__ */ P(S, { children: [/* @__PURE__ */ N(ee, {
		className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
		"aria-label": n,
		children: /* @__PURE__ */ N(t, {
			icon: Se,
			size: "md"
		})
	}), /* @__PURE__ */ N(te, { children: /* @__PURE__ */ N("p", { children: n }) })] }) })
}));
rt.displayName = "CardInfo";
var it = j.forwardRef(({ className: e, title: n, icon: r = be, href: i, ...o }, s) => {
	let c = a("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-transparent bg-transparent", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e), l = /* @__PURE__ */ N(t, {
		size: "sm",
		icon: r,
		className: "text-f1-icon-bold"
	});
	if (!i) {
		let { target: e, rel: t, download: r, type: i, ...a } = o;
		return /* @__PURE__ */ N("button", {
			ref: s,
			className: c,
			"aria-label": n,
			type: "button",
			...a,
			children: l
		});
	}
	return /* @__PURE__ */ N(u, {
		ref: s,
		className: c,
		role: "button",
		"aria-label": n,
		href: i,
		...o,
		children: l
	});
});
it.displayName = "CardLink";
var z = j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ N("div", {
	ref: n,
	className: a("relative flex grow flex-col", e),
	...t
}));
z.displayName = "CardContent";
var B = j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ N("div", {
	ref: n,
	className: a("flex items-center", e),
	...t
}));
B.displayName = "CardFooter";
var at = j.forwardRef(function({ className: e, ...t }, n) {
	return /* @__PURE__ */ N("div", {
		ref: n,
		className: a("flex text-3xl font-semibold", e),
		...t
	});
});
B.displayName = "CardComment";
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/compareAsc.mjs
function ot(e, t) {
	let n = O(e), r = O(t), i = n.getTime() - r.getTime();
	return i < 0 ? -1 : i > 0 ? 1 : i;
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructNow.mjs
function st(e) {
	return _e(e, Date.now());
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/getRoundingMethod.mjs
function ct(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/formatDistanceStrict.mjs
function lt(e, t, n) {
	let r = oe(), i = n?.locale ?? r.locale ?? ce, a = ot(e, t);
	if (isNaN(a)) throw RangeError("Invalid time value");
	let o = Object.assign({}, n, {
		addSuffix: n?.addSuffix,
		comparison: a
	}), s, c;
	a > 0 ? (s = O(t), c = O(e)) : (s = O(e), c = O(t));
	let l = ct(n?.roundingMethod ?? "round"), u = c.getTime() - s.getTime(), d = u / ke, f = (u - (pe(c) - pe(s))) / ke, p = n?.unit, m;
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
		let e = l(f / xe);
		return i.formatDistance("xDays", e, o);
	}
	if (m === "month") {
		let e = l(f / ge);
		return e === 12 && p !== "month" ? i.formatDistance("xYears", 1, o) : i.formatDistance("xMonths", e, o);
	}
	{
		let e = l(f / we);
		return i.formatDistance("xYears", e, o);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/formatDistanceToNowStrict.mjs
function ut(e, t) {
	return lt(e, st(e), t);
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isToday.mjs
function V(e) {
	return Ee(e, st(e));
}
//#endregion
//#region ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isYesterday.mjs
function dt(e) {
	return Ee(e, le(st(e), 1));
}
//#endregion
//#region src/lib/date.ts
function ft(e, t) {
	return E(e, "p", { locale: t });
}
function pt(e) {
	return E(e, "HH:mm");
}
function mt(e, t) {
	return E(e, "LLL", { locale: t });
}
function ht(e) {
	return e.getDate();
}
function gt(e, t) {
	return ut(e, {
		addSuffix: !0,
		locale: t
	});
}
function _t(e, { locale: t, yesterdayRelative: n = !0 }) {
	return V(e) ? gt(e, t) : dt(e) ? n ? gt(e, t) : E(e, "p", { locale: t }) : E(e, "PPPp", { locale: t });
}
var vt = (e, t) => {
	let n = {
		today: [],
		yesterday: [],
		lastWeek: [],
		lastMonth: []
	};
	return e.forEach((e) => {
		let r = e[t], i = Math.abs(fe(r, /* @__PURE__ */ new Date()));
		V(r) ? n.today.push(e) : dt(r) ? n.yesterday.push(e) : i <= 7 ? n.lastWeek.push(e) : i <= 30 ? n.lastMonth.push(e) : n[r.getFullYear()] = [...n[r.getFullYear()] || [], e];
	}), n;
}, yt = e(({ date: e, "aria-label": t, "aria-labelledby": n }) => {
	let r = ue(), i = ht(e), a = mt(e, r);
	return /* @__PURE__ */ P("div", {
		className: "flex h-10 w-10 flex-col items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
		"aria-label": t,
		"aria-labelledby": n,
		children: [/* @__PURE__ */ N("div", {
			className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary",
			children: a
		}), /* @__PURE__ */ N("div", {
			className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground",
			children: i
		})]
	});
}), H = (e) => e == null || typeof e == "object" && "value" in e && (e.value === void 0 || e.value === null) && typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null), U = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0, W = (e, t = {}) => {
	if (H(e)) return t.emptyPlaceholder || "";
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
	let n = U(e);
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
}, bt = (e) => e == null ? { value: void 0 } : typeof e == "number" ? { value: e } : e, xt = (e, t) => {
	if (e == null) return {
		numericValue: { value: void 0 },
		formatter: t?.formatter || W,
		formatterOptions: t?.formatterOptions || {}
	};
	let n = {
		formatter: t?.formatter || W,
		formatterOptions: t?.formatterOptions || {}
	};
	return typeof e == "number" ? {
		numericValue: { value: e },
		...n
	} : typeof e == "object" && e && "numericValue" in e ? {
		numericValue: bt(e.numericValue),
		formatter: e.formatter ? e.formatter : n.formatter,
		formatterOptions: {
			...n.formatterOptions,
			...e.formatterOptions
		}
	} : {
		...n,
		numericValue: e
	};
}, St = () => {
	let { locale: e } = se();
	return Je((t, n) => xt(t, {
		...n,
		formatterOptions: {
			locale: e,
			...n?.formatterOptions
		}
	}), [e]);
}, Ct = {
	"-1": Ae,
	1: me
}, wt = {
	"-1": "negative",
	0: "neutral",
	1: "positive"
}, Tt = M(({ percentage: e, amount: n, invertStatus: r, info: i, hint: o, nullText: s }, c) => {
	let l = St(), u = l(n, { formatterOptions: { decimalPlaces: 2 } }), d = l(e, { formatterOptions: {
		decimalPlaces: 0,
		emptyPlaceholder: s ?? "N/A"
	} }), f = U(d.numericValue), p = U(u.numericValue), m = "", h = null, g = "", _ = "null", v = o;
	if (H(p)) m = s ?? "N/A", v = void 0;
	else {
		let e = Math.sign(f ?? 0).toString();
		_ = wt[Math.sign((f ?? 0) * (r ? -1 : 1)).toString()], m = [H(f) ? null : d.formatter({
			...d.numericValue,
			units: "%",
			unitsPosition: "append"
		}, d.formatterOptions), u.formatter(u.numericValue, u.formatterOptions)].filter(Boolean).join(" · "), g = `${_} balance`, h = _ === "neutral" ? null : /* @__PURE__ */ N(t, {
			icon: Ct[e],
			size: "sm",
			className: a({
				positive: "text-f1-icon-positive",
				neutral: "text-f1-icon-secondary",
				negative: "text-f1-icon-critical"
			}[_])
		});
	}
	return /* @__PURE__ */ N(ye, {
		ref: c,
		className: a({
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
Tt.displayName = "F0TagBalance";
//#endregion
//#region src/components/tags/F0TagBalance/index.tsx
var Et = e(Tt), Dt = M(({ name: e, src: t }, n) => /* @__PURE__ */ N(De, {
	ref: n,
	avatar: {
		type: "company",
		name: e,
		src: t
	},
	text: e
}));
Dt.displayName = "F0TagCompany";
//#endregion
//#region src/components/tags/F0TagCompany/index.tsx
var Ot = e(Dt), kt = M(({ name: e, src: t }, n) => /* @__PURE__ */ N(De, {
	ref: n,
	avatar: {
		type: "team",
		name: e,
		src: t
	},
	text: e
}));
kt.displayName = "F0TagTeam";
//#endregion
//#region src/components/tags/F0TagTeam/index.tsx
var At = e(kt), jt = (e) => {
	let { type: t } = e;
	if (t === "dot") return /* @__PURE__ */ N(Ce, { ...e });
	if (t === "person") return /* @__PURE__ */ N(he, { ...e });
	if (t === "team") return /* @__PURE__ */ N(At, { ...e });
	if (t === "company") return /* @__PURE__ */ N(Ot, { ...e });
	if (t === "alert") return /* @__PURE__ */ N(nt, { ...e });
	if (t === "status") return /* @__PURE__ */ N(ve, { ...e });
	if (t === "balance") return /* @__PURE__ */ N(Et, { ...e });
	if (t === "raw") return /* @__PURE__ */ N(D, { ...e });
}, G = ({ tag: e }) => jt(e) || "Invalid tag type";
//#endregion
//#region src/components/F0Card/components/CardActions.tsx
function Mt({ primaryAction: e, secondaryActions: t, compact: n = !1 }) {
	let r = de("(min-width: 640px)");
	if (!(e || i())) return null;
	return /* @__PURE__ */ P(B, {
		className: a("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative z-[2] -mx-4 -mb-4 mt-4 cursor-auto border-0 border-t border-solid border-t-f1-border-secondary px-4 pb-4 pt-4", n && "-mb-3 pb-3 pt-3"),
		onClick: (e) => e.stopPropagation(),
		children: [t && /* @__PURE__ */ N("div", {
			className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
			children: Array.isArray(t) ? t.map((e, t) => /* @__PURE__ */ N(l, {
				label: e.label,
				icon: e.icon,
				variant: "outline",
				onClick: (t) => {
					t.stopPropagation(), e.onClick();
				},
				hideLabel: r && t > 0,
				size: r ? n ? "sm" : "md" : "lg"
			}, t)) : /* @__PURE__ */ N(He, {
				href: t.href,
				target: t.target,
				disabled: t.disabled,
				onClick: (e) => e.stopPropagation(),
				"data-testid": "secondary-link",
				children: t.label
			})
		}), e && /* @__PURE__ */ N("div", {
			className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center",
			children: /* @__PURE__ */ N(l, {
				label: e.label,
				icon: e.icon,
				variant: e.variant,
				onClick: (t) => {
					t.stopPropagation(), e.onClick();
				},
				size: r ? n ? "sm" : "md" : "lg",
				"data-testid": "primary-button"
			})
		})]
	});
	function i() {
		return t ? "href" in t || "length" in t && t.length > 0 : !1;
	}
}
//#endregion
//#region src/components/F0Card/components/CardAlert.tsx
var Nt = {
	info: "bg-f1-background-info",
	warning: "bg-f1-background-warning",
	critical: "bg-f1-background-critical",
	positive: "bg-f1-background-positive"
}, Pt = {
	info: "hsl(var(--info-50) / 0.12)",
	warning: "hsl(var(--warning-50) / 0.12)",
	critical: "hsl(var(--critical-50) / 0.12)",
	positive: "hsl(var(--positive-50) / 0.12)"
}, Ft = {
	info: "text-f1-foreground-info",
	warning: "text-f1-foreground-warning",
	critical: "text-f1-foreground-critical",
	positive: "text-f1-foreground-positive"
}, It = {
	critical: "critical",
	warning: "warning",
	info: "info",
	positive: "positive"
}, Lt = {
	critical: C,
	warning: T,
	info: w,
	positive: Me
};
function Rt({ onClose: e }) {
	let { actions: t } = n();
	return /* @__PURE__ */ N(l, {
		icon: Ne,
		label: t.close,
		hideLabel: !0,
		variant: "ghost",
		size: "md",
		onClick: e,
		type: "button"
	});
}
function zt({ variant: e, title: n, icon: r, dismissible: i = !1, onDismiss: o, action: s }) {
	return /* @__PURE__ */ P("div", {
		role: e === "critical" || e === "warning" ? "alert" : "status",
		className: "flex items-center gap-1 rounded-t-xl px-3 py-1.5",
		children: [
			/* @__PURE__ */ N("div", {
				className: "flex h-5 w-5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ N(t, {
					icon: r ?? Lt[e],
					size: "md",
					color: It[e]
				})
			}),
			/* @__PURE__ */ N("span", {
				className: a("flex-1 text-base font-medium", Ft[e]),
				children: n
			}),
			s ? /* @__PURE__ */ N(l, {
				label: s.label,
				variant: "outline",
				size: "sm",
				disabled: s.disabled,
				..."href" in s ? { href: s.href } : {
					onClick: s.onClick,
					type: "button"
				}
			}) : i && o && /* @__PURE__ */ N(Rt, { onClose: o })
		]
	});
}
var Bt = M(function({ alert: e, fullHeight: t, children: n }, r) {
	return e.visible === !1 ? /* @__PURE__ */ N("div", {
		ref: r,
		className: a(t && "h-full"),
		children: n
	}) : /* @__PURE__ */ P("div", {
		ref: r,
		className: a("rounded-xl", Nt[e.variant], t && "flex h-full flex-col"),
		children: [/* @__PURE__ */ N(zt, { ...e }), /* @__PURE__ */ N("div", {
			className: a(t && "flex flex-1 flex-col"),
			children: n
		})]
	});
});
Bt.displayName = "CardAlertWrapper";
//#endregion
//#region src/components/F0Card/components/CardAvatar.tsx
var Vt = ({ avatar: e, size: t }) => e.type === "emoji" ? /* @__PURE__ */ N(Ue, {
	emoji: e.emoji,
	size: t
}) : e.type === "file" ? /* @__PURE__ */ N(Ke, {
	file: e.file,
	size: t
}) : e.type === "icon" ? /* @__PURE__ */ N(ae, {
	icon: e.icon,
	size: t
}) : e.type === "module" ? /* @__PURE__ */ N(We, {
	module: e.module,
	size: t
}) : e.type === "alert" ? /* @__PURE__ */ N(Ve, {
	type: e.variant,
	size: t
}) : e.type === "date" ? /* @__PURE__ */ N(yt, { date: e.date }) : /* @__PURE__ */ N(k, {
	avatar: e,
	size: t
});
function Ht({ avatar: e, overlay: t = !1, compact: n = !1, size: r }) {
	let i = e.type === "person", o = r ?? (n ? "sm" : "lg");
	return /* @__PURE__ */ N("div", {
		className: a("mb-1.5 flex h-fit w-fit", t && !n && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && i && "rounded-full", (n || r) && "mb-0"),
		"data-testid": "card-avatar",
		children: /* @__PURE__ */ N(Vt, {
			avatar: e,
			size: o
		})
	});
}
//#endregion
//#region src/ui/value-display/types/alertTag/alertTag.tsx
var Ut = (e) => /* @__PURE__ */ N("div", {
	"data-cell-type": "alert-tag",
	children: /* @__PURE__ */ N(nt, {
		level: e.level,
		text: e.label
	})
}), Wt = "min-h-6 items-center", K = {
	text: "",
	avatar: "",
	avatarList: "",
	multiline: "self-start pt-0.5"
};
//#endregion
//#region src/ui/value-display/utils.ts
function Gt(e) {
	return typeof e == "object" && !!e && "placeholder" in e && typeof e.placeholder == "string";
}
function q(e, t) {
	return Gt(e) ? typeof e == "object" && e && t in e ? e[t] === void 0 : !0 : !1;
}
function J(e, t) {
	if (e !== void 0 && typeof e != "object") return e;
	if (!e || typeof e != "object") return;
	let n = t in e ? e[t] : void 0, r = Gt(e) ? e.placeholder : void 0;
	if (n !== void 0) return t === "date" && typeof n == "object" && n && "getTime" in n ? new Date(n.getTime()) : n;
	if (r !== void 0) return r;
}
function Kt(e) {
	if (qt(e)) try {
		return e.toLocaleDateString();
	} catch {
		return String(e);
	}
	let t = J(e, "date");
	if (qt(t)) try {
		return t.toLocaleDateString();
	} catch {
		return String(t);
	}
	return typeof t == "string" ? t : t == null ? "" : String(t);
}
function qt(e) {
	return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
//#endregion
//#region src/ui/value-display/types/number/number.tsx
var Jt = (e, t) => {
	let n = J(e, "number"), r = q(e, "number"), i = {
		unitsPosition: "right",
		units: "",
		...typeof e == "object" && "number" in e ? e : {
			decimalPlaces: void 0,
			number: n
		}
	};
	return /* @__PURE__ */ P("div", {
		className: a("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", K.text], r && "text-f1-foreground-secondary"),
		children: [
			i.unitsPosition === "left" && i.units && /* @__PURE__ */ N(Yt, { units: i.units }),
			i.decimalPlaces === void 0 ? i.number?.toString() ?? "" : i.number?.toFixed(i.decimalPlaces),
			i.unitsPosition === "right" && i.units && /* @__PURE__ */ N(Yt, { units: i.units })
		]
	});
}, Yt = ({ units: e }) => /* @__PURE__ */ N("span", { children: e.toString() }), Xt = (e, t) => {
	let n = {
		symbolPosition: "right",
		symbol: "",
		...typeof e == "object" && "amount" in e ? e : { amount: e }
	};
	return Jt({
		...typeof e == "object" && "amount" in e ? e : {},
		number: n.amount,
		decimalPlaces: n.currency?.decimalPlaces,
		units: n.currency?.symbol,
		unitsPosition: n.currency?.symbolPosition
	}, t);
}, Zt = (e, t) => {
	let n = e.type ?? "person";
	return /* @__PURE__ */ N("div", {
		className: a("pointer-events-auto w-full", t.visualization === "table" && K.avatarList),
		children: /* @__PURE__ */ N(Fe, {
			type: n,
			avatars: e.avatarList,
			size: "xs",
			max: e.max
		})
	});
}, Qt = (e, t) => /* @__PURE__ */ P("div", {
	className: a("flex items-center gap-2", t.visualization === "table" && K.avatar),
	children: [/* @__PURE__ */ N(k, {
		avatar: {
			type: "company",
			name: e.name,
			src: e.src
		},
		size: "xs"
	}), /* @__PURE__ */ N("span", {
		className: "text-f1-foreground",
		children: e.name.toString()
	})]
}), $t = (e, t) => {
	let n = Kt(e), r = q(e, "date");
	return /* @__PURE__ */ N("div", {
		className: a("monospace text-f1-foreground", r && "text-f1-foreground-secondary", t.visualization === "table" && K.text),
		children: n
	});
}, en = (e) => /* @__PURE__ */ N("div", {
	"data-cell-type": "dot-tag",
	children: /* @__PURE__ */ N(Ce, {
		text: e.label,
		color: e.color
	})
}), tn = (e) => /* @__PURE__ */ P("div", {
	className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
	"data-cell-type": "file",
	children: [
		/* @__PURE__ */ N(Ke, { file: e }),
		" ",
		/* @__PURE__ */ N("span", { children: e.name })
	]
}), nn = (e, n) => /* @__PURE__ */ N("div", {
	className: a("flex items-center gap-2", n.visualization === "table" && K.avatar),
	children: /* @__PURE__ */ N(Re, {
		tooltip: e.tooltip,
		children: /* @__PURE__ */ P("div", {
			className: "inline-flex items-center gap-2",
			children: [/* @__PURE__ */ N(t, {
				icon: e.icon,
				"aria-label": e.hideLabel ? e.label : void 0
			}), e.hideLabel ? /* @__PURE__ */ N("span", {
				className: "sr-only",
				children: e.label
			}) : /* @__PURE__ */ N("span", {
				className: "text-f1-foreground",
				children: e.label
			})]
		})
	})
}), rn = (e) => /* @__PURE__ */ N(nn, {
	icon: $e,
	label: e.name
}), an = (e, t) => {
	let n = `${e.firstName.toString()} ${e.lastName.toString()}`;
	return /* @__PURE__ */ P("div", {
		className: a("flex min-w-0 flex-1 items-center gap-2", t.visualization === "table" && K.avatar),
		children: [/* @__PURE__ */ N(k, {
			avatar: {
				type: "person",
				firstName: e.firstName.toString(),
				lastName: e.lastName.toString(),
				src: e.src,
				badge: e.badge,
				deactivated: e.deactivated
			},
			size: "xs"
		}), /* @__PURE__ */ N(A, {
			className: a("min-w-0 flex-1", e.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
			tag: "span",
			children: n
		})]
	});
}, on = (e, t) => {
	let n = J(e, "value"), r = q(e, "value");
	if (n === void 0) return null;
	if (r) return /* @__PURE__ */ N("span", {
		className: "text-f1-foreground-secondary",
		"data-cell-type": "progressBar",
		children: n
	});
	let i = n, a = typeof e == "object" && "max" in e ? e.max ?? 100 : 100, o = typeof e == "object" && "label" in e ? e.label : void 0, s = typeof e == "object" && "hideLabel" in e ? e.hideLabel : void 0, c = typeof e == "object" && "color" in e ? e.color : void 0, l = Ie(c || "categorical-1"), u = i / a * 100;
	return /* @__PURE__ */ P("div", {
		className: "flex w-full items-center gap-2",
		"data-cell-type": "progressBar",
		children: [/* @__PURE__ */ N("div", {
			className: "min-w-16 flex-grow",
			children: /* @__PURE__ */ N(Le, {
				color: l,
				value: u,
				max: 100,
				getValueLabel: (e) => `${(e ?? 0).toFixed(1)}% ${o}`,
				"aria-label": o,
				className: "w-full"
			})
		}), !s && /* @__PURE__ */ N("div", {
			className: "flex-shrink-0 text-sm font-medium text-f1-foreground",
			children: o
		})]
	});
}, sn = (e) => /* @__PURE__ */ N("div", {
	"data-cell-type": "status",
	children: /* @__PURE__ */ N(Re, {
		tooltip: e.tooltip,
		children: /* @__PURE__ */ N("div", {
			className: "w-fit max-w-full",
			children: /* @__PURE__ */ N(ve, {
				variant: e.status,
				text: e.label,
				icon: e.icon,
				additionalAccessibleText: Be(e.tooltip)
			})
		})
	})
}), cn = {
	default: void 0,
	neutral: "border-none bg-f1-background-secondary text-f1-foreground-secondary"
}, ln = (e) => /* @__PURE__ */ N("div", {
	"data-cell-type": "tag",
	children: /* @__PURE__ */ N(D, {
		text: e.label,
		icon: e.icon,
		className: cn[e.variant ?? "default"]
	})
}), un, Y = "HoverCard", [dn, fn] = p(Y, [ne]), X = ne(), [pn, Z] = dn(Y), mn = (e) => {
	let { __scopeHoverCard: t, children: n, open: r, defaultOpen: i, onOpenChange: a, openDelay: o = 700, closeDelay: s = 300 } = e, c = X(t), l = j.useRef(0), u = j.useRef(0), d = j.useRef(!1), f = j.useRef(!1), [p, m] = b({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Y
	}), h = j.useCallback(() => {
		clearTimeout(u.current), l.current = window.setTimeout(() => m(!0), o);
	}, [o, m]), g = j.useCallback(() => {
		clearTimeout(l.current), !d.current && !f.current && (u.current = window.setTimeout(() => m(!1), s));
	}, [s, m]), _ = j.useCallback(() => m(!1), [m]);
	return j.useEffect(() => () => {
		clearTimeout(l.current), clearTimeout(u.current);
	}, []), /* @__PURE__ */ N(pn, {
		scope: t,
		open: p,
		onOpenChange: m,
		onOpen: h,
		onClose: g,
		onDismiss: _,
		hasSelectionRef: d,
		isPointerDownOnContentRef: f,
		children: /* @__PURE__ */ N(v, {
			...c,
			children: n
		})
	});
};
mn.displayName = Y;
var hn = "HoverCardTrigger", gn = j.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = Z(hn, n), a = X(n);
	return /* @__PURE__ */ N(y, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ N(m.a, {
			"data-state": i.open ? "open" : "closed",
			...r,
			ref: t,
			onPointerEnter: f(e.onPointerEnter, $(i.onOpen)),
			onPointerLeave: f(e.onPointerLeave, $(i.onClose)),
			onFocus: f(e.onFocus, i.onOpen),
			onBlur: f(e.onBlur, i.onClose),
			onTouchStart: f(e.onTouchStart, (e) => e.preventDefault())
		})
	});
});
gn.displayName = hn;
var _n = "HoverCardPortal", [vn, yn] = dn(_n, { forceMount: void 0 }), bn = (e) => {
	let { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e, a = Z(_n, t);
	return /* @__PURE__ */ N(vn, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ N(x, {
			present: n || a.open,
			children: /* @__PURE__ */ N(g, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
bn.displayName = _n;
var Q = "HoverCardContent", xn = j.forwardRef((e, t) => {
	let n = yn(Q, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...i } = e, a = Z(Q, e.__scopeHoverCard);
	return /* @__PURE__ */ N(x, {
		present: r || a.open,
		children: /* @__PURE__ */ N(Sn, {
			"data-state": a.open ? "open" : "closed",
			...i,
			onPointerEnter: f(e.onPointerEnter, $(a.onOpen)),
			onPointerLeave: f(e.onPointerLeave, $(a.onClose)),
			ref: t
		})
	});
});
xn.displayName = Q;
var Sn = j.forwardRef((e, t) => {
	let { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, ...s } = e, c = Z(Q, n), l = X(n), u = j.useRef(null), p = h(t, u), [m, g] = j.useState(!1);
	return j.useEffect(() => {
		if (m) {
			let e = document.body;
			return un = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = un, e.style.webkitUserSelect = un;
			};
		}
	}, [m]), j.useEffect(() => {
		if (u.current) {
			let e = () => {
				g(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (c.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [c.isPointerDownOnContentRef, c.hasSelectionRef]), j.useEffect(() => {
		u.current && Tn(u.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ N(d, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: o,
		onEscapeKeyDown: r,
		onPointerDownOutside: i,
		onFocusOutside: f(a, (e) => {
			e.preventDefault();
		}),
		onDismiss: c.onDismiss,
		children: /* @__PURE__ */ N(_, {
			...l,
			...s,
			onPointerDown: f(s.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && g(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
			}),
			ref: p,
			style: {
				...s.style,
				userSelect: m ? "text" : void 0,
				WebkitUserSelect: m ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), Cn = "HoverCardArrow", wn = j.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = X(n);
	return /* @__PURE__ */ N(ie, {
		...i,
		...r,
		ref: t
	});
});
wn.displayName = Cn;
function $(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function Tn(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
var En = mn, Dn = gn, On = bn, kn = xn, An = En, jn = Dn, Mn = j.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, container: r, ...i }, o) => /* @__PURE__ */ N(On, {
	container: r,
	children: /* @__PURE__ */ N(kn, {
		ref: o,
		align: t,
		sideOffset: n,
		className: a("z-50 w-[200px] rounded bg-f1-background-inverse font-medium text-f1-foreground-inverse outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
		...i
	})
}));
Mn.displayName = kn.displayName;
//#endregion
//#region src/components/tags/F0TagList/components/TagCounter.tsx
var Nn = ({ count: e, list: t }) => {
	let n = /* @__PURE__ */ N(D, { text: `+${e}` });
	return t?.length ? /* @__PURE__ */ P(An, { children: [/* @__PURE__ */ N(jn, { children: /* @__PURE__ */ N("span", {
		className: "pointer-events-auto relative z-[1] cursor-pointer",
		children: n
	}) }), /* @__PURE__ */ N(Mn, {
		side: "top",
		className: "w-fit bg-f1-background text-f1-foreground shadow-md ring-1 ring-f1-border-secondary",
		children: /* @__PURE__ */ N(Te, {
			className: "flex max-h-[220px] w-fit flex-col",
			children: t.map((e, t) => /* @__PURE__ */ N("div", {
				className: "flex w-max max-w-72 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
				children: e.description ? /* @__PURE__ */ N(r, {
					label: e.description,
					children: /* @__PURE__ */ N("div", { children: /* @__PURE__ */ N(G, { tag: e }) })
				}) : /* @__PURE__ */ N(G, { tag: e })
			}, t))
		})
	})] }) : n;
};
Nn.displayName = "TagCounter";
//#endregion
//#region src/components/tags/F0TagList/F0TagList.tsx
var Pn = ({ type: e, tags: t, max: n = 4, remainingCount: r }) => {
	let i = t.map((t) => ({
		type: e,
		...t
	}));
	return /* @__PURE__ */ N(je, {
		items: i,
		max: n,
		min: 1,
		fluidItems: !0,
		renderListItem: (e) => /* @__PURE__ */ N(G, { tag: e }),
		renderDropdownItem: () => null,
		forceShowingOverflowIndicator: r !== void 0,
		renderOverflowIndicator: (e) => /* @__PURE__ */ N(Nn, {
			count: (r ?? 0) + e,
			list: r ? void 0 : i.slice(i.length - e)
		}),
		overflowIndicatorWithPopover: !1,
		className: "min-w-0 flex-1"
	});
};
Pn.displayName = "F0TagList";
//#endregion
//#region src/components/tags/F0TagList/index.tsx
var Fn = e(Pn), In = (e) => /* @__PURE__ */ N(Fn, {
	type: e.type,
	tags: e.tags,
	max: e.max
}), Ln = (e, t) => /* @__PURE__ */ P("div", {
	className: a("flex items-center gap-2", t.visualization === "table" && K.avatar),
	children: [/* @__PURE__ */ N(k, {
		avatar: {
			type: "team",
			name: e.name,
			src: e.src
		},
		size: "xs"
	}), /* @__PURE__ */ N("span", {
		className: "text-f1-foreground",
		children: e.name.toString()
	})]
}), Rn = (e, t) => {
	let n = J(e, "text"), r = q(e, "text"), i = n?.toString() ?? "";
	return /* @__PURE__ */ N(A, {
		lines: 1,
		tag: "span",
		className: a("text-f1-foreground", r && "text-f1-foreground-secondary", t.visualization === "table" && K.text),
		children: i
	});
}, zn = {
	text: Rn,
	number: Jt,
	date: $t,
	amount: Xt,
	person: an,
	company: Qt,
	team: Ln,
	status: sn,
	tag: ln,
	avatarList: Zt,
	tagList: In,
	alertTag: Ut,
	dotTag: en,
	file: tn,
	folder: rn,
	progressBar: on
};
function Bn({ metadata: e }) {
	let { type: n, value: i } = e.property, a = zn[n];
	if (!a) return /* @__PURE__ */ P("div", {
		className: "flex h-8 items-center gap-1.5",
		children: ["icon" in e && e.icon && /* @__PURE__ */ N(t, {
			icon: e.icon,
			color: "default",
			size: "md"
		}), /* @__PURE__ */ P("span", { children: ["Unsupported property type: ", n] })]
	});
	let o = a;
	return /* @__PURE__ */ P("div", {
		className: "flex h-8 items-center gap-1.5",
		children: ["icon" in e && e.icon && /* @__PURE__ */ N("div", {
			className: "pointer-events-auto flex items-center",
			children: /* @__PURE__ */ N(r, {
				label: e.property.label,
				children: /* @__PURE__ */ N(t, {
					icon: e.icon,
					color: "default",
					size: "md"
				})
			})
		}), o(i, { visualization: "card" })]
	});
}
//#endregion
//#region src/components/F0Card/components/CardOptions.tsx
function Vn({ otherActions: e, selectable: t = !1, selected: r = !1, onSelect: i, bookmark: s, title: c, overlay: l = !1 }) {
	let u = n(), d = e && e.length > 0, [f, p] = Xe(!1);
	return !d && !t && !s ? null : /* @__PURE__ */ P("div", {
		className: a("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (f || r || s?.bookmarked) && "delay-0 sm:opacity-100", l && "pointer-events-auto absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
		children: [
			d && /* @__PURE__ */ N("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ N(Pe, {
					items: e,
					open: f,
					onOpenChange: p,
					children: /* @__PURE__ */ N(o, {
						label: u.actions.other,
						icon: ze,
						variant: "ghost",
						size: "sm",
						hideLabel: !0,
						pressed: f,
						compact: !0,
						"data-testid": "card-options-dropdown",
						onClick: (e) => e.stopPropagation()
					})
				})
			}),
			t && /* @__PURE__ */ N("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ N(Oe, {
					title: c,
					checked: r,
					onCheckedChange: i,
					hideLabel: !0,
					stopPropagation: !0
				})
			}),
			s && /* @__PURE__ */ N("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ N(o, {
					label: s.label ?? c ?? u.actions.save,
					icon: s.bookmarked ? Qe : Ze,
					variant: "ghost",
					size: "sm",
					hideLabel: !0,
					pressed: s.bookmarked,
					compact: !0,
					"data-testid": "card-bookmark-toggle",
					onClick: (e) => {
						e.stopPropagation(), s.onBookmarkChange(!s.bookmarked);
					}
				})
			})
		]
	});
}
//#endregion
//#region src/components/F0Card/CardInternal.tsx
var Hn = [
	"contain",
	"cover",
	"fit-width",
	"fit-height",
	"scale-down"
], Un = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
], Wn = ["default", "video"], Gn = {
	xs: "h-24",
	sm: "h-32",
	md: "h-40",
	lg: "h-48",
	xl: "h-64"
}, Kn = {
	contain: "object-contain h-full w-full",
	cover: "object-cover h-full w-full",
	"fit-width": "w-full h-auto",
	"fit-height": "object-contain h-full w-auto",
	"scale-down": "object-scale-down h-full w-full"
};
function qn(e) {
	return Kn[e];
}
var Jn = M(function({ compact: e = !1, avatar: t, image: n, imageFit: r = "fit-width", imageSize: o = "sm", imageAspectRatio: s = "default", blurredBackground: c = !0, title: l, description: u, metadata: d, children: f, link: p, primaryAction: m, secondaryActions: h, otherActions: g, bookmark: _, selectable: v = !1, subtleBorder: ee = !1, selected: y = !1, onSelect: te, onClick: b, forceVerticalMetadata: ne = !1, fullHeight: re = !1, disableOverlayLink: x = !1, alert: S }, ie) {
	let C = Ye(null), w = !x && (!!p || !!b), T = (e) => {
		C?.current?.click(), b?.(), e.preventDefault(), e.stopPropagation();
	}, ae = /* @__PURE__ */ P(F, {
		className: a("group relative bg-f1-background shadow-none transition-all", ee && "border-f1-border-secondary", e && "p-3", re && "h-full", (v || g && g.length > 0) && !y && "hover:border-f1-border", p && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", y && "border-f1-border-selected bg-f1-background-selected-secondary"),
		style: S && S.visible !== !1 && !y ? {
			borderColor: Pt[S.variant],
			borderWidth: "2px"
		} : void 0,
		onClick: b,
		"data-testid": "card",
		ref: S && S.visible !== !1 ? void 0 : ie,
		children: [
			p && !x && /* @__PURE__ */ N(He, {
				href: p,
				variant: "unstyled",
				className: a("z-1 absolute inset-0 block rounded-xl", i()),
				"aria-label": l,
				ref: C,
				children: "\xA0"
			}),
			n && /* @__PURE__ */ P("div", {
				className: a("pointer-events-none relative -mx-3 -mt-3 mb-4 rounded-md", s === "video" ? "aspect-video" : Gn[o], e && "-mx-2 -mt-2 mb-3", r === "fit-height" && "flex items-center justify-center overflow-hidden", r === "fit-width" && "flex items-center justify-center overflow-hidden", r !== "fit-width" && r !== "fit-height" && "overflow-hidden"),
				children: [
					c && (r === "contain" || r === "fit-width" || r === "fit-height" || r === "scale-down") && /* @__PURE__ */ N("div", {
						className: "absolute inset-0 z-0 rounded-md",
						style: {
							backgroundImage: `url(${n})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							filter: "blur(20px)",
							opacity: .4,
							transform: "scale(1.1)"
						},
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ N(Ge, {
						src: n,
						alt: l,
						className: a(qn(r))
					}),
					/* @__PURE__ */ N(Vn, {
						otherActions: g,
						selectable: v,
						selected: y,
						onSelect: te,
						bookmark: _,
						title: l,
						overlay: !0
					})
				]
			}),
			/* @__PURE__ */ P("div", {
				className: a("flex grow flex-col gap-2", w && "cursor-pointer"),
				...w ? { onClick: (e) => {
					e.target instanceof Element && e.target.closest("a[href], input, select, textarea, [aria-haspopup]:not([aria-haspopup=\"false\"])") || T(e);
				} } : {},
				children: [
					/* @__PURE__ */ P("div", {
						className: "flex flex-row items-start justify-between gap-1",
						children: [/* @__PURE__ */ P(I, {
							...w ? {
								onClick: (e) => {
									T(e);
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && T(e);
								},
								role: "button",
								"aria-label": l
							} : {},
							className: a("relative flex-col gap-0 p-0", n && !e && "pt-3", e && "flex-row items-center gap-2"),
							children: [t && /* @__PURE__ */ N(Ht, {
								avatar: t,
								overlay: !!n,
								compact: e
							}), /* @__PURE__ */ P("div", {
								className: a("flex flex-col gap-0"),
								children: [/* @__PURE__ */ N(L, {
									className: a("text-lg font-semibold text-f1-foreground", e && "line-clamp-1 text-base"),
									children: l
								}), u && /* @__PURE__ */ N(R, {
									className: a("text-base text-f1-foreground-secondary"),
									children: /* @__PURE__ */ N(A, {
										lines: e ? 2 : 3,
										children: u
									})
								})]
							})]
						}), !n && /* @__PURE__ */ N(Vn, {
							otherActions: g,
							selectable: v,
							selected: y,
							onSelect: te,
							bookmark: _,
							title: l
						})]
					}),
					d && /* @__PURE__ */ N("div", {
						className: a("relative z-10 flex flex-col gap-0.5", e && "gap-x-3 gap-y-0", ne && "flex-col gap-y-0.5"),
						children: d.map((e, t) => /* @__PURE__ */ N(Bn, { metadata: e }, t))
					}),
					f && /* @__PURE__ */ N(z, {
						className: "pointer-events-none relative z-10 [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_select]:pointer-events-auto [&_textarea]:pointer-events-auto [&_[role='button']]:pointer-events-auto [&_[tabindex]]:pointer-events-auto",
						onClick: (e) => e.stopPropagation(),
						children: f
					})
				]
			}),
			/* @__PURE__ */ N(Mt, {
				primaryAction: m,
				secondaryActions: h,
				compact: e
			})
		]
	});
	return S && S.visible !== !1 ? /* @__PURE__ */ N(Bt, {
		ref: ie,
		alert: S,
		fullHeight: re,
		children: ae
	}) : ae;
}), Yn = ({ compact: e = !1 }) => /* @__PURE__ */ P(F, {
	className: a("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ P(I, {
		className: a("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
		children: [/* @__PURE__ */ N(s, { className: a("h-10 w-10 rounded-full", e && "h-6 w-6") }), /* @__PURE__ */ P("div", {
			className: a("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
			children: [/* @__PURE__ */ N(L, {
				className: "flex h-6 items-center",
				children: /* @__PURE__ */ N(s, { className: a("h-4 w-20 rounded-md", e && "h-3") })
			}), /* @__PURE__ */ N(R, {
				className: "flex h-5 items-center",
				children: /* @__PURE__ */ N(s, { className: "h-3 w-12 rounded-md" })
			})]
		})]
	}), /* @__PURE__ */ N(z, {
		className: "flex flex-col gap-0",
		children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ P("div", {
			className: "flex h-6 items-center gap-1.5",
			children: [/* @__PURE__ */ N(s, { className: "h-4 w-4 rounded-full" }), /* @__PURE__ */ N(s, { className: "h-3 w-full max-w-20 rounded-md" })]
		}, t))
	})]
}), Xn = [
	"info",
	"warning",
	"critical",
	"positive"
], Zn = ["forceVerticalMetadata", "disableOverlayLink"], Qn = M((e, t) => {
	let n = Zn.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ N(Jn, {
		ref: t,
		...n
	});
}), $n = ({ compact: e = !1 }) => /* @__PURE__ */ N(Yn, { compact: e });
Qn.displayName = "F0Card";
var er = e(qe(Qn, $n));
//#endregion
export { at as $, J as A, Et as B, en as C, Xt as D, Zt as E, Bt as F, vt as G, W as H, Pt as I, _t as J, ft as K, G as L, K as M, Ut as N, Jt as O, Ht as P, F as Q, At as R, tn as S, Qt as T, U, St as V, yt as W, V as X, dt as Y, ct as Z, sn as _, Hn as a, nt as at, rn as b, Rn as c, Ze as ct, Fn as d, z as et, Nn as f, ln as g, jn as h, Wn as i, L as it, Wt as j, q as k, Ln as l, Mn as m, Xn as n, I as nt, Un as o, $e as ot, An as p, pt as q, Jn as r, R as rt, zn as s, Qe as st, er as t, B as tt, In as u, on as v, $t as w, nn as x, an as y, Ot as z };
