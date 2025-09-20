import { Button } from "@/components/Actions/Button"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import React, { useState } from "react"

interface UserComment {
  user: string
  comment: string
}

interface LiveCompanionData {
  title: string
  topics: {
    title: string
    comments: UserComment[]
  }[]
}

export interface LiveCompanionLabels {
  deleteBlock: string
  expand: string
  collapse: string
  oneTopicWithCommentary: string
  multipleTopicsWithCommentary: string
}

export interface LiveCompanionConfig {
  labels?: LiveCompanionLabels
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    liveCompanion: {
      insertLiveCompanion: (
        data: LiveCompanionData,
        config?: LiveCompanionConfig
      ) => ReturnType
    }
  }
}

export const LiveCompanionView: React.FC<NodeViewProps> = ({
  node,
  deleteNode,
  extension,
  updateAttributes,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(node.attrs.isOpen ?? false)
  const data = node.attrs.data as LiveCompanionData

  // Use dynamic config from extension options instead of persisted config
  const config =
    (extension.options.currentConfig as LiveCompanionConfig) ||
    (node.attrs.config as LiveCompanionConfig) ||
    {}

  if (!data) return null

  const handleToggleCollapse = () => {
    const newState = !isOpen
    setIsOpen(newState)
    updateAttributes({ isOpen: newState })
  }

  // Generate dropdown items
  const getDropdownItems = [
    {
      label: config.labels?.deleteBlock || "Delete",
      icon: Delete,
      critical: true,
      onClick: () => deleteNode(),
    },
  ]

  return (
    <NodeViewWrapper contentEditable={false}>
      <div
        className="editor-live-companion mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-3">
                <p className="text-f1-text-primary text-lg font-semibold">
                  {data.title}
                </p>
              </div>
              <p className="text-f1-text-secondary text-sm">
                {data.topics.length}{" "}
                {data.topics.length === 1
                  ? config.labels?.oneTopicWithCommentary || ""
                  : config.labels?.multipleTopicsWithCommentary || ""}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            {/* Toggle button */}
            <Button
              onClick={handleToggleCollapse}
              variant="outline"
              hideLabel
              label={
                isOpen
                  ? config.labels?.collapse || "Collapse"
                  : config.labels?.expand || "Expand"
              }
              icon={isOpen ? ChevronUp : ChevronDown}
              size="sm"
            />
            <Dropdown items={getDropdownItems} size="sm" />
          </div>
        </div>

        {isOpen && (
          <div className="text-f1-text-primary flex flex-col gap-4">
            {data.topics.map((topic, topicIndex) => (
              <div key={topicIndex} className="flex flex-col">
                <h3 className="text-f1-text-primary text-md font-semibold">
                  {topic.title}
                </h3>
                <div className="ml-4 flex flex-col gap-2">
                  {topic.comments.map((comment, commentIndex) => (
                    <div
                      key={commentIndex}
                      className="flex flex-row items-start gap-2"
                    >
                      <p className="text-f1-text-primary text-md">
                        <span className="text-f1-text-secondary font-medium">
                          {comment.user}:
                        </span>{" "}
                        <span className="text-f1-text-secondary font-normal italic">
                          {comment.comment}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <NodeViewContent style={{ display: "none" }} />
    </NodeViewWrapper>
  )
}

export const LiveCompanion = Node.create({
  name: "liveCompanion",

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
          const dataAttr = element.getAttribute("data-live-companion")
          return dataAttr ? JSON.parse(dataAttr) : null
        },
        renderHTML: (attributes) => {
          if (!attributes.data) return {}
          return {
            "data-live-companion": JSON.stringify(attributes.data),
          }
        },
      },
      config: {
        default: null,
      },
      isOpen: {
        default: false,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "div[data-live-companion]",
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const data = node.attrs.data as LiveCompanionData
    if (!data) return ["div"]

    return [
      "div",
      {
        ...HTMLAttributes,
        class: "live-companion-block",
        "data-live-companion": JSON.stringify(data),
      },
      [
        "div",
        { class: "live-companion-content" },
        `Live Companion: ${data.title}`,
      ],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(LiveCompanionView)
  },

  addCommands() {
    return {
      insertLiveCompanion:
        (data: LiveCompanionData, config?: LiveCompanionConfig) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { data, config },
          })
        },
    }
  },
})

export const LiveCompanionExtension = LiveCompanion
