import { jsxs as u, Fragment as q, jsx as s } from "react/jsx-runtime";
import { useState as l } from "react";
import { withDataTestId as D } from "../../../lib/data-testid/index.js";
import { Popover as L, PopoverTrigger as T, PopoverContent as B } from "../../../ui/popover.js";
import "../../../icons/app/Menu.js";
import N from "../../../icons/app/Upsell.js";
import { ProductWidget as W } from "../ProductWidget/index.js";
import { UpsellRequestResponseDialog as _ } from "../UpsellRequestResponseDialog/index.js";
import { F0Button as z } from "../../../components/F0Button/F0Button.js";
function E({
  isOpen: i,
  setIsOpen: r,
  label: m,
  variant: f = "promote",
  size: d = "md",
  showIcon: h = !0,
  side: g = "right",
  align: C = "center",
  icon: w = N,
  mediaUrl: v,
  title: M,
  description: P,
  width: x = "300px",
  trackVisibility: S,
  actions: b,
  onClick: a,
  hideLabel: y = !1
}) {
  const [R, t] = l(!1), [p, n] = l(null), [o, c] = l(null), U = (e) => {
    r(e), a && a();
  }, A = async (e) => {
    if (e.type === "upsell") {
      c(e);
      try {
        await e.onClick(), e.showConfirmation && (t(!0), n("success"));
      } catch {
        t(!0), n("error");
      }
    }
  }, F = () => {
    n(null), t(!1), c(null), r(!1);
  }, j = i && !R, k = b?.map((e) => e.type === "upsell" ? {
    ...e,
    onClick: () => A(e)
  } : e);
  return /* @__PURE__ */ u(q, { children: [
    /* @__PURE__ */ u(L, { open: j, onOpenChange: U, children: [
      /* @__PURE__ */ s(T, { asChild: !0, children: /* @__PURE__ */ s(
        z,
        {
          variant: f,
          label: m,
          size: d,
          icon: h ? w : void 0,
          onClick: () => r(i),
          hideLabel: y
        }
      ) }),
      /* @__PURE__ */ s(
        B,
        {
          side: g,
          align: C,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ s(
            W,
            {
              mediaUrl: v,
              title: M,
              description: P,
              onClose: () => r(!1),
              dismissible: !1,
              width: x,
              trackVisibility: S,
              actions: k,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    o?.type === "upsell" && o.showConfirmation && p && /* @__PURE__ */ s(
      _,
      {
        open: !0,
        onClose: F,
        success: p === "success",
        errorMessage: o.errorMessage,
        successMessage: o.successMessage,
        nextSteps: o.nextSteps,
        closeLabel: o.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Z = D(E);
export {
  Z as UpsellingPopover
};
