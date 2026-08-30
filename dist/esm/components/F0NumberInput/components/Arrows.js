import { F0Icon as e } from "../../F0Icon/F0Icon.js";
import t from "../../../icons/app/ChevronUp.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { ChevronDown as i } from "lucide-react";
//#region src/components/F0NumberInput/components/Arrows.tsx
var a = ({ onClickArrow: a, step: o, disabled: s }) => !o || s ? null : /* @__PURE__ */ r("div", {
	className: "-mt-1 hidden h-full flex-col group-focus-within:flex group-hover:flex",
	onClick: (e) => e.preventDefault(),
	children: [/* @__PURE__ */ n("div", {
		onClick: a("increase"),
		className: "h-3 cursor-pointer",
		role: "button",
		"aria-label": "Increase",
		children: /* @__PURE__ */ n(e, {
			size: "sm",
			icon: t
		})
	}), /* @__PURE__ */ n("div", {
		onClick: a("decrease"),
		className: "h-3 cursor-pointer",
		role: "button",
		"aria-label": "Decrease",
		children: /* @__PURE__ */ n(e, {
			size: "sm",
			icon: i
		})
	})]
});
//#endregion
export { a as Arrows };
