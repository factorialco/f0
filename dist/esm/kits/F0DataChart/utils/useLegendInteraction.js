import { useEffect as e, useRef as t } from "react";
//#region src/kits/F0DataChart/utils/useLegendInteraction.ts
function n(n, r) {
	let i = t(null), a = t(r);
	a.current = r, e(() => {
		let e = n.current;
		if (!e || typeof e.on != "function") return;
		function t(t) {
			let n = t.name, r = t.selected, o = Object.keys(r), s = i.current ?? Object.fromEntries(o.map((e) => [e, !0])), c = Object.values(s).filter(Boolean).length, l = c === o.length, u = s[n];
			if (l && u) {
				let t = {};
				for (let e of o) t[e] = e === n;
				i.current = t, a.current?.(t), e.dispatchAction({
					type: "legendSelect",
					name: n
				});
				for (let t of o) t !== n && e.dispatchAction({
					type: "legendUnSelect",
					name: t
				});
				return;
			}
			if (u && c === 1) {
				let t = {};
				for (let n of o) t[n] = !0, e.dispatchAction({
					type: "legendSelect",
					name: n
				});
				i.current = t, a.current?.(t);
				return;
			}
			i.current = { ...r }, a.current?.({ ...r });
		}
		return e.on("legendselectchanged", t), () => {
			e.off("legendselectchanged", t);
		};
	}, [n]);
}
//#endregion
export { n as useLegendInteraction };
