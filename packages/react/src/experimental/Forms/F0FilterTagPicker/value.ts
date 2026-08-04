import type { JSONContent } from "@tiptap/core"
import type { Node as ProseMirrorNode } from "@tiptap/pm/model"

import type { FilterTagNodeAttributes } from "./internal-types"
import type {
  F0FilterTagPickerFilterToken,
  F0FilterTagPickerFiltersDefinition,
  F0FilterTagPickerMode,
  F0FilterTagPickerValue,
} from "./types"

export function normalizeFilterTagPickerValue<
  Filters extends F0FilterTagPickerFiltersDefinition,
>(value: F0FilterTagPickerValue<Filters>): F0FilterTagPickerValue<Filters> {
  const normalized: F0FilterTagPickerValue<Filters> = []

  for (const token of value) {
    if (token.type === "text") {
      if (!token.value) continue

      const previous = normalized.at(-1)
      if (previous?.type === "text") {
        previous.value += token.value
      } else {
        normalized.push({ type: "text", value: token.value })
      }
      continue
    }

    normalized.push({ ...token })
  }

  return normalized
}

export function normalizeFilterTagPickerValueForMode<
  Filters extends F0FilterTagPickerFiltersDefinition,
>(
  value: F0FilterTagPickerValue<Filters>,
  mode: F0FilterTagPickerMode
): F0FilterTagPickerValue<Filters> {
  const normalized = normalizeFilterTagPickerValue(value)
  return mode === "tags"
    ? normalized.filter((token) => token.type === "filter")
    : normalized
}

export function areFilterTagPickerValuesEqual<
  Filters extends F0FilterTagPickerFiltersDefinition,
>(
  first: F0FilterTagPickerValue<Filters>,
  second: F0FilterTagPickerValue<Filters>
) {
  return (
    JSON.stringify(normalizeFilterTagPickerValue(first)) ===
    JSON.stringify(normalizeFilterTagPickerValue(second))
  )
}

function textToEditorContent(value: string): JSONContent[] {
  const lines = value.split("\n")

  return lines.flatMap((line, index) => {
    const content: JSONContent[] = []
    if (line) content.push({ type: "text", text: line })
    if (index < lines.length - 1) content.push({ type: "hardBreak" })
    return content
  })
}

export function filterTagPickerValueToEditorContent<
  Filters extends F0FilterTagPickerFiltersDefinition,
>(
  value: F0FilterTagPickerValue<Filters>,
  getTagAttributes: (
    filterKey: string,
    value: string | number
  ) => FilterTagNodeAttributes
): JSONContent {
  const content = normalizeFilterTagPickerValue(value).flatMap<JSONContent>(
    (token) => {
      if (token.type === "text") return textToEditorContent(token.value)

      return [
        {
          type: "filterTag",
          attrs: getTagAttributes(token.filterKey, token.value),
        },
      ]
    }
  )

  return {
    type: "doc",
    content: [{ type: "paragraph", content }],
  }
}

export function editorDocumentToFilterTagPickerValue<
  Filters extends F0FilterTagPickerFiltersDefinition,
>(
  document: ProseMirrorNode,
  validFilterKeys: ReadonlySet<keyof Filters & string>
): F0FilterTagPickerValue<Filters> {
  const value: F0FilterTagPickerValue<Filters> = []

  const appendText = (text: string) => {
    if (!text) return

    const previous = value.at(-1)
    if (previous?.type === "text") {
      previous.value += text
    } else {
      value.push({ type: "text", value: text })
    }
  }

  document.forEach((block, _offset, blockIndex) => {
    if (blockIndex > 0) appendText("\n")

    block.forEach((node) => {
      if (node.isText) {
        appendText(node.text ?? "")
        return
      }

      if (node.type.name === "hardBreak") {
        appendText("\n")
        return
      }

      if (node.type.name === "filterTag") {
        const filterKey = node.attrs.filterKey
        if (
          typeof filterKey !== "string" ||
          !validFilterKeys.has(filterKey as keyof Filters & string)
        ) {
          return
        }

        value.push({
          type: "filter",
          filterKey: filterKey as keyof Filters & string,
          value: node.attrs.value as string | number,
        } as unknown as F0FilterTagPickerFilterToken<Filters>)
      }
    })
  })

  return normalizeFilterTagPickerValue(value)
}
