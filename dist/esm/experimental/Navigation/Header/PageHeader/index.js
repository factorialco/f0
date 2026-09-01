import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/ChevronLeft.js";
import n from "../../../../icons/app/Menu.js";
import { Tooltip as r } from "../../../Overlays/Tooltip/index.js";
import { Link as i } from "../../../../lib/linkHandler.js";
import { Skeleton as a } from "../../../../ui/skeleton.js";
import { ButtonInternal as o } from "../../../../components/F0Button/internal.js";
import { F0Button as s } from "../../../../components/F0Button/F0Button.js";
import { F0TagStatus as c } from "../../../../components/tags/F0TagStatus/index.js";
import { Dropdown as l } from "../../Dropdown/index.js";
import { Breadcrumbs as u } from "../Breadcrumbs/index.js";
import { OneSwitch as d } from "../../../AiPromotionChat/OneSwitch.js";
import { useSidebar as f } from "../../../../patterns/ApplicationFrame/FrameProvider.js";
import { F0OneSwitch as p } from "../../../../kits/ai/F0OneSwitch/F0OneSwitch.js";
import { FavoriteButton as m } from "../Favorites/index.js";
import { PageNavigation as h } from "../PageNavigation/index.js";
import { ProductUpdates as g } from "../ProductUpdates/index.js";
import { PageHeaderNavigationContext as _, PageHeaderNavigationProvider as v, usePageHeaderNavigation as y } from "./PageHeaderNavigationContext.js";
import { usePageHeaderItemNavigation as b } from "./usePageHeaderItemNavigation.js";
import { useContext as x, useRef as S, useState as C } from "react";
import { jsx as w, jsxs as T } from "react/jsx-runtime";
import { AnimatePresence as E, motion as D } from "motion/react";
//#region src/experimental/Navigation/Header/PageHeader/index.tsx
function O({ module: i, statusTag: o = void 0, breadcrumbs: l = [], actions: v = [], embedded: y = !1, navigation: b, productUpdates: S, favorites: C, oneSwitchTooltip: O, oneSwitchAutoOpen: A, hideOneSwitch: j = !1 }) {
	let { sidebarState: M, toggleSidebar: N } = f(), P = x(_), F = b ?? P ?? void 0, I = [{
		id: i.href,
		label: i.name,
		href: i.href,
		module: i.id
	}, ...l], L = o && Object.keys(o).length !== 0, R = y && l.length > 0, z = !y && v.length > 0, B = !y && !!S?.isVisible, V = I[I.length - 1], H = "navigation" in window ? window.navigation : null, U = y && (H ? !!H.canGoBack : window.history.length > 1);
	return /* @__PURE__ */ T("div", {
		className: e("flex items-center justify-between px-page py-4", y ? "h-12" : "h-16"),
		children: [/* @__PURE__ */ T("div", {
			className: "flex flex-grow items-center",
			children: [/* @__PURE__ */ w(E, { children: !y && M !== "locked" && /* @__PURE__ */ w(D.div, {
				initial: {
					opacity: 0,
					width: 0
				},
				animate: {
					opacity: 1,
					width: "auto"
				},
				exit: {
					opacity: 0,
					width: 0
				},
				children: /* @__PURE__ */ w("div", {
					className: "mr-3",
					children: /* @__PURE__ */ w(s, {
						variant: "ghost",
						hideLabel: !0,
						onClick: () => N(),
						label: "Open main menu",
						icon: n
					})
				})
			}) }), /* @__PURE__ */ T("div", {
				className: e("flex flex-grow items-center gap-2", U && "justify-center"),
				children: [y && U && /* @__PURE__ */ w("div", {
					className: "absolute left-4",
					children: /* @__PURE__ */ w(s, {
						variant: "ghost",
						hideLabel: !0,
						label: "Back",
						icon: t,
						onClick: () => window.history.back()
					})
				}), U || R ? /* @__PURE__ */ w("div", {
					className: "text-lg font-semibold text-f1-foreground",
					children: "loading" in V ? /* @__PURE__ */ w(a, { className: "h-4 w-24" }) : V.label
				}) : /* @__PURE__ */ w(u, {
					breadcrumbs: I,
					append: C !== void 0 && /* @__PURE__ */ w(m, {
						label: C.label,
						isMarked: C.isMarked,
						onChange: C?.onChange
					})
				}, I[0].id)]
			})]
		}), /* @__PURE__ */ T("div", {
			className: "flex items-center gap-3",
			children: [
				!y && L && /* @__PURE__ */ w("div", { children: o.tooltip ? /* @__PURE__ */ w(r, {
					label: o.tooltip,
					children: /* @__PURE__ */ w("div", { children: /* @__PURE__ */ w(c, {
						text: o.text,
						variant: o.variant,
						additionalAccessibleText: o.tooltip
					}) })
				}) : /* @__PURE__ */ w(c, {
					text: o.text,
					variant: o.variant
				}) }),
				!y && L && (F || z || B) && /* @__PURE__ */ w("div", { className: "h-4 w-px bg-f1-border-secondary" }),
				F && /* @__PURE__ */ w(h, { ...F }),
				F && z && /* @__PURE__ */ w("div", { className: "h-4 w-px bg-f1-border-secondary" }),
				(B || z) && /* @__PURE__ */ T("div", {
					className: "flex items-center gap-2",
					children: [B && /* @__PURE__ */ w("div", {
						className: "items-right flex gap-2",
						children: /* @__PURE__ */ w(g, {
							...S,
							currentModule: i.name
						})
					}), z && /* @__PURE__ */ w("div", {
						className: "items-right flex gap-2",
						children: v.map((e, t) => /* @__PURE__ */ w(k, { action: e }, t))
					})]
				}),
				/* @__PURE__ */ T("div", {
					className: "flex items-center gap-3",
					children: [!j && /* @__PURE__ */ w(p, {
						tooltip: O,
						autoOpen: A
					}), /* @__PURE__ */ w(d, {})]
				})
			]
		})]
	});
}
function k({ action: e }) {
	let t = S(null), [n, r] = C(!1), a = e.variant ?? "outline";
	return "actions" in e ? /* @__PURE__ */ w(l, {
		items: e.actions,
		open: n,
		onOpenChange: r,
		children: /* @__PURE__ */ w(o, {
			size: "md",
			variant: a,
			label: e.label,
			icon: e.icon,
			hideLabel: !0,
			pressed: n
		})
	}) : "onClick" in e ? /* @__PURE__ */ w(o, {
		size: "md",
		variant: a,
		label: e.label,
		icon: e.icon,
		hideLabel: !0,
		onClick: e.onClick
	}) : /* @__PURE__ */ w(i, {
		href: e.href,
		title: e.label,
		"aria-label": e.label,
		ref: t,
		children: /* @__PURE__ */ w(o, {
			size: "md",
			variant: a,
			label: e.label,
			icon: e.icon,
			hideLabel: !0,
			onClick: (e) => {
				e.preventDefault(), t.current?.click();
			}
		})
	});
}
//#endregion
export { O as PageHeader, _ as PageHeaderNavigationContext, v as PageHeaderNavigationProvider, b as usePageHeaderItemNavigation, y as usePageHeaderNavigation };
