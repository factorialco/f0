import e from "@tiptap/extension-character-count";
import t from "@tiptap/extension-color";
import n from "@tiptap/extension-details";
import r from "@tiptap/extension-details-content";
import i from "@tiptap/extension-details-summary";
import a from "@tiptap/extension-highlight";
import o from "@tiptap/extension-link";
import s from "@tiptap/extension-placeholder";
import { TableKit as c } from "@tiptap/extension-table";
import l from "@tiptap/extension-task-list";
import u from "@tiptap/extension-text-align";
import d from "@tiptap/extension-text-style";
import f from "@tiptap/extension-typography";
import p from "@tiptap/extension-underline";
import m from "@tiptap/starter-kit";
//#region src/components/RichText/internal/Extensions/configured.ts
var h = t, g = a, _ = d, v = f, y = p, b = r, x = i, S = n.configure({
	persist: !0,
	HTMLAttributes: { class: "rich-text-details" }
}), C = u.configure({ types: ["heading", "paragraph"] }), w = c.configure({ table: { resizable: !0 } }), T = l.configure({ HTMLAttributes: { class: "f1-task-list" } }), E = o.configure({
	openOnClick: !0,
	HTMLAttributes: {
		rel: "noopener noreferrer",
		target: "_blank"
	}
}), D = m.configure({
	heading: { levels: [
		1,
		2,
		3,
		4,
		5,
		6
	] },
	bulletList: { HTMLAttributes: { class: "f1-bullet-list" } },
	orderedList: { HTMLAttributes: { class: "f1-ordered-list" } }
}), O = (e) => s.configure({
	includeChildren: !0,
	placeholder: e
}), k = (t) => e.configure({ limit: t });
//#endregion
export { h as ColorExtension, b as DetailsContentExtension, S as DetailsExtension, x as DetailsSummaryExtension, g as HighlightExtension, E as LinkExtension, D as StarterKitExtension, w as TableExtension, T as TaskListExtension, C as TextAlignExtension, _ as TextStyleExtension, v as TypographyExtension, y as UnderlineExtension, k as createCharacterCountExtension, O as createPlaceholderExtension };
