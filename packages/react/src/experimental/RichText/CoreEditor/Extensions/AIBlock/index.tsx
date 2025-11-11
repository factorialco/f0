import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { F0AiBanner } from "@/experimental/Banners/F0AiBanner"
import { LiveCompanionLabels } from "@/experimental/RichText/CoreEditor/Extensions/LiveCompanion"
import { MoodTrackerLabels } from "@/experimental/RichText/CoreEditor/Extensions/MoodTracker"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { TranscriptLabels } from "@/experimental/RichText/CoreEditor/Extensions/Transcript"
import { Skeleton } from "@/ui/skeleton"
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
  editable?: boolean
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
  toolbarLabels: Record<string, string>
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
  isEditable?: boolean
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
  const extensions = useMemo(
    () =>
      createAIBlockEditorExtensions(
        config.placeholder || "",
        config.toolbarLabels,
        config.slashCommandGroupLabels,
        config.moodTrackerLabels,
        config.liveCompanionLabels,
        config.transcriptLabels
      ),
    [config]
  )

  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleUpdate = useCallback(
    ({ editor }: { editor: Editor }) => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current)
      }

      updateTimeoutRef.current = setTimeout(() => {
        const { from, to } = editor.state.selection
        const isEmpty = editor.isEmpty

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
          updateAttributes({
            data: {
              content: editor.getJSON(),
              selectedAction: data?.selectedAction,
              selectedTitle: data?.selectedTitle,
              selectedEmoji: data?.selectedEmoji,
            },
          })
        }

        // Restore selection after update
        setTimeout(() => {
          if (editor?.isFocused) {
            editor.commands.setTextSelection({ from, to })
          }
        }, 10)
      }, 300)
    },
    [data, isLoading, updateAttributes]
  )

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
      onUpdate: handleUpdate,
    },
    [blockId]
  )

  // Handle content updates
  useEffect(() => {
    if (editor && data?.content) {
      const { from, to } = editor.state.selection
      const hadSelection = from !== to

      editor.commands.setContent(data.content)

      if (data?.isEditable) {
        setTimeout(() => editor.commands.focus(), 10)
      }

      if (hadSelection && editor.isFocused) {
        setTimeout(() => editor.commands.setTextSelection({ from, to }), 10)
      }
    }
  }, [editor, data?.content, data?.isEditable])

  // Cleanup
  useEffect(
    () => () => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current)
      }
    },
    []
  )

  return editor
}

const useAIBlockState = (data: AIBlockData | undefined) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const hasActionWithoutContent = data?.selectedAction && !data?.content
    const hasContentWhileLoading = data?.content && isLoading

    if (hasActionWithoutContent && !isLoading) {
      setIsLoading(true)
    } else if (hasContentWhileLoading) {
      setIsLoading(false)
    }
  }, [data?.selectedAction, data?.content, isLoading])

  return { isLoading, setIsLoading }
}

const useDisplayInfo = (
  data: AIBlockData | undefined,
  config: AIBlockConfig
) => {
  return useMemo(() => {
    // Use saved data if available
    if (data?.selectedTitle || data?.selectedEmoji) {
      return {
        title: data.selectedTitle || config.title,
        emoji: data.selectedEmoji,
      }
    }

    // Find button info from selected action
    const selectedButton = data?.selectedAction
      ? config.buttons?.find((button) => button.type === data.selectedAction)
      : null

    return selectedButton
      ? { title: selectedButton.label, emoji: selectedButton.emoji }
      : { title: config.title }
  }, [data?.selectedTitle, data?.selectedEmoji, data?.selectedAction, config])
}

const AIButtonsSection = ({
  config,
  isLoading,
  onButtonClick,
}: {
  config: AIBlockConfig
  isLoading: boolean
  onButtonClick: (type: string) => void
}) => (
  <div className="flex flex-col gap-2">
    {config.title && (
      <div className="text-f1-foreground-secondary">{config.title}</div>
    )}
    <div className="relative flex flex-row flex-wrap items-center gap-2">
      {config.buttons?.map((button, index) => (
        <F0Button
          key={index}
          onClick={() => onButtonClick(button.type)}
          variant="outline"
          icon={button.icon}
          label={button.label}
          disabled={isLoading}
        />
      ))}
    </div>
  </div>
)

export const AIBlockView: React.FC<NodeViewProps> = ({
  node,
  updateAttributes,
  deleteNode,
  extension,
  editor: mainEditor,
  getPos,
}) => {
  const data = node.attrs.data as AIBlockData
  const config =
    (extension.options.currentConfig as AIBlockConfigWithLabels) ||
    (node.attrs.config as AIBlockConfigWithLabels)

  const blockId = useRef(Math.random().toString(36).substr(2, 9)).current
  const { isLoading, setIsLoading } = useAIBlockState(data)
  const { title: displayTitle, emoji: displayEmoji } = useDisplayInfo(
    data,
    config
  )
  const contentEditor = useContentEditor(
    data,
    isLoading,
    blockId,
    updateAttributes,
    config
  )

  // Handle pushing editable content to main editor
  useEffect(() => {
    if (data?.content && data?.isEditable && mainEditor && getPos) {
      const pos = getPos()
      if (pos !== undefined) {
        deleteNode()
        setTimeout(() => {
          if (data.content) {
            mainEditor
              .chain()
              .focus()
              .setTextSelection(pos)
              .insertContent(data.content)
              .run()
          }
        }, 10)
      }
    }
  }, [
    data?.content,
    data?.isEditable,
    mainEditor,
    getPos,
    node.nodeSize,
    deleteNode,
  ])

  // Ensure button metadata is persisted for copy/paste
  useEffect(() => {
    if (data?.selectedAction && config?.buttons) {
      const needsUpdate =
        !data?.selectedTitle ||
        !data?.selectedEmoji ||
        data?.isEditable === undefined

      if (needsUpdate) {
        const selectedButton = config.buttons.find(
          (button) => button.type === data.selectedAction
        )

        if (selectedButton) {
          updateAttributes({
            data: {
              ...data,
              selectedTitle: selectedButton.label,
              selectedEmoji: selectedButton.emoji,
              isEditable: selectedButton.editable ?? false,
            },
          })
        }
      }
    }
  }, [data, config, updateAttributes])

  const handleClick = useCallback(
    async (type: string) => {
      const selectedButton = config.buttons?.find(
        (button) => button.type === type
      )
      const buttonData = {
        selectedAction: type,
        selectedTitle: selectedButton?.label || type,
        selectedEmoji: selectedButton?.emoji || "🤖",
        isEditable: selectedButton?.editable ?? false,
      }

      setIsLoading(true)
      updateAttributes({ data: { ...buttonData, content: null } })

      try {
        const content = await config.onClick(type)
        updateAttributes({ data: { ...buttonData, content } })
      } catch (error) {
        console.error("AIBlock error:", error)
        updateAttributes({ data: { ...buttonData, content: null } })
      } finally {
        setIsLoading(false)
      }
    },
    [config, setIsLoading, updateAttributes]
  )

  // Early returns for invalid states
  if (!data || !config || !config.buttons?.length) return null

  const hasContent = Boolean(data?.content)
  const hasSelectedAction = Boolean(data?.selectedTitle || data?.selectedAction)
  const shouldShowBanner = hasSelectedAction && hasContent && !data?.isEditable

  const renderContent = () => {
    if (isLoading) {
      return data?.isEditable ? (
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-1/3 rounded-md" />
        </div>
      ) : (
        <F0AiBanner.Skeleton compact />
      )
    }

    if (shouldShowBanner) {
      return (
        <F0AiBanner
          title={
            displayEmoji ? `${displayEmoji} ${displayTitle}` : displayTitle
          }
          content={contentEditor?.getHTML() ?? ""}
          onClose={() => deleteNode()}
        />
      )
    }

    return (
      <div
        className="editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <AIButtonsSection
          config={config}
          isLoading={isLoading}
          onButtonClick={handleClick}
        />
      </div>
    )
  }

  return (
    <NodeViewWrapper contentEditable={false}>
      <div className="mb-3">
        {renderContent()}
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
