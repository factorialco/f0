import { Meta, StoryObj } from "@storybook/react-vite"

import { F0TableExport } from "../F0TableExport"

const meta = {
  component: F0TableExport,
  title: "AI/F0TableExport",
  tags: ["autodocs"],
} satisfies Meta<typeof F0TableExport>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    markdown: `## Employee Database Export

Here's a preview of the employee records:

| ID | Name | Department | Email | Salary |
|----|------|------------|-------|--------|
| 1 | John Smith 1 | Engineering | employee1@company.com | $50,000 |
| 2 | Jane Doe 2 | Design | employee2@company.com | $51,000 |
| 3 | Bob Wilson 3 | Marketing | employee3@company.com | $52,000 |
| 4 | Alice Brown 4 | Sales | employee4@company.com | $53,000 |
| 5 | Charlie Davis 5 | HR | employee5@company.com | $54,000 |

*Showing 5 of 50 total records. Download to get all data.*`,
    primaryAction: {
      label: "Download CSV",
      type: "download",
      downloadUrl: "https://example.com/api/exports/employees.csv",
    },
    secondaryActions: [
      {
        label: "Download Excel",
        type: "download",
        downloadUrl: "https://example.com/api/exports/employees.xlsx",
      },
      {
        label: "Download JSON",
        type: "download",
        downloadUrl: "https://example.com/api/exports/employees.json",
      },
      {
        label: "Download PDF",
        type: "download",
        downloadUrl: "https://example.com/api/exports/employees.pdf",
      },
    ],
  },
}
