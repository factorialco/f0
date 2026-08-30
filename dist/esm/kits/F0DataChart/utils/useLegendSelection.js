import { useEffect as e } from "react";
//#region src/kits/F0DataChart/utils/useLegendSelection.ts
function t(t, n) {
	e(() => {
		let e = t.current;
		if (!e || typeof e.on != "function") return;
		function r(e) {
			let t = e.selected;
			t && n(Object.values(t).every(Boolean) ? null : { ...t });
		}
		return e.on("legendselectchanged", r), () => {
			e.off("legendselectchanged", r);
		};
	}, [t, n]);
}
//#endregion
export { t as useLegendSelection };
