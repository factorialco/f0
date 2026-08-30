//#region src/components/F0PdfViewer/scales.ts
var e = [
	"0.5",
	"0.75",
	"1",
	"1.25",
	"1.5",
	"2",
	"3",
	"4"
], t = e.map(Number), n = (e) => t.find((t) => t > e), r = (e) => [...t].reverse().find((t) => t < e);
//#endregion
export { e as fixedScales, r as nextScaleDown, n as nextScaleUp };
