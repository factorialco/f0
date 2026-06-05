import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { cva as l } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { modules as n } from "./modules.js";
const d = l({
  base: "relative flex shrink-0 items-center justify-center",
  variants: {
    size: {
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xs: "h-3 w-3",
      xxs: "h-2.5 w-2.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), c = l({
  base: "relative text-f1-foreground-inverse drop-shadow",
  variants: {
    size: {
      sm: "h-[14px] w-[14px]",
      md: "h-[18px] w-[18px]",
      lg: "h-6 w-6",
      xs: "h-2 w-2",
      xxs: "h-2 w-2"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), h = "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";
function x({
  size: t = "md",
  module: o,
  ...r
}) {
  const a = n[o];
  a || console.warn(`ModuleAvatar: The module ${o} is not supported.`);
  const i = `gradient-${Math.random().toString(36).substring(2, 15)}`;
  return /* @__PURE__ */ s(
    "div",
    {
      className: d({ size: t }),
      "aria-hidden": "true",
      "aria-label": r["aria-label"],
      "aria-labelledby": r["aria-labelledby"],
      children: [
        /* @__PURE__ */ s(
          "svg",
          {
            viewBox: "0 0 100 100",
            className: "absolute h-full w-full",
            preserveAspectRatio: "none",
            children: [
              /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ s("linearGradient", { id: i, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "#FF355E" }),
                /* @__PURE__ */ e("stop", { offset: "44%", stopColor: "#FF355E" }),
                /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "#D62D4F" })
              ] }) }),
              /* @__PURE__ */ e("path", { d: h, fill: `url(#${i})` })
            ]
          }
        ),
        a && /* @__PURE__ */ e(a, { className: c({ size: t }) })
      ]
    }
  );
}
export {
  x as F0AvatarModule
};
