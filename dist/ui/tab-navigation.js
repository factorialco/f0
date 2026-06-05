import { jsxs as l, jsx as r } from "react/jsx-runtime";
import { Root as b, List as m, Item as v, Link as h } from "../node_modules/.pnpm/@radix-ui_react-navigation-menu@1.2.4_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@_io2j6ectuitayddtvz7qwhxkzi/node_modules/@radix-ui/react-navigation-menu/dist/index.js";
import { cva as u } from "../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import * as i from "react";
import { useId as y } from "react";
import { withSkeleton as k } from "../lib/skeleton.js";
import { cn as s } from "../lib/utils.js";
import { Skeleton as x } from "./skeleton.js";
import { LayoutGroup as N } from "../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/LayoutGroup/index.js";
import { motion as w } from "../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
function L(n, e) {
  const { asChild: t, children: a } = n;
  if (!t)
    return typeof e == "function" ? e(a) : e;
  const o = i.Children.only(a);
  return i.cloneElement(o, {
    children: typeof e == "function" ? e(o.props.children) : e
  });
}
const T = u({
  base: "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-page py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  variants: {
    secondary: {
      true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
      false: "bg-f1-background-transparent pt-1"
    }
  },
  defaultVariants: {
    secondary: !1
  }
}), j = i.forwardRef(({ className: n, children: e, secondary: t, ...a }, o) => {
  const d = y();
  return /* @__PURE__ */ l(
    b,
    {
      ref: o,
      ...a,
      asChild: !1,
      className: "relative",
      children: [
        /* @__PURE__ */ r("div", { className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary" }),
        /* @__PURE__ */ r(N, { id: d, children: /* @__PURE__ */ r(
          m,
          {
            className: s(T({ secondary: t }), n),
            children: e
          }
        ) })
      ]
    }
  );
});
j.displayName = "TabNavigation";
const R = u({
  base: "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  variants: {
    secondary: {
      true: "group-hover:ring-f1-border group-data-[active=true]:bg-f1-background-inverse-secondary dark:group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground group-data-[active=true]:ring-f1-border",
      false: "bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground"
    },
    disabled: {
      true: "pointer-events-none text-f1-foreground-disabled"
    }
  },
  defaultVariants: {
    secondary: !1,
    disabled: !1
  }
}), S = i.forwardRef(function({ asChild: e, disabled: t, active: a, className: o, children: d, secondary: f, ...c }, g) {
  return /* @__PURE__ */ r(v, { className: "flex", children: /* @__PURE__ */ r(
    h,
    {
      "data-active": a ? "true" : void 0,
      "aria-disabled": t || void 0,
      className: s(
        "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1",
        t ? "pointer-events-none" : ""
      ),
      ref: g,
      onSelect: () => {
      },
      asChild: e,
      ...c,
      children: L({ asChild: e, children: d }, (p) => /* @__PURE__ */ l(
        "span",
        {
          className: s(
            "text-f1-foreground-secondary ring-1 ring-inset ring-transparent",
            R({ secondary: f, disabled: t }),
            o
          ),
          children: [
            p,
            a && !f && /* @__PURE__ */ r(
              w.div,
              {
                layoutId: "underline",
                className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-inverse",
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5
                }
              }
            )
          ]
        }
      ))
    }
  ) });
}), V = ({
  className: n
}) => /* @__PURE__ */ r("li", { className: "list-none", children: /* @__PURE__ */ r(
  x,
  {
    className: s(
      "mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent",
      n
    ),
    children: " "
  }
) }), D = k(
  S,
  V
);
export {
  j as TabNavigation,
  D as TabNavigationLink
};
