import { createContext as e, useCallback as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/providers/NestedProvider.tsx
var s = e(void 0), c = ({ children: e, defaultExpanded: n = !1, currentFilters: c, currentSortings: l, currentNavigationFilters: u }) => {
	let [d, f] = a({}), p = t((e, t) => {
		f((n) => ({
			...n,
			[e]: t
		}));
	}, []), [m, h] = a({}), [g, _] = a(0), v = t(() => {
		f({}), h({}), _((e) => e + 1);
	}, []), y = i(c), b = i(l), x = i(u);
	r(() => {
		(y.current !== c || b.current !== l || x.current !== u) && (y.current = c, b.current = l, x.current = u, v());
	}, [
		c,
		l,
		u,
		v
	]);
	let S = t((e, t) => {
		h((n) => ({
			...n,
			[e]: t
		}));
	}, []), C = t((e, t) => typeof n == "function" ? n(e, { depth: t }) : typeof n == "number" ? t < n : n, [n]);
	return /* @__PURE__ */ o(s.Provider, {
		value: {
			fetchedData: d,
			updateFetchedData: p,
			clearFetchedData: v,
			expandedRowIds: m,
			setRowExpanded: S,
			isExpandedByDefault: C,
			resetGeneration: g
		},
		children: e
	});
}, l = () => {
	let e = n(s);
	if (!e) throw Error("useNestedDataContext must be used within NestedDataProvider");
	return e;
};
//#endregion
export { c as NestedDataProvider, l as useNestedDataContext };
