import { Meta, StoryObj } from "@storybook/react-vite"

import { F0DataDownload } from "../F0DataDownload"

const meta = {
  component: F0DataDownload,
  title: "AI/F0DataDownload",
  tags: ["autodocs"],
} satisfies Meta<typeof F0DataDownload>

export default meta
type Story = StoryObj<typeof meta>

const sampleDataset = {
  columns: ["ID", "Name", "Department", "Email", "Salary"],
  rows: [
    {
      ID: 1,
      Name: "John Smith",
      Department: "Engineering",
      Email: "john@company.com",
      Salary: "$85,000",
    },
    {
      ID: 2,
      Name: "Jane Doe",
      Department: "Design",
      Email: "jane@company.com",
      Salary: "$78,000",
    },
    {
      ID: 3,
      Name: "Bob Wilson",
      Department: "Marketing",
      Email: "bob@company.com",
      Salary: "$72,000",
    },
    {
      ID: 4,
      Name: "Alice Brown",
      Department: "Sales",
      Email: "alice@company.com",
      Salary: "$91,000",
    },
    {
      ID: 5,
      Name: "Charlie Davis",
      Department: "HR",
      Email: "charlie@company.com",
      Salary: "$68,000",
    },
  ],
  totalCount: 50,
  previewCount: 5,
}

/**
 * With a markdown table preview above the download dropdown.
 * The "Preview X of Y rows" note is rendered by the component from totalCount/previewCount.
 */
export const Default: Story = {
  args: {
    markdown: `| ID | Name | Department | Email | Salary |
|----|------|------------|-------|--------|
| 1 | John Smith | Engineering | john@company.com | $85,000 |
| 2 | Jane Doe | Design | jane@company.com | $78,000 |
| 3 | Bob Wilson | Marketing | bob@company.com | $72,000 |
| 4 | Alice Brown | Sales | alice@company.com | $91,000 |
| 5 | Charlie Davis | HR | charlie@company.com | $68,000 |`,
    filename: "employee_records",
    dataset: sampleDataset,
  },
}

/**
 * With a simple markdown description.
 */
export const WithDescription: Story = {
  args: {
    markdown: `Your payroll report for **January 2025** is ready.`,
    filename: "payroll_jan_2025",
    dataset: sampleDataset,
  },
}

/**
 * No markdown — just the download dropdown.
 */
export const NoMarkdown: Story = {
  args: {
    filename: "backup_data",
    dataset: sampleDataset,
  },
}
