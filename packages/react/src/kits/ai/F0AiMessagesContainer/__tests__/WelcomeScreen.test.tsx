import { describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { WelcomeScreen } from "../components/WelcomeScreen"

describe("WelcomeScreen", () => {
  it("renders the message as a non-interactive paragraph when no onClick is given", () => {
    zeroRender(<WelcomeScreen messages={["Ask anything"]} />)
    const p = screen.getByLabelText("Ask anything")
    expect(p).toBeInTheDocument()
    expect(p).not.toHaveAttribute("role", "button")
    expect(p).not.toHaveAttribute("tabIndex")
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

  it("centers the phrase vertically by default", () => {
    zeroRender(<WelcomeScreen messages={["Ask anything"]} />)
    const container = screen
      .getByLabelText("Ask anything")
      .closest(".justify-center")
    expect(container).toHaveClass("items-center")
    expect(container).not.toHaveClass("items-end")
  })

  it("pushes the phrase to the bottom in fullscreen", () => {
    zeroRender(<WelcomeScreen messages={["Ask anything"]} fullscreen />)
    const container = screen
      .getByLabelText("Ask anything")
      .closest(".justify-center")
    expect(container).toHaveClass("items-end")
    expect(container).not.toHaveClass("items-center")
  })
})
