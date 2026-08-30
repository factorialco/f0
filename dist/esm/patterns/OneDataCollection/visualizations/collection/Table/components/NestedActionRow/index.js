import { FlatRow as e } from "../FlatRow.js";
import { forwardRef as t, useLayoutEffect as n, useRef as r } from "react";
import { jsx as i } from "react/jsx-runtime";
var a = t((t, a) => {
	let o = r(null), s = t.rowRef?.current;
	n(() => {
		if (o.current && s) {
			let e = t.rowRef?.current?.getBoundingClientRect().height;
			o.current.style.height = `${e}px`;
		}
	}, [s, t.rowRef]);
	let c = (e) => {
		o.current = e, typeof a == "function" ? a(e) : a && (a.current = e);
	}, l = t.nestedRowProps?.depth ?? 0, u = t.columns.map((e) => ({
		...e,
		render: () => "",
		editType: () => "display-only"
	}));
	return /* @__PURE__ */ i(e, {
		...t,
		columns: u,
		ref: c,
		noBorder: l > 0,
		nestedRowProps: {
			...t.nestedRowProps,
			depth: l + 1,
			hasLoadedChildren: !1,
			...t.nestedRowPropsOverride
		}
	});
});
//#endregion
export { a as NestedActionRow };
