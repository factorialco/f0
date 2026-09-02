import { cn as e } from "../../../lib/utils.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import n from "../../../icons/app/Check.js";
import r from "../../../icons/app/ChevronDown.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as a } from "../../../components/F0Button/F0Button.js";
import { Separator as o } from "../../../ui/separator.js";
import { Widget as s } from "../../../experimental/Widgets/Widget/index.js";
import { Dropdown as c } from "../../../experimental/Navigation/Dropdown/index.js";
import { defaultSlotRenderers as l, defaultSlotSkeleton as u, resolveSlotRenderer as d, resolveWidgetHeader as f } from "../slotRenderers.js";
import { Fragment as p, useEffect as m, useRef as h, useState as g } from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/sds/Home/SlotWidget/index.tsx
var b = "-ml-0.5 mt-2", x = 450, S = "cubic-bezier(0.4, 0, 0.1, 1)", C = 1.04;
function w({ slots: e, loading: t = !1, slotRenderers: n, ctx: r = {} }) {
	let i = n ? {
		...l,
		...n
	} : l;
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col",
		...t ? {
			"aria-busy": !0,
			"aria-live": "polite"
		} : {},
		children: e.map((n, a) => {
			let s = d(i[n.visualization]), c = {
				...r,
				isLastSlot: a === e.length - 1
			};
			return /* @__PURE__ */ y(p, { children: [a > 0 ? /* @__PURE__ */ v("div", {
				className: "my-3",
				children: /* @__PURE__ */ v(o, { bare: !0 })
			}) : null, t ? /* @__PURE__ */ v("div", {
				"aria-hidden": "true",
				children: (s?.skeleton ?? u)(n.params, {
					...c,
					expectedItemsCount: n.expectedItemsCount ?? 3
				})
			}) : s ? s.render(n.params, c) : /* @__PURE__ */ v("div", {
				className: "rounded-md border border-dashed border-f1-border p-2 text-f1-foreground-secondary",
				children: `No renderer for slot "${n.visualization}"`
			})] }, a);
		})
	});
}
function T({ header: o, params: l, fullHeight: u, action: d, summaries: p, headerControls: T, headerActions: E, headerSelect: D, alert: O, status: k, slots: A, loading: j = !1, slotRenderers: M, actions: N, flipped: P = !1, onFlipBack: F, isDragging: I, ctx: L = {} }) {
	let R = i(), z = t(), [B, V] = g(!1), H = h(!1);
	m(() => {
		if (!H.current) {
			H.current = !0;
			return;
		}
		if (z) return;
		V(!0);
		let e = setTimeout(() => V(!1), x);
		return () => clearTimeout(e);
	}, [P, z]);
	let [U, W] = g(void 0), G = D ? U ?? D.value ?? D.options[0]?.value : void 0, K = D?.options.find((e) => e.value === G), q = (e) => {
		W(e), D?.onChange?.(e);
	}, J = E?.length || D ? /* @__PURE__ */ y(_, { children: [
		E?.map((e, t) => /* @__PURE__ */ v(a, {
			variant: "ghost",
			size: "sm",
			...e
		}, t)),
		D ? /* @__PURE__ */ v(c, {
			items: D.options.map((e) => ({
				label: e.label,
				...e.value === G ? { icon: n } : e.icon ? { icon: e.icon } : {},
				onClick: () => q(e.value)
			})),
			children: /* @__PURE__ */ v(a, {
				variant: "ghost",
				size: "sm",
				icon: r,
				label: K?.label ?? D.tooltip ?? "",
				...D.tooltip ? { tooltip: D.tooltip } : {}
			})
		}) : null,
		T
	] }) : T, { info: Y, ...X } = f(o, l) ?? {}, Z = Object.values(X).some((e) => e !== void 0) || N && N.length > 0 || J ? X : void 0, Q = /* @__PURE__ */ v(s, {
		header: Z,
		fullHeight: u,
		action: d,
		footerClassName: b,
		actions: N,
		headerControls: J,
		summaries: p,
		...O ? { alert: O } : { status: k },
		isDragging: I,
		children: /* @__PURE__ */ v(w, {
			ctx: {
				...L,
				hasFooter: !!d,
				...G === void 0 ? {} : { selection: G }
			},
			loading: j,
			slotRenderers: M,
			slots: A
		})
	});
	return Y ? /* @__PURE__ */ v("div", {
		className: "[perspective:1200px]",
		style: { height: u ? "100%" : void 0 },
		children: /* @__PURE__ */ v("div", {
			className: "h-full",
			"data-turning": B || void 0,
			style: {
				transform: `scale(${B ? C : 1})`,
				transition: z ? void 0 : `transform ${x / 2}ms ease-out`
			},
			children: /* @__PURE__ */ y("div", {
				className: "relative h-full [transform-style:preserve-3d]",
				style: {
					transform: `rotateY(${P ? 180 : 0}deg)`,
					transition: z ? void 0 : `transform ${x}ms ${S}`
				},
				children: [/* @__PURE__ */ v("div", {
					className: e("[backface-visibility:hidden]", P && "pointer-events-none"),
					"aria-hidden": P,
					children: Q
				}), /* @__PURE__ */ y("div", {
					"aria-hidden": !P,
					className: e("absolute inset-0 flex flex-col gap-4", "rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4", "[backface-visibility:hidden] [transform:rotateY(180deg)]", !P && "pointer-events-none"),
					children: [Z?.title ? /* @__PURE__ */ v("div", {
						className: "min-h-6 truncate font-medium text-f1-foreground",
						children: Z.title
					}) : null, /* @__PURE__ */ y("div", {
						className: "flex flex-1 flex-col items-center justify-center gap-4 text-center",
						children: [/* @__PURE__ */ v("p", {
							className: "m-0 text-lg font-medium text-f1-foreground-secondary",
							children: Y
						}), /* @__PURE__ */ v(a, {
							variant: "neutral",
							size: "sm",
							label: R.widgets.gotIt,
							onClick: F,
							...P ? {} : { tabIndex: -1 }
						})]
					})]
				})]
			})
		})
	}) : Q;
}
//#endregion
export { T as SlotWidget, w as SlotWidgetContent };
