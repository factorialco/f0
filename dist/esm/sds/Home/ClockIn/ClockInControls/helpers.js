import { CLOCK_IN_COLORS as e } from "../ClockInGraph/index.js";
//#region src/sds/Home/ClockIn/ClockInControls/helpers.ts
var t = (e, t) => ((t ?? 0) < -1 * (e ?? 0) ? -1 * e : t) ?? 0, n = ({ data: n = [], labels: r, trackedMinutes: i, remainingMinutes: a, canSeeRemainingTime: o = !0 }) => {
	let s = n[n.length - 1]?.variant || "clocked-out";
	return {
		status: s,
		statusText: {
			"clocked-out": r.clockedOut,
			"clocked-in": r.clockedIn,
			break: r.onBreak
		}[s],
		subtitle: (() => {
			if (!o || a === void 0) return;
			let e = t(i, a), n = Math.abs(e), s = Math.floor(n / 60), c = Math.floor(n % 60), l = `${s.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}`;
			return a >= 0 ? `${r.remainingTime} ${l}` : `${r.overtime} ${l}`;
		})(),
		statusColor: e[s]
	};
};
//#endregion
export { n as getInfo, t as getNormalizedRemainingMinutes };
