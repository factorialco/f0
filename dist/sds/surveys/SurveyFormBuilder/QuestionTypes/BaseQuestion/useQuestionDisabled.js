import { useSurveyFormBuilderContext as c } from "../../Context.js";
function s(e) {
  const { answering: n, getSectionContainingQuestion: o } = c(), t = o(e.id), i = e.locked || t?.locked;
  return n ? !1 : i || !0;
}
export {
  s as useQuestionDisabled
};
