import { useF0ChatEmit as e } from "../providers/F0ChatProvider.js";
import { useCallback as t, useEffect as n, useMemo as r, useRef as i, useState as a } from "react";
//#region src/sds/chat/F0Chat/hooks/useMentions.ts
var o = "@everyone";
function s(e, t, n) {
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
var c = /* @__PURE__ */ "direction.boxSizing.width.height.overflowX.overflowY.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize.whiteSpace.wordWrap.wordBreak".split(".");
function l(e, t) {
	let n = document.createElement("div"), r = n.style, i = window.getComputedStyle(e);
	r.whiteSpace = "pre-wrap", r.wordWrap = "break-word", r.position = "absolute", r.visibility = "hidden", r.overflow = "hidden";
	for (let e of c) r.setProperty(e, i.getPropertyValue(e));
	n.textContent = e.value.substring(0, t);
	let a = document.createElement("span");
	a.textContent = e.value.substring(t) || "​", n.appendChild(a), document.body.appendChild(n);
	let o = a.offsetLeft, s = a.offsetTop - e.scrollTop;
	return document.body.removeChild(n), {
		left: o,
		top: s
	};
}
var u = 250, d = (e) => e.kind === "everyone" ? e.label : e.user.name;
function f({ inputValue: c, setInputValue: f, cursorPosition: p, textareaRef: m, enabled: h, searchMembers: g, everyoneLabel: _ }) {
	let v = e(), [y, b] = a(!1), [x, S] = a(""), [C, w] = a([]), [T, E] = a(!1), [D, O] = a(0), [k, A] = a([]), j = i(-1), M = i(null), N = i(0), P = i(-1), F = t((e) => !!_ && (e.length === 0 || _.toLowerCase().startsWith(e.toLowerCase())), [_]), I = r(() => {
		let e = [];
		_ && F(x) && e.push({
			kind: "everyone",
			label: _
		});
		for (let t of C) e.push({
			kind: "user",
			user: t
		});
		return e;
	}, [
		_,
		F,
		x,
		C
	]);
	n(() => {
		if (!h || !g) {
			b(!1);
			return;
		}
		let e = s(c, p, k);
		if (!e) {
			b(!1), S(""), w([]), O(0), j.current = -1, P.current = -1;
			return;
		}
		if (e.atIndex === P.current) return;
		j.current = e.atIndex, S(e.query), b(!0), O(0), E(!0), M.current && clearTimeout(M.current);
		let t = ++N.current;
		return M.current = setTimeout(() => {
			g(e.query).then((n) => {
				t === N.current && (w(n), O(0), n.length === 0 && !F(e.query) && e.query.length > 0 && (P.current = e.atIndex, b(!1)));
			}).catch(() => {
				t === N.current && (w([]), b(!1));
			}).finally(() => {
				t === N.current && E(!1);
			});
		}, u), () => {
			M.current && clearTimeout(M.current);
		};
	}, [
		c,
		p,
		h,
		g,
		k,
		F
	]);
	let L = t(() => {
		b(!1), S(""), w([]), O(0), j.current = -1;
	}, []), R = t(() => {
		P.current = j.current, L();
	}, [L]), z = t((e) => {
		let t = j.current;
		if (t === -1) return;
		let n = e.kind === "everyone" ? e.label : e.user.name, r = e.kind === "everyone" ? o : e.user.id, i = c.slice(0, t), a = c.slice(p), s = `@${n} `, l = i + s + a, u = i.length + s.length;
		f(l);
		let d = e.kind === "everyone" ? {
			id: r,
			name: n
		} : {
			id: r,
			name: n,
			avatar: e.user.avatar,
			subtitle: e.user.subtitle,
			profileHref: e.user.profileHref
		};
		A((e) => [...e.filter((e) => e.id !== r || e.name !== n), d]), v.onMentionInserted({ isEveryone: e.kind === "everyone" }), L(), requestAnimationFrame(() => {
			let e = m.current;
			e && (e.focus(), e.setSelectionRange(u, u));
		});
	}, [
		c,
		p,
		f,
		m,
		L,
		v
	]), B = t((e) => {
		if (!y) return !1;
		if (e.key === "Escape") return e.preventDefault(), L(), !0;
		if (I.length === 0) return !1;
		switch (e.key) {
			case "ArrowDown": return e.preventDefault(), O((e) => (e + 1) % I.length), !0;
			case "ArrowUp": return e.preventDefault(), O((e) => (e + I.length - 1) % I.length), !0;
			case "Tab": {
				let t = I[D];
				if (t) {
					let n = d(t);
					if (x.length === 0 || n.toLowerCase().startsWith(x.toLowerCase())) return e.preventDefault(), z(t), !0;
				}
				return !1;
			}
			case "Enter": return e.preventDefault(), I[D] && z(I[D]), !0;
			default: return !1;
		}
	}, [
		y,
		I,
		D,
		x,
		z,
		L
	]), V = t(() => {
		let e = k.some((e) => e.id === o);
		return {
			mentions: k.filter((e) => e.id !== o),
			mentionedEveryone: e
		};
	}, [k]), H = t((e) => {
		A(e);
	}, []);
	return n(() => {
		A((e) => e.filter((e) => {
			let t = `@${e.name}`, n = c.indexOf(t);
			if (n === -1) return !1;
			let r = c[n + t.length];
			return r === " " || r === "\n" || r === "	";
		}));
	}, [c]), {
		isOpen: y,
		query: x,
		results: I,
		isLoading: T,
		selectedIndex: D,
		mentions: k,
		popoverPosition: r(() => {
			if (!y || j.current === -1) return null;
			let e = m.current;
			if (!e) return null;
			let t = l(e, j.current);
			return {
				left: e.offsetLeft + t.left,
				bottom: (e.offsetParent ? e.offsetParent.offsetHeight : 0) - (e.offsetTop + t.top)
			};
		}, [
			y,
			c,
			p,
			m
		]),
		inlineCompletion: r(() => {
			if (!y || I.length === 0) return null;
			let e = I[D];
			if (!e) return null;
			let t = d(e);
			return x.length === 0 ? t : t.toLowerCase().startsWith(x.toLowerCase()) ? t.slice(x.length) : null;
		}, [
			y,
			I,
			D,
			x
		]),
		handleKeyDown: B,
		selectCandidate: z,
		getMentions: V,
		seedMentions: H,
		close: L,
		dismissCurrentTrigger: R
	};
}
//#endregion
export { o as MENTION_EVERYONE_ID, l as getTextareaCaretCoordinates, f as useMentions };
