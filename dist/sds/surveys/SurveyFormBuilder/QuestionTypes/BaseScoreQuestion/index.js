import { jsx as d } from "react/jsx-runtime";
import { useSurveyFormBuilderContext as p } from "../../Context.js";
import { detectRatingOptionType as h } from "../../lib.js";
import { BaseQuestion as f } from "../BaseQuestion/index.js";
import { ScoreEditOption as v } from "./ScoreEditOption.js";
const E = ({
  options: i,
  value: t,
  ...a
}) => {
  const { onQuestionChange: n, disabled: o, answering: l } = p(), s = h(i) === "emojis", c = (e) => {
    n?.({
      id: a.id,
      value: e,
      type: "rating"
    });
  }, m = (e, g) => {
    const u = i.map(
      (r) => r.value === e ? { ...r, label: g } : r
    );
    n?.({
      id: a.id,
      type: "rating",
      value: t ?? 0,
      options: u
    });
  };
  return /* @__PURE__ */ d(f, { ...a, children: /* @__PURE__ */ d("div", { className: "grid grid-cols-3 gap-3 @md:grid-cols-5", children: i.map((e) => /* @__PURE__ */ d(
    v,
    {
      option: e,
      selected: t === e.value,
      onClick: c,
      onChangeLabel: m,
      disabled: o && !l,
      isEmojiMode: l ? !1 : s
    },
    e.value
  )) }) });
};
export {
  E as BaseScoreQuestion
};
