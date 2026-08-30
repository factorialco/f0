import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import { F0Avatar as n } from "../../../components/avatars/F0Avatar/index.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/experimental/Navigation/Dropdown/DropdownItem.tsx
var o = ({ item: o }) => /* @__PURE__ */ a(r, { children: [
	o.avatar && /* @__PURE__ */ i(n, {
		avatar: o.avatar,
		size: "xs"
	}),
	o.icon && /* @__PURE__ */ i(t, {
		icon: o.icon,
		size: "md",
		className: e("text-f1-icon", o.critical && "text-f1-icon-critical")
	}),
	/* @__PURE__ */ a("div", {
		className: "flex flex-col items-start",
		children: [o.label, o.description && /* @__PURE__ */ i("div", {
			className: e("font-normal text-f1-foreground-secondary", o.critical && "text-f1-foreground-critical"),
			children: o.description
		})]
	})
] });
//#endregion
export { o as DropdownItemContent };
