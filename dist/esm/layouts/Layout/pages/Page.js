import { cn as e } from "../../../lib/utils.js";
import { validLayoutChildrenGuard as t } from "../internal/utils.js";
import { forwardRef as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/layouts/Layout/pages/Page.tsx
var a = n(function({ children: n, aside: a, header: o, variant: s = "main-aside" }, c) {
	return process.env.NODE_ENV === "development" && t("Page", n, ["block", "group"]), /* @__PURE__ */ r("div", {
		ref: c,
		className: "h-full",
		children: /* @__PURE__ */ i("div", {
			className: e("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
			children: [/* @__PURE__ */ i("main", {
				className: e("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", s === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
				children: [o && /* @__PURE__ */ r("header", {
					className: e("sticky top-0 z-30 bg-f1-background"),
					children: o
				}), /* @__PURE__ */ r("div", {
					className: "flex-1",
					children: n
				})]
			}), a && /* @__PURE__ */ r("aside", {
				className: e("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", s === "aside-main" ? "md:order-1" : "md:order-3"),
				children: a
			})]
		})
	});
});
//#endregion
export { a as Page };
