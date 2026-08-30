import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/CheckCircle.js";
import r from "../../../../icons/app/Cross.js";
import i from "../../../../icons/app/InfoCircle.js";
import a from "../../../../icons/app/Warning.js";
import { Skeleton as o } from "../../../../ui/skeleton.js";
import { F0Button as s } from "../../../../components/F0Button/F0Button.js";
import { OneEllipsis as c } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { forwardRef as l } from "react";
import { cva as u } from "cva";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/kits/ai/Banners/F0Callout/CalloutInternal.tsx
var p = u({
	base: "flex w-full flex-col rounded-lg p-[1px]",
	variants: { variant: {
		ai: "bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F]",
		critical: "bg-f1-background-critical",
		positive: "bg-f1-background-positive",
		info: "bg-f1-background-info",
		warning: "bg-f1-background-warning"
	} },
	defaultVariants: { variant: "ai" }
}), m = {
	positive: n,
	warning: a,
	info: i
}, h = {
	positive: "text-f1-foreground-positive font-medium",
	warning: "text-f1-foreground-warning font-medium",
	info: "text-f1-foreground-info font-medium"
}, g = l(function({ title: n, onClose: i, children: a, actions: o = [], variant: l }, u) {
	if (o.length > 2) throw Error(`F0Callout: Maximum of 2 actions allowed, but ${o.length} actions were provided.`);
	let g = o.length > 0;
	return /* @__PURE__ */ f("div", {
		ref: u,
		className: p({ variant: l }),
		"data-testid": "sdm-callout",
		children: [/* @__PURE__ */ f("div", {
			className: "flex flex-row items-center justify-between px-4 py-2",
			children: [/* @__PURE__ */ f("div", {
				className: e("flex flex-row items-center gap-2", h[l]),
				children: [m[l] && /* @__PURE__ */ d(t, {
					icon: m[l],
					size: "sm",
					"aria-hidden": !0
				}), /* @__PURE__ */ d(c, {
					className: h[l] || "font-medium",
					children: n
				})]
			}), i && /* @__PURE__ */ d(s, {
				variant: "ghost",
				icon: r,
				size: "sm",
				hideLabel: !0,
				onClick: i,
				label: "Close"
			})]
		}), /* @__PURE__ */ f("div", {
			className: "flex flex-col gap-[1px]",
			children: [/* @__PURE__ */ d("div", {
				className: e("bg-f1-background px-4 py-3", g ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
				children: a
			}), g && /* @__PURE__ */ d("div", {
				className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
				children: o.map((e, t) => /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d(s, {
					label: e.label,
					onClick: e.onClick,
					variant: "outline",
					icon: e.icon
				}) }, t))
			})]
		})]
	});
}), _ = ({ compact: t, variant: n = "ai" }) => /* @__PURE__ */ f("div", {
	className: p({ variant: n }),
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ d("div", {
		className: "flex flex-row items-center justify-between px-4 py-2",
		children: /* @__PURE__ */ d(o, { className: "h-5 w-32 rounded-md" })
	}), /* @__PURE__ */ f("div", {
		className: "flex flex-col gap-[1px]",
		children: [/* @__PURE__ */ d("div", {
			className: e("rounded-t-[13.25px] bg-f1-background px-4 py-3", t && "rounded-[13.25px]"),
			children: /* @__PURE__ */ f("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ d(o, { className: "h-4 w-full rounded-md" }),
					/* @__PURE__ */ d(o, { className: "h-4 w-3/4 rounded-md" }),
					/* @__PURE__ */ d(o, { className: "h-4 w-1/2 rounded-md" })
				]
			})
		}), !t && /* @__PURE__ */ f("div", {
			className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
			children: [/* @__PURE__ */ d(o, { className: "h-8 w-24 rounded-md" }), /* @__PURE__ */ d(o, { className: "h-8 w-28 rounded-md" })]
		})]
	})]
});
//#endregion
export { g as CalloutInternal, _ as CalloutSkeleton };
