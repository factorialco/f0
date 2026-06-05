import { jsx as a, jsxs as c } from "react/jsx-runtime";
import { useRef as m, useCallback as f } from "react";
import { Dropdown as u } from "../../../../../../experimental/Navigation/Dropdown/index.js";
import l from "../../../../../../icons/app/Download.js";
import "../../../../../../icons/app/Menu.js";
import { cn as n } from "../../../../../../lib/utils.js";
import { useI18n as p } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as w } from "../../../../../../lib/OneEllipsis/OneEllipsis.js";
async function x(e, r, d) {
  const o = await import("../../../../../../node_modules/.pnpm/xlsx@0.18.5/node_modules/xlsx/xlsx.js"), t = o.utils.table_to_book(e, { sheet: "Data" });
  o.writeFile(t, `${d}.${r}`);
}
function D({
  children: e,
  title: r,
  ...d
}) {
  const o = p(), t = m(null), s = f(
    (i) => {
      if (!t.current) return;
      const b = r?.replace(/\s+/g, "_").toLowerCase() || "table";
      x(t.current, i, b);
    },
    [r]
  );
  return /* @__PURE__ */ c("div", { className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary", children: [
    /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2", children: [
      /* @__PURE__ */ a(
        w,
        {
          tag: "h2",
          className: "text-base font-medium capitalize text-f1-foreground",
          children: r ?? o.ai.reportCard.tableLabel
        }
      ),
      /* @__PURE__ */ a(
        u,
        {
          icon: l,
          size: "md",
          items: [
            {
              label: o.t("ai.dataDownload.download", {
                format: "Excel"
              }),
              icon: l,
              onClick: () => s("xlsx")
            },
            {
              label: o.t("ai.dataDownload.download", {
                format: "CSV"
              }),
              icon: l,
              onClick: () => s("csv")
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "scrollbar-macos overflow-x-auto", children: /* @__PURE__ */ a(
      "table",
      {
        ref: t,
        ...d,
        className: n(
          "w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0",
          d.className
        ),
        children: e
      }
    ) })
  ] });
}
function T({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ a(
    "th",
    {
      ...r,
      className: n(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        r.className
      ),
      children: e
    }
  );
}
function j({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ a(
    "td",
    {
      ...r,
      className: n(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        r.className
      ),
      children: e
    }
  );
}
export {
  D as Table,
  j as Td,
  T as Th
};
