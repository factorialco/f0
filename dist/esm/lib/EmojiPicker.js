import { RenderErrorBoundary as e } from "./RenderErrorBoundary.js";
import { useEffect as t, useRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
import "emoji-mart";
//#region src/lib/EmojiPicker.tsx
var i = [
	"aria-posinset",
	"aria-selected",
	"aria-setsize"
];
function a(e) {
	let t = null, n = null, r = 0, a = () => {
		let o = e.shadowRoot;
		if (!o) {
			r < 10 && (r += 1, n = requestAnimationFrame(a));
			return;
		}
		let s = () => {
			let e = i.map((e) => `button[${e}]`).join(",");
			for (let t of o.querySelectorAll(e)) for (let e of i) t.removeAttribute(e);
			o.querySelector(".scroll")?.setAttribute("tabindex", "0");
		};
		s(), t = new MutationObserver(s), t.observe(o, {
			subtree: !0,
			childList: !0,
			attributes: !0,
			attributeFilter: [...i]
		});
	};
	return a(), () => {
		t?.disconnect(), n !== null && cancelAnimationFrame(n);
	};
}
function o({ className: e, ...i }) {
	let o = n(null), s = n(null), c = n(i), l = n(e);
	return c.current = i, l.current = e, t(() => {
		let e = o.current;
		if (!e) return;
		let t = document.createElement("em-emoji-picker");
		s.current = t, t.className = l.current ?? "", t.props = c.current, e.appendChild(t);
		let n = a(t);
		return () => {
			n(), t.remove(), s.current = null;
		};
	}, []), t(() => {
		let t = s.current;
		t && (t.className = e ?? "", t.update?.(i));
	}), /* @__PURE__ */ r("div", { ref: o });
}
function s(t) {
	return /* @__PURE__ */ r(e, {
		onError: (e) => {
			console.error("EmojiPicker failed to mount", e);
		},
		children: /* @__PURE__ */ r(o, { ...t })
	});
}
//#endregion
export { s as EmojiPicker };
