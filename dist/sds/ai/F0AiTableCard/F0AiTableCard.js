import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { useRef as h, useCallback as x } from "react";
import { Dropdown as w } from "../../../experimental/Navigation/Dropdown/index.js";
import c from "../../../icons/app/Download.js";
import "../../../icons/app/Menu.js";
import { F0Box as b } from "../../../lib/F0Box/index.js";
import { cn as g } from "../../../lib/utils.js";
import { useI18n as y } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as u } from "../../../lib/OneEllipsis/OneEllipsis.js";
async function C(e, d, n) {
  const t = await import("../../../node_modules/.pnpm/xlsx@0.18.5/node_modules/xlsx/xlsx.js"), l = t.utils.table_to_book(e, { sheet: "Data" });
  t.writeFile(l, `${n}.${d}`);
}
function k({
  dataset: e,
  title: d,
  filename: n
}) {
  const t = y(), l = h(null), a = d ?? t.ai.aiTable.title, m = x(
    (o) => {
      if (!l.current) return;
      const i = n ?? (a.replace(/\s+/g, "_").toLowerCase() || "table");
      C(l.current, o, i);
    },
    [a, n]
  );
  return e.columns?.length ? /* @__PURE__ */ s(
    b,
    {
      display: "flex",
      flexDirection: "column",
      gap: "md",
      borderRadius: "md",
      border: "default",
      borderColor: "secondary",
      children: [
        /* @__PURE__ */ s(
          b,
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: "lg",
            border: "none",
            borderBottom: "default",
            borderColor: "secondary",
            paddingX: "md",
            paddingY: "sm",
            children: [
              /* @__PURE__ */ r(
                u,
                {
                  tag: "h2",
                  className: "text-base font-medium capitalize text-f1-foreground",
                  children: a
                }
              ),
              /* @__PURE__ */ r(
                w,
                {
                  icon: c,
                  size: "md",
                  items: [
                    {
                      label: t.ai.aiTable.downloadExcel,
                      icon: c,
                      onClick: () => m("xlsx")
                    },
                    {
                      label: t.ai.aiTable.downloadCsv,
                      icon: c,
                      onClick: () => m("csv")
                    }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ r(b, { overflowX: "auto", children: /* @__PURE__ */ s(
          "table",
          {
            ref: l,
            className: g(
              "w-full border-separate border-spacing-0 text-md",
              "[&_tbody_tr:last-child_td]:border-b-0"
            ),
            children: [
              /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: e.columns.map((o) => /* @__PURE__ */ r(
                "th",
                {
                  className: "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
                  children: e.columnLabels?.[o] ?? o
                },
                o
              )) }) }),
              /* @__PURE__ */ r("tbody", { children: e.rows.map((o, i) => /* @__PURE__ */ r("tr", { children: e.columns.map((f) => {
                const p = o[f];
                return /* @__PURE__ */ r(
                  "td",
                  {
                    className: "max-w-72 border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-f1-foreground",
                    children: /* @__PURE__ */ r(u, { children: p == null ? "" : String(p) })
                  },
                  f
                );
              }) }, i)) })
            ]
          }
        ) })
      ]
    }
  ) : null;
}
k.displayName = "F0AiTableCard";
export {
  k as F0AiTableCard
};
