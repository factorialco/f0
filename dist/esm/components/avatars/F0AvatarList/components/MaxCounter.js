import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../F0Icon/index.js";
import r from "../../../../icons/app/EllipsisHorizontal.js";
import { F0Avatar as i } from "../../F0Avatar/index.js";
import { Popover as a, PopoverContent as o, PopoverTrigger as s } from "../../../../ui/popover.js";
import { ScrollArea as c, ScrollBar as l } from "../../../../ui/scrollarea.js";
import { getAvatarDisplayName as u } from "../utils.js";
import { useEffect as d, useRef as f, useState as p } from "react";
import { cva as m } from "cva";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarList/components/MaxCounter.tsx
var v = m({
	base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
	variants: {
		size: {
			xs: "h-5 w-5 rounded-xs text-sm",
			sm: "h-6 min-w-6 rounded-sm px-1 text-sm",
			md: "h-8 min-w-8 rounded px-1.5"
		},
		type: {
			base: "",
			rounded: "!rounded-full"
		}
	},
	compoundVariants: [{
		size: "sm",
		type: "rounded",
		className: "px-1.5"
	}, {
		size: "md",
		type: "rounded",
		className: "px-2"
	}],
	defaultVariants: {
		size: "md",
		type: "base"
	}
}), y = ({ count: m, size: y = "md", type: b, list: x, avatarType: S = "person" }) => {
	let [C, w] = p(!1), T = f(!1), E = f(null), D = f(void 0);
	d(() => () => clearTimeout(D.current), []);
	let O = () => clearTimeout(D.current), k = () => {
		O(), T.current = !0, w(!0);
	}, A = () => {
		O(), D.current = setTimeout(() => w(!1), 150);
	}, j = y === "xs" ? /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g(n, {
		icon: r,
		size: "xs"
	}), /* @__PURE__ */ _("span", {
		className: "sr-only",
		children: ["+", m]
	})] }) : `+${m}`;
	if (!x?.length) return /* @__PURE__ */ g("div", {
		className: e("cursor-default font-medium transition", v({
			size: y,
			type: b
		})),
		children: j
	});
	let M = x.map((e, t) => {
		let n = e.tooltipDescription;
		return /* @__PURE__ */ _("div", {
			className: "flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
			children: [/* @__PURE__ */ g("div", {
				className: "h-6 w-6 shrink-0",
				children: /* @__PURE__ */ g(i, {
					avatar: {
						type: S,
						...e
					},
					size: "sm"
				})
			}), /* @__PURE__ */ _("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ g("div", {
					className: "truncate font-semibold",
					children: u(S, e)
				}), n && /* @__PURE__ */ g("div", {
					className: "truncate text-sm text-current opacity-70",
					children: n
				})]
			})]
		}, t);
	});
	return /* @__PURE__ */ _(a, {
		open: C,
		onOpenChange: w,
		children: [/* @__PURE__ */ g(s, {
			asChild: !0,
			children: /* @__PURE__ */ g("button", {
				type: "button",
				onPointerEnter: k,
				onPointerLeave: A,
				onClick: (e) => {
					T.current = !1, C && (e.preventDefault(), E.current?.focus());
				},
				className: e("cursor-pointer font-medium transition hover:bg-f1-background-secondary-hover", v({
					size: y,
					type: b
				}), t()),
				children: j
			})
		}), /* @__PURE__ */ g(o, {
			ref: E,
			side: "top",
			className: "w-[200px] overflow-hidden rounded border-0 bg-f1-background-inverse p-0 font-medium text-f1-foreground-inverse shadow-none",
			onPointerEnter: O,
			onPointerLeave: A,
			onOpenAutoFocus: (e) => {
				T.current && e.preventDefault();
			},
			onCloseAutoFocus: (e) => {
				T.current && e.preventDefault();
			},
			children: /* @__PURE__ */ _(c, {
				className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
				children: [M, /* @__PURE__ */ g(l, {
					orientation: "vertical",
					className: "[&_div]:bg-f1-background"
				})]
			})
		})]
	});
};
//#endregion
export { y as MaxCounter };
