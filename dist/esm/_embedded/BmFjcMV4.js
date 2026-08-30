function e(e) {
	if (!e.length) return;
	if (e.length === 1 && e[0] && !e[0].includes(" ")) return e[0];
	let t = {};
	for (let n of e) {
		if (!n) continue;
		let e = n.split(" ");
		for (let n of e) {
			let e = n.startsWith("_") ? n.slice(0, 5) : n;
			t[e] = n;
		}
	}
	let n = "";
	for (let e in t) n += t[e] + " ";
	if (n) return n.trimEnd();
}
//#endregion
export { e as default };
