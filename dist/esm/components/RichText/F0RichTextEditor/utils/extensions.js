import { ColorExtension as e, HighlightExtension as t, LinkExtension as n, StarterKitExtension as r, TaskListExtension as i, TextAlignExtension as a, TextStyleExtension as o, TypographyExtension as s, UnderlineExtension as c, createCharacterCountExtension as l, createPlaceholderExtension as u } from "../../internal/Extensions/configured.js";
import { createAccessibilityExtension as d } from "../../internal/Extensions/Accessibility/index.js";
import { createMentionExtensions as f } from "../../internal/Extensions/Mention/index.js";
import { CustomTaskExtension as p } from "../../internal/Extensions/CustomTask/index.js";
import { EnhanceHighlight as m } from "../../internal/Extensions/EnhanceHighlight/index.js";
import { FontSizeExtension as h } from "../../internal/Extensions/FontSize/index.js";
import { IndentExtension as g } from "../../internal/Extensions/Indent/index.js";
import { PasteSanitizer as _ } from "../../internal/Extensions/PasteSanitizer/index.js";
import { PersistSelection as v } from "../../internal/Extensions/PersistSelection/index.js";
//#region src/components/RichText/F0RichTextEditor/utils/extensions.ts
var y = ({ mentionsConfig: y, mentionSuggestions: b, setMentionSuggestions: x, placeholder: S, maxCharacters: C, plainHtmlMode: w = !1 }) => [
	r,
	_,
	c,
	o,
	e,
	h,
	s,
	a,
	g,
	n,
	v,
	m,
	...w ? [] : [
		i,
		p,
		t
	],
	u(S),
	l(C),
	...f(b, x, y),
	d(S)
];
//#endregion
export { y as ExtensionsConfiguration };
