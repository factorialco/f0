import { t as e } from "./docx-preview-BDrVn7Yf.js";
import { useEffect as t, useRef as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatDocxThumbnail.tsx
var a = ({ url: a, width: o, onError: s, onRendered: c }) => {
	let l = n(null), [u, d] = r(null), f = n(s);
	f.current = s;
	let p = n(c);
	return p.current = c, t(() => {
		let t = l.current;
		if (!t) return;
		let n = !1;
		return fetch(a).then((e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e.blob();
		}).then((r) => {
			if (!n) return e(r, t, void 0, {
				inWrapper: !1,
				breakPages: !1,
				ignoreLastRenderedPageBreak: !0,
				renderHeaders: !1,
				renderFooters: !1
			}).then(() => {
				if (n) return;
				let e = t.scrollWidth;
				d(e > 0 ? Math.min(1, o / e) : 1), p.current();
			});
		}).catch(() => {
			n || f.current();
		}), () => {
			n = !0;
		};
	}, [a, o]), /* @__PURE__ */ i("div", {
		className: "overflow-hidden bg-f1-background text-left",
		children: /* @__PURE__ */ i("div", {
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
