import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"

import type { SurveyAnsweringFormProps } from "../types"

import { SurveyFormBuilderElement } from "../../SurveyFormBuilder/types"
import { SurveyAnsweringForm } from "../SurveyAnsweringForm"

const sampleElements: SurveyFormBuilderElement[] = [
  {
    type: "question",
    question: {
      id: "q-name",
      title: "What is your full name?",
      description: "Please enter your first and last name",
      type: "text" as const,
      required: true,
    },
  },
  {
    type: "question",
    question: {
      id: "q-join-date",
      title: "When did you join the company?",
      description: "Select your official start date",
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
          id: "q-perf-rating",
          title: "How would you rate your overall performance this quarter?",
          description: "1 being the lowest and 5 being the highest",
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
          id: "q-achievements",
          title: "What were your main achievements this quarter?",
          description: "List your key accomplishments and contributions",
          type: "longText" as const,
          required: true,
        },
        {
          id: "q-department",
          title: "Which department are you in?",
          description: "Select the department you currently belong to",
          type: "select" as const,
          options: [
            { value: "engineering", label: "Engineering" },
            { value: "design", label: "Design" },
            { value: "product", label: "Product" },
            { value: "marketing", label: "Marketing" },
          ],
          required: true,
        },
        {
          id: "q-skills",
          title: "Select all skills you have improved",
          description: "Choose all that apply to your growth this quarter",
          type: "multi-select" as const,
          options: [
            { value: "communication", label: "Communication" },
            { value: "leadership", label: "Leadership" },
            { value: "technical", label: "Technical skills" },
            { value: "time-management", label: "Time management" },
          ],
          required: true,
        },
        {
          id: "q-projects",
          title: "How many projects did you complete?",
          description: "Enter the total number of completed projects",
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
          id: "q-career-goal",
          title: "What is your primary career goal for next year?",
          description:
            "Pick the option that best describes your career direction",
          type: "dropdown-single" as const,
          options: [
            { value: "promotion", label: "Get promoted" },
            { value: "lateral-move", label: "Lateral move to new team" },
            { value: "specialise", label: "Deepen specialisation" },
            { value: "management", label: "Move into management" },
          ],
          required: true,
        },
        {
          id: "q-dev-plan-link",
          title: "Link to your personal development plan",
          description: "Paste the URL to your development plan document",
          type: "link" as const,
        },
      ],
    },
  },
]

const handleSubmit = async () => ({ success: true as const })

function SurveyAnsweringFormStory(
  props: Omit<SurveyAnsweringFormProps, "isOpen" | "onClose">
) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <F0Button label="Open survey" onClick={() => setIsOpen(true)} />
      <SurveyAnsweringForm
        {...props}
        isOpen={isOpen}
        onSubmit={(answers) => {
          console.log({ answers })
          return {
            success: true as const,
            message: "Your answers have been submitted successfully!",
          }
        }}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

const meta: Meta<typeof SurveyAnsweringFormStory> = {
  title: "Surveys/SurveyAnsweringForm",
  component: SurveyAnsweringFormStory,
  tags: ["autodocs", "experimental"],
  args: {
    onSubmit: handleSubmit,
    elements: sampleElements,
    title: "Employee Review Q4",
  },
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof SurveyAnsweringFormStory>

export const AllQuestions: Story = {
  args: {
    mode: "all-questions",
  },
}

export const Stepped: Story = {
  args: {
    mode: "stepped",
  },
}

export const Fullscreen: Story = {
  args: {
    mode: "all-questions",
    fullscreen: true,
  },
}

export const FullscreenToggle: Story = {
  args: {
    mode: "all-questions",
    allowToChangeFullscreen: true,
  },
}

export const SteppedFullscreen: Story = {
  args: {
    mode: "stepped",
    fullscreen: true,
  },
}

export const WithDefaultValues: Story = {
  args: {
    mode: "all-questions",
    defaultValues: {
      "q-name": { type: "text", value: "Jane Doe" },
      "q-perf-rating": { type: "rating", value: 4 },
      "q-department": { type: "select", value: "engineering" },
    },
  },
}
