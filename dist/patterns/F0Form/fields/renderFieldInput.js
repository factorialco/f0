import { jsx as a } from "react/jsx-runtime";
import { CardSelectFieldRenderer as R } from "./cardSelect/CardSelectFieldRenderer.js";
import { CheckboxFieldRenderer as x } from "./checkbox/CheckboxFieldRenderer.js";
import { CustomFieldRenderer as h } from "./custom/CustomFieldRenderer.js";
import { DateFieldRenderer as y } from "./date/DateFieldRenderer.js";
import { DateTimeFieldRenderer as T } from "./date/DateTimeFieldRenderer.js";
import { TimeFieldRenderer as g } from "./date/TimeFieldRenderer.js";
import { DateRangeFieldRenderer as C } from "./daterange/DateRangeFieldRenderer.js";
import { DurationFieldRenderer as w } from "./duration/DurationFieldRenderer.js";
import { FileFieldRenderer as k } from "./file/FileFieldRenderer.js";
import { NumberFieldRenderer as F } from "./number/NumberFieldRenderer.js";
import { RichTextFieldRenderer as S } from "./richtext/RichTextFieldRenderer.js";
import { SelectFieldRenderer as j } from "./select/SelectFieldRenderer.js";
import { SwitchFieldRenderer as q } from "./switch/SwitchFieldRenderer.js";
import { TextFieldRenderer as A } from "./text/TextFieldRenderer.js";
import { TextareaFieldRenderer as E } from "./textarea/TextareaFieldRenderer.js";
import { evaluateDisabled as I, evaluateDateConstraint as d } from "./utils.js";
function Z({
  field: e,
  formField: r,
  fieldState: m,
  fieldStatus: c,
  isSubmitting: p,
  isRequired: b,
  values: i,
  initialFiles: D,
  isFormLoading: u
}) {
  const o = !!m.error, { isValidating: l } = m, t = I(e.disabled, i) || p || !!u, n = {
    error: o,
    loading: !!u
  }, s = o ? { type: "error" } : c ? { type: c.type } : void 0;
  switch (e.type) {
    case "text":
      return /* @__PURE__ */ a(
        A,
        {
          field: { ...e, disabled: t },
          formField: r,
          ...n,
          status: s
        }
      );
    case "number":
      return /* @__PURE__ */ a(
        F,
        {
          field: { ...e, disabled: t },
          formField: r,
          ...n,
          status: s
        }
      );
    case "duration":
      return /* @__PURE__ */ a(
        w,
        {
          field: { ...e, disabled: t },
          formField: r,
          error: o,
          status: s
        }
      );
    case "textarea":
      return /* @__PURE__ */ a(
        E,
        {
          field: { ...e, disabled: t },
          formField: r,
          ...n,
          status: s
        }
      );
    case "select":
      return /* @__PURE__ */ a(
        j,
        {
          field: { ...e, disabled: t },
          formField: r,
          ...n,
          status: s
        }
      );
    case "checkbox":
      return /* @__PURE__ */ a(
        x,
        {
          field: { ...e, disabled: t },
          formField: r
        }
      );
    case "switch":
      return /* @__PURE__ */ a(
        q,
        {
          field: { ...e, disabled: t },
          formField: r
        }
      );
    case "date":
      return /* @__PURE__ */ a(
        y,
        {
          field: {
            ...e,
            disabled: t,
            // Evaluate dynamic date constraints
            minDate: d(e.minDate, i),
            maxDate: d(e.maxDate, i)
          },
          formField: r,
          ...n,
          status: s
        }
      );
    case "time":
      return /* @__PURE__ */ a(
        g,
        {
          field: {
            ...e,
            disabled: t,
            // Evaluate dynamic date constraints
            minDate: d(e.minDate, i),
            maxDate: d(e.maxDate, i)
          },
          formField: r,
          ...n,
          status: s
        }
      );
    case "datetime":
      return /* @__PURE__ */ a(
        T,
        {
          field: {
            ...e,
            disabled: t,
            // Evaluate dynamic date constraints
            minDate: d(e.minDate, i),
            maxDate: d(e.maxDate, i)
          },
          formField: r,
          ...n,
          status: s
        }
      );
    case "daterange":
      return /* @__PURE__ */ a(
        C,
        {
          field: { ...e, disabled: t },
          formField: r,
          ...n,
          status: s
        }
      );
    case "richtext":
      return /* @__PURE__ */ a(
        S,
        {
          field: { ...e, disabled: t },
          formField: r,
          ...n
        }
      );
    case "file":
      return /* @__PURE__ */ a(
        k,
        {
          field: { ...e, disabled: t },
          formField: r,
          error: o,
          statusType: s?.type,
          initialFiles: D
        }
      );
    case "cardSelect":
      return /* @__PURE__ */ a(
        R,
        {
          field: { ...e, disabled: t },
          formField: r
        }
      );
    case "custom":
      return /* @__PURE__ */ a(
        h,
        {
          field: { ...e, disabled: t },
          formField: r,
          error: m.error?.message,
          isValidating: l,
          required: b
        }
      );
    default:
      return null;
  }
}
export {
  Z as renderFieldInput
};
