import { Meta, StoryObj } from "@storybook/react-vite"

import { F0DataDownload } from "../F0DataDownload"

const meta = {
  component: F0DataDownload,
  title: "AI/F0DataDownload",
  tags: ["autodocs"],
} satisfies Meta<typeof F0DataDownload>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Multiple download formats with a markdown table preview.
 */
export const Default: Story = {
  args: {
    markdown: `## Employee Database Export

Here's a preview of the employee records:

| ID | Name | Department | Email | Salary |
|----|------|------------|-------|--------|
| 1 | John Smith | Engineering | john@company.com | $85,000 |
| 2 | Jane Doe | Design | jane@company.com | $78,000 |
| 3 | Bob Wilson | Marketing | bob@company.com | $72,000 |
| 4 | Alice Brown | Sales | alice@company.com | $91,000 |
| 5 | Charlie Davis | HR | charlie@company.com | $68,000 |

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
        label: "Download PDF",
        type: "download",
        downloadUrl: "https://example.com/api/exports/employees.pdf",
      },
    ],
  },
}

/**
 * Single download action — no dropdown, just a plain button.
 */
export const SingleAction: Story = {
  args: {
    markdown: `Your payroll report for **January 2025** is ready.`,
    primaryAction: {
      label: "Download Report",
      type: "download",
      downloadUrl: "https://example.com/api/reports/payroll-jan-2025.pdf",
    },
  },
}

/**
 * No markdown — just the download button.
 */
export const NoMarkdown: Story = {
  args: {
    primaryAction: {
      label: "Download Backup",
      type: "download",
      downloadUrl: "https://example.com/api/backups/latest.zip",
    },
  },
}
