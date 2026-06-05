import { jsx as a } from "react/jsx-runtime";
import { createContext as i, useContext as c } from "react";
const t = i({
  open: !1,
  onClose: () => {
  },
  position: "center",
  shownBottomSheet: !1,
  portalContainer: null
}), u = ({
  isOpen: o,
  onClose: e,
  shownBottomSheet: n = !1,
  position: r,
  children: s,
  portalContainer: l
}) => /* @__PURE__ */ a(
  t.Provider,
  {
    value: {
      open: o,
      onClose: e,
      position: r,
      shownBottomSheet: n,
      portalContainer: l
    },
    children: s
  }
), f = () => c(t);
export {
  t as F0DialogContext,
  u as F0DialogProvider,
  f as useF0Dialog
};
