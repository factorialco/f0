import { jsx as t } from "react/jsx-runtime";
import { cn as e } from "../../../../lib/utils.js";
function l({ size: r = 40, className: n, style: o }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: e(n, "rounded-full"),
      style: {
        width: r,
        height: r,
        background: "linear-gradient(135deg, #E8845E, #B89BD6)",
        ...o
      }
    }
  );
}
export {
  l as PongBall
};
