import { jsx as a } from "react/jsx-runtime";
import { cn as i } from "../../../../lib/utils.js";
const p = ({
  children: t,
  dropDownOpen: o,
  className: r
}) => /* @__PURE__ */ a(
  "aside",
  {
    className: i(
      "absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex",
      "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]",
      "via-[#F5F6F8] via-60% dark:via-[#192231]",
      "to-transparent to-100%",
      o ? "opacity-100" : "opacity-0",
      r
    ),
    children: t
  }
);
export {
  p as ItemActionsRowContainer
};
