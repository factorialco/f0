import { Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import React, { useState } from "react"

import {
  Pulse,
  pulseIcon,
  pulseIconColor,
} from "@/components/avatars/F0AvatarPulse"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"

interface MoodTrackerData {
  title: string
  averageMoodComment: string
  days: {
    day: string
    mood: Pulse
    comment: string
  }[]
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    moodTracker: {
      insertMoodTracker: (data: MoodTrackerData) => ReturnType
    }
  }
}

export const MoodTrackerView: React.FC<NodeViewProps> = ({
  node,
  deleteNode,
  updateAttributes,
}) => {
  const translations = useI18n()
  const [isOpen, setIsOpen] = useState<boolean>(node.attrs.isOpen ?? false)
  const data = node.attrs.data as MoodTrackerData

  // Use dynamic config from extension options instead of persisted config

  if (!data) return null

  const handleToggleCollapse = () => {
    const newState = !isOpen
    setIsOpen(newState)
    updateAttributes({ isOpen: newState })
  }

  // Generate dropdown items
  const getDropdownItems = [
    {
      label: translations.actions.delete,
      icon: Delete,
      critical: true,
      onClick: () => deleteNode(),
    },
  ]

  return (
    <NodeViewWrapper contentEditable={false}>
      <div
        className="editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-center justify-between gap-2">
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
            <F0Button
              onClick={handleToggleCollapse}
              variant="outline"
              hideLabel
              label={
                isOpen
                  ? translations.actions.collapse
                  : translations.actions.expand
              }
              icon={isOpen ? ChevronUp : ChevronDown}
              size="sm"
            />
            <Dropdown items={getDropdownItems} size="sm" />
          </div>
        </div>

        {isOpen && (
          <div className="text-f1-text-primary flex flex-col gap-2">
            {data.days.map((day, index) => (
              <div className="flex flex-row items-center gap-2" key={index}>
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
              </div>
            ))}
          </div>
        )}
      </div>
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
        (data: MoodTrackerData) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { data },
          })
        },
    }
  },
})

export const MoodTrackerExtension = MoodTracker
