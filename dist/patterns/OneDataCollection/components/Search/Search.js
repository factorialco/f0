import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { useState as k, useId as N, useRef as x } from "react";
import { useOnClickOutside as I } from "../../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { F0Icon as f } from "../../../../components/F0Icon/index.js";
import w from "../../../../icons/app/CrossedCircle.js";
import "../../../../icons/app/Menu.js";
import R from "../../../../icons/app/Search.js";
import j from "../../../../icons/app/Spinner.js";
import { cn as c, focusRing as u } from "../../../../lib/utils.js";
import { LayoutGroup as C } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/LayoutGroup/index.js";
import { MotionConfig as D } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/MotionConfig/index.js";
import { AnimatePresence as K } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as o } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as E } from "../../../../lib/providers/i18n/i18n-provider.js";
const v = ({ loading: r }) => r ? /* @__PURE__ */ e(f, { icon: j, className: "animate-spin" }) : /* @__PURE__ */ e(f, { icon: R, className: "text" }), J = ({ value: r, onChange: m, loading: p = !1 }) => {
  const [n, l] = k(!1), g = N(), h = x(null), a = x(null), s = E(), i = () => {
    m(void 0), l(!1), a?.current && (a.current.value = "");
  };
  I(h, () => {
    n && l(!1);
  });
  const y = () => {
    n || (l(!0), setTimeout(() => {
      a.current?.focus();
    }, 0));
  }, b = (t) => {
    n ? t.key === "Escape" && (t.preventDefault(), i(), l(!1)) : (t.key === "Enter" || t.key === " ") && (t.preventDefault(), y());
  };
  return /* @__PURE__ */ e(C, { id: g, children: /* @__PURE__ */ e(
    D,
    {
      transition: { duration: 0.2, ease: [0.175, 0.885, 0.32, 1.05] },
      children: /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(
        o.div,
        {
          layout: !0,
          ref: h,
          className: c(
            "relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center",
            (n || r) && "w-[180px]"
          ),
          children: n ? /* @__PURE__ */ e(
            o.div,
            {
              layout: !0,
              layoutId: "search-container",
              className: "absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover",
              style: { borderRadius: 12 },
              children: /* @__PURE__ */ d(
                o.div,
                {
                  layout: !0,
                  className: "relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5",
                  style: { borderRadius: 11 },
                  children: [
                    /* @__PURE__ */ e(
                      o.div,
                      {
                        className: "absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon",
                        layoutId: "search-icon",
                        children: /* @__PURE__ */ e(v, { loading: p }, "loading")
                      }
                    ),
                    /* @__PURE__ */ e(
                      o.input,
                      {
                        layout: !0,
                        ref: a,
                        type: "text",
                        value: r,
                        placeholder: s.actions.search,
                        onChange: (t) => m(t.target.value),
                        className: "h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        onKeyDown: b
                      }
                    ),
                    /* @__PURE__ */ e(
                      o.div,
                      {
                        tabIndex: 0,
                        className: c(
                          "flex h-5 w-5 items-center justify-center rounded-full",
                          u()
                        ),
                        onClick: (t) => {
                          t.stopPropagation(), i();
                        },
                        onKeyDown: (t) => {
                          (t.key === "Enter" || t.key === " ") && i();
                        },
                        role: "button",
                        "aria-label": s.actions.clear,
                        children: /* @__PURE__ */ e(f, { icon: w, size: "md", color: "secondary" })
                      }
                    )
                  ]
                }
              )
            }
          ) : /* @__PURE__ */ e(
            o.div,
            {
              role: "button",
              "aria-label": s.actions.search,
              tabIndex: 0,
              layout: !0,
              layoutId: "search-container",
              className: c(
                "relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover",
                u()
              ),
              onClick: y,
              onKeyDown: b,
              style: { borderRadius: 10 },
              children: /* @__PURE__ */ d(
                o.div,
                {
                  layout: !0,
                  className: "relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background",
                  style: { borderRadius: 9 },
                  children: [
                    /* @__PURE__ */ e(
                      o.div,
                      {
                        className: "absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold",
                        layoutId: "search-icon",
                        children: /* @__PURE__ */ e(v, { loading: p })
                      }
                    ),
                    r && /* @__PURE__ */ d("div", { className: "flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5", children: [
                      /* @__PURE__ */ e(
                        o.div,
                        {
                          layout: !0,
                          className: "line-clamp-1 overflow-hidden py-2 pl-7",
                          children: r
                        }
                      ),
                      /* @__PURE__ */ e(
                        o.div,
                        {
                          tabIndex: 0,
                          className: c(
                            "flex h-5 w-5 items-center justify-center rounded-full",
                            u()
                          ),
                          onClick: (t) => {
                            t.stopPropagation(), i();
                          },
                          onKeyDown: (t) => {
                            (t.key === "Enter" || t.key === " ") && i();
                          },
                          role: "button",
                          "aria-label": s.actions.clear,
                          children: /* @__PURE__ */ e(
                            f,
                            {
                              icon: w,
                              size: "md",
                              color: "secondary"
                            }
                          )
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          )
        }
      ) })
    }
  ) });
};
export {
  J as Search
};
