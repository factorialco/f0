import { __commonJSMin as e } from "../_virtual/_rolldown/runtime.js";
//#region ../../node_modules/.pnpm/bind-event-listener@3.0.0/node_modules/bind-event-listener/dist/bind.js
var t = /* @__PURE__ */ e(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.bind = void 0;
	function t(e, t) {
		var n = t.type, r = t.listener, i = t.options;
		return e.addEventListener(n, r, i), function() {
			e.removeEventListener(n, r, i);
		};
	}
	e.bind = t;
}));
//#endregion
export default t();
export { t as require_bind };
