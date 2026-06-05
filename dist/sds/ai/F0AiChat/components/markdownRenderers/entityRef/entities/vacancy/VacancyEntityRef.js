import { jsx as c } from "react/jsx-runtime";
import { useMemo as s, forwardRef as u } from "react";
import { cn as d, focusRing as p } from "../../../../../../../../lib/utils.js";
import { useAiChat as l } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as v } from "../../components/EntityRefHoverCard.js";
import { useI18n as g } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
const f = u(
  ({ label: o, ...r }, e) => /* @__PURE__ */ c(
    "button",
    {
      ref: e,
      type: "button",
      className: d(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        p()
      ),
      ...r,
      children: o
    }
  )
);
f.displayName = "VacancyTrigger";
function A({ id: o, label: r }) {
  const { entityRefs: e } = l(), i = e?.resolvers?.vacancy, n = g(), t = e?.urls?.vacancy?.(o), m = s(
    () => (a) => ({
      title: a.name,
      description: [a.status, a.vacancyType].filter(Boolean).join(" · "),
      ...t && {
        secondaryActions: {
          label: n.t("ai.view"),
          href: t
        }
      }
    }),
    [n, t]
  ), y = s(
    () => ({
      title: r,
      ...t && {
        secondaryActions: {
          label: n.t("ai.view"),
          href: t
        }
      }
    }),
    [r, n, t]
  );
  return i ? /* @__PURE__ */ c(
    v,
    {
      id: o,
      trigger: /* @__PURE__ */ c(f, { label: r }),
      resolver: i,
      mapToCard: m,
      fallbackCard: y
    }
  ) : /* @__PURE__ */ c("span", { children: r });
}
export {
  A as VacancyEntityRef
};
