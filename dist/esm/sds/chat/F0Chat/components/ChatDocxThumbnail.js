import { useEffect as e, useRef as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
import { renderAsync as i } from "docx-preview";
//#region src/sds/chat/F0Chat/components/ChatDocxThumbnail.tsx
var a = ({ url: a, width: o, onError: s, onRendered: c }) => {
	let l = t(null), [u, d] = n(null), f = t(s);
	f.current = s;
	let p = t(c);
	return p.current = c, e(() => {
		let e = l.current;
		if (!e) return;
		let t = !1;
		return fetch(a).then((e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e.blob();
		}).then((n) => {
			if (!t) return i(n, e, void 0, {
				inWrapper: !1,
				breakPages: !1,
				ignoreLastRenderedPageBreak: !0,
				renderHeaders: !1,
				renderFooters: !1
			}).then(() => {
				if (t) return;
				let n = e.scrollWidth;
				d(n > 0 ? Math.min(1, o / n) : 1), p.current();
			});
		}).catch(() => {
			t || f.current();
		}), () => {
			t = !0;
		};
	}, [a, o]), /* @__PURE__ */ r("div", {
		className: "overflow-hidden bg-f1-background text-left",
		children: /* @__PURE__ */ r("div", {
			ref: l,
			style: u === null ? void 0 : {
				transform: `scale(${u})`,
				transformOrigin: "top left"
			}
		})
	});
};
//#endregion
export { a as default };
