import "../../../node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/index.js";
import { useRef as o, useEffect as s } from "react";
import { install as i } from "../../../node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/install.js";
import { init as u } from "../../../node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js";
import { use as m } from "../../../node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js";
m(i);
function v(e, t) {
  const r = o(null);
  return s(() => {
    if (e.current) {
      r.current = u(e.current);
      const c = e.current, n = new ResizeObserver(() => {
        r.current?.resize();
      });
      return n.observe(c), () => {
        n.disconnect(), r.current?.dispose();
      };
    }
  }, [e]), s(() => {
    r.current?.setOption(t, !0);
  }, [t]), r;
}
export {
  v as useEChartsInstance
};
