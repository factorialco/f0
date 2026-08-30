import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n } from "../../lib/utils.js";
import { withSkeleton as r } from "../../lib/skeleton.js";
import { AccordionItem as i } from "./components/AccordionItem.js";
import { F0AccordionSkeleton as a } from "./F0AccordionSkeleton.js";
import { Fragment as o, forwardRef as s, useMemo as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { useControllableState as d } from "@radix-ui/react-use-controllable-state";
//#region src/components/F0Accordion/F0Accordion.tsx
var f = s((e, t) => {
	let { items: r, value: a, defaultValue: s, onValueChange: f, ...p } = e, m = c(() => s === void 0 ? r.filter((e) => e.defaultOpen).map((e) => e.id) : s, [s, r]), [h = [], g] = d({
		prop: a,
		defaultProp: m,
		onChange: f
	}), _ = (e, t) => {
		let n = h.includes(e);
		t && !n ? g([...h, e]) : !t && n && g(h.filter((t) => t !== e));
	};
	return /* @__PURE__ */ l("div", {
		ref: t,
		...p,
		className: n("flex flex-col rounded-md border border-solid border-f1-border-secondary", "overflow-hidden bg-f1-background"),
		children: r.map((e, t) => /* @__PURE__ */ u(o, { children: [t > 0 && /* @__PURE__ */ l("div", { className: "h-px w-full bg-f1-border-secondary" }), /* @__PURE__ */ l(i, {
			item: e,
			open: h.includes(e.id),
			onOpenChange: (t) => _(e.id, t)
		})] }, e.id))
	});
});
f.displayName = "F0Accordion";
var p = e(t("F0Accordion", r(f, a)));
//#endregion
export { p as F0Accordion };
