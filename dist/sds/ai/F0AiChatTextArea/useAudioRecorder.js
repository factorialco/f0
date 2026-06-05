import { useState as M, useRef as t, useCallback as l, useEffect as O } from "react";
const P = 250, z = 12e4, B = () => typeof navigator < "u" && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder < "u";
function j({
  onTranscribe: d,
  onPartial: D,
  onFinal: S,
  onError: f,
  maxDurationMs: A = z
}) {
  const [n, c] = M("idle"), [U, o] = M(0), [w] = M(B), [_, T] = M(null), p = t(null), y = t(null), s = t([]), i = t(null), b = t(!1), g = t(null), m = t(null), E = t(0), k = t({ onTranscribe: d, onPartial: D, onFinal: S, onError: f });
  k.current = { onTranscribe: d, onPartial: D, onFinal: S, onError: f };
  const R = l(() => {
    y.current?.getTracks().forEach((e) => e.stop()), y.current = null, p.current = null, T(null), g.current && (clearInterval(g.current), g.current = null), m.current && (clearTimeout(m.current), m.current = null);
  }, []), I = l(async () => {
    const { onTranscribe: e, onPartial: a, onFinal: r, onError: F } = k.current, h = s.current;
    if (s.current = [], h.length === 0 || !e) {
      c("idle"), o(0);
      return;
    }
    const L = new Blob(h, { type: h[0]?.type || "audio/webm" }), v = new AbortController();
    i.current = v, c("transcribing");
    try {
      const N = await e(L, {
        onPartial: a,
        signal: v.signal
      });
      v.signal.aborted || r(N);
    } catch {
      v.signal.aborted || F("transcription-failed");
    } finally {
      i.current = null, c("idle"), o(0);
    }
  }, []), u = l(() => {
    const e = p.current;
    e && e.state !== "inactive" && e.stop();
  }, []), x = l(async () => {
    if (n !== "idle" || !d || !w) return;
    b.current = !1, s.current = [];
    let e;
    try {
      e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
    } catch (r) {
      f(
        r instanceof DOMException && r.name === "NotAllowedError" ? "permission-denied" : "device-error"
      );
      return;
    }
    y.current = e, T(e);
    const a = new MediaRecorder(e);
    p.current = a, a.ondataavailable = (r) => {
      r.data.size > 0 && s.current.push(r.data);
    }, a.onstop = () => {
      if (R(), b.current) {
        s.current = [], c("idle"), o(0);
        return;
      }
      I();
    }, a.start(P), E.current = Date.now(), c("recording"), o(0), g.current = setInterval(() => {
      o(Date.now() - E.current);
    }, 200), m.current = setTimeout(u, A);
  }, [
    n,
    d,
    w,
    f,
    R,
    I,
    u,
    A
  ]), C = l(() => {
    n === "recording" ? (b.current = !0, u()) : n === "transcribing" && (i.current?.abort(), i.current = null, c("idle"), o(0));
  }, [n, u]);
  return O(
    () => () => {
      b.current = !0, i.current?.abort();
      const e = p.current;
      e && e.state !== "inactive" && e.stop(), R();
    },
    [R]
  ), { status: n, durationMs: U, isSupported: w, stream: _, start: x, stop: u, cancel: C };
}
export {
  j as useAudioRecorder
};
