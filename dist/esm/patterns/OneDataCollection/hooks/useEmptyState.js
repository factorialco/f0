import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { useState as t } from "react";
//#region src/patterns/OneDataCollection/hooks/useEmptyState.ts
var n = (n = {}, r) => {
	let i = e(), a = {
		"no-data": {
			emoji: "📄",
			title: i.collections.emptyStates.noData.title,
			description: i.collections.emptyStates.noData.description
		},
		"no-results": {
			emoji: "🔍",
			title: i.collections.emptyStates.noResults.title,
			description: i.collections.emptyStates.noResults.description,
			actions: [{
				label: i.collections.emptyStates.noResults.clearFilters,
				onClick: r.clearFilters,
				variant: "neutral"
			}]
		},
		error: {
			title: i.collections.emptyStates.error.title,
			description: i.collections.emptyStates.error.description,
			actions: [{
				label: i.collections.emptyStates.error.retry,
				onClick: r.retry,
				variant: "neutral"
			}]
		}
	}, [o, s] = t(void 0);
	return {
		emptyState: o,
		setEmptyStateType: (e, t) => {
			if (!e) {
				s(void 0);
				return;
			}
			let r = n[e] ?? {}, i = a[e], o = {
				title: r.title ?? i.title,
				description: r.description ?? (e === "error" && t ? t : i.description),
				actions: r.actions ?? i.actions
			};
			s(e === "error" ? {
				...o,
				variant: "critical"
			} : {
				...o,
				emoji: r.emoji ?? i.emoji
			});
		}
	};
};
//#endregion
export { n as useEmptyState };
