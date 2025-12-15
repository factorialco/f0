import * as Popover from "@radix-ui/react-popover"
import { Editor, Extension, ReactRenderer } from "@tiptap/react"
import { Suggestion } from "@tiptap/suggestion"
import React from "react"
import { createRoot, Root } from "react-dom/client"
import { ToolbarLabels } from "../../Toolbar/types"
import {
  AIBlockConfig,
  availableCommands,
  CommandItem,
  getGroupedCommands,
  SlashCommandGroupLabels,
} from "./AvailableCommands"
import { CommandList } from "./CommandList"

const createSlashCommandExtension = (
  labels: ToolbarLabels,
  groupLabels?: SlashCommandGroupLabels,
  aiBlockConfig?: AIBlockConfig
) =>
  Extension.create({
    name: "slashCommand",

    addOptions() {
      return {
        suggestion: {
          char: "/",
          allowSpaces: true,
          allowedPrefixes: [" ", "\n"],
          startOfLine: false,
          command: ({
            editor,
            range,
            props,
          }: {
            editor: Editor
            range: { from: number; to: number }
            props: CommandItem
          }) => {
            // Get the current selection and document state
            const { state } = editor
            const { from, to } = state.selection

            // Find the actual slash position by looking backwards from current position
            const doc = state.doc
            const $from = doc.resolve(from)
            const textBefore = $from.parent.textBetween(
              Math.max(0, $from.parentOffset - 50), // Look back up to 50 chars
              $from.parentOffset,
              undefined,
              "\ufffc"
            )

            // Find the last slash position
            const slashIndex = textBefore.lastIndexOf("/")

            if (slashIndex !== -1) {
              // Calculate the actual range to delete (from slash to current position)
              const startPos = from - ($from.parentOffset - slashIndex)
              const endPos = to

              // Delete the entire query range first
              editor.chain().focus().deleteRange({ from: startPos, to: endPos }).run()
            } else {
              // Fallback to the provided range if we can't find the slash
              editor.chain().focus().deleteRange(range).run()
            }

            // Then execute the command
            props.command(editor)
          },
        },
      }
    },

    addProseMirrorPlugins() {
      // Use provided group labels or defaults
      const finalGroupLabels: SlashCommandGroupLabels = groupLabels || {
        textStyles: "Text Styles",
        lists: "Lists",
        blocks: "Blocks",
      }

      return [
        Suggestion({
          editor: this.editor,
          ...this.options.suggestion,
          items: ({ query }: { query: string }) => {
            // Exact search: the query with spaces must match exactly
            const normalizedQuery = query.toLowerCase().trim()
            const results = availableCommands(labels, aiBlockConfig).filter((item: CommandItem) => {
              const normalizedTitle = item.title.toLowerCase()
              // If query is empty, show all commands
              if (!normalizedQuery) return true
              // Exact string matching (including spaces)
              return normalizedTitle.includes(normalizedQuery)
            })
            return results.length > 0 ? results : []
          },
          render: () => {
            let component: ReactRenderer | null = null
            let popoverRoot: Root | null = null
            let container: HTMLDivElement | null = null

            const getSlashRect = (): DOMRect => {
              const selection = window.getSelection()
              if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0)
                const { startContainer, startOffset } = range
                if (startContainer.nodeType === Node.TEXT_NODE) {
                  const textContent = startContainer.textContent || ""
                  const index = textContent.lastIndexOf("/", startOffset)
                  if (index !== -1) {
                    const slashRange = document.createRange()
                    slashRange.setStart(startContainer, index)
                    slashRange.setEnd(startContainer, index + 1)
                    return slashRange.getBoundingClientRect()
                  }
                }
                return range.getBoundingClientRect()
              }
              return document.body.getBoundingClientRect()
            }

            const PopoverComponent = ({
              content,
              anchorRect,
            }: {
              content: HTMLElement
              anchorRect: DOMRect
              editor: Editor
            }) => {
              const anchorStyle: React.CSSProperties = {
                position: "absolute",
                top: anchorRect.bottom + window.scrollY,
                left: anchorRect.left + window.scrollX,
                width: 0,
                height: 0,
              }

              return (
                <Popover.Root open modal={false}>
                  <div style={anchorStyle} />
                  <Popover.Anchor asChild>
                    <div style={anchorStyle} />
                  </Popover.Anchor>
                  <Popover.Content
                    side="bottom"
                    align="start"
                    sideOffset={15}
                    collisionPadding={10}
                    style={{ zIndex: 9999 }}
                    onOpenAutoFocus={(event) => {
                      event.preventDefault()
                    }}
                    onCloseAutoFocus={(event) => {
                      event.preventDefault()
                    }}
                  >
                    <div
                      ref={(el) => {
                        if (el && content.parentNode !== el) {
                          el.appendChild(content)
                        }
                      }}
                    />
                  </Popover.Content>
                </Popover.Root>
              )
            }

            return {
              onStart: (props: {
                items: CommandItem[]
                command: (props: CommandItem) => void
                clientRect?: (() => DOMRect | null) | null
                editor: Editor
                range: { from: number; to: number }
                query?: string
              }) => {
                if (props.items.length === 0) return

                // Get grouped commands for better organization
                const groupedCommands = getGroupedCommands(labels, finalGroupLabels, aiBlockConfig)

                // Filter groups based on query if available
                let filteredGroups = groupedCommands
                if (props.query && props.query.trim()) {
                  const normalizedQuery = props.query.toLowerCase().trim()

                  filteredGroups = groupedCommands
                    .map((group) => ({
                      ...group,
                      commands: group.commands.filter((item) => {
                        const normalizedTitle = item.title.toLowerCase()
                        // Exact string matching (including spaces)
                        return normalizedTitle.includes(normalizedQuery)
                      }),
                    }))
                    .filter((group) => group.commands.length > 0)
                }

                component = new ReactRenderer(CommandList, {
                  props: {
                    items: props.items,
                    groups: filteredGroups,
                    command: props.command,
                  },
                  editor: props.editor,
                })

                const safeGetRect = () => {
                  if (props.clientRect) {
                    const rect = props.clientRect()
                    if (rect && rect.width && rect.height) return rect
                  }
                  return getSlashRect()
                }
                const anchorRect = safeGetRect()

                container = document.createElement("div")
                document.body.appendChild(container)

                popoverRoot = createRoot(container)
                popoverRoot.render(
                  <PopoverComponent
                    content={component.element as HTMLElement}
                    anchorRect={anchorRect}
                    editor={props.editor}
                  />
                )
              },
              onUpdate: (props: {
                items: CommandItem[]
                clientRect?: (() => DOMRect | null) | null
                editor: Editor
                query?: string
              }) => {
                if (!component || !container || !popoverRoot) return

                // Get filtered groups for update
                const groupedCommands = getGroupedCommands(labels, finalGroupLabels, aiBlockConfig)
                let filteredGroups = groupedCommands
                if (props.query && props.query.trim()) {
                  const normalizedQuery = props.query.toLowerCase().trim()

                  filteredGroups = groupedCommands
                    .map((group) => ({
                      ...group,
                      commands: group.commands.filter((item) => {
                        const normalizedTitle = item.title.toLowerCase()
                        // Exact string matching (including spaces)
                        return normalizedTitle.includes(normalizedQuery)
                      }),
                    }))
                    .filter((group) => group.commands.length > 0)
                }

                // Always update the component with current items (even if empty)
                component.updateProps({
                  items: props.items,
                  groups: filteredGroups,
                })

                // Control visibility based on whether we have items
                if (props.items.length === 0) {
                  // Hide the popover content
                  if (container) {
                    ;(container as HTMLElement).style.display = "none"
                  }
                } else {
                  // Show the popover content and update position
                  if (container) {
                    ;(container as HTMLElement).style.display = ""
                  }

                  const safeGetRect = () => {
                    if (props.clientRect) {
                      const rect = props.clientRect()
                      if (rect && rect.width && rect.height) return rect
                    }
                    return getSlashRect()
                  }
                  const anchorRect = safeGetRect()
                  popoverRoot.render(
                    <PopoverComponent
                      content={component.element as HTMLElement}
                      anchorRect={anchorRect}
                      editor={props.editor}
                    />
                  )
                }
              },
              onKeyDown: (props: { event: KeyboardEvent }) => {
                if (props.event.key === "Escape") {
                  if (popoverRoot && container) {
                    popoverRoot.unmount()
                    container.remove()
                  }
                  return true
                }
                const ref = component?.ref
                return ref &&
                  typeof ref === "object" &&
                  "onKeyDown" in ref &&
                  typeof ref.onKeyDown === "function"
                  ? ref.onKeyDown(props) || false
                  : false
              },
              onExit() {
                if (popoverRoot && container) {
                  popoverRoot.unmount()
                  container.remove()
                }
                component?.destroy()
              },
            }
          },
        }),
      ]
    },
  })

export { createSlashCommandExtension }
export type { SlashCommandGroupLabels }
