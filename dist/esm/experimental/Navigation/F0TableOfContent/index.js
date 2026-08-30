import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { OneEllipsis as r } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { ScrollArea as a } from "../../../ui/scrollarea.js";
import { F0SearchInput as o } from "../../../components/F0SearchInput/F0SearchInput.js";
import { createAtlaskitDriver as s } from "../../../lib/dnd/atlaskitDriver.js";
import { DndProvider as c } from "../../../lib/dnd/context.js";
import { useDndEvents as ee } from "../../../lib/dnd/hooks.js";
import { Item as l } from "./Item/index.js";
import { ItemSectionHeader as u } from "./ItemSectionHeader/index.js";
import { TOCFooter as d } from "./TOCFooter/index.js";
import { calculateAdjustedIndex as f, convertToIds as p, filterTree as m, findExpandedPath as te, findItemInTree as h, insertItemInTree as g, removeItemFromTree as _, updateItemInTree as v, wouldCreateCycle as ne } from "./utils.js";
import { useCallback as y, useEffect as b, useMemo as x, useRef as S, useState as C } from "react";
import { Fragment as re, jsx as w, jsxs as T } from "react/jsx-runtime";
import { dropTargetForElements as E } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
//#region src/experimental/Navigation/F0TableOfContent/index.tsx
function ie(e, t, r, i, a, o, s, c, ee, d, f, p, m, te, g, _, v, y, b) {
	let x = e.children ? u : l, S = s?.has(e.id) ?? !0, C = p === e.id, E = !!(f && f !== e.id && d && e.children !== void 0 && !ne(d, f, e.id)), D = !!(f && f !== e.id && C && m === "before"), O = !!(f && f !== e.id && C && m === "after"), k = g === null ? d?.[0]?.id === e.id : !d || !g ? !1 : h(d, g)?.item.children?.[0]?.id === e.id;
	return /* @__PURE__ */ T(re, { children: [
		D && /* @__PURE__ */ w("div", { className: n("pointer-events-none h-10 rounded border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40", k ? "mt-0" : "mt-0.5", "mb-0.5") }),
		x === l ? /* @__PURE__ */ w(l, {
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
			currentParentId: g,
			draggedItemId: f,
			justDropped: b === e.id
		}, e.id) : /* @__PURE__ */ w(x, {
			item: e,
			isActive: i === e.id,
			collapsible: a && e.children && e.children.length > 0,
			isExpanded: S,
			onToggleExpanded: c,
			sortable: t,
			hideChildrenCounter: o,
			canDropInside: E,
			onDragOver: x === u ? _ : void 0,
			onDragLeave: x === u ? v : void 0,
			onDrop: x === u ? y : void 0,
			currentParentId: g,
			draggedItemId: f,
			children: e.children && (x === u || S) && /* @__PURE__ */ T("div", {
				className: n("flex flex-col", C && m === "inside" && E && "rounded-md bg-f1-background-hover/20 p-1"),
				children: [e.children.map((n) => ie(n, t, r + 1, i, a, o, s, c, ee, d, f, p, m, t ? te : void 0, e.id, _, v, y, b)), C && m === "inside" && E && (!S || e.children.length === 0) && /* @__PURE__ */ w("div", {
					className: "flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary",
					children: "Drop here"
				})]
			})
		}, e.id),
		O && /* @__PURE__ */ w("div", { className: "pointer-events-none my-0.5 h-10 rounded border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40" })
	] });
}
function D({ targetItemId: e, position: t, onDragOver: r, onDragLeave: i, onDrop: a, visible: o }) {
	let s = S(null);
	return b(() => {
		if (s.current) return E({
			element: s.current,
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
	]), /* @__PURE__ */ w("div", {
		ref: s,
		className: n("w-full shrink-0 transition-[height]", o ? "h-5" : "h-1")
	});
}
function O({ title: e, items: t, className: s, activeItem: c, collapsible: l = !1, sortable: u = !1, showSearchBox: E = !1, searchPlaceholder: O, onReorder: k, hideChildrenCounter: ae = !1, scrollable: oe = !0, actions: se }) {
	let ce = i(), [A, le] = C(""), ue = (e) => {
		le(e);
	}, j = x(() => m(t, A), [t, A]), [de, M] = C(te(t, c)), [N, P] = C(t);
	b(() => {
		P(t);
	}, [t]);
	let fe = S(null), pe = y((e) => {
		M((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, [M]), me = y((e, t) => {
		let n = v(N, e, t);
		P(n), k && k(p(n));
	}, [N, k]), he = y((e) => (t) => {
		let n = h(N, e);
		if (n) {
			let r = {
				...n.item,
				children: t
			};
			me(e, r);
		} else e ?? (P(t), k && k(p(t)));
	}, [
		N,
		me,
		k,
		p
	]), F = y((e, t, n) => {
		if (ne(N, e, t)) return;
		let r = h(N, e);
		if (!r) return;
		let i = r.item, a = _(N, e), o = f(N, e, t, n);
		a = g(a, i, t, o), P(a), t !== null && M((e) => {
			let n = new Set(e);
			return n.add(t), n;
		}), k && k(p(a));
	}, [
		N,
		k,
		p
	]), I = x(() => m(N, A), [N, A]), [ge, L] = C(null), [R, z] = C(null), [B, V] = C(null), [_e, ve] = C(null), H = S(null), U = S(!1), W = S(null), G = S(null), K = S(null), q = S(null), J = S(null), Y = S(0), X = S(0), Z = S(!1), Q = S(null), ye = y((e, t) => {
		K.current &&= (clearTimeout(K.current), null);
		let n = (u ? I : j).findIndex((t) => t.id === e), r = J.current !== null && n < J.current;
		J.current = n, `${e}-${t}` !== (R && B ? `${R}-${B}` : null) && (q.current = {
			itemId: e,
			position: t
		}, K.current = setTimeout(() => {
			let e = q.current;
			if (e) {
				z(e.itemId), V(e.position), W.current = e.itemId, G.current = e.position;
				let t = Date.now();
				Y.current = t, X.current = t;
				let n = (u ? I : j)[0];
				e.itemId === n?.id && e.position === "before" && (Z.current = !0);
			}
			K.current = null;
		}, r ? 50 : 30));
	}, [
		R,
		B,
		u,
		I,
		j
	]);
	b(() => () => {
		K.current && clearTimeout(K.current);
	}, []);
	let be = y(() => {
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
				let e = (u ? I : j)[0];
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
		u,
		I,
		j
	]), $ = y((e, t) => {
		U.current = !0;
		let n = H.current;
		if (Z.current = !1, z(null), V(null), W.current = null, G.current = null, K.current &&= (clearTimeout(K.current), null), !n || n === e) {
			H.current = null, L(null), z(null), V(null);
			return;
		}
		let r = h(N, e), i = h(N, n);
		if (r && i) {
			let a = null, o = 0;
			if (t === "inside") a = e, o = r.item.children?.length ?? 0;
			else if (t === "before") {
				if (a = r.parentPath.length > 0 ? r.parentPath[r.parentPath.length - 1] : null, a === null) o = N.findIndex((t) => t.id === e);
				else {
					let t = h(N, a);
					t && (o = t.item.children?.findIndex((t) => t.id === e) ?? 0);
				}
			} else if (t === "after") {
				if (a = r.parentPath.length > 0 ? r.parentPath[r.parentPath.length - 1] : null, a === null) o = N.findIndex((t) => t.id === e) + 1;
				else {
					let t = h(N, a);
					t && (o = (t.item.children?.findIndex((t) => t.id === e) ?? 0) + 1);
				}
			}
			let s = i.parentPath.length > 0 ? i.parentPath[i.parentPath.length - 1] : null, c = -1;
			if (s === null) c = N.findIndex((e) => e.id === n);
			else {
				let e = h(N, s);
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
	return ee(y((e) => {
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
	}, [$])), /* @__PURE__ */ T("nav", {
		className: n("flex w-[248px] flex-col overflow-hidden", s),
		"aria-label": e,
		ref: fe,
		children: [
			(e || E) && /* @__PURE__ */ T("div", {
				className: "shrink-0 bg-f1-background pb-2 pl-5 pr-4 pt-5",
				children: [E && /* @__PURE__ */ w("div", {
					className: "mb-4",
					children: /* @__PURE__ */ w(o, {
						placeholder: O ?? ce.toc.search,
						onChange: ue,
						value: A,
						clearable: !0
					})
				}), e && /* @__PURE__ */ w(r, {
					lines: 1,
					tag: "h2",
					className: "text-[14px] font-medium text-f1-foreground-secondary",
					children: e
				})]
			}),
			(() => {
				let e = u ? I : j, t = e[0], n = e[e.length - 1], r = !!ge, i = /* @__PURE__ */ T(re, { children: [
					u && t && /* @__PURE__ */ w(D, {
						targetItemId: t.id,
						position: "before",
						onDragOver: ye,
						onDragLeave: be,
						onDrop: $,
						visible: r
					}),
					e.map((e) => ie(e, u, 0, c, l, ae, de, pe, F, N, ge, R, B, u ? he : void 0, null, ye, be, $, _e)),
					u && n && /* @__PURE__ */ w(D, {
						targetItemId: n.id,
						position: "after",
						onDragOver: ye,
						onDragLeave: be,
						onDrop: $,
						visible: r
					})
				] });
				return oe ? /* @__PURE__ */ w(a, {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ w("div", {
						className: "px-3 pb-2",
						children: /* @__PURE__ */ w("div", {
							className: "flex flex-col gap-0.5",
							children: i
						})
					})
				}) : /* @__PURE__ */ w("div", {
					className: "min-h-0 flex-1 overflow-hidden px-2 pb-2",
					children: /* @__PURE__ */ w("div", {
						className: "flex flex-col gap-0.5",
						children: i
					})
				});
			})(),
			/* @__PURE__ */ w(d, { actions: se })
		]
	});
}
function k(e) {
	let t = S(Symbol("f0-table-of-contents")), n = x(() => s(t.current), []);
	return /* @__PURE__ */ w(c, {
		driver: n,
		children: /* @__PURE__ */ w(O, { ...e })
	});
}
var ae = e(t("F0TableOfContent", k));
//#endregion
export { ae as F0TableOfContent, l as Item, u as ItemSectionHeader };
