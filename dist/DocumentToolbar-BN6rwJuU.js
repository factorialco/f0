import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { useState as b, useCallback as m, useMemo as p } from "react";
import { u as x, i as w, j as k, k as S, l as C } from "./F0CanvasPanel-DGZrP6qm.js";
import { n as g, a as h, f as v, T as n, d as F } from "./index-ClkPaTnX.js";
const D = () => {
  const [r, a] = b(1), t = m(
    () => a((e) => g(e) ?? e),
    []
  ), c = m(
    () => a((e) => h(e) ?? e),
    []
  );
  return { scale: r, zoomIn: t, zoomOut: c, setScale: a };
}, I = ({
  url: r,
  filename: a,
  withCredentials: t,
  actions: c,
  zoom: e,
  children: f
}) => {
  const { pdfViewer: s } = x(), d = p(
    () => v.map((l) => ({
      value: l,
      label: `${Number(l) * 100}%`
    })),
    []
  );
  return /* @__PURE__ */ i(
    "div",
    {
      role: "toolbar",
      "aria-label": s.toolbar,
      className: "F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2 px-6 py-4",
      children: [
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 basis-0 flex-row items-center gap-2 overflow-x-auto", children: f }),
        e ? /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-row items-center gap-2", children: [
          /* @__PURE__ */ o(
            n,
            {
              label: s.zoomOut,
              onClick: e.zoomOut,
              icon: w
            }
          ),
          /* @__PURE__ */ o(
            n,
            {
              label: s.zoomIn,
              onClick: e.zoomIn,
              icon: k
            }
          ),
          /* @__PURE__ */ o(
            S,
            {
              hideLabel: !0,
              label: s.scaleSelector,
              options: d,
              value: String(e.scale),
              onChange: (l) => e.setScale(Number(l))
            }
          )
        ] }) : null,
        /* @__PURE__ */ i("div", { className: "flex flex-1 basis-0 flex-row items-center justify-end gap-2", children: [
          /* @__PURE__ */ o(
            n,
            {
              label: s.download,
              onClick: () => {
                F(r, a, t);
              },
              icon: C
            }
          ),
          c?.map((l, u) => /* @__PURE__ */ o(
            n,
            {
              label: l.label,
              onClick: l.onClick,
              icon: l.icon
            },
            `${l.label}-${u}`
          ))
        ] })
      ]
    }
  );
};
export {
  I as D,
  D as u
};
