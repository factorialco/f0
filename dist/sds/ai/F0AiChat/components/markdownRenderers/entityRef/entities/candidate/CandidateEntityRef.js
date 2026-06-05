import { jsx as t, jsxs as p } from "react/jsx-runtime";
import { useMemo as l, forwardRef as g } from "react";
import { cn as h, focusRing as v } from "../../../../../../../../lib/utils.js";
import { useAiChat as x } from "../../../../../providers/AiChatStateProvider.js";
import { EntityRefHoverCard as y } from "../../components/EntityRefHoverCard.js";
import { useI18n as N } from "../../../../../../../../lib/providers/i18n/i18n-provider.js";
const m = g(
  ({ label: i, ...a }, s) => /* @__PURE__ */ t(
    "button",
    {
      ref: s,
      type: "button",
      className: h(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        v()
      ),
      ...a,
      children: i
    }
  )
);
m.displayName = "CandidateTrigger";
function w({
  id: i,
  label: a
}) {
  const { entityRefs: s } = x(), d = s?.resolvers?.candidate, r = N(), n = s?.urls?.candidate?.(i), f = l(
    () => (e) => {
      const o = [];
      return e.source && o.push({
        title: r.t("ai.entityRef.candidate.source"),
        value: e.source
      }), e.appliedAt && o.push({
        title: r.t("ai.entityRef.candidate.applied"),
        value: e.appliedAt
      }), {
        avatar: {
          type: "person",
          firstName: e.firstName,
          lastName: e.lastName,
          src: e.avatarUrl
        },
        title: `${e.firstName} ${e.lastName}`,
        ...o.length > 0 && {
          children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: o.map((c) => /* @__PURE__ */ p("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: c.title }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: c.value })
          ] }, c.title)) })
        },
        ...n && {
          secondaryActions: {
            label: r.t("ai.view"),
            href: n
          }
        }
      };
    },
    [r, n]
  ), u = l(
    () => ({
      title: a,
      ...n && {
        secondaryActions: {
          label: r.t("ai.view"),
          href: n
        }
      }
    }),
    [a, r, n]
  );
  return d ? /* @__PURE__ */ t(
    y,
    {
      id: i,
      trigger: /* @__PURE__ */ t(m, { label: a }),
      resolver: d,
      mapToCard: f,
      fallbackCard: u
    }
  ) : /* @__PURE__ */ t("span", { children: a });
}
export {
  w as CandidateEntityRef
};
