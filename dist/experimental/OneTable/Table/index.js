import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { useState as m, useRef as v, useEffect as S } from "react";
import { cn as b } from "../../../lib/utils.js";
import { Skeleton as f } from "../../../ui/skeleton.js";
import { Table as h } from "../../../ui/table.js";
import { withSkeleton as y } from "../../../lib/skeleton.js";
import { Spinner as T } from "../../../ui/Spinner/index.js";
import { TableBody as x } from "../TableBody/index.js";
import { TableCell as R } from "../TableCell/index.js";
import { TableHead as g } from "../TableHead/index.js";
import { TableHeader as k } from "../TableHeader/index.js";
import { TableRow as d } from "../TableRow/index.js";
import { TableContext as u } from "../utils/TableContext.js";
import { AnimatePresence as w } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as N } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
function A({ children: o, loading: l = !1 }) {
  const [t, i] = m(!1), [s, a] = m(!1), c = v(null);
  return S(() => {
    const r = c.current;
    if (!r) return;
    const n = () => {
      i(r.scrollLeft > 0), a(
        r.scrollWidth - r.scrollLeft - r.clientWidth > 0
      );
    };
    return n(), r.addEventListener("scroll", n), () => {
      r.removeEventListener("scroll", n);
    };
  }, []), /* @__PURE__ */ e(
    u.Provider,
    {
      value: { isScrolled: t, setIsScrolled: i, isScrolledRight: s, setIsScrolledRight: a },
      children: /* @__PURE__ */ p("div", { ref: c, className: "relative h-full w-full overflow-auto", children: [
        /* @__PURE__ */ e(
          h,
          {
            className: b(l && "select-none opacity-50 transition-opacity"),
            "aria-live": l ? "polite" : void 0,
            "aria-busy": l ? "true" : void 0,
            children: o
          }
        ),
        /* @__PURE__ */ e(w, { children: l && /* @__PURE__ */ e(
          N.div,
          {
            className: "absolute inset-0 flex cursor-progress items-center justify-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: /* @__PURE__ */ e(T, {})
          }
        ) })
      ] })
    }
  );
}
function L({ columns: o = 5 }) {
  return /* @__PURE__ */ e(
    u.Provider,
    {
      value: {
        isScrolled: !1,
        setIsScrolled: () => {
        },
        isScrolledRight: !1,
        setIsScrolledRight: () => {
        }
      },
      children: /* @__PURE__ */ p(
        h,
        {
          className: "cursor-progress",
          role: "presentation",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ e(k, { children: /* @__PURE__ */ e(d, { children: Array.from({ length: o }).map((l, t) => /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e(f, { className: "h-4 w-[80px]" }) }, `skeleton-header-${t}`)) }) }),
            /* @__PURE__ */ e(x, { children: Array.from({ length: 5 }).map((l, t) => /* @__PURE__ */ e(d, { children: Array.from({ length: o }).map((i, s) => /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e(f, { className: "h-4 w-[80px]" }) }, `skeleton-cell-${t}-${s}`)) }, `skeleton-row-${t}`)) })
          ]
        }
      )
    }
  );
}
const G = y(A, L);
export {
  G as OneTable
};
