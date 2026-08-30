var e = (e, t, n, r) => n === "up" ? {
	start: Math.max(0, e - 8),
	end: Math.min(r - 1, t + 4)
} : {
	start: Math.max(0, e - 4),
	end: Math.min(r - 1, t + 8)
}, t = (e) => {
	if (!e || e.type !== "message") return [];
	let t = [];
	for (let n of e.message.attachments ?? []) n.kind === "image" && (n.blurUrl && t.push(n.blurUrl), t.push(n.thumbnailUrl ?? n.url));
	return t;
}, n = () => {
	let e = /* @__PURE__ */ new Set(), t = !1;
	return {
		warm: (n) => {
			if (!(t || typeof Image > "u")) for (let t of n) {
				if (e.has(t)) continue;
				e.add(t);
				let n = new Image();
				n.src = t, n.decode?.().catch(() => {});
			}
		},
		dispose: () => {
			t = !0, e.clear();
		}
	};
};
//#endregion
export { n as createMediaWarmer, t as rowImageUrls, e as warmupRange };
