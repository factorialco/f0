import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { OnePagination } from "./index"

const meta: Meta<typeof OnePagination> = {
  component: OnePagination,
  title: "Pagination",
  parameters: {
    layout: "centered",
  },
  args: {
    totalPages: 10,
    currentPage: 1,
    showControls: true,
  },
  argTypes: {
    totalPages: {
      description: "The total number of pages. Pass 0 if the total is unknown.",
      control: "number",
    },
    currentPage: {
      description: "The current page.",
      defaultValue: { summary: 1 },
      control: "number",
    },
    onPageChange: {
      description: "The callback function to handle page change.",
      control: false,
    },
    showControls: {
      description: "Whether to show the controls.",
      defaultValue: { summary: true },
      control: "boolean",
    },
    ariaLabel: {
      description: "Accessible label for the pagination navigation.",
      defaultValue: { summary: "Page navigation" },
      control: "text",
    },
    visibleRange: {
      description:
        "The number of pages to show on each side of the current page.",
      defaultValue: { summary: 3 },
      control: "number",
    },
    hasNextPage: {
      description:
        "Used in indeterminate state (totalPages = 0) to indicate if there are more pages available.",
      defaultValue: { summary: true },
      control: "boolean",
    },
    disabled: {
      description: "Whether to disable the pagination.",
      defaultValue: { summary: false },
      control: "boolean",
    },
  },
  tags: ["autodocs", "experimental"],
}

export default meta
type Story = StoryObj<typeof OnePagination>

export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <OnePagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const LongList: Story = {
  args: {
    totalPages: 100,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <OnePagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const WithoutControls: Story = {
  args: {
    totalPages: 10,
    showControls: false,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <OnePagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const CustomVisibleRange: Story = {
  args: {
    totalPages: 20,
    visibleRange: 5,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    return (
      <OnePagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const Indeterminate: Story = {
  args: {
    totalPages: 0,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    const MAX_PAGES = 5 // Simulating a maximum of 5 pages
    const hasNextPage = currentPage ? currentPage < MAX_PAGES : true

    return (
      <OnePagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        hasNextPage={hasNextPage}
      />
    )
  },
}

export const Disabled: Story = {
  parameters: {
    // Skip a11y checks for this story as colors don't pass checks as the component is disabled
    a11y: {
      skipCi: true,
    },
  },
  args: {
    disabled: true,
  },
}
