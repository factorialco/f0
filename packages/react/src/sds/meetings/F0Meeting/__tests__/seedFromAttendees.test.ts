import { describe, expect, it } from "vitest"

import { seedFromAttendees } from "../mocks/mockSeeds"

const ME = { id: "me", name: "Jordan Avery" }

const build = (attendees: { id: string; name: string }[]) =>
  seedFromAttendees({
    roomId: "huddle:design",
    title: "Huddle · Design",
    me: ME,
    attendees,
  })

describe("seedFromAttendees", () => {
  it("turns a conversation's members into the room's roster", () => {
    const seed = build([
      { id: "a", name: "Eleanor Whitfield" },
      { id: "b", name: "Marcus Chen" },
    ])

    expect(seed.room.title).toBe("Huddle · Design")
    expect(seed.me.id).toBe("me")
    expect(seed.others.map((person) => person.id)).toEqual(["a", "b"])
    expect(seed.others[0]).toMatchObject({
      firstName: "Eleanor",
      lastName: "Whitfield",
    })
  })

  it("never puts me in the room twice", () => {
    const seed = build([
      { id: "me", name: "Jordan Avery" },
      { id: "a", name: "Eleanor Whitfield" },
    ])
    expect(seed.others.map((person) => person.id)).toEqual(["a"])
  })

  it("keeps a mononym in one piece", () => {
    const seed = build([{ id: "a", name: "Prince" }])
    expect(seed.others[0]).toMatchObject({ firstName: "Prince", lastName: "" })
  })

  it("joins me with the camera off, like every call product's prejoin", () => {
    expect(build([]).me.camera).toBe(false)
    expect(build([]).me.muted).toBe(false)
  })

  it("varies cameras and mutes so the grid shows both kinds of tile", () => {
    const seed = build(
      Array.from({ length: 8 }, (_, index) => ({
        id: `p${index}`,
        name: `Person ${index}`,
      }))
    )
    expect(seed.others.some((person) => person.camera)).toBe(true)
    expect(seed.others.some((person) => !person.camera)).toBe(true)
    expect(seed.others.some((person) => person.muted)).toBe(true)
  })

  it("lets the caller silence the mock while nothing is running", () => {
    const seed = seedFromAttendees({
      roomId: "idle",
      title: "Huddle",
      me: ME,
      attendees: [],
      audio: false,
    })
    expect(seed.audio).toBe(false)
  })
})
