import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/ChevronDown.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { motion as o } from "motion/react";
//#region src/ui/OverflowList/OverflowIndicator/index.tsx
var s = o.create(t), c = ({ count: t, totalItemsCount: o, isOpen: c }) => {
	let l = r();
	return /* @__PURE__ */ a("div", {
		className: e("flex items-center gap-1 rounded py-1.5 pl-3 pr-2 text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary", c && "bg-f1-background-secondary"),
		children: [
			/* @__PURE__ */ a("span", { children: [t < o && "+", t] }),
			/* @__PURE__ */ i("span", { children: l.actions.more }),
			/* @__PURE__ */ i("div", {
				className: "flex h-5 w-5 items-center justify-center after:absolute after:h-4 after:w-4 after:rounded-xs after:bg-f1-background-secondary after:content-['']",
				children: /* @__PURE__ */ i(s, {
					icon: n,
					initial: { rotate: 0 },
					animate: { rotate: c ? 180 : 0 },
					size: "xs"
				})
			})
		]
	});
};
c.displayName = "OverflowIndicator";
//#endregion
export { c as OverflowIndicator };
