import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/F0Icon.js";
import n from "../../../icons/app/DropdownOpen.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/F0Select/components/Arrow.tsx
var i = ({ disabled: i, open: a, onChange: o, size: s = "sm", className: c }) => /* @__PURE__ */ r("div", {
	className: e(!i && "cursor-pointer", "origin-center transition-transform duration-200", "flex items-center justify-center", !a && "rotate-180", s === "md" && "scale-110", c),
	onClick: () => {
		i || o?.(!a);
	},
	children: /* @__PURE__ */ r(t, {
		icon: n,
		size: "lg"
	})
});
//#endregion
export { i as Arrow };
