import { jsxs as I, jsx as e } from "react/jsx-runtime";
import { Root as T } from "../../../node_modules/.pnpm/@radix-ui_react-toggle@1.1.1_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-toggle/dist/index.js";
import { cva as h } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as L, useMemo as f, useState as P } from "react";
import { F0Icon as p } from "../../F0Icon/index.js";
import { cn as u, focusRing as R } from "../../../lib/utils.js";
import { buttonSizeVariants as _, actionVariants as q } from "../../../ui/Action/variants.js";
import { AnimatePresence as x } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as g } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const M = h({
  variants: {
    size: {
      sm: "h-6",
      md: "h-8",
      lg: "h-10"
    },
    variant: {
      expanded: "p-2",
      compact: ""
    },
    withBorder: {
      true: "border border-solid border-f1-border",
      false: ""
    },
    selected: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      variant: "expanded",
      size: "sm",
      class: "h-[52px] w-[63px] [&_.main]:h-4"
    },
    {
      variant: "expanded",
      size: "md",
      class: "h-[60px] w-[70px] [&_.main]:h-5"
    },
    // With border and selected
    {
      withBorder: !0,
      selected: !0,
      class: "border-f1-border-selected"
    }
  ],
  defaultVariants: { size: "md", variant: "compact" }
}), k = h({
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm"
    }
  }
}), D = L(
  ({
    onSelectedChange: b,
    selected: c,
    label: a,
    disabled: v = !1,
    icon: n,
    size: r = "md",
    variant: o = "compact",
    withBorder: y = !1,
    className: z,
    defaultSelected: S = !1,
    ...w
  }, N) => {
    const i = !Array.isArray(n), [j, V] = i ? [n, n] : n, A = !Array.isArray(a), [B, O] = A ? [a, a] : a, d = f(
      () => i ? void 0 : {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.6 },
        transition: { duration: 0.25, ease: "easeOut" }
      },
      [i]
    ), [C, F] = P(S), m = c !== void 0, t = {
      selected: m ? c : C,
      onSelectedChange: m ? b : F
    }, l = t.selected ? O : B, s = f(() => o === "expanded" && r === "lg" ? (console.warn(
      "F0ButtonToggle: lg size is not supported for expanded variant"
    ), "md") : r, [r, o]);
    return /* @__PURE__ */ I(
      T,
      {
        ref: N,
        pressed: t.selected,
        onPressedChange: t.onSelectedChange,
        disabled: v,
        "aria-label": l,
        title: l,
        className: u(
          "aspect-square px-0",
          "flex flex-col items-center justify-center gap-2",
          R(),
          q({ variant: t.selected ? "selected" : "ghost" }),
          _({ size: s }),
          M({
            size: s,
            variant: o,
            withBorder: y,
            selected: t.selected
          }),
          z
        ),
        ...w,
        children: [
          /* @__PURE__ */ e(x, { initial: !1, children: /* @__PURE__ */ e("div", { className: "main relative flex flex-col items-center justify-center", children: t.selected ? /* @__PURE__ */ e(
            g.div,
            {
              className: "absolute flex items-center justify-center",
              ...d,
              children: /* @__PURE__ */ e(p, { icon: V, size: s })
            },
            "icon-on"
          ) : /* @__PURE__ */ e(
            g.div,
            {
              className: "absolute flex items-center justify-center",
              ...d,
              children: /* @__PURE__ */ e(p, { icon: j, size: s })
            },
            "icon-off"
          ) }) }),
          o === "expanded" && /* @__PURE__ */ e(x, { initial: !1, children: /* @__PURE__ */ e(
            "span",
            {
              className: u(
                "max-w-full truncate",
                k({ size: s })
              ),
              children: l
            }
          ) })
        ]
      }
    );
  }
);
D.displayName = "F0ButtonToggleInternal";
export {
  D as F0ButtonToggleInternal
};
