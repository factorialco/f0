import { jsx as vr } from "react/jsx-runtime";
import { cva as xr } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as gr } from "react";
import { cn as Dr } from "../utils.js";
import { resolveResponsiveClasses as wr } from "./utils/responsive.js";
import { overflowDefaults as Br, overflowVariants as Nr } from "./utils/overflow.js";
import { borderDefaults as jr, borderVariants as kr } from "./utils/border.js";
import { flexDefaults as yr, flexVariants as Fr } from "./utils/flex.js";
import { marginDefaults as Ir, marginVariants as Or } from "./utils/margin.js";
import { paddingDefaults as Pr, paddingVariants as Sr } from "./utils/padding.js";
import { zIndexVariants as hr } from "./utils/zIndex.js";
import { shadowVariants as zr } from "./utils/shadow.js";
import { dividerVariants as Ar } from "./utils/divider.js";
import { backgroundVariants as Er } from "./utils/background.js";
import { dimensionVariants as Kr } from "./utils/dimensions.js";
import { gridVariants as Rr } from "./utils/grid.js";
import { insetVariants as qr } from "./utils/inset.js";
import { displayVariants as Cr } from "./utils/display.js";
const Gr = xr({
  base: "",
  variants: {
    ...Cr,
    ...qr,
    ...Sr,
    ...Or,
    ...Fr,
    ...Rr,
    ...Kr,
    ...Er,
    ...kr,
    ...Nr,
    ...Ar,
    ...zr,
    ...hr
  },
  defaultVariants: {
    ...Pr,
    ...Ir,
    ...yr,
    ...jr,
    ...Br
  }
}), Hr = ["sm", "md", "lg", "xl"], Jr = gr(
  ({
    // Display & Position
    display: l,
    position: V,
    top: c,
    right: d,
    bottom: u,
    left: v,
    zIndex: x,
    // Padding
    padding: g,
    paddingX: D,
    paddingY: w,
    paddingTop: B,
    paddingBottom: N,
    paddingLeft: j,
    paddingRight: k,
    // Margin
    margin: y,
    marginX: F,
    marginY: I,
    marginTop: O,
    marginBottom: P,
    marginLeft: S,
    marginRight: h,
    // Gap
    gap: z,
    // Grid
    columns: A,
    rows: E,
    colSpan: K,
    colStart: R,
    rowSpan: q,
    // Dimensions
    width: C,
    height: G,
    minWidth: H,
    minHeight: J,
    maxWidth: M,
    maxHeight: Q,
    // Background
    background: U,
    // Border
    borderColor: i,
    border: r,
    borderTop: a,
    borderBottom: o,
    borderLeft: s,
    borderRight: n,
    borderRadius: W,
    borderRadiusTopLeft: X,
    borderRadiusTopRight: Y,
    borderRadiusBottomLeft: Z,
    borderRadiusBottomRight: _,
    borderStyle: $,
    // Overflow
    overflow: b,
    overflowX: T,
    overflowY: L,
    // Divider
    divider: t,
    dividerColor: m,
    boxShadow: rr,
    // Flex
    alignItems: ar,
    justifyContent: or,
    flexDirection: sr,
    flexWrap: nr,
    grow: ir,
    shrink: tr,
    // Responsive breakpoint overrides
    sm: mr,
    md: er,
    lg: fr,
    xl: pr,
    ...lr
  }, Vr) => {
    const e = a && a !== "none" || o && o !== "none" || s && s !== "none" || n && n !== "none", cr = r && r !== "none" || e, dr = { sm: mr, md: er, lg: fr, xl: pr }, ur = Hr.map((f) => {
      const p = dr[f];
      return p ? wr(f, p) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ vr(
      "div",
      {
        ref: Vr,
        className: Dr(
          e && "border-0",
          Gr({
            display: l,
            position: V,
            top: c,
            right: d,
            bottom: u,
            left: v,
            zIndex: x,
            padding: g,
            paddingX: D,
            paddingY: w,
            paddingTop: B,
            paddingBottom: N,
            paddingLeft: j,
            paddingRight: k,
            margin: y,
            marginX: F,
            marginY: I,
            marginTop: O,
            marginBottom: P,
            marginLeft: S,
            marginRight: h,
            gap: z,
            columns: A,
            rows: E,
            colSpan: K,
            colStart: R,
            rowSpan: q,
            width: C,
            height: G,
            minWidth: H,
            minHeight: J,
            maxWidth: M,
            maxHeight: Q,
            background: U,
            borderColor: i,
            border: r,
            borderTop: a,
            borderBottom: o,
            borderLeft: s,
            borderRight: n,
            borderRadius: W,
            borderRadiusTopLeft: X,
            borderRadiusTopRight: Y,
            borderRadiusBottomLeft: Z,
            borderRadiusBottomRight: _,
            borderStyle: $,
            overflow: b,
            overflowX: T,
            overflowY: L,
            divider: t,
            dividerColor: m,
            alignItems: ar,
            justifyContent: or,
            flexDirection: sr,
            flexWrap: nr,
            grow: ir,
            shrink: tr,
            boxShadow: rr
          }),
          ur,
          cr && !i && "border-f1-border",
          t && !m && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...lr
      }
    );
  }
);
Jr.displayName = "F0Box";
export {
  Jr as F0Box
};
