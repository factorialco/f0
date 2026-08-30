import { useEffect as e, useState as t } from "react";
//#region src/kits/F0DataChart/utils/useContainerSize.ts
function n(n) {
	let [r, i] = t({
		width: 0,
		height: 0
	});
	return e(() => {
		let e = n.current;
		if (!e) return;
		i({
			width: e.clientWidth,
			height: e.clientHeight
		});
		let t = new ResizeObserver((e) => {
			for (let t of e) i({
				width: t.contentRect.width,
				height: t.contentRect.height
			});
		});
		return t.observe(e), () => t.disconnect();
	}, [n]), r;
}
//#endregion
export { n as useContainerSize };
