import e from "./DjbvCfWF.js";
import t from "./D3ikuXMl.js";
import { once as n } from "./auabBO2e.js";
import { combine as r } from "./B-6-8PVE.js";
import { addAttribute as i } from "./DCgcmaLB.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-drop-target.js
function a(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function o(t) {
	for (var n = 1; n < arguments.length; n++) {
		var r = arguments[n] == null ? {} : arguments[n];
		n % 2 ? a(Object(r), !0).forEach(function(n) {
			e(t, n, r[n]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
			Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
		});
	}
	return t;
}
function s(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = c(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a, o = !0, s = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return o = e.done, e;
		},
		e: function(e) {
			s = !0, a = e;
		},
		f: function() {
			try {
				o || n.return == null || n.return();
			} finally {
				if (s) throw a;
			}
		}
	};
}
function c(e, t) {
	if (e) {
		if (typeof e == "string") return l(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0;
	}
}
function l(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function u(e) {
	return e.slice(0).reverse();
}
function d(e) {
	var a = e.typeKey, c = e.defaultDropEffect, l = /* @__PURE__ */ new WeakMap(), d = `data-drop-target-for-${a}`, f = `[${d}]`;
	function p(e) {
		return l.set(e.element, e), function() {
			return l.delete(e.element);
		};
	}
	function m(e) {
		if (process.env.NODE_ENV !== "production") {
			var t = l.get(e.element);
			t && console.warn(`You have already registered a [${a}] dropTarget on the same element`, {
				existing: t,
				proposed: e
			}), e.element instanceof HTMLIFrameElement && console.warn("\n            We recommend not registering <iframe> elements as drop targets\n            as it can result in some strange browser event ordering.\n          ".replace(/\s{2,}/g, " ").trim());
		}
		var o = r(i(e.element, {
			attribute: d,
			value: "true"
		}), p(e));
		return n(o);
	}
	function h(e) {
		var n = e.source, r = e.target, i = e.input, a = e.result, o = a === void 0 ? [] : a;
		if (r == null) return o;
		if (!(r instanceof Element)) return r instanceof Node ? h({
			source: n,
			target: r.parentElement,
			input: i,
			result: o
		}) : o;
		var s = r.closest(f);
		if (s == null) return o;
		var u = l.get(s);
		if (u == null) return o;
		var d = {
			input: i,
			source: n,
			element: u.element
		};
		if (u.canDrop && !u.canDrop(d)) return h({
			source: n,
			target: u.element.parentElement,
			input: i,
			result: o
		});
		var p = u.getData?.call(u, d) ?? {}, m = u.getDropEffect?.call(u, d) ?? c, g = {
			data: p,
			element: u.element,
			dropEffect: m,
			isActiveDueToStickiness: !1
		};
		return h({
			source: n,
			target: u.element.parentElement,
			input: i,
			result: [].concat(t(o), [g])
		});
	}
	function g(e) {
		var t = e.eventName, n = e.payload, r = s(n.location.current.dropTargets), i;
		try {
			for (r.s(); !(i = r.n()).done;) {
				var a, c = i.value, u = l.get(c.element), d = o(o({}, n), {}, { self: c });
				u == null || (a = u[t]) == null || a.call(u, d);
			}
		} catch (e) {
			r.e(e);
		} finally {
			r.f();
		}
	}
	var _ = {
		onGenerateDragPreview: g,
		onDrag: g,
		onDragStart: g,
		onDrop: g,
		onDropTargetChange: function(e) {
			var t = e.payload, n = new Set(t.location.current.dropTargets.map(function(e) {
				return e.element;
			})), r = /* @__PURE__ */ new Set(), i = s(t.location.previous.dropTargets), a;
			try {
				for (i.s(); !(a = i.n()).done;) {
					var c, u = a.value;
					r.add(u.element);
					var d = l.get(u.element), f = n.has(u.element), p = o(o({}, t), {}, { self: u });
					if (d == null || (c = d.onDropTargetChange) == null || c.call(d, p), !f) {
						var m;
						d == null || (m = d.onDragLeave) == null || m.call(d, p);
					}
				}
			} catch (e) {
				i.e(e);
			} finally {
				i.f();
			}
			var h = s(t.location.current.dropTargets), g;
			try {
				for (h.s(); !(g = h.n()).done;) {
					var _, v, y = g.value;
					if (!r.has(y.element)) {
						var b = o(o({}, t), {}, { self: y }), x = l.get(y.element);
						x == null || (_ = x.onDropTargetChange) == null || _.call(x, b), x == null || (v = x.onDragEnter) == null || v.call(x, b);
					}
				}
			} catch (e) {
				h.e(e);
			} finally {
				h.f();
			}
		}
	};
	function v(e) {
		_[e.eventName](e);
	}
	function y(e) {
		var t = e.source, n = e.target, r = e.input, i = e.current, a = h({
			source: t,
			target: n,
			input: r
		});
		if (a.length >= i.length) return a;
		for (var s = u(i), c = u(a), d = [], f = 0; f < s.length; f++) {
			var p, m = s[f], g = c[f];
			if (g != null) {
				d.push(g);
				continue;
			}
			var _ = d[f - 1], v = s[f - 1];
			if (_?.element !== v?.element) break;
			var y = l.get(m.element);
			if (!y) break;
			var b = {
				input: r,
				source: t,
				element: y.element
			};
			if (y.canDrop && !y.canDrop(b) || !((p = y.getIsSticky) != null && p.call(y, b))) break;
			d.push(o(o({}, m), {}, { isActiveDueToStickiness: !0 }));
		}
		return u(d);
	}
	return {
		dropTargetForConsumers: m,
		getIsOver: y,
		dispatchEvent: v
	};
}
//#endregion
export { d as makeDropTarget };
