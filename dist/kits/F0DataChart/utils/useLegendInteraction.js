import { useRef as p, useEffect as m } from "react";
function b(s) {
  const o = p(null);
  m(() => {
    const t = s.current;
    if (!t || typeof t.on != "function") return;
    function l(i) {
      const r = i.name, f = i.selected, c = Object.keys(f), u = o.current ?? Object.fromEntries(c.map((n) => [n, !0])), a = Object.values(u).filter(Boolean).length, g = a === c.length, d = u[r];
      if (g && d) {
        const n = {};
        for (const e of c)
          n[e] = e === r;
        o.current = n, t.dispatchAction({ type: "legendSelect", name: r });
        for (const e of c)
          e !== r && t.dispatchAction({ type: "legendUnSelect", name: e });
        return;
      }
      if (d && a === 1) {
        const n = {};
        for (const e of c)
          n[e] = !0, t.dispatchAction({ type: "legendSelect", name: e });
        o.current = n;
        return;
      }
      o.current = { ...f };
    }
    return t.on(
      "legendselectchanged",
      l
    ), () => {
      t.off(
        "legendselectchanged",
        l
      );
    };
  }, [s]);
}
export {
  b as useLegendInteraction
};
