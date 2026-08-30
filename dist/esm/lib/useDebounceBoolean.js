import { useEffect as e, useState as t } from "react";
//#region src/lib/useDebounceBoolean.ts
var n = ({ value: n, delay: r }) => {
	let [i, a] = t(!1);
	return e(() => {
		let e;
		return n ? e = setTimeout(() => {
			a(n);
		}, r) : a(!1), () => {
			e && clearTimeout(e);
		};
	}, [n, r]), i;
};
//#endregion
export { n as useDebounceBoolean };
