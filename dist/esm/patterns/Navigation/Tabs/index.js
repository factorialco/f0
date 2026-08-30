import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import r from "../../../icons/app/Upsell.js";
import { Link as i, useNavigation as a } from "../../../lib/linkHandler.js";
import { withSkeleton as o } from "../../../lib/skeleton.js";
import { TabNavigation as s, TabNavigationLink as c } from "../../../ui/tab-navigation.js";
import { useEffect as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/patterns/Navigation/Tabs/index.tsx
var p = ({ tabs: e, activeTabId: t, setActiveTabId: o, secondary: p = !1, embedded: m = !1 }) => {
	let h = e[0], [g, _] = u(t ?? ("id" in h ? h.id : void 0));
	l(() => {
		g && o?.(g);
	}, [o, g]);
	let { isActive: v } = a(), y = m ? [e[0]] : e, b = [...y].sort((e, t) => e.index ? 1 : t.index ? -1 : 0).find((e) => "href" in e ? v(e.href) : g === e.id);
	return /* @__PURE__ */ d(s, {
		secondary: p,
		asChild: !0,
		"aria-label": p ? "primary-navigation" : "secondary-navigation",
		children: y.length === 1 ? /* @__PURE__ */ d("li", {
			className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground",
			children: y[0].label
		}) : y.map(({ label: e, ...t }, a) => {
			let o = b && "href" in b && "href" in t ? b.href === t.href : "id" in t && g === t.id;
			return /* @__PURE__ */ d(c, {
				active: o,
				href: "href" in t ? t.href : void 0,
				onClick: () => {
					"id" in t && _?.(t.id);
				},
				secondary: p,
				asChild: !0,
				children: /* @__PURE__ */ f(i, {
					role: "link",
					...t,
					children: [t.variant === "upsell" && /* @__PURE__ */ d(n, {
						icon: r,
						size: "md",
						className: "mr-1 text-[hsl(var(--promote-50))]"
					}), e]
				})
			}, a);
		})
	});
}, m = ({ secondary: e }) => /* @__PURE__ */ f(s, {
	"aria-label": e ? "Secondary empty nav" : "Main empty nav",
	secondary: e,
	"aria-busy": "true",
	"aria-live": "polite",
	children: [
		/* @__PURE__ */ d(c.Skeleton, { className: "w-24" }),
		/* @__PURE__ */ d(c.Skeleton, { className: "w-20" }),
		/* @__PURE__ */ d(c.Skeleton, { className: "w-28" }),
		/* @__PURE__ */ d(c.Skeleton, { className: "w-20" })
	]
}), h = e(t("Tabs", o(p, m)));
//#endregion
export { p as BaseTabs, h as Tabs, m as TabsSkeleton };
