import { cn as e } from "../../lib/utils.js";
import { F0Icon as t } from "../../components/F0Icon/index.js";
import { Tooltip as n } from "../../experimental/Overlays/Tooltip/index.js";
import { Skeleton as r } from "../../ui/skeleton.js";
import { Counter as i } from "../../ui/Counter/index.js";
import { F0Button as a } from "../../components/F0Button/F0Button.js";
import { F0AvatarModule as o } from "../../components/avatars/F0AvatarModule/index.js";
import { F0Avatar as s } from "../../components/avatars/F0Avatar/index.js";
import { useWidgetIsWide as c } from "../../experimental/Widgets/Widget/index.js";
import { F0AvatarAlert as l } from "../../components/avatars/F0AvatarAlert/index.js";
import { F0AvatarList as u } from "../../components/avatars/F0AvatarList/index.js";
import { CalendarEvent as d } from "../../experimental/Widgets/Content/CalendarEvent/index.js";
import { IndicatorsList as f } from "../../experimental/Widgets/Content/IndicatorsList/index.js";
import { HomeSlotItem as p, HomeSlotItems as m, useIsBulkChange as h } from "./home-motion.js";
import { HomeListItem as g } from "./HomeListItem/index.js";
import { useState as _ } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/sds/Home/slotRenderers.tsx
var b = (e) => e == null ? void 0 : typeof e == "function" ? { render: e } : e, x = [
	"viridian",
	"malibu",
	"yellow",
	"purple",
	"lilac",
	"barbie",
	"smoke",
	"army",
	"flubber",
	"indigo",
	"camel"
], S = {
	viridian: "bg-[hsl(theme(colors.viridian.50)_/_0.1)] text-[hsl(theme(colors.viridian.50))] dark:bg-[hsl(theme(colors.viridian.50)_/_0.24)]",
	malibu: "bg-[hsl(theme(colors.malibu.50)_/_0.1)] text-[hsl(theme(colors.malibu.50))] dark:bg-[hsl(theme(colors.malibu.50)_/_0.24)]",
	yellow: "bg-[hsl(theme(colors.yellow.50)_/_0.1)] text-[hsl(theme(colors.yellow.50))] dark:bg-[hsl(theme(colors.yellow.50)_/_0.24)]",
	purple: "bg-[hsl(theme(colors.purple.50)_/_0.1)] text-[hsl(theme(colors.purple.50))] dark:bg-[hsl(theme(colors.purple.50)_/_0.24)]",
	lilac: "bg-[hsl(theme(colors.lilac.50)_/_0.1)] text-[hsl(theme(colors.lilac.50))] dark:bg-[hsl(theme(colors.lilac.50)_/_0.24)]",
	barbie: "bg-[hsl(theme(colors.barbie.50)_/_0.1)] text-[hsl(theme(colors.barbie.50))] dark:bg-[hsl(theme(colors.barbie.50)_/_0.24)]",
	smoke: "bg-[hsl(theme(colors.smoke.50)_/_0.1)] text-[hsl(theme(colors.smoke.50))] dark:bg-[hsl(theme(colors.smoke.50)_/_0.24)]",
	army: "bg-[hsl(theme(colors.army.50)_/_0.1)] text-[hsl(theme(colors.army.50))] dark:bg-[hsl(theme(colors.army.50)_/_0.24)]",
	flubber: "bg-[hsl(theme(colors.flubber.50)_/_0.1)] text-[hsl(theme(colors.flubber.50))] dark:bg-[hsl(theme(colors.flubber.50)_/_0.24)]",
	indigo: "bg-[hsl(theme(colors.indigo.50)_/_0.1)] text-[hsl(theme(colors.indigo.50))] dark:bg-[hsl(theme(colors.indigo.50)_/_0.24)]",
	camel: "bg-[hsl(theme(colors.camel.50)_/_0.1)] text-[hsl(theme(colors.camel.50))] dark:bg-[hsl(theme(colors.camel.50)_/_0.24)]"
}, C = (e) => {
	let t = e.slice(1), n = t.length === 3 ? t.split("").map((e) => e + e).join("") : t;
	if (!/^[0-9a-f]{6}$/i.test(n)) return;
	let r = parseInt(n, 16);
	return `${r >> 16 & 255} ${r >> 8 & 255} ${r & 255}`;
}, w = e("bg-[rgb(var(--list-icon-tint)_/_0.1)] text-[rgb(var(--list-icon-tint))]", "dark:bg-[rgb(var(--list-icon-tint)_/_0.24)]"), T = (e) => {
	if (!e.startsWith("#")) return { className: S[e] };
	let t = C(e);
	return t ? {
		className: w,
		style: { "--list-icon-tint": t }
	} : void 0;
}, E = {
	sm: "size-6 rounded-sm",
	md: "size-8 rounded",
	lg: "size-10 rounded-md"
}, D = ({ icon: n, tint: r, size: i }) => /* @__PURE__ */ v("div", {
	className: e("flex aspect-square items-center justify-center", E[i], r.className),
	style: r.style,
	children: /* @__PURE__ */ v(t, {
		icon: n,
		size: i
	})
}), O = 6, k = (e, t) => !!e.compact || !e.descriptionOptional && t > 6, A = (e, t, n) => ({
	visualization: e,
	params: t,
	...n
}), j = (e, t, n) => ({
	visualization: "list",
	params: {
		schema: e,
		items: t
	},
	...n
}), M = (e, t) => (e) => t(e), N = (e, t = {}) => {
	if (!e) return;
	let { title: n, info: r, ...i } = e, a = (e) => typeof e == "function" ? e(t) : e;
	return {
		...i,
		title: a(n),
		info: a(r)
	};
}, P = (e) => N(e.header, e.params)?.title ?? e.id, F = (e, t) => !e || e.safeParse(t ?? {}).success, I = [
	"neutral",
	"accent",
	"critical",
	"warning",
	"promote",
	"positive"
], L = (e) => {
	let t = {
		action: e.action,
		summaries: e.summaries,
		headerControls: e.headerControls,
		headerActions: e.headerActions,
		headerSelect: e.headerSelect
	};
	return "alert" in e && e.alert !== void 0 ? {
		...t,
		alert: e.alert
	} : {
		...t,
		status: "status" in e ? e.status : void 0
	};
}, R = "-m-2", z = (t) => e(R, "mt-0", !t.isLastSlot && "mb-0"), B = "gap-2", V = (e, t, n) => {
	if (e === "module" && t.module) return { left: /* @__PURE__ */ v(o, {
		module: t.module,
		size: n
	}) };
	if (e === "alert" && t.alert) return { left: /* @__PURE__ */ v(l, {
		type: t.alert,
		size: n
	}) };
	if (e === "icon" && t.avatar?.icon && t.avatar.color) {
		let e = T(t.avatar.color);
		if (e) return { left: /* @__PURE__ */ v(D, {
			icon: t.avatar.icon,
			tint: e,
			size: n
		}) };
	}
	return e && t.avatar ? {
		avatar: {
			type: e,
			...t.avatar
		},
		avatarSize: n
	} : {};
}, H = (e, t, n) => {
	if (e) return e === "counter" ? t.count == null ? void 0 : /* @__PURE__ */ v(i, { value: t.count }) : e.endsWith("-list") ? t.avatars && t.avatars.length > 0 ? /* @__PURE__ */ v(u, {
		type: e.slice(0, -5),
		size: n,
		max: 3,
		avatars: t.avatars,
		remainingCount: t.remainingCount
	}) : void 0 : t.rightAvatar ? /* @__PURE__ */ v(s, {
		avatar: {
			type: e,
			...t.rightAvatar
		},
		size: n
	}) : void 0;
}, U = (e, t) => t ? e ? "lg" : "md" : e ? "md" : "sm";
function W({ params: t, ctx: r }) {
	let { schema: i, items: o } = t, s = o, [l, u] = _(!1), d = c(), f = i.maxVisibleItems, b = f != null && s.length > f, x = b && !l ? s.slice(0, f) : s, S = h(x.length), C = k(i, x.length), w = U((!!i.descriptionRequired || !!i.descriptionOptional) && !C, d), T = d ? "md" : "sm";
	return /* @__PURE__ */ y("div", {
		className: e(z(r), "flex flex-col"),
		children: [/* @__PURE__ */ v(m, { children: x.map(({ href: e, description: t, ...r }) => {
			let a = /* @__PURE__ */ v(g, {
				title: r.title,
				subtitle: r.subtitle,
				description: C ? void 0 : t,
				unread: r.unread,
				...V(i.left, r, w),
				right: H(i.right, r, T),
				actions: r.actions,
				href: i.clickBehavior === "link" ? e : void 0
			});
			return /* @__PURE__ */ v(p, {
				animated: !S,
				children: C && t ? /* @__PURE__ */ v(n, {
					label: t,
					children: /* @__PURE__ */ v("span", {
						className: "block",
						children: a
					})
				}) : a
			}, r.id);
		}) }), b ? /* @__PURE__ */ v("div", {
			className: "mt-1 self-start",
			children: /* @__PURE__ */ v(a, {
				variant: d ? "outline" : "neutral",
				size: d ? "md" : "sm",
				label: l ? "View less" : `View more (${s.length - f})`,
				onClick: () => u(!l)
			})
		}) : null]
	});
}
function G({ params: t, ctx: n }) {
	let { events: r } = t, i = h(r.length);
	return /* @__PURE__ */ v("div", {
		className: e(z(n), "flex flex-col", B),
		children: /* @__PURE__ */ v(m, { children: r.map((e) => /* @__PURE__ */ v(p, {
			animated: !i,
			children: /* @__PURE__ */ v(d, { ...e })
		}, e.title)) })
	});
}
var K = 3, q = "slot-skeleton-item", J = [
	"w-1/2",
	"w-2/3",
	"w-2/5",
	"w-3/5"
], Y = {
	sm: "size-6",
	md: "size-8",
	lg: "size-10"
}, X = (e) => J[e % J.length], Z = ({ className: t }) => /* @__PURE__ */ v("div", {
	className: "flex h-5 items-center",
	children: /* @__PURE__ */ v(r, { className: e("h-3", t) })
}), Q = ({ params: t, ctx: n }) => {
	let i = t.schema ?? {}, a = c(), o = Math.max(0, Math.min(n.expectedItemsCount, i.maxVisibleItems ?? Infinity)), s = k(i, o), l = (!!i.descriptionRequired || !!i.descriptionOptional) && !s, u = !!i.descriptionRequired && !s, d = n.expectedItemsCount > o;
	return /* @__PURE__ */ y("div", {
		className: e(z(n), "flex flex-col"),
		children: [Array.from({ length: o }, (t, n) => /* @__PURE__ */ y("div", {
			"data-testid": q,
			className: "flex w-full items-center gap-3 p-2",
			children: [
				i.left ? /* @__PURE__ */ v(r, { className: e("shrink-0", Y[U(l, a)], i.left === "person" ? "rounded-full" : "rounded-sm") }) : null,
				/* @__PURE__ */ y("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ v(Z, { className: X(n) }), u ? /* @__PURE__ */ v(Z, { className: "w-1/4" }) : null]
				}),
				i.right ? /* @__PURE__ */ v(r, { className: "h-4 w-10 shrink-0 rounded-sm" }) : null
			]
		}, n)), d ? /* @__PURE__ */ v("div", {
			className: "mt-1 self-start",
			children: /* @__PURE__ */ v(r, { className: "h-6 w-24 rounded-sm" })
		}) : null]
	});
}, $ = ({ ctx: t }) => /* @__PURE__ */ v("div", {
	className: e(z(t), "flex flex-col", B),
	children: Array.from({ length: t.expectedItemsCount }, (e, t) => /* @__PURE__ */ y("div", {
		"data-testid": q,
		className: "flex flex-row items-stretch gap-2.5 rounded-sm p-2",
		children: [
			/* @__PURE__ */ v(r, { className: "min-h-10 w-1 shrink-0 rounded-2xs" }),
			/* @__PURE__ */ y("div", {
				className: "flex flex-1 flex-col justify-center",
				children: [/* @__PURE__ */ v(Z, { className: X(t) }), /* @__PURE__ */ v(Z, { className: "w-1/3" })]
			}),
			/* @__PURE__ */ v(r, { className: "size-10 shrink-0 rounded-md" })
		]
	}, t))
}), ee = ({ ctx: e }) => /* @__PURE__ */ v("div", {
	className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
	children: Array.from({ length: e.expectedItemsCount }, (e, t) => /* @__PURE__ */ y("div", {
		"data-testid": q,
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ v("div", {
			className: "flex h-8 items-center",
			children: /* @__PURE__ */ v(r, { className: "h-6 w-10" })
		}), /* @__PURE__ */ v(Z, { className: "w-3/4" })]
	}, t))
}), te = (t, n) => /* @__PURE__ */ v("div", {
	className: "flex flex-col gap-2",
	children: Array.from({ length: n.expectedItemsCount }, (t, n) => /* @__PURE__ */ v("div", {
		"data-testid": q,
		children: /* @__PURE__ */ v(r, { className: e("h-6", X(n)) })
	}, n))
}), ne = {
	list: {
		render: (e, t) => /* @__PURE__ */ v(W, {
			params: e,
			ctx: t
		}),
		skeleton: (e, t) => /* @__PURE__ */ v(Q, {
			params: e ?? {},
			ctx: t
		})
	},
	"event-list": {
		render: (e, t) => /* @__PURE__ */ v(G, {
			params: e,
			ctx: t
		}),
		skeleton: (e, t) => /* @__PURE__ */ v($, { ctx: t })
	},
	indicators: {
		render: (e) => /* @__PURE__ */ v(f, { ...e }),
		skeleton: (e, t) => /* @__PURE__ */ v(ee, { ctx: t })
	}
};
//#endregion
export { K as DEFAULT_EXPECTED_ITEMS_COUNT, B as EVENT_LIST_GAP, p as HomeSlotItem, m as HomeSlotItems, O as LIST_COMPACT_AFTER, R as SLOT_ROW_BLEED, q as SLOT_SKELETON_ITEM_TESTID, ne as defaultSlotRenderers, te as defaultSlotSkeleton, M as fromParams, A as homeSlot, x as listIconColors, j as listSlot, I as railActionTones, b as resolveSlotRenderer, N as resolveWidgetHeader, z as slotRowBleed, h as useIsBulkChange, L as widgetChrome, F as widgetParamsAreComplete, P as widgetTitle };
