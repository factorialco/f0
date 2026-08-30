"use client";
import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../F0Icon/index.js";
import r from "../../../icons/app/CrossedCircle.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as a } from "../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0Avatar as o } from "../../avatars/F0Avatar/index.js";
import { ScrollArea as s } from "../../../ui/scrollarea.js";
import { Spinner as c } from "../../../ui/Spinner/index.js";
import { useEffect as l, useRef as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/F0Select/components/SelectionPreview.tsx
var p = 10;
function m({ item: i, onDeselect: s }) {
	return /* @__PURE__ */ f("div", {
		className: "flex w-fit min-w-0 max-w-full items-center justify-between gap-1.5 rounded-md border border-solid border-f1-border-secondary p-1",
		children: [/* @__PURE__ */ f("div", {
			className: "flex min-w-0 flex-1 items-center gap-1.5",
			children: [
				i.avatar && /* @__PURE__ */ d(o, {
					avatar: i.avatar,
					size: "xs"
				}),
				i.icon && /* @__PURE__ */ d(n, {
					icon: i.icon,
					size: "sm",
					className: "shrink-0 text-f1-icon"
				}),
				/* @__PURE__ */ d(a, {
					className: "text-sm",
					children: i.label
				})
			]
		}), /* @__PURE__ */ d("button", {
			className: e("flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0", t()),
			"aria-label": `Remove ${i.label}`,
			type: "button",
			tabIndex: 0,
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), s(String(i.value));
			},
			children: /* @__PURE__ */ d(n, {
				icon: r,
				color: "default",
				size: "md"
			})
		})]
	});
}
function h({ items: e, onDeselect: t, allSelected: n, onLoadMore: r, isLoadingMore: a }) {
	let o = i(), h = u(null), g = (n === !0 || n === "indeterminate") && !!r, _ = e.length === 0;
	return l(() => {
		let e = h.current;
		if (!e) return;
		let t = (e) => e.stopPropagation();
		return e.addEventListener("wheel", t), e.addEventListener("touchmove", t), () => {
			e.removeEventListener("wheel", t), e.removeEventListener("touchmove", t);
		};
	}, []), /* @__PURE__ */ d("div", {
		ref: h,
		className: "flex w-48 shrink-0 flex-col overflow-hidden border-0 border-l border-solid border-f1-border-secondary",
		children: _ ? /* @__PURE__ */ d("div", {
			className: "flex flex-1 items-center justify-center p-4",
			children: /* @__PURE__ */ d("span", {
				className: "text-sm text-f1-foreground-secondary",
				children: o.status.noItemsSelected
			})
		}) : /* @__PURE__ */ d("div", {
			className: "flex min-h-0 flex-1 flex-col overflow-hidden",
			children: /* @__PURE__ */ d(s, {
				className: "flex h-full flex-col",
				onScrollBottom: () => {
					g && !a && r?.();
				},
				scrollMargin: p,
				children: /* @__PURE__ */ f("div", {
					className: "flex flex-col gap-1 p-2",
					children: [e.map((e) => /* @__PURE__ */ d(m, {
						item: e,
						onDeselect: t
					}, String(e.value))), a && /* @__PURE__ */ d("div", {
						className: "flex items-center justify-center py-2",
						children: /* @__PURE__ */ d(c, { size: "small" })
					})]
				})
			})
		})
	});
}
//#endregion
export { h as SelectionPreview };
