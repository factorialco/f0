import e from "../../../../icons/app/Add.js";
import t from "../../../../icons/app/FitView.js";
import n from "../../../../icons/app/Minus.js";
import r from "../../../../icons/app/SearchPerson.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as a } from "../../../../components/F0Button/F0Button.js";
import { forwardRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/patterns/F0Graph/components/F0GraphControls/F0GraphControls.tsx
var l = o(({ onZoomIn: o, onZoomOut: l, onFitView: u, onFocusUser: d, labels: f }, p) => {
	let m = i();
	return /* @__PURE__ */ c("div", {
		ref: p,
		role: "toolbar",
		"aria-label": m.graph.controls.navigation,
		className: "flex flex-col items-center gap-2",
		children: [
			d && /* @__PURE__ */ s(a, {
				variant: "outline",
				size: "md",
				label: f?.findMe ?? m.graph.controls.findMe,
				icon: r,
				hideLabel: !0,
				onClick: d
			}),
			/* @__PURE__ */ s(a, {
				variant: "outline",
				size: "md",
				label: f?.fitView ?? m.graph.controls.fitToView,
				icon: t,
				hideLabel: !0,
				onClick: u
			}),
			/* @__PURE__ */ s("div", { className: "h-px w-4 bg-f1-border rounded" }),
			/* @__PURE__ */ s(a, {
				variant: "outline",
				size: "md",
				label: f?.zoomIn ?? m.graph.controls.zoomIn,
				icon: e,
				hideLabel: !0,
				onClick: o
			}),
			/* @__PURE__ */ s(a, {
				variant: "outline",
				size: "md",
				label: f?.zoomOut ?? m.graph.controls.zoomOut,
				icon: n,
				hideLabel: !0,
				onClick: l
			})
		]
	});
});
l.displayName = "F0GraphControls";
//#endregion
export { l as F0GraphControls };
