import { useEffect as e, useRef as t } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/hooks/useAddedRowKeys.ts
function n(n, r) {
	let i = t(/* @__PURE__ */ new Set()), a = t(!1), o = t(r), s = o.current !== r, c = /* @__PURE__ */ new Set();
	if (a.current && !s) for (let e of n) i.current.has(e) || c.add(e);
	return e(() => {
		if (s) {
			o.current = r, i.current = new Set(n), n.length > 0 && (a.current = !0);
			return;
		}
		!a.current && n.length > 0 && (a.current = !0);
		for (let e of n) i.current.add(e);
	}), c;
}
//#endregion
export { n as useAddedRowKeys };
