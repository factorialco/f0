import { t as e } from "./utils-CVzxZnoI.js";
import { C as t, D as n, M as r, O as i, P as a, S as o, _ as s, b as c, g as l, h as u, j as d, v as f, x as p, y as m } from "./tooltip-BPSwDQpD.js";
import * as h from "react";
import g, { createElement as _, forwardRef as v, useState as y } from "react";
import * as b from "react-dom";
import x from "react-dom";
import { Fragment as ee, jsx as S, jsxs as C } from "react/jsx-runtime";
var te = v((e, t) => /* @__PURE__ */ C("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ S("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M10.75 16.75L17.75 7.25004"
	}), /* @__PURE__ */ S("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M6.25 11.75L10.75 16.75"
	})]
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom_0e4230adea206cfc9ffba4b61b225db3/node_modules/@radix-ui/react-collection/dist/index.mjs
function ne(e) {
	let t = e + "CollectionProvider", [n, i] = r(t), [o, s] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), c = (e) => {
		let { scope: t, children: n } = e, r = g.useRef(null), i = g.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ S(o, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	c.displayName = t;
	let l = e + "CollectionSlot", u = d(l), f = g.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = s(l, n), o = a(t, i.collectionRef);
		return /* @__PURE__ */ S(u, {
			ref: o,
			children: r
		});
	});
	f.displayName = l;
	let p = e + "CollectionItemSlot", m = "data-radix-collection-item", h = d(p), _ = g.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = g.useRef(null), c = a(t, o), l = s(p, n);
		return g.useEffect(() => (l.itemMap.set(o, {
			ref: o,
			...i
		}), () => void l.itemMap.delete(o))), /* @__PURE__ */ S(h, {
			[m]: "",
			ref: c,
			children: r
		});
	});
	_.displayName = p;
	function v(t) {
		let n = s(e + "CollectionConsumer", t);
		return g.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${m}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: c,
			Slot: f,
			ItemSlot: _
		},
		v,
		i
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs
var re = h.createContext(void 0);
function w(e) {
	let t = h.useContext(re);
	return e || t || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var T = 0;
function ie() {
	h.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? E()), document.body.insertAdjacentElement("beforeend", e[1] ?? E()), T++, () => {
			T === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), T--;
		};
	}, []);
}
function E() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@18.3.1_@types+react@18.3.18_react-do_56ad7e199d329ef9fa7b3e23f78502a0/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var ae = "focusScope.autoFocusOnMount", D = "focusScope.autoFocusOnUnmount", oe = {
	bubbles: !1,
	cancelable: !0
}, se = "FocusScope", ce = h.forwardRef((e, t) => {
	let { loop: r = !1, trapped: o = !1, onMountAutoFocus: s, onUnmountAutoFocus: c, ...l } = e, [u, d] = h.useState(null), f = n(s), p = n(c), m = h.useRef(null), g = a(t, (e) => d(e)), _ = h.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	h.useEffect(() => {
		if (o) {
			let e = function(e) {
				if (_.paused || !u) return;
				let t = e.target;
				u.contains(t) ? m.current = t : k(m.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !u) return;
				let t = e.relatedTarget;
				t !== null && (u.contains(t) || k(m.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && k(u);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return u && r.observe(u, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		o,
		u,
		_.paused
	]), h.useEffect(() => {
		if (u) {
			A.add(_);
			let e = document.activeElement;
			if (!u.contains(e)) {
				let t = new CustomEvent(ae, oe);
				u.addEventListener(ae, f), u.dispatchEvent(t), t.defaultPrevented || (le(he(de(u)), { select: !0 }), document.activeElement === e && k(u));
			}
			return () => {
				u.removeEventListener(ae, f), setTimeout(() => {
					let t = new CustomEvent(D, oe);
					u.addEventListener(D, p), u.dispatchEvent(t), t.defaultPrevented || k(e ?? document.body, { select: !0 }), u.removeEventListener(D, p), A.remove(_);
				}, 0);
			};
		}
	}, [
		u,
		f,
		p,
		_
	]);
	let v = h.useCallback((e) => {
		if (!r && !o || _.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = ue(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && k(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && k(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		o,
		_.paused
	]);
	return /* @__PURE__ */ S(i.div, {
		tabIndex: -1,
		...l,
		ref: g,
		onKeyDown: v
	});
});
ce.displayName = se;
function le(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (k(r, { select: t }), document.activeElement !== n) return;
}
function ue(e) {
	let t = de(e);
	return [O(t, e), O(t.reverse(), e)];
}
function de(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function O(e, t) {
	for (let n of e) if (!fe(n, { upTo: t })) return n;
}
function fe(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function pe(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function k(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && pe(e) && t && e.select();
	}
}
var A = j();
function j() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = me(e, t), e.unshift(t);
		},
		remove(t) {
			e = me(e, t), e[0]?.resume();
		}
	};
}
function me(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function he(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var ge = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, M = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), P = {}, _e = 0, ve = function(e) {
	return e && (e.host || ve(e.parentNode));
}, ye = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = ve(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, be = function(e, t, n, r) {
	var i = ye(t, Array.isArray(e) ? e : [e]);
	P[n] || (P[n] = /* @__PURE__ */ new WeakMap());
	var a = P[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (M.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				M.set(e, c), a.set(e, l), o.push(e), c === 1 && i && N.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), _e++, function() {
		o.forEach(function(e) {
			var t = M.get(e) - 1, i = a.get(e) - 1;
			M.set(e, t), a.set(e, i), t || (N.has(e) || e.removeAttribute(r), N.delete(e)), i || e.removeAttribute(n);
		}), _e--, _e || (M = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), P = {});
	};
}, xe = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || ge(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), be(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, F = function() {
	return F = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, F.apply(this, arguments);
};
function Se(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Ce(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var I = "right-scroll-bar-position", L = "width-before-scroll-bar", we = "with-scroll-bars-hidden", Te = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.18_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Ee(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.18_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function De(e, t) {
	var n = y(function() {
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
var Oe = typeof window < "u" ? h.useLayoutEffect : h.useEffect, ke = /* @__PURE__ */ new WeakMap();
function Ae(e, t) {
	var n = De(t || null, function(t) {
		return e.forEach(function(e) {
			return Ee(e, t);
		});
	});
	return Oe(function() {
		var t = ke.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Ee(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Ee(e, a);
			});
		}
		ke.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function je(e) {
	return e;
}
function Me(e, t) {
	t === void 0 && (t = je);
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
function Ne(e) {
	e === void 0 && (e = {});
	var t = Me(null);
	return t.options = F({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Pe = function(e) {
	var t = e.sideCar, n = Se(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return h.createElement(r, F({}, n));
};
Pe.isSideCarExport = !0;
function Fe(e, t) {
	return e.useMedium(t), Pe;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ie = Ne(), Le = function() {}, R = h.forwardRef(function(e, t) {
	var n = h.useRef(null), r = h.useState({
		onScrollCapture: Le,
		onWheelCapture: Le,
		onTouchMoveCapture: Le
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = Se(e, [
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
	]), ee = f, S = Ae([n, t]), C = F(F({}, x), i);
	return h.createElement(h.Fragment, null, u && h.createElement(ee, {
		sideCar: Ie,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: g,
		setCallbacks: a,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: b
	}), o ? h.cloneElement(h.Children.only(s), F(F({}, C), { ref: S })) : h.createElement(y, F({}, C, {
		className: c,
		ref: S
	}), s));
});
R.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, R.classNames = {
	fullWidth: L,
	zeroRight: I
};
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Re = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.18_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function ze() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Re();
	return t && e.setAttribute("nonce", t), e;
}
function Be(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ve(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var He = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = ze()) && (Be(t, n), Ve(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Ue = function() {
	var e = He();
	return function(t, n) {
		h.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, We = function() {
	var e = Ue();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Ge = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Ke = function(e) {
	return parseInt(e || "", 10) || 0;
}, qe = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Ke(n),
		Ke(r),
		Ke(i)
	];
}, Je = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Ge;
	var t = qe(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Ye = We(), z = "data-scroll-locked", Xe = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${we} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${z}] {
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
  
  .${I} {
    right: ${s}px ${r};
  }
  
  .${L} {
    margin-right: ${s}px ${r};
  }
  
  .${I} .${I} {
    right: 0 ${r};
  }
  
  .${L} .${L} {
    margin-right: 0 ${r};
  }
  
  body[${z}] {
    ${Te}: ${s}px;
  }
`;
}, Ze = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Qe = function() {
	h.useEffect(function() {
		return document.body.setAttribute(z, (Ze() + 1).toString()), function() {
			var e = Ze() - 1;
			e <= 0 ? document.body.removeAttribute(z) : document.body.setAttribute(z, e.toString());
		};
	}, []);
}, $e = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Qe();
	var a = h.useMemo(function() {
		return Je(i);
	}, [i]);
	return h.createElement(Ye, { styles: Xe(a, !t, i, n ? "" : "!important") });
}, et = !1;
if (typeof window < "u") try {
	var B = Object.defineProperty({}, "passive", { get: function() {
		return et = !0, !0;
	} });
	window.addEventListener("test", B, B), window.removeEventListener("test", B, B);
} catch {
	et = !1;
}
var V = et ? { passive: !1 } : !1, tt = function(e) {
	return e.tagName === "TEXTAREA";
}, nt = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !tt(e) && n[t] === "visible");
}, rt = function(e) {
	return nt(e, "overflowY");
}, it = function(e) {
	return nt(e, "overflowX");
}, at = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ct(e, r)) {
			var i = lt(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, ot = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, st = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ct = function(e, t) {
	return e === "v" ? rt(t) : it(t);
}, lt = function(e, t) {
	return e === "v" ? ot(t) : st(t);
}, ut = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, dt = function(e, t, n, r, i) {
	var a = ut(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = lt(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ct(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, H = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ft = function(e) {
	return [e.deltaX, e.deltaY];
}, pt = function(e) {
	return e && "current" in e ? e.current : e;
}, mt = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, ht = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, gt = 0, U = [];
function _t(e) {
	var t = h.useRef([]), n = h.useRef([0, 0]), r = h.useRef(), i = h.useState(gt++)[0], a = h.useState(We)[0], o = h.useRef(e);
	h.useEffect(function() {
		o.current = e;
	}, [e]), h.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Ce([e.lockRef.current], (e.shards || []).map(pt), !0).filter(Boolean);
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
	var s = h.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = H(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = at(d, u);
		if (!f) return !0;
		if (f ? l = d : (l = d === "v" ? "h" : "v", f = at(d, u)), !f) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var p = r.current || l;
		return dt(p, t, e, p === "h" ? s : c, !0);
	}, []), c = h.useCallback(function(e) {
		var n = e;
		if (!(!U.length || U[U.length - 1] !== a)) {
			var r = "deltaY" in n ? ft(n) : H(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && mt(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(pt).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = h.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: vt(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = h.useCallback(function(e) {
		n.current = H(e), r.current = void 0;
	}, []), d = h.useCallback(function(t) {
		l(t.type, ft(t), t.target, s(t, e.lockRef.current));
	}, []), f = h.useCallback(function(t) {
		l(t.type, H(t), t.target, s(t, e.lockRef.current));
	}, []);
	h.useEffect(function() {
		return U.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, V), document.addEventListener("touchmove", c, V), document.addEventListener("touchstart", u, V), function() {
			U = U.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, V), document.removeEventListener("touchmove", c, V), document.removeEventListener("touchstart", u, V);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return h.createElement(h.Fragment, null, m ? h.createElement(a, { styles: ht(i) }) : null, p ? h.createElement($e, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function vt(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var yt = Fe(Ie, _t), bt = h.forwardRef(function(e, t) {
	return h.createElement(R, F({}, e, {
		ref: t,
		sideCar: yt
	}));
});
bt.classNames = R.classNames;
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/shared/src/utils.js
var xt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), St = (...e) => e.filter((e, t, n) => !!e && n.indexOf(e) === t).join(" "), Ct = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, wt = v(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => _("svg", {
	ref: c,
	...Ct,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: St("lucide", i),
	...s
}, [...o.map(([e, t]) => _(e, t)), ...Array.isArray(a) ? a : [a]])), Tt = (e, t) => {
	let n = v(({ className: n, ...r }, i) => _(wt, {
		ref: i,
		iconNode: t,
		className: St(`lucide-${xt(e)}`, n),
		...r
	}));
	return n.displayName = `${e}`, n;
}, Et = Tt("ChevronRight", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs
function Dt(e, t) {
	let n = h.createContext(t), r = (e) => {
		let { children: t, ...r } = e, i = h.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ S(n.Provider, {
			value: i,
			children: t
		});
	};
	r.displayName = e + "Provider";
	function i(r) {
		let i = h.useContext(n);
		if (i) return i;
		if (t !== void 0) return t;
		throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return [r, i];
}
function Ot(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = h.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = h.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ S(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = h.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => h.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return h.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, kt(i, ...t)];
}
function kt(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return h.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function W(e) {
	let t = h.useRef(e);
	return h.useEffect(() => {
		t.current = e;
	}), h.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var G = globalThis?.document ? h.useLayoutEffect : () => {};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function At(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function jt(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = At(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : At(e[t], null);
			}
		};
	};
}
function K(...e) {
	return h.useCallback(jt(...e), e);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
var Mt = h.forwardRef((e, t) => {
	let { children: n, ...r } = e, i = h.Children.toArray(n), a = i.find(Ft);
	if (a) {
		let e = a.props.children, n = i.map((t) => t === a ? h.Children.count(e) > 1 ? h.Children.only(null) : h.isValidElement(e) ? e.props.children : null : t);
		return /* @__PURE__ */ S(Nt, {
			...r,
			ref: t,
			children: h.isValidElement(e) ? h.cloneElement(e, void 0, n) : null
		});
	}
	return /* @__PURE__ */ S(Nt, {
		...r,
		ref: t,
		children: n
	});
});
Mt.displayName = "Slot";
var Nt = h.forwardRef((e, t) => {
	let { children: n, ...r } = e;
	if (h.isValidElement(n)) {
		let e = Lt(n);
		return h.cloneElement(n, {
			...It(r, n.props),
			ref: t ? jt(t, e) : e
		});
	}
	return h.Children.count(n) > 1 ? h.Children.only(null) : null;
});
Nt.displayName = "SlotClone";
var Pt = ({ children: e }) => /* @__PURE__ */ S(ee, { children: e });
function Ft(e) {
	return h.isValidElement(e) && e.type === Pt;
}
function It(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			a(...e), i(...e);
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function Lt(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var q = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = h.forwardRef((e, n) => {
		let { asChild: r, ...i } = e, a = r ? Mt : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ S(a, {
			...i,
			ref: n
		});
	});
	return n.displayName = `Primitive.${t}`, {
		...e,
		[t]: n
	};
}, {});
function Rt(e, t) {
	e && b.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.mjs
var zt = h.useId || (() => void 0), Bt = 0;
function Vt(e) {
	let [t, n] = h.useState(zt());
	return G(() => {
		e || n((e) => e ?? String(Bt++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function Ht({ prop: e, defaultProp: t, onChange: n = () => {} }) {
	let [r, i] = Ut({
		defaultProp: t,
		onChange: n
	}), a = e !== void 0, o = a ? e : r, s = W(n);
	return [o, h.useCallback((t) => {
		if (a) {
			let n = typeof t == "function" ? t(e) : t;
			n !== e && s(n);
		} else i(t);
	}, [
		a,
		e,
		i,
		s
	])];
}
function Ut({ defaultProp: e, onChange: t }) {
	let n = h.useState(e), [r] = n, i = h.useRef(r), a = W(t);
	return h.useEffect(() => {
		i.current !== r && (a(r), i.current = r);
	}, [
		r,
		i,
		a
	]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function Wt(e, t = globalThis?.document) {
	let n = W(e);
	h.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.4_@types+react-dom@18.3.1_@types+react@18.3.18_re_6829a286676bb181dfd20166d597ec2d/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Gt = "DismissableLayer", Kt = "dismissableLayer.update", qt = "dismissableLayer.pointerDownOutside", Jt = "dismissableLayer.focusOutside", Yt, Xt = h.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), Zt = h.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, onDismiss: s, ...c } = e, l = h.useContext(Xt), [u, d] = h.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = h.useState({}), m = K(t, (e) => d(e)), g = Array.from(l.layers), [_] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = u ? g.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, ee = en((e) => {
		let t = e.target, n = [...l.branches].some((e) => e.contains(t));
		!x || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f), C = tn((e) => {
		let t = e.target;
		[...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f);
	return Wt((e) => {
		y === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
	}, f), h.useEffect(() => {
		if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Yt = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), nn(), () => {
			n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Yt);
		};
	}, [
		u,
		f,
		n,
		l
	]), h.useEffect(() => () => {
		u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), nn());
	}, [u, l]), h.useEffect(() => {
		let e = () => p({});
		return document.addEventListener(Kt, e), () => document.removeEventListener(Kt, e);
	}, []), /* @__PURE__ */ S(q.div, {
		...c,
		ref: m,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: J(e.onFocusCapture, C.onFocusCapture),
		onBlurCapture: J(e.onBlurCapture, C.onBlurCapture),
		onPointerDownCapture: J(e.onPointerDownCapture, ee.onPointerDownCapture)
	});
});
Zt.displayName = Gt;
var Qt = "DismissableLayerBranch", $t = h.forwardRef((e, t) => {
	let n = h.useContext(Xt), r = h.useRef(null), i = K(t, r);
	return h.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ S(q.div, {
		...e,
		ref: i
	});
});
$t.displayName = Qt;
function en(e, t = globalThis?.document) {
	let n = W(e), r = h.useRef(!1), i = h.useRef(() => {});
	return h.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					rn(qt, n, a, { discrete: !0 });
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
function tn(e, t = globalThis?.document) {
	let n = W(e), r = h.useRef(!1);
	return h.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && rn(Jt, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function nn() {
	let e = new CustomEvent(Kt);
	document.dispatchEvent(e);
}
function rn(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Rt(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-do_706903c570469dc042edac24aa08aefe/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var an = "focusScope.autoFocusOnMount", on = "focusScope.autoFocusOnUnmount", sn = {
	bubbles: !1,
	cancelable: !0
}, cn = "FocusScope", ln = h.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = h.useState(null), l = W(i), u = W(a), d = h.useRef(null), f = K(t, (e) => c(e)), p = h.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	h.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : Y(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || Y(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Y(s);
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
	]), h.useEffect(() => {
		if (s) {
			gn.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(an, sn);
				s.addEventListener(an, l), s.dispatchEvent(t), t.defaultPrevented || (un(yn(fn(s)), { select: !0 }), document.activeElement === e && Y(s));
			}
			return () => {
				s.removeEventListener(an, l), setTimeout(() => {
					let t = new CustomEvent(on, sn);
					s.addEventListener(on, u), s.dispatchEvent(t), t.defaultPrevented || Y(e ?? document.body, { select: !0 }), s.removeEventListener(on, u), gn.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let m = h.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = dn(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && Y(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && Y(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ S(q.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: m
	});
});
ln.displayName = cn;
function un(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Y(r, { select: t }), document.activeElement !== n) return;
}
function dn(e) {
	let t = fn(e);
	return [pn(t, e), pn(t.reverse(), e)];
}
function fn(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function pn(e, t) {
	for (let n of e) if (!mn(n, { upTo: t })) return n;
}
function mn(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function hn(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function Y(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && hn(e) && t && e.select();
	}
}
var gn = _n();
function _n() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = vn(e, t), e.unshift(t);
		},
		remove(t) {
			e = vn(e, t), e[0]?.resume();
		}
	};
}
function vn(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function yn(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.3_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-portal/dist/index.mjs
var bn = "Portal", xn = h.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = h.useState(!1);
	G(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? x.createPortal(/* @__PURE__ */ S(q.div, {
		...r,
		ref: t
	}), o) : null;
});
xn.displayName = bn;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.2_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs
function Sn(e, t) {
	return h.useReducer((e, n) => t[e][n] ?? e, e);
}
var X = (e) => {
	let { present: t, children: n } = e, r = Cn(t), i = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n), a = K(r.ref, Tn(i));
	return typeof n == "function" || r.isPresent ? h.cloneElement(i, { ref: a }) : null;
};
X.displayName = "Presence";
function Cn(e) {
	let [t, n] = h.useState(), r = h.useRef({}), i = h.useRef(e), a = h.useRef("none"), [o, s] = Sn(e ? "mounted" : "unmounted", {
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
	return h.useEffect(() => {
		let e = wn(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), G(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = wn(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), G(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = wn(r.current).includes(a.animationName);
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = wn(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: h.useCallback((e) => {
			e && (r.current = getComputedStyle(e)), n(e);
		}, [])
	};
}
function wn(e) {
	return e?.animationName || "none";
}
function Tn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var En = 0;
function Dn() {
	h.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? On()), document.body.insertAdjacentElement("beforeend", e[1] ?? On()), En++, () => {
			En === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), En--;
		};
	}, []);
}
function On() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-arrow@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-arrow/dist/index.mjs
var kn = "Arrow", An = h.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ S(q.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ S("polygon", { points: "0,0 30,0 15,10" })
	});
});
An.displayName = kn;
var jn = An;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs
function Mn(e) {
	let [t, n] = h.useState(void 0);
	return G(() => {
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
var Nn = "Popper", [Pn, Fn] = Ot(Nn), [In, Ln] = Pn(Nn), Rn = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = h.useState(null);
	return /* @__PURE__ */ S(In, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
Rn.displayName = Nn;
var zn = "PopperAnchor", Bn = h.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = Ln(zn, n), o = h.useRef(null), s = K(t, o);
	return h.useEffect(() => {
		a.onAnchorChange(r?.current || o.current);
	}), r ? null : /* @__PURE__ */ S(q.div, {
		...i,
		ref: s
	});
});
Bn.displayName = zn;
var Vn = "PopperContent", [Hn, Un] = Pn(Vn), Wn = h.forwardRef((e, n) => {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: d = "center", alignOffset: g = 0, arrowPadding: _ = 0, avoidCollisions: v = !0, collisionBoundary: y = [], collisionPadding: b = 0, sticky: x = "partial", hideWhenDetached: ee = !1, updatePositionStrategy: C = "optimized", onPlaced: te, ...ne } = e, re = Ln(Vn, r), [w, T] = h.useState(null), ie = K(n, (e) => T(e)), [E, ae] = h.useState(null), D = Mn(E), oe = D?.width ?? 0, se = D?.height ?? 0, ce = i + (d === "center" ? "" : "-" + d), le = typeof b == "number" ? b : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...b
	}, ue = Array.isArray(y) ? y : [y], de = ue.length > 0, O = {
		padding: le,
		boundary: ue.filter(Jn),
		altBoundary: de
	}, { refs: fe, floatingStyles: pe, placement: k, isPositioned: A, middlewareData: j } = o({
		strategy: "fixed",
		placement: ce,
		whileElementsMounted: (...e) => t(...e, { animationFrame: C === "always" }),
		elements: { reference: re.anchor },
		middleware: [
			m({
				mainAxis: a + se,
				alignmentAxis: g
			}),
			v && c({
				mainAxis: !0,
				crossAxis: !1,
				limiter: x === "partial" ? f() : void 0,
				...O
			}),
			v && l({ ...O }),
			p({
				...O,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			E && u({
				element: E,
				padding: _
			}),
			Yn({
				arrowWidth: oe,
				arrowHeight: se
			}),
			ee && s({
				strategy: "referenceHidden",
				...O
			})
		]
	}), [me, he] = Xn(k), ge = W(te);
	G(() => {
		A && ge?.();
	}, [A, ge]);
	let M = j.arrow?.x, N = j.arrow?.y, P = j.arrow?.centerOffset !== 0, [_e, ve] = h.useState();
	return G(() => {
		w && ve(window.getComputedStyle(w).zIndex);
	}, [w]), /* @__PURE__ */ S("div", {
		ref: fe.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...pe,
			transform: A ? pe.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: _e,
			"--radix-popper-transform-origin": [j.transformOrigin?.x, j.transformOrigin?.y].join(" "),
			...j.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ S(Hn, {
			scope: r,
			placedSide: me,
			onArrowChange: ae,
			arrowX: M,
			arrowY: N,
			shouldHideArrow: P,
			children: /* @__PURE__ */ S(q.div, {
				"data-side": me,
				"data-align": he,
				...ne,
				ref: ie,
				style: {
					...ne.style,
					animation: A ? void 0 : "none"
				}
			})
		})
	});
});
Wn.displayName = Vn;
var Gn = "PopperArrow", Kn = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, qn = h.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = Un(Gn, n), a = Kn[i.placedSide];
	return /* @__PURE__ */ S("span", {
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
		children: /* @__PURE__ */ S(jn, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
qn.displayName = Gn;
function Jn(e) {
	return e !== null;
}
var Yn = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Xn(n), u = {
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
function Xn(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var Zn = Rn, Qn = Bn, $n = Wn, er = qn, tr = "Popover", [nr, rr] = Ot(tr, [Fn]), Z = Fn(), [ir, Q] = nr(tr), ar = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = Z(t), c = h.useRef(null), [l, u] = h.useState(!1), [d = !1, f] = Ht({
		prop: r,
		defaultProp: i,
		onChange: a
	});
	return /* @__PURE__ */ S(Zn, {
		...s,
		children: /* @__PURE__ */ S(ir, {
			scope: t,
			contentId: Vt(),
			triggerRef: c,
			open: d,
			onOpenChange: f,
			onOpenToggle: h.useCallback(() => f((e) => !e), [f]),
			hasCustomAnchor: l,
			onCustomAnchorAdd: h.useCallback(() => u(!0), []),
			onCustomAnchorRemove: h.useCallback(() => u(!1), []),
			modal: o,
			children: n
		})
	});
};
ar.displayName = tr;
var or = "PopoverAnchor", sr = h.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Q(or, n), a = Z(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return h.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ S(Qn, {
		...a,
		...r,
		ref: t
	});
});
sr.displayName = or;
var cr = "PopoverTrigger", lr = h.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Q(cr, n), a = Z(n), o = K(t, i.triggerRef), s = /* @__PURE__ */ S(q.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": Sr(i.open),
		...r,
		ref: o,
		onClick: J(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ S(Qn, {
		asChild: !0,
		...a,
		children: s
	});
});
lr.displayName = cr;
var ur = "PopoverPortal", [dr, fr] = nr(ur, { forceMount: void 0 }), pr = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = Q(ur, t);
	return /* @__PURE__ */ S(dr, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ S(X, {
			present: n || a.open,
			children: /* @__PURE__ */ S(xn, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
pr.displayName = ur;
var $ = "PopoverContent", mr = h.forwardRef((e, t) => {
	let n = fr($, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = Q($, e.__scopePopover);
	return /* @__PURE__ */ S(X, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ S(hr, {
			...i,
			ref: t
		}) : /* @__PURE__ */ S(gr, {
			...i,
			ref: t
		})
	});
});
mr.displayName = $;
var hr = h.forwardRef((e, t) => {
	let n = Q($, e.__scopePopover), r = h.useRef(null), i = K(t, r), a = h.useRef(!1);
	return h.useEffect(() => {
		let e = r.current;
		if (e) return xe(e);
	}, []), /* @__PURE__ */ S(bt, {
		as: Mt,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ S(_r, {
			...e,
			ref: i,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: J(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), a.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: J(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				a.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: J(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), gr = h.forwardRef((e, t) => {
	let n = Q($, e.__scopePopover), r = h.useRef(!1), i = h.useRef(!1);
	return /* @__PURE__ */ S(_r, {
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
}), _r = h.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = Q($, n), p = Z(n);
	return Dn(), /* @__PURE__ */ S(ln, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ S(Zt, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			children: /* @__PURE__ */ S($n, {
				"data-state": Sr(f.open),
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
}), vr = "PopoverClose", yr = h.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Q(vr, n);
	return /* @__PURE__ */ S(q.button, {
		type: "button",
		...r,
		ref: t,
		onClick: J(e.onClick, () => i.onOpenChange(!1))
	});
});
yr.displayName = vr;
var br = "PopoverArrow", xr = h.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ S(er, {
		...i,
		...r,
		ref: t
	});
});
xr.displayName = br;
function Sr(e) {
	return e ? "open" : "closed";
}
var Cr = ar, wr = sr, Tr = lr, Er = pr, Dr = mr, Or = xr, kr = Cr, Ar = Tr, jr = wr, Mr = Or, Nr = h.forwardRef(({ className: t, align: n = "center", sideOffset: r = 4, container: i, ...a }, o) => /* @__PURE__ */ S(Er, {
	container: i,
	children: /* @__PURE__ */ S(Dr, {
		asChild: a.asChild,
		ref: o,
		align: n,
		sideOffset: r,
		className: e("z-50 w-72 rounded-xs border bg-f1-background p-4 text-f1-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "origin-[var(--radix-popover-content-transform-origin)]", "max-h-[var(--radix-popover-content-available-height)]", "overflow-auto", t),
		...a
	})
}));
Nr.displayName = Dr.displayName;
//#endregion
export { Tt as A, jt as C, Dt as D, W as E, w as F, ne as I, te as L, xe as M, ce as N, Ot as O, ie as P, Mt as S, G as T, Ht as _, Ar as a, q as b, Er as c, Mn as d, Dn as f, Zt as g, ln as h, Nr as i, bt as j, Et as k, Cr as l, xn as m, jr as n, wr as o, X as p, Mr as r, Dr as s, kr as t, Tr as u, Vt as v, K as w, Rt as x, J as y };
