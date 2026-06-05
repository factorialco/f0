import { jsx as o, jsxs as v } from "react/jsx-runtime";
import tt from "../../../node_modules/.pnpm/canvas-confetti@1.9.3/node_modules/canvas-confetti/dist/confetti.module.js";
import { useRef as n, useState as c, useCallback as W, useEffect as q } from "react";
import { createPortal as nt } from "react-dom";
import rt from "../../../icons/app/Cross.js";
import "../../../icons/app/Menu.js";
import { useReducedMotion as ot } from "../../../lib/a11y.js";
import { cn as Z } from "../../../lib/utils.js";
import { PongBall as st } from "./components/PongBall.js";
import { useI18n as ct } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as at } from "../../../components/F0Button/F0Button.js";
const y = 40, a = 93, Le = a * 0.5, z = 32, _ = 24, d = 8, it = 48, Se = 10, w = 7, J = 18, Te = 0.25, lt = 0.15, ke = 800, Xe = Math.PI / 3, f = y / 2, ut = 0.12, dt = 8, Be = 5, ft = 0.08;
function b(p, i, E) {
  return Math.max(i, Math.min(E, p));
}
function pt() {
  const p = (Math.random() * 50 + 65) * Math.PI / 180, i = Math.random() > 0.5 ? 1 : -1, E = Math.random() > 0.5 ? 1 : -1;
  return {
    vx: Math.cos(p) * w * i,
    vy: Math.sin(p) * w * E
  };
}
const Nt = ({ onClose: p }) => {
  const i = ct(), E = ot(), Q = n(null), ue = n(null), ee = n(null), H = n(null), [O, Ce] = c(null), $ = n(/* @__PURE__ */ new Set()), D = n({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: w
  }), u = n(0), h = n(0), R = n(0), te = n({ player: 0, ai: 0 }), A = n("countdown"), Fe = n(0), j = n(0), M = n([]), L = n(0), ne = n(0), re = n({ width: 0, height: 0 }), N = n(0), oe = n(0), S = n(a), T = n(0), I = n(0), de = n(0), P = n(0), fe = n(null), [pe, We] = c({ x: 0, y: 0 }), [ze, He] = c(0), [Oe, $e] = c(0), [G, he] = c({ player: 0, ai: 0 }), [me, ge] = c(a), [k, Y] = c("countdown"), [je, ye] = c(3), [xe, Ge] = c([]), [V, Ye] = c(0), [Ve, Ke] = c(0), [ve, Ue] = c(null), [be, we] = c(null), X = W(() => {
    const { width: t, height: r } = re.current, s = w + T.current;
    D.current = {
      x: t / 2,
      y: r / 2,
      vx: 0,
      vy: 0,
      speed: s
    }, M.current = [], j.current = 0;
  }, []), Ee = W(() => {
    const t = w + T.current, { vx: r, vy: s } = pt(), m = t / w;
    D.current.vx = r * m, D.current.vy = s * m, D.current.speed = t, A.current = "playing", Y("playing"), fe.current = null, we(null);
  }, []), K = W(() => {
    X(), A.current = "countdown", Y("countdown"), ye(3);
    let t = 3;
    const r = setInterval(() => {
      t--, t <= 0 ? (clearInterval(r), Ee()) : ye(t);
    }, 600);
    return () => clearInterval(r);
  }, [X, Ee]), Re = W(() => {
    E || !H.current || H.current({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.5, y: 0.7 },
      colors: ["#9D76F3", "#3FC495", "#E61D46", "#F6AF3D"],
      disableForReducedMotion: !0
    });
  }, [E]), se = W(
    (t) => {
      const r = { ...te.current };
      if (t === "player" ? r.player++ : r.ai++, te.current = r, he(r), N.current = 8, fe.current = t, we(t), T.current = Math.min(
        J - w,
        T.current + lt
      ), t === "player" && Re(), r.player >= 3 || r.ai >= 3) {
        A.current = "gameover", Y("gameover"), X(), Ue(
          r.player >= 3 ? i.ai.pong.youWin : i.ai.pong.youLose
        ), setTimeout(() => p(), 2e3);
        return;
      }
      A.current = "scored", Y("scored"), X(), Fe.current = ke, setTimeout(() => {
        A.current === "scored" && K();
      }, ke);
    },
    [X, K, Re, i]
  );
  if (q(() => {
    if (Q.current) {
      const t = Q.current.closest("[aria-hidden]");
      t && Ce(t);
    }
  }, []), q(() => (ee.current && (H.current = tt.create(ee.current, {
    resize: !0,
    useWorker: !1
  })), () => {
    H.current?.reset();
  }), [O]), q(() => {
    const t = (s) => {
      s.key === "Escape" && p(), (s.key === "ArrowLeft" || s.key === "ArrowRight") && (s.preventDefault(), $.current.add(s.key));
    }, r = (s) => {
      $.current.delete(s.key);
    };
    return window.addEventListener("keydown", t), window.addEventListener("keyup", r), () => {
      window.removeEventListener("keydown", t), window.removeEventListener("keyup", r);
    };
  }, [p]), q(() => {
    const t = ue.current;
    if (!t) return;
    const r = t.getBoundingClientRect();
    re.current = { width: r.width, height: r.height };
    const s = r.width / 2;
    u.current = s, h.current = s, R.current = s, te.current = { player: 0, ai: 0 }, he({ player: 0, ai: 0 }), oe.current = 0, S.current = a, ge(a), T.current = 0, I.current = 0;
    const m = K(), Ae = (B) => {
      const U = t.getBoundingClientRect(), l = S.current;
      u.current = b(
        B.clientX - U.left,
        l / 2 + d,
        U.width - l / 2 - d
      );
    };
    t.addEventListener("pointermove", Ae);
    const Me = (B) => {
      L.current || (L.current = B);
      const U = (B - L.current) / 16.667, l = Math.min(U, 3);
      L.current = B;
      const { width: C, height: Ne } = re.current, e = D.current, F = S.current;
      if ($.current.has("ArrowLeft") && (u.current = b(
        u.current - Se * l,
        F / 2 + d,
        C - F / 2 - d
      )), $.current.has("ArrowRight") && (u.current = b(
        u.current + Se * l,
        F / 2 + d,
        C - F / 2 - d
      )), N.current > 0 && (N.current *= 0.85, N.current < 0.5 && (N.current = 0)), A.current === "playing") {
        M.current.push({ x: e.x, y: e.y }), M.current.length > Be && (M.current = M.current.slice(-Be)), e.x += e.vx * l, e.y += e.vy * l, de.current += P.current * l, P.current *= 0.96;
        const Ie = d + y / 2, Pe = C - d - y / 2;
        e.x <= Ie && (e.x = Ie, e.vx = Math.abs(e.vx), P.current *= -0.5), e.x >= Pe && (e.x = Pe, e.vx = -Math.abs(e.vx), P.current *= -0.5);
        const ce = Ne - _ - z, ae = F / 2;
        if (e.y + f >= ce && e.y - f <= ce + z && e.vy > 0 && e.x >= u.current - ae - f && e.x <= u.current + ae + f) {
          e.y = ce - f;
          const g = b((e.x - u.current) / ae, -1, 1);
          e.speed = Math.min(e.speed + Te, J);
          const x = g * Xe;
          e.vx = Math.sin(x) * e.speed, e.vy = -Math.cos(x) * e.speed, P.current = g * 1.2, j.current++, oe.current++;
          const le = Le / a + (1 - Le / a) * Math.exp(-oe.current * 0.03);
          S.current = a * le;
        }
        const _e = _ + z, ie = a / 2;
        if (e.y - f <= _e && e.y + f >= _ && e.vy < 0 && e.x >= h.current - ie - f && e.x <= h.current + ie + f) {
          e.y = _e + f;
          const g = b((e.x - h.current) / ie, -1, 1);
          e.speed = Math.min(e.speed + Te, J);
          const x = g * Xe;
          e.vx = Math.sin(x) * e.speed, e.vy = Math.cos(x) * e.speed, P.current = g * 1.2, j.current++;
        }
        if (e.y < -y * 2 ? se("player") : e.y > Ne + y * 2 && se("ai"), e.vy < 0) {
          const g = Math.max(1, (e.y - _) / -e.vy), x = e.x + e.vx * g, le = dt * (1 + e.speed / J), Qe = (Math.random() - 0.5) * le, et = x + Qe - R.current;
          R.current += et * ut * l;
        } else {
          const g = Math.sin(Date.now() * 2e-3) * 15;
          R.current += (C / 2 + g - R.current) * 0.025 * l;
        }
        const Je = (R.current - h.current) * 0.1 * l;
        I.current += Je, I.current *= 0.88;
        const De = 6 + j.current * 0.12;
        I.current = b(I.current, -De, De), h.current += I.current * l, h.current = b(
          h.current,
          a / 2 + d,
          C - a / 2 - d
        );
      }
      We({ x: e.x, y: e.y }), He(u.current), $e(h.current), Ge([...M.current]), Ye(N.current), ge(S.current), Ke(de.current), ne.current = requestAnimationFrame(Me);
    };
    return L.current = 0, ne.current = requestAnimationFrame(Me), () => {
      cancelAnimationFrame(ne.current), t.removeEventListener("pointermove", Ae), m?.();
    };
  }, [O, se, K]), !O)
    return /* @__PURE__ */ o("div", { ref: Q });
  const qe = V > 0.5 ? (Math.random() - 0.5) * V : 0, Ze = V > 0.5 ? (Math.random() - 0.5) * V : 0;
  return nt(
    /* @__PURE__ */ v("div", { className: "absolute inset-0 z-50 flex flex-col bg-f1-background", children: [
      /* @__PURE__ */ o("style", { children: `
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes pong-ai-glow {
          from { --gradient-angle: 0deg; }
          to { --gradient-angle: 360deg; }
        }
      ` }),
      /* @__PURE__ */ v("div", { className: "flex flex-1 flex-col bg-f1-special-page", children: [
        /* @__PURE__ */ v("div", { className: "flex items-center justify-between px-4 py-3", children: [
          /* @__PURE__ */ o("span", { className: "text-base font-medium text-f1-foreground", children: i.ai.pong.title }),
          /* @__PURE__ */ o(
            at,
            {
              icon: rt,
              label: i.actions.close,
              onClick: p,
              variant: "ghost",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ v("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ v(
            "div",
            {
              ref: ue,
              className: "absolute inset-0 cursor-none overflow-hidden",
              style: {
                touchAction: "none",
                transform: `translate(${qe}px, ${Ze}px)`
              },
              children: [
                /* @__PURE__ */ o("div", { className: "pointer-events-none absolute left-0 right-0 top-1/2 h-px translate-y-1/2 bg-f1-border" }),
                xe.map((t, r) => {
                  const s = (r + 1) / xe.length, m = y * (0.15 + s * 0.25);
                  return /* @__PURE__ */ o(
                    "div",
                    {
                      className: "pointer-events-none absolute rounded-full bg-f1-foreground-secondary/40",
                      style: {
                        width: m,
                        height: m,
                        opacity: s * ft,
                        transform: `translate(${t.x - m / 2}px, ${t.y - m / 2}px)`
                      }
                    },
                    r
                  );
                }),
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Z(
                      "absolute isolate rounded",
                      "border border-solid border-f1-border",
                      "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
                      "before:rounded-[inherit] before:bg-f1-special-page before:content-['']",
                      "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
                      "after:rounded-[inherit] after:blur-[5px] after:content-['']",
                      "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
                      "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
                      "after:scale-100 after:opacity-100"
                    ),
                    style: {
                      width: a,
                      height: z,
                      top: _,
                      transform: `translateX(${Oe - a / 2}px)`,
                      animation: "pong-ai-glow 4s linear infinite",
                      // @ts-expect-error CSS custom property
                      "--gradient-angle": "0deg"
                    }
                  }
                ),
                /* @__PURE__ */ o(
                  st,
                  {
                    size: y,
                    className: "pointer-events-none absolute z-30",
                    style: {
                      transform: `translate(${pe.x - y / 2}px, ${pe.y - y / 2}px) rotate(${Ve}rad)`,
                      opacity: k === "countdown" ? 0 : 1,
                      transition: "opacity 0.3s ease-in"
                    }
                  }
                ),
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: "absolute rounded border-2 border-solid border-f1-border",
                    style: {
                      width: me,
                      height: z,
                      bottom: _,
                      transform: `translateX(${ze - me / 2}px)`,
                      transition: "width 0.3s ease-out"
                    },
                    children: /* @__PURE__ */ o("div", { className: "h-full w-full rounded bg-f1-special-page" })
                  }
                ),
                /* @__PURE__ */ o("div", { className: "pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-f1-border bg-f1-special-page", children: /* @__PURE__ */ o(
                  "span",
                  {
                    className: "text-3xl font-semibold text-f1-foreground-secondary",
                    style: {
                      opacity: k === "countdown" ? 1 : 0,
                      transition: "opacity 0.3s ease-out"
                    },
                    children: k === "countdown" ? je : ""
                  }
                ) }),
                k === "scored" && be && /* @__PURE__ */ o(
                  "div",
                  {
                    className: Z(
                      "pointer-events-none absolute left-4 flex items-center",
                      be === "player" ? "top-1/2 mt-4" : "bottom-1/2 -mt-4"
                    ),
                    children: /* @__PURE__ */ o("span", { className: "text-2xl font-semibold text-f1-foreground-secondary/60", children: i.ai.pong.goal })
                  }
                ),
                k === "gameover" && ve && /* @__PURE__ */ o("div", { className: "pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-f1-special-page/60 backdrop-blur-sm", children: /* @__PURE__ */ o("span", { className: "text-2xl font-semibold text-f1-foreground", children: ve }) }),
                /* @__PURE__ */ o(
                  "canvas",
                  {
                    ref: ee,
                    className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ o(
            "div",
            {
              className: "pointer-events-none absolute inset-y-0 right-0 flex flex-col items-center justify-center",
              style: { width: it },
              children: /* @__PURE__ */ v("div", { className: "flex flex-col items-center gap-6", children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Z(
                      "text-2xl font-semibold",
                      G.ai > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"
                    ),
                    children: G.ai
                  }
                ),
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Z(
                      "text-2xl font-semibold",
                      G.player > 0 ? "text-f1-foreground-secondary" : "text-f1-foreground-disabled"
                    ),
                    children: G.player
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center justify-center px-4 py-3 text-sm font-medium text-f1-foreground-secondary", children: /* @__PURE__ */ v("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ o("span", { children: i.ai.pong.controls }),
          /* @__PURE__ */ o("span", { children: i.ai.pong.escToExit })
        ] }) })
      ] })
    ] }),
    O
  );
};
export {
  Nt as F0AiPong
};
