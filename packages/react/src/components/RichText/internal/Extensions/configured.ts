import CharacterCount from "@tiptap/extension-character-count"
import Color from "@tiptap/extension-color"
import Details from "@tiptap/extension-details"
import DetailsContent from "@tiptap/extension-details-content"
import DetailsSummary from "@tiptap/extension-details-summary"
import Highlight from "@tiptap/extension-highlight"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { TableKit } from "@tiptap/extension-table"
import TaskList from "@tiptap/extension-task-list"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"
import StarterKit from "@tiptap/starter-kit"

export const ColorExtension = Color
export const HighlightExtension = Highlight
export const TextStyleExtension = TextStyle
export const TypographyExtension = Typography
export const UnderlineExtension = Underline
export const DetailsContentExtension = DetailsContent
export const DetailsSummaryExtension = DetailsSummary

export const DetailsExtension = Details.configure({
  persist: true,
  HTMLAttributes: {
    class: "rich-text-details",
  },
})

export const TextAlignExtension = TextAlign.configure({
  types: ["heading", "paragraph"],
})

export const TableExtension = TableKit.configure({
  table: { resizable: true },
})

export const TaskListExtension = TaskList.configure({
  HTMLAttributes: {
    class: "f1-task-list",
  },
})

export const LinkExtension = Link.configure({
  openOnClick: true,
  HTMLAttributes: {
    rel: "noopener noreferrer",
    target: "_blank",
  },
})

export const StarterKitExtension = StarterKit.configure({
  heading: { levels: [1, 2, 3] },
  bulletList: {
    HTMLAttributes: {
      class: "f1-bullet-list",
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: "f1-ordered-list",
    },
  },
})

export const createPlaceholderExtension = (placeholder: string) =>
  Placeholder.configure({
    includeChildren: true,
    placeholder: placeholder,
  })

export const createCharacterCountExtension = (maxCharacters?: number) =>
  CharacterCount.configure({ limit: maxCharacters })
