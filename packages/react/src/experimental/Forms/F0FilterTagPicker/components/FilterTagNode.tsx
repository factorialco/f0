import { mergeAttributes, Node } from "@tiptap/core"
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  type NodeViewProps,
} from "@tiptap/react"

import { useI18n } from "@/lib/providers/i18n"

import type { FilterTagNodeAttributes } from "../internal-types"

import { FilterTag } from "./FilterTag"

function FilterTagNodeView({
  deleteNode,
  editor,
  node,
  selected,
}: NodeViewProps) {
  const i18n = useI18n()
  const attributes = node.attrs as FilterTagNodeAttributes

  return (
    <NodeViewWrapper as="span" contentEditable={false} className="inline">
      <FilterTag
        categoryLabel={attributes.categoryLabel}
        label={attributes.label}
        color={attributes.color}
        removeLabel={i18n.t("filters.tagPicker.removeValue", {
          value: attributes.label,
          category: attributes.categoryLabel,
        })}
        disabled={!editor.isEditable}
        selected={selected}
        onRemove={() => {
          deleteNode()
          editor.commands.focus()
        }}
      />
    </NodeViewWrapper>
  )
}

export const FilterTagNode = Node.create({
  name: "filterTag",
  group: "inline",
  inline: true,
  atom: true,
  selectable: true,

  addAttributes() {
    return {
      filterKey: { default: "" },
      value: { default: "" },
      categoryKey: { default: "" },
      categoryLabel: { default: "" },
      color: { default: "smoke" },
      label: { default: "" },
    }
  },

  parseHTML() {
    return [{ tag: "span[data-filter-tag]" }]
  },

  renderHTML({ HTMLAttributes, node }) {
    const attributes = node.attrs as FilterTagNodeAttributes

    return [
      "span",
      mergeAttributes(HTMLAttributes, {
        "data-filter-tag": "",
        "data-filter-key": attributes.filterKey,
        "data-filter-value": String(attributes.value),
        "data-filter-value-type": typeof attributes.value,
      }),
      attributes.label,
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(FilterTagNodeView)
  },
})
