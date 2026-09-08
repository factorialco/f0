import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { F0BigNumber } from "../F0BigNumber"

/**
 * `comparison` is optional, and the docs tell consumers to omit it when there
 * is no comparable previous period rather than invent a baseline. These tests
 * pin that contract down.
 *
 * Only the presentational tag is stubbed — the real `@/lib/numeric` path runs,
 * because the whole question is whether normalizing an absent comparison keeps
 * the balance tag from rendering (the sibling test file mocks those utilities,
 * so it cannot answer this).
 */
const MockF0TagBalance = vi.hoisted(() =>
  vi.fn(() => <div data-testid="tag-balance">TagBalance Mock</div>)
)

vi.mock("@/components/tags/F0TagBalance", () => ({
  F0TagBalance: MockF0TagBalance,
}))
vi.mock("../tags/F0TagBalance", () => ({
  F0TagBalance: MockF0TagBalance,
}))

describe("F0BigNumber — optional comparison", () => {
  it("renders the value and no balance tag when comparison is omitted", () => {
    const { queryByTestId, getByText } = zeroRender(
      <F0BigNumber label="Headcount" value={1280} />
    )

    expect(getByText("Headcount")).toBeInTheDocument()
    expect(getByText("1,280")).toBeInTheDocument()
    expect(queryByTestId("tag-balance")).not.toBeInTheDocument()
  })

  it("still renders the balance tag when comparison is provided", () => {
    const { queryByTestId } = zeroRender(
      <F0BigNumber label="Headcount" value={1280} comparison={1200} />
    )

    expect(queryByTestId("tag-balance")).toBeInTheDocument()
  })

  it("renders no balance tag when comparison is explicitly undefined", () => {
    const { queryByTestId } = zeroRender(
      <F0BigNumber label="Headcount" value={1280} comparison={undefined} />
    )

    expect(queryByTestId("tag-balance")).not.toBeInTheDocument()
  })
})
