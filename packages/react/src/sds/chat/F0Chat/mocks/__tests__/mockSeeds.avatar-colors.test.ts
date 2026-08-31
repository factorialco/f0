import { describe, expect, it } from "vitest"

import { SEEDS } from "../mockSeeds"

describe("mock sender avatar colours", () => {
  it("matches Marcus's orange photo avatar", () => {
    const marcus = SEEDS.find((seed) => seed.id === "dm-marcus")
      ?.participants[0]

    expect(marcus?.avatar).toMatchObject({
      type: "person",
      src: "/avatars/person02.jpg",
    })
    expect(marcus?.avatarColor).toBe("orange")
  })

  it("leaves generated avatars on their name-derived colour", () => {
    const generatedAvatar = SEEDS.flatMap((seed) => seed.participants).find(
      (participant) =>
        participant.avatar.type === "person" && !participant.avatar.src
    )

    expect(generatedAvatar).toBeDefined()
    expect(generatedAvatar?.avatarColor).toBeUndefined()
  })
})
