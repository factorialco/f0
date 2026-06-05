import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { F0AvatarModule as c } from "../../../../../components/avatars/F0AvatarModule/index.js";
import { cn as s } from "../../../../../lib/utils.js";
const f = ({ onClick: r, className: o, children: n }) => r ? /* @__PURE__ */ e("a", { className: o, onClick: r, tabIndex: 0, children: n }) : /* @__PURE__ */ e("div", { className: o, tabIndex: -1, children: n });
function x({
  id: r,
  title: o,
  subtitle: n,
  onClick: d,
  module: a
}) {
  const l = s(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    d ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ t(f, { onClick: (i) => {
    i.preventDefault(), d?.(r);
  }, className: l, children: [
    /* @__PURE__ */ e(c, { module: a ?? "inbox", size: "md" }),
    /* @__PURE__ */ t("div", { className: "flex-1", children: [
      /* @__PURE__ */ e("p", { className: "line-clamp-1 font-medium", children: o }),
      /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: n })
    ] })
  ] });
}
export {
  x as WidgetInboxListItem
};
