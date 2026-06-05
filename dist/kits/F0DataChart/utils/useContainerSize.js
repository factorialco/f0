import { useState as h, useEffect as s } from "react";
function d(t) {
  const [o, n] = h({ width: 0, height: 0 });
  return s(() => {
    const e = t.current;
    if (!e) return;
    n({ width: e.clientWidth, height: e.clientHeight });
    const i = new ResizeObserver((c) => {
      for (const r of c)
        n({
          width: r.contentRect.width,
          height: r.contentRect.height
        });
    });
    return i.observe(e), () => i.disconnect();
  }, [t]), o;
}
export {
  d as useContainerSize
};
