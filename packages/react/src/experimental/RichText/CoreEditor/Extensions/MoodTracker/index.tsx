import { Button } from "@/components/Actions/Button"
import {
  Pulse,
  pulseIcon,
  pulseIconColor,
} from "@/components/avatars/F0AvatarPulse"
import { F0Icon } from "@/components/F0Icon"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react"

interface MoodTrackerData {
  title: string
  averageMoodComment: string
  days: {
    day: string
    mood: Pulse
    comment: string
  }[]
}

export interface MoodTrackerLabels {
  deleteBlock: string
  expand: string
  collapse: string
}

export interface MoodTrackerConfig {
  labels?: MoodTrackerLabels
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    moodTracker: {
      insertMoodTracker: (
        data: MoodTrackerData,
        config?: MoodTrackerConfig
      ) => ReturnType
    }
  }
}

export const MoodTrackerView: React.FC<NodeViewProps> = ({
  node,
  deleteNode,
  extension,
  updateAttributes,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(node.attrs.isOpen ?? false)
  const data = node.attrs.data as MoodTrackerData

  // Use dynamic config from extension options instead of persisted config
  const config =
    (extension.options.currentConfig as MoodTrackerConfig) ||
    (node.attrs.config as MoodTrackerConfig) ||
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
      <motion.div
        className="editor-mood-tracker my-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3"
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
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-3">
                <p className="text-f1-text-primary text-lg font-semibold">
                  {data.title}
                </p>
                <div className="flex flex-row items-center">
                  {data.days.map((day, index) => (
                    <div
                      key={index}
                      className="-ml-1.5 flex items-center justify-center rounded-full bg-f1-background"
                    >
                      <F0Icon
                        icon={pulseIcon[day.mood]}
                        size="lg"
                        color={pulseIconColor[day.mood]}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p>
                <span className="text-f1-text-primary text-md font-normal">
                  {data.averageMoodComment}
                </span>
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
                <div className="flex flex-col gap-2">
                  {data.days.map((day, index) => (
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
                      className="flex flex-row items-center gap-2"
                    >
                      <div className="flex items-center justify-center rounded-full">
                        <F0Icon
                          icon={pulseIcon[day.mood]}
                          size="lg"
                          color={pulseIconColor[day.mood]}
                        />
                      </div>
                      <p className="text-f1-text-primary text-md font-normal">
                        <span className="font-semibold">{day.day}:</span>{" "}
                        {day.comment || "-"}
                      </p>
                    </motion.div>
                  ))}
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

export const MoodTracker = Node.create({
  name: "moodTracker",

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
          const dataAttr = element.getAttribute("data-mood-tracker")
          return dataAttr ? JSON.parse(dataAttr) : null
        },
        renderHTML: (attributes) => {
          if (!attributes.data) return {}
          return {
            "data-mood-tracker": JSON.stringify(attributes.data),
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
        tag: "div[data-mood-tracker]",
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const data = node.attrs.data as MoodTrackerData
    if (!data) return ["div"]

    return [
      "div",
      {
        ...HTMLAttributes,
        class: "mood-tracker-block",
        "data-mood-tracker": JSON.stringify(data),
      },
      ["div", { class: "mood-tracker-content" }, `Mood Tracker: ${data.title}`],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(MoodTrackerView)
  },

  addCommands() {
    return {
      insertMoodTracker:
        (data: MoodTrackerData, config?: MoodTrackerConfig) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { data, config },
          })
        },
    }
  },
})

export const MoodTrackerExtension = MoodTracker
