import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { F0AvatarList as g } from "../../../../components/avatars/F0AvatarList/index.js";
import { F0TagStatus as v } from "../../../../components/tags/F0TagStatus/index.js";
import y from "../../../../icons/app/Check.js";
import N from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import h from "../../../../icons/app/Question.js";
import { useI18n as x } from "../../../../lib/providers/i18n/i18n-provider.js";
const b = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, c = {
  approved: {
    icon: y,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: N,
    type: "critical",
    size: "sm"
  }
}, w = {
  icon: h,
  type: "neutral",
  size: "sm"
}, j = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, A = (t) => t in c ? c[t] : w;
function p(t) {
  return j[t ?? "neutral"] ?? 0;
}
const $ = ({
  title: t,
  approvalsRequired: o = 1,
  status: n,
  approvers: l
}) => {
  const a = x(), m = o === 1 ? a.approvals.requiredNumbers.one : a.approvals.requiredNumbers.other.replace(
    "{{count}}",
    o.toString()
  ), d = a.approvals.statuses[n], u = f(() => l.map((e) => {
    const i = A(e.status);
    return {
      firstName: e.firstName,
      lastName: e.lastName,
      src: e.avatar,
      badge: i
    };
  }).sort(
    (e, i) => p(i.badge?.type) - p(e.badge?.type)
  ), [l]);
  return /* @__PURE__ */ s("div", { className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3", children: [
    /* @__PURE__ */ s("div", { className: "flex flex-row items-start justify-between", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ r("p", { className: "font-medium text-f1-foreground", children: t }),
        /* @__PURE__ */ r("p", { className: "text-f1-foreground-secondary", children: m })
      ] }),
      /* @__PURE__ */ r(v, { text: d, variant: b[n] })
    ] }),
    /* @__PURE__ */ r("div", { className: "w-full", children: /* @__PURE__ */ r(g, { avatars: u, layout: "fill", type: "person", size: "md" }) })
  ] });
};
export {
  $ as default
};
