import { jsxs as y, jsx as c } from "react/jsx-runtime";
import { useState as N, useRef as j, useEffect as C } from "react";
import { CustomAnswerRow as D } from "./CustomAnswerRow.js";
import { OptionRow as E } from "./OptionRow.js";
const O = ({
  mode: n,
  question: l,
  options: a,
  selectedOptionIds: o,
  allowCustomAnswer: f,
  hasSelection: u,
  hasCustomText: g,
  customAnswerText: p,
  isCustomAnswerActive: x,
  canProceed: w,
  customInputRef: b,
  autoFocus: d,
  onToggleOption: v,
  onActivateCustom: m,
  onChangeCustomText: A,
  onToggleCustomActive: h,
  onConfirm: R
}) => {
  const S = (() => {
    if (n !== "single") return 0;
    const e = a.findIndex((r) => o.includes(r.id));
    return e >= 0 ? e : 0;
  })(), [s, T] = N(S), i = j([]);
  C(() => {
    d && n === "single" && i.current[s]?.focus();
  }, []);
  const k = (e) => {
    if (n !== "single") return;
    const r = a.length - 1;
    if (r < 0) return;
    let t = s;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        t = s >= r ? 0 : s + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        t = s <= 0 ? r : s - 1;
        break;
      case "Home":
        t = 0;
        break;
      case "End":
        t = r;
        break;
      default:
        return;
    }
    e.preventDefault(), T(t), i.current[t]?.focus();
  };
  return /* @__PURE__ */ y(
    "div",
    {
      className: "flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5",
      role: n === "single" ? "radiogroup" : "group",
      "aria-label": l,
      children: [
        a.map((e, r) => /* @__PURE__ */ c(
          E,
          {
            ref: (t) => {
              i.current[r] = t;
            },
            option: e,
            isSelected: o.includes(e.id),
            mode: n,
            isTabStop: n === "single" ? r === s : void 0,
            onToggle: v,
            onKeyNavigate: k
          },
          e.id
        )),
        f && /* @__PURE__ */ c(
          D,
          {
            mode: n,
            hasSelection: u,
            hasCustomText: g,
            customAnswerText: p,
            isCustomAnswerActive: x,
            canProceed: w,
            inputRef: b,
            onActivate: m,
            onChangeText: A,
            onToggleActive: h,
            onConfirm: R
          }
        )
      ]
    }
  );
};
export {
  O as OptionsList
};
