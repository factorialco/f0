import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/kits/ai/F0AiChatTextArea/useAudioRecorder.ts
var i = 250, a = 12e4, o = () => typeof navigator < "u" && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder < "u";
function s({ onTranscribe: s, onPartial: c, onFinal: l, onError: u, maxDurationMs: d = a, onAudio: f }) {
	let [p, m] = r("idle"), [h, g] = r(0), [_] = r(o), [v, y] = r(null), b = n(null), x = n(null), S = n([]), C = n(null), w = n(!1), T = n(null), E = n(null), D = n(0), O = n({
		onTranscribe: s,
		onPartial: c,
		onFinal: l,
		onError: u,
		onAudio: f
	});
	O.current = {
		onTranscribe: s,
		onPartial: c,
		onFinal: l,
		onError: u,
		onAudio: f
	};
	let k = e(() => {
		x.current?.getTracks().forEach((e) => e.stop()), x.current = null, b.current = null, y(null), T.current &&= (clearInterval(T.current), null), E.current &&= (clearTimeout(E.current), null);
	}, []), A = e(async () => {
		let { onTranscribe: e, onPartial: t, onFinal: n, onError: r, onAudio: i } = O.current, a = S.current;
		if (S.current = [], a.length === 0 || !e && !i) {
			m("idle"), g(0);
			return;
		}
		let o = new Blob(a, { type: a[0]?.type || "audio/webm" });
		if (i) {
			let e = Date.now() - D.current;
			m("idle"), g(0), i(o, e);
			return;
		}
		if (!e) {
			m("idle"), g(0);
			return;
		}
		let s = new AbortController();
		C.current = s, m("transcribing");
		try {
			let r = await e(o, {
				onPartial: t,
				signal: s.signal
			});
			s.signal.aborted || n(r);
		} catch {
			s.signal.aborted || r("transcription-failed");
		} finally {
			C.current = null, m("idle"), g(0);
		}
	}, []), j = e(() => {
		let e = b.current;
		e && e.state !== "inactive" && e.stop();
	}, []), M = e(async () => {
		if (p !== "idle" || !s && !f || !_) return;
		w.current = !1, S.current = [];
		let e;
		try {
			e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
		} catch (e) {
			u(e instanceof DOMException && e.name === "NotAllowedError" ? "permission-denied" : "device-error");
			return;
		}
		x.current = e, y(e);
		let t = new MediaRecorder(e);
		b.current = t, t.ondataavailable = (e) => {
			e.data.size > 0 && S.current.push(e.data);
		}, t.onstop = () => {
			if (k(), w.current) {
				S.current = [], m("idle"), g(0);
				return;
			}
			A();
		}, t.start(i), D.current = Date.now(), m("recording"), g(0), T.current = setInterval(() => {
			g(Date.now() - D.current);
		}, 200), E.current = setTimeout(j, d);
	}, [
		p,
		s,
		f,
		_,
		u,
		k,
		A,
		j,
		d
	]), N = e(() => {
		p === "recording" ? (w.current = !0, j()) : p === "transcribing" && (C.current?.abort(), C.current = null, m("idle"), g(0));
	}, [p, j]);
	return t(() => () => {
		w.current = !0, C.current?.abort();
		let e = b.current;
		e && e.state !== "inactive" && e.stop(), k();
	}, [k]), {
		status: p,
		durationMs: h,
		isSupported: _,
		stream: v,
		start: M,
		stop: j,
		cancel: N
	};
}
//#endregion
export { s as useAudioRecorder };
