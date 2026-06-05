import { jsx as e, jsxs as v } from "react/jsx-runtime";
import { useMemo as m, forwardRef as R } from "react";
import { F0AvatarPerson as y } from "../../../../../../../../components/avatars/F0AvatarPerson/index.js";
import { F0TagStatus as h } from "../../../../../../../../components/tags/F0TagStatus/index.js";
import { cn as N, focusRing as M } from "../../../../../../../../lib/utils.js";
import { useAiChat as q } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefDetails as x } from "../../components/EntityRefDetails.js";
import { EntityRefHoverCard as p } from "../../components/EntityRefHoverCard.js";
import { useI18n as w } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
const l = R(
  ({ label: r, ...n }, s) => /* @__PURE__ */ e(
    "button",
    {
      ref: s,
      type: "button",
      className: N(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        M()
      ),
      ...n,
      children: r
    }
  )
);
l.displayName = "RequisitionTrigger";
function z({
  id: r,
  label: n
}) {
  const { entityRefs: s } = q(), o = s?.resolvers?.requisition, i = w(), a = s?.urls?.requisition?.(r), u = m(
    () => (t) => {
      const f = t.lineManager ? `${t.lineManager.firstName} ${t.lineManager.lastName}` : void 0, c = [
        t.status ? {
          label: i.t("ai.entityRef.requisition.status"),
          value: /* @__PURE__ */ e("div", { className: "flex items-center pt-1", children: /* @__PURE__ */ e(
            h,
            {
              text: t.status,
              variant: t.statusVariant ?? "neutral"
            }
          ) })
        } : void 0,
        t.lineManager ? {
          label: i.t("ai.entityRef.requisition.lineManager"),
          value: /* @__PURE__ */ v("div", { className: "flex items-center gap-1.5 pt-1", children: [
            /* @__PURE__ */ e(
              y,
              {
                firstName: t.lineManager.firstName,
                lastName: t.lineManager.lastName,
                src: t.lineManager.avatarUrl,
                size: "xs"
              }
            ),
            /* @__PURE__ */ e("span", { children: f })
          ] })
        } : void 0,
        t.reason ? {
          label: i.t("ai.entityRef.requisition.reason"),
          value: t.reason
        } : void 0
      ].filter(
        (g) => g !== void 0
      );
      return {
        title: t.title,
        ...t.location && { description: t.location },
        ...c.length > 0 && {
          children: /* @__PURE__ */ e(x, { rows: c })
        },
        ...a && {
          secondaryActions: {
            label: i.t("ai.view"),
            href: a
          }
        }
      };
    },
    [i, a]
  ), d = m(
    () => ({
      title: n,
      ...a && {
        secondaryActions: {
          label: i.t("ai.view"),
          href: a
        }
      }
    }),
    [n, i, a]
  );
  return o ? /* @__PURE__ */ e(
    p,
    {
      id: r,
      trigger: /* @__PURE__ */ e(l, { label: n }),
      resolver: o,
      mapToCard: u,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ e("span", { children: n });
}
export {
  z as RequisitionEntityRef
};
