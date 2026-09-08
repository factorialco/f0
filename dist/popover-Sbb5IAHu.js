import { a as e, n as t, o as n, r, t as i } from "./rolldown-runtime-CEFd7nDs.js";
import { t as a } from "./clsx-rBDvwE6-.js";
import { C as o, D as s, I as c, L as l, M as u, O as d, P as f, S as p, _ as m, b as h, g, h as _, i as v, j as y, n as b, r as x, t as S, v as C, x as ee, y as w } from "./tooltip-BGly0G_l.js";
import { t as T } from "./i18n-provider-defaults-BAo9bfST.js";
import * as E from "react";
import D, { Children as te, Component as ne, Fragment as re, cloneElement as ie, createContext as O, createElement as ae, forwardRef as k, isValidElement as oe, memo as A, useCallback as se, useContext as j, useEffect as M, useId as N, useImperativeHandle as ce, useInsertionEffect as le, useLayoutEffect as ue, useMemo as de, useRef as P, useState as F } from "react";
import * as fe from "react-dom";
import pe, { createPortal as me } from "react-dom";
import { Fragment as he, jsx as I, jsxs as L } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.mjs
var ge = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, { compose: _e, cva: R, cx: ve } = ((e) => {
	let t = function() {
		var t = [...arguments];
		return e?.hooks?.["cx:done"] === void 0 ? e?.hooks?.onComplete === void 0 ? a(t) : e?.hooks.onComplete(a(t)) : e?.hooks["cx:done"](a(t));
	};
	return {
		compose: function() {
			var e = [...arguments];
			return (n) => {
				let r = Object.fromEntries(Object.entries(n || {}).filter((e) => {
					let [t] = e;
					return !["class", "className"].includes(t);
				}));
				return t(e.map((e) => e(r)), n?.class, n?.className);
			};
		},
		cva: (e) => (n) => {
			if (e?.variants == null) return t(e?.base, n?.class, n?.className);
			let { variants: r, defaultVariants: i } = e, a = Object.keys(r).map((e) => {
				let t = n?.[e], a = i?.[e], o = ge(t) || ge(a);
				return r[e][o];
			}), o = {
				...i,
				...n && Object.entries(n).reduce((e, t) => {
					let [n, r] = t;
					return r === void 0 ? e : {
						...e,
						[n]: r
					};
				}, {})
			}, s = e?.compoundVariants?.reduce((e, t) => {
				let { class: n, className: r, ...i } = t;
				return Object.entries(i).every((e) => {
					let [t, n] = e, r = o[t];
					return Array.isArray(n) ? n.includes(r) : r === n;
				}) ? [
					...e,
					n,
					r
				] : e;
			}, []);
			return t(e?.base, a, s, n?.class, n?.className);
		},
		cx: t
	};
})(), ye = [
	"layout",
	"info",
	"action",
	"form"
], be = O({
	enabled: !1,
	enable: () => null,
	disable: () => null,
	filter: []
}), xe = ({ children: e }) => {
	let [t, n] = F(!1), [r, i] = F([]), a = se((e) => {
		i(e || [...ye].filter((e) => e !== "layout")), n(!0);
	}, [i, n]), o = se(() => n(!1), [n]);
	return M(() => {
		window.XRay = {
			enable: a,
			disable: o
		};
	}, [a, o]), /* @__PURE__ */ L(be.Provider, {
		value: {
			enabled: t,
			enable: a,
			disable: o,
			filter: r
		},
		children: [e, t && typeof document < "u" ? me(/* @__PURE__ */ L("div", {
			className: "bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md",
			children: [/* @__PURE__ */ I("div", {
				className: "text-md z-50 font-semibold",
				children: "XRay"
			}), /* @__PURE__ */ I("div", {
				className: "flex flex-col space-y-2",
				children: ye.map((e) => /* @__PURE__ */ L("label", {
					className: "block",
					children: [/* @__PURE__ */ I("input", {
						onChange: (t) => t.target.checked ? i([...r, e]) : i(r.filter((t) => t !== e)),
						type: "checkbox",
						checked: r.includes(e),
						className: "mr-2"
					}), e]
				}, e))
			})]
		}), document?.body) : null]
	});
}, Se = R({
	base: "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
	variants: { type: {
		layout: "outline-red-500",
		info: "outline-blue-500",
		action: "outline-green-600",
		form: "outline-purple-600"
	} }
}), Ce = R({
	base: "absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",
	variants: { type: {
		layout: "bg-red-500 text-white",
		info: "bg-blue-500 text-white",
		action: "bg-green-600 text-white",
		form: "bg-purple-600 text-white"
	} }
}), we = (e, t) => {
	let { enabled: n, filter: r } = E.useContext(be), i = P(null);
	ce(t, () => i.current);
	let a = n && !e.internal, o = typeof document < "u" ? document.body : null;
	return M(() => {
		if (!a || !i.current || !r.includes(e.type)) return;
		let t = i.current;
		t.dataset.componentName = e.name;
		let n = null, s = null;
		if (o) {
			let { top: r, left: i, width: a, height: c } = t.getBoundingClientRect();
			n = document.createElement("div"), n.className = Se({ type: e.type }), n.style.top = `${r}px`, n.style.left = `${i}px`, n.style.width = `${a}px`, n.style.height = `${c}px`, s = document.createElement("div"), s.className = Ce({ type: e.type }), s.style.top = `${r}px`, s.style.left = `${i}px`, s.innerText = e.name, o.appendChild(s), o.appendChild(n);
		}
		return () => {
			n && o?.removeChild(n), s && o?.removeChild(s);
		};
	}, [
		a,
		e.name,
		e.type,
		r,
		o
	]), {
		ref: i,
		enabled: n
	};
}, Te = () => j(be), Ee = (e, t) => {
	let n = k((n, r) => {
		let { ref: i } = we(e, r);
		return /* @__PURE__ */ I(t, {
			ref: i,
			...n
		});
	});
	return n.displayName = e.name, n;
}, De = async () => {
	if (navigator.userAgentData) {
		let e = (await navigator.userAgentData.getHighEntropyValues(["platform"])).platform?.toLowerCase() || "";
		switch (!0) {
			case e.includes("mac"): return "mac";
			case e.includes("windows"): return "windows";
			case e.includes("linux"): return "linux";
			case navigator.userAgentData.mobile: return "mobile";
		}
	}
	let e = navigator.userAgent.toLowerCase();
	switch (!0) {
		case /mac|iphone|ipod|ipad/.test(e): return "mac";
		case e.includes("win"): return "windows";
		case e.includes("linux"): return "linux";
		case /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e): return "mobile";
		default: return "unknown";
	}
}, Oe = O(null), ke = ({ children: e, platform: t, isDev: n = !1, showExperimentalWarnings: r = !1, renderDataTestIdAttribute: i = !1, hourCycle: a }) => {
	let [o, s] = F(t ?? "unknown");
	return M(() => {
		t === void 0 && De().then(s);
	}, [t]), /* @__PURE__ */ I(Oe.Provider, {
		value: {
			platform: o,
			isDev: n,
			showExperimentalWarnings: r,
			renderDataTestIdAttribute: i,
			hourCycle: a
		},
		children: e
	});
}, Ae = () => {
	let e = j(Oe);
	if (e === null) throw Error("useIsDev must be used within an UserPlatformProvider");
	return e.isDev;
};
function je() {
	let e = j(Oe);
	if (e === null) throw Error("useUserPlatform must be used within an UserPlatformProvider");
	return e.platform;
}
function Me() {
	return j(Oe)?.renderDataTestIdAttribute ?? !1;
}
function Ne() {
	let e = j(Oe);
	return e === null ? (console.warn("useShowExperimentalWarnings must be used within an UserPlatformProvider"), !1) : e.showExperimentalWarnings;
}
function Pe() {
	return j(Oe)?.hourCycle;
}
//#endregion
//#region src/lib/data-testid/index.tsx
var Fe = /* @__PURE__ */ new Set([
	"prototype",
	"length",
	"name",
	"$$typeof",
	"render"
]), Ie = (e, t) => {
	let n = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
	for (let r of n) if (!Fe.has(r)) try {
		let n = Object.getOwnPropertyDescriptor(e, r);
		n && Object.defineProperty(t, r, n);
	} catch {}
}, Le = ({ dataTestId: e, children: t }) => {
	let n = Me();
	return !e || !n ? t : /* @__PURE__ */ I("div", {
		"data-testid": e,
		style: { display: "contents" },
		children: t
	});
}, Re = (e) => {
	if (e.$$typeof === Symbol.for("react.forward_ref")) {
		let t = e, n = k((e, n) => {
			let { dataTestId: r, ...i } = e;
			return /* @__PURE__ */ I(Le, {
				dataTestId: r,
				children: /* @__PURE__ */ I(t, {
					...i,
					ref: n
				})
			});
		});
		return Ie(e, n), n.displayName ||= e.displayName || e.name || e.render?.name || "Component", n;
	}
	if (e.$$typeof === Symbol.for("react.memo")) {
		let t = e.type, n = e.compare, r = Re(t), i = A(r, n);
		return Ie(e, i), i.displayName ||= e.displayName || e.name || e.type?.displayName || "Component", i;
	}
	let t = k((t, n) => {
		let { dataTestId: r, ...i } = t;
		return /* @__PURE__ */ I(Le, {
			dataTestId: r,
			children: /* @__PURE__ */ I(e, {
				...i,
				ref: n
			})
		});
	});
	return Ie(e, t), t.displayName ||= e.displayName || e.name || "Component", t;
}, z = {}, ze = (e, t) => {
	let n = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
	for (let r of n) if (r !== "prototype" && r !== "length" && r !== "name" && r !== "$$typeof" && r !== "render") try {
		let n = Object.getOwnPropertyDescriptor(e, r);
		n && Object.defineProperty(t, r, n);
	} catch {}
}, B = (e, t) => {
	let n = () => {
		Object.entries(z).forEach(([e, t]) => {
			let n = t.uses - t.usesReported;
			if (n > 0) {
				let r = t.usesReported === -1 ? "" : `New uses found since last report: ${n}`;
				console.warn(`🚧 The \x1b[1m${e}\x1b[0m component is experimental. Use it at your own risk.`, `Found ${t.uses} uses. ${r}`), z[e] = {
					...t,
					usesReported: t.uses
				};
			}
		});
	}, r = null, i = () => {
		if (!r) return r = setTimeout(() => {
			n();
		}, 5e3), () => {
			r && clearTimeout(r);
		};
	};
	if (t.$$typeof === Symbol.for("react.forward_ref")) {
		let n = t.render, r = k((t, r) => (Ne() && (i(), z[e] || (z[e] = {
			uses: 0,
			usesReported: -1
		}), z[e] = {
			...z[e],
			uses: (z[e]?.uses ?? 0) + 1
		}), n(t, r)));
		return ze(t, r), r.displayName ||= `Experimental(${e})`, r;
	}
	if (t.$$typeof === Symbol.for("react.memo")) {
		let n = t.type, r = t.compare, a = (t) => (Ne() && (i(), z[e] || (z[e] = {
			uses: 0,
			usesReported: -1
		}), z[e] = {
			...z[e],
			uses: (z[e]?.uses ?? 0) + 1
		}), n(t));
		a.displayName = `Experimental(${e})`, ze(t, a);
		let o = A(a, r);
		return ze(t, o), o;
	}
	let a = ((...n) => (Ne() && (i(), z[e] || (z[e] = {
		uses: 0,
		usesReported: -1
	}), z[e] = {
		...z[e],
		uses: (z[e]?.uses ?? 0) + 1
	}), t(...n)));
	return ze(t, a), a;
}, Be = O({});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-constant.mjs
function Ve(e) {
	let t = P(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs
var He = typeof window < "u", Ue = He ? ue : M, We = /* @__PURE__ */ O(null), Ge = O({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/is-object.mjs
function Ke(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-html-element.mjs
function qe(e) {
	return Ke(e) && "offsetHeight" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var Je = class extends E.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (t && e.isPresent && !this.props.isPresent) {
			let e = t.offsetParent, n = qe(e) && e.offsetWidth || 0, r = this.props.sizeRef.current;
			r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft, r.right = n - r.width - r.left;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Ye({ children: e, isPresent: t, anchorX: n }) {
	let r = N(), i = P(null), a = P({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0
	}), { nonce: o } = j(Ge);
	return le(() => {
		let { width: e, height: s, top: c, left: l, right: u } = a.current;
		if (t || !i.current || !e || !s) return;
		let d = n === "left" ? `left: ${l}` : `right: ${u}`;
		i.current.dataset.motionPopId = r;
		let f = document.createElement("style");
		return o && (f.nonce = o), document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            ${d}px !important;
            top: ${c}px !important;
          }
        `), () => {
			document.head.contains(f) && document.head.removeChild(f);
		};
	}, [t]), I(Je, {
		isPresent: t,
		childRef: i,
		sizeRef: a,
		children: E.cloneElement(e, { ref: i })
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var Xe = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s }) => {
	let c = Ve(Ze), l = N(), u = !0, d = de(() => (u = !1, {
		id: l,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: (e) => {
			c.set(e, !0);
			for (let e of c.values()) if (!e) return;
			r && r();
		},
		register: (e) => (c.set(e, !1), () => c.delete(e))
	}), [
		n,
		c,
		r
	]);
	return a && u && (d = { ...d }), de(() => {
		c.forEach((e, t) => c.set(t, !1));
	}, [n]), E.useEffect(() => {
		!n && !c.size && r && r();
	}, [n]), o === "popLayout" && (e = I(Ye, {
		isPresent: n,
		anchorX: s,
		children: e
	})), I(We.Provider, {
		value: d,
		children: e
	});
};
function Ze() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function Qe(e = !0) {
	let t = j(We);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = N();
	M(() => {
		if (e) return i(a);
	}, [e]);
	let o = se(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
function $e() {
	return et(j(We));
}
function et(e) {
	return e === null || e.isPresent;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var tt = (e) => e.key || "";
function nt(e) {
	let t = [];
	return te.forEach(e, (e) => {
		oe(e) && t.push(e);
	}), t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs
var rt = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left" }) => {
	let [c, l] = Qe(o), u = de(() => nt(e), [e]), d = o && !c ? [] : u.map(tt), f = P(!0), p = P(u), m = Ve(() => /* @__PURE__ */ new Map()), [h, g] = F(u), [_, v] = F(u);
	Ue(() => {
		f.current = !1, p.current = u;
		for (let e = 0; e < _.length; e++) {
			let t = tt(_[e]);
			d.includes(t) ? m.delete(t) : m.get(t) !== !0 && m.set(t, !1);
		}
	}, [
		_,
		d.length,
		d.join("-")
	]);
	let y = [];
	if (u !== h) {
		let e = [...u];
		for (let t = 0; t < _.length; t++) {
			let n = _[t], r = tt(n);
			d.includes(r) || (e.splice(t, 0, n), y.push(n));
		}
		return a === "wait" && y.length && (e = y), v(nt(e)), g(u), null;
	}
	process.env.NODE_ENV !== "production" && a === "wait" && _.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: b } = j(Be);
	return I(he, { children: _.map((e) => {
		let h = tt(e), g = o && !c ? !1 : u === _ || d.includes(h);
		return I(Xe, {
			isPresent: g,
			initial: !f.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: i,
			mode: a,
			onExitComplete: g ? void 0 : () => {
				if (m.has(h)) m.set(h, !0);
				else return;
				let e = !0;
				m.forEach((t) => {
					t || (e = !1);
				}), e && (b?.(), v(p.current), o && l?.(), r && r());
			},
			anchorX: s,
			children: e
		}, h);
	}) });
}, it = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], at = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/frameloop/render-step.mjs
function ot(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.has(e) || s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0, [n, r] = [r, n], n.forEach(l), t && at.value && at.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/global-config.mjs
var st = {}, ct = 40;
function lt(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = it.reduce((e, n) => (e[n] = ot(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = st.useManualTiming ? i.timestamp : performance.now();
		n = !1, st.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, ct), 1)), i.timestamp = a, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: it.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < it.length; t++) o[it[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs
var ut = /* @__NO_SIDE_EFFECTS__ */ (e) => e, { schedule: V, cancel: dt, state: ft, steps: pt } = /* @__PURE__ */ lt(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ut, !0), mt = O({ strict: !1 }), ht = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, gt = {};
for (let e in ht) gt[e] = { isEnabled: (t) => ht[e].some((e) => !!t[e]) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/load-features.mjs
function _t(e) {
	for (let t in e) gt[t] = {
		...gt[t],
		...e[t]
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/valid-prop.mjs
var vt = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function yt(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || vt.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function bt(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var xt = t((() => {})), St = /* @__PURE__ */ r({ default: () => wt }), Ct, wt, Tt = t((() => {
	xt(), Ct = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wt = /* #__PURE__ */ bt(function(e) {
		return Ct.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
	});
})), Et = (e) => !yt(e);
function Dt(e) {
	e && (Et = (t) => t.startsWith("on") ? !yt(t) : e(t));
}
try {
	Dt((Tt(), e(St)).default);
} catch {}
function Ot(e, t, n) {
	let r = {};
	for (let i in e) (i !== "values" || typeof e.values != "object") && (Et(i) || n === !0 && yt(i) || !t && !yt(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/warn-once.mjs
var kt = /* @__PURE__ */ new Set();
function At(e, t, n) {
	e || kt.has(t) || (console.warn(t), n && console.warn(n), kt.add(t));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-proxy.mjs
function jt(e) {
	if (typeof Proxy > "u") return e;
	let t = /* @__PURE__ */ new Map();
	return new Proxy((...t) => (process.env.NODE_ENV !== "production" && At(!1, "motion() is deprecated. Use motion.create() instead."), e(...t)), { get: (n, r) => r === "create" ? e : (t.has(r) || t.set(r, e(r)), t.get(r)) });
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/index.mjs
var Mt = /* @__PURE__ */ O({});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function Nt(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs
function Pt(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs
var Ft = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], It = ["initial", ...Ft];
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function Lt(e) {
	return Nt(e.animate) || It.some((t) => Pt(e[t]));
}
function Rt(e) {
	return !!(Lt(e) || e.variants);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/utils.mjs
function zt(e, t) {
	if (Lt(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || Pt(t) ? t : void 0,
			animate: Pt(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/create.mjs
function Bt(e) {
	let { initial: t, animate: n } = zt(e, j(Mt));
	return de(() => ({
		initial: t,
		animate: n
	}), [Vt(t), Vt(n)]);
}
function Vt(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/symbol.mjs
var Ht = Symbol.for("motionComponentSymbol");
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/is-ref-object.mjs
function Ut(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function Wt(e, t, n) {
	return se((r) => {
		r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ut(n) && (n.current = r));
	}, [t]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var Gt = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Kt = "data-" + Gt("framerAppearId"), qt = O({}), { schedule: Jt, cancel: Yt } = /* @__PURE__ */ lt(queueMicrotask, !1);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Xt(e, t, n, r, i) {
	let { visualElement: a } = j(Mt), o = j(mt), s = j(We), c = j(Ge).reducedMotion, l = P(null);
	r ||= o.renderer, !l.current && r && (l.current = r(e, {
		visualState: t,
		parent: a,
		props: n,
		presenceContext: s,
		blockInitialAnimation: s ? s.initial === !1 : !1,
		reducedMotionConfig: c
	}));
	let u = l.current, d = j(qt);
	u && !u.projection && i && (u.type === "html" || u.type === "svg") && Zt(l.current, n, i, d);
	let f = P(!1);
	le(() => {
		u && f.current && u.update(n, s);
	});
	let p = n[Kt], m = P(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
	return Ue(() => {
		u && (f.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), Jt.render(u.render), m.current && u.animationState && u.animationState.animateChanges());
	}), M(() => {
		u && (!m.current && u.animationState && u.animationState.animateChanges(), m.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(p);
		}), !1));
	}), u;
}
function Zt(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutCrossfade: u } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Qt(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && Ut(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: u,
		layoutScroll: c,
		layoutRoot: l
	});
}
function Qt(e) {
	if (e) return e.options.allowProjection === !1 ? Qt(e.parent) : e.projection;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs
var $t = () => {}, en = () => {};
process.env.NODE_ENV !== "production" && ($t = (e, t) => {
	!e && typeof console < "u" && console.warn(t);
}, en = (e, t) => {
	if (!e) throw Error(t);
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/index.mjs
function tn({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
	e && _t(e);
	function a(a, o) {
		let s, c = {
			...j(Ge),
			...a,
			layoutId: nn(a)
		}, { isStatic: l } = c, u = Bt(a), d = r(a, l);
		if (!l && He) {
			rn(c, e);
			let n = an(c);
			s = n.MeasureLayout, u.visualElement = Xt(i, d, c, t, n.ProjectionNode);
		}
		return L(Mt.Provider, {
			value: u,
			children: [s && u.visualElement ? I(s, {
				visualElement: u.visualElement,
				...c
			}) : null, n(i, a, Wt(d, u.visualElement, o), d, l, u.visualElement)]
		});
	}
	a.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
	let o = k(a);
	return o[Ht] = i, o;
}
function nn({ layoutId: e }) {
	let t = j(Be).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function rn(e, t) {
	let n = j(mt).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? $t(!1, t) : en(!1, t);
	}
}
function an(e) {
	let { drag: t, layout: n } = gt;
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var on = (e) => (t) => typeof t == "string" && t.startsWith(e), sn = /*@__PURE__*/ on("--"), cn = /*@__PURE__*/ on("var(--"), ln = (e) => cn(e) ? un.test(e.split("/*")[0].trim()) : !1, un = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, dn = {};
function fn(e) {
	for (let t in e) dn[t] = e[t], sn(t) && (dn[t].isCSSVariable = !0);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/utils/keys-transform.mjs
var pn = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], mn = /* @__PURE__ */ new Set(pn);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function hn(e, { layout: t, layoutId: n }) {
	return mn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!dn[e] || e === "opacity");
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var gn = (e, t) => t && typeof e == "number" ? t.transform(e) : e, _n = (e, t, n) => n > t ? t : n < e ? e : n, vn = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, yn = {
	...vn,
	transform: (e) => _n(0, 1, e)
}, bn = {
	...vn,
	default: 1
}, xn = {
	...vn,
	transform: Math.round
}, Sn = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), Cn = /*@__PURE__*/ Sn("deg"), wn = /*@__PURE__*/ Sn("%"), H = /*@__PURE__*/ Sn("px"), Tn = /*@__PURE__*/ Sn("vh"), En = /*@__PURE__*/ Sn("vw"), Dn = {
	...wn,
	parse: (e) => wn.parse(e) / 100,
	transform: (e) => wn.transform(e * 100)
}, On = {
	borderWidth: H,
	borderTopWidth: H,
	borderRightWidth: H,
	borderBottomWidth: H,
	borderLeftWidth: H,
	borderRadius: H,
	radius: H,
	borderTopLeftRadius: H,
	borderTopRightRadius: H,
	borderBottomRightRadius: H,
	borderBottomLeftRadius: H,
	width: H,
	maxWidth: H,
	height: H,
	maxHeight: H,
	top: H,
	right: H,
	bottom: H,
	left: H,
	padding: H,
	paddingTop: H,
	paddingRight: H,
	paddingBottom: H,
	paddingLeft: H,
	margin: H,
	marginTop: H,
	marginRight: H,
	marginBottom: H,
	marginLeft: H,
	backgroundPositionX: H,
	backgroundPositionY: H,
	rotate: Cn,
	rotateX: Cn,
	rotateY: Cn,
	rotateZ: Cn,
	scale: bn,
	scaleX: bn,
	scaleY: bn,
	scaleZ: bn,
	skew: Cn,
	skewX: Cn,
	skewY: Cn,
	distance: H,
	translateX: H,
	translateY: H,
	translateZ: H,
	x: H,
	y: H,
	z: H,
	perspective: H,
	transformPerspective: H,
	opacity: yn,
	originX: Dn,
	originY: Dn,
	originZ: H,
	zIndex: xn,
	fillOpacity: yn,
	strokeOpacity: yn,
	numOctaves: xn
}, kn = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, An = pn.length;
function jn(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < An; a++) {
		let o = pn[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (c = typeof s == "number" ? s === +!!o.startsWith("scale") : parseFloat(s) === 0, !c || n) {
			let e = gn(s, On[o]);
			if (!c) {
				i = !1;
				let t = kn[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs
function Mn(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (mn.has(e)) {
			o = !0;
			continue;
		}
		if (sn(e)) {
			i[e] = n;
			continue;
		}
		{
			let t = gn(n, On[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = jn(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var Nn = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
}), Pn = (e) => !!(e && e.getVelocity);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/use-props.mjs
function Fn(e, t, n) {
	for (let r in t) !Pn(t[r]) && !hn(r, n) && (e[r] = t[r]);
}
function In({ transformTemplate: e }, t) {
	return de(() => {
		let n = Nn();
		return Mn(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Ln(e, t) {
	let n = e.style || {}, r = {};
	return Fn(r, n, e), Object.assign(r, In(e, t)), r;
}
function Rn(e, t) {
	let n = {}, r = Ln(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs
var zn = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, Bn = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function Vn(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? zn : Bn;
	e[a.offset] = H.transform(-r);
	let o = H.transform(t), s = H.transform(n);
	e[a.array] = `${o} ${s}`;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function Hn(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Mn(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Vn(d, i, a, o, !1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var Un = () => ({
	...Nn(),
	attrs: {}
}), Wn = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/use-props.mjs
function Gn(e, t, n, r) {
	let i = de(() => {
		let n = Un();
		return Hn(n, t, Wn(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Fn(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var Kn = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function qn(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Kn.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/dom/use-render.mjs
function Jn(e = !1) {
	return (t, n, r, { latestValues: i }, a) => {
		let o = (qn(t) ? Gn : Rn)(n, i, a, t), s = Ot(n, typeof t == "string", e), c = t === re ? {} : {
			...s,
			...o,
			ref: r
		}, { children: l } = n, u = de(() => Pn(l) ? l.get() : l, [l]);
		return ae(t, {
			...c,
			children: u
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs
function Yn(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Xn(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Yn(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Yn(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function Zn(e) {
	return Pn(e) ? e.get() : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function Qn({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: er(n, r, i, e),
		renderState: t()
	};
}
var $n = (e) => (t, n) => {
	let r = j(Mt), i = j(We), a = () => Qn(e, t, r, i);
	return n ? a() : Ve(a);
};
function er(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = Zn(a[e]);
	let { initial: o, animate: s } = e, c = Lt(e), l = Rt(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !Nt(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = Xn(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function tr(e, t, n) {
	let { style: r } = e, i = {};
	for (let a in r) (Pn(r[a]) || t.style && Pn(t.style[a]) || hn(a, e) || n?.getValue(a)?.liveStyle !== void 0) && (i[a] = r[a]);
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/config-motion.mjs
var nr = { useVisualState: $n({
	scrapeMotionValuesFromProps: tr,
	createRenderState: Nn
}) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function rr(e, t, n) {
	let r = tr(e, t, n);
	for (let n in e) if (Pn(e[n]) || Pn(t[n])) {
		let t = pn.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/config-motion.mjs
var ir = { useVisualState: $n({
	scrapeMotionValuesFromProps: rr,
	createRenderState: Un
}) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-factory.mjs
function ar(e, t) {
	return function(n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
		return tn({
			...qn(n) ? ir : nr,
			preloadedFeatures: e,
			useRender: Jn(r),
			createVisualElement: t,
			Component: n
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function or(e, t, n) {
	let r = e.getProps();
	return Xn(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var sr = (e) => Array.isArray(e), cr;
function lr() {
	cr = void 0;
}
var ur = {
	now: () => (cr === void 0 && ur.set(ft.isProcessing || st.useManualTiming ? ft.timestamp : performance.now()), cr),
	set: (e) => {
		cr = e, queueMicrotask(lr);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/array.mjs
function dr(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function fr(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
function pr([ ...e], t, n) {
	let r = t < 0 ? e.length + t : t;
	if (r >= 0 && r < e.length) {
		let r = n < 0 ? e.length + n : n, [i] = e.splice(t, 1);
		e.splice(r, 0, i);
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/subscription-manager.mjs
var mr = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return dr(this.subscriptions, e), () => fr(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) {
			if (r === 1) this.subscriptions[0](e, t, n);
			else for (let i = 0; i < r; i++) {
				let r = this.subscriptions[i];
				r && r(e, t, n);
			}
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/velocity-per-second.mjs
function hr(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/index.mjs
var gr = 30, _r = (e) => !isNaN(parseFloat(e)), vr = { current: void 0 }, yr = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, t = !0) => {
			let n = ur.now();
			if (this.updatedAt !== n && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
			t && this.events.renderRequest?.notify(this.current);
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = ur.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = _r(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && At(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new mr());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), V.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e, t = !0) {
		!t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return vr.current && vr.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = ur.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > gr) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, gr);
		return hr(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function br(e, t) {
	return new yr(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs
function xr(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, br(n));
}
function Sr(e) {
	return sr(e) ? e[e.length - 1] || 0 : e;
}
function Cr(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = or(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) xr(e, t, Sr(i[t]));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs
function wr(e) {
	return !!(Pn(e) && e.add);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function Tr(e, t) {
	let n = e.getValue("willChange");
	if (wr(n)) return n.add(t);
	if (!n && st.WillChange) {
		let n = new st.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function Er(e) {
	return e.props[Kt];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var Dr = (e) => e !== null;
function Or(e, { repeat: t, repeatType: n = "loop" }, r) {
	let i = e.filter(Dr), a = t && n !== "loop" && t % 2 == 1 ? 0 : i.length - 1;
	return !a || r === void 0 ? i[a] : r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs
var kr = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Ar = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), jr = {
	type: "keyframes",
	duration: .8
}, Mr = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Nr = (e, { keyframes: t }) => t.length > 2 ? jr : mn.has(e) ? e.startsWith("scale") ? Ar(t[1]) : kr : Mr;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function Pr({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: a, repeatType: o, repeatDelay: s, from: c, elapsed: l, ...u }) {
	return !!Object.keys(u).length;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Fr(e, t) {
	return e?.[t] ?? e?.default ?? e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs
var Ir = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Lr = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Rr = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, zr = (e) => Math.round(e * 1e5) / 1e5, Br = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Vr(e) {
	return e == null;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Hr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ur = (e, t) => (n) => !!(typeof n == "string" && Hr.test(n) && n.startsWith(e) || t && !Vr(n) && Object.prototype.hasOwnProperty.call(n, t)), Wr = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Br);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Gr = (e) => _n(0, 255, e), Kr = {
	...vn,
	transform: (e) => Math.round(Gr(e))
}, qr = {
	test: /*@__PURE__*/ Ur("rgb", "red"),
	parse: /*@__PURE__*/ Wr("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Kr.transform(e) + ", " + Kr.transform(t) + ", " + Kr.transform(n) + ", " + zr(yn.transform(r)) + ")"
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/color/hex.mjs
function Jr(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var Yr = {
	test: /*@__PURE__*/ Ur("#"),
	parse: Jr,
	transform: qr.transform
}, Xr = {
	test: /*@__PURE__*/ Ur("hsl", "hue"),
	parse: /*@__PURE__*/ Wr("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + wn.transform(zr(t)) + ", " + wn.transform(zr(n)) + ", " + zr(yn.transform(r)) + ")"
}, Zr = {
	test: (e) => qr.test(e) || Yr.test(e) || Xr.test(e),
	parse: (e) => qr.test(e) ? qr.parse(e) : Xr.test(e) ? Xr.parse(e) : Yr.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? qr.transform(e) : Xr.transform(e)
}, Qr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/complex/index.mjs
function $r(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Br)?.length || 0) + (e.match(Qr)?.length || 0) > 0;
}
var ei = "number", ti = "color", ni = "var", ri = "var(", ii = "${}", ai = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oi(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(ai, (e) => (Zr.test(e) ? (r.color.push(a), i.push(ti), n.push(Zr.parse(e))) : e.startsWith(ri) ? (r.var.push(a), i.push(ni), n.push(e)) : (r.number.push(a), i.push(ei), n.push(parseFloat(e))), ++a, ii)).split(ii),
		indexes: r,
		types: i
	};
}
function si(e) {
	return oi(e).values;
}
function ci(e) {
	let { split: t, types: n } = oi(e), r = t.length;
	return (e) => {
		let i = "";
		for (let a = 0; a < r; a++) if (i += t[a], e[a] !== void 0) {
			let t = n[a];
			i += t === ei ? zr(e[a]) : t === ti ? Zr.transform(e[a]) : e[a];
		}
		return i;
	};
}
var li = (e) => typeof e == "number" ? 0 : e;
function ui(e) {
	let t = si(e);
	return ci(e)(t.map(li));
}
var di = {
	test: $r,
	parse: si,
	createTransformer: ci,
	getAnimatableNone: ui
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function fi(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function pi({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = fi(s, r, e + 1 / 3), a = fi(s, r, e), o = fi(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/immediate.mjs
function mi(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/number.mjs
var U = (e, t, n) => e + (t - e) * n, hi = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, gi = [
	Yr,
	qr,
	Xr
], _i = (e) => gi.find((t) => t.test(e));
function vi(e) {
	let t = _i(e);
	if ($t(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
	let n = t.parse(e);
	return t === Xr && (n = pi(n)), n;
}
var yi = (e, t) => {
	let n = vi(e), r = vi(t);
	if (!n || !r) return mi(e, t);
	let i = { ...n };
	return (e) => (i.red = hi(n.red, r.red, e), i.green = hi(n.green, r.green, e), i.blue = hi(n.blue, r.blue, e), i.alpha = U(n.alpha, r.alpha, e), qr.transform(i));
}, bi = /* @__PURE__ */ new Set(["none", "hidden"]);
function xi(e, t) {
	return bi.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/pipe.mjs
var Si = (e, t) => (n) => t(e(n)), Ci = (...e) => e.reduce(Si);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/complex.mjs
function wi(e, t) {
	return (n) => U(e, t, n);
}
function Ti(e) {
	return typeof e == "number" ? wi : typeof e == "string" ? ln(e) ? mi : Zr.test(e) ? yi : ki : Array.isArray(e) ? Ei : typeof e == "object" ? Zr.test(e) ? yi : Di : mi;
}
function Ei(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Ti(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function Di(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ti(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Oi(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]], s = e.values[o] ?? 0;
		n[i] = s, r[a]++;
	}
	return n;
}
var ki = (e, t) => {
	let n = di.createTransformer(t), r = oi(e), i = oi(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? bi.has(e) && !i.values.length || bi.has(t) && !r.values.length ? xi(e, t) : Ci(Ei(Oi(r, i), i.values), n) : ($t(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), mi(e, t));
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/index.mjs
function Ai(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? U(e, t, n) : Ti(e)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/drivers/frame.mjs
var ji = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => V.update(t, e),
		stop: () => dt(t),
		now: () => ft.isProcessing ? ft.timestamp : ur.now()
	};
}, Mi = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Ni = 2e4;
function Pi(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Fi(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Pi(r), Ni);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ Lr(i)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Ii = 5;
function Li(e, t, n) {
	let r = Math.max(t - Ii, 0);
	return hr(n - e(r), t - r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/spring/defaults.mjs
var W = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
}, Ri = .001;
function zi({ duration: e = W.duration, bounce: t = W.bounce, velocity: n = W.velocity, mass: r = W.mass }) {
	let i, a;
	$t(e <= /* @__PURE__ */ Ir(W.maxDuration), "Spring duration must be 10 seconds or less");
	let o = 1 - t;
	o = _n(W.minDamping, W.maxDamping, o), e = _n(W.minDuration, W.maxDuration, /* @__PURE__ */ Lr(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Hi(t, o), c = Math.exp(-i);
		return Ri - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Hi(t ** 2, o);
		return (-i(t) + Ri > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Vi(i, a, s);
	if (e = /* @__PURE__ */ Ir(e), isNaN(c)) return {
		stiffness: W.stiffness,
		damping: W.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Bi = 12;
function Vi(e, t, n) {
	let r = n;
	for (let n = 1; n < Bi; n++) r -= e(r) / t(r);
	return r;
}
function Hi(e, t) {
	return e * Math.sqrt(1 - t * t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/spring/index.mjs
var Ui = ["duration", "bounce"], Wi = [
	"stiffness",
	"damping",
	"mass"
];
function Gi(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Ki(e) {
	let t = {
		velocity: W.velocity,
		stiffness: W.stiffness,
		damping: W.damping,
		mass: W.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Gi(e, Wi) && Gi(e, Ui)) {
		if (e.visualDuration) {
			let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * _n(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
			t = {
				...t,
				mass: W.mass,
				stiffness: i,
				damping: a
			};
		} else {
			let n = zi(e);
			t = {
				...t,
				...n,
				mass: W.mass
			}, t.isResolvedFromDuration = !0;
		}
	}
	return t;
}
function qi(e = W.visualDuration, t = W.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Ki({
		...n,
		velocity: -/* @__PURE__ */ Lr(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ Lr(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? W.restSpeed.granular : W.restSpeed.default, i ||= v ? W.restDelta.granular : W.restDelta.default;
	let y;
	if (h < 1) {
		let e = Hi(_, h);
		y = (t) => {
			let n = Math.exp(-h * _ * t);
			return o - n * ((m + h * _ * g) / e * Math.sin(e * t) + g * Math.cos(e * t));
		};
	} else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
	else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
	}
	let b = {
		calculatedDuration: p && d || null,
		next: (e) => {
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = e === 0 ? m : 0;
				h < 1 && (n = e === 0 ? /* @__PURE__ */ Ir(m) : Li(y, e, t));
				let a = Math.abs(n) <= r, c = Math.abs(o - t) <= i;
				s.done = a && c;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Pi(b), Ni), t = Mi((t) => b.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return b;
}
qi.applyToOptions = (e) => {
	let t = Fi(e, 100, qi);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ Ir(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/inertia.mjs
function Ji({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = qi({
			keyframes: [f.value, m(f.value)],
			velocity: Li(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs
var Yi = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/interpolate.mjs
function Xi(e, t, n) {
	let r = [], i = n || st.mix || Ai, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Ci(Array.isArray(t) ? t[n] || ut : t, a)), r.push(a);
	}
	return r;
}
function Zi(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (en(a === t.length, "Both input and output ranges must be the same length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Xi(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Yi(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(_n(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function Qi(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Yi(0, t, r);
		e.push(U(n, 1, i));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function $i(e) {
	let t = [0];
	return Qi(t, e.length - 1), t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function ea(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/easing/cubic-bezier.mjs
var ta = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, na = 1e-7, ra = 12;
function ia(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = ta(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > na && ++s < ra);
	return o;
}
function aa(e, t, n, r) {
	if (e === t && n === r) return ut;
	let i = (t) => ia(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : ta(i(e), t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/easing/ease.mjs
var oa = /*@__PURE__*/ aa(.42, 0, 1, 1), sa = /*@__PURE__*/ aa(0, 0, .58, 1), ca = /*@__PURE__*/ aa(.42, 0, .58, 1), la = (e) => Array.isArray(e) && typeof e[0] != "number", ua = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, da = (e) => (t) => 1 - e(1 - t), fa = /*@__PURE__*/ aa(.33, 1.53, .69, .99), pa = /*@__PURE__*/ da(fa), ma = /*@__PURE__*/ ua(pa), ha = (e) => (e *= 2) < 1 ? .5 * pa(e) : .5 * (2 - 2 ** (-10 * (e - 1))), ga = (e) => 1 - Math.sin(Math.acos(e)), _a = da(ga), va = ua(ga), ya = (e) => Array.isArray(e) && typeof e[0] == "number", ba = {
	linear: ut,
	easeIn: oa,
	easeInOut: ca,
	easeOut: sa,
	circIn: ga,
	circInOut: va,
	circOut: _a,
	backIn: pa,
	backInOut: ma,
	backOut: fa,
	anticipate: ha
}, xa = (e) => typeof e == "string", Sa = (e) => {
	if (ya(e)) {
		en(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
		let [t, n, r, i] = e;
		return aa(t, n, r, i);
	}
	return xa(e) ? (en(ba[e] !== void 0, `Invalid easing type '${e}'`), ba[e]) : e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/keyframes.mjs
function Ca(e, t) {
	return e.map(() => t || ca).splice(0, e.length - 1);
}
function wa({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = la(r) ? r.map(Sa) : Sa(r), a = {
		done: !1,
		value: t[0]
	}, o = Zi(ea(n && n.length === t.length ? n : $i(t), e), t, { ease: Array.isArray(i) ? i : Ca(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Ta = (e) => e !== null;
function Ea(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Ta), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Da = {
	decay: Ji,
	inertia: Ji,
	tween: wa,
	keyframes: wa,
	spring: qi
};
function Oa(e) {
	typeof e.type == "string" && (e.type = Da[e.type]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/WithPromise.mjs
var ka = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, Aa = (e) => e / 100, ja = class extends ka {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== ur.now() && this.tick(ur.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, Rr.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		Oa(e);
		let { type: t = wa, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || wa;
		process.env.NODE_ENV !== "production" && s !== wa && en(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`), s !== wa && typeof o[0] != "number" && (this.mixKeyframes = Ci(Aa, Ai(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Pi(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.currentTime = this.holdTime === null ? t : this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = _n(0, 1, n) * o;
		}
		let b = _ ? {
			done: !1,
			value: l[0]
		} : y.next(v);
		i && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== Ji && (b.value = Ea(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ Lr(this.calculatedDuration);
	}
	get time() {
		return /* @__PURE__ */ Lr(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ Ir(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		this.updateTime(ur.now());
		let t = this.playbackSpeed !== e;
		this.playbackSpeed = e, t && (this.time = /* @__PURE__ */ Lr(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = ji, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(ur.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Rr.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function Ma(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/dom/parse-transform.mjs
var Na = (e) => e * 180 / Math.PI, Pa = (e) => Ia(Na(Math.atan2(e[1], e[0]))), Fa = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: Pa,
	rotateZ: Pa,
	skewX: (e) => Na(Math.atan(e[1])),
	skewY: (e) => Na(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Ia = (e) => (e %= 360, e < 0 && (e += 360), e), La = Pa, Ra = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), za = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Ba = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Ra,
	scaleY: za,
	scale: (e) => (Ra(e) + za(e)) / 2,
	rotateX: (e) => Ia(Na(Math.atan2(e[6], e[5]))),
	rotateY: (e) => Ia(Na(Math.atan2(-e[2], e[0]))),
	rotateZ: La,
	rotate: La,
	skewX: (e) => Na(Math.atan(e[4])),
	skewY: (e) => Na(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Va(e) {
	return +!!e.includes("scale");
}
function Ha(e, t) {
	if (!e || e === "none") return Va(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = Ba, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = Fa, i = t;
	}
	if (!i) return Va(t);
	let a = r[t], o = i[1].split(",").map(Wa);
	return typeof a == "function" ? a(o) : o[a];
}
var Ua = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return Ha(n, t);
};
function Wa(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var Ga = (e) => e === vn || e === H, Ka = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), qa = pn.filter((e) => !Ka.has(e));
function Ja(e) {
	let t = [];
	return qa.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var Ya = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => Ha(t, "x"),
	y: (e, { transform: t }) => Ha(t, "y")
};
Ya.translateX = Ya.x, Ya.translateY = Ya.y;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var Xa = /* @__PURE__ */ new Set(), Za = !1, Qa = !1, $a = !1;
function eo() {
	if (Qa) {
		let e = Array.from(Xa).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Ja(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Qa = !1, Za = !1, Xa.forEach((e) => e.complete($a)), Xa.clear();
}
function to() {
	Xa.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Qa = !0);
	});
}
function no() {
	$a = !0, to(), eo(), $a = !1;
}
var ro = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (Xa.add(this), Za || (Za = !0, V.read(to), V.resolveKeyframes(eo))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		Ma(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Xa.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (Xa.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, io = (e) => e.startsWith("--");
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/dom/style-set.mjs
function ao(e, t, n) {
	io(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function oo(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var so = /* @__PURE__ */ oo(() => window.ScrollTimeline !== void 0), co = {};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/memo.mjs
function lo(e, t) {
	let n = /* @__PURE__ */ oo(e);
	return () => co[t] ?? n();
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs
var uo = /*@__PURE__*/ lo(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), fo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, po = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ fo([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ fo([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ fo([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ fo([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mo(e, t) {
	if (e) return typeof e == "function" ? uo() ? Mi(e, t) : "ease-out" : ya(e) ? fo(e) : Array.isArray(e) ? e.map((e) => mo(e, t) || po.easeOut) : po[e];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function ho(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = mo(s, i);
	Array.isArray(d) && (u.easing = d), at.value && Rr.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return at.value && p.finished.finally(() => {
		Rr.waapi--;
	}), p;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function go(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function _o({ type: e, ...t }) {
	return go(e) && uo() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/NativeAnimation.mjs
var vo = class extends ka {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, en(typeof e.type != "string", "animateMini doesn't support \"type\" as a string. Did you mean to import { spring } from \"motion\"?");
		let c = _o(e);
		this.animation = ho(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Ea(r, this.options, o, this.speed);
				this.updateMotionValue ? this.updateMotionValue(e) : ao(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e !== "idle" && e !== "finished" && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		this.isPseudoElement || this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ Lr(Number(e));
	}
	get time() {
		return /* @__PURE__ */ Lr(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ir(e);
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return Number(this.animation.startTime);
	}
	set startTime(e) {
		this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, observe: t }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && so() ? (this.animation.timeline = e, ut) : t(this);
	}
}, yo = {
	anticipate: ha,
	backInOut: ma,
	circInOut: va
};
function bo(e) {
	return e in yo;
}
function xo(e) {
	typeof e.ease == "string" && bo(e.ease) && (e.ease = yo[e.ease]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var So = 10, Co = class extends vo {
	constructor(e) {
		xo(e), Oa(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new ja({
			...a,
			autoplay: !1
		}), s = /* @__PURE__ */ Ir(this.finishedTime ?? this.time);
		t.setWithVelocity(o.sample(s - So).value, o.sample(s).value, So), o.stop();
	}
}, wo = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (di.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/can-animate.mjs
function To(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Eo(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = wo(i, t), s = wo(a, t);
	return $t(o === s, `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`), !o || !s ? !1 : To(e) || (n === "spring" || go(n)) && r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var Do = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Oo = /*@__PURE__*/ oo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ko(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o } = e;
	if (!qe(t?.owner?.current)) return !1;
	let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
	return Oo() && n && Do.has(n) && (n !== "transform" || !c) && !s && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var Ao = 40, jo = class extends ka {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = ur.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || ro;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = ur.now(), Eo(e, i, a, o) || ((st.instantAnimations || !s) && l?.(Ea(e, n, t)), e[0] = e[e.length - 1], n.duration = 0, n.repeat = 0);
		let u = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > Ao ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, d = !c && ko(u) ? new Co({
			...u,
			element: u.motionValue.owner.current
		}) : new ja(u);
		d.finished.then(() => this.notifyFinished()).catch(ut), this.pendingTimeline &&= (this.stopTimeline = d.attachTimeline(this.pendingTimeline), void 0), this._animation = d;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), no()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
}, Mo = (e, t, n, r = {}, i, a) => (o) => {
	let s = Fr(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ Ir(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	Pr(s) || Object.assign(u, Nr(e, u)), u.duration &&= /* @__PURE__ */ Ir(u.duration), u.repeatDelay &&= /* @__PURE__ */ Ir(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), (st.instantAnimations || st.skipAnimations) && (d = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Or(u.keyframes, s);
		if (e !== void 0) {
			V.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new ja(u) : new jo(u);
}, No = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...pn
]);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function Po({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Fo(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
	r && (a = r);
	let c = [], l = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || l && Po(l, t)) continue;
		let o = {
			delay: n,
			...Fr(a || {}, t)
		}, u = r.get();
		if (u !== void 0 && !r.isAnimating && !Array.isArray(i) && i === u && !o.velocity) continue;
		let d = !1;
		if (window.MotionHandoffAnimation) {
			let n = Er(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, V);
				e !== null && (o.startTime = e, d = !0);
			}
		}
		Tr(e, t), r.start(Mo(t, r, i, e.shouldReduceMotion && No.has(t) ? { type: !1 } : o, e, d));
		let f = r.animation;
		f && c.push(f);
	}
	return o && Promise.all(c).then(() => {
		V.update(() => {
			o && Cr(e, o);
		});
	}), c;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function Io(e, t, n = {}) {
	let r = or(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Fo(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Lo(e, t, a + r, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	}
	return Promise.all([a(), o(n.delay)]);
}
function Lo(e, t, n = 0, r = 0, i = 1, a) {
	let o = [], s = (e.variantChildren.size - 1) * r, c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
	return Array.from(e.variantChildren).sort(Ro).forEach((e, r) => {
		e.notify("AnimationStart", t), o.push(Io(e, t, {
			...a,
			delay: n + c(r)
		}).then(() => e.notify("AnimationComplete", t)));
	}), Promise.all(o);
}
function Ro(e, t) {
	return e.sortNodePosition(t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function zo(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Io(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Io(e, t, n);
	else {
		let i = typeof t == "function" ? or(e, t, n.custom) : t;
		r = Promise.all(Fo(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/shallow-compare.mjs
function Bo(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/get-variant-context.mjs
var Vo = It.length;
function Ho(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Ho(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Vo; n++) {
		let r = It[n], i = e.props[r];
		(Pt(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/animation-state.mjs
var Uo = [...Ft].reverse(), Wo = Ft.length;
function Go(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => zo(e, t, n)));
}
function Ko(e) {
	let t = Go(e), n = Yo(), r = !0, i = (t) => (n, r) => {
		let i = or(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function a(n) {
		t = n(e);
	}
	function o(a) {
		let { props: o } = e, s = Ho(e.parent) || {}, c = [], l = /* @__PURE__ */ new Set(), u = {}, d = Infinity;
		for (let t = 0; t < Wo; t++) {
			let f = Uo[t], p = n[f], m = o[f] === void 0 ? s[f] : o[f], h = Pt(m), g = f === a ? p.isActive : null;
			g === !1 && (d = t);
			let _ = m === s[f] && m !== o[f] && h;
			if (_ && r && e.manuallyAnimateOnMount && (_ = !1), p.protectedKeys = { ...u }, !p.isActive && g === null || !m && !p.prevProp || Nt(m) || typeof m == "boolean") continue;
			let v = qo(p.prevProp, m), y = v || f === a && p.isActive && !_ && h || t > d && h, b = !1, x = Array.isArray(m) ? m : [m], S = x.reduce(i(f), {});
			g === !1 && (S = {});
			let { prevResolvedValues: C = {} } = p, ee = {
				...C,
				...S
			}, w = (t) => {
				y = !0, l.has(t) && (b = !0, l.delete(t)), p.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in ee) {
				let t = S[e], n = C[e];
				if (u.hasOwnProperty(e)) continue;
				let r = !1;
				r = sr(t) && sr(n) ? !Bo(t, n) : t !== n, r ? t == null ? l.add(e) : w(e) : t !== void 0 && l.has(e) ? w(e) : p.protectedKeys[e] = !0;
			}
			p.prevProp = m, p.prevResolvedValues = S, p.isActive && (u = {
				...u,
				...S
			}), r && e.blockInitialAnimation && (y = !1), y && (!(_ && v) || b) && c.push(...x.map((e) => ({
				animation: e,
				options: { type: f }
			})));
		}
		if (l.size) {
			let t = {};
			if (typeof o.initial != "boolean") {
				let n = or(e, Array.isArray(o.initial) ? o.initial[0] : o.initial);
				n && n.transition && (t.transition = n.transition);
			}
			l.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), c.push({ animation: t });
		}
		let f = !!c.length;
		return r && (o.initial === !1 || o.initial === o.animate) && !e.manuallyAnimateOnMount && (f = !1), r = !1, f ? t(c) : Promise.resolve();
	}
	function s(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = o(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: o,
		setActive: s,
		setAnimateFunction: a,
		getState: () => n,
		reset: () => {
			n = Yo(), r = !0;
		}
	};
}
function qo(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Bo(t, e) : !1;
}
function Jo(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Yo() {
	return {
		animate: Jo(!0),
		whileInView: Jo(),
		whileHover: Jo(),
		whileTap: Jo(),
		whileDrag: Jo(),
		whileFocus: Jo(),
		exit: Jo()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/Feature.mjs
var Xo = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
}, Zo = class extends Xo {
	constructor(e) {
		super(e), e.animationState ||= Ko(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		Nt(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, Qo = 0, $o = {
	animation: { Feature: Zo },
	exit: { Feature: class extends Xo {
		constructor() {
			super(...arguments), this.id = Qo++;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/events/add-dom-event.mjs
function es(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var ts = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/events/event-info.mjs
function ns(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var rs = (e) => (t) => ts(t) && e(t, ns(t));
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/events/add-pointer-event.mjs
function is(e, t, n, r) {
	return es(e, t, rs(n), r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs
function as({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function os({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function ss(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var cs = .9999, ls = 1.0001, us = -.01, ds = .01;
function fs(e) {
	return e.max - e.min;
}
function ps(e, t, n) {
	return Math.abs(e - t) <= n;
}
function ms(e, t, n, r = .5) {
	e.origin = r, e.originPoint = U(t.min, t.max, e.origin), e.scale = fs(n) / fs(t), e.translate = U(n.min, n.max, e.origin) - e.originPoint, (e.scale >= cs && e.scale <= ls || isNaN(e.scale)) && (e.scale = 1), (e.translate >= us && e.translate <= ds || isNaN(e.translate)) && (e.translate = 0);
}
function hs(e, t, n, r) {
	ms(e.x, t.x, n.x, r ? r.originX : void 0), ms(e.y, t.y, n.y, r ? r.originY : void 0);
}
function gs(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + fs(t);
}
function _s(e, t, n) {
	gs(e.x, t.x, n.x), gs(e.y, t.y, n.y);
}
function vs(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + fs(t);
}
function ys(e, t, n) {
	vs(e.x, t.x, n.x), vs(e.y, t.y, n.y);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs
var bs = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), xs = () => ({
	x: bs(),
	y: bs()
}), Ss = () => ({
	min: 0,
	max: 0
}), G = () => ({
	x: Ss(),
	y: Ss()
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/each-axis.mjs
function Cs(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs
function ws(e) {
	return e === void 0 || e === 1;
}
function Ts({ scale: e, scaleX: t, scaleY: n }) {
	return !ws(e) || !ws(t) || !ws(n);
}
function Es(e) {
	return Ts(e) || Ds(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ds(e) {
	return Os(e.x) || Os(e.y);
}
function Os(e) {
	return e && e !== "0%";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function ks(e, t, n) {
	return n + t * (e - n);
}
function As(e, t, n, r, i) {
	return i !== void 0 && (e = ks(e, i, r)), ks(e, n, r) + t;
}
function js(e, t = 0, n = 1, r, i) {
	e.min = As(e.min, t, n, r, i), e.max = As(e.max, t, n, r, i);
}
function Ms(e, { x: t, y: n }) {
	js(e.x, t.translate, t.scale, t.originPoint), js(e.y, n.translate, n.scale, n.originPoint);
}
var Ns = .999999999999, Ps = 1.0000000000001;
function Fs(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && Rs(e, {
			x: -a.scroll.offset.x,
			y: -a.scroll.offset.y
		}), o && (t.x *= o.x.scale, t.y *= o.y.scale, Ms(e, o)), r && Es(a.latestValues) && Rs(e, a.latestValues));
	}
	t.x < Ps && t.x > Ns && (t.x = 1), t.y < Ps && t.y > Ns && (t.y = 1);
}
function Is(e, t) {
	e.min += t, e.max += t;
}
function Ls(e, t, n, r, i = .5) {
	js(e, t, n, U(e.min, e.max, i), r);
}
function Rs(e, t) {
	Ls(e.x, t.x, t.scaleX, t.scale, t.originX), Ls(e.y, t.y, t.scaleY, t.scale, t.originY);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs
function zs(e, t) {
	return as(ss(e.getBoundingClientRect(), t));
}
function Bs(e, t, n) {
	let r = zs(e, n), { scroll: i } = t;
	return i && (Is(r.x, i.offset.x), Is(r.y, i.offset.y)), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/get-context-window.mjs
var Vs = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Hs = (e, t) => Math.abs(e - t);
function Us(e, t) {
	let n = Hs(e.x, t.x), r = Hs(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/pan/PanSession.mjs
var Ws = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let e = qs(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Us(e.offset, {
				x: 0,
				y: 0
			}) >= 3;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = ft;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastMoveEventInfo = Gs(t, this.transformPagePoint), V.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = qs(e.type === "pointercancel" ? this.lastMoveEventInfo : Gs(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !ts(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || window;
		let a = Gs(ns(e), this.transformPagePoint), { point: o } = a, { timestamp: s } = ft;
		this.history = [{
			...o,
			timestamp: s
		}];
		let { onSessionStart: c } = t;
		c && c(e, qs(a, this.history)), this.removeListeners = Ci(is(this.contextWindow, "pointermove", this.handlePointerMove), is(this.contextWindow, "pointerup", this.handlePointerUp), is(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), dt(this.updatePoint);
	}
};
function Gs(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Ks(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function qs({ point: e }, t) {
	return {
		point: e,
		delta: Ks(e, Ys(t)),
		offset: Ks(e, Js(t)),
		velocity: Xs(t, .1)
	};
}
function Js(e) {
	return e[0];
}
function Ys(e) {
	return e[e.length - 1];
}
function Xs(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = Ys(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ Ir(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	let a = /* @__PURE__ */ Lr(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function Zs(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? U(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? U(n, e, r.max) : Math.min(e, n)), e;
}
function Qs(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function $s(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: Qs(e.x, n, i),
		y: Qs(e.y, t, r)
	};
}
function ec(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function tc(e, t) {
	return {
		x: ec(e.x, t.x),
		y: ec(e.y, t.y)
	};
}
function nc(e, t) {
	let n = .5, r = fs(e), i = fs(t);
	return i > r ? n = /* @__PURE__ */ Yi(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Yi(e.min, e.max - i, t.min)), _n(0, 1, n);
}
function rc(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var ic = .35;
function ac(e = ic) {
	return e === !1 ? e = 0 : e === !0 && (e = ic), {
		x: oc(e, "left", "right"),
		y: oc(e, "top", "bottom")
	};
}
function oc(e, t, n) {
	return {
		min: sc(e, t),
		max: sc(e, n)
	};
}
function sc(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var cc = {
	x: !1,
	y: !1
};
function lc() {
	return cc.x || cc.y;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function uc(e) {
	return e === "x" || e === "y" ? cc[e] ? null : (cc[e] = !0, () => {
		cc[e] = !1;
	}) : cc.x || cc.y ? null : (cc.x = cc.y = !0, () => {
		cc.x = cc.y = !1;
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var dc = /* @__PURE__ */ new WeakMap(), fc = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = G(), this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1 } = {}) {
		let { presenceContext: n } = this.visualElement;
		if (n && n.isPresent === !1) return;
		let r = (e) => {
			let { dragSnapToOrigin: n } = this.getProps();
			n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(ns(e).point);
		}, i = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = uc(n), !this.openDragLock)) return;
			this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Cs((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (wn.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = fs(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && V.postRender(() => i(e, t)), Tr(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, a = (e, t) => {
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = mc(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && a(e, t);
		}, o = (e, t) => this.stop(e, t), s = () => Cs((e) => this.getAnimationState(e) === "paused" && this.getAxisMotionValue(e).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
		this.panSession = new Ws(e, {
			onSessionStart: r,
			onStart: i,
			onMove: a,
			onSessionEnd: o,
			resumeAnimation: s
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: c,
			contextWindow: Vs(this.visualElement)
		});
	}
	stop(e, t) {
		let n = this.isDragging;
		if (this.cancel(), !n) return;
		let { velocity: r } = t;
		this.startAnimation(r);
		let { onDragEnd: i } = this.getProps();
		i && V.postRender(() => i(e, t));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !pc(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = Zs(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && Ut(e) ? this.constraints ||= this.resolveRefConstraints() : this.constraints = e && n ? $s(n.layoutBox, e) : !1, this.elastic = ac(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Cs((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = rc(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !Ut(e)) return !1;
		let n = e.current;
		en(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = Bs(n, r.root, this.visualElement.getTransformPagePoint()), a = tc(r.layout.layoutBox, i);
		if (t) {
			let e = t(os(a));
			this.hasMutatedConstraints = !!e, e && (a = as(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = Cs((o) => {
			if (!pc(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			a && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return Tr(this.visualElement, e), n.start(Mo(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		Cs((e) => this.getAxisMotionValue(e).stop());
	}
	pauseAnimation() {
		Cs((e) => this.getAxisMotionValue(e).animation?.pause());
	}
	getAnimationState(e) {
		return this.getAxisMotionValue(e).animation?.state;
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		Cs((t) => {
			let { drag: n } = this.getProps();
			if (!pc(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t];
				i.set(e[t] - U(n, a, .5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!Ut(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		Cs((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = nc({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Cs((t) => {
			if (!pc(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(U(i, a, r[t]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		dc.set(this.visualElement, this);
		let e = this.visualElement.current, t = is(e, "pointerdown", (e) => {
			let { drag: t, dragListener: n = !0 } = this.getProps();
			t && n && this.start(e);
		}), n = () => {
			let { dragConstraints: e } = this.getProps();
			Ut(e) && e.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: r } = this.visualElement, i = r.addEventListener("measure", n);
		r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), V.read(n);
		let a = es(window, "resize", () => this.scalePositionWithinConstraints()), o = r.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (Cs((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			a(), t(), i(), o && o();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = ic, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function pc(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function mc(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/index.mjs
var hc = class extends Xo {
	constructor(e) {
		super(e), this.removeGroupControls = ut, this.removeListeners = ut, this.controls = new fc(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ut;
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, gc = (e) => (t, n) => {
	e && V.postRender(() => e(t, n));
}, _c = class extends Xo {
	constructor() {
		super(...arguments), this.removePointerDownListener = ut;
	}
	onPointerDown(e) {
		this.session = new Ws(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Vs(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: gc(e),
			onStart: gc(t),
			onMove: n,
			onEnd: (e, t) => {
				delete this.session, r && V.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = is(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, vc = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function yc(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var bc = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") {
		if (H.test(e)) e = parseFloat(e);
		else return e;
	}
	return `${yc(e, t.target.x)}% ${yc(e, t.target.y)}%`;
} }, xc = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = di.parse(e);
	if (i.length > 5) return r;
	let a = di.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = U(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, Sc = class extends ne {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		fn(wc), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			onExitComplete: () => this.safeToRemove()
		})), vc.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || V.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: e } = this.props.visualElement;
		e && (e.root.didUpdate(), Jt.postRender(() => {
			!e.currentAnimation && e.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Cc(e) {
	let [t, n] = Qe(), r = j(Be);
	return I(Sc, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: j(qt),
		isPresent: t,
		safeToRemove: n
	});
}
var wc = {
	borderRadius: {
		...bc,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: bc,
	borderTopRightRadius: bc,
	borderBottomLeftRadius: bc,
	borderBottomRightRadius: bc,
	boxShadow: xc
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs
function Tc(e, t, n) {
	let r = Pn(e) ? e : br(e);
	return r.start(Mo("", r, t, n)), r.animation;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var Ec = (e, t) => e.depth - t.depth, Dc = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		dr(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		fr(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(Ec), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/delay.mjs
function Oc(e, t) {
	let n = ur.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (dt(r), e(a - t));
	};
	return V.setup(r, !0), () => dt(r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/animation/mix-values.mjs
var kc = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], Ac = kc.length, jc = (e) => typeof e == "string" ? parseFloat(e) : e, Mc = (e) => typeof e == "number" || H.test(e);
function Nc(e, t, n, r, i, a) {
	i ? (e.opacity = U(0, n.opacity ?? 1, Fc(r)), e.opacityExit = U(t.opacity ?? 1, 0, Ic(r))) : a && (e.opacity = U(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < Ac; i++) {
		let a = `border${kc[i]}Radius`, o = Pc(t, a), s = Pc(n, a);
		(o !== void 0 || s !== void 0) && (o ||= 0, s ||= 0, o === 0 || s === 0 || Mc(o) === Mc(s) ? (e[a] = Math.max(U(jc(o), jc(s), r), 0), (wn.test(s) || wn.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, r));
}
function Pc(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Fc = /*@__PURE__*/ Lc(0, .5, _a), Ic = /*@__PURE__*/ Lc(.5, .95, ut);
function Lc(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Yi(e, t, r));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/copy.mjs
function Rc(e, t) {
	e.min = t.min, e.max = t.max;
}
function zc(e, t) {
	Rc(e.x, t.x), Rc(e.y, t.y);
}
function Bc(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function Vc(e, t, n, r, i) {
	return e -= t, e = ks(e, 1 / n, r), i !== void 0 && (e = ks(e, 1 / i, r)), e;
}
function Hc(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (wn.test(t) && (t = parseFloat(t), t = U(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = U(a.min, a.max, r);
	e === a && (s -= t), e.min = Vc(e.min, t, n, s, i), e.max = Vc(e.max, t, n, s, i);
}
function Uc(e, t, [n, r, i], a, o) {
	Hc(e, t[n], t[r], t[i], t.scale, a, o);
}
var Wc = [
	"x",
	"scaleX",
	"originX"
], Gc = [
	"y",
	"scaleY",
	"originY"
];
function Kc(e, t, n, r) {
	Uc(e.x, t, Wc, n ? n.x : void 0, r ? r.x : void 0), Uc(e.y, t, Gc, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/utils.mjs
function qc(e) {
	return e.translate === 0 && e.scale === 1;
}
function Jc(e) {
	return qc(e.x) && qc(e.y);
}
function Yc(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Xc(e, t) {
	return Yc(e.x, t.x) && Yc(e.y, t.y);
}
function Zc(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Qc(e, t) {
	return Zc(e.x, t.x) && Zc(e.y, t.y);
}
function $c(e) {
	return fs(e.x) / fs(e.y);
}
function el(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/shared/stack.mjs
var tl = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		dr(this.members, e), e.scheduleRender();
	}
	remove(e) {
		if (fr(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		let t = this.members.findIndex((t) => e === t);
		if (t === 0) return !1;
		let n;
		for (let e = t; e >= 0; e--) {
			let t = this.members[e];
			if (t.isPresent !== !1) {
				n = t;
				break;
			}
		}
		return n ? (this.promote(n), !0) : !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
			let { crossfade: r } = e.options;
			r === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			let { options: t, resumingFrom: n } = e;
			t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => {
			e.instance && e.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/transform.mjs
function nl(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), s && (r += `skewY(${s}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-svg-element.mjs
function rl(e) {
	return Ke(e) && "ownerSVGElement" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function il(e) {
	return rl(e) && e.tagName === "svg";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/create-projection-node.mjs
var al = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, ol = [
	"",
	"X",
	"Y",
	"Z"
], sl = { visibility: "hidden" }, cl = 1e3, ll = 0;
function ul(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function dl(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = Er(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", V, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && dl(r);
}
function fl({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = ll++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, at.value && (al.nodes = al.calculatedTargetDeltas = al.calculatedProjections = 0), this.nodes.forEach(hl), this.nodes.forEach(Sl), this.nodes.forEach(Cl), this.nodes.forEach(gl), at.addProjectionMetrics && at.addProjectionMetrics(al);
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Dc());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new mr()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = rl(t) && !il(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = () => this.root.updateBlockedByResize = !1;
				e(t, () => {
					this.root.updateBlockedByResize = !0, n && n(), n = Oc(r, 250), vc.hasAnimatedSinceResize && (vc.hasAnimatedSinceResize = !1, this.nodes.forEach(xl));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || Al, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !Qc(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Fr(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l);
				} else t || xl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), dt(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(wl), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && dl(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vl);
				return;
			}
			this.isUpdating || this.nodes.forEach(yl), this.isUpdating = !1, this.nodes.forEach(bl), this.nodes.forEach(pl), this.nodes.forEach(ml), this.clearAllSnapshots();
			let e = ur.now();
			ft.delta = _n(0, 1e3 / 60, e - ft.timestamp), ft.timestamp = e, ft.isProcessing = !0, pt.update.process(ft), pt.preRender.process(ft), pt.render.process(ft), ft.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, Jt.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(_l), this.sharedNodes.forEach(Tl);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			V.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			!this.snapshot && this.instance && (this.snapshot = this.measure(), this.snapshot && !fs(this.snapshot.measuredBox.x) && !fs(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutCorrected = G(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !Jc(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Es(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), Pl(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return G();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Il))) {
				let { scroll: e } = this.root;
				e && (Is(t.x, e.offset.x), Is(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = G();
			if (zc(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && zc(t, e), Is(t.x, i.offset.x), Is(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1) {
			let n = G();
			zc(n, e);
			for (let e = 0; e < this.path.length; e++) {
				let r = this.path[e];
				!t && r.options.layoutScroll && r.scroll && r !== r.root && Rs(n, {
					x: -r.scroll.offset.x,
					y: -r.scroll.offset.y
				}), Es(r.latestValues) && Rs(n, r.latestValues);
			}
			return Es(this.latestValues) && Rs(n, this.latestValues), n;
		}
		removeTransform(e) {
			let t = G();
			zc(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!n.instance || !Es(n.latestValues)) continue;
				Ts(n.latestValues) && n.updateSnapshot();
				let r = G();
				zc(r, n.measurePageBox()), Kc(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
			}
			return Es(this.latestValues) && Kc(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 || e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ft.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.layout && (r || i)) {
				if (this.resolvedRelativeTargetAt = ft.timestamp, !this.targetDelta && !this.relativeTarget) {
					let e = this.getClosestProjectingParent();
					e && e.layout && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = G(), this.relativeTargetOrigin = G(), ys(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), zc(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
				}
				if (this.relativeTarget || this.targetDelta) {
					if (this.target || (this.target = G(), this.targetWithTransforms = G()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), _s(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : zc(this.target, this.layout.layoutBox), Ms(this.target, this.targetDelta)) : zc(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
						this.attemptToResolveRelativeTarget = !1;
						let e = this.getClosestProjectingParent();
						e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = G(), this.relativeTargetOrigin = G(), ys(this.relativeTargetOrigin, this.target, e.target), zc(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
					}
					at.value && al.calculatedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Ts(this.parent.latestValues) || Ds(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === ft.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			zc(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			Fs(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = G());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Bc(this.prevProjectionDelta.x, this.projectionDelta.x), Bc(this.prevProjectionDelta.y, this.projectionDelta.y)), hs(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !el(this.projectionDelta.x, this.prevProjectionDelta.x) || !el(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), at.value && al.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = xs(), this.projectionDelta = xs(), this.projectionDeltaWithTransform = xs();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = xs();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = G(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !(!s || l || this.options.crossfade !== !0 || this.path.some(kl));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				El(a.x, e.x, n), El(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ys(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ol(this.relativeTarget, this.relativeTargetOrigin, o, n), d && Xc(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= G(), zc(d, this.relativeTarget)), s && (this.animationValues = i, Nc(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (dt(this.pendingAnimation), void 0), this.pendingAnimation = V.update(() => {
				vc.hasAnimatedSinceResize = !0, Rr.layout++, this.motionValue ||= br(0), this.currentAnimation = Tc(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						Rr.layout--;
					},
					onComplete: () => {
						Rr.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(cl), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (t && n && r) {
				if (this !== e && this.layout && r && Fl(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || G();
					let t = fs(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = fs(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				zc(t, n), Rs(t, i), hs(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new tl()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return !e || e.lead === this;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && ul("z", e, r, this.animationValues);
			for (let t = 0; t < ol.length; t++) ul(`rotate${ol[t]}`, e, r, this.animationValues), ul(`skew${ol[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		getProjectionStyles(e) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return sl;
			let t = { visibility: "" }, n = this.getTransformTemplate();
			if (this.needsReset) return this.needsReset = !1, t.opacity = "", t.pointerEvents = Zn(e?.pointerEvents) || "", t.transform = n ? n(this.latestValues, "") : "none", t;
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				let t = {};
				return this.options.layoutId && (t.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, t.pointerEvents = Zn(e?.pointerEvents) || ""), this.hasProjected && !Es(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1), t;
			}
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget(), t.transform = nl(this.projectionDeltaWithTransform, this.treeScale, i), n && (t.transform = n(i, t.transform));
			let { x: a, y: o } = this.projectionDelta;
			t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`, t.opacity = r.animationValues ? r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let e in dn) {
				if (i[e] === void 0) continue;
				let { correct: n, applyTo: a, isCSSVariable: o } = dn[e], s = t.transform === "none" ? i[e] : n(i[e], r);
				if (a) {
					let e = a.length;
					for (let n = 0; n < e; n++) t[a[n]] = s;
				} else o ? this.options.visualElement.renderState.vars[e] = s : t[e] = s;
			}
			return this.options.layoutId && (t.pointerEvents = r === this ? Zn(e?.pointerEvents) || "" : "none"), t;
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(vl), this.root.sharedNodes.clear();
		}
	};
}
function pl(e) {
	e.updateLayout();
}
function ml(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		i === "size" ? Cs((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = fs(r);
			r.min = n[e].min, r.max = r.min + i;
		}) : Fl(i, t.layoutBox, n) && Cs((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = fs(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = xs();
		hs(o, n, t.layoutBox);
		let s = xs();
		a ? hs(s, e.applyTransform(r, !0), t.measuredBox) : hs(s, n, t.layoutBox);
		let c = !Jc(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = G();
					ys(o, t.layoutBox, i.layoutBox);
					let s = G();
					ys(s, n, a.layoutBox), Qc(o, s) || (l = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = o, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function hl(e) {
	at.value && al.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function gl(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function _l(e) {
	e.clearSnapshot();
}
function vl(e) {
	e.clearMeasurements();
}
function yl(e) {
	e.isLayoutDirty = !1;
}
function bl(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function xl(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Sl(e) {
	e.resolveTargetDelta();
}
function Cl(e) {
	e.calcProjection();
}
function wl(e) {
	e.resetSkewAndRotation();
}
function Tl(e) {
	e.removeLeadSnapshot();
}
function El(e, t, n) {
	e.translate = U(t.translate, 0, n), e.scale = U(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Dl(e, t, n, r) {
	e.min = U(t.min, n.min, r), e.max = U(t.max, n.max, r);
}
function Ol(e, t, n, r) {
	Dl(e.x, t.x, n.x, r), Dl(e.y, t.y, n.y, r);
}
function kl(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Al = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, jl = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ml = jl("applewebkit/") && !jl("chrome/") ? Math.round : ut;
function Nl(e) {
	e.min = Ml(e.min), e.max = Ml(e.max);
}
function Pl(e) {
	Nl(e.x), Nl(e.y);
}
function Fl(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !ps($c(t), $c(n), .2);
}
function Il(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var Ll = fl({
	attachResizeListener: (e, t) => es(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), Rl = { current: void 0 }, zl = fl({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!Rl.current) {
			let e = new Ll({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), Rl.current = e;
		}
		return Rl.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Bl = {
	pan: { Feature: _c },
	drag: {
		Feature: hc,
		ProjectionNode: zl,
		MeasureLayout: Cc
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs
function Vl(e, t, n) {
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/setup.mjs
function Hl(e, t) {
	let n = Vl(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/hover.mjs
function Ul(e) {
	return !(e.pointerType === "touch" || lc());
}
function Wl(e, t, n = {}) {
	let [r, i, a] = Hl(e, n), o = (e) => {
		if (!Ul(e)) return;
		let { target: n } = e, r = t(n, e);
		if (typeof r != "function" || !n) return;
		let a = (e) => {
			Ul(e) && (r(e), n.removeEventListener("pointerleave", a));
		};
		n.addEventListener("pointerleave", a, i);
	};
	return r.forEach((e) => {
		e.addEventListener("pointerenter", o, i);
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/hover.mjs
function Gl(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && V.postRender(() => i(t, ns(t)));
}
var Kl = class extends Xo {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = Wl(e, (e, t) => (Gl(this.node, t, "Start"), (e) => Gl(this.node, e, "End"))));
	}
	unmount() {}
}, ql = class extends Xo {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = Ci(es(this.node.current, "focus", () => this.onFocus()), es(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
}, Jl = (e, t) => t ? e === t || Jl(e, t.parentElement) : !1, Yl = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function Xl(e) {
	return Yl.has(e.tagName) || e.tabIndex !== -1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/state.mjs
var Zl = /* @__PURE__ */ new WeakSet();
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function Ql(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function $l(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var eu = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = Ql(() => {
		if (Zl.has(n)) return;
		$l(n, "down");
		let e = Ql(() => {
			$l(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => $l(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/index.mjs
function tu(e) {
	return ts(e) && !lc();
}
function nu(e, t, n = {}) {
	let [r, i, a] = Hl(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!tu(e)) return;
		Zl.add(r);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), Zl.has(r) && Zl.delete(r), tu(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || Jl(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), qe(e) && (e.addEventListener("focus", (e) => eu(e, i)), !Xl(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/press.mjs
function ru(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && V.postRender(() => i(t, ns(t)));
}
var iu = class extends Xo {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = nu(e, (e, t) => (ru(this.node, t, "Start"), (e, { success: t }) => ru(this.node, e, t ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, au = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap(), su = (e) => {
	let t = au.get(e.target);
	t && t(e);
}, cu = (e) => {
	e.forEach(su);
};
function lu({ root: e, ...t }) {
	let n = e || document;
	ou.has(n) || ou.set(n, {});
	let r = ou.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(cu, {
		root: e,
		...t
	})), r[i];
}
function uu(e, t, n) {
	let r = lu(t);
	return au.set(e, n), r.observe(e), () => {
		au.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/viewport/index.mjs
var du = {
	some: 0,
	all: 1
}, fu = class extends Xo {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.unmount();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : du[r]
		};
		return uu(this.node.current, a, (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(pu(e, t)) && this.startObserver();
	}
	unmount() {}
};
function pu({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/gestures.mjs
var mu = {
	inView: { Feature: fu },
	tap: { Feature: iu },
	focus: { Feature: ql },
	hover: { Feature: Kl }
}, hu = { layout: {
	ProjectionNode: zl,
	MeasureLayout: Cc
} }, gu = { current: null }, _u = { current: !1 };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs
function vu() {
	if (_u.current = !0, He) {
		if (window.matchMedia) {
			let e = window.matchMedia("(prefers-reduced-motion)"), t = () => gu.current = e.matches;
			e.addListener(t), t();
		} else gu.current = !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs
var yu = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs
function bu(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (Pn(i)) e.addValue(r, i);
		else if (Pn(a)) e.addValue(r, br(i, { owner: e }));
		else if (a !== i) {
			if (e.hasValue(r)) {
				let t = e.getValue(r);
				t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
			} else {
				let t = e.getStaticValue(r);
				e.addValue(r, br(t === void 0 ? i : t, { owner: e }));
			}
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/is-numerical-string.mjs
var xu = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Su = (e) => /^0[^.\s]+$/u.test(e), Cu = {
	test: (e) => e === "auto",
	parse: (e) => e
}, wu = (e) => (t) => t.test(e), Tu = [
	vn,
	H,
	wn,
	Cn,
	En,
	Tn,
	Cu
], Eu = (e) => Tu.find(wu(e)), Du = [
	...Tu,
	Zr,
	di
], Ou = (e) => Du.find(wu(e)), ku = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Au(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Br) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!ku.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var ju = /\b([a-z-]*)\(.*?\)/gu, Mu = {
	...di,
	getAnimatableNone: (e) => {
		let t = e.match(ju);
		return t ? t.map(Au).join(" ") : e;
	}
}, Nu = {
	...On,
	color: Zr,
	backgroundColor: Zr,
	outlineColor: Zr,
	fill: Zr,
	stroke: Zr,
	borderColor: Zr,
	borderTopColor: Zr,
	borderRightColor: Zr,
	borderBottomColor: Zr,
	borderLeftColor: Zr,
	filter: Mu,
	WebkitFilter: Mu
}, Pu = (e) => Nu[e];
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/animatable-none.mjs
function Fu(e, t) {
	let n = Pu(e);
	return n !== Mu && (n = di), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs
var Iu = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Lu = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: a }, o = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ro, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = ur.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, V.render(this.render, !1, !0));
		};
		let { latestValues: s, renderState: c } = a;
		this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = t.initial ? { ...s } : {}, this.renderState = c, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!i, this.isControllingVariants = Lt(t), this.isVariantNode = Rt(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in u) {
			let t = u[e];
			s[e] !== void 0 && Pn(t) && t.set(s[e], !1);
		}
	}
	mount(e) {
		this.current = e, yu.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), _u.current || vu(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" || gu.current, process.env.NODE_ENV !== "production" && At(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		this.projection && this.projection.unmount(), dt(this.notifyUpdate), dt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	bindToMotionValue(e, t) {
		this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
		let n = mn.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && V.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0);
		}), i = t.on("renderRequest", this.scheduleRender), a;
		window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i(), a && a(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in gt) {
			let t = gt[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : G();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < Iu.length; t++) {
			let n = Iu[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = bu(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = br(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (xu(n) || Su(n)) ? n = parseFloat(n) : !Ou(n) && di.test(t) && (n = Fu(e, t)), this.setBaseTarget(e, Pn(n) ? n.get() : n)), Pn(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = Xn(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !Pn(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new mr()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
}, Ru = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function zu(e) {
	let t = Ru.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var Bu = 4;
function Vu(e, t, n = 1) {
	en(n <= Bu, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
	let [r, i] = zu(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return xu(e) ? parseFloat(e) : e;
	}
	return ln(i) ? Vu(i, t, n + 1) : i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Hu(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || Su(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Uu = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function Wu(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Uu.has(t) && oi(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Fu(n, i);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Gu = class extends ro {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), ln(r))) {
				let i = Vu(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !No.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Eu(r), o = Eu(i);
		if (a !== o) {
			if (Ga(a) && Ga(o)) for (let t = 0; t < e.length; t++) {
				let n = e[t];
				typeof n == "string" && (e[t] = parseFloat(n));
			}
			else Ya[n] && (this.needsMeasurement = !0);
		}
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Hu(e[t])) && n.push(t);
		n.length && Wu(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ya[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = Ya[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
}, Ku = class extends Lu {
	constructor() {
		super(...arguments), this.KeyframeResolver = Gu;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		return e.style ? e.style[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		Pn(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs
function qu(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (let t in n) e.style.setProperty(t, n[t]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function Ju(e) {
	return window.getComputedStyle(e);
}
var Yu = class extends Ku {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = qu;
	}
	readValueFromInstance(e, t) {
		if (mn.has(t)) return this.projection?.isProjecting ? Va(t) : Ua(e, t);
		{
			let n = Ju(e), r = (sn(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return zs(e, t);
	}
	build(e, t, n) {
		Mn(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return tr(e, t, n);
	}
}, Xu = /* @__PURE__ */ new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs
function Zu(e, t, n, r) {
	qu(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(Xu.has(n) ? n : Gt(n), t.attrs[n]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var Qu = class extends Ku {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = G;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (mn.has(t)) {
			let e = Pu(t);
			return e && e.default || 0;
		}
		return t = Xu.has(t) ? t : Gt(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return rr(e, t, n);
	}
	build(e, t, n) {
		Hn(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		Zu(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = Wn(e.tagName), super.mount(e);
	}
}, $u = (e, t) => qn(e) ? new Qu(t) : new Yu(t, { allowProjection: e !== re }), ed = /*@__PURE__*/ jt(/* @__PURE__ */ ar({
	...$o,
	...mu,
	...Bl,
	...hu
}, $u)), td = R({
	base: "inline-block shrink-0",
	variants: { size: {
		lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
		md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
		sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm",
		xs: "w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs"
	} },
	defaultVariants: { size: "md" }
}), nd = k(function({ size: e, icon: t, state: n = "normal", color: r = "currentColor", ...i }, a) {
	if (!t) return null;
	let o = t, s = t.displayName?.includes("Animated"), l = r.startsWith("#"), u = ((e) => e === "currentColor" ? "text-current" : e === "default" ? "text-f1-icon" : e.startsWith("#") ? "" : `text-f1-icon-${e}`)(r), d = l ? { color: r } : void 0;
	return s ? /* @__PURE__ */ I(o, {
		ref: a,
		...i,
		animate: n,
		className: c(td({ size: e }), "select-none", u),
		style: d,
		"data-has-color": r === "currentColor" ? void 0 : "true"
	}) : /* @__PURE__ */ I(o, {
		ref: a,
		...i,
		className: c("aspect-square", td({ size: e }), u),
		style: d,
		"data-has-color": r === "currentColor" ? void 0 : "true"
	});
}), rd = Re(Ee({
	name: "F0Icon",
	type: "info"
}, nd)), id = {};
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
	function ee(e) {
		var t = e.getBoundingClientRect();
		e.width = t.width, e.height = t.height;
	}
	function w(e) {
		var t = document.createElement("canvas");
		return t.style.position = "fixed", t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", t.style.zIndex = e, t;
	}
	function T(e, t, n, r, i, a, o, s, c) {
		e.save(), e.translate(t, n), e.rotate(a), e.scale(r, i), e.arc(0, 0, 1, o, s, c), e.restore();
	}
	function E(e) {
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
	function D(e, t) {
		t.x += Math.cos(t.angle2D) * t.velocity + t.drift, t.y += Math.sin(t.angle2D) * t.velocity + t.gravity, t.velocity *= t.decay, t.flat ? (t.wobble = 0, t.wobbleX = t.x + 10 * t.scalar, t.wobbleY = t.y + 10 * t.scalar, t.tiltSin = 0, t.tiltCos = 0, t.random = 1) : (t.wobble += t.wobbleSpeed, t.wobbleX = t.x + 10 * t.scalar * Math.cos(t.wobble), t.wobbleY = t.y + 10 * t.scalar * Math.sin(t.wobble), t.tiltAngle += .1, t.tiltSin = Math.sin(t.tiltAngle), t.tiltCos = Math.cos(t.tiltAngle), t.random = Math.random() + 2);
		var n = t.tick++ / t.totalTicks, r = t.x + t.random * t.tiltCos, i = t.y + t.random * t.tiltSin, a = t.wobbleX + t.random * t.tiltCos, s = t.wobbleY + t.random * t.tiltSin;
		if (e.fillStyle = "rgba(" + t.color.r + ", " + t.color.g + ", " + t.color.b + ", " + (1 - n) + ")", e.beginPath(), o && t.shape.type === "path" && typeof t.shape.path == "string" && Array.isArray(t.shape.matrix)) e.fill(O(t.shape.path, t.shape.matrix, t.x, t.y, Math.abs(a - r) * .1, Math.abs(s - i) * .1, Math.PI / 10 * t.wobble));
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
		} else if (t.shape === "circle") e.ellipse ? e.ellipse(t.x, t.y, Math.abs(a - r) * t.ovalScalar, Math.abs(s - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI) : T(e, t.x, t.y, Math.abs(a - r) * t.ovalScalar, Math.abs(s - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI);
		else if (t.shape === "star") for (var g = Math.PI / 2 * 3, _ = 4 * t.scalar, v = 8 * t.scalar, y = t.x, b = t.y, x = 5, S = Math.PI / x; x--;) y = t.x + Math.cos(g) * v, b = t.y + Math.sin(g) * v, e.lineTo(y, b), g += S, y = t.x + Math.cos(g) * _, b = t.y + Math.sin(g) * _, e.lineTo(y, b), g += S;
		else e.moveTo(Math.floor(t.x), Math.floor(t.y)), e.lineTo(Math.floor(t.wobbleX), Math.floor(i)), e.lineTo(Math.floor(a), Math.floor(s)), e.lineTo(Math.floor(r), Math.floor(t.wobbleY));
		return e.closePath(), e.fill(), t.tick < t.totalTicks;
	}
	function te(e, t, n, a, o) {
		var s = t.slice(), c = e.getContext("2d"), f, p, m = l(function(t) {
			function l() {
				f = p = null, c.clearRect(0, 0, a.width, a.height), u.clear(), o(), t();
			}
			function m() {
				r && (a.width !== i.width || a.height !== i.height) && (a.width = e.width = i.width, a.height = e.height = i.height), !a.width && !a.height && (n(e), a.width = e.width, a.height = e.height), c.clearRect(0, 0, a.width, a.height), s = s.filter(function(e) {
					return D(c, e);
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
	function ne(e, n) {
		var r = !e, i = !!g(n || {}, "resize"), o = !1, s = g(n, "disableForReducedMotion", Boolean), c = a && g(n || {}, "useWorker") ? f() : null, u = r ? C : ee, d = e && c ? !!e.__confetti_initialized : !1, p = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, m;
		function h(t, n, r) {
			for (var i = g(t, "particleCount", _), a = g(t, "angle", Number), o = g(t, "spread", Number), s = g(t, "startVelocity", Number), c = g(t, "decay", Number), l = g(t, "gravity", Number), d = g(t, "drift", Number), f = g(t, "colors", b), p = g(t, "ticks", Number), h = g(t, "shapes"), y = g(t, "scalar"), x = !!g(t, "flat"), C = S(t), ee = i, w = [], T = e.width * C.x, D = e.height * C.y; ee--;) w.push(E({
				x: T,
				y: D,
				angle: a,
				spread: o,
				startVelocity: s,
				color: f[ee % f.length],
				shape: h[v(0, h.length)],
				ticks: p,
				decay: c,
				gravity: l,
				drift: d,
				scalar: y,
				flat: x
			}));
			return m ? m.addFettis(w) : (m = te(e, w, u, n, r), m.promise);
		}
		function y(n) {
			var a = s || g(n, "disableForReducedMotion", Boolean), f = g(n, "zIndex", Number);
			if (a && p) return l(function(e) {
				e();
			});
			r && m ? e = m.canvas : r && !e && (e = w(f), document.body.appendChild(e)), i && !d && u(e);
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
	var re;
	function ie() {
		return re ||= ne(null, {
			useWorker: !0,
			resize: !0
		}), re;
	}
	function O(e, t, n, r, i, a, o) {
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
	function ae(e) {
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
	function k(e) {
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
		return ie().apply(this, arguments);
	}, n.exports.reset = function() {
		ie().reset();
	}, n.exports.create = ne, n.exports.shapeFromPath = ae, n.exports.shapeFromText = k;
})((function() {
	return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
})(), id, !1);
var ad = id.exports;
id.exports.create;
//#endregion
//#region ../../node_modules/.pnpm/twemoji-parser@14.0.0/node_modules/twemoji-parser/dist/lib/regex.js
var od = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;
})), sd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeName = void 0, e.parse = i;
	var t = n(od());
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var r = e.TypeName = "emoji";
	function i(e, n) {
		var i = n && n.assetType ? n.assetType : "svg", a = n && n.buildUrl ? n.buildUrl : function(e, t) {
			return t === "png" ? "https://twemoji.maxcdn.com/v/latest/72x72/" + e + ".png" : "https://twemoji.maxcdn.com/v/latest/svg/" + e + ".svg";
		}, o = [];
		for (t.default.lastIndex = 0;;) {
			var l = t.default.exec(e);
			if (!l) break;
			var u = l[0], d = c(s(u)).join("-");
			o.push({
				url: d ? a(d, i) : "",
				indices: [l.index, t.default.lastIndex],
				text: u,
				type: r
			});
		}
		return o;
	}
	var a = /\uFE0F/g, o = "‍", s = function(e) {
		return e.indexOf(o) < 0 ? e.replace(a, "") : e;
	};
	function c(e) {
		for (var t = [], n = 0, r = 0, i = 0; i < e.length;) n = e.charCodeAt(i++), r ? (t.push((65536 + (r - 55296 << 10) + (n - 56320)).toString(16)), r = 0) : n > 55296 && n <= 56319 ? r = n : t.push(n.toString(16));
		return t;
	}
})), cd = /* @__PURE__ */ i(((e, t) => {
	var n = NaN, r = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt, c = typeof global == "object" && global && global.Object === Object && global, l = typeof self == "object" && self && self.Object === Object && self, u = c || l || Function("return this")(), d = Object.prototype.toString, f = Math.max, p = Math.min, m = function() {
		return u.Date.now();
	};
	function h(e, t, n) {
		var r, i, a, o, s, c, l = 0, u = !1, d = !1, h = !0;
		if (typeof e != "function") throw TypeError("Expected a function");
		t = y(t) || 0, g(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? f(y(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
		function _(t) {
			var n = r, a = i;
			return r = i = void 0, l = t, o = e.apply(a, n), o;
		}
		function v(e) {
			return l = e, s = setTimeout(S, t), u ? _(e) : o;
		}
		function b(e) {
			var n = e - c, r = e - l, i = t - n;
			return d ? p(i, a - r) : i;
		}
		function x(e) {
			var n = e - c, r = e - l;
			return c === void 0 || n >= t || n < 0 || d && r >= a;
		}
		function S() {
			var e = m();
			if (x(e)) return C(e);
			s = setTimeout(S, b(e));
		}
		function C(e) {
			return s = void 0, h && r ? _(e) : (r = i = void 0, o);
		}
		function ee() {
			s !== void 0 && clearTimeout(s), l = 0, r = c = i = s = void 0;
		}
		function w() {
			return s === void 0 ? o : C(m());
		}
		function T() {
			var e = m(), n = x(e);
			if (r = arguments, i = this, c = e, n) {
				if (s === void 0) return v(c);
				if (d) return s = setTimeout(S, t), _(c);
			}
			return s === void 0 && (s = setTimeout(S, t)), o;
		}
		return T.cancel = ee, T.flush = w, T;
	}
	function g(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function _(e) {
		return !!e && typeof e == "object";
	}
	function v(e) {
		return typeof e == "symbol" || _(e) && d.call(e) == "[object Symbol]";
	}
	function y(e) {
		if (typeof e == "number") return e;
		if (v(e)) return n;
		if (g(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = g(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(r, "");
		var c = a.test(e);
		return c || o.test(e) ? s(e.slice(2), c ? 2 : 8) : i.test(e) ? n : +e;
	}
	t.exports = h;
})), ld = sd(), ud = /* @__PURE__ */ n(cd(), 1), dd = typeof window < "u" ? ue : M;
function fd(e, t, n, r) {
	let i = P(t);
	dd(() => {
		i.current = t;
	}, [t]), M(() => {
		let t = n?.current ?? window;
		if (!(t && t.addEventListener)) return;
		let a = (e) => {
			i.current(e);
		};
		return t.addEventListener(e, a, r), () => {
			t.removeEventListener(e, a, r);
		};
	}, [
		e,
		n,
		r
	]);
}
var pd = typeof window > "u";
function md(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
	let r = (e) => pd ? t : window.matchMedia(e).matches, [i, a] = F(() => n ? r(e) : t);
	function o() {
		a(r(e));
	}
	return dd(() => {
		let t = window.matchMedia(e);
		return o(), t.addListener ? t.addListener(o) : t.addEventListener("change", o), () => {
			t.removeListener ? t.removeListener(o) : t.removeEventListener("change", o);
		};
	}, [e]), i;
}
function hd(e) {
	let t = P(e);
	t.current = e, M(() => () => {
		t.current();
	}, []);
}
function gd(e, t = 500, n) {
	let r = P();
	hd(() => {
		r.current && r.current.cancel();
	});
	let i = de(() => {
		let i = (0, ud.default)(e, t, n), a = (...e) => i(...e);
		return a.cancel = () => {
			i.cancel();
		}, a.isPending = () => !!r.current, a.flush = () => i.flush(), a;
	}, [
		e,
		t,
		n
	]);
	return M(() => {
		r.current = (0, ud.default)(e, t, n);
	}, [
		e,
		t,
		n
	]), i;
}
function _d(e, t, n) {
	let r = n?.equalityFn ?? ((e, t) => e === t), i = e instanceof Function ? e() : e, [a, o] = F(i), s = P(i), c = gd(o, t, n);
	return r(s.current, i) || (c(i), s.current = i), [a, c];
}
function vd({ threshold: e = 0, root: t = null, rootMargin: n = "0%", freezeOnceVisible: r = !1, initialIsIntersecting: i = !1, onChange: a } = {}) {
	let [o, s] = F(null), [c, l] = F(() => ({
		isIntersecting: i,
		entry: void 0
	})), u = P();
	u.current = a;
	let d = c.entry?.isIntersecting && r;
	M(() => {
		if (!o || !("IntersectionObserver" in window) || d) return;
		let i, a = new IntersectionObserver((e) => {
			let t = Array.isArray(a.thresholds) ? a.thresholds : [a.thresholds];
			e.forEach((e) => {
				let n = e.isIntersecting && t.some((t) => e.intersectionRatio >= t);
				l({
					isIntersecting: n,
					entry: e
				}), u.current && u.current(n, e), n && r && i && (i(), i = void 0);
			});
		}, {
			threshold: e,
			root: t,
			rootMargin: n
		});
		return a.observe(o), () => {
			a.disconnect();
		};
	}, [
		o,
		JSON.stringify(e),
		t,
		n,
		d,
		r
	]);
	let f = P(null);
	M(() => {
		!o && c.entry?.target && !r && !d && f.current !== c.entry.target && (f.current = c.entry.target, l({
			isIntersecting: i,
			entry: void 0
		}));
	}, [
		o,
		c.entry,
		r,
		d,
		i
	]);
	let p = [
		s,
		!!c.isIntersecting,
		c.entry
	];
	return p.ref = p[0], p.isIntersecting = p[1], p.entry = p[2], p;
}
function yd() {
	let e = P(!1);
	return M(() => (e.current = !0, () => {
		e.current = !1;
	}), []), se(() => e.current, []);
}
function bd(e, t, n = "mousedown", r = {}) {
	fd(n, (n) => {
		let r = n.target;
		r && r.isConnected && (Array.isArray(e) ? e.filter((e) => !!e.current).every((e) => e.current && !e.current.contains(r)) : e.current && !e.current.contains(r)) && t(n);
	}, void 0, r);
}
var xd = {
	width: void 0,
	height: void 0
};
function Sd(e) {
	let { ref: t, box: n = "content-box" } = e, [{ width: r, height: i }, a] = F(xd), o = yd(), s = P({ ...xd }), c = P(void 0);
	return c.current = e.onResize, M(() => {
		if (!t.current || typeof window > "u" || !("ResizeObserver" in window)) return;
		let e = new ResizeObserver(([e]) => {
			let t = n === "border-box" ? "borderBoxSize" : n === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", r = Cd(e, t, "inlineSize"), i = Cd(e, t, "blockSize");
			if (s.current.width !== r || s.current.height !== i) {
				let e = {
					width: r,
					height: i
				};
				s.current.width = r, s.current.height = i, c.current ? c.current(e) : o() && a(e);
			}
		});
		return e.observe(t.current, { box: n }), () => {
			e.disconnect();
		};
	}, [
		n,
		t,
		o
	]), {
		width: r,
		height: i
	};
}
function Cd(e, t, n) {
	return e[t] ? Array.isArray(e[t]) ? e[t][0][n] : e[t][n] : t === "contentBoxSize" ? e.contentRect[n === "inlineSize" ? "width" : "height"] : void 0;
}
//#endregion
//#region src/lib/a11y.tsx
var wd = () => md("(prefers-reduced-motion: reduce)", {
	initializeWithValue: !0,
	defaultValue: !1
}), Td = R({
	variants: { size: {
		xs: "h-3 w-3",
		sm: "h-4 w-4",
		md: "h-5 w-5",
		lg: "h-6 w-6"
	} },
	defaultVariants: { size: "sm" }
}), Ed = R({
	variants: { size: {
		xs: "text-[12px]",
		sm: "text-[16px]",
		md: "text-[20px]",
		lg: "text-[24px]"
	} },
	defaultVariants: { size: "sm" }
});
function Dd({ emoji: e, size: t, alt: n, mode: r = "image" }) {
	let i = r === "native" ? null : Od(e), a = {
		initial: { scale: .75 },
		animate: { scale: 1 },
		exit: { scale: .75 },
		transition: {
			duration: .6,
			ease: [
				.175,
				.885,
				.32,
				1.275
			]
		}
	};
	return r === "native" ? /* @__PURE__ */ I(ed.span, {
		className: c(Td({ size: t }), Ed({ size: t }), "inline-flex items-center justify-center leading-none font-emoji"),
		"aria-label": n === "" ? void 0 : n ?? e,
		role: n === "" ? void 0 : "img",
		"aria-hidden": n === "" || void 0,
		...a,
		children: e
	}, e) : i ? /* @__PURE__ */ I(ed.img, {
		src: i.url,
		alt: n ?? e,
		className: Td({ size: t }),
		draggable: !1,
		...a
	}, i.url) : /* @__PURE__ */ I(ed.span, {
		...a,
		children: e
	}, e);
}
var Od = (e) => {
	let [t] = (0, ld.parse)(e, { buildUrl: (e) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${e}.svg` });
	return t || null;
};
function kd(e) {
	return `${e} emoji`;
}
var Ad = () => {
	let e = wd();
	return { fireEmojiConfetti: se((t, n) => {
		let r = n.current;
		if (r) {
			let n = r.getBoundingClientRect(), i = n.left + n.width / 2, a = n.top;
			ad({
				particleCount: 20,
				gravity: 0,
				spread: 360,
				startVelocity: 10,
				ticks: 50,
				origin: {
					x: i / window.innerWidth,
					y: a / window.innerHeight
				},
				shapes: [ad.shapeFromText({
					text: t,
					scalar: 2
				})],
				scalar: 2,
				disableForReducedMotion: e
			});
		}
	}, [e]) };
}, { entries: jd, setPrototypeOf: Md, isFrozen: Nd, getPrototypeOf: Pd, getOwnPropertyDescriptor: Fd } = Object, { freeze: Id, seal: Ld, create: Rd } = Object, { apply: zd, construct: Bd } = typeof Reflect < "u" && Reflect;
Id ||= function(e) {
	return e;
}, Ld ||= function(e) {
	return e;
}, zd ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, Bd ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var Vd = tf(Array.prototype.forEach), Hd = tf(Array.prototype.lastIndexOf), Ud = tf(Array.prototype.pop), Wd = tf(Array.prototype.push), Gd = tf(Array.prototype.splice), Kd = tf(String.prototype.toLowerCase), qd = tf(String.prototype.toString), Jd = tf(String.prototype.match), Yd = tf(String.prototype.replace), Xd = tf(String.prototype.indexOf), Zd = tf(String.prototype.trim), Qd = tf(Object.prototype.hasOwnProperty), $d = tf(RegExp.prototype.test), ef = nf(TypeError);
function tf(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return zd(e, t, n);
	};
}
function nf(e) {
	return function() {
		return Bd(e, [...arguments]);
	};
}
function K(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kd;
	Md && Md(e, null);
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (Nd(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function rf(e) {
	for (let t = 0; t < e.length; t++) Qd(e, t) || (e[t] = null);
	return e;
}
function af(e) {
	let t = Rd(null);
	for (let [n, r] of jd(e)) Qd(e, n) && (t[n] = Array.isArray(r) ? rf(r) : r && typeof r == "object" && r.constructor === Object ? af(r) : r);
	return t;
}
function of(e, t) {
	for (; e !== null;) {
		let n = Fd(e, t);
		if (n) {
			if (n.get) return tf(n.get);
			if (typeof n.value == "function") return tf(n.value);
		}
		e = Pd(e);
	}
	function n() {
		return null;
	}
	return n;
}
var sf = Id(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), cf = Id(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), lf = Id([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), uf = Id([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), df = Id(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), ff = Id([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), pf = Id(["#text"]), mf = Id(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split(".")), hf = Id(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), gf = Id(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), _f = Id([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), vf = Ld(/\{\{[\w\W]*|[\w\W]*\}\}/gm), yf = Ld(/<%[\w\W]*|[\w\W]*%>/gm), bf = Ld(/\$\{[\w\W]*/gm), xf = Ld(/^data-[\-\w.\u00B7-\uFFFF]+$/), Sf = Ld(/^aria-[\-\w]+$/), Cf = Ld(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), wf = Ld(/^(?:\w+script|data):/i), Tf = Ld(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Ef = Ld(/^html$/i), Df = Ld(/^[a-z][.\w]*(-[.\w]+)+$/i), Of = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ARIA_ATTR: Sf,
	ATTR_WHITESPACE: Tf,
	CUSTOM_ELEMENT: Df,
	DATA_ATTR: xf,
	DOCTYPE_NAME: Ef,
	ERB_EXPR: yf,
	IS_ALLOWED_URI: Cf,
	IS_SCRIPT_OR_DATA: wf,
	MUSTACHE_EXPR: vf,
	TMPLIT_EXPR: bf
}), kf = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	progressingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, Af = function() {
	return typeof window > "u" ? null : window;
}, jf = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, Mf = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
};
function Nf() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Af(), t = (e) => Nf(e);
	if (t.version = "3.3.3", t.removed = [], !e || !e.document || e.document.nodeType !== kf.document || !e.Element) return t.isSupported = !1, t;
	let { document: n } = e, r = n, i = r.currentScript, { DocumentFragment: a, HTMLTemplateElement: o, Node: s, Element: c, NodeFilter: l, NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: d, DOMParser: f, trustedTypes: p } = e, m = c.prototype, h = of(m, "cloneNode"), g = of(m, "remove"), _ = of(m, "nextSibling"), v = of(m, "childNodes"), y = of(m, "parentNode");
	if (typeof o == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let b, x = "", { implementation: S, createNodeIterator: C, createDocumentFragment: ee, getElementsByTagName: w } = n, { importNode: T } = r, E = Mf();
	t.isSupported = typeof jd == "function" && typeof y == "function" && S && S.createHTMLDocument !== void 0;
	let { MUSTACHE_EXPR: D, ERB_EXPR: te, TMPLIT_EXPR: ne, DATA_ATTR: re, ARIA_ATTR: ie, IS_SCRIPT_OR_DATA: O, ATTR_WHITESPACE: ae, CUSTOM_ELEMENT: k } = Of, { IS_ALLOWED_URI: oe } = Of, A = null, se = K({}, [
		...sf,
		...cf,
		...lf,
		...df,
		...pf
	]), j = null, M = K({}, [
		...mf,
		...hf,
		...gf,
		..._f
	]), N = Object.seal(Rd(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), ce = null, le = null, ue = Object.seal(Rd(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), de = !0, P = !0, F = !1, fe = !0, pe = !1, me = !0, he = !1, I = !1, L = !1, ge = !1, _e = !1, R = !1, ve = !0, ye = !1, be = !0, xe = !1, Se = {}, Ce = null, we = K({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp"
	]), Te = null, Ee = K({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), De = null, Oe = K({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), ke = "http://www.w3.org/1998/Math/MathML", Ae = "http://www.w3.org/2000/svg", je = "http://www.w3.org/1999/xhtml", Me = je, Ne = !1, Pe = null, Fe = K({}, [
		ke,
		Ae,
		je
	], qd), Ie = K({}, [
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Le = K({}, ["annotation-xml"]), Re = K({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), z = null, ze = ["application/xhtml+xml", "text/html"], B = null, Be = null, Ve = n.createElement("form"), He = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Ue = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (!(Be && Be === e)) {
			if ((!e || typeof e != "object") && (e = {}), e = af(e), z = ze.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, B = z === "application/xhtml+xml" ? qd : Kd, A = Qd(e, "ALLOWED_TAGS") ? K({}, e.ALLOWED_TAGS, B) : se, j = Qd(e, "ALLOWED_ATTR") ? K({}, e.ALLOWED_ATTR, B) : M, Pe = Qd(e, "ALLOWED_NAMESPACES") ? K({}, e.ALLOWED_NAMESPACES, qd) : Fe, De = Qd(e, "ADD_URI_SAFE_ATTR") ? K(af(Oe), e.ADD_URI_SAFE_ATTR, B) : Oe, Te = Qd(e, "ADD_DATA_URI_TAGS") ? K(af(Ee), e.ADD_DATA_URI_TAGS, B) : Ee, Ce = Qd(e, "FORBID_CONTENTS") ? K({}, e.FORBID_CONTENTS, B) : we, ce = Qd(e, "FORBID_TAGS") ? K({}, e.FORBID_TAGS, B) : af({}), le = Qd(e, "FORBID_ATTR") ? K({}, e.FORBID_ATTR, B) : af({}), Se = Qd(e, "USE_PROFILES") ? e.USE_PROFILES : !1, de = e.ALLOW_ARIA_ATTR !== !1, P = e.ALLOW_DATA_ATTR !== !1, F = e.ALLOW_UNKNOWN_PROTOCOLS || !1, fe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, pe = e.SAFE_FOR_TEMPLATES || !1, me = e.SAFE_FOR_XML !== !1, he = e.WHOLE_DOCUMENT || !1, ge = e.RETURN_DOM || !1, _e = e.RETURN_DOM_FRAGMENT || !1, R = e.RETURN_TRUSTED_TYPE || !1, L = e.FORCE_BODY || !1, ve = e.SANITIZE_DOM !== !1, ye = e.SANITIZE_NAMED_PROPS || !1, be = e.KEEP_CONTENT !== !1, xe = e.IN_PLACE || !1, oe = e.ALLOWED_URI_REGEXP || Cf, Me = e.NAMESPACE || je, Ie = e.MATHML_TEXT_INTEGRATION_POINTS || Ie, Le = e.HTML_INTEGRATION_POINTS || Le, N = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && He(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (N.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && He(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (N.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (N.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), pe && (P = !1), _e && (ge = !0), Se && (A = K({}, pf), j = Rd(null), Se.html === !0 && (K(A, sf), K(j, mf)), Se.svg === !0 && (K(A, cf), K(j, hf), K(j, _f)), Se.svgFilters === !0 && (K(A, lf), K(j, hf), K(j, _f)), Se.mathMl === !0 && (K(A, df), K(j, gf), K(j, _f))), Qd(e, "ADD_TAGS") || (ue.tagCheck = null), Qd(e, "ADD_ATTR") || (ue.attributeCheck = null), e.ADD_TAGS && (typeof e.ADD_TAGS == "function" ? ue.tagCheck = e.ADD_TAGS : (A === se && (A = af(A)), K(A, e.ADD_TAGS, B))), e.ADD_ATTR && (typeof e.ADD_ATTR == "function" ? ue.attributeCheck = e.ADD_ATTR : (j === M && (j = af(j)), K(j, e.ADD_ATTR, B))), e.ADD_URI_SAFE_ATTR && K(De, e.ADD_URI_SAFE_ATTR, B), e.FORBID_CONTENTS && (Ce === we && (Ce = af(Ce)), K(Ce, e.FORBID_CONTENTS, B)), e.ADD_FORBID_CONTENTS && (Ce === we && (Ce = af(Ce)), K(Ce, e.ADD_FORBID_CONTENTS, B)), be && (A["#text"] = !0), he && K(A, [
				"html",
				"head",
				"body"
			]), A.table && (K(A, ["tbody"]), delete ce.tbody), e.TRUSTED_TYPES_POLICY) {
				if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw ef("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw ef("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				b = e.TRUSTED_TYPES_POLICY, x = b.createHTML("");
			} else b === void 0 && (b = jf(p, i)), b !== null && typeof x == "string" && (x = b.createHTML(""));
			Id && Id(e), Be = e;
		}
	}, We = K({}, [
		...cf,
		...lf,
		...uf
	]), Ge = K({}, [...df, ...ff]), Ke = function(e) {
		let t = y(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: Me,
			tagName: "template"
		});
		let n = Kd(e.tagName), r = Kd(t.tagName);
		return Pe[e.namespaceURI] ? e.namespaceURI === Ae ? t.namespaceURI === je ? n === "svg" : t.namespaceURI === ke ? n === "svg" && (r === "annotation-xml" || Ie[r]) : !!We[n] : e.namespaceURI === ke ? t.namespaceURI === je ? n === "math" : t.namespaceURI === Ae ? n === "math" && Le[r] : !!Ge[n] : e.namespaceURI === je ? t.namespaceURI === Ae && !Le[r] || t.namespaceURI === ke && !Ie[r] ? !1 : !Ge[n] && (Re[n] || !We[n]) : !!(z === "application/xhtml+xml" && Pe[e.namespaceURI]) : !1;
	}, qe = function(e) {
		Wd(t.removed, { element: e });
		try {
			y(e).removeChild(e);
		} catch {
			g(e);
		}
	}, Je = function(e, n) {
		try {
			Wd(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			Wd(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") {
			if (ge || _e) try {
				qe(n);
			} catch {}
			else try {
				n.setAttribute(e, "");
			} catch {}
		}
	}, Ye = function(e) {
		let t = null, r = null;
		if (L) e = "<remove></remove>" + e;
		else {
			let t = Jd(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		z === "application/xhtml+xml" && Me === je && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = b ? b.createHTML(e) : e;
		if (Me === je) try {
			t = new f().parseFromString(i, z);
		} catch {}
		if (!t || !t.documentElement) {
			t = S.createDocument(Me, "template", null);
			try {
				t.documentElement.innerHTML = Ne ? x : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Me === je ? w.call(t, he ? "html" : "body")[0] : he ? t.documentElement : a;
	}, Xe = function(e) {
		return C.call(e.ownerDocument || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
	}, Ze = function(e) {
		return e instanceof d && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof u) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
	}, Qe = function(e) {
		return typeof s == "function" && e instanceof s;
	};
	function $e(e, n, r) {
		Vd(e, (e) => {
			e.call(t, n, r, Be);
		});
	}
	let et = function(e) {
		let n = null;
		if ($e(E.beforeSanitizeElements, e, null), Ze(e)) return qe(e), !0;
		let r = B(e.nodeName);
		if ($e(E.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: A
		}), me && e.hasChildNodes() && !Qe(e.firstElementChild) && $d(/<[/\w!]/g, e.innerHTML) && $d(/<[/\w!]/g, e.textContent) || e.nodeType === kf.progressingInstruction || me && e.nodeType === kf.comment && $d(/<[/\w]/g, e.data)) return qe(e), !0;
		if (!(ue.tagCheck instanceof Function && ue.tagCheck(r)) && (!A[r] || ce[r])) {
			if (!ce[r] && nt(r) && (N.tagNameCheck instanceof RegExp && $d(N.tagNameCheck, r) || N.tagNameCheck instanceof Function && N.tagNameCheck(r))) return !1;
			if (be && !Ce[r]) {
				let t = y(e) || e.parentNode, n = v(e) || e.childNodes;
				if (n && t) {
					let r = n.length;
					for (let i = r - 1; i >= 0; --i) {
						let r = h(n[i], !0);
						r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, _(e));
					}
				}
			}
			return qe(e), !0;
		}
		return e instanceof c && !Ke(e) || (r === "noscript" || r === "noembed" || r === "noframes") && $d(/<\/no(script|embed|frames)/i, e.innerHTML) ? (qe(e), !0) : (pe && e.nodeType === kf.text && (n = e.textContent, Vd([
			D,
			te,
			ne
		], (e) => {
			n = Yd(n, e, " ");
		}), e.textContent !== n && (Wd(t.removed, { element: e.cloneNode() }), e.textContent = n)), $e(E.afterSanitizeElements, e, null), !1);
	}, tt = function(e, t, r) {
		if (le[t] || ve && (t === "id" || t === "name") && (r in n || r in Ve)) return !1;
		if (!(P && !le[t] && $d(re, t)) && !(de && $d(ie, t)) && !(ue.attributeCheck instanceof Function && ue.attributeCheck(t, e))) {
			if (!j[t] || le[t]) {
				if (!(nt(e) && (N.tagNameCheck instanceof RegExp && $d(N.tagNameCheck, e) || N.tagNameCheck instanceof Function && N.tagNameCheck(e)) && (N.attributeNameCheck instanceof RegExp && $d(N.attributeNameCheck, t) || N.attributeNameCheck instanceof Function && N.attributeNameCheck(t, e)) || t === "is" && N.allowCustomizedBuiltInElements && (N.tagNameCheck instanceof RegExp && $d(N.tagNameCheck, r) || N.tagNameCheck instanceof Function && N.tagNameCheck(r)))) return !1;
			} else if (!De[t] && !$d(oe, Yd(r, ae, "")) && (t !== "src" && t !== "xlink:href" && t !== "href" || e === "script" || Xd(r, "data:") !== 0 || !Te[e]) && (!F || $d(O, Yd(r, ae, ""))) && r) return !1;
		}
		return !0;
	}, nt = function(e) {
		return e !== "annotation-xml" && Jd(e, k);
	}, rt = function(e) {
		$e(E.beforeSanitizeAttributes, e, null);
		let { attributes: n } = e;
		if (!n || Ze(e)) return;
		let r = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: j,
			forceKeepAttr: void 0
		}, i = n.length;
		for (; i--;) {
			let { name: a, namespaceURI: o, value: s } = n[i], c = B(a), l = s, u = a === "value" ? l : Zd(l);
			if (r.attrName = c, r.attrValue = u, r.keepAttr = !0, r.forceKeepAttr = void 0, $e(E.uponSanitizeAttribute, e, r), u = r.attrValue, ye && (c === "id" || c === "name") && (Je(a, e), u = "user-content-" + u), me && $d(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, u)) {
				Je(a, e);
				continue;
			}
			if (c === "attributename" && Jd(u, "href")) {
				Je(a, e);
				continue;
			}
			if (r.forceKeepAttr) continue;
			if (!r.keepAttr) {
				Je(a, e);
				continue;
			}
			if (!fe && $d(/\/>/i, u)) {
				Je(a, e);
				continue;
			}
			pe && Vd([
				D,
				te,
				ne
			], (e) => {
				u = Yd(u, e, " ");
			});
			let d = B(e.nodeName);
			if (!tt(d, c, u)) {
				Je(a, e);
				continue;
			}
			if (b && typeof p == "object" && typeof p.getAttributeType == "function" && !o) switch (p.getAttributeType(d, c)) {
				case "TrustedHTML":
					u = b.createHTML(u);
					break;
				case "TrustedScriptURL": u = b.createScriptURL(u);
			}
			if (u !== l) try {
				o ? e.setAttributeNS(o, a, u) : e.setAttribute(a, u), Ze(e) ? qe(e) : Ud(t.removed);
			} catch {
				Je(a, e);
			}
		}
		$e(E.afterSanitizeAttributes, e, null);
	}, it = function e(t) {
		let n = null, r = Xe(t);
		for ($e(E.beforeSanitizeShadowDOM, t, null); n = r.nextNode();) $e(E.uponSanitizeShadowNode, n, null), et(n), rt(n), n.content instanceof a && e(n.content);
		$e(E.afterSanitizeShadowDOM, t, null);
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, o = null, c = null, l = null;
		if (Ne = !e, Ne && (e = "<!-->"), typeof e != "string" && !Qe(e)) {
			if (typeof e.toString == "function") {
				if (e = e.toString(), typeof e != "string") throw ef("dirty is not a string, aborting");
			} else throw ef("toString is not a function");
		}
		if (!t.isSupported) return e;
		if (I || Ue(n), t.removed = [], typeof e == "string" && (xe = !1), xe) {
			if (e.nodeName) {
				let t = B(e.nodeName);
				if (!A[t] || ce[t]) throw ef("root node is forbidden and cannot be sanitized in-place");
			}
		} else if (e instanceof s) i = Ye("<!---->"), o = i.ownerDocument.importNode(e, !0), o.nodeType === kf.element && o.nodeName === "BODY" || o.nodeName === "HTML" ? i = o : i.appendChild(o);
		else {
			if (!ge && !pe && !he && e.indexOf("<") === -1) return b && R ? b.createHTML(e) : e;
			if (i = Ye(e), !i) return ge ? null : R ? x : "";
		}
		i && L && qe(i.firstChild);
		let u = Xe(xe ? e : i);
		for (; c = u.nextNode();) et(c), rt(c), c.content instanceof a && it(c.content);
		if (xe) return e;
		if (ge) {
			if (_e) for (l = ee.call(i.ownerDocument); i.firstChild;) l.appendChild(i.firstChild);
			else l = i;
			return (j.shadowroot || j.shadowrootmode) && (l = T.call(r, l, !0)), l;
		}
		let d = he ? i.outerHTML : i.innerHTML;
		return he && A["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && $d(Ef, i.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + d), pe && Vd([
			D,
			te,
			ne
		], (e) => {
			d = Yd(d, e, " ");
		}), b && R ? b.createHTML(d) : d;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Ue(e), I = !0;
	}, t.clearConfig = function() {
		Be = null, I = !1;
	}, t.isValidAttribute = function(e, t, n) {
		Be || Ue({});
		let r = B(e), i = B(t);
		return tt(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && Wd(E[e], t);
	}, t.removeHook = function(e, t) {
		if (t !== void 0) {
			let n = Hd(E[e], t);
			return n === -1 ? void 0 : Gd(E[e], n, 1)[0];
		}
		return Ud(E[e]);
	}, t.removeHooks = function(e) {
		E[e] = [];
	}, t.removeAllHooks = function() {
		E = Mf();
	}, t;
}
var Pf = Nf(), Ff = [
	"area",
	"base",
	"basefont",
	"bgsound",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"image",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
], If = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
If.prototype.normal = {}, If.prototype.property = {}, If.prototype.space = void 0;
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/merge.js
function Lf(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new If(n, r, t);
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/normalize.js
function Rf(e) {
	return e.toLowerCase();
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/info.js
var zf = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
zf.prototype.attribute = "", zf.prototype.booleanish = !1, zf.prototype.boolean = !1, zf.prototype.commaOrSpaceSeparated = !1, zf.prototype.commaSeparated = !1, zf.prototype.defined = !1, zf.prototype.mustUseProperty = !1, zf.prototype.number = !1, zf.prototype.overloadedBoolean = !1, zf.prototype.property = "", zf.prototype.spaceSeparated = !1, zf.prototype.space = void 0;
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/types.js
var Bf = /* @__PURE__ */ r({
	boolean: () => q,
	booleanish: () => Hf,
	commaOrSpaceSeparated: () => Gf,
	commaSeparated: () => Wf,
	number: () => J,
	overloadedBoolean: () => Uf,
	spaceSeparated: () => Y
}), Vf = 0, q = Kf(), Hf = Kf(), Uf = Kf(), J = Kf(), Y = Kf(), Wf = Kf(), Gf = Kf();
function Kf() {
	return 2 ** ++Vf;
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js
var qf = Object.keys(Bf), Jf = class extends zf {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Yf(this, "space", r), typeof n == "number") for (; ++i < qf.length;) {
			let e = qf[i];
			Yf(this, qf[i], (n & Bf[e]) === Bf[e]);
		}
	}
};
Jf.prototype.defined = !0;
function Yf(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/create.js
function Xf(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Jf(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Rf(r)] = r, n[Rf(a.attribute)] = r;
	}
	return new If(t, n, e.space);
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/aria.js
var Zf = Xf({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: Hf,
		ariaAutoComplete: null,
		ariaBusy: Hf,
		ariaChecked: Hf,
		ariaColCount: J,
		ariaColIndex: J,
		ariaColSpan: J,
		ariaControls: Y,
		ariaCurrent: null,
		ariaDescribedBy: Y,
		ariaDetails: null,
		ariaDisabled: Hf,
		ariaDropEffect: Y,
		ariaErrorMessage: null,
		ariaExpanded: Hf,
		ariaFlowTo: Y,
		ariaGrabbed: Hf,
		ariaHasPopup: null,
		ariaHidden: Hf,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: Y,
		ariaLevel: J,
		ariaLive: null,
		ariaModal: Hf,
		ariaMultiLine: Hf,
		ariaMultiSelectable: Hf,
		ariaOrientation: null,
		ariaOwns: Y,
		ariaPlaceholder: null,
		ariaPosInSet: J,
		ariaPressed: Hf,
		ariaReadOnly: Hf,
		ariaRelevant: null,
		ariaRequired: Hf,
		ariaRoleDescription: Y,
		ariaRowCount: J,
		ariaRowIndex: J,
		ariaRowSpan: J,
		ariaSelected: Hf,
		ariaSetSize: J,
		ariaSort: null,
		ariaValueMax: J,
		ariaValueMin: J,
		ariaValueNow: J,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-sensitive-transform.js
function Qf(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/case-insensitive-transform.js
function $f(e, t) {
	return Qf(e, t.toLowerCase());
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/html.js
var ep = Xf({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: Wf,
		acceptCharset: Y,
		accessKey: Y,
		action: null,
		allow: null,
		allowFullScreen: q,
		allowPaymentRequest: q,
		allowUserMedia: q,
		alt: null,
		as: null,
		async: q,
		autoCapitalize: null,
		autoComplete: Y,
		autoFocus: q,
		autoPlay: q,
		blocking: Y,
		capture: null,
		charSet: null,
		checked: q,
		cite: null,
		className: Y,
		cols: J,
		colSpan: null,
		content: null,
		contentEditable: Hf,
		controls: q,
		controlsList: Y,
		coords: J | Wf,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: q,
		defer: q,
		dir: null,
		dirName: null,
		disabled: q,
		download: Uf,
		draggable: Hf,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: q,
		formTarget: null,
		headers: Y,
		height: J,
		hidden: Uf,
		high: J,
		href: null,
		hrefLang: null,
		htmlFor: Y,
		httpEquiv: Y,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: q,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: q,
		itemId: null,
		itemProp: Y,
		itemRef: Y,
		itemScope: q,
		itemType: Y,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: q,
		low: J,
		manifest: null,
		max: null,
		maxLength: J,
		media: null,
		method: null,
		min: null,
		minLength: J,
		multiple: q,
		muted: q,
		name: null,
		nonce: null,
		noModule: q,
		noValidate: q,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: q,
		optimum: J,
		pattern: null,
		ping: Y,
		placeholder: null,
		playsInline: q,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: q,
		referrerPolicy: null,
		rel: Y,
		required: q,
		reversed: q,
		rows: J,
		rowSpan: J,
		sandbox: Y,
		scope: null,
		scoped: q,
		seamless: q,
		selected: q,
		shadowRootClonable: q,
		shadowRootDelegatesFocus: q,
		shadowRootMode: null,
		shape: null,
		size: J,
		sizes: null,
		slot: null,
		span: J,
		spellCheck: Hf,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: J,
		step: null,
		style: null,
		tabIndex: J,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: q,
		useMap: null,
		value: Hf,
		width: J,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: Y,
		axis: null,
		background: null,
		bgColor: null,
		border: J,
		borderColor: null,
		bottomMargin: J,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: q,
		declare: q,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: J,
		leftMargin: J,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: J,
		marginWidth: J,
		noResize: q,
		noHref: q,
		noShade: q,
		noWrap: q,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: J,
		rules: null,
		scheme: null,
		scrolling: Hf,
		standby: null,
		summary: null,
		text: null,
		topMargin: J,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: J,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: q,
		disableRemotePlayback: q,
		prefix: null,
		property: null,
		results: J,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: $f
}), tp = Xf({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: Gf,
		accentHeight: J,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: J,
		amplitude: J,
		arabicForm: null,
		ascent: J,
		attributeName: null,
		attributeType: null,
		azimuth: J,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: J,
		by: null,
		calcMode: null,
		capHeight: J,
		className: Y,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: J,
		diffuseConstant: J,
		direction: null,
		display: null,
		dur: null,
		divisor: J,
		dominantBaseline: null,
		download: q,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: J,
		enableBackground: null,
		end: null,
		event: null,
		exponent: J,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: J,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: Wf,
		g2: Wf,
		glyphName: Wf,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: J,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: J,
		horizOriginX: J,
		horizOriginY: J,
		id: null,
		ideographic: J,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: J,
		k: J,
		k1: J,
		k2: J,
		k3: J,
		k4: J,
		kernelMatrix: Gf,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: J,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: J,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: J,
		overlineThickness: J,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: J,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: Y,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: J,
		pointsAtY: J,
		pointsAtZ: J,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: Gf,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: Gf,
		rev: Gf,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: Gf,
		requiredFeatures: Gf,
		requiredFonts: Gf,
		requiredFormats: Gf,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: J,
		specularExponent: J,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: J,
		strikethroughThickness: J,
		string: null,
		stroke: null,
		strokeDashArray: Gf,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: J,
		strokeOpacity: J,
		strokeWidth: null,
		style: null,
		surfaceScale: J,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: Gf,
		tabIndex: J,
		tableValues: null,
		target: null,
		targetX: J,
		targetY: J,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: Gf,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: J,
		underlineThickness: J,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: J,
		values: null,
		vAlphabetic: J,
		vMathematical: J,
		vectorEffect: null,
		vHanging: J,
		vIdeographic: J,
		version: null,
		vertAdvY: J,
		vertOriginX: J,
		vertOriginY: J,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: J,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: Qf
}), np = Xf({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), rp = Xf({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: $f
}), ip = Xf({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), ap = /[A-Z]/g, op = /-[a-z]/g, sp = /^data[-\w.:]+$/i;
function cp(e, t) {
	let n = Rf(t), r = t, i = zf;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && sp.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(op, up);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!op.test(e)) {
				let n = e.replace(ap, lp);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Jf;
	}
	return new i(r, t);
}
function lp(e) {
	return "-" + e.toLowerCase();
}
function up(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/index.js
var dp = Lf([
	Zf,
	ep,
	np,
	rp,
	ip
], "html"), fp = Lf([
	Zf,
	tp,
	np,
	rp,
	ip
], "svg"), pp = {}.hasOwnProperty;
function mp(e, t) {
	let n = t || {};
	function r(t, ...n) {
		let i = r.invalid, a = r.handlers;
		if (t && pp.call(t, e)) {
			let n = String(t[e]);
			i = pp.call(a, n) ? a[n] : r.unknown;
		}
		if (i) return i.call(this, t, ...n);
	}
	return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
//#endregion
//#region ../../node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/core.js
var hp = /["&'<>`]/g, gp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, _p = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, vp = /[|\\{}()[\]^$+*?.]/g, yp = /* @__PURE__ */ new WeakMap();
function bp(e, t) {
	if (e = e.replace(t.subset ? xp(t.subset) : hp, r), t.subset || t.escapeOnly) return e;
	return e.replace(gp, n).replace(_p, r);
	function n(e, n, r) {
		return t.format((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536, r.charCodeAt(n + 2), t);
	}
	function r(e, n, r) {
		return t.format(e.charCodeAt(0), r.charCodeAt(n + 1), t);
	}
}
function xp(e) {
	let t = yp.get(e);
	return t || (t = Sp(e), yp.set(e, t)), t;
}
function Sp(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t.push(e[n].replace(vp, "\\$&"));
	return RegExp("(?:" + t.join("|") + ")", "g");
}
//#endregion
//#region ../../node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/util/to-hexadecimal.js
var Cp = /[\dA-Fa-f]/;
function wp(e, t, n) {
	let r = "&#x" + e.toString(16).toUpperCase();
	return n && t && !Cp.test(String.fromCharCode(t)) ? r : r + ";";
}
//#endregion
//#region ../../node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/util/to-decimal.js
var Tp = /\d/;
function Ep(e, t, n) {
	let r = "&#" + String(e);
	return n && t && !Tp.test(String.fromCharCode(t)) ? r : r + ";";
}
//#endregion
//#region ../../node_modules/.pnpm/character-entities-legacy@3.0.0/node_modules/character-entities-legacy/index.js
var Dp = /* @__PURE__ */ "AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml".split("."), Op = {
	nbsp: "\xA0",
	iexcl: "¡",
	cent: "¢",
	pound: "£",
	curren: "¤",
	yen: "¥",
	brvbar: "¦",
	sect: "§",
	uml: "¨",
	copy: "©",
	ordf: "ª",
	laquo: "«",
	not: "¬",
	shy: "­",
	reg: "®",
	macr: "¯",
	deg: "°",
	plusmn: "±",
	sup2: "²",
	sup3: "³",
	acute: "´",
	micro: "µ",
	para: "¶",
	middot: "·",
	cedil: "¸",
	sup1: "¹",
	ordm: "º",
	raquo: "»",
	frac14: "¼",
	frac12: "½",
	frac34: "¾",
	iquest: "¿",
	Agrave: "À",
	Aacute: "Á",
	Acirc: "Â",
	Atilde: "Ã",
	Auml: "Ä",
	Aring: "Å",
	AElig: "Æ",
	Ccedil: "Ç",
	Egrave: "È",
	Eacute: "É",
	Ecirc: "Ê",
	Euml: "Ë",
	Igrave: "Ì",
	Iacute: "Í",
	Icirc: "Î",
	Iuml: "Ï",
	ETH: "Ð",
	Ntilde: "Ñ",
	Ograve: "Ò",
	Oacute: "Ó",
	Ocirc: "Ô",
	Otilde: "Õ",
	Ouml: "Ö",
	times: "×",
	Oslash: "Ø",
	Ugrave: "Ù",
	Uacute: "Ú",
	Ucirc: "Û",
	Uuml: "Ü",
	Yacute: "Ý",
	THORN: "Þ",
	szlig: "ß",
	agrave: "à",
	aacute: "á",
	acirc: "â",
	atilde: "ã",
	auml: "ä",
	aring: "å",
	aelig: "æ",
	ccedil: "ç",
	egrave: "è",
	eacute: "é",
	ecirc: "ê",
	euml: "ë",
	igrave: "ì",
	iacute: "í",
	icirc: "î",
	iuml: "ï",
	eth: "ð",
	ntilde: "ñ",
	ograve: "ò",
	oacute: "ó",
	ocirc: "ô",
	otilde: "õ",
	ouml: "ö",
	divide: "÷",
	oslash: "ø",
	ugrave: "ù",
	uacute: "ú",
	ucirc: "û",
	uuml: "ü",
	yacute: "ý",
	thorn: "þ",
	yuml: "ÿ",
	fnof: "ƒ",
	Alpha: "Α",
	Beta: "Β",
	Gamma: "Γ",
	Delta: "Δ",
	Epsilon: "Ε",
	Zeta: "Ζ",
	Eta: "Η",
	Theta: "Θ",
	Iota: "Ι",
	Kappa: "Κ",
	Lambda: "Λ",
	Mu: "Μ",
	Nu: "Ν",
	Xi: "Ξ",
	Omicron: "Ο",
	Pi: "Π",
	Rho: "Ρ",
	Sigma: "Σ",
	Tau: "Τ",
	Upsilon: "Υ",
	Phi: "Φ",
	Chi: "Χ",
	Psi: "Ψ",
	Omega: "Ω",
	alpha: "α",
	beta: "β",
	gamma: "γ",
	delta: "δ",
	epsilon: "ε",
	zeta: "ζ",
	eta: "η",
	theta: "θ",
	iota: "ι",
	kappa: "κ",
	lambda: "λ",
	mu: "μ",
	nu: "ν",
	xi: "ξ",
	omicron: "ο",
	pi: "π",
	rho: "ρ",
	sigmaf: "ς",
	sigma: "σ",
	tau: "τ",
	upsilon: "υ",
	phi: "φ",
	chi: "χ",
	psi: "ψ",
	omega: "ω",
	thetasym: "ϑ",
	upsih: "ϒ",
	piv: "ϖ",
	bull: "•",
	hellip: "…",
	prime: "′",
	Prime: "″",
	oline: "‾",
	frasl: "⁄",
	weierp: "℘",
	image: "ℑ",
	real: "ℜ",
	trade: "™",
	alefsym: "ℵ",
	larr: "←",
	uarr: "↑",
	rarr: "→",
	darr: "↓",
	harr: "↔",
	crarr: "↵",
	lArr: "⇐",
	uArr: "⇑",
	rArr: "⇒",
	dArr: "⇓",
	hArr: "⇔",
	forall: "∀",
	part: "∂",
	exist: "∃",
	empty: "∅",
	nabla: "∇",
	isin: "∈",
	notin: "∉",
	ni: "∋",
	prod: "∏",
	sum: "∑",
	minus: "−",
	lowast: "∗",
	radic: "√",
	prop: "∝",
	infin: "∞",
	ang: "∠",
	and: "∧",
	or: "∨",
	cap: "∩",
	cup: "∪",
	int: "∫",
	there4: "∴",
	sim: "∼",
	cong: "≅",
	asymp: "≈",
	ne: "≠",
	equiv: "≡",
	le: "≤",
	ge: "≥",
	sub: "⊂",
	sup: "⊃",
	nsub: "⊄",
	sube: "⊆",
	supe: "⊇",
	oplus: "⊕",
	otimes: "⊗",
	perp: "⊥",
	sdot: "⋅",
	lceil: "⌈",
	rceil: "⌉",
	lfloor: "⌊",
	rfloor: "⌋",
	lang: "〈",
	rang: "〉",
	loz: "◊",
	spades: "♠",
	clubs: "♣",
	hearts: "♥",
	diams: "♦",
	quot: "\"",
	amp: "&",
	lt: "<",
	gt: ">",
	OElig: "Œ",
	oelig: "œ",
	Scaron: "Š",
	scaron: "š",
	Yuml: "Ÿ",
	circ: "ˆ",
	tilde: "˜",
	ensp: " ",
	emsp: " ",
	thinsp: " ",
	zwnj: "‌",
	zwj: "‍",
	lrm: "‎",
	rlm: "‏",
	ndash: "–",
	mdash: "—",
	lsquo: "‘",
	rsquo: "’",
	sbquo: "‚",
	ldquo: "“",
	rdquo: "”",
	bdquo: "„",
	dagger: "†",
	Dagger: "‡",
	permil: "‰",
	lsaquo: "‹",
	rsaquo: "›",
	euro: "€"
}, kp = [
	"cent",
	"copy",
	"divide",
	"gt",
	"lt",
	"not",
	"para",
	"times"
], Ap = {}.hasOwnProperty, jp = {}, Mp;
for (Mp in Op) Ap.call(Op, Mp) && (jp[Op[Mp]] = Mp);
var Np = /[^\dA-Za-z]/;
function Pp(e, t, n, r) {
	let i = String.fromCharCode(e);
	if (Ap.call(jp, i)) {
		let e = jp[i], a = "&" + e;
		return n && Dp.includes(e) && !kp.includes(e) && (!r || t && t !== 61 && Np.test(String.fromCharCode(t))) ? a : a + ";";
	}
	return "";
}
//#endregion
//#region ../../node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/util/format-smart.js
function Fp(e, t, n) {
	let r = wp(e, t, n.omitOptionalSemicolons), i;
	if ((n.useNamedReferences || n.useShortestReferences) && (i = Pp(e, t, n.omitOptionalSemicolons, n.attribute)), (n.useShortestReferences || !i) && n.useShortestReferences) {
		let i = Ep(e, t, n.omitOptionalSemicolons);
		i.length < r.length && (r = i);
	}
	return i && (!n.useShortestReferences || i.length < r.length) ? i : r;
}
//#endregion
//#region ../../node_modules/.pnpm/stringify-entities@4.0.4/node_modules/stringify-entities/lib/index.js
function Ip(e, t) {
	return bp(e, Object.assign({ format: Fp }, t));
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/comment.js
var Lp = /^>|^->|<!--|-->|--!>|<!-$/g, Rp = [">"], zp = ["<", ">"];
function Bp(e, t, n, r) {
	return r.settings.bogusComments ? "<?" + Ip(e.value, Object.assign({}, r.settings.characterReferences, { subset: Rp })) + ">" : "<!--" + e.value.replace(Lp, i) + "-->";
	function i(e) {
		return Ip(e, Object.assign({}, r.settings.characterReferences, { subset: zp }));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/doctype.js
function Vp(e, t, n, r) {
	return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
//#endregion
//#region ../../node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js
function Hp(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js
function Up(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region ../../node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js
function Wp(e) {
	return e.join(" ").trim();
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js
var Gp = /[ \t\n\f\r]/g;
function Kp(e) {
	return typeof e == "object" ? e.type === "text" && qp(e.value) : qp(e);
}
function qp(e) {
	return e.replace(Gp, "") === "";
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/omission/util/siblings.js
var Jp = Zp(1), Yp = Zp(-1), Xp = [];
function Zp(e) {
	return t;
	function t(t, n, r) {
		let i = t ? t.children : Xp, a = (n || 0) + e, o = i[a];
		if (!r) for (; o && Kp(o);) a += e, o = i[a];
		return o;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/omission/omission.js
var Qp = {}.hasOwnProperty;
function $p(e) {
	return t;
	function t(t, n, r) {
		return Qp.call(e, t.tagName) && e[t.tagName](t, n, r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/omission/closing.js
var em = $p({
	body: rm,
	caption: tm,
	colgroup: tm,
	dd: sm,
	dt: om,
	head: tm,
	html: nm,
	li: am,
	optgroup: lm,
	option: um,
	p: im,
	rp: cm,
	rt: cm,
	tbody: fm,
	td: hm,
	tfoot: pm,
	th: hm,
	thead: dm,
	tr: mm
});
function tm(e, t, n) {
	let r = Jp(n, t, !0);
	return !r || r.type !== "comment" && !(r.type === "text" && Kp(r.value.charAt(0)));
}
function nm(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type !== "comment";
}
function rm(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type !== "comment";
}
function im(e, t, n) {
	let r = Jp(n, t);
	return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || n.type !== "element" || n.tagName !== "a" && n.tagName !== "audio" && n.tagName !== "del" && n.tagName !== "ins" && n.tagName !== "map" && n.tagName !== "noscript" && n.tagName !== "video";
}
function am(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type === "element" && r.tagName === "li";
}
function om(e, t, n) {
	let r = Jp(n, t);
	return !(!r || r.type !== "element" || r.tagName !== "dt" && r.tagName !== "dd");
}
function sm(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function cm(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function lm(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type === "element" && r.tagName === "optgroup";
}
function um(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function dm(e, t, n) {
	let r = Jp(n, t);
	return !(!r || r.type !== "element" || r.tagName !== "tbody" && r.tagName !== "tfoot");
}
function fm(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function pm(e, t, n) {
	return !Jp(n, t);
}
function mm(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type === "element" && r.tagName === "tr";
}
function hm(e, t, n) {
	let r = Jp(n, t);
	return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/omission/opening.js
var gm = $p({
	body: ym,
	colgroup: bm,
	head: vm,
	html: _m,
	tbody: xm
});
function _m(e) {
	let t = Jp(e, -1);
	return !t || t.type !== "comment";
}
function vm(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.children) if (n.type === "element" && (n.tagName === "base" || n.tagName === "title")) {
		if (t.has(n.tagName)) return !1;
		t.add(n.tagName);
	}
	let n = e.children[0];
	return !n || n.type === "element";
}
function ym(e) {
	let t = Jp(e, -1, !0);
	return !t || t.type !== "comment" && !(t.type === "text" && Kp(t.value.charAt(0))) && (t.type !== "element" || t.tagName !== "meta" && t.tagName !== "link" && t.tagName !== "script" && t.tagName !== "style" && t.tagName !== "template");
}
function bm(e, t, n) {
	let r = Yp(n, t), i = Jp(e, -1, !0);
	return n && r && r.type === "element" && r.tagName === "colgroup" && em(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === "element" && i.tagName === "col");
}
function xm(e, t, n) {
	let r = Yp(n, t), i = Jp(e, -1);
	return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && em(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === "element" && i.tagName === "tr");
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/element.js
var Sm = {
	name: [["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")], ["\0	\n\f\r \"&'/<=>".split(""), "\0	\n\f\r \"&'/<=>`".split("")]],
	unquoted: [["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")], ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]],
	single: [["&'".split(""), "\"&'`".split("")], ["\0&'".split(""), "\0\"&'`".split("")]],
	double: [["\"&".split(""), "\"&'`".split("")], ["\0\"&".split(""), "\0\"&'`".split("")]]
};
function Cm(e, t, n, r) {
	let i = r.schema, a = i.space !== "svg" && r.settings.omitOptionalTags, o = i.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase()), s = [], c;
	i.space === "html" && e.tagName === "svg" && (r.schema = fp);
	let l = wm(r, e.properties), u = r.all(i.space === "html" && e.tagName === "template" ? e.content : e);
	return r.schema = i, u && (o = !1), (l || !a || !gm(e, t, n)) && (s.push("<", e.tagName, l ? " " + l : ""), o && (i.space === "svg" || r.settings.closeSelfClosing) && (c = l.charAt(l.length - 1), (!r.settings.tightSelfClosing || c === "/" || c && c !== "\"" && c !== "'") && s.push(" "), s.push("/")), s.push(">")), s.push(u), !o && (!a || !em(e, t, n)) && s.push("</" + e.tagName + ">"), s.join("");
}
function wm(e, t) {
	let n = [], r = -1, i;
	if (t) {
		for (i in t) if (t[i] !== null && t[i] !== void 0) {
			let r = Tm(e, i, t[i]);
			r && n.push(r);
		}
	}
	for (; ++r < n.length;) {
		let t = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : void 0;
		r !== n.length - 1 && t !== "\"" && t !== "'" && (n[r] += " ");
	}
	return n.join("");
}
function Tm(e, t, n) {
	let r = cp(e.schema, t), i = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, a = +!e.settings.allowDangerousCharacters, o = e.quote, s;
	if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean) && (typeof n != "string" || n === r.attribute || n === "") && (n = !!n), n == null || n === !1 || typeof n == "number" && Number.isNaN(n)) return "";
	let c = Ip(r.attribute, Object.assign({}, e.settings.characterReferences, { subset: Sm.name[i][a] }));
	return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? Up : Wp)(n, { padLeft: !e.settings.tightCommaSeparatedLists }) : String(n), e.settings.collapseEmptyAttributes && !n) ? c : (e.settings.preferUnquoted && (s = Ip(n, Object.assign({}, e.settings.characterReferences, {
		attribute: !0,
		subset: Sm.unquoted[i][a]
	}))), s !== n && (e.settings.quoteSmart && Hp(n, o) > Hp(n, e.alternative) && (o = e.alternative), s = o + Ip(n, Object.assign({}, e.settings.characterReferences, {
		subset: (o === "'" ? Sm.single : Sm.double)[i][a],
		attribute: !0
	})) + o), c + (s && "=" + s));
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/text.js
var Em = ["<", "&"];
function Dm(e, t, n, r) {
	return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : Ip(e.value, Object.assign({}, r.settings.characterReferences, { subset: Em }));
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/raw.js
function Om(e, t, n, r) {
	return r.settings.allowDangerousHtml ? e.value : Dm(e, t, n, r);
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/root.js
function km(e, t, n, r) {
	return r.all(e);
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/handle/index.js
var Am = mp("type", {
	invalid: jm,
	unknown: Mm,
	handlers: {
		comment: Bp,
		doctype: Vp,
		element: Cm,
		raw: Om,
		root: km,
		text: Dm
	}
});
function jm(e) {
	throw Error("Expected node, not `" + e + "`");
}
function Mm(e) {
	throw Error("Cannot compile unknown node `" + e.type + "`");
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-html@9.0.5/node_modules/hast-util-to-html/lib/index.js
var Nm = {}, Pm = {}, Fm = [];
function Im(e, t) {
	let n = t || Nm, r = n.quote || "\"", i = r === "\"" ? "'" : "\"";
	if (r !== "\"" && r !== "'") throw Error("Invalid quote `" + r + "`, expected `'` or `\"`");
	return {
		one: Lm,
		all: Rm,
		settings: {
			omitOptionalTags: n.omitOptionalTags || !1,
			allowParseErrors: n.allowParseErrors || !1,
			allowDangerousCharacters: n.allowDangerousCharacters || !1,
			quoteSmart: n.quoteSmart || !1,
			preferUnquoted: n.preferUnquoted || !1,
			tightAttributes: n.tightAttributes || !1,
			upperDoctype: n.upperDoctype || !1,
			tightDoctype: n.tightDoctype || !1,
			bogusComments: n.bogusComments || !1,
			tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
			tightSelfClosing: n.tightSelfClosing || !1,
			collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
			allowDangerousHtml: n.allowDangerousHtml || !1,
			voids: n.voids || Ff,
			characterReferences: n.characterReferences || Pm,
			closeSelfClosing: n.closeSelfClosing || !1,
			closeEmptyElements: n.closeEmptyElements || !1
		},
		schema: n.space === "svg" ? fp : dp,
		quote: r,
		alternative: i
	}.one(Array.isArray(e) ? {
		type: "root",
		children: e
	} : e, void 0, void 0);
}
function Lm(e, t, n) {
	return Am(e, t, n, this);
}
function Rm(e) {
	let t = [], n = e && e.children || Fm, r = -1;
	for (; ++r < n.length;) t[r] = this.one(n[r], r, e);
	return t.join("");
}
//#endregion
//#region ../../node_modules/.pnpm/rehype-stringify@10.0.1/node_modules/rehype-stringify/lib/index.js
function zm(e) {
	let t = this, n = {
		...t.data("settings"),
		...e
	};
	t.compiler = r;
	function r(e) {
		return Im(e, n);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/index.js
var Bm = Ym(/[A-Za-z]/), Vm = Ym(/[\dA-Za-z]/), Hm = Ym(/[#-'*+\--9=?A-Z^-~]/);
function Um(e) {
	return e !== null && (e < 32 || e === 127);
}
var Wm = Ym(/\d/), Gm = Ym(/[\dA-Fa-f]/), Km = Ym(/[!-/:-@[-`{-~]/);
function X(e) {
	return e !== null && e < -2;
}
function Z(e) {
	return e !== null && (e < 0 || e === 32);
}
function Q(e) {
	return e === -2 || e === -1 || e === 32;
}
var qm = Ym(/\p{P}|\p{S}/u), Jm = Ym(/\s/);
function Ym(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/escape-string-regexp@5.0.0/node_modules/escape-string-regexp/index.js
function Xm(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region ../../node_modules/.pnpm/unist-util-is@6.0.0/node_modules/unist-util-is/lib/index.js
var Zm = (function(e) {
	if (e == null) return nh;
	if (typeof e == "function") return th(e);
	if (typeof e == "object") return Array.isArray(e) ? Qm(e) : $m(e);
	if (typeof e == "string") return eh(e);
	throw Error("Expected function, string, or object as test");
});
function Qm(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = Zm(e[n]);
	return th(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function $m(e) {
	let t = e;
	return th(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function eh(e) {
	return th(t);
	function t(t) {
		return t && t.type === e;
	}
}
function th(e) {
	return t;
	function t(t, n, r) {
		return !!(rh(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function nh() {
	return !0;
}
function rh(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.js
function ih(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js
var ah = [];
function oh(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = Zm(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + ih(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = ah, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = sh(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function sh(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? ah : [e];
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-find-and-replace@3.0.2/node_modules/mdast-util-find-and-replace/lib/index.js
function ch(e, t, n) {
	let r = Zm((n || {}).ignore || []), i = lh(t), a = -1;
	for (; ++a < i.length;) oh(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return s(e, t);
	}
	function s(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function lh(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([uh(e[0]), dh(e[1])]);
	}
	return t;
}
function uh(e) {
	return typeof e == "string" ? new RegExp(Xm(e), "g") : e;
}
function dh(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-autolink-literal@2.0.1/node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var fh = "phrasing", ph = [
	"autolink",
	"link",
	"image",
	"label"
];
function mh() {
	return {
		transforms: [Sh],
		enter: {
			literalAutolink: gh,
			literalAutolinkEmail: _h,
			literalAutolinkHttp: _h,
			literalAutolinkWww: _h
		},
		exit: {
			literalAutolink: xh,
			literalAutolinkEmail: bh,
			literalAutolinkHttp: vh,
			literalAutolinkWww: yh
		}
	};
}
function hh() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: fh,
			notInConstruct: ph
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: fh,
			notInConstruct: ph
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: fh,
			notInConstruct: ph
		}
	] };
}
function gh(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function _h(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function vh(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function yh(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function bh(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function xh(e) {
	this.exit(e);
}
function Sh(e) {
	ch(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Ch], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, wh]], { ignore: ["link", "linkReference"] });
}
function Ch(e, t, n, r, i) {
	let a = "";
	if (!Dh(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !Th(n))) return !1;
	let o = Eh(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function wh(e, t, n, r) {
	return !Dh(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function Th(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Eh(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = Hp(e, "("), a = Hp(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function Dh(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || Jm(n) || qm(n)) && (!t || n !== 47);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/index.js
function Oh(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-footnote@2.1.0/node_modules/mdast-util-gfm-footnote/lib/index.js
Rh.peek = Lh;
function kh() {
	this.buffer();
}
function Ah(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function jh() {
	this.buffer();
}
function Mh(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function Nh(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = Oh(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Ph(e) {
	this.exit(e);
}
function Fh(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = Oh(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function Ih(e) {
	this.exit(e);
}
function Lh() {
	return "[";
}
function Rh(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function zh() {
	return {
		enter: {
			gfmFootnoteCallString: kh,
			gfmFootnoteCall: Ah,
			gfmFootnoteDefinitionLabelString: jh,
			gfmFootnoteDefinition: Mh
		},
		exit: {
			gfmFootnoteCallString: Nh,
			gfmFootnoteCall: Ph,
			gfmFootnoteDefinitionLabelString: Fh,
			gfmFootnoteDefinition: Ih
		}
	};
}
function Bh(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: Rh
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? Hh : Vh))), s(), o;
	}
}
function Vh(e, t, n) {
	return t === 0 ? e : Hh(e, t, n);
}
function Hh(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-strikethrough@2.0.0/node_modules/mdast-util-gfm-strikethrough/lib/index.js
var Uh = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
Jh.peek = Yh;
function Wh() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: Kh },
		exit: { strikethrough: qh }
	};
}
function Gh() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: Uh
		}],
		handlers: { delete: Jh }
	};
}
function Kh(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function qh(e) {
	this.exit(e);
}
function Jh(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function Yh() {
	return "~";
}
//#endregion
//#region ../../node_modules/.pnpm/markdown-table@3.0.4/node_modules/markdown-table/index.js
function Xh(e) {
	return e.length;
}
function Zh(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Xh, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = Qh(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = $h(r[d]);
	else {
		let e = $h(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && (n.alignDelimiters !== !1 || i !== "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function Qh(e) {
	return e == null ? "" : String(e);
}
function $h(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function eg(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), tg);
	return i(), o;
}
function tg(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function ng(e, t) {
	return rg(e, t.inConstruct, !0) && !rg(e, t.notInConstruct, !1);
}
function rg(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/break.js
function ig(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && ng(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region ../../node_modules/.pnpm/longest-streak@3.1.0/node_modules/longest-streak/index.js
function ag(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function og(e, t) {
	return !(t.options.fences !== !1 || !e.value || e.lang || !/[^ \r\n]/.test(e.value) || /^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function sg(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/code.js
function cg(e, t, n, r) {
	let i = sg(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (og(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, lg);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(ag(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		u += s.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...s.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		u += s.move(" "), u += s.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...s.current()
		})), t();
	}
	return u += s.move("\n"), a && (u += s.move(a + "\n")), u += s.move(c), l(), u;
}
function lg(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function ug(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/definition.js
function dg(e, t, n, r) {
	let i = ug(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function fg(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function pg(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-classify-character@2.0.1/node_modules/micromark-util-classify-character/index.js
function mg(e) {
	if (e === null || Z(e) || Jm(e)) return 1;
	if (qm(e)) return 2;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function hg(e, t, n) {
	let r = mg(e), i = mg(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
gg.peek = _g;
function gg(e, t, n, r) {
	let i = fg(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = hg(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = pg(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = hg(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + pg(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function _g(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region ../../node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js
function vg(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), oh(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js
var yg = {};
function bg(e, t) {
	let n = t || yg;
	return xg(e, typeof n.includeImageAlt != "boolean" || n.includeImageAlt, typeof n.includeHtml != "boolean" || n.includeHtml);
}
function xg(e, t, n) {
	if (Cg(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Sg(e.children, t, n);
	}
	return Array.isArray(e) ? Sg(e, t, n) : "";
}
function Sg(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = xg(e[i], t, n);
	return r.join("");
}
function Cg(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function wg(e, t) {
	let n = !1;
	return vg(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && bg(e) && (t.options.setext || n));
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/heading.js
function Tg(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (wg(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(l) && (l = pg(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/html.js
Eg.peek = Dg;
function Eg(e) {
	return e.value || "";
}
function Dg() {
	return "<";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/image.js
Og.peek = kg;
function Og(e, t, n, r) {
	let i = ug(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function kg() {
	return "!";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
Ag.peek = jg;
function Ag(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function jg() {
	return "!";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
Mg.peek = Ng;
function Mg(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function Ng() {
	return "`";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function Pg(e, t) {
	let n = bg(e);
	return !(t.options.resourceLink || !e.url || e.title || !e.children || e.children.length !== 1 || e.children[0].type !== "text" || n !== e.url && "mailto:" + n !== e.url || !/^[a-z][a-z+.-]+:/i.test(e.url) || /[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/link.js
Fg.peek = Ig;
function Fg(e, t, n, r) {
	let i = ug(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (Pg(e, n)) {
		let t = n.stack;
		n.stack = [], s = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), s(), n.stack = t, r;
	}
	s = n.enter("link"), c = n.enter("label");
	let l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function Ig(e, t, n) {
	return Pg(e, n) ? "<" : "[";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
Lg.peek = Rg;
function Lg(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Rg() {
	return "[";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function zg(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function Bg(e) {
	let t = zg(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function Vg(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function Hg(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/list.js
function Ug(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? Vg(n) : zg(n), s = e.ordered ? o === "." ? ")" : "." : Bg(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), Hg(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function Wg(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function Gg(e, t, n, r) {
	let i = Wg(n), a = n.bulletCurrent || zg(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function Kg(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-phrasing@4.1.0/node_modules/mdast-util-phrasing/lib/index.js
var qg = Zm([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/root.js
function Jg(e, t, n, r) {
	return (e.children.some(function(e) {
		return qg(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function Yg(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/strong.js
Xg.peek = Zg;
function Xg(e, t, n, r) {
	let i = Yg(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = hg(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = pg(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = hg(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + pg(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function Zg(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/text.js
function Qg(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function $g(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function e_(e, t, n) {
	let r = (Hg(n) + (n.options.ruleSpaces ? " " : "")).repeat($g(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/index.js
var t_ = {
	blockquote: eg,
	break: ig,
	code: cg,
	definition: dg,
	emphasis: gg,
	hardBreak: ig,
	heading: Tg,
	html: Eg,
	image: Og,
	imageReference: Ag,
	inlineCode: Mg,
	link: Fg,
	linkReference: Lg,
	list: Ug,
	listItem: Gg,
	paragraph: Kg,
	root: Jg,
	strong: Xg,
	text: Qg,
	thematicBreak: e_
}, n_ = document.createElement("i");
function r_(e) {
	let t = "&" + e + ";";
	n_.innerHTML = t;
	let n = n_.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" ? !1 : n !== t && n;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/index.js
function i_(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-decode-string@2.0.1/node_modules/micromark-util-decode-string/index.js
var a_ = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function o_(e) {
	return e.replace(a_, s_);
}
function s_(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return i_(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return r_(n) || e;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js
function c_() {
	return {
		enter: {
			table: l_,
			tableData: p_,
			tableHeader: p_,
			tableRow: d_
		},
		exit: {
			codeText: m_,
			table: u_,
			tableData: f_,
			tableHeader: f_,
			tableRow: f_
		}
	};
}
function l_(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function u_(e) {
	this.exit(e), this.data.inTable = void 0;
}
function d_(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function f_(e) {
	this.exit(e);
}
function p_(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function m_(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, h_));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function h_(e, t) {
	return t === "|" ? t : e;
}
function g_(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return Zh(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = t_.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-task-list-item@2.0.0/node_modules/mdast-util-gfm-task-list-item/lib/index.js
function __() {
	return { exit: {
		taskListCheckValueChecked: y_,
		taskListCheckValueUnchecked: y_,
		paragraph: b_
	} };
}
function v_() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: x_ }
	};
}
function y_(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function b_(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function x_(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = t_.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm@3.1.0/node_modules/mdast-util-gfm/lib/index.js
function S_() {
	return [
		mh(),
		zh(),
		Wh(),
		c_(),
		__()
	];
}
function C_(e) {
	return { extensions: [
		hh(),
		Bh(e),
		Gh(),
		g_(e),
		v_()
	] };
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/index.js
function w_(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function T_(e, t) {
	return e.length > 0 ? (w_(e, e.length, 0, t), e) : t;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-combine-extensions@2.0.1/node_modules/micromark-util-combine-extensions/index.js
var E_ = {}.hasOwnProperty;
function D_(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) O_(t, e[n]);
	return t;
}
function O_(e, t) {
	let n;
	for (n in t) {
		let r = (E_.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			E_.call(r, a) || (r[a] = []);
			let e = i[a];
			k_(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function k_(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	w_(e, 0, 0, r);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-autolink-literal@2.1.0/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var A_ = {
	tokenize: W_,
	partial: !0
}, j_ = {
	tokenize: G_,
	partial: !0
}, M_ = {
	tokenize: K_,
	partial: !0
}, N_ = {
	tokenize: q_,
	partial: !0
}, P_ = {
	tokenize: J_,
	partial: !0
}, F_ = {
	name: "wwwAutolink",
	tokenize: H_,
	previous: Y_
}, I_ = {
	name: "protocolAutolink",
	tokenize: U_,
	previous: X_
}, L_ = {
	name: "emailAutolink",
	tokenize: V_,
	previous: Z_
}, R_ = {};
function z_() {
	return { text: R_ };
}
for (var B_ = 48; B_ < 123;) R_[B_] = L_, B_++, B_ === 58 ? B_ = 65 : B_ === 91 && (B_ = 97);
R_[43] = L_, R_[45] = L_, R_[46] = L_, R_[95] = L_, R_[72] = [L_, I_], R_[104] = [L_, I_], R_[87] = [L_, F_], R_[119] = [L_, F_];
function V_(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !Q_(t) || !Z_.call(r, r.previous) || $_(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return Q_(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(P_, u, l)(t) : t === 45 || t === 95 || Vm(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && Bm(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function H_(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !Y_.call(r, r.previous) || $_(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(A_, e.attempt(j_, e.attempt(M_, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function U_(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && X_.call(r, r.previous) && !$_(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (Bm(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || Um(t) || Z(t) || Jm(t) || qm(t) ? n(t) : e.attempt(j_, e.attempt(M_, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function W_(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function G_(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(N_, c, s)(t) : t === null || Z(t) || Jm(t) || t !== 45 && qm(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function K_(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(N_, t, a)(o) : o === null || Z(o) || Jm(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function q_(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || Z(o) || Jm(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || Z(e) || Jm(e) ? t(e) : r(e);
	}
	function a(e) {
		return Bm(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : Bm(t) ? (e.consume(t), o) : n(t);
	}
}
function J_(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return Vm(e) ? n(e) : t(e);
	}
}
function Y_(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Z(e);
}
function X_(e) {
	return !Bm(e);
}
function Z_(e) {
	return !(e === 47 || Q_(e));
}
function Q_(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || Vm(e);
}
function $_(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/index.js
function ev(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && Vm(e.charCodeAt(n + 1)) && Vm(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-resolve-all@2.0.1/node_modules/micromark-util-resolve-all/index.js
function tv(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/attention.js
var nv = {
	name: "attention",
	resolveAll: rv,
	tokenize: iv
};
function rv(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			av(d, -c), av(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = T_(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = T_(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = T_(l, tv(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = T_(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = T_(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, w_(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function iv(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = mg(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = mg(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function av(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/autolink.js
var ov = {
	name: "autolink",
	tokenize: sv
};
function sv(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return Bm(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || Vm(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || Vm(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || Um(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : Hm(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return Vm(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || Vm(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/index.js
function $(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return Q(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return Q(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/blank-line.js
var cv = {
	partial: !0,
	tokenize: lv
};
function lv(e, t, n) {
	return r;
	function r(t) {
		return Q(t) ? $(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || X(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/block-quote.js
var uv = {
	continuation: { tokenize: fv },
	exit: pv,
	name: "blockQuote",
	tokenize: dv
};
function dv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return Q(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function fv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Q(t) ? $(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(uv, t, n)(r);
	}
}
function pv(e) {
	e.exit("blockQuote");
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/character-escape.js
var mv = {
	name: "characterEscape",
	tokenize: hv
};
function hv(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return Km(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/character-reference.js
var gv = {
	name: "characterReference",
	tokenize: _v
};
function _v(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = Vm, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Gm, u) : (e.enter("characterReferenceValue"), a = 7, o = Wm, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === Vm && !r_(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-fenced.js
var vv = {
	partial: !0,
	tokenize: xv
}, yv = {
	concrete: !0,
	name: "codeFenced",
	tokenize: bv
};
function bv(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || X(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(vv, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || X(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || X(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || X(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && Q(t) ? $(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || X(t) ? e.check(vv, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || X(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), Q(t) ? $(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || X(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function xv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-indented.js
var Sv = {
	name: "codeIndented",
	tokenize: wv
}, Cv = {
	partial: !0,
	tokenize: Tv
};
function wv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : X(t) ? e.attempt(Cv, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || X(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Tv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : X(e) ? i(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-text.js
var Ev = {
	name: "codeText",
	previous: Ov,
	resolve: Dv,
	tokenize: kv
};
function Dv(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function Ov(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function kv(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || X(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Av = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && jv(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), jv(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), jv(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) {
			if (e < this.left.length) {
				let t = this.left.splice(e, Infinity);
				jv(this.right, t.reverse());
			} else {
				let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
				jv(this.left, t.reverse());
			}
		}
	}
};
function jv(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/index.js
function Mv(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Av(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Nv(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (o[1].type !== "linePrefix" && o[1].type !== "listItemIndent") break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return w_(e, 0, Infinity, u.slice(0)), !l;
}
function Nv(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/content.js
var Pv = {
	resolve: Iv,
	tokenize: Lv
}, Fv = {
	partial: !0,
	tokenize: Rv
};
function Iv(e) {
	return Mv(e), e;
}
function Lv(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : X(t) ? e.check(Fv, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function Rv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || X(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-destination@2.0.1/node_modules/micromark-factory-destination/index.js
function zv(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || Um(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || X(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || Z(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || Um(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-label@2.0.1/node_modules/micromark-factory-label/index.js
function Bv(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || 
		/* c8 ignore next 3 */
		l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || X(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !Q(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-title@2.0.1/node_modules/micromark-factory-title/index.js
function Vv(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || X(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-whitespace@2.0.1/node_modules/micromark-factory-whitespace/index.js
function Hv(e, t) {
	let n;
	return r;
	function r(i) {
		return X(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? $(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/definition.js
var Uv = {
	name: "definition",
	tokenize: Gv
}, Wv = {
	partial: !0,
	tokenize: Kv
};
function Gv(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Bv.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = Oh(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return Z(t) ? Hv(e, l)(t) : l(t);
	}
	function l(t) {
		return zv(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(Wv, d, d)(t);
	}
	function d(t) {
		return Q(t) ? $(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || X(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Kv(e, t, n) {
	return r;
	function r(t) {
		return Z(t) ? Hv(e, i)(t) : n(t);
	}
	function i(t) {
		return Vv(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Q(t) ? $(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || X(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var qv = {
	name: "hardBreakEscape",
	tokenize: Jv
};
function Jv(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return X(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/heading-atx.js
var Yv = {
	name: "headingAtx",
	resolve: Xv,
	tokenize: Zv
};
function Xv(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, w_(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function Zv(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || Z(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || X(n) ? (e.exit("atxHeading"), t(n)) : Q(n) ? $(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || Z(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-html-tag-name@2.0.1/node_modules/micromark-util-html-tag-name/index.js
var Qv = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), $v = [
	"pre",
	"script",
	"style",
	"textarea"
], ey = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: ry,
	tokenize: iy
}, ty = {
	partial: !0,
	tokenize: oy
}, ny = {
	partial: !0,
	tokenize: ay
};
function ry(e) {
	let t = e.length;
	for (; t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function iy(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : oe) : Bm(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : Bm(a) ? (e.consume(a), i = 4, r.interrupt ? t : oe) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : oe) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : D : m) : n(i);
	}
	function h(t) {
		return Bm(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || Z(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && $v.includes(l) ? (i = 1, r.interrupt ? t(s) : D(s)) : Qv.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : D(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || Vm(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : D) : n(i);
	}
	function v(t) {
		return Q(t) ? (e.consume(t), v) : T(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), T) : t === 58 || t === 95 || Bm(t) ? (e.consume(t), b) : Q(t) ? (e.consume(t), y) : T(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || Vm(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Q(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Q(t) ? (e.consume(t), S) : ee(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, w) : t === null || X(t) ? n(t) : (e.consume(t), C);
	}
	function ee(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || Z(t) ? x(t) : (e.consume(t), ee);
	}
	function w(e) {
		return e === 47 || e === 62 || Q(e) ? y(e) : n(e);
	}
	function T(t) {
		return t === 62 ? (e.consume(t), E) : n(t);
	}
	function E(t) {
		return t === null || X(t) ? D(t) : Q(t) ? (e.consume(t), E) : n(t);
	}
	function D(t) {
		return t === 45 && i === 2 ? (e.consume(t), ie) : t === 60 && i === 1 ? (e.consume(t), O) : t === 62 && i === 4 ? (e.consume(t), A) : t === 63 && i === 3 ? (e.consume(t), oe) : t === 93 && i === 5 ? (e.consume(t), k) : X(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ty, se, te)(t)) : t === null || X(t) ? (e.exit("htmlFlowData"), te(t)) : (e.consume(t), D);
	}
	function te(t) {
		return e.check(ny, ne, se)(t);
	}
	function ne(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), re;
	}
	function re(t) {
		return t === null || X(t) ? te(t) : (e.enter("htmlFlowData"), D(t));
	}
	function ie(t) {
		return t === 45 ? (e.consume(t), oe) : D(t);
	}
	function O(t) {
		return t === 47 ? (e.consume(t), o = "", ae) : D(t);
	}
	function ae(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return $v.includes(n) ? (e.consume(t), A) : D(t);
		}
		return Bm(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), ae) : D(t);
	}
	function k(t) {
		return t === 93 ? (e.consume(t), oe) : D(t);
	}
	function oe(t) {
		return t === 62 ? (e.consume(t), A) : t === 45 && i === 2 ? (e.consume(t), oe) : D(t);
	}
	function A(t) {
		return t === null || X(t) ? (e.exit("htmlFlowData"), se(t)) : (e.consume(t), A);
	}
	function se(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function ay(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function oy(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(cv, t, n);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/html-text.js
var sy = {
	name: "htmlText",
	tokenize: cy
};
function cy(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : Bm(t) ? (e.consume(t), ee) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : Bm(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : X(t) ? (o = d, O(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? ie(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : X(t) ? (o = h, O(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? ie(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? ie(t) : X(t) ? (o = v, O(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : X(t) ? (o = y, O(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? ie(e) : y(e);
	}
	function x(t) {
		return Bm(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || Vm(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return X(t) ? (o = C, O(t)) : Q(t) ? (e.consume(t), C) : ie(t);
	}
	function ee(t) {
		return t === 45 || Vm(t) ? (e.consume(t), ee) : t === 47 || t === 62 || Z(t) ? w(t) : n(t);
	}
	function w(t) {
		return t === 47 ? (e.consume(t), ie) : t === 58 || t === 95 || Bm(t) ? (e.consume(t), T) : X(t) ? (o = w, O(t)) : Q(t) ? (e.consume(t), w) : ie(t);
	}
	function T(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || Vm(t) ? (e.consume(t), T) : E(t);
	}
	function E(t) {
		return t === 61 ? (e.consume(t), D) : X(t) ? (o = E, O(t)) : Q(t) ? (e.consume(t), E) : w(t);
	}
	function D(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, te) : X(t) ? (o = D, O(t)) : Q(t) ? (e.consume(t), D) : (e.consume(t), ne);
	}
	function te(t) {
		return t === i ? (e.consume(t), i = void 0, re) : t === null ? n(t) : X(t) ? (o = te, O(t)) : (e.consume(t), te);
	}
	function ne(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || Z(t) ? w(t) : (e.consume(t), ne);
	}
	function re(e) {
		return e === 47 || e === 62 || Z(e) ? w(e) : n(e);
	}
	function ie(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function O(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ae;
	}
	function ae(t) {
		return Q(t) ? $(e, k, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : k(t);
	}
	function k(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-end.js
var ly = {
	name: "labelEnd",
	resolveAll: py,
	resolveTo: my,
	tokenize: hy
}, uy = { tokenize: gy }, dy = { tokenize: _y }, fy = { tokenize: vy };
function py(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && w_(e, 0, e.length, n), e;
}
function my(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = T_(s, e.slice(a + 1, a + r + 3)), s = T_(s, [[
		"enter",
		u,
		t
	]]), s = T_(s, tv(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = T_(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = T_(s, e.slice(o + 1)), s = T_(s, [[
		"exit",
		c,
		t
	]]), w_(e, a, e.length, s), e;
}
function hy(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(Oh(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(uy, u, o ? u : d)(t) : t === 91 ? e.attempt(dy, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(fy, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function gy(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return Z(t) ? Hv(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : zv(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return Z(t) ? Hv(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? Vv(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return Z(t) ? Hv(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function _y(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Bv.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(Oh(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function vy(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-start-image.js
var yy = {
	name: "labelStartImage",
	resolveAll: ly.resolveAll,
	tokenize: by
};
function by(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-start-link.js
var xy = {
	name: "labelStartLink",
	resolveAll: ly.resolveAll,
	tokenize: Sy
};
function Sy(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/line-ending.js
var Cy = {
	name: "lineEnding",
	tokenize: wy
};
function wy(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/thematic-break.js
var Ty = {
	name: "thematicBreak",
	tokenize: Ey
};
function Ey(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || X(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Q(t) ? $(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/list.js
var Dy = {
	continuation: { tokenize: jy },
	exit: Ny,
	name: "list",
	tokenize: Ay
}, Oy = {
	partial: !0,
	tokenize: Py
}, ky = {
	partial: !0,
	tokenize: My
};
function Ay(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : Wm(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Ty, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return Wm(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(cv, r.interrupt ? n : u, e.attempt(Oy, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return Q(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function jy(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(cv, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ky, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, $(e, e.attempt(Dy, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function My(e, t, n) {
	let r = this;
	return $(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function Ny(e) {
	e.exit(this.containerState.type);
}
function Py(e, t, n) {
	let r = this;
	return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Q(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/setext-underline.js
var Fy = {
	name: "setextUnderline",
	resolveTo: Iy,
	tokenize: Ly
};
function Iy(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function Ly(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), Q(t) ? $(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || X(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-footnote@2.1.0/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var Ry = {
	tokenize: Ky,
	partial: !0
};
function zy() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: Uy,
			continuation: { tokenize: Wy },
			exit: Gy
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: Hy
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: By,
				resolveTo: Vy
			}
		}
	};
}
function By(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = Oh(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function Vy(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function Hy(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || Z(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(Oh(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return Z(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function Uy(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || Z(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = Oh(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return Z(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), $(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function Wy(e, t, n) {
	return e.check(cv, t, e.attempt(Ry, t, n));
}
function Gy(e) {
	e.exit("gfmFootnoteDefinition");
}
function Ky(e, t, n) {
	let r = this;
	return $(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-strikethrough@2.1.0/node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function qy(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && w_(o, o.length, 0, tv(s, e.slice(r + 1, n), t)), w_(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), w_(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = mg(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = mg(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/edit-map.js
var Jy = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		Yy(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function Yy(e, t, n, r) {
	let i = 0;
	if (n !== 0 || r.length !== 0) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/infer.js
function Xy(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/syntax.js
function Zy() {
	return { flow: { null: {
		name: "table",
		tokenize: Qy,
		resolveAll: $y
	} } };
}
function Qy(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? S : c;
		return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 ? u(e) : (o = !0, a += 1, u(e));
	}
	function u(t) {
		return t === null ? n(t) : X(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : Q(t) ? $(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || Z(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, Q(t) ? $(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return Q(t) ? $(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || X(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return Q(t) ? $(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || X(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function S(t) {
		return e.enter("tableRow"), C(t);
	}
	function C(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), C) : n === null || X(n) ? (e.exit("tableRow"), t(n)) : Q(n) ? $(e, C, "whitespace")(n) : (e.enter("data"), ee(n));
	}
	function ee(t) {
		return t === null || t === 124 || Z(t) ? (e.exit("data"), C(t)) : (e.consume(t), t === 92 ? w : ee);
	}
	function w(t) {
		return t === 92 || t === 124 ? (e.consume(t), ee) : ee(t);
	}
}
function $y(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new Jy();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (tb(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = eb(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = eb(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = eb(f, t, o, i, n, d)) : (o[0] = o[1], d = eb(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && tb(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = Xy(t.events, n));
	}
	return e;
}
function eb(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, nb(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = nb(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = nb(t.events, n[2]), a = nb(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, nb(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function tb(e, t, n, r, i) {
	let a = [], o = nb(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function nb(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-task-list-item@2.1.0/node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var rb = {
	name: "tasklistCheck",
	tokenize: ab
};
function ib() {
	return { text: { 91: rb } };
}
function ab(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return Z(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return X(r) ? t(r) : Q(r) ? e.check({ tokenize: ob }, t, n)(r) : n(r);
	}
}
function ob(e, t, n) {
	return $(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm@3.0.0/node_modules/micromark-extension-gfm/index.js
function sb(e) {
	return D_([
		z_(),
		zy(),
		qy(e),
		Zy(),
		ib()
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm/lib/index.js
var cb = {};
function lb(e) {
	let t = this, n = e || cb, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(sb(n)), a.push(S_()), o.push(C_(n));
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/content.js
var ub = { tokenize: db };
function db(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return X(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/document.js
var fb = { tokenize: mb }, pb = { tokenize: hb };
function mb(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return w_(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !(!i.currentConstruct || i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(pb, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(pb, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return X(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			w_(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function hb(e, t, n) {
	return $(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/flow.js
var gb = { tokenize: _b };
function _b(e) {
	let t = this, n = e.attempt(cv, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Pv, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/text.js
var vb = { resolveAll: Sb() }, yb = xb("string"), bb = xb("text");
function xb(e) {
	return {
		resolveAll: Sb(e === "text" ? Cb : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function Sb(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Cb(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/constructs.js
var wb = /* @__PURE__ */ r({
	attentionMarkers: () => Mb,
	contentInitial: () => Eb,
	disable: () => Nb,
	document: () => Tb,
	flow: () => Ob,
	flowInitial: () => Db,
	insideSpan: () => jb,
	string: () => kb,
	text: () => Ab
}), Tb = {
	42: Dy,
	43: Dy,
	45: Dy,
	48: Dy,
	49: Dy,
	50: Dy,
	51: Dy,
	52: Dy,
	53: Dy,
	54: Dy,
	55: Dy,
	56: Dy,
	57: Dy,
	62: uv
}, Eb = { 91: Uv }, Db = {
	[-2]: Sv,
	[-1]: Sv,
	32: Sv
}, Ob = {
	35: Yv,
	42: Ty,
	45: [Fy, Ty],
	60: ey,
	61: Fy,
	95: Ty,
	96: yv,
	126: yv
}, kb = {
	38: gv,
	92: mv
}, Ab = {
	[-5]: Cy,
	[-4]: Cy,
	[-3]: Cy,
	33: yy,
	38: gv,
	42: nv,
	60: [ov, sy],
	91: xy,
	92: [qv, mv],
	93: ly,
	95: nv,
	96: Ev
}, jb = { null: [nv, vb] }, Mb = { null: [42, 95] }, Nb = { null: [] };
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/create-tokenizer.js
function Pb(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = T_(o, e), g(), o[o.length - 1] === null ? (ee(t, 0), l.events = tv(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return Ib(p(e), t);
	}
	function p(e) {
		return Fb(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, T();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		X(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, T()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		ee(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = w(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function ee(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && w_(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function w() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, T();
		}
	}
	function T() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function Fb(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function Ib(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/parse.js
function Lb(e) {
	let t = {
		constructs: D_([wb, ...(e || {}).extensions || []]),
		content: n(ub),
		defined: [],
		document: n(fb),
		flow: n(gb),
		lazy: {},
		string: n(yb),
		text: n(bb)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Pb(t, e, n);
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/postprocess.js
function Rb(e) {
	for (; !Mv(e););
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/preprocess.js
var zb = /[\0\t\n\r]/g;
function Bb() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (zb.lastIndex = u, c = zb.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js
function Vb(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ub(e.position) : "start" in e || "end" in e ? Ub(e) : "line" in e || "column" in e ? Hb(e) : "";
}
function Hb(e) {
	return Wb(e && e.line) + ":" + Wb(e && e.column);
}
function Ub(e) {
	return Hb(e && e.start) + "-" + Hb(e && e.end);
}
function Wb(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-from-markdown@2.0.2/node_modules/mdast-util-from-markdown/lib/index.js
var Gb = {}.hasOwnProperty;
function Kb(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), qb(n)(Rb(Lb(n).document().write(Bb()(e, t, !0))));
}
function qb(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(_e),
			autolinkProtocol: w,
			autolinkEmail: w,
			atxHeading: a(he),
			blockQuote: a(P),
			characterEscape: w,
			characterReference: w,
			codeFenced: a(F),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(F, o),
			codeText: a(fe, o),
			codeTextData: w,
			data: w,
			codeFlowValue: w,
			definition: a(pe),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(me),
			hardBreakEscape: a(I),
			hardBreakTrailing: a(I),
			htmlFlow: a(L, o),
			htmlFlowData: w,
			htmlText: a(L, o),
			htmlTextData: w,
			image: a(ge),
			label: o,
			link: a(_e),
			listItem: a(ve),
			listItemValue: f,
			listOrdered: a(R, d),
			listUnordered: a(R),
			paragraph: a(ye),
			reference: j,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(he),
			strong: a(be),
			thematicBreak: a(Se)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: de,
			autolinkProtocol: ue,
			blockQuote: c(),
			characterEscapeValue: T,
			characterReferenceMarkerHexadecimal: N,
			characterReferenceMarkerNumeric: N,
			characterReferenceValue: ce,
			characterReference: le,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: T,
			codeIndented: c(_),
			codeText: c(re),
			codeTextData: T,
			data: T,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(D),
			hardBreakTrailing: c(D),
			htmlFlow: c(te),
			htmlFlowData: T,
			htmlText: c(ne),
			htmlTextData: T,
			image: c(O),
			label: k,
			labelText: ae,
			lineEnding: E,
			link: c(ie),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: M,
			resourceDestinationString: oe,
			resourceTitleString: A,
			resource: se,
			setextHeading: c(ee),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	Yb(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			Gb.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || Zb).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: Jb(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: Jb(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (t[1].type !== "linePrefix" && t[1].type !== "blockQuotePrefix" && t[1].type !== "blockQuotePrefixWhitespace" && t[1].type !== "blockQuoteMarker" && t[1].type !== "listItemIndent") break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: Jb(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Zb).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + Vb({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = Jb(e.end);
	}
	function u() {
		return bg(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Oh(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function ee() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function w(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = xe(), n.position = {
			start: Jb(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function T(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = Jb(e.end);
	}
	function E(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = Jb(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (w.call(this, e), T.call(this, e));
	}
	function D() {
		this.data.atHardBreak = !0;
	}
	function te() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ne() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function re() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ie() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function O() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function ae(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = o_(t), n.identifier = Oh(t).toLowerCase();
	}
	function k() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function oe() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function se() {
		this.data.inReference = void 0;
	}
	function j() {
		this.data.referenceType = "collapsed";
	}
	function M(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Oh(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function N(e) {
		this.data.characterReferenceType = e.type;
	}
	function ce(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = i_(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = r_(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function le(e) {
		let t = this.stack.pop();
		t.position.end = Jb(e.end);
	}
	function ue(e) {
		T.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function de(e) {
		T.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function P() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function F() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function fe() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function pe() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function me() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function he() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function I() {
		return { type: "break" };
	}
	function L() {
		return {
			type: "html",
			value: ""
		};
	}
	function ge() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function _e() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function R(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function ve(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function ye() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function be() {
		return {
			type: "strong",
			children: []
		};
	}
	function xe() {
		return {
			type: "text",
			value: ""
		};
	}
	function Se() {
		return { type: "thematicBreak" };
	}
}
function Jb(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function Yb(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? Yb(e, r) : Xb(e, r);
	}
}
function Xb(e, t) {
	let n;
	for (n in t) if (Gb.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function Zb(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + Vb({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + Vb({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + Vb({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region ../../node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js
function Qb(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return Kb(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function $b(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/break.js
function ex(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/code.js
function tx(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {};
	t.lang && (r.className = ["language-" + t.lang]);
	let i = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [i]
	}, e.patch(t, i), i;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/delete.js
function nx(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function rx(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function ix(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = ev(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/heading.js
function ax(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/html.js
function ox(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/revert.js
function sx(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function cx(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return sx(e, t);
	let i = {
		src: ev(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/image.js
function lx(e, t) {
	let n = { src: ev(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function ux(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function dx(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return sx(e, t);
	let i = { href: ev(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/link.js
function fx(e, t) {
	let n = { href: ev(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function px(e, t, n) {
	let r = e.all(t), i = n ? mx(n) : hx(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function mx(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = hx(n[r]);
	}
	return t;
}
function hx(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/list.js
function gx(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function _x(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/root.js
function vx(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/strong.js
function yx(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js
var bx = Sx("end"), xx = Sx("start");
function Sx(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function Cx(e) {
	let t = xx(e), n = bx(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table.js
function wx(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = xx(t.children[1]), o = bx(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function Tx(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function Ex(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js
var Dx = 9, Ox = 32;
function kx(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(Ax(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(Ax(t.slice(i), i > 0, !1)), a.join("");
}
function Ax(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === Dx || t === Ox;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === Dx || t === Ox;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/text.js
function jx(e, t) {
	let n = {
		type: "text",
		value: kx(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Mx(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/index.js
var Nx = {
	blockquote: $b,
	break: ex,
	code: tx,
	delete: nx,
	emphasis: rx,
	footnoteReference: ix,
	heading: ax,
	html: ox,
	imageReference: cx,
	image: lx,
	inlineCode: ux,
	linkReference: dx,
	link: fx,
	listItem: px,
	list: gx,
	paragraph: _x,
	root: vx,
	strong: yx,
	table: wx,
	tableCell: Ex,
	tableRow: Tx,
	text: jx,
	thematicBreak: Mx,
	toml: Px,
	yaml: Px,
	definition: Px,
	footnoteDefinition: Px
};
function Px() {}
//#endregion
//#region ../../node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/deserialize.js
var Fx = typeof self == "object" ? self : globalThis, Ix = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new Fx[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new Fx[a](o), i);
	};
	return r;
}, Lx = (e) => Ix(/* @__PURE__ */ new Map(), e)(0), Rx = "", { toString: zx } = {}, { keys: Bx } = Object, Vx = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = zx.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Rx];
		case "Object": return [2, Rx];
		case "Date": return [3, Rx];
		case "RegExp": return [4, Rx];
		case "Map": return [5, Rx];
		case "Set": return [6, Rx];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Hx = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), Ux = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = Vx(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of Bx(r)) (e || !Hx(Vx(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(Hx(Vx(n)) || Hx(Vx(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Hx(Vx(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, Wx = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return Ux(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Gx = typeof structuredClone == "function" ? 
/* c8 ignore start */
(e, t) => t && ("json" in t || "lossy" in t) ? Lx(Wx(e, t)) : structuredClone(e) : (e, t) => Lx(Wx(e, t));
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/footer.js
function Kx(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function qx(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Jx(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Kx, r = e.options.footnoteBackLabel || qx, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = ev(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...Gx(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/state.js
var Yx = {}.hasOwnProperty, Xx = {};
function Zx(e, t) {
	let n = t || Xx, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: $x,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Nx,
			...n.handlers
		},
		one: o,
		options: n,
		patch: Qx,
		wrap: tS
	};
	return vg(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Yx.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Gx(n);
				return r.children = a.all(e), r;
			}
			return Gx(e);
		}
		return (a.options.unknownHandler || eS)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = nS(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = nS(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function Qx(e, t) {
	e.position && (t.position = Cx(e));
}
function $x(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Gx(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function eS(e, t) {
	let n = t.data || {}, r = "value" in t && !(Yx.call(n, "hProperties") || Yx.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function tS(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function nS(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/index.js
function rS(e, t) {
	let n = Zx(e, t), r = n.one(e, void 0), i = Jx(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region ../../node_modules/.pnpm/remark-rehype@11.1.2/node_modules/remark-rehype/lib/index.js
function iS(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = rS(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return rS(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
function aS(e) {
	if (e) throw e;
}
//#endregion
//#region ../../node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
var oS = /* @__PURE__ */ n((/* @__PURE__ */ i(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
})))(), 1);
function sS(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region ../../node_modules/.pnpm/trough@2.2.0/node_modules/trough/lib/index.js
function cS() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? lS(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function lS(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/vfile-message@4.0.2/node_modules/vfile-message/lib/index.js
var uS = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file, this.message = r, this.line = o ? o.line : void 0, this.name = Vb(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual, this.expected, this.note, this.url;
	}
};
uS.prototype.file = "", uS.prototype.name = "", uS.prototype.reason = "", uS.prototype.message = "", uS.prototype.stack = "", uS.prototype.column = void 0, uS.prototype.line = void 0, uS.prototype.ancestors = void 0, uS.prototype.cause = void 0, uS.prototype.fatal = void 0, uS.prototype.place = void 0, uS.prototype.ruleId = void 0, uS.prototype.source = void 0;
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minpath.browser.js
var dS = {
	basename: fS,
	dirname: pS,
	extname: mS,
	join: hS,
	sep: "/"
};
function fS(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	vS(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function pS(e) {
	if (vS(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function mS(e) {
	vS(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function hS(...e) {
	let t = -1, n;
	for (; ++t < e.length;) vS(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : gS(n);
}
function gS(e) {
	vS(e);
	let t = e.codePointAt(0) === 47, n = _S(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function _S(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (i !== o - 1 && a !== 1) {
				if (i !== o - 1 && a === 2) {
					if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							if (c = n.lastIndexOf("/"), c !== n.length - 1) {
								c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
								continue;
							}
						} else if (n.length > 0) {
							n = "", r = 0, i = o, a = 0;
							continue;
						}
					}
					t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
				} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			}
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function vS(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minproc.browser.js
var yS = { cwd: bS };
function bS() {
	return "/";
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.shared.js
function xS(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.browser.js
function SS(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!xS(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return CS(e);
}
function CS(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/index.js
var wS = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], TS = class {
	constructor(e) {
		let t;
		t = e ? xS(e) ? { path: e } : typeof e == "string" || kS(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : yS.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < wS.length;) {
			let e = wS[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) wS.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? dS.basename(this.path) : void 0;
	}
	set basename(e) {
		DS(e, "basename"), ES(e, "basename"), this.path = dS.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? dS.dirname(this.path) : void 0;
	}
	set dirname(e) {
		OS(this.basename, "dirname"), this.path = dS.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? dS.extname(this.path) : void 0;
	}
	set extname(e) {
		if (ES(e, "extname"), OS(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = dS.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		xS(e) && (e = SS(e)), DS(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? dS.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		DS(e, "stem"), ES(e, "stem"), this.path = dS.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new uS(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function ES(e, t) {
	if (e && e.includes(dS.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + dS.sep + "`");
}
function DS(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function OS(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function kS(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/callable-instance.js
var AS = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), jS = {}.hasOwnProperty, MS = new class e extends AS {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = cS();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, oS.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (FS("data", this.frozen), this.namespace[e] = t, this) : jS.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (FS("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = RS(e), n = this.parser || this.Parser;
		return NS("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), NS("process", this.parser || this.Parser), PS("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = RS(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				BS(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), NS("processSync", this.parser || this.Parser), PS("processSync", this.compiler || this.Compiler), this.process(e, r), LS("processSync", "process", t), n;
		function r(e, r) {
			t = !0, aS(e), n = r;
		}
	}
	run(e, t, n) {
		IS(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = RS(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), LS("runSync", "run", n), r;
		function i(e, t) {
			aS(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = RS(t), r = this.compiler || this.Compiler;
		return PS("stringify", r), IS(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (FS("use", this.frozen), e != null) {
			if (typeof e == "function") s(e, t);
			else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") {
				if (Array.isArray(e)) {
					let [t, ...n] = e;
					s(t, n);
				} else a(e);
			} else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, oS.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) {
				if (Array.isArray(e)) for (; ++t < e.length;) {
					let n = e[t];
					i(n);
				}
				else throw TypeError("Expected a list of plugins, not `" + e + "`");
			}
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				sS(o) && sS(r) && (r = (0, oS.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function NS(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function PS(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function FS(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function IS(e) {
	if (!sS(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function LS(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function RS(e) {
	return zS(e) ? e : new TS(e);
}
function zS(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function BS(e) {
	return typeof e == "string" || VS(e);
}
function VS(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region src/lib/markdown.ts
var HS = MS().use(Qb).use(iS).use(zm), US = MS().use(Qb).use(lb).use(iS).use(zm), WS = /* @__PURE__ */ "h1.h2.h3.h4.h5.h6.p.br.hr.strong.b.em.i.del.s.a.ul.ol.li.blockquote.pre.code.table.thead.tbody.tr.th.td".split(".");
function GS(e) {
	let t = String(HS.processSync(e));
	return Pf.sanitize(t, {
		ALLOWED_TAGS: [
			"strong",
			"b",
			"em",
			"i"
		],
		KEEP_CONTENT: !0
	});
}
function KS(e) {
	let t = String(US.processSync(e));
	return Pf.sanitize(t, {
		ALLOWED_TAGS: WS,
		ALLOWED_ATTR: [
			"href",
			"target",
			"rel"
		],
		KEEP_CONTENT: !0
	});
}
function qS(e) {
	return e.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1").replace(/__(.+?)__/g, "$1").replace(/_(.+?)_/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1").replace(/`(.+?)`/g, "$1");
}
//#endregion
//#region src/lib/OneEllipsis/OneEllipsis.tsx
var JS = 700, YS = (e, t) => {
	if (!e) return !1;
	if (t > 1) {
		let n = parseInt(window.getComputedStyle(e).lineHeight, 10);
		return e.scrollHeight > n * t;
	}
	return e.scrollWidth > e.clientWidth;
}, XS = k(({ children: e, className: t, lines: n, onHasEllipsisChange: r, noTooltip: i, tag: a = "span", disabled: o, markdown: s, ...l }, u) => {
	let [d, f] = F(!1);
	M(() => {
		if (!u || typeof u != "object" || o) return;
		let e = u.current;
		if (!e) return;
		let t = () => {
			let t = YS(e, n);
			return f(t), r(t), t;
		};
		t();
		let i = requestAnimationFrame(() => t()), a = setTimeout(() => t(), 100), s = new ResizeObserver(() => {
			t();
		});
		return s.observe(e), () => {
			cancelAnimationFrame(i), clearTimeout(a), s.disconnect();
		};
	}, [
		u,
		r,
		n,
		o
	]);
	let p = s ? GS(e) : void 0;
	return D.createElement(a, {
		ref: u,
		className: c(!i && d && "pointer-events-auto", "min-w-0 max-w-full overflow-hidden", !o && [n === 1 ? "text-ellipsis" : "", n > 1 ? `not-supports-[(-webkit-line-clamp:${n})]:whitespace-nowrap line-clamp-1 whitespace-normal` : "block whitespace-nowrap"], t),
		style: {
			WebkitLineClamp: n > 1 ? n : void 0,
			lineClamp: n > 1 ? n : void 0
		},
		...l,
		...s && p ? { dangerouslySetInnerHTML: { __html: p } } : {}
	}, s ? void 0 : e);
});
XS.displayName = "EllipsisWrapper";
var ZS = k(({ className: e, lines: t = 1, children: n, noTooltip: r = !1, disabled: i = !1, markdown: a = !1, tag: o = "span", delay: s = JS, ...c }, l) => {
	let [u, d] = F(!1), f = P(null), p = l || f, m = de(() => /* @__PURE__ */ I(XS, {
		ref: p,
		className: e,
		lines: t,
		onHasEllipsisChange: d,
		disabled: i,
		markdown: a,
		tag: o,
		...c,
		"data-testid": "one-ellipsis",
		noTooltip: r,
		children: n
	}), [
		e,
		t,
		p,
		n,
		i,
		a,
		o
	]), h = de(() => a ? qS(n) : n, [n, a]);
	return u && !r ? /* @__PURE__ */ I(x, {
		delayDuration: s,
		children: /* @__PURE__ */ L(S, { children: [/* @__PURE__ */ I(v, {
			asChild: !0,
			className: "pointer-events-auto",
			children: m
		}), /* @__PURE__ */ I(b, {
			className: "max-w-xl",
			children: h
		})] })
	}) : m;
});
ZS.displayName = "OneEllipsis";
//#endregion
//#region src/lib/text.ts
var QS = (e) => (0, ld.parse)(e).length > 0, $S = (e, t, n = !1, r = "") => {
	if (t.disallowEmpty && e.length === 0) {
		let e = `${r}: You need to provide some text that is not empty`;
		if (n) console.warn(e);
		else throw Error(e);
	}
	if (t.maxLength !== void 0 && e.length > t.maxLength) {
		let i = `${r}: "${e}" should have no more than ${t.maxLength} characters`;
		if (n) console.warn(i);
		else throw Error(i);
	}
	if (t.minLength !== void 0 && e.length < t.minLength) {
		let i = `${r}: "${e}" should have at least ${t.minLength} characters`;
		if (n) console.warn(i);
		else throw Error(i);
	}
	if (t.disallowEmojis && QS(e)) {
		let t = `${r}: Emojis are not allowed here: "${e}"`;
		if (n) console.warn(t);
		else throw Error(t);
	}
}, eC = (e, t, n = {
	warn: void 0,
	componentName: ""
}) => {
	M(() => {
		e !== void 0 && t && $S(e, t, n.warn ?? !0, n.componentName);
	}, [
		e,
		t,
		n
	]);
};
//#endregion
//#region src/lib/strip-native-title.tsx
function tC(e) {
	if (!oe(e)) return e;
	let t = e.props;
	if (t.title == null) return e;
	let n = { title: void 0 };
	return t["aria-label"] == null && t["aria-labelledby"] == null && typeof t.title == "string" && (n["aria-label"] = t.title), ie(e, n);
}
var nC = k((e, t) => /* @__PURE__ */ L("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ I("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M10.75 16.75L17.75 7.25004"
	}), /* @__PURE__ */ I("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M6.25 11.75L10.75 16.75"
	})]
})), rC = k((e, t) => /* @__PURE__ */ L("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ I("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15"
	}), /* @__PURE__ */ I("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M12 5V14M12 14L9 11M12 14L15 11"
	})]
})), iC = k((e, t) => /* @__PURE__ */ L("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ I("title", { children: "Windows" }), /* @__PURE__ */ I("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		d: "M20 4L11.4628 5.24738V11.4067H20V4ZM20 20.2501V12.7255L11.4628 12.71V18.9003L20 20.2501ZM10.3286 12.6633V18.7916L4.0046 17.9073V12.6323L10.3286 12.6633ZM10.3286 5.35601L4 6.24035L4.00307 11.4843H10.3286V5.35601Z",
		clipRule: "evenodd"
	})]
})), aC = O(null), oC = (e, t) => {
	let n = e.split("."), r = t;
	for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
	else return;
	return typeof r == "string" ? r : void 0;
}, sC = (e) => typeof e == "object" && !!e && !Array.isArray(e), cC = (e, t) => {
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = n[e];
		n[e] = sC(r) && sC(t) ? cC(t, r) : r;
	}
	return n;
};
function lC({ children: e, translations: t }) {
	let n = de(() => cC(T, t), [t]), r = (e, t = {}) => {
		let r = oC(e, n);
		if (r === void 0) return console.warn(`Translation key ${e} not found`), e;
		for (let [e, n] of Object.entries(t)) r = r.replace(`{{${e}}}`, n.toString());
		return r;
	};
	return /* @__PURE__ */ I(aC.Provider, {
		value: {
			...n,
			t: r
		},
		children: e
	});
}
var uC = {
	...T,
	t: (e, t = {}) => {
		let n = oC(e, T);
		if (n === void 0) return e;
		for (let [e, r] of Object.entries(t)) n = n.replace(`{{${e}}}`, r.toString());
		return n;
	}
};
function dC() {
	return j(aC) ?? uC;
}
var fC = (e) => e, pC = R({
	base: "flex h-5 min-w-[1ch] items-center justify-center rounded-xs border border-solid py-0.5 font-sans text-sm font-semibold leading-none",
	variants: { variant: {
		default: "border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary",
		inverse: "border-f1-border-inverse text-f1-foreground-inverse-secondary"
	} },
	defaultVariants: { variant: "default" }
}), mC = /* @__PURE__ */ new Set([
	"cmd",
	"option",
	"ctrl"
]), hC = {
	mac: {
		cmd: "⌘",
		option: "⌥",
		ctrl: "⌃"
	},
	windows: {
		ctrl: "Ctrl",
		cmd: iC,
		option: "Alt"
	},
	linux: {
		ctrl: "^",
		cmd: "Meta",
		option: "Alt"
	}
}, gC = (e) => mC.has(e);
function _C({ keys: e, variant: t }) {
	let n = je(), r = dC();
	if (n === "unknown" || n === "mobile") return null;
	let i = hC[n];
	return /* @__PURE__ */ L("div", {
		className: "flex flex-wrap items-center gap-0.5",
		children: [/* @__PURE__ */ I("span", {
			className: "sr-only",
			children: r.shortcut
		}), e.map((e, n) => {
			let r = e.toLowerCase(), a = gC(r), o = a ? i[r] : e, s = typeof o != "string";
			return /* @__PURE__ */ I("kbd", {
				className: c(pC({ variant: t }), a ? "" : "uppercase", s ? "w-5 px-0.5" : "min-w-5 px-1"),
				children: s ? /* @__PURE__ */ I(rd, {
					icon: o,
					size: "sm"
				}) : o
			}, n);
		})]
	});
}
var vC = Re(B("Shortcut", _C));
//#endregion
//#region src/experimental/Overlays/Tooltip/index.tsx
function yC({ label: e, description: t, items: n, children: r, shortcut: i, instant: a = !1, delay: o = 700, onOpen: s }) {
	let [l, u] = F(!1), d = P(null), f = de(() => a ? 100 : o, [o, a]), p = !!(e || t || n?.length || i), m = se(() => {
		d.current &&= (clearTimeout(d.current), null);
	}, []), h = se(() => {
		m(), u(!1);
	}, [m]), g = se(() => {
		p && (s?.(), m(), d.current = setTimeout(() => u(!0), f));
	}, [
		m,
		p,
		s,
		f
	]);
	M(() => h, [h]);
	let _ = se((e) => {
		try {
			return e.matches(":focus-visible");
		} catch {
			return !1;
		}
	}, []), y = D.isValidElement(r) && r.type !== D.Fragment;
	return /* @__PURE__ */ I(x, {
		delayDuration: f,
		disableHoverableContent: a,
		children: /* @__PURE__ */ L(S, {
			open: p && l,
			onOpenChange: (e) => {
				e || h();
			},
			children: [/* @__PURE__ */ I(v, {
				asChild: !0,
				className: "pointer-events-auto",
				onPointerEnter: (e) => {
					e.pointerType !== "touch" && g();
				},
				onPointerLeave: () => h(),
				onPointerDown: () => h(),
				onFocus: (e) => {
					p && (_(e.currentTarget) ? (s?.(), u(!0)) : h());
				},
				onBlur: () => h(),
				children: y ? tC(r) : /* @__PURE__ */ I("span", {
					className: "inline-flex h-fit w-fit",
					children: r
				})
			}), /* @__PURE__ */ I(b, {
				className: c("max-w-xs", i && "pr-1.5", a && "pointer-events-none"),
				children: /* @__PURE__ */ L("div", {
					className: "flex flex-col gap-0.5",
					children: [
						/* @__PURE__ */ L("div", {
							className: "flex items-center gap-2",
							children: [e ? /* @__PURE__ */ I("p", {
								className: "font-semibold",
								children: e
							}) : null, i ? /* @__PURE__ */ I(vC, {
								keys: i,
								variant: "inverse"
							}) : null]
						}),
						t ? /* @__PURE__ */ I("p", {
							className: "font-normal",
							children: t.toString()
						}) : null,
						n && n.length > 0 ? /* @__PURE__ */ I("ul", {
							className: "m-0 flex list-disc flex-col gap-0.5 pl-4 font-normal",
							children: n.map((e, t) => /* @__PURE__ */ I("li", { children: typeof e == "string" ? e : /* @__PURE__ */ L(he, { children: [/* @__PURE__ */ I("span", {
								className: "font-semibold",
								children: e.title
							}), e.description ? /* @__PURE__ */ L(he, { children: [" ", e.description] }) : null] }) }, `${t}-${typeof e == "string" ? e : e.title}`))
						}) : null
					]
				})
			})]
		})
	});
}
var bC = ["delay", "onOpen"], xC = Re(B("Tooltip", (e) => {
	let t = bC.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ I(yC, { ...t });
})), SC = O(void 0), CC = ({ children: e, component: t, currentPath: n }) => /* @__PURE__ */ I(SC.Provider, {
	value: {
		component: t,
		currentPath: n
	},
	children: e
}), wC = () => ({
	controller: () => ({}),
	...j(SC)
}), TC = (e) => {
	if (!e || e.startsWith("#") || typeof window > "u") return !1;
	try {
		let t = new URL(e, window.location.href);
		return t.protocol !== "http:" && t.protocol !== "https:" ? !1 : t.hostname !== window.location.hostname;
	} catch {
		return !1;
	}
};
function EC(e) {
	return e.endsWith("/") ? e.slice(0, -1) : e;
}
function DC(e) {
	let t = e.indexOf("?");
	return t === -1 ? [e, new URLSearchParams()] : [e.slice(0, t), new URLSearchParams(e.slice(t))];
}
function OC(e, t) {
	for (let [n, r] of t) if (e.get(n) !== r) return !1;
	return !0;
}
function kC(e, t) {
	return OC(e, t) && OC(t, e);
}
var AC = () => {
	let { currentPath: e } = wC();
	return {
		currentPath: e,
		isActive: se((t, { exact: n = !1 } = { exact: !1 }) => {
			if (e === void 0 || t === void 0) return !1;
			let [r, i] = DC(e), [a, o] = DC(t);
			return n ? EC(r) === EC(a) && kC(i, o) : `${EC(r)}/`.startsWith(`${EC(a)}/`) ? o.size > 0 ? OC(i, o) : !0 : !1;
		}, [e])
	};
}, jC = k(function({ disabled: e, ...t }, n) {
	let { component: r } = wC(), { isActive: i } = AC(), a = i(t.href, { exact: t.exactMatch }), o = !t.href || e, s = {
		"data-is-active": a,
		...t,
		disabled: o
	}, c = de(() => k(function(e, t) {
		if (o) {
			let { href: n, target: r, rel: i, download: a, exactMatch: o, ...s } = e;
			return /* @__PURE__ */ I("span", {
				ref: t,
				"aria-disabled": !0,
				...s
			});
		}
		return e.target === "_blank" || !r ? /* @__PURE__ */ I("a", {
			ref: t,
			...e
		}) : r(e, t);
	}), [r, o]);
	return /* @__PURE__ */ I(c, {
		ref: n,
		...s
	});
});
//#endregion
//#region src/ui/skeleton.tsx
function MC({ className: e, ...t }) {
	return /* @__PURE__ */ I("div", {
		"data-testid": "skeleton",
		className: c("animate-pulse rounded-xs bg-f1-background-secondary", e),
		...t
	});
}
//#endregion
//#region src/ui/Action/types.ts
var NC = [
	"default",
	"outline",
	"critical",
	"neutral",
	"ghost",
	"promote",
	"outlinePromote",
	"ai"
], PC = [
	"link",
	"unstyled",
	"mention"
];
[...NC, ...PC];
var FC = [
	"sm",
	"md",
	"lg"
], IC = (e) => PC.includes(e), LC = "bg-f1-background-secondary hover:bg-f1-background-secondary-hover !px-1.5 font-medium text-f1-foreground rounded-xs no-underline transition-colors", RC = `${LC} focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold`, zC = "group relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded border-none p-0 text-base font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px active:[&_.main]:scale-[0.97] [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed [&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:cursor-not-allowed [&[aria-disabled=true]]:opacity-30 no-underline [&_.main]:z-20", BC = "relative flex-row font-medium [&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:cursor-not-allowed [&[aria-disabled=true]]:opacity-30 transition-colors", VC = R({
	base: "inline-flex items-center gap-1 text-base font-medium transition-colors",
	variants: {
		variant: {
			default: c(zC, "bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover", "active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]", "data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]"),
			outline: c(zC, "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"),
			neutral: c(zC, "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover", "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]", "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]"),
			critical: c(zC, "bg-f1-background-secondary text-f1-foreground-critical after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse hover:after:ring-transparent dark:bg-transparent dark:hover:bg-f1-background-critical-bold", "active:bg-f1-background-critical-bold active:text-f1-foreground-inverse active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] active:after:ring-transparent", "data-[pressed=true]:bg-f1-background-critical-bold data-[pressed=true]:text-f1-foreground-inverse data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:after:ring-transparent"),
			ghost: c(zC, "bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]", "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]", "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"),
			promote: c(zC, "bg-f1-background-promote text-f1-foreground shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(245,165,28,.15)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border-promote after:transition-all after:content-[''] hover:bg-f1-background-promote-hover dark:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.30)]", "active:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]", "data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]"),
			outlinePromote: c(zC, "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"),
			link: c(BC, "text-f1-foreground underline decoration-f1-border-hover decoration-1 underline-offset-[5px] visited:text-f1-foreground hover:text-f1-foreground hover:decoration-f1-border-bold active:text-f1-foreground"),
			unstyled: c(BC, "text-inherit no-underline"),
			mention: c(BC, LC),
			selected: c(zC, "bg-f1-background-selected text-f1-icon-selected shadow-none hover:bg-f1-background-selected-hover hover:text-f1-icon-selected-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]", "active:bg-f1-background-selected-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]", "data-[pressed=true]:bg-f1-background-selected-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"),
			ai: c(zC, "bg-f1-border text-f1-foreground transition-colors duration-200", "[--gradient-angle:0deg]", "hover:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] hover:before:opacity-100", "hover:animate-rotate-gradient", "before:pointer-events-none before:absolute before:inset-px before:z-10 before:rounded-[9px] before:bg-f1-background before:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] before:content-['']", "after:pointer-events-none after:absolute after:inset-0 after:translate-y-px after:scale-90 after:animate-rotate-gradient after:rounded after:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] after:opacity-0 after:blur-sm after:content-[''] after:[transition:transform_200ms,opacity_200ms] hover:after:scale-100 hover:after:opacity-80", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)]", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover")
		},
		pressed: {
			true: "[&_.main]:translate-y-px",
			false: ""
		}
	},
	defaultVariants: {
		variant: "default",
		pressed: !1
	}
}), HC = R({
	variants: { size: {
		sm: "rounded-sm text-base before:rounded-[7px] after:rounded-sm [&_.main]:h-6 [&_.main]:px-2",
		md: "rounded text-base before:rounded-[9px] after:rounded [&_.main]:h-8 [&_.main]:px-3",
		lg: "rounded-md text-lg before:rounded-[11px] after:rounded-md [&_.main]:h-10 [&_.main]:px-4"
	} },
	defaultVariants: { size: "md" }
}), UC = R({
	base: "rounded-xs p-0",
	variants: { size: {
		sm: "text-base",
		md: "text-base",
		lg: "text-lg"
	} },
	defaultVariants: { size: "md" }
}), WC = R({
	base: "transition-colors",
	variants: {
		variant: {
			default: "",
			outline: "",
			neutral: "",
			critical: "",
			ghost: "",
			promote: "",
			outlinePromote: "",
			ai: "",
			link: "",
			mention: "",
			selected: "",
			unstyled: ""
		},
		mode: {
			default: "",
			only: ""
		}
	},
	compoundVariants: [
		{
			variant: "default",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold/80"
		},
		{
			variant: "outline",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "neutral",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "critical",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-critical-bold group-hover:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-active:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:group-hover:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-active:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-bold/80"
		},
		{
			variant: "ghost",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "promote",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-promote"
		},
		{
			variant: "outlinePromote",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-promote"
		},
		{
			variant: "ai",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "link",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "mention",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "unstyled",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-accent"
		},
		{
			variant: "default",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold"
		},
		{
			variant: "outline",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-bold"
		},
		{
			variant: "neutral",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-bold"
		},
		{
			variant: "critical",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-critical-bold group-hover:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-active:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:group-hover:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-active:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-bold/80"
		},
		{
			variant: "ghost",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-bold"
		},
		{
			variant: "promote",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-promote"
		},
		{
			variant: "outlinePromote",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-promote"
		},
		{
			variant: "link",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "unstyled",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "ai",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		}
	],
	defaultVariants: {
		variant: "default",
		mode: "default"
	}
}), GC = R({
	base: "rounded-full border-solid border-t-transparent will-change-transform",
	variants: {
		size: {
			sm: "h-3 w-3 border-[1px]",
			md: "h-4 w-4 border-2",
			lg: "h-5 w-5 border-2"
		},
		variant: {
			default: "border-f1-foreground-inverse border-t-transparent",
			outline: "border-f1-foreground border-t-transparent",
			neutral: "border-f1-foreground border-t-transparent",
			critical: "border-f1-icon-critical border-t-transparent",
			ghost: "border-f1-foreground border-t-transparent",
			promote: "border-f1-icon-promote border-t-transparent",
			outlinePromote: "border-f1-icon-promote border-t-transparent",
			ai: "border-f1-foreground border-t-transparent",
			unstyled: ""
		}
	}
}), KC = D.forwardRef((e, t) => {
	let n = (e) => "href" in e, { children: r, prepend: i, append: a, prependOutside: o, appendOutside: s, disabled: u, loading: d, pressed: f, className: p, href: m, target: h, variant: g, size: _ = "md", mode: v = "default", title: y, compact: b = !1, "aria-label": x, tooltip: S, onMouseEnter: C, onMouseLeave: ee, ...w } = e, T = n(e) ? "link" : "default", E = g ?? T, D = VC({
		variant: E,
		pressed: f
	}), te = IC(E) ? UC({ size: _ }) : HC({ size: _ }), ne = R({
		variants: { size: {
			sm: "!px-[4px]",
			md: "!px-[6px]",
			lg: "!px-[10px]"
		} },
		defaultVariants: { size: "md" }
	}), re = /* @__PURE__ */ L(he, { children: [/* @__PURE__ */ L("div", {
		className: c("main flex min-w-0 flex-1 items-center justify-center gap-1", b && ne({ size: _ }), d && "opacity-0", WC({
			variant: E,
			mode: v
		})),
		children: [
			i,
			/* @__PURE__ */ I("span", {
				className: "flex min-w-0 flex-1 items-center justify-center",
				children: r
			}),
			a
		]
	}), /* @__PURE__ */ I(rt, { children: d ? /* @__PURE__ */ I(he, { children: IC(E) ? /* @__PURE__ */ I(MC, { className: "absolute inset-0 my-auto h-full w-full" }) : /* @__PURE__ */ I("div", {
		className: "absolute inset-0 flex items-center justify-center",
		children: /* @__PURE__ */ I(ed.div, {
			className: c(GC({
				size: _,
				variant: E
			})),
			animate: { rotate: 360 },
			transition: {
				duration: 1,
				repeat: Infinity,
				ease: "linear"
			},
			"aria-label": "Loading..."
		})
	}) }) : null })] }), ie = {
		disabled: u,
		className: c(D, te, l(), p),
		"aria-busy": d,
		"aria-label": x,
		title: y,
		...w
	}, O = n(e) ? /* @__PURE__ */ I(jC, {
		...ie,
		onClick: e.onClick,
		onFocus: e.onFocus,
		onBlur: e.onBlur,
		onMouseEnter: C,
		onMouseLeave: ee,
		ref: t,
		href: m,
		target: h,
		rel: h === "_blank" ? "noopener noreferrer" : void 0,
		"aria-disabled": u,
		role: "link",
		children: re
	}) : /* @__PURE__ */ I("button", {
		...ie,
		onClick: e.onClick,
		onFocus: e.onFocus,
		onBlur: e.onBlur,
		onMouseEnter: C,
		onMouseLeave: ee,
		ref: t,
		"data-pressed": f,
		role: "button",
		children: re
	}), ae = S && typeof S == "object" ? S : S ? { description: S.toString() } : void 0, k = ae ? /* @__PURE__ */ I(yC, {
		...ae,
		delay: 1e3,
		children: O
	}) : O;
	return o || s ? /* @__PURE__ */ L("div", {
		className: "flex items-center",
		children: [
			o,
			k,
			s
		]
	}) : k;
});
KC.displayName = "Action";
//#endregion
//#region src/ui/Counter/index.tsx
var qC = R({
	base: "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-medium tabular-nums transition-all",
	variants: {
		size: {
			md: "min-w-5 p-0.5",
			sm: "min-w-4 px-0.5"
		},
		type: {
			default: "bg-f1-background-secondary outline outline-1 outline-f1-border",
			selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
			bold: "bg-f1-background-accent-bold text-f1-foreground-inverse"
		}
	},
	defaultVariants: {
		size: "md",
		type: "default"
	}
});
function JC({ size: e, type: t, value: n, maxValue: r }) {
	let i = r && n > r ? `+${r}` : n;
	return /* @__PURE__ */ I("div", {
		className: c("text-f1-foreground", qC({
			size: e,
			type: t
		})),
		children: i
	});
}
var YC = Re(B("Counter", JC)), XC = R({
	variants: { fontSize: {
		xs: "text-base",
		sm: "text-base",
		md: "text-base",
		lg: "text-lg"
	} },
	defaultVariants: { fontSize: "md" }
}), ZC = ed.create(rd), QC = 300, $C = k(function({ label: e, hideLabel: t, onClick: n, disabled: r, withoutDisabledAppearance: i, loading: a, icon: o, iconPosition: s = "left", emoji: l, emojiMode: u, variant: d = "default", size: f = "md", fontSize: p, append: m, className: h, "aria-label": g, tooltip: _, noAutoTooltip: v, noTitle: y, iconRotate: b = !1, block: x = !1, counterValue: S, ...C }, ee) {
	eC(e, {
		disallowEmpty: !0,
		disallowEmojis: !0
	}, {
		warn: !0,
		componentName: "F0Button"
	});
	let [w, T] = F(!1), [E, D] = F(!1), te = async (e) => {
		let t = n?.(e);
		if (t instanceof Promise) {
			T(!0);
			try {
				await t;
			} finally {
				T(!1);
			}
		}
	}, ne = a || w, re = t || l, ie = (e ?? "").toString(), O = S !== void 0 && S > 0, ae = f === "sm" ? "sm" : "md", k = d === "default" || d === "critical" && E, oe = p ?? f, A = o ? b ? /* @__PURE__ */ I(ZC, {
		size: f === "sm" ? "sm" : "md",
		icon: o,
		animate: {
			rotate: E ? 90 : 0,
			scale: E ? [
				1,
				.8,
				1
			] : 1,
			filter: E ? [
				"blur(0px)",
				"blur(1px)",
				"blur(0px)"
			] : "blur(0px)"
		},
		transition: {
			rotate: {
				duration: .5,
				ease: [
					.77,
					0,
					.13,
					1.52
				]
			},
			scale: {
				duration: .4,
				ease: [
					.65,
					0,
					.35,
					1
				]
			},
			filter: {
				duration: .4,
				ease: [
					.65,
					0,
					.35,
					1
				]
			}
		}
	}) : /* @__PURE__ */ I(rd, {
		size: f === "sm" ? "sm" : "md",
		icon: o
	}) : null;
	return /* @__PURE__ */ I(KC, {
		variant: d,
		size: f,
		disabled: r || ne,
		ref: ee,
		...C,
		tooltip: _ ?? (!v && t && e),
		onClick: te,
		loading: ne,
		className: c("max-w-full", x && "w-full", O && {
			sm: "[&_.main]:!pr-1",
			md: "[&_.main]:!pr-2",
			lg: "[&_.main]:!pr-3"
		}[f], i && r && "disabled:pointer-events-none disabled:opacity-100 disabled:cursor-default [&[aria-disabled=true]]:opacity-100 [&[aria-disabled=true]]:cursor-default", h),
		mode: t ? "only" : "default",
		"aria-label": g || C.title || ie,
		title: y ? void 0 : C.title || (t ? ie : void 0),
		compact: !!re,
		onMouseEnter: () => D(!0),
		onMouseLeave: () => D(!1),
		children: /* @__PURE__ */ L("div", {
			className: c(ne && "invisible", "flex min-w-0 flex-1 items-center justify-center gap-1", o && !t && (s === "right" ? "-mr-[3px]" : "-ml-[3px]")),
			children: [
				s === "left" ? A : null,
				l ? /* @__PURE__ */ I(Dd, {
					emoji: l,
					mode: u,
					size: f === "sm" ? "sm" : "md",
					alt: ""
				}) : null,
				re ? /* @__PURE__ */ I("span", {
					className: "sr-only",
					children: ie
				}) : /* @__PURE__ */ I(ZS, {
					className: c(re && "sr-only", XC({ fontSize: oe })),
					tag: "span",
					noTooltip: v || !!_,
					delay: QC,
					children: ie
				}),
				s === "right" ? A : null,
				m,
				" ",
				O ? /* @__PURE__ */ I("span", {
					className: c("ml-1 inline-flex items-center", k && "dark"),
					children: /* @__PURE__ */ I(YC, {
						value: S,
						size: ae,
						type: "default"
					})
				}) : null
			]
		})
	});
}), ew = [
	"append",
	"className",
	"pressed",
	"compact",
	"noTitle",
	"noAutoTooltip",
	"style",
	"block"
], tw = k((e, t) => {
	let n = ew.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ I($C, {
		...n,
		ref: t
	});
});
tw.displayName = "F0Button";
var nw = Re(tw);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom_0e4230adea206cfc9ffba4b61b225db3/node_modules/@radix-ui/react-collection/dist/index.mjs
function rw(e) {
	let t = e + "CollectionProvider", [n, r] = u(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = (e) => {
		let { scope: t, children: n } = e, r = D.useRef(null), a = D.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ I(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	};
	o.displayName = t;
	let s = e + "CollectionSlot", c = y(s), l = D.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = a(s, n), o = f(t, i.collectionRef);
		return /* @__PURE__ */ I(c, {
			ref: o,
			children: r
		});
	});
	l.displayName = s;
	let d = e + "CollectionItemSlot", p = "data-radix-collection-item", m = y(d), h = D.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = D.useRef(null), s = f(t, o), c = a(d, n);
		return D.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ I(m, {
			[p]: "",
			ref: s,
			children: r
		});
	});
	h.displayName = d;
	function g(t) {
		let n = a(e + "CollectionConsumer", t);
		return D.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${p}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: o,
			Slot: l,
			ItemSlot: h
		},
		g,
		r
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs
var iw = E.createContext(void 0);
function aw(e) {
	let t = E.useContext(iw);
	return e || t || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var ow = 0;
function sw() {
	E.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? cw()), document.body.insertAdjacentElement("beforeend", e[1] ?? cw()), ow++, () => {
			ow === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), ow--;
		};
	}, []);
}
function cw() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@18.3.1_@types+react@18.3.18_react-do_56ad7e199d329ef9fa7b3e23f78502a0/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var lw = "focusScope.autoFocusOnMount", uw = "focusScope.autoFocusOnUnmount", dw = {
	bubbles: !1,
	cancelable: !0
}, fw = "FocusScope", pw = E.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [c, l] = E.useState(null), u = s(i), p = s(a), m = E.useRef(null), h = f(t, (e) => l(e)), g = E.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	E.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (g.paused || !c) return;
				let t = e.target;
				c.contains(t) ? m.current = t : bw(m.current, { select: !0 });
			}, t = function(e) {
				if (g.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (c.contains(t) || bw(m.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && bw(c);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		c,
		g.paused
	]), E.useEffect(() => {
		if (c) {
			xw.add(g);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(lw, dw);
				c.addEventListener(lw, u), c.dispatchEvent(t), t.defaultPrevented || (mw(ww(gw(c)), { select: !0 }), document.activeElement === e && bw(c));
			}
			return () => {
				c.removeEventListener(lw, u), setTimeout(() => {
					let t = new CustomEvent(uw, dw);
					c.addEventListener(uw, p), c.dispatchEvent(t), t.defaultPrevented || bw(e ?? document.body, { select: !0 }), c.removeEventListener(uw, p), xw.remove(g);
				}, 0);
			};
		}
	}, [
		c,
		u,
		p,
		g
	]);
	let _ = E.useCallback((e) => {
		if (!n && !r || g.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = hw(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && bw(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && bw(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		g.paused
	]);
	return /* @__PURE__ */ I(d.div, {
		tabIndex: -1,
		...o,
		ref: h,
		onKeyDown: _
	});
});
pw.displayName = fw;
function mw(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (bw(r, { select: t }), document.activeElement !== n) return;
}
function hw(e) {
	let t = gw(e);
	return [_w(t, e), _w(t.reverse(), e)];
}
function gw(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function _w(e, t) {
	for (let n of e) if (!vw(n, { upTo: t })) return n;
}
function vw(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function yw(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function bw(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && yw(e) && t && e.select();
	}
}
var xw = Sw();
function Sw() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Cw(e, t), e.unshift(t);
		},
		remove(t) {
			e = Cw(e, t), e[0]?.resume();
		}
	};
}
function Cw(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function ww(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Tw = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Ew = /* @__PURE__ */ new WeakMap(), Dw = /* @__PURE__ */ new WeakMap(), Ow = {}, kw = 0, Aw = function(e) {
	return e && (e.host || Aw(e.parentNode));
}, jw = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Aw(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Mw = function(e, t, n, r) {
	var i = jw(t, Array.isArray(e) ? e : [e]);
	Ow[n] || (Ow[n] = /* @__PURE__ */ new WeakMap());
	var a = Ow[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Ew.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Ew.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Dw.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), kw++, function() {
		o.forEach(function(e) {
			var t = Ew.get(e) - 1, i = a.get(e) - 1;
			Ew.set(e, t), a.set(e, i), t || (Dw.has(e) || e.removeAttribute(r), Dw.delete(e)), i || e.removeAttribute(n);
		}), kw--, kw || (Ew = /* @__PURE__ */ new WeakMap(), Ew = /* @__PURE__ */ new WeakMap(), Dw = /* @__PURE__ */ new WeakMap(), Ow = {});
	};
}, Nw = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Tw(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Mw(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Pw = function() {
	return Pw = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Pw.apply(this, arguments);
};
function Fw(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Iw(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Lw = "right-scroll-bar-position", Rw = "width-before-scroll-bar", zw = "with-scroll-bars-hidden", Bw = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.18_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Vw(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.18_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Hw(e, t) {
	var n = F(function() {
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
var Uw = typeof window < "u" ? E.useLayoutEffect : E.useEffect, Ww = /* @__PURE__ */ new WeakMap();
function Gw(e, t) {
	var n = Hw(t || null, function(t) {
		return e.forEach(function(e) {
			return Vw(e, t);
		});
	});
	return Uw(function() {
		var t = Ww.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Vw(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Vw(e, a);
			});
		}
		Ww.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function Kw(e) {
	return e;
}
function qw(e, t) {
	t === void 0 && (t = Kw);
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
function Jw(e) {
	e === void 0 && (e = {});
	var t = qw(null);
	return t.options = Pw({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Yw = function(e) {
	var t = e.sideCar, n = Fw(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return E.createElement(r, Pw({}, n));
};
Yw.isSideCarExport = !0;
function Xw(e, t) {
	return e.useMedium(t), Yw;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Zw = Jw(), Qw = function() {}, $w = E.forwardRef(function(e, t) {
	var n = E.useRef(null), r = E.useState({
		onScrollCapture: Qw,
		onWheelCapture: Qw,
		onTouchMoveCapture: Qw
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = Fw(e, [
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
	]), x = f, S = Gw([n, t]), C = Pw(Pw({}, b), i);
	return E.createElement(E.Fragment, null, u && E.createElement(x, {
		sideCar: Zw,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? E.cloneElement(E.Children.only(s), Pw(Pw({}, C), { ref: S })) : E.createElement(v, Pw({}, C, {
		className: c,
		ref: S
	}), s));
});
$w.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, $w.classNames = {
	fullWidth: Rw,
	zeroRight: Lw
};
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var eT = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.18_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function tT() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = eT();
	return t && e.setAttribute("nonce", t), e;
}
function nT(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function rT(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var iT = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = tT()) && (nT(t, n), rT(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, aT = function() {
	var e = iT();
	return function(t, n) {
		E.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, oT = function() {
	var e = aT();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, sT = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, cT = function(e) {
	return parseInt(e || "", 10) || 0;
}, lT = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		cT(n),
		cT(r),
		cT(i)
	];
}, uT = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return sT;
	var t = lT(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, dT = oT(), fT = "data-scroll-locked", pT = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${zw} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${fT}] {
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
  
  .${Lw} {
    right: ${s}px ${r};
  }
  
  .${Rw} {
    margin-right: ${s}px ${r};
  }
  
  .${Lw} .${Lw} {
    right: 0 ${r};
  }
  
  .${Rw} .${Rw} {
    margin-right: 0 ${r};
  }
  
  body[${fT}] {
    ${Bw}: ${s}px;
  }
`;
}, mT = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, hT = function() {
	E.useEffect(function() {
		return document.body.setAttribute(fT, (mT() + 1).toString()), function() {
			var e = mT() - 1;
			e <= 0 ? document.body.removeAttribute(fT) : document.body.setAttribute(fT, e.toString());
		};
	}, []);
}, gT = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	hT();
	var a = E.useMemo(function() {
		return uT(i);
	}, [i]);
	return E.createElement(dT, { styles: pT(a, !t, i, n ? "" : "!important") });
}, _T = !1;
if (typeof window < "u") try {
	var vT = Object.defineProperty({}, "passive", { get: function() {
		return _T = !0, !0;
	} });
	window.addEventListener("test", vT, vT), window.removeEventListener("test", vT, vT);
} catch {
	_T = !1;
}
var yT = _T ? { passive: !1 } : !1, bT = function(e) {
	return e.tagName === "TEXTAREA";
}, xT = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !bT(e) && n[t] === "visible");
}, ST = function(e) {
	return xT(e, "overflowY");
}, CT = function(e) {
	return xT(e, "overflowX");
}, wT = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), DT(e, r)) {
			var i = OT(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, TT = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, ET = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, DT = function(e, t) {
	return e === "v" ? ST(t) : CT(t);
}, OT = function(e, t) {
	return e === "v" ? TT(t) : ET(t);
}, kT = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, AT = function(e, t, n, r, i) {
	var a = kT(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = OT(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && DT(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, jT = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, MT = function(e) {
	return [e.deltaX, e.deltaY];
}, NT = function(e) {
	return e && "current" in e ? e.current : e;
}, PT = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, FT = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, IT = 0, LT = [];
function RT(e) {
	var t = E.useRef([]), n = E.useRef([0, 0]), r = E.useRef(), i = E.useState(IT++)[0], a = E.useState(oT)[0], o = E.useRef(e);
	E.useEffect(function() {
		o.current = e;
	}, [e]), E.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Iw([e.lockRef.current], (e.shards || []).map(NT), !0).filter(Boolean);
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
	var s = E.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = jT(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = wT(d, u);
		if (!f) return !0;
		if (f ? l = d : (l = d === "v" ? "h" : "v", f = wT(d, u)), !f) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var p = r.current || l;
		return AT(p, t, e, p === "h" ? s : c, !0);
	}, []), c = E.useCallback(function(e) {
		var n = e;
		if (LT.length && LT[LT.length - 1] === a) {
			var r = "deltaY" in n ? MT(n) : jT(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && PT(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(NT).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = E.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: zT(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = E.useCallback(function(e) {
		n.current = jT(e), r.current = void 0;
	}, []), d = E.useCallback(function(t) {
		l(t.type, MT(t), t.target, s(t, e.lockRef.current));
	}, []), f = E.useCallback(function(t) {
		l(t.type, jT(t), t.target, s(t, e.lockRef.current));
	}, []);
	E.useEffect(function() {
		return LT.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, yT), document.addEventListener("touchmove", c, yT), document.addEventListener("touchstart", u, yT), function() {
			LT = LT.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, yT), document.removeEventListener("touchmove", c, yT), document.removeEventListener("touchstart", u, yT);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return E.createElement(E.Fragment, null, m ? E.createElement(a, { styles: FT(i) }) : null, p ? E.createElement(gT, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function zT(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@18.3.18_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var BT = Xw(Zw, RT), VT = E.forwardRef(function(e, t) {
	return E.createElement($w, Pw({}, e, {
		ref: t,
		sideCar: BT
	}));
});
VT.classNames = $w.classNames;
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/shared/src/utils.js
var HT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), UT = (...e) => e.filter((e, t, n) => !!e && n.indexOf(e) === t).join(" "), WT = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, GT = k(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => ae("svg", {
	ref: c,
	...WT,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: UT("lucide", i),
	...s
}, [...o.map(([e, t]) => ae(e, t)), ...Array.isArray(a) ? a : [a]])), KT = (e, t) => {
	let n = k(({ className: n, ...r }, i) => ae(GT, {
		ref: i,
		iconNode: t,
		className: UT(`lucide-${HT(e)}`, n),
		...r
	}));
	return n.displayName = `${e}`, n;
}, qT = KT("ChevronRight", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs
function JT(e, t) {
	let n = E.createContext(t), r = (e) => {
		let { children: t, ...r } = e, i = E.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ I(n.Provider, {
			value: i,
			children: t
		});
	};
	r.displayName = e + "Provider";
	function i(r) {
		let i = E.useContext(n);
		if (i) return i;
		if (t !== void 0) return t;
		throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return [r, i];
}
function YT(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = E.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = E.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ I(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = E.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => E.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return E.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, XT(i, ...t)];
}
function XT(...e) {
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
			return E.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function ZT(e) {
	let t = E.useRef(e);
	return E.useEffect(() => {
		t.current = e;
	}), E.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var QT = globalThis?.document ? E.useLayoutEffect : () => {};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function $T(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function eE(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = $T(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : $T(e[t], null);
			}
		};
	};
}
function tE(...e) {
	return E.useCallback(eE(...e), e);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
var nE = E.forwardRef((e, t) => {
	let { children: n, ...r } = e, i = E.Children.toArray(n), a = i.find(aE);
	if (a) {
		let e = a.props.children, n = i.map((t) => t === a ? E.Children.count(e) > 1 ? E.Children.only(null) : E.isValidElement(e) ? e.props.children : null : t);
		return /* @__PURE__ */ I(rE, {
			...r,
			ref: t,
			children: E.isValidElement(e) ? E.cloneElement(e, void 0, n) : null
		});
	}
	return /* @__PURE__ */ I(rE, {
		...r,
		ref: t,
		children: n
	});
});
nE.displayName = "Slot";
var rE = E.forwardRef((e, t) => {
	let { children: n, ...r } = e;
	if (E.isValidElement(n)) {
		let e = sE(n);
		return E.cloneElement(n, {
			...oE(r, n.props),
			ref: t ? eE(t, e) : e
		});
	}
	return E.Children.count(n) > 1 ? E.Children.only(null) : null;
});
rE.displayName = "SlotClone";
var iE = ({ children: e }) => /* @__PURE__ */ I(he, { children: e });
function aE(e) {
	return E.isValidElement(e) && e.type === iE;
}
function oE(e, t) {
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
function sE(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var cE = [
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
	let n = E.forwardRef((e, n) => {
		let { asChild: r, ...i } = e, a = r ? nE : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I(a, {
			...i,
			ref: n
		});
	});
	return n.displayName = `Primitive.${t}`, {
		...e,
		[t]: n
	};
}, {});
function lE(e, t) {
	e && fe.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs
function uE(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.mjs
var dE = E.useId || (() => void 0), fE = 0;
function pE(e) {
	let [t, n] = E.useState(dE());
	return QT(() => {
		e || n((e) => e ?? String(fE++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function mE({ prop: e, defaultProp: t, onChange: n = () => {} }) {
	let [r, i] = hE({
		defaultProp: t,
		onChange: n
	}), a = e !== void 0, o = a ? e : r, s = ZT(n);
	return [o, E.useCallback((t) => {
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
function hE({ defaultProp: e, onChange: t }) {
	let n = E.useState(e), [r] = n, i = E.useRef(r), a = ZT(t);
	return E.useEffect(() => {
		i.current !== r && (a(r), i.current = r);
	}, [
		r,
		i,
		a
	]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function gE(e, t = globalThis?.document) {
	let n = ZT(e);
	E.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.4_@types+react-dom@18.3.1_@types+react@18.3.18_re_6829a286676bb181dfd20166d597ec2d/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var _E = "DismissableLayer", vE = "dismissableLayer.update", yE = "dismissableLayer.pointerDownOutside", bE = "dismissableLayer.focusOutside", xE, SE = E.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), CE = E.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, onDismiss: s, ...c } = e, l = E.useContext(SE), [u, d] = E.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, p] = E.useState({}), m = tE(t, (e) => d(e)), h = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), _ = h.indexOf(g), v = u ? h.indexOf(u) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, b = v >= _, x = EE((e) => {
		let t = e.target, n = [...l.branches].some((e) => e.contains(t));
		b && !n && (i?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f), S = DE((e) => {
		let t = e.target;
		[...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
	}, f);
	return gE((e) => {
		v === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
	}, f), E.useEffect(() => {
		if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (xE = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), OE(), () => {
			n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = xE);
		};
	}, [
		u,
		f,
		n,
		l
	]), E.useEffect(() => () => {
		u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), OE());
	}, [u, l]), E.useEffect(() => {
		let e = () => p({});
		return document.addEventListener(vE, e), () => document.removeEventListener(vE, e);
	}, []), /* @__PURE__ */ I(cE.div, {
		...c,
		ref: m,
		style: {
			pointerEvents: y ? b ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: uE(e.onFocusCapture, S.onFocusCapture),
		onBlurCapture: uE(e.onBlurCapture, S.onBlurCapture),
		onPointerDownCapture: uE(e.onPointerDownCapture, x.onPointerDownCapture)
	});
});
CE.displayName = _E;
var wE = "DismissableLayerBranch", TE = E.forwardRef((e, t) => {
	let n = E.useContext(SE), r = E.useRef(null), i = tE(t, r);
	return E.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ I(cE.div, {
		...e,
		ref: i
	});
});
TE.displayName = wE;
function EE(e, t = globalThis?.document) {
	let n = ZT(e), r = E.useRef(!1), i = E.useRef(() => {});
	return E.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					kE(yE, n, a, { discrete: !0 });
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
function DE(e, t = globalThis?.document) {
	let n = ZT(e), r = E.useRef(!1);
	return E.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && kE(bE, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function OE() {
	let e = new CustomEvent(vE);
	document.dispatchEvent(e);
}
function kE(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? lE(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-do_706903c570469dc042edac24aa08aefe/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var AE = "focusScope.autoFocusOnMount", jE = "focusScope.autoFocusOnUnmount", ME = {
	bubbles: !1,
	cancelable: !0
}, NE = "FocusScope", PE = E.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = E.useState(null), l = ZT(i), u = ZT(a), d = E.useRef(null), f = tE(t, (e) => c(e)), p = E.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	E.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : VE(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || VE(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && VE(s);
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
	]), E.useEffect(() => {
		if (s) {
			HE.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(AE, ME);
				s.addEventListener(AE, l), s.dispatchEvent(t), t.defaultPrevented || (FE(GE(LE(s)), { select: !0 }), document.activeElement === e && VE(s));
			}
			return () => {
				s.removeEventListener(AE, l), setTimeout(() => {
					let t = new CustomEvent(jE, ME);
					s.addEventListener(jE, u), s.dispatchEvent(t), t.defaultPrevented || VE(e ?? document.body, { select: !0 }), s.removeEventListener(jE, u), HE.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let m = E.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = IE(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && VE(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && VE(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ I(cE.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: m
	});
});
PE.displayName = NE;
function FE(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (VE(r, { select: t }), document.activeElement !== n) return;
}
function IE(e) {
	let t = LE(e);
	return [RE(t, e), RE(t.reverse(), e)];
}
function LE(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function RE(e, t) {
	for (let n of e) if (!zE(n, { upTo: t })) return n;
}
function zE(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function BE(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function VE(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && BE(e) && t && e.select();
	}
}
var HE = UE();
function UE() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = WE(e, t), e.unshift(t);
		},
		remove(t) {
			e = WE(e, t), e[0]?.resume();
		}
	};
}
function WE(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function GE(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.3_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-portal/dist/index.mjs
var KE = "Portal", qE = E.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = E.useState(!1);
	QT(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? pe.createPortal(/* @__PURE__ */ I(cE.div, {
		...r,
		ref: t
	}), o) : null;
});
qE.displayName = KE;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.2_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs
function JE(e, t) {
	return E.useReducer((e, n) => t[e][n] ?? e, e);
}
var YE = (e) => {
	let { present: t, children: n } = e, r = XE(t), i = typeof n == "function" ? n({ present: r.isPresent }) : E.Children.only(n), a = tE(r.ref, QE(i));
	return typeof n == "function" || r.isPresent ? E.cloneElement(i, { ref: a }) : null;
};
YE.displayName = "Presence";
function XE(e) {
	let [t, n] = E.useState(), r = E.useRef({}), i = E.useRef(e), a = E.useRef("none"), [o, s] = JE(e ? "mounted" : "unmounted", {
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
	return E.useEffect(() => {
		let e = ZE(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), QT(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = ZE(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), QT(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = ZE(r.current).includes(a.animationName);
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = ZE(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: E.useCallback((e) => {
			e && (r.current = getComputedStyle(e)), n(e);
		}, [])
	};
}
function ZE(e) {
	return e?.animationName || "none";
}
function QE(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var $E = 0;
function eD() {
	E.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? tD()), document.body.insertAdjacentElement("beforeend", e[1] ?? tD()), $E++, () => {
			$E === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), $E--;
		};
	}, []);
}
function tD() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-arrow@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-arrow/dist/index.mjs
var nD = "Arrow", rD = E.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ I(cE.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ I("polygon", { points: "0,0 30,0 15,10" })
	});
});
rD.displayName = nD;
var iD = rD;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs
function aD(e) {
	let [t, n] = E.useState(void 0);
	return QT(() => {
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
var oD = "Popper", [sD, cD] = YT(oD), [lD, uD] = sD(oD), dD = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = E.useState(null);
	return /* @__PURE__ */ I(lD, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
dD.displayName = oD;
var fD = "PopperAnchor", pD = E.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = uD(fD, n), o = E.useRef(null), s = tE(t, o);
	return E.useEffect(() => {
		a.onAnchorChange(r?.current || o.current);
	}), r ? null : /* @__PURE__ */ I(cE.div, {
		...i,
		ref: s
	});
});
pD.displayName = fD;
var mD = "PopperContent", [hD, gD] = sD(mD), _D = E.forwardRef((e, t) => {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = "partial", hideWhenDetached: v = !1, updatePositionStrategy: y = "optimized", onPlaced: b, ...x } = e, S = uD(mD, n), [T, D] = E.useState(null), te = tE(t, (e) => D(e)), [ne, re] = E.useState(null), ie = aD(ne), O = ie?.width ?? 0, ae = ie?.height ?? 0, k = r + (a === "center" ? "" : "-" + a), oe = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, A = Array.isArray(u) ? u : [u], se = A.length > 0, j = {
		padding: oe,
		boundary: A.filter(xD),
		altBoundary: se
	}, { refs: M, floatingStyles: N, placement: ce, isPositioned: le, middlewareData: ue } = p({
		strategy: "fixed",
		placement: k,
		whileElementsMounted: (...e) => o(...e, { animationFrame: y === "always" }),
		elements: { reference: S.anchor },
		middleware: [
			w({
				mainAxis: i + ae,
				alignmentAxis: s
			}),
			l && h({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === "partial" ? C() : void 0,
				...j
			}),
			l && g({ ...j }),
			ee({
				...j,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			ne && _({
				element: ne,
				padding: c
			}),
			SD({
				arrowWidth: O,
				arrowHeight: ae
			}),
			v && m({
				strategy: "referenceHidden",
				...j
			})
		]
	}), [de, P] = CD(ce), F = ZT(b);
	QT(() => {
		le && F?.();
	}, [le, F]);
	let fe = ue.arrow?.x, pe = ue.arrow?.y, me = ue.arrow?.centerOffset !== 0, [he, L] = E.useState();
	return QT(() => {
		T && L(window.getComputedStyle(T).zIndex);
	}, [T]), /* @__PURE__ */ I("div", {
		ref: M.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...N,
			transform: le ? N.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: he,
			"--radix-popper-transform-origin": [ue.transformOrigin?.x, ue.transformOrigin?.y].join(" "),
			...ue.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ I(hD, {
			scope: n,
			placedSide: de,
			onArrowChange: re,
			arrowX: fe,
			arrowY: pe,
			shouldHideArrow: me,
			children: /* @__PURE__ */ I(cE.div, {
				"data-side": de,
				"data-align": P,
				...x,
				ref: te,
				style: {
					...x.style,
					animation: le ? void 0 : "none"
				}
			})
		})
	});
});
_D.displayName = mD;
var vD = "PopperArrow", yD = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, bD = E.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = gD(vD, n), a = yD[i.placedSide];
	return /* @__PURE__ */ I("span", {
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
		children: /* @__PURE__ */ I(iD, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
bD.displayName = vD;
function xD(e) {
	return e !== null;
}
var SD = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = CD(n), u = {
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
function CD(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var wD = dD, TD = pD, ED = _D, DD = bD, OD = "Popover", [kD, AD] = YT(OD, [cD]), jD = cD(), [MD, ND] = kD(OD), PD = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = jD(t), c = E.useRef(null), [l, u] = E.useState(!1), [d = !1, f] = mE({
		prop: r,
		defaultProp: i,
		onChange: a
	});
	return /* @__PURE__ */ I(wD, {
		...s,
		children: /* @__PURE__ */ I(MD, {
			scope: t,
			contentId: pE(),
			triggerRef: c,
			open: d,
			onOpenChange: f,
			onOpenToggle: E.useCallback(() => f((e) => !e), [f]),
			hasCustomAnchor: l,
			onCustomAnchorAdd: E.useCallback(() => u(!0), []),
			onCustomAnchorRemove: E.useCallback(() => u(!1), []),
			modal: o,
			children: n
		})
	});
};
PD.displayName = OD;
var FD = "PopoverAnchor", ID = E.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = ND(FD, n), a = jD(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return E.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ I(TD, {
		...a,
		...r,
		ref: t
	});
});
ID.displayName = FD;
var LD = "PopoverTrigger", RD = E.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = ND(LD, n), a = jD(n), o = tE(t, i.triggerRef), s = /* @__PURE__ */ I(cE.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": QD(i.open),
		...r,
		ref: o,
		onClick: uE(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ I(TD, {
		asChild: !0,
		...a,
		children: s
	});
});
RD.displayName = LD;
var zD = "PopoverPortal", [BD, VD] = kD(zD, { forceMount: void 0 }), HD = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = ND(zD, t);
	return /* @__PURE__ */ I(BD, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ I(YE, {
			present: n || a.open,
			children: /* @__PURE__ */ I(qE, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
HD.displayName = zD;
var UD = "PopoverContent", WD = E.forwardRef((e, t) => {
	let n = VD(UD, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = ND(UD, e.__scopePopover);
	return /* @__PURE__ */ I(YE, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ I(GD, {
			...i,
			ref: t
		}) : /* @__PURE__ */ I(KD, {
			...i,
			ref: t
		})
	});
});
WD.displayName = UD;
var GD = E.forwardRef((e, t) => {
	let n = ND(UD, e.__scopePopover), r = E.useRef(null), i = tE(t, r), a = E.useRef(!1);
	return E.useEffect(() => {
		let e = r.current;
		if (e) return Nw(e);
	}, []), /* @__PURE__ */ I(VT, {
		as: nE,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ I(qD, {
			...e,
			ref: i,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: uE(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), a.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: uE(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				a.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: uE(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), KD = E.forwardRef((e, t) => {
	let n = ND(UD, e.__scopePopover), r = E.useRef(!1), i = E.useRef(!1);
	return /* @__PURE__ */ I(qD, {
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
}), qD = E.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = ND(UD, n), p = jD(n);
	return eD(), /* @__PURE__ */ I(PE, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ I(CE, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			children: /* @__PURE__ */ I(ED, {
				"data-state": QD(f.open),
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
}), JD = "PopoverClose", YD = E.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = ND(JD, n);
	return /* @__PURE__ */ I(cE.button, {
		type: "button",
		...r,
		ref: t,
		onClick: uE(e.onClick, () => i.onOpenChange(!1))
	});
});
YD.displayName = JD;
var XD = "PopoverArrow", ZD = E.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = jD(n);
	return /* @__PURE__ */ I(DD, {
		...i,
		...r,
		ref: t
	});
});
ZD.displayName = XD;
function QD(e) {
	return e ? "open" : "closed";
}
var $D = PD, eO = ID, tO = RD, nO = HD, rO = WD, iO = ZD, aO = $D, oO = tO, sO = eO, cO = iO, lO = E.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, container: r, ...i }, a) => /* @__PURE__ */ I(nO, {
	container: r,
	children: /* @__PURE__ */ I(rO, {
		asChild: i.asChild,
		ref: a,
		align: t,
		sideOffset: n,
		className: c("z-50 w-72 rounded-xs border bg-f1-background p-4 text-f1-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "origin-[var(--radix-popover-content-transform-origin)]", "max-h-[var(--radix-popover-content-available-height)]", "overflow-auto", e),
		...i
	})
}));
lO.displayName = rO.displayName;
//#endregion
export { yC as $, U as $t, KT as A, nd as At, KC as B, il as Bt, eE as C, Ee as Cn, vd as Ct, JT as D, Sd as Dt, ZT as E, R as En, bd as Et, aw as F, yu as Ft, PC as G, go as Gt, HC as H, Tc as Ht, rw as I, vu as It, jC as J, Qi as Jt, FC as K, la as Kt, nw as L, _u as Lt, Nw as M, Qu as Mt, pw as N, Yu as Nt, YT as O, ad as Ot, sw as P, Lu as Pt, xC as Q, Fi as Qt, $C as R, gu as Rt, nE as S, Ae as Sn, _d as St, QT as T, Te as Tn, md as Tt, RC as U, G as Ut, VC as V, rl as Vt, NC as W, Fo as Wt, TC as X, Yi as Xt, CC as Y, Zi as Yt, AC as Z, qi as Zt, mE as _, B as _n, Dd as _t, oO as a, Pn as an, rC as at, cE as b, ke as bn, wd as bt, nO as c, Dt as cn, ZS as ct, aD as d, rt as dn, MS as dt, Ir as en, vC as et, eD as f, $e as fn, iS as ft, CE as g, Be as gn, Pf as gt, PE as h, Ve as hn, zm as ht, lO as i, fr as in, iC as it, VT as j, ed as jt, qT as k, rd as kt, $D as l, dt as ln, GS as lt, qE as m, Ue as mn, lb as mt, sO as n, br as nn, fC as nt, eO as o, en as on, nC as ot, YE as p, Ge as pn, Qb as pt, MC as q, $i as qt, cO as r, pr as rn, dC as rt, rO as s, At as sn, eC as st, aO as t, vr as tn, lC as tt, tO as u, V as un, KS as ut, pE as v, Le as vn, kd as vt, tE as w, xe as wn, dd as wt, lE as x, Pe as xn, gd as xt, uE as y, Re as yn, Ad as yt, YC as z, Vl as zt };
