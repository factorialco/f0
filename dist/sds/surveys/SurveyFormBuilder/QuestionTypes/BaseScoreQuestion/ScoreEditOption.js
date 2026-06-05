import { jsx as o, jsxs as u } from "react/jsx-runtime";
import h from "../../../../../node_modules/.pnpm/@emoji-mart_data@1.2.1/node_modules/@emoji-mart/data/sets/15/twitter.json.js";
import g from "../../../../../node_modules/.pnpm/@emoji-mart_react@1.1.1_emoji-mart@5.6.0_react@18.3.1/node_modules/@emoji-mart/react/dist/module.js";
import { useState as b, useEffect as j } from "react";
import '../../../../../kits/Social/Reactions/Picker/index.css';/* empty css                                                    */
import { cn as v } from "../../../../../lib/utils.js";
import { Popover as x, PopoverTrigger as P, PopoverContent as k } from "../../../../../ui/popover.js";
import { F0Button as w } from "../../../../../components/F0Button/F0Button.js";
const z = ({
  option: s,
  selected: a,
  onClick: c,
  onChangeLabel: m,
  disabled: e,
  isEmojiMode: l = !1
}) => {
  const { value: t, label: i } = s, [p, n] = b(!1);
  j(() => {
    e && n(!1);
  }, [e]);
  const d = () => {
    e || c(t);
  }, f = (r) => {
    m?.(t, r.native), n(!1);
  };
  return /* @__PURE__ */ o(
    "div",
    {
      "data-testid": `score-edit-option-${t}`,
      className: v(
        "group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border text-center font-medium",
        a && "border-f1-border-selected bg-f1-background-selected-secondary",
        e ? "cursor-default" : "cursor-pointer"
      ),
      onClick: d,
      children: l ? /* @__PURE__ */ u(
        x,
        {
          open: !e && p,
          onOpenChange: e ? void 0 : n,
          children: [
            /* @__PURE__ */ o(P, { asChild: !0, children: /* @__PURE__ */ o(
              w,
              {
                emoji: i,
                label: t.toString(),
                variant: "ghost",
                disabled: e,
                withoutDisabledAppearance: !0,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ o(
              k,
              {
                side: "bottom",
                align: "center",
                className: "w-fit border-none bg-transparent p-2 shadow-none",
                onClick: (r) => {
                  r.preventDefault(), r.stopPropagation();
                },
                children: /* @__PURE__ */ o(
                  g,
                  {
                    data: h,
                    onEmojiSelect: f,
                    locale: "en",
                    icons: "outline",
                    set: "twitter",
                    theme: "light",
                    emojiButtonSize: 32,
                    emojiButtonRadius: "10px",
                    emojiSize: 24,
                    maxFrequentRows: 2,
                    skinTonePosition: "none",
                    previewPosition: "none",
                    searchPosition: "top",
                    navPosition: "top",
                    dynamicWidth: !0
                  }
                )
              }
            )
          ]
        }
      ) : /* @__PURE__ */ o("span", { className: "text-base font-medium", children: i })
    }
  );
};
export {
  z as ScoreEditOption
};
