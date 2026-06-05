import { jsxs as N, jsx as e, Fragment as D } from "react/jsx-runtime";
import { useRef as j } from "react";
import { Skeleton as M } from "../../../ui/skeleton.js";
import { TableCell as B } from "../../../ui/table.js";
import { Link as E } from "../../../lib/linkHandler.js";
import { cn as a } from "../../../lib/utils.js";
import { getColWidth as z } from "../utils/colWidth.js";
import { useTable as G } from "../utils/TableContext.js";
import { NestedCell as K } from "./NestedCell/index.js";
import { TreeConnector as O } from "./TreeConnector/index.js";
import { isFirstCellWithTableChildren as V, isFirstCellWithChildren as q, SPACING_FACTOR as H } from "./utils/nested.js";
import { AnimatePresence as J } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as Q } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as U } from "../../../lib/providers/i18n/i18n-provider.js";
const d = "repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)", C = "before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", S = {
  none: `bg-f1-background ${C} before:bg-f1-background group-hover:before:bg-f1-background-hover`,
  striped: `bg-f1-background bg-[${d}] [background-size:100%_100px] ${C} before:bg-[${d},_var(--f1-background)] before:[background-size:100%_100px,_100%_100%] group-hover:before:bg-[${d},_var(--f1-background-hover)] group-hover:before:[background-size:100%_100px,_100%_100%]`
};
function ce({
  children: h,
  href: s,
  onClick: i,
  width: m = "auto",
  minWidth: p,
  firstCell: t = !1,
  sticky: n,
  colSpan: W,
  className: T,
  loading: u = !1,
  nestedRowProps: o,
  fromVisualization: g,
  referenceRowType: v = "none"
}) {
  const { isScrolled: k, isScrolledRight: $ } = G(), { actions: x } = U(), c = n?.left !== void 0, l = n?.right !== void 0, y = c || l, L = n?.left, F = n?.right, b = z(m), I = p !== void 0 ? z(p) : b, f = j(null), w = o?.depth ?? 0, A = o?.nestedVariant === "detailed", _ = V(
    t,
    !!o?.tableWithChildren
  ) && {
    marginLeft: `${(w + (A ? 0 : 1)) * H}px`
  };
  return /* @__PURE__ */ N(
    B,
    {
      colSpan: W,
      className: a(
        "h-full",
        t && "peer font-medium",
        y && k && S[v],
        y && "sticky z-10",
        l && S[v],
        s && "cursor-pointer",
        T
      ),
      style: {
        width: b,
        maxWidth: b,
        minWidth: I,
        left: L,
        right: F
      },
      children: [
        /* @__PURE__ */ e(J, { children: (c && k || l && $) && /* @__PURE__ */ e(
          Q.div,
          {
            className: a(
              "absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent",
              c && "-right-4 bg-gradient-to-r",
              l && "-left-4 bg-gradient-to-l"
            ),
            initial: { opacity: 0 },
            animate: { opacity: 0.1 },
            exit: { opacity: 0 }
          },
          "cell-shadow-gradient"
        ) }),
        t && o?.tableWithChildren && /* @__PURE__ */ e(
          O,
          {
            firstCell: t,
            nestedRowProps: o,
            fromVisualization: g
          }
        ),
        u && /* @__PURE__ */ e(
          "div",
          {
            style: { ..._ },
            className: a(
              "flex h-full items-center",
              g === "editableTable" ? "min-h-[32px]" : "min-h-[24px]"
            ),
            children: /* @__PURE__ */ e(M, { className: "h-4 w-full" })
          }
        ),
        !u && /* @__PURE__ */ N(D, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: a(
                "[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]",
                "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]",
                "[&:has(a)]:relative [&:has(a)]:z-[1]",
                "pointer-events-none h-full items-start"
              ),
              children: q(
                t,
                !!o?.rowWithChildren
              ) ? /* @__PURE__ */ e(
                K,
                {
                  linkRef: f,
                  firstCell: t,
                  nestedRowProps: o,
                  children: h
                }
              ) : /* @__PURE__ */ e(
                "div",
                {
                  className: a(
                    m !== "auto" && "overflow-hidden",
                    "relative z-[1] h-full"
                  ),
                  style: {
                    ..._
                  },
                  onClick: () => {
                    f.current?.click(), i?.();
                  },
                  children: h
                }
              )
            }
          ),
          s && /* @__PURE__ */ e(
            E,
            {
              ref: f,
              href: s,
              className: "pointer-events-auto absolute inset-0 !z-0 block",
              tabIndex: t ? void 0 : -1,
              children: /* @__PURE__ */ e("span", { className: "sr-only", children: x.view })
            }
          ),
          i && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: (r) => {
                r.stopPropagation(), i();
              },
              "data-testid": "table-cell-action-button",
              className: "table-cell-action-button absolute inset-0 !z-0 block",
              tabIndex: t ? void 0 : -1,
              onKeyDown: (r) => {
                (r.key === "Enter" || r.key === " ") && (r.preventDefault(), i());
              },
              children: /* @__PURE__ */ e("span", { className: "sr-only", children: x.view })
            }
          )
        ] })
      ]
    }
  );
}
export {
  ce as TableCell
};
