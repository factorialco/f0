import { formatTime24Hours as e } from "../../../../lib/date.js";
import { getNormalizedRemainingMinutes as t } from "../ClockInControls/helpers.js";
import { CLOCK_IN_COLORS as n } from "./index.js";
//#region src/sds/Home/ClockIn/ClockInGraph/helpers.ts
var r = "--:--", i = (e, t) => {
	if (e && e > 0) return {
		value: e * 60 / t,
		color: n.empty
	};
	if (!t) return {
		value: 1,
		color: n.empty
	};
}, a = ({ data: e = [], trackedMinutes: r, remainingMinutes: a = 0 }) => {
	let o = a < 0 && a < -1 * r, s = t(r, a), c = e.reduce((e, t) => e + (t.to.getTime() - t.from.getTime()) / 1e3, 0) + (s ?? 0) * 60, l = o || (s ?? 0) < 0 ? void 0 : i(s ?? 0, c), u = (s ?? 0) < 0 ? Math.abs(s ?? 0) * 60 : 0, d = [...[...e].reverse().reduce((e, t) => {
		let r = (t.to.getTime() - t.from.getTime()) / 1e3, i = t.variant === "clocked-in" ? Math.min(r, u) : 0, a = (r - i) / c;
		u -= i;
		let s = {
			from: t.from,
			to: t.to,
			label: t.label
		};
		return t.variant === "clocked-in" && o ? [...e, {
			value: i / c + a,
			color: n.overtime,
			...s
		}] : [
			...e,
			{
				value: i / c,
				color: n.overtime,
				...s
			},
			{
				value: a,
				color: n[t.variant],
				...s
			}
		];
	}, []).reverse(), ...l ? [l] : []];
	return d = d.filter((e) => e.value > 0), d.length || d.push({
		value: 1,
		color: n.empty
	}), d;
}, o = ({ data: t = [], remainingMinutes: n, trackedMinutes: i = 0 }) => {
	let a = t.find((e) => e.variant === "clocked-in")?.from, o = t.at(-1), s = a ? e(a) : r, c = n === void 0 || n > 0 ? r : o ? e(o.to) : r, l = o?.variant === "break" ? o?.to.getTime() - o?.from.getTime() || 0 : i * 60 * 1e3, u = Math.floor(l / 36e5), d = Math.floor(l % 36e5 / 6e4);
	return {
		primaryLabel: s,
		secondaryLabel: c,
		time: `${u.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}`
	};
};
//#endregion
export { o as getLabels, a as normalizeData };
