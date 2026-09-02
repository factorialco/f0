import { cn as e } from "../../../../../../lib/utils.js";
import { useI18n as t } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Link as n } from "../../../../../../components/F0Link/F0Link.js";
import { F0Checkbox as r } from "../../../../../../components/F0Checkbox/F0Checkbox.js";
import { renderProperty as i } from "../../../../property-render.js";
import { ItemActionsMobile as a } from "../../../../components/itemActions/ItemActionsMobile/ItemActionsMobile.js";
import { ItemActionsRowContainer as o } from "../../../../components/itemActions/ItemActionsRowContainer.js";
import { useItemActions as s } from "../../../../components/itemActions/useItemActions.js";
import { ItemActionsRow as c } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow.js";
import { ItemTeaser as l } from "./ItemTeaser.js";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/List/components/Row.tsx
var p = ({ source: p, item: m, selectedItems: h, handleSelectItemChange: g, fields: _, itemDefinition: v }) => {
	let y = t(), { actions: b } = y, x = (e, t) => i(e, t, "list", y), S = p.itemUrl ? p.itemUrl(m) : void 0, C = p.itemOnClick ? p.itemOnClick(m) : void 0, w = !!S || !!C, T = p.selectable ? p.selectable(m) : void 0, E = T !== void 0 && p.selectionInherited?.(m) === !0, D = T !== void 0 && (E || p.selectionDisabled?.(m) === !0), O = v(m), { hasMobileItemActions: k, primaryItemActions: A, dropdownItemActions: j, mobileDropdownItemActions: M, handleDropDownOpenChange: N, dropDownOpen: P } = s({
		source: p,
		item: m
	});
	return /* @__PURE__ */ f("div", {
		className: e("relative flex min-h-[64px] w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4", w && "cursor-pointer", "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:transition-all after:content-[''] hover:after:via-[#F5F6F8] hover:after:to-[#F5F6F8] dark:hover:after:via-[#192231] dark:hover:after:to-[#192231] md:after:block hover:md:bg-f1-background-hover"),
		children: [
			/* @__PURE__ */ d("div", {
				onClick: C,
				className: "pointer-events-auto absolute inset-0"
			}),
			/* @__PURE__ */ f("div", {
				className: "pointer-events-none flex flex-1 flex-row items-center gap-2",
				children: [
					p.selectable && T !== void 0 && /* @__PURE__ */ d("div", {
						className: e("pointer-events-auto z-10 hidden items-center justify-end md:flex", D && "cursor-not-allowed"),
						children: /* @__PURE__ */ d(r, {
							checked: E || h.has(T),
							indeterminate: E,
							onCheckedChange: (e) => g(m, e),
							disabled: D,
							title: `Select ${p.selectable(m)}`,
							hideLabel: !0
						})
					}),
					S && /* @__PURE__ */ d(n, {
						href: S,
						className: "pointer-events-auto absolute inset-0 block",
						tabIndex: 0,
						onClick: C,
						children: /* @__PURE__ */ d("span", {
							className: "sr-only",
							children: b.view
						})
					}),
					/* @__PURE__ */ d(l, {
						title: O.title,
						avatar: O.avatar,
						description: O.description
					})
				]
			}),
			/* @__PURE__ */ d("div", {
				className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end",
				children: (_ || []).filter((e) => !e.hide?.(m)).map((e) => {
					let t = x(m, e);
					return t ? /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d("div", {
						className: "flex items-center justify-center px-0 py-1 md:p-3 [&>span]:whitespace-nowrap",
						children: t
					}) }, String(e.label)) : null;
				})
			}),
			p.itemActions && /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(o, {
				dropDownOpen: P,
				className: "pointer-events-auto hidden md:flex",
				children: /* @__PURE__ */ d(c, {
					primaryItemActions: A,
					dropdownItemActions: j,
					handleDropDownOpenChange: N
				})
			}), k && /* @__PURE__ */ d(a, {
				className: "absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden",
				items: M,
				onOpenChange: N
			})] }),
			p.selectable && T !== void 0 && /* @__PURE__ */ d("div", {
				className: e("pointer-events-auto absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", k && "right-12"),
				children: /* @__PURE__ */ d(r, {
					checked: E || h.has(T),
					indeterminate: E,
					onCheckedChange: (e) => g(m, e),
					disabled: D,
					title: `Select ${p.selectable(m)}`,
					hideLabel: !0
				})
			})
		]
	});
};
//#endregion
export { p as Row };
