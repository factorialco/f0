import { jsx as t } from "react/jsx-runtime";
import { useF0AiFormRegistry as s } from "../../../../patterns/F0Form/F0AiFormRegistry.js";
import { FormCard as n } from "./FormCard.js";
function a() {
  const e = s(), r = e?.activeForm;
  if (!r) return null;
  const o = r.cardTitle, i = r.cardDescription, m = (e?.getFillVersion(r.formName) ?? 0) > 0;
  return !o || !i || !m ? null : /* @__PURE__ */ t("div", { className: "mt-2 w-full", children: /* @__PURE__ */ t(
    n,
    {
      formName: r.formName,
      formDescription: r.description,
      module: r.module,
      cardTitle: o,
      cardDescription: i,
      fieldDescriptions: r.fieldDescriptions,
      formValues: r.formValues
    }
  ) });
}
export {
  a as ActiveFormCard
};
