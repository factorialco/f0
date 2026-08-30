import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Plus.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
import { focusNextFocusable as r, focusPreviousFocusable as i } from "../ListItem/index.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/deprecated/EntitySelect/CreateItem/index.tsx
var s = ({ label: s, onCreate: c, goToFirst: l, goToLast: u }) => /* @__PURE__ */ a("div", {
	className: "w-full pl-1 pr-1",
	onKeyDown: (e) => {
		e.key === "ArrowDown" || e.key === "Tab" ? r(e.currentTarget, l) : e.key === "ArrowUp" && i(e.currentTarget, u);
	},
	children: /* @__PURE__ */ o("label", {
		"aria-label": s,
		className: e("flex flex-row flex-wrap items-center gap-1.5 rounded border px-1.5 py-1.5 hover:cursor-pointer", "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover", "select-none"),
		children: [/* @__PURE__ */ a(n, {
			hideLabel: !0,
			label: s,
			onClick: () => c(),
			icon: t,
			size: "sm",
			variant: "outline"
		}), /* @__PURE__ */ a("div", {
			className: "flex flex-1 flex-col",
			children: /* @__PURE__ */ a("div", {
				className: "flex flex-1 flex-row items-center gap-2 break-all",
				children: /* @__PURE__ */ a("span", {
					className: e("line-clamp-1"),
					children: s
				})
			})
		})]
	})
});
//#endregion
export { s as CreateItem };
