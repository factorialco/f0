import { BubbleMenu, Editor } from "@tiptap/react"

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Delete,
  Group,
  Split,
  Table,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { ToolbarDropdown } from "../Toolbar"

interface TableBubbleMenuProps {
  editor: Editor
  editorId: string
  isFullscreen?: boolean
}

/**
 * Contextual bubble menu for table management. It only appears while the
 * selection is inside a table and exposes the table commands provided by
 * TableKit (add/delete rows and columns, merge/split cells, header row,
 * delete table). It uses its own `pluginKey` so it can coexist with the
 * text-formatting bubble menu, and is anchored to the bottom to avoid
 * overlapping with it.
 */
export const TableBubbleMenu = ({
  editor,
  editorId,
  isFullscreen = false,
}: TableBubbleMenuProps) => {
  const translations = useI18n()
  const t = translations.richTextEditor.tableMenu

  return (
    <BubbleMenu
      pluginKey="tableBubbleMenu"
      editor={editor}
      tippyOptions={{
        duration: 100,
        placement: "bottom",
        hideOnClick: false,
        appendTo: () =>
          isFullscreen
            ? document.body
            : document.getElementById(editorId) || document.body,
        zIndex: 9999,
      }}
      shouldShow={({ editor }) => editor.isEditable && editor.isActive("table")}
    >
      <div className="dark z-50 flex w-max flex-row items-center gap-1 rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm">
        <ToolbarDropdown
          darkMode
          activator={{ label: translations.richTextEditor.table, icon: Table }}
          items={[
            {
              icon: ArrowLeft,
              label: t.addColumnBefore,
              onClick: () => editor.chain().focus().addColumnBefore().run(),
              disabled: !editor.can().addColumnBefore(),
            },
            {
              icon: ArrowRight,
              label: t.addColumnAfter,
              onClick: () => editor.chain().focus().addColumnAfter().run(),
              disabled: !editor.can().addColumnAfter(),
            },
            {
              icon: Delete,
              label: t.deleteColumn,
              variant: "critical",
              onClick: () => editor.chain().focus().deleteColumn().run(),
              disabled: !editor.can().deleteColumn(),
            },
            {
              icon: ArrowUp,
              label: t.addRowBefore,
              separator: true,
              onClick: () => editor.chain().focus().addRowBefore().run(),
              disabled: !editor.can().addRowBefore(),
            },
            {
              icon: ArrowDown,
              label: t.addRowAfter,
              onClick: () => editor.chain().focus().addRowAfter().run(),
              disabled: !editor.can().addRowAfter(),
            },
            {
              icon: Delete,
              label: t.deleteRow,
              variant: "critical",
              onClick: () => editor.chain().focus().deleteRow().run(),
              disabled: !editor.can().deleteRow(),
            },
            {
              icon: Group,
              label: t.mergeCells,
              separator: true,
              onClick: () => editor.chain().focus().mergeCells().run(),
              disabled: !editor.can().mergeCells(),
            },
            {
              icon: Split,
              label: t.splitCell,
              onClick: () => editor.chain().focus().splitCell().run(),
              disabled: !editor.can().splitCell(),
            },
            {
              icon: Table,
              label: t.toggleHeaderRow,
              separator: true,
              onClick: () => editor.chain().focus().toggleHeaderRow().run(),
              isActive: editor.isActive("tableHeader"),
              disabled: !editor.can().toggleHeaderRow(),
            },
            {
              icon: Delete,
              label: t.deleteTable,
              variant: "critical",
              separator: true,
              onClick: () => editor.chain().focus().deleteTable().run(),
              disabled: !editor.can().deleteTable(),
            },
          ]}
        />
      </div>
    </BubbleMenu>
  )
}
