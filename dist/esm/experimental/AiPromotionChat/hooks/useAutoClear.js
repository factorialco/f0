import { useEffect as e, useRef as t } from "react";
//#region src/experimental/AiPromotionChat/hooks/useAutoClear.ts
var n = ({ autoClearMinutes: n, reset: r, isOpen: i }) => {
	let a = t(null);
	e(() => (i ? a.current &&= (clearTimeout(a.current), null) : n !== null && (a.current = setTimeout(() => {
		r();
	}, n * 60 * 1e3)), () => {
		a.current &&= (clearTimeout(a.current), null);
	}), [
		r,
		i,
		n
	]);
};
//#endregion
export { n as useAutoClear };
