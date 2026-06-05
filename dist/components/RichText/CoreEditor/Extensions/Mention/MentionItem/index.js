import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { F0AvatarPerson as s } from "../../../../../avatars/F0AvatarPerson/index.js";
import { cn as d } from "../../../../../../lib/utils.js";
const i = ({ item: e, selected: o }) => /* @__PURE__ */ t(
  "div",
  {
    className: d(
      "flex items-center gap-2 rounded-md border border-solid p-1.5 hover:bg-f1-background-hover",
      o ? "border-f1-border-selected-bold" : "border-f1-border-inverse"
    ),
    children: [
      /* @__PURE__ */ r(
        s,
        {
          firstName: e.label,
          lastName: "",
          src: e.image_url ?? void 0,
          size: "sm"
        }
      ),
      /* @__PURE__ */ r("p", { className: "text-neutral-100 text-md truncate text-ellipsis font-medium", children: e.label })
    ]
  }
);
export {
  i as MentionItem
};
