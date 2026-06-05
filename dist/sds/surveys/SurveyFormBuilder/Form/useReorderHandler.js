import { useState as I, useCallback as w } from "react";
import { injectSectionEnds as L, reconstructElements as M } from "./utils.js";
function W({
  flatItems: u,
  onChange: h
}) {
  const [r, S] = I(
    null
  ), [Q, m] = I(!1), q = w(
    (s) => {
      const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
      let c = null;
      for (const e of u)
        e.type === "section-header" ? (c = e.id, i.set(e.id, /* @__PURE__ */ new Set()), e.section.locked && o.add(e.id)) : e.type === "section-end" ? c = null : c && i.get(c).add(e.id);
      const f = u.filter((e) => e.type === "section-header").map((e) => e.id), O = s.filter((e) => e.type === "section-header").map((e) => e.id), R = f.some(
        (e, n) => O[n] !== e
      ), k = new Map(
        u.filter((e) => e.type !== "section-end").map((e, n) => [e.id, n])
      ), l = new Set(o);
      if (R)
        for (const [e, n] of s.entries())
          n.type === "section-header" && k.get(n.id) !== e && l.add(n.id);
      let a;
      if (l.size > 0) {
        const e = /* @__PURE__ */ new Map();
        for (const t of l) {
          const d = i.get(t);
          if (d)
            for (const v of d)
              e.set(v, t);
        }
        const n = /* @__PURE__ */ new Map();
        for (const t of l)
          n.set(t, []);
        const p = [];
        for (const t of s) {
          const d = e.get(t.id);
          d ? n.get(d).push(t) : p.push(t);
        }
        a = [];
        for (const t of p)
          a.push(t), t.type === "section-header" && l.has(t.id) && a.push(...n.get(t.id));
      } else
        a = s;
      const g = /* @__PURE__ */ new Set();
      for (const e of i.values())
        for (const n of e)
          g.add(n);
      const y = L(
        a,
        g
      );
      if ([
        ...i.entries()
      ].some(([e, n]) => {
        if (n.size === 0) return !1;
        const p = y.findIndex((d) => d.id === e);
        if (p === -1) return !1;
        const t = y[p + 1];
        return !t || t.type !== "question";
      })) {
        S(y), m(!0);
        return;
      }
      h(M(y));
    },
    [h, u]
  ), x = w(() => {
    if (r) {
      const s = /* @__PURE__ */ new Set();
      for (let o = 0; o < r.length; o++) {
        const c = r[o];
        if (c.type === "section-header") {
          const f = r[o + 1];
          (!f || f.type === "section-end" || f.type === "section-header") && s.add(c.section.id);
        }
      }
      const i = r.filter((o) => !(o.type === "section-header" && s.has(o.section.id) || o.type === "section-end" && s.has(o.sectionId)));
      h(M(i));
    }
    m(!1), S(null);
  }, [r, h]), E = w(() => {
    m(!1), S(null);
  }, []);
  return {
    handleFlatReorder: q,
    handleConfirmLastQuestionMove: x,
    handleCancelLastQuestionMove: E,
    lastQuestionDialogOpen: Q
  };
}
export {
  W as useReorderHandler
};
