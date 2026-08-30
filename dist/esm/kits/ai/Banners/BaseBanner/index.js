import { withDataTestId as e } from "../../../../lib/data-testid/index.js";
import { cn as t } from "../../../../lib/utils.js";
import n from "../../../../icons/app/Cross.js";
import { Skeleton as r } from "../../../../ui/skeleton.js";
import { F0Button as i } from "../../../../components/F0Button/F0Button.js";
import { withSkeleton as a } from "../../../../lib/skeleton.js";
import { forwardRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/kits/ai/Banners/BaseBanner/index.tsx
var u = o(function({ title: e, subtitle: r, mediaUrl: a, primaryAction: o, secondaryAction: u, onClose: f, isLoading: p = !1, children: m, variant: h = "default" }, g) {
	let _ = a?.includes(".mp4"), [v, y] = s(!1);
	return p ? /* @__PURE__ */ c(d, { ref: g }) : v ? null : /* @__PURE__ */ l("div", {
		ref: g,
		className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
		children: [
			/* @__PURE__ */ c("div", {
				className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
				children: _ ? /* @__PURE__ */ c("video", {
					src: a,
					autoPlay: !0,
					muted: !0,
					loop: !0,
					className: "h-full w-full rounded-lg object-cover"
				}) : /* @__PURE__ */ c("img", {
					src: a,
					alt: "",
					className: "h-full w-full rounded-lg object-cover"
				})
			}),
			/* @__PURE__ */ l("div", {
				className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
				children: [/* @__PURE__ */ l("div", {
					className: t("flex w-full flex-col gap-1", h === "default" ? "sm:max-w-lg" : void 0),
					children: [/* @__PURE__ */ c("h3", {
						className: "font-bold text-xl text-f1-foreground",
						children: e
					}), r && /* @__PURE__ */ c("p", {
						className: "text-base text-f1-foreground-secondary",
						children: r
					})]
				}), /* @__PURE__ */ l("div", {
					className: "flex gap-3",
					children: [
						o && /* @__PURE__ */ c(i, {
							onClick: o.onClick,
							label: o.label,
							variant: o.variant || "default",
							size: "md",
							icon: o.icon
						}),
						u && /* @__PURE__ */ c(i, {
							onClick: u.onClick,
							label: u.label,
							variant: u.variant || "outline",
							size: "md",
							icon: u.icon
						}),
						m
					]
				})]
			}),
			f && /* @__PURE__ */ c("div", {
				className: "absolute right-2 top-2 z-10",
				children: /* @__PURE__ */ c(i, {
					variant: "ghost",
					icon: n,
					size: "sm",
					hideLabel: !0,
					onClick: () => {
						f && f(), y(!0);
					},
					label: "Close"
				})
			})
		]
	});
}), d = o(function(e, t) {
	return /* @__PURE__ */ l("div", {
		ref: t,
		className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		...e,
		children: [
			/* @__PURE__ */ c("div", {
				className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
				children: /* @__PURE__ */ c(r, { className: "h-full w-full rounded-lg" })
			}),
			/* @__PURE__ */ l("div", {
				className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
				children: [/* @__PURE__ */ l("div", {
					className: "flex w-full flex-col gap-1 sm:max-w-lg",
					children: [
						/* @__PURE__ */ c(r, { className: "h-7 w-3/4" }),
						/* @__PURE__ */ c(r, { className: "h-4 w-full" }),
						/* @__PURE__ */ c(r, { className: "h-4 w-2/3" })
					]
				}), /* @__PURE__ */ l("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ c(r, { className: "h-9 w-32" }), /* @__PURE__ */ c(r, { className: "h-9 w-24" })]
				})]
			}),
			/* @__PURE__ */ c("div", {
				className: "absolute right-2 top-2 z-10",
				children: /* @__PURE__ */ c(r, { className: "h-8 w-8 rounded-md" })
			})
		]
	});
}), f = e(a(u, d));
f.displayName = "BaseBanner";
//#endregion
export { f as BaseBanner };
