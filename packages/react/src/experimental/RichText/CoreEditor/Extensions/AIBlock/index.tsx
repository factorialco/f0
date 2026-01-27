import { generateHTML, JSONContent, Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import { FC, useCallback, useEffect, useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { F0AiBanner } from "@/experimental/Banners/F0AiBanner"
import {
  ColorExtension,
  CustomTaskExtension,
  DetailsContentExtension,
  DetailsExtension,
  DetailsSummaryExtension,
  HighlightExtension,
  LinkExtension,
  StarterKitExtension,
  TaskListExtension,
  TextAlignExtension,
  TextStyleExtension,
  TypographyExtension,
  UnderlineExtension,
} from "@/experimental/RichText/CoreEditor"
import { Skeleton } from "@/ui/skeleton"

export type AIButton = {
  type: string
  emoji: string
  label: string
  icon: IconType
  editable?: boolean
}

export interface AIBlockConfig {
  buttons?: AIButton[]
  onClick: (type: string) => Promise<JSONContent | null>
  title: string
}

interface AIBlockData {
  content?: JSONContent | null
  selectedAction?: string
  selectedTitle?: string
  selectedEmoji?: string
  isEditable?: boolean
  shouldExecute?: boolean
}

type DisplayInfo = {
  title: string
  emoji?: string
}

type ActionHandlerResult = {
  isLoading: boolean
  handleClick: (type: string) => Promise<void>
}

type UpdateAttributesFunction = (attrs: { data: AIBlockData }) => void

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    aiBlock: {
      insertAIBlock: (data: AIBlockData, config: AIBlockConfig) => ReturnType
      executeAIAction: (actionType: string, config: AIBlockConfig) => ReturnType
    }
  }
}

const useJSONToHTML = (data: AIBlockData | undefined): string => {
  if (!data?.content) return ""
  try {
    return generateHTML(data.content, [
      StarterKitExtension,
      UnderlineExtension,
      TextStyleExtension,
      ColorExtension,
      TypographyExtension,
      TaskListExtension,
      CustomTaskExtension,
      HighlightExtension,
      TextAlignExtension,
      LinkExtension,
      DetailsExtension,
      DetailsSummaryExtension,
      DetailsContentExtension,
    ])
  } catch {
    return ""
  }
}

const useDisplayInfo = (
  config: AIBlockConfig,
  data?: AIBlockData
): DisplayInfo => {
  return useMemo(() => {
    if (data?.selectedTitle || data?.selectedEmoji) {
      return {
        title: data.selectedTitle || config.title,
        emoji: data.selectedEmoji,
      }
    }

    const selectedButton = config.buttons?.find(
      (button) => button.type === data?.selectedAction
    )

    return selectedButton
      ? { title: selectedButton.label, emoji: selectedButton.emoji }
      : { title: config.title }
  }, [data, config])
}

const useAIActionHandler = (
  config: AIBlockConfig,
  updateAttributes: UpdateAttributesFunction
): ActionHandlerResult => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(
    async (type: string): Promise<void> => {
      const selectedButton = config.buttons?.find(
        (button) => button.type === type
      )
      const buttonData: AIBlockData = {
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
    [config, updateAttributes]
  )

  return { isLoading, handleClick }
}

const useButtonMetadataPersistence = (
  config: AIBlockConfig,
  updateAttributes: UpdateAttributesFunction,
  data?: AIBlockData
): void => {
  useEffect(() => {
    if (!data?.selectedAction || !config?.buttons) return

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
  }, [data, config, updateAttributes])
}

const useAutoExecuteAction = (
  data?: AIBlockData,
  handleClick?: (type: string) => Promise<void>,
  updateAttributes?: UpdateAttributesFunction
) => {
  useEffect(() => {
    if (
      data?.shouldExecute &&
      data?.selectedAction &&
      handleClick &&
      updateAttributes
    ) {
      updateAttributes({ data: { ...data, shouldExecute: false } })
      handleClick(data.selectedAction)
    }
  }, [handleClick, updateAttributes, data])
}

const useEditableContentIntegration = (
  editor: NodeViewProps["editor"],
  deleteNode: () => void,
  getPos?: () => number,
  data?: AIBlockData
) => {
  useEffect(() => {
    if (!data?.content || !data?.isEditable || !editor || !getPos) return

    const pos = getPos()

    if (pos === undefined) return

    deleteNode()
    if (data.content) {
      editor
        .chain()
        .focus()
        .setTextSelection(pos)
        .insertContent(data.content)
        .run()
    }
  }, [data, editor, getPos, deleteNode])
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

const AIBlockLoadingSkeleton = ({ isEditable }: { isEditable?: boolean }) => {
  if (isEditable) {
    return (
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-1/2 rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-3/4 rounded-md" />
        <Skeleton className="h-4 w-1/3 rounded-md" />
      </div>
    )
  }

  return <F0AiBanner.Skeleton compact />
}

export const AIBlockView: FC<NodeViewProps> = ({
  node,
  updateAttributes,
  deleteNode,
  extension,
  editor,
  getPos,
}) => {
  const data = node.attrs.data as AIBlockData
  const config =
    (extension.options.currentConfig as AIBlockConfig) ||
    (node.attrs.config as AIBlockConfig)

  const { title: displayTitle } = useDisplayInfo(config, data)
  const { isLoading: actionLoading, handleClick } = useAIActionHandler(
    config,
    updateAttributes
  )
  const autoDetectedLoading = Boolean(data?.selectedAction && !data?.content)
  const isLoading = actionLoading || autoDetectedLoading
  const htmlContent = useJSONToHTML(data)

  // Handle side effects
  useEditableContentIntegration(editor, deleteNode, getPos, data)
  useButtonMetadataPersistence(config, updateAttributes, data)
  useAutoExecuteAction(data, handleClick, updateAttributes)

  // Early return for invalid states (after hooks)
  if (!data || !config || !config.buttons?.length) return null

  // Compute display states
  const hasContent = Boolean(data?.content)
  const hasSelectedAction = Boolean(data?.selectedTitle || data?.selectedAction)
  const shouldShowBanner = hasSelectedAction && hasContent && !data?.isEditable

  const renderContent = () => {
    if (isLoading) {
      return <AIBlockLoadingSkeleton isEditable={data?.isEditable} />
    }

    if (shouldShowBanner) {
      return (
        <F0AiBanner
          title={displayTitle}
          content={htmlContent}
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
      executeAIAction:
        (actionType: string, config: AIBlockConfig) =>
        ({ commands }) => {
          const button = config.buttons?.find((btn) => btn.type === actionType)
          if (!button) return false
          return commands.insertContent([
            {
              type: this.name,
              attrs: {
                data: {
                  content: null,
                  selectedAction: actionType,
                  selectedTitle: button.label,
                  selectedEmoji: button.emoji,
                  isEditable: button.editable ?? false,
                  shouldExecute: true,
                },
                config,
              },
            },
            {
              type: "paragraph",
            },
          ])
        },
    }
  },
})

export const AIBlockExtension = AIBlock
