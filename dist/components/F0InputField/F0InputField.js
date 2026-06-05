import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { cva as N } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as be, useId as he, useState as J, useEffect as K, useRef as Q, useMemo as we, cloneElement as ge } from "react";
import { F0Avatar as ve } from "../avatars/F0Avatar/F0Avatar.js";
import { F0ButtonToggle as xe } from "../F0ButtonToggle/F0ButtonToggle.js";
import { F0Icon as X } from "../F0Icon/index.js";
import ye from "../../icons/app/CrossedCircle.js";
import "../../icons/app/Menu.js";
import { cn as i, focusRing as Fe } from "../../lib/utils.js";
import { Spinner as Ne } from "../../ui/Spinner/index.js";
import { AppendTag as ke } from "./AppendTag.js";
import { InputMessages as Ce } from "./components/InputMessages.js";
import { Label as Ie } from "./components/Label.js";
import { AnimatePresence as Y } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as Ae } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const Xe = ["sm", "md"], $ = "", Se = (s) => s === $ || s ? s.toString().length === 0 : !0, Ve = (s) => s ? s.toString().length : 0, E = N({
  base: "",
  variants: {
    size: {
      sm: "py-1",
      md: "py-2"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Re = N({
  base: "",
  variants: {
    canGrow: {
      true: "flex-1",
      false: "flex-none"
    },
    size: {
      sm: "rounded",
      md: "rounded-md"
    }
  },
  compoundVariants: [
    {
      size: "sm",
      canGrow: !0,
      class: "min-h-[32px]"
    },
    {
      size: "md",
      canGrow: !0,
      class: "min-h-[40px]"
    },
    {
      size: "sm",
      canGrow: !1,
      class: "h-[32px]"
    },
    {
      size: "md",
      canGrow: !1,
      class: "h-[40px]"
    }
  ],
  defaultVariants: {
    size: "md",
    canGrow: !1
  }
}), je = N({
  base: "",
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-2"
    }
  }
}), Ee = N({
  base: "focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none",
  variants: {
    status: {
      default: "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
      warning: "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
      info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
      error: "border-f1-border-critical-bold focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical bg-f1-background-critical bg-opacity-10"
    },
    disabled: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      disabled: !1,
      status: "default",
      class: "hover:border-f1-border-selected-bold"
    },
    {
      disabled: !1,
      status: "warning",
      class: "hover:border-f1-border-warning-bold"
    },
    {
      disabled: !1,
      status: "info",
      class: "hover:border-f1-border-info-bold"
    },
    {
      disabled: !1,
      status: "error",
      class: "hover:border-f1-border-critical-bold"
    }
  ]
}), ze = be(
  ({
    children: s,
    disabled: o,
    readonly: v,
    label: b,
    labelIcon: T,
    hideLabel: z = !1,
    className: L,
    required: ee,
    error: k,
    status: x,
    hint: G,
    size: r = "sm",
    icon: a,
    canGrow: C = !1,
    value: p,
    loading: I = !1,
    loadingIndicator: A,
    placeholder: y,
    clearable: B = !1,
    isEmpty: S = Se,
    emptyValue: O = $,
    lengthProvider: F = Ve,
    maxLength: n,
    hideMaxLength: P = !1,
    append: q,
    hidePlaceholder: re = !1,
    onClickPlaceholder: te,
    onClickChildren: ie,
    onClickContent: oe,
    name: ne,
    role: se,
    appendTag: V,
    avatar: f,
    "aria-controls": le,
    "aria-expanded": ae,
    buttonToggle: c,
    transparent: R,
    ...d
  }, fe) => {
    const ce = he(), D = d.id ?? ce, h = o || v, [w, M] = J(p);
    G && (x = {
      type: "default",
      message: G
    }), k && (x = {
      type: "error",
      message: typeof k == "string" ? k : void 0
    }), b || console.error(
      "F0InputField: label is required for accessibility reasons. If you don't want to show a label, set hideLabel to true."
    ), K(() => {
      M(
        n && p && F(p) > n ? p?.substring(0, n) : p
      );
    }, [p, F, n]);
    const U = (t) => {
      let u = (typeof t == "string" ? t : t.target.value) ?? O;
      if (n && F(u) > n)
        if (typeof u == "string")
          u = u.substring(0, n);
        else
          return;
      M(u), d.onChange?.(u);
    }, de = () => {
      U(O), d.onClear?.();
    }, W = () => {
      o || oe?.();
    }, ue = () => {
      o || ie?.();
    }, me = () => {
      o || te?.();
    }, [j, Z] = J(!1), pe = (t) => {
      t.animationName === "autofill" && Z(!0);
    }, l = Q(null), _ = Q(null), g = we(
      () => d.inputRef ?? _,
      [d.inputRef, _]
    );
    K(() => (j && !l.current && (l.current = setInterval(() => {
      const t = typeof g == "object" && g?.current ? g.current : null;
      t && (t.matches(":-webkit-autofill") || t.matches(":autofill") || (Z(!1), l.current && (clearInterval(l.current), l.current = null)));
    }, 100)), () => {
      l.current && (clearInterval(l.current), l.current = null);
    }), [j, g]);
    const H = q || V || c;
    return /* @__PURE__ */ m(
      "div",
      {
        className: i(
          "flex flex-col gap-2",
          "pointer-events-none",
          o && "cursor-not-allowed",
          R && "bg-transparent h-full w-full",
          L
        ),
        ref: fe,
        children: [
          (!z && b || n && !P) && /* @__PURE__ */ e(
            "div",
            {
              className: i(
                "flex max-w-full items-center",
                je({ size: r })
              ),
              children: /* @__PURE__ */ m(
                "div",
                {
                  className: i("flex min-w-0 flex-1 flex-row gap-4"),
                  "data-testid": "input-field-top",
                  children: [
                    !z && b && /* @__PURE__ */ e(
                      Ie,
                      {
                        label: b,
                        required: ee,
                        htmlFor: D,
                        icon: T,
                        className: "min-w-0 flex-1",
                        disabled: o
                      }
                    ),
                    n && !P && !h && /* @__PURE__ */ m("div", { className: "text-right text-f1-foreground-secondary", children: [
                      F(w),
                      "/",
                      n
                    ] })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: i(
                "relative h-fit transition-all",
                !h && !o && "hover:border-f1-border-hover",
                !R && [
                  "border-[1px] border-solid border-f1-border bg-f1-background",
                  "group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
                  "focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
                  Ee({
                    status: x?.type ?? "default",
                    disabled: o || v
                  }),
                  Re({ size: r, canGrow: C })
                ],
                "active-within:border-f1-border active-within:ring-1 active-within:ring-f1-border-hover",
                v && "border-f1-border-secondary bg-f1-background-secondary",
                o && "cursor-not-allowed bg-f1-background-tertiary",
                R && "h-full w-full "
              ),
              "data-testid": "input-field-wrapper",
              children: /* @__PURE__ */ m(
                "div",
                {
                  className: "pointer-events-auto relative flex h-full w-full min-w-0 flex-1",
                  onClick: W,
                  children: [
                    (a || f) && /* @__PURE__ */ m(
                      "div",
                      {
                        className: i(
                          "pointer-events-none absolute left-2 top-[5px] my-auto h-5 w-5 shrink-0",
                          r === "md" && "left-3 top-[9px]"
                        ),
                        children: [
                          a && /* @__PURE__ */ e(
                            X,
                            {
                              onClick: W,
                              icon: a,
                              color: "default"
                            }
                          ),
                          f && /* @__PURE__ */ e(ve, { avatar: f, size: "xs" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e(
                      "div",
                      {
                        onClick: ue,
                        className: "w-full min-w-0 flex-1",
                        children: ge(s, {
                          onChange: U,
                          onBlur: d.onBlur,
                          onFocus: d.onFocus,
                          onAnimationStart: pe,
                          disabled: h,
                          readOnly: v,
                          role: se,
                          ref: g,
                          "aria-controls": le,
                          "aria-expanded": ae,
                          id: D,
                          value: w ?? "",
                          "aria-label": b || y || "no-label",
                          "aria-busy": I,
                          "aria-disabled": h,
                          name: ne,
                          className: i(
                            "h-full w-full min-w-0 px-3",
                            "[&::-webkit-search-cancel-button]:hidden",
                            (a || f) && "pl-8",
                            (a || f) && r === "md" && "pl-9",
                            o && "cursor-not-allowed",
                            s.props.className,
                            E({ size: r })
                          )
                        })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "div",
                      {
                        "data-slot": "placeholder",
                        className: i(
                          "pointer-events-none absolute left-0 top-[1px] z-10 flex flex-1 justify-start px-3 text-f1-foreground-secondary transition-opacity line-clamp-1",
                          !C && "bottom-0",
                          C && "items-start",
                          (a || f) && "pl-8",
                          (a || f) && r === "md" && "pl-9",
                          E({ size: r }),
                          y && !re && S(w) && !j ? "opacity-100" : "opacity-0"
                        ),
                        onClick: me,
                        "aria-hidden": "true",
                        title: y,
                        children: y
                      }
                    ),
                    (B || H || I) && /* @__PURE__ */ m(
                      "div",
                      {
                        className: i(
                          "flex h-fit min-w-6 items-center gap-1.5 self-center pr-[3px]",
                          r === "md" && "pr-[7px]",
                          "relative"
                        ),
                        children: [
                          B && !h && /* @__PURE__ */ e(Y, { initial: !S(w), children: !S(w) && /* @__PURE__ */ e(
                            Ae.button,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.2 },
                              className: i(
                                "flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full p-0",
                                Fe()
                              ),
                              "aria-label": "Clear",
                              type: "button",
                              tabIndex: 0,
                              "data-testid": "clear-button",
                              onClick: (t) => {
                                t.stopPropagation(), de();
                              },
                              children: /* @__PURE__ */ e(
                                X,
                                {
                                  icon: ye,
                                  color: "default",
                                  size: "md"
                                }
                              )
                            }
                          ) }),
                          H && /* @__PURE__ */ m("div", { className: "flex min-h-6 min-w-6 items-center justify-center self-center", children: [
                            q,
                            V && /* @__PURE__ */ e(ke, { text: V }),
                            c && /* @__PURE__ */ e(
                              xe,
                              {
                                label: c.label,
                                icon: c.icon,
                                selected: c.selected,
                                disabled: c.disabled,
                                onSelectedChange: c.onChange,
                                size: "sm"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ e(Y, { children: I && /* @__PURE__ */ e(
                            "div",
                            {
                              className: i(
                                "pointer-events-none flex h-6 w-6 items-center justify-center",
                                A?.asOverlay && i(
                                  "absolute bottom-0 right-2 top-0",
                                  "bg-gradient-to-l from-[#FFFFFF] from-0% dark:from-[#192231]",
                                  "via-[#FFFFFF] via-60% dark:via-[#192231]",
                                  "to-transparent to-100%",
                                  r === "md" && "right-3"
                                ),
                                E({ size: r })
                              ),
                              style: {
                                right: typeof A?.offset == "number" ? A?.offset + (r === "md" ? 6 : 0) : void 0
                              },
                              children: /* @__PURE__ */ e(Ne, { size: "small", className: "mt-[1px]" })
                            }
                          ) })
                        ]
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ e(Ce, { status: x })
        ]
      }
    );
  }
);
ze.displayName = "F0InputField";
export {
  ze as F0InputField,
  Xe as INPUTFIELD_SIZES
};
