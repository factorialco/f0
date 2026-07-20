import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import {
  type F0ChatSystemMessage as SystemMessage,
  type F0ChatUser,
} from "../../types"
import { ChatSystemMessage } from "../ChatSystemMessage"

const person = (id: string, name: string): F0ChatUser => ({ id, name })

const ana = person("ana", "Ana García")
const luis = person("luis", "Luis Pérez")
const carla = person("carla", "Carla Mora")

const systemMessage = (
  overrides: Partial<SystemMessage> = {}
): SystemMessage => ({
  type: "system",
  id: "s1",
  createdAt: new Date().toISOString(),
  ...overrides,
})

/** The full sentence, matched on the line's SPAN (chips split the text nodes). */
const sentence = (text: string) =>
  screen.getByText(
    (_, element) => element?.tagName === "SPAN" && element.textContent === text
  )

describe("ChatSystemMessage", () => {
  it("renders the plural sentence with @name chips joined by the conjunction", () => {
    render(
      <ChatSystemMessage
        message={systemMessage({
          system: { event: "member.added", members: [ana, luis] },
        })}
      />
    )
    expect(
      sentence("@Ana García and @Luis Pérez were added to the group")
    ).toBeInTheDocument()
    // Each name is its own hover-card chip.
    expect(screen.getByText("@Ana García")).toBeInTheDocument()
    expect(screen.getByText("@Luis Pérez")).toBeInTheDocument()
  })

  it("uses the singular template for one member", () => {
    render(
      <ChatSystemMessage
        message={systemMessage({
          system: { event: "member.left", members: [carla] },
        })}
      />
    )
    expect(sentence("@Carla Mora left the group")).toBeInTheDocument()
  })

  it("renders the member.removed template", () => {
    render(
      <ChatSystemMessage
        message={systemMessage({
          system: { event: "member.removed", members: [carla] },
        })}
      />
    )
    expect(
      sentence("@Carla Mora was removed from the group")
    ).toBeInTheDocument()
  })

  it("collapses names beyond the max into 'and N more'", () => {
    const members = Array.from({ length: 8 }, (_, i) =>
      person(`p${i}`, `Person ${i}`)
    )
    render(
      <ChatSystemMessage
        message={systemMessage({
          system: { event: "member.added", members },
        })}
      />
    )
    // 3 visible names + "and 5 more".
    expect(
      sentence(
        "@Person 0, @Person 1, @Person 2 and 5 more were added to the group"
      )
    ).toBeInTheDocument()
    expect(screen.queryByText("@Person 3")).not.toBeInTheDocument()
  })

  it("adds the host's remainingCount to the collapsed count and the plural", () => {
    render(
      <ChatSystemMessage
        message={systemMessage({
          system: {
            event: "member.added",
            members: [ana],
            remainingCount: 3,
          },
        })}
      />
    )
    expect(
      sentence("@Ana García and 3 more were added to the group")
    ).toBeInTheDocument()
  })

  it("falls back to the plain body when there is no structured payload", () => {
    render(
      <ChatSystemMessage
        message={systemMessage({ body: "This chat is now encrypted" })}
      />
    )
    expect(screen.getByText("This chat is now encrypted")).toBeInTheDocument()
  })

  it("renders nothing without payload or body", () => {
    const { container } = render(
      <ChatSystemMessage message={systemMessage()} />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
