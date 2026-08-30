import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/Handle.js";
import { WIDGET_DRAG_END as r, WIDGET_DRAG_START as i } from "../../../../lib/dnd/widgetDragEvents.js";
import { DashboardItem as a } from "../DashboardItem/DashboardItem.js";
import { ChartItem as o, chartItemFitsContent as s } from "../ChartItem/ChartItem.js";
import { CollectionItem as c } from "../CollectionItem/CollectionItem.js";
import { MetricItem as l } from "../MetricItem/MetricItem.js";
import { useCallback as u, useEffect as d, useMemo as f, useRef as p, useState as m } from "react";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/DashboardGrid/DashboardGrid.tsx
var v = 12, y = 4, ee = 640, te = 4, b = {
	chart: 336,
	metric: 144,
	collection: 480
}, x = 336, S = {
	chart: 240,
	metric: 120,
	collection: 300
}, C = 120;
function w({ items: t, itemFilters: n, filters: a, editMode: o, onLayoutChange: c, resetKey: l, onTransformChart: h, onAskAi: b, onAskAiTarget: S, onFullscreenChange: C }) {
	let w = p(null), [T, re] = m(!1), [k, j] = m(null);
	d(() => {
		C?.(!!k);
	}, [k, C]);
	let P = f(() => {
		let e = /* @__PURE__ */ new Map();
		for (let n of t) e.set(n.id, n);
		return e;
	}, [t]), [F, I] = m(() => D(t)), L = p(O(t));
	d(() => {
		let e = O(t);
		e !== L.current && (L.current = e, I(D(t)));
	}, [t]);
	let R = p(l);
	d(() => {
		l !== void 0 && l !== R.current && (R.current = l, I(D(t)));
	}, [l, t]), d(() => {
		let e = w.current;
		if (!e) return;
		let t = new ResizeObserver((e) => {
			for (let t of e) re(t.contentRect.width < ee);
		});
		return t.observe(e), () => t.disconnect();
	}, []), d(() => {
		k && !P.has(k) && j(null);
	}, [k, P]);
	let z = u((e) => {
		if (!c) return;
		let t = [], n = 0;
		for (let r of e) {
			let e = Math.floor(12 / Math.max(1, r.ids.length)), i = Math.round(r.height / 48), a = r.height, o = 0;
			for (let s of r.ids) t.push({
				id: s,
				colSpan: e,
				rowSpan: i,
				itemHeight: a,
				x: o,
				y: n
			}), o += e;
			n += i;
		}
		c(t);
	}, [c]), ae = u((e, t) => {
		if (t <= 0) return;
		let n = Math.ceil(t);
		I((t) => {
			let r = t.findIndex((t) => t.ids.includes(e));
			if (r === -1 || t[r].height >= n) return t;
			let i = [...t];
			return i[r] = {
				...i[r],
				height: n
			}, i;
		});
	}, []), B = u((e) => {
		I((t) => {
			let n = t.map((t) => ({
				...t,
				ids: t.ids.filter((t) => t !== e)
			})).filter((e) => e.ids.length > 0);
			return z(n), n;
		});
	}, [z]), [V, H] = m(null), [U, W] = m(null), G = p(F);
	G.current = F;
	let K = p(P);
	K.current = P;
	let q = p(null), J = p(null);
	J.current = U;
	let Y = p(null), X = p([]), Z = p(null), oe = u((e, t) => {
		I((n) => {
			let r = n.map((t) => ({
				...t,
				ids: t.ids.filter((t) => t !== e)
			})), i = K.current.get(e), a = i ? M(i) : x;
			if (t.type === "new-row") r.splice(t.afterRowIdx + 1, 0, {
				ids: [e],
				height: a
			});
			else if (t.rowIdx >= r.length) r.push({
				ids: [e],
				height: a
			});
			else {
				let n = Math.min(t.position, r[t.rowIdx].ids.length);
				r[t.rowIdx].ids.splice(n, 0, e);
				let i = A(r[t.rowIdx], K.current);
				r[t.rowIdx].height < i && (r[t.rowIdx] = {
					...r[t.rowIdx],
					height: i
				});
			}
			return r = r.filter((e) => e.ids.length > 0), z(r), r;
		});
	}, [z]), Q = u((e, t) => {
		for (let n of X.current) {
			let r = n.getBoundingClientRect();
			if (e >= r.left && e <= r.right && t >= r.top && t <= r.bottom) return null;
		}
		let n = w.current ? Array.from(w.current.querySelectorAll("[data-dashboard-row]")) : [], r = G.current;
		if (n.length === 0 || n.length !== r.length) return null;
		let i = n.map((e) => e.getBoundingClientRect()), a = i.length - 1;
		for (let e = 0; e < i.length - 1; e++) if (t < (i[e].bottom + i[e + 1].top) / 2) {
			a = e;
			break;
		}
		let o = i[a], s = r[a], c = q.current, l = c ? s.ids.includes(c) : !1, u = o.height / 3;
		if (t < o.top + u) return {
			type: "new-row",
			afterRowIdx: a - 1
		};
		if (t > o.bottom - u) return {
			type: "new-row",
			afterRowIdx: a
		};
		if (l && s.ids.length === 1) return null;
		if (s.ids.length >= y && !l) return {
			type: "new-row",
			afterRowIdx: a
		};
		let d = n[a].querySelectorAll("[data-card-id]"), f = s.ids.length;
		for (let t = 0; t < d.length; t++) {
			let n = d[t].getBoundingClientRect();
			if (e < n.left + n.width / 2) {
				f = t;
				break;
			}
		}
		return {
			type: "into-row",
			rowIdx: a,
			position: f
		};
	}, []), se = u((e, t) => {
		if (typeof t.button == "number" && t.button !== 0) return;
		t.preventDefault(), t.stopPropagation();
		let n = t.clientX, a = t.clientY, o = !1;
		q.current = e, J.current = null, W(null);
		let s = (t) => {
			if (!o) {
				if (Math.hypot(t.clientX - n, t.clientY - a) < te) return;
				o = !0, H(e), X.current = Array.from(document.querySelectorAll("[data-ai-chat-dropzone]"));
				let r = K.current.get(e)?.title ?? "";
				r && window.dispatchEvent(new CustomEvent(i, { detail: {
					id: e,
					title: r,
					onAskAi: b,
					onAskAiTarget: S
				} }));
			}
			let r = Y.current;
			r && (r.style.transform = `translate(${t.clientX + 12}px, ${t.clientY + 16}px)`);
			let s = Q(t.clientX, t.clientY);
			JSON.stringify(s) !== JSON.stringify(J.current) && (J.current = s, W(s));
		}, c = (e) => {
			document.removeEventListener("pointermove", s), document.removeEventListener("pointerup", l), document.removeEventListener("pointercancel", u), Z.current = null;
			let t = q.current, n = J.current;
			e && o && t && n && oe(t, n), q.current = null, J.current = null, X.current = [], H(null), W(null), o && window.dispatchEvent(new CustomEvent(r));
		}, l = (e) => {
			o && (X.current = Array.from(document.querySelectorAll("[data-ai-chat-dropzone]")), J.current = Q(e.clientX, e.clientY)), c(!0);
		}, u = () => c(!1);
		Z.current = () => c(!1), document.addEventListener("pointermove", s), document.addEventListener("pointerup", l), document.addEventListener("pointercancel", u);
	}, [
		oe,
		b,
		S,
		Q
	]);
	d(() => () => Z.current?.(), []);
	let ce = u((e, t, n, r) => {
		let i = Math.max(A(F[e], P), r), a = (r) => {
			let a = Math.max(i, n + r.clientY - t);
			I((t) => t.map((t, n) => n === e ? {
				...t,
				height: a
			} : t));
		}, o = () => {
			document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", o), I((e) => (z(e), e));
		};
		document.addEventListener("mousemove", a), document.addEventListener("mouseup", o);
	}, [
		F,
		z,
		P
	]), le = T ? F.flatMap((e) => e.ids.map((t) => ({
		ids: [t],
		height: e.height
	}))) : F, $ = !!o && !T, ue = (e) => V && U?.type === "new-row" && U.afterRowIdx === e;
	if (t.length === 1) {
		let e = t[0];
		return /* @__PURE__ */ g("div", {
			ref: w,
			className: "flex h-full min-h-0 flex-col",
			children: /* @__PURE__ */ g(N, {
				item: e,
				itemFilters: n?.(e),
				filters: a,
				editMode: o,
				onDelete: B,
				onTransformChart: h,
				onAskAi: b,
				onAskAiTarget: S,
				isFullscreen: !0
			})
		});
	}
	if (k) {
		let t = P.get(k);
		if (t) {
			let r = t.type === "chart" && s(t);
			return /* @__PURE__ */ g("div", {
				ref: w,
				className: e("flex flex-col", r ? "min-h-full shrink-0" : "h-full min-h-0"),
				children: /* @__PURE__ */ g(N, {
					item: t,
					itemFilters: n?.(t),
					filters: a,
					editMode: o,
					onDelete: B,
					onTransformChart: h,
					onAskAi: b,
					onAskAiTarget: S,
					isFullscreen: !0,
					onFullscreenChange: (e) => j(e ? k : null)
				})
			});
		}
		return null;
	}
	return /* @__PURE__ */ _("div", {
		ref: w,
		className: "flex flex-col",
		style: { gap: v },
		children: [
			le.map((t, r) => {
				let i = V && U?.type === "into-row" && U.rowIdx === r, s = t.ids.some((e) => P.get(e)?.type === "collection");
				return /* @__PURE__ */ _("div", {
					className: "relative",
					children: [
						$ && /* @__PURE__ */ g(E, { active: !!ue(r - 1) }),
						/* @__PURE__ */ g("div", {
							"data-dashboard-row": "",
							className: e("flex rounded-lg transition-colors duration-200", i && "bg-f1-background-hover"),
							style: {
								gap: v,
								height: t.height,
								...s ? {
									overflowY: "clip",
									overflowX: "visible"
								} : {}
							},
							children: t.ids.map((e, r) => {
								let s = P.get(e);
								if (!s) return null;
								let c = V === e, l = i && U?.type === "into-row" && U.position === r, u = i && U?.type === "into-row" && U.position === t.ids.length && r === t.ids.length - 1;
								return /* @__PURE__ */ g(ne, {
									id: e,
									isDragging: c,
									showIndicatorBefore: !!l,
									showIndicatorAfter: !!u,
									draggable: $,
									onGripPointerDown: se,
									onContentHeightChange: ae,
									children: /* @__PURE__ */ g(N, {
										item: s,
										itemFilters: n?.(s),
										filters: a,
										editMode: o,
										onDelete: B,
										onTransformChart: h,
										onAskAi: b,
										onAskAiTarget: S,
										onFullscreenChange: (t) => j(t ? e : null)
									})
								}, e);
							})
						}),
						$ && /* @__PURE__ */ g("div", {
							className: "group/resize absolute -bottom-3.5 mx-auto flex h-3 w-full items-center justify-center hover:cursor-ns-resize",
							onMouseDown: (e) => {
								e.preventDefault();
								let n = e.currentTarget.parentElement?.querySelector("[data-dashboard-row]"), i = Math.max(n?.getBoundingClientRect().height ?? 0, t.height), a = new Set(t.ids.filter((e) => P.get(e)?.type !== "chart"));
								ce(r, e.clientY, i, ie(n, a));
							},
							children: /* @__PURE__ */ g("div", { className: "h-1 w-16 rounded-full bg-transparent transition-colors group-hover/resize:bg-f1-foreground-tertiary" })
						})
					]
				}, r);
			}),
			$ && /* @__PURE__ */ g(E, { active: !!ue(le.length - 1) }),
			V && /* @__PURE__ */ g("div", {
				ref: Y,
				className: "pointer-events-none fixed left-0 top-0 z-50 max-w-xs truncate rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-sm font-medium text-f1-foreground shadow-lg",
				style: { transform: "translate(-9999px, -9999px)" },
				children: P.get(V)?.title ?? ""
			})
		]
	});
}
function ne({ id: r, isDragging: i, showIndicatorBefore: a, showIndicatorAfter: o, draggable: s, onGripPointerDown: c, onContentHeightChange: l, children: u }) {
	let f = p(null);
	return d(() => {
		let e = f.current;
		if (!e) return;
		let t = !1, n = !1, i = () => {
			n = !1, !t && l(r, e.scrollHeight > e.clientHeight + 1 ? e.scrollHeight : 0);
		}, a = () => {
			n || (n = !0, queueMicrotask(i));
		};
		i();
		let o = new ResizeObserver(a);
		o.observe(e);
		let s = new MutationObserver(a);
		return s.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0,
			attributes: !0
		}), () => {
			t = !0, o.disconnect(), s.disconnect();
		};
	}, [r, l]), /* @__PURE__ */ _(h, { children: [
		a && /* @__PURE__ */ g(T, {}),
		/* @__PURE__ */ _("div", {
			ref: f,
			"data-card-id": r,
			className: e("group/rowitem relative min-w-0 flex-1 transition-opacity duration-150", i && "opacity-40 scale-[0.97]"),
			children: [s && /* @__PURE__ */ g("div", {
				onPointerDown: (e) => c(r, e),
				className: "shadow-sm absolute -left-3 top-2.5 z-20 flex cursor-grab touch-none items-center justify-center rounded bg-f1-background p-2 opacity-0 transition-opacity hover:bg-f1-background-hover active:cursor-grabbing group-hover/rowitem:opacity-100",
				"aria-label": "Drag to reorder",
				children: /* @__PURE__ */ g(t, {
					icon: n,
					size: "xs"
				})
			}), u]
		}),
		o && /* @__PURE__ */ g(T, {})
	] });
}
function T() {
	return /* @__PURE__ */ g("div", {
		className: "mx-[-2px] w-1 flex-shrink-0 self-stretch py-2",
		children: /* @__PURE__ */ g("div", { className: "h-full w-full rounded-full bg-f1-background-secondary-hover" })
	});
}
function E({ active: t }) {
	return /* @__PURE__ */ g("div", {
		className: "pointer-events-none relative flex items-center justify-center transition-all",
		style: { minHeight: t ? 12 : 0 },
		children: /* @__PURE__ */ g("div", { className: e("absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full transition-colors", t ? "bg-f1-background-secondary-hover" : "bg-transparent") })
	});
}
function D(e) {
	return e.some((e) => e.y !== void 0) ? re(e) : k(e);
}
function O(e) {
	return JSON.stringify(e.map((e) => [
		e.id,
		e.type,
		e.itemHeight ?? null,
		e.rowSpan ?? null,
		e.x ?? null,
		e.y ?? null,
		e.colSpan ?? null
	]));
}
function re(e) {
	let t = [...e].sort((e, t) => (e.y ?? 0) - (t.y ?? 0) || (e.x ?? 0) - (t.x ?? 0)), n = /* @__PURE__ */ new Map();
	for (let e of t) {
		let t = e.y ?? 0, r = M(e), i = n.get(t);
		i || (i = {
			ids: [],
			maxHeight: 0
		}, n.set(t, i)), i.ids.push(e.id), r > i.maxHeight && (i.maxHeight = r);
	}
	return [...n.entries()].sort(([e], [t]) => e - t).map(([, e]) => ({
		ids: e.ids,
		height: e.maxHeight
	}));
}
function k(e) {
	let t = [], n = [], r = 0, i = 0;
	for (let a of e) {
		let e = j(a), o = M(a);
		r + e > y && n.length > 0 && (t.push({
			ids: n,
			height: i
		}), n = [], r = 0, i = 0), n.push(a.id), r += e, o > i && (i = o);
	}
	return n.length > 0 && t.push({
		ids: n,
		height: i
	}), t;
}
function A(e, t) {
	let n = C;
	for (let r of e.ids) {
		let e = t.get(r);
		if (!e) continue;
		let i = S[e.type] ?? C;
		i > n && (n = i);
	}
	return n;
}
function ie(e, t) {
	if (!e || t.size === 0) return 0;
	let n = e.style.height, r = e.style.minHeight, i = () => {
		let n = 0;
		for (let r of Array.from(e.querySelectorAll("[data-card-id]"))) {
			let e = r.dataset.cardId;
			e && t.has(e) && (n = Math.max(n, r.scrollHeight));
		}
		return n;
	};
	e.style.minHeight = "0px", e.style.height = "0px";
	let a = i();
	e.style.height = `${a}px`;
	let o = Math.max(a, i());
	return e.style.height = n, e.style.minHeight = r, o;
}
function j(e) {
	return e.type === "metric" ? 1 : e.type === "chart" ? 2 : e.type === "collection" ? y : 2;
}
function M(e) {
	return e.itemHeight && e.itemHeight > 0 ? e.itemHeight : e.rowSpan ? e.rowSpan * 48 : b[e.type] ?? x;
}
function N({ item: e, filters: t, actions: n, itemFilters: r, editMode: i, onDelete: s, onTransformChart: u, onAskAi: d, onAskAiTarget: f, isFullscreen: p, onFullscreenChange: m }) {
	switch (e.type) {
		case "chart": return /* @__PURE__ */ g(o, {
			item: e,
			filters: t,
			actions: n,
			itemFilters: r,
			editMode: i,
			handleDelete: s,
			onAskAi: d,
			onAskAiTarget: f,
			onTransformChart: u,
			isFullscreen: p,
			onFullscreenChange: m
		});
		case "metric": return /* @__PURE__ */ g(l, {
			item: e,
			filters: t,
			actions: n,
			itemFilters: r,
			editMode: i,
			handleDelete: s,
			onAskAi: d,
			onAskAiTarget: f,
			isFullscreen: p,
			onFullscreenChange: m
		});
		case "collection": return /* @__PURE__ */ g(c, {
			item: e,
			filters: t,
			actions: n,
			itemFilters: r,
			editMode: i,
			handleDelete: s,
			onAskAi: d,
			onAskAiTarget: f,
			isFullscreen: p,
			onFullscreenChange: m
		});
		default: {
			let t = e;
			return /* @__PURE__ */ g(a, {
				title: t.title ?? "Unknown",
				isLoading: !1,
				error: /* @__PURE__ */ Error(`Unknown dashboard item type: "${t.type}"`),
				children: null
			});
		}
	}
}
//#endregion
export { w as DashboardGrid };
