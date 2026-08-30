import { Extension as e } from "@tiptap/core";
import { Plugin as t, PluginKey as n } from "@tiptap/pm/state";
//#region src/components/RichText/internal/Extensions/PasteSanitizer/index.tsx
var r = /\xA0|&nbsp;|&#0*160;|&#[xX]0*[aA]0;/g, i = (e) => e.replace(r, " "), a = e.create({
	name: "pasteSanitizer",
	addProseMirrorPlugins() {
		return [new t({
			key: new n("pasteSanitizer"),
			props: {
				transformPastedHTML: i,
				transformPastedText: i
			}
		})];
	}
});
//#endregion
export { a as PasteSanitizer, i as sanitizePasted };
