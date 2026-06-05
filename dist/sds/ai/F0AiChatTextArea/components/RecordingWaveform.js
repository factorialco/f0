import { jsx as h } from "react/jsx-runtime";
import { useRef as C, useState as m, useEffect as w } from "react";
import { cn as R } from "../../../../lib/utils.js";
const x = 2, l = 3, b = 70, y = 0.08, E = 3, I = () => {
  if (typeof window > "u") return;
  const s = window;
  return s.AudioContext ?? s.webkitAudioContext;
}, N = ({
  stream: s,
  className: A
}) => {
  const u = C(null), [i, g] = m(0), [p, d] = m([]);
  return w(() => {
    const e = u.current;
    if (!e) return;
    const t = () => {
      const o = e.clientWidth;
      g(
        Math.max(1, Math.floor((o + l) / (x + l)))
      );
    };
    if (t(), typeof ResizeObserver > "u") return;
    const r = new ResizeObserver(t);
    return r.observe(e), () => r.disconnect();
  }, []), w(() => {
    const e = I();
    if (!s || !e || i === 0) {
      d([]);
      return;
    }
    const t = new e(), r = t.createMediaStreamSource(s), o = t.createAnalyser();
    o.fftSize = 1024, r.connect(o);
    const a = new Uint8Array(o.fftSize), v = setInterval(() => {
      o.getByteTimeDomainData(a);
      let f = 0;
      for (let n = 0; n < a.length; n++) {
        const c = (a[n] - 128) / 128;
        f += c * c;
      }
      const M = Math.sqrt(f / a.length), S = Math.min(1, M * E);
      d((n) => {
        const c = n.length >= i ? n.slice(n.length - i + 1) : n.slice();
        return c.push(S), c;
      });
    }, b);
    return () => {
      clearInterval(v), r.disconnect(), o.disconnect(), t.close(), d([]);
    };
  }, [s, i]), /* @__PURE__ */ h(
    "div",
    {
      ref: u,
      className: R(
        "flex h-6 items-center justify-end overflow-hidden",
        A
      ),
      style: { gap: `${l}px` },
      "aria-hidden": "true",
      children: p.map((e, t) => /* @__PURE__ */ h(
        "span",
        {
          className: "shrink-0 rounded-full bg-f1-foreground-secondary",
          style: {
            width: `${x}px`,
            height: `${(y + e * (1 - y)) * 100}%`
          }
        },
        t
      ))
    }
  );
};
export {
  N as RecordingWaveform
};
