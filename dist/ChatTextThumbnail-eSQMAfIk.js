import { useEffect as e, useRef as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatTextThumbnail.tsx
var i = 4096, a = ({ url: a, onError: o, onRendered: s }) => {
	let [c, l] = n(null), u = t(o);
	u.current = o;
	let d = t(s);
	return d.current = s, e(() => {
		let e = !1;
		return fetch(a).then((e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e.text();
		}).then((t) => {
			if (!e) {
				if (t.trim() === "") {
					u.current();
					return;
				}
				l(t.slice(0, i)), d.current();
			}
		}).catch(() => {
			e || u.current();
		}), () => {
			e = !0;
		};
	}, [a]), c === null ? null : /* @__PURE__ */ r("pre", {
		className: "m-0 whitespace-pre-wrap break-words bg-f1-background p-3 text-left font-mono text-sm leading-5 text-f1-foreground-secondary",
		children: c
	});
};
//#endregion
export { a as default };
