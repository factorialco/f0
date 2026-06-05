import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { cva as P } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { useState as T, useCallback as q, useMemo as m } from "react";
import { Dialog as z } from "../../ui/Dialog/dialog.js";
import { Drawer as A, DrawerOverlay as G, DrawerContent as I } from "../../ui/drawer.js";
import { F0DialogContent as D } from "./components/F0DialogContent.js";
import { F0DialogFooter as F } from "./components/F0DialogFooter.js";
import { F0DialogHeader as S } from "./components/F0DialogHeader.js";
import { F0DialogProvider as N } from "./components/F0DialogProvider.js";
import { useIsSmallScreen as J } from "./utils.js";
import { DialogContent as K } from "../../ui/Dialog/components/DialogContent.js";
const L = P({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition: "absolute flex flex-col rounded-md w-full",
      center: "flex",
      fullscreen: ""
    },
    position: {
      right: "left-auto right-0 items-end p-3",
      left: "left-0 items-start p-3",
      center: "",
      fullscreen: "inset-6"
    }
  },
  defaultVariants: {
    variant: "center"
  }
}), Q = P({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition: "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
      center: "flex max-h-[95vh] flex-1 flex-col rounded-xl",
      fullscreen: "h-full w-full rounded-xl"
    },
    position: {
      left: "",
      right: "",
      center: "",
      fullscreen: ""
    },
    width: {
      sm: "max-w-[480px]",
      md: "max-w-[640px]",
      lg: "max-w-[800px]",
      xl: "max-w-[960px]"
    }
  },
  compoundVariants: [
    {
      variant: "fullscreen",
      width: ["sm", "md", "lg", "xl"],
      class: "max-w-full"
    }
  ],
  defaultVariants: {
    variant: "center"
  }
}), ne = ({
  asBottomSheetInMobile: a = !0,
  position: e = "center",
  onClose: o,
  isOpen: n,
  children: u,
  width: s = "md",
  primaryAction: d,
  secondaryAction: h,
  title: k,
  description: V,
  module: j,
  otherActions: y,
  tabs: E,
  activeTabId: O,
  setActiveTabId: W,
  disableContentPadding: x,
  container: H
}) => {
  const [g, R] = T(null), p = q((t) => {
    R(t);
  }, []), w = (t) => {
    t || o();
  }, c = J(), f = e === "left" || e === "right", l = m(() => c && a ? "bottomSheet" : e === "fullscreen" ? "fullscreen" : f ? "sidePosition" : "center", [c, a, f, e]), v = m(() => (s && !["center", "left", "right"].includes(e) && console.warn(
    "F0Dialog: `width` prop is only applicable to center and side panel positions"
  ), s), [l, s, e]), b = m(() => Q({
    variant: l,
    position: e,
    width: v
  }), [l, e, v]), C = {
    title: k,
    description: V,
    module: j,
    otherActions: y,
    tabs: E,
    activeTabId: O,
    setActiveTabId: W
  };
  return c && a ? /* @__PURE__ */ r(
    N,
    {
      isOpen: n,
      onClose: o,
      position: e,
      portalContainer: g,
      shownBottomSheet: !0,
      children: /* @__PURE__ */ i(A, { open: n, onOpenChange: w, children: [
        /* @__PURE__ */ r(G, { className: "bg-f1-background-overlay" }),
        /* @__PURE__ */ i(I, { ref: p, className: b, children: [
          /* @__PURE__ */ r(S, { ...C }),
          /* @__PURE__ */ r(D, { disableContentPadding: x, children: u }),
          /* @__PURE__ */ r(
            F,
            {
              primaryAction: d,
              secondaryAction: h
            }
          )
        ] })
      ] })
    }
  ) : /* @__PURE__ */ r(
    N,
    {
      isOpen: n,
      onClose: o,
      position: e,
      portalContainer: g,
      children: /* @__PURE__ */ r(
        z,
        {
          open: n,
          onOpenChange: w,
          modal: e === "center" || e === "fullscreen",
          children: /* @__PURE__ */ i(
            K,
            {
              ref: p,
              withTranslateAnimation: !f,
              wrapperClassName: L({
                variant: l,
                position: e
              }),
              className: b,
              onOpenAutoFocus: (t) => t.preventDefault(),
              container: H,
              children: [
                /* @__PURE__ */ r(S, { ...C }),
                /* @__PURE__ */ r(D, { disableContentPadding: x, children: u }),
                /* @__PURE__ */ r(
                  F,
                  {
                    primaryAction: d,
                    secondaryAction: h
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};
export {
  ne as F0DialogInternal
};
