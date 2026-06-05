import { useCallback as R, useMemo as K } from "react";
import { useQuestionTypes as O } from "../../../constants.js";
import { useSurveyFormBuilderContext as b } from "../../../Context.js";
import { detectRatingOptionType as F, getRatingOptions as E, getDefaultParamsForQuestionType as M } from "../../../lib.js";
const V = [
  { label: "1 - 5", value: "1-5" },
  { label: "1 - 10", value: "1-10" },
  { label: "Emojis", value: "emojis" }
];
function P(t, n) {
  if (t !== "rating" || !n || n.type !== "rating")
    return null;
  const o = n.options;
  return !Array.isArray(o) || o.length === 0 || typeof o[0]?.value != "number" ? null : F(o);
}
function j(t, n, o) {
  return !(t === n || (t === "select" || t === "multi-select") && o && "options" in o && Array.isArray(o.options) && o.options.length > 0 || (t === "dropdown-single" || t === "dropdown-multi") && (n === "dropdown-single" || n === "dropdown-multi"));
}
function x() {
  const {
    onQuestionChange: t,
    getQuestionById: n,
    deleteElement: o,
    onDuplicateElement: s,
    disallowOptionalQuestions: u,
    datasets: g
  } = b(), d = O();
  return { getActionsForQuestion: R(
    (a, l, w) => {
      const r = n(a), i = r && "datasetKey" in r && typeof r.datasetKey == "string" ? r.datasetKey : void 0, f = P(l, r), h = (e) => {
        t?.({
          id: a,
          type: l,
          required: e
        });
      }, C = (e, p) => {
        const S = j(
          e,
          l,
          r
        ), c = e === "dropdown-single" || e === "dropdown-multi", m = l === "dropdown-single" || l === "dropdown-multi";
        t?.({
          id: a,
          type: e,
          // Set datasetKey for dropdown types, clear it for non-dropdown types
          ...c ? { datasetKey: p } : { datasetKey: void 0 },
          // Reset value when switching between single/multi or switching into
          // a dropdown type from a different type to avoid incompatible values
          ...c && m && e !== l || c && !m ? { value: e === "dropdown-multi" ? [] : null } : {},
          ...S && {
            ...M(e)
          }
        });
      }, y = (e) => {
        t?.({
          id: a,
          type: "rating",
          value: 0,
          options: E(e)
        });
      }, A = l === "dropdown-multi" && !!i, D = (e) => {
        if (!i) return;
        t?.({
          id: a,
          type: e ? "dropdown-multi" : "dropdown-single",
          datasetKey: i,
          value: e ? [] : null
        });
      }, Q = !!(i && g?.[i]?.onCreate), v = !!(r && "allowCreate" in r && r.allowCreate);
      return {
        question: r,
        questionTypes: d,
        currentRatingType: f,
        currentDatasetKey: i,
        isMultiSelectEnabled: A,
        isAllowCreateEnabled: v,
        datasetHasOnCreate: Q,
        disallowOptionalQuestions: u,
        canDelete: w,
        handleChangeRequired: h,
        handleSelectQuestionType: C,
        handleSelectRatingType: y,
        handleToggleMultiSelect: D,
        handleToggleAllowCreate: (e) => {
          i && t?.({
            id: a,
            type: l,
            allowCreate: e
          });
        },
        handleDuplicate: () => {
          s?.({ elementId: a, type: l });
        },
        handleDelete: () => {
          o(a);
        }
      };
    },
    [
      n,
      t,
      o,
      s,
      u,
      d,
      g
    ]
  ), questionTypes: d };
}
function W({
  questionId: t,
  questionType: n,
  canDelete: o = !0
}) {
  const { getActionsForQuestion: s } = x();
  return K(
    () => s(t, n, o),
    [s, t, n, o]
  );
}
export {
  V as RATING_OPTIONS,
  P as getCurrentRatingType,
  j as shouldResetParamsOnTypeChange,
  W as useQuestionActions,
  x as useQuestionActionsFactory
};
