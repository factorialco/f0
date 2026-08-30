import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import n from "../../../icons/app/AlertCircle.js";
import r from "../../../icons/app/InfoCircle.js";
import i from "../../../icons/app/Warning.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/F0InputField/components/InputMessages.tsx
var s = {
	default: {
		color: "text-f1-foreground-secondary",
		iconColor: "default"
	},
	warning: {
		color: "text-f1-foreground-warning",
		iconColor: "warning",
		icon: i
	},
	info: {
		color: "text-f1-foreground-info",
		iconColor: "info",
		icon: r
	},
	error: {
		color: "text-f1-foreground-critical",
		iconColor: "critical",
		icon: n
	}
}, c = ({ status: n }) => {
	if (!n) return null;
	let r = (Array.isArray(n.message) ? n.message : [n.message]).filter(Boolean), i = s[n.type].icon;
	return r.length > 0 && /* @__PURE__ */ o("div", {
		className: "flex gap-1",
		children: [i && /* @__PURE__ */ a(t, {
			icon: i,
			color: s[n.type].iconColor || "currentColor"
		}), /* @__PURE__ */ a("ul", {
			className: "list-none",
			children: r.map((t) => /* @__PURE__ */ a("li", {
				className: e("text-base font-medium", s[n.type].color),
				children: t
			}, t))
		})]
	});
};
//#endregion
export { c as InputMessages };
