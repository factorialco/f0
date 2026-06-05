function r(u) {
  return u.flatMap((t) => t.type === "section" ? [
    {
      type: "section-header",
      id: `section-header-${t.section.id}`,
      section: t.section
    },
    ...(t.section.questions ?? []).map(
      (e) => ({
        type: "question",
        id: `question-${e.id}`,
        question: e
      })
    ),
    {
      type: "section-end",
      id: `section-end-${t.section.id}`,
      sectionId: t.section.id
    }
  ] : [
    {
      type: "question",
      id: `question-${t.question.id}`,
      question: t.question
    }
  ]);
}
function d(u) {
  const t = [];
  let e = null, n = [];
  for (const i of u)
    i.type === "section-header" ? (e && t.push({
      type: "section",
      section: { ...e, questions: n }
    }), e = i.section, n = []) : i.type === "section-end" ? e && (t.push({
      type: "section",
      section: { ...e, questions: n }
    }), e = null, n = []) : e ? n.push(i.question) : t.push({ type: "question", question: i.question });
  return e && t.push({
    type: "section",
    section: { ...e, questions: n }
  }), t;
}
function f(u, t) {
  const e = [];
  let n = null, i = [];
  function c() {
    if (!n) return;
    let o = -1;
    for (let s = i.length - 1; s >= 0; s--)
      if (i[s].type === "question" && t.has(i[s].id)) {
        o = s;
        break;
      }
    if (o === -1)
      e.push({
        type: "section-end",
        id: `section-end-${n}`,
        sectionId: n
      }), e.push(...i);
    else {
      for (let s = 0; s <= o; s++)
        e.push(i[s]);
      e.push({
        type: "section-end",
        id: `section-end-${n}`,
        sectionId: n
      });
      for (let s = o + 1; s < i.length; s++)
        e.push(i[s]);
    }
    i = [], n = null;
  }
  for (const o of u)
    o.type === "section-header" ? (c(), n = o.section.id, e.push(o)) : n ? i.push(o) : e.push(o);
  return c(), e;
}
function p(u) {
  const t = /* @__PURE__ */ new Set();
  for (const e of u)
    if (e.type === "section") {
      const n = e.section.questions;
      n?.length && t.add(`question-${n[n.length - 1].id}`);
    }
  return t;
}
export {
  p as computeSectionEndIds,
  r as flattenElements,
  f as injectSectionEnds,
  d as reconstructElements
};
