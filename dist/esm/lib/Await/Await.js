import { DataTestIdWrapper as e } from "../data-testid/index.js";
import { useEffect as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
var i = ({ resolve: i, fallback: a, error: o, children: s, dataTestId: c }) => {
	let [l, u] = n(() => i instanceof Promise ? null : i), [d, f] = n(null), [p, m] = n(!1);
	return t(() => {
		if (i instanceof Promise) {
			m(!0), f(null), u(null);
			let e = !1;
			return i.then((t) => {
				e || u(t);
			}).catch((t) => {
				e || f(t);
			}).finally(() => {
				e || m(!1);
			}), () => {
				e = !0;
			};
		}
		u(i), f(null), m(!1);
	}, [i]), p ? /* @__PURE__ */ r(e, {
		dataTestId: c,
		children: a
	}) : d ? /* @__PURE__ */ r(e, {
		dataTestId: c,
		children: o ?? null
	}) : l === null ? /* @__PURE__ */ r(e, {
		dataTestId: c,
		children: null
	}) : /* @__PURE__ */ r(e, {
		dataTestId: c,
		children: s(l)
	});
};
//#endregion
export { i as Await };
