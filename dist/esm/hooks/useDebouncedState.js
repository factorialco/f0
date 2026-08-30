import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/hooks/useDebouncedState.ts
function i(i, a) {
	let [o, s] = r(i), c = n(null), l = e((e) => {
		c.current !== null && clearTimeout(c.current), c.current = setTimeout(() => {
			c.current = null, s(e);
		}, a);
	}, [a]);
	return t(() => () => {
		c.current !== null && (clearTimeout(c.current), c.current = null);
	}, []), [o, l];
}
//#endregion
export { i as useDebouncedState };
