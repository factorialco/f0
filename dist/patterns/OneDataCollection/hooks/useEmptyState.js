import { useState as p } from "react";
import { useI18n as S } from "../../../lib/providers/i18n/i18n-provider.js";
const f = (l = {}, c) => {
  const t = S(), a = {
    "no-data": {
      emoji: "📄",
      title: t.collections.emptyStates.noData.title,
      description: t.collections.emptyStates.noData.description
    },
    "no-results": {
      emoji: "🔍",
      title: t.collections.emptyStates.noResults.title,
      description: t.collections.emptyStates.noResults.description,
      actions: [
        {
          label: t.collections.emptyStates.noResults.clearFilters,
          onClick: c.clearFilters
        }
      ]
    },
    error: {
      title: t.collections.emptyStates.error.title,
      description: t.collections.emptyStates.error.description,
      actions: [
        {
          label: t.collections.emptyStates.error.retry,
          onClick: c.retry
        }
      ]
    }
  }, [m, s] = p(void 0);
  return { emptyState: m, setEmptyStateType: (e, r) => {
    if (!e) {
      s(void 0);
      return;
    }
    const o = l[e] ?? {}, i = a[e], n = {
      title: o.title ?? i.title,
      description: o.description ?? (e === "error" && r ? r : i.description),
      actions: o.actions ?? i.actions
    };
    s(e === "error" ? {
      ...n,
      variant: "critical"
    } : {
      ...n,
      emoji: o.emoji ?? i.emoji
    });
  } };
};
export {
  f as useEmptyState
};
