import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Checkbox as n } from "../../../../components/F0Checkbox/F0Checkbox.js";
import { RadioIndicator as r } from "./RadioIndicator.js";
import { useLayoutEffect as i, useRef as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { useComposedRefs as c } from "@radix-ui/react-compose-refs";
//#region src/kits/ai/F0ClarifyingPanel/components/CustomAnswerRow.tsx
var l = 132, u = ({ mode: u, hasSelection: d, hasCustomText: f, customAnswerText: p, isCustomAnswerActive: m, canProceed: h, inputRef: g, onActivate: _, onChangeText: v, onToggleActive: y, onConfirm: b }) => {
	let x = t().ai.clarifyingQuestion.typeYourAnswer, S = a(null), C = c(S, g);
	i(() => {
		let e = S.current;
		if (!e) return;
		e.style.height = "auto";
		let t = Math.min(e.scrollHeight, l);
		e.style.height = `${t}px`, e.style.overflowY = e.scrollHeight > l ? "auto" : "hidden";
	}, [p]);
	let w = u === "single" ? /* @__PURE__ */ o(r, { isSelected: f && !d }) : /* @__PURE__ */ o(n, {
		checked: m,
		onCheckedChange: () => y(!m),
		title: x,
		hideLabel: !0
	});
	return /* @__PURE__ */ s("div", {
		className: e("flex items-start gap-2 rounded-md px-2 py-2", "transition-colors hover:bg-f1-background-hover"),
		children: [w, /* @__PURE__ */ o("textarea", {
			ref: C,
			rows: 1,
			value: p ?? "",
			onChange: (e) => v(e.target.value),
			onFocus: _,
			onKeyDown: (e) => {
				e.key === "Enter" && !e.shiftKey && h && (e.preventDefault(), b());
			},
			placeholder: x,
			"aria-label": x,
			className: "min-w-0 flex-1 resize-none bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
		})]
	});
};
//#endregion
export { u as CustomAnswerRow };
