import { cn as e } from "../../../../lib/utils.js";
import { ScrollBar as t } from "../../../../ui/scrollarea.js";
import { useF0Chat as n } from "../providers/F0ChatProvider.js";
import { LATEST as r, isUserMessage as i } from "../types.js";
import { useChatJump as a } from "../providers/ChatUIProvider.js";
import { useChatRenderConfig as o } from "../providers/ChatRenderConfigProvider.js";
import { chatHeightEstimates as s } from "../utils/virtuoso-chat.js";
import { useChatVirtuoso as ee } from "../hooks/useChatVirtuoso.js";
import { useTranscriptReadiness as te } from "../hooks/useTranscriptReadiness.js";
import { CHAT_COMPOSER_HEIGHT as c } from "../utils/chat-layout.js";
import { deliveryState as ne } from "../utils/delivery-status.js";
import { flattenChatRows as re, freshTailIds as ie } from "../utils/grouping.js";
import { ChatMessageRowRenderer as ae } from "./ChatMessageRowRenderer.js";
import { ChatViewportOverlays as oe } from "./ChatViewportOverlays.js";
import { forwardRef as l, useCallback as u, useEffect as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
import * as v from "@radix-ui/react-scroll-area";
import { Virtuoso as se } from "react-virtuoso";
//#region src/sds/chat/F0Chat/components/ChatMessagesContainer.tsx
var ce = 250, le = (e, t) => {
	for (let n = Math.max(0, t); n < e.length; n++) {
		let t = e[n];
		if (t.type === "message" || t.type === "system") return t.message.createdAt;
		if (t.type === "separator") return t.at;
	}
	return null;
}, ue = {
	Scroller: l(function({ style: n, children: r, className: i, context: a, ...o }, s) {
		return /* @__PURE__ */ _(v.Root, {
			className: e("overflow-hidden", i),
			scrollHideDelay: 200,
			children: [
				/* @__PURE__ */ _(v.Viewport, {
					ref: s,
					style: {
						...n,
						overflowAnchor: "none",
						scrollPaddingBottom: `calc(${c} + 1.5rem)`
					},
					className: "size-full [&>div]:!block",
					...o,
					"data-testid": "chat-message-viewport",
					children: [/* @__PURE__ */ g("div", {
						ref: a.measureStripRef,
						"aria-hidden": "true",
						className: "w-0",
						style: { overflowAnchor: "none" }
					}), r]
				}),
				/* @__PURE__ */ g(t, { orientation: "vertical" }),
				/* @__PURE__ */ g(v.Corner, {})
			]
		});
	}),
	List: l(function({ style: e, context: t, ...n }, r) {
		let i = e?.visibility !== "hidden";
		return f(() => {
			t.onListVisibilityChange(i);
		}, [t, i]), /* @__PURE__ */ g("div", {
			...n,
			ref: r,
			style: e,
			className: "mx-auto w-full max-w-[calc(theme(maxWidth.content)+2rem)] px-4"
		});
	}),
	Item: l(function({ item: e, context: t, ...n }, r) {
		return /* @__PURE__ */ g("div", {
			...n,
			ref: r,
			className: "flow-root min-h-px",
			"data-chat-virtuoso-item": ""
		});
	}),
	Header: () => /* @__PURE__ */ g("div", {
		"data-testid": "chat-top-gap",
		className: "h-2"
	}),
	Footer: () => /* @__PURE__ */ g("div", {
		"data-testid": "chat-bottom-gap",
		style: { height: `calc(${c} + 1.5rem)` }
	})
}, de = {
	top: 1200,
	bottom: 200
}, fe = {
	top: 6,
	bottom: 5
}, pe = (e, t) => t?.key ?? `chat-gap-${e}`, y = () => {
	let { messages: t, channel: c, typingUsers: l, hasMoreOlder: v, loadingOlder: y, loadOlder: he, hasMoreNewer: b, loadingNewer: ge, loadNewer: _e, loadMessageContext: x, unreadCount: S, firstUnreadId: ve, markRead: ye } = n(), { reducedMotion: C } = o(), w = c.type === "group", { registerScrollToMessage: T } = a(), [be, E] = h(!1), [D] = h(ve), O = m(void 0), { rows: k, indexById: xe } = p(() => {
		let e = re(t, {
			dividerId: D,
			previousRows: O.current
		});
		return O.current = e.rowCache, e;
	}, [t, D]), A = m(/* @__PURE__ */ new Map()), j = m(null), M = t[t.length - 1]?.id ?? null;
	if (j.current !== M) {
		let e = ie(t, j.current);
		e.length > 0 && (A.current.clear(), e.forEach((e, t) => A.current.set(e, t))), j.current = M;
	}
	let N = t[t.length - 1], P = N && i(N) ? N : void 0, F = m(N?.id ?? null), I = m(/* @__PURE__ */ new Set());
	if (I.current.size > 0) for (let e of I.current) l.some((t) => t.id === e) || I.current.delete(e);
	P != null && P.id !== F.current && !P.isMine && l.some((e) => e.id === P.author.id) && I.current.add(P.author.id);
	let L = I.current.size > 0 ? l.filter((e) => !I.current.has(e.id)) : l, R = L.map((e) => e.id).join("|"), z = m({
		key: R,
		users: L
	});
	z.current.key !== R && (z.current = {
		key: R,
		users: L
	});
	let B = z.current.users, V = B.length > 0, [H, U] = h(!1), W = m(V), G = m(B);
	V && (G.current = B);
	let Se = P != null && P.id !== F.current && !P.isMine && G.current.some((e) => e.id === P.author.id), K = W.current && !V && !C && !Se ? !0 : H && !Se;
	f(() => {
		W.current = V, F.current = N?.id ?? null, H !== K && U(K);
	}, [
		K,
		N?.id,
		V,
		H
	]), d(() => {
		if (!H) return;
		let e = setTimeout(() => U(!1), ce);
		return () => clearTimeout(e);
	}, [H]);
	let q = V || K, Ce = m({ fresh: !1 }), J = m(q);
	J.current !== q && (J.current = q, q && (Ce.current.fresh = !0));
	let Y = p(() => {
		let e = [...k];
		return P && ne(P, {
			isGroup: w,
			memberCount: c.memberCount
		}) && e.push({
			type: "footer",
			key: "status-footer",
			message: P
		}), q && e.push({
			type: "typing",
			key: "typing",
			users: V ? B : G.current
		}), e;
	}, [
		k,
		P,
		w,
		c.memberCount,
		B,
		V,
		q
	]), we = p(() => s(Y), [Y]), Te = m(!1), { virtuosoRef: Ee, listKey: X, firstItemIndex: De, initialLocation: Oe, followOutput: ke, handleScrollerRef: Ae, handleAtBottomChange: je, handleAtTopChange: Me, handleStartReached: Ne, handleEndReached: Pe, handleItemsRendered: Fe, handleTotalListHeightChanged: Ie, atBottom: Le, atTop: Re, scrolledUp: ze, stickyIndex: Be, scrollToBottom: Ve, scrollToMessage: He, pendBottom: Ue, reassertEntry: We } = ee({
		rows: k,
		indexById: xe,
		itemCount: Y.length,
		messages: t,
		hasMoreOlder: v,
		loadingOlder: y,
		loadOlder: he,
		hasMoreNewer: b ?? !1,
		loadingNewer: ge ?? !1,
		loadNewer: _e,
		conversationKey: c.id,
		reducedMotion: C,
		canPrefetchRef: Te
	}), { ready: Z, setViewport: Ge, setListVisible: Ke } = te(X);
	d(() => {
		Te.current = Z;
	}, [Z]);
	let qe = m(null);
	f(() => {
		!Z || qe.current === X || (qe.current = X, We());
	}, [
		X,
		Z,
		We
	]);
	let Je = u((e) => {
		Ae(e), Ge(e instanceof HTMLElement ? e : null);
	}, [Ae, Ge]), Ye = m(null), Xe = p(() => ({
		measureStripRef: Ye,
		onListVisibilityChange: Ke
	}), [Ke]), Ze = u((e) => {
		let t = Ye.current, n = `${e}px`;
		t && t.style.height !== n && (t.style.height = n), Ie(e);
	}, [Ie]);
	d(() => {
		T(He);
	}, [T, He]);
	let Qe = u(() => {
		b && x ? (Ue(), x(r)) : Ve();
	}, [
		b,
		x,
		Ue,
		Ve
	]), $e = Le && be;
	d(() => {
		$e && S > 0 && ye?.();
	}, [
		$e,
		S,
		ye
	]);
	let Q = m(null);
	Q.current === null && t.length > 0 && (Q.current = new Set(t.map((e) => e.id)));
	let $ = Q.current ?? me, et = u((e, t) => t ? /* @__PURE__ */ g(ae, {
		row: t,
		isGroup: w,
		enterAnimation: !C,
		animatedIds: $,
		freshIds: A.current,
		typingLeaving: t.type === "typing" && K,
		typingEntry: Ce.current
	}) : null, [
		$,
		K,
		w,
		C
	]), tt = Be == null ? null : le(Y, Be), nt = ze || !!b;
	return /* @__PURE__ */ _("div", {
		...Z ? {} : { inert: "" },
		className: "scrollbar-macos relative min-h-0 flex-1",
		"aria-busy": !Z,
		onMouseEnter: () => E(!0),
		onMouseLeave: () => E(!1),
		children: [/* @__PURE__ */ g(se, {
			ref: Ee,
			scrollerRef: Je,
			data: Y,
			computeItemKey: pe,
			itemContent: et,
			firstItemIndex: De,
			initialTopMostItemIndex: Oe,
			followOutput: ke,
			atBottomThreshold: 80,
			atBottomStateChange: je,
			atTopStateChange: Me,
			startReached: Ne,
			endReached: Pe,
			itemsRendered: Fe,
			totalListHeightChanged: Ze,
			increaseViewportBy: de,
			minOverscanItemCount: fe,
			heightEstimates: we,
			defaultItemHeight: 64,
			skipAnimationFrameInResizeObserver: !0,
			context: Xe,
			components: ue,
			className: e("size-full", !C && "transition-opacity duration-100", Z ? "visible opacity-100" : "invisible opacity-0")
		}, X), Z && /* @__PURE__ */ g(oe, {
			atTop: Re,
			scrolledUp: ze,
			hasMoreOlder: v,
			loadingOlder: y,
			stickyDate: tt,
			showJumpButton: nt,
			unreadCount: S,
			hasMoreNewer: b ?? !1,
			reducedMotion: C,
			onJumpToBottom: Qe
		})]
	});
}, me = /* @__PURE__ */ new Set();
//#endregion
export { y as ChatMessagesContainer };
