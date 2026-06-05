import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { Metadata as c } from "../../../experimental/Information/Headers/Metadata/index.js";
import l from "../../../icons/app/Marker.js";
import { cn as d } from "../../../lib/utils.js";
import { F0AvatarIcon as f } from "../../../components/avatars/F0AvatarIcon/F0AvatarIcon.js";
import { F0Text as p } from "../../../components/F0Text/F0Text.js";
const w = ({ props: s }) => {
  const { status: a, icon: i = l, title: m, description: r, metadata: t } = s, n = t?.some(Boolean);
  return /* @__PURE__ */ o("div", { className: "flex justify-between gap-3 w-full flex-wrap", children: [
    /* @__PURE__ */ o("div", { className: "flex justify-start items-center gap-3 h-8", children: [
      /* @__PURE__ */ e(f, { icon: i, size: "sm" }),
      /* @__PURE__ */ e(
        "h4",
        {
          className: d(
            "text-base font-semibold text-f1-foreground",
            a === "completed" && "line-through"
          ),
          children: m
        }
      ),
      r && /* @__PURE__ */ e(p, { content: r, variant: "description" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-end items-center gap-3 pl-9", children: a === "completed" && t && n && /* @__PURE__ */ e(c, { items: t }) })
  ] });
};
export {
  w as TaskHeader
};
