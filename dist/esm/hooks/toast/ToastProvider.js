import { cn as e } from "../../lib/utils.js";
import { F0Toast as t } from "../../ui/Toast/F0Toast.js";
import { useIsMobile as n } from "../../lib/useIsDesktop.js";
import { toastStore as r } from "./store.js";
import { Fragment as i, useCallback as a, useEffect as o, useMemo as s, useRef as c, useState as l, useSyncExternalStore as u } from "react";
import { createPortal as d } from "react-dom";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { AnimatePresence as h, motion as g } from "motion/react";
import { useIsomorphicLayoutEffect as _ } from "usehooks-ts";
//#region src/hooks/toast/ToastProvider.tsx
var v = { "bottom-center": "items-end justify-center" }, y = "#content", b = 3, x = 2, S = 3, C = 400, w = ({ items: n, isTransitioning: r, promotingIds: i, onHoverChange: a }) => {
	let [s, u] = l(!1), d = c(!1), f = c(/* @__PURE__ */ new Set());
	for (let e of i) f.current.add(e);
	let m = new Set(n.map((e) => e.id));
	for (let e of f.current) m.has(e) || f.current.delete(e);
	let _ = Math.min(n.length * 15, 150), v = Math.min(n.length * 2, 10);
	o(() => {
		if (r) {
			d.current = !0, u(!1);
			let e = setTimeout(() => {
				d.current = !1;
			}, C);
			return () => clearTimeout(e);
		}
	}, [r]);
	let y = () => {
		d.current || u(!0);
	};
	if (o(() => {
		a?.(s);
	}, [s]), n.length === 0) return null;
	let b = n.filter((e) => !f.current.has(e.id)).length;
	return b === 0 ? null : /* @__PURE__ */ p("div", {
		className: "pointer-events-auto relative z-[101] mb-4 flex flex-col gap-4",
		onMouseEnter: y,
		onMouseLeave: () => u(!1),
		children: /* @__PURE__ */ p(h, { children: (() => {
			let r = 0;
			return n.map((n) => {
				if (f.current.has(n.id)) return /* @__PURE__ */ p(g.div, {
					style: {
						position: "absolute",
						width: 0,
						height: 0,
						overflow: "hidden",
						opacity: 0,
						pointerEvents: "none"
					},
					exit: { transition: { duration: 0 } }
				}, n.id);
				let i = r;
				r++;
				let a = Math.min(i, 2), o = i < S;
				return /* @__PURE__ */ p(g.div, {
					initial: {
						opacity: 0,
						x: -60,
						scale: 1 - a * .05
					},
					animate: s ? "expanded" : "stacked",
					exit: {
						opacity: 0,
						scale: .5,
						transition: { duration: .2 }
					},
					variants: {
						stacked: {
							x: 0,
							y: a * -10,
							scale: o ? 1 - a * .05 : .9,
							opacity: +!!o,
							zIndex: b - i,
							height: i === 0 ? "auto" : 0
						},
						expanded: {
							x: 0,
							y: 0,
							scale: 1,
							opacity: 1,
							zIndex: i + 1,
							height: "auto"
						}
					},
					style: { order: s ? b - 1 - i : 0 },
					transition: {
						type: "spring",
						stiffness: 500 - _,
						damping: 40 + v
					},
					className: e(!s && i > 0 && "absolute top-0 left-0 right-0"),
					children: /* @__PURE__ */ p(t, {
						...n,
						forcePauseTimer: !0
					})
				}, n.id);
			});
		})() })
	});
}, T = ({ items: r, position: i = "bottom-center" }) => {
	let u = n(), [d, f] = l({ inset: 0 }), S = c(/* @__PURE__ */ new Set()), T = c(/* @__PURE__ */ new Set()), E = c(/* @__PURE__ */ new Set()), [D, O] = l(!1), k = c(null), A = c(null), j = c(0), { stackedItems: M, activeItems: N } = s(() => {
		let e = r.length, t = Math.min(e, u ? x : b), n = r.slice(0, t);
		return {
			stackedItems: r.slice(t),
			activeItems: n
		};
	}, [r, u]), P = new Set(M.map((e) => e.id)), F = /* @__PURE__ */ new Set();
	for (let e of S.current) !P.has(e) && N.some((t) => t.id === e) && F.add(e);
	S.current = P, T.current = F;
	for (let e of F) E.current.add(e);
	for (let e of E.current) N.some((t) => t.id === e) || E.current.delete(e);
	let I = E.current.size === 0 ? M : [...N.filter((e) => E.current.has(e.id)), ...M];
	if (F.size > 0 && k.current && A.current) {
		let e = k.current.getBoundingClientRect(), t = A.current.getBoundingClientRect();
		j.current = e.top - t.top;
	}
	o(() => {
		if (F.size > 0) {
			O(!0);
			let e = setTimeout(() => O(!1), C);
			return () => clearTimeout(e);
		}
	}, [M, N]);
	let L = r.length > 0, [R, z] = l(!1), B = a((e) => {
		z(e);
	}, []);
	return _(() => {
		if (typeof document > "u" || !L) return;
		let e = document.querySelector(y);
		if (!e) {
			f({ inset: 0 });
			return;
		}
		let t = () => {
			let t = e.getBoundingClientRect();
			f({
				left: t.left,
				top: t.top,
				width: t.width,
				height: t.height
			});
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), window.addEventListener("resize", t), window.addEventListener("scroll", t, !0), () => {
			n.disconnect(), window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0);
		};
	}, [L]), /* @__PURE__ */ p("div", {
		className: e("pointer-events-none fixed z-[100] flex overflow-x-hidden overflow-y-auto", v[i]),
		style: d,
		children: /* @__PURE__ */ p(h, { children: L && /* @__PURE__ */ m("div", {
			className: "flex w-full flex-col p-6 sm:w-96",
			children: [/* @__PURE__ */ p("div", {
				ref: k,
				children: /* @__PURE__ */ p(w, {
					items: I,
					isTransitioning: D,
					promotingIds: T.current,
					onHoverChange: B
				})
			}), /* @__PURE__ */ p("div", {
				ref: A,
				className: "relative flex flex-col-reverse gap-4",
				children: /* @__PURE__ */ p(h, {
					mode: "popLayout",
					children: N.map((e) => {
						let n = T.current.has(e.id);
						return /* @__PURE__ */ p(g.div, {
							layout: "position",
							initial: n ? {
								opacity: 1,
								x: 0,
								y: j.current,
								scale: 1
							} : {
								opacity: 0,
								x: -60,
								scale: .95
							},
							animate: {
								opacity: 1,
								x: 0,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .9,
								transition: { duration: .2 }
							},
							children: /* @__PURE__ */ p(t, {
								...e,
								forcePauseTimer: R
							})
						}, e.id);
					})
				})
			})]
		}, "toast-panel") })
	});
}, E = ({ children: e, portalTargets: t = {
	mobile: "#f0-overlay-root",
	desktop: "#f0-overlay-root"
} }) => {
	let a = u(r.subscribe, r.getSnapshot, r.getServerSnapshot), [s, h] = l(!1);
	o(() => {
		h(!0);
	}, []);
	let g = c(null), _ = u(r.subscribeRenderer, r.getActiveRendererId, () => null);
	o(() => {
		let { id: e, release: t } = r.acquireRenderer();
		return g.current = e, t;
	}, []);
	let v = _ === g.current, y = n(), [b, x] = l(null), [S, C] = l(0), w = c(null);
	return o(() => {
		if (typeof document > "u") return;
		let e = y ? t?.mobile || "body" : t?.desktop || "body", n = document.querySelector(e) ?? document.body;
		w.current !== n && (w.current = n, C((e) => e + 1)), x(n);
	}, [
		y,
		t?.mobile,
		t?.desktop
	]), /* @__PURE__ */ m(f, { children: [v && s && typeof document < "u" && b != null && d(/* @__PURE__ */ p(i, { children: /* @__PURE__ */ p(T, { items: a }) }, S), b), e] });
};
//#endregion
export { E as ToastProvider };
