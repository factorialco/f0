import { Extension as e } from "@tiptap/core";
//#region src/components/RichText/internal/Extensions/FontSize/index.tsx
var t = [
	12,
	14,
	16,
	18,
	20,
	24,
	29
], n = "f0-fs-", r = (e) => {
	let r = Number.parseInt(e, 10);
	return t.includes(r) ? `${n}${r}` : null;
}, i = e.create({
	name: "fontSize",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontSize: {
				default: null,
				parseHTML: (e) => {
					let t = Array.from(e.classList).find((e) => e.startsWith(n));
					return t ? `${t.slice(6)}px` : e.style.fontSize || null;
				},
				renderHTML: (e) => {
					let t = e.fontSize;
					if (typeof t != "string" || t === "") return {};
					let n = r(t), i = { style: `font-size: ${t}` };
					return n ? {
						...i,
						class: n
					} : i;
				}
			} }
		}];
	},
	addCommands() {
		return {
			setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
			unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
		};
	}
});
//#endregion
export { t as FONT_SIZE_SCALE, i as FontSizeExtension };
