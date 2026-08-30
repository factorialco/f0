import { useF0AiFormRegistry as e } from "../../../../patterns/F0Form/F0AiFormRegistry.js";
import { FormCard as t } from "./FormCard.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/ActiveFormCard.tsx
function r() {
	let r = e(), i = r?.activeForm;
	if (!i) return null;
	let a = i.cardTitle, o = i.cardDescription, s = (r?.getFillVersion(i.formName) ?? 0) > 0;
	return !a || !o || !s ? null : /* @__PURE__ */ n("div", {
		className: "mt-2 w-full",
		children: /* @__PURE__ */ n(t, {
			formName: i.formName,
			formDescription: i.description,
			module: i.module,
			cardTitle: a,
			cardDescription: o,
			fieldDescriptions: i.fieldDescriptions,
			formValues: i.formValues
		})
	});
}
//#endregion
export { r as ActiveFormCard };
