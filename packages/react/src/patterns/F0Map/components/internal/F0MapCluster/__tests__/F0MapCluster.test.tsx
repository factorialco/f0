import { describe, expect, it, vi } from "vitest"

import { fireEvent, screen, zeroRender } from "@/testing/test-utils"

import { F0MapCluster } from "../F0MapCluster"

const members = [{ variant: "default" }] as const

describe("F0MapCluster", () => {
  it("is keyboard-operable when rendered as a standalone cluster", () => {
    const onClick = vi.fn()

    zeroRender(<F0MapCluster count={1} members={members} onClick={onClick} />)

    const cluster = screen.getByRole("button", {
      name: "Cluster of 1 locations",
    })
    fireEvent.keyDown(cluster, { key: "Enter" })
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("keeps a map-managed visual cluster out of the accessibility tree", () => {
    const { container } = zeroRender(
      <F0MapCluster count={1} members={members} presentational />
    )

    const cluster = container.querySelector('[aria-hidden="true"]')
    expect(cluster).toBeInTheDocument()
    expect(cluster).not.toHaveAttribute("role")
    expect(cluster).not.toHaveAttribute("tabindex")
    expect(cluster?.querySelectorAll("button, [tabindex]")).toHaveLength(0)
  })
})
