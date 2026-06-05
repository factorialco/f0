import { jsx as o, jsxs as m } from "react/jsx-runtime";
import { useState as t } from "react";
import { F0Icon as h } from "../../../../../../components/F0Icon/index.js";
import { F0Select as f } from "../../../../../../components/F0Select/index.js";
import g from "../../../../../../icons/app/ChevronDown.js";
import "../../../../../../icons/app/Menu.js";
import { motion as b } from "../../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
function y({
  ...e
}) {
  const [l, r] = t(e.open), c = (n) => {
    r(n), e.onOpenChange?.(n);
  }, [a, d] = t(
    e.placeholder || e.label
  );
  return /* @__PURE__ */ o(
    f,
    {
      ...e,
      onOpenChange: c,
      onChange: (n, i, s) => {
        e.onChange?.(n, i, s);
      },
      onChangeSelectedOption: (n) => {
        d(n?.label || "");
      },
      label: a,
      hideLabel: !0,
      children: /* @__PURE__ */ m(
        "button",
        {
          className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
          "aria-label": a,
          children: [
            /* @__PURE__ */ o("span", { className: "block grow text-f1-foreground", children: a }),
            /* @__PURE__ */ o("div", { className: "ml-2", children: /* @__PURE__ */ o(
              b.div,
              {
                animate: { rotate: l ? 180 : 0 },
                className: "h-[16px] w-[16px]",
                children: /* @__PURE__ */ o(
                  h,
                  {
                    icon: g,
                    size: "sm",
                    className: "rounded-2xs bg-f1-background-secondary p-0.5"
                  }
                )
              }
            ) })
          ]
        }
      )
    }
  );
}
export {
  y as BreadcrumbSelect
};
