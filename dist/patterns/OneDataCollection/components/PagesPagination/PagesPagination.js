import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { cn as c } from "../../../../lib/utils.js";
import { OnePagination as m } from "../../../../ui/OnePagination/index.js";
import { isPageBasedPagination as u } from "../../../../hooks/datasource/useData.js";
import { useI18n as P } from "../../../../lib/providers/i18n/i18n-provider.js";
const x = ({
  paginationInfo: e,
  setPage: t,
  className: s
}) => {
  const l = P();
  return !u(e) || e.pagesCount <= 1 ? null : /* @__PURE__ */ a(
    "div",
    {
      className: c(
        "flex w-full items-center justify-between px-page",
        s
      ),
      children: [
        /* @__PURE__ */ r("span", { className: "shrink-0 text-f1-foreground-secondary", children: e.total > 0 && `${(e.currentPage - 1) * e.perPage + 1}-${Math.min(
          e.currentPage * e.perPage,
          e.total
        )} ${l.collections.visualizations.pagination.of} ${e.total}` }),
        /* @__PURE__ */ r("div", { className: "flex items-center", children: /* @__PURE__ */ r(
          m,
          {
            totalPages: e.pagesCount,
            currentPage: e.currentPage,
            onPageChange: t
          }
        ) })
      ]
    }
  );
};
export {
  x as PagesPagination
};
