import { findDepartment, findEmployee, findTeam, employees } from "@/fixtures"

import type { GoalAssignee } from "./types"

type AssigneeCell =
  | {
      type: "person"
      value: {
        firstName: string
        lastName: string
        src?: string
      }
    }
  | {
      type: "team"
      value: {
        name: string
      }
    }
  | {
      type: "company"
      value: {
        name: string
      }
    }

/**
 * Render an assignee as the cell payload expected by
 * OneDataCollection — uses person/team/company cell types
 * which display avatar + name.
 */
export function renderAssigneeCell(assignee: GoalAssignee): AssigneeCell {
  switch (assignee.type) {
    case "company":
      return {
        type: "company",
        value: { name: assignee.name },
      }
    case "department": {
      const dept = findDepartment(assignee.departmentId)
      return {
        type: "team",
        value: { name: dept?.name ?? "Department" },
      }
    }
    case "team": {
      const team = findTeam(assignee.teamId)
      return {
        type: "team",
        value: { name: team?.name ?? "Team" },
      }
    }
    case "area":
      return {
        type: "team",
        value: { name: assignee.name },
      }
    case "group": {
      const first = assignee.employeeIds[0]
      const emp = first ? findEmployee(first) : employees[0]
      const person = emp ?? employees[0]
      return {
        type: "person",
        value: {
          firstName: person.preferredName ?? person.fullName.split(" ")[0],
          lastName: person.fullName.split(" ").slice(-1).join(" "),
          src: person.avatarUrl,
        },
      }
    }
    case "individual": {
      const emp = findEmployee(assignee.employeeId) ?? employees[0]
      return {
        type: "person",
        value: {
          firstName: emp.preferredName ?? emp.fullName.split(" ")[0],
          lastName: emp.fullName.split(" ").slice(-1).join(" "),
          src: emp.avatarUrl,
        },
      }
    }
  }
}
