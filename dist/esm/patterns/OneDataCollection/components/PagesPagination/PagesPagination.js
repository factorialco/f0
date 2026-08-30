import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { isPageBasedPagination as n } from "../../../../hooks/datasource/useData.js";
import { OnePagination as r } from "../../../../ui/OnePagination/index.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/PagesPagination/PagesPagination.tsx
var o = ({ paginationInfo: o, setPage: s, className: c }) => {
	let l = t();
	return !n(o) || o.pagesCount <= 1 ? null : /* @__PURE__ */ a("div", {
		className: e("flex w-full items-center justify-between px-page", c),
		children: [/* @__PURE__ */ i("span", {
			className: "shrink-0 text-f1-foreground-secondary",
			children: o.total > 0 && `${(o.currentPage - 1) * o.perPage + 1}-${Math.min(o.currentPage * o.perPage, o.total)} ${l.collections.visualizations.pagination.of} ${o.total}`
		}), /* @__PURE__ */ i("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ i(r, {
				totalPages: o.pagesCount,
				currentPage: o.currentPage,
				onPageChange: s
			})
		})]
	});
};
//#endregion
export { o as PagesPagination };
