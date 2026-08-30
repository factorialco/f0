import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as t } from "../../../../components/F0Button/internal.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/F0Graph/components/F0GraphExpander/F0GraphExpander.tsx
var i = n(({ count: n, expanded: i, onClick: a, tabIndex: o, ariaLabel: s, loading: c }, l) => {
	let u = e(), d = n > 99 ? "+99" : String(n), f = u.t(i ? "actions.collapse" : "actions.expand");
	return /* @__PURE__ */ r("div", {
		className: "inline-flex",
		children: /* @__PURE__ */ r(t, {
			ref: l,
			variant: "neutral",
			label: d,
			"aria-label": s ?? f,
			"aria-expanded": i,
			tabIndex: o,
			loading: c,
			onClick: a,
			tooltip: f
		})
	});
});
i.displayName = "F0GraphExpander";
//#endregion
export { i as F0GraphExpander };
