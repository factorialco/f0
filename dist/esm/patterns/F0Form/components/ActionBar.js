import { F0Icon as e } from "../../../components/F0Icon/index.js";
import t from "../../../icons/app/AlertCircle.js";
import n from "../../../icons/app/ChevronDown.js";
import r from "../../../icons/app/ChevronUp.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
import { F0ActionBar as a } from "../../../components/F0ActionBar/index.js";
import { forwardRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/patterns/F0Form/components/ActionBar.tsx
var l = o(function({ isActionBar: o, isDirty: l, actionBarStatus: u, hasErrors: d, hasPendingUploads: f, errorCount: p, resolvedActionBarLabel: m, submitLabel: h, submitIcon: g, discardableChanges: _, discardLabel: v, discardIcon: y, issuesOneLabel: b, issuesOtherLabel: x, onSubmit: S, onDiscard: C, goToPreviousError: w, goToNextError: T }, E) {
	return o ? /* @__PURE__ */ s(a, {
		ref: E,
		isOpen: l || u === "loading" || u === "success",
		variant: "light",
		status: d ? void 0 : u,
		label: m,
		leftContent: d ? /* @__PURE__ */ c("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ c("div", {
				className: "flex items-center gap-0.5",
				children: [/* @__PURE__ */ s(e, {
					icon: t,
					size: "md",
					color: "critical"
				}), /* @__PURE__ */ s("span", {
					className: "font-medium text-f1-foreground-critical",
					children: p === 1 ? b.replace("{{count}}", String(p)) : x.replace("{{count}}", String(p))
				})]
			}), p > 1 && /* @__PURE__ */ c("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ s(i, {
					icon: r,
					onClick: w,
					variant: "outline",
					label: "Go to previous error",
					hideLabel: !0
				}), /* @__PURE__ */ s(i, {
					icon: n,
					onClick: T,
					variant: "outline",
					label: "Go to next error",
					hideLabel: !0
				})]
			})]
		}) : void 0,
		primaryActions: [{
			label: h,
			icon: g,
			onClick: S,
			disabled: d || f
		}],
		secondaryActions: _ ? [{
			label: v,
			icon: y,
			onClick: C
		}] : []
	}) : /* @__PURE__ */ s(a, {
		ref: E,
		isOpen: u === "loading" || u === "success",
		variant: "light",
		status: u,
		label: m
	});
});
l.displayName = "FormActionBar";
//#endregion
export { l as FormActionBar };
