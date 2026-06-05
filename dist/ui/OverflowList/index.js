import { jsx as t, jsxs as a, Fragment as P } from "react/jsx-runtime";
import { useState as S, useCallback as z, useMemo as u } from "react";
import { cn as d, focusRing as B } from "../../lib/utils.js";
import { Popover as D, PopoverTrigger as E, PopoverContent as F } from "../popover.js";
import { Skeleton as M } from "../skeleton.js";
import { OverflowIndicator as T } from "./OverflowIndicator/index.js";
import { useOverflowCalculation as _ } from "./useOverflowCalculation.js";
const q = function({
  items: l,
  renderListItem: c,
  renderDropdownItem: p,
  overflowIndicatorWithPopover: w = !0,
  renderOverflowIndicator: f,
  forceShowingOverflowIndicator: x = !1,
  className: b = "",
  gap: e = 8,
  max: O,
  min: $ = 0,
  itemsWidth: m
}) {
  const [i, y] = S(!1), C = z((r) => {
    y(r);
  }, []), {
    containerRef: N,
    overflowButtonRef: g,
    customOverflowIndicatorRef: I,
    measurementContainerRef: L,
    visibleItems: R,
    overflowItems: n,
    isInitialized: s
  } = _(l, e, {
    max: O,
    min: $,
    itemsWidth: m
  }), v = u(
    () => /* @__PURE__ */ t(
      T,
      {
        totalItemsCount: l.length,
        isOpen: i,
        count: n.length
      }
    ),
    [l.length, i, n.length]
  ), j = u(() => s ? null : l.map((r, o) => /* @__PURE__ */ t(M, { className: "h-2 w-20 rounded-md" }, `placeholder-${o}`)), [l, s]), k = x || n.length > 0, h = "flex min-w-0 items-center justify-start whitespace-nowrap";
  return /* @__PURE__ */ a(
    "div",
    {
      ref: N,
      className: d("relative flex items-center", b),
      style: {
        gap: e > 0 ? `${e}px` : void 0,
        marginLeft: e < 0 ? `${-e}px` : void 0
      },
      children: [
        !m && /* @__PURE__ */ t(
          "div",
          {
            ref: L,
            "aria-hidden": "true",
            className: d(
              "pointer-events-none invisible absolute left-0 top-0 opacity-0",
              h
            ),
            style: { gap: e > 0 ? `${e}px` : void 0 },
            "data-testid": "overflow-measurement-container",
            children: l.map((r, o) => /* @__PURE__ */ t(
              "div",
              {
                "data-testid": "overflow-measurement-item",
                style: { marginLeft: e < 0 ? `${e}px` : void 0 },
                children: c(r, o, !1)
              },
              `measure-${o}`
            ))
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: h,
            style: {
              gap: e > 0 ? `${e}px` : void 0
            },
            "data-testid": "overflow-visible-container",
            children: [
              s && R.map((r, o) => /* @__PURE__ */ t(
                "div",
                {
                  className: "transition-all duration-150",
                  "data-testid": "overflow-visible-item",
                  style: {
                    marginLeft: e < 0 ? `${e}px` : void 0
                  },
                  children: c(r, o, !0)
                },
                `item-${o}`
              )),
              j
            ]
          }
        ),
        k && /* @__PURE__ */ t(P, { children: w ? /* @__PURE__ */ a(D, { open: i, onOpenChange: C, children: [
          /* @__PURE__ */ t(E, { asChild: !0, children: /* @__PURE__ */ t(
            "button",
            {
              ref: g,
              className: d(
                "inline-flex flex-shrink-0 items-center",
                B()
              ),
              children: f?.(n.length, i) ?? v
            }
          ) }),
          /* @__PURE__ */ t(
            F,
            {
              className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
              align: "end",
              children: /* @__PURE__ */ t("div", { className: "flex flex-col", children: n.map((r, o) => /* @__PURE__ */ t("div", { children: p(r, o) }, `overflow-item-${o}`)) })
            }
          )
        ] }) : /* @__PURE__ */ t("div", { ref: I, children: f?.(n.length, !1) ?? v }) })
      ]
    }
  );
};
q.displayName = "OverflowList";
export {
  q as OverflowList
};
