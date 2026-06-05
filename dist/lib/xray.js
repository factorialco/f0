import { jsxs as d, jsx as u } from "react/jsx-runtime";
import { cva as x } from "../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import * as R from "react";
import { useContext as N, createContext as X, useRef as $, useImperativeHandle as k, useEffect as g, useState as y, useCallback as b } from "react";
import { createPortal as E } from "react-dom";
import { componentTypes as h } from "./component/types.js";
const p = X({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), H = ({
  children: t
}) => {
  const [c, a] = y(!1), [s, r] = y([]), i = b(
    (o) => {
      r(
        o || [...h].filter((e) => e !== "layout")
      ), a(!0);
    },
    [r, a]
  ), n = b(() => a(!1), [a]);
  return g(() => {
    window.XRay = {
      enable: i,
      disable: n
    };
  }, [i, n]), /* @__PURE__ */ d(p.Provider, { value: { enabled: c, enable: i, disable: n, filter: s }, children: [
    t,
    c && typeof document < "u" && E(
      /* @__PURE__ */ d("div", { className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ u("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ u("div", { className: "flex flex-col space-y-2", children: h.map((o) => /* @__PURE__ */ d("label", { className: "block", children: [
          /* @__PURE__ */ u(
            "input",
            {
              onChange: (e) => e.target.checked ? r([...s, o]) : r(s.filter((l) => l !== o)),
              type: "checkbox",
              checked: s.includes(o),
              className: "mr-2"
            }
          ),
          o
        ] }, o)) })
      ] }),
      document?.body
    )
  ] });
}, z = x({
  base: "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
  variants: {
    type: {
      layout: "outline-red-500",
      info: "outline-blue-500",
      action: "outline-green-600",
      form: "outline-purple-600"
    }
  }
}), P = x({
  base: "absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",
  variants: {
    type: {
      layout: "bg-red-500 text-white",
      info: "bg-blue-500 text-white",
      action: "bg-green-600 text-white",
      form: "bg-purple-600 text-white"
    }
  }
}), I = (t, c) => {
  const { enabled: a, filter: s } = R.useContext(p), r = $(null);
  k(c, () => r.current);
  const i = a && !t.internal, n = typeof document < "u" ? document.body : null;
  return g(() => {
    if (!i || !r.current || !s.includes(t.type)) return;
    const o = r.current;
    o.dataset.componentName = t.name;
    let e = null, l = null;
    if (n) {
      const v = o.getBoundingClientRect(), { top: m, left: f, width: w, height: C } = v;
      e = document.createElement("div"), e.className = z({ type: t.type }), e.style.top = `${m}px`, e.style.left = `${f}px`, e.style.width = `${w}px`, e.style.height = `${C}px`, l = document.createElement("div"), l.className = P({ type: t.type }), l.style.top = `${m}px`, l.style.left = `${f}px`, l.innerText = t.name, n.appendChild(l), n.appendChild(e);
    }
    return () => {
      e && n?.removeChild(e), l && n?.removeChild(l);
    };
  }, [i, t.name, t.type, s, n]), {
    ref: r,
    enabled: a
  };
}, S = () => N(p);
export {
  p as XRayContext,
  H as XRayProvider,
  I as useComponentXRay,
  S as useXRay
};
