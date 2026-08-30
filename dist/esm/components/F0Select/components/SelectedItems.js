import { F0Icon as e } from "../../F0Icon/index.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as n } from "../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0TagStatus as r } from "../../tags/F0TagStatus/index.js";
import { F0Avatar as i } from "../../avatars/F0Avatar/index.js";
import { useLabelsOverflow as a } from "../utils.js";
import { forwardRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/F0Select/components/SelectedItems.tsx
function l({ count: e }) {
	let r = t();
	return /* @__PURE__ */ s("div", {
		className: "flex w-full items-center gap-1 text-left",
		children: /* @__PURE__ */ s(n, {
			className: "min-w-0 flex-1 text-f1-foreground",
			children: `${e} ${e === 1 ? r.status.selected.singular : r.status.selected.plural}`.toLowerCase()
		})
	});
}
function u({ selection: e, totalSelectedCount: t }) {
	let n = e.map((e) => e.selectedLabel ?? e.label), { allFit: r, containerRef: i } = a(n);
	return r ? /* @__PURE__ */ s("div", {
		ref: i,
		className: "flex w-full items-center gap-1 text-left",
		children: /* @__PURE__ */ s("span", {
			className: "min-w-0 flex-1 truncate text-f1-foreground",
			children: n.join(", ")
		})
	}) : /* @__PURE__ */ s("div", {
		ref: i,
		className: "flex w-full items-center text-left",
		children: /* @__PURE__ */ s(l, { count: t })
	});
}
var d = o(function({ selection: a, multiple: o, totalSelectedCount: d, allSelected: f, hideItemIcon: p }, m) {
	let h = t();
	if (o) {
		let e = d ?? a.length;
		return e === 0 && a.length === 0 ? null : f === !0 ? /* @__PURE__ */ s("div", {
			className: "flex w-full items-center gap-1 text-left",
			children: /* @__PURE__ */ s(n, {
				className: "min-w-0 flex-1 text-f1-foreground",
				children: `${h.status.selected.all} (${e})`
			})
		}) : a.length === 0 && e > 0 ? /* @__PURE__ */ s(l, { count: e }) : /* @__PURE__ */ s(u, {
			selection: a,
			totalSelectedCount: e
		});
	}
	let g = a[0];
	return !g && d && d > 0 ? /* @__PURE__ */ s("div", {
		className: "flex min-w-0 flex-1 justify-start gap-1.5",
		ref: m,
		children: /* @__PURE__ */ s(n, {
			tag: "span",
			className: "text-left text-f1-foreground-secondary",
			children: "..."
		})
	}) : g ? g.tag && typeof g.tag != "string" && g.tag.type === "status" ? /* @__PURE__ */ s("div", {
		className: "flex min-w-0 flex-1 justify-start",
		ref: m,
		children: /* @__PURE__ */ s(r, {
			text: g.tag.text,
			variant: g.tag.variant
		})
	}) : /* @__PURE__ */ c("div", {
		className: "flex min-w-0 flex-1 justify-start gap-1.5",
		ref: m,
		children: [
			g.avatar && /* @__PURE__ */ s("div", {
				className: "flex shrink-0 items-center",
				children: /* @__PURE__ */ s(i, {
					avatar: g.avatar,
					size: "xs"
				})
			}),
			g.icon && !p && /* @__PURE__ */ s("div", {
				className: "h-5 shrink-0 text-f1-icon",
				children: /* @__PURE__ */ s(e, { icon: g.icon })
			}),
			/* @__PURE__ */ s(n, {
				tag: "span",
				className: "text-left text-f1-foreground",
				children: g.selectedLabel ?? g.label
			})
		]
	}) : null;
});
//#endregion
export { d as SelectedItems };
