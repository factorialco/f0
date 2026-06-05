import { Hr as o, Blockquote as r, Code as t, Pre as m } from "./components/Block.js";
import { Image as e } from "./components/Image.js";
import { A as i } from "./components/Link.js";
import { Ol as p, Ul as f, Li as l } from "./components/Lists.js";
import { Td as n, Th as d, Table as h } from "./components/Table.js";
import { Em as a, Strong as c, H3 as g, H2 as H, H1 as b, P as k } from "./components/Typography.js";
import { EntityRef as s } from "./entityRef/components/EntityRef.js";
const w = {
  p: k,
  h1: b,
  h2: H,
  h3: g,
  a: i,
  strong: c,
  em: a,
  li: l,
  pre: m,
  code: t,
  blockquote: r,
  hr: o,
  ul: f,
  ol: p,
  table: h,
  th: d,
  td: n,
  img: e,
  "entity-ref": s
};
export {
  w as markdownRenderers
};
