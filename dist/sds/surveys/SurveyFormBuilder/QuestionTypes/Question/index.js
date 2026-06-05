import { jsx as t } from "react/jsx-runtime";
import { CheckboxQuestion as r } from "../CheckboxQuestion/index.js";
import { DateQuestion as i } from "../DateQuestion/index.js";
import { DropdownSingleQuestion as o } from "../DropdownSingleQuestion/index.js";
import { FileQuestion as n } from "../FileQuestion/index.js";
import { LinkQuestion as u } from "../LinkQuestion/index.js";
import { NumericQuestion as m } from "../NumericQuestion/index.js";
import { RatingQuestion as c } from "../RatingQuestion/index.js";
import { SelectQuestion as s } from "../SelectQuestion/index.js";
import { TextQuestion as a } from "../TextQuestion/index.js";
const v = ({ ...e }) => {
  switch (e.type) {
    case "text":
    case "longText":
      return /* @__PURE__ */ t(a, { ...e });
    case "rating":
      return /* @__PURE__ */ t(c, { ...e });
    case "select":
    case "multi-select":
      return /* @__PURE__ */ t(s, { ...e });
    case "dropdown-single":
    case "dropdown-multi":
      return /* @__PURE__ */ t(o, { ...e });
    case "numeric":
      return /* @__PURE__ */ t(m, { ...e });
    case "link":
      return /* @__PURE__ */ t(u, { ...e });
    case "date":
      return /* @__PURE__ */ t(i, { ...e });
    case "file":
      return /* @__PURE__ */ t(n, { ...e });
    case "checkbox":
      return /* @__PURE__ */ t(r, { ...e });
    default:
      throw new Error("Invalid question type provided");
  }
};
export {
  v as Question
};
