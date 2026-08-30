import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import t from "../../../../icons/app/InfoCircleLine.js";
import { Tooltip as n } from "../../../Overlays/Tooltip/index.js";
import { forwardRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/TwoColumnsList/index.tsx
var o = ({ title: e, info: t }) => /* @__PURE__ */ a("div", {
	className: "flex items-center justify-between",
	children: [/* @__PURE__ */ i("p", {
		className: "flex text-f1-foreground-secondary",
		children: e
	}), /* @__PURE__ */ i("div", {
		className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium",
		children: t
	})]
}), s = r(function({ title: r, titleValue: s, titleTooltip: c, list: l }, u) {
	return /* @__PURE__ */ a("div", {
		ref: u,
		className: "flex flex-col gap-2",
		children: [r && /* @__PURE__ */ a("div", {
			className: "flex items-center justify-between gap-2 font-medium",
			children: [/* @__PURE__ */ a("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ i("div", { children: r }), c && /* @__PURE__ */ i("div", {
					className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help",
					children: /* @__PURE__ */ i(n, {
						label: c.label,
						description: c.description,
						children: /* @__PURE__ */ i(e, {
							icon: t,
							size: "sm"
						})
					})
				})]
			}), s && /* @__PURE__ */ i("div", { children: s })]
		}), l.map((e) => /* @__PURE__ */ i(o, {
			title: e.title,
			info: e.info
		}, e.title))]
	});
});
//#endregion
export { s as TwoColumnsList };
