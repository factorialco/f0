import { useF0EventCatcher as e } from "../../lib/providers/events/event-catcher-provider.js";
import { normalizeEventValue as t } from "../../lib/providers/events/normalize.js";
import { useCallback as n, useRef as r } from "react";
//#region src/patterns/OneDataCollection/useEventEmitter.ts
var i = ({ defaultFilters: i, defaultSorting: a, currentVisualization: o }) => {
	let s = r(i), c = r(a), { onEvent: l } = e();
	return {
		emitFilterChange: n((e) => {
			if (!e) return;
			let n = Object.entries(e).find(([e, t]) => s.current?.[e] !== t);
			if (!n) return;
			let [r, i] = n, a = t(i);
			a !== void 0 && (s.current = e, l("datacollection.filter-change", {
				name: r,
				value: a,
				...o !== void 0 && { visualization: o }
			}));
		}, [l, o]),
		emitSortingChange: n((e) => {
			c?.current?.field === e?.field && c?.current?.order === e?.order || !e || typeof e.field != "string" || (c.current = e, l("datacollection.sorting-change", {
				name: e.field,
				value: e.order
			}));
		}, [l]),
		emitPresetClick: n((e) => {
			if (!e) return;
			let n = Object.entries(e).find(([e, t]) => s.current?.[e] !== t);
			if (!n) return;
			let [r, i] = n, a = t(i);
			a !== void 0 && (s.current = e, l("datacollection.preset-click", {
				name: r,
				value: a,
				...o !== void 0 && { visualization: o }
			}));
		}, [l, o])
	};
};
//#endregion
export { i as useEventEmitter };
