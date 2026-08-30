import { __commonJSMin as e } from "../_virtual/_rolldown/runtime.js";
import { require_bind as t } from "./B5LPVUq1.js";
//#region ../../node_modules/.pnpm/bind-event-listener@3.0.0/node_modules/bind-event-listener/dist/bind-all.js
var n = /* @__PURE__ */ e(((e) => {
	var n = e && e.__assign || function() {
		return n = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, n.apply(this, arguments);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = void 0;
	var r = t();
	function i(e) {
		if (e !== void 0) return typeof e == "boolean" ? { capture: e } : e;
	}
	function a(e, t) {
		return t == null ? e : n(n({}, e), { options: n(n({}, i(t)), i(e.options)) });
	}
	function o(e, t, n) {
		var i = t.map(function(t) {
			var i = a(t, n);
			return (0, r.bind)(e, i);
		});
		return function() {
			i.forEach(function(e) {
				return e();
			});
		};
	}
	e.bindAll = o;
}));
//#endregion
export default n();
export { n as require_bind_all };
