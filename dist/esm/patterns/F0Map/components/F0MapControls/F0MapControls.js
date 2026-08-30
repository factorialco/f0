import { DataTestIdWrapper as e } from "../../../../lib/data-testid/index.js";
import t from "../../../../icons/app/Add.js";
import n from "../../../../icons/app/FitView.js";
import r from "../../../../icons/app/Minus.js";
import i from "../../../../icons/app/Target.js";
import { useI18n as a } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as o } from "../../../../components/F0Button/F0Button.js";
import { F0Box as s } from "../../../../F0Box.js";
import { forwardRef as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/patterns/F0Map/components/F0MapControls/F0MapControls.tsx
var f = c(({ onZoomIn: c, onZoomOut: f, onFit: p, onLocate: m, labels: h, dataTestId: g }, _) => {
	let v = a(), y = !!(m || p), b = !!(c || f), x = (e) => /* @__PURE__ */ u("div", {
		className: "rounded-lg backdrop-blur-md",
		children: /* @__PURE__ */ u(s, {
			background: "inverse-secondary",
			border: "default",
			borderStyle: "solid",
			borderColor: "secondary",
			borderRadius: "lg",
			padding: "xs",
			children: /* @__PURE__ */ u("div", {
				className: "flex flex-col items-center gap-1",
				children: e
			})
		})
	});
	return /* @__PURE__ */ u(e, {
		dataTestId: g,
		children: /* @__PURE__ */ d("div", {
			ref: _,
			role: "toolbar",
			"aria-orientation": "vertical",
			"aria-label": v.map.navigation,
			className: "flex flex-col items-center gap-2",
			children: [y && x(/* @__PURE__ */ d(l, { children: [p && /* @__PURE__ */ u(o, {
				variant: "ghost",
				size: "md",
				label: h?.fit ?? v.map.controls.fit,
				icon: n,
				hideLabel: !0,
				onClick: p
			}), m && /* @__PURE__ */ u(o, {
				variant: "ghost",
				size: "md",
				label: h?.locate ?? v.map.controls.locate,
				icon: i,
				hideLabel: !0,
				onClick: m
			})] })), b && x(/* @__PURE__ */ d(l, { children: [c && /* @__PURE__ */ u(o, {
				variant: "ghost",
				size: "md",
				label: h?.zoomIn ?? v.map.controls.zoomIn,
				icon: t,
				hideLabel: !0,
				onClick: c
			}), f && /* @__PURE__ */ u(o, {
				variant: "ghost",
				size: "md",
				label: h?.zoomOut ?? v.map.controls.zoomOut,
				icon: r,
				hideLabel: !0,
				onClick: f
			})] }))]
		})
	});
});
f.displayName = "F0MapControls";
//#endregion
export { f as F0MapControls };
