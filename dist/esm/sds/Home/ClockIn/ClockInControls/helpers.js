import { getNormalizedRemainingMinutes as e } from "../utils.js";
import { CLOCK_IN_COLORS as t } from "../ClockInGraph/model.js";
//#region src/sds/Home/ClockIn/ClockInControls/helpers.ts
var n = ({ data: n = [], labels: r, trackedMinutes: i, remainingMinutes: a, canSeeRemainingTime: o = !0 }) => {
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
			let t = e(i, a), n = Math.abs(t), s = Math.floor(n / 60), c = Math.floor(n % 60), l = `${s.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}`;
			return a >= 0 ? `${r.remainingTime} ${l}` : `${r.overtime} ${l}`;
		})(),
		statusColor: t[s]
	};
};
//#endregion
export { n as getInfo };
