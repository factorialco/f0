import { jsx as t, jsxs as r } from "react/jsx-runtime";
import { F0Avatar as o } from "../../avatars/F0Avatar/index.js";
import { F0Icon as c } from "../../F0Icon/index.js";
import { F0TagDot as l } from "../../tags/F0TagDot/index.js";
import { F0TagPerson as i } from "../../tags/F0TagPerson/index.js";
import { F0TagRaw as s } from "../../tags/F0TagRaw/index.js";
import { F0TagStatus as g } from "../../tags/F0TagStatus/index.js";
import { SelectItem as d } from "../../../ui/Select/components/SelectItem.js";
import { OneEllipsis as e } from "../../../lib/OneEllipsis/OneEllipsis.js";
const F = ({
  item: a
}) => {
  const n = a.tag && typeof a.tag != "string" && a.tag.type === "status";
  return /* @__PURE__ */ t(d, { value: String(a.value), disabled: a.disabled, children: /* @__PURE__ */ r(
    "div",
    {
      className: `flex w-full gap-1.5 ${a.description ? "items-start" : "items-center"}`,
      children: [
        a.avatar && /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center", children: /* @__PURE__ */ t(o, { avatar: a.avatar, size: "xs" }) }),
        a.icon && /* @__PURE__ */ t("div", { className: "flex shrink-0 items-center text-f1-icon", children: /* @__PURE__ */ t(c, { icon: a.icon }) }),
        !n && /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 flex-col", children: [
          /* @__PURE__ */ t(e, { lines: 2, className: "font-medium", children: a.label }),
          a.description && /* @__PURE__ */ t(e, { lines: 2, className: "text-f1-foreground-secondary", children: a.description })
        ] }),
        a.tag && /* @__PURE__ */ t("div", { className: a.description ? "self-start" : "self-center", children: typeof a.tag == "string" ? /* @__PURE__ */ t(s, { text: a.tag }) : a.tag.type === "dot" ? /* @__PURE__ */ t(l, { ...a.tag }) : a.tag.type === "icon" ? /* @__PURE__ */ t(s, { text: a.tag.text, icon: a.tag.icon }) : a.tag.type === "status" ? /* @__PURE__ */ t(g, { text: a.tag.text, variant: a.tag.variant }) : /* @__PURE__ */ t(i, { name: a.tag.name, src: a.tag.src }) })
      ]
    }
  ) });
};
export {
  F as SelectItem
};
