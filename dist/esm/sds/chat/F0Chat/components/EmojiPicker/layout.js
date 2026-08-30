//#region src/sds/chat/F0Chat/components/EmojiPicker/layout.ts
var e = (e, t) => {
	let n = [], r = [], i = [], a = [], o = [];
	return e.forEach((e, s) => {
		o.push(n.length);
		let c = 0;
		for (let r = 0; r < e.emojis.length; r += t) {
			let o = e.emojis.slice(r, r + t), l = i.length, u = n.length;
			n.push({
				sectionIndex: s,
				emojis: o,
				startIndex: l
			}), c += 1;
			for (let e of o) i.push(e), a.push(u);
		}
		r.push(c);
	}), {
		rows: n,
		groupCounts: r,
		flat: i,
		rowByIndex: a,
		firstRowBySection: o
	};
}, t = (e, t, n) => {
	let r = e.flat.length - 1;
	if (r < 0) return 0;
	switch (n) {
		case "Home": return 0;
		case "End": return r;
		case "ArrowLeft": return Math.max(0, t - 1);
		case "ArrowRight": return Math.min(r, t + 1);
		case "ArrowUp":
		case "ArrowDown": {
			let r = e.rowByIndex[t] ?? 0, i = e.rows[r];
			if (!i) return t;
			let a = t - i.startIndex, o = e.rows[r + (n === "ArrowDown" ? 1 : -1)];
			return o ? o.startIndex + Math.min(a, o.emojis.length - 1) : t;
		}
	}
};
//#endregion
export { e as buildEmojiLayout, t as moveActiveIndex };
