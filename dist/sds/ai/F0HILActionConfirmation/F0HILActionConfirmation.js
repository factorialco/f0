import { jsxs as e, jsx as o } from "react/jsx-runtime";
import c from "../../../icons/app/Check.js";
import { F0Button as t } from "../../../components/F0Button/F0Button.js";
const f = ({
  text: i,
  confirmationText: l,
  onConfirm: n,
  cancelText: r,
  onCancel: a
}) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: [
  i && /* @__PURE__ */ o("p", { children: i }),
  /* @__PURE__ */ e("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ o(
      t,
      {
        type: "button",
        variant: "default",
        size: "md",
        icon: c,
        onClick: n,
        label: l
      }
    ),
    /* @__PURE__ */ o(
      t,
      {
        type: "button",
        variant: "outline",
        size: "md",
        onClick: a,
        label: r
      }
    )
  ] })
] });
export {
  f as F0HILActionConfirmation
};
