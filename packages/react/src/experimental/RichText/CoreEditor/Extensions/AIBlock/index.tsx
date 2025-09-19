import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/F0Icon"
import { F0AiBanner } from "@/experimental"
import { LiveCompanionLabels } from "@/experimental/RichText/CoreEditor/Extensions/LiveCompanion"
import { MoodTrackerLabels } from "@/experimental/RichText/CoreEditor/Extensions/MoodTracker"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { TranscriptLabels } from "@/experimental/RichText/CoreEditor/Extensions/Transcript"
import { ToolbarLabels } from "@/experimental/RichText/CoreEditor/Toolbar/types"
import { cn } from "@/lib/utils"
import { JSONContent, Node } from "@tiptap/core"
import {
  Editor,
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createAIBlockEditorExtensions } from "./extensions"

export type AIButton = {
  type: string
  emoji: string
  label: string
  icon: IconType
}

export interface AIBlockLabels {
  reset: string
  resetDescription: string
  deleteBlock: string
  expand: string
  collapse: string
}

export interface AIBlockConfig {
  buttons?: AIButton[]
  onClick: (type: string) => Promise<JSONContent | null>
  title: string
}

export interface AIBlockConfigWithLabels extends AIBlockConfig {
  labels?: AIBlockLabels
  toolbarLabels: ToolbarLabels
  slashCommandGroupLabels?: SlashCommandGroupLabels
  moodTrackerLabels?: MoodTrackerLabels
  liveCompanionLabels?: LiveCompanionLabels
  transcriptLabels?: TranscriptLabels
  placeholder?: string
}

interface AIBlockData {
  content?: JSONContent | null
  selectedAction?: string
  selectedTitle?: string
  selectedEmoji?: string
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    aiBlock: {
      insertAIBlock: (
        data: AIBlockData,
        config: AIBlockConfigWithLabels
      ) => ReturnType
    }
  }
}

const useContentEditor = (
  data: AIBlockData | undefined,
  isLoading: boolean,
  blockId: string,
  updateAttributes: (attrs: { data: AIBlockData }) => void,
  config: AIBlockConfigWithLabels
): Editor | null => {
  const extensions = useMemo(() => {
    return createAIBlockEditorExtensions(
      config.placeholder || "",
      config.toolbarLabels,
      config.slashCommandGroupLabels,
      config.moodTrackerLabels,
      config.liveCompanionLabels,
      config.transcriptLabels
    )
  }, [config])

  // Add a debounce ref to prevent frequent updates
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const editor = useEditor(
    {
      extensions,
      content: data?.content || null,
      editable: true,
      editorProps: {
        attributes: {
          class: `ai-block-editor-${blockId}`,
          "data-testid": `ai-block-content-${blockId}`,
        },
      },
      onUpdate: ({ editor }) => {
        const isEmpty = editor.isEmpty

        // Clear any pending update
        if (updateTimeoutRef.current) {
          clearTimeout(updateTimeoutRef.current)
        }

        // Debounce updates to avoid rapid re-renders
        updateTimeoutRef.current = setTimeout(() => {
          // Save current selection for restoration
          const { from, to } = editor.state.selection

          if (isEmpty && data?.selectedAction && !isLoading) {
            updateAttributes({
              data: {
                content: null,
                selectedAction: undefined,
                selectedTitle: undefined,
                selectedEmoji: undefined,
              },
            })
          } else if (!isEmpty) {
            const newContent = editor.getJSON()
            updateAttributes({
              data: {
                content: newContent,
                selectedAction: data?.selectedAction,
                selectedTitle: data?.selectedTitle,
                selectedEmoji: data?.selectedEmoji,
              },
            })
          }

          // Allow time for the update to complete before restoring selection
          setTimeout(() => {
            // Only restore if editor is still mounted and focused
            if (editor && editor.isFocused) {
              editor.commands.setTextSelection({ from, to })
            }
          }, 10)
        }, 300) // Debounce delay
      },
    },
    [blockId]
  )

  useEffect(() => {
    if (editor && data?.content) {
      // Preserve selection when setting content
      const { from, to } = editor.state.selection
      const hadSelection = from !== to

      editor.commands.setContent(data.content)

      // Restore selection if there was one
      if (hadSelection && editor.isFocused) {
        setTimeout(() => {
          editor.commands.setTextSelection({ from, to })
        }, 10)
      }
    }
  }, [editor, data?.content])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current)
      }
    }
  }, [])

  return editor
}

const useAIBlockState = (
  data: AIBlockData | undefined,
  initialCollapsed = false
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed)

  useEffect(() => {
    if (data?.selectedAction && !data?.content && !isLoading) {
      setIsLoading(true)
    }
  }, [data?.selectedAction, data?.content, isLoading])

  useEffect(() => {
    if (data?.content && isLoading) {
      setIsLoading(false)
    }
  }, [data?.content, isLoading])

  return {
    isLoading,
    setIsLoading,
    isCollapsed,
    setIsCollapsed,
  }
}

const useDisplayInfo = (
  data: AIBlockData | undefined,
  config: AIBlockConfig,
  selectedAction: string | undefined
) => {
  return useMemo(() => {
    // Always prioritize saved title and emoji if they exist
    if (data?.selectedTitle || data?.selectedEmoji) {
      return {
        title: data.selectedTitle || config.title,
        emoji: data.selectedEmoji,
      }
    }

    // Only fall back to searching in config if no saved data exists
    if (selectedAction) {
      const selectedButton = config.buttons?.find(
        (button: AIButton) => button.type === selectedAction
      )

      if (selectedButton) {
        return {
          title: selectedButton.label,
          emoji: selectedButton.emoji,
        }
      }
    }

    return {
      title: config.title,
    }
  }, [data?.selectedTitle, data?.selectedEmoji, selectedAction, config])
}

interface AIButtonsSectionProps {
  config: AIBlockConfig
  isLoading: boolean
  onButtonClick: (type: string) => void
}

const AIButtonsSection: React.FC<AIButtonsSectionProps> = ({
  config,
  isLoading,
  onButtonClick,
}) => (
  <div className="relative flex flex-row flex-wrap items-center gap-2">
    {config.buttons?.map((button: AIButton, index: number) => (
      <div key={index}>
        <Button
          onClick={() => onButtonClick(button.type)}
          variant="outline"
          size="md"
          emoji={button.emoji}
          label={button.label}
          disabled={isLoading}
        />
      </div>
    ))}
  </div>
)

export const AIBlockView: React.FC<NodeViewProps> = ({
  node,
  updateAttributes,
  deleteNode,
  extension,
}) => {
  const data = node.attrs.data as AIBlockData
  const config =
    (extension.options.currentConfig as AIBlockConfigWithLabels) ||
    (node.attrs.config as AIBlockConfigWithLabels)

  const blockId = useRef(Math.random().toString(36).substr(2, 9)).current
  const { isLoading, setIsLoading } = useAIBlockState(
    data,
    node.attrs.isCollapsed ?? false
  )
  const { title: displayTitle, emoji: displayEmoji } = useDisplayInfo(
    data,
    config,
    data?.selectedAction
  )
  const contentEditor = useContentEditor(
    data,
    isLoading,
    blockId,
    updateAttributes,
    config
  )

  // Ensure selectedTitle and selectedEmoji are persisted for copy/paste
  useEffect(() => {
    if (
      data?.selectedAction &&
      (!data?.selectedTitle || !data?.selectedEmoji) &&
      config?.buttons
    ) {
      const selectedButton = config.buttons.find(
        (button: AIButton) => button.type === data.selectedAction
      )

      if (selectedButton) {
        updateAttributes({
          data: {
            ...data,
            selectedTitle: selectedButton.label,
            selectedEmoji: selectedButton.emoji,
          },
        })
      }
    }
  }, [data, config, updateAttributes])

  const handleClick = useCallback(
    async (type: string) => {
      const selectedButton = config.buttons?.find(
        (button: AIButton) => button.type === type
      )

      setIsLoading(true)

      const newData = {
        selectedAction: type,
        selectedTitle: selectedButton?.label || type,
        selectedEmoji: selectedButton?.emoji || "🤖",
        content: null,
      }

      updateAttributes({ data: newData })

      try {
        const newContent = await config.onClick(type)
        const finalData = {
          content: newContent,
          selectedAction: type,
          selectedTitle: selectedButton?.label || type,
          selectedEmoji: selectedButton?.emoji || "🤖",
        }
        updateAttributes({ data: finalData })
      } catch (error) {
        console.error("AIBlock error:", error)
        const errorData = {
          selectedAction: type,
          selectedTitle: selectedButton?.label || type,
          selectedEmoji: selectedButton?.emoji || "🤖",
          content: null,
        }
        updateAttributes({ data: errorData })
      } finally {
        setIsLoading(false)
      }
    },
    [config, setIsLoading, updateAttributes]
  )

  const hasContent = Boolean(data?.content)
  const hasSelectedAction = Boolean(data?.selectedTitle || data?.selectedAction)

  if (!data || !config) return null

  // Don't render the block if there are no buttons available
  if (!config.buttons || config.buttons.length === 0) return null

  return (
    <NodeViewWrapper contentEditable={false}>
      <div className="mb-3">
        {isLoading ? (
          <F0AiBanner.Skeleton compact />
        ) : hasSelectedAction ? (
          <F0AiBanner
            title={`${displayEmoji} ${displayTitle}`}
            content={contentEditor?.getHTML() ?? ""}
            onClose={() => deleteNode()}
          />
        ) : (
          <div
            className={cn(
              "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg p-3",
              !hasContent &&
                !isLoading &&
                "bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F]"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <AIButtonsSection
              config={config}
              isLoading={isLoading}
              onButtonClick={handleClick}
            />
          </div>
        )}

        <NodeViewContent style={{ display: "none" }} />
      </div>
    </NodeViewWrapper>
  )
}

export const AIBlock = Node.create({
  name: "aiBlock",
  group: "block",
  atom: true,
  selectable: true,
  draggable: true,

  addOptions() {
    return {
      currentConfig: null,
    }
  },

  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (element) => {
          const dataAttr = element.getAttribute("data-ai-block")
          return dataAttr ? JSON.parse(dataAttr) : null
        },
        renderHTML: (attributes) => {
          if (!attributes.data) return {}
          return {
            "data-ai-block": JSON.stringify(attributes.data),
          }
        },
      },
      config: {
        default: null,
      },
      isCollapsed: {
        default: false,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "div[data-ai-block]",
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const data = node.attrs.data as AIBlockData
    const config = node.attrs.config as AIBlockConfig
    if (!data || !config) return ["div"]

    return [
      "div",
      {
        ...HTMLAttributes,
        class: "ai-block",
        "data-ai-block": JSON.stringify(data),
      },
      ["div", { class: "ai-block-content" }, `AI Block: ${config.title}`],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(AIBlockView)
  },

  addCommands() {
    return {
      insertAIBlock:
        (data: AIBlockData, config: AIBlockConfig) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { data, config },
          })
        },
    }
  },
})

export const AIBlockExtension = AIBlock
