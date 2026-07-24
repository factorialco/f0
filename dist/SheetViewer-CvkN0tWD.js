import { jsxs as a, jsx as r, Fragment as N } from "react/jsx-runtime";
import { useState as i, useEffect as k } from "react";
import { u as v, T as S, h as V, S as R } from "./F0CanvasPanel-n31_4o-u.js";
import { f as z, c as E } from "./sheetPreview-5qeAOp0W.js";
import { u as _, D as j } from "./DocumentToolbar-CJJcKgfN.js";
const g = 1e3, F = 100, G = ({
  url: n,
  filename: y,
  withCredentials: d = !0,
  actions: x
}) => {
  const c = v(), f = _(), [t, m] = i(null), [w, l] = i(!1), [u, b] = i(0);
  k(() => {
    let e = !1;
    return m(null), l(!1), b(0), z(n, {
      maxRows: g,
      maxCols: F,
      withCredentials: d
    }).then((o) => {
      e || (o.length === 0 ? l(!0) : m(o));
    }).catch(() => {
      e || l(!0);
    }), () => {
      e = !0;
    };
  }, [n, d]);
  const s = t ? t[Math.min(u, t.length - 1)] : null, h = s ? E(s.rows) : [];
  return /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col bg-f1-background", children: [
    /* @__PURE__ */ r(
      j,
      {
        url: n,
        filename: y,
        withCredentials: d,
        actions: x,
        zoom: f,
        children: t && t.length > 1 && /* @__PURE__ */ r(
          S,
          {
            type: "single",
            size: "sm",
            value: String(u),
            onValueChange: (e) => {
              e && b(Number(e));
            },
            className: "justify-start",
            children: t.map((e, o) => /* @__PURE__ */ r(
              V,
              {
                value: String(o),
                className: "whitespace-nowrap",
                children: e.name
              },
              `${e.name}-${o}`
            ))
          }
        )
      }
    ),
    w ? /* @__PURE__ */ r("div", { className: "flex min-h-0 grow items-center justify-center text-f1-foreground-secondary", children: c.pdfViewer.previewFailed }) : s ? /* @__PURE__ */ a(N, { children: [
      /* @__PURE__ */ r("div", { className: "min-h-0 grow overflow-auto", children: /* @__PURE__ */ a(
        "table",
        {
          className: "border-collapse text-sm",
          style: { zoom: f.scale },
          children: [
            /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ a("tr", { children: [
              /* @__PURE__ */ r("th", { className: "sticky top-0 z-10 border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1" }),
              h.map((e) => /* @__PURE__ */ r(
                "th",
                {
                  className: "sticky top-0 z-10 border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-center font-medium text-f1-foreground-secondary",
                  children: e
                },
                e
              ))
            ] }) }),
            /* @__PURE__ */ r("tbody", { children: s.rows.map((e, o) => /* @__PURE__ */ a("tr", { children: [
              /* @__PURE__ */ r("td", { className: "border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-center text-f1-foreground-secondary", children: o + 1 }),
              h.map((I, p) => /* @__PURE__ */ r(
                "td",
                {
                  className: "whitespace-nowrap border border-solid border-f1-border-secondary px-2 py-1 text-f1-foreground",
                  children: e[p] ?? ""
                },
                p
              ))
            ] }, o)) })
          ]
        }
      ) }),
      s.truncatedRows && /* @__PURE__ */ r("div", { className: "shrink-0 border-0 border-t border-solid border-f1-border-secondary px-3 py-1.5 text-sm text-f1-foreground-secondary", children: c.t("pdfViewer.showingFirstRows.other", {
        count: g
      }) })
    ] }) : /* @__PURE__ */ r(
      R,
      {
        role: "status",
        "aria-busy": !0,
        "aria-label": c.pdfViewer.loading,
        className: "min-h-0 w-full grow rounded-none"
      }
    )
  ] });
};
export {
  G as default
};
