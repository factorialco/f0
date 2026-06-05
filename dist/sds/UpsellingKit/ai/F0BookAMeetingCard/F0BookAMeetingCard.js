import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { Card as d, CardContent as c, CardFooter as m } from "../../../../ui/Card/Card.js";
import { F0Icon as f } from "../../../../components/F0Icon/index.js";
import b from "../../../../icons/app/Calendar.js";
import "../../../../icons/app/Menu.js";
import { useI18n as x } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
const y = ({
  onAction: l,
  actionHref: r
}) => {
  const o = x()?.ai?.growth?.bookAMeetingCard, s = o?.title ?? "Talk with an expert", i = o?.schedule ?? "Mon-Fri · 09:00-21:00 (CEST)", a = o?.actionLabel ?? "Book a meeting";
  return /* @__PURE__ */ t(d, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ t(c, { className: "flex flex-col gap-3 p-0", children: [
      /* @__PURE__ */ e(f, { icon: b, size: "lg" }),
      /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: [
        /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-f1-foreground", children: s }),
        /* @__PURE__ */ e("p", { className: "text-sm text-f1-foreground-secondary", children: i })
      ] })
    ] }),
    /* @__PURE__ */ e(m, { className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3", children: r ? /* @__PURE__ */ e(
      n,
      {
        variant: "default",
        size: "md",
        label: a,
        href: r,
        target: "_blank"
      }
    ) : /* @__PURE__ */ e(
      n,
      {
        type: "button",
        variant: "default",
        size: "md",
        label: a,
        onClick: l
      }
    ) })
  ] });
};
export {
  y as F0BookAMeetingCard
};
