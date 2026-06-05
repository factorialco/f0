import { jsx as y } from "react/jsx-runtime";
import { RowRenderer as q } from "./components/RowRenderer.js";
import { FieldRenderer as T } from "./fields/FieldRenderer.js";
function g(s, f) {
  const e = s.renderIf;
  return !e || typeof e == "function" ? null : "fieldId" in e && "equalsTo" in e && e.equalsTo === !0 && f.has(e.fieldId) ? e.fieldId : null;
}
function w(s, f) {
  const e = s.renderIf;
  return !e || typeof e == "function" ? null : "fieldId" in e && "equalsTo" in e && typeof e.equalsTo == "string" && f.has(e.fieldId) ? { fieldId: e.fieldId, equalsTo: e.equalsTo } : null;
}
function M(s, f) {
  const e = /* @__PURE__ */ new Map();
  for (const [l, a] of s)
    e.set(
      l,
      /* @__PURE__ */ y("div", { className: "flex flex-col gap-4", children: a.map(
        (r) => "type" in r && r.type === "row" ? /* @__PURE__ */ y(
          q,
          {
            row: r,
            sectionId: f
          },
          r.fields.map((i) => i.id).join("-")
        ) : /* @__PURE__ */ y(
          T,
          {
            field: r,
            sectionId: f
          },
          r.id
        )
      ) }, l)
    );
  return e;
}
function v(s) {
  const f = [];
  let e = 0;
  for (; e < s.length; ) {
    const l = s[e];
    if (l.type === "field" && l.field.type === "switch") {
      const a = [];
      if (l.field.grouped === !1)
        a.push(l.field), e++;
      else
        for (; e < s.length && s[e].type === "field" && s[e].field.type === "switch" && s[e].field.grouped !== !1; )
          a.push(s[e].field), e++;
      const r = new Set(a.map((t) => t.id)), i = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
      for (; e < s.length; ) {
        const t = s[e];
        if (t.type === "field" && t.field.type !== "switch") {
          const d = g(t.field, r);
          if (d) {
            t.field.type === "cardSelect" && u.add(t.field.id);
            const h = i.get(d) ?? [];
            h.push(t.field), i.set(d, h), e++;
            continue;
          }
          const c = w(
            t.field,
            u
          );
          if (c) {
            n.has(c.fieldId) || n.set(c.fieldId, /* @__PURE__ */ new Map());
            const h = n.get(
              c.fieldId
            ), p = h.get(c.equalsTo) ?? [];
            p.push(t.field), h.set(c.equalsTo, p), e++;
            continue;
          }
          break;
        } else if (t.type === "row") {
          const d = t.fields.map(
            (o) => g(o, r)
          ), c = d[0];
          if (c && d.every((o) => o === c)) {
            const o = i.get(c) ?? [];
            o.push(t), i.set(c, o), e++;
            continue;
          }
          const h = t.fields.map(
            (o) => w(o, u)
          ), p = h[0];
          if (p && h.every(
            (o) => o && o.fieldId === p.fieldId && o.equalsTo === p.equalsTo
          )) {
            n.has(p.fieldId) || n.set(p.fieldId, /* @__PURE__ */ new Map());
            const o = n.get(
              p.fieldId
            ), I = o.get(p.equalsTo) ?? [];
            I.push(t), o.set(p.equalsTo, I), e++;
            continue;
          }
          break;
        } else
          break;
      }
      f.push({
        type: "switchGroup",
        fields: a,
        dependentFields: i.size > 0 ? i : void 0,
        cardSelectDependentFields: n.size > 0 ? n : void 0
      });
    } else if (l.type === "field")
      if (l.field.type === "cardSelect") {
        const a = l.field.id, r = /* @__PURE__ */ new Set([a]), i = /* @__PURE__ */ new Map();
        for (e++; e < s.length; ) {
          const u = s[e];
          if (u.type === "field") {
            const n = w(u.field, r);
            if (n) {
              const t = i.get(n.equalsTo) ?? [];
              t.push(u.field), i.set(n.equalsTo, t), e++;
              continue;
            }
          } else if (u.type === "row") {
            const n = u.fields.map(
              (d) => w(d, r)
            ), t = n[0];
            if (t && n.every(
              (d) => d && d.fieldId === t.fieldId && d.equalsTo === t.equalsTo
            )) {
              const d = i.get(t.equalsTo) ?? [];
              d.push(u), i.set(t.equalsTo, d), e++;
              continue;
            }
          }
          break;
        }
        f.push({
          type: "field",
          item: l,
          cardSelectDependentFields: i.size > 0 ? i : void 0
        });
      } else
        f.push({ type: "field", item: l }), e++;
    else l.type === "row" ? (f.push({ type: "row", item: l, index: e }), e++) : (l.type === "section" && f.push({ type: "section", item: l }), e++);
  }
  return f;
}
export {
  M as buildCardSelectContentMap,
  v as groupContiguousSwitches,
  w as isDependentOnCardSelect,
  g as isDependentOnSwitch
};
