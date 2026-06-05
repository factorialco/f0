import { jsx as r } from "react/jsx-runtime";
import * as H from "react";
import { cn as J } from "../lib/utils.js";
import { F0InputField as K } from "../components/F0InputField/F0InputField.js";
const L = H.forwardRef(
  ({
    className: o,
    type: e,
    label: l,
    labelIcon: t,
    icon: i,
    error: a,
    status: n,
    hint: d,
    disabled: c,
    required: p,
    value: m,
    placeholder: s,
    clearable: f,
    onClear: u,
    size: h,
    loading: w,
    isEmpty: b,
    emptyValue: I,
    maxLength: R,
    hideMaxLength: k,
    append: x,
    onChange: F,
    role: N,
    appendTag: j,
    lengthProvider: z,
    onClickContent: P,
    hideLabel: g,
    name: q,
    onFocus: v,
    onBlur: y,
    onKeyDown: A,
    readonly: B,
    buttonToggle: C,
    transparent: D,
    ...E
  }, G) => /* @__PURE__ */ r(
    K,
    {
      label: l,
      icon: i,
      labelIcon: t,
      error: a,
      status: n,
      hint: d,
      disabled: c,
      required: p,
      value: m,
      loading: w,
      clearable: f,
      className: o,
      onClear: u,
      placeholder: s || "",
      size: h,
      role: N,
      isEmpty: b,
      emptyValue: I,
      maxLength: R,
      hideMaxLength: k,
      append: x,
      lengthProvider: z,
      hidePlaceholder: e === "file",
      hideLabel: g,
      onChange: F,
      onClickContent: P,
      name: q,
      appendTag: j,
      onFocus: v,
      onBlur: y,
      inputRef: G,
      readonly: B,
      buttonToggle: C,
      transparent: D,
      children: /* @__PURE__ */ r(
        "input",
        {
          type: e,
          ...E,
          onKeyDown: A,
          className: J(
            "[&::-webkit-search-cancel-button]:hidden",
            "w-full shrink placeholder:-z-10 disabled:cursor-not-allowed"
          )
        }
      )
    }
  )
);
L.displayName = "Input";
export {
  L as Input
};
