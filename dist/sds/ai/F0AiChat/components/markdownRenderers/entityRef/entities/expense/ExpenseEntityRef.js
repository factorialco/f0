import { jsx as i } from "react/jsx-runtime";
import { useMemo as c, forwardRef as d } from "react";
import "../../../../../../../../icons/app/Menu.js";
import u from "../../../../../../../../icons/app/Money.js";
import { cn as x, focusRing as g } from "../../../../../../../../lib/utils.js";
import { useAiChat as l } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as y } from "../../components/EntityRefHoverCard.js";
import { useI18n as v } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
const f = d(
  ({ label: t, ...e }, o) => /* @__PURE__ */ i(
    "button",
    {
      ref: o,
      type: "button",
      className: x(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        g()
      ),
      ...e,
      children: t
    }
  )
);
f.displayName = "ExpenseTrigger";
function j({ id: t, label: e }) {
  const { entityRefs: o } = l(), a = o?.resolvers?.expense, n = v(), r = o?.urls?.expense?.(t), m = c(
    () => (s) => ({
      avatar: {
        type: "icon",
        icon: u
      },
      title: s.description || `Expense #${s.id}`,
      description: [s.amount, s.status].filter(Boolean).join(" · "),
      ...r && {
        secondaryActions: {
          label: n.t("ai.view"),
          href: r
        }
      }
    }),
    [n, r]
  ), p = c(
    () => ({
      title: e,
      ...r && {
        secondaryActions: {
          label: n.t("ai.view"),
          href: r
        }
      }
    }),
    [e, n, r]
  );
  return a ? /* @__PURE__ */ i(
    y,
    {
      id: t,
      trigger: /* @__PURE__ */ i(f, { label: e }),
      resolver: a,
      mapToCard: m,
      fallbackCard: p
    }
  ) : /* @__PURE__ */ i("span", { children: e });
}
export {
  j as ExpenseEntityRef
};
