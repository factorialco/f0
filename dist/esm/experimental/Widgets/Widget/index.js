import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { F0Icon as r } from "../../../components/F0Icon/index.js";
import i from "../../../icons/app/ChevronRight.js";
import a from "../../../icons/app/Ellipsis.js";
import o from "../../../icons/app/EyeInvisible.js";
import s from "../../../icons/app/EyeVisible.js";
import c from "../../../icons/app/Handle.js";
import l from "../../../icons/app/InfoCircleLine.js";
import { useI18n as u } from "../../../lib/providers/i18n/i18n-provider.js";
import { Tooltip as d } from "../../Overlays/Tooltip/index.js";
import { Link as f, isExternalHref as p } from "../../../lib/linkHandler.js";
import { Skeleton as m } from "../../../ui/skeleton.js";
import { Counter as h } from "../../../ui/Counter/index.js";
import { F0Button as g } from "../../../components/F0Button/F0Button.js";
import { F0TagAlert as _ } from "../../../components/tags/F0TagAlert/index.js";
import { F0TagStatus as v } from "../../../components/tags/F0TagStatus/index.js";
import { DropdownInternal as y } from "../../Navigation/Dropdown/internal.js";
import b from "../../../icons/ai/One.js";
import { AIButton as x } from "../../../kits/ai/AIButton/AIButton.js";
import { usePrivacyMode as S } from "../../../lib/privacyMode.js";
import { PrivateBox as ee } from "../../../sds/Profile/PrivateBox/index.js";
import { withSkeleton as C } from "../../../lib/skeleton.js";
import { Card as w, CardComment as T, CardContent as E, CardFooter as D, CardHeader as O, CardSubtitle as k, CardTitle as A } from "../../../ui/Card/Card.js";
import { Separator as j } from "../../../ui/separator.js";
import M, { forwardRef as N, useEffect as P, useRef as F, useState as I } from "react";
import { cva as L } from "cva";
import { Fragment as R, jsx as z, jsxs as B } from "react/jsx-runtime";
import { useComposedRefs as V } from "@radix-ui/react-compose-refs";
//#region src/experimental/Widgets/Widget/index.tsx
var H = () => /* @__PURE__ */ z("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), U = 480, W = (e) => {
	let [t, n] = I(!1);
	return P(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = () => n(t.clientWidth >= U);
		r();
		let i = new ResizeObserver(r);
		return i.observe(t), () => i.disconnect();
	}, [e]), t;
}, G = M.createContext(!1), K = () => M.useContext(G), q = n("-mx-1.5 inline-flex min-w-0 items-center gap-1 rounded-sm px-1.5 py-0.5", "border-none bg-transparent text-left no-underline", "text-f1-foreground", "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"), J = ({ title: e, link: t, isWide: a }) => {
	let o = n("truncate", a && "text-lg font-semibold");
	if (!t) return /* @__PURE__ */ z(A, {
		className: o,
		children: e
	});
	let s = /* @__PURE__ */ B(R, { children: [/* @__PURE__ */ z(A, {
		className: o,
		children: e
	}), /* @__PURE__ */ z(r, {
		size: "sm",
		icon: t.icon ?? i
	})] }), c = t.url ? /* @__PURE__ */ z(f, {
		href: t.url,
		onClick: t.onClick,
		"aria-label": t.title,
		className: q,
		...p(t.url) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: s
	}) : /* @__PURE__ */ z("button", {
		type: "button",
		onClick: t.onClick,
		"aria-label": t.title,
		className: q,
		children: s
	});
	return /* @__PURE__ */ z(d, {
		label: t.title,
		children: c
	});
}, Y = N(function({ header: e, children: t, action: i, footerClassName: f, summaries: p, alert: m, status: C, fullHeight: A = !1, actions: N, headerControls: I, AIButton: L, draggable: R = !1, onDragStart: U, onDragEnd: K, isDragging: q = !1, selected: Y = !1 }, X) {
	let Z = F(null), Q = V(X, Z), $ = W(Z);
	P(() => {
		if (!q || !K) return;
		let e = () => K();
		return document.addEventListener("mouseup", e), () => document.removeEventListener("mouseup", e);
	}, [q, K]);
	let te = u(), { enabled: ne, toggle: re } = S();
	return P(() => {
		if (m && C) throw Error("You cannot pass both alert and status at the same time to this component");
	}, [m, C]), /* @__PURE__ */ z(G.Provider, {
		value: $,
		children: /* @__PURE__ */ B(w, {
			className: n(A ? "h-full" : "", "relative flex gap-3 border-f1-border-secondary", R && "hover:border-f1-border-hover", Y && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", q && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
			ref: Q,
			children: [
				e && /* @__PURE__ */ z(O, {
					className: "-mr-1 -mt-1",
					children: /* @__PURE__ */ B("div", {
						className: "flex w-full flex-1 flex-col gap-4",
						children: [/* @__PURE__ */ B("div", {
							className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2",
							children: [
								R && /* @__PURE__ */ z("div", {
									className: "-ml-1 flex h-6 w-6 shrink-0 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
									onMouseDown: U,
									"data-gs-handle": "true",
									children: /* @__PURE__ */ z(r, {
										icon: c,
										size: "xs"
									})
								}),
								/* @__PURE__ */ B("div", {
									className: "flex min-h-6 min-w-0 grow flex-row items-center gap-1",
									children: [
										e.title && /* @__PURE__ */ z(J, {
											title: e.title,
											link: e.link,
											isWide: $
										}),
										e.subtitle && /* @__PURE__ */ B("div", {
											className: "flex flex-row items-center gap-1",
											children: [/* @__PURE__ */ z(H, {}), /* @__PURE__ */ z(k, {
												className: "truncate",
												children: e.subtitle
											})]
										}),
										e.info && /* @__PURE__ */ z(d, {
											label: e.info,
											children: /* @__PURE__ */ z(r, {
												icon: l,
												size: "sm",
												className: "text-f1-foreground-secondary"
											})
										}),
										e.count && /* @__PURE__ */ z("div", {
											className: "ml-0.5",
											children: /* @__PURE__ */ z(h, { value: e.count })
										})
									]
								}),
								/* @__PURE__ */ B("div", {
									className: "flex flex-row items-center gap-3",
									children: [
										m && /* @__PURE__ */ z(_, {
											text: m,
											level: "critical"
										}),
										C && /* @__PURE__ */ z(v, {
											text: C.text,
											variant: C.variant
										}),
										I,
										L && /* @__PURE__ */ z(x, {
											size: "sm",
											label: te.ai.ask,
											onClick: L,
											icon: b
										}),
										N && /* @__PURE__ */ z(y, {
											items: N,
											align: "end",
											children: /* @__PURE__ */ z(g, {
												icon: a,
												label: "Actions",
												variant: "ghost",
												size: "sm",
												hideLabel: !0
											})
										})
									]
								})
							]
						}), e.comment && /* @__PURE__ */ B("div", {
							className: "flex flex-row items-center gap-3 overflow-visible",
							children: [/* @__PURE__ */ z(ee, { children: /* @__PURE__ */ z(T, { children: e.comment }) }), !!e.canBeBlurred && /* @__PURE__ */ z("span", { children: /* @__PURE__ */ z(g, {
								icon: ne ? o : s,
								hideLabel: !0,
								label: "hide/show",
								variant: "outline",
								onClick: re,
								size: "sm"
							}) })]
						})]
					})
				}),
				/* @__PURE__ */ B(E, {
					className: "flex h-full flex-col gap-4",
					children: [p && /* @__PURE__ */ z("div", {
						className: "flex flex-row",
						children: p.map((e, t) => /* @__PURE__ */ B("div", {
							className: "grow",
							children: [/* @__PURE__ */ z("div", {
								className: "mb-0.5 text-sm text-f1-foreground-secondary",
								children: e.label
							}), /* @__PURE__ */ B("div", {
								className: "flex flex-row items-end gap-0.5 text-2xl font-semibold",
								children: [
									!!e.prefixUnit && /* @__PURE__ */ z("div", {
										className: "text-lg font-medium",
										children: e.prefixUnit
									}),
									e.value,
									!!e.postfixUnit && /* @__PURE__ */ z("div", {
										className: "text-lg font-medium",
										children: e.postfixUnit
									})
								]
							})]
						}, t))
					}), M.Children.toArray(t).filter((e) => !!e && !(M.isValidElement(e) && e.type === M.Fragment && M.Children.count(e.props.children) === 0)).map((e, t) => /* @__PURE__ */ B(M.Fragment, { children: [t > 0 && /* @__PURE__ */ z(j, { bare: !0 }), e] }, t))]
				}),
				i && /* @__PURE__ */ z(D, {
					className: n(f),
					children: /* @__PURE__ */ z(g, {
						variant: $ ? "outline" : "neutral",
						size: $ ? "md" : "sm",
						...i
					})
				})
			]
		})
	});
}), X = L({ variants: { height: {
	sm: "h-36",
	md: "h-48",
	lg: "h-60"
} } }), Z = N(function({ header: e, height: t }, r) {
	return /* @__PURE__ */ B(w, {
		className: n("flex gap-4 border-f1-border-secondary", t === "full" && "h-full"),
		ref: r,
		"aria-live": "polite",
		"aria-busy": !0,
		children: [/* @__PURE__ */ z(O, {
			className: "-mr-1 -mt-1",
			children: /* @__PURE__ */ B("div", {
				className: "flex h-6 w-full flex-row items-center gap-1.5",
				"aria-hidden": !0,
				children: [e?.title ? /* @__PURE__ */ z(A, { children: e.title }) : /* @__PURE__ */ z(m, { className: "h-4 w-full max-w-16" }), e?.subtitle && /* @__PURE__ */ z(k, { children: e.subtitle })]
			})
		}), /* @__PURE__ */ z(E, {
			"aria-hidden": !0,
			className: n(t !== "full" && X({ height: t })),
			children: [...[
				,
				,
				,
				,
			]].map((e, t) => /* @__PURE__ */ z(m, { className: `mb-1 h-6 ${[
				"w-full",
				"w-1/2",
				"w-3/4",
				"w-1/4"
			][t]}` }, t))
		})]
	});
}), Q = e(t("Widget", C(Y, Z)));
//#endregion
export { Q as Widget, K as useWidgetIsWide };
