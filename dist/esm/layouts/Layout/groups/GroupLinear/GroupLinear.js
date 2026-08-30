import { validLayoutChildrenGuard as e } from "../../internal/utils.js";
import { Children as t, Fragment as n, forwardRef as r, useEffect as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/layouts/Layout/groups/GroupLinear/GroupLinear.tsx
var s = r(({ children: r, onSort: s, ...c }, l) => {
	e("GroupLinear", r, ["block"]);
	let [u, d] = a(t.toArray(r));
	return i(() => {
		d(t.toArray(r));
	}, [r]), i(() => {
		s?.(u);
	}, [u, s]), /* @__PURE__ */ o("div", {
		ref: l,
		...c,
		children: u.map((e, t) => /* @__PURE__ */ o(n, { children: e }, t))
	});
});
s.displayName = "GroupLinear", s.__isPageLayoutGroup = !0;
//#endregion
export { s as GroupLinear };
