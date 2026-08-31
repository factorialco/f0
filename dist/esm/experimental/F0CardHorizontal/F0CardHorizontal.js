import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n, focusRing as r } from "../../lib/utils.js";
import { Skeleton as i } from "../../ui/skeleton.js";
import { withSkeleton as a } from "../../lib/skeleton.js";
import { Card as o } from "../../ui/Card/Card.js";
import { Text as s } from "../../ui/Text/Text.js";
import { F0Link as c } from "../../components/F0Link/F0Link.js";
import { CardAlertWrapper as l, alertBorderColor as u } from "../../components/F0Card/components/CardAlert.js";
import { CardAvatar as d } from "../../components/F0Card/components/CardAvatar.js";
import { CardHorizontalActions as f, cardHorizontalClassName as p, cardHorizontalLeadingAlignClassName as m } from "./components/CardHorizontalActions.js";
import { forwardRef as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/experimental/F0CardHorizontal/F0CardHorizontal.tsx
var v = h(function({ title: e, description: t, avatar: i, primaryAction: a, secondaryActions: h, otherActions: v, confirmAction: y, rejectAction: b, status: x, inactive: S = !1, fullHeight: C = !1, alert: w, link: T, onClick: E, disableOverlayLink: D = !1, stackAt: O = "never", disabled: k = !1, descriptionAsSingleLine: A = !1 }, j) {
	let M = !!w && w.visible !== !1, N = /* @__PURE__ */ _(o, {
		ref: M ? void 0 : j,
		className: n("group relative @container bg-f1-background shadow-none transition-all", C && "h-full", (!!T || !!E) && !k && "cursor-pointer focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", k && "pointer-events-none opacity-50"),
		style: M ? {
			borderColor: u[w.variant],
			borderWidth: "2px"
		} : void 0,
		onClick: k ? void 0 : E,
		"data-testid": "card",
		children: [T && !D && /* @__PURE__ */ g(c, {
			href: T,
			variant: "unstyled",
			className: n("z-1 absolute inset-0 block rounded-xl", r()),
			"aria-label": e,
			children: "\xA0"
		}), /* @__PURE__ */ _("div", {
			className: p[O],
			children: [/* @__PURE__ */ _("div", {
				className: n("flex min-w-0 flex-row gap-3", m[O], i ? "items-start" : "items-center"),
				children: [i && /* @__PURE__ */ g(d, {
					avatar: i,
					size: "lg"
				}), /* @__PURE__ */ _("div", {
					className: "flex min-w-0 flex-col gap-0",
					children: [/* @__PURE__ */ g(s, {
						variant: "body",
						content: e,
						className: n("break-words font-medium", S && "text-f1-foreground-secondary line-through")
					}), t && /* @__PURE__ */ g(s, {
						variant: "description",
						content: t,
						ellipsis: A || void 0,
						className: n(!A && "break-words", S && "line-through")
					})]
				})]
			}), /* @__PURE__ */ g(f, {
				primaryAction: a,
				secondaryActions: h,
				otherActions: v,
				confirmAction: y,
				rejectAction: b,
				status: x,
				stackAt: O,
				hasAvatar: !!i
			})]
		})]
	});
	return M ? /* @__PURE__ */ g(l, {
		ref: j,
		alert: w,
		fullHeight: C,
		children: N
	}) : N;
});
v.displayName = "F0CardHorizontal";
var y = e(t("F0CardHorizontal", a(v, () => /* @__PURE__ */ g(o, {
	className: n("group relative bg-f1-background shadow-none"),
	"aria-busy": "true",
	"aria-live": "polite",
	children: /* @__PURE__ */ _("div", {
		className: "flex flex-row items-center justify-between gap-4",
		children: [/* @__PURE__ */ _("div", {
			className: "flex min-w-0 flex-row items-center gap-3",
			children: [/* @__PURE__ */ g(i, { className: "h-10 w-10 rounded-full" }), /* @__PURE__ */ _("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ g(i, { className: "h-3 w-32 rounded-md" }), /* @__PURE__ */ g(i, { className: "h-3 w-20 rounded-md" })]
			})]
		}), /* @__PURE__ */ g(i, { className: "h-9 w-24 rounded-md" })]
	})
}))));
//#endregion
export { y as F0CardHorizontal };
