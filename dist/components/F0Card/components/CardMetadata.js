import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { F0Icon as s } from "../../F0Icon/index.js";
import { Tooltip as c } from "../../../experimental/Overlays/Tooltip/index.js";
import { valueDisplayRenderers as e } from "../../../ui/value-display/renderers.js";
const p = {
  text: e.text,
  number: e.number,
  date: e.date,
  amount: e.amount,
  person: e.person,
  company: e.company,
  team: e.team,
  status: e.status,
  tag: e.tag,
  avatarList: e.avatarList,
  tagList: e.tagList,
  alertTag: e.alertTag,
  dotTag: e.dotTag,
  file: e.file,
  folder: e.folder,
  progressBar: e.progressBar
};
function g({ metadata: r }) {
  const { type: n, value: a } = r.property, i = p[n];
  if (!i)
    return /* @__PURE__ */ o("div", { className: "flex h-8 items-center gap-1.5", children: [
      "icon" in r && /* @__PURE__ */ t(s, { icon: r.icon, color: "default", size: "md" }),
      /* @__PURE__ */ o("span", { children: [
        "Unsupported property type: ",
        n
      ] })
    ] });
  const l = i;
  return /* @__PURE__ */ o("div", { className: "flex h-8 items-center gap-1.5", children: [
    "icon" in r && /* @__PURE__ */ t("div", { className: "pointer-events-auto flex items-center", children: /* @__PURE__ */ t(c, { label: r.property.label, children: /* @__PURE__ */ t(s, { icon: r.icon, color: "default", size: "md" }) }) }),
    l(a, { visualization: "card" })
  ] });
}
export {
  g as CardMetadata,
  p as cardPropertyRenderers
};
