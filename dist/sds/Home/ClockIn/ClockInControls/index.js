import { jsx as e, jsxs as n, Fragment as r } from "react/jsx-runtime";
import { useState as j } from "react";
import { F0Select as B } from "../../../../components/F0Select/index.js";
import { F0TagRaw as P } from "../../../../components/tags/F0TagRaw/index.js";
import "../../../../icons/app/Menu.js";
import $ from "../../../../icons/app/SolidPause.js";
import R from "../../../../icons/app/SolidPlay.js";
import S from "../../../../icons/app/SolidStop.js";
import { ClockInGraph as X } from "../ClockInGraph/index.js";
import { getInfo as Y } from "./helpers.js";
import Z from "./Selector/index.js";
import { motion as _ } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0Button as a } from "../../../../components/F0Button/F0Button.js";
function de({
  trackedMinutes: m,
  remainingMinutes: u,
  data: f = [],
  labels: i,
  locationId: p,
  locations: s,
  canShowLocation: h = !0,
  locationSelectorDisabled: x = !1,
  onClockIn: v,
  onClockOut: k,
  onBreak: g,
  breakTypes: I,
  onChangeBreakTypeId: C,
  canShowBreakButton: q = !0,
  canSeeGraph: A = !0,
  canSeeRemainingTime: N = !0,
  // onClickProjectSelector,
  onChangeLocationId: G,
  canShowProject: b = !0,
  projectSelectorElement: y,
  breakTypeName: L
}) {
  const { status: o, statusText: V, subtitle: O, statusColor: w } = Y({
    data: f,
    labels: i,
    trackedMinutes: m,
    remainingMinutes: u,
    canSeeRemainingTime: N
  }), z = o === "clocked-out", c = I?.map((t) => ({
    value: t.id,
    label: t.duration ? `${t.name} · ${t.duration}` : t.name,
    description: t.description,
    tag: t.isPaid ? i.paid : i.unpaid
  })) ?? [], [F, d] = j(!1), D = () => {
    if (c.length > 1)
      F || d(!0);
    else {
      const t = c?.[0]?.value;
      g?.(t);
    }
  }, H = (t) => {
    C?.(t), d(!1), g?.(t);
  }, J = z && s.length && !x && h, l = s.find((t) => t.id === p), K = s.map((t) => ({
    value: t.id,
    label: t.name,
    icon: t.icon
  })), Q = o === "break", [U, W] = j(!1);
  return /* @__PURE__ */ e("div", { className: "@container", children: /* @__PURE__ */ n("div", { className: "flex-grow flex-col", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col-reverse items-center gap-2 @xs:flex-row", children: [
      /* @__PURE__ */ n("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ n("div", { className: "flex flex-col items-center space-y-0.5 @xs:items-start", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "line-clamp-1 text-2xl font-semibold text-f1-foreground", children: V }),
            /* @__PURE__ */ n("div", { className: "relative aspect-square h-4", children: [
              /* @__PURE__ */ e(
                _.div,
                {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: w
                  },
                  initial: { scale: 0.5, opacity: 0.6 },
                  animate: { scale: 1.6, opacity: 0 },
                  transition: {
                    duration: 1.5,
                    repeat: 1 / 0,
                    repeatDelay: 1
                  }
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "absolute inset-[3px] rounded-full",
                  style: {
                    backgroundColor: w
                  }
                }
              )
            ] })
          ] }),
          O && /* @__PURE__ */ e("p", { className: "line-clamp-1 text-f1-foreground-secondary", children: O })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex justify-center gap-2 @xs:justify-start", children: [
          o === "clocked-out" && /* @__PURE__ */ e("div", { className: "mr-3 @xs:mr-0", children: /* @__PURE__ */ e(
            a,
            {
              onClick: v,
              label: i.clockIn,
              icon: R
            }
          ) }),
          o === "clocked-in" && /* @__PURE__ */ n(r, { children: [
            q && /* @__PURE__ */ e(r, { children: c.length > 1 && C ? /* @__PURE__ */ e(
              B,
              {
                label: i.break,
                hideLabel: !0,
                value: "",
                options: c,
                onChange: H,
                open: F,
                onOpenChange: d,
                children: /* @__PURE__ */ e("div", { "aria-label": "Select break type", children: /* @__PURE__ */ e(
                  a,
                  {
                    label: i.break,
                    variant: "neutral",
                    icon: $,
                    hideLabel: !0
                  }
                ) })
              }
            ) : /* @__PURE__ */ e(
              a,
              {
                onClick: D,
                label: i.break,
                variant: "neutral",
                icon: $,
                hideLabel: !0
              }
            ) }),
            /* @__PURE__ */ e(
              a,
              {
                onClick: k,
                label: i.clockOut,
                variant: "neutral",
                icon: S
              }
            )
          ] }),
          o === "break" && /* @__PURE__ */ n(r, { children: [
            /* @__PURE__ */ e(
              a,
              {
                onClick: k,
                label: i.clockOut,
                variant: "neutral",
                icon: S,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              a,
              {
                onClick: v,
                label: i.resume,
                icon: R
              }
            )
          ] })
        ] })
      ] }),
      A && /* @__PURE__ */ e(
        X,
        {
          data: f,
          trackedMinutes: m,
          remainingMinutes: N ? u : 0
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start", children: J ? /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e(
        B,
        {
          label: i.selectLocation,
          hideLabel: !0,
          value: p,
          options: K,
          onChange: G,
          open: U,
          onOpenChange: W,
          disabled: x,
          children: /* @__PURE__ */ e("div", { "aria-label": "Select location", children: /* @__PURE__ */ e(
            Z,
            {
              text: l?.name,
              placeholder: i.selectLocation,
              icon: l?.icon
            }
          ) })
        }
      ),
      b && y
    ] }) : /* @__PURE__ */ n(r, { children: [
      h && l && /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e(P, { text: l.name, icon: l.icon }) }),
      b && y,
      Q && L && /* @__PURE__ */ e(P, { text: L })
    ] }) })
  ] }) });
}
export {
  de as ClockInControls
};
