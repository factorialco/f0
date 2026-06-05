import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { forwardRef as n } from "react";
const c = (r, t) => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: t,
    ...r,
    children: [
      /* @__PURE__ */ o("circle", { cx: 19, cy: 6, r: 3, vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ o(
        "path",
        {
          d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ o("path", { d: "M12 17v4", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ o("path", { d: "M8 21h8", vectorEffect: "non-scaling-stroke" })
    ]
  }
), f = n(c);
export {
  f as default
};
