import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { LiveCompanionLabels } from "@/experimental/RichText/CoreEditor/Extensions/LiveCompanion"
import { MoodTrackerLabels } from "@/experimental/RichText/CoreEditor/Extensions/MoodTracker"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { TranscriptLabels } from "@/experimental/RichText/CoreEditor/Extensions/Transcript"
import { ToolbarLabels } from "@/experimental/RichText/CoreEditor/Toolbar/types"
import { Ai, ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { cn } from "@/lib/utils"
import { JSONContent, Node } from "@tiptap/core"
import {
  Editor,
  EditorContent,
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
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

const TextSkeleton = () => (
  <div className="space-y-3">
    <div className="flex space-x-2">
      <div className="h-4 w-16 animate-pulse rounded bg-f1-background-secondary" />
      <div className="h-4 w-32 animate-pulse rounded bg-f1-background-secondary" />
    </div>
    <div className="space-y-2">
      <div className="h-4 w-full animate-pulse rounded bg-f1-background-secondary" />
      <div className="h-4 w-4/5 animate-pulse rounded bg-f1-background-secondary" />
      <div className="h-4 w-3/4 animate-pulse rounded bg-f1-background-secondary" />
      <div className="h-4 w-full animate-pulse rounded bg-f1-background-secondary" />
      <div className="h-4 w-1/2 animate-pulse rounded bg-f1-background-secondary" />
    </div>
  </div>
)

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

interface AIBlockHeaderProps {
  displayTitle: string
  displayEmoji?: string
  isLoading: boolean
  canCollapse: boolean
  isCollapsed: boolean
  onToggleCollapse: () => void
  onDropdownAction: (items: DropdownItem[]) => DropdownItem[]
}

const AIBlockHeader: React.FC<AIBlockHeaderProps> = ({
  displayTitle,
  displayEmoji,
  isLoading,
  canCollapse,
  isCollapsed,
  onToggleCollapse,
  onDropdownAction,
}) => (
  <motion.div
    className="flex flex-row items-center justify-between gap-2"
    layout
  >
    <div className="flex flex-row items-center gap-2">
      <motion.span
        className="flex items-center text-lg"
        animate={{
          scale: isLoading ? [1, 1.1, 1] : 1,
          rotate: isLoading ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          duration: isLoading ? 2 : 0.3,
          repeat: isLoading ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {displayEmoji ?? <F0Icon icon={Ai} />}
      </motion.span>
      <p className="text-f1-text-primary text-lg font-semibold">
        {displayTitle}
      </p>
    </div>

    <div className="flex flex-row items-center gap-1">
      {canCollapse && (
        <F0Button
          onClick={onToggleCollapse}
          variant="outline"
          size="sm"
          hideLabel
          label={isCollapsed ? "Expand" : "Collapse"}
          icon={isCollapsed ? ChevronDown : ChevronUp}
        />
      )}
      <Dropdown items={onDropdownAction([])} size="sm" />
    </div>
  </motion.div>
)

interface AIButtonsSectionProps {
  config: AIBlockConfig
  isLoading: boolean
  onButtonClick: (type: string) => void
  shouldShow: boolean
}

const AIButtonsSection: React.FC<AIButtonsSectionProps> = ({
  config,
  isLoading,
  onButtonClick,
  shouldShow,
}) => (
  <AnimatePresence>
    {shouldShow && (
      <motion.div
        className="relative flex flex-row flex-wrap items-center gap-2"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {config.buttons?.map((button: AIButton, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <F0Button
              onClick={() => onButtonClick(button.type)}
              variant="outline"
              size="md"
              emoji={button.emoji}
              label={button.label}
              disabled={isLoading}
            />
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
)

interface AIContentSectionProps {
  isLoading: boolean
  hasContent: boolean
  isCollapsed: boolean
  contentEditor: Editor | null
}

const AIContentSection: React.FC<AIContentSectionProps> = ({
  isLoading,
  hasContent,
  isCollapsed,
  contentEditor,
}) => (
  <AnimatePresence mode="wait">
    {isLoading && (
      <motion.div
        key="loading"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <TextSkeleton />
      </motion.div>
    )}

    {hasContent && !isLoading && !isCollapsed && contentEditor && (
      <motion.div
        key="content"
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: "auto",
          opacity: 1,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          opacity: { duration: 0.2 },
        }}
        style={{
          transformOrigin: "top",
          overflow: "hidden",
        }}
      >
        <div className="text-f1-text-primary">
          <EditorContent editor={contentEditor} />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
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
  const { isLoading, setIsLoading, isCollapsed, setIsCollapsed } =
    useAIBlockState(data, node.attrs.isCollapsed ?? false)
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

  const handleReset = useCallback(() => {
    updateAttributes({
      data: {
        content: null,
        selectedAction: undefined,
        selectedTitle: undefined,
        selectedEmoji: undefined,
      },
      isCollapsed: false,
    })
    setIsLoading(false)
    setIsCollapsed(false)
  }, [updateAttributes, setIsLoading, setIsCollapsed])

  const handleToggleCollapse = useCallback(() => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    updateAttributes({ isCollapsed: newState })
  }, [isCollapsed, setIsCollapsed, updateAttributes])

  const getDropdownItems = useCallback((): DropdownItem[] => {
    const items: DropdownItem[] = []

    if (config && (data?.selectedTitle || data?.selectedAction) && !isLoading) {
      items.push({
        label: config.labels?.reset || "Reset",
        description: config.labels?.resetDescription || "Reset the block",
        onClick: handleReset,
      })
    }

    if (items.length > 0) {
      items.push({
        type: "separator" as const,
      })
    }

    items.push({
      label: config?.labels?.deleteBlock || "Delete",
      icon: Delete,
      critical: true,
      onClick: () => deleteNode(),
    })

    return items
  }, [
    config,
    data?.selectedTitle,
    data?.selectedAction,
    isLoading,
    handleReset,
    deleteNode,
  ])

  const hasContent = Boolean(data?.content)
  const hasSelectedAction = Boolean(data?.selectedTitle || data?.selectedAction)
  const canCollapse = hasSelectedAction && hasContent && !isLoading
  const shouldShowButtons = !isLoading && !hasSelectedAction && !hasContent

  if (!data || !config) return null

  // Don't render the block if there are no buttons available
  if (!config.buttons || config.buttons.length === 0) return null

  return (
    <NodeViewWrapper contentEditable={false}>
      <motion.div
        className={cn(
          "editor-ai-block my-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
          !hasContent &&
            !isLoading &&
            "bg-gradient-to-t from-f1-background to-[#efeafa]"
        )}
        onClick={(e) => e.stopPropagation()}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <AIBlockHeader
          displayTitle={displayTitle}
          displayEmoji={displayEmoji}
          isLoading={isLoading}
          canCollapse={canCollapse}
          isCollapsed={isCollapsed}
          onToggleCollapse={handleToggleCollapse}
          onDropdownAction={getDropdownItems}
        />

        <AIButtonsSection
          config={config}
          isLoading={isLoading}
          onButtonClick={handleClick}
          shouldShow={shouldShowButtons}
        />

        <AIContentSection
          isLoading={isLoading}
          hasContent={hasContent}
          isCollapsed={isCollapsed}
          contentEditor={contentEditor}
        />
      </motion.div>
      <NodeViewContent style={{ display: "none" }} />
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
