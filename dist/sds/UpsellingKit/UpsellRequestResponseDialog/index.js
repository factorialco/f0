import { jsx as e, jsxs as i, Fragment as f } from "react/jsx-runtime";
import { forwardRef as v, useState as N, useCallback as b } from "react";
import { F0AvatarAlert as D } from "../../../components/avatars/F0AvatarAlert/index.js";
import { withDataTestId as w } from "../../../lib/data-testid/index.js";
import { F0Icon as y } from "../../../components/F0Icon/index.js";
import R from "../../../icons/app/CheckCircle.js";
import C from "../../../icons/app/DottedCircle.js";
import "../../../icons/app/Menu.js";
import { Dialog as F } from "../../../ui/Dialog/dialog.js";
import { Separator as k } from "../../../ui/separator.js";
import { DialogContent as z } from "../../../ui/Dialog/components/DialogContent.js";
import { DialogHeader as I } from "../../../ui/Dialog/components/DialogHeader.js";
import { DialogTitle as j } from "../../../ui/Dialog/components/DialogTitle.js";
import { DialogDescription as q } from "../../../ui/Dialog/components/DialogDescription.js";
import { DialogFooter as A } from "../../../ui/Dialog/components/DialogFooter.js";
import { F0Button as c } from "../../../components/F0Button/F0Button.js";
const B = ({ text: l, isCompleted: o }) => /* @__PURE__ */ i("div", { className: "flex flex-row items-center gap-2", children: [
  /* @__PURE__ */ e(
    y,
    {
      className: o ? "text-f1-icon-positive" : "text-f1-icon-secondary",
      icon: o ? R : C,
      size: "md"
    }
  ),
  /* @__PURE__ */ e(
    "span",
    {
      className: o ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
      children: l
    }
  )
] }), T = ({ title: l, items: o }) => /* @__PURE__ */ i("div", { className: "px-4 pb-2", children: [
  /* @__PURE__ */ e("div", { className: "mb-2 text-sm text-f1-foreground-secondary", children: l }),
  /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: o.map((t) => /* @__PURE__ */ e(
    B,
    {
      text: t.text,
      isCompleted: t.isCompleted ?? !1
    },
    t.text
  )) })
] }), U = ({
  onClose: l,
  success: o,
  successButtonOnClick: t,
  successButtonLabel: n,
  closeLabel: r
}) => {
  const a = o && n && t, m = (s = !1) => /* @__PURE__ */ i(f, { children: [
    /* @__PURE__ */ e(
      c,
      {
        variant: "outline",
        label: r,
        onClick: l,
        size: s ? "lg" : void 0
      }
    ),
    a && /* @__PURE__ */ e(
      c,
      {
        variant: "promote",
        label: n,
        onClick: () => {
          t(), l?.();
        },
        size: s ? "lg" : void 0
      }
    )
  ] });
  return /* @__PURE__ */ i(A, { className: "px-4 pb-4 pt-2 [&_div]:w-full", children: [
    /* @__PURE__ */ e("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3", children: m() }),
    /* @__PURE__ */ e("div", { className: "flex flex-col-reverse gap-2 sm:hidden", children: m(!0) })
  ] });
}, x = v(
  ({
    open: l,
    onClose: o,
    success: t = !0,
    errorMessage: n,
    successMessage: r,
    nextSteps: a,
    closeLabel: m,
    portalContainer: s
  }, g) => {
    const [h, d] = N(!1), p = b(() => {
      d(!0), setTimeout(() => {
        o?.(), d(!1);
      }, 200);
    }, [o]);
    return /* @__PURE__ */ e(
      F,
      {
        open: l && !h,
        onOpenChange: (u) => !u && p?.(),
        children: /* @__PURE__ */ i(
          z,
          {
            ref: g,
            className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
            container: s,
            children: [
              /* @__PURE__ */ i(
                I,
                {
                  className: `flex flex-col items-start gap-4 px-4 ${t ? "pt-5" : "py-5"}`,
                  children: [
                    /* @__PURE__ */ e(D, { type: t ? "positive" : "critical", size: "lg" }),
                    /* @__PURE__ */ i("div", { className: "flex flex-col gap-0.5", children: [
                      /* @__PURE__ */ e(j, { className: "text-xl font-semibold sm:text-lg", children: t ? r?.title : n?.title }),
                      /* @__PURE__ */ e(q, { className: "text-lg sm:text-base", children: t ? r?.description : n?.description })
                    ] })
                  ]
                }
              ),
              t && a && a.items?.length > 0 ? /* @__PURE__ */ i(f, { children: [
                /* @__PURE__ */ e(k, {}),
                /* @__PURE__ */ e(T, { title: a.title, items: a.items })
              ] }) : null,
              /* @__PURE__ */ e(
                U,
                {
                  onClose: p,
                  success: t,
                  successButtonLabel: r.buttonLabel,
                  successButtonOnClick: r.buttonOnClick,
                  closeLabel: m
                }
              )
            ]
          }
        )
      }
    );
  }
);
x.displayName = "UpsellRequestResponseDialog";
const Z = w(
  x
);
export {
  Z as UpsellRequestResponseDialog
};
