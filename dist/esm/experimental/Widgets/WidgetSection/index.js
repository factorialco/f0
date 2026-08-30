import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { useTextFormatEnforcer as n } from "../../../lib/text.js";
import { forwardRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/experimental/Widgets/WidgetSection/index.tsx
var o = r(({ title: e, children: t }, r) => (n(e, { disallowEmpty: !0 }, { componentName: "WidgetSection" }), /* @__PURE__ */ a("div", {
	ref: r,
	className: "flex flex-col gap-2",
	children: [/* @__PURE__ */ i("p", {
		className: "text-base font-medium text-f1-foreground-secondary",
		children: e
	}), t]
})));
o.displayName = "WidgetSection";
var s = e(t("WidgetSection", o));
//#endregion
export { s as WidgetSection };
