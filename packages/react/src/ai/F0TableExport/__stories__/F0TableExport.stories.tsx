import { Meta, StoryObj } from "@storybook/react-vite"

import { F0TableExport } from "../F0TableExport"

const meta = {
  component: F0TableExport,
  title: "AI/F0TableExport",
  tags: ["autodocs"],
} satisfies Meta<typeof F0TableExport>

export default meta
type Story = StoryObj<typeof meta>

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

// Generate PDF data
const fullPdfData = btoa("PDF binary content simulation for 50 records")

// Generate Excel-like content (simulated)
const fullExcelData = btoa("Excel binary content simulation for 50 records")

// Generate JSON data
const generateFullJsonData = () => {
  const data = Array.from({ length: 50 }, (_, i) => {
    const id = i + 1
    const departments = ["Engineering", "Design", "Marketing", "Sales", "HR"]
    const names = [
      "John Smith",
      "Jane Doe",
      "Bob Wilson",
      "Alice Brown",
      "Charlie Davis",
    ]
    return {
      id,
      name: `${names[i % 5]} ${id}`,
      department: departments[i % 5],
      email: `employee${id}@company.com`,
      salary: 50000 + i * 1000,
      startDate: `2024-0${(i % 9) + 1}-${String((i % 28) + 1).padStart(2, "0")}`,
    }
  })
  return JSON.stringify(data, null, 2)
}

const fullJsonData = btoa(generateFullJsonData())

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
      fileData: fullCsvData,
      fileName: "employees-full-export.csv",
      mimeType: "text/csv",
    },
    secondaryActions: [
      {
        label: "Download Excel",
        type: "download",
        fileData: fullExcelData,
        fileName: "employees-full-export.xlsx",
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
      {
        label: "Download JSON",
        type: "download",
        fileData: fullJsonData,
        fileName: "employees-full-export.json",
        mimeType: "application/json",
      },
      {
        label: "Download PDF",
        type: "download",
        fileData: fullPdfData,
        fileName: "employees-full-export.pdf",
        mimeType: "application/pdf",
      },
    ],
  },
}
