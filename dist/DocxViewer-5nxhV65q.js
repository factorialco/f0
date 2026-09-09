import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { r as g } from "./docx-preview-BaRDMyPN.js";
import { useRef as b, useState as h, useEffect as w } from "react";
import { u as p, S as v } from "./F0CanvasPanel-BYk37H3S.js";
import { u as x, D as y } from "./DocumentToolbar-BPU7u7xp.js";
const V = ({
  url: t,
  filename: d,
  withCredentials: a = !0,
  actions: m
}) => {
  const s = p(), i = x(), u = b(null), [l, n] = h("loading");
  return w(() => {
    const f = u.current;
    if (!f)
      return;
    let r = !1;
    return n("loading"), fetch(t, { credentials: a ? "include" : "same-origin" }).then((e) => {
      if (!e.ok)
        throw new Error(`${e.status}`);
      return e.blob();
    }).then(async (e) => {
      r || (await g(e, f, void 0, {
        inWrapper: !0,
        breakPages: !0
      }), r || n("ready"));
    }).catch(() => {
      r || n("failed");
    }), () => {
      r = !0;
    };
  }, [t, a]), /* @__PURE__ */ c("div", { className: "flex h-full w-full flex-col bg-f1-background", children: [
    /* @__PURE__ */ o(
      y,
      {
        url: t,
        filename: d,
        withCredentials: a,
        actions: m,
        zoom: i
      }
    ),
    /* @__PURE__ */ c("div", { className: "relative min-h-0 grow overflow-auto bg-f1-background-secondary", children: [
      l === "loading" ? /* @__PURE__ */ o(
        v,
        {
          role: "status",
          "aria-busy": !0,
          "aria-label": s.pdfViewer.loading,
          className: "absolute inset-0 h-full w-full rounded-none"
        }
      ) : null,
      l === "failed" ? /* @__PURE__ */ o("div", { className: "flex h-full w-full items-center justify-center bg-f1-background text-f1-foreground-secondary", children: s.pdfViewer.previewFailed }) : null,
      /* @__PURE__ */ o(
        "div",
        {
          ref: u,
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
