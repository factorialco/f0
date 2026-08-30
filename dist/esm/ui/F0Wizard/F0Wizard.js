import e from "../../icons/app/ArrowLeft.js";
import t from "../../icons/app/ArrowRight.js";
import { useI18n as n } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Dialog as r } from "../../components/dialog-alike/F0Dialog/F0Dialog.js";
import { WizardProvider as i } from "./components/WizardProvider.js";
import { WizardSteps as a } from "./components/WizardSteps.js";
import { useWizardNavigation as o } from "./hooks/useWizardNavigation.js";
import { useMemo as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/ui/F0Wizard/F0Wizard.tsx
var u = () => {}, d = ({ steps: d, children: f, isOpen: p, onClose: m = u, title: h, size: g = "xl", defaultStepIndex: _, nextLabel: v, previousLabel: y, submitLabel: b, onSubmit: x, onStepChanged: S, allowStepSkipping: C = !1, autoCloseOnLastStepSubmit: w = !1, autoSkipCompletedSteps: T = !1 }) => {
	let E = s(() => {
		if (_ !== void 0) return _;
		if (!T) return 0;
		let e = d.findIndex((e) => e.isCompleted?.() !== !0);
		return e === -1 ? d.length - 1 : e;
	}, [
		_,
		T,
		d
	]), D = o({
		steps: d,
		defaultStepIndex: E,
		onSubmit: x,
		onStepChanged: S,
		allowStepSkipping: C,
		autoCloseOnLastStepSubmit: w,
		onClose: m
	}), O = n(), k = d[D.currentStep], A = D.currentStep === 0, j = D.currentStep === d.length - 1, M = j ? k?.nextLabel ?? b ?? O.wizard.submit : k?.nextLabel ?? v ?? O.wizard.next, N = k?.previousLabel ?? y ?? O.wizard.previous, P = s(() => ({
		label: M,
		icon: j ? void 0 : t,
		onClick: () => void D.goNext(),
		disabled: k?.isCompleted?.() === !1 || k?.hasErrors?.() === !0,
		loading: D.loading
	}), [
		M,
		j,
		D,
		k
	]), F = s(() => A ? void 0 : {
		label: N,
		icon: e,
		onClick: D.goPrevious,
		disabled: D.loading
	}, [
		A,
		N,
		D
	]);
	return /* @__PURE__ */ c(r, {
		isOpen: p,
		onClose: m,
		size: g,
		modal: !0,
		title: h,
		primaryAction: P,
		secondaryAction: F,
		disableContentPadding: !0,
		children: /* @__PURE__ */ c(i, {
			currentStep: D.currentStep,
			totalSteps: d.length,
			loading: D.loading,
			goToStep: D.goToStep,
			goNext: D.goNext,
			goPrevious: D.goPrevious,
			steps: d,
			allowStepSkipping: C,
			children: /* @__PURE__ */ l("div", {
				className: "flex h-[58vh] flex-1 flex-row",
				children: [/* @__PURE__ */ c("div", {
					className: "w-1/3 shrink-0 overflow-y-auto border-x-0 border-b-0 border-r border-t-0 border-dashed border-f1-border-secondary p-2",
					children: /* @__PURE__ */ c(a, {})
				}), /* @__PURE__ */ c("div", {
					className: "flex-1 overflow-y-auto px-8",
					children: f({
						currentStep: D.currentStep,
						goToStep: D.goToStep
					})
				})]
			})
		})
	});
};
d.displayName = "F0Wizard";
//#endregion
export { d as F0Wizard };
