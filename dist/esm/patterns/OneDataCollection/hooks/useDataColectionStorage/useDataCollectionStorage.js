import { useDataCollectionStorage as e } from "../../../../lib/providers/datacollection/DataCollectionStorageProvider.js";
import { getFeatures as t } from "./getFeatures.js";
import { validateStorageKey as n } from "./validateStorageKey.js";
import { useEffect as r, useMemo as i, useState as a } from "react";
import { useDebounceCallback as o } from "usehooks-ts";
//#region src/patterns/OneDataCollection/hooks/useDataColectionStorage/useDataCollectionStorage.ts
var s = (s, c, l, u) => {
	let [d, f] = a(!1), p = e();
	s && !n(s) && console.error(`Invalid storage key format: "${s}". Key must follow the format "name/version" where name can be a path (e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`);
	let m = i(() => [
		...t(c),
		"settings",
		"customPresets"
	], [JSON.stringify(c)]), h = i(() => !u && !!s, [u, s]);
	r(() => {
		if (!h) {
			f(!0);
			return;
		}
		f(!1), p.get(s).then((e) => {
			Object.entries(l).forEach(([t, n]) => {
				if (m.includes(t)) {
					let r = e[t];
					r !== void 0 && n.setValue(r);
				}
			}), f(!0);
		});
	}, [s, h]);
	let g = i(() => JSON.stringify(Object.entries(l).map(([e, t]) => [e, t.value])), [l]), _ = o((e) => {
		if (!h || !d) return;
		let t = Object.fromEntries(Object.entries(e).map(([e, t]) => m.includes(e) ? [e, t.value] : [e, void 0]).filter(([e, t]) => t !== void 0));
		if (Object.keys(t).length === 0) {
			p.set(s, {});
			return;
		}
		p.set(s, t);
	}, 200);
	return r(() => {
		if (!(!h || !d)) return _(l), () => {
			_.cancel();
		};
	}, [
		s,
		m,
		p,
		d,
		h,
		g
	]), { storageReady: d };
};
//#endregion
export { s as useDataCollectionStorage };
