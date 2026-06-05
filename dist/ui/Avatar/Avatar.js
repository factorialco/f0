import { jsx as s } from "react/jsx-runtime";
import { Root as m, Fallback as n, Image as c } from "../../node_modules/.pnpm/@radix-ui_react-avatar@1.1.2_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-avatar/dist/index.js";
import { cva as b } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import * as t from "react";
import { useImageContext as f } from "../../lib/imageHandler.js";
import { cn as i } from "../../lib/utils.js";
const u = b({
  base: "relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary",
  variants: {
    size: {
      xsmall: "size-5 rounded-xs text-sm",
      small: "size-6 rounded-sm text-sm",
      medium: "size-8 rounded",
      large: "size-10 rounded-md text-lg",
      xlarge: "size-14 rounded-xl text-2xl",
      xxlarge: "size-18 rounded-2xl text-3xl"
    },
    type: {
      base: "",
      rounded: "rounded-full"
    },
    color: {
      viridian: "bg-[hsl(theme(colors.viridian.50))]",
      malibu: "bg-[hsl(theme(colors.malibu.50))]",
      yellow: "bg-[hsl(theme(colors.yellow.50))]",
      purple: "bg-[hsl(theme(colors.purple.50))]",
      lilac: "bg-[hsl(theme(colors.lilac.50))]",
      barbie: "bg-[hsl(theme(colors.barbie.50))]",
      smoke: "bg-[hsl(theme(colors.smoke.50))]",
      army: "bg-[hsl(theme(colors.army.50))]",
      flubber: "bg-[hsl(theme(colors.flubber.50))]",
      indigo: "bg-[hsl(theme(colors.indigo.50))]",
      camel: "bg-[hsl(theme(colors.camel.50))]"
    }
  },
  defaultVariants: {
    size: "medium",
    type: "base",
    color: "viridian"
  }
}), g = t.forwardRef(({ size: r, type: e, color: l, className: a, ...o }, d) => /* @__PURE__ */ s(
  m,
  {
    ref: d,
    "data-a11y-color-contrast-ignore": !0,
    className: i(u({ size: r, type: e, color: l, className: a })),
    ...o
  }
));
g.displayName = m.displayName;
const h = t.forwardRef(({ className: r, ...e }, l) => {
  const { src: a } = f(), o = e.src && a ? a(e) : e;
  return /* @__PURE__ */ s(
    c,
    {
      ref: l,
      className: i("aspect-square h-full w-full object-cover", r),
      ...e,
      ...o,
      loading: "lazy"
    }
  );
});
h.displayName = c.displayName;
const x = t.forwardRef(({ className: r, ...e }, l) => /* @__PURE__ */ s(
  n,
  {
    ref: l,
    translate: "no",
    className: i(
      "flex h-full w-full items-center justify-center text-f1-foreground-inverse/90",
      r
    ),
    ...e
  }
));
x.displayName = n.displayName;
export {
  g as Avatar,
  x as AvatarFallback,
  h as AvatarImage
};
