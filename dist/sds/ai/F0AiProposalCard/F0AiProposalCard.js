import { jsxs as o, jsx as n, Fragment as C } from "react/jsx-runtime";
import { useState as v, useId as D, useRef as E, useEffect as F } from "react";
import { F0AvatarModule as L } from "../../../components/avatars/F0AvatarModule/index.js";
import { cn as f, focusRing as u } from "../../../lib/utils.js";
import { F0Button as w } from "../../../components/F0Button/F0Button.js";
const p = 180, I = (e) => Number.isFinite(e) ? Math.max(0, Math.floor(e)) : p, M = (e, r) => e.length <= r ? e : `${e.slice(0, r).trimEnd()}...`, j = (e) => e.showActions !== !1, P = (e) => Object.fromEntries(
  Object.entries(e).filter(([r]) => r.startsWith("data-"))
);
function k(e) {
  const {
    module: r,
    heading: m,
    title: b,
    subtitle: a,
    description: i,
    seeMoreLabel: x,
    maxCollapsedDescriptionLength: h = p
  } = e, [t, g] = v(!1), d = D(), c = E(null), l = I(
    h
  ), y = i.length > l, N = t ? i : M(i, l), s = j(e) ? e : null, A = P(e);
  return F(() => {
    t && c.current?.focus();
  }, [t]), /* @__PURE__ */ o(
    "section",
    {
      className: "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
      ...A,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3 px-4 py-3", children: [
          r && /* @__PURE__ */ n(L, { module: r, size: "lg" }),
          /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ n("h2", { className: "truncate text-lg font-semibold text-f1-foreground", children: m }),
            a && /* @__PURE__ */ n("p", { className: "truncate text-base text-f1-foreground-secondary", children: a })
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 px-4 py-3", children: [
          /* @__PURE__ */ n("h3", { className: "text-lg font-semibold text-f1-foreground", children: b }),
          /* @__PURE__ */ o(
            "p",
            {
              id: d,
              ref: c,
              tabIndex: t ? -1 : void 0,
              className: f(
                "text-base text-f1-foreground whitespace-pre-wrap break-words",
                t && u(),
                !t && "inline"
              ),
              children: [
                N,
                y && !t && /* @__PURE__ */ o(C, { children: [
                  " ",
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: f(
                        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
                        u()
                      ),
                      "aria-controls": d,
                      "aria-expanded": t,
                      onClick: () => g(!0),
                      children: x
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        s && /* @__PURE__ */ n("div", { className: "flex items-center justify-end gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: /* @__PURE__ */ n(
          w,
          {
            type: "button",
            label: s.primaryActionLabel,
            icon: s.primaryActionIcon,
            onClick: s.onPrimaryAction
          }
        ) })
      ]
    }
  );
}
k.displayName = "F0AiProposalCard";
export {
  k as F0AiProposalCard
};
