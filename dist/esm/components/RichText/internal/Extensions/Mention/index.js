import { cn as e } from "../../../../../lib/utils.js";
import { mentionFocusableClasses as t } from "../../../../../lib/recipes/mention.js";
import "./MentionItem/index.js";
import "./MentionList/index.js";
import "./MentionPopover/index.js";
import { createSuggestionConfig as n } from "./suggestion.js";
import r from "@tiptap/extension-mention";
//#region src/components/RichText/internal/Extensions/Mention/index.tsx
var i = "mention", a = r.extend({ addAttributes() {
	return {
		...this.parent?.(),
		id: { default: null },
		label: { default: null },
		href: { default: "#" }
	};
} }), o = (r, o, s) => s?.users?.length ? [a.configure({
	HTMLAttributes: { class: i },
	renderHTML({ options: n, node: r }) {
		return [
			"a",
			{
				onclick: "if(this.closest('.ProseMirror')?.getAttribute('contenteditable') === 'true') { event.preventDefault(); }",
				href: r.attrs.href || "#",
				class: e(n.HTMLAttributes.class, t),
				"data-id": r.attrs.id,
				"data-type": "mention",
				rel: "noopener noreferrer",
				target: "_blank"
			},
			`${n.suggestion.char ?? "@"}${r.attrs.label}`
		];
	},
	suggestion: n(r, o, s.onMentionQueryStringChanged, s.users)
})] : [];
//#endregion
export { o as createMentionExtensions };
