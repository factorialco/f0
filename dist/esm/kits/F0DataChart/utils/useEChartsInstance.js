import { useEffect as e, useRef as t } from "react";
import * as n from "echarts";
import { AriaComponent as r } from "echarts/components";
//#region src/kits/F0DataChart/utils/useEChartsInstance.ts
n.use(r);
function i(r, i) {
	let a = t(null);
	return e(() => {
		if (r.current) {
			a.current = n.init(r.current);
			let e = r.current, t = new ResizeObserver(() => {
				a.current?.resize();
			});
			return t.observe(e), () => {
				t.disconnect(), a.current?.dispose();
			};
		}
	}, [r]), e(() => {
		a.current?.setOption(i, !0);
	}, [i]), a;
}
//#endregion
export { i as useEChartsInstance };
