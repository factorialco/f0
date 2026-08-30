import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/ArrowLeft.js";
import n from "../../../icons/app/Cross.js";
import r from "../../../icons/app/Ellipsis.js";
import i from "../../../icons/app/Maximize.js";
import { useI18n as a } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as o } from "../../../components/F0Button/internal.js";
import { DropdownInternal as s } from "../../../experimental/Navigation/Dropdown/internal.js";
import { DrawerDescription as c } from "../../../ui/drawer.js";
import { useF0Dialog as l } from "./F0DialogProvider.js";
import { DialogTitle as u } from "../../../ui/Dialog/components/DialogTitle.js";
import { BaseHeader as d } from "../../../experimental/Information/Headers/BaseHeader/index.js";
import { BreadcrumbList as f } from "../../../ui/breadcrumb.js";
import { BreadcrumbItem as p } from "../../../experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem.js";
import { PageNavigation as m } from "../../../experimental/Navigation/Header/PageNavigation/index.js";
import { Tabs as h } from "../../Navigation/Tabs/index.js";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/patterns/F0Dialog/components/F0DialogHeader.tsx
var y = ({ title: y, description: b, module: x, otherActions: S, navigation: C, resourceHeader: w, controls: T, headerStatus: E, dismissable: D = !0, tabs: O, activeTabId: k, setActiveTabId: A }) => {
	let j = a(), { onClose: M } = l(), N = !!O, P = () => /* @__PURE__ */ _("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), F = S?.filter((e) => e.type !== "separator" && e.type !== "label") ?? [], I = () => {
		if (!F.length || !S) return null;
		let e = F.some((e) => e.critical);
		return F.length <= 2 && !e ? /* @__PURE__ */ _("div", {
			className: "flex flex-row gap-2",
			children: F.map((e) => /* @__PURE__ */ _(o, {
				variant: "outline",
				icon: e.icon,
				onClick: e.onClick,
				label: e.label,
				hideLabel: !0
			}, e.label))
		}) : /* @__PURE__ */ _(s, {
			items: S,
			icon: r
		});
	}, L = () => x ? /* @__PURE__ */ _(f, { children: /* @__PURE__ */ _(p, {
		item: {
			id: x.id,
			label: x.label,
			href: x.href,
			module: x.id
		},
		isLast: !1,
		isFirst: !0
	}) }) : null, R = () => E ? /* @__PURE__ */ _("span", {
		className: "whitespace-nowrap text-f1-foreground-secondary",
		children: E
	}) : null, z = () => D ? /* @__PURE__ */ _(o, {
		variant: "outline",
		icon: n,
		onClick: M,
		label: j.actions.close,
		hideLabel: !0
	}) : null, B = () => O ? /* @__PURE__ */ _("div", {
		className: "shrink-0 overflow-hidden",
		children: /* @__PURE__ */ _("div", {
			className: "-mx-2",
			children: /* @__PURE__ */ _(h, {
				tabs: O,
				activeTabId: k,
				setActiveTabId: A
			})
		})
	}) : null;
	return w || T ? /* @__PURE__ */ v(g, { children: [
		/* @__PURE__ */ v("div", {
			className: "flex flex-row items-center justify-between gap-3 px-4 py-3",
			children: [/* @__PURE__ */ _("div", {
				className: "flex flex-row items-center gap-2",
				children: /* @__PURE__ */ _(() => T ? T.kind === "back" ? /* @__PURE__ */ _(o, {
					variant: "outline",
					icon: t,
					onClick: T.onClick,
					label: T.label
				}) : /* @__PURE__ */ v(g, { children: [
					T.expand && (T.expand.url === void 0 ? /* @__PURE__ */ _(o, {
						variant: "outline",
						icon: i,
						onClick: T.expand.onClick,
						label: T.expand.label
					}) : /* @__PURE__ */ _(o, {
						variant: "outline",
						icon: i,
						href: T.expand.url,
						label: T.expand.label
					})),
					T.expand && T.navigation && /* @__PURE__ */ _(P, {}),
					T.navigation && /* @__PURE__ */ _(m, { ...T.navigation })
				] }) : null, {})
			}), /* @__PURE__ */ v("div", {
				className: "flex flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ _(R, {}),
					/* @__PURE__ */ _(I, {}),
					/* @__PURE__ */ _(z, {})
				]
			})]
		}),
		w ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(u, {
			className: "sr-only",
			children: w.title
		}), /* @__PURE__ */ _("div", {
			className: "[&_.resource-header]:px-4",
			children: /* @__PURE__ */ _(d, { ...w })
		})] }) : y && /* @__PURE__ */ _(u, {
			className: "sr-only",
			children: y
		}),
		/* @__PURE__ */ _(B, {})
	] }) : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("div", {
		className: e("flex flex-row items-start justify-between gap-3 px-4 py-3", !N && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ _("div", {
			className: "flex flex-row items-center gap-3",
			children: (x || y || !!b) && /* @__PURE__ */ v("div", {
				className: "flex flex-col gap-1",
				children: [x ? /* @__PURE__ */ _(L, {}) : y && /* @__PURE__ */ _(u, {
					className: "py-1 text-lg font-semibold text-f1-foreground",
					children: y
				}), !!b && /* @__PURE__ */ _(c, {
					className: "text-base text-f1-foreground-secondary",
					children: b
				})]
			})
		}), /* @__PURE__ */ v("div", {
			className: "flex flex-row items-center gap-2",
			children: [
				C && /* @__PURE__ */ _(m, { ...C }),
				/* @__PURE__ */ _(R, {}),
				/* @__PURE__ */ _(I, {}),
				(C || S) && /* @__PURE__ */ _(P, {}),
				/* @__PURE__ */ _(z, {})
			]
		})]
	}), /* @__PURE__ */ _(B, {})] });
};
//#endregion
export { y as F0DialogHeader };
