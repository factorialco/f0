import { a as e, c as t, i as n, l as r, o as i, s as a, t as o } from "./OneEllipsis-DuhKMtYp.js";
import { E as s, O as c, S as l, _ as u, f as d, ht as f, k as p, lt as m, x as h } from "./variants-B0wDByLy.js";
import { n as g, t as _ } from "./utils-CVzxZnoI.js";
import { i as ee, l as v, r as te } from "./F0Button-BJ1vAMQc.js";
import { it as y, l as ne } from "./F0Checkbox-8vfzQrD0.js";
import { d as b, f as x, p as S, t as C } from "./F0Card-BuBIx5-x.js";
import { t as re } from "./Cross-BIv5udZr.js";
import { t as w } from "./Download-Dvj6cfxp.js";
import { a as T } from "./progress-BwOpf5S2.js";
import { t as E } from "./F0Link-zUXJEoxw.js";
import { r as D } from "./F0Avatar-AdTCknCK.js";
import { n as O, t as k } from "./RichText-CW-0xoDy.js";
import { t as A } from "./i18n-provider-defaults-B5_EAVz9.js";
import { createContext as j, forwardRef as M, useCallback as N, useContext as P, useEffect as F, useLayoutEffect as I, useMemo as L, useRef as R, useState as z } from "react";
import { createPortal as B } from "react-dom";
import { jsx as V, jsxs as H } from "react/jsx-runtime";
var ie = M((e, t) => /* @__PURE__ */ H("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ V("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z"
	}), /* @__PURE__ */ V("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5"
	})]
})), ae = M((e, t) => /* @__PURE__ */ H("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ V("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z"
		}),
		/* @__PURE__ */ V("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9"
		}),
		/* @__PURE__ */ V("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5"
		}),
		/* @__PURE__ */ V("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M11.5 7V6"
		}),
		/* @__PURE__ */ V("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M11.5 14V13"
		})
	]
})), oe = n().use(i).use(a).use(e).use(t), se = M(function({ content: e, className: t, format: n = "html", ...i }, a) {
	let o = L(() => r.sanitize(n === "markdown" ? String(oe.processSync(e)) : e, {
		ADD_ATTR: ["target"],
		ALLOWED_ATTR: [
			"href",
			"target",
			"rel",
			"class"
		]
	}), [n, e]), s = /<[^>]*>/.test(o);
	return /* @__PURE__ */ V("div", {
		ref: a,
		className: _("rich-text-display-container", !s && "whitespace-pre-wrap", t),
		dangerouslySetInnerHTML: { __html: o },
		...i
	});
}), U = f("F0RichTextDisplay", se), ce = U, W = "f0:widget-drag-start", le = "f0:widget-drag-end";
//#endregion
//#region src/kits/ai/F0AiChat/hooks/useRevealOnChange.ts
function G(e, t, n = .2) {
	let r = u(), [i, a] = z(!0), o = R(e);
	return h(() => {
		if (o.current === e) return;
		let n = o.current;
		if (o.current = e, r) return;
		a(!1);
		let i = typeof t == "function" ? t(n, e) : t, s = setTimeout(() => a(!0), i);
		return () => clearTimeout(s);
	}, [e, r]), {
		visible: i,
		motionProps: {
			animate: { opacity: +!!i },
			transition: {
				duration: r ? 0 : i ? n : 0,
				ease: "easeInOut"
			}
		}
	};
}
//#endregion
//#region src/lib/local-storage.ts
function ue(e, t) {
	try {
		let n = localStorage.getItem(e);
		return n === null ? t : JSON.parse(n);
	} catch {
		return t;
	}
}
function K(e, t) {
	try {
		localStorage.setItem(e, JSON.stringify(t));
	} catch {}
}
//#endregion
//#region src/kits/ai/F0AiChat/providers/usePersistedState.ts
function q(e, t, n, r, i = 0) {
	let [a, o] = z(() => {
		if (typeof window > "u") return t;
		let r = ue(e, null);
		return r === null || n && !n(r) ? t : r;
	});
	return F(() => {
		if (typeof window > "u" || r && !r(a)) return;
		if (i <= 0) {
			K(e, a);
			return;
		}
		let t = window.setTimeout(() => K(e, a), i);
		return () => window.clearTimeout(t);
	}, [
		e,
		a,
		r,
		i
	]), [a, o];
}
//#endregion
//#region src/kits/ai/F0AiChat/providers/AiChatStateProvider.tsx
var de = j(null), fe = "ONE-ai-chat-width", pe = 150, me = "ONE-ai-chat-open", he = "ONE-ai-chat-visualization-mode", ge = "ONE-ai-chat-panel-content-id", _e = 300, ve = 712, ye = 5e3, be = (e) => e === "sidepanel" || e === "fullscreen", xe = () => {}, Se = ({ children: e, enabled: t, side: n = "right", panelContentSide: r, agent: i, initialMessage: a, chatHeader: o, chatMessages: s, chatInput: c, chatOverlay: l, welcomeScreenSuggestions: u = [], welcomeScreenCards: f = [], disclaimer: p, resizable: m = !1, defaultVisualizationMode: h = "sidepanel", lockVisualizationMode: g = !1, historyEnabled: _ = !1, footer: ee, VoiceMode: v, entityRefs: te, canvasActions: y, canvasEntities: ne, credits: b, employeeCredits: x, creditWarning: S, fileAttachments: C, onTranscribe: re, onThumbsDown: w, onThumbsUp: T, tracking: E }) => {
	let [D, O] = z(ee), [k, A] = z(t), [j, M] = q(fe, 360, (e) => typeof e == "number" && !isNaN(e) && e >= _e && e <= ve, void 0, pe), [P, I] = z(!1), [L, B] = q(me, h === "fullscreen", (e) => typeof e == "boolean"), [H, ie] = q(he, h === "canvas" ? "sidepanel" : h, (e) => e === "sidepanel" || e === "fullscreen", be), [ae, oe] = z("chat"), [se, U] = z(() => H !== "fullscreen"), [ce, W] = z(i), [le, G] = z(u), [ue, K] = z(f), xe = d(), [Se, Ce] = z([xe.t("ai.inputPlaceholder")]), [we, Te] = z(a);
	F(() => {
		L && E?.onVisibility?.();
	}, [L]);
	let [Ee, De] = z(null), J = N((e) => {
		ie((t) => {
			let n = typeof e == "function" ? e(t) : e;
			return t === "canvas" && n !== "canvas" && De(null), n === "fullscreen" && B(!0), n;
		});
	}, [ie, B]), Oe = R("sidepanel"), [ke, Ae] = z(!1), [Y, je] = z(!1), [Me, Ne] = z(null), [X, Pe] = z(null), Fe = R(null), Z = R([]), Ie = N((e) => {
		Fe.current ? Fe.current(e) : Z.current.push(e);
	}, []), Le = N((e) => {
		if (Fe.current = e, e && Z.current.length > 0) {
			let t = Z.current;
			Z.current = [], t.forEach((t) => e(t));
		}
	}, []), Re = R(null), ze = R(!1), Be = N(() => Re.current ? (Re.current(), !0) : (ze.current = !0, !1), []), Q = N((e) => {
		Re.current = e, e && ze.current && (ze.current = !1, e());
	}, []), Ve = () => {
		M(360);
	};
	F(() => {
		A(t);
	}, [t]), F(() => {
		if (!L) {
			ze.current = !1, De(null), J("sidepanel");
			let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			U(!e);
		}
	}, [L]);
	let He = N((e) => {
		H !== "canvas" && (Oe.current = H), De(e), J("canvas"), L || B(!0);
	}, [H, L]), Ue = N(() => {
		De(null), H === "canvas" && J(Oe.current);
	}, [H]), [We, $] = z(null), Ge = N((e) => $(e), []), Ke = N(() => $(null), []), [qe, Je] = z(null), [Ye, Xe] = q(ge, null, (e) => e === null || typeof e == "string"), [Ze, Qe] = z(() => L ? Ye : null), $e = N((e) => {
		Je(e), Qe(null), e && !L && B(!0);
	}, [L, B]), et = N(() => {
		Je(null), Qe(null);
	}, []), tt = N(() => Qe(null), []);
	F(() => {
		Ze || Xe(qe?.id ?? null);
	}, [
		qe,
		Ze,
		Xe
	]), F(() => {
		L || Qe(null);
	}, [L]), F(() => {
		if (!Ze) return;
		let e = setTimeout(() => Qe(null), ye);
		return () => clearTimeout(e);
	}, [Ze]);
	let [nt, rt] = z(n), [it, at] = z(r ?? n);
	return /* @__PURE__ */ V(de.Provider, {
		value: {
			enabled: k,
			setEnabled: A,
			open: L,
			setOpen: B,
			mode: ae,
			setMode: oe,
			visualizationMode: H,
			setVisualizationMode: J,
			lockVisualizationMode: g,
			historyEnabled: _,
			footer: D,
			VoiceMode: v,
			setFooter: O,
			shouldPlayEntranceAnimation: se,
			setShouldPlayEntranceAnimation: U,
			agent: ce,
			setAgent: W,
			initialMessage: we,
			setInitialMessage: Te,
			chatHeader: o,
			chatMessages: s,
			chatInput: c,
			chatOverlay: l,
			welcomeScreenSuggestions: le,
			setWelcomeScreenSuggestions: G,
			welcomeScreenCards: ue,
			setWelcomeScreenCards: K,
			onThumbsUp: T,
			onThumbsDown: w,
			placeholders: Se,
			setPlaceholders: Ce,
			disclaimer: p,
			resizable: m,
			chatWidth: j,
			setChatWidth: M,
			resetChatWidth: Ve,
			isResizing: P,
			setIsResizing: I,
			tracking: E,
			entityRefs: te,
			canvasActions: y,
			canvasEntities: ne,
			credits: b,
			employeeCredits: x,
			creditWarning: S,
			fileAttachments: C,
			onTranscribe: re,
			canvasContent: Ee,
			openCanvas: He,
			closeCanvas: Ue,
			activeGame: We,
			openGame: Ge,
			closeGame: Ke,
			isClarifying: ke,
			setIsClarifying: Ae,
			fileDragOver: Y,
			setFileDragOver: je,
			processDroppedFiles: Ie,
			setProcessDroppedFilesFunction: Le,
			focusChatInput: Be,
			setFocusChatInputFunction: Q,
			pendingContext: Me,
			setPendingContext: Ne,
			pendingQuote: X,
			setPendingQuote: Pe,
			panelContent: qe,
			setPanelContent: $e,
			clearPanelContent: et,
			restoringPanelContentId: Ze,
			cancelPanelContentRestore: tt,
			panelSide: nt,
			setPanelSide: rt,
			panelContentSide: it,
			setPanelContentSide: at
		},
		children: e
	});
}, Ce = /* @__PURE__ */ new Set([
	"enabled",
	"open",
	"fileDragOver",
	"lockVisualizationMode",
	"historyEnabled",
	"resizable",
	"isClarifying"
]), we = /* @__PURE__ */ new Set([
	"canvasContent",
	"pendingContext",
	"pendingQuote",
	"activeGame",
	"panelContent",
	"restoringPanelContentId"
]), Te = /* @__PURE__ */ new Set([
	"agent",
	"initialMessage",
	"chatHeader",
	"chatMessages",
	"chatInput",
	"chatOverlay",
	"disclaimer",
	"footer",
	"VoiceMode",
	"tracking",
	"entityRefs",
	"canvasActions",
	"canvasEntities",
	"credits",
	"employeeCredits",
	"creditWarning",
	"fileAttachments",
	"onTranscribe",
	"onThumbsUp",
	"onThumbsDown"
]), Ee = {
	chatWidth: 360,
	panelSide: "right",
	panelContentSide: "right",
	visualizationMode: "sidepanel",
	mode: "chat",
	shouldPlayEntranceAnimation: !0,
	placeholders: [],
	welcomeScreenSuggestions: [],
	welcomeScreenCards: [],
	focusChatInput: () => !1
}, De = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = t;
	if (n in Ee) return Ee[n];
	if (we.has(n)) return null;
	if (!Te.has(n)) return !Ce.has(n) && xe;
} });
function J() {
	return P(de) ?? De;
}
//#endregion
//#region src/kits/ai/F0AiChatTextArea/components/DropOverlay.tsx
var Oe = ({ visible: e, onFilesDropped: t, mode: n = "files" }) => {
	let r = d(), i = n === "discuss";
	return /* @__PURE__ */ H("div", {
		"aria-hidden": !e,
		"aria-live": e ? "polite" : void 0,
		role: e ? "status" : void 0,
		className: _("absolute inset-1 z-50 flex flex-col items-center gap-2 justify-center rounded-[calc(theme(borderRadius.xl)-4px)] backdrop-blur bg-f1-background-tertiary/80 border border-dashed border-f1-border", "transition-opacity duration-150 ease-out motion-reduce:transition-none", e ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"),
		onDragEnter: (e) => {
			e.preventDefault();
		},
		onDragOver: (e) => {
			e.preventDefault();
		},
		onDragLeave: (e) => {
			e.preventDefault();
		},
		onDrop: (e) => {
			if (e.preventDefault(), !t) return;
			let n = Array.from(e.dataTransfer.files);
			n.length > 0 && t(n);
		},
		children: [/* @__PURE__ */ V(c, {
			icon: i ? ie : k,
			size: "lg",
			color: "bold"
		}), /* @__PURE__ */ V("p", {
			className: "text-base font-normal text-f1-foreground",
			children: i ? r.ai.dropWidgetToDiscuss : r.ai.dropFilesHere
		})]
	});
};
//#endregion
//#region src/kits/ai/F0AiPong/components/PongBall.tsx
function ke({ size: e = 40, className: t, style: n }) {
	return /* @__PURE__ */ V("div", {
		className: _(t, "rounded-full"),
		style: {
			width: e,
			height: e,
			background: "linear-gradient(135deg, #E8845E, #B89BD6)",
			...n
		}
	});
}
//#endregion
//#region src/kits/ai/F0AiPong/F0AiPong.tsx
var Ae = 40, Y = 93, je = Y * .5, Me = 32, Ne = 24, X = 8, Pe = 48, Fe = 10, Z = 7, Ie = 18, Le = .25, Re = .15, ze = 800, Be = Math.PI / 3, Q = Ae / 2, Ve = .12, He = 8, Ue = 5, We = .08;
function $(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function Ge() {
	let e = (Math.random() * 50 + 65) * Math.PI / 180, t = Math.random() > .5 ? 1 : -1, n = Math.random() > .5 ? 1 : -1;
	return {
		vx: Math.cos(e) * Z * t,
		vy: Math.sin(e) * Z * n
	};
}
var Ke = ({ onClose: e }) => {
	let t = d(), n = u(), r = R(null), i = R(null), a = R(null), o = R(null), [c, l] = z(null), f = R(/* @__PURE__ */ new Set()), p = R({
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		speed: Z
	}), m = R(0), h = R(0), g = R(0), ee = R({
		player: 0,
		ai: 0
	}), v = R("countdown"), y = R(0), ne = R(0), b = R([]), x = R(0), S = R(0), C = R({
		width: 0,
		height: 0
	}), w = R(0), T = R(0), E = R(Y), D = R(0), O = R(0), k = R(0), A = R(0), j = R(null), [M, P] = z({
		x: 0,
		y: 0
	}), [I, L] = z(0), [ie, ae] = z(0), [oe, se] = z({
		player: 0,
		ai: 0
	}), [U, ce] = z(Y), [W, le] = z("countdown"), [G, ue] = z(3), [K, q] = z([]), [de, fe] = z(0), [pe, me] = z(0), [he, ge] = z(null), [_e, ve] = z(null), ye = N(() => {
		let { width: e, height: t } = C.current, n = Z + D.current;
		p.current = {
			x: e / 2,
			y: t / 2,
			vx: 0,
			vy: 0,
			speed: n
		}, b.current = [], ne.current = 0;
	}, []), be = N(() => {
		let e = Z + D.current, { vx: t, vy: n } = Ge(), r = e / Z;
		p.current.vx = t * r, p.current.vy = n * r, p.current.speed = e, v.current = "playing", le("playing"), j.current = null, ve(null);
	}, []), xe = N(() => {
		ye(), v.current = "countdown", le("countdown"), ue(3);
		let e = 3, t = setInterval(() => {
			e--, e <= 0 ? (clearInterval(t), be()) : ue(e);
		}, 600);
		return () => clearInterval(t);
	}, [ye, be]), Se = N(() => {
		n || !o.current || o.current({
			particleCount: 80,
			spread: 70,
			origin: {
				x: .5,
				y: .7
			},
			colors: [
				"#9D76F3",
				"#3FC495",
				"#E61D46",
				"#F6AF3D"
			],
			disableForReducedMotion: !0
		});
	}, [n]), Ce = N((n) => {
		let r = { ...ee.current };
		if (n === "player" ? r.player++ : r.ai++, ee.current = r, se(r), w.current = 8, j.current = n, ve(n), D.current = Math.min(11, D.current + Re), n === "player" && Se(), r.player >= 3 || r.ai >= 3) {
			v.current = "gameover", le("gameover"), ye(), ge(r.player >= 3 ? t.ai.pong.youWin : t.ai.pong.youLose), setTimeout(() => e(), 2e3);
			return;
		}
		v.current = "scored", le("scored"), ye(), y.current = ze, setTimeout(() => {
			v.current === "scored" && xe();
		}, ze);
	}, [
		ye,
		xe,
		Se,
		t
	]);
	if (F(() => {
		if (r.current) {
			let e = r.current.closest("[aria-hidden]");
			e && l(e);
		}
	}, []), F(() => (a.current && (o.current = s.create(a.current, {
		resize: !0,
		useWorker: !1
	})), () => {
		o.current?.reset();
	}), [c]), F(() => {
		let t = (t) => {
			t.key === "Escape" && e(), (t.key === "ArrowLeft" || t.key === "ArrowRight") && (t.preventDefault(), f.current.add(t.key));
		}, n = (e) => {
			f.current.delete(e.key);
		};
		return window.addEventListener("keydown", t), window.addEventListener("keyup", n), () => {
			window.removeEventListener("keydown", t), window.removeEventListener("keyup", n);
		};
	}, [e]), F(() => {
		let e = i.current;
		if (!e) return;
		let t = e.getBoundingClientRect();
		C.current = {
			width: t.width,
			height: t.height
		};
		let n = t.width / 2;
		m.current = n, h.current = n, g.current = n, ee.current = {
			player: 0,
			ai: 0
		}, se({
			player: 0,
			ai: 0
		}), T.current = 0, E.current = Y, ce(Y), D.current = 0, O.current = 0;
		let r = xe(), a = (t) => {
			let n = e.getBoundingClientRect(), r = E.current;
			m.current = $(t.clientX - n.left, r / 2 + X, n.width - r / 2 - X);
		};
		e.addEventListener("pointermove", a);
		let o = (e) => {
			x.current ||= e;
			let t = (e - x.current) / 16.667, n = Math.min(t, 3);
			x.current = e;
			let { width: r, height: i } = C.current, a = p.current, s = E.current;
			if (f.current.has("ArrowLeft") && (m.current = $(m.current - Fe * n, s / 2 + X, r - s / 2 - X)), f.current.has("ArrowRight") && (m.current = $(m.current + Fe * n, s / 2 + X, r - s / 2 - X)), w.current > 0 && (w.current *= .85, w.current < .5 && (w.current = 0)), v.current === "playing") {
				b.current.push({
					x: a.x,
					y: a.y
				}), b.current.length > Ue && (b.current = b.current.slice(-5)), a.x += a.vx * n, a.y += a.vy * n, k.current += A.current * n, A.current *= .96;
				let e = r - X - Ae / 2;
				a.x <= 28 && (a.x = 28, a.vx = Math.abs(a.vx), A.current *= -.5), a.x >= e && (a.x = e, a.vx = -Math.abs(a.vx), A.current *= -.5);
				let t = i - Ne - Me, o = s / 2;
				if (a.y + Q >= t && a.y - Q <= t + Me && a.vy > 0 && a.x >= m.current - o - Q && a.x <= m.current + o + Q) {
					a.y = t - Q;
					let e = $((a.x - m.current) / o, -1, 1);
					a.speed = Math.min(a.speed + Le, Ie);
					let n = e * Be;
					a.vx = Math.sin(n) * a.speed, a.vy = -Math.cos(n) * a.speed, A.current = e * 1.2, ne.current++, T.current++;
					let r = je / Y + (1 - je / Y) * Math.exp(-T.current * .03);
					E.current = Y * r;
				}
				let c = Y / 2;
				if (a.y - Q <= 56 && a.y + Q >= Ne && a.vy < 0 && a.x >= h.current - c - Q && a.x <= h.current + c + Q) {
					a.y = 76;
					let e = $((a.x - h.current) / c, -1, 1);
					a.speed = Math.min(a.speed + Le, Ie);
					let t = e * Be;
					a.vx = Math.sin(t) * a.speed, a.vy = Math.cos(t) * a.speed, A.current = e * 1.2, ne.current++;
				}
				if (a.y < -80 ? Ce("player") : a.y > i + 80 && Ce("ai"), a.vy < 0) {
					let e = Math.max(1, (a.y - Ne) / -a.vy), t = a.x + a.vx * e, r = He * (1 + a.speed / Ie), i = t + (Math.random() - .5) * r - g.current;
					g.current += i * Ve * n;
				} else {
					let e = Math.sin(Date.now() * .002) * 15;
					g.current += (r / 2 + e - g.current) * .025 * n;
				}
				let l = (g.current - h.current) * .1 * n;
				O.current += l, O.current *= .88;
				let u = 6 + ne.current * .12;
				O.current = $(O.current, -u, u), h.current += O.current * n, h.current = $(h.current, 54.5, r - Y / 2 - X);
			}
			P({
				x: a.x,
				y: a.y
			}), L(m.current), ae(h.current), q([...b.current]), fe(w.current), ce(E.current), me(k.current), S.current = requestAnimationFrame(o);
		};
		return x.current = 0, S.current = requestAnimationFrame(o), () => {
			cancelAnimationFrame(S.current), e.removeEventListener("pointermove", a), r?.();
		};
	}, [
		c,
		Ce,
		xe
	]), !c) return /* @__PURE__ */ V("div", { ref: r });
	let we = de > .5 ? (Math.random() - .5) * de : 0, Te = de > .5 ? (Math.random() - .5) * de : 0;
	return B(/* @__PURE__ */ H("div", {
		className: "absolute inset-0 z-50 flex flex-col bg-f1-background",
		children: [/* @__PURE__ */ V("style", { children: "\n        @property --gradient-angle {\n          syntax: \"<angle>\";\n          initial-value: 0deg;\n          inherits: false;\n        }\n        @keyframes pong-ai-glow {\n          from { --gradient-angle: 0deg; }\n          to { --gradient-angle: 360deg; }\n        }\n      " }), /* @__PURE__ */ H("div", {
			className: "flex flex-1 flex-col bg-f1-special-page",
			children: [
				/* @__PURE__ */ H("div", {
					className: "flex items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ V("span", {
						className: "text-base font-medium text-f1-foreground",
						children: t.ai.pong.title
					}), /* @__PURE__ */ V(te, {
						icon: re,
						label: t.actions.close,
						onClick: e,
						variant: "ghost",
						hideLabel: !0
					})]
				}),
				/* @__PURE__ */ H("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ H("div", {
						ref: i,
						className: "absolute inset-0 cursor-none overflow-hidden",
						style: {
							touchAction: "none",
							transform: `translate(${we}px, ${Te}px)`
						},
						children: [
							/* @__PURE__ */ V("div", { className: "pointer-events-none absolute left-0 right-0 top-1/2 h-px translate-y-1/2 bg-f1-border" }),
							K.map((e, t) => {
								let n = (t + 1) / K.length, r = Ae * (.15 + n * .25);
								return /* @__PURE__ */ V("div", {
									className: "pointer-events-none absolute rounded-full bg-f1-foreground-secondary/40",
									style: {
										width: r,
										height: r,
										opacity: n * We,
										transform: `translate(${e.x - r / 2}px, ${e.y - r / 2}px)`
									}
								}, t);
							}),
							/* @__PURE__ */ V("div", {
								className: _("absolute isolate rounded", "border border-solid border-f1-border", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]", "before:rounded-[inherit] before:bg-f1-special-page before:content-['']", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]", "after:rounded-[inherit] after:blur-[5px] after:content-['']", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]", "after:scale-100 after:opacity-100"),
								style: {
									width: Y,
									height: Me,
									top: Ne,
									transform: `translateX(${ie - Y / 2}px)`,
									animation: "pong-ai-glow 4s linear infinite",
									"--gradient-angle": "0deg"
								}
							}),
							/* @__PURE__ */ V(ke, {
								size: Ae,
								className: "pointer-events-none absolute z-30",
								style: {
									transform: `translate(${M.x - Ae / 2}px, ${M.y - Ae / 2}px) rotate(${pe}rad)`,
									opacity: W === "countdown" ? 0 : 1,
									transition: "opacity 0.3s ease-in"
								}
							}),
							/* @__PURE__ */ V("div", {
								className: "absolute rounded border-2 border-solid border-f1-border",
								style: {
									width: U,
									height: Me,
									bottom: Ne,
									transform: `translateX(${I - U / 2}px)`,
									transition: "width 0.3s ease-out"
								},
								children: /* @__PURE__ */ V("div", { className: "h-full w-full rounded bg-f1-special-page" })
							}),
							/* @__PURE__ */ V("div", {
								className: "pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-f1-border bg-f1-special-page",
								children: /* @__PURE__ */ V("span", {
									className: "text-3xl font-semibold text-f1-foreground-secondary",
									style: {
										opacity: +(W === "countdown"),
										transition: "opacity 0.3s ease-out"
									},
									children: W === "countdown" ? G : ""
								})
							}),
							W === "scored" && _e && /* @__PURE__ */ V("div", {
								className: _("pointer-events-none absolute left-4 flex items-center", _e === "player" ? "top-1/2 mt-4" : "bottom-1/2 -mt-4"),
								children: /* @__PURE__ */ V("span", {
									className: "text-2xl font-semibold text-f1-foreground-secondary/60",
									children: t.ai.pong.goal
								})
							}),
							W === "gameover" && he && /* @__PURE__ */ V("div", {
								className: "pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-f1-special-page/60 backdrop-blur-sm",
								children: /* @__PURE__ */ V("span", {
									className: "text-2xl font-semibold text-f1-foreground",
									children: he
								})
							}),
							/* @__PURE__ */ V("canvas", {
								ref: a,
								className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
							})
						]
					}), /* @__PURE__ */ V("div", {
						className: "pointer-events-none absolute inset-y-0 right-0 flex flex-col items-center justify-center",
						style: { width: Pe },
						children: /* @__PURE__ */ H("div", {
							className: "flex flex-col items-center gap-6",
							children: [/* @__PURE__ */ V("span", {
								className: _("text-2xl font-semibold", oe.ai > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"),
								children: oe.ai
							}), /* @__PURE__ */ V("span", {
								className: _("text-2xl font-semibold", oe.player > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"),
								children: oe.player
							})]
						})
					})]
				}),
				/* @__PURE__ */ V("div", {
					className: "flex items-center justify-center px-4 py-3 text-sm font-medium text-f1-foreground-secondary",
					children: /* @__PURE__ */ H("div", {
						className: "flex gap-5",
						children: [/* @__PURE__ */ V("span", { children: t.ai.pong.controls }), /* @__PURE__ */ V("span", { children: t.ai.pong.escToExit })]
					})
				})
			]
		})]
	}), c);
}, qe = ({ onResize: e, onReset: t, isResizing: n, setIsResizing: r, isCanvasMode: i, side: a = "right" }) => {
	let o = R(0), s = R(0), c = R(null), l = N((e) => {
		e.preventDefault(), o.current = e.clientX, r(!0);
	}, [r]), u = N(async () => {
		r(!0), await t(), r(!1);
	}, [t, r]);
	return F(() => {
		if (!n) return;
		let t = () => {
			c.current = null;
			let t = s.current;
			s.current = 0, t !== 0 && e(t);
		}, i = (e) => {
			let n = a === "left" ? e.clientX - o.current : o.current - e.clientX;
			o.current = e.clientX, s.current += n, c.current ??= requestAnimationFrame(t);
		}, l = () => {
			r(!1);
		};
		return document.addEventListener("mousemove", i), document.addEventListener("mouseup", l), () => {
			document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", l), c.current != null && (cancelAnimationFrame(c.current), c.current = null), t();
		};
	}, [
		n,
		e,
		r,
		a
	]), /* @__PURE__ */ H("div", {
		className: _("group relative z-10 h-full flex-shrink-0 cursor-ew-resize w-1", i && "border border-solid border-x-0 border-f1-border-secondary bg-f1-special-page"),
		onMouseDown: l,
		onDoubleClick: u,
		children: [/* @__PURE__ */ V("div", {
			"aria-hidden": !0,
			className: "absolute -inset-x-1 inset-y-0"
		}), /* @__PURE__ */ V("div", {
			"aria-hidden": !0,
			className: _("pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 rounded-full", "transition-[width,background-color] duration-150 ease-out", "w-px bg-transparent", "group-hover:w-1 group-hover:bg-f1-background-secondary-hover", n && "!w-1 !bg-f1-background-secondary-hover")
		})]
	});
}, Je = ({ children: e, visible: t, side: n, exitStyle: r = "shrink", acceptsWidgetDrop: i = !1 }) => {
	let { open: a, visualizationMode: o, shouldPlayEntranceAnimation: s, setShouldPlayEntranceAnimation: c, resizable: d, setChatWidth: f, resetChatWidth: h, setIsResizing: g, fileAttachments: ee, isClarifying: v, fileDragOver: te, setFileDragOver: y, processDroppedFiles: b, setPendingQuote: x, focusChatInput: S, activeGame: C, closeGame: re, panelSide: w } = J(), T = t ?? a, E = i && C === null && T && !v, D = R(E);
	D.current = E;
	let O = R(null), k = o === "canvas", A = u(), j = (n ?? w) === "left", M = R(!1);
	F(() => {
		M.current = a;
	});
	let P = R(0), I = ee?.onUploadFiles != null && !v;
	F(() => {
		E || O.current?.removeAttribute("data-ai-chat-dropzone");
	}, [E]);
	let B = N((e) => {
		e.preventDefault(), e.stopPropagation(), P.current++, I && y(!0);
	}, [I, y]), ie = N((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []), ae = N((e) => {
		e.preventDefault(), e.stopPropagation(), P.current--, P.current <= 0 && (P.current = 0, y(!1));
	}, [y]), oe = N((e) => {
		e.preventDefault(), e.stopPropagation(), P.current = 0, y(!1);
	}, [y]), se = R(null), [U, ce] = z(null), G = N((e) => {
		se.current = e, ce(e?.title ?? null);
	}, []);
	F(() => {
		let e = (e) => {
			if (!E) return;
			let t = e.detail;
			typeof t?.id != "string" || !t.id || typeof t.title != "string" || !t.title.trim() || G(t);
		}, t = () => G(null);
		return window.addEventListener(W, e), window.addEventListener(le, t), () => {
			window.removeEventListener(W, e), window.removeEventListener(le, t);
		};
	}, [E, G]), F(() => {
		E || G(null);
	}, [E, G]);
	let ue = N(() => {
		if (!D.current) {
			G(null);
			return;
		}
		let e = se.current;
		if (e !== null) {
			if (G(null), e.onAskAi) e.onAskAi({
				id: e.id,
				title: e.title
			});
			else {
				let t = { text: e.title };
				e.onAskAiTarget?.({
					id: e.id,
					title: e.title,
					quote: t
				}), x(t), S();
			}
		}
	}, [
		E,
		S,
		G,
		x
	]), K = o === "fullscreen", [q, de] = z(!1);
	F(() => {
		if (q) return g?.(!0), () => g?.(!1);
	}, [q, g]);
	let fe = l(`(max-width: ${ne.md}px)`, { initializeWithValue: !0 }), pe = N((e) => {
		f((t) => {
			let n = t + e;
			return Math.max(300, Math.min(712, n));
		});
	}, [f]), me = L(() => q || A ? { duration: 0 } : {
		duration: .3,
		ease: [
			0,
			0,
			.1,
			1
		]
	}, [
		q,
		A,
		s
	]), he = j ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
	return /* @__PURE__ */ V(m, { children: T && /* @__PURE__ */ H(p.div, {
		className: _("bg-f1-transparent pointer-events-auto relative flex h-full dark:bg-f1-background md:py-1", K ? "md:pr-1" : j ? "mr-auto" : "ml-auto md:pr-1"),
		initial: !A && s && !M.current ? {
			opacity: 0,
			clipPath: he
		} : !1,
		animate: {
			opacity: 1,
			clipPath: "inset(0 0 0 0)"
		},
		exit: A ? {
			opacity: 0,
			transition: { duration: 0 }
		} : r === "hold" ? {
			opacity: 0,
			transition: {
				delay: .25,
				duration: .05
			}
		} : {
			opacity: 0,
			clipPath: he
		},
		transition: me,
		style: {
			width: "100%",
			transformOrigin: j ? "left center" : "right center"
		},
		onAnimationComplete: () => {
			s && c(!1);
		},
		children: [
			d && !K && !fe && !j && /* @__PURE__ */ V(qe, {
				onResize: pe,
				onReset: h,
				isResizing: q,
				setIsResizing: de,
				isCanvasMode: k,
				side: "right"
			}),
			/* @__PURE__ */ H("div", {
				ref: O,
				"aria-hidden": !T,
				className: _("relative flex h-full w-full flex-col overflow-hidden bg-f1-special-page border border-solid border-f1-border-secondary", k && (j ? "border-r-transparent" : "border-l-transparent"), k ? j ? "xs:rounded-l-xl" : "xs:rounded-r-xl" : "xs:rounded-xl"),
				"data-ai-chat-dropzone": E ? "" : void 0,
				onDragEnter: B,
				onDragOver: ie,
				onDragLeave: ae,
				onDrop: oe,
				onPointerUp: ue,
				children: [
					/* @__PURE__ */ V("div", {
						className: "relative flex h-full w-full flex-col overflow-hidden",
						children: e
					}),
					(I || E && U !== null) && /* @__PURE__ */ V(Oe, {
						visible: I && te || U !== null,
						mode: U === null ? "files" : "discuss",
						onFilesDropped: I ? (e) => {
							P.current = 0, y(!1), b(e);
						} : void 0
					}),
					C === "pong" && /* @__PURE__ */ V(Ke, { onClose: re })
				]
			}),
			d && !K && !fe && j && /* @__PURE__ */ V(qe, {
				onResize: pe,
				onReset: h,
				isResizing: q,
				setIsResizing: de,
				isCanvasMode: k,
				side: "left"
			})
		]
	}, "chat-wrapper") });
}, Ye = ({ enabled: e = !1, side: t, panelContentSide: n, initialMessage: r, chatHeader: i, chatMessages: a, chatInput: o, chatOverlay: s, welcomeScreenSuggestions: c, welcomeScreenCards: l, disclaimer: u, resizable: d = !1, defaultVisualizationMode: f, lockVisualizationMode: p, historyEnabled: m, footer: h, VoiceMode: g, entityRefs: _, canvasActions: ee, canvasEntities: v, credits: te, employeeCredits: y, creditWarning: ne, fileAttachments: b, onTranscribe: x, onThumbsUp: S, onThumbsDown: C, children: re, agent: w, tracking: T }) => /* @__PURE__ */ V(Se, {
	enabled: e,
	side: t,
	panelContentSide: n,
	onThumbsUp: S,
	onThumbsDown: C,
	agent: w,
	initialMessage: r,
	chatHeader: i,
	chatMessages: a,
	chatInput: o,
	chatOverlay: s,
	welcomeScreenSuggestions: c,
	welcomeScreenCards: l,
	disclaimer: u,
	resizable: d,
	defaultVisualizationMode: f,
	lockVisualizationMode: p,
	historyEnabled: m,
	footer: h,
	VoiceMode: g,
	tracking: T,
	entityRefs: _,
	canvasActions: ee,
	canvasEntities: v,
	credits: te,
	employeeCredits: y,
	creditWarning: ne,
	fileAttachments: b,
	onTranscribe: x,
	children: re
}), Xe = f("F0AiChat", ({ header: e, messages: t, input: n, overlay: r }) => {
	let { enabled: i, open: a, setOpen: o, mode: s, visualizationMode: c, VoiceMode: l, tracking: f, chatHeader: h, chatMessages: g, chatInput: _, chatOverlay: te, panelContent: y, panelSide: ne, panelContentSide: b, restoringPanelContentId: x } = J(), S = d(), C = b !== ne, { motionProps: w } = G(c === "fullscreen" ? "fullscreen" : "docked", (e, t) => t === "fullscreen" ? 220 : 460), T = u(), E = e ?? h, D = t ?? g, O = n ?? _, k = r ?? te;
	if (!i) return null;
	let A, j;
	return y && !C ? (A = `panel:${y.id}`, j = y.content) : x && !C ? (A = `restoring:${x}`, j = /* @__PURE__ */ V(v, {
		role: "status",
		"aria-busy": !0,
		className: "h-full w-full rounded-none"
	})) : s === "voice" && l ? (A = "voice", j = /* @__PURE__ */ H("div", {
		className: "flex h-full w-full flex-col",
		children: [/* @__PURE__ */ V("div", {
			className: "absolute right-3 top-3 z-20",
			children: /* @__PURE__ */ V(ee, {
				variant: "ghost",
				hideLabel: !0,
				label: S.ai.closeChat,
				icon: re,
				onClick: () => {
					o(!1), f?.onClose?.();
				}
			})
		}), /* @__PURE__ */ V(l, {})]
	})) : (A = "chat", j = /* @__PURE__ */ H("div", {
		className: "relative flex h-full w-full flex-col",
		children: [/* @__PURE__ */ H("div", {
			ref: (e) => {
				k ? e?.setAttribute("inert", "") : e?.removeAttribute("inert");
			},
			className: "flex min-h-0 flex-1 flex-col",
			children: [E, /* @__PURE__ */ H(p.div, {
				className: "flex min-h-0 flex-1 flex-col",
				...w,
				children: [/* @__PURE__ */ V("div", {
					className: "flex min-h-0 flex-1 flex-col overflow-hidden",
					children: D
				}), O]
			})]
		}), k && /* @__PURE__ */ V("div", {
			className: "absolute inset-0 z-30 flex items-center justify-center bg-f1-background-overlay p-4",
			children: k
		})]
	})), /* @__PURE__ */ V(Je, {
		visible: C ? a && !y && !x : void 0,
		exitStyle: C && a ? "hold" : "shrink",
		acceptsWidgetDrop: A === "chat" && !k,
		children: /* @__PURE__ */ V(m, {
			initial: !1,
			children: /* @__PURE__ */ V(p.div, {
				className: "absolute inset-0 flex flex-col overflow-hidden",
				initial: !T && { opacity: 0 },
				animate: { opacity: 1 },
				exit: T ? void 0 : { opacity: 0 },
				transition: {
					duration: T ? 0 : .15,
					ease: "easeOut"
				},
				children: j
			}, A)
		})
	});
}), Ze = f("F0AiChatProvider", Ye);
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Block.tsx
function Qe({ children: e, ...t }) {
	return /* @__PURE__ */ V("pre", {
		...t,
		className: _("relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2", t.className),
		children: e
	});
}
function $e({ children: e, ...t }) {
	return /* @__PURE__ */ V("code", {
		...t,
		className: _("rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground", "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base", t.className),
		children: e
	});
}
function et({ children: e, ...t }) {
	return /* @__PURE__ */ V("blockquote", {
		...t,
		className: _("mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base", t.className),
		children: e
	});
}
function tt({ ...e }) {
	return /* @__PURE__ */ V("hr", {
		...e,
		className: _("my-3 border-0 border-t border-f1-border", e.className)
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Image.tsx
function nt({ src: e, alt: t, ...n }) {
	let r = () => {
		if (e) {
			let n = document.createElement("a");
			n.href = e, n.download = t || "image", document.body.appendChild(n), n.click(), document.body.removeChild(n);
		}
	};
	return /* @__PURE__ */ H("div", {
		className: "relative w-fit",
		children: [/* @__PURE__ */ V("img", {
			...n,
			src: e,
			alt: t,
			className: _("max-w-full rounded-md", n.className)
		}), /* @__PURE__ */ V("div", {
			className: "absolute right-2 top-2 rounded",
			children: /* @__PURE__ */ V(te, {
				variant: "neutral",
				label: "Download",
				hideLabel: !0,
				icon: w,
				onClick: r
			})
		})]
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Link.tsx
function rt({ children: e, ...t }) {
	return /* @__PURE__ */ V(E, {
		...t,
		variant: "link",
		href: t.href,
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Lists.tsx
function it({ children: e, ...t }) {
	return /* @__PURE__ */ V("ul", {
		...t,
		className: _("list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", t.className),
		children: e
	});
}
function at({ children: e, ...t }) {
	return /* @__PURE__ */ V("ol", {
		...t,
		className: _("list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", t.className),
		children: e
	});
}
function ot({ children: e, ...t }) {
	return /* @__PURE__ */ V("li", {
		...t,
		className: _("mb-2", t.className),
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Table.tsx
async function st(e, t, n) {
	let r = await import("./xlsx-xmyx_Olh.js").then((e) => e.i), i = r.utils.table_to_book(e, { sheet: "Data" });
	r.writeFile(i, `${n}.${t}`);
}
function ct({ children: e, title: t, ...n }) {
	let r = d(), i = R(null), a = N((e) => {
		if (!i.current) return;
		let n = t?.replace(/\s+/g, "_").toLowerCase() || "table";
		st(i.current, e, n);
	}, [t]);
	return /* @__PURE__ */ H("div", {
		className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary",
		children: [/* @__PURE__ */ H("div", {
			className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
			children: [/* @__PURE__ */ V(o, {
				tag: "h2",
				className: "text-base font-medium capitalize text-f1-foreground",
				children: t ?? r.ai.reportCard.tableLabel
			}), /* @__PURE__ */ V(T, {
				icon: w,
				size: "md",
				items: [{
					label: r.t("ai.dataDownload.download", { format: "Excel" }),
					icon: w,
					onClick: () => a("xlsx")
				}, {
					label: r.t("ai.dataDownload.download", { format: "CSV" }),
					icon: w,
					onClick: () => a("csv")
				}]
			})]
		}), /* @__PURE__ */ V("div", {
			className: "scrollbar-macos overflow-x-auto",
			children: /* @__PURE__ */ V("table", {
				ref: i,
				...n,
				className: _("w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0", n.className),
				children: e
			})
		})]
	});
}
function lt({ children: e, ...t }) {
	return /* @__PURE__ */ V("th", {
		...t,
		className: _("sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary", t.className),
		children: e
	});
}
function ut({ children: e, ...t }) {
	return /* @__PURE__ */ V("td", {
		...t,
		className: _("max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2", t.className),
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Typography.tsx
function dt({ children: e, ...t }) {
	return /* @__PURE__ */ V("p", {
		...t,
		className: _("text-base font-normal", t.className),
		children: e
	});
}
function ft({ children: e, ...t }) {
	return /* @__PURE__ */ V("h1", {
		...t,
		className: _("mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function pt({ children: e, ...t }) {
	return /* @__PURE__ */ V("h2", {
		...t,
		className: _("mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function mt({ children: e, ...t }) {
	return /* @__PURE__ */ V("h3", {
		...t,
		className: _("mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function ht({ children: e, ...t }) {
	return /* @__PURE__ */ V("strong", {
		...t,
		className: _("font-semibold", t.className),
		children: e
	});
}
function gt({ children: e, ...t }) {
	return /* @__PURE__ */ V("em", {
		...t,
		className: _("italic", t.className),
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRefHoverCard.tsx
function _t({ id: e, trigger: t, resolver: n, mapToCard: r, fallbackCard: i }) {
	let a = R(/* @__PURE__ */ new Map()), [o, s] = z(() => a.current.get(e) ?? null), [c, l] = z(!1), [u, d] = z(!1), f = R(!0);
	F(() => () => {
		f.current = !1;
	}, []);
	let p = N(() => {
		if (o || c) return;
		let t = a.current.get(e);
		if (t) {
			s(t);
			return;
		}
		l(!0), d(!1), n(e).then((t) => {
			a.current.set(e, t), f.current && s(t);
		}).catch(() => {
			f.current && d(!0);
		}).finally(() => {
			f.current && l(!1);
		});
	}, [
		n,
		e,
		o,
		c
	]), m = u || !o ? i : r(o);
	return /* @__PURE__ */ H(b, {
		openDelay: 300,
		closeDelay: 100,
		onOpenChange: (e) => {
			e && p();
		},
		children: [/* @__PURE__ */ V(S, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ V(x, {
			side: "top",
			align: "start",
			className: "w-64 rounded-2xl border-none p-0 shadow-md",
			children: c ? /* @__PURE__ */ V(C.Skeleton, {}) : /* @__PURE__ */ V(C, { ...m })
		})]
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/candidate/CandidateEntityRef.tsx
var vt = M(({ label: e, ...t }, n) => /* @__PURE__ */ V("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
vt.displayName = "CandidateTrigger";
function yt({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.candidate, i = d(), a = n?.urls?.candidate?.(e), o = L(() => (e) => {
		let t = [];
		return e.source && t.push({
			title: i.t("ai.entityRef.candidate.source"),
			value: e.source
		}), e.appliedAt && t.push({
			title: i.t("ai.entityRef.candidate.applied"),
			value: e.appliedAt
		}), {
			avatar: {
				type: "person",
				firstName: e.firstName,
				lastName: e.lastName,
				src: e.avatarUrl
			},
			title: `${e.firstName} ${e.lastName}`,
			...t.length > 0 && { children: /* @__PURE__ */ V("div", {
				className: "flex flex-col gap-2",
				children: t.map((e) => /* @__PURE__ */ H("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ V("p", {
						className: "text-f1-foreground-secondary",
						children: e.title
					}), /* @__PURE__ */ V("div", {
						className: "flex items-center gap-1.5 font-medium text-f1-foreground",
						children: e.value
					})]
				}, e.title))
			}) },
			...a && { secondaryActions: {
				label: i.t("ai.view"),
				href: a
			} }
		};
	}, [i, a]), s = L(() => ({
		title: t,
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [
		t,
		i,
		a
	]);
	return r ? /* @__PURE__ */ V(_t, {
		id: e,
		trigger: /* @__PURE__ */ V(vt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ V("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/expense/ExpenseEntityRef.tsx
var bt = M(({ label: e, ...t }, n) => /* @__PURE__ */ V("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
bt.displayName = "ExpenseTrigger";
function xt({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.expense, i = d(), a = n?.urls?.expense?.(e), o = L(() => (e) => ({
		avatar: {
			type: "icon",
			icon: ae
		},
		title: e.description || `Expense #${e.id}`,
		description: [e.amount, e.status].filter(Boolean).join(" · "),
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [i, a]), s = L(() => ({
		title: t,
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [
		t,
		i,
		a
	]);
	return r ? /* @__PURE__ */ V(_t, {
		id: e,
		trigger: /* @__PURE__ */ V(bt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ V("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/jobPosting/JobPostingEntityRef.tsx
var St = M(({ label: e, ...t }, n) => /* @__PURE__ */ V("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
St.displayName = "JobPostingTrigger";
function Ct({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.jobPosting, i = d(), a = n?.urls?.jobPosting?.(e), o = L(() => (e) => ({
		title: e.title,
		description: [e.status, e.location].filter(Boolean).join(" · "),
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [i, a]), s = L(() => ({
		title: t,
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [
		t,
		i,
		a
	]);
	return r ? /* @__PURE__ */ V(_t, {
		id: e,
		trigger: /* @__PURE__ */ V(St, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ V("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRefDetails.tsx
function wt({ rows: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ V("div", {
		className: "flex flex-col gap-2",
		children: e.map((e, t) => /* @__PURE__ */ H("div", {
			className: "flex flex-col",
			children: [e.label && /* @__PURE__ */ V("p", {
				className: "text-f1-foreground-secondary",
				children: e.label
			}), /* @__PURE__ */ V("div", {
				className: "flex items-center gap-1.5 font-medium text-f1-foreground",
				children: e.value
			})]
		}, e.label ?? t))
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/requisition/RequisitionEntityRef.tsx
var Tt = M(({ label: e, ...t }, n) => /* @__PURE__ */ V("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
Tt.displayName = "RequisitionTrigger";
function Et({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.requisition, i = d(), a = n?.urls?.requisition?.(e), o = L(() => (e) => {
		let t = e.lineManager ? `${e.lineManager.firstName} ${e.lineManager.lastName}` : void 0, n = [
			e.status ? {
				label: i.t("ai.entityRef.requisition.status"),
				value: /* @__PURE__ */ V("div", {
					className: "flex items-center pt-1",
					children: /* @__PURE__ */ V(y, {
						text: e.status,
						variant: e.statusVariant ?? "neutral"
					})
				})
			} : void 0,
			e.lineManager ? {
				label: i.t("ai.entityRef.requisition.lineManager"),
				value: /* @__PURE__ */ H("div", {
					className: "flex items-center gap-1.5 pt-1",
					children: [/* @__PURE__ */ V(D, {
						firstName: e.lineManager.firstName,
						lastName: e.lineManager.lastName,
						src: e.lineManager.avatarUrl,
						size: "xs"
					}), /* @__PURE__ */ V("span", { children: t })]
				})
			} : void 0,
			e.reason ? {
				label: i.t("ai.entityRef.requisition.reason"),
				value: e.reason
			} : void 0
		].filter((e) => e !== void 0);
		return {
			title: e.title,
			...e.location && { description: e.location },
			...n.length > 0 && { children: /* @__PURE__ */ V(wt, { rows: n }) },
			...a && { secondaryActions: {
				label: i.t("ai.view"),
				href: a
			} }
		};
	}, [i, a]), s = L(() => ({
		title: t,
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [
		t,
		i,
		a
	]);
	return r ? /* @__PURE__ */ V(_t, {
		id: e,
		trigger: /* @__PURE__ */ V(Tt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ V("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/person/PersonEntityRef.tsx
var Dt = M(({ label: e, ...t }, n) => /* @__PURE__ */ H("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: ["@", e]
}));
Dt.displayName = "PersonTrigger";
function Ot({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.person, i = d(), a = n?.urls?.person?.(e), o = L(() => (e) => ({
		avatar: {
			type: "person",
			firstName: e.firstName,
			lastName: e.lastName,
			src: e.avatarUrl
		},
		title: `${e.firstName} ${e.lastName}`,
		description: e.jobTitle,
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [i, a]), s = L(() => ({
		title: t,
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [
		t,
		i,
		a
	]);
	return r ? /* @__PURE__ */ V(_t, {
		id: e,
		trigger: /* @__PURE__ */ V(Dt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ V("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/vacancy/VacancyEntityRef.tsx
var kt = M(({ label: e, ...t }, n) => /* @__PURE__ */ V("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
kt.displayName = "VacancyTrigger";
function At({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.vacancy, i = d(), a = n?.urls?.vacancy?.(e), o = L(() => (e) => ({
		title: e.name,
		description: [e.status, e.vacancyType].filter(Boolean).join(" · "),
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [i, a]), s = L(() => ({
		title: t,
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [
		t,
		i,
		a
	]);
	return r ? /* @__PURE__ */ V(_t, {
		id: e,
		trigger: /* @__PURE__ */ V(kt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ V("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/entityRefRegistry.ts
var jt = {
	person: Ot,
	candidate: yt,
	expense: xt,
	"job-posting": Ct,
	requisition: Et,
	vacancy: At
};
function Mt(e) {
	return jt[e];
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRef.tsx
function Nt(e) {
	return typeof e == "string" ? e : typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(Nt).join("") : e && typeof e == "object" && "props" in e ? Nt(e.props.children) : "";
}
function Pt({ type: e, id: t, children: n }) {
	if (!t || !e) return /* @__PURE__ */ V("span", { children: n });
	let r = Nt(n), i = Mt(e);
	return i ? /* @__PURE__ */ V(i, {
		id: t,
		label: r
	}) : /* @__PURE__ */ V("span", { children: n });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/MarkdownRenderers.tsx
var Ft = {
	p: dt,
	h1: ft,
	h2: pt,
	h3: mt,
	a: rt,
	strong: ht,
	em: gt,
	li: ot,
	pre: Qe,
	code: $e,
	blockquote: et,
	hr: tt,
	ul: it,
	ol: at,
	table: ct,
	th: lt,
	td: ut,
	img: nt,
	"entity-ref": Pt
}, It = j(null);
function Lt({ children: e }) {
	let [t, n] = z(0), r = R([]), i = N((e) => {
		let t = r.current, i = t.findIndex((t) => t.formName === e.formName && t.customFieldName === e.customFieldName), a = e;
		i >= 0 ? t[i] = a : t.push(a), n((e) => e + 1);
	}, []), a = L(() => ({
		formatters: [...r.current],
		setFormCardValueFormatter: i
	}), [i, t]);
	return /* @__PURE__ */ V(It.Provider, {
		value: a,
		children: e
	});
}
function Rt(e) {
	let t = P(It)?.formatters;
	return L(() => !t || t.length === 0 ? null : (n, r, i) => {
		let a, o = -1;
		for (let n of t) {
			let t = n.formName === void 0 || n.formName === e, r = n.customFieldName === void 0 || n.customFieldName === i.customFieldName;
			if (!t || !r) continue;
			let s = 0;
			n.formName !== void 0 && (s += 2), n.customFieldName !== void 0 && (s += 1), s > o && (o = s, a = n);
		}
		if (a) return a.format(r, {
			key: n,
			...i
		});
	}, [t, e]);
}
function zt() {
	let e = P(It);
	if (!e) throw Error("useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider");
	return e.setFormCardValueFormatter;
}
//#endregion
//#region src/kits/ai/F0AiMessagesContainer/useReplySelection.ts
var Bt = 2;
function Vt(e, t) {
	if (!e.intersectsNode(t)) return null;
	let n = document.createRange();
	n.selectNodeContents(t);
	let r = e.cloneRange();
	r.compareBoundaryPoints(Range.START_TO_START, n) < 0 && r.setStart(n.startContainer, n.startOffset), r.compareBoundaryPoints(Range.END_TO_END, n) > 0 && r.setEnd(n.endContainer, n.endOffset);
	let i = r.toString().trim();
	if (i.length < Bt) return null;
	let a = r.getBoundingClientRect();
	return {
		rect: a.width > 0 || a.height > 0 ? a : t.getBoundingClientRect(),
		text: i
	};
}
function Ht({ containerRef: e, enabled: t = !0 }) {
	let [n, r] = z(null), i = N(() => r(null), []);
	return F(() => {
		if (!t || typeof window > "u") return;
		let n = e.current;
		if (!n) return;
		let i = () => {
			let e = window.getSelection();
			if (!e || e.isCollapsed || e.rangeCount === 0) {
				r(null);
				return;
			}
			r(Vt(e.getRangeAt(0), n));
		}, a = () => {
			window.setTimeout(i, 0);
		}, o = () => {
			let e = window.getSelection();
			(!e || e.isCollapsed || e.rangeCount === 0) && r(null);
		};
		return document.addEventListener("mouseup", a), document.addEventListener("keyup", a), document.addEventListener("selectionchange", o), () => {
			document.removeEventListener("mouseup", a), document.removeEventListener("keyup", a), document.removeEventListener("selectionchange", o);
		};
	}, [e, t]), {
		anchor: n,
		clear: i
	};
}
//#endregion
//#region src/kits/ai/F0AiMessagesContainer/components/ReplyPopover.tsx
var Ut = 8, Wt = 8;
function Gt({ anchor: e, onReply: t }) {
	let n = d(), r = R(null), [i, a] = z(null);
	if (I(() => {
		if (!e) {
			a(null);
			return;
		}
		let t = r.current;
		if (!t) return;
		let n = t.offsetWidth, i = t.offsetHeight, o = window.innerWidth, s = window.innerHeight, c = e.rect.top - i - Ut;
		c < Wt && (c = e.rect.bottom + Ut), c = Math.min(Math.max(c, Wt), s - i - Wt);
		let l = e.rect.left + e.rect.width / 2 - n / 2, u = Math.min(Math.max(l, Wt), o - n - Wt);
		a({
			top: c,
			left: u
		});
	}, [e]), typeof document > "u" || !e) return null;
	let o = n.ai.reply;
	return B(/* @__PURE__ */ V("div", {
		style: {
			position: "fixed",
			top: i?.top ?? -9999,
			left: i?.left ?? -9999,
			visibility: i ? "visible" : "hidden"
		},
		className: _("z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary", "drop-shadow"),
		children: /* @__PURE__ */ V(ee, {
			ref: r,
			type: "button",
			variant: "ghost",
			label: o,
			icon: O,
			onClick: () => {
				t(e.text);
			}
		})
	}), document.body);
}
//#endregion
//#region src/kits/ai/F0AiMessagesContainer/components/AssistantMessage.tsx
var Kt = j(void 0), qt = () => P(Kt), Jt = (e) => /* @__PURE__ */ V(U, {
	content: e,
	format: "markdown"
}), Yt = ({ isGenerating: e, isLoading: t, message: n, renderToolCall: r, onReplyQuote: i, onRendered: a, renderMarkdown: o }) => {
	let s = typeof n?.content == "string" ? n.content : "", c = (n && r?.(n)) ?? n?.generativeUI?.() ?? null, l = n?.toolCalls?.[0]?.id, u = !s && !c, d = R(null), { anchor: f, clear: p } = Ht({
		containerRef: d,
		enabled: !!(n?.id && s)
	});
	return F(() => {
		n?.id && !t && !e && a?.(n);
	}, [
		n,
		t,
		e,
		a
	]), !t && !e && u ? null : /* @__PURE__ */ V(Kt.Provider, {
		value: l,
		children: /* @__PURE__ */ H("div", {
			className: "relative isolate flex w-full flex-col items-start justify-center",
			children: [
				n && s && /* @__PURE__ */ V("div", {
					ref: d,
					className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
					children: (o ?? Jt)(s)
				}),
				!!c && /* @__PURE__ */ V("div", {
					className: "w-full",
					children: c
				}),
				/* @__PURE__ */ V(Gt, {
					anchor: f,
					onReply: (e) => {
						i?.(e), p(), window.getSelection()?.removeAllRanges();
					}
				})
			]
		})
	});
}, Xt = { ai: A.ai }, Zt = j(null);
function Qt({ children: e, translations: t }) {
	return /* @__PURE__ */ V(Zt.Provider, {
		value: t,
		children: e
	});
}
function $t() {
	let e = P(Zt);
	if (e === null) throw Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
	return e;
}
//#endregion
export { W as C, ie as D, ae as E, le as S, ce as T, Oe as _, qt as a, K as b, Lt as c, Ft as d, Xe as f, ke as g, Ke as h, Yt as i, Rt as l, Je as m, $t as n, Gt as o, Ze as p, Xt as r, Ht as s, Qt as t, zt as u, J as v, U as w, G as x, ue as y };
