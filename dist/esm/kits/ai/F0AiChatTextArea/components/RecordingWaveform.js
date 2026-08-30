import { cn as e } from "../../../../lib/utils.js";
import { useEffect as t, useRef as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/RecordingWaveform.tsx
var a = 2, o = 70, s = .08, c = 6, l = .6, u = () => {
	if (typeof window > "u") return;
	let e = window;
	return e.AudioContext ?? e.webkitAudioContext;
}, d = ({ stream: d, className: f, anchor: p = "right" }) => {
	let m = n(null), [h, g] = r(0), [_, v] = r([]);
	t(() => {
		let e = m.current;
		if (!e) return;
		let t = () => {
			let t = e.clientWidth;
			g(Math.max(1, Math.floor((t + a) / 4)));
		};
		if (t(), typeof ResizeObserver > "u") return;
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []), t(() => {
		let e = u();
		if (!d || !e || h === 0) {
			v([]);
			return;
		}
		let t = new e(), n = t.createMediaStreamSource(d), r = t.createAnalyser();
		r.fftSize = 1024, n.connect(r);
		let i = new Uint8Array(r.fftSize), a = setInterval(() => {
			r.getByteTimeDomainData(i);
			let e = 0;
			for (let t = 0; t < i.length; t++) {
				let n = (i[t] - 128) / 128;
				e += n * n;
			}
			let t = Math.sqrt(e / i.length), n = Math.min(1, (t * c) ** +l);
			v((e) => {
				let t = e.length >= h ? e.slice(e.length - h + 1) : e.slice();
				return t.push(n), t;
			});
		}, o);
		return () => {
			clearInterval(a), n.disconnect(), r.disconnect(), t.close(), v([]);
		};
	}, [d, h]);
	let y = p === "left" ? [..._].reverse() : _;
	return /* @__PURE__ */ i("div", {
		ref: m,
		className: e("flex h-6 items-center overflow-hidden gap-0.5", p === "left" ? "justify-start" : "justify-end", f),
		"aria-hidden": "true",
		children: y.map((e, t) => /* @__PURE__ */ i("span", {
			className: "shrink-0 rounded-full bg-f1-foreground-secondary w-0.5",
			style: { height: `${(s + e * .92) * 100}%` }
		}, t))
	});
};
//#endregion
export { d as RecordingWaveform };
