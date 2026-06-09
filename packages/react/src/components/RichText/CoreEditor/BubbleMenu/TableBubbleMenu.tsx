import { BubbleMenu, Editor } from "@tiptap/react"
import { Fragment } from "react"

import { F0ButtonToggle } from "@/components/F0ButtonToggle"
import { IconType } from "@/components/F0Icon"
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

import { ToolbarDivider, ToolbarDropdown } from "../Toolbar"

interface TableBubbleMenuProps {
  editor: Editor
  editorId: string
  isFullscreen?: boolean
}

interface TableAction {
  key: string
  icon: IconType
  label: string
  onClick: () => void
  disabled: boolean
  active?: boolean
}

/**
 * Contextual bubble menu for table management. It only appears while the
 * selection is inside a table and exposes the table commands provided by
 * TableKit (add/delete rows and columns, merge/split cells, header row,
 * delete table). It uses its own `pluginKey` so it can coexist with the
 * text-formatting bubble menu, and is anchored to the bottom of the table so
 * it never overlaps with it. Actions render as a compact horizontal row of
 * icon buttons (with native tooltips) grouped by dividers, mirroring the
 * text-formatting toolbar. The destructive deletes are collapsed into a
 * single trash dropdown so the three "delete" actions aren't ambiguous.
 */
export const TableBubbleMenu = ({
  editor,
  editorId,
  isFullscreen = false,
}: TableBubbleMenuProps) => {
  const translations = useI18n()
  const t = translations.richTextEditor.tableMenu

  // Direct quick-access icon buttons, grouped so dividers separate them.
  // Inserts use directional arrows (where the new column/row will go).
  const groups: TableAction[][] = [
    [
      {
        key: "addColumnBefore",
        icon: ArrowLeft,
        label: t.addColumnBefore,
        onClick: () => editor.chain().focus().addColumnBefore().run(),
        disabled: !editor.can().addColumnBefore(),
      },
      {
        key: "addColumnAfter",
        icon: ArrowRight,
        label: t.addColumnAfter,
        onClick: () => editor.chain().focus().addColumnAfter().run(),
        disabled: !editor.can().addColumnAfter(),
      },
    ],
    [
      {
        key: "addRowBefore",
        icon: ArrowUp,
        label: t.addRowBefore,
        onClick: () => editor.chain().focus().addRowBefore().run(),
        disabled: !editor.can().addRowBefore(),
      },
      {
        key: "addRowAfter",
        icon: ArrowDown,
        label: t.addRowAfter,
        onClick: () => editor.chain().focus().addRowAfter().run(),
        disabled: !editor.can().addRowAfter(),
      },
    ],
    [
      {
        key: "mergeCells",
        icon: Group,
        label: t.mergeCells,
        onClick: () => editor.chain().focus().mergeCells().run(),
        disabled: !editor.can().mergeCells(),
      },
      {
        key: "splitCell",
        icon: Split,
        label: t.splitCell,
        onClick: () => editor.chain().focus().splitCell().run(),
        disabled: !editor.can().splitCell(),
      },
    ],
    [
      {
        key: "toggleHeaderRow",
        icon: Table,
        label: t.toggleHeaderRow,
        active: editor.isActive("tableHeader"),
        onClick: () => editor.chain().focus().toggleHeaderRow().run(),
        disabled: !editor.can().toggleHeaderRow(),
      },
    ],
  ]

  // The three destructive actions live behind a single trash dropdown so they
  // are not confused with one another.
  const deleteItems = [
    {
      icon: Delete,
      label: t.deleteColumn,
      onClick: () => editor.chain().focus().deleteColumn().run(),
    },
    {
      icon: Delete,
      label: t.deleteRow,
      onClick: () => editor.chain().focus().deleteRow().run(),
    },
    {
      icon: Delete,
      label: t.deleteTable,
      onClick: () => editor.chain().focus().deleteTable().run(),
    },
  ]

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
      <div className="dark z-50 flex w-max flex-row items-center gap-0.5 rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm">
        {groups.map((group, groupIndex) => (
          <Fragment key={group[0]?.key ?? groupIndex}>
            {groupIndex > 0 && <ToolbarDivider />}
            {group.map((action) => (
              <F0ButtonToggle
                key={action.key}
                label={action.label}
                icon={action.icon}
                selected={action.active ?? false}
                disabled={action.disabled}
                onSelectedChange={action.onClick}
              />
            ))}
          </Fragment>
        ))}
        <ToolbarDivider />
        <ToolbarDropdown
          darkMode
          position="bottom"
          activator={{ label: t.delete, icon: Delete }}
          items={deleteItems}
        />
      </div>
    </BubbleMenu>
  )
}
