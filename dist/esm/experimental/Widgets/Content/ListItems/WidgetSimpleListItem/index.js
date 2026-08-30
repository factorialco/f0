import { cn as e } from "../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../components/F0Icon/index.js";
import { Counter as n } from "../../../../../ui/Counter/index.js";
import { F0TagAlert as r } from "../../../../../components/tags/F0TagAlert/index.js";
import { F0TagRaw as i } from "../../../../../components/tags/F0TagRaw/index.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/ListItems/WidgetSimpleListItem/index.tsx
var s = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ a("a", {
	className: t,
	onClick: e,
	tabIndex: 0,
	children: n
}) : /* @__PURE__ */ a("div", {
	className: t,
	tabIndex: -1,
	children: n
});
function c({ id: c, title: l, alert: u, rawTag: d, count: f, icon: p, rightIcon: m, iconClassName: h = "text-f1-icon-secondary", rightIconClassName: g = "text-f1-icon-secondary", onClick: _ }) {
	let v = e("flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground", _ ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0);
	return /* @__PURE__ */ o(s, {
		onClick: (e) => {
			e.preventDefault(), _?.(c);
		},
		className: v,
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-1 flex-row items-start gap-1",
			children: [
				p && /* @__PURE__ */ a(t, {
					icon: p,
					size: "md",
					className: e("mt-0.5", h)
				}),
				/* @__PURE__ */ a("p", {
					className: "mt-0.5 line-clamp-2 font-medium",
					children: l
				}),
				m && /* @__PURE__ */ a(t, {
					icon: m,
					size: "md",
					className: e("mt-0.5", g)
				})
			]
		}), /* @__PURE__ */ o("div", {
			className: "flex flex-row items-center gap-2",
			children: [
				u && /* @__PURE__ */ a(r, { ...u }),
				d && /* @__PURE__ */ a(i, { ...d }),
				!!f && /* @__PURE__ */ a(n, { value: f })
			]
		})]
	});
}
//#endregion
export { c as WidgetSimpleListItem };
