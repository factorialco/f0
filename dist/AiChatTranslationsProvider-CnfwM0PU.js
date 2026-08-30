import { $ as e, at as t, f as n, v as r, y as i } from "./variants-BhCxKzs5.js";
import { n as a, t as o } from "./utils-CVzxZnoI.js";
import { i as s, l as c, r as l } from "./F0Button-CYTXun0O.js";
import { T as u, dt as d, l as f, w as p } from "./F0Checkbox-Bc_SibvL.js";
import { h as m, m as h, p as g, t as _ } from "./F0Card-CBAMg6qm.js";
import { t as v } from "./Cross-BIv5udZr.js";
import { t as y } from "./Download-Dvj6cfxp.js";
import { a as b } from "./progress-dgj09l6I.js";
import { t as x } from "./F0Link-AFRf9ShT.js";
import { _ as S, r as C } from "./F0Avatar-BNV2fsD_.js";
import { n as w, t as T } from "./RichText-B0AzNEma.js";
import { t as E } from "./i18n-provider-defaults-B5_EAVz9.js";
import { t as D } from "./purify.es-m7dSeJ6J.js";
import { t as O } from "./a11y-CuE93uBH.js";
import { a as k, i as A, n as j, r as M, t as N } from "./lib-G5YyWpsl.js";
import { createContext as P, forwardRef as F, useCallback as I, useContext as L, useEffect as R, useLayoutEffect as z, useMemo as B, useRef as V, useState as H } from "react";
import { createPortal as U } from "react-dom";
import { jsx as W, jsxs as G } from "react/jsx-runtime";
var K = F((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ W("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z"
	}), /* @__PURE__ */ W("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5"
	})]
})), ee = F((e, t) => /* @__PURE__ */ G("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ W("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z"
		}),
		/* @__PURE__ */ W("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9"
		}),
		/* @__PURE__ */ W("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5"
		}),
		/* @__PURE__ */ W("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M11.5 7V6"
		}),
		/* @__PURE__ */ W("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			d: "M11.5 14V13"
		})
	]
})), te = N().use(M).use(A).use(j).use(k), ne = F(function({ content: e, className: t, format: n = "html", ...r }, i) {
	let a = B(() => D.sanitize(n === "markdown" ? String(te.processSync(e)) : e, {
		ADD_ATTR: ["target"],
		ALLOWED_ATTR: [
			"href",
			"target",
			"rel",
			"class"
		]
	}), [n, e]), s = /<[^>]*>/.test(a);
	return /* @__PURE__ */ W("div", {
		ref: i,
		className: o("rich-text-display-container", !s && "whitespace-pre-wrap", t),
		dangerouslySetInnerHTML: { __html: a },
		...r
	});
}), re = t("F0RichTextDisplay", ne), ie = re, q = "f0:widget-drag-start", ae = "f0:widget-drag-end";
//#endregion
//#region src/kits/ai/F0AiChat/hooks/useRevealOnChange.ts
function oe(e, t, n = .2) {
	let r = O(), [i, a] = H(!0), o = V(e);
	return p(() => {
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
function J(e, t) {
	try {
		let n = localStorage.getItem(e);
		return n === null ? t : JSON.parse(n);
	} catch {
		return t;
	}
}
function se(e, t) {
	try {
		localStorage.setItem(e, JSON.stringify(t));
	} catch {}
}
//#endregion
//#region src/kits/ai/F0AiChat/providers/usePersistedState.ts
function ce(e, t, n, r, i = 0) {
	let [a, o] = H(() => {
		if (typeof window > "u") return t;
		let r = J(e, null);
		return r === null || n && !n(r) ? t : r;
	});
	return R(() => {
		if (typeof window > "u" || r && !r(a)) return;
		if (i <= 0) {
			se(e, a);
			return;
		}
		let t = window.setTimeout(() => se(e, a), i);
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
var Y = P(null), le = "ONE-ai-chat-width", ue = 150, de = "ONE-ai-chat-open", fe = "ONE-ai-chat-visualization-mode", pe = "ONE-ai-chat-panel-content-id", me = 300, he = 712, ge = 5e3, _e = (e) => e === "sidepanel" || e === "fullscreen", ve = () => {}, ye = ({ children: e, enabled: t, side: r = "right", panelContentSide: i, agent: a, initialMessage: o, chatHeader: s, chatMessages: c, chatInput: l, chatOverlay: u, welcomeScreenSuggestions: d = [], welcomeScreenCards: f = [], disclaimer: p, resizable: m = !1, defaultVisualizationMode: h = "sidepanel", lockVisualizationMode: g = !1, historyEnabled: _ = !1, footer: v, VoiceMode: y, entityRefs: b, canvasActions: x, canvasEntities: S, credits: C, employeeCredits: w, creditWarning: T, fileAttachments: E, onTranscribe: D, onThumbsDown: O, onThumbsUp: k, tracking: A }) => {
	let [j, M] = H(v), [N, P] = H(t), [F, L] = ce(le, 360, (e) => typeof e == "number" && !isNaN(e) && e >= me && e <= he, void 0, ue), [z, B] = H(!1), [U, G] = ce(de, h === "fullscreen", (e) => typeof e == "boolean"), [K, ee] = ce(fe, h === "canvas" ? "sidepanel" : h, (e) => e === "sidepanel" || e === "fullscreen", _e), [te, ne] = H("chat"), [re, ie] = H(() => K !== "fullscreen"), [q, ae] = H(a), [oe, J] = H(d), [se, ve] = H(f), ye = n(), [be, xe] = H([ye.t("ai.inputPlaceholder")]), [Se, Ce] = H(o);
	R(() => {
		U && A?.onVisibility?.();
	}, [U]);
	let [we, X] = H(null), Te = I((e) => {
		ee((t) => {
			let n = typeof e == "function" ? e(t) : e;
			return t === "canvas" && n !== "canvas" && X(null), n === "fullscreen" && G(!0), n;
		});
	}, [ee, G]), Ee = V("sidepanel"), [De, Oe] = H(!1), [ke, Z] = H(!1), [Ae, je] = H(null), [Me, Q] = H(null), Ne = V(null), Pe = V([]), Fe = I((e) => {
		Ne.current ? Ne.current(e) : Pe.current.push(e);
	}, []), Ie = I((e) => {
		if (Ne.current = e, e && Pe.current.length > 0) {
			let t = Pe.current;
			Pe.current = [], t.forEach((t) => e(t));
		}
	}, []), Le = V(null), Re = V(!1), ze = I(() => Le.current ? (Le.current(), !0) : (Re.current = !0, !1), []), Be = I((e) => {
		Le.current = e, e && Re.current && (Re.current = !1, e());
	}, []), $ = () => {
		L(360);
	};
	R(() => {
		P(t);
	}, [t]), R(() => {
		if (!U) {
			Re.current = !1, X(null), Te("sidepanel");
			let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			ie(!e);
		}
	}, [U]);
	let Ve = I((e) => {
		K !== "canvas" && (Ee.current = K), X(e), Te("canvas"), U || G(!0);
	}, [K, U]), He = I(() => {
		X(null), K === "canvas" && Te(Ee.current);
	}, [K]), [Ue, We] = H(null), Ge = I((e) => We(e), []), Ke = I(() => We(null), []), [qe, Je] = H(null), [Ye, Xe] = ce(pe, null, (e) => e === null || typeof e == "string"), [Ze, Qe] = H(() => U ? Ye : null), $e = I((e) => {
		Je(e), Qe(null), e && !U && G(!0);
	}, [U, G]), et = I(() => {
		Je(null), Qe(null);
	}, []), tt = I(() => Qe(null), []);
	R(() => {
		Ze || Xe(qe?.id ?? null);
	}, [
		qe,
		Ze,
		Xe
	]), R(() => {
		U || Qe(null);
	}, [U]), R(() => {
		if (!Ze) return;
		let e = setTimeout(() => Qe(null), ge);
		return () => clearTimeout(e);
	}, [Ze]);
	let [nt, rt] = H(r), [it, at] = H(i ?? r);
	return /* @__PURE__ */ W(Y.Provider, {
		value: {
			enabled: N,
			setEnabled: P,
			open: U,
			setOpen: G,
			mode: te,
			setMode: ne,
			visualizationMode: K,
			setVisualizationMode: Te,
			lockVisualizationMode: g,
			historyEnabled: _,
			footer: j,
			VoiceMode: y,
			setFooter: M,
			shouldPlayEntranceAnimation: re,
			setShouldPlayEntranceAnimation: ie,
			agent: q,
			setAgent: ae,
			initialMessage: Se,
			setInitialMessage: Ce,
			chatHeader: s,
			chatMessages: c,
			chatInput: l,
			chatOverlay: u,
			welcomeScreenSuggestions: oe,
			setWelcomeScreenSuggestions: J,
			welcomeScreenCards: se,
			setWelcomeScreenCards: ve,
			onThumbsUp: k,
			onThumbsDown: O,
			placeholders: be,
			setPlaceholders: xe,
			disclaimer: p,
			resizable: m,
			chatWidth: F,
			setChatWidth: L,
			resetChatWidth: $,
			isResizing: z,
			setIsResizing: B,
			tracking: A,
			entityRefs: b,
			canvasActions: x,
			canvasEntities: S,
			credits: C,
			employeeCredits: w,
			creditWarning: T,
			fileAttachments: E,
			onTranscribe: D,
			canvasContent: we,
			openCanvas: Ve,
			closeCanvas: He,
			activeGame: Ue,
			openGame: Ge,
			closeGame: Ke,
			isClarifying: De,
			setIsClarifying: Oe,
			fileDragOver: ke,
			setFileDragOver: Z,
			processDroppedFiles: Fe,
			setProcessDroppedFilesFunction: Ie,
			focusChatInput: ze,
			setFocusChatInputFunction: Be,
			pendingContext: Ae,
			setPendingContext: je,
			pendingQuote: Me,
			setPendingQuote: Q,
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
}, be = /* @__PURE__ */ new Set([
	"enabled",
	"open",
	"fileDragOver",
	"lockVisualizationMode",
	"historyEnabled",
	"resizable",
	"isClarifying"
]), xe = /* @__PURE__ */ new Set([
	"canvasContent",
	"pendingContext",
	"pendingQuote",
	"activeGame",
	"panelContent",
	"restoringPanelContentId"
]), Se = /* @__PURE__ */ new Set([
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
]), Ce = {
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
}, we = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = t;
	if (n in Ce) return Ce[n];
	if (xe.has(n)) return null;
	if (!Se.has(n)) return !be.has(n) && ve;
} });
function X() {
	return L(Y) ?? we;
}
//#endregion
//#region src/kits/ai/F0AiChatTextArea/components/DropOverlay.tsx
var Te = ({ visible: e, onFilesDropped: t, mode: i = "files" }) => {
	let a = n(), s = i === "discuss";
	return /* @__PURE__ */ G("div", {
		"aria-hidden": !e,
		"aria-live": e ? "polite" : void 0,
		role: e ? "status" : void 0,
		className: o("absolute inset-1 z-50 flex flex-col items-center gap-2 justify-center rounded-[calc(theme(borderRadius.xl)-4px)] backdrop-blur bg-f1-background-tertiary/80 border border-dashed border-f1-border", "transition-opacity duration-150 ease-out motion-reduce:transition-none", e ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"),
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
		children: [/* @__PURE__ */ W(r, {
			icon: s ? K : T,
			size: "lg",
			color: "bold"
		}), /* @__PURE__ */ W("p", {
			className: "text-base font-normal text-f1-foreground",
			children: s ? a.ai.dropWidgetToDiscuss : a.ai.dropFilesHere
		})]
	});
}, Ee = {};
(function e(t, n, r, i) {
	var a = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), o = typeof Path2D == "function" && typeof DOMMatrix == "function", s = (function() {
		if (!t.OffscreenCanvas) return !1;
		var e = new OffscreenCanvas(1, 1), n = e.getContext("2d");
		n.fillRect(0, 0, 1, 1);
		var r = e.transferToImageBitmap();
		try {
			n.createPattern(r, "no-repeat");
		} catch {
			return !1;
		}
		return !0;
	})();
	function c() {}
	function l(e) {
		var r = n.exports.Promise, i = r === void 0 ? t.Promise : r;
		return typeof i == "function" ? new i(e) : (e(c, c), null);
	}
	var u = (function(e, t) {
		return {
			transform: function(n) {
				if (e) return n;
				if (t.has(n)) return t.get(n);
				var r = new OffscreenCanvas(n.width, n.height);
				return r.getContext("2d").drawImage(n, 0, 0), t.set(n, r), r;
			},
			clear: function() {
				t.clear();
			}
		};
	})(s, /* @__PURE__ */ new Map()), d = function() {
		var e, t, n = {}, r = 0;
		return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (e = function(e) {
			var t = Math.random();
			return n[t] = requestAnimationFrame(function i(a) {
				r === a || r + 16 - 1 < a ? (r = a, delete n[t], e()) : n[t] = requestAnimationFrame(i);
			}), t;
		}, t = function(e) {
			n[e] && cancelAnimationFrame(n[e]);
		}) : (e = function(e) {
			return setTimeout(e, 16);
		}, t = function(e) {
			return clearTimeout(e);
		}), {
			frame: e,
			cancel: t
		};
	}(), f = (function() {
		var t, n, i = {};
		function o(e) {
			function t(t, n) {
				e.postMessage({
					options: t || {},
					callback: n
				});
			}
			e.init = function(t) {
				var n = t.transferControlToOffscreen();
				e.postMessage({ canvas: n }, [n]);
			}, e.fire = function(r, a, o) {
				if (n) return t(r, null), n;
				var s = Math.random().toString(36).slice(2);
				return n = l(function(a) {
					function c(t) {
						t.data.callback === s && (delete i[s], e.removeEventListener("message", c), n = null, u.clear(), o(), a());
					}
					e.addEventListener("message", c), t(r, s), i[s] = c.bind(null, { data: { callback: s } });
				}), n;
			}, e.reset = function() {
				for (var t in e.postMessage({ reset: !0 }), i) i[t](), delete i[t];
			};
		}
		return function() {
			if (t) return t;
			if (!r && a) {
				var n = [
					"var CONFETTI, SIZE = {}, module = {};",
					"(" + e.toString() + ")(this, module, true, SIZE);",
					"onmessage = function(msg) {",
					"  if (msg.data.options) {",
					"    CONFETTI(msg.data.options).then(function () {",
					"      if (msg.data.callback) {",
					"        postMessage({ callback: msg.data.callback });",
					"      }",
					"    });",
					"  } else if (msg.data.reset) {",
					"    CONFETTI && CONFETTI.reset();",
					"  } else if (msg.data.resize) {",
					"    SIZE.width = msg.data.resize.width;",
					"    SIZE.height = msg.data.resize.height;",
					"  } else if (msg.data.canvas) {",
					"    SIZE.width = msg.data.canvas.width;",
					"    SIZE.height = msg.data.canvas.height;",
					"    CONFETTI = module.exports.create(msg.data.canvas);",
					"  }",
					"}"
				].join("\n");
				try {
					t = new Worker(URL.createObjectURL(new Blob([n])));
				} catch (e) {
					return typeof console.warn == "function" && console.warn("🎊 Could not load worker", e), null;
				}
				o(t);
			}
			return t;
		};
	})(), p = {
		particleCount: 50,
		angle: 90,
		spread: 45,
		startVelocity: 45,
		decay: .9,
		gravity: 1,
		drift: 0,
		ticks: 200,
		x: .5,
		y: .5,
		shapes: ["square", "circle"],
		zIndex: 100,
		colors: [
			"#26ccff",
			"#a25afd",
			"#ff5e7e",
			"#88ff5a",
			"#fcff42",
			"#ffa62d",
			"#ff36ff"
		],
		disableForReducedMotion: !1,
		scalar: 1
	};
	function m(e, t) {
		return t ? t(e) : e;
	}
	function h(e) {
		return e != null;
	}
	function g(e, t, n) {
		return m(e && h(e[t]) ? e[t] : p[t], n);
	}
	function _(e) {
		return e < 0 ? 0 : Math.floor(e);
	}
	function v(e, t) {
		return Math.floor(Math.random() * (t - e)) + e;
	}
	function y(e) {
		return parseInt(e, 16);
	}
	function b(e) {
		return e.map(x);
	}
	function x(e) {
		var t = String(e).replace(/[^0-9a-f]/gi, "");
		return t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
			r: y(t.substring(0, 2)),
			g: y(t.substring(2, 4)),
			b: y(t.substring(4, 6))
		};
	}
	function S(e) {
		var t = g(e, "origin", Object);
		return t.x = g(t, "x", Number), t.y = g(t, "y", Number), t;
	}
	function C(e) {
		e.width = document.documentElement.clientWidth, e.height = document.documentElement.clientHeight;
	}
	function w(e) {
		var t = e.getBoundingClientRect();
		e.width = t.width, e.height = t.height;
	}
	function T(e) {
		var t = document.createElement("canvas");
		return t.style.position = "fixed", t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", t.style.zIndex = e, t;
	}
	function E(e, t, n, r, i, a, o, s, c) {
		e.save(), e.translate(t, n), e.rotate(a), e.scale(r, i), e.arc(0, 0, 1, o, s, c), e.restore();
	}
	function D(e) {
		var t = e.angle * (Math.PI / 180), n = e.spread * (Math.PI / 180);
		return {
			x: e.x,
			y: e.y,
			wobble: Math.random() * 10,
			wobbleSpeed: Math.min(.11, Math.random() * .1 + .05),
			velocity: e.startVelocity * .5 + Math.random() * e.startVelocity,
			angle2D: -t + (.5 * n - Math.random() * n),
			tiltAngle: (Math.random() * .5 + .25) * Math.PI,
			color: e.color,
			shape: e.shape,
			tick: 0,
			totalTicks: e.ticks,
			decay: e.decay,
			drift: e.drift,
			random: Math.random() + 2,
			tiltSin: 0,
			tiltCos: 0,
			wobbleX: 0,
			wobbleY: 0,
			gravity: e.gravity * 3,
			ovalScalar: .6,
			scalar: e.scalar,
			flat: e.flat
		};
	}
	function O(e, t) {
		t.x += Math.cos(t.angle2D) * t.velocity + t.drift, t.y += Math.sin(t.angle2D) * t.velocity + t.gravity, t.velocity *= t.decay, t.flat ? (t.wobble = 0, t.wobbleX = t.x + 10 * t.scalar, t.wobbleY = t.y + 10 * t.scalar, t.tiltSin = 0, t.tiltCos = 0, t.random = 1) : (t.wobble += t.wobbleSpeed, t.wobbleX = t.x + 10 * t.scalar * Math.cos(t.wobble), t.wobbleY = t.y + 10 * t.scalar * Math.sin(t.wobble), t.tiltAngle += .1, t.tiltSin = Math.sin(t.tiltAngle), t.tiltCos = Math.cos(t.tiltAngle), t.random = Math.random() + 2);
		var n = t.tick++ / t.totalTicks, r = t.x + t.random * t.tiltCos, i = t.y + t.random * t.tiltSin, a = t.wobbleX + t.random * t.tiltCos, s = t.wobbleY + t.random * t.tiltSin;
		if (e.fillStyle = "rgba(" + t.color.r + ", " + t.color.g + ", " + t.color.b + ", " + (1 - n) + ")", e.beginPath(), o && t.shape.type === "path" && typeof t.shape.path == "string" && Array.isArray(t.shape.matrix)) e.fill(N(t.shape.path, t.shape.matrix, t.x, t.y, Math.abs(a - r) * .1, Math.abs(s - i) * .1, Math.PI / 10 * t.wobble));
		else if (t.shape.type === "bitmap") {
			var c = Math.PI / 10 * t.wobble, l = Math.abs(a - r) * .1, d = Math.abs(s - i) * .1, f = t.shape.bitmap.width * t.scalar, p = t.shape.bitmap.height * t.scalar, m = new DOMMatrix([
				Math.cos(c) * l,
				Math.sin(c) * l,
				-Math.sin(c) * d,
				Math.cos(c) * d,
				t.x,
				t.y
			]);
			m.multiplySelf(new DOMMatrix(t.shape.matrix));
			var h = e.createPattern(u.transform(t.shape.bitmap), "no-repeat");
			h.setTransform(m), e.globalAlpha = 1 - n, e.fillStyle = h, e.fillRect(t.x - f / 2, t.y - p / 2, f, p), e.globalAlpha = 1;
		} else if (t.shape === "circle") e.ellipse ? e.ellipse(t.x, t.y, Math.abs(a - r) * t.ovalScalar, Math.abs(s - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI) : E(e, t.x, t.y, Math.abs(a - r) * t.ovalScalar, Math.abs(s - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI);
		else if (t.shape === "star") for (var g = Math.PI / 2 * 3, _ = 4 * t.scalar, v = 8 * t.scalar, y = t.x, b = t.y, x = 5, S = Math.PI / x; x--;) y = t.x + Math.cos(g) * v, b = t.y + Math.sin(g) * v, e.lineTo(y, b), g += S, y = t.x + Math.cos(g) * _, b = t.y + Math.sin(g) * _, e.lineTo(y, b), g += S;
		else e.moveTo(Math.floor(t.x), Math.floor(t.y)), e.lineTo(Math.floor(t.wobbleX), Math.floor(i)), e.lineTo(Math.floor(a), Math.floor(s)), e.lineTo(Math.floor(r), Math.floor(t.wobbleY));
		return e.closePath(), e.fill(), t.tick < t.totalTicks;
	}
	function k(e, t, n, a, o) {
		var s = t.slice(), c = e.getContext("2d"), f, p, m = l(function(t) {
			function l() {
				f = p = null, c.clearRect(0, 0, a.width, a.height), u.clear(), o(), t();
			}
			function m() {
				r && (a.width !== i.width || a.height !== i.height) && (a.width = e.width = i.width, a.height = e.height = i.height), !a.width && !a.height && (n(e), a.width = e.width, a.height = e.height), c.clearRect(0, 0, a.width, a.height), s = s.filter(function(e) {
					return O(c, e);
				}), s.length ? f = d.frame(m) : l();
			}
			f = d.frame(m), p = l;
		});
		return {
			addFettis: function(e) {
				return s = s.concat(e), m;
			},
			canvas: e,
			promise: m,
			reset: function() {
				f && d.cancel(f), p && p();
			}
		};
	}
	function A(e, n) {
		var r = !e, i = !!g(n || {}, "resize"), o = !1, s = g(n, "disableForReducedMotion", Boolean), c = a && g(n || {}, "useWorker") ? f() : null, u = r ? C : w, d = e && c ? !!e.__confetti_initialized : !1, p = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, m;
		function h(t, n, r) {
			for (var i = g(t, "particleCount", _), a = g(t, "angle", Number), o = g(t, "spread", Number), s = g(t, "startVelocity", Number), c = g(t, "decay", Number), l = g(t, "gravity", Number), d = g(t, "drift", Number), f = g(t, "colors", b), p = g(t, "ticks", Number), h = g(t, "shapes"), y = g(t, "scalar"), x = !!g(t, "flat"), C = S(t), w = i, T = [], E = e.width * C.x, O = e.height * C.y; w--;) T.push(D({
				x: E,
				y: O,
				angle: a,
				spread: o,
				startVelocity: s,
				color: f[w % f.length],
				shape: h[v(0, h.length)],
				ticks: p,
				decay: c,
				gravity: l,
				drift: d,
				scalar: y,
				flat: x
			}));
			return m ? m.addFettis(T) : (m = k(e, T, u, n, r), m.promise);
		}
		function y(n) {
			var a = s || g(n, "disableForReducedMotion", Boolean), f = g(n, "zIndex", Number);
			if (a && p) return l(function(e) {
				e();
			});
			r && m ? e = m.canvas : r && !e && (e = T(f), document.body.appendChild(e)), i && !d && u(e);
			var _ = {
				width: e.width,
				height: e.height
			};
			c && !d && c.init(e), d = !0, c && (e.__confetti_initialized = !0);
			function v() {
				if (c) {
					var t = { getBoundingClientRect: function() {
						if (!r) return e.getBoundingClientRect();
					} };
					u(t), c.postMessage({ resize: {
						width: t.width,
						height: t.height
					} });
					return;
				}
				_.width = _.height = null;
			}
			function y() {
				m = null, i && (o = !1, t.removeEventListener("resize", v)), r && e && (document.body.contains(e) && document.body.removeChild(e), e = null, d = !1);
			}
			return i && !o && (o = !0, t.addEventListener("resize", v, !1)), c ? c.fire(n, _, y) : h(n, _, y);
		}
		return y.reset = function() {
			c && c.reset(), m && m.reset();
		}, y;
	}
	var j;
	function M() {
		return j ||= A(null, {
			useWorker: !0,
			resize: !0
		}), j;
	}
	function N(e, t, n, r, i, a, o) {
		var s = new Path2D(e), c = new Path2D();
		c.addPath(s, new DOMMatrix(t));
		var l = new Path2D();
		return l.addPath(c, new DOMMatrix([
			Math.cos(o) * i,
			Math.sin(o) * i,
			-Math.sin(o) * a,
			Math.cos(o) * a,
			n,
			r
		])), l;
	}
	function P(e) {
		if (!o) throw Error("path confetti are not supported in this browser");
		var t, n;
		typeof e == "string" ? t = e : (t = e.path, n = e.matrix);
		var r = new Path2D(t), i = document.createElement("canvas").getContext("2d");
		if (!n) {
			for (var a = 1e3, s = a, c = a, l = 0, u = 0, d, f, p = 0; p < a; p += 2) for (var m = 0; m < a; m += 2) i.isPointInPath(r, p, m, "nonzero") && (s = Math.min(s, p), c = Math.min(c, m), l = Math.max(l, p), u = Math.max(u, m));
			d = l - s, f = u - c;
			var h = 10, g = Math.min(h / d, h / f);
			n = [
				g,
				0,
				0,
				g,
				-Math.round(d / 2 + s) * g,
				-Math.round(f / 2 + c) * g
			];
		}
		return {
			type: "path",
			path: t,
			matrix: n
		};
	}
	function F(e) {
		var t, n = 1, r = "#000000", i = "\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\", \"EmojiOne Color\", \"Android Emoji\", \"Twemoji Mozilla\", \"system emoji\", sans-serif";
		typeof e == "string" ? t = e : (t = e.text, n = "scalar" in e ? e.scalar : n, i = "fontFamily" in e ? e.fontFamily : i, r = "color" in e ? e.color : r);
		var a = 10 * n, o = "" + a + "px " + i, s = new OffscreenCanvas(a, a), c = s.getContext("2d");
		c.font = o;
		var l = c.measureText(t), u = Math.ceil(l.actualBoundingBoxRight + l.actualBoundingBoxLeft), d = Math.ceil(l.actualBoundingBoxAscent + l.actualBoundingBoxDescent), f = 2, p = l.actualBoundingBoxLeft + f, m = l.actualBoundingBoxAscent + f;
		u += f + f, d += f + f, s = new OffscreenCanvas(u, d), c = s.getContext("2d"), c.font = o, c.fillStyle = r, c.fillText(t, p, m);
		var h = 1 / n;
		return {
			type: "bitmap",
			bitmap: s.transferToImageBitmap(),
			matrix: [
				h,
				0,
				0,
				h,
				-u * h / 2,
				-d * h / 2
			]
		};
	}
	n.exports = function() {
		return M().apply(this, arguments);
	}, n.exports.reset = function() {
		M().reset();
	}, n.exports.create = A, n.exports.shapeFromPath = P, n.exports.shapeFromText = F;
})((function() {
	return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
})(), Ee, !1);
var De = Ee.exports;
Ee.exports.create;
//#endregion
//#region src/kits/ai/F0AiPong/components/PongBall.tsx
function Oe({ size: e = 40, className: t, style: n }) {
	return /* @__PURE__ */ W("div", {
		className: o(t, "rounded-full"),
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
var ke = 40, Z = 93, Ae = Z * .5, je = 32, Me = 24, Q = 8, Ne = 48, Pe = 10, Fe = 7, Ie = 18, Le = .25, Re = .15, ze = 800, Be = Math.PI / 3, $ = ke / 2, Ve = .12, He = 8, Ue = 5, We = .08;
function Ge(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function Ke() {
	let e = (Math.random() * 50 + 65) * Math.PI / 180, t = Math.random() > .5 ? 1 : -1, n = Math.random() > .5 ? 1 : -1;
	return {
		vx: Math.cos(e) * Fe * t,
		vy: Math.sin(e) * Fe * n
	};
}
var qe = ({ onClose: e }) => {
	let t = n(), r = O(), i = V(null), a = V(null), s = V(null), c = V(null), [u, d] = H(null), f = V(/* @__PURE__ */ new Set()), p = V({
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		speed: Fe
	}), m = V(0), h = V(0), g = V(0), _ = V({
		player: 0,
		ai: 0
	}), y = V("countdown"), b = V(0), x = V(0), S = V([]), C = V(0), w = V(0), T = V({
		width: 0,
		height: 0
	}), E = V(0), D = V(0), k = V(Z), A = V(0), j = V(0), M = V(0), N = V(0), P = V(null), [F, L] = H({
		x: 0,
		y: 0
	}), [z, B] = H(0), [K, ee] = H(0), [te, ne] = H({
		player: 0,
		ai: 0
	}), [re, ie] = H(Z), [q, ae] = H("countdown"), [oe, J] = H(3), [se, ce] = H([]), [Y, le] = H(0), [ue, de] = H(0), [fe, pe] = H(null), [me, he] = H(null), ge = I(() => {
		let { width: e, height: t } = T.current, n = Fe + A.current;
		p.current = {
			x: e / 2,
			y: t / 2,
			vx: 0,
			vy: 0,
			speed: n
		}, S.current = [], x.current = 0;
	}, []), _e = I(() => {
		let e = Fe + A.current, { vx: t, vy: n } = Ke(), r = e / Fe;
		p.current.vx = t * r, p.current.vy = n * r, p.current.speed = e, y.current = "playing", ae("playing"), P.current = null, he(null);
	}, []), ve = I(() => {
		ge(), y.current = "countdown", ae("countdown"), J(3);
		let e = 3, t = setInterval(() => {
			e--, e <= 0 ? (clearInterval(t), _e()) : J(e);
		}, 600);
		return () => clearInterval(t);
	}, [ge, _e]), ye = I(() => {
		r || !c.current || c.current({
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
	}, [r]), be = I((n) => {
		let r = { ..._.current };
		if (n === "player" ? r.player++ : r.ai++, _.current = r, ne(r), E.current = 8, P.current = n, he(n), A.current = Math.min(11, A.current + Re), n === "player" && ye(), r.player >= 3 || r.ai >= 3) {
			y.current = "gameover", ae("gameover"), ge(), pe(r.player >= 3 ? t.ai.pong.youWin : t.ai.pong.youLose), setTimeout(() => e(), 2e3);
			return;
		}
		y.current = "scored", ae("scored"), ge(), b.current = ze, setTimeout(() => {
			y.current === "scored" && ve();
		}, ze);
	}, [
		ge,
		ve,
		ye,
		t
	]);
	if (R(() => {
		if (i.current) {
			let e = i.current.closest("[aria-hidden]");
			e && d(e);
		}
	}, []), R(() => (s.current && (c.current = De.create(s.current, {
		resize: !0,
		useWorker: !1
	})), () => {
		c.current?.reset();
	}), [u]), R(() => {
		let t = (t) => {
			t.key === "Escape" && e(), (t.key === "ArrowLeft" || t.key === "ArrowRight") && (t.preventDefault(), f.current.add(t.key));
		}, n = (e) => {
			f.current.delete(e.key);
		};
		return window.addEventListener("keydown", t), window.addEventListener("keyup", n), () => {
			window.removeEventListener("keydown", t), window.removeEventListener("keyup", n);
		};
	}, [e]), R(() => {
		let e = a.current;
		if (!e) return;
		let t = e.getBoundingClientRect();
		T.current = {
			width: t.width,
			height: t.height
		};
		let n = t.width / 2;
		m.current = n, h.current = n, g.current = n, _.current = {
			player: 0,
			ai: 0
		}, ne({
			player: 0,
			ai: 0
		}), D.current = 0, k.current = Z, ie(Z), A.current = 0, j.current = 0;
		let r = ve(), i = (t) => {
			let n = e.getBoundingClientRect(), r = k.current;
			m.current = Ge(t.clientX - n.left, r / 2 + Q, n.width - r / 2 - Q);
		};
		e.addEventListener("pointermove", i);
		let o = (e) => {
			C.current ||= e;
			let t = (e - C.current) / 16.667, n = Math.min(t, 3);
			C.current = e;
			let { width: r, height: i } = T.current, a = p.current, s = k.current;
			if (f.current.has("ArrowLeft") && (m.current = Ge(m.current - Pe * n, s / 2 + Q, r - s / 2 - Q)), f.current.has("ArrowRight") && (m.current = Ge(m.current + Pe * n, s / 2 + Q, r - s / 2 - Q)), E.current > 0 && (E.current *= .85, E.current < .5 && (E.current = 0)), y.current === "playing") {
				S.current.push({
					x: a.x,
					y: a.y
				}), S.current.length > Ue && (S.current = S.current.slice(-5)), a.x += a.vx * n, a.y += a.vy * n, M.current += N.current * n, N.current *= .96;
				let e = r - Q - ke / 2;
				a.x <= 28 && (a.x = 28, a.vx = Math.abs(a.vx), N.current *= -.5), a.x >= e && (a.x = e, a.vx = -Math.abs(a.vx), N.current *= -.5);
				let t = i - Me - je, o = s / 2;
				if (a.y + $ >= t && a.y - $ <= t + je && a.vy > 0 && a.x >= m.current - o - $ && a.x <= m.current + o + $) {
					a.y = t - $;
					let e = Ge((a.x - m.current) / o, -1, 1);
					a.speed = Math.min(a.speed + Le, Ie);
					let n = e * Be;
					a.vx = Math.sin(n) * a.speed, a.vy = -Math.cos(n) * a.speed, N.current = e * 1.2, x.current++, D.current++;
					let r = Ae / Z + (1 - Ae / Z) * Math.exp(-D.current * .03);
					k.current = Z * r;
				}
				let c = Z / 2;
				if (a.y - $ <= 56 && a.y + $ >= Me && a.vy < 0 && a.x >= h.current - c - $ && a.x <= h.current + c + $) {
					a.y = 76;
					let e = Ge((a.x - h.current) / c, -1, 1);
					a.speed = Math.min(a.speed + Le, Ie);
					let t = e * Be;
					a.vx = Math.sin(t) * a.speed, a.vy = Math.cos(t) * a.speed, N.current = e * 1.2, x.current++;
				}
				if (a.y < -80 ? be("player") : a.y > i + 80 && be("ai"), a.vy < 0) {
					let e = Math.max(1, (a.y - Me) / -a.vy), t = a.x + a.vx * e, r = He * (1 + a.speed / Ie), i = t + (Math.random() - .5) * r - g.current;
					g.current += i * Ve * n;
				} else {
					let e = Math.sin(Date.now() * .002) * 15;
					g.current += (r / 2 + e - g.current) * .025 * n;
				}
				let l = (g.current - h.current) * .1 * n;
				j.current += l, j.current *= .88;
				let u = 6 + x.current * .12;
				j.current = Ge(j.current, -u, u), h.current += j.current * n, h.current = Ge(h.current, 54.5, r - Z / 2 - Q);
			}
			L({
				x: a.x,
				y: a.y
			}), B(m.current), ee(h.current), ce([...S.current]), le(E.current), ie(k.current), de(M.current), w.current = requestAnimationFrame(o);
		};
		return C.current = 0, w.current = requestAnimationFrame(o), () => {
			cancelAnimationFrame(w.current), e.removeEventListener("pointermove", i), r?.();
		};
	}, [
		u,
		be,
		ve
	]), !u) return /* @__PURE__ */ W("div", { ref: i });
	let xe = Y > .5 ? (Math.random() - .5) * Y : 0, Se = Y > .5 ? (Math.random() - .5) * Y : 0;
	return U(/* @__PURE__ */ G("div", {
		className: "absolute inset-0 z-50 flex flex-col bg-f1-background",
		children: [/* @__PURE__ */ W("style", { children: "\n        @property --gradient-angle {\n          syntax: \"<angle>\";\n          initial-value: 0deg;\n          inherits: false;\n        }\n        @keyframes pong-ai-glow {\n          from { --gradient-angle: 0deg; }\n          to { --gradient-angle: 360deg; }\n        }\n      " }), /* @__PURE__ */ G("div", {
			className: "flex flex-1 flex-col bg-f1-special-page",
			children: [
				/* @__PURE__ */ G("div", {
					className: "flex items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ W("span", {
						className: "text-base font-medium text-f1-foreground",
						children: t.ai.pong.title
					}), /* @__PURE__ */ W(l, {
						icon: v,
						label: t.actions.close,
						onClick: e,
						variant: "ghost",
						hideLabel: !0
					})]
				}),
				/* @__PURE__ */ G("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ G("div", {
						ref: a,
						className: "absolute inset-0 cursor-none overflow-hidden",
						style: {
							touchAction: "none",
							transform: `translate(${xe}px, ${Se}px)`
						},
						children: [
							/* @__PURE__ */ W("div", { className: "pointer-events-none absolute left-0 right-0 top-1/2 h-px translate-y-1/2 bg-f1-border" }),
							se.map((e, t) => {
								let n = (t + 1) / se.length, r = ke * (.15 + n * .25);
								return /* @__PURE__ */ W("div", {
									className: "pointer-events-none absolute rounded-full bg-f1-foreground-secondary/40",
									style: {
										width: r,
										height: r,
										opacity: n * We,
										transform: `translate(${e.x - r / 2}px, ${e.y - r / 2}px)`
									}
								}, t);
							}),
							/* @__PURE__ */ W("div", {
								className: o("absolute isolate rounded", "border border-solid border-f1-border", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]", "before:rounded-[inherit] before:bg-f1-special-page before:content-['']", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]", "after:rounded-[inherit] after:blur-[5px] after:content-['']", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]", "after:scale-100 after:opacity-100"),
								style: {
									width: Z,
									height: je,
									top: Me,
									transform: `translateX(${K - Z / 2}px)`,
									animation: "pong-ai-glow 4s linear infinite",
									"--gradient-angle": "0deg"
								}
							}),
							/* @__PURE__ */ W(Oe, {
								size: ke,
								className: "pointer-events-none absolute z-30",
								style: {
									transform: `translate(${F.x - ke / 2}px, ${F.y - ke / 2}px) rotate(${ue}rad)`,
									opacity: q === "countdown" ? 0 : 1,
									transition: "opacity 0.3s ease-in"
								}
							}),
							/* @__PURE__ */ W("div", {
								className: "absolute rounded border-2 border-solid border-f1-border",
								style: {
									width: re,
									height: je,
									bottom: Me,
									transform: `translateX(${z - re / 2}px)`,
									transition: "width 0.3s ease-out"
								},
								children: /* @__PURE__ */ W("div", { className: "h-full w-full rounded bg-f1-special-page" })
							}),
							/* @__PURE__ */ W("div", {
								className: "pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-f1-border bg-f1-special-page",
								children: /* @__PURE__ */ W("span", {
									className: "text-3xl font-semibold text-f1-foreground-secondary",
									style: {
										opacity: +(q === "countdown"),
										transition: "opacity 0.3s ease-out"
									},
									children: q === "countdown" ? oe : ""
								})
							}),
							q === "scored" && me && /* @__PURE__ */ W("div", {
								className: o("pointer-events-none absolute left-4 flex items-center", me === "player" ? "top-1/2 mt-4" : "bottom-1/2 -mt-4"),
								children: /* @__PURE__ */ W("span", {
									className: "text-2xl font-semibold text-f1-foreground-secondary/60",
									children: t.ai.pong.goal
								})
							}),
							q === "gameover" && fe && /* @__PURE__ */ W("div", {
								className: "pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-f1-special-page/60 backdrop-blur-sm",
								children: /* @__PURE__ */ W("span", {
									className: "text-2xl font-semibold text-f1-foreground",
									children: fe
								})
							}),
							/* @__PURE__ */ W("canvas", {
								ref: s,
								className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
							})
						]
					}), /* @__PURE__ */ W("div", {
						className: "pointer-events-none absolute inset-y-0 right-0 flex flex-col items-center justify-center",
						style: { width: Ne },
						children: /* @__PURE__ */ G("div", {
							className: "flex flex-col items-center gap-6",
							children: [/* @__PURE__ */ W("span", {
								className: o("text-2xl font-semibold", te.ai > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"),
								children: te.ai
							}), /* @__PURE__ */ W("span", {
								className: o("text-2xl font-semibold", te.player > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"),
								children: te.player
							})]
						})
					})]
				}),
				/* @__PURE__ */ W("div", {
					className: "flex items-center justify-center px-4 py-3 text-sm font-medium text-f1-foreground-secondary",
					children: /* @__PURE__ */ G("div", {
						className: "flex gap-5",
						children: [/* @__PURE__ */ W("span", { children: t.ai.pong.controls }), /* @__PURE__ */ W("span", { children: t.ai.pong.escToExit })]
					})
				})
			]
		})]
	}), u);
}, Je = ({ onResize: e, onReset: t, isResizing: n, setIsResizing: r, isCanvasMode: i, side: a = "right" }) => {
	let s = V(0), c = V(0), l = V(null), u = I((e) => {
		e.preventDefault(), s.current = e.clientX, r(!0);
	}, [r]), d = I(async () => {
		r(!0), await t(), r(!1);
	}, [t, r]);
	return R(() => {
		if (!n) return;
		let t = () => {
			l.current = null;
			let t = c.current;
			c.current = 0, t !== 0 && e(t);
		}, i = (e) => {
			let n = a === "left" ? e.clientX - s.current : s.current - e.clientX;
			s.current = e.clientX, c.current += n, l.current ??= requestAnimationFrame(t);
		}, o = () => {
			r(!1);
		};
		return document.addEventListener("mousemove", i), document.addEventListener("mouseup", o), () => {
			document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", o), l.current != null && (cancelAnimationFrame(l.current), l.current = null), t();
		};
	}, [
		n,
		e,
		r,
		a
	]), /* @__PURE__ */ G("div", {
		className: o("group relative z-10 h-full flex-shrink-0 cursor-ew-resize w-1", i && "border border-solid border-x-0 border-f1-border-secondary bg-f1-special-page"),
		onMouseDown: u,
		onDoubleClick: d,
		children: [/* @__PURE__ */ W("div", {
			"aria-hidden": !0,
			className: "absolute -inset-x-1 inset-y-0"
		}), /* @__PURE__ */ W("div", {
			"aria-hidden": !0,
			className: o("pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 rounded-full", "transition-[width,background-color] duration-150 ease-out", "w-px bg-transparent", "group-hover:w-1 group-hover:bg-f1-background-secondary-hover", n && "!w-1 !bg-f1-background-secondary-hover")
		})]
	});
}, Ye = ({ children: t, visible: n, side: r, exitStyle: a = "shrink", acceptsWidgetDrop: s = !1 }) => {
	let { open: c, visualizationMode: l, shouldPlayEntranceAnimation: d, setShouldPlayEntranceAnimation: p, resizable: m, setChatWidth: h, resetChatWidth: g, setIsResizing: _, fileAttachments: v, isClarifying: y, fileDragOver: b, setFileDragOver: x, processDroppedFiles: S, setPendingQuote: C, focusChatInput: w, activeGame: T, closeGame: E, panelSide: D } = X(), k = n ?? c, A = s && T === null && k && !y, j = V(A);
	j.current = A;
	let M = V(null), N = l === "canvas", P = O(), F = (r ?? D) === "left", L = V(!1);
	R(() => {
		L.current = c;
	});
	let z = V(0), U = v?.onUploadFiles != null && !y;
	R(() => {
		A || M.current?.removeAttribute("data-ai-chat-dropzone");
	}, [A]);
	let K = I((e) => {
		e.preventDefault(), e.stopPropagation(), z.current++, U && x(!0);
	}, [U, x]), ee = I((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []), te = I((e) => {
		e.preventDefault(), e.stopPropagation(), z.current--, z.current <= 0 && (z.current = 0, x(!1));
	}, [x]), ne = I((e) => {
		e.preventDefault(), e.stopPropagation(), z.current = 0, x(!1);
	}, [x]), re = V(null), [ie, oe] = H(null), J = I((e) => {
		re.current = e, oe(e?.title ?? null);
	}, []);
	R(() => {
		let e = (e) => {
			if (!A) return;
			let t = e.detail;
			typeof t?.id != "string" || !t.id || typeof t.title != "string" || !t.title.trim() || J(t);
		}, t = () => J(null);
		return window.addEventListener(q, e), window.addEventListener(ae, t), () => {
			window.removeEventListener(q, e), window.removeEventListener(ae, t);
		};
	}, [A, J]), R(() => {
		A || J(null);
	}, [A, J]);
	let se = I(() => {
		if (!j.current) {
			J(null);
			return;
		}
		let e = re.current;
		if (e !== null) {
			if (J(null), e.onAskAi) e.onAskAi({
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
		A,
		w,
		J,
		C
	]), ce = l === "fullscreen", [Y, le] = H(!1);
	R(() => {
		if (Y) return _?.(!0), () => _?.(!1);
	}, [Y, _]);
	let ue = u(`(max-width: ${f.md}px)`, { initializeWithValue: !0 }), de = I((e) => {
		h((t) => {
			let n = t + e;
			return Math.max(300, Math.min(712, n));
		});
	}, [h]), fe = B(() => Y || P ? { duration: 0 } : {
		duration: .3,
		ease: [
			0,
			0,
			.1,
			1
		]
	}, [
		Y,
		P,
		d
	]), pe = F ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
	return /* @__PURE__ */ W(e, { children: k && /* @__PURE__ */ G(i.div, {
		className: o("bg-f1-transparent pointer-events-auto relative flex h-full dark:bg-f1-background md:py-1", ce ? "md:pr-1" : F ? "mr-auto" : "ml-auto md:pr-1"),
		initial: !P && d && !L.current ? {
			opacity: 0,
			clipPath: pe
		} : !1,
		animate: {
			opacity: 1,
			clipPath: "inset(0 0 0 0)"
		},
		exit: P ? {
			opacity: 0,
			transition: { duration: 0 }
		} : a === "hold" ? {
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
			transformOrigin: F ? "left center" : "right center"
		},
		onAnimationComplete: () => {
			d && p(!1);
		},
		children: [
			m && !ce && !ue && !F && /* @__PURE__ */ W(Je, {
				onResize: de,
				onReset: g,
				isResizing: Y,
				setIsResizing: le,
				isCanvasMode: N,
				side: "right"
			}),
			/* @__PURE__ */ G("div", {
				ref: M,
				"aria-hidden": !k,
				className: o("relative flex h-full w-full flex-col overflow-hidden bg-f1-special-page border border-solid border-f1-border-secondary", N && (F ? "border-r-transparent" : "border-l-transparent"), N ? F ? "xs:rounded-l-xl" : "xs:rounded-r-xl" : "xs:rounded-xl"),
				"data-ai-chat-dropzone": A ? "" : void 0,
				onDragEnter: K,
				onDragOver: ee,
				onDragLeave: te,
				onDrop: ne,
				onPointerUp: se,
				children: [
					/* @__PURE__ */ W("div", {
						className: "relative flex h-full w-full flex-col overflow-hidden",
						children: t
					}),
					(U || A && ie !== null) && /* @__PURE__ */ W(Te, {
						visible: U && b || ie !== null,
						mode: ie === null ? "files" : "discuss",
						onFilesDropped: U ? (e) => {
							z.current = 0, x(!1), S(e);
						} : void 0
					}),
					T === "pong" && /* @__PURE__ */ W(qe, { onClose: E })
				]
			}),
			m && !ce && !ue && F && /* @__PURE__ */ W(Je, {
				onResize: de,
				onReset: g,
				isResizing: Y,
				setIsResizing: le,
				isCanvasMode: N,
				side: "left"
			})
		]
	}, "chat-wrapper") });
}, Xe = ({ enabled: e = !1, side: t, panelContentSide: n, initialMessage: r, chatHeader: i, chatMessages: a, chatInput: o, chatOverlay: s, welcomeScreenSuggestions: c, welcomeScreenCards: l, disclaimer: u, resizable: d = !1, defaultVisualizationMode: f, lockVisualizationMode: p, historyEnabled: m, footer: h, VoiceMode: g, entityRefs: _, canvasActions: v, canvasEntities: y, credits: b, employeeCredits: x, creditWarning: S, fileAttachments: C, onTranscribe: w, onThumbsUp: T, onThumbsDown: E, children: D, agent: O, tracking: k }) => /* @__PURE__ */ W(ye, {
	enabled: e,
	side: t,
	panelContentSide: n,
	onThumbsUp: T,
	onThumbsDown: E,
	agent: O,
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
	tracking: k,
	entityRefs: _,
	canvasActions: v,
	canvasEntities: y,
	credits: b,
	employeeCredits: x,
	creditWarning: S,
	fileAttachments: C,
	onTranscribe: w,
	children: D
}), Ze = t("F0AiChat", ({ header: t, messages: r, input: a, overlay: o }) => {
	let { enabled: l, open: u, setOpen: d, mode: f, visualizationMode: p, VoiceMode: m, tracking: h, chatHeader: g, chatMessages: _, chatInput: y, chatOverlay: b, panelContent: x, panelSide: S, panelContentSide: C, restoringPanelContentId: w } = X(), T = n(), E = C !== S, { motionProps: D } = oe(p === "fullscreen" ? "fullscreen" : "docked", (e, t) => t === "fullscreen" ? 220 : 460), k = O(), A = t ?? g, j = r ?? _, M = a ?? y, N = o ?? b;
	if (!l) return null;
	let P, F;
	return x && !E ? (P = `panel:${x.id}`, F = x.content) : w && !E ? (P = `restoring:${w}`, F = /* @__PURE__ */ W(c, {
		role: "status",
		"aria-busy": !0,
		className: "h-full w-full rounded-none"
	})) : f === "voice" && m ? (P = "voice", F = /* @__PURE__ */ G("div", {
		className: "flex h-full w-full flex-col",
		children: [/* @__PURE__ */ W("div", {
			className: "absolute right-3 top-3 z-20",
			children: /* @__PURE__ */ W(s, {
				variant: "ghost",
				hideLabel: !0,
				label: T.ai.closeChat,
				icon: v,
				onClick: () => {
					d(!1), h?.onClose?.();
				}
			})
		}), /* @__PURE__ */ W(m, {})]
	})) : (P = "chat", F = /* @__PURE__ */ G("div", {
		className: "relative flex h-full w-full flex-col",
		children: [/* @__PURE__ */ G("div", {
			ref: (e) => {
				N ? e?.setAttribute("inert", "") : e?.removeAttribute("inert");
			},
			className: "flex min-h-0 flex-1 flex-col",
			children: [A, /* @__PURE__ */ G(i.div, {
				className: "flex min-h-0 flex-1 flex-col",
				...D,
				children: [/* @__PURE__ */ W("div", {
					className: "flex min-h-0 flex-1 flex-col overflow-hidden",
					children: j
				}), M]
			})]
		}), N && /* @__PURE__ */ W("div", {
			className: "absolute inset-0 z-30 flex items-center justify-center bg-f1-background-overlay p-4",
			children: N
		})]
	})), /* @__PURE__ */ W(Ye, {
		visible: E ? u && !x && !w : void 0,
		exitStyle: E && u ? "hold" : "shrink",
		acceptsWidgetDrop: P === "chat" && !N,
		children: /* @__PURE__ */ W(e, {
			initial: !1,
			children: /* @__PURE__ */ W(i.div, {
				className: "absolute inset-0 flex flex-col overflow-hidden",
				initial: !k && { opacity: 0 },
				animate: { opacity: 1 },
				exit: k ? void 0 : { opacity: 0 },
				transition: {
					duration: k ? 0 : .15,
					ease: "easeOut"
				},
				children: F
			}, P)
		})
	});
}), Qe = t("F0AiChatProvider", Xe);
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Block.tsx
function $e({ children: e, ...t }) {
	return /* @__PURE__ */ W("pre", {
		...t,
		className: o("relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2", t.className),
		children: e
	});
}
function et({ children: e, ...t }) {
	return /* @__PURE__ */ W("code", {
		...t,
		className: o("rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground", "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base", t.className),
		children: e
	});
}
function tt({ children: e, ...t }) {
	return /* @__PURE__ */ W("blockquote", {
		...t,
		className: o("mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base", t.className),
		children: e
	});
}
function nt({ ...e }) {
	return /* @__PURE__ */ W("hr", {
		...e,
		className: o("my-3 border-0 border-t border-f1-border", e.className)
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Image.tsx
function rt({ src: e, alt: t, ...n }) {
	let r = () => {
		if (e) {
			let n = document.createElement("a");
			n.href = e, n.download = t || "image", document.body.appendChild(n), n.click(), document.body.removeChild(n);
		}
	};
	return /* @__PURE__ */ G("div", {
		className: "relative w-fit",
		children: [/* @__PURE__ */ W("img", {
			...n,
			src: e,
			alt: t,
			className: o("max-w-full rounded-md", n.className)
		}), /* @__PURE__ */ W("div", {
			className: "absolute right-2 top-2 rounded",
			children: /* @__PURE__ */ W(l, {
				variant: "neutral",
				label: "Download",
				hideLabel: !0,
				icon: y,
				onClick: r
			})
		})]
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Link.tsx
function it({ children: e, ...t }) {
	return /* @__PURE__ */ W(x, {
		...t,
		variant: "link",
		href: t.href,
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Lists.tsx
function at({ children: e, ...t }) {
	return /* @__PURE__ */ W("ul", {
		...t,
		className: o("list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", t.className),
		children: e
	});
}
function ot({ children: e, ...t }) {
	return /* @__PURE__ */ W("ol", {
		...t,
		className: o("list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", t.className),
		children: e
	});
}
function st({ children: e, ...t }) {
	return /* @__PURE__ */ W("li", {
		...t,
		className: o("mb-2", t.className),
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Table.tsx
async function ct(e, t, n) {
	let r = await import("./xlsx-xmyx_Olh.js").then((e) => e.i), i = r.utils.table_to_book(e, { sheet: "Data" });
	r.writeFile(i, `${n}.${t}`);
}
function lt({ children: e, title: t, ...r }) {
	let i = n(), a = V(null), s = I((e) => {
		if (!a.current) return;
		let n = t?.replace(/\s+/g, "_").toLowerCase() || "table";
		ct(a.current, e, n);
	}, [t]);
	return /* @__PURE__ */ G("div", {
		className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary",
		children: [/* @__PURE__ */ G("div", {
			className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
			children: [/* @__PURE__ */ W(S, {
				tag: "h2",
				className: "text-base font-medium capitalize text-f1-foreground",
				children: t ?? i.ai.reportCard.tableLabel
			}), /* @__PURE__ */ W(b, {
				icon: y,
				size: "md",
				items: [{
					label: i.t("ai.dataDownload.download", { format: "Excel" }),
					icon: y,
					onClick: () => s("xlsx")
				}, {
					label: i.t("ai.dataDownload.download", { format: "CSV" }),
					icon: y,
					onClick: () => s("csv")
				}]
			})]
		}), /* @__PURE__ */ W("div", {
			className: "scrollbar-macos overflow-x-auto",
			children: /* @__PURE__ */ W("table", {
				ref: a,
				...r,
				className: o("w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0", r.className),
				children: e
			})
		})]
	});
}
function ut({ children: e, ...t }) {
	return /* @__PURE__ */ W("th", {
		...t,
		className: o("sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary", t.className),
		children: e
	});
}
function dt({ children: e, ...t }) {
	return /* @__PURE__ */ W("td", {
		...t,
		className: o("max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2", t.className),
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/components/Typography.tsx
function ft({ children: e, ...t }) {
	return /* @__PURE__ */ W("p", {
		...t,
		className: o("text-base font-normal", t.className),
		children: e
	});
}
function pt({ children: e, ...t }) {
	return /* @__PURE__ */ W("h1", {
		...t,
		className: o("mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function mt({ children: e, ...t }) {
	return /* @__PURE__ */ W("h2", {
		...t,
		className: o("mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function ht({ children: e, ...t }) {
	return /* @__PURE__ */ W("h3", {
		...t,
		className: o("mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0", t.className),
		children: e
	});
}
function gt({ children: e, ...t }) {
	return /* @__PURE__ */ W("strong", {
		...t,
		className: o("font-semibold", t.className),
		children: e
	});
}
function _t({ children: e, ...t }) {
	return /* @__PURE__ */ W("em", {
		...t,
		className: o("italic", t.className),
		children: e
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRefHoverCard.tsx
function vt({ id: e, trigger: t, resolver: n, mapToCard: r, fallbackCard: i }) {
	let a = V(/* @__PURE__ */ new Map()), [o, s] = H(() => a.current.get(e) ?? null), [c, l] = H(!1), [u, d] = H(!1), f = V(!0);
	R(() => () => {
		f.current = !1;
	}, []);
	let p = I(() => {
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
	]), v = u || !o ? i : r(o);
	return /* @__PURE__ */ G(g, {
		openDelay: 300,
		closeDelay: 100,
		onOpenChange: (e) => {
			e && p();
		},
		children: [/* @__PURE__ */ W(m, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ W(h, {
			side: "top",
			align: "start",
			className: "w-64 rounded-2xl border-none p-0 shadow-md",
			children: c ? /* @__PURE__ */ W(_.Skeleton, {}) : /* @__PURE__ */ W(_, { ...v })
		})]
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/candidate/CandidateEntityRef.tsx
var yt = F(({ label: e, ...t }, n) => /* @__PURE__ */ W("button", {
	ref: n,
	type: "button",
	className: o("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", a()),
	...t,
	children: e
}));
yt.displayName = "CandidateTrigger";
function bt({ id: e, label: t }) {
	let { entityRefs: r } = X(), i = r?.resolvers?.candidate, a = n(), o = r?.urls?.candidate?.(e), s = B(() => (e) => {
		let t = [];
		return e.source && t.push({
			title: a.t("ai.entityRef.candidate.source"),
			value: e.source
		}), e.appliedAt && t.push({
			title: a.t("ai.entityRef.candidate.applied"),
			value: e.appliedAt
		}), {
			avatar: {
				type: "person",
				firstName: e.firstName,
				lastName: e.lastName,
				src: e.avatarUrl
			},
			title: `${e.firstName} ${e.lastName}`,
			...t.length > 0 && { children: /* @__PURE__ */ W("div", {
				className: "flex flex-col gap-2",
				children: t.map((e) => /* @__PURE__ */ G("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ W("p", {
						className: "text-f1-foreground-secondary",
						children: e.title
					}), /* @__PURE__ */ W("div", {
						className: "flex items-center gap-1.5 font-medium text-f1-foreground",
						children: e.value
					})]
				}, e.title))
			}) },
			...o && { secondaryActions: {
				label: a.t("ai.view"),
				href: o
			} }
		};
	}, [a, o]), c = B(() => ({
		title: t,
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [
		t,
		a,
		o
	]);
	return i ? /* @__PURE__ */ W(vt, {
		id: e,
		trigger: /* @__PURE__ */ W(yt, { label: t }),
		resolver: i,
		mapToCard: s,
		fallbackCard: c
	}) : /* @__PURE__ */ W("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/expense/ExpenseEntityRef.tsx
var xt = F(({ label: e, ...t }, n) => /* @__PURE__ */ W("button", {
	ref: n,
	type: "button",
	className: o("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", a()),
	...t,
	children: e
}));
xt.displayName = "ExpenseTrigger";
function St({ id: e, label: t }) {
	let { entityRefs: r } = X(), i = r?.resolvers?.expense, a = n(), o = r?.urls?.expense?.(e), s = B(() => (e) => ({
		avatar: {
			type: "icon",
			icon: ee
		},
		title: e.description || `Expense #${e.id}`,
		description: [e.amount, e.status].filter(Boolean).join(" · "),
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [a, o]), c = B(() => ({
		title: t,
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [
		t,
		a,
		o
	]);
	return i ? /* @__PURE__ */ W(vt, {
		id: e,
		trigger: /* @__PURE__ */ W(xt, { label: t }),
		resolver: i,
		mapToCard: s,
		fallbackCard: c
	}) : /* @__PURE__ */ W("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/jobPosting/JobPostingEntityRef.tsx
var Ct = F(({ label: e, ...t }, n) => /* @__PURE__ */ W("button", {
	ref: n,
	type: "button",
	className: o("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", a()),
	...t,
	children: e
}));
Ct.displayName = "JobPostingTrigger";
function wt({ id: e, label: t }) {
	let { entityRefs: r } = X(), i = r?.resolvers?.jobPosting, a = n(), o = r?.urls?.jobPosting?.(e), s = B(() => (e) => ({
		title: e.title,
		description: [e.status, e.location].filter(Boolean).join(" · "),
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [a, o]), c = B(() => ({
		title: t,
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [
		t,
		a,
		o
	]);
	return i ? /* @__PURE__ */ W(vt, {
		id: e,
		trigger: /* @__PURE__ */ W(Ct, { label: t }),
		resolver: i,
		mapToCard: s,
		fallbackCard: c
	}) : /* @__PURE__ */ W("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRefDetails.tsx
function Tt({ rows: e }) {
	return e.length === 0 ? null : /* @__PURE__ */ W("div", {
		className: "flex flex-col gap-2",
		children: e.map((e, t) => /* @__PURE__ */ G("div", {
			className: "flex flex-col",
			children: [e.label && /* @__PURE__ */ W("p", {
				className: "text-f1-foreground-secondary",
				children: e.label
			}), /* @__PURE__ */ W("div", {
				className: "flex items-center gap-1.5 font-medium text-f1-foreground",
				children: e.value
			})]
		}, e.label ?? t))
	});
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/requisition/RequisitionEntityRef.tsx
var Et = F(({ label: e, ...t }, n) => /* @__PURE__ */ W("button", {
	ref: n,
	type: "button",
	className: o("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", a()),
	...t,
	children: e
}));
Et.displayName = "RequisitionTrigger";
function Dt({ id: e, label: t }) {
	let { entityRefs: r } = X(), i = r?.resolvers?.requisition, a = n(), o = r?.urls?.requisition?.(e), s = B(() => (e) => {
		let t = e.lineManager ? `${e.lineManager.firstName} ${e.lineManager.lastName}` : void 0, n = [
			e.status ? {
				label: a.t("ai.entityRef.requisition.status"),
				value: /* @__PURE__ */ W("div", {
					className: "flex items-center pt-1",
					children: /* @__PURE__ */ W(d, {
						text: e.status,
						variant: e.statusVariant ?? "neutral"
					})
				})
			} : void 0,
			e.lineManager ? {
				label: a.t("ai.entityRef.requisition.lineManager"),
				value: /* @__PURE__ */ G("div", {
					className: "flex items-center gap-1.5 pt-1",
					children: [/* @__PURE__ */ W(C, {
						firstName: e.lineManager.firstName,
						lastName: e.lineManager.lastName,
						src: e.lineManager.avatarUrl,
						size: "xs"
					}), /* @__PURE__ */ W("span", { children: t })]
				})
			} : void 0,
			e.reason ? {
				label: a.t("ai.entityRef.requisition.reason"),
				value: e.reason
			} : void 0
		].filter((e) => e !== void 0);
		return {
			title: e.title,
			...e.location && { description: e.location },
			...n.length > 0 && { children: /* @__PURE__ */ W(Tt, { rows: n }) },
			...o && { secondaryActions: {
				label: a.t("ai.view"),
				href: o
			} }
		};
	}, [a, o]), c = B(() => ({
		title: t,
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [
		t,
		a,
		o
	]);
	return i ? /* @__PURE__ */ W(vt, {
		id: e,
		trigger: /* @__PURE__ */ W(Et, { label: t }),
		resolver: i,
		mapToCard: s,
		fallbackCard: c
	}) : /* @__PURE__ */ W("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/person/PersonEntityRef.tsx
var Ot = F(({ label: e, ...t }, n) => /* @__PURE__ */ G("button", {
	ref: n,
	type: "button",
	className: o("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", a()),
	...t,
	children: ["@", e]
}));
Ot.displayName = "PersonTrigger";
function kt({ id: e, label: t }) {
	let { entityRefs: r } = X(), i = r?.resolvers?.person, a = n(), o = r?.urls?.person?.(e), s = B(() => (e) => ({
		avatar: {
			type: "person",
			firstName: e.firstName,
			lastName: e.lastName,
			src: e.avatarUrl
		},
		title: `${e.firstName} ${e.lastName}`,
		description: e.jobTitle,
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [a, o]), c = B(() => ({
		title: t,
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [
		t,
		a,
		o
	]);
	return i ? /* @__PURE__ */ W(vt, {
		id: e,
		trigger: /* @__PURE__ */ W(Ot, { label: t }),
		resolver: i,
		mapToCard: s,
		fallbackCard: c
	}) : /* @__PURE__ */ W("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/entities/vacancy/VacancyEntityRef.tsx
var At = F(({ label: e, ...t }, n) => /* @__PURE__ */ W("button", {
	ref: n,
	type: "button",
	className: o("cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground", a()),
	...t,
	children: e
}));
At.displayName = "VacancyTrigger";
function jt({ id: e, label: t }) {
	let { entityRefs: r } = X(), i = r?.resolvers?.vacancy, a = n(), o = r?.urls?.vacancy?.(e), s = B(() => (e) => ({
		title: e.name,
		description: [e.status, e.vacancyType].filter(Boolean).join(" · "),
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [a, o]), c = B(() => ({
		title: t,
		...o && { secondaryActions: {
			label: a.t("ai.view"),
			href: o
		} }
	}), [
		t,
		a,
		o
	]);
	return i ? /* @__PURE__ */ W(vt, {
		id: e,
		trigger: /* @__PURE__ */ W(At, { label: t }),
		resolver: i,
		mapToCard: s,
		fallbackCard: c
	}) : /* @__PURE__ */ W("span", { children: t });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/entityRefRegistry.ts
var Mt = {
	person: kt,
	candidate: bt,
	expense: St,
	"job-posting": wt,
	requisition: Dt,
	vacancy: jt
};
function Nt(e) {
	return Mt[e];
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/EntityRef.tsx
function Pt(e) {
	return typeof e == "string" ? e : typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(Pt).join("") : e && typeof e == "object" && "props" in e ? Pt(e.props.children) : "";
}
function Ft({ type: e, id: t, children: n }) {
	if (!t || !e) return /* @__PURE__ */ W("span", { children: n });
	let r = Pt(n), i = Nt(e);
	return i ? /* @__PURE__ */ W(i, {
		id: t,
		label: r
	}) : /* @__PURE__ */ W("span", { children: n });
}
//#endregion
//#region src/kits/ai/F0AiChat/components/markdownRenderers/MarkdownRenderers.tsx
var It = {
	p: ft,
	h1: pt,
	h2: mt,
	h3: ht,
	a: it,
	strong: gt,
	em: _t,
	li: st,
	pre: $e,
	code: et,
	blockquote: tt,
	hr: nt,
	ul: at,
	ol: ot,
	table: lt,
	th: ut,
	td: dt,
	img: rt,
	"entity-ref": Ft
}, Lt = P(null);
function Rt({ children: e }) {
	let [t, n] = H(0), r = V([]), i = I((e) => {
		let t = r.current, i = t.findIndex((t) => t.formName === e.formName && t.customFieldName === e.customFieldName), a = e;
		i >= 0 ? t[i] = a : t.push(a), n((e) => e + 1);
	}, []), a = B(() => ({
		formatters: [...r.current],
		setFormCardValueFormatter: i
	}), [i, t]);
	return /* @__PURE__ */ W(Lt.Provider, {
		value: a,
		children: e
	});
}
function zt(e) {
	let t = L(Lt)?.formatters;
	return B(() => !t || t.length === 0 ? null : (n, r, i) => {
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
function Bt() {
	let e = L(Lt);
	if (!e) throw Error("useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider");
	return e.setFormCardValueFormatter;
}
//#endregion
//#region src/kits/ai/F0AiMessagesContainer/useReplySelection.ts
var Vt = 2;
function Ht(e, t) {
	if (!e.intersectsNode(t)) return null;
	let n = document.createRange();
	n.selectNodeContents(t);
	let r = e.cloneRange();
	r.compareBoundaryPoints(Range.START_TO_START, n) < 0 && r.setStart(n.startContainer, n.startOffset), r.compareBoundaryPoints(Range.END_TO_END, n) > 0 && r.setEnd(n.endContainer, n.endOffset);
	let i = r.toString().trim();
	if (i.length < Vt) return null;
	let a = r.getBoundingClientRect();
	return {
		rect: a.width > 0 || a.height > 0 ? a : t.getBoundingClientRect(),
		text: i
	};
}
function Ut({ containerRef: e, enabled: t = !0 }) {
	let [n, r] = H(null), i = I(() => r(null), []);
	return R(() => {
		if (!t || typeof window > "u") return;
		let n = e.current;
		if (!n) return;
		let i = () => {
			let e = window.getSelection();
			if (!e || e.isCollapsed || e.rangeCount === 0) {
				r(null);
				return;
			}
			r(Ht(e.getRangeAt(0), n));
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
var Wt = 8, Gt = 8;
function Kt({ anchor: e, onReply: t }) {
	let r = n(), i = V(null), [a, c] = H(null);
	if (z(() => {
		if (!e) {
			c(null);
			return;
		}
		let t = i.current;
		if (!t) return;
		let n = t.offsetWidth, r = t.offsetHeight, a = window.innerWidth, o = window.innerHeight, s = e.rect.top - r - Wt;
		s < Gt && (s = e.rect.bottom + Wt), s = Math.min(Math.max(s, Gt), o - r - Gt);
		let l = e.rect.left + e.rect.width / 2 - n / 2, u = Math.min(Math.max(l, Gt), a - n - Gt);
		c({
			top: s,
			left: u
		});
	}, [e]), typeof document > "u" || !e) return null;
	let l = r.ai.reply;
	return U(/* @__PURE__ */ W("div", {
		style: {
			position: "fixed",
			top: a?.top ?? -9999,
			left: a?.left ?? -9999,
			visibility: a ? "visible" : "hidden"
		},
		className: o("z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary", "drop-shadow"),
		children: /* @__PURE__ */ W(s, {
			ref: i,
			type: "button",
			variant: "ghost",
			label: l,
			icon: w,
			onClick: () => {
				t(e.text);
			}
		})
	}), document.body);
}
//#endregion
//#region src/kits/ai/F0AiMessagesContainer/components/AssistantMessage.tsx
var qt = P(void 0), Jt = () => L(qt), Yt = (e) => /* @__PURE__ */ W(re, {
	content: e,
	format: "markdown"
}), Xt = ({ isGenerating: e, isLoading: t, message: n, renderToolCall: r, onReplyQuote: i, onRendered: a, renderMarkdown: o }) => {
	let s = typeof n?.content == "string" ? n.content : "", c = (n && r?.(n)) ?? n?.generativeUI?.() ?? null, l = n?.toolCalls?.[0]?.id, u = !s && !c, d = V(null), { anchor: f, clear: p } = Ut({
		containerRef: d,
		enabled: !!(n?.id && s)
	});
	return R(() => {
		n?.id && !t && !e && a?.(n);
	}, [
		n,
		t,
		e,
		a
	]), !t && !e && u ? null : /* @__PURE__ */ W(qt.Provider, {
		value: l,
		children: /* @__PURE__ */ G("div", {
			className: "relative isolate flex w-full flex-col items-start justify-center",
			children: [
				n && s && /* @__PURE__ */ W("div", {
					ref: d,
					className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
					children: (o ?? Yt)(s)
				}),
				!!c && /* @__PURE__ */ W("div", {
					className: "w-full",
					children: c
				}),
				/* @__PURE__ */ W(Kt, {
					anchor: f,
					onReply: (e) => {
						i?.(e), p(), window.getSelection()?.removeAllRanges();
					}
				})
			]
		})
	});
}, Zt = { ai: E.ai }, Qt = P(null);
function $t({ children: e, translations: t }) {
	return /* @__PURE__ */ W(Qt.Provider, {
		value: t,
		children: e
	});
}
function en() {
	let e = L(Qt);
	if (e === null) throw Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
	return e;
}
//#endregion
export { ae as C, ee as D, ie as E, K as O, oe as S, re as T, De as _, Jt as a, J as b, Rt as c, It as d, Ze as f, Oe as g, qe as h, Xt as i, zt as l, Ye as m, en as n, Kt as o, Qe as p, Zt as r, Ut as s, $t as t, Bt as u, Te as v, q as w, se as x, X as y };
