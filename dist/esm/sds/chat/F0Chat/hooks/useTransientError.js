import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/sds/chat/F0Chat/hooks/useTransientError.ts
var i = 4e3;
function a(a = i) {
	let [o, s] = r(null), c = n(null), l = e(() => {
		c.current && clearTimeout(c.current), c.current = null, s(null);
	}, []), u = e((e, t) => {
		if (c.current && clearTimeout(c.current), s(e), t?.persistent) {
			c.current = null;
			return;
		}
		c.current = setTimeout(() => {
			s(null), c.current = null;
		}, a);
	}, [a]);
	return t(() => () => {
		c.current && clearTimeout(c.current);
	}, []), {
		error: o,
		show: u,
		clear: l
	};
}
//#endregion
export { a as useTransientError };
