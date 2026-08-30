import { r as e } from "./F0Button-BJ1vAMQc.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/components/ToolbarButton.tsx
var n = ({ label: n, icon: r, onClick: i, size: a = "md" }) => /* @__PURE__ */ t(e, {
	label: n,
	icon: r,
	onClick: i,
	hideLabel: !0,
	variant: "outline",
	size: a
}), r = async (e) => {
	let t = await e.saveDocument();
	return new Blob([new Uint8Array(t)], { type: "application/pdf" });
}, i = async (e) => {
	if (!e) return;
	let t = URL.createObjectURL(await r(e)), n = document.createElement("iframe");
	n.style.display = "none", n.src = t, n.onload = () => {
		n.focus(), n.contentWindow?.print();
		let e = () => {
			URL.revokeObjectURL(t), n.remove();
		};
		n.contentWindow?.addEventListener("afterprint", e), setTimeout(e, 6e4);
	}, document.body.appendChild(n);
}, a = async (e, t) => {
	if (!e) return;
	let n = URL.createObjectURL(await r(e)), i = document.createElement("a");
	i.href = n, i.download = t.length > 0 ? t : "document.pdf", document.body.appendChild(i), i.click(), i.remove(), URL.revokeObjectURL(n);
}, o = async (e, t, n = !0) => {
	let r = e, i;
	try {
		let t = await fetch(e, { credentials: n ? "include" : "same-origin" });
		if (!t.ok) throw Error(`${t.status}`);
		i = URL.createObjectURL(await t.blob()), r = i;
	} catch {}
	let a = document.createElement("a");
	a.href = r, a.download = t ?? "", a.rel = "noreferrer", i || (a.target = "_blank"), document.body.appendChild(a), a.click(), a.remove(), i && URL.revokeObjectURL(i);
}, s = [
	"0.5",
	"0.75",
	"1",
	"1.25",
	"1.5",
	"2",
	"3",
	"4"
], c = s.map(Number), l = (e) => c.find((t) => t > e), u = (e) => [...c].reverse().find((t) => t < e);
//#endregion
export { a, o as i, u as n, i as o, l as r, n as s, s as t };
