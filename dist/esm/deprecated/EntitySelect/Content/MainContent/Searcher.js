import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import t from "../../../../icons/app/CrossedCircle.js";
import { focusNextFocusable as n, focusPreviousFocusable as r } from "../../ListItem/index.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { Search as o } from "lucide-react";
//#region src/deprecated/EntitySelect/Content/MainContent/Searcher.tsx
var s = ({ search: s, onSearch: c, searchPlaceholder: l, disabled: u = !1, goToFirst: d, goToLast: f }) => /* @__PURE__ */ a("div", {
	className: "flex justify-between gap-1 rounded border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover",
	children: [
		/* @__PURE__ */ i(e, {
			icon: o,
			size: "md"
		}),
		/* @__PURE__ */ i("input", {
			disabled: u,
			onKeyDown: (e) => {
				e.key === "ArrowDown" ? (e.preventDefault(), e.stopPropagation(), n(e.currentTarget, d)) : e.key === "ArrowUp" ? (e.preventDefault(), e.stopPropagation(), r(e.currentTarget, f)) : e.key === "Enter" && (e.preventDefault(), e.stopPropagation());
			},
			type: "text",
			className: "w-full border-none bg-transparent focus:outline-none",
			placeholder: l,
			value: s,
			onChange: (e) => c(e.target.value)
		}),
		s && /* @__PURE__ */ i(e, {
			icon: t,
			size: "md",
			onClick: () => c(""),
			className: "cursor-pointer text-f1-icon-secondary"
		})
	]
});
//#endregion
export { s as Searcher };
