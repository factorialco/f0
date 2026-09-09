import { u as W, t as je, v as Ge, m as $, x as Xe, y as Ze, z as qe, A as Ye, B as Je, E as Qe, G as et, H as tt, J as nt, K as rt, L as at, M as ot, N as ye, O as st, Q as Ce, l as it, R as ct, U as lt, V as ut, w as dt, r as ft } from "./F0CanvasPanel-DGZrP6qm.js";
import { jsxs as S, jsx as c } from "react/jsx-runtime";
import { forwardRef as re, useId as mt, useState as x, useRef as F, useEffect as N, useMemo as J, useCallback as T } from "react";
import { d as H, f as ue } from "./tooltip-CMBdJvJA.js";
import { F as pt, a as Pe, b as ht, c as gt } from "./VolumeMuted-DKLKhxyd.js";
function Se(e) {
  return Array.isArray(e) && e.every(
    (t) => typeof t == "object" && t !== null && "locale" in t && "value" in t
  );
}
function ee(e, t) {
  return e === void 0 ? void 0 : Se(e) ? e.length === 0 ? void 0 : ((t ? e.find((n) => n.locale === t) : void 0) ?? e[0]).value : e;
}
function ae(...e) {
  const t = /* @__PURE__ */ new Map();
  for (const a of e)
    if (Se(a))
      for (const n of a) {
        const o = t.get(n.locale);
        o ? !o.label && n.label && (o.label = n.label) : t.set(n.locale, {
          locale: n.locale,
          label: n.label
        });
      }
  return Array.from(t.values());
}
function Le(e, t) {
  if (e.label)
    return e.label;
  try {
    const a = t ?? e.locale, o = new Intl.DisplayNames([a], { type: "language" }).of(e.locale) ?? e.locale;
    return o.charAt(0).toLocaleUpperCase(a) + o.slice(1);
  } catch {
    return e.locale;
  }
}
function Z(e, t) {
  if (e.length === 0)
    return;
  const a = e.map((r) => r.locale), n = (r) => r.split("-")[0], o = (r) => a.find((d) => d === r) ?? a.find((d) => n(d) === n(r));
  if (t) {
    const r = o(t);
    if (r)
      return r;
  }
  const s = typeof navigator < "u" ? navigator.language : void 0;
  if (s) {
    const r = o(s);
    if (r)
      return r;
  }
  return a[0];
}
const Re = [0.5, 0.75, 1, 1.25, 1.5], oe = 1, le = 0.25, Q = 5, te = 0.1, q = 12, vt = 1, bt = 250, yt = [25, 50, 75], Lt = 300 * 1e3, wt = 10, kt = 0.03;
function ne(e) {
  if (!Number.isFinite(e) || e < 0)
    return "0:00";
  const t = Math.floor(e / 60), a = Math.floor(e % 60);
  return `${t}:${a.toString().padStart(2, "0")}`;
}
function se(e) {
  return `${e}x`;
}
function xt(e) {
  return Re.includes(e);
}
const De = {
  x: 12,
  y: 15,
  textAnchor: "middle",
  fontSize: 8,
  fontWeight: 700,
  fontFamily: "inherit",
  letterSpacing: -0.4
}, de = re(({ animate: e, ...t }, a) => /* @__PURE__ */ S(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    ref: a,
    ...t,
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ c(
        "rect",
        {
          x: 3.5,
          y: 6.5,
          width: 17,
          height: 11,
          rx: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ c("text", { ...De, fill: "currentColor", children: "AD" })
    ]
  }
));
de.displayName = "AudioDescriptionLineIcon";
const Te = re(({ animate: e, ...t }, a) => {
  const n = `ad-mask-${mt().replace(/:/g, "")}`;
  return /* @__PURE__ */ S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      ref: a,
      ...t,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ S("mask", { id: n, maskUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ c("rect", { x: 3, y: 6, width: 18, height: 12, rx: 3, fill: "white" }),
          /* @__PURE__ */ c("text", { ...De, fill: "black", children: "AD" })
        ] }),
        /* @__PURE__ */ c(
          "rect",
          {
            x: 3,
            y: 6,
            width: 18,
            height: 12,
            rx: 3,
            fill: "currentColor",
            mask: `url(#${n})`
          }
        )
      ]
    }
  );
});
Te.displayName = "AudioDescriptionFilledIcon";
const fe = re(
  ({ animate: e, ...t }, a) => /* @__PURE__ */ S(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      ref: a,
      ...t,
      children: [
        /* @__PURE__ */ c(
          "rect",
          {
            x: 3.5,
            y: 6.5,
            width: 17,
            height: 11,
            rx: 2.5,
            stroke: "currentColor",
            vectorEffect: "non-scaling-stroke"
          }
        ),
        /* @__PURE__ */ c(
          "path",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            d: "M7 10.75h8",
            vectorEffect: "non-scaling-stroke"
          }
        ),
        /* @__PURE__ */ c(
          "path",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            d: "M7 13.75h4.5",
            vectorEffect: "non-scaling-stroke"
          }
        )
      ]
    }
  )
);
fe.displayName = "CaptionsLineIcon";
const Ae = re(
  ({ animate: e, ...t }, a) => /* @__PURE__ */ c(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      ref: a,
      ...t,
      children: /* @__PURE__ */ c(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6 6h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm1.25 4.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    }
  )
);
Ae.displayName = "CaptionsFilledIcon";
function Et({
  value: e,
  onChange: t,
  containerRef: a
}) {
  const { t: n } = W(), [o, s] = x(!1), r = (d) => {
    const u = Array.from(
      d.currentTarget.querySelectorAll(
        '[role="menuitemradio"]'
      )
    );
    if (u.length === 0)
      return;
    const m = u.indexOf(document.activeElement);
    let g;
    switch (d.key) {
      case "ArrowDown":
        g = m < 0 ? 0 : (m + 1) % u.length;
        break;
      case "ArrowUp":
        g = m <= 0 ? u.length - 1 : m - 1;
        break;
      case "Home":
        g = 0;
        break;
      case "End":
        g = u.length - 1;
        break;
      default:
        return;
    }
    d.preventDefault(), u[g]?.focus();
  };
  return /* @__PURE__ */ S(je, { open: o, onOpenChange: s, children: [
    /* @__PURE__ */ c(Ge, { asChild: !0, children: /* @__PURE__ */ c(
      $,
      {
        variant: "ghost",
        size: "sm",
        label: se(e),
        "aria-label": n("videoPlayer.playbackSpeed", {
          rate: se(e)
        })
      }
    ) }),
    /* @__PURE__ */ c(
      Xe,
      {
        container: a.current,
        side: "top",
        align: "end",
        sideOffset: 8,
        className: H(
          "flex w-auto min-w-[7rem] flex-col gap-0.5 rounded-md border",
          "border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"
        ),
        role: "menu",
        "aria-label": n("videoPlayer.playbackSpeedLabel"),
        onKeyDown: r,
        children: Re.map((d) => {
          const u = d === e;
          return /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              role: "menuitemradio",
              "aria-checked": u,
              className: H(
                "relative flex items-center rounded-xs py-1.5 pl-8 pr-3",
                "cursor-pointer border-none bg-transparent text-left text-sm font-medium tabular-nums",
                "text-f1-foreground transition-colors hover:bg-f1-background-secondary",
                "focus-visible:bg-f1-background-secondary focus-visible:outline-none",
                "[&_svg]:h-3.5 [&_svg]:w-3.5"
              ),
              onClick: () => {
                t(d), s(!1);
              },
              children: [
                u ? /* @__PURE__ */ c("span", { className: "absolute left-2.5 inline-flex items-center", children: /* @__PURE__ */ c(Ze, {}) }) : null,
                se(d)
              ]
            },
            d
          );
        })
      }
    )
  ] });
}
function Ct({
  currentTime: e,
  duration: t,
  markerTime: a,
  blockSeekPastMarker: n = !1,
  onSeek: o
}) {
  const { t: s } = W(), r = F(null), [d, u] = x(!1), [m, g] = x(null), y = t > 0 ? Math.min(1, e / t) : 0, l = a !== void 0 && t > 0 ? Math.min(1, a / t) : 0, f = a !== void 0 && t > 0 && a > 0 && a < t - le && e < a - le, h = (v) => {
    const P = r.current;
    if (!P)
      return 0;
    const M = P.getBoundingClientRect();
    return Math.max(0, Math.min(1, (v - M.left) / M.width));
  }, b = (v) => {
    t && o(h(v) * t);
  }, E = (v) => {
    t && (v.preventDefault(), v.currentTarget.setPointerCapture(v.pointerId), u(!0), b(v.clientX));
  }, A = (v) => {
    t && (g(h(v.clientX)), d && b(v.clientX));
  }, k = (v) => {
    d && (u(!1), v.currentTarget.hasPointerCapture(v.pointerId) && v.currentTarget.releasePointerCapture(v.pointerId));
  }, w = m !== null && n && a !== void 0 && m > l, O = (v) => {
    if (!t)
      return;
    let P = null;
    switch (v.key) {
      case "ArrowLeft":
        P = Math.max(0, e - Q);
        break;
      case "ArrowRight":
        P = Math.min(t, e + Q);
        break;
      case "Home":
        P = 0;
        break;
      case "End":
        P = t;
        break;
      default:
        return;
    }
    v.preventDefault(), v.stopPropagation(), o(P);
  };
  return /* @__PURE__ */ S(
    "div",
    {
      ref: r,
      className: H(
        "relative flex h-4 flex-1 items-center rounded-sm",
        "cursor-pointer touch-none",
        ue()
      ),
      role: "slider",
      tabIndex: 0,
      "aria-label": s("videoPlayer.seekLabel"),
      "aria-valuemin": 0,
      "aria-valuemax": t || 0,
      "aria-valuenow": e,
      "aria-valuetext": s("videoPlayer.timeProgress", {
        current: ne(e),
        total: ne(t)
      }),
      onPointerDown: E,
      onPointerMove: A,
      onPointerUp: k,
      onPointerCancel: k,
      onLostPointerCapture: () => u(!1),
      onPointerLeave: () => g(null),
      onKeyDown: O,
      children: [
        /* @__PURE__ */ c("div", { className: "absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" }),
        /* @__PURE__ */ c(
          "div",
          {
            className: "pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground",
            style: { width: `${y * 100}%` }
          }
        ),
        f ? /* @__PURE__ */ c(
          "div",
          {
            className: "pointer-events-none absolute z-[1] h-2.5 w-0.5 -translate-x-px bg-f1-foreground/95",
            style: { left: `${l * 100}%` },
            "aria-hidden": "true"
          }
        ) : null,
        /* @__PURE__ */ c(
          "div",
          {
            className: "pointer-events-none absolute z-[2] h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]",
            style: { left: `${y * 100}%` }
          }
        ),
        w ? /* @__PURE__ */ c("div", { className: "absolute inset-0 cursor-not-allowed" }) : null
      ]
    }
  );
}
const ie = "off", we = "py-2 pr-4 text-base font-medium", Pt = "gap-2 py-2 pl-3 pr-2 text-base font-medium", Me = "max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[13rem] overflow-y-auto p-1";
function ce({
  icon: e,
  label: t,
  container: a,
  options: n,
  value: o,
  onLanguageChange: s,
  on: r,
  onOff: d,
  offLabel: u
}) {
  const m = d !== void 0, g = n.find((l) => l.locale === o), y = m && !r ? u : g ? Le(g) : u;
  return /* @__PURE__ */ S(et, { children: [
    /* @__PURE__ */ S(tt, { className: Pt, children: [
      /* @__PURE__ */ c(nt, { icon: e }),
      /* @__PURE__ */ c("span", { className: "flex-1", children: t }),
      /* @__PURE__ */ c("span", { className: "text-f1-foreground-secondary", children: y })
    ] }),
    /* @__PURE__ */ c(rt, { container: a ?? void 0, children: /* @__PURE__ */ c(at, { className: Me, children: /* @__PURE__ */ S(
      ot,
      {
        value: m ? r ? o : ie : o,
        onValueChange: (l) => m && l === ie ? d() : s(l),
        children: [
          n.map((l) => /* @__PURE__ */ c(
            ye,
            {
              value: l.locale,
              className: we,
              children: Le(l)
            },
            l.locale
          )),
          m ? /* @__PURE__ */ c(ye, { value: ie, className: we, children: u }) : null
        ]
      }
    ) }) })
  ] });
}
function St({
  containerRef: e,
  audioLanguages: t,
  audioLanguage: a,
  onAudioLanguageChange: n,
  captionLanguages: o,
  captionLanguage: s,
  captionsOn: r,
  onCaptionLanguageChange: d,
  onCaptionsOff: u,
  audioDescriptionLanguages: m,
  audioDescriptionLanguage: g,
  audioDescriptionOn: y,
  onAudioDescriptionLanguageChange: l,
  onAudioDescriptionOff: f
}) {
  const { t: h } = W(), b = e.current, E = h("videoPlayer.off");
  return /* @__PURE__ */ S(qe, { children: [
    /* @__PURE__ */ c(Ye, { asChild: !0, children: /* @__PURE__ */ c(
      $,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        icon: pt,
        label: h("videoPlayer.settings")
      }
    ) }),
    /* @__PURE__ */ S(
      Je,
      {
        container: b,
        side: "top",
        align: "end",
        className: Me,
        children: [
          t.length > 1 ? /* @__PURE__ */ c(
            ce,
            {
              icon: Qe,
              label: h("videoPlayer.audio"),
              container: b,
              options: t,
              value: a,
              onLanguageChange: n,
              offLabel: E
            }
          ) : null,
          o.length > 1 ? /* @__PURE__ */ c(
            ce,
            {
              icon: fe,
              label: h("videoPlayer.subtitles"),
              container: b,
              options: o,
              value: s,
              on: r,
              onLanguageChange: d,
              onOff: u,
              offLabel: E
            }
          ) : null,
          m.length > 1 ? /* @__PURE__ */ c(
            ce,
            {
              icon: de,
              label: h("videoPlayer.audioDescription"),
              container: b,
              options: m,
              value: g,
              on: y,
              onLanguageChange: l,
              onOff: f,
              offLabel: E
            }
          ) : null
        ]
      }
    )
  ] });
}
function Rt(e) {
  return e.audioLanguages > 1 || e.captionLanguages > 1 || e.audioDescriptionLanguages > 1;
}
function Dt(e, t) {
  return t || e === 0 ? Pe : e <= 0.5 ? ht : gt;
}
function Tt({
  volume: e,
  isMuted: t,
  onToggleMute: a,
  onVolumeChange: n,
  silent: o = !1
}) {
  const { t: s } = W(), r = t || e === 0;
  return o ? /* @__PURE__ */ c(
    $,
    {
      variant: "ghost",
      size: "sm",
      hideLabel: !0,
      disabled: !0,
      icon: Pe,
      label: s("videoPlayer.noAudio")
    }
  ) : /* @__PURE__ */ S("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ c(
      $,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        icon: Dt(e, r),
        label: s(r ? "videoPlayer.unmute" : "videoPlayer.mute"),
        onClick: a
      }
    ),
    /* @__PURE__ */ c(At, { value: r ? 0 : e, onChange: n })
  ] });
}
function At({ value: e, onChange: t }) {
  const { t: a } = W(), n = F(null), [o, s] = x(!1), r = Math.max(0, Math.min(1, e)), d = (l) => {
    const f = n.current;
    if (!f)
      return 0;
    const h = f.getBoundingClientRect(), b = h.width - q;
    return b <= 0 ? 0 : Math.max(
      0,
      Math.min(1, (l - h.left - q / 2) / b)
    );
  }, u = (l) => {
    l.preventDefault(), l.currentTarget.setPointerCapture(l.pointerId), s(!0), t(d(l.clientX));
  }, m = (l) => {
    o && t(d(l.clientX));
  }, g = (l) => {
    o && (s(!1), l.currentTarget.hasPointerCapture(l.pointerId) && l.currentTarget.releasePointerCapture(l.pointerId));
  }, y = (l) => {
    let f = null;
    switch (l.key) {
      case "ArrowRight":
      case "ArrowUp":
        f = Math.min(1, r + te);
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f = Math.max(0, r - te);
        break;
      case "Home":
        f = 0;
        break;
      case "End":
        f = 1;
        break;
      default:
        return;
    }
    l.preventDefault(), l.stopPropagation(), t(f);
  };
  return /* @__PURE__ */ S(
    "div",
    {
      ref: n,
      className: H(
        "relative flex h-4 w-[60px] items-center rounded-sm",
        "cursor-pointer touch-none",
        ue()
      ),
      role: "slider",
      tabIndex: 0,
      "aria-label": a("videoPlayer.volume"),
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": Number(r.toFixed(2)),
      "aria-valuetext": `${Math.round(r * 100)}%`,
      onPointerDown: u,
      onPointerMove: m,
      onPointerUp: g,
      onPointerCancel: g,
      onLostPointerCapture: () => s(!1),
      onKeyDown: y,
      children: [
        /* @__PURE__ */ c("div", { className: "absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" }),
        /* @__PURE__ */ c(
          "div",
          {
            className: "pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground",
            style: {
              width: `calc(${q}px + (100% - ${q}px) * ${r})`
            }
          }
        ),
        /* @__PURE__ */ c(
          "div",
          {
            className: "pointer-events-none absolute h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]",
            style: {
              left: `calc(${q / 2}px + (100% - ${q}px) * ${r})`
            }
          }
        )
      ]
    }
  );
}
function Mt({
  isPlaying: e,
  currentTime: t,
  duration: a,
  volume: n,
  isMuted: o,
  playbackRate: s,
  isFullscreen: r,
  markerTime: d,
  blockSeekPastMarker: u,
  containerRef: m,
  captionsAvailable: g,
  captionsOn: y,
  audioDescriptionAvailable: l,
  audioDescriptionOn: f,
  silent: h,
  persist: b,
  audioLanguages: E,
  audioLanguage: A,
  onAudioLanguageChange: k,
  captionLanguages: w,
  captionLanguage: O,
  onCaptionLanguageChange: v,
  onCaptionsOff: P,
  audioDescriptionLanguages: M,
  audioDescriptionLanguage: C,
  onAudioDescriptionLanguageChange: i,
  onAudioDescriptionOff: D,
  onTogglePlay: R,
  onToggleMute: B,
  onVolumeChange: j,
  onPlaybackRateChange: K,
  onToggleFullscreen: G,
  onToggleCaptions: _,
  onToggleAudioDescription: U,
  onSeek: Y,
  download: X
}) {
  const { t: p } = W(), I = g && w.length <= 1, z = l && M.length <= 1, V = Rt({
    audioLanguages: E.length,
    captionLanguages: w.length,
    audioDescriptionLanguages: M.length
  });
  return /* @__PURE__ */ S(
    "div",
    {
      className: H(
        // `dark` scopes the on-video controls to white; the playback-speed menu
        // portals to the player root (outside this scope) so it follows the
        // app's real theme — light by default, dark when the app is in dark mode.
        "dark absolute inset-x-0 bottom-0 z-[2] flex select-none items-center gap-2",
        // Plain dark gradient scrim (like the original trainings player). f0's
        // Tailwind palette has no `black`, so the stops use arbitrary hex+alpha.
        // `rounded-b-[inherit]` keeps the bottom corners on the player's radius.
        "rounded-b-[inherit] bg-gradient-to-t from-[#000000f2] via-[#000000b3] to-transparent px-3 py-3",
        // Shadow so the white controls stay legible over light *and* dark frames.
        "[text-shadow:0_1px_2px_rgba(0,0,0,0.55)] [&_svg]:drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]",
        "transition-opacity duration-200 motion-reduce:transition-none",
        // Always visible while paused (a paused video should look controllable,
        // not like a still image) or when `persist` is set; otherwise they
        // auto-hide during playback and reveal on hover or keyboard focus.
        !e || b ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
      ),
      children: [
        /* @__PURE__ */ c(
          $,
          {
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            icon: e ? st : Ce,
            label: p(e ? "videoPlayer.pause" : "videoPlayer.play"),
            onClick: R
          }
        ),
        /* @__PURE__ */ c(
          Ct,
          {
            currentTime: t,
            duration: a,
            markerTime: d,
            blockSeekPastMarker: u,
            onSeek: Y
          }
        ),
        /* @__PURE__ */ S("span", { className: "min-w-[80px] whitespace-nowrap text-center text-base font-medium tabular-nums text-f1-foreground", children: [
          ne(t),
          " / ",
          ne(a)
        ] }),
        /* @__PURE__ */ c(
          Tt,
          {
            volume: n,
            isMuted: o,
            onToggleMute: B,
            onVolumeChange: j,
            silent: h
          }
        ),
        /* @__PURE__ */ c(
          Et,
          {
            value: s,
            onChange: K,
            containerRef: m
          }
        ),
        I ? (
          // Filled glyph when captions are on, line glyph when off; `aria-pressed`
          // conveys the state to assistive tech (the label stays stable).
          /* @__PURE__ */ c(
            $,
            {
              variant: "ghost",
              size: "sm",
              hideLabel: !0,
              icon: y ? Ae : fe,
              label: p("videoPlayer.captions"),
              "aria-pressed": y,
              onClick: _
            }
          )
        ) : null,
        z ? (
          // Filled "AD" badge when on, line badge when off — the same on/off
          // language as captions, legible over video. `hideLabel` gives the
          // captions-style tooltip from the label; `aria-pressed` conveys state.
          /* @__PURE__ */ c(
            $,
            {
              variant: "ghost",
              size: "sm",
              hideLabel: !0,
              icon: f ? Te : de,
              label: p("videoPlayer.audioDescription"),
              "aria-pressed": f,
              onClick: U
            }
          )
        ) : null,
        V ? /* @__PURE__ */ c(
          St,
          {
            containerRef: m,
            audioLanguages: E,
            audioLanguage: A,
            onAudioLanguageChange: k,
            captionLanguages: w,
            captionLanguage: O,
            captionsOn: y,
            onCaptionLanguageChange: v,
            onCaptionsOff: P,
            audioDescriptionLanguages: M,
            audioDescriptionLanguage: C,
            audioDescriptionOn: f,
            onAudioDescriptionLanguageChange: i,
            onAudioDescriptionOff: D
          }
        ) : null,
        X ? /* @__PURE__ */ c(
          $,
          {
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            icon: it,
            label: X.label,
            onClick: X.onClick
          }
        ) : null,
        /* @__PURE__ */ c(
          $,
          {
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            icon: r ? ct : lt,
            label: p(r ? "videoPlayer.exitFullscreen" : "videoPlayer.enterFullscreen"),
            onClick: G
          }
        )
      ]
    }
  );
}
const ke = (e) => e.trimStart().startsWith("WEBVTT");
function Ie(e) {
  const t = e !== void 0 && ke(e), [a, n] = x();
  return N(() => {
    if (e === void 0 || !ke(e)) {
      n(void 0);
      return;
    }
    const o = URL.createObjectURL(new Blob([e], { type: "text/vtt" }));
    return n(o), () => URL.revokeObjectURL(o);
  }, [e]), {
    trackSrc: e === void 0 ? void 0 : t ? a : e,
    needsCrossOrigin: e !== void 0 && !t
  };
}
const xe = "descriptions";
function It(e, { enabled: t, describedSrc: a, descriptions: n }) {
  const o = a !== void 0, { trackSrc: s, needsCrossOrigin: r } = Ie(n), [d, u] = x(!1), m = o || n !== void 0 || d, [g, y] = x(), l = F(!1);
  return N(() => {
    if (!e)
      return;
    const f = e.textTracks, h = typeof window < "u" && "speechSynthesis" in window, b = t && !o && h, E = () => {
      l.current && (l.current = !1, e.play().catch(() => {
      }));
    }, A = (C) => {
      window.speechSynthesis.cancel();
      const i = new SpeechSynthesisUtterance(C);
      i.onend = E, i.onerror = E, window.speechSynthesis.speak(i);
    }, k = /* @__PURE__ */ new WeakSet(), w = [], O = (C) => {
      if (C.kind !== xe || (C.mode = "hidden", k.has(C)) || typeof C.addEventListener != "function")
        return;
      k.add(C);
      const i = () => {
        const R = C.activeCues?.[0]?.text || void 0;
        y(R), b && R && (e.paused || (e.pause(), l.current = !0), A(R));
      };
      C.addEventListener("cuechange", i), w.push(() => C.removeEventListener("cuechange", i));
    }, v = () => {
      let C = !1;
      for (const i of Array.from(f))
        i.kind === xe && (n === void 0 && (C = !0), O(i));
      u(C);
    };
    v();
    const P = typeof f.addEventListener == "function", M = () => v();
    return P && (f.addEventListener("addtrack", M), f.addEventListener("removetrack", M)), () => {
      P && (f.removeEventListener("addtrack", M), f.removeEventListener("removetrack", M)), w.forEach((C) => C()), h && window.speechSynthesis.cancel(), E();
    };
  }, [e, t, o, n, s]), J(
    () => ({ trackSrc: s, needsCrossOrigin: r, available: m, activeCue: g }),
    [s, r, m, g]
  );
}
function Nt({
  targetRef: e
}) {
  const [t, a] = x(!1);
  N(() => {
    const o = () => {
      a(document.fullscreenElement === e.current);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [e]);
  const n = T(async () => {
    const o = e.current;
    if (o)
      try {
        document.fullscreenElement ? await document.exitFullscreen() : await o.requestFullscreen();
      } catch {
      }
  }, [e]);
  return { isFullscreen: t, toggleFullscreen: n };
}
function _t({
  videoRef: e,
  seek: t,
  togglePlay: a,
  toggleMute: n,
  toggleFullscreen: o,
  setVolume: s
}) {
  return T(
    (r) => {
      const d = r.target;
      if (d instanceof HTMLElement && (d.closest(
        'button, a, input, textarea, select, [role="button"], [contenteditable="true"]'
      ) || d.closest('[role="menu"], [role^="menuitem"]') || d.getAttribute("role") === "slider"))
        return;
      const u = e.current;
      if (!u)
        return;
      switch (r.key.length === 1 ? r.key.toLowerCase() : r.key) {
        case " ":
          r.preventDefault(), a();
          return;
        case "ArrowLeft":
          r.preventDefault(), t(Math.max(0, u.currentTime - Q));
          return;
        case "ArrowRight": {
          r.preventDefault();
          const g = u.duration || u.currentTime + Q;
          t(Math.min(g, u.currentTime + Q));
          return;
        }
        case "ArrowUp":
          r.preventDefault(), s(Math.min(1, u.volume + te));
          return;
        case "ArrowDown":
          r.preventDefault(), s(Math.max(0, u.volume - te));
          return;
        case "m":
          r.preventDefault(), n();
          return;
        case "f":
          r.preventDefault(), o();
          return;
        default:
          return;
      }
    },
    [e, t, a, n, o, s]
  );
}
function Ft({
  video: e,
  enabled: t,
  resetKey: a
}) {
  const n = F(0), o = F(0), s = F(t);
  s.current = t;
  const [r, d] = x(0);
  N(() => {
    n.current = 0, o.current = 0, d(0);
  }, [a]), N(() => {
    if (!e)
      return;
    const m = () => {
      s.current && e.currentTime > n.current + le && (e.currentTime = n.current);
    }, g = () => {
      d((h) => {
        const b = n.current;
        return b - h >= 1 ? b : h;
      });
    }, y = () => {
      d((h) => Math.max(h, n.current));
    }, l = () => {
      const h = e.currentTime - o.current;
      h >= 0 && h < vt && e.currentTime > n.current && (n.current = e.currentTime, g()), m(), o.current = e.currentTime;
    }, f = () => {
      m(), y();
    };
    return e.addEventListener("timeupdate", l), e.addEventListener("seeking", f), e.addEventListener("seeked", f), e.addEventListener("pause", y), e.addEventListener("ended", y), () => {
      e.removeEventListener("timeupdate", l), e.removeEventListener("seeking", f), e.removeEventListener("seeked", f), e.removeEventListener("pause", y), e.removeEventListener("ended", y);
    };
  }, [e]);
  const u = T((m) => s.current ? Math.min(m, n.current) : m, []);
  return { maxWatchedTime: r, clampSeek: u };
}
const Ee = /* @__PURE__ */ new Set([
  "captions",
  "subtitles"
]), Ot = 2, Vt = 3;
function Ut(e, t) {
  const { trackSrc: a, needsCrossOrigin: n } = Ie(t), [o, s] = x(!1), [r, d] = x(!1), [u, m] = x(!1), y = r || t !== void 0 && !u;
  return N(() => {
    m(!1), d(!1);
  }, [a]), N(() => {
    if (!e)
      return;
    const l = e.textTracks, f = e.querySelector(
      'track[kind="captions"]'
    ), h = () => {
      let k = !1;
      for (const w of Array.from(l))
        Ee.has(w.kind) && (w.mode = o ? "showing" : "hidden", w.cues && w.cues.length > 0 && (k = !0));
      if (d(k), f) {
        if (f.readyState === Vt)
          m(!0);
        else if (f.readyState === Ot) {
          const w = f.track?.cues;
          m(!w || w.length === 0);
        }
      }
    };
    h();
    const b = [];
    if (f) {
      const k = () => h(), w = () => m(!0);
      f.addEventListener("load", k), f.addEventListener("error", w), b.push(() => {
        f.removeEventListener("load", k), f.removeEventListener("error", w);
      });
    }
    for (const k of Array.from(l)) {
      if (!Ee.has(k.kind) || typeof k.addEventListener != "function")
        continue;
      const w = () => h();
      k.addEventListener("cuechange", w), b.push(() => k.removeEventListener("cuechange", w));
    }
    const E = typeof l.addEventListener == "function", A = () => h();
    return E && (l.addEventListener("addtrack", A), l.addEventListener("removetrack", A)), e.addEventListener("loadedmetadata", h), () => {
      b.forEach((k) => k()), E && (l.removeEventListener("addtrack", A), l.removeEventListener("removetrack", A)), e.removeEventListener("loadedmetadata", h);
    };
  }, [e, t, o, a]), J(
    () => ({
      trackSrc: a,
      needsCrossOrigin: n,
      available: y,
      showing: o,
      toggle: () => s((l) => !l)
    }),
    [a, n, y, o]
  );
}
function $t(e) {
  const t = Math.min(
    wt,
    e * kt
  );
  return e - t;
}
function Kt({
  video: e,
  onComplete: t,
  resetKey: a
}) {
  const n = F(t);
  n.current = t;
  const o = F(!1), s = !!t;
  N(() => {
    o.current = !1;
  }, [a]), N(() => {
    if (!e || !s)
      return;
    const r = () => {
      o.current || !e.duration || e.currentTime >= $t(e.duration) && (o.current = !0, n.current?.(e));
    };
    return e.addEventListener("timeupdate", r), e.addEventListener("ended", r), () => {
      e.removeEventListener("timeupdate", r), e.removeEventListener("ended", r);
    };
  }, [e, s]);
}
function zt({
  video: e,
  onMilestone: t,
  resetKey: a
}) {
  const n = F(t);
  n.current = t;
  const o = F(/* @__PURE__ */ new Set()), s = !!t;
  N(() => {
    o.current.clear();
  }, [a]), N(() => {
    if (!e || !s)
      return;
    const r = () => {
      if (!e.duration)
        return;
      const d = Math.round(e.currentTime / e.duration * 100);
      for (const u of yt)
        o.current.has(u) || d >= u && (o.current.add(u), n.current?.(u, e));
    };
    return e.addEventListener("timeupdate", r), () => {
      e.removeEventListener("timeupdate", r);
    };
  }, [e, s]);
}
function Bt(e) {
  const t = F(null), [a, n] = x(
    null
  ), o = F(0), s = T((i) => {
    t.current = i, n(i);
  }, []), [r, d] = x(!1), [u, m] = x(!1), [g, y] = x(0), [l, f] = x(0), [h, b] = x(1), [E, A] = x(!1), [k, w] = x(
    oe
  );
  N(() => {
    o.current = 0, t.current && (t.current.playbackRate = oe), d(!1), m(!1), y(0), f(0), w(oe);
  }, [e]), N(() => {
    const i = a;
    if (!i)
      return;
    const D = () => m(!0), R = () => m(!1), B = () => m(!1), j = () => {
      b(i.volume), A(i.muted);
    }, K = () => f(i.duration || 0), G = () => {
      xt(i.playbackRate) && w(i.playbackRate);
    }, _ = () => {
      const U = performance.now();
      U - o.current >= bt && (o.current = U, y(i.currentTime));
    };
    return i.addEventListener("play", D), i.addEventListener("pause", R), i.addEventListener("ended", B), i.addEventListener("volumechange", j), i.addEventListener("loadedmetadata", K), i.addEventListener("ratechange", G), i.addEventListener("timeupdate", _), i.readyState >= 1 && i.duration && f(i.duration), () => {
      i.removeEventListener("play", D), i.removeEventListener("pause", R), i.removeEventListener("ended", B), i.removeEventListener("volumechange", j), i.removeEventListener("loadedmetadata", K), i.removeEventListener("ratechange", G), i.removeEventListener("timeupdate", _);
    };
  }, [a]);
  const O = T(() => {
    const i = t.current;
    i && (i.paused || i.ended ? i.play().catch(() => {
    }) : i.pause());
  }, []), v = T(() => {
    const i = t.current;
    i && (i.muted = !i.muted);
  }, []), P = T((i) => {
    const D = t.current;
    if (!D)
      return;
    const R = Math.max(0, Math.min(1, i));
    D.volume = R, D.muted = R === 0;
  }, []), M = T((i) => {
    const D = t.current;
    D && (D.playbackRate = i);
  }, []), C = T((i) => {
    const D = t.current;
    if (!D)
      return;
    const R = Math.max(0, Math.min(i, D.duration || i));
    D.currentTime = R, y(R);
  }, []);
  return {
    videoRef: t,
    videoElement: a,
    setVideoNode: s,
    videoLoaded: r,
    isPlaying: u,
    currentTime: g,
    duration: l,
    volume: h,
    isMuted: E,
    playbackRate: k,
    setVideoLoaded: d,
    togglePlay: O,
    toggleMute: v,
    setVolume: P,
    setPlaybackRate: M,
    seekTo: C
  };
}
function Ht({
  video: e,
  onTrackAction: t
}) {
  const a = F(t);
  a.current = t;
  const n = !!t;
  N(() => {
    if (!e || !n)
      return;
    let o = null;
    const s = () => {
      o && (clearInterval(o), o = null);
    }, r = () => {
      a.current?.(), s(), o = setInterval(() => {
        a.current?.();
      }, Lt);
    }, d = () => {
      a.current?.(), s();
    }, u = () => s();
    return e.addEventListener("play", r), e.addEventListener("pause", d), e.addEventListener("ended", u), () => {
      s(), e.removeEventListener("play", r), e.removeEventListener("pause", d), e.removeEventListener("ended", u);
    };
  }, [e, n]);
}
function Wt({
  src: e,
  poster: t,
  ariaLabel: a,
  silent: n = !1,
  persistControls: o = !1,
  content: s,
  defaultLanguage: r,
  autoPlay: d = !1,
  autoFocus: u = !1,
  download: m,
  restrictForwardSeek: g = !1,
  onTrackAction: y,
  onMilestone: l,
  onComplete: f,
  ...h
}) {
  const { t: b } = W(), E = F(null), A = J(() => ae(e), [e]), [k, w] = x(
    () => Z(A, r)
  ), O = A.some((L) => L.locale === k) ? k : Z(A, r), v = ee(e, O) ?? "", P = J(
    () => ae(s?.captions),
    [s?.captions]
  ), [M, C] = x(
    () => Z(P, r)
  ), i = P.some(
    (L) => L.locale === M
  ) ? M : Z(P, r), D = ee(s?.captions, i), R = J(
    () => ae(s?.descriptions, s?.describedSrc),
    [s?.descriptions, s?.describedSrc]
  ), [B, j] = x(
    () => Z(R, r)
  ), K = R.some(
    (L) => L.locale === B
  ) ? B : Z(R, r), G = ee(
    s?.descriptions,
    K
  ), _ = ee(
    s?.describedSrc,
    K
  ), [U, Y] = x(!1), X = U && _ ? _ : v, p = Bt(X), I = Ut(p.videoElement, D), z = It(p.videoElement, {
    enabled: U,
    describedSrc: _,
    descriptions: G
  }), V = T(() => {
    const L = p.videoRef.current;
    if (!L)
      return;
    const He = L.currentTime, We = !L.paused, be = () => {
      L.currentTime = He, We && L.play().catch(() => {
      }), L.removeEventListener("loadedmetadata", be);
    };
    L.addEventListener("loadedmetadata", be);
  }, [p.videoRef]), Ne = T(
    (L) => {
      V(), w(L);
    },
    [V]
  ), _e = T(() => {
    _ && V(), Y((L) => !L);
  }, [_, V]), Fe = T(
    (L) => {
      C(L), I.showing || I.toggle();
    },
    [I]
  ), Oe = T(() => {
    I.showing && I.toggle();
  }, [I]), Ve = T(
    (L) => {
      _ && V(), j(L), Y(!0);
    },
    [_, V]
  ), Ue = T(() => {
    _ && V(), Y(!1);
  }, [_, V]);
  Ht({ video: p.videoElement, onTrackAction: y }), zt({
    video: p.videoElement,
    onMilestone: l,
    resetKey: v
  }), Kt({
    video: p.videoElement,
    onComplete: f,
    resetKey: v
  });
  const { maxWatchedTime: $e, clampSeek: me } = Ft({
    video: p.videoElement,
    enabled: g,
    resetKey: v
  }), pe = T(
    (L) => p.seekTo(me(L)),
    [p, me]
  ), { isFullscreen: Ke, toggleFullscreen: he } = Nt({
    targetRef: E
  }), ge = T(() => {
  }, []), ve = !!(U && _);
  N(() => {
    const L = p.videoRef.current;
    n && L && (L.muted = !ve);
  }, [n, ve, p.videoElement, p.videoRef]);
  const ze = _t({
    videoRef: p.videoRef,
    seek: pe,
    togglePlay: p.togglePlay,
    toggleMute: n ? ge : p.toggleMute,
    toggleFullscreen: he,
    setVolume: n ? ge : p.setVolume
  });
  N(() => {
    u && E.current?.focus({ preventScroll: !0 });
  }, [u]);
  const Be = (L) => L.preventDefault();
  return /* @__PURE__ */ S(
    "div",
    {
      ref: E,
      className: H(
        "group relative h-full w-full overflow-hidden rounded-[inherit] bg-f1-foreground dark:bg-f1-background",
        "[&:fullscreen]:h-screen [&:fullscreen]:w-screen [&:fullscreen]:rounded-none",
        ue()
      ),
      role: "region",
      "aria-label": a ?? b("videoPlayer.regionLabel"),
      tabIndex: 0,
      onKeyDown: ze,
      "data-video-captions": n ? "no-audio" : I.available ? "available" : "missing",
      ...h,
      children: [
        /* @__PURE__ */ S(
          "video",
          {
            ref: p.setVideoNode,
            autoPlay: d,
            playsInline: !0,
            disablePictureInPicture: !0,
            disableRemotePlayback: !0,
            draggable: !1,
            onContextMenu: Be,
            onClick: p.togglePlay,
            src: X,
            poster: t,
            crossOrigin: I.needsCrossOrigin || z.needsCrossOrigin ? "anonymous" : void 0,
            onLoadedData: () => p.setVideoLoaded(!0),
            className: H(
              "block h-full w-full cursor-pointer rounded-[inherit] object-contain transition-opacity duration-300",
              // Lift native captions clear of the bottom controls bar (~3.5rem
              // tall) so they never sit behind it. WebKit/Blink honour this
              // pseudo-element; other engines keep the default bottom placement.
              "[&::-webkit-media-text-track-container]:![transform:translateY(-3.5rem)]"
            ),
            style: { opacity: p.videoLoaded || t ? 1 : 0 },
            children: [
              I.trackSrc ? /* @__PURE__ */ c(
                "track",
                {
                  kind: "captions",
                  src: I.trackSrc,
                  label: b("videoPlayer.captions"),
                  default: !1
                }
              ) : null,
              z.trackSrc ? /* @__PURE__ */ c(
                "track",
                {
                  kind: "descriptions",
                  src: z.trackSrc,
                  label: b("videoPlayer.audioDescription"),
                  default: !1
                }
              ) : null
            ]
          }
        ),
        p.isPlaying ? null : /* @__PURE__ */ c(
          "div",
          {
            "aria-hidden": !0,
            "data-video-play-overlay": !0,
            className: "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center",
            children: /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: p.togglePlay,
                className: "pointer-events-auto flex size-14 items-center justify-center rounded-full bg-f1-foreground/70 pl-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform duration-150 hover:scale-105 motion-reduce:transition-none dark:bg-f1-background/70 [&_svg]:size-7",
                children: /* @__PURE__ */ c(ut, { icon: Ce, size: "lg", color: "#fff" })
              }
            )
          }
        ),
        I.showing && z.activeCue ? /* @__PURE__ */ c(
          "div",
          {
            "aria-hidden": !0,
            className: "dark pointer-events-none absolute inset-x-0 top-0 z-[2] flex justify-center p-3",
            children: /* @__PURE__ */ S("p", { className: "max-w-[90%] rounded-md bg-f1-background/70 px-2 py-1 text-center text-base italic text-f1-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]", children: [
              /* @__PURE__ */ S("span", { className: "pr-1 font-medium not-italic opacity-70", children: [
                "[",
                b("videoPlayer.audioDescription"),
                "]"
              ] }),
              z.activeCue
            ] })
          }
        ) : null,
        /* @__PURE__ */ c("span", { className: "sr-only", "aria-live": "polite", children: p.isPlaying ? b("videoPlayer.playing") : b("videoPlayer.paused") }),
        p.videoLoaded ? /* @__PURE__ */ c(
          Mt,
          {
            isPlaying: p.isPlaying,
            currentTime: p.currentTime,
            duration: p.duration,
            volume: p.volume,
            isMuted: p.isMuted,
            playbackRate: p.playbackRate,
            isFullscreen: Ke,
            markerTime: g ? $e : void 0,
            blockSeekPastMarker: g,
            containerRef: E,
            captionsAvailable: I.available,
            captionsOn: I.showing,
            audioDescriptionAvailable: z.available,
            audioDescriptionOn: U,
            silent: n,
            persist: o,
            audioLanguages: A,
            audioLanguage: O,
            onAudioLanguageChange: Ne,
            captionLanguages: P,
            captionLanguage: i,
            onCaptionLanguageChange: Fe,
            onCaptionsOff: Oe,
            audioDescriptionLanguages: R,
            audioDescriptionLanguage: K,
            onAudioDescriptionLanguageChange: Ve,
            onAudioDescriptionOff: Ue,
            onTogglePlay: p.togglePlay,
            onToggleMute: p.toggleMute,
            onVolumeChange: p.setVolume,
            onPlaybackRateChange: p.setPlaybackRate,
            onToggleFullscreen: () => {
              he();
            },
            onToggleCaptions: I.toggle,
            onToggleAudioDescription: _e,
            onSeek: pe,
            download: m
          }
        ) : null
      ]
    }
  );
}
const Yt = dt(
  ft("F0VideoPlayer", Wt)
);
export {
  Yt as F,
  ae as c,
  Z as d,
  Le as l,
  ee as r
};
