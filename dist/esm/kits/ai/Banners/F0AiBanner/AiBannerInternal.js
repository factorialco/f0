import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Cross.js";
import { Skeleton as n } from "../../../../ui/skeleton.js";
import { F0Button as r } from "../../../../components/F0Button/F0Button.js";
import { OneEllipsis as i } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0RichTextDisplay as a } from "../../../../components/RichText/F0RichTextDisplay/F0RichTextDisplay.js";
import { forwardRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/Banners/F0AiBanner/AiBannerInternal.tsx
var l = o(function({ title: n, onClose: o, content: l, primaryAction: u, secondaryAction: d }, f) {
	return /* @__PURE__ */ c("div", {
		ref: f,
		className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
		"data-testid": "ai-banner",
		children: [/* @__PURE__ */ c("div", {
			className: "flex flex-row items-center justify-between px-4 py-2",
			children: [/* @__PURE__ */ s(i, {
				className: "font-medium",
				children: n
			}), o && /* @__PURE__ */ s(r, {
				variant: "ghost",
				icon: t,
				size: "sm",
				hideLabel: !0,
				onClick: o,
				label: "Close"
			})]
		}), /* @__PURE__ */ c("div", {
			className: "flex flex-col gap-[1px]",
			children: [/* @__PURE__ */ s("div", {
				className: e("bg-f1-background px-4 py-3", d || u ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
				children: /* @__PURE__ */ s(a, { content: l })
			}), (d || u) && /* @__PURE__ */ c("div", {
				className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
				children: [/* @__PURE__ */ s("div", { children: d && /* @__PURE__ */ s(r, {
					label: d.label,
					onClick: d.onClick,
					variant: "outline",
					icon: d.icon
				}) }), /* @__PURE__ */ s("div", { children: u && /* @__PURE__ */ s(r, {
					label: u.label,
					onClick: u.onClick,
					variant: "outline",
					icon: u.icon
				}) })]
			})]
		})]
	});
}), u = ({ compact: t }) => /* @__PURE__ */ c("div", {
	className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ s("div", {
		className: "flex flex-row items-center justify-between px-4 py-2",
		children: /* @__PURE__ */ s(n, { className: "h-5 w-32 rounded-md" })
	}), /* @__PURE__ */ c("div", {
		className: "flex flex-col gap-[1px]",
		children: [/* @__PURE__ */ s("div", {
			className: e("rounded-t-[13.25px] bg-f1-background px-4 py-3", t && "rounded-[13.25px]"),
			children: /* @__PURE__ */ c("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ s(n, { className: "h-4 w-full rounded-md" }),
					/* @__PURE__ */ s(n, { className: "h-4 w-3/4 rounded-md" }),
					/* @__PURE__ */ s(n, { className: "h-4 w-1/2 rounded-md" })
				]
			})
		}), !t && /* @__PURE__ */ c("div", {
			className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
			children: [/* @__PURE__ */ s(n, { className: "h-8 w-24 rounded-md" }), /* @__PURE__ */ s(n, { className: "h-8 w-28 rounded-md" })]
		})]
	})]
});
//#endregion
export { l as AiBannerInternal, u as AiBannerSkeleton };
