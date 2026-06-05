import s from "../../../icons/app/Calendar.js";
import n from "../../../icons/app/Check.js";
import l from "../../../icons/app/CheckCircle.js";
import u from "../../../icons/app/CheckDouble.js";
import r from "../../../icons/app/ChevronDown.js";
import p from "../../../icons/app/Link.js";
import m from "../../../icons/app/List.js";
import "../../../icons/app/Menu.js";
import y from "../../../icons/app/Numbers.js";
import c from "../../../icons/app/Star.js";
import d from "../../../icons/app/TextSize.js";
import a from "../../../icons/app/Upload.js";
import { useSurveyFormBuilderContext as F } from "./Context.js";
import { useI18n as w } from "../../../lib/providers/i18n/i18n-provider.js";
const O = () => {
  const { isQuestionTypeAllowed: i, datasets: T } = F(), { t: e } = w(), f = [
    {
      label: e("surveyFormBuilder.questionTypes.rating"),
      icon: c,
      questionType: "rating"
    },
    {
      label: e("surveyFormBuilder.questionTypes.multipleChoice"),
      icon: u,
      questionType: "multi-select"
    },
    {
      label: e("surveyFormBuilder.questionTypes.singleChoice"),
      icon: n,
      questionType: "select"
    },
    {
      label: e("surveyFormBuilder.questionTypes.text"),
      icon: d,
      questionType: "text"
    },
    {
      label: e("surveyFormBuilder.questionTypes.longText"),
      icon: m,
      questionType: "longText"
    },
    {
      label: e("surveyFormBuilder.questionTypes.numeric"),
      icon: y,
      questionType: "numeric"
    },
    {
      label: e("surveyFormBuilder.questionTypes.link"),
      icon: p,
      questionType: "link"
    },
    {
      label: e("surveyFormBuilder.questionTypes.date"),
      icon: s,
      questionType: "date"
    },
    {
      label: e("surveyFormBuilder.questionTypes.file"),
      icon: a,
      questionType: "file"
    },
    {
      label: e("surveyFormBuilder.questionTypes.checkbox"),
      icon: l,
      questionType: "checkbox"
    }
  ].filter(
    (o) => i(o.questionType)
  ), q = i("dropdown-single") ? Object.entries(T ?? {}).map(([o, t]) => ({
    label: t.title,
    icon: t.icon ?? r,
    questionType: "dropdown-single",
    datasetKey: o
  })) : [];
  return [...f, ...q];
}, S = {
  rating: c,
  "multi-select": u,
  select: n,
  text: d,
  longText: m,
  numeric: y,
  link: p,
  date: s,
  "dropdown-single": r,
  "dropdown-multi": r,
  file: a,
  checkbox: l
};
export {
  S as questionTypeIconMap,
  O as useQuestionTypes
};
