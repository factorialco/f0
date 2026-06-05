import { jsx as r, jsxs as t } from "react/jsx-runtime";
import { cva as o } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { withDataTestId as a } from "../../lib/data-testid/index.js";
import { experimentalComponent as n } from "../../lib/experimental.js";
import { cn as s } from "../../lib/utils.js";
import { motion as c } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const l = o({
  base: "flex select-none items-center justify-center text-f1-foreground-secondary",
  variants: {
    size: {
      small: "h-4 w-4 [&_circle]:stroke-[4]",
      medium: "h-8 w-8 [&_circle]:stroke-[2.6]",
      large: "h-12 w-12 [&_circle]:stroke-2"
    }
  },
  defaultVariants: {
    size: "medium"
  }
});
function m({ size: e, className: i }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: s(l({ size: e, className: i })),
      "aria-live": "polite",
      "aria-busy": !0,
      children: /* @__PURE__ */ t(
        "svg",
        {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-full w-full",
          children: [
            /* @__PURE__ */ r(
              "circle",
              {
                cx: "16",
                cy: "16",
                r: "12",
                className: "stroke-f1-background-secondary"
              }
            ),
            /* @__PURE__ */ r(
              c.circle,
              {
                cx: "16",
                cy: "16",
                r: "12",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeDasharray: "1 80",
                className: "opacity-50",
                initial: {
                  rotate: 0,
                  originX: "50%",
                  originY: "50%"
                },
                animate: {
                  rotate: [0, 450, 1080],
                  strokeDasharray: ["1 80", "60 40", "1 80"]
                },
                transition: {
                  duration: 2,
                  ease: "linear",
                  repeat: 1 / 0
                }
              }
            )
          ]
        }
      )
    }
  );
}
const x = a(n("Spinner", m));
export {
  x as Spinner
};
