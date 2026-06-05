import { jsx as r, jsxs as p } from "react/jsx-runtime";
import { forwardRef as D, useState as j, useRef as k, useCallback as s, useEffect as R, useImperativeHandle as H } from "react";
import { F0Icon as E } from "../../../../F0Icon/index.js";
import { cn as S } from "../../../../../lib/utils.js";
const T = D(
  ({ items: b, groups: m, command: g }, v) => {
    const [a, c] = j(0), h = k(null), f = k(null), d = m || [{ title: "", commands: b }], l = d.flatMap((e) => e.commands), u = s(
      (e) => {
        const t = l[e];
        t && g(t);
      },
      [l, g]
    ), x = s((e) => {
      const t = h.current;
      if (!t) return;
      const n = t.getBoundingClientRect(), o = e.getBoundingClientRect();
      o.top < n.top ? t.scrollTop += o.top - n.top : o.bottom > n.bottom && (t.scrollTop += o.bottom - n.bottom);
    }, []), w = s(() => {
      c((e) => e <= 0 ? l.length - 1 : e - 1);
    }, [l.length]), y = s(() => {
      c((e) => e >= l.length - 1 ? 0 : e + 1);
    }, [l.length]), N = s(() => {
      u(a);
    }, [a, u]);
    R(() => {
      f.current && x(f.current);
    }, [a, x]), R(() => {
      c(0);
    }, [b.length]), H(
      v,
      () => ({
        onKeyDown: ({ event: e }) => e.key === "ArrowUp" ? (e.preventDefault(), w(), !0) : e.key === "ArrowDown" ? (e.preventDefault(), y(), !0) : e.key === "Enter" ? (e.preventDefault(), N(), !0) : !1
      }),
      [w, y, N]
    );
    const C = (e, t) => {
      let n = 0;
      for (let o = 0; o < e; o++)
        n += d[o].commands.length;
      return n + t;
    };
    return /* @__PURE__ */ r(
      "div",
      {
        ref: h,
        className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
        children: d.map((e, t) => /* @__PURE__ */ p("div", { children: [
          /* @__PURE__ */ p("div", { className: "p-1", children: [
            m && e.title && /* @__PURE__ */ r("div", { className: "p-2", children: /* @__PURE__ */ r("p", { className: "text-sm font-medium tracking-wide text-f1-foreground-secondary", children: e.title }) }),
            e.commands.map((n, o) => {
              const i = C(t, o), I = i === a;
              return /* @__PURE__ */ p(
                "div",
                {
                  ref: I ? f : null,
                  className: S(
                    "flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover",
                    I && "bg-f1-background-secondary"
                  ),
                  onClick: () => {
                    c(i), u(i);
                  },
                  onMouseEnter: () => c(i),
                  children: [
                    n.emoji ? /* @__PURE__ */ r("span", { className: "text-base", children: n.emoji }) : n.icon ? /* @__PURE__ */ r(
                      E,
                      {
                        icon: n.icon,
                        className: "text-f1-foreground-secondary"
                      }
                    ) : null,
                    /* @__PURE__ */ r("p", { className: "flex-grow text-sm font-medium text-f1-foreground", children: n.title })
                  ]
                },
                `${t}-${o}`
              );
            })
          ] }),
          m && t < d.length - 1 && /* @__PURE__ */ r("div", { className: "py-1", children: /* @__PURE__ */ r("div", { className: "h-[1px] w-full bg-f1-border-secondary" }) })
        ] }, t))
      }
    );
  }
);
T.displayName = "CommandList";
export {
  T as CommandList
};
