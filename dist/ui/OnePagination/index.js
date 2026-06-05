import { jsx as t, jsxs as E } from "react/jsx-runtime";
import { useCallback as _, useMemo as u } from "react";
import { withDataTestId as v } from "../../lib/data-testid/index.js";
import { experimentalComponent as C } from "../../lib/experimental.js";
import { Pagination as D, PaginationContent as w, PaginationItem as k, PaginationPrevious as K, PaginationEllipsis as N, PaginationLink as O, PaginationNext as j } from "../pagination.js";
import { cn as x } from "../../lib/utils.js";
function M({
  totalPages: o,
  currentPage: i = 1,
  onPageChange: d,
  showControls: a = !0,
  ariaLabel: I = "Page navigation",
  visibleRange: h = 3,
  hasNextPage: y = !0,
  disabled: e = !1
}) {
  const m = o === 0, s = _(
    (n) => {
      d && (m || n >= 1 && n <= o) && d(n);
    },
    [d, o, m]
  ), A = u(() => {
    if (m) return [];
    const n = [];
    if (o <= 5)
      return Array.from({ length: o }, (c, f) => f + 1);
    n.push(1);
    const p = Math.floor(h / 2);
    let r = i - p, l = i + p;
    return i <= p + 2 ? (r = 2, l = r + h - 1, n.push(
      ...Array.from(
        { length: l - r + 1 },
        (c, f) => f + r
      )
    ), n.push("...")) : i >= o - p - 1 ? (r = o - h - 1, l = o - 1, n.push("..."), n.push(
      ...Array.from(
        { length: l - r + 1 },
        (c, f) => f + r
      )
    )) : (n.push("..."), n.push(
      ...Array.from({ length: h }, (c, f) => f + r)
    ), n.push("...")), n.push(o), n;
  }, [i, o, h, m]);
  return /* @__PURE__ */ t(D, { children: /* @__PURE__ */ E(w, { role: "navigation", "aria-label": I, children: [
    a && /* @__PURE__ */ t(k, { children: /* @__PURE__ */ t(
      K,
      {
        "aria-disabled": i === 1 || e,
        tabIndex: i === 1 ? -1 : 0,
        className: x(
          !m && "mr-1",
          i === 1 || e ? "pointer-events-none opacity-50" : ""
        ),
        onClick: () => s(i - 1),
        onKeyDown: (n) => {
          n.key === "Enter" && s(i - 1);
        }
      }
    ) }),
    !m && A.map((n, p) => /* @__PURE__ */ t(
      k,
      {
        className: x(
          "hidden sm:flex",
          n === i && "flex",
          e && "pointer-events-none opacity-50"
        ),
        children: n === "..." ? /* @__PURE__ */ t(N, {}) : /* @__PURE__ */ t(
          O,
          {
            "aria-current": n === i ? "page" : void 0,
            isActive: n === i,
            onClick: () => s(n),
            onKeyDown: (r) => {
              r.key === "Enter" && s(n);
            },
            tabIndex: 0,
            children: n
          }
        )
      },
      p
    )),
    a && /* @__PURE__ */ t(k, { children: /* @__PURE__ */ t(
      j,
      {
        "aria-disabled": (m ? !y : i === o) || e,
        tabIndex: m ? y ? 0 : -1 : i === o ? -1 : 0,
        className: x(
          !m && "ml-1",
          !m && i === o || !y && m || e ? "pointer-events-none opacity-50" : ""
        ),
        onClick: () => s(i + 1),
        onKeyDown: (n) => {
          n.key === "Enter" && s(i + 1);
        }
      }
    ) })
  ] }) });
}
const B = v(
  C("OnePagination", M)
);
export {
  B as OnePagination
};
