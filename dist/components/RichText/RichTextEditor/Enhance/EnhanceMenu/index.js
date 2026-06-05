import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { Root as w, Trigger as y, Portal as O, Content as I } from "../../../../../node_modules/.pnpm/@radix-ui_react-popover@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.js";
import { useState as b, useRef as S, useEffect as C } from "react";
import { ButtonInternal as k } from "../../../../F0Button/internal.js";
import N from "../../../../../icons/app/Ai.js";
import R from "../../../../../icons/app/ChevronRight.js";
import "../../../../../icons/app/Menu.js";
import { Input as M } from "../../../../../ui/input.js";
import { AnimatePresence as j } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as E } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const c = ({ option: t, onClick: n, isSelected: l = !1 }) => /* @__PURE__ */ r(
  k,
  {
    variant: "ghost",
    pressed: l,
    label: t.label,
    icon: t.subOptions && t.subOptions.length > 0 ? R : void 0,
    onClick: () => n(t),
    className: "w-full [&>div>span>div]:justify-start"
  }
), F = ({
  option: t,
  onSelect: n,
  onSubSelect: l,
  isOpen: s,
  onOpenChange: d
}) => /* @__PURE__ */ h(w, { open: s, onOpenChange: d, children: [
  /* @__PURE__ */ r(y, { asChild: !0, children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    c,
    {
      option: t,
      onClick: () => n(t),
      isSelected: s
    }
  ) }) }),
  /* @__PURE__ */ r(O, { children: /* @__PURE__ */ r(
    I,
    {
      side: "right",
      sideOffset: 8,
      align: "start",
      alignOffset: -4,
      collisionPadding: 10,
      avoidCollisions: !0,
      style: { zIndex: 1e4 },
      children: /* @__PURE__ */ r(j, { children: s && /* @__PURE__ */ r(
        E.div,
        {
          className: "scrollbar-macos max-h-60 max-w-60 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1 drop-shadow-sm",
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.15 },
          children: /* @__PURE__ */ r("div", { className: "flex flex-col", children: t.subOptions?.map((o) => /* @__PURE__ */ r(
            c,
            {
              onClick: l,
              option: o
            },
            o.id
          )) })
        }
      ) })
    }
  ) })
] }), $ = ({
  onSelect: t,
  onClose: n,
  enhancementOptions: l,
  inputPlaceholder: s
}) => {
  const [d, o] = b(null), [i, u] = b(""), a = S(null);
  C(() => {
    a.current && a.current.focus();
  }, []);
  const f = (e) => {
    e.subOptions && e.subOptions.length > 0 ? o((m) => m === e.id ? null : e.id) : (t({ selectedIntent: e.id, customIntent: void 0 }), n());
  }, p = (e) => {
    t({ selectedIntent: e.id, customIntent: void 0 }), n();
  }, g = (e) => {
    e.key === "Enter" && i.trim() && (t({
      selectedIntent: void 0,
      customIntent: i.trim()
    }), u(""), n());
  }, v = l.filter(
    (e) => e.label.toLowerCase().includes(i.toLowerCase())
  );
  return /* @__PURE__ */ h("div", { className: "flex max-w-80 flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-sm", children: [
    /* @__PURE__ */ r("div", { className: "flex w-full flex-row items-center p-2 [&>div]:w-full", children: /* @__PURE__ */ r(
      M,
      {
        icon: N,
        label: s,
        hideLabel: !0,
        type: "text",
        placeholder: s,
        autoFocus: !0,
        value: i,
        onChange: u,
        onKeyDown: g,
        ref: a
      }
    ) }),
    l.length > 0 && /* @__PURE__ */ r("div", { className: "scrollbar-macos flex flex-col overflow-y-auto px-1 pb-1", children: v.map((e) => e.subOptions && e.subOptions.length > 0 ? /* @__PURE__ */ r(
      F,
      {
        option: e,
        onSelect: f,
        onSubSelect: p,
        isOpen: d === e.id,
        onOpenChange: (x) => o(x ? e.id : null)
      },
      e.id
    ) : /* @__PURE__ */ r(
      c,
      {
        onClick: f,
        option: e
      },
      e.id
    )) })
  ] });
};
export {
  $ as AIEnhanceMenu
};
