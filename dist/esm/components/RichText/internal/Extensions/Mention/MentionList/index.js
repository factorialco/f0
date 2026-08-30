import { MentionItem as e } from "../MentionItem/index.js";
import { forwardRef as t, useCallback as n, useEffect as r, useImperativeHandle as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/RichText/internal/Extensions/Mention/MentionList/index.tsx
var s = t(({ items: t, command: s, component: c = e }, l) => {
	let [u, d] = a(0), f = n((e) => {
		let n = t[e];
		n && s(n);
	}, [t, s]), p = n(() => {
		d((e) => (e + t.length - 1) % t.length);
	}, [t.length]), m = n(() => {
		d((e) => (e + 1) % t.length);
	}, [t.length]), h = n(() => {
		f(u);
	}, [u, f]);
	return r(() => {
		d(0);
	}, [t]), i(l, () => ({ onKeyDown: ({ event: e }) => e.key === "ArrowUp" ? (p(), !0) : e.key === "ArrowDown" ? (m(), !0) : e.key === "Enter" && (h(), !0) }), [
		p,
		m,
		h
	]), /* @__PURE__ */ o("div", {
		className: "flex max-h-72 w-60 flex-col gap-2 overflow-y-auto rounded-md border border-solid border-f1-border bg-f1-background p-0.5 drop-shadow-sm",
		children: t.length === 0 ? /* @__PURE__ */ o("div", {
			className: "p-2",
			children: /* @__PURE__ */ o("p", {
				className: "text-neutral-40 text-sm font-medium",
				children: "No results found"
			})
		}) : t.map((e, t) => /* @__PURE__ */ o("div", {
			onClick: () => f(t),
			onMouseEnter: () => d(t),
			className: "cursor-pointer bg-f1-background",
			children: /* @__PURE__ */ o(c, {
				item: e,
				index: t,
				selected: t === u
			})
		}, t))
	});
});
s.displayName = "MentionList";
//#endregion
export { s as MentionList };
