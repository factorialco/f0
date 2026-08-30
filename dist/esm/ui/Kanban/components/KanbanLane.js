import { cn as e } from "../../../lib/utils.js";
import { monitorForElements as t } from "../../../_embedded/BeMnDuG8.js";
import "../../../_embedded/nR-CGXgB.js";
import { useDndEvents as n, useDroppableList as r } from "../../../lib/dnd/hooks.js";
import { Lane as i } from "../../Lane/Lane.js";
import { findTypeOfDropForLane as a, optimisticDifferentLaneInsertOverCard as o, optimisticDifferentLaneInsertOverEmpty as s, optimisticSameLaneOverCard as c, optimisticSameLaneOverEmpty as l } from "./kanbanLane.handlers.js";
import { cloneElement as u, isValidElement as d, useEffect as f, useLayoutEffect as p, useRef as m, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/ui/Kanban/components/KanbanLane.tsx
function v({ id: v, getLaneResourceIndexById: y, onMove: b, heightMode: x = "fill", ...S }) {
	let C = m(null), w = m(null), T = m(null), [E, D] = h(!1), [O, k] = h(null), A = !!(v && y), j = m(null), M = m(null), N = m(null), P = m(0), F = m(null), [I, L] = h(!1), [R, z] = h(null), [B, V] = h(null), [H, U] = h(!1), [W, G] = h(-1);
	return r(A ? {
		ref: C,
		id: v,
		accepts: ["list-card"]
	} : void 0), f(() => {
		let e = () => {
			let t = performance.now(), n = (t - (F.current ?? t)) / 1e3;
			F.current = t;
			let r = M.current;
			if (!I || P.current === 0) {
				N.current != null && (window.cancelAnimationFrame(N.current), N.current = null), F.current = null;
				return;
			}
			r && (r.scrollTop += P.current * n), N.current = window.requestAnimationFrame(e);
		};
		return N.current == null && I && P.current !== 0 && (F.current = null, N.current = window.requestAnimationFrame(e)), () => {
			N.current != null && (window.cancelAnimationFrame(N.current), N.current = null), F.current = null, P.current = 0;
		};
	}, [I]), f(() => {
		if (!v) return;
		let e = () => {
			N.current == null && P.current !== 0 && (F.current = null, N.current = window.requestAnimationFrame(() => {
				let e = performance.now();
				F.current = e, N.current = window.requestAnimationFrame(function e() {
					let t = F.current ?? performance.now(), n = performance.now(), r = (n - t) / 1e3;
					F.current = n;
					let i = M.current;
					if (!I || P.current === 0) {
						N.current != null && (window.cancelAnimationFrame(N.current), N.current = null);
						return;
					}
					i && (i.scrollTop += P.current * r), N.current = window.requestAnimationFrame(e);
				});
			}));
		}, n = (e) => a(v, e);
		return t({
			onDropTargetChange: ({ location: t, source: n }) => {
				let r = t.current.dropTargets.some((e) => {
					let t = e.data;
					return t.type === "list-droppable" && t.id === v;
				});
				D(r);
				let i = String(n.data.id), a = String(n.data.data?.laneId ?? "") || String(t.initial.dropTargets.find((e) => e.data.type === "list-droppable")?.data?.id ?? ""), o = String(a) === String(v), s = S.items.findIndex((e, t) => String(S.getKey(e, t)) === i);
				if (r && o ? G(s) : (!r || !o) && G(-1), r && I && S.items.length === 0 ? (U(!0), z(null), V(null)) : r && I && S.items.length > 0 && U(!1), r && I) {
					let n = M.current || C.current;
					if (n) {
						let r = n.getBoundingClientRect(), i = t.current.input?.clientY, a = t.current.input?.clientX;
						if (typeof i == "number" && typeof a == "number") {
							let n = i - (r.top + r.height / 2), a = r.height / 2, c = 0;
							if (Math.abs(n) > 24) {
								let e = Math.min(Math.abs(n) - 24, a) / a;
								c = Math.sign(n) * 300 * e;
							}
							if (P.current = c, e(), t.current.dropTargets.some((e) => e.data.type === "list-card-target")) (R !== null || B !== null) && (z(null), V(null));
							else {
								let e = C.current;
								if (e) {
									let t = Array.from(e.querySelectorAll(`[data-kanban-card="true"][data-lane-id="${v}"]`));
									if (t.length > 0) {
										let e = -1, n = Infinity, r = "top";
										for (let a of t) {
											let t = a.getAttribute("data-index"), o = t ? Number(t) : -1, s = a.getBoundingClientRect(), c = s.top + s.height / 2, l = Math.abs(i - c);
											l < n && (n = l, e = o, r = i < c ? "top" : "bottom");
										}
										o && s >= 0 && (e === s && r === "top" || e === s && r === "bottom" || e === s - 1 && r === "bottom" || e === s + 1 && r === "top") ? (z(null), V(null)) : (z(e >= 0 ? e : null), V(e >= 0 ? r : null));
									}
								}
							}
						}
					}
				} else P.current = 0, r || (z(null), V(null), U(!1), G(-1));
			},
			onDrop: async ({ location: e, source: t }) => {
				D(!1), U(!1);
				let r = String(t.data.id), i = t.data.data, a = S.items.findIndex((e, t) => String(S.getKey(e, t)) === r), u = String(t.data.data?.laneId ?? "") || String(e.initial.dropTargets.find((e) => e.data.type === "list-droppable")?.data?.id ?? ""), d = String(u) !== String(v);
				if (!d && a >= 0) {
					let t = e.current.dropTargets.find((e) => e.data.type === "list-card-target");
					if (t) {
						let e = t.data.index, n = t.data.closestEdge;
						if (e !== void 0 && n) {
							let t = !1;
							if ((e === a || e === a - 1 && n === "bottom" || e === a + 1 && n === "top") && (t = !0), t) return;
						}
					}
				}
				if (!d && R !== null && B !== null && (R === a && B === "top" || R === a && B === "bottom" || R === a - 1 && B === "bottom" || R === a + 1 && B === "top")) {
					z(null), V(null);
					return;
				}
				if (!e.current.dropTargets.some((e) => {
					let t = e.data;
					return t.type === "list-droppable" && t.id === v;
				})) return;
				let f = null, { type: p, cardTarget: m } = n(e.current.dropTargets);
				if (f = d ? m && m.data ? o({
					cardTarget: m,
					sourceItem: i,
					fromLaneId: u,
					toLaneId: v,
					sourceId: r,
					setItems: () => {}
				}) : R !== null && B ? {
					fromLaneId: u,
					toLaneId: v,
					sourceId: r,
					indexOfTarget: R,
					position: B === "bottom" ? "below" : "above"
				} : s({
					sourceItem: i,
					fromLaneId: u,
					toLaneId: v,
					sourceId: r,
					setItems: () => {}
				}) : p === "sameLaneOverCard" && m && m.data ? c({
					resourceIndexOnLane: a,
					cardTarget: m,
					sourceItem: i,
					fromLaneId: u,
					toLaneId: v,
					sourceId: r,
					setItems: () => {}
				}) : R !== null && B ? {
					fromLaneId: u,
					toLaneId: v,
					sourceId: r,
					indexOfTarget: R,
					position: B === "bottom" ? "below" : "above"
				} : l({
					resourceIndexOnLane: a,
					sourceItem: i,
					fromLaneId: u,
					toLaneId: v,
					sourceId: r,
					setItems: () => {}
				}), f) {
					if (!d && f.indexOfTarget !== void 0) {
						let e = f.indexOfTarget, t = f.position;
						if (e === a && t === "above" || e === a && t === "below" || e === a - 1 && t === "below" || e === a + 1 && t === "above") return;
					}
					await b?.(f), z(null), V(null);
				}
			}
		});
	}, [
		v,
		y,
		b,
		I,
		S.items,
		S.getKey,
		R,
		B
	]), f(() => {
		let e = () => {
			let e = C.current;
			return e ? (M.current = e.querySelector("[data-scroll-container]"), M.current) : null;
		};
		e();
		let t = C.current;
		if (!t) return;
		let n = new MutationObserver(() => {
			e();
		});
		return n.observe(t, {
			subtree: !0,
			childList: !0
		}), () => n.disconnect();
	}, [v]), n(({ phase: e }) => {
		e === "start" && L(!0), (e === "drop" || e === "cancel") && (L(!1), U(!1), z(null), V(null), G(-1));
	}), f(() => {
		let e = (e) => {
			if (!v) return;
			let t = e.detail;
			t && t.toLaneId === v && b?.(t).catch(() => {});
		};
		return window.addEventListener("kanban-test-move", e), () => window.removeEventListener("kanban-test-move", e);
	}, [v, b]), p(() => {
		if (x === "content") {
			k(null);
			return;
		}
		let e = T.current, t = w.current;
		if (!e || !t) return;
		let n = null, r = null, i = () => {
			let n = t.parentElement?.parentElement;
			if (!n) return;
			let i = n.offsetHeight, a = t.style.height;
			t.style.height = "auto", e.offsetHeight;
			let o = e.scrollHeight;
			t.style.height = a;
			let s;
			s = i < 100 ? Math.max(o, 400) : Math.min(o, i), (r === null || Math.abs(s - r) > 1) && (r = s, k(s));
		};
		i();
		let a = new ResizeObserver(() => {
			n !== null && cancelAnimationFrame(n), n = requestAnimationFrame(() => {
				i(), n = null;
			});
		});
		a.observe(e);
		let o = t.parentElement?.parentElement;
		return o && a.observe(o), () => {
			n !== null && cancelAnimationFrame(n), a.disconnect();
		};
	}, [
		S.items.length,
		S.loading,
		H,
		x
	]), /* @__PURE__ */ g("div", {
		ref: w,
		className: e("relative rounded", x === "content" && "h-full"),
		style: { height: O ? `${O}px` : void 0 },
		children: /* @__PURE__ */ _("div", {
			ref: C,
			className: "relative flex h-full w-full flex-col gap-0 rounded-xl border transition-colors",
			style: { backgroundColor: E ? "hsla(210, 91%, 22%, 0.08)" : "hsla(210, 91%, 22%, 0.02)" },
			children: [/* @__PURE__ */ g("div", {
				ref: j,
				className: e("pointer-events-none absolute inset-0 z-[1]", "bg-transparent"),
				"aria-hidden": !0
			}), /* @__PURE__ */ g("div", {
				ref: T,
				className: "flex h-full flex-col",
				children: /* @__PURE__ */ g(i, {
					...S,
					dropPlaceholderIndex: H && S.items.length === 0 ? 0 : void 0,
					renderCard: (e, t) => {
						let n = S.renderCard(e, t);
						if (d(n)) {
							let e = t === R ? B : null, r = [];
							return W >= 0 && (t === W ? r.push("top", "bottom") : t === W - 1 ? r.push("bottom") : t === W + 1 && r.push("top")), u(n, {
								forcedEdge: e,
								disabledEdges: r
							});
						}
						return n;
					}
				})
			})]
		})
	});
}
//#endregion
export { v as KanbanLane };
