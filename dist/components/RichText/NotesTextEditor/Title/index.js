import { jsx as t } from "react/jsx-runtime";
const x = ({
  value: a,
  onChange: n,
  placeholder: l,
  disabled: o = !1
}) => /* @__PURE__ */ t("div", { className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0", children: /* @__PURE__ */ t(
  "textarea",
  {
    ref: (e) => {
      e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
    },
    disabled: o,
    value: a,
    onChange: (e) => {
      const r = e.target.value.replace(/[\r\n]/g, "");
      n?.(r), e.target.style.height = "auto", e.target.style.height = `${e.target.scrollHeight}px`;
    },
    onKeyDown: (e) => {
      e.key === "Enter" && e.preventDefault();
    },
    placeholder: l,
    className: "resize-none overflow-hidden font-semibold text-f1-foreground placeholder-f1-foreground-tertiary sm:text-[39px] sm:leading-[49px] text-[34px] leading-[42px]",
    rows: 1
  }
) });
export {
  x as default
};
