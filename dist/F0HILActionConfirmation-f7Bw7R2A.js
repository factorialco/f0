import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { i as e, j as r } from "./F0Thinking-D3-rJmRX.js";
const p = ({ text: o, confirmationText: n, onConfirm: t, cancelText: l, onCancel: s }) => a("div", {
  className: "flex flex-col gap-2",
  children: [o && i("p", {
    children: o
  }), a("div", {
    className: "flex gap-2",
    children: [i(e, {
      type: "button",
      variant: "outline",
      size: "sm",
      icon: r,
      onClick: t,
      label: n
    }), i(e, {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: s,
      label: l
    })]
  })]
});
export {
  p as F
};
