import { jsx as i } from "react/jsx-runtime";
import { forwardRef as $, useRef as j, useImperativeHandle as z, useLayoutEffect as E } from "react";
import { cn as G } from "../lib/utils.js";
import { F0InputField as L } from "../components/F0InputField/F0InputField.js";
const M = $(
  ({
    className: p,
    label: c,
    labelIcon: f,
    icon: h,
    error: u,
    hideLabel: m,
    maxLength: d,
    clearable: g,
    disabled: n,
    required: l,
    value: a,
    cols: x,
    rows: y,
    status: w,
    hint: F,
    onChange: H,
    placeholder: R,
    size: T,
    loading: k,
    maxHeight: t,
    ...v
  }, B) => {
    const o = j(null);
    return z(B, () => o.current), E(() => {
      const e = o.current;
      if (!e) return;
      e.style.height = "0px";
      const C = e.scrollHeight, r = getComputedStyle(e), I = parseFloat(r.lineHeight) || 20, N = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom), Y = I * (e.rows || 2) + N, s = Math.max(C, Y);
      t != null && s > t ? (e.style.height = `${t}px`, e.style.overflowY = "auto") : (e.style.height = `${s}px`, e.style.overflowY = "hidden");
    }), /* @__PURE__ */ i(
      L,
      {
        label: c,
        labelIcon: f,
        icon: h,
        error: u,
        status: w,
        hint: F,
        hideLabel: m,
        maxLength: d,
        clearable: g,
        value: a,
        canGrow: !0,
        placeholder: R ?? "",
        onChange: (e) => {
          H?.(e ?? "");
        },
        disabled: n,
        required: l,
        size: T,
        loading: k,
        inputRef: o,
        ...v,
        children: /* @__PURE__ */ i(
          "textarea",
          {
            className: G("block w-full resize-none pt-2", p),
            value: a,
            cols: x,
            rows: y,
            disabled: n,
            required: l
          }
        )
      }
    );
  }
);
M.displayName = "Textarea";
export {
  M as Textarea
};
