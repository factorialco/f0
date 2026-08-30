import { cn as e } from "../../../../lib/utils.js";
import { tableDisplayClassNames as t } from "../../const.js";
import { BarSeriesCell as n } from "../barSeries/barSeries.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/value-display/types/hourDistribution/hourDistribution.tsx
var i = 480;
function a(e) {
	try {
		let t = new Date(e);
		return Number.isNaN(t.getTime()) ? e : t.toLocaleDateString(void 0, {
			day: "numeric",
			month: "long"
		});
	} catch {
		return e;
	}
}
function o(e) {
	let t = Math.floor(e / 60), n = e % 60;
	return n === 0 ? `${t}h` : `${t}h ${n}m`;
}
function s(e) {
	return {
		label: e.date,
		value: e.value,
		...e.plannedValue == null ? {} : { secondaryValue: e.plannedValue },
		...e.justifiedAbsenceValue == null ? {} : { neutralValue: e.justifiedAbsenceValue },
		...e.justifiedAbsenceFullDay ? { neutralFullHeight: e.justifiedAbsenceFullDay } : {},
		...e.neutralLabel == null ? {} : { neutralLabel: e.neutralLabel }
	};
}
function c(e) {
	let t = e.dataPoints.map(s), n = e.workedLabel ?? "Worked", r = e.justifiedAbsenceLabel ?? "Justified absence", c = Math.max(...e.dataPoints.map((e) => Math.max(e.value + Math.max(e.justifiedAbsenceValue ?? 0, 0), e.plannedValue ?? 0)), i * .1);
	return {
		dataPoints: t,
		formatLabel: a,
		formatValue: o,
		formatTooltip: ({ point: e, formattedLabel: t, formattedValue: i }) => {
			let a = [`${n} ${i}`], s = e.neutralLabel ?? r;
			return e.neutralFullHeight ? a.push(s) : e.neutralValue != null && e.neutralValue > 0 && a.push(`${s} ${o(e.neutralValue)}`), `${t} - ${a.join(", ")}`;
		},
		scaleMax: Math.min(c, i)
	};
}
var l = (i, a) => {
	let o = i?.dataPoints;
	return !o || !Array.isArray(o) || o.length === 0 ? /* @__PURE__ */ r("div", {
		className: e("text-f1-foreground-secondary", a.visualization === "table" && t.text),
		"data-cell-type": "hourDistribution",
		children: "–"
	}) : n(c(i), a);
};
//#endregion
export { l as HourDistributionCell };
