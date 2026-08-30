import { useEffect as e, useState as t } from "react";
//#region src/patterns/F0Map/hooks/useZoomAtLeast.ts
var n = (n, r) => {
	let [i, a] = t(() => n ? n.getZoom() >= r : !1);
	return e(() => {
		if (!n) {
			a(!1);
			return;
		}
		let e = () => a(n.getZoom() >= r);
		return e(), n.on("zoom", e), () => {
			n.off("zoom", e);
		};
	}, [n, r]), i;
};
//#endregion
export { n as useZoomAtLeast };
