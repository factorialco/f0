import { jsx as t } from "react/jsx-runtime";
import { useState as m, useRef as u, useEffect as h } from "react";
import { f as b } from "./sheetPreview-5qeAOp0W.js";
const p = 12, x = 8, S = ({
  url: s,
  onError: c,
  onRendered: l
}) => {
  const [a, d] = m(null), o = u(c);
  o.current = c;
  const f = u(l);
  return f.current = l, h(() => {
    let e = !1;
    return b(s, { maxRows: p, maxCols: x }).then((n) => {
      if (e) return;
      const r = n[0];
      if (!r || r.rows.length === 0) {
        o.current();
        return;
      }
      d(r.rows), f.current();
    }).catch(() => {
      e || o.current();
    }), () => {
      e = !0;
    };
  }, [s]), a ? /* @__PURE__ */ t("table", { className: "w-full border-collapse bg-f1-background text-left", children: /* @__PURE__ */ t("tbody", { children: a.map((e, n) => /* @__PURE__ */ t("tr", { children: e.map((r, i) => /* @__PURE__ */ t(
    "td",
    {
      className: "whitespace-nowrap border border-solid border-f1-border-secondary px-1.5 py-0.5 text-xs text-f1-foreground",
      children: r
    },
    i
  )) }, n)) }) }) : null;
};
export {
  S as default
};
