import { CHAT_COMPOSER_HEIGHT_PROPERTY as e } from "../utils/chat-layout.js";
import { useLayoutEffect as t, useRef as n } from "react";
//#region src/sds/chat/F0Chat/hooks/useComposerOverlayLayout.ts
var r = (e) => Array.isArray(e), i = (i) => {
	let a = n(null), o = n(null);
	return t(() => {
		let t = a.current, n = o.current;
		if (!t) return;
		if (!i || !n) {
			t.style.setProperty(e, "0px");
			return;
		}
		let s = -1, c = (n) => {
			let r = Math.ceil(n);
			r !== s && (s = r, t.style.setProperty(e, `${r}px`));
		}, l = () => c(n.getBoundingClientRect().height);
		if (l(), typeof ResizeObserver > "u") return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
		let u = new ResizeObserver((e) => {
			let t = e[0]?.borderBoxSize, i = t ? r(t) ? t[0] : t : void 0;
			c(i?.blockSize ?? n.getBoundingClientRect().height);
		});
		return u.observe(n), () => u.disconnect();
	}, [i]), {
		shellRef: a,
		composerOverlayRef: o
	};
};
//#endregion
export { i as useComposerOverlayLayout };
