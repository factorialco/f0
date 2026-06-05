import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { RichTextDisplay as l } from "../../../../../components/RichText/RichTextDisplay/index.js";
import { Skeleton as s } from "../../../../../ui/skeleton.js";
import { withSkeleton as f } from "../../../../../lib/skeleton.js";
import { cn as d } from "../../../../../lib/utils.js";
const e = p(function({ content: t, collapsed: r, id: i, className: a, tabIndex: n }, c) {
  return /* @__PURE__ */ o(
    l,
    {
      ref: c,
      id: i,
      content: t,
      tabIndex: n,
      className: d(
        "FactorialOneTextEditor",
        r && "line-clamp-5 break-words",
        a
      )
    }
  );
});
e.displayName = "BasePostDescription";
const x = () => /* @__PURE__ */ m("div", { className: "flex flex-col justify-around gap-3 py-2", children: [
  /* @__PURE__ */ o(s, { className: "h-2.5 w-1/2 rounded-2xs" }),
  /* @__PURE__ */ o(s, { className: "h-2.5 w-2/3 rounded-2xs" })
] }), y = f(
  e,
  x
);
export {
  e as BasePostDescription,
  y as PostDescription,
  x as PostDescriptionSkeleton
};
