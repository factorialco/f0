import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"

import { SurveyFormBuilder } from "."
import { mockDatasets } from "../../__stories__/mocks"
import { SurveyFormBuilderElement } from "../types"

const meta: Meta<typeof SurveyFormBuilder> = {
  title: "Surveys/SurveyFormBuilder",
  component: SurveyFormBuilder,
  tags: ["autodocs"],
  render: (args) => {
    const [elements, setElements] = useState<SurveyFormBuilderElement[]>(
      args.elements
    )

    return (
      <SurveyFormBuilder {...args} elements={elements} onChange={setElements} />
    )
  },
  decorators: [
    (Story) => (
      <div className="max-w-[1400px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SurveyFormBuilder>

export const Default: Story = {
  args: {
    datasets: mockDatasets,
    elements: [
      {
        type: "question",
        question: {
          id: "question-1",
          title: "Question 1",
          type: "text" as const,
        },
      },
      {
        type: "section",
        section: {
          id: "section-1",
          title: "Company-wide questions",
          description:
            "These questions are predefined and can't be edited, moved, or removed.",
          locked: true,
          questions: [
            {
              id: "question-2",
              title: "Question 1",
              type: "text" as const,
            },
            {
              id: "question-3",
              title: "Question 2",
              type: "select" as const,
              value: "option-1",
              options: [
                { value: "option-1", label: "Option 1" },
                { value: "option-2", label: "Option 2" },
                { value: "option-3", label: "Option 3" },
                { value: "option-4", label: "Option 4" },
              ],
            },
            {
              id: "question-4",
              title: "Select your reviewer",
              type: "dropdown-single" as const,
              datasetKey: "employees",
            },
          ],
        },
      },
    ],
  },
}

export const Empty: Story = {
  args: {
    elements: [],
  },
}

export const ApplyingChanges: Story = {
  args: {
    ...Default.args,
    applyingChanges: true,
  },
}

export const WithQuestionWithDuplicateOptions: Story = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
  args: {
    elements: [
      {
        type: "question",
        question: {
          id: "question-1",
          title: "Question 1",
          type: "select" as const,
          options: [
            { value: "option-1", label: "Option 1" },
            { value: "option-1", label: "Option 1" },
          ],
        },
      },
    ],
  },
}

export const WithMultipleSections: Story = {
  args: {
    datasets: mockDatasets,
    elements: [
      {
        type: "question",
        question: {
          id: "q-standalone-1",
          title: "What is your full name?",
          type: "text" as const,
          required: true,
        },
      },
      {
        type: "question",
        question: {
          id: "q-standalone-2",
          title: "When did you join the company?",
          type: "date" as const,
        },
      },
      {
        type: "section",
        section: {
          id: "section-performance",
          title: "Performance Evaluation",
          description:
            "This section evaluates overall job performance and contribution to the team.",
          questions: [
            {
              id: "q-perf-1",
              title:
                "How would you rate your overall performance this quarter?",
              type: "rating" as const,
              options: [
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ],
              required: true,
            },
            {
              id: "q-perf-2",
              title: "What were your main achievements this quarter?",
              type: "longText" as const,
              required: true,
            },
            {
              id: "q-perf-3",
              title: "Which department are you in?",
              type: "select" as const,
              options: [
                { value: "engineering", label: "Engineering" },
                { value: "design", label: "Design" },
                { value: "product", label: "Product" },
                { value: "marketing", label: "Marketing" },
                { value: "sales", label: "Sales" },
                { value: "hr", label: "Human Resources" },
              ],
            },
            {
              id: "q-perf-4",
              title: "Select all skills you have improved",
              type: "multi-select" as const,
              options: [
                { value: "communication", label: "Communication" },
                { value: "leadership", label: "Leadership" },
                { value: "technical", label: "Technical skills" },
                { value: "time-management", label: "Time management" },
                { value: "problem-solving", label: "Problem solving" },
              ],
            },
            {
              id: "q-perf-5",
              title: "How many projects did you complete?",
              type: "numeric" as const,
              required: true,
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          id: "section-growth",
          title: "Growth & Development",
          description:
            "Questions about career growth, learning goals, and professional development.",
          questions: [
            {
              id: "q-growth-1",
              title: "What is your primary career goal for next year?",
              type: "dropdown-single" as const,
              datasetKey: "employees",
            },
            {
              id: "q-growth-dataset-single",
              title: "Who is your manager?",
              type: "dropdown-single" as const,
              datasetKey: "employees",
            },
            {
              id: "q-growth-dataset-multi",
              title: "Who did you collaborate with?",
              type: "dropdown-multi" as const,
              datasetKey: "employees",
            },
            {
              id: "q-growth-2",
              title:
                "Link to your personal development plan or learning resource",
              type: "link" as const,
            },
            {
              id: "q-growth-3",
              title:
                "Rate how supported you feel in your professional development",
              type: "rating" as const,
              options: [
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ],
              required: true,
            },
            {
              id: "q-growth-4",
              title: "Describe any additional feedback or comments",
              type: "text" as const,
            },
            {
              id: "q-growth-5",
              title: "When do you expect to achieve your next milestone?",
              type: "date" as const,
            },
          ],
        },
      },
    ],
  },
}

export const WithHiddenActions: Story = {
  args: {
    datasets: mockDatasets,
    elements: [
      {
        type: "question",
        question: {
          id: "q-free-text",
          title: "Free text question (full menu)",
          description:
            "No hiddenActions: the actions menu shows every entry available for this question type (Required, Question type, Duplicate, Delete).",
          type: "text" as const,
        },
      },
      {
        type: "question",
        question: {
          id: "q-locked-dataset",
          title: "Vendor (fully locked menu)",
          description:
            "All actions hidden via hiddenActions → the ⋯ trigger is not rendered.",
          type: "dropdown-single" as const,
          datasetKey: "employees",
          required: true,
          hiddenActions: [
            "required",
            "multiSelect",
            "allowCreate",
            "questionType",
            "duplicate",
            "delete",
          ],
        },
      },
      {
        type: "question",
        question: {
          id: "q-partial-hide",
          title: "Currency (only Required is editable)",
          description:
            "Only `required` stays visible; Duplicate and Delete are hidden.",
          type: "dropdown-single" as const,
          datasetKey: "teams",
          hiddenActions: [
            "multiSelect",
            "allowCreate",
            "questionType",
            "duplicate",
            "delete",
          ],
        },
      },
    ],
  },
}

export const WithAllowCreate: Story = {
  args: {
    datasets: mockDatasets,
    elements: [
      {
        type: "question",
        question: {
          id: "q-team-single",
          title: "Select your team",
          description:
            "The teams dataset has onCreate, so the 'Allow creation' toggle will appear in the actions menu.",
          type: "dropdown-single" as const,
          datasetKey: "teams",
          allowCreate: true,
        },
      },
      {
        type: "question",
        question: {
          id: "q-team-multi",
          title: "Select teams you collaborate with",
          description: "Multi-select does not support creation.",
          type: "dropdown-multi" as const,
          datasetKey: "teams",
        },
      },
      {
        type: "question",
        question: {
          id: "q-employee",
          title: "Select reviewer (no creation)",
          description:
            "The employees dataset does not have onCreate, so no toggle appears.",
          type: "dropdown-single" as const,
          datasetKey: "employees",
        },
      },
    ],
  },
}

/**
 * A blocked, predefined section: `locked` on the section disables its fields,
 * removes its edit menu and drag handle, and makes the questions inside it
 * non-interactive. Its title/description explain why it's fixed and surface as
 * the "Locked" tag tooltip (and on hover over the questions). Questions can't be
 * locked on their own — only via their section. The standalone question after
 * it stays fully editable. The locked treatment never shows in the
 * answering/preview form.
 */
export const WithBlockedSection: Story = {
  args: {
    elements: [
      {
        type: "section",
        section: {
          id: "section-enps",
          title: "Predefined eNPS question",
          description:
            "This question powers your Employee NPS score, so it can't be edited, moved, or removed.",
          locked: true,
          questions: [
            {
              id: "q-enps",
              title: "How likely are you to recommend us as a place to work?",
              description: "0 is not at all likely, 10 is extremely likely.",
              type: "rating" as const,
              options: Array.from({ length: 11 }, (_, value) => ({
                value,
                label: String(value),
              })),
              required: true,
              lockedNote: {
                description:
                  "The standard eNPS question — its wording and 0–10 scale are fixed so scores stay comparable over time.",
              },
            },
          ],
        },
      },
      {
        type: "question",
        question: {
          id: "q-reason",
          title: "What's the main reason for your score?",
          type: "longText" as const,
        },
      },
    ],
  },
}
