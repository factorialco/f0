import { jsxs as i, jsx as l } from "react/jsx-runtime";
import { useState as u, useCallback as m, useMemo as p } from "react";
import { u as x, h as w, i as k, j as S, k as h } from "./F0CanvasPanel-DWm7qx2A.js";
import { n as C, a as g, f as v, T as r, d as F } from "./f0-BsfZ-hPf.js";
const D = () => {
  const [t, a] = u(1), n = m(
    () => a((e) => C(e) ?? e),
    []
  ), c = m(
    () => a((e) => g(e) ?? e),
    []
  );
  return { scale: t, zoomIn: n, zoomOut: c, setScale: a };
}, I = ({
  url: t,
  filename: a,
  withCredentials: n,
  actions: c,
  zoom: e,
  children: f
}) => {
  const { pdfViewer: s } = x(), d = p(
    () => v.map((o) => ({
      value: o,
      label: `${Number(o) * 100}%`
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
        /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 basis-0 flex-row items-center gap-2 overflow-x-auto", children: f }),
        e && /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-row items-center gap-2", children: [
          /* @__PURE__ */ l(
            r,
            {
              label: s.zoomOut,
              onClick: e.zoomOut,
              icon: w
            }
          ),
          /* @__PURE__ */ l(
            r,
            {
              label: s.zoomIn,
              onClick: e.zoomIn,
              icon: k
            }
          ),
          /* @__PURE__ */ l(
            S,
            {
              hideLabel: !0,
              label: s.scaleSelector,
              options: d,
              value: String(e.scale),
              onChange: (o) => e.setScale(Number(o))
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-1 basis-0 flex-row items-center justify-end gap-2", children: [
          /* @__PURE__ */ l(
            r,
            {
              label: s.download,
              onClick: () => {
                F(t, a, n);
              },
              icon: h
            }
          ),
          c?.map((o, b) => /* @__PURE__ */ l(
            r,
            {
              label: o.label,
              onClick: o.onClick,
              icon: o.icon
            },
            `${o.label}-${b}`
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
