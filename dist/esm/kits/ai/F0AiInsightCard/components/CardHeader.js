import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { AIButton as n } from "../../AIButton/AIButton.js";
import { useReducedMotion as r } from "../../../../lib/a11y.js";
import { descriptionVariants as i } from "../variants.js";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c, motion as l } from "motion/react";
//#region src/kits/ai/F0AiInsightCard/components/CardHeader.tsx
var u = ({ description: u, isRevealed: d, onAskOne: f }) => {
	let p = t(), m = r();
	return /* @__PURE__ */ s(a, { children: [u && /* @__PURE__ */ o("span", {
		className: e(i(), "truncate"),
		children: u
	}), /* @__PURE__ */ o(c, { children: f && d && /* @__PURE__ */ o(l.div, {
		className: "absolute bottom-4 left-4 z-10",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: m ? 0 : .2,
			ease: [
				.33,
				1,
				.68,
				1
			]
		},
		children: /* @__PURE__ */ o(n, {
			size: "md",
			label: p.ai.ask,
			onClick: (e) => {
				e.stopPropagation(), f();
			}
		})
	}) })] });
};
//#endregion
export { u as CardHeader };
