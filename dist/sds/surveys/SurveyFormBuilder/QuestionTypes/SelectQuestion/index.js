import { jsx as r, jsxs as b } from "react/jsx-runtime";
import { nanoid as k } from "../../../../../node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/index.browser.js";
import { useMemo as S, useEffect as x } from "react";
import A from "../../../../../icons/app/Add.js";
import "../../../../../icons/app/Menu.js";
import { useSurveyFormBuilderContext as L } from "../../Context.js";
import { DragProvider as Q } from "../../DragContext.js";
import { BaseQuestion as B } from "../BaseQuestion/index.js";
import { SelectOption as F } from "./SelectOption/index.js";
import { useI18n as R } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { ReorderGroup as N } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/Reorder/Group.js";
import { F0Button as P } from "../../../../../components/F0Button/F0Button.js";
const J = ({ options: i, ...t }) => {
  const {
    onQuestionChange: a,
    disabled: d,
    answering: s,
    getSectionContainingQuestion: f
  } = L(), o = new Set(i.map((e) => e.value)).size !== i.length, y = f(t.id), m = t.locked || y?.locked, { t: v } = R(), u = S(
    () => ({
      id: t.id,
      type: t.type,
      options: i
    }),
    [t.id, t.type, i]
  );
  x(() => {
    if (!o) return;
    let e = i.map((c) => ({
      ...c,
      value: c.label.toLowerCase().replace(/\s+/g, "-")
    }));
    const n = {
      id: t.id,
      type: t.type
    }, l = new Set(e.map((c) => c.value)).size !== e.length;
    if (!l) {
      a?.({ ...n, options: e });
      return;
    }
    e = e.map((c) => ({
      ...c,
      value: k()
    })), l && a?.({ ...n, options: e }), a?.({ ...n, options: e });
  }, [
    o,
    a,
    i,
    t.id,
    t.type
  ]);
  const h = (e) => {
    let n = i;
    e.action === "remove" && (n = i.filter((l) => l.value !== e.value)), e.action === "mark-as-correct" && (n = i.map((l) => ({
      ...l,
      correct: l.value === e.value ? !l.correct : l.correct
    }))), a?.({
      ...u,
      options: n
    });
  }, w = (e) => {
    if (t.type === "select") {
      const n = !t.required && t.value === e ? null : e;
      a?.({
        ...u,
        type: t.type,
        value: n
      });
    } else if (t.type === "multi-select") {
      const n = Array.isArray(t.value) ? t.value : [], l = n.includes(e) ? n.filter((c) => c !== e) : [...n, e];
      a?.({
        ...u,
        type: t.type,
        value: l
      });
    }
  }, g = (e) => {
    const n = i.map((l, c) => ({
      ...l,
      ...c === e.index ? {
        value: e.value,
        label: e.newLabel
      } : {}
    }));
    a?.({
      ...u,
      options: n
    });
  }, O = () => {
    const e = i.length, n = {
      value: `new-option-${e + 1}`,
      label: v("surveyFormBuilder.selectQuestion.newOption", {
        number: e + 1
      })
    };
    a?.({
      ...u,
      options: [...i, n]
    });
  }, C = (e) => {
    a?.({
      ...u,
      options: e
    });
  };
  return o ? null : /* @__PURE__ */ r(B, { ...t, children: /* @__PURE__ */ b("div", { className: "-mx-0.5 flex flex-col items-start [&>div]:w-full", children: [
    /* @__PURE__ */ r(Q, { children: /* @__PURE__ */ r(
      N,
      {
        axis: "y",
        values: i,
        onReorder: C,
        as: "div",
        children: i.map((e, n) => {
          const l = t.type === "select" ? t.value === e.value : Array.isArray(t.value) && t.value.includes(e.value);
          return /* @__PURE__ */ r("div", { className: "w-full [&>div]:w-full", children: /* @__PURE__ */ r(
            F,
            {
              index: n,
              option: e,
              correct: e.correct,
              onClick: w,
              onClickAction: h,
              onChangeLabel: g,
              disabled: d,
              answering: s,
              selected: l,
              locked: m,
              type: t.type
            }
          ) }, e.value);
        })
      }
    ) }),
    !d && !s && !m && /* @__PURE__ */ r("div", { className: "opacity-50", children: /* @__PURE__ */ r(
      P,
      {
        label: v("surveyFormBuilder.selectQuestion.addOption"),
        variant: "ghost",
        icon: A,
        onClick: O
      }
    ) })
  ] }) });
};
export {
  J as SelectQuestion
};
