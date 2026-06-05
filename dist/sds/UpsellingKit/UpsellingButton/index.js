import { jsxs as h, Fragment as j, jsx as i } from "react/jsx-runtime";
import { useState as a } from "react";
import { withDataTestId as k } from "../../../lib/data-testid/index.js";
import { UpsellRequestResponseDialog as w } from "../UpsellRequestResponseDialog/index.js";
import D from "../../../icons/app/Upsell.js";
import { F0Button as I } from "../../../components/F0Button/F0Button.js";
function v({
  label: c,
  showIcon: u = !0,
  onRequest: e,
  showConfirmation: o = !0,
  loading: p,
  errorMessage: f,
  successMessage: m,
  loadingState: d,
  nextSteps: g,
  closeLabel: b,
  variant: L = "promote",
  onModalStateChange: t,
  portalContainer: x,
  ...y
}) {
  const [n, s] = a(null), [B, r] = a(!1), F = async () => {
    if (e) {
      r(!0);
      try {
        await e(), o && (s("success"), t?.(!0));
      } catch {
        s("error"), t?.(!0);
      } finally {
        r(!1);
      }
    }
  }, R = () => {
    s(null), t?.(!1);
  }, l = p || B, U = l ? d.label : c;
  return /* @__PURE__ */ h(j, { children: [
    /* @__PURE__ */ i(
      I,
      {
        variant: L,
        label: U,
        icon: u ? D : void 0,
        onClick: F,
        loading: l,
        ...y
      }
    ),
    o && n && /* @__PURE__ */ i(
      w,
      {
        open: !0,
        onClose: R,
        success: n === "success",
        errorMessage: f,
        successMessage: m,
        nextSteps: g,
        closeLabel: b,
        portalContainer: x
      }
    )
  ] });
}
const A = k(v);
export {
  A as UpsellingButton
};
