import { jsxs as n, jsx as o, Fragment as F } from "react/jsx-runtime";
import { useVirtualizer as Z } from "../../../node_modules/.pnpm/@tanstack_react-virtual@3.13.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-virtual/dist/esm/index.js";
import { forwardRef as H, useContext as P, useRef as ee, useMemo as y, useState as T, useEffect as w } from "react";
import { useReducedMotion as te } from "../../../lib/a11y.js";
import { cn as s } from "../../../lib/utils.js";
import { ScrollArea as oe } from "../../scrollarea.js";
import { Spinner as B } from "../../Spinner/index.js";
import { SelectContext as ae } from "../SelectContext.js";
import { F0DialogContext as ie } from "../../../patterns/F0Dialog/components/F0DialogProvider.js";
import { Content as L, Viewport as re, Portal as le } from "./radix-ui/select.js";
const ne = 8, se = H(
  ({
    items: i = void 0,
    className: O,
    children: h,
    position: l = "popper",
    taller: _ = !1,
    emptyMessage: G,
    emptyAction: b,
    onScrollBottom: K,
    onScrollTop: U,
    isLoadingMore: C,
    isLoading: W,
    scrollMargin: X,
    forceMinHeight: d,
    showLoadingIndicator: Y,
    asChild: $,
    portalContainer: N,
    ...a
  }, q) => {
    const c = P(ie), J = c.portalContainer && (c.position === "center" || c.position === "fullscreen"), x = N !== void 0 ? N : J ? c.portalContainer : void 0, S = ee(null), f = Array.isArray(i), p = y(() => f ? i.every(
      (e) => !e.value && e.type !== "group-header"
    ) : !h, [f, i, h]), A = te(), [R, z] = T(A), [I, k] = T(!1), { value: m, open: v, as: M } = P(ae), t = M === "list", E = y(() => new Set(
      (Array.isArray(m) ? m : [m]).filter(
        (e) => e !== void 0
      )
    ), [m]), u = y(() => i?.findIndex(
      (e) => e.value !== void 0 && E.has(e.value)
    ) || 0, [i, E]), r = Z({
      count: i?.length || 0,
      getScrollElement: () => S.current,
      estimateSize: (e) => i?.[e]?.height || 0,
      getItemKey: (e) => i?.[e]?.key ?? e,
      overscan: 5,
      // Round measured heights to whole pixels. Sub-pixel values from
      // getBoundingClientRect() accumulate into translateY drift that is
      // visible as jitter while scrolling up.
      measureElement: (e) => Math.round(e.getBoundingClientRect().height),
      // If the content is a list, we need to check if the animation is enabled
      enabled: t || A || I
    });
    w(() => {
      v || (k(!1), z(!0));
    }, [v]), w(() => {
      t || r.measure();
    }, [r, I, t]), w(() => {
      r.scrollToIndex(u);
    }, [r, u]);
    const g = r.getVirtualItems(), V = p ? /* @__PURE__ */ n("div", { className: "flex h-full w-full flex-col items-center justify-center p-2", children: [
      /* @__PURE__ */ o("p", { className: "text-center", children: G || "-" }),
      b && /* @__PURE__ */ o("div", { className: "mt-2 w-full border-0 border-t border-solid border-f1-border-secondary pt-2", children: b })
    ] }) : f ? /* @__PURE__ */ o(
      "div",
      {
        className: s(
          !t && "transition-opacity delay-100",
          t || R ? "" : "opacity-0",
          !t && d ? "min-h-[412px]" : ""
        ),
        style: {
          height: r.getTotalSize() + ne,
          width: "100%",
          position: "relative"
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            style: {
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${g[0]?.start ?? 0}px)`
            },
            children: g.map((e, Q) => /* @__PURE__ */ o(
              "div",
              {
                "data-index": e.index,
                ref: r.measureElement,
                tabIndex: e.index === u ? 0 : -1,
                children: C && Q === g.length - 1 ? /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-center py-4", children: /* @__PURE__ */ o(B, { size: "small" }) }) : i[e.index].item
              },
              e.key
            ))
          }
        )
      }
    ) : /* @__PURE__ */ o(F, { children: h }), j = W && !C, D = /* @__PURE__ */ o(
      L,
      {
        ref: q,
        asChild: $,
        disableScrollLock: t || !!x,
        className: s(
          "relative z-50 text-f1-foreground",
          t ? "flex w-full h-full flex-col" : "flex min-w-[8rem] flex-col overflow-hidden",
          !t && "rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
          !t && l === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          !t && l === "popper" && !d && "min-w-80 w-[var(--radix-select-trigger-width)]",
          !t && l === "popper" && d && "min-w-[32rem] w-[calc(var(--radix-select-trigger-width)+12rem)]",
          // Max-height: fixed cap so Radix can detect overflow and flip sides
          !t && (_ ? "max-h-[412px]" : "max-h-[320px]"),
          // Hides the content when the virtual list is not ready
          !t && f && !R && "opacity-0",
          O
        ),
        position: t ? "item-aligned" : l,
        side: t ? void 0 : "bottom",
        sideOffset: t ? void 0 : 4,
        collisionPadding: 16,
        avoidCollisions: !0,
        ...a,
        onCloseAutoFocus: (e) => {
          a.onCloseAutoFocus && typeof a.onCloseAutoFocus == "function" && a.onCloseAutoFocus(e), e.preventDefault();
        },
        onAnimationStart: () => {
          k(!0), setTimeout(() => {
            r.scrollToIndex(u, { align: "center" }), z(!0);
          });
        },
        children: /* @__PURE__ */ n(
          "div",
          {
            className: "flex min-h-0 flex-1 flex-col",
            style: t ? void 0 : {
              maxHeight: "var(--radix-select-content-available-height, 100%)",
              ...d ? {
                minHeight: "min(412px, var(--radix-select-content-available-height, 412px))"
              } : {}
            },
            children: [
              t && !a.right && /* @__PURE__ */ o("div", { className: "flex-shrink-0", children: a.top }),
              /* @__PURE__ */ n("div", { className: "flex min-h-0 flex-1 flex-row overflow-hidden", children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: s(
                      "relative flex flex-1 min-h-0 min-w-0 flex-col overflow-hidden",
                      t && "flex flex-col overflow-hidden flex-1 min-h-0"
                    ),
                    children: [
                      (!t || a.right) && a.top,
                      Y && j && /* @__PURE__ */ o(
                        "div",
                        {
                          className: "absolute inset-0 flex cursor-progress items-center justify-center",
                          "aria-live": "polite",
                          "aria-busy": "true",
                          children: /* @__PURE__ */ o(B, {})
                        }
                      ),
                      /* @__PURE__ */ o(
                        oe,
                        {
                          viewportRef: S,
                          className: s(
                            "flex h-full flex-col",
                            p ? "justify-center" : "pb-1",
                            j && "select-none opacity-10 transition-opacity"
                          ),
                          onScrollBottom: K,
                          onScrollTop: U,
                          scrollMargin: X,
                          children: t ? /* @__PURE__ */ o("div", { className: "min-h-0 p-1", children: V }) : /* @__PURE__ */ o(
                            re,
                            {
                              asChild: !0,
                              className: s(
                                "p-1",
                                l === "popper" && "h-[var(--radix-select-trigger-height)] w-full",
                                p && "flex h-full"
                              ),
                              children: V
                            }
                          )
                        }
                      )
                    ]
                  }
                ),
                a.right
              ] }),
              a.bottom && /* @__PURE__ */ o("div", { className: "shrink-0", children: a.bottom })
            ]
          }
        )
      }
    );
    return t ? D : /* @__PURE__ */ o(le, { container: x, children: /* @__PURE__ */ n(F, { children: [
      v && !x && /* @__PURE__ */ o(
        "div",
        {
          className: "pointer-events-auto fixed inset-0 z-40",
          onClick: (e) => {
            e.preventDefault(), e.stopPropagation();
          }
        }
      ),
      D
    ] }) });
  }
);
se.displayName = L.displayName;
export {
  se as SelectContent
};
