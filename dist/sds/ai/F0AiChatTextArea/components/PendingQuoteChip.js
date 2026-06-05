import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { ButtonInternal as n } from "../../../../components/F0Button/internal.js";
import { F0Icon as m } from "../../../../components/F0Icon/index.js";
import s from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import l from "../../../../icons/app/Reply.js";
import { OneEllipsis as a } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { cn as p } from "../../../../lib/utils.js";
import { useI18n as c } from "../../../../lib/providers/i18n/i18n-provider.js";
const N = ({
  quote: r,
  onRemove: o
}) => {
  const t = c();
  return /* @__PURE__ */ e("div", { className: "p-1", children: /* @__PURE__ */ i(
    "div",
    {
      className: p(
        "flex items-start gap-2 justify-center",
        "rounded-[10px] bg-f1-background-hover pl-2 py-1.5 pr-1.5"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ e(m, { icon: l, size: "md", color: "default" }) }),
        /* @__PURE__ */ e(
          a,
          {
            className: "h-full flex-1 py-0.5 text-[12px] font-medium text-f1-foreground-secondary",
            lines: 1,
            children: r.text
          }
        ),
        /* @__PURE__ */ e(
          n,
          {
            variant: "ghost",
            label: t.ai.removeQuote,
            onClick: o,
            icon: s,
            hideLabel: !0,
            size: "sm"
          }
        )
      ]
    }
  ) });
};
export {
  N as PendingQuoteChip
};
