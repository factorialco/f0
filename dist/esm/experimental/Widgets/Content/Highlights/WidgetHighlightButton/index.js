import { cn as e } from "../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../components/F0Icon/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/Highlights/WidgetHighlightButton/index.tsx
var i = ({ onClick: t, children: r }) => {
	let i = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
	return t ? /* @__PURE__ */ n("a", {
		className: e(i, "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"),
		onClick: t,
		tabIndex: 0,
		children: r
	}) : /* @__PURE__ */ n("div", {
		className: i,
		tabIndex: 1,
		children: r
	});
};
function a({ label: a, count: o, icon: s, iconClassName: c, onClick: l }) {
	return /* @__PURE__ */ n(i, {
		onClick: l,
		children: /* @__PURE__ */ r("div", {
			className: e("flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5", l && "hover:border-f1-border-hover"),
			children: [/* @__PURE__ */ r("div", {
				className: "flex flex-row items-center",
				children: [/* @__PURE__ */ n("p", {
					className: "line-clamp-1 flex-1 text-f1-foreground-secondary",
					children: a
				}), /* @__PURE__ */ n(t, {
					icon: s,
					size: "md",
					className: c
				})]
			}), /* @__PURE__ */ n("p", {
				className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground",
				children: o
			})]
		})
	});
}
//#endregion
export { a as WidgetHighlightButton };
