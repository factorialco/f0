import { cn as e } from "../../../lib/utils.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import { ScrollArea as n } from "../../scrollarea.js";
import { Spinner as r } from "../../Spinner/index.js";
import { F0DialogContext as i } from "../../../patterns/F0Dialog/components/F0DialogProvider.js";
import { SelectContext as a } from "../SelectContext.js";
import { Content as o, Listbox as s, Portal as c, Viewport as l } from "./radix-ui/select.js";
import { forwardRef as u, useContext as d, useEffect as f, useMemo as p, useRef as m, useState as h } from "react";
import { Fragment as ee, jsx as g, jsxs as _ } from "react/jsx-runtime";
import { useVirtualizer as v } from "@tanstack/react-virtual";
//#region src/ui/Select/components/SelectContent.tsx
var te = 8, ne = [
	"a[href]",
	"button:not([disabled])",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(","), y = u(({ items: u = void 0, className: y, children: b, position: x = "popper", taller: re = !1, emptyMessage: ie, emptyAction: S, onScrollBottom: ae, onScrollTop: oe, isLoadingMore: C, isLoading: se, scrollMargin: ce, forceMinHeight: w, fitContentWidth: T = !1, showLoadingIndicator: le, asChild: ue, portalContainer: E, bottom: D, "aria-label": O, "aria-labelledby": k, "aria-describedby": A, ...j }, de) => {
	let M = d(i), fe = M.portalContainer && (M.position === "center" || M.position === "fullscreen"), N = E === void 0 ? fe ? M.portalContainer : void 0 : E, P = m(null), F = m(null), I = Array.isArray(u), L = p(() => I ? u.every((e) => !e.value && e.type !== "group-header") : !b, [
		I,
		u,
		b
	]), R = t(), [z, B] = h(R), [V, H] = h(!1), { value: U, open: W, as: pe } = d(a), G = pe === "list", K = p(() => new Set((Array.isArray(U) ? U : [U]).filter((e) => e !== void 0)), [U]), q = p(() => u?.findIndex((e) => e.value !== void 0 && K.has(e.value)) ?? -1, [u, K]), J = v({
		count: u?.length || 0,
		getScrollElement: () => P.current,
		estimateSize: (e) => u?.[e]?.height || 0,
		getItemKey: (e) => u?.[e]?.key ?? e,
		overscan: 5,
		measureElement: (e) => Math.round(e.getBoundingClientRect().height),
		enabled: G || R || V
	});
	f(() => {
		W || (H(!1), B(!0));
	}, [W]), f(() => {
		G || J.measure();
	}, [
		J,
		V,
		G
	]);
	let Y = m(!1);
	f(() => {
		!W && !G && (Y.current = !1);
	}, [W, G]), f(() => {
		Y.current || q < 0 || !W && !G || (Y.current = !0, J.scrollToIndex(q));
	}, [
		G,
		W,
		q,
		J
	]);
	let X = J.getVirtualItems(), me = (e) => {
		if (j.onKeyDown?.(e), e.defaultPrevented || e.key !== "Tab") return;
		let t = e.target, n = e.currentTarget, r = t.closest("[role=\"option\"]");
		r && r.getAttribute("aria-disabled") !== "true" && (F.current = r);
		let i = r ?? (F.current?.isConnected ? F.current : n.querySelector("[role=\"option\"][data-highlighted]:not([aria-disabled=\"true\"]), [role=\"option\"][data-state=\"checked\"]:not([aria-disabled=\"true\"]), [role=\"option\"]:not([aria-disabled=\"true\"])")), a = Array.from(n.querySelectorAll(ne)).filter((e) => (e.tabIndex >= 0 || e.getAttribute("role") === "searchbox") && !e.matches("[data-radix-scroll-area-viewport]") && !e.closest("[hidden], [aria-hidden=\"true\"], [inert], [role=\"listbox\"]")), o = !r && t !== n && !t.closest("[role=\"listbox\"]") ? t : void 0, s = Array.from(/* @__PURE__ */ new Set([
			...a,
			...i ? [i] : [],
			...o ? [o] : []
		])).sort((e, t) => e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1), c = r ?? t, l = s.indexOf(c), u = l >= 0 ? s[l + (e.shiftKey ? -1 : 1)] : void 0;
		u && (e.preventDefault(), u.focus());
	}, Z = L ? /* @__PURE__ */ g("div", {
		className: "flex h-full w-full flex-col items-center justify-center p-2",
		children: /* @__PURE__ */ g("div", {
			role: "option",
			"aria-disabled": "true",
			children: /* @__PURE__ */ g("p", {
				className: "text-center",
				children: ie || "-"
			})
		})
	}) : I ? /* @__PURE__ */ g("div", {
		className: e(!G && "transition-opacity delay-100", G || z ? "" : "opacity-0", !G && w ? "min-h-[412px]" : ""),
		style: {
			height: J.getTotalSize() + te,
			width: "100%",
			position: "relative",
			overflow: "visible",
			flex: "none"
		},
		children: /* @__PURE__ */ g("div", {
			role: "presentation",
			style: {
				top: 0,
				left: 0,
				width: "100%",
				transform: `translateY(${X[0]?.start ?? 0}px)`
			},
			children: X.map((e, t) => /* @__PURE__ */ g("div", {
				role: "presentation",
				"data-index": e.index,
				ref: J.measureElement,
				children: C && t === X.length - 1 ? /* @__PURE__ */ g("div", {
					className: "flex w-full items-center justify-center py-4",
					children: /* @__PURE__ */ g(r, { size: "small" })
				}) : u[e.index].item
			}, e.key))
		})
	}) : /* @__PURE__ */ g("div", { children: b }), Q = se && !C, $ = /* @__PURE__ */ g(o, {
		ref: de,
		asChild: ue,
		disableScrollLock: G || !!N,
		className: e("relative z-50 text-f1-foreground", G ? "flex w-full h-full flex-col" : "flex min-w-[8rem] flex-col overflow-hidden", !G && "rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2", !G && x === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", !G && x === "popper" && !w && (T ? "w-max min-w-[var(--radix-select-trigger-width)]" : "min-w-80 w-[var(--radix-select-trigger-width)]"), !G && x === "popper" && w && "min-w-[32rem] w-[calc(var(--radix-select-trigger-width)+12rem)]", !G && (re ? "max-h-[412px]" : "max-h-[320px]"), !G && I && !z && "opacity-0", y),
		position: G ? "item-aligned" : x,
		side: G ? void 0 : "bottom",
		sideOffset: G ? void 0 : 4,
		collisionPadding: 16,
		avoidCollisions: !0,
		...j,
		onKeyDown: me,
		onCloseAutoFocus: (e) => {
			j.onCloseAutoFocus && typeof j.onCloseAutoFocus == "function" && j.onCloseAutoFocus(e), e.preventDefault();
		},
		onAnimationStart: () => {
			H(!0), setTimeout(() => {
				J.scrollToIndex(q, { align: "center" }), B(!0);
			});
		},
		children: /* @__PURE__ */ _("div", {
			className: "flex min-h-0 flex-1 flex-col",
			style: G ? void 0 : {
				maxHeight: "var(--radix-select-content-available-height, 100%)",
				...w ? { minHeight: "min(412px, var(--radix-select-content-available-height, 412px))" } : {}
			},
			children: [
				G && !j.right && /* @__PURE__ */ g("div", {
					className: "flex-shrink-0",
					children: j.top
				}),
				/* @__PURE__ */ _("div", {
					className: "flex min-h-0 flex-1 flex-row overflow-hidden",
					children: [/* @__PURE__ */ _("div", {
						className: e("relative flex flex-1 min-h-0 min-w-0 flex-col overflow-hidden", G && "flex flex-col overflow-hidden flex-1 min-h-0"),
						children: [
							(!G || j.right) && j.top,
							le && Q && /* @__PURE__ */ g("div", {
								className: "absolute inset-0 flex cursor-progress items-center justify-center",
								"aria-live": "polite",
								"aria-busy": "true",
								children: /* @__PURE__ */ g(r, {})
							}),
							/* @__PURE__ */ g(n, {
								viewportRef: P,
								className: e("flex h-full flex-col", L ? "justify-center" : "pb-1", Q && "select-none opacity-10 transition-opacity"),
								onScrollBottom: ae,
								onScrollTop: oe,
								scrollMargin: ce,
								children: G ? /* @__PURE__ */ g(s, {
									asChild: !0,
									"aria-label": O,
									"aria-labelledby": k,
									"aria-describedby": A,
									children: /* @__PURE__ */ g("div", {
										className: "min-h-0 p-1",
										children: Z
									})
								}) : /* @__PURE__ */ g(s, {
									asChild: !0,
									"aria-label": O,
									"aria-labelledby": k,
									"aria-describedby": A,
									children: /* @__PURE__ */ g(l, {
										asChild: !0,
										className: e("p-1", x === "popper" && "h-[var(--radix-select-trigger-height)] w-full", L && "flex h-full"),
										children: Z
									})
								})
							})
						]
					}), j.right]
				}),
				L && S || D ? /* @__PURE__ */ _("div", {
					className: "shrink-0",
					children: [L && S && /* @__PURE__ */ g("div", {
						className: "w-full border-0 border-t border-solid border-f1-border-secondary p-2",
						children: S
					}), D]
				}) : null
			]
		})
	});
	return G ? $ : /* @__PURE__ */ g(c, {
		container: N,
		children: /* @__PURE__ */ _(ee, { children: [W && !N && /* @__PURE__ */ g("div", {
			className: "pointer-events-auto fixed inset-0 z-40",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation();
			}
		}), $] })
	});
});
y.displayName = o.displayName;
//#endregion
export { y as SelectContent };
