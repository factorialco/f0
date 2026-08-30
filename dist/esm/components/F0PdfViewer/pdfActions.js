//#region src/components/F0PdfViewer/pdfActions.ts
var e = async (e) => {
	let t = await e.saveDocument();
	return new Blob([new Uint8Array(t)], { type: "application/pdf" });
}, t = async (t) => {
	if (!t) return;
	let n = URL.createObjectURL(await e(t)), r = document.createElement("iframe");
	r.style.display = "none", r.src = n, r.onload = () => {
		r.focus(), r.contentWindow?.print();
		let e = () => {
			URL.revokeObjectURL(n), r.remove();
		};
		r.contentWindow?.addEventListener("afterprint", e), setTimeout(e, 6e4);
	}, document.body.appendChild(r);
}, n = async (t, n) => {
	if (!t) return;
	let r = URL.createObjectURL(await e(t)), i = document.createElement("a");
	i.href = r, i.download = n.length > 0 ? n : "document.pdf", document.body.appendChild(i), i.click(), i.remove(), URL.revokeObjectURL(r);
}, r = async (e, t, n = !0) => {
	let r = e, i;
	try {
		let t = await fetch(e, { credentials: n ? "include" : "same-origin" });
		if (!t.ok) throw Error(`${t.status}`);
		i = URL.createObjectURL(await t.blob()), r = i;
	} catch {}
	let a = document.createElement("a");
	a.href = r, a.download = t ?? "", a.rel = "noreferrer", i || (a.target = "_blank"), document.body.appendChild(a), a.click(), a.remove(), i && URL.revokeObjectURL(i);
};
//#endregion
export { r as downloadFromUrl, n as downloadPdf, t as printPdf };
