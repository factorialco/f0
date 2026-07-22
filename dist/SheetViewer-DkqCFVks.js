import { jsxs as m, jsx as r, Fragment as N } from "react/jsx-runtime";
import { useState as b, useEffect as S } from "react";
import { u as v, T as _, l as R, S as V } from "./F0CanvasPanel-VGTPb68G.js";
import { utils as p, read as E } from "./xlsx-CzlURDDb.js";
import { u as M, D as j } from "./DocumentToolbar-Ct5xqdYj.js";
const z = (a, { maxRows: d, maxCols: s }) => {
  const n = E(a, { type: "array" });
  return n.SheetNames.map((t) => {
    const i = n.Sheets[t], c = i?.["!ref"];
    if (!i || !c) return { name: t, rows: [], truncatedRows: !1 };
    const o = p.decode_range(c), h = o.e.r - o.s.r + 1 > d;
    o.e.r = Math.min(o.e.r, o.s.r + d - 1), o.e.c = Math.min(o.e.c, o.s.c + s - 1);
    const f = p.sheet_to_json(i, {
      header: 1,
      raw: !1,
      // formatted text, not raw values
      defval: "",
      range: o
    });
    return { name: t, rows: f, truncatedRows: h };
  });
}, F = (a) => {
  const d = a.reduce((s, n) => Math.max(s, n.length), 0);
  return Array.from({ length: d }, (s, n) => p.encode_col(n));
}, W = async (a, {
  maxRows: d,
  maxCols: s,
  withCredentials: n = !0
}) => {
  const t = await fetch(a, {
    credentials: n ? "include" : "same-origin"
  });
  if (!t.ok) throw new Error(`Failed to fetch sheet: ${t.status}`);
  return z(await t.arrayBuffer(), { maxRows: d, maxCols: s });
}, k = 1e3, A = 100, O = ({
  url: a,
  filename: d,
  withCredentials: s = !0,
  actions: n
}) => {
  const t = v(), i = M(), [c, o] = b(null), [h, f] = b(!1), [g, y] = b(0);
  S(() => {
    let e = !1;
    return o(null), f(!1), y(0), W(a, {
      maxRows: k,
      maxCols: A,
      withCredentials: s
    }).then((l) => {
      e || (l.length === 0 ? f(!0) : o(l));
    }).catch(() => {
      e || f(!0);
    }), () => {
      e = !0;
    };
  }, [a, s]);
  const u = c ? c[Math.min(g, c.length - 1)] : null, w = u ? F(u.rows) : [];
  return /* @__PURE__ */ m("div", { className: "flex h-full w-full flex-col bg-f1-background", children: [
    /* @__PURE__ */ r(
      j,
      {
        url: a,
        filename: d,
        withCredentials: s,
        actions: n,
        zoom: i,
        children: c && c.length > 1 && /* @__PURE__ */ r(
          _,
          {
            type: "single",
            size: "sm",
            value: String(g),
            onValueChange: (e) => {
              e && y(Number(e));
            },
            className: "justify-start",
            children: c.map((e, l) => /* @__PURE__ */ r(
              R,
              {
                value: String(l),
                className: "whitespace-nowrap",
                children: e.name
              },
              `${e.name}-${l}`
            ))
          }
        )
      }
    ),
    h ? /* @__PURE__ */ r("div", { className: "flex min-h-0 grow items-center justify-center text-f1-foreground-secondary", children: t.pdfViewer.previewFailed }) : u ? /* @__PURE__ */ m(N, { children: [
      /* @__PURE__ */ r("div", { className: "min-h-0 grow overflow-auto", children: /* @__PURE__ */ m(
        "table",
        {
          className: "border-collapse text-sm",
          style: { zoom: i.scale },
          children: [
            /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ m("tr", { children: [
              /* @__PURE__ */ r("th", { className: "sticky top-0 z-10 border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1" }),
              w.map((e) => /* @__PURE__ */ r(
                "th",
                {
                  className: "sticky top-0 z-10 border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-center font-medium text-f1-foreground-secondary",
                  children: e
                },
                e
              ))
            ] }) }),
            /* @__PURE__ */ r("tbody", { children: u.rows.map((e, l) => /* @__PURE__ */ m("tr", { children: [
              /* @__PURE__ */ r("td", { className: "border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-center text-f1-foreground-secondary", children: l + 1 }),
              w.map((I, x) => /* @__PURE__ */ r(
                "td",
                {
                  className: "whitespace-nowrap border border-solid border-f1-border-secondary px-2 py-1 text-f1-foreground",
                  children: e[x] ?? ""
                },
                x
              ))
            ] }, l)) })
          ]
        }
      ) }),
      u.truncatedRows && /* @__PURE__ */ r("div", { className: "shrink-0 border-0 border-t border-solid border-f1-border-secondary px-3 py-1.5 text-sm text-f1-foreground-secondary", children: t.t("pdfViewer.showingFirstRows.other", {
        count: k
      }) })
    ] }) : /* @__PURE__ */ r(
      V,
      {
        role: "status",
        "aria-busy": !0,
        "aria-label": t.pdfViewer.loading,
        className: "min-h-0 w-full grow rounded-none"
      }
    )
  ] });
};
export {
  O as default
};
