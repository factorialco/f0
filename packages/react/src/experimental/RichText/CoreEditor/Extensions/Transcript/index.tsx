import { PersonAvatar } from "@/experimental/exports"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Button } from "@/factorial-one"
import { ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import { format } from "date-fns"
import { AnimatePresence, motion } from "motion/react"
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
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const data = node.attrs.data as TranscriptData

  // Use dynamic config from extension options instead of persisted config
  const config =
    (extension.options.currentConfig as TranscriptConfig) ||
    (node.attrs.config as TranscriptConfig) ||
    {}

  if (!data) return null

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen)
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
      return dateTimeStr
    }
  }

  return (
    <NodeViewWrapper contentEditable={false}>
      <motion.div
        className="editor-transcript my-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3"
        onClick={(e) => e.stopPropagation()}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-row items-center justify-between gap-2"
          layout
        >
          <div
            className="flex cursor-pointer flex-row items-center gap-2"
            onClick={handleToggleCollapse}
          >
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
            <Dropdown items={dropdownItems} size="sm" />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="content"
              initial={{
                height: 0,
                opacity: 0,
                scaleY: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                scaleY: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
                scaleY: 0,
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
              <motion.div
                className="text-f1-text-primary"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <div className="flex flex-col gap-4">
                  {data.messages.map((message, index) => {
                    const user = getUserById(message.userId)
                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: -10,
                          scale: 0.95,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className="flex flex-row gap-3"
                      >
                        {user?.imageUrl && (
                          <PersonAvatar
                            size="xsmall"
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
                          <p className="text-f1-text-secondary">
                            {message.text}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <NodeViewContent style={{ display: "none" }} />
    </NodeViewWrapper>
  )
}

export const Transcript = Node.create({
  name: "transcript",

  group: "block",

  atom: true,

  selectable: false,

  draggable: false,

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
