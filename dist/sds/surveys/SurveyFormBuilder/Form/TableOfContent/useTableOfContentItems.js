import { useCallback as E, useMemo as H } from "react";
import J from "../../../../../icons/app/AcademicCap.js";
import U from "../../../../../icons/app/AlertCircleLine.js";
import W from "../../../../../icons/app/Check.js";
import X from "../../../../../icons/app/CheckDouble.js";
import x from "../../../../../icons/app/Delete.js";
import Y from "../../../../../icons/app/Hub.js";
import M from "../../../../../icons/app/LayersFront.js";
import "../../../../../icons/app/Menu.js";
import { questionTypeIconMap as Z } from "../../constants.js";
import { useSurveyFormBuilderContext as ee } from "../../Context.js";
import { useQuestionActionsFactory as te, RATING_OPTIONS as B } from "../../QuestionTypes/BaseQuestion/ActionsMenu/useQuestionActions.js";
const N = (a) => Z[a], oe = (a) => {
  document.getElementById(a)?.scrollIntoView({ behavior: "smooth", block: "start" });
}, fe = (a, z) => {
  const {
    untitledSectionLabel: R,
    untitledQuestionLabel: f,
    duplicateQuestionLabel: F,
    deleteQuestionLabel: I,
    duplicateSectionLabel: Q,
    deleteSectionLabel: S,
    questionOptionsLabel: $,
    requiredLabel: K,
    questionTypeLabel: v,
    singleSelectionLabel: y,
    multiSelectionLabel: h
  } = z, { deleteElement: A, onDuplicateElement: O, disabled: u, answering: p } = ee(), { getActionsForQuestion: q, questionTypes: k } = te(), b = E((i) => {
    oe(i);
  }, []), C = E(
    (i, t, o) => {
      const {
        question: g,
        currentRatingType: c,
        currentDatasetKey: l,
        disallowOptionalQuestions: n,
        handleChangeRequired: G,
        handleSelectQuestionType: w,
        handleSelectRatingType: P,
        handleDuplicate: V,
        handleDelete: _
      } = q(i, t, o), s = [
        { type: "label", text: $ }
      ];
      n || s.push({
        type: "toggle",
        label: K,
        icon: U,
        checked: !!g?.required,
        onCheckedChange: G
      });
      const D = k.filter((e) => !e.datasetKey), j = k.filter((e) => !!e.datasetKey), L = D.map((e) => {
        if (e.questionType === "rating") {
          const m = B.map((d) => ({
            label: d.label,
            onClick: () => P(d.value),
            selected: c === d.value
          }));
          return {
            type: "submenu",
            label: e.label,
            icon: e.icon,
            selectedLabel: c ? B.find((d) => d.value === c)?.label : void 0,
            children: m
          };
        }
        return {
          label: e.label,
          icon: e.icon,
          onClick: () => w(e.questionType),
          selected: t === e.questionType && !l
        };
      }), r = /* @__PURE__ */ new Map();
      for (const e of j)
        e.datasetKey && !r.has(e.datasetKey) && r.set(e.datasetKey, {
          label: e.label,
          icon: e.icon,
          datasetKey: e.datasetKey
        });
      if (r.size > 0) {
        L.push({ type: "separator" });
        for (const [e, m] of r)
          L.push({
            type: "submenu",
            label: m.label,
            icon: m.icon,
            selectedLabel: l === e ? t === "dropdown-multi" ? h : y : void 0,
            children: [
              {
                label: y,
                icon: W,
                onClick: () => w("dropdown-single", e),
                selected: l === e && t === "dropdown-single"
              },
              {
                label: h,
                icon: X,
                onClick: () => w("dropdown-multi", e),
                selected: l === e && t === "dropdown-multi"
              }
            ]
          });
      }
      let T;
      if (l) {
        const e = r.get(l);
        e && (T = e.label);
      } else
        T = D.find(
          (e) => e.questionType === t
        )?.label;
      return s.push({
        type: "submenu",
        label: v,
        icon: Y,
        selectedLabel: T,
        children: L
      }), s.push({ type: "separator" }), s.push({
        label: F,
        icon: M,
        onClick: V
      }), o && s.push({
        label: I,
        icon: x,
        onClick: _,
        critical: !0
      }), s;
    },
    [
      q,
      k,
      $,
      K,
      v,
      y,
      h,
      F,
      I
    ]
  );
  return H(
    () => a.map((i) => {
      if (i.type === "section") {
        const o = i.section, g = `co-creation-section-${o.id}`, c = o.questions ?? [], l = c.length === 1;
        return {
          id: g,
          label: o.title || R,
          icon: J,
          onClick: b,
          ...!u && !p && !o.locked && {
            otherActions: [
              {
                label: Q,
                icon: M,
                onClick: () => O?.({
                  elementId: o.id,
                  type: "section"
                })
              },
              { type: "separator" },
              {
                label: S,
                icon: x,
                onClick: () => A(o.id),
                critical: !0
              }
            ]
          },
          children: c.map((n) => ({
            id: `co-creation-question-${n.id}`,
            label: n.title || f,
            icon: N(n.type),
            onClick: b,
            ...!u && !p && !o.locked && {
              otherActions: C(
                n.id,
                n.type,
                !l
              )
            }
          }))
        };
      }
      const t = i.question;
      return {
        id: `co-creation-question-${t.id}`,
        label: t.title || f,
        icon: N(t.type),
        onClick: b,
        ...!u && !p && !t.locked && {
          otherActions: C(
            t.id,
            t.type,
            !0
          )
        }
      };
    }),
    [
      a,
      b,
      R,
      f,
      u,
      p,
      C,
      Q,
      S,
      O,
      A
    ]
  );
};
export {
  fe as useTableOfContentItems
};
