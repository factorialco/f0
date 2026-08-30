import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/ChevronRight.js";
import { Link as r } from "../../../../lib/linkHandler.js";
import { memo as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/experimental/Lists/DataList/actions/NavigateAction.tsx
var s = i(({ children: i, className: s, ...c }) => /* @__PURE__ */ o(r, {
	...c,
	className: e("text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground", "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover", s),
	children: [i, /* @__PURE__ */ a("div", {
		className: "grid",
		children: /* @__PURE__ */ a(t, {
			"aria-hidden": !0,
			icon: n,
			size: "md"
		})
	})]
}));
s.displayName = "NavigateAction";
//#endregion
export { s as NavigateAction };
