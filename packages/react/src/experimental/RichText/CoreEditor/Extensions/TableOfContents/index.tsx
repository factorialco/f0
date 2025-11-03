import {
  getHierarchicalIndexes,
  TableOfContents,
} from "@tiptap/extension-table-of-contents"

interface TableOfContentsItem {
  id: string
  textContent: string
  level: number
  originalLevel: number
  itemIndex: number
  isActive: boolean
  isScrolledOver: boolean
  pos: number
}

export type { TableOfContentsItem }

export const createTableOfContentsExtension = (
  onUpdate: (items: TableOfContentsItem[]) => void
) =>
  TableOfContents.configure({
    getIndex: getHierarchicalIndexes,
    onUpdate(content) {
      onUpdate(content)
    },
  })
