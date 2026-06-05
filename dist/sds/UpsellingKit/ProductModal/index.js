import { jsxs as f, Fragment as B, jsx as s } from "react/jsx-runtime";
import { useState as o } from "react";
import { withDataTestId as F } from "../../../lib/data-testid/index.js";
import { ProductBlankslate as N } from "../ProductBlankslate/index.js";
import { UpsellRequestResponseDialog as q } from "../UpsellRequestResponseDialog/index.js";
import { CustomModal as R } from "./components/CustomModal.js";
import { F0Button as r } from "../../../components/F0Button/F0Button.js";
function T({
  isOpen: m,
  onClose: p,
  title: C,
  image: h,
  benefits: k,
  errorMessage: v,
  successMessage: b,
  loadingState: g,
  nextSteps: x,
  closeLabel: z,
  primaryAction: l,
  modalTitle: M,
  modalModule: S,
  secondaryAction: e,
  portalContainer: n,
  tag: I,
  promoTag: L,
  showResponseDialog: t = !0
}) {
  const [O, i] = o(m), [c, a] = o(null), [P, u] = o(!1), j = async () => {
    if (l?.onClick) {
      u(!0);
      try {
        await l.onClick(), i(!1), t && a("success");
      } catch {
        t && a("error");
      } finally {
        u(!1);
      }
    }
  }, d = () => {
    i(!1), p?.();
  }, w = P;
  return /* @__PURE__ */ f(B, { children: [
    /* @__PURE__ */ s(
      R,
      {
        isOpen: O,
        onClose: d,
        title: M,
        module: S,
        portalContainer: n,
        children: /* @__PURE__ */ s("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ s(
          N,
          {
            title: C,
            image: h,
            benefits: k,
            withShadow: !1,
            tag: I,
            promoTag: L,
            actions: /* @__PURE__ */ f("div", { className: "flex gap-3", children: [
              l && /* @__PURE__ */ s(
                r,
                {
                  variant: l.variant,
                  label: w ? g.label : l.label,
                  icon: l.icon || void 0,
                  onClick: j,
                  loading: l.loading,
                  size: l.size
                }
              ),
              e && /* @__PURE__ */ s(
                r,
                {
                  onClick: e.onClick,
                  label: e.label,
                  variant: e.variant,
                  size: e.size,
                  icon: e.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    c && t && /* @__PURE__ */ s(
      q,
      {
        open: !0,
        onClose: () => {
          d(), a(null);
        },
        success: c === "success",
        errorMessage: v,
        successMessage: b,
        nextSteps: x,
        closeLabel: z,
        portalContainer: n
      }
    )
  ] });
}
const K = F(T);
export {
  K as ProductModal
};
