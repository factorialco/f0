import { cn as e } from "../../../lib/utils.js";
import { usePrivacyMode as t } from "../../../lib/privacyMode.js";
import { jsx as n } from "react/jsx-runtime";
import { motion as r } from "motion/react";
//#region src/sds/Profile/PrivateBox/index.tsx
var i = ({ children: i }) => {
	let { enabled: a } = t();
	return /* @__PURE__ */ n("div", {
		className: e("inline-flex ring-1 ring-inset ring-transparent transition-all duration-150", a && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"),
		"aria-hidden": a,
		children: /* @__PURE__ */ n(r.div, {
			className: "h-full w-full",
			animate: {
				opacity: +!a,
				scale: a ? .95 : 1
			},
			transition: { duration: .15 },
			children: i
		})
	});
};
//#endregion
export { i as PrivateBox };
