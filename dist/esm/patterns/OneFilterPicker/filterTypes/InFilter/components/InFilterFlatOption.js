"use client";
import { cn as e, focusRing as t } from "../../../../../lib/utils.js";
import { OneEllipsis as n } from "../../../../../lib/OneEllipsis/OneEllipsis.js";
import { InFilterOptionCheckbox as r } from "./InFilterOptionCheckbox.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/components/InFilterFlatOption.tsx
function o({ option: o, isSelected: s, onToggle: c, isCompactMode: l }) {
	return /* @__PURE__ */ i("div", {
		className: e("w-full", !l && "px-2"),
		children: /* @__PURE__ */ a("div", {
			className: e("flex w-full min-w-0 flex-1 cursor-pointer appearance-none items-center justify-between gap-1 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary", l && "py-1 pr-1", t()),
			onClick: c,
			children: [/* @__PURE__ */ i("span", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ i(n, { children: o.label })
			}), /* @__PURE__ */ i(r, {
				label: o.label,
				isSelected: s,
				onToggle: c
			})]
		})
	});
}
//#endregion
export { o as InFilterFlatOption };
