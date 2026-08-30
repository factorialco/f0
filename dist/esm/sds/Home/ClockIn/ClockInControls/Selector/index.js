import { cn as e } from "../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../components/F0Icon/index.js";
import n from "../../../../../icons/app/DropdownDefault.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/sds/Home/ClockIn/ClockInControls/Selector/index.tsx
function a({ text: a, placeholder: o, icon: s, onClick: c }) {
	return /* @__PURE__ */ i("div", {
		className: "flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",
		onClick: c,
		children: [
			s && /* @__PURE__ */ r(t, {
				icon: s,
				className: "text-f1-icon"
			}),
			/* @__PURE__ */ r("span", {
				className: e("font-medium", a ? "text-f1-foreground" : "text-f1-foreground-secondary"),
				children: a ?? o
			}),
			/* @__PURE__ */ r(t, { icon: n })
		]
	});
}
//#endregion
export { a as default };
