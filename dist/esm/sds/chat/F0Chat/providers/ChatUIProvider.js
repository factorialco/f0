"use client";
import { useF0Chat as e, useF0ChatEmit as t } from "./F0ChatProvider.js";
import { isUserMessage as n } from "../types.js";
import { documentPreviewKind as r } from "../utils/attachments.js";
import { createContext as i, useCallback as a, useContext as o, useEffect as s, useLayoutEffect as ee, useMemo as c, useRef as l, useState as u } from "react";
import { jsx as d } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/providers/ChatUIProvider.tsx
var te = 200, ne = 1600, f = i(null), p = i(null), re = i(null), ie = i(null), ae = i(null), oe = i(null), se = i(null), m = i(null), h = ({ children: i }) => {
	let { messages: o, searchMessages: h, loadMessageContext: g, channel: _, capabilities: v } = e(), y = t(), [b, x] = u({ kind: "none" }), [S, C] = u(null), w = l(null), T = l(null), E = l(null), D = l(b);
	D.current = b;
	let O = l(v?.canSend);
	O.current = v?.canSend;
	let k = l(null), [A, j] = u(null), [M, ce] = u(null), [N, P] = u(!1), [F, I] = u(""), [L, R] = u([]), [z, B] = u(-1), [V, H] = u(!1), U = l(o);
	U.current = o;
	let W = l(h);
	W.current = h;
	let G = l(g);
	G.current = g;
	let K = l(L);
	K.current = L;
	let q = l(z);
	q.current = z;
	let J = l(0), le = l(/* @__PURE__ */ new WeakMap());
	s(() => () => {
		k.current && clearTimeout(k.current);
	}, []);
	let ue = a((e) => {
		w.current = e;
	}, []), de = a((e) => {
		T.current = e;
	}, []), fe = a((e) => {
		T.current?.(e);
	}, []), pe = a((e, t) => j({
		images: e,
		index: t
	}), []), me = a(() => j(null), []), he = a((e) => j((t) => t && {
		...t,
		index: e
	}), []), ge = a((e) => {
		let t = r(e);
		t && ce({
			file: e,
			kind: t
		});
	}, []), _e = a(() => ce(null), []), ve = a((e) => {
		E.current = e;
	}, []), Y = a((e) => {
		let t = D.current;
		D.current = e, x(e), E.current?.retarget(t, e), e.kind === "reply" ? y.onReplyStarted({ messageId: e.message.id }) : e.kind === "edit" && y.onEditStarted({ messageId: e.message.id });
	}, [y]), ye = a((e) => {
		O.current !== !1 && Y({
			kind: "reply",
			message: e
		});
	}, [Y]), be = a((e) => {
		O.current !== !1 && Y({
			kind: "edit",
			message: e
		});
	}, [Y]), X = a(() => Y({ kind: "none" }), [Y]), xe = l(_.id);
	ee(function() {
		xe.current !== _.id && (xe.current = _.id, E.current?.abandonDraft(), X());
	}, [_.id, X]);
	let Z = a((e, t) => {
		w.current?.(e), C(e), k.current && clearTimeout(k.current), t || (k.current = setTimeout(() => C(null), ne));
	}, []), Se = a((e) => {
		let t = U.current.some((t) => t.id === e), n = G.current;
		!t && n ? n(e).then(() => Z(e, !1)) : Z(e, !1);
	}, [Z]), Q = a((e, t = K.current) => {
		let n = t[e];
		if (n == null) return;
		B(e);
		let r = () => Z(n, !0), i = G.current;
		i ? i(n).then(r) : r();
	}, [Z]);
	s(() => {
		if (!N) return;
		let e = F.trim();
		if (e === "") {
			R([]), B(-1), H(!1), C(null);
			return;
		}
		H(!0);
		let t = ++J.current, r = setTimeout(() => {
			let r = (e) => {
				t === J.current && (R(e), H(!1), e.length > 0 ? Q(e.length - 1, e) : (B(-1), C(null)));
			}, i = W.current;
			if (i) i(e).then((e) => r(e.map((e) => e.id)));
			else {
				let t = e.toLowerCase(), i = le.current;
				r(U.current.filter((e) => {
					if (!n(e) || e.deleted) return !1;
					let r = i.get(e);
					return r === void 0 && (r = e.body.toLowerCase(), i.set(e, r)), r.includes(t);
				}).map((e) => e.id));
			}
		}, te);
		return () => clearTimeout(r);
	}, [
		F,
		N,
		Q
	]);
	let $ = a(() => {
		P(!0), y.onSearchOpened();
	}, [y]), Ce = a(() => {
		J.current++, P(!1), I(""), R([]), B(-1), H(!1), C(null);
	}, []), we = a(() => {
		let e = K.current;
		e.length !== 0 && (y.onSearchResultNavigated({ direction: "next" }), Q((q.current + 1) % e.length, e));
	}, [Q, y]), Te = a(() => {
		let e = K.current;
		e.length !== 0 && (y.onSearchResultNavigated({ direction: "prev" }), Q((q.current - 1 + e.length) % e.length, e));
	}, [Q, y]), Ee = L.length, De = z >= 0 ? z + 1 : 0, Oe = c(() => ({
		jumpToMessage: Se,
		registerScrollToMessage: ue
	}), [Se, ue]), ke = c(() => ({ highlightedId: S }), [S]), Ae = c(() => ({ target: b }), [b]), je = c(() => ({
		startReply: ye,
		startEdit: be,
		clearComposeTarget: X,
		registerComposerHandle: ve
	}), [
		ye,
		be,
		X,
		ve
	]), Me = c(() => ({
		registerFileDropHandler: de,
		dropFiles: fe
	}), [de, fe]), Ne = c(() => ({
		imagePreview: A,
		openImagePreview: pe,
		closeImagePreview: me,
		setImagePreviewIndex: he
	}), [
		A,
		pe,
		me,
		he
	]), Pe = c(() => ({
		documentPreview: M,
		openDocumentPreview: ge,
		closeDocumentPreview: _e
	}), [
		M,
		ge,
		_e
	]), Fe = c(() => ({
		searchOpen: N,
		openSearch: $,
		closeSearch: Ce,
		searchQuery: F,
		setSearchQuery: I,
		searching: V,
		matchCurrent: De,
		matchTotal: Ee,
		goToNextMatch: we,
		goToPrevMatch: Te
	}), [
		N,
		$,
		Ce,
		F,
		V,
		De,
		Ee,
		we,
		Te
	]);
	return /* @__PURE__ */ d(ie.Provider, {
		value: je,
		children: /* @__PURE__ */ d(f.Provider, {
			value: Oe,
			children: /* @__PURE__ */ d(p.Provider, {
				value: ke,
				children: /* @__PURE__ */ d(re.Provider, {
					value: Ae,
					children: /* @__PURE__ */ d(ae.Provider, {
						value: Me,
						children: /* @__PURE__ */ d(oe.Provider, {
							value: Ne,
							children: /* @__PURE__ */ d(se.Provider, {
								value: Pe,
								children: /* @__PURE__ */ d(m.Provider, {
									value: Fe,
									children: i
								})
							})
						})
					})
				})
			})
		})
	});
};
function g(e, t) {
	let n = o(e);
	if (!n) throw Error(`${t} must be used within a ChatUIProvider`);
	return n;
}
var _ = () => g(f, "useChatJump"), v = () => g(p, "useChatHighlightedId"), y = () => g(re, "useChatComposeTarget"), b = () => g(ie, "useChatComposeActions"), x = () => g(ae, "useChatDrop"), S = () => g(oe, "useChatImagePreview"), C = () => g(se, "useChatDocumentPreview"), w = () => g(m, "useChatSearch");
//#endregion
export { h as ChatUIProvider, b as useChatComposeActions, y as useChatComposeTarget, C as useChatDocumentPreview, x as useChatDrop, v as useChatHighlightedId, S as useChatImagePreview, _ as useChatJump, w as useChatSearch };
