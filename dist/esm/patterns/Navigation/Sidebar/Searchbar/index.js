import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/Search.js";
import { Shortcut as i } from "../../../../ui/Shortcut/index.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Searchbar/index.tsx
function s({ onClick: s, placeholder: c, shortcut: l = ["cmd", "k"], ...u }) {
	return /* @__PURE__ */ a("div", {
		className: "px-3",
		children: /* @__PURE__ */ o("button", {
			onClick: s,
			className: e("mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover", t()),
			type: "button",
			...u,
			children: [/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ a(n, {
					icon: r,
					size: "md"
				}), /* @__PURE__ */ a("span", { children: c })]
			}), /* @__PURE__ */ a("div", {
				className: "hidden xs:block",
				children: /* @__PURE__ */ a(i, { keys: l })
			})]
		})
	});
}
//#endregion
export { s as SearchBar };
