import { jsx as r, jsxs as h, Fragment as Re } from "react/jsx-runtime";
import { useInsertionEffect as or, useRef as P, useEffect as H, useLayoutEffect as Ze, useState as _, useId as Ve, useCallback as $, useMemo as Y, forwardRef as ye, createContext as We, useContext as _e, createElement as ar, memo as ir } from "react";
import { u as W, a0 as ne, a1 as sr, a2 as Kt, a3 as lr, a4 as Ee, z as cr, a5 as dr, a6 as ur, S as de, a7 as Qt, _ as re, a8 as fr, a9 as mr, m as pe, aa as hr, ab as oe, ac as Jt, ad as me, ae as Te, af as K, ag as Zt, v as et, ah as pr, y as tt, b as we, ai as gr, aj as vr, ak as br, d as en, al as xr, l as Ae, am as yr, an as nt, ao as wr, ap as Nr, aq as Cr, ar as vt, as as Tr, at as Rr, au as tn, av as nn, aw as Ar, ax as Er, ay as kr, az as Fr, aA as Sr, aB as Ir, aC as rn, aD as Lr, aE as Mr, aF as Pr, aG as De, aH as Dr, aI as _r, aJ as Or, aK as Ur, aL as on, aM as an, aN as rt, aO as sn, aP as Br, c as Ke, aQ as $r, aR as bt, aS as ln, aT as zr, aU as Gr, aV as Vr, aW as Oe, aX as Wr, aY as jr, aZ as Hr, a_ as ot, a$ as qr, b0 as Xr, b1 as Yr, b2 as Kr, b3 as Qr, b4 as Jr, w as Zr, t as eo, b5 as cn, b6 as to, b7 as no, b8 as Xe, x as dn, b9 as un, ba as ro, bb as oo, Y as ao, Z as io, o as fn, bc as mn, bd as so, be as xt, bf as hn, bg as pn, bh as lo, bi as co, bj as uo, bk as fo, bl as mo, bm as ho, bn as po, bo as go, n as vo, bp as bo, bq as xo } from "./F0CanvasPanel-DVhw3WsR.js";
import { f as ue, d as y, u as yo } from "./tooltip-DTpaXpXW.js";
import { createPortal as gn } from "react-dom";
import { defaultTranslations as wo } from "./i18n-provider-defaults.js";
import { useTrackVolume as No } from "@livekit/components-react";
function Co(e, t, n) {
  or(() => e.on(t, n), [e, t, n]);
}
const Fs = ["xs", "sm", "md", "lg"], Ss = [
  "inProgress",
  "executing",
  "writing",
  "completed"
], vn = ({
  inProgress: e,
  hasDataToSend: t,
  isPreSending: n,
  recordingStatus: o = "idle",
  size: a = "md"
}) => {
  const i = W();
  return o !== "transcribing" && e ? /* @__PURE__ */ r(
    ne,
    {
      type: "submit",
      variant: "neutral",
      size: a,
      label: i.ai.stopAnswerGeneration,
      icon: sr,
      hideLabel: !0
    }
  ) : /* @__PURE__ */ r(
    ne,
    {
      type: "submit",
      size: a,
      disabled: !t || n,
      variant: "default",
      label: i.ai.sendMessage,
      icon: Kt,
      hideLabel: !0
    }
  );
}, To = ({
  onUploadFiles: e,
  toolbarStart: t,
  isAtMaxFiles: n,
  maxFiles: o,
  acceptValue: a,
  fileInputRef: i,
  handleFileSelect: l,
  inProgress: d,
  hasDataToSend: s,
  isPreSending: u,
  canRecord: c,
  recordingStatus: m = "idle",
  recordingStream: p,
  onStartRecording: f,
  onStopRecording: g,
  onCancelRecording: b,
  showSubmit: v = !0
}) => {
  const T = W();
  return m === "recording" ? /* @__PURE__ */ h("div", { className: "flex shrink-0 items-center gap-3 p-3", children: [
    /* @__PURE__ */ r(
      lr,
      {
        stream: p ?? null,
        className: "min-w-0 flex-1"
      }
    ),
    /* @__PURE__ */ h("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ r(
        ne,
        {
          label: T.ai.cancelRecording,
          hideLabel: !0,
          type: "button",
          icon: Ee,
          variant: "outline",
          size: "md",
          onClick: b
        }
      ),
      /* @__PURE__ */ r(
        ne,
        {
          label: T.ai.stopRecording,
          hideLabel: !0,
          type: "button",
          icon: cr,
          variant: "default",
          size: "md",
          onClick: g
        }
      )
    ] })
  ] }) : /* @__PURE__ */ h("div", { className: "flex shrink-0 items-center justify-between p-3", children: [
    /* @__PURE__ */ h("div", { className: "flex min-w-0 items-center gap-2", children: [
      e && /* @__PURE__ */ h(Re, { children: [
        /* @__PURE__ */ r(
          ne,
          {
            label: T.ai.attachFile,
            hideLabel: !0,
            type: "button",
            icon: dr,
            variant: "outline",
            size: "md",
            disabled: n || m === "transcribing",
            onClick: (E) => {
              E.preventDefault(), i.current?.click();
            }
          }
        ),
        /* @__PURE__ */ r(
          "input",
          {
            ref: i,
            type: "file",
            multiple: o !== 1,
            disabled: n,
            accept: a,
            className: "hidden",
            onChange: l
          }
        )
      ] }),
      t && // Host controls keep their own focus instead of bubbling to the
      // form's click handler, which intentionally focuses the textarea.
      /* @__PURE__ */ r(
        "div",
        {
          className: "min-w-0 cursor-default",
          onClick: (E) => E.stopPropagation(),
          children: t
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { className: "flex shrink-0 items-center gap-2", children: [
      c && /* @__PURE__ */ r(
        ne,
        {
          label: T.ai.recordAudio,
          hideLabel: !0,
          type: "button",
          icon: ur,
          variant: "outline",
          size: "md",
          disabled: d,
          onClick: f,
          loading: m === "transcribing"
        }
      ),
      v && /* @__PURE__ */ r(
        vn,
        {
          inProgress: d,
          hasDataToSend: s,
          isPreSending: u,
          recordingStatus: m
        }
      )
    ] })
  ] });
}, Ro = ({
  attachedFiles: e,
  isUploading: t,
  onRemove: n,
  removeLabel: o
}) => e.length === 0 ? null : /* @__PURE__ */ r(
  "div",
  {
    "aria-live": "polite",
    "aria-busy": t,
    className: "flex flex-wrap gap-1 px-1 pt-1",
    children: e.map(
      (a) => a.status === "uploading" ? /* @__PURE__ */ r(de, { className: "h-9 w-36 rounded-[10px]" }, a.id) : a.status === "error" ? /* @__PURE__ */ r(
        Ao,
        {
          att: a,
          onRemove: n,
          removeLabel: o
        },
        a.id
      ) : /* @__PURE__ */ r(
        Qt,
        {
          file: a.file,
          size: "md",
          actions: [
            {
              label: o,
              icon: Ee,
              onClick: () => n(a.id)
            }
          ]
        },
        a.id
      )
    )
  }
);
function Ao({
  att: e,
  onRemove: t,
  removeLabel: n
}) {
  const o = /* @__PURE__ */ h("div", { className: "flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5", children: [
    /* @__PURE__ */ r(re, { icon: fr, size: "md", color: "critical" }),
    /* @__PURE__ */ r("span", { className: "max-w-40 truncate text-sm font-medium text-f1-foreground-critical", children: e.file.name }),
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        "aria-label": n,
        className: ue(
          "rounded-full text-f1-foreground-critical hover:text-f1-foreground-critical/80"
        ),
        onClick: () => t(e.id),
        children: /* @__PURE__ */ r(re, { icon: Ee, size: "md", "aria-hidden": "true" })
      }
    )
  ] });
  return e.errorMessage ? /* @__PURE__ */ r(mr, { label: e.errorMessage, children: o }) : o;
}
const Eo = {
  soft: {
    text: "",
    bg: "bg-f1-background-info",
    fontColor: "text-f1-foreground-info",
    formBorder: "[&_form]:border-f1-border-info"
  }
}, ko = ({
  creditWarning: e,
  children: t
}) => {
  const n = W();
  if (!e) return t;
  const o = {
    ...Eo[e.level],
    text: n.ai.creditWarning.soft
  };
  return /* @__PURE__ */ h(
    "div",
    {
      className: y("flex flex-col rounded-xl", o.bg, o.formBorder),
      children: [
        /* @__PURE__ */ h("div", { className: "flex items-center justify-between gap-2 px-4 pb-1.5 pt-2", children: [
          /* @__PURE__ */ r(
            "p",
            {
              className: y("min-w-0 flex-1 text-sm font-medium", o.fontColor),
              children: o.text
            }
          ),
          /* @__PURE__ */ h("div", { className: "flex shrink-0 items-center gap-1", children: [
            e.onGetCredits && /* @__PURE__ */ r(
              pe,
              {
                label: n.ai.creditWarning.getCredits ?? "",
                size: "sm",
                variant: "outline",
                tooltip: n.ai.creditWarning.getCredits ?? "",
                onClick: e.onGetCredits
              }
            ),
            e.onDismiss && /* @__PURE__ */ r(
              pe,
              {
                label: n.ai.creditWarning.dismiss ?? "",
                size: "sm",
                variant: "ghost",
                icon: Ee,
                hideLabel: !0,
                onClick: e.onDismiss
              }
            )
          ] })
        ] }),
        t
      ]
    }
  );
};
function Fo({
  isOpen: e,
  results: t,
  isLoading: n,
  selectedIndex: o,
  position: a,
  onSelect: i
}) {
  const l = P(null), d = P(null);
  H(() => {
    d.current?.scrollIntoView({ block: "nearest" });
  }, [o]), Ze(() => {
    const c = l.current, m = c?.offsetParent;
    if (!c || !m) return;
    const p = c.offsetLeft + c.offsetWidth - m.clientWidth;
    p > 0 && (c.style.left = `${Math.max(0, c.offsetLeft - p)}px`);
  }, [a]);
  const s = n && t.length === 0, u = !n && t.length === 0;
  return !e || u ? null : /* @__PURE__ */ r(
    "div",
    {
      ref: l,
      role: "listbox",
      style: {
        position: "absolute",
        bottom: a ? `${a.bottom}px` : "100%",
        left: a ? `${a.left}px` : 0
      },
      className: y(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      ),
      children: s ? Array.from({ length: 3 }, (c, m) => /* @__PURE__ */ h(
        "div",
        {
          className: "flex items-center gap-2 p-2",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ r(de, { className: "size-5 shrink-0 rounded-full" }),
            /* @__PURE__ */ r(
              de,
              {
                className: y("h-4 rounded", m === 1 ? "w-24" : "w-32")
              }
            )
          ]
        },
        m
      )) : t.map((c, m) => {
        const p = m === o, f = `${c.firstName} ${c.lastName}`.trim();
        return /* @__PURE__ */ h(
          "div",
          {
            ref: p ? d : void 0,
            role: "option",
            "aria-selected": p,
            className: y(
              "flex cursor-pointer items-center gap-2 p-2 rounded",
              "transition-colors",
              p ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"
            ),
            onMouseDown: (g) => {
              g.preventDefault(), i(c);
            },
            onMouseEnter: () => {
            },
            children: [
              /* @__PURE__ */ r(
                hr,
                {
                  firstName: c.firstName,
                  lastName: c.lastName,
                  src: c.avatarUrl,
                  size: "xsmall"
                }
              ),
              /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ r(oe, { className: "text-base font-medium text-f1-foreground", children: f }) })
            ]
          },
          String(c.id)
        );
      })
    }
  );
}
const So = ({
  quote: e,
  onRemove: t
}) => {
  const n = W();
  return /* @__PURE__ */ r("div", { className: "p-1", children: /* @__PURE__ */ h(
    "div",
    {
      className: y(
        "flex items-start gap-2 justify-center",
        "rounded-[10px] bg-f1-background-hover pl-2 py-1.5 pr-1.5"
      ),
      children: [
        /* @__PURE__ */ r("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ r(re, { icon: Jt, size: "md", color: "default" }) }),
        /* @__PURE__ */ r(
          oe,
          {
            className: "h-full flex-1 py-0.5 text-[12px] font-medium text-f1-foreground-secondary",
            lines: 1,
            children: e.text
          }
        ),
        /* @__PURE__ */ r(
          ne,
          {
            variant: "ghost",
            label: n.ai.removeQuote,
            onClick: t,
            icon: Ee,
            hideLabel: !0,
            size: "sm"
          }
        )
      ]
    }
  ) });
}, Io = ({
  placeholders: e,
  defaultPlaceholder: t,
  inputValue: n,
  inProgress: o
}) => {
  const a = me(), [i, l] = _(""), [d, s] = _(0), [u, c] = _(!1), m = P(null), p = P(null), f = P(null), g = e[d] ?? t;
  return H(() => {
    const b = () => {
      p.current && (clearInterval(p.current), p.current = null), f.current && (clearInterval(f.current), f.current = null), m.current && (clearTimeout(m.current), m.current = null);
    };
    if (n.length > 0 || o) {
      c(!1), l(""), b();
      return;
    }
    if (a)
      return c(!1), l(g), b(), m.current = setTimeout(() => {
        const A = (d + 1) % Math.max(e.length, 1);
        s(A);
      }, 4e3), () => {
        b();
      };
    c(!0), l("");
    let v = 0;
    const T = 50, E = 30, L = 2e3, k = 1e3;
    return p.current = setInterval(() => {
      v < g.length ? (l(g.slice(0, v + 1)), v++) : (p.current && (clearInterval(p.current), p.current = null), m.current = setTimeout(() => {
        f.current = setInterval(() => {
          v > 0 ? (v--, l(g.slice(0, v))) : (f.current && (clearInterval(f.current), f.current = null), m.current = setTimeout(() => {
            const A = (d + 1) % Math.max(e.length, 1);
            s(A);
          }, k));
        }, E);
      }, L));
    }, T), () => {
      b();
    };
  }, [
    n,
    o,
    g,
    d,
    e.length,
    a
  ]), n.length > 0 || o ? null : /* @__PURE__ */ r(Te, { children: /* @__PURE__ */ r(
    K.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: a ? 0 : 0.4 },
      className: y(
        "col-start-1 row-start-1",
        "pointer-events-none",
        "text-f1-foreground-secondary",
        "text-[16px] sm:text-[14px] leading-[20px] font-normal",
        "pt-3 px-3"
      ),
      children: /* @__PURE__ */ h(
        "div",
        {
          className: y(
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "whitespace-pre-wrap break-words overflow-visible"
          ),
          children: [
            i,
            u && !a && /* @__PURE__ */ r("span", { className: "f0-chat-cursor-blink", children: "|" })
          ]
        }
      )
    }
  ) });
}, Lo = ({
  textareaRef: e,
  highlightRef: t,
  inputValue: n,
  onInputChange: o,
  onKeyDown: a,
  onCursorUpdate: i,
  onScroll: l,
  highlightSegments: d,
  hasOverlay: s,
  multiplePlaceholders: u,
  placeholders: c,
  resolvedDefaultPlaceholder: m,
  inProgress: p
}) => /* @__PURE__ */ h(
  "div",
  {
    className: y("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-0"),
    children: [
      /* @__PURE__ */ r(
        "div",
        {
          "aria-hidden": !0,
          className: y(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3"
          ),
          children: n.endsWith(`
`) ? n + "_" : n
        }
      ),
      s && /* @__PURE__ */ r(
        "div",
        {
          ref: t,
          "aria-hidden": !0,
          className: y(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ),
          children: d.map(
            (f, g) => f.type === "mention" ? /* @__PURE__ */ r(
              "span",
              {
                className: "font-medium text-f1-foreground-secondary",
                children: f.text
              },
              g
            ) : f.type === "ghost" ? /* @__PURE__ */ r("span", { className: "text-f1-foreground-secondary opacity-50", children: f.text }, g) : /* @__PURE__ */ r("span", { children: f.text }, g)
          )
        }
      ),
      !n && !u && /* @__PURE__ */ r(
        "p",
        {
          className: y(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "text-f1-foreground-secondary",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "pt-3 px-3",
            "overflow-hidden text-ellipsis whitespace-nowrap"
          ),
          children: c.length === 1 ? c[0] : m
        }
      ),
      /* @__PURE__ */ r(
        "textarea",
        {
          autoFocus: !1,
          name: "one-ai-input",
          rows: 1,
          ref: e,
          value: n,
          onChange: (f) => {
            o(f.target.value, f.target.selectionStart ?? 0);
          },
          onKeyDown: a,
          onKeyUp: i,
          onClick: i,
          onSelect: i,
          onScroll: l,
          className: y(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[240px] h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "mt-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            s ? "text-transparent caret-f1-foreground" : "text-f1-foreground",
            !s && (n || !u ? "caret-f1-foreground" : "caret-transparent")
          )
        }
      ),
      u && /* @__PURE__ */ r(
        Io,
        {
          placeholders: c,
          defaultPlaceholder: m,
          inputValue: n,
          inProgress: p ?? !1
        }
      )
    ]
  }
), Mo = 4, Po = ({
  cards: e
}) => e.length === 0 ? null : /* @__PURE__ */ r("div", { className: "grid w-full grid-cols-2 gap-3", children: e.slice(0, Mo).map((t) => /* @__PURE__ */ r(
  Zt,
  {
    avatar: { type: "icon", icon: t.icon },
    title: t.title,
    description: t.description,
    onClick: t.onClick
  },
  t.id
)) }), Do = 5, _o = 46, Oo = 400, Uo = 16, Bo = 16;
function $o(e, t = Do) {
  return e.length <= t ? e : [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
const zo = ({
  suggestions: e,
  onItemClick: t,
  onItemHover: n,
  side: o = "top",
  reserveTwoRows: a = !0
}) => {
  const [i, l] = _(null), d = P(null), s = P(null), u = P(!1), c = Ve(), m = Ve(), p = i !== null ? e[i] : null;
  return e.length === 0 ? null : /* @__PURE__ */ h(
    et,
    {
      open: p !== null,
      onOpenChange: (f) => {
        f || (l(null), n?.(null));
      },
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: y(
              "flex w-full items-end",
              a && "min-h-[72px]"
            ),
            children: /* @__PURE__ */ r(pr, { asChild: !0, children: /* @__PURE__ */ r(
              "div",
              {
                ref: d,
                className: "flex w-full flex-wrap items-center gap-2",
                children: e.map((f, g) => /* @__PURE__ */ r(
                  ne,
                  {
                    type: "button",
                    variant: "outline",
                    label: f.label,
                    icon: f.icon,
                    pressed: i === g,
                    "aria-haspopup": "dialog",
                    "aria-expanded": i === g,
                    "aria-controls": i === g ? c : void 0,
                    onClick: (b) => {
                      s.current = b.currentTarget, u.current = !1, l((v) => v === g ? null : g), n?.(null);
                    }
                  },
                  `${f.label}-${g}`
                ))
              }
            ) })
          }
        ),
        p && /* @__PURE__ */ h(
          tt,
          {
            side: o,
            align: "start",
            sideOffset: 8,
            id: c,
            "aria-labelledby": m,
            onOpenAutoFocus: (f) => f.preventDefault(),
            onCloseAutoFocus: (f) => {
              f.preventDefault(), u.current && s.current?.focus(), u.current = !1;
            },
            onEscapeKeyDown: () => {
              u.current = !0;
            },
            onPointerDownOutside: (f) => {
              const g = f.target;
              g && d.current?.contains(g) ? f.preventDefault() : u.current = !1;
            },
            className: y(
              "flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2",
              "w-[var(--radix-popover-trigger-width)]"
            ),
            children: [
              /* @__PURE__ */ h(
                "div",
                {
                  id: m,
                  className: "flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary",
                  children: [
                    /* @__PURE__ */ r(re, { "aria-hidden": !0, icon: p.icon, size: "sm" }),
                    /* @__PURE__ */ r("span", { children: p.label })
                  ]
                }
              ),
              /* @__PURE__ */ r("div", { className: "flex flex-col", children: $o(p.items).map((f, g) => /* @__PURE__ */ r(
                Go,
                {
                  item: f,
                  onHover: n,
                  onSelect: (b) => {
                    t(f, p), u.current = document.activeElement === b.currentTarget, l(null), n?.(null);
                  }
                },
                g
              )) })
            ]
          }
        )
      ]
    }
  );
};
function Go({ item: e, onSelect: t, onHover: n }) {
  const o = P(null), a = P(null), i = P(null), l = me(), d = $(() => {
    i.current != null && (clearTimeout(i.current), i.current = null);
    const m = a.current, p = o.current;
    m && (m.style.transition = "none", m.style.transform = "translateX(0)", m.style.overflow = ""), p && (p.style.removeProperty("mask-image"), p.style.removeProperty("-webkit-mask-image"));
  }, []), s = $(() => {
    l || (i.current = window.setTimeout(() => {
      const m = a.current, p = o.current;
      if (!m || !p) return;
      const f = m.scrollWidth - m.clientWidth;
      if (f <= 0) return;
      const g = f + Uo, b = g / _o * 1e3;
      m.style.overflow = "visible";
      const v = `linear-gradient(90deg, transparent 0, #000 ${Bo}px)`;
      p.style.setProperty("mask-image", v), p.style.setProperty("-webkit-mask-image", v), m.style.transition = `transform ${b}ms linear`, m.style.transform = `translateX(-${g}px)`;
    }, Oo));
  }, [l]), u = $(() => {
    n?.(e), s();
  }, [e, n, s]), c = $(() => {
    n?.(null), d();
  }, [n, d]);
  return H(
    () => () => {
      i.current != null && clearTimeout(i.current);
    },
    []
  ), /* @__PURE__ */ h(
    "button",
    {
      type: "button",
      onClick: t,
      onMouseEnter: u,
      onMouseLeave: c,
      onFocus: u,
      onBlur: c,
      className: y(
        "group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover",
        ue()
      ),
      children: [
        /* @__PURE__ */ r("span", { ref: o, className: "min-w-0 flex-1 overflow-hidden", children: /* @__PURE__ */ r("span", { ref: a, className: "block w-full truncate", children: e.title }) }),
        /* @__PURE__ */ r(
          "span",
          {
            "aria-hidden": !0,
            className: "flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
            children: /* @__PURE__ */ r(re, { icon: Kt, size: "sm" })
          }
        )
      ]
    }
  );
}
function yt(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Vo(e, t, n) {
  const o = n?.cursorPosition ?? e.length, a = n?.inlineCompletion ?? null, i = [];
  for (const c of t) {
    const m = `@${c.name}`;
    let p = 0;
    for (; ; ) {
      const f = e.indexOf(m, p);
      if (f === -1) break;
      i.push({ start: f, end: f + m.length }), p = f + m.length;
    }
  }
  i.sort((c, m) => c.start - m.start);
  const l = [];
  let d = 0, s = !1;
  const u = (c) => {
    if (!a || s || o < d || o > c) {
      c > d && l.push({ type: "text", text: e.slice(d, c) }), d = c;
      return;
    }
    o > d && l.push({ type: "text", text: e.slice(d, o) }), l.push({ type: "ghost", text: a }), s = !0, o < c && l.push({ type: "text", text: e.slice(o, c) }), d = c;
  };
  for (const c of i)
    u(c.start), l.push({ type: "mention", text: e.slice(c.start, c.end) }), d = c.end;
  return u(e.length), !s && a && o >= d && l.push({ type: "ghost", text: a }), l.length === 0 ? [{ type: "text", text: e }] : l;
}
function Wo(e, t) {
  if (t === "*/*") return !0;
  if (t.endsWith("/*")) {
    const n = t.slice(0, t.indexOf("/"));
    return e.startsWith(n + "/");
  }
  return e === t;
}
function jo(e, t) {
  if (!t) return e;
  const n = Array.isArray(t) ? t : [t];
  return n.length === 0 ? e : e.filter(
    (o) => n.some((a) => Wo(o.type, a))
  );
}
const Ho = 4e3;
function qo(e) {
  const [t, n] = _([]), [o, a] = _(null), i = P(
    null
  ), l = P(null), d = W(), s = e?.onUploadFiles, u = e?.allowedMimeTypes, c = e?.maxFiles, m = Y(() => {
    if (u)
      return Array.isArray(u) ? u.join(",") : u;
  }, [u]), p = c !== void 0 && t.length >= c, f = P(0);
  H(() => {
    f.current = t.length;
  }, [t]);
  const g = $((L) => {
    i.current && clearTimeout(i.current), a(L), i.current = setTimeout(() => {
      a(null), i.current = null;
    }, Ho);
  }, []);
  H(
    () => () => {
      i.current && clearTimeout(i.current);
    },
    []
  );
  const b = $(
    async (L) => {
      if (L.length === 0 || !s) return;
      const k = jo(L, u);
      if (k.length === 0) return;
      if (c !== void 0 && f.current + k.length > c) {
        g(
          d.ai.tooManyFilesError.replace(
            "{{maxFiles}}",
            String(c)
          )
        );
        return;
      }
      const A = k.map((I) => ({
        id: crypto.randomUUID(),
        file: I,
        status: "uploading"
      })), x = A.map((I) => I.id);
      n((I) => [...I, ...A]);
      const F = (I) => n(
        (O) => O.map(
          (R) => x.includes(R.id) ? { ...R, status: "error", errorMessage: I } : R
        )
      );
      try {
        const I = await s(k);
        if (!Array.isArray(I) || I.length !== k.length) {
          F(d.ai.fileUploadError);
          return;
        }
        n(
          (O) => O.map((R) => {
            const S = A.findIndex((D) => D.id === R.id);
            return S === -1 ? R : I[S] ? {
              ...R,
              status: "uploaded",
              uploadedFile: I[S]
            } : {
              ...R,
              status: "error",
              errorMessage: d.ai.fileUploadError
            };
          })
        );
      } catch (I) {
        const O = I instanceof Error && I.message ? I.message : d.ai.fileUploadError;
        F(O);
      }
    },
    [
      s,
      c,
      u,
      d.ai.tooManyFilesError,
      d.ai.fileUploadError,
      g
    ]
  ), v = $(
    async (L) => {
      await b(Array.from(L.target.files ?? [])), L.target.value = "";
    },
    [b]
  ), T = $((L) => {
    n((k) => k.filter((A) => A.id !== L));
  }, []), E = $(() => {
    n([]);
  }, []);
  return {
    attachedFiles: t,
    fileInputRef: l,
    onUploadFiles: s,
    acceptValue: m,
    isAtMaxFiles: p,
    maxFiles: c,
    processFiles: b,
    handleFileSelect: v,
    handleRemoveFile: T,
    clearFiles: E,
    transientError: o,
    showTransientError: g
  };
}
function Xo(e, t, n) {
  const a = e.slice(0, t).lastIndexOf("@");
  if (a === -1) return null;
  if (a > 0) {
    const l = e[a - 1];
    if (l !== " " && l !== `
` && l !== "	")
      return null;
  }
  const i = e.slice(a + 1, t);
  if (i.includes(`
`)) return null;
  for (const l of n) {
    const d = e.slice(a + 1), s = a + 1 + l.name.length;
    if (d.startsWith(l.name) && t >= s) {
      const u = e[s];
      if (u === " " || u === `
` || u === "	")
        return null;
    }
  }
  return { atIndex: a, query: i };
}
const Yo = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize",
  "whiteSpace",
  "wordWrap",
  "wordBreak"
];
function Ko(e, t) {
  const n = document.createElement("div"), o = n.style, a = window.getComputedStyle(e);
  o.whiteSpace = "pre-wrap", o.wordWrap = "break-word", o.position = "absolute", o.visibility = "hidden", o.overflow = "hidden";
  for (const s of Yo)
    o.setProperty(s, a.getPropertyValue(s));
  n.textContent = e.value.substring(0, t);
  const i = document.createElement("span");
  i.textContent = e.value.substring(t) || "​", n.appendChild(i), document.body.appendChild(n);
  const l = i.offsetLeft, d = i.offsetTop - e.scrollTop;
  return document.body.removeChild(n), { left: l, top: d };
}
const Qo = 250;
function Jo({
  inputValue: e,
  setInputValue: t,
  cursorPosition: n,
  searchPersons: o,
  textareaRef: a
}) {
  const [i, l] = _(!1), [d, s] = _(""), [u, c] = _([]), [m, p] = _(!1), [f, g] = _(0), [b, v] = _([]), T = P(-1), E = P(null), L = P(0), k = P(-1);
  H(() => {
    if (!o) {
      l(!1);
      return;
    }
    const S = Xo(e, n, b);
    if (!S) {
      l(!1), s(""), c([]), g(0), T.current = -1, k.current = -1;
      return;
    }
    if (S.atIndex === k.current)
      return;
    T.current = S.atIndex, s(S.query), l(!0), g(0), p(!0), E.current && clearTimeout(E.current);
    const D = ++L.current;
    return E.current = setTimeout(() => {
      o(S.query).then((V) => {
        D === L.current && (c(V), g(0), V.length === 0 && S.query.length > 0 && (k.current = S.atIndex, l(!1)));
      }).catch(() => {
        D === L.current && c([]);
      }).finally(() => {
        D === L.current && p(!1);
      });
    }, Qo), () => {
      E.current && clearTimeout(E.current);
    };
  }, [e, n, o, b]);
  const A = $(() => {
    l(!1), s(""), c([]), g(0), T.current = -1;
  }, []), x = $(
    (S) => {
      const D = T.current;
      if (D === -1) return;
      const V = `${S.firstName} ${S.lastName}`.trim(), z = String(S.id), j = e.slice(0, D), J = e.slice(n), ee = `@${V} `, X = j + ee + J, Q = j.length + ee.length;
      t(X), v((te) => [...te.filter((ie) => !(ie.id === z && ie.name === V)), { id: z, name: V }]), A(), requestAnimationFrame(() => {
        const te = a.current;
        te && (te.focus(), te.setSelectionRange(Q, Q));
      });
    },
    [e, n, t, a, A]
  ), F = $(
    (S) => {
      if (!i) return !1;
      if (S.key === "Escape")
        return S.preventDefault(), A(), !0;
      if (u.length === 0) return !1;
      switch (S.key) {
        case "ArrowDown":
          return S.preventDefault(), g((D) => (D + 1) % u.length), !0;
        case "ArrowUp":
          return S.preventDefault(), g(
            (D) => (D + u.length - 1) % u.length
          ), !0;
        case "Tab": {
          const D = u[f];
          if (D) {
            const V = `${D.firstName} ${D.lastName}`.trim();
            if (d.length === 0 || V.toLowerCase().startsWith(d.toLowerCase()))
              return S.preventDefault(), x(D), !0;
          }
          return !1;
        }
        case "Enter":
          return S.preventDefault(), u[f] && x(u[f]), !0;
        default:
          return !1;
      }
    },
    [i, u, f, d, x, A]
  ), I = $(
    (S) => {
      if (b.length === 0) return S;
      let D = S;
      const V = [...b].sort((z, j) => j.name.length - z.name.length);
      for (const z of V) {
        const j = `@${z.name}`, J = `<entity-ref type="person" id="${yt(z.id)}">${yt(z.name)}</entity-ref>`;
        for (; D.includes(j); )
          D = D.replace(j, J);
      }
      return D;
    },
    [b]
  );
  H(() => {
    v(
      (S) => S.filter((D) => {
        const V = `@${D.name}`, z = e.indexOf(V);
        if (z === -1) return !1;
        const j = e[z + V.length];
        return j === " " || j === `
` || j === "	";
      })
    );
  }, [e]);
  const O = Y(() => {
    if (!i || T.current === -1) return null;
    const S = a.current;
    if (!S) return null;
    const D = Ko(S, T.current), V = S.offsetLeft + D.left, j = (S.offsetParent ? S.offsetParent.offsetHeight : 0) - (S.offsetTop + D.top);
    return { left: V, bottom: j };
  }, [i, e, n, a]), R = Y(() => {
    if (!i || u.length === 0) return null;
    const S = u[f];
    if (!S) return null;
    const D = `${S.firstName} ${S.lastName}`.trim();
    return d.length === 0 ? D : D.toLowerCase().startsWith(d.toLowerCase()) ? D.slice(d.length) : null;
  }, [i, u, f, d]);
  return {
    isOpen: i,
    query: d,
    results: u,
    isLoading: m,
    selectedIndex: f,
    mentions: b,
    popoverPosition: O,
    inlineCompletion: R,
    handleKeyDown: F,
    selectPerson: x,
    transformMentions: I,
    close: A
  };
}
const Zo = /[\\`*_{}[\]()#+\-.!|~>]/g, ea = (e) => e.split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g).map((t, n) => n % 2 === 1 ? t : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(Zo, "\\$&")).join(""), Is = ({
  onSubmit: e,
  onStop: t,
  inProgress: n,
  onBeforeSubmit: o,
  placeholders: a,
  creditWarning: i,
  clarifyingUI: l,
  pendingContext: d = null,
  onPendingContextChange: s,
  pendingQuote: u = null,
  onPendingQuoteChange: c,
  fileAttachments: m,
  toolbarStart: p,
  onTranscribe: f,
  searchPersons: g,
  onProcessFilesRef: b,
  disclaimer: v,
  footer: T,
  isWelcomeScreen: E = !1,
  fullscreen: L = !1,
  welcomeScreenSuggestions: k,
  onSuggestionClick: A,
  welcomeScreenSuggestionsPlacement: x = "above",
  welcomeScreenCards: F,
  padding: I = "default",
  ref: O
}) => {
  const R = W(), S = me(), [D, V] = _(""), [z, j] = _(0), [J, ee] = _(!1), [X, Q] = _(!1), [te, ge] = _(null), ie = P(null), B = P(null), se = P(null), Z = l != null, { tracking: ce } = we(), Se = $(
    (q, be) => {
      ce?.onWelcomeSuggestionClick?.({
        item: q,
        group: be,
        prompt: q.prompt || q.title
      }), A?.(q, be);
    },
    [ce, A]
  ), {
    attachedFiles: Ne,
    fileInputRef: w,
    onUploadFiles: N,
    acceptValue: C,
    isAtMaxFiles: U,
    maxFiles: M,
    processFiles: G,
    handleFileSelect: le,
    handleRemoveFile: he,
    clearFiles: Ce,
    transientError: ke,
    showTransientError: Ie
  } = qo(m), ae = Jo({
    inputValue: D,
    setInputValue: V,
    cursorPosition: z,
    searchPersons: g,
    textareaRef: B
  }), it = P(""), st = $((q) => {
    const be = it.current, qe = be && !/\s$/.test(be) ? " " : "", $e = `${be}${qe}${q}`;
    V($e), j($e.length);
  }, []), Vn = {
    "permission-denied": R.ai.micPermissionDenied,
    "device-error": R.ai.micError,
    "transcription-failed": R.ai.transcriptionError
  }, ve = gr({
    onTranscribe: f,
    onPartial: st,
    onFinal: (q) => {
      st(q), B.current?.focus();
    },
    onError: (q) => Ie(Vn[q])
  }), lt = !!f && ve.isSupported, Wn = $(() => {
    ce?.onDictationStart?.(), it.current = D, ve.start();
  }, [D, ve, ce]), jn = $(() => {
    ce?.onDictationCancel?.(), ve.cancel();
  }, [ve, ce]);
  H(() => {
    typeof window < "u" && window.location.hash.length === 0 && B.current?.focus();
  }, []), H(() => {
    if (b)
      return b((q) => {
        G(q);
      }), () => {
        b(null);
      };
  }, [b, G]);
  const je = ve.status === "recording", Hn = je ? R.ai.listening : R.ai.inputPlaceholder, ct = Ne.filter((q) => q.status === "uploaded"), Ue = Ne.some((q) => q.status === "uploading"), dt = Ne.some((q) => q.status === "error"), He = D.trim().length > 0 || ct.length > 0;
  H(() => {
    if (!(!X || Ue)) {
      if (Q(!1), dt) {
        Ie(R.ai.fileUploadBlockedSubmit);
        return;
      }
      ie.current?.requestSubmit();
    }
  }, [
    X,
    Ue,
    dt,
    Ie,
    R.ai.fileUploadBlockedSubmit
  ]);
  const qn = async (q) => {
    if (q.preventDefault(), !Z) {
      if (ae.close(), n)
        t?.();
      else if (He && !J) {
        if (Ue) {
          Q(!0), B.current?.focus();
          return;
        }
        if (o) {
          ee(!0);
          try {
            if (await o() === !1) {
              B.current?.focus();
              return;
            }
          } finally {
            ee(!1);
          }
        }
        const be = ae.transformMentions(D.trim()), qe = ea(be), $e = ct.flatMap(
          (gt) => gt.uploadedFile ? [gt.uploadedFile] : []
        ), ht = d, pt = u;
        ht && s?.(null), pt && c?.(null), await e({
          text: qe,
          files: $e,
          context: ht,
          quote: pt
        }), V(""), Ce();
      }
      B.current?.focus();
    }
  }, Xn = (q) => {
    Z || ae.handleKeyDown(q) || q.key === "Enter" && !q.shiftKey && (q.preventDefault(), n || ie.current?.requestSubmit());
  }, Yn = () => {
    j(B.current?.selectionStart ?? 0);
  }, Kn = () => {
    se.current && B.current && (se.current.scrollTop = B.current.scrollTop);
  }, ut = te ? te.prompt ?? te.title : null, ft = je ? [R.ai.listening] : ut ? [ut] : a ?? [], Qn = ft.length > 1, Jn = Y(() => Vo(D, ae.mentions, {
    cursorPosition: z,
    inlineCompletion: ae.inlineCompletion
  }), [D, ae.mentions, z, ae.inlineCompletion]), Zn = ae.mentions.length > 0 || ae.inlineCompletion !== null, Le = x === "inside", Be = E && !!k && k.length > 0 && !!A ? /* @__PURE__ */ r(
    zo,
    {
      suggestions: k,
      onItemClick: Se,
      onItemHover: ge,
      side: Le ? "bottom" : "top",
      reserveTwoRows: !Le
    }
  ) : null, Me = Le, er = !Me || (!!N || !!p || lt), tr = Me && !je, nr = E && L && !!F && F.length > 0, mt = L && E, { motionProps: rr } = vr(
    E,
    160,
    0.5
  );
  return /* @__PURE__ */ h(
    K.div,
    {
      ref: O,
      className: y(
        "flex flex-col items-center gap-2",
        // The chat window's gutter. `padding="none"` hands it to the host —
        // see the prop's doc for what the host takes on with it.
        I === "default" && "px-4 pb-3 pt-2",
        mt && "min-h-0 flex-1 justify-start -mt-20"
      ),
      ...L ? rr : {},
      children: [
        /* @__PURE__ */ h("div", { className: "flex w-full max-w-content flex-col gap-2", children: [
          Be && !Le && /* @__PURE__ */ r("div", { children: Be }),
          /* @__PURE__ */ r(ko, { creditWarning: i, children: /* @__PURE__ */ h(
            K.form,
            {
              "aria-busy": n,
              ref: ie,
              className: y(
                "relative isolate z-20",
                "flex flex-col items-stretch md:gap-3 gap-2",
                "rounded-lg border border-solid border-f1-border has-[textarea:focus]:border-f1-background-tertiary",
                "transition-all hover:cursor-text",
                "p-0",
                "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
                "before:rounded-[inherit] before:bg-f1-background before:content-['']",
                "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
                "after:rounded-md after:blur-[6px] after:content-['']",
                "after:scale-90 after:opacity-0",
                "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
                "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
                "after:transition-all after:delay-200 after:duration-300",
                "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
                Z && "after:scale-100 after:opacity-100 border-f1-background-tertiary"
              ),
              animate: {
                "--gradient-angle": ["0deg", "360deg"]
              },
              transition: {
                duration: 6,
                ease: "linear",
                repeat: 1 / 0
              },
              style: {
                "--gradient-angle": "180deg"
              },
              onClick: () => {
                Z || B.current?.focus();
              },
              onSubmit: qn,
              children: [
                /* @__PURE__ */ r(
                  Fo,
                  {
                    isOpen: ae.isOpen,
                    results: ae.results,
                    isLoading: ae.isLoading,
                    selectedIndex: ae.selectedIndex,
                    position: ae.popoverPosition,
                    onSelect: ae.selectPerson
                  }
                ),
                /* @__PURE__ */ r(Te, { initial: !1, children: Z ? /* @__PURE__ */ r(
                  K.div,
                  {
                    className: "overflow-hidden",
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: S ? 0 : 0.22,
                        ease: [0.4, 0, 1, 1]
                      }
                    },
                    transition: {
                      duration: S ? 0 : 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    children: l
                  },
                  "clarifying"
                ) : /* @__PURE__ */ h(
                  K.div,
                  {
                    className: "overflow-hidden",
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: S ? 0 : 0.15,
                        ease: [0.55, 0, 1, 0.45]
                      }
                    },
                    transition: {
                      duration: S ? 0 : 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    children: [
                      u && /* @__PURE__ */ r(
                        So,
                        {
                          quote: u,
                          onRemove: () => c?.(null)
                        }
                      ),
                      /* @__PURE__ */ r(Te, { initial: !1, children: ke && /* @__PURE__ */ r(
                        K.div,
                        {
                          role: "alert",
                          "aria-live": "polite",
                          className: "p-1",
                          initial: { opacity: 0, y: -4 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -4 },
                          transition: {
                            duration: S ? 0 : 0.2,
                            ease: "easeOut"
                          },
                          children: /* @__PURE__ */ h(
                            "div",
                            {
                              className: y(
                                "flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3",
                                "bg-f1-background-critical text-f1-foreground"
                              ),
                              children: [
                                /* @__PURE__ */ r("div", { className: "h-6 w-6 flex-shrink-0", children: /* @__PURE__ */ r(br, { type: "critical", size: "sm" }) }),
                                /* @__PURE__ */ r("p", { className: "font-medium text-f1-foreground-critical", children: ke })
                              ]
                            }
                          )
                        },
                        "transient-error"
                      ) }),
                      /* @__PURE__ */ r(
                        Ro,
                        {
                          attachedFiles: Ne,
                          isUploading: Ue,
                          onRemove: he,
                          removeLabel: R.ai.removeFile
                        }
                      ),
                      /* @__PURE__ */ h(
                        "div",
                        {
                          className: y(Me && "flex items-end pr-3"),
                          children: [
                            Me && /* @__PURE__ */ r("div", { className: "flex shrink-0 self-center pl-3", children: /* @__PURE__ */ r(en, { size: "sm", spin: n }) }),
                            /* @__PURE__ */ r(
                              Lo,
                              {
                                textareaRef: B,
                                highlightRef: se,
                                inputValue: D,
                                onInputChange: (q, be) => {
                                  V(q), j(be);
                                },
                                onKeyDown: Xn,
                                onCursorUpdate: Yn,
                                onScroll: Kn,
                                highlightSegments: Jn,
                                hasOverlay: Zn,
                                multiplePlaceholders: Qn,
                                placeholders: ft,
                                resolvedDefaultPlaceholder: Hn,
                                inProgress: n
                              }
                            ),
                            tr && /* @__PURE__ */ r("div", { className: "shrink-0 pb-[10px] pl-2", children: /* @__PURE__ */ r(
                              vn,
                              {
                                inProgress: n,
                                hasDataToSend: He,
                                isPreSending: J || X,
                                recordingStatus: ve.status,
                                size: "sm"
                              }
                            ) })
                          ]
                        }
                      ),
                      Be && Le && /* @__PURE__ */ r(
                        "div",
                        {
                          className: "px-3 pb-3 pt-1",
                          onClick: (q) => q.stopPropagation(),
                          children: Be
                        }
                      ),
                      er && /* @__PURE__ */ r(
                        To,
                        {
                          onUploadFiles: N,
                          toolbarStart: p,
                          isAtMaxFiles: U,
                          maxFiles: M,
                          acceptValue: C,
                          fileInputRef: w,
                          handleFileSelect: le,
                          inProgress: n,
                          hasDataToSend: He,
                          isPreSending: J || X,
                          canRecord: lt,
                          recordingStatus: ve.status,
                          recordingStream: ve.stream,
                          onStartRecording: Wn,
                          onStopRecording: ve.stop,
                          onCancelRecording: jn,
                          showSubmit: !Me
                        }
                      )
                    ]
                  },
                  "input"
                ) })
              ]
            }
          ) })
        ] }),
        nr && /* @__PURE__ */ r("div", { className: "w-full max-w-content pt-2", children: /* @__PURE__ */ r(Po, { cards: F }) }),
        T && E && L && /* @__PURE__ */ r("div", { className: "w-full py-4 mx-auto flex max-w-content justify-center", children: T }),
        /* @__PURE__ */ r(Te, { mode: "wait", initial: !1, children: Z ? /* @__PURE__ */ h(
          K.div,
          {
            className: "flex w-full max-w-content flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.15, ease: "easeOut" },
            children: [
              /* @__PURE__ */ h("span", { children: [
                /* @__PURE__ */ r("kbd", { className: "font-sans", children: "↑↓" }),
                " ",
                R.ai.clarifyingQuestion.navHint.navigate
              ] }),
              /* @__PURE__ */ h("span", { children: [
                /* @__PURE__ */ r("kbd", { className: "font-sans", children: "Enter" }),
                " ",
                R.ai.clarifyingQuestion.navHint.select
              ] }),
              /* @__PURE__ */ h("span", { children: [
                /* @__PURE__ */ r("kbd", { className: "font-sans", children: "Esc" }),
                " ",
                R.ai.clarifyingQuestion.navHint.cancel
              ] })
            ]
          },
          "clarifying-nav-hint"
        ) : v?.text && !mt && /* @__PURE__ */ h(
          K.div,
          {
            className: "flex w-full max-w-content flex-row items-center justify-center gap-1",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: {
              duration: S ? 0 : 0.3,
              ease: "easeOut"
            },
            children: [
              v.onClick ? /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  onClick: v.onClick,
                  className: y(
                    "group min-w-0 cursor-pointer bg-transparent p-0 text-inherit",
                    "transition-transform duration-700 ease-out",
                    "hover:scale-[1.02] focus-visible:scale-[1.02]",
                    "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
                  ),
                  children: /* @__PURE__ */ r(
                    oe,
                    {
                      className: y(
                        "text-sm font-medium text-f1-foreground-tertiary transition-colors duration-700 ease-out",
                        "group-hover:bg-gradient-to-r group-hover:from-[#E55619] group-hover:to-[#A1ADE5] group-hover:bg-clip-text group-hover:text-transparent",
                        "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#E55619] group-focus-visible:to-[#A1ADE5] group-focus-visible:bg-clip-text group-focus-visible:text-transparent"
                      ),
                      children: v.text
                    }
                  )
                }
              ) : /* @__PURE__ */ r(oe, { className: "text-sm font-medium text-f1-foreground-tertiary", children: v.text }),
              v.link && v.linkText && /* @__PURE__ */ r(
                xr,
                {
                  href: v.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary",
                  children: v.linkText
                }
              )
            ]
          },
          "chat-disclaimer"
        ) })
      ]
    }
  );
};
function ta({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "pre",
    {
      ...t,
      className: y(
        "relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        t.className
      ),
      children: e
    }
  );
}
function na({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "code",
    {
      ...t,
      className: y(
        // Inline default
        "rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground",
        // Reset inside <pre> — let the parent handle the surface
        "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base",
        t.className
      ),
      children: e
    }
  );
}
function ra({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "blockquote",
    {
      ...t,
      className: y(
        "mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base",
        t.className
      ),
      children: e
    }
  );
}
function oa({ ...e }) {
  return /* @__PURE__ */ r(
    "hr",
    {
      ...e,
      className: y("my-3 border-0 border-t border-f1-border", e.className)
    }
  );
}
function aa({
  src: e,
  alt: t,
  ...n
}) {
  const o = () => {
    if (e) {
      const a = document.createElement("a");
      a.href = e, a.download = t || "image", document.body.appendChild(a), a.click(), document.body.removeChild(a);
    }
  };
  return /* @__PURE__ */ h("div", { className: "relative w-fit", children: [
    /* @__PURE__ */ r(
      "img",
      {
        ...n,
        src: e,
        alt: t,
        className: y("max-w-full rounded-md", n.className)
      }
    ),
    /* @__PURE__ */ r("div", { className: "absolute right-2 top-2 rounded", children: /* @__PURE__ */ r(
      pe,
      {
        variant: "neutral",
        label: "Download",
        hideLabel: !0,
        icon: Ae,
        onClick: o
      }
    ) })
  ] });
}
function ia({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(yr, { ...t, variant: "link", href: t.href, children: e });
}
function sa({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "ul",
    {
      ...t,
      className: y(
        "list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        t.className
      ),
      children: e
    }
  );
}
function la({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "ol",
    {
      ...t,
      className: y(
        "list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        t.className
      ),
      children: e
    }
  );
}
function ca({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r("li", { ...t, className: y("mb-2", t.className), children: e });
}
async function da(e, t, n) {
  const o = await import("./xlsx-CzlURDDb.js"), a = o.utils.table_to_book(e, { sheet: "Data" });
  o.writeFile(a, `${n}.${t}`);
}
function ua({
  children: e,
  title: t,
  ...n
}) {
  const o = W(), a = P(null), i = $(
    (l) => {
      if (!a.current) return;
      const d = t?.replace(/\s+/g, "_").toLowerCase() || "table";
      da(a.current, l, d);
    },
    [t]
  );
  return /* @__PURE__ */ h("div", { className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary", children: [
    /* @__PURE__ */ h("div", { className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2", children: [
      /* @__PURE__ */ r(
        oe,
        {
          tag: "h2",
          className: "text-base font-medium capitalize text-f1-foreground",
          children: t ?? o.ai.reportCard.tableLabel
        }
      ),
      /* @__PURE__ */ r(
        nt,
        {
          icon: Ae,
          size: "md",
          items: [
            {
              label: o.t("ai.dataDownload.download", {
                format: "Excel"
              }),
              icon: Ae,
              onClick: () => i("xlsx")
            },
            {
              label: o.t("ai.dataDownload.download", {
                format: "CSV"
              }),
              icon: Ae,
              onClick: () => i("csv")
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { className: "scrollbar-macos overflow-x-auto", children: /* @__PURE__ */ r(
      "table",
      {
        ref: a,
        ...n,
        className: y(
          "w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0",
          n.className
        ),
        children: e
      }
    ) })
  ] });
}
function fa({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "th",
    {
      ...t,
      className: y(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        t.className
      ),
      children: e
    }
  );
}
function ma({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "td",
    {
      ...t,
      className: y(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        t.className
      ),
      children: e
    }
  );
}
function ha({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r("p", { ...t, className: y("text-base font-normal", t.className), children: e });
}
function pa({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "h1",
    {
      ...t,
      className: y(
        "mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function ga({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "h2",
    {
      ...t,
      className: y(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function va({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "h3",
    {
      ...t,
      className: y(
        "mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function ba({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r("strong", { ...t, className: y("font-semibold", t.className), children: e });
}
function xa({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r("em", { ...t, className: y("italic", t.className), children: e });
}
function Fe({
  id: e,
  trigger: t,
  resolver: n,
  mapToCard: o,
  fallbackCard: a
}) {
  const i = P(/* @__PURE__ */ new Map()), [l, d] = _(
    () => i.current.get(e) ?? null
  ), [s, u] = _(!1), [c, m] = _(!1), p = P(!0);
  H(() => () => {
    p.current = !1;
  }, []);
  const f = $(() => {
    if (l || s) return;
    const b = i.current.get(e);
    if (b) {
      d(b);
      return;
    }
    u(!0), m(!1), n(e).then((v) => {
      i.current.set(e, v), p.current && d(v);
    }).catch(() => {
      p.current && m(!0);
    }).finally(() => {
      p.current && u(!1);
    });
  }, [n, e, l, s]), g = c || !l ? a : o(l);
  return /* @__PURE__ */ h(
    wr,
    {
      openDelay: 300,
      closeDelay: 100,
      onOpenChange: (b) => {
        b && f();
      },
      children: [
        /* @__PURE__ */ r(Nr, { asChild: !0, children: t }),
        /* @__PURE__ */ r(
          Cr,
          {
            side: "top",
            align: "start",
            className: "w-64 rounded-2xl border-none p-0 shadow-md",
            children: s ? /* @__PURE__ */ r(vt.Skeleton, {}) : /* @__PURE__ */ r(vt, { ...g })
          }
        )
      ]
    }
  );
}
const bn = ye(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: y(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ue()
      ),
      ...t,
      children: e
    }
  )
);
bn.displayName = "CandidateTrigger";
function ya({
  id: e,
  label: t
}) {
  const { entityRefs: n } = we(), o = n?.resolvers?.candidate, a = W(), i = n?.urls?.candidate?.(e), l = Y(
    () => (s) => {
      const u = [];
      return s.source && u.push({
        title: a.t("ai.entityRef.candidate.source"),
        value: s.source
      }), s.appliedAt && u.push({
        title: a.t("ai.entityRef.candidate.applied"),
        value: s.appliedAt
      }), {
        avatar: {
          type: "person",
          firstName: s.firstName,
          lastName: s.lastName,
          src: s.avatarUrl
        },
        title: `${s.firstName} ${s.lastName}`,
        ...u.length > 0 && {
          children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: u.map((c) => /* @__PURE__ */ h("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ r("p", { className: "text-f1-foreground-secondary", children: c.title }),
            /* @__PURE__ */ r("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: c.value })
          ] }, c.title)) })
        },
        ...i && {
          secondaryActions: {
            label: a.t("ai.view"),
            href: i
          }
        }
      };
    },
    [a, i]
  ), d = Y(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [t, a, i]
  );
  return o ? /* @__PURE__ */ r(
    Fe,
    {
      id: e,
      trigger: /* @__PURE__ */ r(bn, { label: t }),
      resolver: o,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const xn = ye(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: y(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ue()
      ),
      ...t,
      children: e
    }
  )
);
xn.displayName = "ExpenseTrigger";
function wa({ id: e, label: t }) {
  const { entityRefs: n } = we(), o = n?.resolvers?.expense, a = W(), i = n?.urls?.expense?.(e), l = Y(
    () => (s) => ({
      avatar: {
        type: "icon",
        icon: Tr
      },
      title: s.description || `Expense #${s.id}`,
      description: [s.amount, s.status].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [a, i]
  ), d = Y(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [t, a, i]
  );
  return o ? /* @__PURE__ */ r(
    Fe,
    {
      id: e,
      trigger: /* @__PURE__ */ r(xn, { label: t }),
      resolver: o,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const yn = ye(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: y(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ue()
      ),
      ...t,
      children: e
    }
  )
);
yn.displayName = "JobPostingTrigger";
function Na({
  id: e,
  label: t
}) {
  const { entityRefs: n } = we(), o = n?.resolvers?.jobPosting, a = W(), i = n?.urls?.jobPosting?.(e), l = Y(
    () => (s) => ({
      title: s.title,
      description: [s.status, s.location].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [a, i]
  ), d = Y(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [t, a, i]
  );
  return o ? /* @__PURE__ */ r(
    Fe,
    {
      id: e,
      trigger: /* @__PURE__ */ r(yn, { label: t }),
      resolver: o,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
function Ca({ rows: e }) {
  return e.length === 0 ? null : /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: e.map((t, n) => /* @__PURE__ */ h("div", { className: "flex flex-col", children: [
    t.label && /* @__PURE__ */ r("p", { className: "text-f1-foreground-secondary", children: t.label }),
    /* @__PURE__ */ r("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: t.value })
  ] }, t.label ?? n)) });
}
const wn = ye(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: y(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ue()
      ),
      ...t,
      children: e
    }
  )
);
wn.displayName = "RequisitionTrigger";
function Ta({
  id: e,
  label: t
}) {
  const { entityRefs: n } = we(), o = n?.resolvers?.requisition, a = W(), i = n?.urls?.requisition?.(e), l = Y(
    () => (s) => {
      const u = s.lineManager ? `${s.lineManager.firstName} ${s.lineManager.lastName}` : void 0, m = [
        s.status ? {
          label: a.t("ai.entityRef.requisition.status"),
          value: /* @__PURE__ */ r("div", { className: "flex items-center pt-1", children: /* @__PURE__ */ r(
            Rr,
            {
              text: s.status,
              variant: s.statusVariant ?? "neutral"
            }
          ) })
        } : void 0,
        s.lineManager ? {
          label: a.t("ai.entityRef.requisition.lineManager"),
          value: /* @__PURE__ */ h("div", { className: "flex items-center gap-1.5 pt-1", children: [
            /* @__PURE__ */ r(
              tn,
              {
                firstName: s.lineManager.firstName,
                lastName: s.lineManager.lastName,
                src: s.lineManager.avatarUrl,
                size: "xs"
              }
            ),
            /* @__PURE__ */ r("span", { children: u })
          ] })
        } : void 0,
        s.reason ? {
          label: a.t("ai.entityRef.requisition.reason"),
          value: s.reason
        } : void 0
      ].filter(
        (p) => p !== void 0
      );
      return {
        title: s.title,
        ...s.location && { description: s.location },
        ...m.length > 0 && {
          children: /* @__PURE__ */ r(Ca, { rows: m })
        },
        ...i && {
          secondaryActions: {
            label: a.t("ai.view"),
            href: i
          }
        }
      };
    },
    [a, i]
  ), d = Y(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [t, a, i]
  );
  return o ? /* @__PURE__ */ r(
    Fe,
    {
      id: e,
      trigger: /* @__PURE__ */ r(wn, { label: t }),
      resolver: o,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const Nn = ye(
  ({ label: e, ...t }, n) => /* @__PURE__ */ h(
    "button",
    {
      ref: n,
      type: "button",
      className: y(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ue()
      ),
      ...t,
      children: [
        "@",
        e
      ]
    }
  )
);
Nn.displayName = "PersonTrigger";
function Ra({ id: e, label: t }) {
  const { entityRefs: n } = we(), o = n?.resolvers?.person, a = W(), i = n?.urls?.person?.(e), l = Y(
    () => (s) => ({
      avatar: {
        type: "person",
        firstName: s.firstName,
        lastName: s.lastName,
        src: s.avatarUrl
      },
      title: `${s.firstName} ${s.lastName}`,
      description: s.jobTitle,
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [a, i]
  ), d = Y(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [t, a, i]
  );
  return o ? /* @__PURE__ */ r(
    Fe,
    {
      id: e,
      trigger: /* @__PURE__ */ r(Nn, { label: t }),
      resolver: o,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const Cn = ye(
  ({ label: e, ...t }, n) => /* @__PURE__ */ r(
    "button",
    {
      ref: n,
      type: "button",
      className: y(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ue()
      ),
      ...t,
      children: e
    }
  )
);
Cn.displayName = "VacancyTrigger";
function Aa({ id: e, label: t }) {
  const { entityRefs: n } = we(), o = n?.resolvers?.vacancy, a = W(), i = n?.urls?.vacancy?.(e), l = Y(
    () => (s) => ({
      title: s.name,
      description: [s.status, s.vacancyType].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [a, i]
  ), d = Y(
    () => ({
      title: t,
      ...i && {
        secondaryActions: {
          label: a.t("ai.view"),
          href: i
        }
      }
    }),
    [t, a, i]
  );
  return o ? /* @__PURE__ */ r(
    Fe,
    {
      id: e,
      trigger: /* @__PURE__ */ r(Cn, { label: t }),
      resolver: o,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ r("span", { children: t });
}
const Ea = {
  person: Ra,
  candidate: ya,
  expense: wa,
  "job-posting": Na,
  requisition: Ta,
  vacancy: Aa
};
function ka(e) {
  return Ea[e];
}
function Qe(e) {
  return typeof e == "string" ? e : typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(Qe).join("") : e && typeof e == "object" && "props" in e ? Qe(e.props.children) : "";
}
function Fa({
  type: e,
  id: t,
  children: n
}) {
  if (!t || !e)
    return /* @__PURE__ */ r("span", { children: n });
  const o = Qe(n), a = ka(e);
  return a ? /* @__PURE__ */ r(a, { id: t, label: o }) : /* @__PURE__ */ r("span", { children: n });
}
const Ls = {
  p: ha,
  h1: pa,
  h2: ga,
  h3: va,
  a: ia,
  strong: ba,
  em: xa,
  li: ca,
  pre: ta,
  code: na,
  blockquote: ra,
  hr: oa,
  ul: sa,
  ol: la,
  table: ua,
  th: fa,
  td: ma,
  img: aa,
  "entity-ref": Fa
};
function Tn({
  avatar: e,
  title: t,
  description: n,
  isActive: o = !1,
  action: a,
  children: i
}) {
  const l = W(), d = a.type === "open", s = d ? o ? a.onClose : a.onOpen : void 0;
  return /* @__PURE__ */ h(
    "div",
    {
      className: y(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2",
        d && "cursor-pointer",
        o ? "border-f1-border-hover" : "border-f1-border-secondary"
      ),
      onClick: s,
      children: [
        /* @__PURE__ */ h("div", { className: "flex w-full min-w-0 flex-row items-center gap-3", children: [
          e?.type === "module" && /* @__PURE__ */ r(nn, { module: e.module, size: "md" }),
          e?.type === "file" && /* @__PURE__ */ r(Ar, { file: e.file, size: "lg" }),
          e?.type === "icon" && /* @__PURE__ */ r(Er, { icon: e.icon, size: "md" }),
          /* @__PURE__ */ h("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ r(oe, { className: "text-lg font-semibold text-f1-foreground", children: t }),
            n && /* @__PURE__ */ r(oe, { className: "text-base text-f1-foreground-secondary", children: n })
          ] }),
          a.type === "open" && a.showButton !== !1 && /* @__PURE__ */ r(
            pe,
            {
              variant: "outline",
              size: "md",
              label: o ? l.actions.close : l.ai.reportCard.openButton,
              onClick: o ? a.onClose : a.onOpen
            }
          ),
          a.type === "custom" && /* @__PURE__ */ r(
            pe,
            {
              variant: "outline",
              size: "md",
              icon: a.icon,
              label: a.label,
              hideLabel: a.hideLabel,
              onClick: a.onClick
            }
          )
        ] }),
        i
      ]
    }
  );
}
Tn.displayName = "F0CanvasCard";
const at = We(null);
function Ms({
  children: e
}) {
  const [t, n] = _(0), o = P([]), a = $(
    (l) => {
      const d = o.current, s = d.findIndex(
        (c) => c.formName === l.formName && c.customFieldName === l.customFieldName
      ), u = l;
      s >= 0 ? d[s] = u : d.push(u), n((c) => c + 1);
    },
    []
  ), i = Y(
    () => ({
      formatters: [...o.current],
      setFormCardValueFormatter: a
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, t]
  );
  return /* @__PURE__ */ r(at.Provider, { value: i, children: e });
}
function Sa(e) {
  const n = _e(at)?.formatters;
  return Y(() => !n || n.length === 0 ? null : (o, a, i) => {
    let l, d = -1;
    for (const s of n) {
      const u = s.formName === void 0 || s.formName === e, c = s.customFieldName === void 0 || s.customFieldName === i.customFieldName;
      if (!u || !c) continue;
      let m = 0;
      s.formName !== void 0 && (m += 2), s.customFieldName !== void 0 && (m += 1), m > d && (d = m, l = s);
    }
    if (l)
      return l.format(a, { key: o, ...i });
  }, [n, e]);
}
function Ps() {
  const e = _e(at);
  if (!e)
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    );
  return e.setFormCardValueFormatter;
}
const wt = 7, Ia = 625, Nt = /* @__PURE__ */ new Set();
function La(e) {
  return typeof DOMParser < "u" ? new DOMParser().parseFromString(e, "text/html").body.textContent?.replace(/\s+/g, " ").trim() ?? "" : e.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function Ma(e) {
  return e && e.charAt(0).toUpperCase() + e.slice(1);
}
function Pa(e) {
  const { days: t, hours: n, minutes: o, seconds: a } = Fr(e), i = [];
  return t > 0 && i.push(`${t}d`), n > 0 && i.push(`${n}h`), o > 0 && i.push(`${o}m`), (a > 0 || i.length === 0) && i.push(`${a}s`), i.join(" ");
}
function Ct(e) {
  if (e instanceof Date) return !0;
  if (typeof e != "string") return !1;
  const t = new Date(e);
  return !Number.isNaN(t.getTime());
}
function Tt(e) {
  return (e instanceof Date ? e : new Date(e)).toLocaleDateString();
}
function Rt(e) {
  return e.type === "item" ? e.text : "";
}
function Rn(e, t) {
  if (e == null || e === "") return { type: "item", text: "—" };
  if (t === "duration" && typeof e == "number")
    return { type: "item", text: Pa(e) };
  if (t === "richtext" && typeof e == "object" && e !== null && "value" in e) {
    const n = e.value;
    return { type: "item", text: (n ? La(n) : "") || "—" };
  }
  if (t === "daterange" && typeof e == "object" && e !== null && "from" in e && "to" in e) {
    const { from: n, to: o } = e, a = Ct(n) ? Tt(n) : String(n), i = Ct(o) ? Tt(o) : String(o);
    return { type: "item", text: `${a} – ${i}` };
  }
  if (e instanceof Date)
    return { type: "item", text: e.toLocaleDateString() };
  if (typeof e == "boolean")
    return { type: "item", text: e ? "Yes" : "No" };
  if (Array.isArray(e))
    return { type: "item", text: e.map((o) => {
      const a = Rn(o);
      return Array.isArray(a) ? a.map(Rt).join(", ") : Rt(a);
    }).filter(Boolean).join(", ") || "—" };
  if (typeof e == "object" && e !== null) {
    const n = e;
    return typeof n.label == "string" ? { type: "item", text: n.label } : typeof n.name == "string" ? { type: "item", text: n.name } : typeof n.text == "string" ? { type: "item", text: n.text } : { type: "item", text: JSON.stringify(e) };
  }
  return { type: "item", text: Ma(String(e)) };
}
function An({
  formName: e,
  formDescription: t,
  module: n,
  cardTitle: o,
  cardDescription: a,
  fieldDescriptions: i,
  formValues: l,
  valueFormatter: d
}) {
  const { canvasContent: s, openCanvas: u, closeCanvas: c } = we(), m = Sa(e), p = d ?? m, f = P(() => {
  }), g = o ?? e, b = a ?? t ?? "", v = s?.type === "form" && s.formName === e, T = () => u({
    type: "form",
    title: g,
    description: b,
    formName: e,
    formDescription: t,
    formModule: n
  });
  f.current = T, H(() => {
    typeof window > "u" || window.innerWidth < Ia || Nt.has(e) || (Nt.add(e), f.current());
  }, [e]);
  const E = i && l ? Object.entries(i).map(([A, x]) => {
    const F = l[A], I = p?.(A, F, {
      fieldType: x.fieldType,
      customFieldName: x.customFieldName
    });
    if (!I && x.fieldType === "custom" && typeof F == "object" && F !== null)
      return null;
    const O = I ?? Rn(F, x.fieldType), R = ["richtext", "textarea"];
    return {
      label: x.label,
      content: O,
      verticalLayout: R.includes(x.fieldType ?? "")
    };
  }).filter((A) => {
    if (!A) return !1;
    const x = Array.isArray(A.content) ? A.content[0] : A.content;
    return !(x?.type === "item" && x.text === "—");
  }) : [], L = E.slice(0, wt), k = E.length > wt;
  return /* @__PURE__ */ r(
    Tn,
    {
      avatar: n ? { type: "module", module: n } : void 0,
      title: g,
      description: b,
      isActive: v,
      action: {
        type: "open",
        onOpen: T,
        onClose: c,
        showButton: v
      },
      children: L.length > 0 && !v && /* @__PURE__ */ r("div", { className: "-mx-3 flex w-full flex-col overflow-hidden pb-1", children: /* @__PURE__ */ r(
        kr,
        {
          details: L.map((A) => ({
            title: A.label,
            content: A.content,
            ...A.verticalLayout && { verticalLayout: !0 }
          })),
          showSeeMore: k,
          onClickSeeMore: T,
          tableView: !0
        }
      ) })
    }
  );
}
An.displayName = "FormCard";
function Da() {
  const e = Sr(), t = e?.activeForm;
  if (!t) return null;
  const n = t.cardTitle, o = t.cardDescription, a = (e?.getFillVersion(t.formName) ?? 0) > 0;
  return !n || !o || !a ? null : /* @__PURE__ */ r("div", { className: "mt-2 w-full", children: /* @__PURE__ */ r(
    An,
    {
      formName: t.formName,
      formDescription: t.description,
      module: t.module,
      cardTitle: n,
      cardDescription: o,
      fieldDescriptions: t.fieldDescriptions,
      formValues: t.formValues
    }
  ) });
}
const _a = 2;
function Oa(e, t) {
  if (!e.intersectsNode(t)) return null;
  const n = document.createRange();
  n.selectNodeContents(t);
  const o = e.cloneRange();
  o.compareBoundaryPoints(Range.START_TO_START, n) < 0 && o.setStart(n.startContainer, n.startOffset), o.compareBoundaryPoints(Range.END_TO_END, n) > 0 && o.setEnd(n.endContainer, n.endOffset);
  const a = o.toString().trim();
  if (a.length < _a) return null;
  const i = o.getBoundingClientRect();
  return { rect: i.width > 0 || i.height > 0 ? i : t.getBoundingClientRect(), text: a };
}
function En({
  containerRef: e,
  enabled: t = !0
}) {
  const [n, o] = _(null), a = $(() => o(null), []);
  return H(() => {
    if (!t || typeof window > "u") return;
    const i = e.current;
    if (!i) return;
    const l = () => {
      const u = window.getSelection();
      if (!u || u.isCollapsed || u.rangeCount === 0) {
        o(null);
        return;
      }
      o(Oa(u.getRangeAt(0), i));
    }, d = () => {
      window.setTimeout(l, 0);
    }, s = () => {
      const u = window.getSelection();
      (!u || u.isCollapsed || u.rangeCount === 0) && o(null);
    };
    return document.addEventListener("mouseup", d), document.addEventListener("keyup", d), document.addEventListener("selectionchange", s), () => {
      document.removeEventListener("mouseup", d), document.removeEventListener("keyup", d), document.removeEventListener("selectionchange", s);
    };
  }, [e, t]), { anchor: n, clear: a };
}
const At = 8, Pe = 8;
function kn({ anchor: e, onReply: t }) {
  const n = W(), o = P(null), [a, i] = _(
    null
  );
  if (Ze(() => {
    if (!e) {
      i(null);
      return;
    }
    const d = o.current;
    if (!d) return;
    const s = d.offsetWidth, u = d.offsetHeight, c = window.innerWidth, m = window.innerHeight;
    let p = e.rect.top - u - At;
    p < Pe && (p = e.rect.bottom + At), p = Math.min(
      Math.max(p, Pe),
      m - u - Pe
    );
    const f = e.rect.left + e.rect.width / 2 - s / 2, g = Math.min(
      Math.max(f, Pe),
      c - s - Pe
    );
    i({ top: p, left: g });
  }, [e]), typeof document > "u" || !e) return null;
  const l = n.ai.reply;
  return gn(
    /* @__PURE__ */ r(
      "div",
      {
        style: {
          position: "fixed",
          top: a?.top ?? -9999,
          left: a?.left ?? -9999,
          visibility: a ? "visible" : "hidden"
        },
        className: y(
          "z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary",
          "drop-shadow"
        ),
        children: /* @__PURE__ */ r(
          ne,
          {
            ref: o,
            type: "button",
            variant: "ghost",
            label: l,
            icon: Ir,
            onClick: () => {
              t(e.text);
            }
          }
        )
      }
    ),
    document.body
  );
}
const Fn = We(void 0), Ds = () => _e(Fn), Ua = (e) => /* @__PURE__ */ r(rn, { content: e, format: "markdown" }), Ba = ({
  isGenerating: e,
  isLoading: t,
  message: n,
  renderToolCall: o,
  onReplyQuote: a,
  onRendered: i,
  renderMarkdown: l
}) => {
  const d = typeof n?.content == "string" ? n.content : "", s = (n && o?.(n)) ?? n?.generativeUI?.() ?? null, u = n?.toolCalls?.[0]?.id, c = !d && !s, m = P(null), { anchor: p, clear: f } = En({
    containerRef: m,
    enabled: !!(n?.id && d)
  });
  return H(() => {
    n?.id && !t && !e && i?.(n);
  }, [n, t, e, i]), !t && !e && c ? null : /* @__PURE__ */ r(Fn.Provider, { value: u, children: /* @__PURE__ */ h("div", { className: "relative isolate flex w-full flex-col items-start justify-center", children: [
    n && d && /* @__PURE__ */ r(
      "div",
      {
        ref: m,
        className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: (l ?? Ua)(d)
      }
    ),
    !!s && /* @__PURE__ */ r("div", { className: "w-full", children: s }),
    /* @__PURE__ */ r(
      kn,
      {
        anchor: p,
        onReply: (g) => {
          a?.(g), f(), window.getSelection()?.removeAllRanges();
        }
      }
    )
  ] }) });
}, $a = ({
  onClose: e,
  onSubmit: t,
  reactionType: n,
  message: o
}) => {
  const [a, i] = _(""), l = W(), { title: d, label: s, placeholder: u } = n === "like" ? l.ai.feedbackModal.positive : l.ai.feedbackModal.negative, c = $(() => {
    t(o, a);
  }, [a, o, t]), m = () => {
    e(o);
  };
  return H(() => {
    const p = (f) => {
      f.key === "Enter" && (f.preventDefault(), c());
    };
    return document.addEventListener("keydown", p), () => {
      document.removeEventListener("keydown", p);
    };
  }, [c]), /* @__PURE__ */ r(
    Lr,
    {
      position: "center",
      isOpen: !0,
      onClose: m,
      width: "md",
      title: d,
      container: null,
      primaryAction: {
        label: l.actions.send,
        onClick: c
      },
      secondaryAction: {
        label: l.actions.cancel,
        onClick: m
      },
      children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ r(
        Mr,
        {
          autoFocus: !0,
          label: s,
          placeholder: u,
          value: a,
          onChange: (p) => i(p.trim()),
          size: "md",
          type: "text"
        }
      ) })
    }
  );
}, Sn = We(null), za = ({ children: e }) => {
  const [t, n] = _(null), o = t ? {
    isOpen: !0,
    currentReaction: t.action,
    currentMessage: t.message,
    open: (a, i) => n({ action: a, message: i }),
    close: () => n(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (a, i) => n({ action: a, message: i }),
    close: () => n(null)
  };
  return /* @__PURE__ */ r(Sn.Provider, { value: o, children: e });
}, In = () => {
  const e = _e(Sn);
  if (e === null)
    throw new Error(
      "useFeedbackModal must be used within a FeedbackModalProvider"
    );
  return e;
};
function Ga(e) {
  const t = In();
  return { modal: t, handleSubmit: (a, i) => {
    (t.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(a, { threadId: e.threadId, feedback: i }), t.close();
  }, handleClose: (a) => {
    (t.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(a, { threadId: e.threadId, feedback: "" }), t.close();
  } };
}
const Va = ({
  content: e,
  targetMessage: t,
  onCopy: n
}) => {
  const o = W(), { open: a } = In(), [i, l] = _(null);
  return /* @__PURE__ */ h("div", { className: "flex", children: [
    /* @__PURE__ */ r(
      Pr,
      {
        size: "md",
        variant: "ghost",
        valueToCopy: e,
        onCopy: (d) => {
          d.currentTarget.blur(), n?.(e);
        }
      }
    ),
    /* @__PURE__ */ r(
      De,
      {
        onClick: (d) => {
          const s = i === "like" ? null : "like";
          s && a(s, t), l(s), d.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": o.actions.thumbsUp,
        children: /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ r(
          re,
          {
            size: "md",
            icon: i === "like" ? Dr : _r,
            color: "default"
          }
        ) })
      }
    ),
    /* @__PURE__ */ r(
      De,
      {
        onClick: (d) => {
          const s = i === "dislike" ? null : "dislike";
          s && a(s, t), l(s), d.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": o.actions.thumbsDown,
        children: /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ r(
          re,
          {
            size: "md",
            icon: i === "dislike" ? Or : Ur,
            color: "default"
          }
        ) })
      }
    )
  ] });
}, Wa = ({
  icon: e,
  title: t,
  children: n,
  open: o,
  defaultOpen: a = !1,
  onOpenChange: i,
  lockOpen: l = !1
}) => {
  const [d, s] = _(a), u = me(), c = o !== void 0, m = c ? o : d;
  return /* @__PURE__ */ h(
    on,
    {
      className: "mb-1 w-full",
      open: m,
      onOpenChange: (f) => {
        l || (c || s(f), i?.(f));
      },
      children: [
        /* @__PURE__ */ h(
          an,
          {
            disabled: l,
            className: y(
              "gap-1",
              l ? "flex w-full items-center text-base text-f1-foreground-secondary" : "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90"
            ),
            children: [
              /* @__PURE__ */ r("span", { className: "flex items-center justify-start h-6 w-6", children: /* @__PURE__ */ r(re, { icon: e, className: "block" }) }),
              /* @__PURE__ */ r("div", { className: "min-h-6 flex items-center", children: /* @__PURE__ */ r("span", { children: t }) }),
              !l && /* @__PURE__ */ r(re, { icon: rt })
            ]
          }
        ),
        /* @__PURE__ */ r(sn, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ r(
          K.div,
          {
            initial: !1,
            animate: {
              height: m ? "auto" : 0,
              opacity: m ? 1 : 0,
              visibility: m ? "visible" : "hidden"
            },
            transition: {
              duration: u ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: n
          }
        ) })
      ]
    }
  );
}, ja = ({
  titles: e,
  title: t,
  inProgress: n,
  isWriting: o
}) => {
  const a = W(), [i, l] = _(!!n), d = P(n);
  H(() => {
    d.current && !n ? l(!1) : n && !i && l(!0), d.current = n;
  }, [n, i]);
  const s = n ? a.ai.thoughtsGroupTitle : t ?? a.ai.thoughtsGroupTitle, u = e.length - 1, c = (m) => !n || o ? "completed" : m === u ? "executing" : "completed";
  return /* @__PURE__ */ r(
    Wa,
    {
      icon: Br,
      title: s,
      open: i,
      onOpenChange: l,
      lockOpen: n,
      children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3 pb-4", children: e.map((m, p) => /* @__PURE__ */ h("div", { className: "relative", children: [
        /* @__PURE__ */ r(
          Ke,
          {
            title: m,
            status: c(p),
            inGroup: !0
          }
        ),
        p < e.length - 1 && /* @__PURE__ */ r(
          "div",
          {
            "aria-hidden": !0,
            className: "absolute -bottom-3 left-2 ml-px top-5 w-px bg-f1-border-secondary rounded"
          }
        )
      ] }, p)) })
    }
  );
};
function Ha(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) {
    const t = e.filter((n) => n.type === "text").map((n) => n.text).filter((n) => typeof n == "string");
    return t[t.length - 1];
  }
}
function qa(e, t) {
  const n = Array.isArray(e) ? e.filter((o) => o.type === "binary").map((o) => ({
    url: o.url,
    filename: o.filename,
    mimetype: o.mimeType
  })).filter(
    (o) => typeof o?.filename == "string" && typeof o?.mimetype == "string" && typeof o?.url == "string"
  ) : [];
  return n.length > 0 ? n : (t?.uploadedFiles ?? []).filter(
    (o) => typeof o?.filename == "string" && typeof o?.mimetype == "string" && typeof o?.url == "string"
  );
}
const Ln = (e) => /* @__PURE__ */ r(rn, { content: e, format: "markdown" }), Xa = ({
  text: e,
  renderMarkdown: t
}) => /* @__PURE__ */ h("div", { className: "flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary", children: [
  /* @__PURE__ */ r("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ r(re, { icon: Jt }) }),
  /* @__PURE__ */ r("div", { className: "min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0", children: (t ?? Ln)(e) })
] }), Ya = ({
  message: e,
  onReplyQuote: t,
  autoScrollIntoView: n = !0,
  renderMarkdown: o
}) => {
  const a = P(null), i = P(null);
  H(() => {
    !a.current || !n || a.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [n]);
  const l = e.rawData, d = qa(
    e?.content,
    l
  ), s = (Ha(e?.content) ?? "").trim(), u = e?.replyQuote ?? null, c = s.length > 0, { anchor: m, clear: p } = En({
    containerRef: i,
    enabled: c
  });
  return /* @__PURE__ */ h(
    "div",
    {
      ref: a,
      className: "my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0",
      children: [
        u && /* @__PURE__ */ r(Xa, { text: u, renderMarkdown: o }),
        d.length > 0 && /* @__PURE__ */ r("div", { className: "flex max-w-[90%] flex-wrap justify-end gap-1.5", children: d.map((f, g) => /* @__PURE__ */ r(
          Qt,
          {
            file: { name: f.filename, type: f.mimetype },
            size: "lg"
          },
          `${f.filename}-${g}`
        )) }),
        c && /* @__PURE__ */ r(
          "div",
          {
            ref: i,
            className: "w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-xl bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
            children: (o ?? Ln)(s)
          }
        ),
        /* @__PURE__ */ r(
          kn,
          {
            anchor: m,
            onReply: (f) => {
              t?.(f), p(), window.getSelection()?.removeAllRanges();
            }
          }
        )
      ]
    }
  );
}, Ka = 35, Qa = 22, Ja = 400, Za = 2500, ei = 220, ti = ({
  messages: e,
  caption: t,
  subtitle: n,
  cta: o,
  onClick: a,
  fullscreen: i = !1
}) => {
  const [l, d] = _(0), [s, u] = _(0), [c, m] = _("starting"), p = me(), f = e[l] ?? "", g = e.join("\0"), b = P(!0);
  H(() => {
    if (b.current) {
      b.current = !1;
      return;
    }
    d(0), u(0), m("writing");
  }, [g]), H(() => {
    if (p) return;
    let E;
    if (c === "starting")
      E = setTimeout(() => m("writing"), Ja);
    else if (c === "writing")
      s < f.length ? E = setTimeout(() => u((L) => L + 1), Ka) : m("holding");
    else if (c === "holding") {
      if (e.length <= 1) return;
      E = setTimeout(() => m("erasing"), Za);
    } else c === "erasing" && (s > 0 ? E = setTimeout(() => u((L) => L - 1), Qa) : E = setTimeout(() => {
      d((L) => (L + 1) % e.length), m("starting");
    }, ei));
    return () => {
      E && clearTimeout(E);
    };
  }, [c, s, f.length, e.length, p]);
  const v = !!a, T = v ? (E) => {
    (E.key === "Enter" || E.key === " ") && (E.preventDefault(), a?.());
  } : void 0;
  return /* @__PURE__ */ r(
    "div",
    {
      className: y(
        "flex w-full flex-1 justify-center px-4",
        i ? "items-end pb-24" : "items-center"
      ),
      children: /* @__PURE__ */ h("div", { className: "flex flex-col items-center", children: [
        o && /* @__PURE__ */ r(
          ne,
          {
            variant: "neutral",
            size: "sm",
            className: "mb-4",
            label: o.label,
            icon: o.icon,
            onClick: o.onClick
          }
        ),
        t && /* @__PURE__ */ r("p", { className: "animate-in fade-in-0 text-center text-2xl font-semibold leading-[28px] text-f1-foreground-secondary duration-500", children: t }),
        /* @__PURE__ */ h(
          "p",
          {
            role: v ? "button" : void 0,
            tabIndex: v ? 0 : void 0,
            onClick: a,
            onKeyDown: T,
            className: y(
              "min-h-[28px] bg-gradient-to-r from-[#E55619] via-[#E51943] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent",
              v && y(
                "cursor-pointer transition-transform duration-200",
                "hover:scale-[1.02] focus-visible:scale-[1.02]",
                "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
              )
            ),
            "aria-label": v ? f : void 0,
            children: [
              /* @__PURE__ */ r("span", { "aria-hidden": "true", children: p ? f : f.slice(0, s) }),
              /* @__PURE__ */ r("span", { className: "sr-only", children: f })
            ]
          },
          l
        ),
        n && /* @__PURE__ */ r("p", { className: "animate-in fade-in-0 mt-3 text-center text-base leading-snug text-f1-foreground-secondary duration-500", children: n })
      ] })
    }
  );
};
function ni({
  viewportRef: e,
  contentRef: t,
  endRef: n,
  lastTurnRef: o,
  turnsCount: a,
  freezeTurnMinHeight: i = !1
}) {
  const [l, d] = _(0), [s, u] = _(!1), c = P(a), m = P(i);
  m.current = i;
  const p = $(
    (g = "smooth") => {
      n.current?.scrollIntoView({ behavior: g });
    },
    [n]
  );
  H(() => {
    const g = e.current, b = t.current;
    if (!g || !b) return;
    const v = new ResizeObserver(() => {
      if (m.current) return;
      const T = parseFloat(getComputedStyle(b).paddingTop) + parseFloat(getComputedStyle(b).paddingBottom) + 1;
      d(g.clientHeight - T);
    });
    return v.observe(g), v.observe(b), () => v.disconnect();
  }, [e, t]);
  const f = $(() => {
    const g = e.current;
    if (!g) return;
    const { scrollTop: b, scrollHeight: v, clientHeight: T } = g, E = v - b - T;
    u(E > T);
  }, [e]);
  return H(() => {
    const g = e.current;
    if (g)
      return g.addEventListener("scroll", f, { passive: !0 }), () => g.removeEventListener("scroll", f);
  }, [f, e]), H(() => {
    a > c.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const g = e.current, b = o.current;
        if (!g || !b) return;
        const v = g.getBoundingClientRect(), T = b.getBoundingClientRect(), E = g.scrollTop + (T.top - v.top);
        g.scrollTo({ top: E, behavior: "smooth" });
      });
    }), a === 0 && u(!1), c.current = a;
  }, [a, o, e]), { showScrollBtn: s, turnMinHeight: l, scrollToBottom: p };
}
const ri = {
  threadId: "",
  onThumbsUp: () => {
  },
  onThumbsDown: () => {
  }
}, _s = (e) => /* @__PURE__ */ r(za, { children: /* @__PURE__ */ r(oi, { ...e }) }), oi = ({
  turns: e,
  isLoadingThread: t = !1,
  interrupt: n,
  initialMessage: o,
  initialMessageCaption: a,
  initialMessageSubtitle: i,
  initialMessageCta: l,
  onWelcomeClick: d,
  renderToolCall: s,
  onReplyQuote: u,
  onAssistantMessageRendered: c,
  autoScrollUserIntoView: m = !0,
  renderMarkdown: p,
  feedback: f,
  freezeLayout: g = !1,
  noShadows: b = !1,
  fullscreen: v = !1,
  children: T,
  AssistantMessage: E,
  UserMessage: L,
  onRegenerate: k,
  onCopy: A
}) => {
  const { modal: x, handleSubmit: F, handleClose: I } = Ga(
    f ?? ri
  ), O = W(), R = E ?? Ba, S = L ?? Ya, D = Y(() => {
    const B = o ?? O.ai.defaultInitialMessage;
    return (Array.isArray(B) ? B : [B]).filter((Z) => typeof Z == "string" && Z.length > 0);
  }, [o, O.ai.defaultInitialMessage]), V = !t && e.length === 0 && D.length > 0, z = P(null), j = P(null), J = P(null), ee = P(null), X = P(null), { showScrollBtn: Q, turnMinHeight: te, scrollToBottom: ge } = ni({
    viewportRef: z,
    contentRef: j,
    endRef: J,
    lastTurnRef: X,
    turnsCount: e.length,
    freezeTurnMinHeight: g
  }), ie = (B, se) => {
    const Z = se === e.length - 1, ce = {
      renderToolCall: s,
      onReplyQuote: u,
      onRendered: c,
      autoScrollIntoView: m,
      renderMarkdown: p
    }, Se = (w, N) => {
      const C = {
        message: w,
        inProgress: B.isInProgress,
        index: N,
        isCurrentMessage: !1,
        AssistantMessage: R,
        UserMessage: S,
        onRegenerate: k,
        onCopy: A,
        rawData: w.rawData || {},
        ...ce
      };
      return /* @__PURE__ */ r(
        S,
        {
          ...C
        },
        `${se}-u-${N}`
      );
    }, Ne = (w, N) => {
      const C = Z && N === B.assistantMessages.length - 1, U = B.userMessages.length + N, M = {
        message: w,
        inProgress: B.isInProgress,
        index: U,
        isCurrentMessage: C,
        AssistantMessage: R,
        UserMessage: S,
        onRegenerate: k,
        onCopy: A,
        rawData: w.rawData || {},
        ...ce
      };
      return /* @__PURE__ */ r(
        R,
        {
          ...M,
          isGenerating: B.isInProgress && C,
          isLoading: B.isInProgress && C && !w.content
        },
        `${se}-a-${N}`
      );
    };
    return /* @__PURE__ */ h(
      "div",
      {
        ref: Z ? X : void 0,
        className: y(
          "flex flex-col items-start justify-start gap-2 px-1",
          Z && "pb-5"
        ),
        style: {
          minHeight: Z && te || void 0
        },
        children: [
          B.userMessages.map(
            (w, N) => Se(w, N)
          ),
          B.thinking && B.thinking.titles.length > 0 && /* @__PURE__ */ r(
            ja,
            {
              titles: B.thinking.titles,
              title: O.ai.thoughtsGroupTitle,
              inProgress: B.thinking.inProgress,
              isWriting: B.thinking.isWriting
            }
          ),
          B.assistantMessages.map(
            (w, N) => Ne(w, N)
          ),
          B.endIndicator === "thinking" && /* @__PURE__ */ r(Ke, { title: O.ai.thinking, status: "executing" }),
          B.endIndicator === "activity" && /* @__PURE__ */ r(Ke, { status: "writing" }),
          B.feedback && /* @__PURE__ */ r(
            Va,
            {
              content: B.feedback.content,
              targetMessage: B.feedback.targetMessage,
              onCopy: A
            }
          ),
          Z && /* @__PURE__ */ r(Da, {})
        ]
      },
      `turn-${se}`
    );
  };
  return /* @__PURE__ */ h(Re, { children: [
    /* @__PURE__ */ h("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ r(
        "div",
        {
          ref: z,
          className: y(
            "flex-1 overflow-y-scroll",
            "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]",
            "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
            "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"
          ),
          children: /* @__PURE__ */ h(
            "div",
            {
              ref: j,
              className: y("flex h-full flex-col items-center p-4"),
              children: [
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: y(
                      V ? "flex flex-1" : "flex flex-col gap-6",
                      "w-full max-w-content"
                    ),
                    children: [
                      t && /* @__PURE__ */ r(ai, {}),
                      V && /* @__PURE__ */ r(
                        ti,
                        {
                          messages: D,
                          caption: a,
                          subtitle: i,
                          cta: l,
                          onClick: d,
                          fullscreen: v
                        }
                      ),
                      !t && e.map((B, se) => ie(B, se)),
                      n
                    ]
                  }
                ),
                /* @__PURE__ */ r("div", { ref: ee, className: "h-px shrink-0", "aria-hidden": !0 }),
                /* @__PURE__ */ r("footer", { className: "copilotKitMessagesFooter", ref: J, children: T }),
                /* @__PURE__ */ r(Te, { children: Q && /* @__PURE__ */ r(
                  K.div,
                  {
                    className: "sticky bottom-2 z-10 flex justify-center",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ r("div", { className: "rounded bg-f1-background", children: /* @__PURE__ */ r(
                      ne,
                      {
                        onClick: () => ge(),
                        label: O.ai.scrollToBottom,
                        variant: "neutral",
                        icon: $r,
                        hideLabel: !0
                      }
                    ) })
                  }
                ) })
              ]
            }
          )
        }
      ),
      !b && !V && /* @__PURE__ */ h(Re, { children: [
        /* @__PURE__ */ r(bt, { position: "top" }, "shadow-top"),
        /* @__PURE__ */ r(bt, { position: "bottom" }, "shadow-bottom")
      ] })
    ] }),
    x.isOpen && /* @__PURE__ */ r(
      $a,
      {
        onSubmit: F,
        onClose: I,
        reactionType: x.currentReaction,
        message: x.currentMessage
      }
    )
  ] });
}, ai = () => /* @__PURE__ */ r("div", { className: "flex h-full w-full max-w-content flex-col gap-6", children: /* @__PURE__ */ h("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ r("div", { className: "flex justify-end", children: /* @__PURE__ */ r(de, { className: "h-12 w-2/5 rounded-full" }) }),
  /* @__PURE__ */ r(de, { className: "mt-6 h-5 w-full rounded-md" }),
  /* @__PURE__ */ r(de, { className: "h-5 w-2/5 rounded-md" }),
  /* @__PURE__ */ r(de, { className: "h-5 w-4/5 rounded-md" })
] }) }), Os = {
  ai: wo.ai
}, Mn = We(null);
function Us({
  children: e,
  translations: t
}) {
  return /* @__PURE__ */ r(Mn.Provider, { value: t, children: e });
}
function Bs() {
  const e = _e(Mn);
  if (e === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return e;
}
function ii() {
  const { canvasEntities: e } = we();
  return e;
}
function $s(e) {
  const t = ii();
  if (!(!e || !t))
    return t[e];
}
const si = ({
  canProceed: e,
  submitDisabled: t,
  label: n,
  onConfirm: o,
  onSkip: a,
  showSkip: i
}) => {
  const l = W();
  return /* @__PURE__ */ h("div", { className: "flex items-center justify-end gap-3 p-3", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center", children: i && a && /* @__PURE__ */ r(
      pe,
      {
        variant: "outline",
        label: l.ai.clarifyingQuestion.skip,
        onClick: a,
        disabled: t
      }
    ) }),
    /* @__PURE__ */ r(
      pe,
      {
        disabled: !e || t,
        variant: "default",
        label: n,
        onClick: o
      }
    )
  ] });
}, Pn = ({ isSelected: e }) => /* @__PURE__ */ r(
  "div",
  {
    className: y(
      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
      e ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"
    ),
    children: e && /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
  }
), Et = 132, li = ({
  mode: e,
  hasSelection: t,
  hasCustomText: n,
  customAnswerText: o,
  isCustomAnswerActive: a,
  canProceed: i,
  inputRef: l,
  onActivate: d,
  onChangeText: s,
  onToggleActive: u,
  onConfirm: c
}) => {
  const p = W().ai.clarifyingQuestion.typeYourAnswer, f = P(null), g = yo(f, l);
  Ze(() => {
    const v = f.current;
    if (!v) return;
    v.style.height = "auto";
    const T = Math.min(v.scrollHeight, Et);
    v.style.height = `${T}px`, v.style.overflowY = v.scrollHeight > Et ? "auto" : "hidden";
  }, [o]);
  const b = e === "single" ? /* @__PURE__ */ r(Pn, { isSelected: n && !t }) : /* @__PURE__ */ r(
    ln,
    {
      checked: a,
      onCheckedChange: () => u(!a),
      title: p,
      hideLabel: !0
    }
  );
  return /* @__PURE__ */ h(
    "div",
    {
      className: y(
        "flex items-start gap-2 rounded-md px-2 py-2",
        "transition-colors hover:bg-f1-background-hover"
      ),
      children: [
        b,
        /* @__PURE__ */ r(
          "textarea",
          {
            ref: g,
            rows: 1,
            value: o ?? "",
            onChange: (v) => s(v.target.value),
            onFocus: d,
            onKeyDown: (v) => {
              v.key === "Enter" && !v.shiftKey && i && (v.preventDefault(), c());
            },
            placeholder: p,
            "aria-label": p,
            className: "min-w-0 flex-1 resize-none bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          }
        )
      ]
    }
  );
}, Dn = ye(
  ({ option: e, isSelected: t, mode: n, isTabStop: o, onToggle: a, onKeyNavigate: i }, l) => n === "single" ? /* @__PURE__ */ h(
    "div",
    {
      ref: l,
      role: "radio",
      "aria-checked": t,
      tabIndex: o ? 0 : -1,
      className: y(
        "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary",
        ue()
      ),
      onClick: () => a(e.id),
      onKeyDown: (d) => {
        if (d.key === " " || d.key === "Enter") {
          d.preventDefault(), a(e.id);
          return;
        }
        i?.(d);
      },
      children: [
        /* @__PURE__ */ r(Pn, { isSelected: t }),
        /* @__PURE__ */ r("span", { className: "text-base font-medium text-f1-foreground", children: e.label })
      ]
    }
  ) : /* @__PURE__ */ h(
    "div",
    {
      ref: l,
      className: y(
        "flex cursor-pointer items-center rounded-md pl-2 transition-colors hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ r(
          ln,
          {
            checked: t,
            onCheckedChange: () => a(e.id),
            title: e.label,
            hideLabel: !0
          }
        ),
        /* @__PURE__ */ r(
          "span",
          {
            className: "w-full py-2 pl-2 pr-2 text-base font-medium text-f1-foreground",
            onClick: () => a(e.id),
            children: e.label
          }
        )
      ]
    }
  )
);
Dn.displayName = "OptionRow";
const ci = ({
  mode: e,
  question: t,
  options: n,
  selectedOptionIds: o,
  allowCustomAnswer: a,
  hasSelection: i,
  hasCustomText: l,
  customAnswerText: d,
  isCustomAnswerActive: s,
  canProceed: u,
  customInputRef: c,
  autoFocus: m,
  onToggleOption: p,
  onActivateCustom: f,
  onChangeCustomText: g,
  onToggleCustomActive: b,
  onConfirm: v
}) => {
  const T = me(), E = (() => {
    if (e !== "single") return 0;
    const F = n.findIndex((I) => o.includes(I.id));
    return F >= 0 ? F : 0;
  })(), [L, k] = _(E), A = P([]);
  H(() => {
    m && e === "single" && A.current[L]?.focus();
  }, []);
  const x = (F) => {
    if (e !== "single") return;
    const I = n.length - 1;
    if (I < 0) return;
    let O = L;
    switch (F.key) {
      case "ArrowDown":
      case "ArrowRight":
        O = L >= I ? 0 : L + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        O = L <= 0 ? I : L - 1;
        break;
      case "Home":
        O = 0;
        break;
      case "End":
        O = I;
        break;
      default:
        return;
    }
    F.preventDefault(), k(O), A.current[O]?.focus();
  };
  return /* @__PURE__ */ h(
    "div",
    {
      className: "flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5",
      role: e === "single" ? "radiogroup" : "group",
      "aria-label": t,
      children: [
        n.map((F, I) => /* @__PURE__ */ r(
          K.div,
          {
            initial: T ? !1 : { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: T ? 0 : 0.2,
              ease: [0.4, 0, 0.2, 1],
              delay: T ? 0 : 0.12 + I * 0.06
            },
            children: /* @__PURE__ */ r(
              Dn,
              {
                ref: (O) => {
                  A.current[I] = O;
                },
                option: F,
                isSelected: o.includes(F.id),
                mode: e,
                isTabStop: e === "single" ? I === L : void 0,
                onToggle: p,
                onKeyNavigate: x
              }
            )
          },
          F.id
        )),
        a && /* @__PURE__ */ r(
          li,
          {
            mode: e,
            hasSelection: i,
            hasCustomText: l,
            customAnswerText: d,
            isCustomAnswerActive: s,
            canProceed: u,
            inputRef: c,
            onActivate: f,
            onChangeText: g,
            onToggleActive: b,
            onConfirm: v
          }
        )
      ]
    }
  );
}, di = ({
  question: e,
  stepLabel: t,
  isFirstStep: n,
  isFinalStep: o,
  canProceed: a,
  onBack: i,
  onNext: l,
  onCancel: d
}) => {
  const s = W();
  return /* @__PURE__ */ h("div", { className: "flex items-start gap-0.5 pl-4 pr-3", children: [
    /* @__PURE__ */ r(
      oe,
      {
        className: "min-w-0 flex-1 text-lg font-semibold text-f1-foreground",
        lines: 3,
        children: e
      }
    ),
    t && /* @__PURE__ */ h("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ r(
        pe,
        {
          variant: "ghost",
          size: "sm",
          onClick: i,
          disabled: n,
          label: s.ai.clarifyingQuestion.back,
          hideLabel: !0,
          icon: zr
        }
      ),
      /* @__PURE__ */ r("span", { className: "text-sm font-semibold text-f1-foreground-tertiary", children: t }),
      /* @__PURE__ */ r(
        pe,
        {
          variant: "ghost",
          size: "sm",
          onClick: l,
          disabled: o || !a,
          label: s.ai.clarifyingQuestion.next,
          hideLabel: !0,
          icon: rt
        }
      )
    ] }),
    /* @__PURE__ */ r(
      pe,
      {
        variant: "ghost",
        size: "sm",
        onClick: d,
        label: s.actions.cancel,
        hideLabel: !0,
        icon: Ee
      }
    )
  ] });
}, ui = "easeOut", fi = 0.3, zs = ({
  clarifyingQuestion: e,
  isSubmitDisabled: t
}) => /* @__PURE__ */ r(
  mi,
  {
    clarifyingQuestion: e,
    isSubmitDisabled: t
  }
), mi = ({
  clarifyingQuestion: e,
  isSubmitDisabled: t
}) => {
  const n = W(), o = me(), {
    currentStep: a,
    currentStepIndex: i,
    totalSteps: l,
    toggleOption: d,
    confirm: s,
    skip: u,
    cancel: c,
    back: m,
    setCustomAnswerText: p,
    setCustomAnswerActive: f,
    activateCustomAnswer: g
  } = e, {
    question: b,
    options: v,
    selectedOptionIds: T,
    selectionMode: E,
    optional: L,
    allowCustomAnswer: k,
    customAnswerText: A,
    isCustomAnswerActive: x
  } = a, F = P(null), I = E ?? "single", O = l > 1, R = i === 0, S = i === l - 1, D = O ? n.t("ai.clarifyingQuestion.stepOf", {
    current: String(i + 1),
    total: String(l)
  }) : void 0, V = T.length > 0, z = (A ?? "").trim().length > 0, j = V || x && z || L === !0, J = t === !0 && S, ee = () => {
    J || s();
  }, X = () => {
    J || u();
  }, Q = (Z) => {
    const ce = I === "single" && T.includes(Z);
    d(Z), I === "single" && !S && !ce && Promise.resolve().then(s);
  }, te = S ? n.ai.clarifyingQuestion.submit : n.ai.clarifyingQuestion.next, ge = L === !0 && !V && !(x && z), ie = () => {
    g(), requestAnimationFrame(() => {
      F.current?.focus();
    });
  }, B = (Z) => {
    Z.key === "Escape" && (Z.preventDefault(), c());
  }, se = o ? 0 : fi / 2;
  return /* @__PURE__ */ h("div", { className: "flex flex-col", onKeyDown: B, children: [
    /* @__PURE__ */ r("div", { className: "flex flex-col gap-3 pt-3", children: /* @__PURE__ */ r(Te, { mode: "wait", initial: !1, children: /* @__PURE__ */ h(
      K.div,
      {
        className: "flex flex-col gap-3",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: se, ease: ui },
        children: [
          /* @__PURE__ */ r(
            di,
            {
              question: b,
              stepLabel: D,
              isFirstStep: R,
              isFinalStep: S,
              canProceed: j,
              onBack: m,
              onNext: s,
              onCancel: c
            }
          ),
          /* @__PURE__ */ r(
            ci,
            {
              mode: I,
              question: b,
              options: v,
              selectedOptionIds: T,
              allowCustomAnswer: k,
              hasSelection: V,
              hasCustomText: z,
              customAnswerText: A,
              isCustomAnswerActive: x,
              canProceed: j,
              customInputRef: F,
              onToggleOption: Q,
              onActivateCustom: ie,
              onChangeCustomText: p,
              onToggleCustomActive: f,
              onConfirm: ee
            }
          )
        ]
      },
      i
    ) }) }),
    /* @__PURE__ */ r(
      si,
      {
        canProceed: j,
        submitDisabled: J,
        label: te,
        onConfirm: ee,
        onSkip: X,
        showSkip: ge
      }
    )
  ] });
};
function kt(e, t, n, o) {
  const a = Math.max(1, Math.min(e, t)), i = Math.min(n, 20), d = Math.min(i + o, a), s = Math.min(d, Math.floor(e / 2)), u = Math.min(d, Math.floor(t / 2)), c = (ie) => ie / e * 2 - 1, m = (ie) => ie / t * 2 - 1, p = 0, f = e, g = 0, b = t, v = s, T = e - s, E = u, L = t - u, k = c(p), A = c(f), x = m(g), F = m(b), I = c(v), O = c(T), R = m(E), S = m(L), D = 0, V = 0, z = 1, j = 1, J = s / e, ee = 1 - s / e, X = u / t, Q = 1 - u / t, te = new Float32Array([
    // Top strip
    k,
    x,
    A,
    x,
    k,
    R,
    k,
    R,
    A,
    x,
    A,
    R,
    // Bottom strip
    k,
    S,
    A,
    S,
    k,
    F,
    k,
    F,
    A,
    S,
    A,
    F,
    // Left strip
    k,
    R,
    I,
    R,
    k,
    S,
    k,
    S,
    I,
    R,
    I,
    S,
    // Right strip
    O,
    R,
    A,
    R,
    O,
    S,
    O,
    S,
    A,
    R,
    A,
    S
  ]), ge = new Float32Array([
    // Top strip
    D,
    V,
    z,
    V,
    D,
    X,
    D,
    X,
    z,
    V,
    z,
    X,
    // Bottom strip
    D,
    Q,
    z,
    Q,
    D,
    j,
    D,
    j,
    z,
    Q,
    z,
    j,
    // Left strip
    D,
    X,
    J,
    X,
    D,
    Q,
    D,
    Q,
    J,
    X,
    J,
    Q,
    // Right strip
    ee,
    X,
    z,
    X,
    ee,
    Q,
    ee,
    Q,
    z,
    X,
    z,
    Q
  ]);
  return { positions: te, uvs: ge };
}
function Ft(e, t, n) {
  const o = e.createShader(t);
  if (!o) throw new Error("Failed to create shader");
  if (e.shaderSource(o, n), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(o) || "Unknown shader error";
    throw e.deleteShader(o), new Error(a);
  }
  return o;
}
function hi(e, t, n) {
  const o = Ft(e, e.VERTEX_SHADER, t), a = Ft(e, e.FRAGMENT_SHADER, n), i = e.createProgram();
  if (!i) throw new Error("Failed to create program");
  if (e.attachShader(i, o), e.attachShader(i, a), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS)) {
    const l = e.getProgramInfoLog(i) || "Unknown link error";
    throw e.deleteProgram(i), e.deleteShader(o), e.deleteShader(a), new Error(l);
  }
  return e.deleteShader(o), e.deleteShader(a), i;
}
const pi = `#version 300 es
precision lowp float;

in vec2 vUV;
out vec4 outColor;

uniform vec2 uResolution;
uniform float uTime;
uniform float uBorderWidth;
uniform float uGlowWidth;
uniform float uBorderRadius;
uniform vec3 uColors[4];

// dark/light mode
uniform float uGlowExponent;
uniform float uGlowFactor;

const float PI = 3.14159265359;
const float TWO_PI = 2.0 * PI;
const float HALF_PI = 0.5 * PI;

// Light source parameters (constants)
const vec4 startPositions = vec4(0.0, PI, HALF_PI, 1.5 * PI);
const vec4 speeds = vec4(-1.9, -1.9, -1.5, 2.1);
const vec4 innerRadius = vec4(PI * 0.8, PI * 0.7, PI * 0.3, PI * 0.1);
const vec4 outerRadius = vec4(PI * 1.2, PI * 0.9, PI * 0.6, PI * 0.4);

/**
 * @brief Generates a random float value based on the input 2D coordinates.
 * @param st The input 2D coordinates.
 * @return float A random float value.
 */
float random(vec2 st) {
	return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 random2(vec2 st) {
	return vec2(random(st), random(st + 1.0));
}

/**
 * Derivative-based Anti-aliasing
 */
float aaStep(float edge, float d) {
    // Calculate the width of the anti-aliasing transition
    // This is the distance the value changes over one pixel.
	float width = fwidth(d);
	return smoothstep(edge - width * 0.5, edge + width * 0.5, d);
}

/**
 * @brief Provides an anti-aliased version of fract().
 * @param x The input value.
 * @return float The anti-aliased fractional part of x.
 */
float aaFract(float x) {
	float f = fract(x);
	float w = fwidth(x); // Get the width of the transition band for one pixel.

    // Use smoothstep to fade the line out as it approaches the 1.0 boundary.
    // The fade happens over a distance equal to the pixel width 'w'.
	float smooth_f = f * (1.0 - smoothstep(1.0 - w, 1.0, f));

	return smooth_f;
}

/**
 * @name sdRoundedBox
 * @description Calculates the signed distance from a point to a rounded rectangle.
 * @param {vec2} p - The point coordinates.
 * @param {vec2} b - Half the size of the rectangle (half width and half height).
 * @param {float} r - The corner radius.
 * @returns {float} - Signed distance to the surface of the rounded rectangle.
 */
float sdRoundedBox(in vec2 p, in vec2 b, in float r) {
	vec2 q = abs(p) - b + r;
	return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

/**
 * @brief Calculates the smooth inner glow intensity for a rectangle.
 * @param p The current pixel coordinate, centered at (0,0).
 * @param b The half-dimensions of the rectangle.
 * @param radius The radius of the glow/blur.
 * @return float The glow intensity, from 0.0 to 1.0.
 */
float getInnerGlow(vec2 p, vec2 b, float radius) {
	// Check if the pixel is outside the rectangle.
	// vec2 d_out = abs(p) - b;
	// if (max(d_out.x, d_out.y) > 0.0) {
	// 	return 0.0;
	// }

	// Calculate the distance to the nearest vertical and horizontal edges (positive inwards).
	float dist_x = b.x - abs(p.x);
	float dist_y = b.y - abs(p.y);

	// Calculate the horizontal and vertical glow intensities independently.
	float glow_x = smoothstep(radius, 0.0, dist_x);
	float glow_y = smoothstep(radius, 0.0, dist_y);

	// Combine the two directional glows using a screen blend mode: 1.0 - (1.0 - a) * (1.0 - b).
	return 1.0 - (1.0 - glow_x) * (1.0 - glow_y);
}

float getVignette(vec2 uv) {
	vec2 vignetteUv = uv;
	vignetteUv = vignetteUv * (1.0 - vignetteUv);
	float vignette = vignetteUv.x * vignetteUv.y * 25.0; // multiply with sth for intensity
	vignette = pow(vignette, 0.16); // change pow for modifying the extend of the  vignette
	// vignette = smoothstep(0.0, 0.7, vignette); // smoothstep to avoid hard edges
	vignette = 1.0 - vignette;

	return vignette;
}

/**
 * Convert UV coordinates to angle (0 to 2π) around the border
 */
float uvToAngle(vec2 uv) {
	vec2 center = vec2(0.5);
	vec2 dir = uv - center;
	return atan(dir.y, dir.x) + PI;
}

/**
 * Get current light center position (angle) based on start position, speed and time
 */
// float getLightCenter(float startPos, float speed, float time) {
//     return mod(startPos + speed * time, TWO_PI);
// }

void main() {
	vec2 uv = vUV;
	vec2 pos = uv * uResolution;
	vec2 centeredPos = pos - uResolution * 0.5;
	vec2 size = uResolution - uBorderWidth;
	vec2 halfSize = size * 0.5;

	// Calculate the signed distance from the rounded rectangle
	float dBorderBox = sdRoundedBox(centeredPos, halfSize, uBorderRadius);
	float border = aaStep(0.0, dBorderBox);

	// This will create a gradient mask to safely fade out from borders to inner edges.
	float glow = getInnerGlow(centeredPos, halfSize, uGlowWidth);
	// glow = smoothstep(0.0, 0.5, glow);
	// glow = aaFract(glow * 10.0);

	float vignette = getVignette(uv);
	glow *= vignette;

	float posAngle = uvToAngle(uv);

	// vec4 lightCenter = vec4(
	// 	getLightCenter(startPositions.x, speeds.x, uTime),
	// 	getLightCenter(startPositions.y, speeds.y, uTime),
	// 	getLightCenter(startPositions.z, speeds.z, uTime),
	// 	getLightCenter(startPositions.w, speeds.w, uTime)
	// );
	vec4 lightCenter = mod(startPositions + speeds * uTime, TWO_PI);

	vec4 angleDist = abs(posAngle - lightCenter);

	// Calculate shortest angular distance (considering wrap-around)
	vec4 disToLight = min(angleDist, TWO_PI - angleDist) / TWO_PI;

	float intensityBorder[4];
	intensityBorder[0] = 1.0;
	intensityBorder[1] = smoothstep(0.4, 0.0, disToLight.y);
	intensityBorder[2] = smoothstep(0.4, 0.0, disToLight.z);
	intensityBorder[3] = smoothstep(0.2, 0.0, disToLight.w) * 0.5;

	// mix these 4 colors with distance
	vec3 borderColor = vec3(0.0);
	for(int i = 0; i < 4; i++) {
		borderColor = mix(borderColor, uColors[i], intensityBorder[i]);
	}
	borderColor *= 1.1;

	borderColor = clamp(borderColor, 0.0, 1.0);

	float intensityGlow[4];
	intensityGlow[0] = smoothstep(0.9, 0.0, disToLight.x);
	intensityGlow[1] = smoothstep(0.7, 0.0, disToLight.y);
	intensityGlow[2] = smoothstep(0.4, 0.0, disToLight.z);
	intensityGlow[3] = smoothstep(0.1, 0.0, disToLight.w) * 0.7;

	// timely breathing effect
	vec4 breath = smoothstep(0.0, 1.0, sin(uTime * 1.0 + startPositions * PI) * 0.2 + 0.8);

	vec3 glowColor = vec3(0.0);
	glowColor += uColors[0] * intensityGlow[0] * breath.x;
	glowColor += uColors[1] * intensityGlow[1] * breath.y;
	glowColor += uColors[2] * intensityGlow[2] * breath.z;
	glowColor += uColors[3] * intensityGlow[3] * breath.w * glow; // fade it a little bit

	glow = pow(glow, uGlowExponent);
	glow *= random(pos + uTime) * 0.1 + 1.0;
	glowColor *= glow * uGlowFactor;
	glowColor = clamp(glowColor, 0.0, 1.0);

	vec3 color = mix(glowColor, borderColor + glowColor * 0.2, border);

	float alpha = mix(glow, 1.0, border);

	outColor = vec4(color, alpha);
}
`, gi = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, vi = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function bi(e) {
  const t = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!t)
    throw new Error(`Invalid color format: ${e}`);
  const [, n, o, a] = t;
  return [parseInt(n) / 255, parseInt(o) / 255, parseInt(a) / 255];
}
class Gs {
  element;
  canvas;
  options;
  running = !1;
  disposed = !1;
  startTime = 0;
  lastTime = 0;
  rafId = null;
  glr;
  observer;
  constructor(t = {}) {
    this.options = {
      width: t.width ?? 600,
      height: t.height ?? 600,
      ratio: t.ratio ?? window.devicePixelRatio ?? 1,
      borderWidth: t.borderWidth ?? 8,
      glowWidth: t.glowWidth ?? 200,
      borderRadius: t.borderRadius ?? 8,
      mode: t.mode ?? "light",
      ...t
    }, this.canvas = document.createElement("canvas"), this.options.classNames && (this.canvas.className = this.options.classNames), this.options.styles && Object.assign(this.canvas.style, this.options.styles), this.canvas.style.display = "block", this.canvas.style.transformOrigin = "center", this.canvas.style.pointerEvents = "none", this.element = this.canvas, this.setupGL();
  }
  start() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.running) return;
    if (!this.glr) {
      console.error("WebGL resources are not initialized.");
      return;
    }
    this.running = !0, this.startTime = performance.now(), this.resize(
      this.options.width ?? 600,
      this.options.height ?? 600,
      this.options.ratio
    ), this.glr.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.glr.gl.useProgram(this.glr.program), this.glr.gl.uniform2f(
      this.glr.uResolution,
      this.canvas.width,
      this.canvas.height
    ), this.checkGLError(this.glr.gl, "start: after initial setup");
    const t = () => {
      if (!this.running || !this.glr) return;
      this.rafId = requestAnimationFrame(t);
      const n = performance.now();
      if (n - this.lastTime < 1e3 / 32) return;
      this.lastTime = n;
      const a = (n - this.startTime) * 1e-3;
      this.render(a);
    };
    this.rafId = requestAnimationFrame(t);
  }
  pause() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = !0, this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
    const { gl: t, vao: n, positionBuffer: o, uvBuffer: a, program: i } = this.glr;
    n && t.deleteVertexArray(n), o && t.deleteBuffer(o), a && t.deleteBuffer(a), t.deleteProgram(i), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(t, n, o) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = t, this.options.height = n, o && (this.options.ratio = o), !this.running) return;
    const { gl: a, program: i, vao: l, positionBuffer: d, uvBuffer: s, uResolution: u } = this.glr, c = o ?? this.options.ratio ?? window.devicePixelRatio ?? 1, m = Math.max(1, Math.floor(t * c)), p = Math.max(1, Math.floor(n * c));
    this.canvas.style.width = `${t}px`, this.canvas.style.height = `${n}px`, (this.canvas.width !== m || this.canvas.height !== p) && (this.canvas.width = m, this.canvas.height = p), a.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(a, "resize: after viewport setup");
    const { positions: f, uvs: g } = kt(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * c,
      this.options.glowWidth * c
    );
    a.bindVertexArray(l), a.bindBuffer(a.ARRAY_BUFFER, d), a.bufferData(a.ARRAY_BUFFER, f, a.STATIC_DRAW);
    const b = a.getAttribLocation(i, "aPosition");
    a.enableVertexAttribArray(b), a.vertexAttribPointer(b, 2, a.FLOAT, !1, 0, 0), this.checkGLError(a, "resize: after position buffer update"), a.bindBuffer(a.ARRAY_BUFFER, s), a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW);
    const v = a.getAttribLocation(i, "aUV");
    a.enableVertexAttribArray(v), a.vertexAttribPointer(v, 2, a.FLOAT, !1, 0, 0), this.checkGLError(a, "resize: after UV buffer update"), a.useProgram(i), a.uniform2f(u, this.canvas.width, this.canvas.height), a.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * c), a.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * c), a.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * c), this.checkGLError(a, "resize: after uniform updates");
    const T = performance.now();
    this.lastTime = T;
    const E = (T - this.startTime) * 1e-3;
    this.render(E);
  }
  /**
   * Automatically resizes the canvas to match the dimensions of the given element.
   * @note using ResizeObserver
   */
  autoResize(t) {
    this.observer && this.observer.disconnect(), this.observer = new ResizeObserver(() => {
      const n = t.getBoundingClientRect();
      this.resize(n.width, n.height);
    }), this.observer.observe(t);
  }
  fadeIn() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((t, n) => {
      const o = this.canvas.animate(
        [
          { opacity: 0, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" }
        ],
        { duration: 300, easing: "ease-out", fill: "forwards" }
      );
      o.onfinish = () => t(), o.oncancel = () => n("canceled");
    });
  }
  fadeOut() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((t, n) => {
      const o = this.canvas.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" }
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      );
      o.onfinish = () => t(), o.oncancel = () => n("canceled");
    });
  }
  checkGLError(t, n) {
    let o = t.getError();
    if (o !== t.NO_ERROR)
      for (console.error(`WebGL Error in ${n}`); o !== t.NO_ERROR; ) {
        const a = this.getGLErrorName(t, o);
        console.error(`${a} (0x${o.toString(16)})`), o = t.getError();
      }
  }
  getGLErrorName(t, n) {
    switch (n) {
      case t.INVALID_ENUM:
        return "INVALID_ENUM";
      case t.INVALID_VALUE:
        return "INVALID_VALUE";
      case t.INVALID_OPERATION:
        return "INVALID_OPERATION";
      case t.INVALID_FRAMEBUFFER_OPERATION:
        return "INVALID_FRAMEBUFFER_OPERATION";
      case t.OUT_OF_MEMORY:
        return "OUT_OF_MEMORY";
      case t.CONTEXT_LOST_WEBGL:
        return "CONTEXT_LOST_WEBGL";
      default:
        return "UNKNOWN_ERROR";
    }
  }
  setupGL() {
    const t = this.canvas.getContext("webgl2", {
      antialias: !1,
      alpha: !0
    });
    if (!t)
      throw new Error("WebGL2 is required but not available.");
    const n = hi(t, gi, pi);
    this.checkGLError(t, "setupGL: after createProgram");
    const o = t.createVertexArray();
    t.bindVertexArray(o), this.checkGLError(t, "setupGL: after VAO creation");
    const a = this.canvas.width || 2, i = this.canvas.height || 2, { positions: l, uvs: d } = kt(
      a,
      i,
      this.options.borderWidth,
      this.options.glowWidth
    ), s = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, s), t.bufferData(t.ARRAY_BUFFER, l, t.STATIC_DRAW);
    const u = t.getAttribLocation(n, "aPosition");
    t.enableVertexAttribArray(u), t.vertexAttribPointer(u, 2, t.FLOAT, !1, 0, 0), this.checkGLError(t, "setupGL: after position buffer setup");
    const c = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, c), t.bufferData(t.ARRAY_BUFFER, d, t.STATIC_DRAW);
    const m = t.getAttribLocation(n, "aUV");
    t.enableVertexAttribArray(m), t.vertexAttribPointer(m, 2, t.FLOAT, !1, 0, 0), this.checkGLError(t, "setupGL: after UV buffer setup");
    const p = t.getUniformLocation(n, "uResolution"), f = t.getUniformLocation(n, "uTime"), g = t.getUniformLocation(n, "uBorderWidth"), b = t.getUniformLocation(n, "uGlowWidth"), v = t.getUniformLocation(n, "uBorderRadius"), T = t.getUniformLocation(n, "uColors"), E = t.getUniformLocation(n, "uGlowExponent"), L = t.getUniformLocation(n, "uGlowFactor");
    t.useProgram(n), t.uniform1f(g, this.options.borderWidth), t.uniform1f(b, this.options.glowWidth), t.uniform1f(v, this.options.borderRadius), this.options.mode === "dark" ? (t.uniform1f(E, 2), t.uniform1f(L, 1.8)) : (t.uniform1f(E, 1), t.uniform1f(L, 1));
    const k = (this.options.colors || vi).map(bi);
    for (let A = 0; A < k.length; A++)
      t.uniform3f(
        t.getUniformLocation(n, `uColors[${A}]`),
        ...k[A]
      );
    this.checkGLError(t, "setupGL: after uniform setup"), t.bindVertexArray(null), t.bindBuffer(t.ARRAY_BUFFER, null), this.glr = {
      gl: t,
      program: n,
      vao: o,
      positionBuffer: s,
      uvBuffer: c,
      uResolution: p,
      uTime: f,
      uBorderWidth: g,
      uGlowWidth: b,
      uBorderRadius: v,
      uColors: T
    };
  }
  render(t) {
    if (!this.glr) return;
    const { gl: n, program: o, vao: a, uTime: i } = this.glr;
    n.useProgram(o), n.bindVertexArray(a), n.uniform1f(i, t), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.disable(n.BLEND), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLES, 0, 24), this.checkGLError(n, "render: after draw call"), n.bindVertexArray(null);
  }
}
const St = ["lowp", "mediump", "highp"], xi = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, yi = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, It = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, Lt = "iTime", Mt = "iTimeDelta", Pt = "iDate", Dt = "iFrame", _t = "iMouse", Ot = "iResolution", wi = "iChannel", Ut = "iChannelResolution", Bt = "iDeviceOrientation";
function Ni(e, t) {
  return e.includes("Matrix") && Array.isArray(t);
}
function Ci(e, t) {
  return e.includes("v") && Array.isArray(t) && t.length > Number.parseInt(e.charAt(0));
}
function Ti(e, t) {
  return !e.includes("v") && Array.isArray(t) && t.length > Number.parseInt(e.charAt(0));
}
const Ri = (e, t, n, o) => {
  if (Ti(n, o))
    switch (n) {
      case "2f":
        return e.uniform2f(t, o[0], o[1]);
      case "3f":
        return e.uniform3f(t, o[0], o[1], o[2]);
      case "4f":
        return e.uniform4f(t, o[0], o[1], o[2], o[3]);
      case "2i":
        return e.uniform2i(t, o[0], o[1]);
      case "3i":
        return e.uniform3i(t, o[0], o[1], o[2]);
      case "4i":
        return e.uniform4i(t, o[0], o[1], o[2], o[3]);
    }
  if (typeof o == "number")
    return n === "1i" ? e.uniform1i(t, o) : e.uniform1f(t, o);
  switch (n) {
    case "1iv":
      return e.uniform1iv(t, o);
    case "2iv":
      return e.uniform2iv(t, o);
    case "3iv":
      return e.uniform3iv(t, o);
    case "4iv":
      return e.uniform4iv(t, o);
    case "1fv":
      return e.uniform1fv(t, o);
    case "2fv":
      return e.uniform2fv(t, o);
    case "3fv":
      return e.uniform3fv(t, o);
    case "4fv":
      return e.uniform4fv(t, o);
    case "Matrix2fv":
      return e.uniformMatrix2fv(t, !1, o);
    case "Matrix3fv":
      return e.uniformMatrix3fv(t, !1, o);
    case "Matrix4fv":
      return e.uniformMatrix4fv(t, !1, o);
  }
}, Ai = (e) => {
  switch (e) {
    case "1f":
      return "float";
    case "2f":
      return "vec2";
    case "3f":
      return "vec3";
    case "4f":
      return "vec4";
    case "1i":
      return "int";
    case "2i":
      return "ivec2";
    case "3i":
      return "ivec3";
    case "4i":
      return "ivec4";
    case "1iv":
      return "int";
    case "2iv":
      return "ivec2";
    case "3iv":
      return "ivec3";
    case "4iv":
      return "ivec4";
    case "1fv":
      return "float";
    case "2fv":
      return "vec2";
    case "3fv":
      return "vec3";
    case "4fv":
      return "vec4";
    case "Matrix2fv":
      return "mat2";
    case "Matrix3fv":
      return "mat3";
    case "Matrix4fv":
      return "mat4";
    default:
      console.error(
        xe(
          `The uniform type "${e}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, Ye = 9729, $t = 9728, Ei = 9987, zt = 33071, Gt = 10497;
class ki {
  gl;
  url;
  wrapS;
  wrapT;
  minFilter;
  magFilter;
  source;
  pow2canvas;
  isLoaded = !1;
  isVideo = !1;
  flipY = -1;
  width = 0;
  height = 0;
  _webglTexture = null;
  constructor(t) {
    this.gl = t;
  }
  updateTexture = (t, n, o) => {
    const { gl: a } = this, i = 0, l = a.RGBA, d = a.RGBA, s = a.UNSIGNED_BYTE;
    a.bindTexture(a.TEXTURE_2D, t), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, o), a.texImage2D(
      a.TEXTURE_2D,
      i,
      l,
      d,
      s,
      n
    );
  };
  setupVideo = (t) => {
    const n = document.createElement("video");
    let o = !1, a = !1;
    n.autoplay = !0, n.muted = !0, n.loop = !0, n.crossOrigin = "anonymous";
    const i = () => {
      o && a && (this.isLoaded = !0);
    };
    return n.addEventListener(
      "playing",
      () => {
        o = !0, this.width = n.videoWidth || 0, this.height = n.videoHeight || 0, i();
      },
      !0
    ), n.addEventListener(
      "timeupdate",
      () => {
        a = !0, i();
      },
      !0
    ), n.src = t, n;
  };
  makePowerOf2 = (t) => t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(t.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(t.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(
    t,
    0,
    0,
    this.pow2canvas.width,
    this.pow2canvas.height
  ), console.warn(
    xe(
      `Image is not power of two ${t.width} x ${t.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : t;
  load = async (t) => {
    const { gl: n } = this, {
      url: o,
      wrapS: a,
      wrapT: i,
      minFilter: l,
      magFilter: d,
      flipY: s = -1
    } = t;
    if (!o)
      return Promise.reject(
        new Error(
          xe(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const u = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(o), c = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(o);
    if (u === null && c === null)
      return Promise.reject(
        new Error(
          xe(
            `Please upload a video or an image with a valid format (url: ${o})`
          )
        )
      );
    Object.assign(this, { url: o, wrapS: a, wrapT: i, minFilter: l, magFilter: d, flipY: s });
    const m = 0, p = n.RGBA, f = 1, g = 1, b = 0, v = n.RGBA, T = n.UNSIGNED_BYTE, E = new Uint8Array([255, 255, 255, 0]), L = n.createTexture();
    if (n.bindTexture(n.TEXTURE_2D, L), n.texImage2D(
      n.TEXTURE_2D,
      m,
      p,
      f,
      g,
      b,
      v,
      T,
      E
    ), c) {
      const F = this.setupVideo(o);
      return n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), this._webglTexture = L, this.source = F, this.isVideo = !0, F.play().then(() => this);
    }
    async function k() {
      return new Promise((F, I) => {
        const O = new Image();
        O.crossOrigin = "anonymous", O.onload = () => {
          F(O);
        }, O.onerror = () => {
          I(new Error(xe(`failed loading url: ${o}`)));
        }, O.src = o ?? "";
      });
    }
    let A = await k(), x = (A.width & A.width - 1) === 0 && (A.height & A.height - 1) === 0;
    return (t.wrapS !== zt || t.wrapT !== zt || t.minFilter !== $t && t.minFilter !== Ye) && !x && (A = this.makePowerOf2(A), x = !0), n.bindTexture(n.TEXTURE_2D, L), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, s), n.texImage2D(
      n.TEXTURE_2D,
      m,
      p,
      v,
      T,
      A
    ), x && t.minFilter !== $t && t.minFilter !== Ye && n.generateMipmap(n.TEXTURE_2D), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_WRAP_S,
      this.wrapS || Gt
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_WRAP_T,
      this.wrapT || Gt
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_MIN_FILTER,
      this.minFilter || Ei
    ), n.texParameteri(
      n.TEXTURE_2D,
      n.TEXTURE_MAG_FILTER,
      this.magFilter || Ye
    ), this._webglTexture = L, this.source = A, this.isVideo = !1, this.isLoaded = !0, this.width = A.width || 0, this.height = A.height || 0, this;
  };
}
const xe = (e) => `react-shaders: ${e}`, Vt = (e) => {
  if ("changedTouches" in e) {
    const t = e.changedTouches[0];
    return [t?.clientX ?? 0, t?.clientY ?? 0];
  }
  return [e.clientX, e.clientY];
}, Wt = (e, t, n) => e * (1 - n) + t * n, Fi = (e, t, n) => n > 0 ? e.substring(0, n) + t + e.substring(n, e.length) : t + e;
function Si({
  fs: e,
  vs: t = It,
  textures: n = [],
  uniforms: o,
  clearColor: a = [0, 0, 0, 1],
  precision: i = "highp",
  style: l,
  contextAttributes: d = {},
  lerp: s = 1,
  devicePixelRatio: u = 1,
  onDoneLoadingTextures: c,
  onError: m = console.error,
  onWarning: p = console.warn
}) {
  const f = P(null), g = P(null), b = P(null), v = P(null), T = P(void 0), E = P(void 0), L = P(!1), k = P(void 0), A = P(0), x = P([0, 0]), F = P([]), I = P(0), O = P(void 0), R = P({
    [Lt]: { type: "float", isNeeded: !1, value: 0 },
    [Mt]: { type: "float", isNeeded: !1, value: 0 },
    [Pt]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [_t]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [Ot]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Dt]: { type: "int", isNeeded: !1, value: 0 },
    [Bt]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), S = P(o), D = (w, N) => {
    const C = "width" in w ? w.width ?? 0 : 0, U = "height" in w ? w.height ?? 0 : 0, M = R.current.iChannelResolution;
    if (!M) return;
    const G = Array.isArray(M.value) ? M.value : M.value = [];
    G[N * 3] = C * u, G[N * 3 + 1] = U * u, G[N * 3 + 2] = 0;
  }, V = () => {
    f.current && (g.current = f.current.getContext("webgl", d) || f.current.getContext(
      "experimental-webgl",
      d
    ), g.current?.getExtension("OES_standard_derivatives"), g.current?.getExtension("EXT_shader_texture_lod"));
  }, z = () => {
    const w = g.current;
    b.current = w?.createBuffer() ?? null, w?.bindBuffer(w.ARRAY_BUFFER, b.current);
    const N = [
      1,
      1,
      0,
      -1,
      1,
      0,
      1,
      -1,
      0,
      -1,
      -1,
      0
    ];
    w?.bufferData(w.ARRAY_BUFFER, new Float32Array(N), w.STATIC_DRAW);
  }, j = ({
    alpha: w,
    beta: N,
    gamma: C
  }) => {
    R.current.iDeviceOrientation.value = [
      w ?? 0,
      N ?? 0,
      C ?? 0,
      window.orientation ?? 0
    ];
  }, J = (w) => {
    const [N = 0, C = 0] = Vt(w), U = N - (k.current?.left ?? 0) - window.pageXOffset, M = (k.current?.height ?? 0) - C - (k.current?.top ?? 0) - window.pageYOffset;
    L.current = !0;
    const G = Array.isArray(R.current.iMouse?.value) ? R.current.iMouse.value : void 0;
    G && (G[2] = U, G[3] = M), x.current[0] = U, x.current[1] = M;
  }, ee = (w) => {
    k.current = f.current?.getBoundingClientRect();
    const [N = 0, C = 0] = Vt(w), U = N - (k.current?.left ?? 0), M = (k.current?.height ?? 0) - C - (k.current?.top ?? 0);
    if (s !== 1)
      x.current[0] = U, x.current[1] = M;
    else {
      const G = Array.isArray(R.current.iMouse?.value) ? R.current.iMouse.value : void 0;
      G && (G[0] = U, G[1] = M);
    }
  }, X = () => {
    const w = Array.isArray(R.current.iMouse?.value) ? R.current.iMouse.value : void 0;
    w && (w[2] = 0, w[3] = 0);
  }, Q = () => {
    const w = g.current;
    if (!w) return;
    k.current = f.current?.getBoundingClientRect();
    const N = u, C = Math.floor(
      (k.current?.width ?? 1) * N
    ), U = Math.floor(
      (k.current?.height ?? 1) * N
    );
    if (w.canvas.width = C, w.canvas.height = U, R.current.iResolution?.isNeeded && v.current) {
      const M = w.getUniformLocation(
        v.current,
        Ot
      );
      w.uniform2fv(M, [w.canvas.width, w.canvas.height]);
    }
  }, te = (w, N) => {
    const C = g.current;
    if (!C) return null;
    const U = C.createShader(w);
    if (!U) return null;
    if (C.shaderSource(U, N), C.compileShader(U), !C.getShaderParameter(U, C.COMPILE_STATUS)) {
      p?.(xe(`Error compiling the shader:
${N}`));
      const M = C.getShaderInfoLog(U);
      C.deleteShader(U), m?.(xe(`Shader compiler log: ${M}`));
    }
    return U;
  }, ge = (w, N) => {
    const C = g.current;
    if (!C) return;
    const U = te(C.FRAGMENT_SHADER, w), M = te(C.VERTEX_SHADER, N);
    if (v.current = C.createProgram(), !(!v.current || !M || !U)) {
      if (C.attachShader(v.current, M), C.attachShader(v.current, U), C.linkProgram(v.current), !C.getProgramParameter(v.current, C.LINK_STATUS)) {
        m?.(
          xe(
            `Unable to initialize the shader program: ${C.getProgramInfoLog(
              v.current
            )}`
          )
        );
        return;
      }
      C.useProgram(v.current), T.current = C.getAttribLocation(
        v.current,
        "aVertexPosition"
      ), C.enableVertexAttribArray(T.current);
    }
  }, ie = () => {
    if (o)
      for (const w of Object.keys(o)) {
        const N = o[w];
        if (!N) continue;
        const { value: C, type: U } = N, M = Ai(U);
        if (!M) continue;
        const G = {};
        if (Ni(U, C)) {
          const le = U.length, he = Number.parseInt(U.charAt(le - 3)), Ce = Math.floor(C.length / (he * he));
          C.length > he * he && (G.arraySize = `[${Ce}]`);
        } else Ci(U, C) && (G.arraySize = `[${Math.floor(C.length / Number.parseInt(U.charAt(0)))}]`);
        R.current[w] = {
          type: M,
          isNeeded: !1,
          value: C,
          ...G
        };
      }
  }, B = () => {
    const w = g.current;
    if (w)
      if (n && n.length > 0) {
        R.current[`${Ut}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${n.length}]`,
          value: []
        };
        const N = n.map(
          (C, U) => (R.current[`${wi}${U}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, D(C, U), F.current[U] = new ki(w), F.current[U]?.load(C).then((M) => {
            D(M, U);
          }))
        );
        Promise.all(N).then(() => {
          c && c();
        }).catch((C) => {
          m?.(C), c && c();
        });
      } else c && c();
  }, se = (w) => {
    const N = St.includes(i ?? "highp"), C = `precision ${N ? i : St[1]} float;
`;
    N || p?.(
      xe(
        `wrong precision type ${i}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let U = C.concat(`#define DPR ${u.toFixed(1)}
`).concat(w.replace(/texture\(/g, "texture2D("));
    for (const G of Object.keys(R.current))
      if (w.includes(G)) {
        const le = R.current[G];
        if (!le) continue;
        U = Fi(
          U,
          `uniform ${le.type} ${G}${le.arraySize || ""}; 
`,
          U.lastIndexOf(C) + C.length
        ), le.isNeeded = !0;
      }
    return w.includes("mainImage") && (U = U.concat(xi)), U;
  }, Z = (w) => {
    const N = g.current;
    if (!N || !v.current) return;
    const C = I.current ? (w - I.current) / 1e3 : 0;
    I.current = w;
    const U = S.current;
    if (U)
      for (const M of Object.keys(U)) {
        const G = U[M];
        if (G && R.current[M]?.isNeeded) {
          if (!v.current) return;
          const le = N.getUniformLocation(
            v.current,
            M
          );
          if (!le) return;
          Ri(
            N,
            le,
            G.type,
            G.value
          );
        }
      }
    if (R.current.iMouse?.isNeeded) {
      const M = N.getUniformLocation(
        v.current,
        _t
      );
      N.uniform4fv(M, R.current.iMouse.value);
    }
    if (R.current.iChannelResolution?.isNeeded) {
      const M = N.getUniformLocation(
        v.current,
        Ut
      );
      N.uniform3fv(
        M,
        R.current.iChannelResolution.value
      );
    }
    if (R.current.iDeviceOrientation?.isNeeded) {
      const M = N.getUniformLocation(
        v.current,
        Bt
      );
      N.uniform4fv(
        M,
        R.current.iDeviceOrientation.value
      );
    }
    if (R.current.iTime?.isNeeded) {
      const M = N.getUniformLocation(
        v.current,
        Lt
      );
      N.uniform1f(M, A.current += C);
    }
    if (R.current.iTimeDelta?.isNeeded) {
      const M = N.getUniformLocation(
        v.current,
        Mt
      );
      N.uniform1f(M, C);
    }
    if (R.current.iDate?.isNeeded) {
      const M = /* @__PURE__ */ new Date(), G = M.getMonth() + 1, le = M.getDate(), he = M.getFullYear(), Ce = M.getHours() * 60 * 60 + M.getMinutes() * 60 + M.getSeconds() + M.getMilliseconds() * 1e-3, ke = N.getUniformLocation(
        v.current,
        Pt
      );
      N.uniform4fv(ke, [he, G, le, Ce]);
    }
    if (R.current.iFrame?.isNeeded) {
      const M = N.getUniformLocation(
        v.current,
        Dt
      ), G = R.current.iFrame.value;
      N.uniform1i(M, G), R.current.iFrame.value = G + 1;
    }
    if (F.current.length > 0)
      for (let M = 0; M < F.current.length; M++) {
        const G = F.current[M];
        if (!G) return;
        const { isVideo: le, _webglTexture: he, source: Ce, flipY: ke, isLoaded: Ie } = G;
        if (!Ie || !he || !Ce) return;
        if (R.current[`iChannel${M}`]?.isNeeded) {
          if (!v.current) return;
          const ae = N.getUniformLocation(
            v.current,
            `iChannel${M}`
          );
          N.activeTexture(N.TEXTURE0 + M), N.bindTexture(N.TEXTURE_2D, he), N.uniform1i(ae, M), le && G.updateTexture(
            he,
            Ce,
            ke
          );
        }
      }
  }, ce = (w) => {
    const N = g.current;
    if (!N) return;
    N.viewport(0, 0, N.drawingBufferWidth, N.drawingBufferHeight), N.clear(N.COLOR_BUFFER_BIT | N.DEPTH_BUFFER_BIT), N.bindBuffer(N.ARRAY_BUFFER, b.current), N.vertexAttribPointer(
      T.current ?? 0,
      3,
      N.FLOAT,
      !1,
      0,
      0
    ), Z(w), N.drawArrays(N.TRIANGLE_STRIP, 0, 4);
    const C = R.current.iMouse?.value;
    if (R.current.iMouse?.isNeeded && s !== 1 && Array.isArray(C)) {
      const U = C[0] ?? 0, M = C[1] ?? 0;
      C[0] = Wt(U, x.current[0] ?? 0, s), C[1] = Wt(M, x.current[1] ?? 0, s);
    }
    E.current = requestAnimationFrame(ce);
  }, Se = () => {
    const w = { passive: !0 };
    R.current.iMouse?.isNeeded && f.current && (f.current.addEventListener("mousemove", ee, w), f.current.addEventListener("mouseout", X, w), f.current.addEventListener("mouseup", X, w), f.current.addEventListener("mousedown", J, w), f.current.addEventListener("touchmove", ee, w), f.current.addEventListener("touchend", X, w), f.current.addEventListener("touchstart", J, w)), R.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      j,
      w
    ), f.current && (O.current = new ResizeObserver(Q), O.current.observe(f.current), window.addEventListener("resize", Q, w));
  }, Ne = () => {
    const w = { passive: !0 };
    R.current.iMouse?.isNeeded && f.current && (f.current.removeEventListener("mousemove", ee, w), f.current.removeEventListener("mouseout", X, w), f.current.removeEventListener("mouseup", X, w), f.current.removeEventListener("mousedown", J, w), f.current.removeEventListener("touchmove", ee, w), f.current.removeEventListener("touchend", X, w), f.current.removeEventListener("touchstart", J, w)), R.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      j,
      w
    ), O.current && (O.current.disconnect(), window.removeEventListener("resize", Q, w));
  };
  return H(() => {
    S.current = o;
  }, [o]), H(() => {
    const w = F.current;
    function N() {
      V();
      const C = g.current;
      C && f.current && (C.clearColor(...a), C.clearDepth(1), C.enable(C.DEPTH_TEST), C.depthFunc(C.LEQUAL), C.viewport(0, 0, f.current.width, f.current.height), f.current.height = f.current.clientHeight, f.current.width = f.current.clientWidth, ie(), B(), ge(se(e || yi), t || It), z(), requestAnimationFrame(ce), Se(), Q());
    }
    return requestAnimationFrame(N), () => {
      const C = g.current;
      if (C) {
        if (C.getExtension("WEBGL_lose_context")?.loseContext(), C.useProgram(null), C.deleteProgram(v.current ?? null), w.length > 0)
          for (const U of w)
            C.deleteTexture(U._webglTexture);
        v.current = null;
      }
      Ne(), cancelAnimationFrame(E.current ?? 0);
    };
  }, []), /* @__PURE__ */ r(
    "canvas",
    {
      ref: f,
      style: { height: "100%", width: "100%", ...l }
    }
  );
}
const Ii = `
const float TAU = 6.283185;

// Noise for dithering
vec2 randFibo(vec2 p) {
  p = fract(p * vec2(443.897, 441.423));
  p += dot(p, p.yx + 19.19);
  return fract((p.xx + p.yx) * p.xy);
}

// Tonemap
vec3 Tonemap(vec3 x) {
  x *= 4.0;
  return x / (1.0 + x);
}

// Luma for alpha
float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

// RGB to HSV
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// HSV to RGB
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// SDF shapes
float sdCircle(vec2 st, float r) {
  return length(st) - r;
}

float sdLine(vec2 p, float r) {
  float halfLen = r * 2.0;
  vec2 a = vec2(-halfLen, 0.0);
  vec2 b = vec2(halfLen, 0.0);
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float getSdf(vec2 st) {
  if(uShape == 1.0) return sdCircle(st, uScale);
  else if(uShape == 2.0) return sdLine(st, uScale);
  return sdCircle(st, uScale); // Default
}

vec2 turb(vec2 pos, float t, float it) {
  // Initial rotation matrix for swirl direction
  mat2 rotation = mat2(0.6, -0.25, 0.25, 0.9);
  // Secondary rotation applied each iteration (approx 53 degree rotation)
  mat2 layerRotation = mat2(0.6, -0.8, 0.8, 0.6);

  float frequency = mix(2.0, 15.0, uFrequency);
  float amplitude = uAmplitude;
  float frequencyGrowth = 1.4;
  float animTime = t * 0.1 * uSpeed;

  const int LAYERS = 4;
  for(int i = 0; i < LAYERS; i++) {
    // Calculate wave displacement for this layer
    vec2 rotatedPos = pos * rotation;
    vec2 wave = sin(frequency * rotatedPos + float(i) * animTime + it);

    // Apply displacement along rotation direction
    pos += (amplitude / frequency) * rotation[0] * wave;

    // Evolve parameters for next layer
    rotation *= layerRotation;
    amplitude *= mix(1.0, max(wave.x, wave.y), uVariance);
    frequency *= frequencyGrowth;
  }

  return pos;
}

const float ITERATIONS = 36.0;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;

  vec3 pp = vec3(0.0);
  vec3 bloom = vec3(0.0);
  float t = iTime * 0.5;
  vec2 pos = uv - 0.5;

  vec2 prevPos = turb(pos, t, 0.0 - 1.0 / ITERATIONS);
  float spacing = mix(1.0, TAU, uSpacing);

  for(float i = 1.0; i < ITERATIONS + 1.0; i++) {
    float iter = i / ITERATIONS;
    vec2 st = turb(pos, t, iter * spacing);
    float d = abs(getSdf(st));
    float pd = distance(st, prevPos);
    prevPos = st;
    float dynamicBlur = exp2(pd * 2.0 * 1.4426950408889634) - 1.0;
    float ds = smoothstep(0.0, uBlur * 0.05 + max(dynamicBlur * uSmoothing, 0.001), d);

    // Shift color based on iteration using uColorScale
    vec3 color = uColor;
    if(uColorShift > 0.01) {
      vec3 hsv = rgb2hsv(color);
      // Shift hue by iteration
      hsv.x = fract(hsv.x + (1.0 - iter) * uColorShift * 0.3);
      color = hsv2rgb(hsv);
    }

    float invd = 1.0 / max(d + dynamicBlur, 0.001);
    pp += (ds - 1.0) * color;
    bloom += clamp(invd, 0.0, 250.0) * color;
  }

  pp *= 1.0 / ITERATIONS;

  vec3 color;

  // Dark mode (default)
  if(uMode < 0.5) {
    // use bloom effect
    bloom = bloom / (bloom + 2e4);
    color = (-pp + bloom * 3.0 * uBloom) * 1.2;
    color += (randFibo(fragCoord).x - 0.5) / 255.0;
    color = Tonemap(color);
    float alpha = luma(color) * uMix;
    fragColor = vec4(color * uMix, alpha);
  }

  // Light mode
  else {
    // no bloom effect
    color = -pp;
    color += (randFibo(fragCoord).x - 0.5) / 255.0;

    // Preserve hue by tone mapping brightness only
    float brightness = length(color);
    vec3 direction = brightness > 0.0 ? color / brightness : color;

    // Reinhard on brightness
    float factor = 2.0;
    float mappedBrightness = (brightness * factor) / (1.0 + brightness * factor);
    color = direction * mappedBrightness;

    // Boost saturation to compensate for white background bleed-through
    // When alpha < 1.0, white bleeds through making colors look desaturated
    // So we increase saturation to maintain vibrant appearance
    float gray = dot(color, vec3(0.2, 0.5, 0.1));
    float saturationBoost = 3.0;
    color = mix(vec3(gray), color, saturationBoost);

    // Clamp between 0-1
    color = clamp(color, 0.0, 1.0);

    float alpha = mappedBrightness * clamp(uMix, 1.0, 2.0);
    fragColor = vec4(color, alpha);
  }
}`, Li = 10, Mi = 2, Pi = 0.5, Di = 0.2, _i = 1.5, fe = {
  duration: 0.5,
  ease: "easeOut"
}, jt = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function ze(e) {
  const [t, n] = _(e), o = Gr(e), a = P(null);
  Co(o, "change", (l) => n(l));
  const i = $(
    (l, d) => {
      a.current = Vr(o, l, d);
    },
    [o]
  );
  return { value: t, motionValue: o, controls: a, animate: i };
}
function Oi(e, t) {
  const [n, o] = _(Li), {
    value: a,
    animate: i,
    motionValue: l
  } = ze(Di), { value: d, animate: s } = ze(Mi), { value: u, animate: c } = ze(Pi), { value: m, animate: p } = ze(_i), f = No(t, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return H(() => {
    switch (e) {
      case "idle":
      case "failed":
      case "disconnected":
        o(10), i(0.2, fe), s(1.2, fe), c(0.4, fe), p(1, fe);
        return;
      case "listening":
      case "pre-connect-buffering":
        o(20), i(0.3, { type: "spring", duration: 1, bounce: 0.35 }), s(1, fe), c(0.7, fe), p([1.5, 2], jt);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        o(30), i(0.3, fe), s(0.5, fe), c(1, fe), p([0.5, 2.5], jt);
        return;
      case "speaking":
        o(70), i(0.3, fe), s(0.75, fe), c(1.25, fe), p(1.5, fe);
        return;
    }
  }, [
    e,
    i,
    s,
    c,
    p
  ]), H(() => {
    e === "speaking" && f > 0 && !l.isAnimating() && i(0.2 + 0.2 * f, { duration: 0 });
  }, [
    e,
    f,
    l,
    i,
    s,
    c,
    p
  ]), {
    speed: n,
    scale: a,
    amplitude: d,
    frequency: u,
    brightness: m
  };
}
const Ui = Oe({
  base: "aspect-square",
  variants: {
    size: {
      icon: "h-[24px]",
      sm: "h-[56px]",
      md: "h-[112px]",
      lg: "h-[224px]",
      xl: "h-[448px]"
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
function Bi(e) {
  const t = e.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (t) {
    const [, n, o, a] = t;
    return [n, o, a].map((l = "00") => parseInt(l, 16) / 255);
  }
}
function _n({
  shape: e = 1,
  speed: t = 1,
  amplitude: n = 0.5,
  frequency: o = 0.5,
  scale: a = 0.2,
  blur: i = 1,
  color: l = "#FF355E",
  colorShift: d = 1,
  brightness: s = 1,
  themeMode: u = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: c,
  className: m,
  ...p
}) {
  const f = Y(() => Bi(l), [l]);
  return /* @__PURE__ */ r("div", { ref: c, className: m, ...p, children: /* @__PURE__ */ r(
    Si,
    {
      fs: Ii,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: t },
        // Edge blur/softness
        uBlur: { type: "1f", value: i },
        // Shape scale
        uScale: { type: "1f", value: a },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: e },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: o },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: n },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: s },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: d },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: u === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: f ?? [0, 0.7, 1] }
      },
      onError: (g) => {
        console.error("Shader error:", g);
      },
      onWarning: (g) => {
        console.warn("Shader warning:", g);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
_n.displayName = "AuraShader";
function Vs({
  size: e = "lg",
  state: t,
  color: n,
  colorShift: o = 0.05,
  audioTrack: a,
  themeMode: i,
  className: l,
  ref: d,
  ...s
}) {
  const { speed: u, scale: c, amplitude: m, frequency: p, brightness: f } = Oi(t, a);
  return /* @__PURE__ */ r(
    _n,
    {
      ref: d,
      blur: 0.2,
      color: n,
      colorShift: o,
      speed: u,
      scale: c,
      themeMode: i,
      amplitude: m,
      frequency: p,
      brightness: f,
      className: y(
        Ui({ size: e }),
        "overflow-hidden rounded-full",
        l
      ),
      ...s
    }
  );
}
const Ws = ({
  text: e,
  description: t,
  avatar: n,
  confirmationText: o,
  onConfirm: a,
  cancelText: i,
  onCancel: l,
  stackAt: d = "sm"
}) => /* @__PURE__ */ r(
  Zt,
  {
    title: e,
    description: t,
    avatar: n,
    stackAt: d,
    confirmAction: {
      label: o,
      onClick: a
    },
    rejectAction: {
      label: i,
      onClick: l
    }
  }
), $i = Oe({
  base: [
    "relative flex flex-col rounded-2xl bg-f1-background",
    "border border-solid border-f1-border-secondary",
    "shadow transition-shadow duration-200",
    "w-[217px] h-[200px] p-4 gap-2"
  ],
  variants: {
    selected: {
      true: "shadow-none",
      false: "hover:shadow-md"
    }
  },
  defaultVariants: {
    selected: !1
  }
}), On = Oe({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), zi = Oe({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), Ge = Oe({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), Gi = ({
  description: e,
  isRevealed: t,
  onAskOne: n
}) => {
  const o = W(), a = me();
  return /* @__PURE__ */ h(Re, { children: [
    e && /* @__PURE__ */ r("span", { className: y(zi(), "truncate"), children: e }),
    /* @__PURE__ */ r(Te, { children: n && t && /* @__PURE__ */ r(
      K.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: a ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ r(
          Wr,
          {
            size: "md",
            label: o.ai.ask,
            onClick: (i) => {
              i.stopPropagation(), n();
            }
          }
        )
      }
    ) })
  ] });
}, Vi = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), Wi = ({ balance: e }) => /* @__PURE__ */ r(
  Xr,
  {
    amount: e.amount,
    percentage: e.percentage ?? void 0,
    invertStatus: e.invertStatus,
    hint: e.hint
  }
), ji = (e) => {
  const {
    heading: t,
    label: n,
    content: o,
    shouldFadeContent: a = !1,
    fadeTransition: i
  } = e;
  return /* @__PURE__ */ h("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ r("span", { className: y(On()), children: t }),
    /* @__PURE__ */ h(
      K.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: a ? 0 : 1 },
        transition: i,
        children: [
          o === "person" && /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ r(
              tn,
              {
                firstName: e.avatar.firstName,
                lastName: e.avatar.lastName,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            n && /* @__PURE__ */ r("span", { className: y(Ge()), children: n })
          ] }),
          o === "people" && /* @__PURE__ */ r(
            jr,
            {
              type: "person",
              avatars: e.avatars,
              size: "md",
              max: 3
            }
          ),
          o === "team" && /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ r(
              Hr,
              {
                name: e.avatar.name,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            n && /* @__PURE__ */ r("span", { className: y(Ge()), children: n })
          ] }),
          o === "company" && /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ r(
              ot,
              {
                name: e.avatar.name,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            n && /* @__PURE__ */ r("span", { className: y(Ge()), children: n })
          ] }),
          o === "alert" && /* @__PURE__ */ r(qr, { text: e.alertLabel, level: e.level }),
          o === "balance" && /* @__PURE__ */ r(Wi, { balance: e.balance })
        ]
      }
    ),
    n && !Vi.has(o) && /* @__PURE__ */ r(
      K.span,
      {
        className: y(Ge()),
        animate: { opacity: a ? 0 : 1 },
        transition: i,
        children: n
      }
    )
  ] });
}, Un = {
  positive: {
    stroke: "hsl(var(--positive-50))",
    fill: "hsl(var(--positive-50))",
    border: "border-f1-border-positive-bold"
  },
  negative: {
    stroke: "hsl(var(--critical-50))",
    fill: "hsl(var(--critical-50))",
    border: "border-f1-border-critical-bold"
  },
  neutral: {
    stroke: "hsl(var(--neutral-50))",
    fill: "hsl(var(--neutral-50))",
    border: "border-f1-border"
  }
};
function Hi(e, t) {
  const n = e[0]?.value ?? 0, o = e[e.length - 1]?.value ?? 0, a = Math.sign(o - n), i = t ? a * -1 : a;
  return i > 0 ? "positive" : i < 0 ? "negative" : "neutral";
}
const qi = ({
  cx: e,
  cy: t,
  index: n,
  dataLength: o,
  color: a
}) => n !== o - 1 || e == null || t == null ? null : /* @__PURE__ */ r("circle", { cx: e, cy: t, r: 2, fill: a, stroke: "none" }), Xi = ({
  label: e,
  direction: t
}) => {
  const n = Un[t];
  return /* @__PURE__ */ r(
    "span",
    {
      className: y(
        "absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow",
        t === "negative" ? "bottom-0 translate-y-full" : "top-0 -translate-y-full",
        n.border,
        {
          positive: "text-f1-foreground-positive",
          negative: "text-f1-foreground-critical",
          neutral: "text-f1-foreground-secondary"
        }[t]
      ),
      "data-testid": "sparkline-balance",
      children: e
    }
  );
}, Yi = ({
  data: e,
  label: t,
  invertStatus: n
}) => {
  const a = `sparkline-gradient-${Ve().replace(/:/g, "")}`, i = Hi(e, n), l = Un[i];
  return /* @__PURE__ */ r("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ h(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${i} trend`,
      children: [
        /* @__PURE__ */ r(Yr, { width: "100%", height: "100%", children: /* @__PURE__ */ h(
          Kr,
          {
            data: e,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ h("linearGradient", { id: a, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ r("stop", { offset: "5%", stopColor: l.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ r("stop", { offset: "95%", stopColor: l.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ r(Qr, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ r(
                Jr,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: l.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${a})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (d) => /* @__PURE__ */ ar(
                    qi,
                    {
                      ...d,
                      key: d.index,
                      dataLength: e.length,
                      color: l.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ r(Xi, { label: t, direction: i })
      ]
    }
  ) });
}, Bn = ye(
  (e, t) => {
    const {
      description: n,
      heading: o,
      label: a,
      selected: i = !1,
      onClick: l,
      onAskOne: d,
      className: s,
      ...u
    } = e, [c, m] = _(!1), [p, f] = _(!1), g = c || p, b = me(), v = g && !!d, T = {
      duration: b ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, E = () => {
      l?.();
    }, L = (k) => {
      k.currentTarget === k.target && (k.key === "Enter" || k.key === " ") && (k.preventDefault(), l?.());
    };
    return /* @__PURE__ */ h("div", { className: "relative", children: [
      i && /* @__PURE__ */ h(Re, { children: [
        /* @__PURE__ */ r(
          "div",
          {
            "data-testid": "selected-border",
            className: y(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            "aria-hidden": !0,
            className: y(
              "pointer-events-none absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient opacity-80 blur-sm"
            )
          }
        )
      ] }),
      /* @__PURE__ */ h(
        "div",
        {
          ref: t,
          role: l ? "button" : void 0,
          tabIndex: l ? 0 : void 0,
          className: y(
            $i({ selected: i }),
            i && "relative border-transparent",
            l && "cursor-pointer select-none",
            l && ue(),
            s
          ),
          onClick: l ? E : void 0,
          onKeyDown: l ? L : void 0,
          onMouseEnter: () => m(!0),
          onMouseLeave: () => m(!1),
          onFocus: () => f(!0),
          onBlur: () => f(!1),
          children: [
            /* @__PURE__ */ r(
              Gi,
              {
                description: n,
                isRevealed: g,
                onAskOne: d
              }
            ),
            u.content === "sparkline" ? /* @__PURE__ */ h("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ r("span", { className: y(On()), children: o }),
              /* @__PURE__ */ r(
                K.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: v ? 0 : 1 },
                  transition: T,
                  children: /* @__PURE__ */ r(
                    Yi,
                    {
                      data: u.data,
                      label: a ?? "",
                      invertStatus: u.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ r(
              ji,
              {
                heading: o,
                label: a,
                shouldFadeContent: v,
                fadeTransition: T,
                ...u
              }
            )
          ]
        }
      )
    ] });
  }
);
Bn.displayName = "F0AiInsightCardInternal";
const Ki = ["className"], $n = ye((e, t) => {
  const n = Ki.reduce((o, a) => {
    const { [a]: i, ...l } = o;
    return l;
  }, e);
  return /* @__PURE__ */ r(Bn, { ref: t, ...n });
});
$n.displayName = "F0AiInsightCard";
const Qi = () => /* @__PURE__ */ h(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ r(de, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ h("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ h("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ r(de, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ r(de, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ h("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ r(de, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ r(de, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), js = Zr(
  eo($n, Qi)
), Hs = [
  "text",
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance",
  "sparkline"
], zn = 180, Ji = (e) => Number.isFinite(e) ? Math.max(0, Math.floor(e)) : zn, Zi = (e, t) => e.length <= t ? e : `${e.slice(0, t).trimEnd()}...`, es = (e) => e.showActions !== !1, ts = (e) => Object.fromEntries(
  Object.entries(e).filter(([t]) => t.startsWith("data-"))
);
function ns(e) {
  const {
    module: t,
    heading: n,
    title: o,
    subtitle: a,
    description: i,
    seeMoreLabel: l,
    maxCollapsedDescriptionLength: d = zn
  } = e, [s, u] = _(!1), c = Ve(), m = P(null), p = Ji(
    d
  ), f = i.length > p, g = s ? i : Zi(i, p), b = es(e) ? e : null, v = ts(e);
  return H(() => {
    s && m.current?.focus();
  }, [s]), /* @__PURE__ */ h(
    "section",
    {
      className: "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
      ...v,
      children: [
        /* @__PURE__ */ h("div", { className: "flex items-center gap-3 px-4 py-3", children: [
          t && /* @__PURE__ */ r(nn, { module: t, size: "md" }),
          /* @__PURE__ */ h("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ r("h2", { className: "truncate text-lg font-semibold text-f1-foreground", children: n }),
            a && /* @__PURE__ */ r("p", { className: "truncate text-base text-f1-foreground-secondary", children: a })
          ] })
        ] }),
        /* @__PURE__ */ h("div", { className: "flex flex-col gap-2 px-4 py-3", children: [
          /* @__PURE__ */ r("h3", { className: "text-lg font-semibold text-f1-foreground", children: o }),
          /* @__PURE__ */ h(
            "p",
            {
              id: c,
              ref: m,
              tabIndex: s ? -1 : void 0,
              className: y(
                "text-base text-f1-foreground whitespace-pre-wrap break-words",
                s && ue(),
                !s && "inline"
              ),
              children: [
                g,
                f && !s && /* @__PURE__ */ h(Re, { children: [
                  " ",
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: y(
                        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
                        ue()
                      ),
                      "aria-controls": c,
                      "aria-expanded": s,
                      onClick: () => u(!0),
                      children: l
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        b && /* @__PURE__ */ r("div", { className: "flex items-center justify-end gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: /* @__PURE__ */ r(
          pe,
          {
            type: "button",
            label: b.primaryActionLabel,
            icon: b.primaryActionIcon,
            onClick: b.onPrimaryAction
          }
        ) })
      ]
    }
  );
}
ns.displayName = "F0AiProposalCard";
const rs = ({
  icon: e,
  title: t,
  children: n
}) => {
  const [o, a] = _(!1), i = me();
  return /* @__PURE__ */ h(
    on,
    {
      className: "mb-1 w-full",
      open: o,
      onOpenChange: a,
      children: [
        /* @__PURE__ */ h(an, { className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90", children: [
          /* @__PURE__ */ r("span", { className: "mr-2 *:block", children: /* @__PURE__ */ r(re, { icon: e, className: "block" }) }),
          /* @__PURE__ */ r("span", { className: "mr-[2px]", children: t }),
          /* @__PURE__ */ r(
            re,
            {
              icon: rt,
              className: "h-4 w-4 transition-transform duration-200"
            }
          )
        ] }),
        /* @__PURE__ */ r(sn, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ r(
          K.div,
          {
            initial: !1,
            animate: {
              height: o ? "auto" : 0,
              opacity: o ? 1 : 0,
              visibility: o ? "visible" : "hidden"
            },
            transition: {
              duration: i ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: n
          }
        ) })
      ]
    }
  );
}, os = ({ iconName: e }) => e ? /* @__PURE__ */ r("div", { className: "mr-1 flex items-center justify-center", children: /* @__PURE__ */ r(
  re,
  {
    icon: to(e) ?? no,
    size: "md",
    color: "default"
  }
) }) : null;
function as({
  sources: e,
  title: t
}) {
  const n = W();
  if (!e || e.length === 0 || !Array.isArray(e))
    return null;
  const o = t ?? n.ai.resourcesGroupTitle;
  return /* @__PURE__ */ r(rs, { icon: cn, title: o, children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2", children: e.map((a, i) => {
    const l = /* @__PURE__ */ r(os, { iconName: a.icon });
    return a.link ? /* @__PURE__ */ r(
      De,
      {
        "aria-label": a.title,
        href: a.link,
        size: "md",
        target: a.targetBlank ? "_blank" : "_self",
        variant: "ghost",
        className: "justify-start truncate hover:bg-f1-background-hover",
        compact: !0,
        prepend: l,
        children: /* @__PURE__ */ r("div", { className: "flex w-full items-start", children: a.title })
      },
      i
    ) : /* @__PURE__ */ h(
      "div",
      {
        className: "flex min-w-0 flex-1 items-center gap-1 px-[6px] py-1.5 font-medium text-f1-foreground",
        children: [
          l,
          a.title
        ]
      },
      i
    );
  }) }) });
}
as.displayName = "F0AiMessageSources";
async function is(e, t, n) {
  const o = await import("./xlsx-CzlURDDb.js"), a = o.utils.table_to_book(e, { sheet: "Data" });
  o.writeFile(a, `${n}.${t}`);
}
function ss({
  dataset: e,
  title: t,
  filename: n
}) {
  const o = W(), a = P(null), i = t ?? o.ai.aiTable.title, l = $(
    (d) => {
      if (!a.current) return;
      const s = n ?? (i.replace(/\s+/g, "_").toLowerCase() || "table");
      is(a.current, d, s);
    },
    [i, n]
  );
  return e.columns?.length ? /* @__PURE__ */ h(
    Xe,
    {
      display: "flex",
      flexDirection: "column",
      gap: "md",
      borderRadius: "md",
      border: "default",
      borderColor: "secondary",
      children: [
        /* @__PURE__ */ h(
          Xe,
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: "lg",
            border: "none",
            borderBottom: "default",
            borderColor: "secondary",
            paddingX: "md",
            paddingY: "sm",
            children: [
              /* @__PURE__ */ r(
                oe,
                {
                  tag: "h2",
                  className: "text-base font-medium capitalize text-f1-foreground",
                  children: i
                }
              ),
              /* @__PURE__ */ r(
                nt,
                {
                  icon: Ae,
                  size: "md",
                  items: [
                    {
                      label: o.ai.aiTable.downloadExcel,
                      icon: Ae,
                      onClick: () => l("xlsx")
                    },
                    {
                      label: o.ai.aiTable.downloadCsv,
                      icon: Ae,
                      onClick: () => l("csv")
                    }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ r(Xe, { overflowX: "auto", children: /* @__PURE__ */ h(
          "table",
          {
            ref: a,
            className: y(
              "w-full border-separate border-spacing-0 text-md",
              "[&_tbody_tr:last-child_td]:border-b-0"
            ),
            children: [
              /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: e.columns.map((d) => /* @__PURE__ */ r(
                "th",
                {
                  className: "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
                  children: e.columnLabels?.[d] ?? d
                },
                d
              )) }) }),
              /* @__PURE__ */ r("tbody", { children: e.rows.map((d, s) => /* @__PURE__ */ r("tr", { children: e.columns.map((u) => {
                const c = d[u];
                return /* @__PURE__ */ r(
                  "td",
                  {
                    className: "max-w-72 border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-f1-foreground",
                    children: /* @__PURE__ */ r(oe, { children: c == null ? "" : String(c) })
                  },
                  u
                );
              }) }, s)) })
            ]
          }
        ) })
      ]
    }
  ) : null;
}
ss.displayName = "F0AiTableCard";
function ls({ credits: e, trigger: t }) {
  const n = W(), [o, a] = _(!1), [i, l] = _(!1), [d, s] = _(!1), [u, c] = _(null), m = $(
    (g) => {
      a(g), g && e?.fetchUsage && (l(!0), s(!1), e.fetchUsage().then((b) => {
        c(b), s(!1);
      }).catch(() => {
        s(!0);
      }).finally(() => {
        l(!1);
      }));
    },
    [e]
  );
  if (!e) return null;
  const p = u ? Math.min(100, Math.round(u.used / u.total * 100)) : 0, f = e.companyName;
  return /* @__PURE__ */ h(et, { open: o, onOpenChange: m, children: [
    /* @__PURE__ */ r(dn, { asChild: !0, children: t ?? /* @__PURE__ */ r(
      ne,
      {
        variant: "ghost",
        hideLabel: !0,
        label: n.t("ai.credits.title"),
        icon: un,
        pressed: o
      }
    ) }),
    /* @__PURE__ */ h(
      tt,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        collisionPadding: 12,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          f && /* @__PURE__ */ h("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ r(
              ot,
              {
                name: e.companyName ?? "",
                src: e.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ h("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ r(oe, { tag: "span", className: "font-medium", children: e.companyName ?? "" }),
              e.planName && /* @__PURE__ */ r(
                oe,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: e.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ h("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: [
            /* @__PURE__ */ h("div", { className: "flex flex-col gap-2 p-3", children: [
              i && /* @__PURE__ */ h("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ h("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ r("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                  /* @__PURE__ */ r("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                ] }),
                /* @__PURE__ */ r("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                /* @__PURE__ */ h("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ r("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ r("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                ] })
              ] }),
              d && /* @__PURE__ */ r("span", { className: "text-sm text-f1-foreground-secondary", children: n.t("ai.credits.creditsError") }),
              !i && !d && u && /* @__PURE__ */ h(Re, { children: [
                /* @__PURE__ */ h("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ r("span", { className: "text-base font-medium text-f1-foreground", children: n.t("ai.credits.title") }),
                  /* @__PURE__ */ r("span", { className: "font-medium text-f1-foreground-secondary", children: n.t("ai.credits.creditsLeft", {
                    total: Math.max(
                      0,
                      u.total - u.used
                    ).toLocaleString()
                  }) })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ r(
                  K.div,
                  {
                    className: "h-full rounded-full",
                    style: {
                      width: `${p}%`,
                      backgroundImage: "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)",
                      backgroundSize: "300% 100%"
                    },
                    animate: {
                      backgroundPosition: ["0% 0%", "100% 0%"]
                    },
                    transition: {
                      duration: 4,
                      ease: "linear",
                      repeat: 1 / 0,
                      repeatType: "reverse"
                    }
                  }
                ) }) }),
                /* @__PURE__ */ h("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                  /* @__PURE__ */ r("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: n.t("ai.credits.monthlyCredits") })
                ] })
              ] })
            ] }),
            e.upgradePlanUrl && /* @__PURE__ */ h("div", { className: "flex items-center justify-between border-0 border-t border-solid border-f1-border-secondary p-3", children: [
              /* @__PURE__ */ r("span", { children: n.t("ai.credits.needMoreCredits") }),
              /* @__PURE__ */ r(
                pe,
                {
                  variant: "outlinePromote",
                  href: e.upgradePlanUrl,
                  label: n.t("ai.credits.upgradePlan"),
                  icon: ro
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const cs = "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)";
function ds({
  employeeCredits: e,
  trigger: t
}) {
  const n = W(), o = me(), [a, i] = _(!1), [l, d] = _(!1), [s, u] = _(!1), [c, m] = _(null), p = $(
    (v) => {
      i(v), v && e?.fetchUsage && (d(!0), u(!1), e.fetchUsage().then((T) => {
        m(T), u(!1);
      }).catch(() => {
        u(!0);
      }).finally(() => {
        d(!1);
      }));
    },
    [e]
  );
  if (!e) return null;
  const f = !!e.companyName, g = c && c.total > 0 ? Math.min(100, Math.round(c.used / c.total * 100)) : 0, b = c ? Math.max(0, c.total - c.used) : 0;
  return /* @__PURE__ */ h(et, { open: a, onOpenChange: p, children: [
    /* @__PURE__ */ r(dn, { asChild: !0, children: t ?? /* @__PURE__ */ r(
      ne,
      {
        variant: "ghost",
        hideLabel: !0,
        label: n.t("ai.credits.title"),
        icon: un,
        pressed: a
      }
    ) }),
    /* @__PURE__ */ h(
      tt,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        collisionPadding: 12,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          f && /* @__PURE__ */ h("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ r(
              ot,
              {
                name: e.companyName ?? "",
                src: e.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ h("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ r(oe, { tag: "span", className: "font-medium", children: e.companyName ?? "" }),
              e.planName && /* @__PURE__ */ r(
                oe,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: e.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ h("div", { className: "flex flex-col gap-2 p-3", children: [
            l && /* @__PURE__ */ h(
              "div",
              {
                className: "flex flex-col gap-2",
                "aria-busy": "true",
                "aria-live": "polite",
                children: [
                  /* @__PURE__ */ h("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ r("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                    /* @__PURE__ */ r("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                  ] }),
                  /* @__PURE__ */ r("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ h("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ r("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                    /* @__PURE__ */ r("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                  ] })
                ]
              }
            ),
            s && /* @__PURE__ */ r("span", { className: "text-sm text-f1-foreground-secondary", children: n.t("ai.credits.creditsError") }),
            !l && !s && c && /* @__PURE__ */ h("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ h("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ r("span", { className: "text-base font-medium text-f1-foreground", children: n.t("ai.credits.employeeCredits") }),
                /* @__PURE__ */ r("span", { className: "font-medium text-f1-foreground-secondary", children: n.t("ai.credits.creditsLeft", {
                  total: b.toLocaleString()
                }) })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ r(
                K.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    width: `${g}%`,
                    backgroundImage: cs,
                    backgroundSize: "300% 100%"
                  },
                  animate: o ? void 0 : { backgroundPosition: ["0% 0%", "100% 0%"] },
                  transition: {
                    duration: o ? 0 : 4,
                    ease: "linear",
                    repeat: o ? 0 : 1 / 0,
                    repeatType: "reverse"
                  }
                }
              ) }) }),
              /* @__PURE__ */ h("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                /* @__PURE__ */ r("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: n.t("ai.credits.monthlyCredits") })
              ] })
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
const Je = ({
  credits: e,
  employeeCredits: t,
  trigger: n
}) => t ? /* @__PURE__ */ r(
  ds,
  {
    employeeCredits: t,
    trigger: n
  }
) : e ? /* @__PURE__ */ r(ls, { credits: e, trigger: n }) : null, qs = Je, Xs = ({
  historyEnabled: e = !1,
  title: t,
  currentThreadTitle: n,
  fullscreen: o = !1,
  lockVisualizationMode: a = !1,
  onToggleVisualizationMode: i,
  onClose: l,
  onNewChat: d,
  onOpenHistory: s,
  hasMessages: u = !1,
  credits: c,
  employeeCredits: m,
  compact: p = !1,
  actions: f
}) => {
  const g = W(), b = me(), v = oo(`(max-width: ${so.md}px)`, {
    initializeWithValue: !0
  }), T = !a && !v && /* @__PURE__ */ r(
    ne,
    {
      variant: "ghost",
      hideLabel: !0,
      label: o ? g.ai.collapseChat : g.ai.expandChat,
      icon: o ? ao : io,
      onClick: i
    }
  ), E = /* @__PURE__ */ r(
    ne,
    {
      variant: "ghost",
      hideLabel: !0,
      label: g.ai.closeChat,
      icon: Ee,
      onClick: l
    }
  ), L = f?.map((k) => /* @__PURE__ */ r(
    ne,
    {
      variant: "ghost",
      hideLabel: !0,
      label: k.label,
      icon: k.icon,
      type: "button",
      onClick: k.onClick
    },
    k.id
  ));
  return p ? /* @__PURE__ */ h(
    "header",
    {
      className: y("flex items-center justify-between gap-3 pr-4 pl-5 py-3"),
      children: [
        /* @__PURE__ */ r(
          oe,
          {
            lines: 1,
            className: "min-w-0 flex-1 text-left font-semibold text-f1-foreground",
            children: n ?? g.ai.newConversation
          }
        ),
        /* @__PURE__ */ h(
          K.div,
          {
            className: "flex shrink-0 items-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
              duration: b ? 0 : 0.2,
              ease: "easeOut"
            },
            children: [
              L,
              T,
              E
            ]
          }
        )
      ]
    }
  ) : e ? /* @__PURE__ */ h(
    "header",
    {
      className: y(
        "flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"
      ),
      children: [
        /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 items-center", children: !a && /* @__PURE__ */ r(
          De,
          {
            variant: "ghost",
            size: "md",
            className: "min-w-0 max-w-full [&>div>span>span]:w-full",
            onClick: s,
            children: /* @__PURE__ */ h("div", { className: "flex min-w-0 items-center gap-1", children: [
              /* @__PURE__ */ r(oe, { lines: 1, className: "min-w-0 text-left", children: n ?? g.ai.newConversation }),
              /* @__PURE__ */ r(re, { icon: fn, color: "default", size: "md" })
            ] })
          }
        ) }),
        /* @__PURE__ */ h(
          K.div,
          {
            className: "flex shrink-0 items-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
              duration: b ? 0 : 0.2,
              ease: "easeOut"
            },
            children: [
              /* @__PURE__ */ r(
                Je,
                {
                  credits: c,
                  employeeCredits: m
                }
              ),
              L,
              T,
              E
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ h("header", { className: y("flex justify-between px-4 py-3"), children: [
    /* @__PURE__ */ r("div", { className: "flex items-center", children: /* @__PURE__ */ r("h2", { className: "text-f1-foreground", children: t ?? "" }) }),
    /* @__PURE__ */ h(
      K.div,
      {
        className: "flex items-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          duration: b ? 0 : 0.2,
          ease: "easeOut"
        },
        children: [
          u && !a && /* @__PURE__ */ r(
            ne,
            {
              variant: "ghost",
              hideLabel: !0,
              label: g.ai.startNewChat,
              icon: mn,
              onClick: d
            }
          ),
          /* @__PURE__ */ r(
            Je,
            {
              credits: c,
              employeeCredits: m
            }
          ),
          L,
          T,
          E
        ]
      }
    )
  ] });
};
function us(e) {
  const t = new Date(e), n = /* @__PURE__ */ new Date();
  return hn(t) ? "today" : pn(t) ? "yesterday" : co(t, n) ? "thisMonth" : "older";
}
function fs(e, t, n) {
  const o = new Date(e), a = xt(o, "p", { locale: n });
  if (hn(o)) return `${t.today}, ${a}`;
  if (pn(o)) return `${t.yesterday}, ${a}`;
  const i = !lo(o, /* @__PURE__ */ new Date());
  return `${xt(o, i ? "MMM d yyyy" : "MMM d", {
    locale: n
  })}, ${a}`;
}
function ms(e) {
  const t = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: []
  };
  for (const o of e) {
    const a = us(o.updatedAt);
    t[a].push(o);
  }
  return ["today", "yesterday", "thisMonth", "older"].filter((o) => t[o].length > 0).map((o) => ({ key: o, threads: t[o] }));
}
function hs({
  thread: e,
  isPinned: t,
  isActive: n = !1,
  isPending: o = !1,
  onSelect: a,
  onPin: i,
  onUnpin: l,
  onDelete: d,
  className: s
}) {
  const u = W(), c = uo(), m = Y(
    () => [
      {
        label: t ? u.ai.unpinChat : u.ai.pinChat,
        icon: t ? fo : mo,
        onClick: () => t ? l(e.id) : i(e.id)
      },
      {
        label: u.ai.deleteChat,
        icon: ho,
        critical: !0,
        onClick: () => d(e.id)
      }
    ],
    [t, e.id, i, l, d]
  ), p = Y(
    () => fs(
      e.updatedAt,
      {
        today: u.ai.today,
        yesterday: u.ai.yesterday
      },
      c
    ),
    [e.updatedAt, u.ai.today, u.ai.yesterday, c]
  );
  return /* @__PURE__ */ h(
    "div",
    {
      className: y(
        "group flex gap-1 cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        ue("rounded"),
        s,
        // Persistent highlight while this thread is the one open in the panel.
        n && "bg-f1-background-secondary"
      ),
      role: "button",
      tabIndex: 0,
      "aria-current": n ? "true" : void 0,
      onKeyDown: (f) => {
        (f.key === "Enter" || f.key === " ") && (f.preventDefault(), a(e.id, e.title));
      },
      children: [
        /* @__PURE__ */ h(
          "div",
          {
            className: "flex w-full min-w-0 items-center gap-1",
            onClick: () => a(e.id, e.title),
            children: [
              e.icon && /* @__PURE__ */ r(
                re,
                {
                  icon: e.icon,
                  size: "sm",
                  className: "mr-1 shrink-0 text-f1-icon",
                  "aria-hidden": !0
                }
              ),
              /* @__PURE__ */ r(oe, { lines: 1, className: "py-0.5 text-left font-medium", children: e.title }),
              /* @__PURE__ */ r("span", { className: "hidden shrink-0 text-sm font-medium text-f1-foreground-tertiary group-focus-within:inline group-hover:inline", children: p })
            ]
          }
        ),
        e.trailingLabel && /* @__PURE__ */ r("span", { className: "hidden shrink-0 pr-1 text-sm font-medium text-f1-foreground-tertiary group-focus-within:inline group-hover:inline", children: e.trailingLabel }),
        o ? (
          // While saving, the spinner sits where the actions button is and stays
          // visible off-hover so the row reads as "working".
          /* @__PURE__ */ r(
            "div",
            {
              className: "flex h-7 w-7 shrink-0 items-center justify-center",
              "aria-label": u.ai.threadOptions,
              children: /* @__PURE__ */ r(po, { size: "small" })
            }
          )
        ) : /* @__PURE__ */ r(
          "div",
          {
            className: y(
              // Hidden (not just transparent) off-hover so it takes no space and
              // the title can use the full row width. Shown on hover / focus /
              // while its dropdown is open.
              "hidden items-center",
              "group-hover:flex group-focus-within:flex",
              "has-[[aria-expanded=true]]:flex"
            ),
            children: /* @__PURE__ */ r(nt, { items: m, children: /* @__PURE__ */ r(
              ne,
              {
                icon: go,
                variant: "ghost",
                size: "sm",
                label: u.ai.threadOptions,
                hideLabel: !0
              }
            ) })
          }
        )
      ]
    }
  );
}
function Ht({
  label: e,
  threads: t,
  pinnedIds: n,
  onSelect: o,
  onPin: a,
  onUnpin: i,
  onDelete: l
}) {
  const [d, s] = _(!0), u = $(() => {
    s((m) => !m);
  }, []), c = $(
    (m) => {
      (m.key === "Enter" || m.key === " ") && (m.preventDefault(), u());
    },
    [u]
  );
  return /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ h(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: u,
        onKeyDown: c,
        className: y(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          ue("rounded")
        ),
        children: [
          /* @__PURE__ */ r("span", { className: "text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ r(
            re,
            {
              icon: d ? fn : vo,
              color: "secondary",
              size: "xs"
            }
          )
        ]
      }
    ),
    d && /* @__PURE__ */ r("div", { className: "flex flex-col", children: t.map((m) => /* @__PURE__ */ r(
      hs,
      {
        thread: m,
        isPinned: n.has(m.id),
        onSelect: o,
        onPin: a,
        onUnpin: i,
        onDelete: l
      },
      m.id
    )) })
  ] });
}
const qt = ["w-3/5", "w-4/5", "w-2/5", "w-3/4", "w-1/2", "w-2/3"], ps = ({ width: e }) => /* @__PURE__ */ r("div", { className: "flex items-center py-1.5 pl-1.5 pr-2", children: /* @__PURE__ */ r(de, { className: y("h-4 rounded", e) }) }), Xt = ({
  titleWidth: e,
  rows: t
}) => /* @__PURE__ */ h("div", { className: "flex flex-col gap-0.5", children: [
  /* @__PURE__ */ r("div", { className: "flex items-center p-1.5", children: /* @__PURE__ */ r(de, { className: y("h-3 rounded", e) }) }),
  t.map((n, o) => /* @__PURE__ */ r(ps, { width: n }, o))
] });
function gs() {
  return /* @__PURE__ */ h("div", { "aria-hidden": "true", className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ r(Xt, { titleWidth: "w-12", rows: qt.slice(0, 2) }),
    /* @__PURE__ */ r(Xt, { titleWidth: "w-24", rows: qt })
  ] });
}
const Ys = ({
  onClose: e,
  onSelectThread: t,
  onNewChat: n,
  threads: o,
  isLoading: a,
  error: i,
  pinnedIds: l,
  onPinThread: d,
  onUnpinThread: s,
  onDeleteThread: u
}) => {
  const c = W(), [m, p] = _("");
  H(() => {
    const x = (F) => {
      F.key === "Escape" && e();
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [e]);
  const f = Y(
    () => ({
      today: c.ai.today,
      yesterday: c.ai.yesterday,
      thisMonth: c.ai.thisMonth,
      older: c.ai.older
    }),
    [
      c.ai.today,
      c.ai.yesterday,
      c.ai.thisMonth,
      c.ai.older
    ]
  ), g = Y(() => {
    if (!m.trim()) return o;
    const x = m.toLowerCase();
    return o.filter((F) => F.title.toLowerCase().includes(x));
  }, [o, m]), b = Y(
    () => g.filter((x) => l.has(x.id)),
    [g, l]
  ), v = Y(
    () => g.filter((x) => !l.has(x.id)),
    [g, l]
  ), T = Y(
    () => ms(v),
    [v]
  ), E = $(
    (x, F) => {
      t(x, F), e();
    },
    [t, e]
  ), L = $(() => {
    n(), e();
  }, [n, e]), k = $(
    (x) => {
      u(x);
    },
    [u]
  ), A = b.length > 0 || T.length > 0;
  return gn(
    /* @__PURE__ */ h(Re, { children: [
      /* @__PURE__ */ r(
        "div",
        {
          className: "fixed inset-0 z-50 bg-f1-background-overlay animate-in fade-in-0",
          onClick: e,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ r(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": c.ai.chatHistory,
          className: y(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none",
            "animate-in fade-in-0 zoom-in-95"
          ),
          children: /* @__PURE__ */ h(
            "div",
            {
              className: y(
                "pointer-events-auto relative flex w-full max-w-[600px] flex-col",
                "rounded-xl bg-f1-background shadow-lg",
                "max-h-[min(600px,80vh)]"
              ),
              children: [
                /* @__PURE__ */ h("div", { className: "flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3", children: [
                  /* @__PURE__ */ r(re, { icon: cn, color: "secondary", size: "md" }),
                  /* @__PURE__ */ r(
                    "input",
                    {
                      type: "text",
                      value: m,
                      onChange: (x) => p(x.target.value),
                      placeholder: c.ai.searchChats,
                      className: y(
                        "w-full",
                        "py-2.5 pr-3",
                        "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none",
                        "outline-none"
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ h("div", { className: "flex flex-1 flex-col gap-1 overflow-y-auto p-2", children: [
                  /* @__PURE__ */ r(
                    De,
                    {
                      variant: "ghost",
                      size: "md",
                      className: "py-1 [&>div>span>span]:w-full",
                      onClick: L,
                      children: /* @__PURE__ */ h("div", { className: "flex w-full items-center gap-2", children: [
                        /* @__PURE__ */ r(re, { icon: mn, color: "default", size: "md" }),
                        /* @__PURE__ */ r(oe, { lines: 1, className: "text-left", children: c.ai.startNewChat })
                      ] })
                    }
                  ),
                  a && /* @__PURE__ */ r(gs, {}),
                  !a && i && /* @__PURE__ */ r("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: i }),
                  !a && !i && !A && /* @__PURE__ */ r("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: c.ai.noPreviousChats }),
                  !a && !i && b.length > 0 && /* @__PURE__ */ r(
                    Ht,
                    {
                      label: c.ai.pinnedChats,
                      threads: b,
                      pinnedIds: l,
                      onSelect: E,
                      onPin: d,
                      onUnpin: s,
                      onDelete: k
                    }
                  ),
                  !a && !i && T.map((x) => /* @__PURE__ */ r(
                    Ht,
                    {
                      label: f[x.key],
                      threads: x.threads,
                      pinnedIds: l,
                      onSelect: E,
                      onPin: d,
                      onUnpin: s,
                      onDelete: k
                    },
                    x.key
                  ))
                ] })
              ]
            }
          )
        }
      )
    ] }),
    document.body
  );
}, Gn = "f0-ai-pinned-threads";
function vs() {
  const e = bo(Gn, []);
  return new Set(Array.isArray(e) ? e : []);
}
function Yt(e) {
  xo(Gn, [...e]);
}
function Ks({
  enabled: e = !1,
  fetchThreads: t,
  deleteThread: n,
  pinThread: o,
  unpinThread: a
}) {
  const [i, l] = _([]), [d, s] = _(!1), [u, c] = _(null), [m, p] = _(vs), [f, g] = _(() => /* @__PURE__ */ new Set()), b = $(async () => {
    s(!0), c(null);
    try {
      const x = await t();
      l(x);
    } catch (x) {
      const F = x instanceof Error ? x.message : "Failed to fetch chat history";
      c(F), l([]);
    } finally {
      s(!1);
    }
  }, [t]);
  H(() => {
    e && b();
  }, [e, b]);
  const v = $((x, F) => {
    p((I) => {
      if (F === I.has(x)) return I;
      const O = new Set(I);
      return F ? O.add(x) : O.delete(x), Yt(O), O;
    });
  }, []), T = $((x, F) => {
    g((I) => {
      if (F === I.has(x)) return I;
      const O = new Set(I);
      return F ? O.add(x) : O.delete(x), O;
    });
  }, []), E = $(
    (x, F) => {
      const I = F ? o : a;
      v(x, F), I && (T(x, !0), I(x).catch(() => v(x, !F)).finally(() => T(x, !1)));
    },
    [o, a, v, T]
  ), L = $((x) => E(x, !0), [E]), k = $(
    (x) => E(x, !1),
    [E]
  ), A = $(
    async (x) => {
      T(x, !0);
      try {
        await n(x), l((F) => F.filter((I) => I.id !== x)), p((F) => {
          if (!F.has(x)) return F;
          const I = new Set(F);
          return I.delete(x), Yt(I), I;
        });
      } catch {
        b();
      } finally {
        T(x, !1);
      }
    },
    [n, b, T]
  );
  return {
    threads: i,
    isLoading: d,
    error: u,
    refetch: b,
    pinnedIds: m,
    pendingIds: f,
    pinThread: L,
    unpinThread: k,
    deleteThread: A
  };
}
const bs = K.create(en), xs = ({
  label: e,
  reduceMotion: t
}) => (
  // role="status" + aria-live so the "Applying changes" state is announced.
  /* @__PURE__ */ h(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md",
      children: [
        /* @__PURE__ */ r(
          bs,
          {
            size: "xs",
            animate: t ? void 0 : {
              rotate: [0, 360],
              scale: [1, 0.8, 1],
              filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
            },
            transition: t ? void 0 : {
              rotate: {
                duration: 1,
                ease: "linear",
                repeat: 1 / 0,
                repeatDelay: 1
              },
              scale: {
                duration: 1,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                repeat: 1 / 0,
                repeatDelay: 1
              },
              filter: {
                duration: 1,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                repeat: 1 / 0,
                repeatDelay: 1
              }
            }
          }
        ),
        /* @__PURE__ */ r("span", { className: "font-medium", children: e })
      ]
    }
  )
), Qs = ir(function({
  active: t,
  label: n,
  className: o,
  children: a
}) {
  const { t: i } = W(), l = me(), d = n ?? i("ai.applyingChanges");
  return H(() => {
    if (!t) return;
    const s = document.activeElement;
    s && s.getAttribute("name") !== "one-ai-input" && s.blur();
  }, [t]), /* @__PURE__ */ h("div", { className: y("relative flex flex-1 flex-col", o), children: [
    /* @__PURE__ */ r(Te, { children: t && // Zero-height sticky anchor pinned to the top of the scroll viewport,
    // with the pill pushed to ~half the viewport height. This keeps the
    // pill centred in the visible area regardless of how tall the blurred
    // content is or how far it's scrolled.
    /* @__PURE__ */ r(
      K.div,
      {
        className: "pointer-events-none sticky top-0 z-50 flex h-0 w-full items-start justify-center overflow-visible",
        initial: { opacity: 0, scale: l ? 1 : 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: l ? 1 : 0.95 },
        children: /* @__PURE__ */ r("div", { className: "mt-[40vh]", children: /* @__PURE__ */ r(
          xs,
          {
            label: d,
            reduceMotion: l
          }
        ) })
      }
    ) }),
    /* @__PURE__ */ r(
      K.div,
      {
        className: y("flex flex-1 flex-col", t && "pointer-events-none"),
        initial: { filter: "blur(0px)" },
        animate: { filter: t ? "blur(2px)" : "blur(0px)" },
        transition: { duration: l ? 0 : 0.2 },
        children: a
      }
    )
  ] });
});
export {
  Us as A,
  Qs as B,
  Ht as C,
  Ms as F,
  hs as T,
  Os as a,
  Bs as b,
  Sa as c,
  Ps as d,
  Tn as e,
  $s as f,
  zs as g,
  Ss as h,
  Gs as i,
  Vs as j,
  Ws as k,
  js as l,
  Ls as m,
  Hs as n,
  Fs as o,
  ns as p,
  as as q,
  ss as r,
  Xs as s,
  qs as t,
  Ds as u,
  Ys as v,
  gs as w,
  Ks as x,
  Is as y,
  _s as z
};
