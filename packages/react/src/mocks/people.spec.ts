import { describe, expect, it } from "vitest"

import {
  FAKE_MANAGERS,
  FAKE_PEOPLE,
  getFakeManager,
  getFakePerson,
} from "./people"

describe("FAKE_PEOPLE roster", () => {
  it("has a stable, non-empty roster", () => {
    expect(FAKE_PEOPLE.length).toBeGreaterThan(0)
  })

  it("has unique ids", () => {
    const ids = new Set(FAKE_PEOPLE.map((person) => person.id))
    expect(ids.size).toBe(FAKE_PEOPLE.length)
  })

  it("derives ASCII emails on the factorial.co domain", () => {
    for (const person of FAKE_PEOPLE) {
      expect(person.email).toMatch(/^[a-z]+\.[a-z]+@factorial\.co$/)
    }
  })

  it("derives fullName from first and last name", () => {
    for (const person of FAKE_PEOPLE) {
      expect(person.fullName).toBe(`${person.firstName} ${person.lastName}`)
    }
  })

  it("points every managerId to an existing person", () => {
    const ids = new Set(FAKE_PEOPLE.map((person) => person.id))
    for (const person of FAKE_PEOPLE) {
      if (person.managerId !== null) {
        expect(ids.has(person.managerId)).toBe(true)
      }
    }
  })

  it("assigns an existing avatar asset to everyone", () => {
    for (const person of FAKE_PEOPLE) {
      expect(person.image).toMatch(/^\/avatars\/person\d{2}\.jpg$/)
    }
  })

  it("getFakePerson cycles deterministically", () => {
    expect(getFakePerson(0).id).toBe(FAKE_PEOPLE[0].id)
    expect(getFakePerson(FAKE_PEOPLE.length).id).toBe(FAKE_PEOPLE[0].id)
    expect(getFakePerson(FAKE_PEOPLE.length + 1).id).toBe(FAKE_PEOPLE[1].id)
  })

  it("getFakeManager resolves the manager person", () => {
    const reportee = FAKE_PEOPLE.find((person) => person.managerId !== null)!
    expect(getFakeManager(reportee)?.id).toBe(reportee.managerId)
  })

  it("exposes the leadership subset via FAKE_MANAGERS", () => {
    expect(FAKE_MANAGERS.length).toBeGreaterThan(0)
    const referenced = new Set(
      FAKE_PEOPLE.map((person) => person.managerId).filter(Boolean)
    )
    for (const manager of FAKE_MANAGERS) {
      expect(referenced.has(manager.id)).toBe(true)
    }
  })
})
