import { beforeEach, describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

let mockReducedMotion = false
vi.mock("@/lib/a11y", () => ({
  useReducedMotion: () => mockReducedMotion,
}))

import { WelcomeScreen } from "../components/WelcomeScreen"

// The visible span types progressively, so the stable way to grab the phrase
// paragraph is through the sr-only span that always holds the full text.
const getPhrase = (text: string) => {
  const phrase = screen.getByText(text).closest("p")
  expect(phrase).not.toBeNull()
  return phrase as HTMLParagraphElement
}

describe("WelcomeScreen", () => {
  beforeEach(() => {
    mockReducedMotion = false
  })

  it("renders the message as a non-interactive, unnamed paragraph when no onClick is given", () => {
    zeroRender(<WelcomeScreen messages={["Ask anything"]} />)
    const p = getPhrase("Ask anything")
    expect(p).toBeInTheDocument()
    expect(p).not.toHaveAttribute("role", "button")
    expect(p).not.toHaveAttribute("tabIndex")
    // aria-label is prohibited on a paragraph role; the sr-only span names it.
    expect(p).not.toHaveAttribute("aria-label")
  })

  it("becomes interactive when onClick is provided", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    zeroRender(<WelcomeScreen messages={["Ask anything"]} onClick={onClick} />)

    const button = screen.getByRole("button", { name: "Ask anything" })
    expect(button).toHaveAttribute("tabIndex", "0")

    await user.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("fires onClick on Enter and Space when focused", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    zeroRender(<WelcomeScreen messages={["Ask anything"]} onClick={onClick} />)

    const button = screen.getByRole("button", { name: "Ask anything" })
    button.focus()
    await user.keyboard("{Enter}")
    expect(onClick).toHaveBeenCalledTimes(1)

    await user.keyboard(" ")
    expect(onClick).toHaveBeenCalledTimes(2)
  })

  it("renders the full phrase statically when reduced motion is preferred", () => {
    mockReducedMotion = true
    zeroRender(<WelcomeScreen messages={["Ask anything", "Second phrase"]} />)

    // Visible (aria-hidden) span and sr-only span both carry the full text
    // immediately — no typewriter.
    expect(screen.getAllByText("Ask anything")).toHaveLength(2)
  })

  it("renders a static caption above and a subtitle below the phrase when provided", () => {
    zeroRender(
      <WelcomeScreen
        messages={["Ask a data question"]}
        caption="Analytics mode:"
        subtitle="Ask about employees, contracts, absences, and presence."
      />
    )

    const caption = screen.getByText("Analytics mode:")
    const subtitle = screen.getByText(
      "Ask about employees, contracts, absences, and presence."
    )
    const phrase = getPhrase("Ask a data question")

    expect(caption).toHaveClass("text-f1-foreground-secondary", "text-2xl")
    expect(subtitle).toHaveClass("text-f1-foreground-secondary", "text-lg")
    expect(
      caption.compareDocumentPosition(phrase) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
    expect(
      phrase.compareDocumentPosition(subtitle) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("renders neither caption nor subtitle when omitted", () => {
    zeroRender(<WelcomeScreen messages={["Ask anything"]} />)
    expect(screen.queryByText("Analytics mode:")).not.toBeInTheDocument()
    const phrase = getPhrase("Ask anything")
    expect(phrase.parentElement?.querySelectorAll("p")).toHaveLength(1)
  })

  it("centers the phrase vertically by default", () => {
    zeroRender(<WelcomeScreen messages={["Ask anything"]} />)
    const container = getPhrase("Ask anything").closest(".justify-center")
    expect(container).toHaveClass("items-center")
    expect(container).not.toHaveClass("items-end")
  })

  it("pushes the phrase to the bottom in fullscreen", () => {
    zeroRender(<WelcomeScreen messages={["Ask anything"]} fullscreen />)
    const container = getPhrase("Ask anything").closest(".justify-center")
    expect(container).toHaveClass("items-end")
    expect(container).not.toHaveClass("items-center")
  })
})
