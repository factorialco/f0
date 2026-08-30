import { useReducedMotion as e } from "../../../../lib/a11y.js";
import { useRef as t, useState as n } from "react";
import { useIsomorphicLayoutEffect as r } from "usehooks-ts";
//#region src/kits/ai/F0AiChat/hooks/useRevealOnChange.ts
function i(i, a, o = .2) {
	let s = e(), [c, l] = n(!0), u = t(i);
	return r(() => {
		if (u.current === i) return;
		let e = u.current;
		if (u.current = i, s) return;
		l(!1);
		let t = typeof a == "function" ? a(e, i) : a, n = setTimeout(() => l(!0), t);
		return () => clearTimeout(n);
	}, [i, s]), {
		visible: c,
		motionProps: {
			animate: { opacity: +!!c },
			transition: {
				duration: s ? 0 : c ? o : 0,
				ease: "easeInOut"
			}
		}
	};
}
//#endregion
export { i as useRevealOnChange };
