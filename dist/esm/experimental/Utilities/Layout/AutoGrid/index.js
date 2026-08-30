import { cn as e } from "../../../../lib/utils.js";
import { gaps as t } from "../shared.js";
import n from "react";
import { cva as r } from "cva";
import { jsx as i } from "react/jsx-runtime";
//#region src/experimental/Utilities/Layout/AutoGrid/index.tsx
var a = r({
	base: "grid grid-cols-1",
	variants: {
		tileSize: {
			sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
			md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
			lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
		},
		gap: { ...t }
	},
	defaultVariants: {
		tileSize: "md",
		gap: "4"
	}
}), o = n.forwardRef(function({ className: t, gap: n, children: r, tileSize: o, ...s }, c) {
	return /* @__PURE__ */ i("div", {
		className: e("@container", "grow"),
		ref: c,
		...s,
		children: /* @__PURE__ */ i("div", {
			className: e(a({
				gap: n,
				tileSize: o
			}), t),
			ref: c,
			...s,
			children: r
		})
	});
});
//#endregion
export { o as AutoGrid };
