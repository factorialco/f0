import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { ScrollArea as i } from "../../../ui/scrollarea.js";
import { OneEllipsis as a } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { F0SearchInput as o } from "../../../components/F0SearchInput/F0SearchInput.js";
import { dropTargetForElements as s } from "../../../_embedded/BeMnDuG8.js";
import "../../../_embedded/nR-CGXgB.js";
import { createAtlaskitDriver as c } from "../../../lib/dnd/atlaskitDriver.js";
import { DndProvider as l } from "../../../lib/dnd/context.js";
import { useDndEvents as u } from "../../../lib/dnd/hooks.js";
import { Item as d } from "./Item/index.js";
import { ItemSectionHeader as f } from "./ItemSectionHeader/index.js";
import { TOCFooter as p } from "./TOCFooter/index.js";
import { calculateAdjustedIndex as ee, convertToIds as m, filterTree as te, findExpandedPath as h, findItemInTree as g, insertItemInTree as _, removeItemFromTree as v, updateItemInTree as y, wouldCreateCycle as ne } from "./utils.js";
import { useCallback as b, useEffect as x, useMemo as S, useRef as C, useState as w } from "react";
import { Fragment as re, jsx as T, jsxs as E } from "react/jsx-runtime";
//#region src/experimental/Navigation/F0TableOfContent/index.tsx
function ie(e, t, r, i, a, o, s, c, l, u, p, ee, m, te, h, _, v, y, b) {
	let x = e.children ? f : d, S = s?.has(e.id) ?? !0, C = ee === e.id, w = !!(p && p !== e.id && u && e.children !== void 0 && !ne(u, p, e.id)), D = !!(p && p !== e.id && C && m === "before"), O = !!(p && p !== e.id && C && m === "after"), k = h === null ? u?.[0]?.id === e.id : !u || !h ? !1 : g(u, h)?.item.children?.[0]?.id === e.id;
	return /* @__PURE__ */ E(re, { children: [
		D && /* @__PURE__ */ T("div", { className: n("pointer-events-none h-10 rounded border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40", k ? "mt-0" : "mt-0.5", "mb-0.5") }),
		x === d ? /* @__PURE__ */ T(d, {
			item: e,
			isActive: i === e.id,
			sortable: t,
			collapsible: !1,
			isExpanded: !1,
			onToggleExpanded: c,
			onDragOver: _,
			onDragLeave: v,
			onDrop: y,
			canDropInside: !1,
			currentParentId: h,
			draggedItemId: p,
			justDropped: b === e.id
		}, e.id) : /* @__PURE__ */ T(x, {
			item: e,
			isActive: i === e.id,
			collapsible: a && e.children && e.children.length > 0,
			isExpanded: S,
			onToggleExpanded: c,
			sortable: t,
			hideChildrenCounter: o,
			canDropInside: w,
			onDragOver: x === f ? _ : void 0,
			onDragLeave: x === f ? v : void 0,
			onDrop: x === f ? y : void 0,
			currentParentId: h,
			draggedItemId: p,
			children: e.children && (x === f || S) && /* @__PURE__ */ E("div", {
				className: n("flex flex-col", C && m === "inside" && w && "rounded-md bg-f1-background-hover/20 p-1"),
				children: [e.children.map((n) => ie(n, t, r + 1, i, a, o, s, c, l, u, p, ee, m, t ? te : void 0, e.id, _, v, y, b)), C && m === "inside" && w && (!S || e.children.length === 0) && /* @__PURE__ */ T("div", {
					className: "flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary",
					children: "Drop here"
				})]
			})
		}, e.id),
		O && /* @__PURE__ */ T("div", { className: "pointer-events-none my-0.5 h-10 rounded border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40" })
	] });
}
function D({ targetItemId: e, position: t, onDragOver: r, onDragLeave: i, onDrop: a, visible: o }) {
	let c = C(null);
	return x(() => {
		if (c.current) return s({
			element: c.current,
			canDrop: ({ source: t }) => {
				let n = t.data;
				return n.kind === "toc-item" && n.id !== e;
			},
			onDragEnter: () => {
				r(e, t);
			},
			onDrag: () => {
				r(e, t);
			},
			onDragLeave: () => {
				i();
			},
			onDrop: () => {
				a(e, t);
			}
		});
	}, [
		e,
		t,
		r,
		i,
		a
	]), /* @__PURE__ */ T("div", {
		ref: c,
		className: n("w-full shrink-0 transition-[height]", o ? "h-5" : "h-1")
	});
}
function O({ title: e, items: t, className: s, activeItem: c, collapsible: l = !1, sortable: d = !1, showSearchBox: f = !1, searchPlaceholder: O, onReorder: k, hideChildrenCounter: ae = !1, scrollable: oe = !0, actions: se }) {
	let ce = r(), [A, le] = w(""), ue = (e) => {
		le(e);
	}, j = S(() => te(t, A), [t, A]), [de, M] = w(h(t, c)), [N, P] = w(t);
	x(() => {
		P(t);
	}, [t]);
	let fe = C(null), pe = b((e) => {
		M((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, [M]), me = b((e, t) => {
		let n = y(N, e, t);
		P(n), k && k(m(n));
	}, [N, k]), he = b((e) => (t) => {
		let n = g(N, e);
		if (n) {
			let r = {
				...n.item,
				children: t
			};
			me(e, r);
		} else e ?? (P(t), k && k(m(t)));
	}, [
		N,
		me,
		k,
		m
	]), F = b((e, t, n) => {
		if (ne(N, e, t)) return;
		let r = g(N, e);
		if (!r) return;
		let i = r.item, a = v(N, e), o = ee(N, e, t, n);
		a = _(a, i, t, o), P(a), t !== null && M((e) => {
			let n = new Set(e);
			return n.add(t), n;
		}), k && k(m(a));
	}, [
		N,
		k,
		m
	]), I = S(() => te(N, A), [N, A]), [ge, L] = w(null), [R, z] = w(null), [B, V] = w(null), [_e, ve] = w(null), H = C(null), U = C(!1), W = C(null), G = C(null), K = C(null), q = C(null), J = C(null), Y = C(0), X = C(0), Z = C(!1), Q = C(null), ye = b((e, t) => {
		K.current &&= (clearTimeout(K.current), null);
		let n = (d ? I : j).findIndex((t) => t.id === e), r = J.current !== null && n < J.current;
		J.current = n, `${e}-${t}` !== (R && B ? `${R}-${B}` : null) && (q.current = {
			itemId: e,
			position: t
		}, K.current = setTimeout(() => {
			let e = q.current;
			if (e) {
				z(e.itemId), V(e.position), W.current = e.itemId, G.current = e.position;
				let t = Date.now();
				Y.current = t, X.current = t;
				let n = (d ? I : j)[0];
				e.itemId === n?.id && e.position === "before" && (Z.current = !0);
			}
			K.current = null;
		}, r ? 50 : 30));
	}, [
		R,
		B,
		d,
		I,
		j
	]);
	x(() => () => {
		K.current && clearTimeout(K.current);
	}, []);
	let be = b(() => {
		if (U.current) return;
		K.current && clearTimeout(K.current);
		let e = Z.current ? 1e3 : 800;
		K.current = setTimeout(() => {
			if (U.current) {
				K.current = null;
				return;
			}
			let e = Date.now(), t = e - Y.current, n = e - X.current;
			if (n < (Z.current ? 800 : 500)) {
				K.current = null;
				return;
			}
			if (t < (Z.current ? 800 : 500)) {
				K.current = null;
				return;
			}
			if (Z.current) {
				let e = (d ? I : j)[0];
				if (R === e?.id && B === "before") {
					if (n < 2e3) {
						K.current = null;
						return;
					}
					Z.current = !1;
				} else Z.current = !1;
			}
			J.current = null, Y.current = 0, z(null), V(null), W.current = null, G.current = null, K.current = null;
		}, e);
	}, [
		R,
		B,
		d,
		I,
		j
	]), $ = b((e, t) => {
		U.current = !0;
		let n = H.current;
		if (Z.current = !1, z(null), V(null), W.current = null, G.current = null, K.current &&= (clearTimeout(K.current), null), !n || n === e) {
			H.current = null, L(null), z(null), V(null);
			return;
		}
		let r = g(N, e), i = g(N, n);
		if (r && i) {
			let a = null, o = 0;
			if (t === "inside") a = e, o = r.item.children?.length ?? 0;
			else if (t === "before") {
				if (a = r.parentPath.length > 0 ? r.parentPath[r.parentPath.length - 1] : null, a === null) o = N.findIndex((t) => t.id === e);
				else {
					let t = g(N, a);
					t && (o = t.item.children?.findIndex((t) => t.id === e) ?? 0);
				}
			} else if (t === "after") {
				if (a = r.parentPath.length > 0 ? r.parentPath[r.parentPath.length - 1] : null, a === null) o = N.findIndex((t) => t.id === e) + 1;
				else {
					let t = g(N, a);
					t && (o = (t.item.children?.findIndex((t) => t.id === e) ?? 0) + 1);
				}
			}
			let s = i.parentPath.length > 0 ? i.parentPath[i.parentPath.length - 1] : null, c = -1;
			if (s === null) c = N.findIndex((e) => e.id === n);
			else {
				let e = g(N, s);
				e && (c = e.item.children?.findIndex((e) => e.id === n) ?? -1);
			}
			(a !== s || a === s && c !== o) && (ve(n), F(n, a, o), setTimeout(() => {
				ve(null);
			}, 300));
		}
		Z.current = !1, H.current = null, U.current = !0, J.current = null, Y.current = 0, X.current = 0, Q.current &&= (clearTimeout(Q.current), null), L(null), setTimeout(() => {
			U.current = !1;
		}, 600);
	}, [N, F]);
	return u(b((e) => {
		if (e.phase === "start" && e.source.kind === "toc-item") K.current &&= (clearTimeout(K.current), null), Q.current &&= (clearTimeout(Q.current), null), H.current = e.source.id, U.current = !1, q.current = null, L(e.source.id);
		else if (e.phase === "cancel") Z.current = !1, U.current = !1, q.current = null, J.current = null, Y.current = 0, X.current = 0, K.current &&= (clearTimeout(K.current), null), Q.current &&= (clearTimeout(Q.current), null), z(null), V(null), W.current = null, G.current = null, L(null), H.current = null;
		else if (e.phase === "drop") {
			K.current &&= (clearTimeout(K.current), null), Z.current = !1;
			let e = W.current || q.current?.itemId, t = G.current || q.current?.position;
			!U.current && e && t && H.current && H.current !== e && requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					if (!U.current) {
						let e = W.current || q.current?.itemId, t = G.current || q.current?.position;
						e && t && $(e, t);
					}
				});
			}), Q.current &&= (clearTimeout(Q.current), null);
			let n = setTimeout(() => {
				U.current || (q.current = null, J.current = null, Y.current = 0, X.current = 0, z(null), V(null), W.current = null, G.current = null, L(null), H.current = null), Q.current === n && (Q.current = null);
			}, 500);
			Q.current = n;
		}
	}, [$])), /* @__PURE__ */ E("nav", {
		className: n("flex w-[248px] flex-col overflow-hidden", s),
		"aria-label": e,
		ref: fe,
		children: [
			(e || f) && /* @__PURE__ */ E("div", {
				className: "shrink-0 bg-f1-background pb-2 pl-5 pr-4 pt-5",
				children: [f && /* @__PURE__ */ T("div", {
					className: "mb-4",
					children: /* @__PURE__ */ T(o, {
						placeholder: O ?? ce.toc.search,
						onChange: ue,
						value: A,
						clearable: !0
					})
				}), e && /* @__PURE__ */ T(a, {
					lines: 1,
					tag: "h2",
					className: "text-[14px] font-medium text-f1-foreground-secondary",
					children: e
				})]
			}),
			(() => {
				let e = d ? I : j, t = e[0], n = e[e.length - 1], r = !!ge, a = /* @__PURE__ */ E(re, { children: [
					d && t && /* @__PURE__ */ T(D, {
						targetItemId: t.id,
						position: "before",
						onDragOver: ye,
						onDragLeave: be,
						onDrop: $,
						visible: r
					}),
					e.map((e) => ie(e, d, 0, c, l, ae, de, pe, F, N, ge, R, B, d ? he : void 0, null, ye, be, $, _e)),
					d && n && /* @__PURE__ */ T(D, {
						targetItemId: n.id,
						position: "after",
						onDragOver: ye,
						onDragLeave: be,
						onDrop: $,
						visible: r
					})
				] });
				return oe ? /* @__PURE__ */ T(i, {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ T("div", {
						className: "px-3 pb-2",
						children: /* @__PURE__ */ T("div", {
							className: "flex flex-col gap-0.5",
							children: a
						})
					})
				}) : /* @__PURE__ */ T("div", {
					className: "min-h-0 flex-1 overflow-hidden px-2 pb-2",
					children: /* @__PURE__ */ T("div", {
						className: "flex flex-col gap-0.5",
						children: a
					})
				});
			})(),
			/* @__PURE__ */ T(p, { actions: se })
		]
	});
}
function k(e) {
	let t = C(Symbol("f0-table-of-contents")), n = S(() => c(t.current), []);
	return /* @__PURE__ */ T(l, {
		driver: n,
		children: /* @__PURE__ */ T(O, { ...e })
	});
}
var ae = e(t("F0TableOfContent", k));
//#endregion
export { ae as F0TableOfContent, d as Item, f as ItemSectionHeader };
