import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Cross.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../../components/F0Button/F0Button.js";
import { F0Avatar as i } from "../../../../components/avatars/F0Avatar/index.js";
import { Dropdown as a, MobileDropdown as o } from "../../../Navigation/Dropdown/index.js";
import { F0ButtonDropdown as s } from "../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import { Description as c } from "./Description.js";
import { Metadata as l } from "../Metadata/index.js";
import { Fragment as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/experimental/Information/Headers/BaseHeader/index.tsx
var m = (e) => e.isVisible !== !1;
function h({ title: h, avatar: _, deactivated: v, description: y, primaryAction: b, secondaryActions: x = [], otherActions: S = [], status: C, metadata: w = [], metadataRowGap: T = "none", showBottomBorder: E = !1, onClose: D }) {
	let O = n(), k = [C && {
		label: C.label,
		value: {
			type: "status",
			label: C.text,
			variant: C.variant
		},
		actions: C.actions,
		hideLabel: !0
	}, ...w], A = x.filter(m), j = S.filter(m), M = b && m(b), N = A.length > 0, P = j.length > 0, F = (e) => !!e && "items" in e, I = (e) => !!e && "label" in e && !("items" in e), L = (e, t) => `${g(e) ? `${e.value ?? "default"}-${e.items.map((e) => e.value).join("-")}` : e.label}-${t}`;
	return /* @__PURE__ */ p("div", {
		className: e("resource-header px-page flex flex-col gap-3 pb-5 pt-3", E && "border-0 border-b border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ p("div", {
			className: e("flex flex-col items-start justify-start gap-4 md:flex-row", !y && "md:items-center"),
			children: [
				/* @__PURE__ */ p("div", {
					className: e("flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start", !y && "md:items-center"),
					children: [_ && /* @__PURE__ */ f("div", {
						className: "flex items-start",
						children: /* @__PURE__ */ f(i, {
							avatar: { ..._.type === "generic" ? {
								..._,
								type: "company"
							} : _ },
							size: "xl"
						})
					}), /* @__PURE__ */ p("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ f("span", {
							className: e("text-2xl font-semibold", v ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
							children: h
						}), y && /* @__PURE__ */ f(c, { description: y })]
					})]
				}),
				k.length > 0 && /* @__PURE__ */ f("div", {
					className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden",
					children: /* @__PURE__ */ f(l, {
						items: k,
						rowGap: T
					})
				}),
				/* @__PURE__ */ p("div", {
					className: "flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden",
					children: [
						M && I(b) && /* @__PURE__ */ f("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ f(r, {
								label: b.label,
								onClick: b.onClick,
								variant: "default",
								icon: b.icon,
								size: "lg",
								disabled: b.disabled,
								tooltip: b.tooltip,
								loading: b.loading
							})
						}),
						M && F(b) && /* @__PURE__ */ f("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ f(s, {
								items: b.items,
								onClick: b.onClick,
								variant: "default",
								value: b.value,
								size: "lg",
								disabled: b.disabled,
								tooltip: b.tooltip,
								loading: b.loading
							})
						}),
						A.map((e, t) => /* @__PURE__ */ f(u, { children: /* @__PURE__ */ f("div", {
							className: "w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full",
							children: g(e) ? /* @__PURE__ */ f(s, {
								items: e.items,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								value: e.value,
								size: "lg",
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							}) : /* @__PURE__ */ f(r, {
								label: e.label,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								icon: e.icon,
								size: "lg",
								hideLabel: e.hideLabel,
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							})
						}) }, L(e, t))),
						j.length > 0 && /* @__PURE__ */ f("div", {
							className: "w-full [&>*]:w-full [&_button]:w-full",
							children: /* @__PURE__ */ f(o, { items: j })
						}),
						D && /* @__PURE__ */ f("div", {
							className: "w-full md:hidden [&>*]:w-full",
							children: /* @__PURE__ */ f(r, {
								label: O.actions.close,
								icon: t,
								variant: "outline",
								size: "lg",
								onClick: D
							})
						})
					]
				}),
				/* @__PURE__ */ p("div", {
					className: "-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto",
					children: [
						j.length > 0 && /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(a, { items: j }) }),
						A.map((e, t) => /* @__PURE__ */ f(u, { children: /* @__PURE__ */ f("div", {
							className: "hidden md:block",
							children: g(e) ? /* @__PURE__ */ f(s, {
								items: e.items,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								value: e.value,
								size: "md",
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							}) : /* @__PURE__ */ f(r, {
								label: e.label,
								onClick: e.onClick,
								variant: e.variant ?? "outline",
								icon: e.icon,
								hideLabel: e.hideLabel,
								disabled: e.disabled,
								tooltip: e.tooltip,
								loading: e.loading
							})
						}) }, L(e, t))),
						M && (N || P) && /* @__PURE__ */ f("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
						M && I(b) && /* @__PURE__ */ f("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ f(r, {
								label: b.label,
								onClick: b.onClick,
								variant: "default",
								icon: b.icon,
								disabled: b.disabled,
								tooltip: b.tooltip,
								loading: b.loading
							})
						}),
						M && F(b) && /* @__PURE__ */ f("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ f(s, {
								items: b.items,
								onClick: b.onClick,
								variant: "default",
								value: b.value,
								size: "md",
								disabled: b.disabled,
								tooltip: b.tooltip,
								loading: b.loading
							})
						}),
						D && /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }), /* @__PURE__ */ f("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ f(r, {
								label: O.actions.close,
								hideLabel: !0,
								icon: t,
								variant: "outline",
								onClick: D
							})
						})] })
					]
				})
			]
		}), k.length > 0 && /* @__PURE__ */ f("div", {
			className: "hidden flex-wrap items-center gap-x-3 gap-y-1 md:block",
			children: /* @__PURE__ */ f(l, {
				items: k,
				rowGap: T
			})
		})]
	});
}
var g = (e) => "items" in e;
//#endregion
export { h as BaseHeader, g as isSecondaryDropdownAction };
