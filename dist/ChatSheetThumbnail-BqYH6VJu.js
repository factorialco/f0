import { n as e } from "./sheetPreview-ol-Ru7Kz.js";
import { useEffect as t, useRef as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatSheetThumbnail.tsx
var a = 12, o = 8, s = ({ url: s, onError: c, onRendered: l }) => {
	let [u, d] = r(null), f = n(c);
	f.current = c;
	let p = n(l);
	return p.current = l, t(() => {
		let t = !1;
		return e(s, {
			maxRows: a,
			maxCols: o
		}).then((e) => {
			if (t) return;
			let n = e[0];
			if (!n || n.rows.length === 0) {
				f.current();
				return;
			}
			d(n.rows), p.current();
		}).catch(() => {
			t || f.current();
		}), () => {
			t = !0;
		};
	}, [s]), u ? /* @__PURE__ */ i("table", {
		className: "w-full border-collapse bg-f1-background text-left",
		children: /* @__PURE__ */ i("tbody", { children: u.map((e, t) => /* @__PURE__ */ i("tr", { children: e.map((e, t) => /* @__PURE__ */ i("td", {
			className: "whitespace-nowrap border border-solid border-f1-border-secondary px-1.5 py-0.5 text-sm text-f1-foreground",
			children: e
		}, t)) }, t)) })
	}) : null;
};
//#endregion
export { s as default };
