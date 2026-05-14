import { describe, expect, it } from "vitest"

import { Check } from "@/icons/app"
import { screen, zeroRender as render } from "@/testing/test-utils"

import { F0InfoCard } from "../F0InfoCard"

describe("F0InfoCard", () => {
  it("renders the primary title text", () => {
    render(
      <F0InfoCard
        title={{ icon: Check, primary: "Documents sent for signing" }}
      />
    )

    expect(screen.getByText("Documents sent for signing")).toBeInTheDocument()
  })

  it("renders the secondary line when provided", () => {
    render(
      <F0InfoCard
        title={{
          icon: Check,
          primary: "Documents sent for signing",
          secondary: "1/2 signed",
        }}
      />
    )

    expect(screen.getByText("1/2 signed")).toBeInTheDocument()
  })

  it("does not render a secondary line when omitted", () => {
    render(
      <F0InfoCard
        title={{ icon: Check, primary: "Documents sent for signing" }}
      />
    )

    expect(screen.queryByText("1/2 signed")).not.toBeInTheDocument()
  })

  it("renders the body slot when provided", () => {
    render(
      <F0InfoCard
        title={{ icon: Check, primary: "Title" }}
        body={<div>Body content</div>}
      />
    )

    expect(screen.getByText("Body content")).toBeInTheDocument()
  })

  it("does not render a body wrapper when body is omitted", () => {
    render(<F0InfoCard title={{ icon: Check, primary: "Title" }} />)

    expect(screen.queryByText("Body content")).not.toBeInTheDocument()
  })
})
