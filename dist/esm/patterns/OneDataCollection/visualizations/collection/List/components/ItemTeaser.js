import { OneEllipsis as e } from "../../../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Avatar as t } from "../../../../../../components/avatars/F0Avatar/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/List/components/ItemTeaser.tsx
var i = ({ title: i, avatar: a, description: o }) => /* @__PURE__ */ r("article", {
	className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2",
	children: [a && /* @__PURE__ */ n(t, {
		avatar: a,
		size: "md"
	}), /* @__PURE__ */ r("div", {
		className: "flex flex-1 flex-col gap-0.5",
		children: [/* @__PURE__ */ n("header", { children: /* @__PURE__ */ n("h3", { children: /* @__PURE__ */ n(e, {
			className: "text-base font-medium text-f1-foreground",
			children: i
		}) }) }), /* @__PURE__ */ n("aside", { children: o && o.length > 0 && /* @__PURE__ */ n("div", {
			className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1",
			children: o.map((t, i) => /* @__PURE__ */ r("div", {
				className: "flex min-w-0 gap-1",
				children: [/* @__PURE__ */ n(e, { children: t }), i < o.length - 1 && /* @__PURE__ */ n("span", {
					className: "hidden md:inline",
					children: " · "
				})]
			}, i))
		}) })]
	})]
});
//#endregion
export { i as ItemTeaser };
