import { cn as e } from "../../../../lib/utils.js";
import { F0Link as t } from "../../../../components/F0Link/F0Link.js";
import { sanitizeDisplayText as n } from "./sanitize-text.js";
import { ChatUserHoverCard as r } from "../components/ChatUserHoverCard.js";
import { Fragment as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/utils/render-body.tsx
var o = /(https?:\/\/[^\s]+)/g, s = (r, s) => {
	let c = n(r), l = c.split(o);
	if (l.length === 1) return c;
	let u = new Map((s ?? []).filter((e) => e.title).map((e) => [e.url, e.title]));
	return l.map((n, r) => {
		if (n.length === 0) return null;
		if (r % 2 == 0) return /* @__PURE__ */ a(i, { children: n }, `text-${r}`);
		let o = u.get(n);
		return /* @__PURE__ */ a(t, {
			href: n,
			target: "_blank",
			stopPropagation: !0,
			title: o ? n : void 0,
			className: e("whitespace-normal", o ? "break-words" : "break-all"),
			children: o ?? n
		}, `link-${r}`);
	});
}, c = (t, o, c) => {
	let l = n(t);
	if (o.length === 0) return s(l, c);
	let u = [], d = [...o].sort((e, t) => t.name.length - e.name.length);
	for (let e of d) {
		let t = `@${e.name}`, n = 0;
		for (;;) {
			let r = l.indexOf(t, n);
			if (r === -1) break;
			u.push({
				start: r,
				end: r + t.length,
				token: e
			}), n = r + t.length;
		}
	}
	u.sort((e, t) => e.start - t.start);
	let f = [], p = 0;
	for (let e of u) e.start < p || (f.push(e), p = e.end);
	if (f.length === 0) return s(l, c);
	let m = [], h = 0;
	return f.forEach((t, n) => {
		t.start > h && m.push(/* @__PURE__ */ a(i, { children: s(l.slice(h, t.start), c) }, `t-${n}`));
		let { token: o } = t, u = /* @__PURE__ */ a("span", {
			className: e("font-medium text-f1-foreground-secondary hover:text-f1-foreground"),
			children: l.slice(t.start, t.end)
		});
		m.push(o.user ? /* @__PURE__ */ a(r, {
			user: o.user,
			children: u
		}, `m-${n}`) : /* @__PURE__ */ a(i, { children: u }, `m-${n}`)), h = t.end;
	}), h < l.length && m.push(/* @__PURE__ */ a(i, { children: s(l.slice(h), c) }, "t-last")), m;
};
//#endregion
export { s as renderBodyWithLinks, c as renderBodyWithMentions };
