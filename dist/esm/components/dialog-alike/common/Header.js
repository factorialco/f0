import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Cross.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../F0Button/internal.js";
import { DropdownInternal as i } from "../../../experimental/Navigation/Dropdown/internal.js";
import { DrawerDescription as a } from "../../../ui/drawer.js";
import { DialogTitle as o } from "../../../ui/Dialog/components/DialogTitle.js";
import { BreadcrumbList as s } from "../../../ui/breadcrumb.js";
import { BreadcrumbItem as c } from "../../../experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem.js";
import { Tabs as l } from "../../../patterns/Navigation/Tabs/index.js";
import { useDialogWrapperContext as u } from "./DialogWrapperProvider.js";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/dialog-alike/common/Header.tsx
var m = ({ title: m, description: h, module: g, otherActions: _, tabs: v, activeTabId: y, setActiveTabId: b, disableClose: x }) => {
	let S = n(), { onClose: C } = u(), w = !!v, T = () => /* @__PURE__ */ f("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), E = _?.filter((e) => e.type !== "separator" && e.type !== "label") ?? [];
	return /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ p("div", {
		className: e("flex flex-row items-start justify-between gap-3 px-4 py-3", !w && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ p("div", {
			className: "flex flex-col gap-1",
			children: [g ? /* @__PURE__ */ f(() => g ? /* @__PURE__ */ f(s, { children: /* @__PURE__ */ f(c, {
				item: {
					id: g.id,
					label: g.label,
					href: g.href,
					module: g.id
				},
				isLast: !1,
				isFirst: !0
			}) }) : null, {}) : m && /* @__PURE__ */ f(o, {
				className: "py-1 text-lg font-semibold text-f1-foreground",
				children: m
			}), !!h && /* @__PURE__ */ f(a, {
				className: "text-base text-f1-foreground-secondary",
				children: h
			})]
		}), /* @__PURE__ */ p("div", {
			className: "flex flex-row gap-2",
			children: [
				/* @__PURE__ */ f(() => !E.length || !_ ? null : E.length <= 2 ? /* @__PURE__ */ f("div", {
					className: "flex flex-row gap-2",
					children: E.map((e) => /* @__PURE__ */ f(r, {
						variant: "outline",
						icon: e.icon,
						onClick: e.onClick,
						label: e.label,
						hideLabel: !0
					}, e.label))
				}) : /* @__PURE__ */ f(i, { items: _ }), {}),
				_ && /* @__PURE__ */ f(T, {}),
				/* @__PURE__ */ f(r, {
					variant: "outline",
					icon: t,
					disabled: x,
					onClick: C,
					label: S.actions.close,
					hideLabel: !0
				})
			]
		})]
	}), v && v.length > 0 && /* @__PURE__ */ f("div", {
		className: "-mx-2",
		children: /* @__PURE__ */ f(l, {
			tabs: v,
			activeTabId: y,
			setActiveTabId: b
		})
	})] });
};
//#endregion
export { m as Header };
