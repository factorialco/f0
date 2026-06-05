import { jsxs as f, jsx as t } from "react/jsx-runtime";
import { useId as A } from "react";
import { F0AvatarIcon as I } from "../../../components/avatars/F0AvatarIcon/F0AvatarIcon.js";
import { Metadata as b } from "../../../experimental/Information/Headers/Metadata/index.js";
import w from "../../../icons/app/Marker.js";
import { cn as y } from "../../../lib/utils.js";
import { Actions as F } from "./Actions.js";
import { NestedtaskHeader as R } from "./NestedtaskHeader.js";
import { TimelineRowLayout as j } from "./TimelineRowLayout.js";
import { F0Text as k } from "../../../components/F0Text/F0Text.js";
const L = ({ props: e }) => {
  const { status: s, icon: i = w, title: r, description: o } = e;
  return /* @__PURE__ */ f("div", { className: "flex min-h-8 items-center gap-3", children: [
    /* @__PURE__ */ t(I, { icon: i, size: "sm" }),
    /* @__PURE__ */ t(
      "h4",
      {
        className: y(
          "text-base font-semibold text-f1-foreground",
          s === "completed" && "line-through"
        ),
        children: r
      }
    ),
    o && /* @__PURE__ */ t(k, { content: o, variant: "description" })
  ] });
}, D = ({
  props: e
}) => {
  const {
    status: s,
    isLast: i = !1,
    hideStatus: r = !1,
    expanded: o,
    collapsible: h = !0,
    items: x,
    content: m,
    metadata: a,
    primaryAction: l,
    secondaryActions: n,
    otherActions: c
  } = e, d = A(), u = h ? o : !0, N = a?.some(Boolean), g = l || n && n.length > 0 || c && c.length > 0;
  return /* @__PURE__ */ f(j, { status: s, isLast: i, hideStatus: r, children: [
    /* @__PURE__ */ t("div", { className: "flex min-h-8 items-center gap-3", children: /* @__PURE__ */ t(R, { props: e, contentId: d }) }),
    a && N && /* @__PURE__ */ t("div", { className: "pl-9", children: /* @__PURE__ */ t(b, { items: a }) }),
    u && /* @__PURE__ */ t("div", { id: d, role: "region", className: "flex flex-col gap-0 pl-4", children: m !== void 0 ? m : x?.map((p, v) => /* @__PURE__ */ t(L, { props: p }, `${p.title}-${v}`)) }),
    g && /* @__PURE__ */ t("div", { className: "pl-9", children: /* @__PURE__ */ t(
      F,
      {
        primaryAction: l,
        secondaryActions: n,
        otherActions: c
      }
    ) })
  ] });
};
export {
  D as NestedtaskRow
};
