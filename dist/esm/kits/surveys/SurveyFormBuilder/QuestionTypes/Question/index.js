import { CheckboxQuestion as e } from "../CheckboxQuestion/index.js";
import { DateQuestion as t } from "../DateQuestion/index.js";
import { DropdownSingleQuestion as n } from "../DropdownSingleQuestion/index.js";
import { FileQuestion as r } from "../FileQuestion/index.js";
import { LinkQuestion as i } from "../LinkQuestion/index.js";
import { NumericQuestion as a } from "../NumericQuestion/index.js";
import { RatingQuestion as o } from "../RatingQuestion/index.js";
import { SelectQuestion as s } from "../SelectQuestion/index.js";
import { TextQuestion as c } from "../TextQuestion/index.js";
import { jsx as l } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/Question/index.tsx
var u = ({ ...u }) => {
	switch (u.type) {
		case "text":
		case "longText": return /* @__PURE__ */ l(c, { ...u });
		case "rating": return /* @__PURE__ */ l(o, { ...u });
		case "select":
		case "multi-select": return /* @__PURE__ */ l(s, { ...u });
		case "dropdown-single":
		case "dropdown-multi": return /* @__PURE__ */ l(n, { ...u });
		case "numeric": return /* @__PURE__ */ l(a, { ...u });
		case "link": return /* @__PURE__ */ l(i, { ...u });
		case "date": return /* @__PURE__ */ l(t, { ...u });
		case "file": return /* @__PURE__ */ l(r, { ...u });
		case "checkbox": return /* @__PURE__ */ l(e, { ...u });
		default: throw Error("Invalid question type provided");
	}
};
//#endregion
export { u as Question };
