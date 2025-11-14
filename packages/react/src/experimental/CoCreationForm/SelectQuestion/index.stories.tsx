import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { SelectQuestion } from "."
import { SelectQuestionOnChangeParams, SelectQuestionProps } from "./types"

const meta: Meta<typeof SelectQuestion> = {
  title: "CoCreationForm/SelectQuestion",
  component: SelectQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [title, setTitle] = useState(args.title)
    const [description, setDescription] = useState(args.description)
    const [singleValue, setSingleValue] = useState<string | undefined | null>(
      args.type === "select" ? args.value : undefined
    )
    const [multiValue, setMultiValue] = useState<string[] | undefined | null>(
      args.type === "multi-select" ? args.value : undefined
    )
    const [options, setOptions] = useState<SelectQuestionProps["options"]>(
      args.options
    )

    const handleChange = (params: SelectQuestionOnChangeParams) => {
      setTitle(params.title)
      setDescription(params.description)
      if (params.type === "select") {
        setSingleValue(params.value)
      } else {
        setMultiValue(params.value)
      }
      setOptions(params.options)
    }

    return (
      <SelectQuestion
        {...args}
        {...(args.type === "select"
          ? { type: "select", value: singleValue }
          : { type: "multi-select", value: multiValue })}
        title={title}
        description={description}
        options={options}
        onChange={handleChange}
      />
    )
  },
  args: {
    onChange: (params) => {
      console.log("Question changed:", params)
    },
  },
}

export default meta
type Story = StoryObj<typeof SelectQuestion>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "How supported do you feel by your manager and team?",
    description: "Responders can select 1",
    type: "select",
    value: null,
    options: [
      { value: "work-life-balance", label: "Work-life balance" },
      { value: "recognition", label: "Recognition and appreciation" },
      { value: "manager-relationship", label: "Relationship with manager" },
      { value: "team-collaboration", label: "Team collaboration" },
    ],
  },
}

export const WithSelectedValue: Story = {
  args: {
    id: "question-2",
    title: "What is your primary concern?",
    description: "Select one option",
    type: "select",
    value: "work-life-balance",
    options: [
      { value: "work-life-balance", label: "Work-life balance" },
      { value: "recognition", label: "Recognition and appreciation" },
      { value: "manager-relationship", label: "Relationship with manager" },
      { value: "team-collaboration", label: "Team collaboration" },
    ],
  },
}

export const ManyOptions: Story = {
  args: {
    id: "question-3",
    title: "Which areas would you like to improve?",
    description: "Select one option",
    type: "select",
    value: null,
    options: [
      { value: "communication", label: "Communication" },
      { value: "feedback", label: "Feedback and recognition" },
      { value: "growth", label: "Career growth opportunities" },
      { value: "workload", label: "Workload management" },
      { value: "team-dynamics", label: "Team dynamics" },
      { value: "tools", label: "Tools and resources" },
    ],
  },
}

export const MultiSelect: Story = {
  args: {
    id: "question-4",
    title: "What are your primary concerns?",
    description: "Select one or more options",
    type: "multi-select",
    value: [],
    options: [
      { value: "communication", label: "Communication" },
      { value: "feedback", label: "Feedback and recognition" },
      { value: "growth", label: "Career growth opportunities" },
      { value: "workload", label: "Workload management" },
      { value: "team-dynamics", label: "Team dynamics" },
    ],
  },
}

export const MultiSelectInEditMode: Story = {
  args: {
    id: "question-5",
    title: "What are your primary concerns?",
    description: "Select one or more options",
    type: "multi-select",
    value: [],
    options: [
      { value: "communication", label: "Communication" },
      { value: "feedback", label: "Feedback and recognition" },
      { value: "growth", label: "Career growth opportunities" },
      { value: "workload", label: "Workload management" },
      { value: "team-dynamics", label: "Team dynamics" },
    ],
    isEditMode: true,
  },
}
