import { jsx as h } from "react/jsx-runtime";
import { r as b } from "./docx-preview-BaRDMyPN.js";
import { useRef as n, useState as g, useEffect as p } from "react";
const x = ({
  url: a,
  width: s,
  onError: o,
  onRendered: f
}) => {
  const l = n(null), [c, m] = g(null), u = n(o);
  u.current = o;
  const i = n(f);
  return i.current = f, p(() => {
    const t = l.current;
    if (!t)
      return;
    let r = !1;
    return fetch(a).then((e) => {
      if (!e.ok)
        throw new Error(`${e.status}`);
      return e.blob();
    }).then((e) => {
      if (!r)
        return b(e, t, void 0, {
          inWrapper: !1,
          breakPages: !1,
          ignoreLastRenderedPageBreak: !0,
          renderHeaders: !1,
          renderFooters: !1
        }).then(() => {
          if (r)
            return;
          const d = t.scrollWidth;
          m(d > 0 ? Math.min(1, s / d) : 1), i.current();
        });
    }).catch(() => {
      r || u.current();
    }), () => {
      r = !0;
    };
  }, [a, s]), /* @__PURE__ */ h("div", { className: "overflow-hidden bg-f1-background text-left", children: /* @__PURE__ */ h(
    "div",
    {
      ref: l,
      style: c !== null ? { transform: `scale(${c})`, transformOrigin: "top left" } : void 0
    }
  ) });
};
export {
  x as default
};
