import { F0Icon as e } from "../../F0Icon/index.js";
import t from "../../../icons/app/AlertCircle.js";
import n from "../../../icons/app/CheckCircle.js";
import r from "../../../icons/app/InfoCircle.js";
import i from "../../../icons/app/Warning.js";
import { cva as a } from "cva";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarAlert/F0AvatarAlert.tsx
var s = a({
	base: "flex items-center justify-center border border-solid",
	variants: {
		type: {
			critical: "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
			warning: "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
			info: "border-f1-border-info bg-f1-background-info text-f1-icon-info",
			positive: "border-f1-border-positive bg-f1-background-positive text-f1-icon-positive"
		},
		size: {
			sm: "h-6 w-6 rounded-sm",
			md: "h-8 w-8 rounded",
			lg: "h-10 w-10 rounded-md"
		}
	},
	defaultVariants: {
		type: "info",
		size: "md"
	}
}), c = ({ type: a, size: c, "aria-label": l, "aria-labelledby": u }) => {
	let d = {
		critical: t,
		warning: i,
		info: r,
		positive: n
	};
	return /* @__PURE__ */ o("div", {
		className: s({
			type: a,
			size: c
		}),
		"aria-label": l,
		"aria-labelledby": u,
		role: "alert",
		children: /* @__PURE__ */ o(e, {
			icon: d[a],
			size: c
		})
	});
};
//#endregion
export { c as F0AvatarAlert };
