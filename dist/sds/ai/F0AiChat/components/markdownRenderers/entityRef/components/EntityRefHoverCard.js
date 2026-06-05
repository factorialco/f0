import { jsxs as D, jsx as a } from "react/jsx-runtime";
import { useRef as h, useState as c, useEffect as E, useCallback as R } from "react";
import { HoverCard as v, HoverCardTrigger as w, HoverCardContent as b } from "../../../../../../../ui/hover-card.js";
import { F0Card as m } from "../../../../../../../components/F0Card/F0Card.js";
function F({
  id: e,
  trigger: p,
  resolver: f,
  mapToCard: C,
  fallbackCard: g
}) {
  const o = h(/* @__PURE__ */ new Map()), [r, u] = c(
    () => o.current.get(e) ?? null
  ), [s, l] = c(!1), [H, i] = c(!1), t = h(!0);
  E(() => () => {
    t.current = !1;
  }, []);
  const x = R(() => {
    if (r || s) return;
    const n = o.current.get(e);
    if (n) {
      u(n);
      return;
    }
    l(!0), i(!1), f(e).then((d) => {
      o.current.set(e, d), t.current && u(d);
    }).catch(() => {
      t.current && i(!0);
    }).finally(() => {
      t.current && l(!1);
    });
  }, [f, e, r, s]), y = H || !r ? g : C(r);
  return /* @__PURE__ */ D(
    v,
    {
      openDelay: 300,
      closeDelay: 100,
      onOpenChange: (n) => {
        n && x();
      },
      children: [
        /* @__PURE__ */ a(w, { asChild: !0, children: p }),
        /* @__PURE__ */ a(
          b,
          {
            side: "top",
            align: "start",
            className: "w-64 rounded-2xl border-none p-0 shadow-md",
            children: s ? /* @__PURE__ */ a(m.Skeleton, {}) : /* @__PURE__ */ a(m, { ...y })
          }
        )
      ]
    }
  );
}
export {
  F as EntityRefHoverCard
};
