import { forwardRef } from "react"
import { describe, expect, it, vi } from "vitest"

import {
  act,
  fireEvent,
  screen,
  userEvent,
  zeroRender,
} from "@/testing/test-utils"

import { F0ENPSButton } from "../index"

const face = (name: string) => screen.getByRole("radio", { name })

describe("F0ENPSButton", () => {
  it("renders the five faces of the eNPS scale, worst to best", () => {
    zeroRender(<F0ENPSButton />)

    expect(
      screen
        .getAllByRole("radio")
        .map((button) => button.getAttribute("aria-label"))
    ).toEqual(["Very bad", "Bad", "Okay", "Good", "Very good"])
  })

  it("does not report an answer on mount", () => {
    const onChange = vi.fn()
    zeroRender(<F0ENPSButton value="negative" onChange={onChange} />)

    expect(onChange).not.toHaveBeenCalled()
  })

  it("reports the pressed face as the answer", async () => {
    const onChange = vi.fn()
    zeroRender(<F0ENPSButton onChange={onChange} />)

    await userEvent.click(face("Very good"))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith("superPositive")
    expect(face("Very good")).toHaveAttribute("aria-checked", "true")
  })

  it("clears the answer when the answered face is pressed again", async () => {
    const onChange = vi.fn()
    zeroRender(<F0ENPSButton value="neutral" onChange={onChange} />)

    await userEvent.click(face("Okay"))

    expect(onChange).toHaveBeenCalledWith(undefined)
  })

  it("keeps the answer when required and the answered face is pressed again", async () => {
    const onChange = vi.fn()
    zeroRender(<F0ENPSButton value="neutral" onChange={onChange} required />)

    await userEvent.click(face("Okay"))

    expect(onChange).not.toHaveBeenCalled()
    expect(face("Okay")).toHaveAttribute("aria-checked", "true")
  })

  it("colours only the answered face with its own mood", async () => {
    zeroRender(<F0ENPSButton value="negative" />)

    expect(face("Bad")).toHaveClass("text-f1-icon-mood-negative")
    expect(face("Very good")).not.toHaveClass(
      "text-f1-icon-mood-super-positive"
    )

    // The colour follows the press, not just the incoming prop.
    await userEvent.click(face("Very good"))

    expect(face("Very good")).toHaveClass("text-f1-icon-mood-super-positive")
    expect(face("Bad")).not.toHaveClass("text-f1-icon-mood-negative")
  })

  /**
   * The tooltip is the only place a face's name is written, so it opens without
   * a wait — on the default 700ms it was a name you had to stop and ask for,
   * five times over, to read the scale.
   */
  it("names the hovered face without a wait", () => {
    vi.useFakeTimers()
    try {
      zeroRender(<F0ENPSButton />)

      // `fireEvent`, not `userEvent`: the tooltip is a TIMER, and userEvent's
      // own waiting deadlocks against fake ones.
      fireEvent.pointerEnter(face("Very bad"), { pointerType: "mouse" })
      // Well past the instant 100ms, and well inside the default 700ms.
      act(() => vi.advanceTimersByTime(200))

      expect(screen.getByRole("tooltip")).toHaveTextContent("Very bad")
    } finally {
      vi.useRealTimers()
    }
  })

  it("takes the question's own wording through labels", () => {
    zeroRender(
      <F0ENPSButton
        value="superNegative"
        labels={{ superNegative: "Not at all likely" }}
      />
    )

    expect(face("Not at all likely")).toBeInTheDocument()
    // The faces left alone keep the default scale copy.
    expect(face("Okay")).toBeInTheDocument()
  })

  it("takes the question's own glyphs through icons", () => {
    const Thumb = forwardRef<SVGSVGElement>((props, ref) => (
      <svg ref={ref} {...props} data-testid="thumb" />
    ))
    Thumb.displayName = "Thumb"

    zeroRender(<F0ENPSButton icons={{ superPositive: Thumb }} />)

    expect(
      face("Very good").querySelector("[data-testid=thumb]")
    ).not.toBeNull()
    // The faces left alone keep the default mood glyph.
    expect(face("Okay").querySelector("[data-testid=thumb]")).toBeNull()
  })

  /**
   * The face is the whole control, so it is sized past F0Icon's `lg`/24px scale
   * on the svg itself. jsdom applies no Tailwind, so the class is the assertion.
   */
  it("scales the face with the size of the button", () => {
    const { unmount } = zeroRender(<F0ENPSButton />)
    expect(face("Okay")).toHaveClass("[&_svg]:w-7")
    unmount()

    zeroRender(<F0ENPSButton size="md" />)
    expect(face("Okay")).toHaveClass("[&_svg]:w-6")
  })

  it("disables every face", () => {
    zeroRender(<F0ENPSButton disabled />)

    screen
      .getAllByRole("radio")
      .forEach((button) => expect(button).toBeDisabled())
  })
})
