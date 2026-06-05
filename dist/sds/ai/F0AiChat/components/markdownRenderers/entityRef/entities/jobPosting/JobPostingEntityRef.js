import { jsx as i } from "react/jsx-runtime";
import { useMemo as f, forwardRef as u } from "react";
import { cn as d, focusRing as l } from "../../../../../../../../lib/utils.js";
import { useAiChat as p } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as b } from "../../components/EntityRefHoverCard.js";
import { useI18n as y } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
const a = u(
  ({ label: r, ...o }, e) => /* @__PURE__ */ i(
    "button",
    {
      ref: e,
      type: "button",
      className: d(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        l()
      ),
      ...o,
      children: r
    }
  )
);
a.displayName = "JobPostingTrigger";
function C({
  id: r,
  label: o
}) {
  const { entityRefs: e } = p(), c = e?.resolvers?.jobPosting, n = y(), t = e?.urls?.jobPosting?.(r), m = f(
    () => (s) => ({
      title: s.title,
      description: [s.status, s.location].filter(Boolean).join(" · "),
      ...t && {
        secondaryActions: {
          label: n.t("ai.view"),
          href: t
        }
      }
    }),
    [n, t]
  ), g = f(
    () => ({
      title: o,
      ...t && {
        secondaryActions: {
          label: n.t("ai.view"),
          href: t
        }
      }
    }),
    [o, n, t]
  );
  return c ? /* @__PURE__ */ i(
    b,
    {
      id: r,
      trigger: /* @__PURE__ */ i(a, { label: o }),
      resolver: c,
      mapToCard: m,
      fallbackCard: g
    }
  ) : /* @__PURE__ */ i("span", { children: o });
}
export {
  C as JobPostingEntityRef
};
