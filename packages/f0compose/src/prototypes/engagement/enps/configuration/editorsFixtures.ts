import { employees } from "@/fixtures"

export type Editor = {
  id: string
  firstName: string
  lastName: string
  src: string
}

export const configEditors: Editor[] = [
  {
    id: "editor-001",
    firstName: "Hellen",
    lastName: "Howard",
    src: employees[0].avatarUrl,
  },
  {
    id: "editor-002",
    firstName: "Isabel",
    lastName: "Iglesias",
    src: employees[1].avatarUrl,
  },
]
