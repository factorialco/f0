import { jsx as l, jsxs as o, Fragment as f } from "react/jsx-runtime";
import { useRef as u, useTransition as y, useState as F, useLayoutEffect as w } from "react";
import { Breadcrumb as I, BreadcrumbList as O } from "../../../../ui/breadcrumb.js";
import { BreadcrumbItem as a } from "./internal/BreadcrumbItem.js";
import { CollapsedBreadcrumbItem as R } from "./internal/CollapsedBreadcrumbItem.js";
import { calculateBreadcrumbState as S } from "./layoutCalculation.js";
function C({ breadcrumbs: i, append: r }) {
  const n = u(null), c = u(null), [, g] = y(), [t, p] = F(null), m = (t?.collapsedItems || []).length > 0;
  return w(() => {
    const s = n.current, e = c.current;
    if (!s || !e || e.children.length < i.length) return;
    const d = () => {
      const v = n.current?.clientWidth ?? null, B = Array.from(e.children);
      g(() => {
        const L = S(
          v,
          i,
          B
        );
        p(L);
      });
    }, h = new ResizeObserver(d);
    return h.observe(s), d(), () => h.disconnect();
  }, [i, r]), !i.length || t && !t.headItem ? /* @__PURE__ */ l(I, { ref: n, className: "w-full" }) : /* @__PURE__ */ o(
    I,
    {
      ref: n,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: t?.minWidth
      },
      children: [
        /* @__PURE__ */ l(
          "ol",
          {
            className: "invisible absolute -left-full",
            "aria-hidden": "true",
            ref: c,
            children: i.map((s, e) => /* @__PURE__ */ l(
              a,
              {
                item: s,
                isLast: e === i.length - 1,
                isFirst: e === 0,
                children: e === i.length - 1 ? r : void 0
              },
              s.id
            ))
          }
        ),
        t && t.headItem && /* @__PURE__ */ o(O, { children: [
          /* @__PURE__ */ l(
            a,
            {
              isOnly: t.isOnly,
              isFirst: !0,
              item: t.headItem,
              isLast: !1
            },
            `first-item-${t.headItem.id}`
          ),
          m && /* @__PURE__ */ o(f, { children: [
            /* @__PURE__ */ l(
              R,
              {
                items: t.collapsedItems
              },
              "collapsed-items"
            ),
            t.tailItems.map((s, e) => /* @__PURE__ */ l(
              a,
              {
                item: s,
                isLast: e === t.tailItems.length - 1,
                isFirst: !1,
                children: e === t.tailItems.length - 1 ? r : void 0
              },
              s.id
            ))
          ] }),
          !m && /* @__PURE__ */ l(f, { children: t.tailItems.map((s, e) => /* @__PURE__ */ l(
            a,
            {
              item: s,
              isLast: e === t.tailItems.length - 1,
              isFirst: !1,
              children: e === t.tailItems.length - 1 ? r : void 0
            },
            s.id
          )) })
        ] })
      ]
    },
    `breadcrumb-${i.at(-1)?.id ?? 0}`
  );
}
export {
  C as Breadcrumbs
};
