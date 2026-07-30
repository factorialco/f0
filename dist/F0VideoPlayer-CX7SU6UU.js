import { u as W, t as je, v as Ge, m as $, x as Xe, y as Ze, z as qe, A as Ye, B as Je, E as Qe, G as et, H as tt, J as nt, K as rt, L as at, M as ye, N as ot, O as Ce, l as st, Q as it, R as ct, U as lt, w as dt, r as ut } from "./F0CanvasPanel-Cd5mONeo.js";
import { jsxs as R, jsx as l } from "react/jsx-runtime";
import { forwardRef as re, useId as ft, useState as x, useRef as O, useEffect as _, useMemo as J, useCallback as M } from "react";
import { d as H, f as de } from "./tooltip-Cik7KBQT.js";
import { F as mt, a as pt, b as Pe, c as ht, d as gt } from "./VolumeMuted-XL3dwOL-.js";
function Se(e) {
  return Array.isArray(e);
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
  if (e.label) return e.label;
  try {
    const a = t ?? e.locale, o = new Intl.DisplayNames([a], { type: "language" }).of(e.locale) ?? e.locale;
    return o.charAt(0).toLocaleUpperCase(a) + o.slice(1);
  } catch {
    return e.locale;
  }
}
function Z(e, t) {
  if (e.length === 0) return;
  const a = e.map((r) => r.locale), n = (r) => r.split("-")[0], o = (r) => a.find((u) => u === r) ?? a.find((u) => n(u) === n(r));
  if (t) {
    const r = o(t);
    if (r) return r;
  }
  const i = typeof navigator < "u" ? navigator.language : void 0;
  if (i) {
    const r = o(i);
    if (r) return r;
  }
  return a[0];
}
const Re = [0.5, 0.75, 1, 1.25, 1.5], oe = 1, le = 0.25, Q = 5, te = 0.1, q = 12, vt = 1, bt = 250, yt = [25, 50, 75], Lt = 300 * 1e3, wt = 10, kt = 0.03;
function ne(e) {
  if (!Number.isFinite(e) || e < 0) return "0:00";
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
}, ue = re(({ animate: e, ...t }, a) => /* @__PURE__ */ R(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    ref: a,
    ...t,
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ l(
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
      /* @__PURE__ */ l("text", { ...De, fill: "currentColor", children: "AD" })
    ]
  }
));
ue.displayName = "AudioDescriptionLineIcon";
const Te = re(({ animate: e, ...t }, a) => {
  const n = `ad-mask-${ft().replace(/:/g, "")}`;
  return /* @__PURE__ */ R(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      ref: a,
      ...t,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ R("mask", { id: n, maskUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ l("rect", { x: 3, y: 6, width: 18, height: 12, rx: 3, fill: "white" }),
          /* @__PURE__ */ l("text", { ...De, fill: "black", children: "AD" })
        ] }),
        /* @__PURE__ */ l(
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
  ({ animate: e, ...t }, a) => /* @__PURE__ */ R(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      ref: a,
      ...t,
      children: [
        /* @__PURE__ */ l(
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
        /* @__PURE__ */ l(
          "path",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            d: "M7 10.75h8",
            vectorEffect: "non-scaling-stroke"
          }
        ),
        /* @__PURE__ */ l(
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
const Me = re(
  ({ animate: e, ...t }, a) => /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      ref: a,
      ...t,
      children: /* @__PURE__ */ l(
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
Me.displayName = "CaptionsFilledIcon";
function Et({
  value: e,
  onChange: t,
  containerRef: a
}) {
  const { t: n } = W(), [o, i] = x(!1), r = (u) => {
    const d = Array.from(
      u.currentTarget.querySelectorAll(
        '[role="menuitemradio"]'
      )
    );
    if (d.length === 0) return;
    const m = d.indexOf(document.activeElement);
    let g;
    switch (u.key) {
      case "ArrowDown":
        g = m < 0 ? 0 : (m + 1) % d.length;
        break;
      case "ArrowUp":
        g = m <= 0 ? d.length - 1 : m - 1;
        break;
      case "Home":
        g = 0;
        break;
      case "End":
        g = d.length - 1;
        break;
      default:
        return;
    }
    u.preventDefault(), d[g]?.focus();
  };
  return /* @__PURE__ */ R(je, { open: o, onOpenChange: i, children: [
    /* @__PURE__ */ l(Ge, { asChild: !0, children: /* @__PURE__ */ l(
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
    /* @__PURE__ */ l(
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
        children: Re.map((u) => {
          const d = u === e;
          return /* @__PURE__ */ R(
            "button",
            {
              type: "button",
              role: "menuitemradio",
              "aria-checked": d,
              className: H(
                "relative flex items-center rounded-xs py-1.5 pl-8 pr-3",
                "cursor-pointer border-none bg-transparent text-left text-sm font-medium tabular-nums",
                "text-f1-foreground transition-colors hover:bg-f1-background-secondary",
                "focus-visible:bg-f1-background-secondary focus-visible:outline-none",
                "[&_svg]:h-3.5 [&_svg]:w-3.5"
              ),
              onClick: () => {
                t(u), i(!1);
              },
              children: [
                d && /* @__PURE__ */ l("span", { className: "absolute left-2.5 inline-flex items-center", children: /* @__PURE__ */ l(Ze, {}) }),
                se(u)
              ]
            },
            u
          );
        })
      }
    )
  ] });
}
const ie = "off", we = "py-2 pr-4 text-base font-medium", Ct = "gap-2 py-2 pl-3 pr-2 text-base font-medium", Ae = "max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[13rem] overflow-y-auto p-1";
function ce({
  icon: e,
  label: t,
  container: a,
  options: n,
  value: o,
  onLanguageChange: i,
  on: r,
  onOff: u,
  offLabel: d
}) {
  const m = u !== void 0, g = n.find((c) => c.locale === o), y = m && !r ? d : g ? Le(g) : d;
  return /* @__PURE__ */ R(Qe, { children: [
    /* @__PURE__ */ R(et, { className: Ct, children: [
      /* @__PURE__ */ l(tt, { icon: e }),
      /* @__PURE__ */ l("span", { className: "flex-1", children: t }),
      /* @__PURE__ */ l("span", { className: "text-f1-foreground-secondary", children: y })
    ] }),
    /* @__PURE__ */ l(nt, { container: a ?? void 0, children: /* @__PURE__ */ l(rt, { className: Ae, children: /* @__PURE__ */ R(
      at,
      {
        value: m ? r ? o : ie : o,
        onValueChange: (c) => m && c === ie ? u() : i(c),
        children: [
          n.map((c) => /* @__PURE__ */ l(
            ye,
            {
              value: c.locale,
              className: we,
              children: Le(c)
            },
            c.locale
          )),
          m && /* @__PURE__ */ l(ye, { value: ie, className: we, children: d })
        ]
      }
    ) }) })
  ] });
}
function Pt({
  containerRef: e,
  audioLanguages: t,
  audioLanguage: a,
  onAudioLanguageChange: n,
  captionLanguages: o,
  captionLanguage: i,
  captionsOn: r,
  onCaptionLanguageChange: u,
  onCaptionsOff: d,
  audioDescriptionLanguages: m,
  audioDescriptionLanguage: g,
  audioDescriptionOn: y,
  onAudioDescriptionLanguageChange: c,
  onAudioDescriptionOff: f
}) {
  const { t: h } = W(), b = e.current, E = h("videoPlayer.off");
  return /* @__PURE__ */ R(qe, { children: [
    /* @__PURE__ */ l(Ye, { asChild: !0, children: /* @__PURE__ */ l(
      $,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        icon: mt,
        label: h("videoPlayer.settings")
      }
    ) }),
    /* @__PURE__ */ R(
      Je,
      {
        container: b,
        side: "top",
        align: "end",
        className: Ae,
        children: [
          t.length > 1 && /* @__PURE__ */ l(
            ce,
            {
              icon: pt,
              label: h("videoPlayer.audio"),
              container: b,
              options: t,
              value: a,
              onLanguageChange: n,
              offLabel: E
            }
          ),
          o.length > 1 && /* @__PURE__ */ l(
            ce,
            {
              icon: fe,
              label: h("videoPlayer.subtitles"),
              container: b,
              options: o,
              value: i,
              on: r,
              onLanguageChange: u,
              onOff: d,
              offLabel: E
            }
          ),
          m.length > 1 && /* @__PURE__ */ l(
            ce,
            {
              icon: ue,
              label: h("videoPlayer.audioDescription"),
              container: b,
              options: m,
              value: g,
              on: y,
              onLanguageChange: c,
              onOff: f,
              offLabel: E
            }
          )
        ]
      }
    )
  ] });
}
function St(e) {
  return e.audioLanguages > 1 || e.captionLanguages > 1 || e.audioDescriptionLanguages > 1;
}
function Rt({
  currentTime: e,
  duration: t,
  markerTime: a,
  blockSeekPastMarker: n = !1,
  onSeek: o
}) {
  const { t: i } = W(), r = O(null), [u, d] = x(!1), [m, g] = x(null), y = t > 0 ? Math.min(1, e / t) : 0, c = a !== void 0 && t > 0 ? Math.min(1, a / t) : 0, f = a !== void 0 && t > 0 && a > 0 && a < t - le && e < a - le, h = (v) => {
    const S = r.current;
    if (!S) return 0;
    const I = S.getBoundingClientRect();
    return Math.max(0, Math.min(1, (v - I.left) / I.width));
  }, b = (v) => {
    t && o(h(v) * t);
  }, E = (v) => {
    t && (v.preventDefault(), v.currentTarget.setPointerCapture(v.pointerId), d(!0), b(v.clientX));
  }, A = (v) => {
    t && (g(h(v.clientX)), u && b(v.clientX));
  }, k = (v) => {
    u && (d(!1), v.currentTarget.hasPointerCapture(v.pointerId) && v.currentTarget.releasePointerCapture(v.pointerId));
  }, L = m !== null && n && a !== void 0 && m > c, T = (v) => {
    if (!t) return;
    let S = null;
    switch (v.key) {
      case "ArrowLeft":
        S = Math.max(0, e - Q);
        break;
      case "ArrowRight":
        S = Math.min(t, e + Q);
        break;
      case "Home":
        S = 0;
        break;
      case "End":
        S = t;
        break;
      default:
        return;
    }
    v.preventDefault(), v.stopPropagation(), o(S);
  };
  return /* @__PURE__ */ R(
    "div",
    {
      ref: r,
      className: H(
        "relative flex h-4 flex-1 items-center rounded-sm",
        "cursor-pointer touch-none",
        de()
      ),
      role: "slider",
      tabIndex: 0,
      "aria-label": i("videoPlayer.seekLabel"),
      "aria-valuemin": 0,
      "aria-valuemax": t || 0,
      "aria-valuenow": e,
      "aria-valuetext": i("videoPlayer.timeProgress", {
        current: ne(e),
        total: ne(t)
      }),
      onPointerDown: E,
      onPointerMove: A,
      onPointerUp: k,
      onPointerCancel: k,
      onLostPointerCapture: () => d(!1),
      onPointerLeave: () => g(null),
      onKeyDown: T,
      children: [
        /* @__PURE__ */ l("div", { className: "absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" }),
        /* @__PURE__ */ l(
          "div",
          {
            className: "pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground",
            style: { width: `${y * 100}%` }
          }
        ),
        f && /* @__PURE__ */ l(
          "div",
          {
            className: "pointer-events-none absolute z-[1] h-2.5 w-0.5 -translate-x-px bg-f1-foreground/95",
            style: { left: `${c * 100}%` },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: "pointer-events-none absolute z-[2] h-3 w-3 -translate-x-1/2 rounded-full bg-f1-foreground shadow-[0_0_4px_rgba(0,0,0,0.4)]",
            style: { left: `${y * 100}%` }
          }
        ),
        L && /* @__PURE__ */ l("div", { className: "absolute inset-0 cursor-not-allowed" })
      ]
    }
  );
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
  const { t: i } = W(), r = t || e === 0;
  return o ? /* @__PURE__ */ l(
    $,
    {
      variant: "ghost",
      size: "sm",
      hideLabel: !0,
      disabled: !0,
      icon: Pe,
      label: i("videoPlayer.noAudio")
    }
  ) : /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ l(
      $,
      {
        variant: "ghost",
        size: "sm",
        hideLabel: !0,
        icon: Dt(e, r),
        label: i(r ? "videoPlayer.unmute" : "videoPlayer.mute"),
        onClick: a
      }
    ),
    /* @__PURE__ */ l(Mt, { value: r ? 0 : e, onChange: n })
  ] });
}
function Mt({ value: e, onChange: t }) {
  const { t: a } = W(), n = O(null), [o, i] = x(!1), r = Math.max(0, Math.min(1, e)), u = (c) => {
    const f = n.current;
    if (!f) return 0;
    const h = f.getBoundingClientRect(), b = h.width - q;
    return b <= 0 ? 0 : Math.max(
      0,
      Math.min(1, (c - h.left - q / 2) / b)
    );
  }, d = (c) => {
    c.preventDefault(), c.currentTarget.setPointerCapture(c.pointerId), i(!0), t(u(c.clientX));
  }, m = (c) => {
    o && t(u(c.clientX));
  }, g = (c) => {
    o && (i(!1), c.currentTarget.hasPointerCapture(c.pointerId) && c.currentTarget.releasePointerCapture(c.pointerId));
  }, y = (c) => {
    let f = null;
    switch (c.key) {
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
    c.preventDefault(), c.stopPropagation(), t(f);
  };
  return /* @__PURE__ */ R(
    "div",
    {
      ref: n,
      className: H(
        "relative flex h-4 w-[60px] items-center rounded-sm",
        "cursor-pointer touch-none",
        de()
      ),
      role: "slider",
      tabIndex: 0,
      "aria-label": a("videoPlayer.volume"),
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": Number(r.toFixed(2)),
      "aria-valuetext": `${Math.round(r * 100)}%`,
      onPointerDown: d,
      onPointerMove: m,
      onPointerUp: g,
      onPointerCancel: g,
      onLostPointerCapture: () => i(!1),
      onKeyDown: y,
      children: [
        /* @__PURE__ */ l("div", { className: "absolute inset-x-0 h-1 rounded-sm bg-f1-foreground/30" }),
        /* @__PURE__ */ l(
          "div",
          {
            className: "pointer-events-none absolute left-0 h-1 rounded-sm bg-f1-foreground",
            style: {
              width: `calc(${q}px + (100% - ${q}px) * ${r})`
            }
          }
        ),
        /* @__PURE__ */ l(
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
function At({
  isPlaying: e,
  currentTime: t,
  duration: a,
  volume: n,
  isMuted: o,
  playbackRate: i,
  isFullscreen: r,
  markerTime: u,
  blockSeekPastMarker: d,
  containerRef: m,
  captionsAvailable: g,
  captionsOn: y,
  audioDescriptionAvailable: c,
  audioDescriptionOn: f,
  silent: h,
  persist: b,
  audioLanguages: E,
  audioLanguage: A,
  onAudioLanguageChange: k,
  captionLanguages: L,
  captionLanguage: T,
  onCaptionLanguageChange: v,
  onCaptionsOff: S,
  audioDescriptionLanguages: I,
  audioDescriptionLanguage: C,
  onAudioDescriptionLanguageChange: s,
  onAudioDescriptionOff: P,
  onTogglePlay: D,
  onToggleMute: B,
  onVolumeChange: j,
  onPlaybackRateChange: K,
  onToggleFullscreen: G,
  onToggleCaptions: F,
  onToggleAudioDescription: V,
  onSeek: Y,
  download: X
}) {
  const { t: p } = W(), N = g && L.length <= 1, z = c && I.length <= 1, U = St({
    audioLanguages: E.length,
    captionLanguages: L.length,
    audioDescriptionLanguages: I.length
  });
  return /* @__PURE__ */ R(
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
        /* @__PURE__ */ l(
          $,
          {
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            icon: e ? ot : Ce,
            label: p(e ? "videoPlayer.pause" : "videoPlayer.play"),
            onClick: D
          }
        ),
        /* @__PURE__ */ l(
          Rt,
          {
            currentTime: t,
            duration: a,
            markerTime: u,
            blockSeekPastMarker: d,
            onSeek: Y
          }
        ),
        /* @__PURE__ */ R("span", { className: "min-w-[80px] whitespace-nowrap text-center text-base font-medium tabular-nums text-f1-foreground", children: [
          ne(t),
          " / ",
          ne(a)
        ] }),
        /* @__PURE__ */ l(
          Tt,
          {
            volume: n,
            isMuted: o,
            onToggleMute: B,
            onVolumeChange: j,
            silent: h
          }
        ),
        /* @__PURE__ */ l(
          Et,
          {
            value: i,
            onChange: K,
            containerRef: m
          }
        ),
        N && // Filled glyph when captions are on, line glyph when off; `aria-pressed`
        // conveys the state to assistive tech (the label stays stable).
        /* @__PURE__ */ l(
          $,
          {
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            icon: y ? Me : fe,
            label: p("videoPlayer.captions"),
            "aria-pressed": y,
            onClick: F
          }
        ),
        z && // Filled "AD" badge when on, line badge when off — the same on/off
        // language as captions, legible over video. `hideLabel` gives the
        // captions-style tooltip from the label; `aria-pressed` conveys state.
        /* @__PURE__ */ l(
          $,
          {
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            icon: f ? Te : ue,
            label: p("videoPlayer.audioDescription"),
            "aria-pressed": f,
            onClick: V
          }
        ),
        U && /* @__PURE__ */ l(
          Pt,
          {
            containerRef: m,
            audioLanguages: E,
            audioLanguage: A,
            onAudioLanguageChange: k,
            captionLanguages: L,
            captionLanguage: T,
            captionsOn: y,
            onCaptionLanguageChange: v,
            onCaptionsOff: S,
            audioDescriptionLanguages: I,
            audioDescriptionLanguage: C,
            audioDescriptionOn: f,
            onAudioDescriptionLanguageChange: s,
            onAudioDescriptionOff: P
          }
        ),
        X && /* @__PURE__ */ l(
          $,
          {
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            icon: st,
            label: X.label,
            onClick: X.onClick
          }
        ),
        /* @__PURE__ */ l(
          $,
          {
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            icon: r ? it : ct,
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
  return _(() => {
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
  const o = a !== void 0, { trackSrc: i, needsCrossOrigin: r } = Ie(n), [u, d] = x(!1), m = o || n !== void 0 || u, [g, y] = x(), c = O(!1);
  return _(() => {
    if (!e) return;
    const f = e.textTracks, h = typeof window < "u" && "speechSynthesis" in window, b = t && !o && h, E = () => {
      c.current && (c.current = !1, e.play().catch(() => {
      }));
    }, A = (C) => {
      window.speechSynthesis.cancel();
      const s = new SpeechSynthesisUtterance(C);
      s.onend = E, s.onerror = E, window.speechSynthesis.speak(s);
    }, k = /* @__PURE__ */ new WeakSet(), L = [], T = (C) => {
      if (C.kind !== xe || (C.mode = "hidden", k.has(C)) || typeof C.addEventListener != "function") return;
      k.add(C);
      const s = () => {
        const D = C.activeCues?.[0]?.text || void 0;
        y(D), b && D && (e.paused || (e.pause(), c.current = !0), A(D));
      };
      C.addEventListener("cuechange", s), L.push(() => C.removeEventListener("cuechange", s));
    }, v = () => {
      let C = !1;
      for (let s = 0; s < f.length; s++) {
        const P = f[s];
        P.kind === xe && (n === void 0 && (C = !0), T(P));
      }
      d(C);
    };
    v();
    const S = typeof f.addEventListener == "function", I = () => v();
    return S && (f.addEventListener("addtrack", I), f.addEventListener("removetrack", I)), () => {
      S && (f.removeEventListener("addtrack", I), f.removeEventListener("removetrack", I)), L.forEach((C) => C()), h && window.speechSynthesis.cancel(), E();
    };
  }, [e, t, o, n, i]), J(
    () => ({ trackSrc: i, needsCrossOrigin: r, available: m, activeCue: g }),
    [i, r, m, g]
  );
}
function Nt({
  targetRef: e
}) {
  const [t, a] = x(!1);
  _(() => {
    const o = () => {
      a(document.fullscreenElement === e.current);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [e]);
  const n = M(async () => {
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
  setVolume: i
}) {
  return M(
    (r) => {
      const u = r.target;
      if (u instanceof HTMLElement && (u.closest(
        'button, a, input, textarea, select, [role="button"], [contenteditable="true"]'
      ) || u.closest('[role="menu"], [role^="menuitem"]') || u.getAttribute("role") === "slider"))
        return;
      const d = e.current;
      if (!d) return;
      switch (r.key.length === 1 ? r.key.toLowerCase() : r.key) {
        case " ":
          r.preventDefault(), a();
          return;
        case "ArrowLeft":
          r.preventDefault(), t(Math.max(0, d.currentTime - Q));
          return;
        case "ArrowRight": {
          r.preventDefault();
          const g = d.duration || d.currentTime + Q;
          t(Math.min(g, d.currentTime + Q));
          return;
        }
        case "ArrowUp":
          r.preventDefault(), i(Math.min(1, d.volume + te));
          return;
        case "ArrowDown":
          r.preventDefault(), i(Math.max(0, d.volume - te));
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
    [e, t, a, n, o, i]
  );
}
function Ft({
  video: e,
  enabled: t,
  resetKey: a
}) {
  const n = O(0), o = O(0), i = O(t);
  i.current = t;
  const [r, u] = x(0);
  _(() => {
    n.current = 0, o.current = 0, u(0);
  }, [a]), _(() => {
    if (!e) return;
    const m = () => {
      i.current && e.currentTime > n.current + le && (e.currentTime = n.current);
    }, g = () => {
      u((h) => {
        const b = n.current;
        return b - h >= 1 ? b : h;
      });
    }, y = () => {
      u((h) => Math.max(h, n.current));
    }, c = () => {
      const h = e.currentTime - o.current;
      h >= 0 && h < vt && e.currentTime > n.current && (n.current = e.currentTime, g()), m(), o.current = e.currentTime;
    }, f = () => {
      m(), y();
    };
    return e.addEventListener("timeupdate", c), e.addEventListener("seeking", f), e.addEventListener("seeked", f), e.addEventListener("pause", y), e.addEventListener("ended", y), () => {
      e.removeEventListener("timeupdate", c), e.removeEventListener("seeking", f), e.removeEventListener("seeked", f), e.removeEventListener("pause", y), e.removeEventListener("ended", y);
    };
  }, [e]);
  const d = M((m) => i.current ? Math.min(m, n.current) : m, []);
  return { maxWatchedTime: r, clampSeek: d };
}
const Ee = /* @__PURE__ */ new Set([
  "captions",
  "subtitles"
]), Ot = 2, Ut = 3;
function Vt(e, t) {
  const { trackSrc: a, needsCrossOrigin: n } = Ie(t), [o, i] = x(!1), [r, u] = x(!1), [d, m] = x(!1), y = r || t !== void 0 && !d;
  return _(() => {
    m(!1), u(!1);
  }, [a]), _(() => {
    if (!e) return;
    const c = e.textTracks, f = e.querySelector(
      'track[kind="captions"]'
    ), h = () => {
      let k = !1;
      for (let L = 0; L < c.length; L++) {
        const T = c[L];
        Ee.has(T.kind) && (T.mode = o ? "showing" : "hidden", T.cues && T.cues.length > 0 && (k = !0));
      }
      if (u(k), f) {
        if (f.readyState === Ut)
          m(!0);
        else if (f.readyState === Ot) {
          const L = f.track?.cues;
          m(!L || L.length === 0);
        }
      }
    };
    h();
    const b = [];
    if (f) {
      const k = () => h(), L = () => m(!0);
      f.addEventListener("load", k), f.addEventListener("error", L), b.push(() => {
        f.removeEventListener("load", k), f.removeEventListener("error", L);
      });
    }
    for (let k = 0; k < c.length; k++) {
      const L = c[k];
      if (!Ee.has(L.kind) || typeof L.addEventListener != "function") continue;
      const T = () => h();
      L.addEventListener("cuechange", T), b.push(() => L.removeEventListener("cuechange", T));
    }
    const E = typeof c.addEventListener == "function", A = () => h();
    return E && (c.addEventListener("addtrack", A), c.addEventListener("removetrack", A)), e.addEventListener("loadedmetadata", h), () => {
      b.forEach((k) => k()), E && (c.removeEventListener("addtrack", A), c.removeEventListener("removetrack", A)), e.removeEventListener("loadedmetadata", h);
    };
  }, [e, t, o, a]), J(
    () => ({
      trackSrc: a,
      needsCrossOrigin: n,
      available: y,
      showing: o,
      toggle: () => i((c) => !c)
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
  const n = O(t);
  n.current = t;
  const o = O(!1), i = !!t;
  _(() => {
    o.current = !1;
  }, [a]), _(() => {
    if (!e || !i) return;
    const r = () => {
      o.current || !e.duration || e.currentTime >= $t(e.duration) && (o.current = !0, n.current?.(e));
    };
    return e.addEventListener("timeupdate", r), e.addEventListener("ended", r), () => {
      e.removeEventListener("timeupdate", r), e.removeEventListener("ended", r);
    };
  }, [e, i]);
}
function zt({
  video: e,
  onMilestone: t,
  resetKey: a
}) {
  const n = O(t);
  n.current = t;
  const o = O(/* @__PURE__ */ new Set()), i = !!t;
  _(() => {
    o.current.clear();
  }, [a]), _(() => {
    if (!e || !i) return;
    const r = () => {
      if (!e.duration) return;
      const u = Math.round(e.currentTime / e.duration * 100);
      for (const d of yt)
        o.current.has(d) || u >= d && (o.current.add(d), n.current?.(d, e));
    };
    return e.addEventListener("timeupdate", r), () => {
      e.removeEventListener("timeupdate", r);
    };
  }, [e, i]);
}
function Bt(e) {
  const t = O(null), [a, n] = x(
    null
  ), o = O(0), i = M((s) => {
    t.current = s, n(s);
  }, []), [r, u] = x(!1), [d, m] = x(!1), [g, y] = x(0), [c, f] = x(0), [h, b] = x(1), [E, A] = x(!1), [k, L] = x(
    oe
  );
  _(() => {
    o.current = 0, t.current && (t.current.playbackRate = oe), u(!1), m(!1), y(0), f(0), L(oe);
  }, [e]), _(() => {
    const s = a;
    if (!s) return;
    const P = () => m(!0), D = () => m(!1), B = () => m(!1), j = () => {
      b(s.volume), A(s.muted);
    }, K = () => f(s.duration || 0), G = () => {
      xt(s.playbackRate) && L(s.playbackRate);
    }, F = () => {
      const V = performance.now();
      V - o.current >= bt && (o.current = V, y(s.currentTime));
    };
    return s.addEventListener("play", P), s.addEventListener("pause", D), s.addEventListener("ended", B), s.addEventListener("volumechange", j), s.addEventListener("loadedmetadata", K), s.addEventListener("ratechange", G), s.addEventListener("timeupdate", F), s.readyState >= 1 && s.duration && f(s.duration), () => {
      s.removeEventListener("play", P), s.removeEventListener("pause", D), s.removeEventListener("ended", B), s.removeEventListener("volumechange", j), s.removeEventListener("loadedmetadata", K), s.removeEventListener("ratechange", G), s.removeEventListener("timeupdate", F);
    };
  }, [a]);
  const T = M(() => {
    const s = t.current;
    s && (s.paused || s.ended ? s.play().catch(() => {
    }) : s.pause());
  }, []), v = M(() => {
    const s = t.current;
    s && (s.muted = !s.muted);
  }, []), S = M((s) => {
    const P = t.current;
    if (!P) return;
    const D = Math.max(0, Math.min(1, s));
    P.volume = D, P.muted = D === 0;
  }, []), I = M((s) => {
    const P = t.current;
    P && (P.playbackRate = s);
  }, []), C = M((s) => {
    const P = t.current;
    if (!P) return;
    const D = Math.max(0, Math.min(s, P.duration || s));
    P.currentTime = D, y(D);
  }, []);
  return {
    videoRef: t,
    videoElement: a,
    setVideoNode: i,
    videoLoaded: r,
    isPlaying: d,
    currentTime: g,
    duration: c,
    volume: h,
    isMuted: E,
    playbackRate: k,
    setVideoLoaded: u,
    togglePlay: T,
    toggleMute: v,
    setVolume: S,
    setPlaybackRate: I,
    seekTo: C
  };
}
function Ht({
  video: e,
  onTrackAction: t
}) {
  const a = O(t);
  a.current = t;
  const n = !!t;
  _(() => {
    if (!e || !n) return;
    let o = null;
    const i = () => {
      o && (clearInterval(o), o = null);
    }, r = () => {
      a.current?.(), i(), o = setInterval(() => {
        a.current?.();
      }, Lt);
    }, u = () => {
      a.current?.(), i();
    }, d = () => i();
    return e.addEventListener("play", r), e.addEventListener("pause", u), e.addEventListener("ended", d), () => {
      i(), e.removeEventListener("play", r), e.removeEventListener("pause", u), e.removeEventListener("ended", d);
    };
  }, [e, n]);
}
function Wt({
  src: e,
  poster: t,
  ariaLabel: a,
  silent: n = !1,
  persistControls: o = !1,
  content: i,
  defaultLanguage: r,
  autoPlay: u = !1,
  autoFocus: d = !1,
  download: m,
  restrictForwardSeek: g = !1,
  onTrackAction: y,
  onMilestone: c,
  onComplete: f,
  ...h
}) {
  const { t: b } = W(), E = O(null), A = J(() => ae(e), [e]), [k, L] = x(
    () => Z(A, r)
  ), T = A.some((w) => w.locale === k) ? k : Z(A, r), v = ee(e, T) ?? "", S = J(
    () => ae(i?.captions),
    [i?.captions]
  ), [I, C] = x(
    () => Z(S, r)
  ), s = S.some(
    (w) => w.locale === I
  ) ? I : Z(S, r), P = ee(i?.captions, s), D = J(
    () => ae(i?.descriptions, i?.describedSrc),
    [i?.descriptions, i?.describedSrc]
  ), [B, j] = x(
    () => Z(D, r)
  ), K = D.some(
    (w) => w.locale === B
  ) ? B : Z(D, r), G = ee(
    i?.descriptions,
    K
  ), F = ee(
    i?.describedSrc,
    K
  ), [V, Y] = x(!1), X = V && F ? F : v, p = Bt(X), N = Vt(p.videoElement, P), z = It(p.videoElement, {
    enabled: V,
    describedSrc: F,
    descriptions: G
  }), U = M(() => {
    const w = p.videoRef.current;
    if (!w) return;
    const He = w.currentTime, We = !w.paused, be = () => {
      w.currentTime = He, We && w.play().catch(() => {
      }), w.removeEventListener("loadedmetadata", be);
    };
    w.addEventListener("loadedmetadata", be);
  }, [p.videoRef]), Ne = M(
    (w) => {
      U(), L(w);
    },
    [U]
  ), _e = M(() => {
    F && U(), Y((w) => !w);
  }, [F, U]), Fe = M(
    (w) => {
      C(w), N.showing || N.toggle();
    },
    [N]
  ), Oe = M(() => {
    N.showing && N.toggle();
  }, [N]), Ue = M(
    (w) => {
      F && U(), j(w), Y(!0);
    },
    [F, U]
  ), Ve = M(() => {
    F && U(), Y(!1);
  }, [F, U]);
  Ht({ video: p.videoElement, onTrackAction: y }), zt({
    video: p.videoElement,
    onMilestone: c,
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
  }), pe = M(
    (w) => p.seekTo(me(w)),
    [p, me]
  ), { isFullscreen: Ke, toggleFullscreen: he } = Nt({
    targetRef: E
  }), ge = M(() => {
  }, []), ve = !!(V && F);
  _(() => {
    const w = p.videoRef.current;
    n && w && (w.muted = !ve);
  }, [n, ve, p.videoElement, p.videoRef]);
  const ze = _t({
    videoRef: p.videoRef,
    seek: pe,
    togglePlay: p.togglePlay,
    toggleMute: n ? ge : p.toggleMute,
    toggleFullscreen: he,
    setVolume: n ? ge : p.setVolume
  });
  _(() => {
    d && E.current?.focus({ preventScroll: !0 });
  }, [d]);
  const Be = (w) => w.preventDefault();
  return /* @__PURE__ */ R(
    "div",
    {
      ref: E,
      className: H(
        "group relative h-full w-full overflow-hidden rounded-[inherit]",
        "[&:fullscreen]:h-screen [&:fullscreen]:w-screen [&:fullscreen]:rounded-none [&:fullscreen]:bg-[#000]",
        de()
      ),
      role: "region",
      "aria-label": a ?? b("videoPlayer.regionLabel"),
      tabIndex: 0,
      onKeyDown: ze,
      "data-video-captions": n ? "no-audio" : N.available ? "available" : "missing",
      ...h,
      children: [
        /* @__PURE__ */ R(
          "video",
          {
            ref: p.setVideoNode,
            autoPlay: u,
            playsInline: !0,
            disablePictureInPicture: !0,
            disableRemotePlayback: !0,
            draggable: !1,
            onContextMenu: Be,
            onClick: p.togglePlay,
            src: X,
            poster: t,
            crossOrigin: N.needsCrossOrigin || z.needsCrossOrigin ? "anonymous" : void 0,
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
              N.trackSrc && /* @__PURE__ */ l(
                "track",
                {
                  kind: "captions",
                  src: N.trackSrc,
                  label: b("videoPlayer.captions"),
                  default: !1
                }
              ),
              z.trackSrc && /* @__PURE__ */ l(
                "track",
                {
                  kind: "descriptions",
                  src: z.trackSrc,
                  label: b("videoPlayer.audioDescription"),
                  default: !1
                }
              )
            ]
          }
        ),
        !p.isPlaying && /* @__PURE__ */ l(
          "div",
          {
            "aria-hidden": !0,
            "data-video-play-overlay": !0,
            className: "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center",
            children: /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: p.togglePlay,
                className: "dark pointer-events-auto flex size-14 items-center justify-center rounded-full bg-[#000000b3] pl-0.5 text-f1-foreground shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform duration-150 hover:scale-105 motion-reduce:transition-none [&_svg]:size-7",
                children: /* @__PURE__ */ l(lt, { icon: Ce, size: "lg" })
              }
            )
          }
        ),
        N.showing && z.activeCue && /* @__PURE__ */ l(
          "div",
          {
            "aria-hidden": !0,
            className: "dark pointer-events-none absolute inset-x-0 top-0 z-[2] flex justify-center p-3",
            children: /* @__PURE__ */ R("p", { className: "max-w-[90%] rounded-md bg-[#000000b3] px-2 py-1 text-center text-base italic text-f1-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]", children: [
              /* @__PURE__ */ R("span", { className: "pr-1 font-medium not-italic opacity-70", children: [
                "[",
                b("videoPlayer.audioDescription"),
                "]"
              ] }),
              z.activeCue
            ] })
          }
        ),
        /* @__PURE__ */ l("span", { className: "sr-only", "aria-live": "polite", children: p.isPlaying ? b("videoPlayer.playing") : b("videoPlayer.paused") }),
        p.videoLoaded && /* @__PURE__ */ l(
          At,
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
            captionsAvailable: N.available,
            captionsOn: N.showing,
            audioDescriptionAvailable: z.available,
            audioDescriptionOn: V,
            silent: n,
            persist: o,
            audioLanguages: A,
            audioLanguage: T,
            onAudioLanguageChange: Ne,
            captionLanguages: S,
            captionLanguage: s,
            onCaptionLanguageChange: Fe,
            onCaptionsOff: Oe,
            audioDescriptionLanguages: D,
            audioDescriptionLanguage: K,
            onAudioDescriptionLanguageChange: Ue,
            onAudioDescriptionOff: Ve,
            onTogglePlay: p.togglePlay,
            onToggleMute: p.toggleMute,
            onVolumeChange: p.setVolume,
            onPlaybackRateChange: p.setPlaybackRate,
            onToggleFullscreen: () => {
              he();
            },
            onToggleCaptions: N.toggle,
            onToggleAudioDescription: _e,
            onSeek: pe,
            download: m
          }
        )
      ]
    }
  );
}
const Yt = dt(
  ut("F0VideoPlayer", Wt)
);
export {
  Yt as F,
  ae as c,
  Z as d,
  Le as l,
  ee as r
};
