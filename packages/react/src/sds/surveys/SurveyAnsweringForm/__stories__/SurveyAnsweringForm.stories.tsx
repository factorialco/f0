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

const quizElements: SurveyFormBuilderElement[] = [
  {
    type: "question",
    question: {
      id: "q-single-correct",
      title: "Which planet is known as the Red Planet?",
      type: "select" as const,
      options: [
        { value: "earth", label: "Earth" },
        { value: "mars", label: "Mars", correct: true },
        { value: "venus", label: "Venus" },
        { value: "jupiter", label: "Jupiter" },
      ],
      required: true,
    },
  },
  {
    type: "question",
    question: {
      id: "q-multi-correct",
      title: "Select all prime numbers",
      type: "multi-select" as const,
      options: [
        { value: "2", label: "2", correct: true },
        { value: "3", label: "3", correct: true },
        { value: "4", label: "4" },
        { value: "5", label: "5", correct: true },
      ],
      required: true,
    },
  },
  {
    type: "question",
    question: {
      id: "q-confidence",
      title: "How confident do you feel about this topic now?",
      description: "1 is low confidence and 5 is very confident",
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
  },
  {
    type: "question",
    question: {
      id: "q-study-hours",
      title: "How many hours did you spend preparing?",
      type: "numeric" as const,
      required: true,
    },
  },
  {
    type: "question",
    question: {
      id: "q-notes",
      title: "What was the most difficult part?",
      description: "Share any notes about topics you want to revisit",
      type: "longText" as const,
    },
  },
  {
    type: "question",
    question: {
      id: "q-next-review",
      title: "When will you review this topic again?",
      type: "date" as const,
    },
  },
]

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never

type SurveyAnsweringFormStoryProps = DistributiveOmit<
  SurveyAnsweringFormProps,
  "isOpen" | "onClose"
>

function SurveyAnsweringFormStory(props: SurveyAnsweringFormStoryProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (props.preview === true) {
    return (
      <>
        <F0Button label="Open survey" onClick={() => setIsOpen(true)} />
        <SurveyAnsweringForm
          {...props}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    )
  }

  return (
    <>
      <F0Button label="Open survey" onClick={() => setIsOpen(true)} />
      <SurveyAnsweringForm
        {...props}
        preview={false}
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
    elements: sampleElements,
    title: "Employee Review Q4",
    description:
      "Help us understand your recent performance, strengths, and growth goals.",
    module: {
      id: "engagement",
      label: "Engagement",
      href: "#",
    },
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
    position: "fullscreen",
  },
}

export const FullscreenToggle: Story = {
  args: {
    mode: "all-questions",
    allowToChangeFullscreen: true,
  },
}

export const RightSide: Story = {
  args: {
    mode: "all-questions",
    position: "right",
    module: {
      id: "engagement",
      label: "Engagement",
      href: "#",
    },
    allowToChangeFullscreen: true,
  },
}

export const SteppedFullscreen: Story = {
  args: {
    mode: "stepped",
    position: "fullscreen",
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

export const NoElements: Story = {
  args: {
    mode: "all-questions",
    elements: [],
    position: "fullscreen",
    labels: {
      empty: {
        title: "Nothing to answer yet",
        description:
          "Questions will appear here once the survey is configured.",
        emoji: "🧩",
      },
    },
  },
}

export const LoadingAllQuestions: Story = {
  args: {
    mode: "all-questions",
    loading: true,
  },
}

export const LoadingStepped: Story = {
  args: {
    mode: "stepped",
    loading: true,
  },
}

export const Preview: Story = {
  args: {
    mode: "all-questions",
    preview: true,
  },
}

export const PreviewWithDefaultValues: Story = {
  args: {
    mode: "all-questions",
    preview: true,
    defaultValues: {
      "q-name": { type: "text", value: "Jane Doe" },
      "q-perf-rating": { type: "rating", value: 4 },
      "q-department": { type: "select", value: "engineering" },
    },
  },
}

export const RightSideMixedCorrectAnswers: Story = {
  args: {
    mode: "all-questions",
    position: "right",
    module: {
      id: "my_trainings",
      label: "Trainings",
      href: "#",
    },
    elements: quizElements,
    title: "Knowledge Check",
    description:
      "Review each answer and compare your response against the expected options.",
    preview: true,
    defaultValues: {
      // Correct single-select answer
      "q-single-correct": { type: "select", value: "mars" },
      // Mixed multi-select answer: includes one wrong option and misses one correct
      "q-multi-correct": { type: "multi-select", value: ["2", "4"] },
      "q-confidence": { type: "rating", value: 4 },
      "q-study-hours": { type: "numeric", value: 6 },
      "q-notes": {
        type: "longText",
        value: "Prime numbers above 10 are still a bit confusing for me.",
      },
      "q-next-review": { type: "date", value: new Date("2026-03-20") },
    },
  },
}
