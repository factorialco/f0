import type { Meta, StoryObj } from "@storybook/react-vite"

import { SurveyFormBuilderElement } from "../../SurveyFormBuilder/types"
import { SurveyAnsweringForm } from "../SurveyAnsweringForm"

const sampleElements: SurveyFormBuilderElement[] = [
  {
    type: "question",
    question: {
      id: "q-name",
      title: "What is your full name?",
      type: "text" as const,
      required: true,
    },
  },
  {
    type: "question",
    question: {
      id: "q-join-date",
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
          id: "q-perf-rating",
          title: "How would you rate your overall performance this quarter?",
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
          type: "longText" as const,
          required: true,
        },
        {
          id: "q-department",
          title: "Which department are you in?",
          type: "select" as const,
          options: [
            { value: "engineering", label: "Engineering" },
            { value: "design", label: "Design" },
            { value: "product", label: "Product" },
            { value: "marketing", label: "Marketing" },
          ],
        },
        {
          id: "q-skills",
          title: "Select all skills you have improved",
          type: "multi-select" as const,
          options: [
            { value: "communication", label: "Communication" },
            { value: "leadership", label: "Leadership" },
            { value: "technical", label: "Technical skills" },
            { value: "time-management", label: "Time management" },
          ],
        },
        {
          id: "q-projects",
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
          id: "q-career-goal",
          title: "What is your primary career goal for next year?",
          type: "dropdown-single" as const,
          options: [
            { value: "promotion", label: "Get promoted" },
            { value: "lateral-move", label: "Lateral move to new team" },
            { value: "specialise", label: "Deepen specialisation" },
            { value: "management", label: "Move into management" },
          ],
        },
        {
          id: "q-dev-plan-link",
          title: "Link to your personal development plan",
          type: "link" as const,
        },
      ],
    },
  },
]

const handleSubmit = async () => ({ success: true as const })

const meta: Meta<typeof SurveyAnsweringForm> = {
  title: "Surveys/SurveyAnsweringForm",
  component: SurveyAnsweringForm,
  tags: ["autodocs", "experimental"],
  args: {
    isOpen: true,
    onClose: () => {},
    onSubmit: handleSubmit,
    elements: sampleElements,
    title: "Employee Review Q4",
  },
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof SurveyAnsweringForm>

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

export const SingleQuestion: Story = {
  args: {
    mode: "all-questions",
    title: "Quick Feedback",
    elements: [
      {
        type: "question",
        question: {
          id: "q-feedback",
          title: "How are you feeling today?",
          description: "Please share your current mood",
          type: "rating" as const,
          required: true,
          options: [
            { value: 1, label: "😞" },
            { value: 2, label: "😐" },
            { value: 3, label: "🙂" },
            { value: 4, label: "😊" },
            { value: 5, label: "🤩" },
          ],
        },
      },
    ],
  },
}

export const SingleQuestionStepped: Story = {
  args: {
    ...SingleQuestion.args,
    mode: "stepped",
  },
}
