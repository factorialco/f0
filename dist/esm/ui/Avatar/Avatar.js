"use client";
import { cn as e } from "../../lib/utils.js";
import { useImageContext as t } from "../../lib/imageHandler.js";
import * as n from "react";
import { cva as r } from "cva";
import { jsx as i } from "react/jsx-runtime";
import * as a from "@radix-ui/react-avatar";
//#region src/ui/Avatar/Avatar.tsx
var o = r({
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
}), s = n.forwardRef(({ size: t, type: n, color: r, className: s, ...c }, l) => /* @__PURE__ */ i(a.Root, {
	ref: l,
	"data-a11y-color-contrast-ignore": !0,
	className: e(o({
		size: t,
		type: n,
		color: r,
		className: s
	})),
	...c
}));
s.displayName = a.Root.displayName;
var c = n.forwardRef(({ className: n, ...r }, o) => {
	let { src: s } = t(), c = r.src && s ? s(r) : r;
	return /* @__PURE__ */ i(a.Image, {
		ref: o,
		className: e("aspect-square h-full w-full object-cover", n),
		...r,
		...c,
		loading: "lazy"
	});
});
c.displayName = a.Image.displayName;
var l = n.forwardRef(({ className: t, ...n }, r) => /* @__PURE__ */ i(a.Fallback, {
	ref: r,
	translate: "no",
	className: e("flex h-full w-full items-center justify-center text-f1-foreground-inverse/90", t),
	...n
}));
l.displayName = a.Fallback.displayName;
//#endregion
export { s as Avatar, l as AvatarFallback, c as AvatarImage };
