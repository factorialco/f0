import { Meta, StoryObj } from "@storybook/react-vite"

import { F0TableExport } from "../F0TableExport"

const meta = {
  component: F0TableExport,
  title: "AI/F0TableExport",
  tags: ["autodocs"],
} satisfies Meta<typeof F0TableExport>

export default meta
type Story = StoryObj<typeof meta>

const sampleMarkdown = `## Employee Report

Here's a preview of the employee data:

| Name | Department | Email |
|------|------------|-------|
| John Doe | Engineering | john@example.com |
| Jane Smith | Design | jane@example.com |
| Bob Johnson | Marketing | bob@example.com |
| Alice Brown | Engineering | alice@example.com |
| Charlie Wilson | Sales | charlie@example.com |

*Showing 5 of 150 total records*`

const sampleBase64Excel = btoa("sample excel content")
const sampleBase64Csv = btoa(
  "Name,Department,Email\nJohn,Engineering,john@example.com"
)

export const SingleDownload: Story = {
  args: {
    markdown: sampleMarkdown,
    primaryAction: {
      label: "Download Excel",
      type: "download",
      fileData: sampleBase64Excel,
      fileName: "employees.xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  },
}

export const MultipleDownloads: Story = {
  args: {
    markdown: sampleMarkdown,
    primaryAction: {
      label: "Download Excel",
      type: "download",
      fileData: sampleBase64Excel,
      fileName: "employees.xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    secondaryActions: [
      {
        label: "Download CSV",
        type: "download",
        fileData: sampleBase64Csv,
        fileName: "employees.csv",
        mimeType: "text/csv",
      },
      {
        label: "Download PDF",
        type: "download",
        fileData: sampleBase64Excel,
        fileName: "employees.pdf",
        mimeType: "application/pdf",
      },
    ],
  },
}

export const WithCustomAction: Story = {
  args: {
    markdown: sampleMarkdown,
    primaryAction: {
      label: "Download Excel",
      type: "download",
      fileData: sampleBase64Excel,
      fileName: "employees.xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    secondaryActions: [
      {
        label: "Download CSV",
        type: "download",
        fileData: sampleBase64Csv,
        fileName: "employees.csv",
        mimeType: "text/csv",
      },
      {
        label: "Send by Email",
        type: "action",
        actionId: "send-email",
      },
    ],
  },
}

export const SimpleTable: Story = {
  args: {
    markdown: `| Product | Price |
|---------|-------|
| Widget A | $10.00 |
| Widget B | $15.00 |
| Widget C | $20.00 |`,
    primaryAction: {
      label: "Export",
      type: "download",
      fileData: sampleBase64Csv,
      fileName: "products.csv",
      mimeType: "text/csv",
    },
  },
}

export const WithDescription: Story = {
  args: {
    markdown: `## Sales Summary Q4 2024

The following table shows the top performing regions:

| Region | Revenue | Growth |
|--------|---------|--------|
| North America | $1.2M | +15% |
| Europe | $800K | +12% |
| Asia Pacific | $600K | +25% |

**Note:** These figures are preliminary and subject to final audit.`,
    primaryAction: {
      label: "Download Full Report",
      type: "download",
      fileData: sampleBase64Excel,
      fileName: "sales-q4-2024.xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  },
}

// Generate 50 rows of CSV data for the full download
const generateFullCsvData = () => {
  const headers = "ID,Name,Department,Email,Salary,Start Date"
  const rows = Array.from({ length: 50 }, (_, i) => {
    const id = i + 1
    const departments = ["Engineering", "Design", "Marketing", "Sales", "HR"]
    const names = [
      "John Smith",
      "Jane Doe",
      "Bob Wilson",
      "Alice Brown",
      "Charlie Davis",
    ]
    return `${id},${names[i % 5]} ${id},${departments[i % 5]},employee${id}@company.com,${50000 + i * 1000},2024-0${(i % 9) + 1}-${(i % 28) + 1}`
  })
  return [headers, ...rows].join("\n")
}

const fullCsvData = btoa(generateFullCsvData())

export const PreviewWithFullDownload: Story = {
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
      label: "Download All 50 Records",
      type: "download",
      fileData: fullCsvData,
      fileName: "employees-full-export.csv",
      mimeType: "text/csv",
    },
  },
}
