import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as n } from "../../../F0Button/internal.js";
import r from "../../../../icons/ai/ChangeTone.js";
import { AIEnhanceMenu as i } from "./EnhanceMenu.js";
import { memo as a, useEffect as ee, useLayoutEffect as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as te } from "react/jsx-runtime";
import { AnimatePresence as u, motion as d } from "motion/react";
import * as f from "@radix-ui/react-popover";
//#region src/components/RichText/internal/Enhance/EnhanceActivator.tsx
var p = a(function({ enhance: a, disabled: p, hideLabel: m, darkMode: h = !1, menuWidth: g, menuContainerRef: _, lockToViewportOnLock: v = !1, onOpenChange: y, hideReviewPanel: b = !1 }) {
	let { config: x, handleEnhanceWithAI: S, isLoading: C, isAcceptChangesOpen: w, acceptChanges: T, rejectChanges: E, retryChanges: ne, reviewAnchorTop: D } = a, O = t(), k = s(null), A = s(!1), j = s(!1), [M, N] = c(!1), [P, F] = c(0), [I, L] = c(-5), [R, z] = c(-P), [B, V] = c(g), [H, U] = c(null), [W, G] = c(null);
	o(() => {
		if (!M || q && A.current) return;
		let e = () => {
			if (!k.current) return;
			if (F(k.current.offsetHeight), !_?.current) {
				let e = g || k.current.offsetWidth || void 0;
				if (e) {
					let t = Math.min(e, window.innerWidth - 24), n = k.current.getBoundingClientRect(), r = n.left, i = Math.max(12, window.innerWidth - 12 - t);
					L(Math.round(Math.min(Math.max(r, 12), i) - n.left)), V(t);
				} else L(-5), V(g);
				z(-k.current.offsetHeight);
				return;
			}
			let e = k.current.getBoundingClientRect(), t = _.current.getBoundingClientRect(), n = _.current.offsetWidth || g || e.width, r = Math.min(n, window.innerWidth - 24), i = t.left, a = Math.max(12, window.innerWidth - 12 - r);
			L(Math.round(Math.min(Math.max(i, 12), a) - e.left)), z(Math.round(t.top - e.bottom)), V(r);
		}, t = requestAnimationFrame(e), n = new ResizeObserver(e);
		return k.current && n.observe(k.current), _?.current && n.observe(_.current), window.addEventListener("resize", e), () => {
			cancelAnimationFrame(t), n.disconnect(), window.removeEventListener("resize", e);
		};
	}, [
		M,
		_,
		g
	]);
	let K = (e) => {
		if (e.preventDefault(), !k.current) {
			A.current = !1, N(!1);
			return;
		}
		N((e) => {
			let t = !e;
			return A.current = t, t;
		});
	}, q = C || w;
	o(() => {
		q && A.current && N(!0);
	}, [q]), o(() => {
		let e = q && A.current, t = j.current;
		if (e && !t) {
			let e = k.current?.getBoundingClientRect();
			if (e && v) {
				let t = B, n = e.left + I, r = e.bottom + R + re;
				G({
					left: n,
					top: r,
					width: t
				});
			}
			U({
				alignOffset: I,
				sideOffset: R,
				menuWidth: B
			});
		}
		!e && t && (U(null), G(null), b && (A.current = !1, N(!1))), j.current = e;
	}, [
		q,
		I,
		R,
		B,
		b
	]), ee(() => {
		y?.(M);
	}, [M, y]);
	let J = H?.alignOffset ?? I, Y = H?.sideOffset ?? R, X = H?.menuWidth ?? B, re = 0, ie = v && q && A.current && !!W, Z = () => {
		A.current = !1, N(!1);
	}, Q = {
		onSelect: ({ selectedIntent: e, customIntent: t }) => {
			S(e, t);
		},
		enhancementOptions: x?.enhancementOptions || [],
		inputPlaceholder: O.richTextEditor.ai.customPromptPlaceholder,
		darkMode: h,
		menuWidth: X,
		menuState: C ? "loading" : w ? "review" : "idle",
		loadingLabel: O.richTextEditor.ai.loadingEnhanceLabel,
		onAccept: () => {
			T?.(), Z();
		},
		onReject: () => {
			E?.(), Z();
		},
		onRetry: ne,
		canShowOptions: !q,
		compactReview: v
	}, $ = (e) => {
		q && e.preventDefault();
	};
	return /* @__PURE__ */ te(f.Root, {
		open: M,
		modal: !1,
		onOpenChange: (e) => {
			!e && q || (e || (A.current = !1), N(e));
		},
		children: [/* @__PURE__ */ l(f.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ l(n, {
				pressed: M,
				variant: "ai",
				ref: k,
				icon: r,
				label: O.richTextEditor.ai.enhanceButtonLabel,
				onClick: K,
				disabled: p,
				hideLabel: m
			})
		}), /* @__PURE__ */ l(f.Portal, {
			container: document.body,
			children: /* @__PURE__ */ l(u, { children: M && !C && !(b && w) && (ie ? /* @__PURE__ */ l(d.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .95
				},
				transition: { duration: .15 },
				className: e(h && "dark"),
				style: {
					position: "fixed",
					left: W.left,
					top: w && D !== null ? Math.min(D + 8, window.innerHeight - 80) : W.top,
					width: v && w ? "fit-content" : W.width ? `${W.width}px` : void 0,
					zIndex: 9999
				},
				children: /* @__PURE__ */ l(i, { ...Q })
			}) : /* @__PURE__ */ l(f.Content, {
				side: "bottom",
				align: "start",
				sideOffset: Y + 0,
				alignOffset: J,
				collisionPadding: 10,
				onEscapeKeyDown: $,
				onPointerDownOutside: $,
				onInteractOutside: $,
				className: e(h && "dark"),
				style: { zIndex: 9999 },
				children: /* @__PURE__ */ l(d.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .95
					},
					transition: { duration: .15 },
					children: /* @__PURE__ */ l(i, { ...Q })
				})
			})) })
		})]
	});
});
//#endregion
export { p as EnhanceActivator };
