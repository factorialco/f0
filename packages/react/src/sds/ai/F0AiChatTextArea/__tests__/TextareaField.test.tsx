import { createRef } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { TextareaField } from "../components/TextareaField"

vi.mock("../components/TypewriterPlaceholder", () => ({
  TypewriterPlaceholder: ({ placeholders }: { placeholders: string[] }) => (
    <p data-testid="typewriter-placeholder">{placeholders.join(", ")}</p>
  ),
}))

const defaultProps = {
  textareaRef: createRef<HTMLTextAreaElement>(),
  highlightRef: createRef<HTMLDivElement>(),
  inputValue: "",
  onInputChange: vi.fn(),
  onKeyDown: vi.fn(),
  onCursorUpdate: vi.fn(),
  onScroll: vi.fn(),
  highlightSegments: [],
  hasOverlay: false,
  multiplePlaceholders: false,
  placeholders: [] as string[],
  resolvedDefaultPlaceholder: "Ask me anything",
  inProgress: false,
}

describe("TextareaField placeholder rendering", () => {
  it("renders the default placeholder when placeholders array is empty", () => {
    render(<TextareaField {...defaultProps} placeholders={[]} />)

    expect(screen.getByText("Ask me anything")).toBeInTheDocument()
    expect(
      screen.queryByTestId("typewriter-placeholder")
    ).not.toBeInTheDocument()
  })

  it("renders the custom placeholder when placeholders array has a single element", () => {
    render(
      <TextareaField
        {...defaultProps}
        placeholders={["What is my time off balance?"]}
      />
    )

    expect(screen.getByText("What is my time off balance?")).toBeInTheDocument()
    expect(screen.queryByText("Ask me anything")).not.toBeInTheDocument()
  })

  it("renders the TypewriterPlaceholder when there are multiple placeholders", () => {
    render(
      <TextareaField
        {...defaultProps}
        multiplePlaceholders={true}
        placeholders={["First placeholder", "Second placeholder"]}
      />
    )

    expect(screen.getByTestId("typewriter-placeholder")).toBeInTheDocument()
    expect(screen.queryByText("Ask me anything")).not.toBeInTheDocument()
  })

  it("does not render any placeholder when there is input value", () => {
    render(
      <TextareaField
        {...defaultProps}
        inputValue="hello"
        placeholders={["Custom placeholder"]}
      />
    )

    expect(screen.queryByText("Custom placeholder")).not.toBeInTheDocument()
    expect(screen.queryByText("Ask me anything")).not.toBeInTheDocument()
  })
})
