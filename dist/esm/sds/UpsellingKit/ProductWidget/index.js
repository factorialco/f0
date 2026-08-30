import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import t from "../../../icons/app/Cross.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
import { Card as r, CardContent as i, CardFooter as a } from "../../../ui/Card/Card.js";
import { Label as o } from "../../../ui/label.js";
import { UpsellingButton as s } from "../UpsellingButton/index.js";
import { useEffect as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ProductWidget/index.tsx
function p({ mediaUrl: e, title: p, description: m, onClose: h, dismissible: g, width: _, trackVisibility: v, actions: y, showConfirmation: b = !0 }) {
	let [x, S] = l(!1), C = () => {
		S(!0), h && h();
	};
	c(() => {
		v && v(!x);
	}, [v, x]);
	let w = e?.includes(".mp4");
	return /* @__PURE__ */ d(u, { children: x ? null : /* @__PURE__ */ f(r, {
		style: { width: _ },
		className: "relative bg-f1-background p-1",
		children: [/* @__PURE__ */ f(i, { children: [g && /* @__PURE__ */ d("div", {
			className: "absolute right-2 top-2 z-10",
			children: /* @__PURE__ */ d(n, {
				variant: "ghost",
				icon: t,
				size: "sm",
				hideLabel: !0,
				onClick: C,
				label: "Close"
			})
		}), /* @__PURE__ */ f("div", { children: [/* @__PURE__ */ d("div", { children: e && (w ? /* @__PURE__ */ d("video", {
			src: e,
			autoPlay: !0,
			muted: !0,
			loop: !0,
			playsInline: !0,
			className: "h-full w-full rounded-md"
		}) : /* @__PURE__ */ d("img", {
			src: e,
			alt: p,
			className: "h-full w-full rounded-md"
		})) }), /* @__PURE__ */ f("div", {
			className: "flex flex-col gap-[2px] p-3",
			children: [/* @__PURE__ */ d(o, {
				className: "text-lg font-medium",
				children: p
			}), /* @__PURE__ */ d(o, {
				className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
				children: m
			})]
		})] })] }), y && /* @__PURE__ */ d(a, {
			className: "p-3",
			children: y.map((e) => e.type === "upsell" ? /* @__PURE__ */ d(s, {
				label: e.label,
				onRequest: e.onClick,
				errorMessage: e.errorMessage,
				successMessage: e.successMessage,
				loadingState: e.loadingState,
				nextSteps: e.nextSteps,
				closeLabel: e.closeLabel,
				showConfirmation: b && e.showConfirmation,
				variant: e.variant
			}, e.label) : /* @__PURE__ */ d(n, {
				label: e.label,
				onClick: e.onClick,
				variant: e.variant
			}, e.label))
		})]
	}) });
}
var m = e(p);
//#endregion
export { m as ProductWidget };
