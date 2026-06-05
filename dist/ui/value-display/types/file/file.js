import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { F0AvatarFile as i } from "../../../../components/avatars/F0AvatarFile/F0AvatarFile.js";
const f = (e) => /* @__PURE__ */ l(
  "div",
  {
    className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
    "data-cell-type": "file",
    children: [
      /* @__PURE__ */ t(i, { file: e }),
      " ",
      /* @__PURE__ */ t("span", { children: e.name })
    ]
  }
);
export {
  f as FileCell
};
