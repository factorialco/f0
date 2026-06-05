import { jsxs as t, jsx as r, Fragment as s } from "react/jsx-runtime";
import { withDataTestId as d } from "../../../lib/data-testid/index.js";
import { experimentalComponent as i } from "../../../lib/experimental.js";
import { cn as c } from "../../../lib/utils.js";
import f from "./ApprovalStep/index.js";
import { useI18n as m } from "../../../lib/providers/i18n/i18n-provider.js";
const p = ({ steps: o }) => {
  const n = m().approvals.history, a = o.findIndex((e) => e.status === "pending");
  return /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-4", children: [
    /* @__PURE__ */ r("h2", { className: "mb-2 text-lg font-semibold text-f1-foreground", children: n }),
    /* @__PURE__ */ t("div", { className: "flex flex-row gap-4", children: [
      /* @__PURE__ */ r("div", { className: "mt-3.5 flex flex-col items-center", children: o.map((e, l) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: c(
              "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
              l < a ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
            ),
            children: /* @__PURE__ */ r("span", { children: l + 1 })
          }
        ),
        l !== o.length - 1 && /* @__PURE__ */ r("div", { className: "h-[96px] w-px bg-f1-border-secondary" })
      ] }, e.title)) }),
      /* @__PURE__ */ r("div", { className: "flex w-full flex-col rounded-xl border border-solid border-f1-border", children: o.map((e, l) => /* @__PURE__ */ t(s, { children: [
        /* @__PURE__ */ r(
          f,
          {
            title: e.title,
            approvalsRequired: e.approvalsRequired,
            status: e.status,
            approvers: e.approvers
          },
          e.title
        ),
        l !== o.length - 1 && /* @__PURE__ */ r("div", { className: "h-px w-full bg-f1-border-secondary" })
      ] })) })
    ] })
  ] });
}, N = d(
  i("OneApprovalHistory", p)
);
export {
  N as OneApprovalHistory
};
