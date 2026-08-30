import { Skeleton as e } from "../../../../ui/skeleton.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/sds/Home/ClockIn/ClockInControls/Skeleton.tsx
function r({ variant: r = "default", canSeeGraph: i = !0, canShowLocation: a = !0, canShowProject: o = !1 }) {
	return r === "horizontal-bar" ? /* @__PURE__ */ n("div", {
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ n("div", {
				className: "flex flex-row items-end justify-between gap-2",
				children: [/* @__PURE__ */ t(e, { className: "h-7 w-28" }), /* @__PURE__ */ t(e, { className: "h-7 w-12" })]
			}),
			i && /* @__PURE__ */ t(e, { className: "h-1.5 w-full rounded-full" }),
			/* @__PURE__ */ n("div", {
				className: "flex flex-row justify-between gap-2",
				children: [/* @__PURE__ */ t(e, { className: "h-5 w-12" }), /* @__PURE__ */ t(e, { className: "h-5 w-24" })]
			}),
			/* @__PURE__ */ n("div", {
				className: "flex flex-col gap-2 pt-1",
				children: [a && o ? /* @__PURE__ */ t(e, { className: "h-8 w-full rounded-md" }) : null, /* @__PURE__ */ n("div", {
					className: "flex flex-row items-center gap-2",
					children: [(a || o) && /* @__PURE__ */ t(e, { className: "h-8 min-w-0 flex-1 rounded-md" }), /* @__PURE__ */ t(e, { className: "ml-auto h-8 w-24 shrink-0 rounded-md" })]
				})]
			})
		]
	}) : /* @__PURE__ */ t("div", {
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		className: "@container",
		children: /* @__PURE__ */ n("div", {
			className: "flex flex-grow flex-col",
			children: [/* @__PURE__ */ n("div", {
				className: "flex flex-col-reverse items-center gap-2 @xs:flex-row",
				children: [/* @__PURE__ */ n("div", {
					className: "flex-1 space-y-4",
					children: [/* @__PURE__ */ n("div", {
						className: "flex flex-col items-center gap-1.5 @xs:items-start",
						children: [/* @__PURE__ */ t(e, { className: "h-7 w-32" }), /* @__PURE__ */ t(e, { className: "h-5 w-40" })]
					}), /* @__PURE__ */ t("div", {
						className: "flex flex-row justify-center gap-2 @xs:justify-start",
						children: /* @__PURE__ */ t(e, { className: "h-8 w-28 rounded-md" })
					})]
				}), i && /* @__PURE__ */ t(e, { className: "h-40 w-40 shrink-0 rounded-full" })]
			}), /* @__PURE__ */ t("div", {
				className: "mt-6 flex flex-row justify-center @xs:justify-start",
				children: a && /* @__PURE__ */ t(e, { className: "h-6 w-32 rounded-md" })
			})]
		})
	});
}
//#endregion
export { r as ClockInControlsSkeleton };
