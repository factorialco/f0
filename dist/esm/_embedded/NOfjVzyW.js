import e from "./DjbvCfWF.js";
import { once as t } from "./auabBO2e.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-monitor.js
function n(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = r(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var i = 0, a = function() {};
			return {
				s: a,
				n: function() {
					return i >= e.length ? { done: !0 } : {
						done: !1,
						value: e[i++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: a
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var o, s = !0, c = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return s = e.done, e;
		},
		e: function(e) {
			c = !0, o = e;
		},
		f: function() {
			try {
				s || n.return == null || n.return();
			} finally {
				if (c) throw o;
			}
		}
	};
}
function r(e, t) {
	if (e) {
		if (typeof e == "string") return i(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
	}
}
function i(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
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
function s() {
	var e = /* @__PURE__ */ new Set(), r = null;
	function i(e) {
		r && (!e.canMonitor || e.canMonitor(r.canMonitorArgs)) && r.active.add(e);
	}
	function a(n) {
		var a = o({}, n);
		e.add(a), i(a);
		function s() {
			e.delete(a), r && r.active.delete(a);
		}
		return t(s);
	}
	function s(t) {
		var a = t.eventName, o = t.payload;
		if (a === "onGenerateDragPreview") {
			r = {
				canMonitorArgs: {
					initial: o.location.initial,
					source: o.source
				},
				active: /* @__PURE__ */ new Set()
			};
			var s = n(e), c;
			try {
				for (s.s(); !(c = s.n()).done;) {
					var l = c.value;
					i(l);
				}
			} catch (e) {
				s.e(e);
			} finally {
				s.f();
			}
		}
		if (r) {
			for (var u = Array.from(r.active), d = 0, f = u; d < f.length; d++) {
				var p = f[d];
				if (r.active.has(p)) {
					var m;
					(m = p[a]) == null || m.call(p, o);
				}
			}
			a === "onDrop" && (r.active.clear(), r = null);
		}
	}
	return {
		dispatchEvent: s,
		monitorForConsumers: a
	};
}
//#endregion
export { s as makeMonitor };
