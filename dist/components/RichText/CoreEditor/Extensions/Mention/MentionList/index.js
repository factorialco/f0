import { jsx as n } from "react/jsx-runtime";
import { forwardRef as h, useState as m, useCallback as l, useEffect as g, useImperativeHandle as b } from "react";
import { MentionItem as w } from "../MentionItem/index.js";
const k = h(
  ({ items: r, command: s, component: p = w }, i) => {
    const [d, t] = m(0), a = l(
      (e) => {
        const o = r[e];
        o && s(o);
      },
      [r, s]
    ), c = l(() => {
      t((e) => (e + r.length - 1) % r.length);
    }, [r.length]), u = l(() => {
      t((e) => (e + 1) % r.length);
    }, [r.length]), f = l(() => {
      a(d);
    }, [d, a]);
    return g(() => {
      t(0);
    }, [r]), b(
      i,
      () => ({
        onKeyDown: ({ event: e }) => e.key === "ArrowUp" ? (c(), !0) : e.key === "ArrowDown" ? (u(), !0) : e.key === "Enter" ? (f(), !0) : !1
      }),
      [c, u, f]
    ), /* @__PURE__ */ n("div", { className: "flex max-h-72 w-60 flex-col gap-2 overflow-y-auto rounded-md border border-solid border-f1-border bg-f1-background p-0.5 drop-shadow-sm", children: r.length === 0 ? /* @__PURE__ */ n("div", { className: "p-2", children: /* @__PURE__ */ n("p", { className: "text-neutral-40 text-sm font-medium", children: "No results found" }) }) : r.map((e, o) => /* @__PURE__ */ n(
      "div",
      {
        onClick: () => a(o),
        onMouseEnter: () => t(o),
        className: "cursor-pointer bg-f1-background",
        children: /* @__PURE__ */ n(
          p,
          {
            item: e,
            index: o,
            selected: o === d
          }
        )
      },
      o
    )) });
  }
);
k.displayName = "MentionList";
export {
  k as MentionList
};
