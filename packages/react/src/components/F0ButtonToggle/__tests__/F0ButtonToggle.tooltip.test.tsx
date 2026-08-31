import React from "react"
import { describe, expect, it } from "vitest"

import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import { F0ButtonToggle } from "../F0ButtonToggle"

const MockIcon = React.forwardRef<SVGSVGElement>((props, ref) => (
  <svg ref={ref} {...props} data-testid="mock-icon">
    <title>Mock Icon</title>
  </svg>
))
MockIcon.displayName = "MockIcon"

describe("F0ButtonToggle tooltip", () => {
  it("has no tooltip and keeps the native title by default", () => {
    zeroRender(<F0ButtonToggle label="Mute" icon={MockIcon} />)

    expect(screen.getByRole("button")).toHaveAttribute("title", "Mute")
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("shows the tooltip on hover and drops the native title, so only one bubble opens", async () => {
    zeroRender(
      <F0ButtonToggle label="Mute" icon={MockIcon} tooltip="Mute the room" />
    )

    const button = screen.getByRole("button", { name: "Mute" })
    expect(button).not.toHaveAttribute("title")

    await userEvent.hover(button)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toHaveTextContent("Mute the room")
    })
  })

  it("takes the label/description form", async () => {
    zeroRender(
      <F0ButtonToggle
        label="Mute"
        icon={MockIcon}
        tooltip={{ label: "Mute", description: "Nobody will hear you" }}
      />
    )

    await userEvent.hover(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toHaveTextContent(
        "Nobody will hear you"
      )
    })
  })

  it("keeps the pressed state on data-state, which the tooltip trigger would otherwise overwrite", () => {
    zeroRender(
      <F0ButtonToggle
        label="Mute"
        icon={MockIcon}
        tooltip="Mute the room"
        selected
        onSelectedChange={() => {}}
      />
    )

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-state", "on")
    expect(button).toHaveAttribute("aria-pressed", "true")
  })
})
