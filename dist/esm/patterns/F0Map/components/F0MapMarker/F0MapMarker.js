import e from "../../../../icons/app/Office.js";
import { BaseMapMarker as t } from "../internal/BaseMapMarker/BaseMapMarker.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/F0Map/components/F0MapMarker/F0MapMarker.tsx
var i = [
	"default",
	"workplace",
	"employee",
	"company",
	"stop"
], a = "malibu", o = "radical", s = (t) => {
	switch (t.variant) {
		case "employee": return { variant: {
			variant: "person",
			firstName: t.firstName,
			lastName: t.lastName,
			src: t.src
		} };
		case "company": return { variant: {
			variant: "company",
			name: t.name,
			src: t.src
		} };
		case "workplace": return {
			variant: {
				variant: "icon",
				icon: e
			},
			color: a
		};
		case "stop": return {
			variant: {
				variant: "letter",
				letter: t.letter
			},
			color: o
		};
		default: return { variant: { variant: "color" } };
	}
}, c = n(function(e, n) {
	let { variant: i, color: a } = s(e);
	return /* @__PURE__ */ r(t, {
		ref: n,
		...i,
		color: a,
		size: e.size,
		selected: e.selected,
		collapsed: e.collapsed,
		label: e.label,
		showLabel: e.showLabel,
		labelPlacement: e.labelPlacement,
		onClick: e.onClick,
		ariaLabel: e.ariaLabel,
		presentational: e.presentational,
		dataTestId: e.dataTestId,
		className: e.className
	});
});
c.displayName = "F0MapMarker";
var l = c;
//#endregion
export { l as F0MapMarker, i as f0MapMarkerVariants };
