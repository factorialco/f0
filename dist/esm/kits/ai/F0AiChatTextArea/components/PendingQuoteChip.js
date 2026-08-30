import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/Cross.js";
import r from "../../../../icons/app/Reply.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { OneEllipsis as o } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/PendingQuoteChip.tsx
var l = ({ quote: l, onRemove: u }) => {
	let d = i();
	return /* @__PURE__ */ s("div", {
		"aria-atomic": "true",
		"aria-live": "polite",
		className: "p-1",
		role: "status",
		children: /* @__PURE__ */ c("div", {
			className: e("flex items-start gap-2 justify-center", "rounded-[10px] bg-f1-background-hover pl-2 py-1.5 pr-1.5"),
			children: [
				/* @__PURE__ */ s("div", {
					className: "flex items-center py-0.5",
					children: /* @__PURE__ */ s(t, {
						icon: r,
						size: "md",
						color: "default"
					})
				}),
				/* @__PURE__ */ s(o, {
					className: "h-full flex-1 py-0.5 text-[12px] font-medium text-f1-foreground-secondary",
					lines: 1,
					children: l.text
				}),
				/* @__PURE__ */ s(a, {
					variant: "ghost",
					label: d.ai.removeQuote,
					onClick: u,
					icon: n,
					hideLabel: !0,
					size: "sm"
				})
			]
		})
	});
};
//#endregion
export { l as PendingQuoteChip };
