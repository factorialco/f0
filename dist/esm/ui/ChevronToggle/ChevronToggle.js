import { cn as e } from "../../lib/utils.js";
import { F0Icon as t } from "../../components/F0Icon/index.js";
import n from "../../icons/app/ChevronDown.js";
import { useReducedMotion as r } from "../../lib/a11y.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/ui/ChevronToggle/ChevronToggle.tsx
var a = ({ open: a, className: o, onClick: s, disabled: c, size: l = "xs", closedRotation: u = 0, openRotation: d = 180 }) => {
	let f = r();
	return /* @__PURE__ */ i("div", {
		style: {
			transform: `rotate(${a ? d : u}deg)`,
			transition: f ? "none" : "transform 200ms ease-out"
		},
		className: e("flex h-3 w-3 shrink-0 items-center justify-center", c && "cursor-not-allowed opacity-50", o),
		onClick: s,
		children: /* @__PURE__ */ i(t, {
			icon: n,
			size: l,
			role: "button"
		})
	});
};
//#endregion
export { a as ChevronToggle };
