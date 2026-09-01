import { a as e, c as t, i as n, l as r, o as i, s as a, t as o } from "./OneEllipsis-DuhKMtYp.js";
import { E as s, O as c, S as l, _ as u, f as d, ht as f, k as p, lt as m, x as h } from "./variants-D_OHTcOj.js";
import { n as g, t as _ } from "./utils-CVzxZnoI.js";
import { i as v, l as y, r as ee } from "./F0Button-B67qxFBP.js";
import { Tt as b, l as x, st as S } from "./F0Checkbox-C-oCrD_5.js";
import { d as C, f as w, p as T, t as E } from "./F0Card--Nu-0ZfW.js";
import { t as te } from "./Cross-BmL9HU4z.js";
import { t as D } from "./Download-Dvj6cfxp.js";
import { t as O } from "./F0Link-DcIBxLD0.js";
import { r as k } from "./F0Avatar-CyikaOUL.js";
import { n as A, t as j } from "./RichText-CW-0xoDy.js";
import { t as M } from "./i18n-provider-defaults-CtgNC2Z7.js";
import { createContext as N, forwardRef as P, useCallback as F, useContext as I, useEffect as L, useLayoutEffect as R, useMemo as z, useRef as B, useState as V } from "react";
import { createPortal as H } from "react-dom";
import { jsx as U, jsxs as W } from "react/jsx-runtime";
var ne = P((e, t) => /* @__PURE__ */ W("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ U("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z"
	}), /* @__PURE__ */ U("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5"
	})]
})), re = P((e, t) => /* @__PURE__ */ W("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ U("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z"
		}),
		/* @__PURE__ */ U("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9"
		}),
		/* @__PURE__ */ U("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5"
		}),
		/* @__PURE__ */ U("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M11.5 7V6"
		}),
		/* @__PURE__ */ U("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M11.5 14V13"
		})
	]
}));
//#endregion
//#region src/lib/local-storage.ts
function ie(e, t) {
	try {
		let n = localStorage.getItem(e);
		return n === null ? t : JSON.parse(n);
	} catch {
		return t;
	}
}
function ae(e, t) {
	try {
		localStorage.setItem(e, JSON.stringify(t));
	} catch {}
}
//#endregion
//#region src/kits/ai/F0AiChat/providers/usePersistedState.ts
function G(e, t, n, r, i = 0) {
	let [a, o] = V(() => {
		if (typeof window > "u") return t;
		let r = ie(e, null);
		return r === null || n && !n(r) ? t : r;
	});
	return L(() => {
		if (typeof window > "u" || r && !r(a)) return;
		if (i <= 0) {
			ae(e, a);
			return;
		}
		let t = window.setTimeout(() => ae(e, a), i);
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
var oe = N(null), K = "ONE-ai-chat-width", se = 150, ce = "ONE-ai-chat-open", q = "ONE-ai-chat-visualization-mode", le = "ONE-ai-chat-panel-content-id", ue = 300, de = 712, fe = 5e3, pe = (e) => e === "sidepanel" || e === "fullscreen", me = () => {}, he = ({ children: e, enabled: t, side: n = "right", panelContentSide: r, agent: i, initialMessage: a, chatHeader: o, chatMessages: s, chatInput: c, chatOverlay: l, welcomeScreenSuggestions: u = [], welcomeScreenCards: f = [], disclaimer: p, resizable: m = !1, defaultVisualizationMode: h = "sidepanel", lockVisualizationMode: g = !1, historyEnabled: _ = !1, footer: v, VoiceMode: y, entityRefs: ee, canvasActions: b, canvasEntities: x, credits: S, employeeCredits: C, creditWarning: w, fileAttachments: T, onTranscribe: E, onThumbsDown: te, onThumbsUp: D, tracking: O }) => {
	let [k, A] = V(v), [j, M] = V(t), [N, P] = G(K, 360, (e) => typeof e == "number" && !isNaN(e) && e >= ue && e <= de, void 0, se), [I, R] = V(!1), [z, H] = G(ce, h === "fullscreen", (e) => typeof e == "boolean"), [W, ne] = G(q, h === "canvas" ? "sidepanel" : h, (e) => e === "sidepanel" || e === "fullscreen", pe), [re, ie] = V("chat"), [ae, me] = V(() => W !== "fullscreen"), [he, ge] = V(i), [_e, ve] = V(u), [ye, be] = V(f), J = d(), [xe, Se] = V([J.t("ai.inputPlaceholder")]), [Ce, we] = V(a);
	L(() => {
		z && O?.onVisibility?.();
	}, [z]);
	let [Te, Ee] = V(null), De = F((e) => {
		ne((t) => {
			let n = typeof e == "function" ? e(t) : e;
			return t === "canvas" && n !== "canvas" && Ee(null), n === "fullscreen" && H(!0), n;
		});
	}, [ne, H]), Oe = B("sidepanel"), [ke, Ae] = V(!1), [Y, je] = V(!1), [Me, Ne] = V(null), [X, Pe] = V(null), Fe = B(null), Z = B([]), Ie = F((e) => {
		Fe.current ? Fe.current(e) : Z.current.push(e);
	}, []), Le = F((e) => {
		if (Fe.current = e, e && Z.current.length > 0) {
			let t = Z.current;
			Z.current = [], t.forEach((t) => e(t));
		}
	}, []), Re = B(null), ze = B(!1), Be = F(() => Re.current ? (Re.current(), !0) : (ze.current = !0, !1), []), Q = F((e) => {
		Re.current = e, e && ze.current && (ze.current = !1, e());
	}, []), Ve = () => {
		P(360);
	};
	L(() => {
		M(t);
	}, [t]), L(() => {
		if (!z) {
			ze.current = !1, Ee(null), De("sidepanel");
			let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			me(!e);
		}
	}, [z]);
	let He = F((e) => {
		W !== "canvas" && (Oe.current = W), Ee(e), De("canvas"), z || H(!0);
	}, [W, z]), Ue = F(() => {
		Ee(null), W === "canvas" && De(Oe.current);
	}, [W]), [We, $] = V(null), Ge = F((e) => $(e), []), Ke = F(() => $(null), []), [qe, Je] = V(null), [Ye, Xe] = G(le, null, (e) => e === null || typeof e == "string"), [Ze, Qe] = V(() => z ? Ye : null), $e = F((e) => {
		Je(e), Qe(null), e && !z && H(!0);
	}, [z, H]), et = F(() => {
		Je(null), Qe(null);
	}, []), tt = F(() => Qe(null), []);
	L(() => {
		Ze || Xe(qe?.id ?? null);
	}, [
		qe,
		Ze,
		Xe
	]), L(() => {
		z || Qe(null);
	}, [z]), L(() => {
		if (!Ze) return;
		let e = setTimeout(() => Qe(null), fe);
		return () => clearTimeout(e);
	}, [Ze]);
	let [nt, rt] = V(n), [it, at] = V(r ?? n);
	return /* @__PURE__ */ U(oe.Provider, {
		value: {
			enabled: j,
			setEnabled: M,
			open: z,
			setOpen: H,
			mode: re,
			setMode: ie,
			visualizationMode: W,
			setVisualizationMode: De,
			lockVisualizationMode: g,
			historyEnabled: _,
			footer: k,
			VoiceMode: y,
			setFooter: A,
			shouldPlayEntranceAnimation: ae,
			setShouldPlayEntranceAnimation: me,
			agent: he,
			setAgent: ge,
			initialMessage: Ce,
			setInitialMessage: we,
			chatHeader: o,
			chatMessages: s,
			chatInput: c,
			chatOverlay: l,
			welcomeScreenSuggestions: _e,
			setWelcomeScreenSuggestions: ve,
			welcomeScreenCards: ye,
			setWelcomeScreenCards: be,
			onThumbsUp: D,
			onThumbsDown: te,
			placeholders: xe,
			setPlaceholders: Se,
			disclaimer: p,
			resizable: m,
			chatWidth: N,
			setChatWidth: P,
			resetChatWidth: Ve,
			isResizing: I,
			setIsResizing: R,
			tracking: O,
			entityRefs: ee,
			canvasActions: b,
			canvasEntities: x,
			credits: S,
			employeeCredits: C,
			creditWarning: w,
			fileAttachments: T,
			onTranscribe: E,
			canvasContent: Te,
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
}, ge = /* @__PURE__ */ new Set([
	"enabled",
	"open",
	"fileDragOver",
	"lockVisualizationMode",
	"historyEnabled",
	"resizable",
	"isClarifying"
]), _e = /* @__PURE__ */ new Set([
	"canvasContent",
	"pendingContext",
	"pendingQuote",
	"activeGame",
	"panelContent",
	"restoringPanelContentId"
]), ve = /* @__PURE__ */ new Set([
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
]), ye = {
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
}, be = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = t;
	if (n in ye) return ye[n];
	if (_e.has(n)) return null;
	if (!ve.has(n)) return !ge.has(n) && me;
} });
function J() {
	return I(oe) ?? be;
}
//#endregion
//#region src/components/RichText/F0RichTextDisplay/F0RichTextDisplay.tsx
var xe = n().use(i).use(a).use(e).use(t), Se = P(function({ content: e, className: t, format: n = "html", ...i }, a) {
	let o = z(() => r.sanitize(n === "markdown" ? String(xe.processSync(e)) : e, {
		ADD_ATTR: ["target"],
		ALLOWED_ATTR: [
			"href",
			"target",
			"rel",
			"class"
		]
	}), [n, e]), s = /<[^>]*>/.test(o);
	return /* @__PURE__ */ U("div", {
		ref: a,
		className: _("rich-text-display-container", !s && "whitespace-pre-wrap", t),
		dangerouslySetInnerHTML: { __html: o },
		...i
	});
}), Ce = f("F0RichTextDisplay", Se), we = Ce, Te = "f0:widget-drag-start", Ee = "f0:widget-drag-end";
//#endregion
//#region src/kits/ai/F0AiChat/hooks/useRevealOnChange.ts
function De(e, t, n = .2) {
	let r = u(), [i, a] = V(!0), o = B(e);
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
//#region src/kits/ai/F0AiChatTextArea/components/DropOverlay.tsx
var Oe = ({ visible: e, onFilesDropped: t, mode: n = "files" }) => {
	let r = d(), i = n === "discuss";
	return /* @__PURE__ */ W("div", {
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
		children: [/* @__PURE__ */ U(c, {
			icon: i ? ne : j,
			size: "lg",
			color: "bold"
		}), /* @__PURE__ */ U("p", {
			className: "text-base font-normal text-f1-foreground",
			children: i ? r.ai.dropWidgetToDiscuss : r.ai.dropFilesHere
		})]
	});
};
//#endregion
//#region src/kits/ai/F0AiPong/components/PongBall.tsx
function ke({ size: e = 40, className: t, style: n }) {
	return /* @__PURE__ */ U("div", {
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
	let t = d(), n = u(), r = B(null), i = B(null), a = B(null), o = B(null), [c, l] = V(null), f = B(/* @__PURE__ */ new Set()), p = B({
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		speed: Z
	}), m = B(0), h = B(0), g = B(0), v = B({
		player: 0,
		ai: 0
	}), y = B("countdown"), b = B(0), x = B(0), S = B([]), C = B(0), w = B(0), T = B({
		width: 0,
		height: 0
	}), E = B(0), D = B(0), O = B(Y), k = B(0), A = B(0), j = B(0), M = B(0), N = B(null), [P, I] = V({
		x: 0,
		y: 0
	}), [R, z] = V(0), [ne, re] = V(0), [ie, ae] = V({
		player: 0,
		ai: 0
	}), [G, oe] = V(Y), [K, se] = V("countdown"), [ce, q] = V(3), [le, ue] = V([]), [de, fe] = V(0), [pe, me] = V(0), [he, ge] = V(null), [_e, ve] = V(null), ye = F(() => {
		let { width: e, height: t } = T.current, n = Z + k.current;
		p.current = {
			x: e / 2,
			y: t / 2,
			vx: 0,
			vy: 0,
			speed: n
		}, S.current = [], x.current = 0;
	}, []), be = F(() => {
		let e = Z + k.current, { vx: t, vy: n } = Ge(), r = e / Z;
		p.current.vx = t * r, p.current.vy = n * r, p.current.speed = e, y.current = "playing", se("playing"), N.current = null, ve(null);
	}, []), J = F(() => {
		ye(), y.current = "countdown", se("countdown"), q(3);
		let e = 3, t = setInterval(() => {
			e--, e <= 0 ? (clearInterval(t), be()) : q(e);
		}, 600);
		return () => clearInterval(t);
	}, [ye, be]), xe = F(() => {
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
	}, [n]), Se = F((n) => {
		let r = { ...v.current };
		if (n === "player" ? r.player++ : r.ai++, v.current = r, ae(r), E.current = 8, N.current = n, ve(n), k.current = Math.min(11, k.current + Re), n === "player" && xe(), r.player >= 3 || r.ai >= 3) {
			y.current = "gameover", se("gameover"), ye(), ge(r.player >= 3 ? t.ai.pong.youWin : t.ai.pong.youLose), setTimeout(() => e(), 2e3);
			return;
		}
		y.current = "scored", se("scored"), ye(), b.current = ze, setTimeout(() => {
			y.current === "scored" && J();
		}, ze);
	}, [
		ye,
		J,
		xe,
		t
	]);
	if (L(() => {
		if (r.current) {
			let e = r.current.closest("[aria-hidden]");
			e && l(e);
		}
	}, []), L(() => (a.current && (o.current = s.create(a.current, {
		resize: !0,
		useWorker: !1
	})), () => {
		o.current?.reset();
	}), [c]), L(() => {
		let t = (t) => {
			t.key === "Escape" && e(), (t.key === "ArrowLeft" || t.key === "ArrowRight") && (t.preventDefault(), f.current.add(t.key));
		}, n = (e) => {
			f.current.delete(e.key);
		};
		return window.addEventListener("keydown", t), window.addEventListener("keyup", n), () => {
			window.removeEventListener("keydown", t), window.removeEventListener("keyup", n);
		};
	}, [e]), L(() => {
		let e = i.current;
		if (!e) return;
		let t = e.getBoundingClientRect();
		T.current = {
			width: t.width,
			height: t.height
		};
		let n = t.width / 2;
		m.current = n, h.current = n, g.current = n, v.current = {
			player: 0,
			ai: 0
		}, ae({
			player: 0,
			ai: 0
		}), D.current = 0, O.current = Y, oe(Y), k.current = 0, A.current = 0;
		let r = J(), a = (t) => {
			let n = e.getBoundingClientRect(), r = O.current;
			m.current = $(t.clientX - n.left, r / 2 + X, n.width - r / 2 - X);
		};
		e.addEventListener("pointermove", a);
		let o = (e) => {
			C.current ||= e;
			let t = (e - C.current) / 16.667, n = Math.min(t, 3);
			C.current = e;
			let { width: r, height: i } = T.current, a = p.current, s = O.current;
			if (f.current.has("ArrowLeft") && (m.current = $(m.current - Fe * n, s / 2 + X, r - s / 2 - X)), f.current.has("ArrowRight") && (m.current = $(m.current + Fe * n, s / 2 + X, r - s / 2 - X)), E.current > 0 && (E.current *= .85, E.current < .5 && (E.current = 0)), y.current === "playing") {
				S.current.push({
					x: a.x,
					y: a.y
				}), S.current.length > Ue && (S.current = S.current.slice(-5)), a.x += a.vx * n, a.y += a.vy * n, j.current += M.current * n, M.current *= .96;
				let e = r - X - Ae / 2;
				a.x <= 28 && (a.x = 28, a.vx = Math.abs(a.vx), M.current *= -.5), a.x >= e && (a.x = e, a.vx = -Math.abs(a.vx), M.current *= -.5);
				let t = i - Ne - Me, o = s / 2;
				if (a.y + Q >= t && a.y - Q <= t + Me && a.vy > 0 && a.x >= m.current - o - Q && a.x <= m.current + o + Q) {
					a.y = t - Q;
					let e = $((a.x - m.current) / o, -1, 1);
					a.speed = Math.min(a.speed + Le, Ie);
					let n = e * Be;
					a.vx = Math.sin(n) * a.speed, a.vy = -Math.cos(n) * a.speed, M.current = e * 1.2, x.current++, D.current++;
					let r = je / Y + (1 - je / Y) * Math.exp(-D.current * .03);
					O.current = Y * r;
				}
				let c = Y / 2;
				if (a.y - Q <= 56 && a.y + Q >= Ne && a.vy < 0 && a.x >= h.current - c - Q && a.x <= h.current + c + Q) {
					a.y = 76;
					let e = $((a.x - h.current) / c, -1, 1);
					a.speed = Math.min(a.speed + Le, Ie);
					let t = e * Be;
					a.vx = Math.sin(t) * a.speed, a.vy = Math.cos(t) * a.speed, M.current = e * 1.2, x.current++;
				}
				if (a.y < -80 ? Se("player") : a.y > i + 80 && Se("ai"), a.vy < 0) {
					let e = Math.max(1, (a.y - Ne) / -a.vy), t = a.x + a.vx * e, r = He * (1 + a.speed / Ie), i = t + (Math.random() - .5) * r - g.current;
					g.current += i * Ve * n;
				} else {
					let e = Math.sin(Date.now() * .002) * 15;
					g.current += (r / 2 + e - g.current) * .025 * n;
				}
				let l = (g.current - h.current) * .1 * n;
				A.current += l, A.current *= .88;
				let u = 6 + x.current * .12;
				A.current = $(A.current, -u, u), h.current += A.current * n, h.current = $(h.current, 54.5, r - Y / 2 - X);
			}
			I({
				x: a.x,
				y: a.y
			}), z(m.current), re(h.current), ue([...S.current]), fe(E.current), oe(O.current), me(j.current), w.current = requestAnimationFrame(o);
		};
		return C.current = 0, w.current = requestAnimationFrame(o), () => {
			cancelAnimationFrame(w.current), e.removeEventListener("pointermove", a), r?.();
		};
	}, [
		c,
		Se,
		J
	]), !c) return /* @__PURE__ */ U("div", { ref: r });
	let Ce = de > .5 ? (Math.random() - .5) * de : 0, we = de > .5 ? (Math.random() - .5) * de : 0;
	return H(/* @__PURE__ */ W("div", {
		className: "absolute inset-0 z-50 flex flex-col bg-f1-background",
		children: [/* @__PURE__ */ U("style", { children: "\n        @property --gradient-angle {\n          syntax: \"<angle>\";\n          initial-value: 0deg;\n          inherits: false;\n        }\n        @keyframes pong-ai-glow {\n          from { --gradient-angle: 0deg; }\n          to { --gradient-angle: 360deg; }\n        }\n      " }), /* @__PURE__ */ W("div", {
			className: "flex flex-1 flex-col bg-f1-special-page",
			children: [
				/* @__PURE__ */ W("div", {
					className: "flex items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ U("span", {
						className: "text-base font-medium text-f1-foreground",
						children: t.ai.pong.title
					}), /* @__PURE__ */ U(ee, {
						icon: te,
						label: t.actions.close,
						onClick: e,
						variant: "ghost",
						hideLabel: !0
					})]
				}),
				/* @__PURE__ */ W("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ W("div", {
						ref: i,
						className: "absolute inset-0 cursor-none overflow-hidden",
						style: {
							touchAction: "none",
							transform: `translate(${Ce}px, ${we}px)`
						},
						children: [
							/* @__PURE__ */ U("div", { className: "pointer-events-none absolute left-0 right-0 top-1/2 h-px translate-y-1/2 bg-f1-border" }),
							le.map((e, t) => {
								let n = (t + 1) / le.length, r = Ae * (.15 + n * .25);
								return /* @__PURE__ */ U("div", {
									className: "pointer-events-none absolute rounded-full bg-f1-foreground-secondary/40",
									style: {
										width: r,
										height: r,
										opacity: n * We,
										transform: `translate(${e.x - r / 2}px, ${e.y - r / 2}px)`
									}
								}, t);
							}),
							/* @__PURE__ */ U("div", {
								className: _("absolute isolate rounded", "border border-solid border-f1-border", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]", "before:rounded-[inherit] before:bg-f1-special-page before:content-['']", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]", "after:rounded-[inherit] after:blur-[5px] after:content-['']", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]", "after:scale-100 after:opacity-100"),
								style: {
									width: Y,
									height: Me,
									top: Ne,
									transform: `translateX(${ne - Y / 2}px)`,
									animation: "pong-ai-glow 4s linear infinite",
									"--gradient-angle": "0deg"
								}
							}),
							/* @__PURE__ */ U(ke, {
								size: Ae,
								className: "pointer-events-none absolute z-30",
								style: {
									transform: `translate(${P.x - Ae / 2}px, ${P.y - Ae / 2}px) rotate(${pe}rad)`,
									opacity: K === "countdown" ? 0 : 1,
									transition: "opacity 0.3s ease-in"
								}
							}),
							/* @__PURE__ */ U("div", {
								className: "absolute rounded border-2 border-solid border-f1-border",
								style: {
									width: G,
									height: Me,
									bottom: Ne,
									transform: `translateX(${R - G / 2}px)`,
									transition: "width 0.3s ease-out"
								},
								children: /* @__PURE__ */ U("div", { className: "h-full w-full rounded bg-f1-special-page" })
							}),
							/* @__PURE__ */ U("div", {
								className: "pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-f1-border bg-f1-special-page",
								children: /* @__PURE__ */ U("span", {
									className: "text-3xl font-semibold text-f1-foreground-secondary",
									style: {
										opacity: +(K === "countdown"),
										transition: "opacity 0.3s ease-out"
									},
									children: K === "countdown" ? ce : ""
								})
							}),
							K === "scored" && _e && /* @__PURE__ */ U("div", {
								className: _("pointer-events-none absolute left-4 flex items-center", _e === "player" ? "top-1/2 mt-4" : "bottom-1/2 -mt-4"),
								children: /* @__PURE__ */ U("span", {
									className: "text-2xl font-semibold text-f1-foreground-secondary/60",
									children: t.ai.pong.goal
								})
							}),
							K === "gameover" && he && /* @__PURE__ */ U("div", {
								className: "pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-f1-special-page/60 backdrop-blur-sm",
								children: /* @__PURE__ */ U("span", {
									className: "text-2xl font-semibold text-f1-foreground",
									children: he
								})
							}),
							/* @__PURE__ */ U("canvas", {
								ref: a,
								className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
							})
						]
					}), /* @__PURE__ */ U("div", {
						className: "pointer-events-none absolute inset-y-0 right-0 flex flex-col items-center justify-center",
						style: { width: Pe },
						children: /* @__PURE__ */ W("div", {
							className: "flex flex-col items-center gap-6",
							children: [/* @__PURE__ */ U("span", {
								className: _("text-2xl font-semibold", ie.ai > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"),
								children: ie.ai
							}), /* @__PURE__ */ U("span", {
								className: _("text-2xl font-semibold", ie.player > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"),
								children: ie.player
							})]
						})
					})]
				}),
				/* @__PURE__ */ U("div", {
					className: "flex items-center justify-center px-4 py-3 text-sm font-medium text-f1-foreground-secondary",
					children: /* @__PURE__ */ W("div", {
						className: "flex gap-5",
						children: [/* @__PURE__ */ U("span", { children: t.ai.pong.controls }), /* @__PURE__ */ U("span", { children: t.ai.pong.escToExit })]
					})
				})
			]
		})]
	}), c);
}, qe = ({ onResize: e, onReset: t, isResizing: n, setIsResizing: r, isCanvasMode: i, side: a = "right" }) => {
	let o = B(0), s = B(0), c = B(null), l = F((e) => {
		e.preventDefault(), o.current = e.clientX, r(!0);
	}, [r]), u = F(async () => {
		r(!0), await t(), r(!1);
	}, [t, r]);
	return L(() => {
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
	]), /* @__PURE__ */ W("div", {
		className: _("group relative z-10 h-full flex-shrink-0 cursor-ew-resize w-1", i && "border border-solid border-x-0 border-f1-border-secondary bg-f1-special-page"),
		onMouseDown: l,
		onDoubleClick: u,
		children: [/* @__PURE__ */ U("div", {
			"aria-hidden": !0,
			className: "absolute -inset-x-1 inset-y-0"
		}), /* @__PURE__ */ U("div", {
			"aria-hidden": !0,
			className: _("pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 rounded-full", "transition-[width,background-color] duration-150 ease-out", "w-px bg-transparent", "group-hover:w-1 group-hover:bg-f1-background-secondary-hover", n && "!w-1 !bg-f1-background-secondary-hover")
		})]
	});
}, Je = ({ children: e, visible: t, side: n, exitStyle: r = "shrink", acceptsWidgetDrop: i = !1 }) => {
	let { open: a, visualizationMode: o, shouldPlayEntranceAnimation: s, setShouldPlayEntranceAnimation: c, resizable: d, setChatWidth: f, resetChatWidth: h, setIsResizing: g, fileAttachments: v, isClarifying: y, fileDragOver: ee, setFileDragOver: b, processDroppedFiles: S, setPendingQuote: C, focusChatInput: w, activeGame: T, closeGame: E, panelSide: te } = J(), D = t ?? a, O = i && T === null && D && !y, k = B(O);
	k.current = O;
	let A = B(null), j = o === "canvas", M = u(), N = (n ?? te) === "left", P = B(!1);
	L(() => {
		P.current = a;
	});
	let I = B(0), R = v?.onUploadFiles != null && !y;
	L(() => {
		O || A.current?.removeAttribute("data-ai-chat-dropzone");
	}, [O]);
	let H = F((e) => {
		e.preventDefault(), e.stopPropagation(), I.current++, R && b(!0);
	}, [R, b]), ne = F((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []), re = F((e) => {
		e.preventDefault(), e.stopPropagation(), I.current--, I.current <= 0 && (I.current = 0, b(!1));
	}, [b]), ie = F((e) => {
		e.preventDefault(), e.stopPropagation(), I.current = 0, b(!1);
	}, [b]), ae = B(null), [G, oe] = V(null), K = F((e) => {
		ae.current = e, oe(e?.title ?? null);
	}, []);
	L(() => {
		let e = (e) => {
			if (!O) return;
			let t = e.detail;
			typeof t?.id != "string" || !t.id || typeof t.title != "string" || !t.title.trim() || K(t);
		}, t = () => K(null);
		return window.addEventListener(Te, e), window.addEventListener(Ee, t), () => {
			window.removeEventListener(Te, e), window.removeEventListener(Ee, t);
		};
	}, [O, K]), L(() => {
		O || K(null);
	}, [O, K]);
	let se = F(() => {
		if (!k.current) {
			K(null);
			return;
		}
		let e = ae.current;
		if (e !== null) {
			if (K(null), e.onAskAi) e.onAskAi({
				id: e.id,
				title: e.title
			});
			else {
				let t = { text: e.title };
				e.onAskAiTarget?.({
					id: e.id,
					title: e.title,
					quote: t
				}), C(t), w();
			}
		}
	}, [
		O,
		w,
		K,
		C
	]), ce = o === "fullscreen", [q, le] = V(!1);
	L(() => {
		if (q) return g?.(!0), () => g?.(!1);
	}, [q, g]);
	let ue = l(`(max-width: ${x.md}px)`, { initializeWithValue: !0 }), de = F((e) => {
		f((t) => {
			let n = t + e;
			return Math.max(300, Math.min(712, n));
		});
	}, [f]), fe = z(() => q || M ? { duration: 0 } : {
		duration: .3,
		ease: [
			0,
			0,
			.1,
			1
		]
	}, [
		q,
		M,
		s
	]), pe = N ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
	return /* @__PURE__ */ U(m, { children: D && /* @__PURE__ */ W(p.div, {
		className: _("bg-f1-transparent pointer-events-auto relative flex h-full dark:bg-f1-background md:py-1", ce ? "md:pr-1" : N ? "mr-auto" : "ml-auto md:pr-1"),
		initial: !M && s && !P.current ? {
			opacity: 0,
			clipPath: pe
		} : !1,
		animate: {
			opacity: 1,
			clipPath: "inset(0 0 0 0)"
		},
		exit: M ? {
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
			clipPath: pe
		},
		transition: fe,
		style: {
			width: "100%",
			transformOrigin: N ? "left center" : "right center"
		},
		onAnimationComplete: () => {
			s && c(!1);
		},
		children: [
			d && !ce && !ue && !N && /* @__PURE__ */ U(qe, {
				onResize: de,
				onReset: h,
				isResizing: q,
				setIsResizing: le,
				isCanvasMode: j,
				side: "right"
			}),
			/* @__PURE__ */ W("div", {
				ref: A,
				"aria-hidden": !D,
				className: _("relative flex h-full w-full flex-col overflow-hidden bg-f1-special-page border border-solid border-f1-border-secondary", j && (N ? "border-r-transparent" : "border-l-transparent"), j ? N ? "xs:rounded-l-xl" : "xs:rounded-r-xl" : "xs:rounded-xl"),
				"data-ai-chat-dropzone": O ? "" : void 0,
				onDragEnter: H,
				onDragOver: ne,
				onDragLeave: re,
				onDrop: ie,
				onPointerUp: se,
				children: [
					/* @__PURE__ */ U("div", {
						className: "relative flex h-full w-full flex-col overflow-hidden",
						children: e
					}),
					(R || O && G !== null) && /* @__PURE__ */ U(Oe, {
						visible: R && ee || G !== null,
						mode: G === null ? "files" : "discuss",
						onFilesDropped: R ? (e) => {
							I.current = 0, b(!1), S(e);
						} : void 0
					}),
					T === "pong" && /* @__PURE__ */ U(Ke, { onClose: E })
				]
			}),
			d && !ce && !ue && N && /* @__PURE__ */ U(qe, {
				onResize: de,
				onReset: h,
				isResizing: q,
				setIsResizing: le,
				isCanvasMode: j,
				side: "left"
			})
		]
	}, "chat-wrapper") });
}, Ye = ({ enabled: e = !1, side: t, panelContentSide: n, initialMessage: r, chatHeader: i, chatMessages: a, chatInput: o, chatOverlay: s, welcomeScreenSuggestions: c, welcomeScreenCards: l, disclaimer: u, resizable: d = !1, defaultVisualizationMode: f, lockVisualizationMode: p, historyEnabled: m, footer: h, VoiceMode: g, entityRefs: _, canvasActions: v, canvasEntities: y, credits: ee, employeeCredits: b, creditWarning: x, fileAttachments: S, onTranscribe: C, onThumbsUp: w, onThumbsDown: T, children: E, agent: te, tracking: D }) => /* @__PURE__ */ U(he, {
	enabled: e,
	side: t,
	panelContentSide: n,
	onThumbsUp: w,
	onThumbsDown: T,
	agent: te,
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
	tracking: D,
	entityRefs: _,
	canvasActions: v,
	canvasEntities: y,
	credits: ee,
	employeeCredits: b,
	creditWarning: x,
	fileAttachments: S,
	onTranscribe: C,
	children: E
}), Xe = f("F0AiChat", ({ header: e, messages: t, input: n, overlay: r }) => {
	let { enabled: i, open: a, setOpen: o, mode: s, visualizationMode: c, VoiceMode: l, tracking: f, chatHeader: h, chatMessages: g, chatInput: _, chatOverlay: ee, panelContent: b, panelSide: x, panelContentSide: S, restoringPanelContentId: C } = J(), w = d(), T = S !== x, { motionProps: E } = De(c === "fullscreen" ? "fullscreen" : "docked", (e, t) => t === "fullscreen" ? 220 : 460), D = u(), O = e ?? h, k = t ?? g, A = n ?? _, j = r ?? ee;
	if (!i) return null;
	let M, N;
	return b && !T ? (M = `panel:${b.id}`, N = b.content) : C && !T ? (M = `restoring:${C}`, N = /* @__PURE__ */ U(y, {
		role: "status",
		"aria-busy": !0,
		className: "h-full w-full rounded-none"
	})) : s === "voice" && l ? (M = "voice", N = /* @__PURE__ */ W("div", {
		className: "flex h-full w-full flex-col",
		children: [/* @__PURE__ */ U("div", {
			className: "absolute right-3 top-3 z-20",
			children: /* @__PURE__ */ U(v, {
				variant: "ghost",
				hideLabel: !0,
				label: w.ai.closeChat,
				icon: te,
				onClick: () => {
					o(!1), f?.onClose?.();
				}
			})
		}), /* @__PURE__ */ U(l, {})]
	})) : (M = "chat", N = /* @__PURE__ */ W("div", {
		className: "relative flex h-full w-full flex-col",
		children: [/* @__PURE__ */ W("div", {
			ref: (e) => {
				j ? e?.setAttribute("inert", "") : e?.removeAttribute("inert");
			},
			className: "flex min-h-0 flex-1 flex-col",
			children: [O, /* @__PURE__ */ W(p.div, {
				className: "flex min-h-0 flex-1 flex-col",
				...E,
				children: [/* @__PURE__ */ U("div", {
					className: "flex min-h-0 flex-1 flex-col overflow-hidden",
					children: k
				}), A]
			})]
		}), j && /* @__PURE__ */ U("div", {
			className: "absolute inset-0 z-30 flex items-center justify-center bg-f1-background-overlay p-4",
			children: j
		})]
	})), /* @__PURE__ */ U(Je, {
		visible: T ? a && !b && !C : void 0,
		exitStyle: T && a ? "hold" : "shrink",
		acceptsWidgetDrop: M === "chat" && !j,
		children: /* @__PURE__ */ U(m, {
			initial: !1,
			children: /* @__PURE__ */ U(p.div, {
				className: "absolute inset-0 flex flex-col overflow-hidden",
				initial: !D && { opacity: 0 },
				animate: { opacity: 1 },
				exit: D ? void 0 : { opacity: 0 },
				transition: {
					duration: D ? 0 : .15,
					ease: "easeOut"
				},
				children: N
			}, M)
		})
	});
}), Ze = f("F0AiChatProvider", Ye);
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Block.tsx
function Qe({ children: e, ...t }) {
	return /* @__PURE__ */ U("pre", {
		...t,
		className: _("relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2", t.className),
		children: e
	});
}
function $e({ children: e, ...t }) {
	return /* @__PURE__ */ U("code", {
		...t,
		className: _("rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground", "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base", t.className),
		children: e
	});
}
function et({ children: e, ...t }) {
	return /* @__PURE__ */ U("blockquote", {
		...t,
		className: _("mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base", t.className),
		children: e
	});
}
function tt({ ...e }) {
	return /* @__PURE__ */ U("hr", {
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
	return /* @__PURE__ */ W("div", {
		className: "relative w-fit",
		children: [/* @__PURE__ */ U("img", {
			...n,
			src: e,
			alt: t,
			className: _("max-w-full rounded-md", n.className)
		}), /* @__PURE__ */ U("div", {
			className: "absolute right-2 top-2 rounded",
			children: /* @__PURE__ */ U(ee, {
				variant: "neutral",
				label: "Download",
				hideLabel: !0,
				icon: D,
				onClick: r
			})
		})]
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Link.tsx
function rt({ children: e, ...t }) {
	return /* @__PURE__ */ U(O, {
		...t,
		variant: "link",
		href: t.href,
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Lists.tsx
function it({ children: e, ...t }) {
	return /* @__PURE__ */ U("ul", {
		...t,
		className: _("list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", t.className),
		children: e
	});
}
function at({ children: e, ...t }) {
	return /* @__PURE__ */ U("ol", {
		...t,
		className: _("list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", t.className),
		children: e
	});
}
function ot({ children: e, ...t }) {
	return /* @__PURE__ */ U("li", {
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
	let r = d(), i = B(null), a = F((e) => {
		if (!i.current) return;
		let n = t?.replace(/\s+/g, "_").toLowerCase() || "table";
		st(i.current, e, n);
	}, [t]);
	return /* @__PURE__ */ W("div", {
		className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary",
		children: [/* @__PURE__ */ W("div", {
			className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
			children: [/* @__PURE__ */ U(o, {
				tag: "h2",
				className: "text-base font-medium capitalize text-f1-foreground",
				children: t ?? r.ai.reportCard.tableLabel
			}), /* @__PURE__ */ U(S, {
				icon: D,
				size: "md",
				items: [{
					label: r.t("ai.dataDownload.download", { format: "Excel" }),
					icon: D,
					onClick: () => a("xlsx")
				}, {
					label: r.t("ai.dataDownload.download", { format: "CSV" }),
					icon: D,
					onClick: () => a("csv")
				}]
			})]
		}), /* @__PURE__ */ U("div", {
			className: "scrollbar-macos overflow-x-auto",
			children: /* @__PURE__ */ U("table", {
				ref: i,
				...n,
				className: _("w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0", n.className),
				children: e
			})
		})]
	});
}
function lt({ children: e, ...t }) {
	return /* @__PURE__ */ U("th", {
		...t,
		className: _("sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary", t.className),
		children: e
	});
}
function ut({ children: e, ...t }) {
	return /* @__PURE__ */ U("td", {
		...t,
		className: _("max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2", t.className),
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Typography.tsx
function dt({ children: e, ...t }) {
	return /* @__PURE__ */ U("p", {
		...t,
		className: _("text-base font-normal", t.className),
		children: e
	});
}
function ft({ children: e, ...t }) {
	return /* @__PURE__ */ U("h1", {
		...t,
		className: _("mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function pt({ children: e, ...t }) {
	return /* @__PURE__ */ U("h2", {
		...t,
		className: _("mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function mt({ children: e, ...t }) {
	return /* @__PURE__ */ U("h3", {
		...t,
		className: _("mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function ht({ children: e, ...t }) {
	return /* @__PURE__ */ U("strong", {
		...t,
		className: _("font-semibold", t.className),
		children: e
	});
}
function gt({ children: e, ...t }) {
	return /* @__PURE__ */ U("em", {
		...t,
		className: _("italic", t.className),
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRefHoverCard.tsx
function _t({ id: e, trigger: t, resolver: n, mapToCard: r, fallbackCard: i }) {
	let a = B(/* @__PURE__ */ new Map()), [o, s] = V(() => a.current.get(e) ?? null), [c, l] = V(!1), [u, d] = V(!1), f = B(!0);
	L(() => () => {
		f.current = !1;
	}, []);
	let p = F(() => {
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
	return /* @__PURE__ */ W(C, {
		openDelay: 300,
		closeDelay: 100,
		onOpenChange: (e) => {
			e && p();
		},
		children: [/* @__PURE__ */ U(T, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ U(w, {
			side: "top",
			align: "start",
			className: "w-64 rounded-2xl border-none p-0 shadow-md",
			children: c ? /* @__PURE__ */ U(E.Skeleton, {}) : /* @__PURE__ */ U(E, { ...m })
		})]
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/candidate/CandidateEntityRef.tsx
var vt = P(({ label: e, ...t }, n) => /* @__PURE__ */ U("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
vt.displayName = "CandidateTrigger";
function yt({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.candidate, i = d(), a = n?.urls?.candidate?.(e), o = z(() => (e) => {
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
			...t.length > 0 && { children: /* @__PURE__ */ U("div", {
				className: "flex flex-col gap-2",
				children: t.map((e) => /* @__PURE__ */ W("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ U("p", {
						className: "text-f1-foreground-secondary",
						children: e.title
					}), /* @__PURE__ */ U("div", {
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
	}, [i, a]), s = z(() => ({
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
	return r ? /* @__PURE__ */ U(_t, {
		id: e,
		trigger: /* @__PURE__ */ U(vt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ U("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/expense/ExpenseEntityRef.tsx
var bt = P(({ label: e, ...t }, n) => /* @__PURE__ */ U("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
bt.displayName = "ExpenseTrigger";
function xt({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.expense, i = d(), a = n?.urls?.expense?.(e), o = z(() => (e) => ({
		avatar: {
			type: "icon",
			icon: re
		},
		title: e.description || `Expense #${e.id}`,
		description: [e.amount, e.status].filter(Boolean).join(" · "),
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [i, a]), s = z(() => ({
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
	return r ? /* @__PURE__ */ U(_t, {
		id: e,
		trigger: /* @__PURE__ */ U(bt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ U("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/jobPosting/JobPostingEntityRef.tsx
var St = P(({ label: e, ...t }, n) => /* @__PURE__ */ U("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
St.displayName = "JobPostingTrigger";
function Ct({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.jobPosting, i = d(), a = n?.urls?.jobPosting?.(e), o = z(() => (e) => ({
		title: e.title,
		description: [e.status, e.location].filter(Boolean).join(" · "),
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [i, a]), s = z(() => ({
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
	return r ? /* @__PURE__ */ U(_t, {
		id: e,
		trigger: /* @__PURE__ */ U(St, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ U("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRefDetails.tsx
function wt({ rows: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ U("div", {
		className: "flex flex-col gap-2",
		children: e.map((e, t) => /* @__PURE__ */ W("div", {
			className: "flex flex-col",
			children: [e.label && /* @__PURE__ */ U("p", {
				className: "text-f1-foreground-secondary",
				children: e.label
			}), /* @__PURE__ */ U("div", {
				className: "flex items-center gap-1.5 font-medium text-f1-foreground",
				children: e.value
			})]
		}, e.label ?? t))
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/requisition/RequisitionEntityRef.tsx
var Tt = P(({ label: e, ...t }, n) => /* @__PURE__ */ U("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
Tt.displayName = "RequisitionTrigger";
function Et({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.requisition, i = d(), a = n?.urls?.requisition?.(e), o = z(() => (e) => {
		let t = e.lineManager ? `${e.lineManager.firstName} ${e.lineManager.lastName}` : void 0, n = [
			e.status ? {
				label: i.t("ai.entityRef.requisition.status"),
				value: /* @__PURE__ */ U("div", {
					className: "flex items-center pt-1",
					children: /* @__PURE__ */ U(b, {
						text: e.status,
						variant: e.statusVariant ?? "neutral"
					})
				})
			} : void 0,
			e.lineManager ? {
				label: i.t("ai.entityRef.requisition.lineManager"),
				value: /* @__PURE__ */ W("div", {
					className: "flex items-center gap-1.5 pt-1",
					children: [/* @__PURE__ */ U(k, {
						firstName: e.lineManager.firstName,
						lastName: e.lineManager.lastName,
						src: e.lineManager.avatarUrl,
						size: "xs"
					}), /* @__PURE__ */ U("span", { children: t })]
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
			...n.length > 0 && { children: /* @__PURE__ */ U(wt, { rows: n }) },
			...a && { secondaryActions: {
				label: i.t("ai.view"),
				href: a
			} }
		};
	}, [i, a]), s = z(() => ({
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
	return r ? /* @__PURE__ */ U(_t, {
		id: e,
		trigger: /* @__PURE__ */ U(Tt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ U("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/person/PersonEntityRef.tsx
var Dt = P(({ label: e, ...t }, n) => /* @__PURE__ */ W("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: ["@", e]
}));
Dt.displayName = "PersonTrigger";
function Ot({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.person, i = d(), a = n?.urls?.person?.(e), o = z(() => (e) => ({
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
	}), [i, a]), s = z(() => ({
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
	return r ? /* @__PURE__ */ U(_t, {
		id: e,
		trigger: /* @__PURE__ */ U(Dt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ U("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/vacancy/VacancyEntityRef.tsx
var kt = P(({ label: e, ...t }, n) => /* @__PURE__ */ U("button", {
	ref: n,
	type: "button",
	className: _("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", g()),
	...t,
	children: e
}));
kt.displayName = "VacancyTrigger";
function At({ id: e, label: t }) {
	let { entityRefs: n } = J(), r = n?.resolvers?.vacancy, i = d(), a = n?.urls?.vacancy?.(e), o = z(() => (e) => ({
		title: e.name,
		description: [e.status, e.vacancyType].filter(Boolean).join(" · "),
		...a && { secondaryActions: {
			label: i.t("ai.view"),
			href: a
		} }
	}), [i, a]), s = z(() => ({
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
	return r ? /* @__PURE__ */ U(_t, {
		id: e,
		trigger: /* @__PURE__ */ U(kt, { label: t }),
		resolver: r,
		mapToCard: o,
		fallbackCard: s
	}) : /* @__PURE__ */ U("span", { children: t });
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
	if (!t || !e) return /* @__PURE__ */ U("span", { children: n });
	let r = Nt(n), i = Mt(e);
	return i ? /* @__PURE__ */ U(i, {
		id: t,
		label: r
	}) : /* @__PURE__ */ U("span", { children: n });
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
}, It = N(null);
function Lt({ children: e }) {
	let [t, n] = V(0), r = B([]), i = F((e) => {
		let t = r.current, i = t.findIndex((t) => t.formName === e.formName && t.customFieldName === e.customFieldName), a = e;
		i >= 0 ? t[i] = a : t.push(a), n((e) => e + 1);
	}, []), a = z(() => ({
		formatters: [...r.current],
		setFormCardValueFormatter: i
	}), [i, t]);
	return /* @__PURE__ */ U(It.Provider, {
		value: a,
		children: e
	});
}
function Rt(e) {
	let t = I(It)?.formatters;
	return z(() => !t || t.length === 0 ? null : (n, r, i) => {
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
	let e = I(It);
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
	let [n, r] = V(null), i = F(() => r(null), []);
	return L(() => {
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
	let n = d(), r = B(null), [i, a] = V(null);
	if (R(() => {
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
	return H(/* @__PURE__ */ U("div", {
		style: {
			position: "fixed",
			top: i?.top ?? -9999,
			left: i?.left ?? -9999,
			visibility: i ? "visible" : "hidden"
		},
		className: _("z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary", "drop-shadow"),
		children: /* @__PURE__ */ U(v, {
			ref: r,
			type: "button",
			variant: "ghost",
			label: o,
			icon: A,
			onClick: () => {
				t(e.text);
			}
		})
	}), document.body);
}
//#endregion
//#region src/kits/ai/F0AiMessagesContainer/components/AssistantMessage.tsx
var Kt = N(void 0), qt = () => I(Kt), Jt = (e) => /* @__PURE__ */ U(Ce, {
	content: e,
	format: "markdown"
}), Yt = ({ isGenerating: e, isLoading: t, message: n, renderToolCall: r, onReplyQuote: i, onRendered: a, renderMarkdown: o }) => {
	let s = typeof n?.content == "string" ? n.content : "", c = (n && r?.(n)) ?? n?.generativeUI?.() ?? null, l = n?.toolCalls?.[0]?.id, u = !s && !c, d = B(null), { anchor: f, clear: p } = Ht({
		containerRef: d,
		enabled: !!(n?.id && s)
	});
	return L(() => {
		n?.id && !t && !e && a?.(n);
	}, [
		n,
		t,
		e,
		a
	]), !t && !e && u ? null : /* @__PURE__ */ U(Kt.Provider, {
		value: l,
		children: /* @__PURE__ */ W("div", {
			className: "relative isolate flex w-full flex-col items-start justify-center",
			children: [
				n && s && /* @__PURE__ */ U("div", {
					ref: d,
					className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
					children: (o ?? Jt)(s)
				}),
				!!c && /* @__PURE__ */ U("div", {
					className: "w-full",
					children: c
				}),
				/* @__PURE__ */ U(Gt, {
					anchor: f,
					onReply: (e) => {
						i?.(e), p(), window.getSelection()?.removeAllRanges();
					}
				})
			]
		})
	});
}, Xt = { ai: M.ai }, Zt = N(null);
function Qt({ children: e, translations: t }) {
	return /* @__PURE__ */ U(Zt.Provider, {
		value: t,
		children: e
	});
}
function $t() {
	let e = I(Zt);
	if (e === null) throw Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
	return e;
}
//#endregion
export { J as C, ne as D, re as E, we as S, ae as T, Oe as _, qt as a, Te as b, Lt as c, Ft as d, Xe as f, ke as g, Ke as h, Yt as i, Rt as l, Je as m, $t as n, Gt as o, Ze as p, Xt as r, Ht as s, Qt as t, zt as u, De as v, ie as w, Ce as x, Ee as y };
