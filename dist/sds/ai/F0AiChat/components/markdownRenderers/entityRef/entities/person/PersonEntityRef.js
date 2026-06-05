import { jsx as a, jsxs as d } from "react/jsx-runtime";
import { useMemo as m, forwardRef as p } from "react";
import { cn as l, focusRing as g } from "../../../../../../../../lib/utils.js";
import { useAiChat as y } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as v } from "../../components/EntityRefHoverCard.js";
import { useI18n as N } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
const c = p(
  ({ label: o, ...r }, s) => /* @__PURE__ */ d(
    "button",
    {
      ref: s,
      type: "button",
      className: l(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        g()
      ),
      ...r,
      children: [
        "@",
        o
      ]
    }
  )
);
c.displayName = "PersonTrigger";
function j({ id: o, label: r }) {
  const { entityRefs: s } = y(), i = s?.resolvers?.person, n = N(), t = s?.urls?.person?.(o), f = m(
    () => (e) => ({
      avatar: {
        type: "person",
        firstName: e.firstName,
        lastName: e.lastName,
        src: e.avatarUrl
      },
      title: `${e.firstName} ${e.lastName}`,
      description: e.jobTitle,
      ...t && {
        secondaryActions: {
          label: n.t("ai.view"),
          href: t
        }
      }
    }),
    [n, t]
  ), u = m(
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
  return i ? /* @__PURE__ */ a(
    v,
    {
      id: o,
      trigger: /* @__PURE__ */ a(c, { label: r }),
      resolver: i,
      mapToCard: f,
      fallbackCard: u
    }
  ) : /* @__PURE__ */ a("span", { children: r });
}
export {
  j as PersonEntityRef
};
