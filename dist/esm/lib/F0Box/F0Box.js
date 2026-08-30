import { cn as e } from "../utils.js";
import { backgroundVariants as t } from "./utils/background.js";
import { borderDefaults as n, borderVariants as r } from "./utils/border.js";
import { dimensionVariants as i } from "./utils/dimensions.js";
import { displayVariants as a } from "./utils/display.js";
import { dividerVariants as o } from "./utils/divider.js";
import { flexDefaults as s, flexVariants as c } from "./utils/flex.js";
import { gridVariants as l } from "./utils/grid.js";
import { insetVariants as u } from "./utils/inset.js";
import { marginDefaults as d, marginVariants as f } from "./utils/margin.js";
import { overflowDefaults as p, overflowVariants as m } from "./utils/overflow.js";
import { paddingDefaults as h, paddingVariants as g } from "./utils/padding.js";
import { shadowVariants as _ } from "./utils/shadow.js";
import { zIndexVariants as v } from "./utils/zIndex.js";
import { resolveResponsiveClasses as y } from "./utils/responsive.js";
import { forwardRef as b } from "react";
import { cva as x } from "cva";
import { jsx as S } from "react/jsx-runtime";
//#region src/lib/F0Box/F0Box.tsx
var C = x({
	base: "",
	variants: {
		...a,
		...u,
		...g,
		...f,
		...c,
		...l,
		...i,
		...t,
		...r,
		...m,
		...o,
		..._,
		...v
	},
	defaultVariants: {
		...h,
		...d,
		...s,
		...n,
		...p
	}
}), w = [
	"sm",
	"md",
	"lg",
	"xl"
], T = b(({ display: t, position: n, top: r, right: i, bottom: a, left: o, zIndex: s, padding: c, paddingX: l, paddingY: u, paddingTop: d, paddingBottom: f, paddingLeft: p, paddingRight: m, margin: h, marginX: g, marginY: _, marginTop: v, marginBottom: b, marginLeft: x, marginRight: T, gap: E, columns: D, rows: O, colSpan: ee, colStart: te, rowSpan: ne, width: k, height: A, minWidth: j, minHeight: M, maxWidth: N, maxHeight: P, background: F, borderColor: I, border: L, borderTop: R, borderBottom: z, borderLeft: B, borderRight: V, borderRadius: H, borderRadiusTopLeft: U, borderRadiusTopRight: W, borderRadiusBottomLeft: G, borderRadiusBottomRight: K, borderStyle: q, overflow: J, overflowX: re, overflowY: Y, divider: X, dividerColor: Z, boxShadow: ie, alignItems: ae, justifyContent: oe, flexDirection: se, flexWrap: ce, grow: le, shrink: ue, sm: de, md: fe, lg: pe, xl: me, ...he }, ge) => {
	let Q = R && R !== "none" || z && z !== "none" || B && B !== "none" || V && V !== "none", _e = L && L !== "none" || Q, ve = {
		sm: de,
		md: fe,
		lg: pe,
		xl: me
	}, $ = w.map((e) => {
		let t = ve[e];
		return t ? y(e, t) : "";
	}).filter(Boolean).join(" ");
	return /* @__PURE__ */ S("div", {
		ref: ge,
		className: e(Q && "border-0", C({
			display: t,
			position: n,
			top: r,
			right: i,
			bottom: a,
			left: o,
			zIndex: s,
			padding: c,
			paddingX: l,
			paddingY: u,
			paddingTop: d,
			paddingBottom: f,
			paddingLeft: p,
			paddingRight: m,
			margin: h,
			marginX: g,
			marginY: _,
			marginTop: v,
			marginBottom: b,
			marginLeft: x,
			marginRight: T,
			gap: E,
			columns: D,
			rows: O,
			colSpan: ee,
			colStart: te,
			rowSpan: ne,
			width: k,
			height: A,
			minWidth: j,
			minHeight: M,
			maxWidth: N,
			maxHeight: P,
			background: F,
			borderColor: I,
			border: L,
			borderTop: R,
			borderBottom: z,
			borderLeft: B,
			borderRight: V,
			borderRadius: H,
			borderRadiusTopLeft: U,
			borderRadiusTopRight: W,
			borderRadiusBottomLeft: G,
			borderRadiusBottomRight: K,
			borderStyle: q,
			overflow: J,
			overflowX: re,
			overflowY: Y,
			divider: X,
			dividerColor: Z,
			alignItems: ae,
			justifyContent: oe,
			flexDirection: se,
			flexWrap: ce,
			grow: le,
			shrink: ue,
			boxShadow: ie
		}), $, _e && !I && "border-f1-border", X && !Z && "divide-f1-border", "scrollbar-macos"),
		...he
	});
});
T.displayName = "F0Box";
//#endregion
export { T as F0Box };
