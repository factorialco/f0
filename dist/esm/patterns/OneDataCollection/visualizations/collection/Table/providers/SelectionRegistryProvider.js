import { useCallback as e, useMemo as t, useRef as n, useState as r } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/providers/SelectionRegistryProvider.tsx
var i = () => {
	let i = n(/* @__PURE__ */ new Map()), [a, o] = r([]), s = e(() => {
		o(Array.from(i.current.keys()));
	}, []), c = e((e, t) => {
		let n = !i.current.has(e);
		i.current.set(e, t), n && s();
	}, [s]), l = e((e) => {
		i.current.delete(e) && s();
	}, [s]), u = e(() => Array.from(i.current.entries()), []);
	return t(() => ({
		register: c,
		unregister: l,
		ids: a,
		getEntries: u
	}), [
		c,
		l,
		a,
		u
	]);
};
//#endregion
export { i as useCreateSelectionRegistry };
