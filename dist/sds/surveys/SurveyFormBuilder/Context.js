import { jsx as z } from "react/jsx-runtime";
import k from "../../../_virtual/flatten.js";
import { useRef as v, useMemo as M, useCallback as c, useEffect as G, createContext as H, useContext as J } from "react";
import { getDefaultQuestionTypeToAdd as X, getDefaultParamsForQuestionType as O, getNewElementId as a } from "./lib.js";
const T = H(void 0);
function K({
  elements: u,
  children: V,
  disabled: p,
  answering: g,
  disallowOptionalQuestions: w,
  onChange: l,
  allowedQuestionTypes: q,
  errors: C,
  onFieldBlur: S,
  useUpload: h,
  datasets: x
}) {
  const r = v(u);
  r.current = u;
  const d = v(l);
  d.current = l;
  const A = M(() => {
    const n = u[u.length - 1];
    if (n)
      return n.type === "section" ? n.section.id : n.question.id;
  }, [u]), F = c((n) => {
    const e = n.id, t = r.current.map((i) => {
      if (i.type === "question")
        return i.question.id === e ? {
          ...i,
          question: {
            ...i.question,
            ...n
          }
        } : i;
      if (i.type === "section") {
        const o = i.section.questions?.map(
          (s) => s.id === e ? {
            ...s,
            ...n
          } : s
        );
        return {
          ...i,
          section: {
            ...i.section,
            questions: o
          }
        };
      }
      return i;
    });
    d.current(t);
  }, []), Q = c((n) => {
    const e = n.id, t = r.current.map((i) => i.type === "section" && i.section.id === e ? {
      ...i,
      section: {
        ...i.section,
        ...n
      }
    } : i);
    d.current(t);
  }, []), y = c(
    ({
      element: n,
      afterId: e
    }) => {
      const t = [...r.current];
      if (!e) {
        t.push(n), d.current(t);
        return;
      }
      ((o) => {
        t.forEach((s, f) => {
          s.type === "section" && s.section.id === o && t.splice(f + 1, 0, n), s.type === "question" && s.question.id === o && t.splice(f + 1, 0, n);
        });
      })(e), n.type === "question" && t.length === r.current.length && t.forEach((o, s) => {
        if (o.type !== "section")
          return;
        const f = [...o.section.questions ?? []];
        f?.forEach(($, m) => {
          $.id === e && f.splice(m + 1, 0, n.question);
        }), t.splice(s, 1, {
          ...o,
          section: {
            ...o.section,
            questions: f
          }
        });
      }), d.current(t);
    },
    []
  ), E = c(
    ({ type: n, afterId: e, datasetKey: t }) => {
      if ((n === "dropdown-single" || n === "dropdown-multi") && !t)
        throw new Error(`${n} questions require a datasetKey`);
      const i = a(
        n === "section" ? "section" : "question"
      ), o = X(q), s = n === "section" ? {
        type: "section",
        section: {
          id: i,
          title: "",
          questions: [
            {
              id: a("question"),
              title: "",
              description: "",
              type: o,
              required: !0,
              ...O(
                o
              )
            }
          ]
        }
      } : {
        type: "question",
        question: {
          id: i,
          title: "",
          description: "",
          type: n,
          required: !0,
          ...O(n),
          ...t ? { datasetKey: t } : {}
        }
      };
      y({ element: s, afterId: e });
    },
    [y, q]
  ), N = c(
    ({ elementId: n }) => {
      const t = k(
        r.current.map(
          (o) => o.type === "section" ? [o, ...o.section.questions ?? []] : [o.question]
        )
      ).find(
        (o) => o.type === "section" ? o.section.id === n : o.id === n
      );
      let i;
      t && (i = t.type === "section" ? {
        ...t,
        section: {
          ...t.section,
          id: a("section")
        }
      } : {
        type: "question",
        question: { ...t, id: a("question") }
      }), i && y({ element: i, afterId: n });
    },
    [y]
  ), B = c((n) => k(
    r.current.map(
      (t) => t.type === "question" ? [t.question] : t.section.questions
    )
  ).find((t) => t?.id === n), []), D = c((n) => {
    let e = r.current.filter((t) => t.type === "section" ? t.section.id !== n : t.type === "question" ? t.question.id !== n : !0);
    e.length === r.current.length && (e = e.map((t) => t.type === "section" ? {
      ...t,
      section: {
        ...t.section,
        questions: t.section.questions?.filter(
          (i) => i.id !== n
        )
      }
    } : t)), d.current(e);
  }, []), I = c((n) => {
    const e = r.current.find((t) => t.type === "section" ? t.section.questions?.some(
      (i) => i.id === n
    ) : !1);
    return e?.type === "section" && e?.section.questions?.length === 1;
  }, []), P = c((n) => {
    const e = r.current.find((t) => t.type === "section" ? t.section.questions?.some(
      (i) => i.id === n
    ) : !1);
    return e?.type === "section" ? e.section : void 0;
  }, []), R = v(!0), L = !u.length;
  G(() => {
    if (R.current) {
      R.current = !1, L && !p && !g && E({
        type: "section"
      });
      return;
    }
  }, [L, E, p]);
  const j = c(
    (n) => n === "file" && !h ? !1 : !q || q.includes(n),
    [q, h]
  ), W = M(
    () => ({
      onQuestionChange: F,
      onSectionChange: Q,
      onAddNewElement: E,
      onDuplicateElement: N,
      getIsSingleQuestionInSection: I,
      getSectionContainingQuestion: P,
      disabled: p,
      answering: g,
      getQuestionById: B,
      deleteElement: D,
      lastElementId: A,
      disallowOptionalQuestions: w,
      isQuestionTypeAllowed: j,
      errors: C,
      onFieldBlur: S,
      useUpload: h,
      datasets: x
    }),
    [
      F,
      Q,
      E,
      N,
      I,
      P,
      p,
      g,
      B,
      D,
      A,
      w,
      j,
      C,
      S,
      h,
      x
    ]
  );
  return /* @__PURE__ */ z(T.Provider, { value: W, children: V });
}
function U() {
  const u = J(T);
  if (!u)
    throw new Error(
      "useSurveyFormBuilderContext must be used within a SurveyFormBuilderProvider"
    );
  return u;
}
export {
  K as SurveyFormBuilderProvider,
  U as useSurveyFormBuilderContext
};
