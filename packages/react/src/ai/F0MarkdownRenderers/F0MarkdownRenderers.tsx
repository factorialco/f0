import { type AssistantMessageProps } from "@copilotkit/react-ui"

import { Blockquote, Hr, Pre } from "./components/Block"
import { Image } from "./components/Image"
import { A } from "./components/Link"
import { Li, Ol, Ul } from "./components/Lists"
import { Table, TableSimple, Td, Th } from "./components/Table"
import { Em, H1, H2, H3, P, Strong } from "./components/Typography"

/**
 * Default markdown renderers with table download button
 */
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
}

/**
 * Markdown renderers without table download button - for use when parent provides download controls
 */
export const f0MarkdownRenderersSimple: NonNullable<
  AssistantMessageProps["markdownTagRenderers"]
> = {
  ...f0MarkdownRenderers,
  table: TableSimple,
}
