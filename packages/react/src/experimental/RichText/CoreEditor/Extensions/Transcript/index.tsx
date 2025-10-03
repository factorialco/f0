import { F0Button } from "@/components/F0Button"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import { format } from "date-fns"
import React, { useState } from "react"

export interface User {
  id: string
  fullname: string
  imageUrl: string
}

export interface Message {
  userId: string
  text: string
  dateTime: string
}

export interface TranscriptData {
  title: string
  messages: Message[]
  users: User[]
}

export interface TranscriptLabels {
  deleteBlock: string
  expand: string
  collapse: string
  messagesCount: string
  messagesCountSingular: string
}

export interface TranscriptConfig {
  labels?: TranscriptLabels
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    transcript: {
      insertTranscript: (
        data: TranscriptData,
        config?: TranscriptConfig
      ) => ReturnType
    }
  }
}

export const TranscriptView: React.FC<NodeViewProps> = ({
  node,
  deleteNode,
  extension,
  updateAttributes,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(node.attrs.isOpen ?? false)
  const data = node.attrs.data as TranscriptData

  // Use dynamic config from extension options instead of persisted config
  const config =
    (extension.options.currentConfig as TranscriptConfig) ||
    (node.attrs.config as TranscriptConfig) ||
    {}

  if (!data) return null

  const handleToggleCollapse = () => {
    const newState = !isOpen
    setIsOpen(newState)
    updateAttributes({ isOpen: newState })
  }

  // Generate dropdown items
  const dropdownItems = [
    {
      label: config.labels?.deleteBlock || "Delete",
      icon: Delete,
      critical: true,
      onClick: () => deleteNode(),
    },
  ]

  // Find user by ID
  const getUserById = (userId: string): User | undefined => {
    return data.users.find((user) => user.id === userId)
  }

  // Format date for display
  const formatDateTime = (dateTimeStr: string): string => {
    try {
      const date = new Date(dateTimeStr)
      return format(date, "HH:mm")
    } catch (e) {
      console.error(e)
      return dateTimeStr
    }
  }

  return (
    <NodeViewWrapper contentEditable={false}>
      <div
        className="editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3"
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
                {data.messages.length}{" "}
                {data.messages.length === 1
                  ? config.labels?.messagesCountSingular || ""
                  : config.labels?.messagesCount || ""}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            {/* Toggle button */}
            <F0Button
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
            <Dropdown items={dropdownItems} size="sm" />
          </div>
        </div>

        {isOpen && (
          <div className="scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto">
            {data.messages.map((message, index) => {
              const user = getUserById(message.userId)
              return (
                <div key={index} className="flex flex-row gap-3">
                  {user?.imageUrl && (
                    <F0AvatarPerson
                      size="xs"
                      src={user.imageUrl}
                      firstName={user.fullname}
                      lastName={""}
                    />
                  )}
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-f1-text-primary font-medium">
                        {user?.fullname || "Unknown User"}
                      </span>
                      <span className="text-f1-text-tertiary text-xs">
                        {formatDateTime(message.dateTime)}
                      </span>
                    </div>
                    <p className="text-f1-text-secondary">{message.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <NodeViewContent style={{ display: "none" }} />
    </NodeViewWrapper>
  )
}

export const Transcript = Node.create({
  name: "transcript",

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
          const dataAttr = element.getAttribute("data-transcript")
          return dataAttr ? JSON.parse(dataAttr) : null
        },
        renderHTML: (attributes) => {
          if (!attributes.data) return {}
          return {
            "data-transcript": JSON.stringify(attributes.data),
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
        tag: "div[data-transcript]",
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const data = node.attrs.data as TranscriptData
    if (!data) return ["div"]

    return [
      "div",
      {
        ...HTMLAttributes,
        class: "transcript-block",
        "data-transcript": JSON.stringify(data),
      },
      ["div", { class: "transcript-content" }, `Transcript: ${data.title}`],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(TranscriptView)
  },

  addCommands() {
    return {
      insertTranscript:
        (data: TranscriptData, config?: TranscriptConfig) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { data, config },
          })
        },
    }
  },
})

export const TranscriptExtension = Transcript
