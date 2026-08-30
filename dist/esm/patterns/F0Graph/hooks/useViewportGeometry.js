import { useStore as e } from "@xyflow/react";
//#region src/patterns/F0Graph/hooks/useViewportGeometry.ts
function t({ enabled: t, padding: n = 600 }) {
	return e((e) => {
		if (!t) return null;
		let [r, i, a] = e.transform, { width: o, height: s } = e;
		return o <= 0 || s <= 0 || a <= 0 ? null : {
			minX: Math.floor((-r / a - n) / 400) * 400,
			minY: Math.floor((-i / a - n) / 400) * 400,
			maxX: Math.ceil(((-r + o) / a + n) / 400) * 400,
			maxY: Math.ceil(((-i + s) / a + n) / 400) * 400
		};
	}, (e, t) => e === t || e !== null && t !== null && e.minX === t.minX && e.minY === t.minY && e.maxX === t.maxX && e.maxY === t.maxY);
}
//#endregion
export { t as useViewportGeometry };
