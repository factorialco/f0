import { escapeXml as e } from "./highlight-utils.js";
import { useCallback as t, useEffect as n, useMemo as r, useRef as i, useState as a } from "react";
//#region src/kits/ai/F0AiChatTextArea/useMentions.ts
function o(e, t, n) {
	let r = e.slice(0, t).lastIndexOf("@");
	if (r === -1) return null;
	if (r > 0) {
		let t = e[r - 1];
		if (t !== " " && t !== "\n" && t !== "	") return null;
	}
	let i = e.slice(r + 1, t);
	if (i.includes("\n")) return null;
	for (let i of n) {
		let n = e.slice(r + 1), a = r + 1 + i.name.length;
		if (n.startsWith(i.name) && t >= a) {
			let t = e[a];
			if (t === " " || t === "\n" || t === "	") return null;
		}
	}
	return {
		atIndex: r,
		query: i
	};
}
var s = /* @__PURE__ */ "direction.boxSizing.width.height.overflowX.overflowY.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize.whiteSpace.wordWrap.wordBreak".split(".");
function c(e, t) {
	let n = document.createElement("div"), r = n.style, i = window.getComputedStyle(e);
	r.whiteSpace = "pre-wrap", r.wordWrap = "break-word", r.position = "absolute", r.visibility = "hidden", r.overflow = "hidden";
	for (let e of s) r.setProperty(e, i.getPropertyValue(e));
	n.textContent = e.value.substring(0, t);
	let a = document.createElement("span");
	a.textContent = e.value.substring(t) || "​", n.appendChild(a), document.body.appendChild(n);
	let o = a.offsetLeft, c = a.offsetTop - e.scrollTop;
	return document.body.removeChild(n), {
		left: o,
		top: c
	};
}
var l = 250;
function u({ inputValue: s, setInputValue: u, cursorPosition: d, searchPersons: f, textareaRef: p }) {
	let [m, h] = a(!1), [g, _] = a(""), [v, y] = a([]), [b, x] = a(!1), [S, C] = a(0), [w, T] = a([]), E = i(-1), D = i(null), O = i(0), k = i(-1);
	n(() => {
		if (!f) {
			h(!1);
			return;
		}
		let e = o(s, d, w);
		if (!e) {
			h(!1), _(""), y([]), C(0), E.current = -1, k.current = -1;
			return;
		}
		if (e.atIndex === k.current) return;
		E.current = e.atIndex, _(e.query), h(!0), C(0), x(!0), D.current && clearTimeout(D.current);
		let t = ++O.current;
		return D.current = setTimeout(() => {
			f(e.query).then((n) => {
				t === O.current && (y(n), C(0), n.length === 0 && e.query.length > 0 && (k.current = e.atIndex, h(!1)));
			}).catch(() => {
				t === O.current && y([]);
			}).finally(() => {
				t === O.current && x(!1);
			});
		}, l), () => {
			D.current && clearTimeout(D.current);
		};
	}, [
		s,
		d,
		f,
		w
	]);
	let A = t(() => {
		h(!1), _(""), y([]), C(0), E.current = -1;
	}, []), j = t((e) => {
		let t = E.current;
		if (t === -1) return;
		let n = `${e.firstName} ${e.lastName}`.trim(), r = String(e.id), i = s.slice(0, t), a = s.slice(d), o = `@${n} `, c = i + o + a, l = i.length + o.length;
		u(c), T((e) => [...e.filter((e) => e.id !== r || e.name !== n), {
			id: r,
			name: n
		}]), A(), requestAnimationFrame(() => {
			let e = p.current;
			e && (e.focus(), e.setSelectionRange(l, l));
		});
	}, [
		s,
		d,
		u,
		p,
		A
	]), M = t((e) => {
		if (!m) return !1;
		if (e.key === "Escape") return e.preventDefault(), A(), !0;
		if (v.length === 0) return !1;
		switch (e.key) {
			case "ArrowDown": return e.preventDefault(), C((e) => (e + 1) % v.length), !0;
			case "ArrowUp": return e.preventDefault(), C((e) => (e + v.length - 1) % v.length), !0;
			case "Tab": {
				let t = v[S];
				if (t) {
					let n = `${t.firstName} ${t.lastName}`.trim();
					if (g.length === 0 || n.toLowerCase().startsWith(g.toLowerCase())) return e.preventDefault(), j(t), !0;
				}
				return !1;
			}
			case "Enter": return e.preventDefault(), v[S] && j(v[S]), !0;
			default: return !1;
		}
	}, [
		m,
		v,
		S,
		g,
		j,
		A
	]), N = t((t) => {
		if (w.length === 0) return t;
		let n = t, r = [...w].sort((e, t) => t.name.length - e.name.length);
		for (let t of r) {
			let r = `@${t.name}`, i = `<entity-ref type="person" id="${e(t.id)}">${e(t.name)}</entity-ref>`;
			for (; n.includes(r);) n = n.replace(r, i);
		}
		return n;
	}, [w]);
	return n(() => {
		T((e) => e.filter((e) => {
			let t = `@${e.name}`, n = s.indexOf(t);
			if (n === -1) return !1;
			let r = s[n + t.length];
			return r === " " || r === "\n" || r === "	";
		}));
	}, [s]), {
		isOpen: m,
		query: g,
		results: v,
		isLoading: b,
		selectedIndex: S,
		mentions: w,
		popoverPosition: r(() => {
			if (!m || E.current === -1) return null;
			let e = p.current;
			if (!e) return null;
			let t = c(e, E.current);
			return {
				left: e.offsetLeft + t.left,
				bottom: (e.offsetParent ? e.offsetParent.offsetHeight : 0) - (e.offsetTop + t.top)
			};
		}, [
			m,
			s,
			d,
			p
		]),
		inlineCompletion: r(() => {
			if (!m || v.length === 0) return null;
			let e = v[S];
			if (!e) return null;
			let t = `${e.firstName} ${e.lastName}`.trim();
			return g.length === 0 ? t : t.toLowerCase().startsWith(g.toLowerCase()) ? t.slice(g.length) : null;
		}, [
			m,
			v,
			S,
			g
		]),
		handleKeyDown: M,
		selectPerson: j,
		transformMentions: N,
		close: A
	};
}
//#endregion
export { u as useMentions };
