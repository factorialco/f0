import { jsx as w } from "react/jsx-runtime";
import { cva as u } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as h } from "react";
import { cn as y } from "../../../lib/utils.js";
const g = u({
  base: "flex",
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto"
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16"
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      xl: "max-w-xl",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    },
    height: {
      auto: "h-auto",
      full: "h-full"
    },
    width: {
      auto: "w-auto",
      full: "w-full"
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16"
    },
    basis: {
      0: "basis-0"
    },
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    justifyContent: {
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      start: "justify-start",
      stretch: "justify-stretch"
    },
    alignItems: {
      center: "items-center",
      end: "items-end",
      "space-between": "items-between",
      start: "items-start",
      stretch: "items-stretch"
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0"
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0"
    }
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: !1
  }
}), F = h(function({
  className: e,
  grow: t,
  basis: s,
  shrink: n,
  paddingX: r,
  paddingY: a,
  inline: i,
  overflow: l,
  maxWidth: x,
  justifyContent: o,
  alignItems: m,
  height: p,
  width: f,
  ...c
}, d) {
  return /* @__PURE__ */ w(
    "div",
    {
      className: y(
        g({
          paddingX: r,
          basis: s,
          paddingY: a,
          grow: t,
          shrink: n,
          inline: i,
          overflow: l,
          maxWidth: x,
          justifyContent: o,
          alignItems: m,
          height: p,
          width: f
        }),
        e
      ),
      ref: d,
      ...c
    }
  );
});
export {
  F as FlexBox
};
