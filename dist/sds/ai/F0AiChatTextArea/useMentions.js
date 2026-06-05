import { useState as b, useRef as R, useEffect as B, useCallback as $, useMemo as O } from "react";
import { escapeXml as q } from "./highlight-utils.js";
function _(n, m, f) {
  const i = n.slice(0, m).lastIndexOf("@");
  if (i === -1) return null;
  if (i > 0) {
    const c = n[i - 1];
    if (c !== " " && c !== `
` && c !== "	")
      return null;
  }
  const o = n.slice(i + 1, m);
  if (o.includes(`
`)) return null;
  for (const c of f) {
    const u = n.slice(i + 1), h = i + 1 + c.name.length;
    if (u.startsWith(c.name) && m >= h) {
      const r = n[h];
      if (r === " " || r === `
` || r === "	")
        return null;
    }
  }
  return { atIndex: i, query: o };
}
const j = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize",
  "whiteSpace",
  "wordWrap",
  "wordBreak"
];
function K(n, m) {
  const f = document.createElement("div"), d = f.style, i = window.getComputedStyle(n);
  d.whiteSpace = "pre-wrap", d.wordWrap = "break-word", d.position = "absolute", d.visibility = "hidden", d.overflow = "hidden";
  for (const h of j)
    d.setProperty(h, i.getPropertyValue(h));
  f.textContent = n.value.substring(0, m);
  const o = document.createElement("span");
  o.textContent = n.value.substring(m) || "​", f.appendChild(o), document.body.appendChild(f);
  const c = o.offsetLeft, u = o.offsetTop - n.scrollTop;
  return document.body.removeChild(f), { left: c, top: u };
}
const P = 250;
function J({
  inputValue: n,
  setInputValue: m,
  cursorPosition: f,
  searchPersons: d,
  textareaRef: i
}) {
  const [o, c] = b(!1), [u, h] = b(""), [r, v] = b([]), [z, L] = b(!1), [g, p] = b(0), [w, W] = b([]), y = R(-1), S = R(null), T = R(0), A = R(-1);
  B(() => {
    if (!d) {
      c(!1);
      return;
    }
    const e = _(n, f, w);
    if (!e) {
      c(!1), h(""), v([]), p(0), y.current = -1, A.current = -1;
      return;
    }
    if (e.atIndex === A.current)
      return;
    y.current = e.atIndex, h(e.query), c(!0), p(0), L(!0), S.current && clearTimeout(S.current);
    const t = ++T.current;
    return S.current = setTimeout(() => {
      d(e.query).then((s) => {
        t === T.current && (v(s), p(0), s.length === 0 && e.query.length > 0 && (A.current = e.atIndex, c(!1)));
      }).catch(() => {
        t === T.current && v([]);
      }).finally(() => {
        t === T.current && L(!1);
      });
    }, P), () => {
      S.current && clearTimeout(S.current);
    };
  }, [n, f, d, w]);
  const C = $(() => {
    c(!1), h(""), v([]), p(0), y.current = -1;
  }, []), x = $(
    (e) => {
      const t = y.current;
      if (t === -1) return;
      const s = `${e.firstName} ${e.lastName}`.trim(), a = String(e.id), l = n.slice(0, t), E = n.slice(f), D = `@${s} `, X = l + D + E, N = l.length + D.length;
      m(X), W((I) => [...I.filter((M) => !(M.id === a && M.name === s)), { id: a, name: s }]), C(), requestAnimationFrame(() => {
        const I = i.current;
        I && (I.focus(), I.setSelectionRange(N, N));
      });
    },
    [n, f, m, i, C]
  ), k = $(
    (e) => {
      if (!o) return !1;
      if (e.key === "Escape")
        return e.preventDefault(), C(), !0;
      if (r.length === 0) return !1;
      switch (e.key) {
        case "ArrowDown":
          return e.preventDefault(), p((t) => (t + 1) % r.length), !0;
        case "ArrowUp":
          return e.preventDefault(), p(
            (t) => (t + r.length - 1) % r.length
          ), !0;
        case "Tab": {
          const t = r[g];
          if (t) {
            const s = `${t.firstName} ${t.lastName}`.trim();
            if (u.length === 0 || s.toLowerCase().startsWith(u.toLowerCase()))
              return e.preventDefault(), x(t), !0;
          }
          return !1;
        }
        case "Enter":
          return e.preventDefault(), r[g] && x(r[g]), !0;
        default:
          return !1;
      }
    },
    [o, r, g, u, x, C]
  ), H = $(
    (e) => {
      if (w.length === 0) return e;
      let t = e;
      const s = [...w].sort((a, l) => l.name.length - a.name.length);
      for (const a of s) {
        const l = `@${a.name}`, E = `<entity-ref type="person" id="${q(a.id)}">${q(a.name)}</entity-ref>`;
        for (; t.includes(l); )
          t = t.replace(l, E);
      }
      return t;
    },
    [w]
  );
  B(() => {
    W(
      (e) => e.filter((t) => {
        const s = `@${t.name}`, a = n.indexOf(s);
        if (a === -1) return !1;
        const l = n[a + s.length];
        return l === " " || l === `
` || l === "	";
      })
    );
  }, [n]);
  const F = O(() => {
    if (!o || y.current === -1) return null;
    const e = i.current;
    if (!e) return null;
    const t = K(e, y.current), s = e.offsetLeft + t.left, l = (e.offsetParent ? e.offsetParent.offsetHeight : 0) - (e.offsetTop + t.top);
    return { left: s, bottom: l };
  }, [o, n, f, i]), U = O(() => {
    if (!o || r.length === 0) return null;
    const e = r[g];
    if (!e) return null;
    const t = `${e.firstName} ${e.lastName}`.trim();
    return u.length === 0 ? t : t.toLowerCase().startsWith(u.toLowerCase()) ? t.slice(u.length) : null;
  }, [o, r, g, u]);
  return {
    isOpen: o,
    query: u,
    results: r,
    isLoading: z,
    selectedIndex: g,
    mentions: w,
    popoverPosition: F,
    inlineCompletion: U,
    handleKeyDown: k,
    selectPerson: x,
    transformMentions: H,
    close: C
  };
}
export {
  J as useMentions
};
