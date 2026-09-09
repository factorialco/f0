/**
 * Mock data for the Training → Requests tab — employee requests to enrol in a
 * course (requester, course, date, status, estimated cost).
 *
 * "My requests" filters to requests made by `CURRENT_USER_ID` (the signed-in
 * user, shared with the courses mock).
 */

import { CURRENT_USER_ID } from "./courses"

export { CURRENT_USER_ID }

export type RequestStatus = "pending" | "approved" | "rejected"

export type TrainingRequest = {
  id: string
  /** Employee who made the request (rendered as a person cell). */
  requesterId: string
  /** Course the request is for. */
  courseName: string
  /** ISO date the request was submitted. */
  requestedAt: string
  status: RequestStatus
  /** Estimated cost in EUR, or null when the course has no cost. */
  cost: number | null
}

export const trainingRequests: TrainingRequest[] = [
  {
    id: "req-001",
    requesterId: "emp-001",
    courseName: "Fundamentos de la gestión de calidad con ISO 9001",
    requestedAt: "2026-06-18",
    status: "pending",
    cost: 320,
  },
  {
    id: "req-002",
    requesterId: "emp-005",
    courseName: "Merchandising visual y organización de tiendas",
    requestedAt: "2026-06-15",
    status: "approved",
    cost: 180,
  },
  {
    id: "req-003",
    requesterId: "emp-001",
    courseName: "Resolución de conflictos y dinámicas de equipo",
    requestedAt: "2026-06-11",
    status: "approved",
    cost: 240,
  },
  {
    id: "req-004",
    requesterId: "emp-009",
    courseName: "Liderazgo y gestión de equipos remotos",
    requestedAt: "2026-06-09",
    status: "rejected",
    cost: 450,
  },
  {
    id: "req-005",
    requesterId: "emp-012",
    courseName: "Fundamentos de la gestión de calidad con ISO 9001",
    requestedAt: "2026-06-04",
    status: "pending",
    cost: 320,
  },
  {
    id: "req-006",
    requesterId: "emp-001",
    courseName: "Comunicación efectiva para managers",
    requestedAt: "2026-05-28",
    status: "pending",
    cost: null,
  },
  {
    id: "req-007",
    requesterId: "emp-016",
    courseName: "Merchandising visual y organización de tiendas",
    requestedAt: "2026-05-22",
    status: "approved",
    cost: 180,
  },
]
