import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { ButtonInternal as x } from "../../components/F0Button/internal.js";
import u from "../../icons/app/Check.js";
import g from "../../icons/app/Cross.js";
import "../../icons/app/Menu.js";
import { withDataTestId as p } from "../../lib/data-testid/index.js";
import { experimentalComponent as h } from "../../lib/experimental.js";
import { CustomButton as C } from "./components/CustomButton.js";
import v from "./OneIcon.js";
import { useAiPromotionChat as N, AiPromotionChatStateProvider as P } from "./providers/AiPromotionChatStateProvider.js";
import { SidebarWindow as A } from "./components/ChatWindow.js";
import { ChatTextarea as b } from "./components/ChatTextarea.js";
const w = ({
  enabled: a = !1,
  greeting: m,
  title: s,
  description: t,
  benefits: r,
  actions: i,
  onShow: n,
  onHide: d,
  children: c
}) => /* @__PURE__ */ e(
  P,
  {
    enabled: a,
    greeting: m,
    title: s,
    description: t,
    benefits: r,
    actions: i,
    onShow: n,
    onHide: d,
    children: c
  }
), y = () => {
  const {
    enabled: a,
    greeting: m,
    title: s,
    description: t,
    benefits: r,
    actions: i,
    setOpen: n,
    onHide: d
  } = N(), c = () => {
    n(!1), d?.();
  };
  return a ? /* @__PURE__ */ o(A, { children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ e(
      x,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: g,
        onClick: c
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ e(v, { spin: !0, size: "lg" }),
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: m }),
          /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold text-f1-foreground", children: s })
        ] })
      ] }),
      t && /* @__PURE__ */ e("p", { className: "text-md text-f1-foreground-secondary", children: t }),
      r?.length && /* @__PURE__ */ e("ul", { className: "flex flex-col gap-2", children: r.map((l, f) => /* @__PURE__ */ o("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(u, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ o("span", { className: "text-md text-f1-foreground", children: [
          l.noBoldText,
          " ",
          /* @__PURE__ */ e("strong", { children: l.boldText })
        ] })
      ] }, f)) }),
      i?.length && /* @__PURE__ */ e("div", { className: "flex flex-col gap-3 pt-2", children: i.map((l, f) => /* @__PURE__ */ e(
        C,
        {
          action: l,
          onClose: () => n(!1)
        },
        f
      )) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ e(b, {}) })
  ] }) : null;
}, L = p(
  h("AiPromotionChat", y)
), O = p(
  h("AiPromotionChatProvider", w)
);
export {
  L as AiPromotionChat,
  O as AiPromotionChatProvider
};
