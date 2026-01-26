import { BookOpen, File, Placeholder, Question, Video } from "@/icons/app"

import {
  TOCItem,
  TOCItemAction,
} from "../../../experimental/Navigation/F0TableOfContent"

export const mockOtherActions: TOCItemAction[] = [
  {
    label: "Edit",
    onClick: () => {},
    icon: Placeholder,
  },
  {
    type: "separator",
  },
  {
    label: "Delete",
    onClick: () => {},
    icon: Placeholder,
  },
]

export const mockTOCData = (setActiveItem: (id: string) => void): TOCItem[] => [
  {
    id: "simple-item",
    label: "Simple Item",
    onClick: setActiveItem,
    icon: Placeholder,
  },
  {
    id: "item-with-actions",
    label: "Item with Actions",
    onClick: setActiveItem,
    icon: Placeholder,
    otherActions: mockOtherActions,
  },
  {
    id: "section-1",
    label: "Section with Children",
    onClick: setActiveItem,
    icon: Placeholder,
    otherActions: mockOtherActions,
    children: [
      {
        id: "child-1",
        label: "Child Item 1",
        onClick: setActiveItem,
        icon: Placeholder,
        otherActions: mockOtherActions,
      },
      {
        id: "child-2",
        label: "Child Item 2",
        onClick: setActiveItem,
        otherActions: mockOtherActions,
      },
      {
        id: "nested-section",
        label: "Nested Section",
        onClick: setActiveItem,
        children: [
          {
            id: "nested-child-1",
            label: "Nested Child 1",
            onClick: setActiveItem,
          },
          {
            id: "deep-section",
            label: "Deep Section (Level 3)",
            onClick: setActiveItem,
            children: [
              {
                id: "deepest-item",
                label: "Deepest Item (Level 4)",
                onClick: setActiveItem,
              },
            ],
          },
        ],
      },
    ],
  },
]

export const courseModulesData = (
  setActiveItem: (id: string) => void
): TOCItem[] => [
  {
    id: "mod-1",
    label: "Mod 1: Workplace Conflict",
    onClick: setActiveItem,
    icon: BookOpen,
    children: [
      {
        id: "mod-1-page-1",
        label: "Why Conflict Matters",
        onClick: setActiveItem,
        icon: File,
      },
      {
        id: "mod-1-quiz-1",
        label: "What Did You Learn So Far?",
        onClick: setActiveItem,
        icon: Question,
      },
      {
        id: "mod-1-video-1",
        label: "What Conflict in The Workplace Looks Like",
        onClick: setActiveItem,
        icon: Video,
      },
    ],
  },
  {
    id: "mod-2",
    label: "Module 2: Communication for Trust & Collaboration",
    onClick: setActiveItem,
    icon: BookOpen,
    children: [
      {
        id: "mod-2-page-1",
        label: "Why Communication Matters",
        onClick: setActiveItem,
        icon: File,
      },
      {
        id: "mod-2-quiz-1",
        label: "What Did You Learn So Far?",
        disabled: true,
        onClick: setActiveItem,
        icon: Question,
      },
    ],
  },
  {
    id: "mod-3",
    label: "Module 3: Mediation, Problem-Solving & Team Resilience",
    onClick: setActiveItem,
    disabled: true,
    icon: BookOpen,
    children: [
      {
        id: "mod-3-video-1",
        label: "New video",
        disabled: true,
        onClick: setActiveItem,
        icon: Video,
      },
      {
        id: "mod-3-page-1",
        label: "Why Mediation Matters",
        disabled: true,
        onClick: setActiveItem,
        icon: File,
      },
      {
        id: "mod-3-quiz-1",
        label: "What Did You Learn So Far?",
        disabled: true,
        onClick: setActiveItem,
        icon: Question,
      },
    ],
  },
]
