import { createMediaWarmer as e, rowImageUrls as t, warmupRange as n } from "../utils/media-warmup.js";
import { advanceChatWindow as r, entryLocation as i, followDecision as a, initialChatWindow as o, shouldPrefetchOlder as ee, shouldRepinOnGrowth as te } from "../utils/virtuoso-chat.js";
import { useTranscriptResizeAnchor as ne } from "./useTranscriptResizeAnchor.js";
import { useCallback as s, useEffect as c, useLayoutEffect as l, useRef as u, useState as d } from "react";
var re = .5, f = 1, ie = 160, ae = (e, t, n) => {
	let r = e.find(({ offset: e, size: n }) => e + n > t);
	return r ? Math.max(0, r.index - n) : null;
}, oe = (e, t, n) => {
	let r = e.find(({ offset: e, size: n }) => e + n > t);
	return r ? {
		kind: "row",
		index: Math.max(0, r.index - n),
		offset: t - r.offset
	} : null;
};
function p({ rows: p, indexById: m, itemCount: h, messages: g, hasMoreOlder: _, loadingOlder: v, loadOlder: y, hasMoreNewer: b, loadingNewer: se, loadNewer: ce, conversationKey: le, reducedMotion: x, canPrefetchRef: ue }) {
	let S = u(null), C = u(null), w = u([]), T = u(null), E = u(null), D = u(!1), O = u(!1), k = u(null);
	if (k.current === null || k.current.messages !== g || k.current.rows !== p || k.current.hasMoreNewer !== b) {
		let e = {
			messages: g,
			rowCount: p.length,
			indexById: m,
			hasMoreNewer: b
		}, t;
		if (k.current === null) t = o(e);
		else {
			let n = r(k.current.state, e);
			t = n.state, n.change !== "none" && (O.current = !1), n.ownGlide && (D.current = !0);
		}
		k.current = {
			messages: g,
			rows: p,
			hasMoreNewer: b,
			state: t
		};
	}
	let A = `${le}:${k.current.state.epoch}`, j = k.current.state.firstItemIndex, de = u(j);
	de.current = j;
	let M = u(null);
	if (M.current?.key !== A) {
		let e, t = E.current;
		if (t?.kind === "bottom") e = {
			index: "LAST",
			align: "end"
		}, E.current = null;
		else {
			let n = t?.kind === "id" ? m.get(t.id) ?? null : null;
			n != null && (E.current = null), e = i({
				pendingIndex: n,
				dividerIndex: p.findIndex((e) => e.type === "divider"),
				hasMoreNewer: b
			});
		}
		M.current = {
			key: A,
			location: e
		};
	}
	let N = M.current.location, P = N.index === "LAST", [fe, pe] = d(P), [me, he] = d(!0), [ge, _e] = d(!1), [ve, F] = d(!1), [ye, be] = d(null), I = u(P), L = u(P ? 0 : Infinity), R = u(!1), z = u(null), B = u(null), V = B.current !== A;
	l(() => {
		B.current !== A && (B.current = A, I.current = P, L.current = P ? 0 : Infinity, R.current = !1, pe(P), he(!0), _e(!1), F(!1), be(null));
	}, [P, A]);
	let H = u(null), xe = s(() => {
		let e = H.current, t = S.current;
		if (!e || !t) return;
		e.kind === "bottom" ? t.scrollToIndex({
			index: "LAST",
			align: "end",
			behavior: "auto"
		}) : t.scrollToIndex({
			index: e.index,
			align: "start",
			offset: e.offset,
			behavior: "auto"
		});
		let n = C.current;
		n && (T.current = {
			scrollHeight: n.scrollHeight,
			scrollTop: n.scrollTop,
			clientHeight: n.clientHeight,
			provisional: !1
		}, L.current = n.scrollHeight - n.scrollTop - n.clientHeight);
	}, []), { observeResize: Se, resizingRef: U } = ne({ onSettled: xe }), W = s(() => {
		R.current = !0, F(!0);
	}, []), G = s(() => {
		R.current = !1, F(!1);
	}, []), Ce = s((e) => {
		if (I.current = e, pe(e), !e || U.current) return;
		let t = C.current;
		t && t.scrollHeight - t.scrollTop - t.clientHeight <= f && G();
	}, [U, G]), we = s((e) => {
		he(e);
	}, []), Te = s((e) => a(e, x), [x]), Ee = V ? P : fe, De = Ee && !(!V && ve) && !b ? Te : !1, Oe = u({
		hasMoreOlder: _,
		loadingOlder: v,
		loadOlder: y
	});
	Oe.current = {
		hasMoreOlder: _,
		loadingOlder: v,
		loadOlder: y
	};
	let ke = u(ue);
	ke.current = ue;
	let K = s(() => {
		let e = Oe.current;
		O.current || !e.hasMoreOlder || e.loadingOlder || (O.current = !0, e.loadOlder());
	}, []), Ae = s(() => {
		let e = ke.current;
		e && !e.current || K();
	}, [K]);
	c(() => {
		v || (O.current = !1);
	}, [v]);
	let je = K, Me = s(() => {
		b && !se && ce?.();
	}, [
		b,
		se,
		ce
	]), q = u(null);
	q.current === null && (q.current = e());
	let Ne = u(null), Pe = u(p);
	Pe.current = p;
	let J = s((e, r) => {
		let i = w.current;
		if (i.length === 0) return;
		let a = Pe.current, o = (e) => e - r, { start: ee, end: te } = n(o(i[0].index), o(i[i.length - 1].index), e, a.length);
		for (let e = ee; e <= te; e++) {
			let n = t(a[e]);
			n.length > 0 && q.current?.warm(n);
		}
	}, []);
	c(() => {
		let e = q.current;
		return () => e?.dispose();
	}, []);
	let Y = u(null), X = s(() => {
		Y.current ??= requestAnimationFrame(() => {
			if (Y.current = null, U.current) return;
			let e = T.current;
			if (!e || !C.current) return;
			let t = de.current;
			if (e.provisional) {
				J("down", t);
				return;
			}
			let n = e.scrollHeight - e.scrollTop - e.clientHeight;
			L.current = n, _e(n > e.clientHeight * re);
			let r = Ne.current, i = r != null && e.scrollTop < r;
			Ne.current = e.scrollTop, i && ee(e) && Ae(), be(ae(w.current, e.scrollTop, t)), H.current = n <= 80 ? { kind: "bottom" } : oe(w.current, e.scrollTop, t) ?? H.current, J(i ? "up" : "down", t);
		});
	}, [
		Ae,
		U,
		J
	]), Z = s(() => {
		let e = C.current;
		if (!e) return;
		let t = T.current, n = {
			scrollHeight: e.scrollHeight,
			scrollTop: e.scrollTop,
			clientHeight: e.clientHeight,
			provisional: !1
		};
		T.current = n;
		let r = n.scrollHeight - n.scrollTop - n.clientHeight;
		L.current = r, !U.current && t != null && !t.provisional && n.scrollTop < t.scrollTop - f && W(), !U.current && r <= f && G(), X();
	}, [
		W,
		U,
		G,
		X
	]), Fe = s((e) => {
		let t = S.current;
		if (!C.current || !t || R.current) return;
		let n = L.current;
		if (n > 80) return;
		let r = Math.max(0, n) + Math.max(0, e);
		r <= 0 || (t.scrollBy({ top: r }), L.current = 0);
	}, []), Ie = u(h);
	Ie.current = h;
	let Le = u({
		height: 0,
		count: h
	}), Re = s((e) => {
		let t = Le.current, n = Ie.current;
		Le.current = {
			height: e,
			count: n
		}, !U.current && te({
			prevHeight: t.height,
			height: e,
			prevCount: t.count,
			count: n,
			atBottom: !R.current && L.current <= 80
		}) && Fe(e - t.height);
	}, [Fe, U]), Q = s((e) => {
		if (e.deltaY >= 0) return;
		W(), z.current != null && window.clearTimeout(z.current);
		let t = C.current;
		z.current = window.setTimeout(() => {
			if (z.current = null, !t || C.current !== t) return;
			let e = t.scrollHeight - t.scrollTop - t.clientHeight;
			L.current = e, e <= f && G();
		}, ie);
	}, [W, G]), $ = s(() => {
		W();
	}, [W]), ze = s((e) => {
		z.current != null && (window.clearTimeout(z.current), z.current = null);
		let t = C.current;
		t && (t.removeEventListener("scroll", Z), t.removeEventListener("wheel", Q), t.removeEventListener("touchmove", $), t.removeEventListener("touchend", Z)), C.current = e instanceof HTMLElement ? e : null, T.current = null;
		let n = C.current;
		Se(n), n && (T.current = {
			scrollHeight: n.scrollHeight,
			scrollTop: n.scrollTop,
			clientHeight: n.clientHeight,
			provisional: !0
		}, n.setAttribute("data-chat-viewport", ""), n.addEventListener("scroll", Z, { passive: !0 }), n.addEventListener("wheel", Q, { passive: !0 }), n.addEventListener("touchmove", $, { passive: !0 }), n.addEventListener("touchend", Z, { passive: !0 }));
	}, [
		$,
		Q,
		Z,
		Se
	]), Be = s(() => {
		G(), S.current?.scrollToIndex({
			index: "LAST",
			align: "end",
			behavior: x ? "auto" : "smooth"
		});
	}, [x, G]), Ve = u(m);
	Ve.current = m;
	let He = s((e) => {
		let t = Ve.current.get(e);
		t == null ? E.current = {
			kind: "id",
			id: e
		} : S.current?.scrollToIndex({
			index: t,
			align: "center"
		});
	}, []), Ue = s(() => {
		E.current = { kind: "bottom" };
	}, []), We = u(N);
	We.current = N;
	let Ge = s(() => {
		if (R.current) return;
		let e = We.current;
		S.current?.scrollToIndex({
			index: e.index,
			align: e.align,
			offset: e.offset,
			behavior: "auto"
		});
	}, []);
	c(() => {
		let e = E.current;
		if (e?.kind !== "id") return;
		let t = m.get(e.id);
		t != null && (E.current = null, S.current?.scrollToIndex({
			index: t,
			align: "center"
		}));
	}, [m]), l(() => {
		D.current && (D.current = !1, !(I.current && !R.current) && Be());
	});
	let Ke = s((e) => {
		w.current = e, X();
	}, [X]);
	return c(() => () => {
		Y.current != null && cancelAnimationFrame(Y.current), z.current != null && window.clearTimeout(z.current);
	}, []), {
		virtuosoRef: S,
		listKey: A,
		firstItemIndex: j,
		initialLocation: N,
		followOutput: De,
		handleScrollerRef: ze,
		handleAtBottomChange: Ce,
		handleAtTopChange: we,
		handleStartReached: je,
		handleEndReached: Me,
		handleItemsRendered: Ke,
		handleTotalListHeightChanged: Re,
		atBottom: Ee,
		atTop: V ? !0 : me,
		scrolledUp: !V && ge,
		stickyIndex: V ? null : ye,
		scrollToBottom: Be,
		scrollToMessage: He,
		pendBottom: Ue,
		reassertEntry: Ge
	};
}
//#endregion
export { oe as topVisibleAnchor, ae as topVisibleRowIndex, p as useChatVirtuoso };
