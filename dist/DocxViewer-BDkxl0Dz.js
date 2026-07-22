import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { useRef as g, useState as h, useEffect as b } from "react";
import { r as p } from "./docx-preview-BjeY0ez5.js";
import { u as v, S as w } from "./F0CanvasPanel-CUlu2cJa.js";
import { u as x, D as y } from "./DocumentToolbar-DB966t4o.js";
const V = ({
  url: o,
  filename: d,
  withCredentials: a = !0,
  actions: m
}) => {
  const s = v(), i = x(), f = g(null), [l, n] = h("loading");
  return b(() => {
    const u = f.current;
    if (!u) return;
    let r = !1;
    return n("loading"), fetch(o, { credentials: a ? "include" : "same-origin" }).then((e) => {
      if (!e.ok) throw new Error(`${e.status}`);
      return e.blob();
    }).then((e) => {
      if (!r)
        return p(e, u, void 0, {
          inWrapper: !0,
          breakPages: !0
        }).then(() => {
          r || n("ready");
        });
    }).catch(() => {
      r || n("failed");
    }), () => {
      r = !0;
    };
  }, [o, a]), /* @__PURE__ */ c("div", { className: "flex h-full w-full flex-col bg-f1-background", children: [
    /* @__PURE__ */ t(
      y,
      {
        url: o,
        filename: d,
        withCredentials: a,
        actions: m,
        zoom: i
      }
    ),
    /* @__PURE__ */ c("div", { className: "relative min-h-0 grow overflow-auto bg-f1-background-secondary", children: [
      l === "loading" && /* @__PURE__ */ t(
        w,
        {
          role: "status",
          "aria-busy": !0,
          "aria-label": s.pdfViewer.loading,
          className: "absolute inset-0 h-full w-full rounded-none"
        }
      ),
      l === "failed" && /* @__PURE__ */ t("div", { className: "flex h-full w-full items-center justify-center bg-f1-background text-f1-foreground-secondary", children: s.pdfViewer.previewFailed }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: f,
          className: l === "failed" ? "hidden" : void 0,
          style: { zoom: i.scale }
        }
      )
    ] })
  ] });
};
export {
  V as default
};
