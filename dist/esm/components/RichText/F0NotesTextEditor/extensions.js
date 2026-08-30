import { DetailsContentExtension as e, DetailsExtension as t, DetailsSummaryExtension as n, HighlightExtension as r, LinkExtension as i, StarterKitExtension as a, TableExtension as o, TaskListExtension as s, TextAlignExtension as c, TextStyleExtension as l, TypographyExtension as u, UnderlineExtension as d, createPlaceholderExtension as f } from "../internal/Extensions/configured.js";
import { createAccessibilityExtension as p } from "../internal/Extensions/Accessibility/index.js";
import { CustomTaskExtension as m } from "../internal/Extensions/CustomTask/index.js";
import { AIBlockExtension as h } from "../internal/Extensions/AIBlock/index.js";
import { BlockIdExtension as g } from "../internal/Extensions/BlockIdExtension/index.js";
import { EnhanceHighlight as _ } from "../internal/Extensions/EnhanceHighlight/index.js";
import { FontSizeExtension as v } from "../internal/Extensions/FontSize/index.js";
import { ImageExtension as y, createFileHandlerExtension as b } from "../internal/Extensions/Image/index.js";
import { IndentExtension as x } from "../internal/Extensions/Indent/index.js";
import { MoodTrackerExtension as S } from "../internal/Extensions/MoodTracker/index.js";
import { PasteSanitizer as C } from "../internal/Extensions/PasteSanitizer/index.js";
import { PersistSelection as w } from "../internal/Extensions/PersistSelection/index.js";
import { VideoEmbedExtension as T } from "../internal/Extensions/VideoEmbed/index.js";
import { createSlashCommandExtension as E } from "../internal/Extensions/SlashCommand/index.js";
import { TranscriptExtension as D } from "../internal/Extensions/Transcript/index.js";
//#region src/components/RichText/F0NotesTextEditor/extensions.ts
var O = ({ placeholder: O, translations: k, aiBlockConfig: A, imageUploadConfig: j, enhanceEnabled: M = !1 }) => [
	a,
	C,
	d,
	l,
	v,
	u,
	s,
	m,
	r,
	c,
	x,
	i,
	t,
	n,
	e,
	o,
	S,
	D,
	h.configure({ currentConfig: A }),
	y,
	T,
	...j ? [b(j)] : [],
	...M ? [_] : [],
	g,
	w,
	f(O),
	p(O),
	E({
		aiBlockConfig: A,
		translations: k,
		imageUploadConfig: j
	})
];
//#endregion
export { O as createNotesTextEditorExtensions };
