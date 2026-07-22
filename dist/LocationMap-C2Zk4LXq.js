import { jsx as p } from "react/jsx-runtime";
import { m } from "./experimental-DN4aM_p7.js";
import { useRef as l, useEffect as i, useState as b } from "react";
const k = "https://tiles.openfreemap.org/styles/positron", y = "https://tiles.openfreemap.org/styles/dark", R = 15, d = (n) => {
  const [c, s] = b(!1);
  return i(() => {
    const r = n.current;
    if (!r) return;
    const a = () => s(r.closest(".dark") !== null);
    a();
    const t = new MutationObserver(a);
    for (let e = r; e; e = e.parentElement)
      t.observe(e, {
        attributes: !0,
        attributeFilter: ["class"]
      });
    return () => t.disconnect();
  }, [n]), c;
}, h = ({
  latitude: n,
  longitude: c
}) => {
  const s = l(null), r = l(null), t = d(s) ? y : k, e = l(t);
  e.current = t;
  const u = l(null);
  return i(() => {
    const o = s.current;
    if (!o) return;
    u.current = e.current;
    const f = new m.Map({
      container: o,
      style: e.current,
      center: [c, n],
      zoom: R,
      interactive: !1,
      // The card renders its own "© OpenStreetMap" note (ODbL attribution).
      attributionControl: !1
    });
    return r.current = f, () => {
      r.current = null, f.remove();
    };
  }, [n, c]), i(() => {
    const o = r.current;
    !o || u.current === t || (u.current = t, o.setStyle(t));
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: s,
      className: "h-full w-full",
      "data-testid": "chat-location-map"
    }
  );
};
export {
  h as default
};
