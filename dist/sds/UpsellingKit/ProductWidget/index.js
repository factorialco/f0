import { jsx as l, Fragment as v, jsxs as r } from "react/jsx-runtime";
import { useState as x, useEffect as C } from "react";
import { withDataTestId as N } from "../../../lib/data-testid/index.js";
import w from "../../../icons/app/Cross.js";
import { Card as S, CardContent as F, CardFooter as L } from "../../../ui/Card/Card.js";
import { Label as m } from "../../../ui/label.js";
import { UpsellingButton as M } from "../UpsellingButton/index.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
function k({
  mediaUrl: s,
  title: a,
  description: u,
  onClose: d,
  dismissible: f,
  width: c,
  trackVisibility: t,
  actions: n,
  showConfirmation: p = !0
}) {
  const [o, h] = x(!1), g = () => {
    h(!0), d && d();
  };
  C(() => {
    t && t(!o);
  }, [t, o]);
  const b = s?.includes(".mp4");
  return /* @__PURE__ */ l(v, { children: o ? null : /* @__PURE__ */ r(S, { style: { width: c }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ r(F, { children: [
      f && /* @__PURE__ */ l("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ l(
        i,
        {
          variant: "ghost",
          icon: w,
          size: "sm",
          hideLabel: !0,
          onClick: g,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ l("div", { children: s && (b ? /* @__PURE__ */ l(
          "video",
          {
            src: s,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ l(
          "img",
          {
            src: s,
            alt: a,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ l(m, { className: "text-lg font-medium", children: a }),
          /* @__PURE__ */ l(m, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: u })
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ l(L, { className: "p-3", children: n.map(
      (e) => e.type === "upsell" ? /* @__PURE__ */ l(
        M,
        {
          label: e.label,
          onRequest: e.onClick,
          errorMessage: e.errorMessage,
          successMessage: e.successMessage,
          loadingState: e.loadingState,
          nextSteps: e.nextSteps,
          closeLabel: e.closeLabel,
          showConfirmation: p && e.showConfirmation,
          variant: e.variant
        },
        e.label
      ) : /* @__PURE__ */ l(
        i,
        {
          label: e.label,
          onClick: e.onClick,
          variant: e.variant
        },
        e.label
      )
    ) })
  ] }) });
}
const W = N(k);
export {
  W as ProductWidget
};
