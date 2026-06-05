import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { useState as c, useRef as h, useEffect as x } from "react";
import { useResizeObserver as m } from "../../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { cn as d } from "../../../../lib/utils.js";
import { motion as v } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as b } from "../../../../lib/providers/i18n/i18n-provider.js";
const S = ({ description: i }) => {
  const [e, u] = c(!1), [s, g] = c(!1), n = b(), a = h(null), f = h(null), t = m({ ref: a }), r = m({ ref: f });
  return x(() => {
    r.height && t.height && g(r.height > t.height);
  }, [r.height, t.height]), /* @__PURE__ */ l("div", { className: "flex max-w-[640px] flex-col gap-1", children: [
    /* @__PURE__ */ l(
      v.div,
      {
        initial: !1,
        animate: {
          height: e ? r.height ?? t.height : t.height ?? "3rem"
        },
        transition: {
          duration: s ? 0.15 : 0,
          ease: [0.165, 0.84, 0.44, 1]
        },
        className: d(
          e ? "overflow-y-scroll" : "overflow-clip",
          "relative max-h-80"
        ),
        children: [
          /* @__PURE__ */ o(
            "div",
            {
              ref: f,
              className: "pointer-events-none invisible absolute left-0 top-0 -z-10 text-lg text-f1-foreground-secondary",
              "aria-hidden": "true",
              children: i
            }
          ),
          /* @__PURE__ */ o(
            "div",
            {
              ref: a,
              className: d(
                "text-lg text-f1-foreground-secondary",
                !e && "line-clamp-2"
              ),
              children: i
            }
          )
        ]
      }
    ),
    (s || e) && /* @__PURE__ */ o(
      "button",
      {
        onClick: () => u((p) => !p),
        className: "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
        children: e ? n.actions.showLess : n.actions.showAll
      }
    )
  ] });
};
export {
  S as Description
};
