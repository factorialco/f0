import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/CheckCircle.js";
import r from "../../../icons/app/LogoAvatar.js";
import { Counter as i } from "../../../ui/Counter/index.js";
import { F0Button as a } from "../../../components/F0Button/F0Button.js";
import { F0AvatarPerson as o } from "../../../components/avatars/F0AvatarPerson/index.js";
import { Checkbox as s } from "../../../ui/checkbox.js";
import { HighlightText as c } from "../HighLightText/index.js";
import { useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { ChevronDown as p, ChevronRight as m } from "lucide-react";
//#region src/deprecated/EntitySelect/ListItem/index.tsx
function h(e, t) {
	let n = Array.from(document.querySelectorAll("[data-avatarname-navigator-element=\"true\"]")), r = n.indexOf(e);
	r >= 0 && r < n.length - 1 ? n[r + 1].focus() : n.length > 0 && t?.();
}
function g(e, t) {
	let n = Array.from(document.querySelectorAll("[data-avatarname-navigator-element=\"true\"]")), r = n.indexOf(e);
	r > 0 ? n[r - 1].focus() : n.length > 0 && t?.();
}
var _ = ({ entity: r, selected: i, onSelect: a, onRemove: l, marginLeft: u, search: p, goToFirst: m, goToLast: _, singleSelector: v = !1, disabled: y = !1, hiddenAvatar: b = !1 }) => {
	let x = r.name.split(" "), S = x[0] || "", C = x.slice(1).join(" ");
	return /* @__PURE__ */ d("div", {
		className: "w-full pl-1 pr-1",
		children: /* @__PURE__ */ f("label", {
			"aria-label": r.name,
			className: e(u, "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer", "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover", i && v ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""),
			children: [
				!b && /* @__PURE__ */ d(o, {
					src: r.avatar,
					firstName: S,
					lastName: C,
					size: "xs",
					deactivated: r.deactivated
				}),
				/* @__PURE__ */ d("div", {
					className: "flex flex-1 flex-col",
					children: /* @__PURE__ */ d("div", {
						className: e("flex flex-1 flex-row items-center gap-2 break-all", r.deactivated ? "text-f1-foreground/[0.61]" : void 0),
						children: /* @__PURE__ */ d(c, {
							text: r.name,
							search: p,
							searchKeys: r.searchKeys
						})
					})
				}),
				/* @__PURE__ */ d(s, {
					"data-avatarname-navigator-element": "true",
					checked: i,
					disabled: y,
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), !y && (i ? l(r) : a(r));
					},
					onKeyDown: (e) => {
						if (e.key === "Enter" || e.key === " ") {
							if (e.preventDefault(), y) return;
							i ? i && l(r) : a(r);
						} else e.key === "ArrowDown" ? h(e.currentTarget, m) : e.key === "ArrowUp" && g(e.currentTarget, _);
					},
					className: e("pointer-events-none ml-auto", v ? "opacity-0" : "")
				}),
				v && i && /* @__PURE__ */ d(t, {
					className: "text-f1-icon-selected",
					icon: n,
					size: "md"
				})
			]
		})
	});
}, v = ({ groupView: n, expanded: o, search: v, entity: y, selected: b, partialSelected: x, onSelect: S, onRemove: C, onExpand: w, goToFirst: T, goToLast: E, isChild: D = !1, hideLine: O = !1, showGroupIcon: k = !1, singleSelector: A = !1, disabled: j = !1, hiddenAvatar: M = !1 }) => {
	let [N, P] = l(!1);
	if (!n) return /* @__PURE__ */ d(_, {
		marginLeft: D ? "ml-6" : "ml-0",
		entity: y,
		search: v,
		selected: b,
		onSelect: S,
		onRemove: C,
		singleSelector: A,
		goToFirst: T,
		goToLast: E,
		disabled: j,
		hiddenAvatar: M
	});
	let F = (e) => {
		if (e.key === " ") e.preventDefault(), w(!o);
		else if (e.key === "Enter" && A) w(!o);
		else if (e.key === "Enter") {
			if (j) return;
			!b || x ? S(y) : b && C(y);
		} else e.key === "ArrowDown" ? h(e.currentTarget, T) : e.key === "ArrowUp" && g(e.currentTarget, E);
	}, I = () => {
		if (N) w(!o), P(!1);
		else {
			if (j || A) return;
			b ? C(y) : S(y);
		}
	};
	if (!y.subItems?.length) return null;
	let L = b || x;
	return /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ f("div", {
		className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1",
		children: [/* @__PURE__ */ d(a, {
			hideLabel: !0,
			icon: o ? p : m,
			onClick: () => w(!o),
			label: o ? "Collapse" : "Expand",
			size: "sm",
			variant: "ghost",
			type: "button"
		}), /* @__PURE__ */ f("label", {
			"aria-label": y.name,
			onPointerDown: () => {
				P(!0);
			},
			className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
			children: [
				k && /* @__PURE__ */ d(t, {
					icon: r,
					className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
				}),
				/* @__PURE__ */ f("div", {
					className: "flex flex-grow flex-row items-center gap-2 break-all",
					children: [/* @__PURE__ */ d(c, {
						semiBold: !0,
						text: y.name,
						search: v,
						searchKeys: y.searchKeys
					}), /* @__PURE__ */ d(i, { value: y.subItems?.length ?? 0 })]
				}),
				/* @__PURE__ */ d(s, {
					checked: L,
					disabled: j,
					onClick: I,
					onKeyDown: F,
					indeterminate: x,
					onPointerDown: (e) => {
						e.stopPropagation(), P(!1);
					},
					"data-avatarname-navigator-element": "true",
					className: e("ml-auto", A ? "opacity-0" : "")
				})
			]
		})]
	}), !O && !o && /* @__PURE__ */ d("div", { className: "h-[1px] w-full bg-f1-border-secondary" })] });
};
v.displayName = "EntitySelectListItem";
//#endregion
export { v as EntitySelectListItem, _ as ListItemSingleContent, h as focusNextFocusable, g as focusPreviousFocusable };
