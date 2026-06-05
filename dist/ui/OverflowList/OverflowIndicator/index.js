import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { F0Icon as i } from "../../../components/F0Icon/index.js";
import c from "../../../icons/app/ChevronDown.js";
import "../../../icons/app/Menu.js";
import { cn as s } from "../../../lib/utils.js";
import { motion as f } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as m } from "../../../lib/providers/i18n/i18n-provider.js";
const d = f.create(i), l = ({
  count: o,
  totalItemsCount: n,
  isOpen: e
}) => {
  const a = m();
  return /* @__PURE__ */ t(
    "div",
    {
      className: s(
        "flex items-center gap-1 rounded py-1.5 pl-3 pr-2 text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
        e && "bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ t("span", { children: [
          o < n && "+",
          o
        ] }),
        /* @__PURE__ */ r("span", { children: a.actions.more }),
        /* @__PURE__ */ r("div", { className: "flex h-5 w-5 items-center justify-center after:absolute after:h-4 after:w-4 after:rounded-xs after:bg-f1-background-secondary after:content-['']", children: /* @__PURE__ */ r(
          d,
          {
            icon: c,
            initial: { rotate: 0 },
            animate: { rotate: e ? 180 : 0 },
            size: "xs"
          }
        ) })
      ]
    }
  );
};
l.displayName = "OverflowIndicator";
export {
  l as OverflowIndicator
};
