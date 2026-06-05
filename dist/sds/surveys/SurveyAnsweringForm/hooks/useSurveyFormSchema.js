import { jsx as t } from "react/jsx-runtime";
import { useMemo as D } from "react";
import { f0FormField as y } from "../../../../patterns/F0Form/f0Schema.js";
import { BaseQuestion as x } from "../../SurveyFormBuilder/QuestionTypes/BaseQuestion/index.js";
import { DEFAULT_FILE_ACCEPT as I } from "../../SurveyFormBuilder/QuestionTypes/FileQuestion/index.js";
import { RatingQuestionField as A } from "../components/RatingQuestionField.js";
import { SelectQuestionField as P } from "../components/SelectQuestionField.js";
import { F0FormField as b } from "../../../../patterns/F0FormField/F0FormField.js";
import { object as E, unknown as U, boolean as $, array as O, string as B, number as K, date as Q } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js";
const j = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i, z = () => ({
  upload: async (e) => ({
    type: "success",
    value: `local-${e.name}-${Date.now()}`
  }),
  cancelUpload: () => {
  },
  progress: 0,
  status: "idle"
});
function S(e, r) {
  return B().optional().superRefine((i, n) => {
    e && (!i || i.trim() === "") && n.addIssue({
      code: "custom",
      message: r("forms.validation.required")
    });
  });
}
function _(e, r) {
  return B().optional().superRefine((i, n) => {
    if (e && (!i || i.trim() === "")) {
      n.addIssue({
        code: "custom",
        message: r("forms.validation.required")
      });
      return;
    }
    i && !j.test(i) && n.addIssue({
      code: "custom",
      message: r("surveyFormBuilder.answer.invalidUrl")
    });
  });
}
function k(e, r) {
  return K().optional().superRefine((i, n) => {
    e && i == null && n.addIssue({
      code: "custom",
      message: r("forms.validation.required")
    });
  });
}
function C(e, r) {
  return O(B()).optional().superRefine((i, n) => {
    e && (!i || i.length === 0) && n.addIssue({
      code: "custom",
      message: r("forms.validation.required")
    });
  });
}
function V(e, r) {
  return Q().optional().superRefine((i, n) => {
    e && !i && n.addIssue({
      code: "custom",
      message: r("forms.validation.required")
    });
  });
}
function W(e, r) {
  return O(B()).optional().superRefine((i, n) => {
    e && (!i || i.length === 0) && n.addIssue({
      code: "custom",
      message: r("forms.validation.required")
    });
  });
}
function G(e, r) {
  return $().optional().superRefine((i, n) => {
    e && !i && n.addIssue({
      code: "custom",
      message: r("forms.validation.required")
    });
  });
}
function F(e, r) {
  const i = r?.[e.id];
  if (i) return i.value;
  if (e.type === "multi-select" || e.type === "dropdown-multi")
    return [];
  const n = e;
  return n.value !== void 0 && n.value !== null ? n.value : null;
}
function H(e) {
  const r = [];
  for (const i of e)
    if (i.type === "section")
      for (const n of i.section.questions ?? [])
        r.push({
          id: n.id,
          type: n.type,
          required: n.required,
          sectionTitle: i.section.title,
          sectionDescription: i.section.description
        });
    else
      r.push({
        id: i.question.id,
        type: i.question.type,
        required: i.question.required
      });
  return r;
}
function N(e, r, i, n = !1, a = n, T, w) {
  const h = e.title ?? "", u = {
    label: h,
    section: i
  }, m = {
    id: e.id,
    title: e.title,
    description: e.description,
    type: e.type,
    required: e.required,
    locked: e.locked
  };
  switch (e.type) {
    case "text": {
      const o = {
        id: e.id,
        type: "text",
        label: h,
        placeholder: r("surveyFormBuilder.answer.textPlaceholder"),
        disabled: a
      };
      return y(S(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: s, onChange: d, onBlur: c, error: l }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "px-0.5", children: /* @__PURE__ */ t(
          b,
          {
            field: o,
            value: s ?? "",
            onChange: d,
            onBlur: c,
            error: !!l,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "longText": {
      const o = {
        id: e.id,
        type: "textarea",
        label: h,
        placeholder: r("surveyFormBuilder.answer.textPlaceholder"),
        rows: 4,
        disabled: a
      };
      return y(S(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: s, onChange: d, onBlur: c, error: l }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "px-0.5", children: /* @__PURE__ */ t(
          b,
          {
            field: o,
            value: s ?? "",
            onChange: d,
            onBlur: c,
            error: !!l,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "numeric": {
      const o = {
        id: e.id,
        type: "number",
        label: h,
        placeholder: r("surveyFormBuilder.answer.numericPlaceholder"),
        disabled: a
      };
      return y(k(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: s, onChange: d, onBlur: c, error: l }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "px-0.5", children: /* @__PURE__ */ t(
          b,
          {
            field: o,
            value: s,
            onChange: d,
            onBlur: c,
            error: !!l,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "link": {
      const o = {
        id: e.id,
        type: "text",
        inputType: "url",
        label: h,
        placeholder: r("surveyFormBuilder.answer.linkPlaceholder"),
        disabled: a
      };
      return y(_(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: s, onChange: d, onBlur: c, error: l }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "px-0.5", children: /* @__PURE__ */ t(
          b,
          {
            field: o,
            value: s ?? "",
            onChange: d,
            onBlur: c,
            error: !!l,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "date": {
      const o = {
        id: e.id,
        type: "date",
        label: h,
        clearable: !e.required,
        disabled: a
      };
      return y(V(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: s, onChange: d, onBlur: c, error: l }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "px-0.5", children: /* @__PURE__ */ t(
          b,
          {
            field: o,
            value: s,
            onChange: d,
            onBlur: c,
            error: !!l,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "dropdown-single": {
      const o = w?.[e.datasetKey];
      if (!o)
        throw new Error(
          `Dataset "${e.datasetKey}" not found for dropdown-single`
        );
      const s = e.showSearchBox ?? !0, d = {
        id: e.id,
        type: "select",
        label: h,
        placeholder: o.placeholder ?? r("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: o.dataSource,
        mapOptions: o.mapOptions,
        icon: o.icon,
        clearable: !e.required,
        multiple: !1,
        disabled: a,
        showSearchBox: s,
        searchBoxPlaceholder: e.searchBoxPlaceholder
      };
      return y(S(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: c, onChange: l, onBlur: p, error: f }) => {
          const g = e.allowCreate && o.onCreate ? {
            ...d,
            onCreate: (v) => o.onCreate(v).then(
              (L) => {
                const R = o.mapOptions(L);
                l(R.value);
              },
              (L) => {
                console.warn(
                  "[SurveyAnsweringForm] onCreate failed:",
                  L
                );
              }
            )
          } : d;
          return /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ t(
            b,
            {
              field: g,
              value: c ?? "",
              onChange: l,
              onBlur: p,
              error: !!f,
              hideLabel: !0
            }
          ) }) });
        }
      });
    }
    case "dropdown-multi": {
      const o = w?.[e.datasetKey];
      if (!o)
        throw new Error(
          `Dataset "${e.datasetKey}" not found for dropdown-multi`
        );
      const s = e.showSearchBox ?? !0, d = {
        id: e.id,
        type: "select",
        label: h,
        placeholder: o.placeholder ?? r("surveyFormBuilder.answer.dropdownPlaceholder"),
        source: o.dataSource,
        mapOptions: o.mapOptions,
        icon: o.icon,
        clearable: !e.required,
        multiple: !0,
        disabled: a,
        showSearchBox: s,
        searchBoxPlaceholder: e.searchBoxPlaceholder
      };
      return y(C(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: c, onChange: l, onBlur: p, error: f }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "flex flex-col items-start px-0.5 [&>div]:w-full", children: /* @__PURE__ */ t(
          b,
          {
            field: d,
            value: c ?? [],
            onChange: l,
            onBlur: p,
            error: !!f,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "select": {
      const s = {
        options: e.options,
        type: "select",
        required: e.required,
        disabled: a,
        showAnswerValidation: n
      };
      return y(S(!!e.required, r), {
        ...u,
        fieldType: "custom",
        fieldConfig: s,
        render: ({ value: d, onChange: c, onBlur: l, config: p }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t(
          P,
          {
            value: d,
            onChange: c,
            onBlur: l,
            config: p
          }
        ) })
      });
    }
    case "multi-select": {
      const s = {
        options: e.options,
        type: "multi-select",
        required: e.required,
        disabled: a,
        showAnswerValidation: n
      };
      return y(C(!!e.required, r), {
        ...u,
        fieldType: "custom",
        fieldConfig: s,
        render: ({ value: d, onChange: c, onBlur: l, config: p }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t(
          P,
          {
            value: d,
            onChange: c,
            onBlur: l,
            config: p
          }
        ) })
      });
    }
    case "rating": {
      const s = {
        options: e.options,
        disabled: a
      };
      return y(k(!!e.required, r), {
        ...u,
        fieldType: "custom",
        fieldConfig: s,
        render: ({ value: d, onChange: c, onBlur: l, config: p }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t(
          A,
          {
            value: d,
            onChange: c,
            onBlur: l,
            config: p
          }
        ) })
      });
    }
    case "file": {
      const o = e, s = o.useUpload ?? T, d = {
        id: e.id,
        type: "file",
        label: h,
        multiple: !0,
        accept: o.accept ?? I,
        maxSizeMB: o.maxSizeMB,
        useUpload: s ?? z,
        disabled: a || !s
      };
      return y(W(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: c, onChange: l, onBlur: p, error: f }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "px-0.5", children: /* @__PURE__ */ t(
          b,
          {
            field: d,
            value: c ?? [],
            onChange: l,
            onBlur: p,
            error: !!f,
            hideLabel: !0
          }
        ) }) })
      });
    }
    case "checkbox": {
      const o = e, s = {
        id: e.id,
        type: "checkbox",
        label: o.label || h,
        disabled: a
      };
      return y(G(!!e.required, r), {
        ...u,
        fieldType: "custom",
        render: ({ value: d, onChange: c, onBlur: l, error: p }) => /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("div", { className: "px-0.5", children: /* @__PURE__ */ t(
          b,
          {
            field: s,
            value: d ?? !1,
            onChange: c,
            onBlur: l,
            error: !!p,
            hideLabel: !0
          }
        ) }) })
      });
    }
    default:
      return y(U(), {
        ...u,
        fieldType: "custom",
        render: () => null
      });
  }
}
function oe(e, r, i, n, a, T, w = !1, h = w, u, m) {
  return D(() => {
    const o = {}, s = {}, d = {}, c = H(e), l = r === "stepped";
    for (const p of e)
      if (p.type === "section") {
        const f = p.section, g = f.id;
        r === "all-questions" && (d[g] = {
          title: f.title,
          description: f.description,
          withInset: !0
        });
        for (const v of f.questions ?? [])
          l && a && v.id !== a || (o[v.id] = N(
            v,
            i,
            r === "all-questions" ? g : void 0,
            w,
            h,
            u,
            m
          ), s[v.id] = T?.[v.id] ?? F(v, n));
      } else {
        const f = p.question;
        if (l && a && f.id !== a)
          continue;
        o[f.id] = N(
          f,
          i,
          void 0,
          w,
          h,
          u,
          m
        ), s[f.id] = T?.[f.id] ?? F(f, n);
      }
    return {
      schema: E(o),
      defaultValues: s,
      flatQuestions: c,
      sections: d
    };
  }, [
    e,
    r,
    i,
    n,
    a,
    w,
    h,
    u,
    m
  ]);
}
export {
  H as extractFlatQuestions,
  oe as useSurveyFormSchema
};
