import type { ComponentType } from "react"

import { Blockquote, Code, Hr, Pre } from "./components/Block"
import { Image } from "./components/Image"
import { A } from "./components/Link"
import { Li, Ol, Ul } from "./components/Lists"
import { Table, Td, Th } from "./components/Table"
import { Em, H1, H2, H3, P, Strong } from "./components/Typography"
import { EntityRef } from "./entityRef/components/EntityRef"

/**
 * Map of tag name → renderer component, consumed by the markdown rendering
 * layer (factorial / mock runtime pass these through to whatever markdown
 * renderer they pick). Kept as a plain `Record` so f0 stays decoupled from
 * any specific markdown library.
 */
export type MarkdownTagRenderers = Record<string, ComponentType<any>>

export const markdownRenderers: MarkdownTagRenderers = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  a: A,
  strong: Strong,
  em: Em,
  li: Li,
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
  hr: Hr,
  ul: Ul,
  ol: Ol,
  table: Table,
  th: Th,
  td: Td,
  img: Image,
  "entity-ref": EntityRef,
}
