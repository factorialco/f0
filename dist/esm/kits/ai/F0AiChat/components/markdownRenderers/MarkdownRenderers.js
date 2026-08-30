import { Blockquote as e, Code as t, Hr as n, Pre as r } from "./components/Block.js";
import { Image as i } from "./components/Image.js";
import { A as a } from "./components/Link.js";
import { Li as o, Ol as s, Ul as c } from "./components/Lists.js";
import { Table as l, Td as u, Th as d } from "./components/Table.js";
import { Em as f, H1 as p, H2 as m, H3 as h, P as g, Strong as _ } from "./components/Typography.js";
import { EntityRef as v } from "./entityRef/components/EntityRef.js";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/MarkdownRenderers.tsx
var y = {
	p: g,
	h1: p,
	h2: m,
	h3: h,
	a,
	strong: _,
	em: f,
	li: o,
	pre: r,
	code: t,
	blockquote: e,
	hr: n,
	ul: c,
	ol: s,
	table: l,
	th: d,
	td: u,
	img: i,
	"entity-ref": v
};
//#endregion
export { y as markdownRenderers };
