import { type AssistantMessageProps } from "@copilotkit/react-ui"

import { Blockquote, Hr, Pre } from "./components/Block"
import { EntityRef } from "./components/EntityRef"
import { Image } from "./components/Image"
import { A } from "./components/Link"
import { Li, Ol, Ul } from "./components/Lists"
import { Table, TableSimple, Td, Th } from "./components/Table"
import { Em, H1, H2, H3, P, Strong } from "./components/Typography"

export const f0MarkdownRenderers: NonNullable<
  AssistantMessageProps["markdownTagRenderers"]
> = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  a: A,
  strong: Strong,
  em: Em,
  li: Li,
  pre: Pre,
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

/**
 * Markdown renderers without the table download button.
 * Use this when the parent component already provides its own download controls.
 */
export const f0MarkdownRenderersSimple: NonNullable<
  AssistantMessageProps["markdownTagRenderers"]
> = {
  ...f0MarkdownRenderers,
  table: TableSimple,
}
