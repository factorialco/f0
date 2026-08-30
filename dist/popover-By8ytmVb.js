import { t as e } from "./utils-CVzxZnoI.js";
import { C as t, S as n, _ as r, b as i, g as a, h as o, v as s, x as c, y as l } from "./tooltip-BPSwDQpD.js";
import { a as u, c as d, d as f, i as p, l as m, n as h, r as g, s as _, t as v } from "./dist-zRL9MpsG.js";
import * as y from "react";
import { createElement as b, forwardRef as x, useState as S } from "react";
import C from "react-dom";
import { jsx as w, jsxs as T } from "react/jsx-runtime";
var ee = x((e, t) => /* @__PURE__ */ T("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ w("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M10.75 16.75L17.75 7.25004"
	}), /* @__PURE__ */ w("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M6.25 11.75L10.75 16.75"
	})]
})), E = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, D = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), k = {}, A = 0, j = function(e) {
	return e && (e.host || j(e.parentNode));
}, te = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = j(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, ne = function(e, t, n, r) {
	var i = te(t, Array.isArray(e) ? e : [e]);
	k[n] || (k[n] = /* @__PURE__ */ new WeakMap());
	var a = k[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (D.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				D.set(e, c), a.set(e, l), o.push(e), c === 1 && i && O.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), A++, function() {
		o.forEach(function(e) {
			var t = D.get(e) - 1, i = a.get(e) - 1;
			D.set(e, t), a.set(e, i), t || (O.has(e) || e.removeAttribute(r), O.delete(e)), i || e.removeAttribute(n);
		}), A--, A || (D = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), k = {});
	};
}, M = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || E(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), ne(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, N = function() {
	return N = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, N.apply(this, arguments);
};
function P(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function re(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var F = "right-scroll-bar-position", I = "width-before-scroll-bar", ie = "with-scroll-bars-hidden", ae = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.18_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function oe(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.18_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function L(e, t) {
	var n = S(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.18_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var se = typeof window < "u" ? y.useLayoutEffect : y.useEffect, R = /* @__PURE__ */ new WeakMap();
function ce(e, t) {
	var n = L(t || null, function(t) {
		return e.forEach(function(e) {
			return oe(e, t);
		});
	});
	return se(function() {
		var t = R.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || oe(e, null);
			}), i.forEach(function(e) {
				r.has(e) || oe(e, a);
			});
		}
		R.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function z(e) {
	return e;
}
function B(e, t) {
	t === void 0 && (t = z);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function le(e) {
	e === void 0 && (e = {});
	var t = B(null);
	return t.options = N({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var ue = function(e) {
	var t = e.sideCar, n = P(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return y.createElement(r, N({}, n));
};
ue.isSideCarExport = !0;
function de(e, t) {
	return e.useMedium(t), ue;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var fe = le(), V = function() {}, H = y.forwardRef(function(e, t) {
	var n = y.useRef(null), r = y.useState({
		onScrollCapture: V,
		onWheelCapture: V,
		onTouchMoveCapture: V
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, b = e.gapMode, x = P(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = f, C = ce([n, t]), w = N(N({}, x), i);
	return y.createElement(y.Fragment, null, u && y.createElement(S, {
		sideCar: fe,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: b
	}), o ? y.cloneElement(y.Children.only(s), N(N({}, w), { ref: C })) : y.createElement(v, N({}, w, {
		className: c,
		ref: C
	}), s));
});
H.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, H.classNames = {
	fullWidth: I,
	zeroRight: F
};
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var pe = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.18_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function me() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = pe();
	return t && e.setAttribute("nonce", t), e;
}
function he(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ge(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var _e = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = me()) && (he(t, n), ge(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, ve = function() {
	var e = _e();
	return function(t, n) {
		y.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, ye = function() {
	var e = ve();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, be = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, xe = function(e) {
	return parseInt(e || "", 10) || 0;
}, Se = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		xe(n),
		xe(r),
		xe(i)
	];
}, Ce = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return be;
	var t = Se(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, we = ye(), U = "data-scroll-locked", Te = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ie} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${U}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${F} {
    right: ${s}px ${r};
  }
  
  .${I} {
    margin-right: ${s}px ${r};
  }
  
  .${F} .${F} {
    right: 0 ${r};
  }
  
  .${I} .${I} {
    margin-right: 0 ${r};
  }
  
  body[${U}] {
    ${ae}: ${s}px;
  }
`;
}, Ee = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, De = function() {
	y.useEffect(function() {
		return document.body.setAttribute(U, (Ee() + 1).toString()), function() {
			var e = Ee() - 1;
			e <= 0 ? document.body.removeAttribute(U) : document.body.setAttribute(U, e.toString());
		};
	}, []);
}, Oe = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	De();
	var a = y.useMemo(function() {
		return Ce(i);
	}, [i]);
	return y.createElement(we, { styles: Te(a, !t, i, n ? "" : "!important") });
}, ke = !1;
if (typeof window < "u") try {
	var W = Object.defineProperty({}, "passive", { get: function() {
		return ke = !0, !0;
	} });
	window.addEventListener("test", W, W), window.removeEventListener("test", W, W);
} catch {
	ke = !1;
}
var G = ke ? { passive: !1 } : !1, Ae = function(e) {
	return e.tagName === "TEXTAREA";
}, je = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ae(e) && n[t] === "visible");
}, Me = function(e) {
	return je(e, "overflowY");
}, Ne = function(e) {
	return je(e, "overflowX");
}, Pe = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Le(e, r)) {
			var i = Re(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Fe = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Ie = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Le = function(e, t) {
	return e === "v" ? Me(t) : Ne(t);
}, Re = function(e, t) {
	return e === "v" ? Fe(t) : Ie(t);
}, ze = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Be = function(e, t, n, r, i) {
	var a = ze(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Re(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Le(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, K = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ve = function(e) {
	return [e.deltaX, e.deltaY];
}, He = function(e) {
	return e && "current" in e ? e.current : e;
}, Ue = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, We = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ge = 0, q = [];
function Ke(e) {
	var t = y.useRef([]), n = y.useRef([0, 0]), r = y.useRef(), i = y.useState(Ge++)[0], a = y.useState(ye)[0], o = y.useRef(e);
	y.useEffect(function() {
		o.current = e;
	}, [e]), y.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = re([e.lockRef.current], (e.shards || []).map(He), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = y.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = K(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = Pe(d, u);
		if (!f) return !0;
		if (f ? l = d : (l = d === "v" ? "h" : "v", f = Pe(d, u)), !f) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var p = r.current || l;
		return Be(p, t, e, p === "h" ? s : c, !0);
	}, []), c = y.useCallback(function(e) {
		var n = e;
		if (!(!q.length || q[q.length - 1] !== a)) {
			var r = "deltaY" in n ? Ve(n) : K(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Ue(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(He).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = y.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: qe(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = y.useCallback(function(e) {
		n.current = K(e), r.current = void 0;
	}, []), d = y.useCallback(function(t) {
		l(t.type, Ve(t), t.target, s(t, e.lockRef.current));
	}, []), f = y.useCallback(function(t) {
		l(t.type, K(t), t.target, s(t, e.lockRef.current));
	}, []);
	y.useEffect(function() {
		return q.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, G), document.addEventListener("touchmove", c, G), document.addEventListener("touchstart", u, G), function() {
			q = q.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, G), document.removeEventListener("touchmove", c, G), document.removeEventListener("touchstart", u, G);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return y.createElement(y.Fragment, null, m ? y.createElement(a, { styles: We(i) }) : null, p ? y.createElement(Oe, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function qe(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Je = de(fe, Ke), Ye = y.forwardRef(function(e, t) {
	return y.createElement(H, N({}, e, {
		ref: t,
		sideCar: Je
	}));
});
Ye.classNames = H.classNames;
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/shared/src/utils.js
var Xe = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ze = (...e) => e.filter((e, t, n) => !!e && n.indexOf(e) === t).join(" "), Qe = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, $e = x(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => b("svg", {
	ref: c,
	...Qe,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: Ze("lucide", i),
	...s
}, [...o.map(([e, t]) => b(e, t)), ...Array.isArray(a) ? a : [a]])), et = (e, t) => {
	let n = x(({ className: n, ...r }, i) => b($e, {
		ref: i,
		iconNode: t,
		className: Ze(`lucide-${Xe(e)}`, n),
		...r
	}));
	return n.displayName = `${e}`, n;
}, tt = y.useId || (() => void 0), nt = 0;
function rt(e) {
	let [t, n] = y.useState(tt());
	return d(() => {
		e || n((e) => e ?? String(nt++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function it(e, t = globalThis?.document) {
	let n = m(e);
	y.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.4_@types+react-dom@18.3.1_@types+react@18.3.18_re_6829a286676bb181dfd20166d597ec2d/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var at = "DismissableLayer", ot = "dismissableLayer.update", st = "dismissableLayer.pointerDownOutside", ct = "dismissableLayer.focusOutside", lt, ut = y.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), dt = y.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, onDismiss: s, ...c } = e, l = y.useContext(ut), [u, d] = y.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = y.useState({}), m = _(t, (e) => d(e)), v = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), x = v.indexOf(b), S = u ? v.indexOf(u) : -1, C = l.layersWithOutsidePointerEventsDisabled.size > 0, T = S >= x, ee = mt((e) => {
		let t = e.target, n = [...l.branches].some((e) => e.contains(t));
		!T || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f), E = ht((e) => {
		let t = e.target;
		[...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f);
	return it((e) => {
		S === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
	}, f), y.useEffect(() => {
		if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (lt = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), gt(), () => {
			n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = lt);
		};
	}, [
		u,
		f,
		n,
		l
	]), y.useEffect(() => () => {
		u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), gt());
	}, [u, l]), y.useEffect(() => {
		let e = () => p({});
		return document.addEventListener(ot, e), () => document.removeEventListener(ot, e);
	}, []), /* @__PURE__ */ w(g.div, {
		...c,
		ref: m,
		style: {
			pointerEvents: C ? T ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: h(e.onFocusCapture, E.onFocusCapture),
		onBlurCapture: h(e.onBlurCapture, E.onBlurCapture),
		onPointerDownCapture: h(e.onPointerDownCapture, ee.onPointerDownCapture)
	});
});
dt.displayName = at;
var ft = "DismissableLayerBranch", pt = y.forwardRef((e, t) => {
	let n = y.useContext(ut), r = y.useRef(null), i = _(t, r);
	return y.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ w(g.div, {
		...e,
		ref: i
	});
});
pt.displayName = ft;
function mt(e, t = globalThis?.document) {
	let n = m(e), r = y.useRef(!1), i = y.useRef(() => {});
	return y.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					_t(st, n, a, { discrete: !0 });
				}, a = { originalEvent: e };
				e.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, { once: !0 })) : r();
			} else t.removeEventListener("click", i.current);
			r.current = !1;
		}, a = window.setTimeout(() => {
			t.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
		};
	}, [t, n]), { onPointerDownCapture: () => r.current = !0 };
}
function ht(e, t = globalThis?.document) {
	let n = m(e), r = y.useRef(!1);
	return y.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && _t(ct, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function gt() {
	let e = new CustomEvent(ot);
	document.dispatchEvent(e);
}
function _t(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? p(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-do_706903c570469dc042edac24aa08aefe/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var vt = "focusScope.autoFocusOnMount", yt = "focusScope.autoFocusOnUnmount", bt = {
	bubbles: !1,
	cancelable: !0
}, xt = "FocusScope", St = y.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = y.useState(null), l = m(i), u = m(a), d = y.useRef(null), f = _(t, (e) => c(e)), p = y.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	y.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : J(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || J(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && J(s);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return s && r.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		s,
		p.paused
	]), y.useEffect(() => {
		if (s) {
			kt.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(vt, bt);
				s.addEventListener(vt, l), s.dispatchEvent(t), t.defaultPrevented || (Ct(Mt(Tt(s)), { select: !0 }), document.activeElement === e && J(s));
			}
			return () => {
				s.removeEventListener(vt, l), setTimeout(() => {
					let t = new CustomEvent(yt, bt);
					s.addEventListener(yt, u), s.dispatchEvent(t), t.defaultPrevented || J(e ?? document.body, { select: !0 }), s.removeEventListener(yt, u), kt.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let h = y.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = wt(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && J(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && J(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ w(g.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: h
	});
});
St.displayName = xt;
function Ct(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (J(r, { select: t }), document.activeElement !== n) return;
}
function wt(e) {
	let t = Tt(e);
	return [Et(t, e), Et(t.reverse(), e)];
}
function Tt(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Et(e, t) {
	for (let n of e) if (!Dt(n, { upTo: t })) return n;
}
function Dt(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function Ot(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function J(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Ot(e) && t && e.select();
	}
}
var kt = At();
function At() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = jt(e, t), e.unshift(t);
		},
		remove(t) {
			e = jt(e, t), e[0]?.resume();
		}
	};
}
function jt(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Mt(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.3_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-portal/dist/index.mjs
var Nt = "Portal", Pt = y.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = y.useState(!1);
	d(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? C.createPortal(/* @__PURE__ */ w(g.div, {
		...r,
		ref: t
	}), o) : null;
});
Pt.displayName = Nt;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.2_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs
function Ft(e, t) {
	return y.useReducer((e, n) => t[e][n] ?? e, e);
}
var Y = (e) => {
	let { present: t, children: n } = e, r = It(t), i = typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n), a = _(r.ref, Lt(i));
	return typeof n == "function" || r.isPresent ? y.cloneElement(i, { ref: a }) : null;
};
Y.displayName = "Presence";
function It(e) {
	let [t, n] = y.useState(), r = y.useRef({}), i = y.useRef(e), a = y.useRef("none"), [o, s] = Ft(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return y.useEffect(() => {
		let e = X(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), d(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = X(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), d(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = X(r.current).includes(a.animationName);
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = X(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: y.useCallback((e) => {
			e && (r.current = getComputedStyle(e)), n(e);
		}, [])
	};
}
function X(e) {
	return e?.animationName || "none";
}
function Lt(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Rt = 0;
function zt() {
	y.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? Bt()), document.body.insertAdjacentElement("beforeend", e[1] ?? Bt()), Rt++, () => {
			Rt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Rt--;
		};
	}, []);
}
function Bt() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-arrow@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-arrow/dist/index.mjs
var Vt = "Arrow", Ht = y.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ w(g.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ w("polygon", { points: "0,0 30,0 15,10" })
	});
});
Ht.displayName = Vt;
var Ut = Ht;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs
function Wt(e) {
	let [t, n] = y.useState(void 0);
	return d(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		}
		n(void 0);
	}, [e]), t;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-popper@1.2.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popper/dist/index.mjs
var Gt = "Popper", [Kt, qt] = f(Gt), [Jt, Yt] = Kt(Gt), Xt = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = y.useState(null);
	return /* @__PURE__ */ w(Jt, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
Xt.displayName = Gt;
var Zt = "PopperAnchor", Qt = y.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = Yt(Zt, n), o = y.useRef(null), s = _(t, o);
	return y.useEffect(() => {
		a.onAnchorChange(r?.current || o.current);
	}), r ? null : /* @__PURE__ */ w(g.div, {
		...i,
		ref: s
	});
});
Qt.displayName = Zt;
var $t = "PopperContent", [en, tn] = Kt($t), nn = y.forwardRef((e, u) => {
	let { __scopePopper: f, side: p = "bottom", sideOffset: h = 0, align: v = "center", alignOffset: b = 0, arrowPadding: x = 0, avoidCollisions: S = !0, collisionBoundary: C = [], collisionPadding: T = 0, sticky: ee = "partial", hideWhenDetached: E = !1, updatePositionStrategy: D = "optimized", onPlaced: O, ...k } = e, A = Yt($t, f), [j, te] = y.useState(null), ne = _(u, (e) => te(e)), [M, N] = y.useState(null), P = Wt(M), re = P?.width ?? 0, F = P?.height ?? 0, I = p + (v === "center" ? "" : "-" + v), ie = typeof T == "number" ? T : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...T
	}, ae = Array.isArray(C) ? C : [C], oe = ae.length > 0, L = {
		padding: ie,
		boundary: ae.filter(sn),
		altBoundary: oe
	}, { refs: se, floatingStyles: R, placement: ce, isPositioned: z, middlewareData: B } = n({
		strategy: "fixed",
		placement: I,
		whileElementsMounted: (...e) => t(...e, { animationFrame: D === "always" }),
		elements: { reference: A.anchor },
		middleware: [
			l({
				mainAxis: h + F,
				alignmentAxis: b
			}),
			S && i({
				mainAxis: !0,
				crossAxis: !1,
				limiter: ee === "partial" ? s() : void 0,
				...L
			}),
			S && a({ ...L }),
			c({
				...L,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			M && o({
				element: M,
				padding: x
			}),
			cn({
				arrowWidth: re,
				arrowHeight: F
			}),
			E && r({
				strategy: "referenceHidden",
				...L
			})
		]
	}), [le, ue] = ln(ce), de = m(O);
	d(() => {
		z && de?.();
	}, [z, de]);
	let fe = B.arrow?.x, V = B.arrow?.y, H = B.arrow?.centerOffset !== 0, [pe, me] = y.useState();
	return d(() => {
		j && me(window.getComputedStyle(j).zIndex);
	}, [j]), /* @__PURE__ */ w("div", {
		ref: se.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...R,
			transform: z ? R.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: pe,
			"--radix-popper-transform-origin": [B.transformOrigin?.x, B.transformOrigin?.y].join(" "),
			...B.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ w(en, {
			scope: f,
			placedSide: le,
			onArrowChange: N,
			arrowX: fe,
			arrowY: V,
			shouldHideArrow: H,
			children: /* @__PURE__ */ w(g.div, {
				"data-side": le,
				"data-align": ue,
				...k,
				ref: ne,
				style: {
					...k.style,
					animation: z ? void 0 : "none"
				}
			})
		})
	});
});
nn.displayName = $t;
var rn = "PopperArrow", an = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, on = y.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = tn(rn, n), a = an[i.placedSide];
	return /* @__PURE__ */ w("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ w(Ut, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
on.displayName = rn;
function sn(e) {
	return e !== null;
}
var cn = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = ln(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function ln(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var un = Xt, dn = Qt, fn = nn, pn = on, mn = "Popover", [hn, gn] = f(mn, [qt]), Z = qt(), [_n, Q] = hn(mn), vn = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = Z(t), c = y.useRef(null), [l, u] = y.useState(!1), [d = !1, f] = v({
		prop: r,
		defaultProp: i,
		onChange: a
	});
	return /* @__PURE__ */ w(un, {
		...s,
		children: /* @__PURE__ */ w(_n, {
			scope: t,
			contentId: rt(),
			triggerRef: c,
			open: d,
			onOpenChange: f,
			onOpenToggle: y.useCallback(() => f((e) => !e), [f]),
			hasCustomAnchor: l,
			onCustomAnchorAdd: y.useCallback(() => u(!0), []),
			onCustomAnchorRemove: y.useCallback(() => u(!1), []),
			modal: o,
			children: n
		})
	});
};
vn.displayName = mn;
var yn = "PopoverAnchor", bn = y.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Q(yn, n), a = Z(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return y.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ w(dn, {
		...a,
		...r,
		ref: t
	});
});
bn.displayName = yn;
var xn = "PopoverTrigger", Sn = y.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Q(xn, n), a = Z(n), o = _(t, i.triggerRef), s = /* @__PURE__ */ w(g.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": Fn(i.open),
		...r,
		ref: o,
		onClick: h(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ w(dn, {
		asChild: !0,
		...a,
		children: s
	});
});
Sn.displayName = xn;
var Cn = "PopoverPortal", [wn, Tn] = hn(Cn, { forceMount: void 0 }), En = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = Q(Cn, t);
	return /* @__PURE__ */ w(wn, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ w(Y, {
			present: n || a.open,
			children: /* @__PURE__ */ w(Pt, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
En.displayName = Cn;
var $ = "PopoverContent", Dn = y.forwardRef((e, t) => {
	let n = Tn($, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = Q($, e.__scopePopover);
	return /* @__PURE__ */ w(Y, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ w(On, {
			...i,
			ref: t
		}) : /* @__PURE__ */ w(kn, {
			...i,
			ref: t
		})
	});
});
Dn.displayName = $;
var On = y.forwardRef((e, t) => {
	let n = Q($, e.__scopePopover), r = y.useRef(null), i = _(t, r), a = y.useRef(!1);
	return y.useEffect(() => {
		let e = r.current;
		if (e) return M(e);
	}, []), /* @__PURE__ */ w(Ye, {
		as: u,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ w(An, {
			...e,
			ref: i,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: h(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), a.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: h(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				a.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: h(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), kn = y.forwardRef((e, t) => {
	let n = Q($, e.__scopePopover), r = y.useRef(!1), i = y.useRef(!1);
	return /* @__PURE__ */ w(An, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), An = y.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = Q($, n), p = Z(n);
	return zt(), /* @__PURE__ */ w(St, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ w(dt, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			children: /* @__PURE__ */ w(fn, {
				"data-state": Fn(f.open),
				role: "dialog",
				id: f.contentId,
				...p,
				...d,
				ref: t,
				style: {
					...d.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), jn = "PopoverClose", Mn = y.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Q(jn, n);
	return /* @__PURE__ */ w(g.button, {
		type: "button",
		...r,
		ref: t,
		onClick: h(e.onClick, () => i.onOpenChange(!1))
	});
});
Mn.displayName = jn;
var Nn = "PopoverArrow", Pn = y.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ w(pn, {
		...i,
		...r,
		ref: t
	});
});
Pn.displayName = Nn;
function Fn(e) {
	return e ? "open" : "closed";
}
var In = vn, Ln = bn, Rn = Sn, zn = En, Bn = Dn, Vn = Pn, Hn = In, Un = Rn, Wn = Ln, Gn = Vn, Kn = y.forwardRef(({ className: t, align: n = "center", sideOffset: r = 4, container: i, ...a }, o) => /* @__PURE__ */ w(zn, {
	container: i,
	children: /* @__PURE__ */ w(Bn, {
		asChild: a.asChild,
		ref: o,
		align: n,
		sideOffset: r,
		className: e("z-50 w-72 rounded-xs border bg-f1-background p-4 text-f1-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "origin-[var(--radix-popover-content-transform-origin)]", "max-h-[var(--radix-popover-content-available-height)]", "overflow-auto", t),
		...a
	})
}));
Kn.displayName = Bn.displayName;
//#endregion
export { rt as _, Un as a, M as b, zn as c, Wt as d, zt as f, dt as g, St as h, Kn as i, In as l, Pt as m, Wn as n, Ln as o, Y as p, Gn as r, Bn as s, Hn as t, Rn as u, et as v, ee as x, Ye as y };
