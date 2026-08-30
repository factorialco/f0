import { cn as e, focusRing as t } from "../../../lib/utils.js";
import n from "../../../icons/app/Check.js";
import { Counter as r } from "../../Counter/index.js";
import { useF0Wizard as i } from "./WizardProvider.js";
import { cva as a } from "cva";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/ui/F0Wizard/components/WizardSteps.tsx
var c = a({
	base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
	variants: { state: {
		active: "text-f1-foreground",
		completed: "text-f1-foreground-secondary",
		upcoming: "text-f1-foreground"
	} }
});
function l(e, t, n) {
	return e === t ? "active" : n ? "completed" : "upcoming";
}
function u({ state: e, index: t }) {
	return e === "completed" ? /* @__PURE__ */ o("span", {
		className: "flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary",
		children: /* @__PURE__ */ o(n, { className: "h-3 w-3" })
	}) : /* @__PURE__ */ o(r, {
		value: t + 1,
		type: e === "active" ? "selected" : "default",
		size: "md"
	});
}
function d() {
	let { steps: n, currentStep: r, goToStep: a, allowStepSkipping: d } = i();
	return /* @__PURE__ */ o("nav", {
		"aria-label": "Wizard steps",
		className: "flex flex-col gap-1.5 p-1",
		children: n.map((i, f) => {
			let p = f < r || i.isCompleted?.() === !0, m = l(f, r, p), h = n[r]?.hasErrors?.() === !0, g = f > r && n.slice(r, f).some((e) => e.hasErrors?.() === !0), _ = f !== r && !h && !g && n.slice(0, f).every((e) => e.isCompleted?.() !== !1);
			return _ && !d && f > r + 1 && (_ = !1), /* @__PURE__ */ s("button", {
				type: "button",
				onClick: () => {
					_ && a(f);
				},
				onKeyDown: (e) => {
					(e.key === "Enter" || e.key === " ") && _ && (e.preventDefault(), a(f));
				},
				disabled: !_ && f !== r,
				"aria-current": f === r ? "step" : void 0,
				className: e(t(), "flex cursor-pointer items-center gap-2 rounded p-2 text-left", m === "active" && "bg-f1-background-selected", _ && "hover:bg-f1-background-secondary-hover", !_ && f !== r && "cursor-default opacity-70"),
				children: [/* @__PURE__ */ o(u, {
					state: m,
					index: f
				}), /* @__PURE__ */ o("span", {
					className: c({ state: m }),
					children: i.title
				})]
			}, f);
		})
	});
}
//#endregion
export { d as WizardSteps };
