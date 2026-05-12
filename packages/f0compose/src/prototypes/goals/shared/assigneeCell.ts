import { findDepartment, findEmployee, findTeam, employees } from "@/fixtures"

import type { GoalAssignee } from "./types"

type PersonAvatar = {
  firstName: string
  lastName: string
  src?: string
}

type TeamAvatar = {
  name: string
}

type CompanyAvatar = {
  name: string
}

type AssigneeCell =
  | {
      type: "avatarList"
      value: {
        type: "person"
        avatarList: PersonAvatar[]
        max: number
      }
    }
  | {
      type: "avatarList"
      value: {
        type: "team"
        avatarList: TeamAvatar[]
        max: number
      }
    }
  | {
      type: "avatarList"
      value: {
        type: "company"
        avatarList: CompanyAvatar[]
        max: number
      }
    }

/**
 * Render an assignee as the cell payload expected by
 * OneDataCollection's `avatarList` column type.
 */
export function renderAssigneeCell(assignee: GoalAssignee): AssigneeCell {
  switch (assignee.type) {
    case "company":
      return {
        type: "avatarList",
        value: {
          type: "company",
          avatarList: [{ name: assignee.name }],
          max: 1,
        },
      }
    case "department": {
      const dept = findDepartment(assignee.departmentId)
      return {
        type: "avatarList",
        value: {
          type: "team",
          avatarList: [{ name: dept?.name ?? "Department" }],
          max: 1,
        },
      }
    }
    case "team": {
      const team = findTeam(assignee.teamId)
      return {
        type: "avatarList",
        value: {
          type: "team",
          avatarList: [{ name: team?.name ?? "Team" }],
          max: 1,
        },
      }
    }
    case "area":
      return {
        type: "avatarList",
        value: {
          type: "team",
          avatarList: [{ name: assignee.name }],
          max: 1,
        },
      }
    case "group": {
      const people = assignee.employeeIds
        .map((id) => findEmployee(id))
        .filter((p): p is NonNullable<typeof p> => Boolean(p))
        .map((p) => ({
          firstName: p.preferredName ?? p.fullName.split(" ")[0],
          lastName: p.fullName.split(" ").slice(-1).join(" "),
          src: p.avatarUrl,
        }))
      return {
        type: "avatarList",
        value: {
          type: "person",
          avatarList: people.length > 0 ? people : [fallbackPerson()],
          max: 3,
        },
      }
    }
    case "individual": {
      const emp = findEmployee(assignee.employeeId) ?? employees[0]
      return {
        type: "avatarList",
        value: {
          type: "person",
          avatarList: [
            {
              firstName: emp.preferredName ?? emp.fullName.split(" ")[0],
              lastName: emp.fullName.split(" ").slice(-1).join(" "),
              src: emp.avatarUrl,
            },
          ],
          max: 1,
        },
      }
    }
  }
}

function fallbackPerson(): PersonAvatar {
  const emp = employees[0]
  return {
    firstName: emp.preferredName ?? emp.fullName.split(" ")[0],
    lastName: emp.fullName.split(" ").slice(-1).join(" "),
    src: emp.avatarUrl,
  }
}
