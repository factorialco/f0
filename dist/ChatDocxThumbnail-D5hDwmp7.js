import { jsx as h } from "react/jsx-runtime";
import { r as b } from "./docx-preview-BaRDMyPN.js";
import { useRef as n, useState as g, useEffect as p } from "react";
const x = ({
  url: a,
  width: s,
  onError: o,
  onRendered: c
}) => {
  const f = n(null), [l, m] = g(null), u = n(o);
  u.current = o;
  const i = n(c);
  return i.current = c, p(() => {
    const t = f.current;
    if (!t)
      return;
    let r = !1;
    return fetch(a).then((e) => {
      if (!e.ok)
        throw new Error(`${e.status}`);
      return e.blob();
    }).then(async (e) => {
      if (r || (await b(e, t, void 0, {
        inWrapper: !1,
        breakPages: !1,
        ignoreLastRenderedPageBreak: !0,
        renderHeaders: !1,
        renderFooters: !1
      }), r))
        return;
      const d = t.scrollWidth;
      m(d > 0 ? Math.min(1, s / d) : 1), i.current();
    }).catch(() => {
      r || u.current();
    }), () => {
      r = !0;
    };
  }, [a, s]), /* @__PURE__ */ h("div", { className: "overflow-hidden bg-f1-background text-left", children: /* @__PURE__ */ h(
    "div",
    {
      ref: f,
      style: l !== null ? { transform: `scale(${l})`, transformOrigin: "top left" } : void 0
    }
  ) });
};
export {
  x as default
};
