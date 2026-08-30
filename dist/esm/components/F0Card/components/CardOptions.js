import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Bookmark.js";
import n from "../../../icons/app/BookmarkFilled.js";
import r from "../../../icons/app/Ellipsis.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../F0Button/internal.js";
import { Dropdown as o } from "../../../experimental/Navigation/Dropdown/index.js";
import { F0Checkbox as s } from "../../F0Checkbox/F0Checkbox.js";
import { useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/F0Card/components/CardOptions.tsx
function d({ otherActions: d, selectable: f = !1, selected: p = !1, onSelect: m, bookmark: h, title: g, overlay: _ = !1 }) {
	let v = i(), y = d && d.length > 0, [b, x] = c(!1);
	return !y && !f && !h ? null : /* @__PURE__ */ u("div", {
		className: e("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (b || p || h?.bookmarked) && "delay-0 sm:opacity-100", _ && "pointer-events-auto absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
		children: [
			y && /* @__PURE__ */ l("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ l(o, {
					items: d,
					open: b,
					onOpenChange: x,
					children: /* @__PURE__ */ l(a, {
						label: v.actions.other,
						icon: r,
						variant: "ghost",
						size: "sm",
						hideLabel: !0,
						pressed: b,
						compact: !0,
						"data-testid": "card-options-dropdown",
						onClick: (e) => e.stopPropagation()
					})
				})
			}),
			f && /* @__PURE__ */ l("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ l(s, {
					title: g,
					checked: p,
					onCheckedChange: m,
					hideLabel: !0,
					stopPropagation: !0
				})
			}),
			h && /* @__PURE__ */ l("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ l(a, {
					label: h.label ?? g ?? v.actions.save,
					icon: h.bookmarked ? n : t,
					variant: "ghost",
					size: "sm",
					hideLabel: !0,
					pressed: h.bookmarked,
					compact: !0,
					"data-testid": "card-bookmark-toggle",
					onClick: (e) => {
						e.stopPropagation(), h.onBookmarkChange(!h.bookmarked);
					}
				})
			})
		]
	});
}
//#endregion
export { d as CardOptions };
