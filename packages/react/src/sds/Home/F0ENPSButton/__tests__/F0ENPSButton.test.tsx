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

const LABELS = {
  superNegative: "Very bad",
  negative: "Bad",
  neutral: "Okay",
  positive: "Good",
  superPositive: "Very good",
}

const face = (name: string) => screen.getByRole("radio", { name })

describe("F0ENPSButton", () => {
  it("renders the five faces of the eNPS scale, worst to best", () => {
    zeroRender(<F0ENPSButton labels={LABELS} />)

    expect(
      screen
        .getAllByRole("radio")
        .map((button) => button.getAttribute("aria-label"))
    ).toEqual(["Very bad", "Bad", "Okay", "Good", "Very good"])
  })

  it("does not report an answer on mount", () => {
    const onChange = vi.fn()
    zeroRender(
      <F0ENPSButton labels={LABELS} value="negative" onChange={onChange} />
    )

    expect(onChange).not.toHaveBeenCalled()
  })

  it("reports the pressed face as the answer", async () => {
    const onChange = vi.fn()
    zeroRender(<F0ENPSButton labels={LABELS} onChange={onChange} />)

    await userEvent.click(face("Very good"))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith("superPositive")
    expect(face("Very good")).toHaveAttribute("aria-checked", "true")
  })

  it("clears the answer when the answered face is pressed again", async () => {
    const onChange = vi.fn()
    zeroRender(
      <F0ENPSButton labels={LABELS} value="neutral" onChange={onChange} />
    )

    await userEvent.click(face("Okay"))

    expect(onChange).toHaveBeenCalledWith(undefined)
  })

  it("keeps the answer when required and the answered face is pressed again", async () => {
    const onChange = vi.fn()
    zeroRender(
      <F0ENPSButton
        labels={LABELS}
        value="neutral"
        onChange={onChange}
        required
      />
    )

    await userEvent.click(face("Okay"))

    expect(onChange).not.toHaveBeenCalled()
    expect(face("Okay")).toHaveAttribute("aria-checked", "true")
  })

  it("colours only the answered face with its own mood", async () => {
    zeroRender(<F0ENPSButton labels={LABELS} value="negative" />)

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
   * An unanswered row reads as a scale rather than five buttons, so every face
   * is already in its own colour — the glyph only, and only until an answer
   * makes one face the coloured one.
   */
  it("colours every face while the question is unanswered", () => {
    zeroRender(<F0ENPSButton labels={LABELS} />)

    expect(face("Very bad")).toHaveClass("text-f1-icon-mood-super-negative")
    expect(face("Bad")).toHaveClass("text-f1-icon-mood-negative")
    expect(face("Okay")).toHaveClass("text-f1-icon-mood-neutral")
    expect(face("Good")).toHaveClass("text-f1-icon-mood-positive")
    expect(face("Very good")).toHaveClass("text-f1-icon-mood-super-positive")
  })

  it("colours the glyph only — no fill and no border — while unanswered", () => {
    zeroRender(<F0ENPSButton labels={LABELS} />)

    // The fill and border are how an ANSWERED face is drawn; the class an
    // answered face would carry is the assertion (jsdom applies no Tailwind).
    expect(face("Bad").className).not.toContain("bg-[hsl(var(--mood-negative)")
    expect(face("Bad").className).not.toContain(
      "border-[hsl(var(--mood-negative)"
    )
    // Still the plain unselected chrome, which is what leaves an answer
    // something to stand out against.
    expect(face("Bad")).toHaveClass("bg-transparent")
    expect(face("Bad")).toHaveClass("border-f1-border")
  })

  it("hands the colour back once a face is answered", async () => {
    zeroRender(<F0ENPSButton labels={LABELS} />)

    await userEvent.click(face("Good"))

    expect(face("Good")).toHaveClass("text-f1-icon-mood-positive")
    // The four not chosen mute, so the answer is the coloured one.
    expect(face("Bad")).not.toHaveClass("text-f1-icon-mood-negative")
    expect(face("Very good")).not.toHaveClass(
      "text-f1-icon-mood-super-positive"
    )
  })

  /**
   * A step back from `F0ButtonToggle`'s own `text-f1-icon`: coming off five
   * coloured glyphs, that stop is not far enough for the answer to be the
   * obvious one.
   */
  it("mutes the faces not chosen to secondary", () => {
    zeroRender(<F0ENPSButton labels={LABELS} value="neutral" />)

    expect(face("Very bad")).toHaveClass("text-f1-icon-secondary")
    expect(face("Bad")).toHaveClass("text-f1-icon-secondary")
    expect(face("Good")).toHaveClass("text-f1-icon-secondary")
    expect(face("Very good")).toHaveClass("text-f1-icon-secondary")
    // Never the answered one — its colour is the toggle's to draw.
    expect(face("Okay")).not.toHaveClass("text-f1-icon-secondary")
    expect(face("Okay")).toHaveClass("text-f1-icon-mood-neutral")
  })

  /**
   * The tooltip is the only place a face's name is written, so it opens without
   * a wait — on the default 700ms it was a name you had to stop and ask for,
   * five times over, to read the scale.
   */
  it("names the hovered face without a wait", () => {
    vi.useFakeTimers()
    try {
      zeroRender(<F0ENPSButton labels={LABELS} />)

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

  /**
   * The component holds no copy: the same five faces answer a mood question and
   * a likelihood one, and only the labels say which.
   */
  it("names the faces from labels alone", () => {
    zeroRender(
      <F0ENPSButton
        value="superNegative"
        labels={{
          superNegative: "Not at all likely",
          negative: "Unlikely",
          neutral: "Neither",
          positive: "Likely",
          superPositive: "Extremely likely",
        }}
      />
    )

    expect(
      screen
        .getAllByRole("radio")
        .map((button) => button.getAttribute("aria-label"))
    ).toEqual([
      "Not at all likely",
      "Unlikely",
      "Neither",
      "Likely",
      "Extremely likely",
    ])
  })

  it("takes the question's own glyphs through icons", () => {
    const Thumb = forwardRef<SVGSVGElement>((props, ref) => (
      <svg ref={ref} {...props} data-testid="thumb" />
    ))
    Thumb.displayName = "Thumb"

    zeroRender(
      <F0ENPSButton labels={LABELS} icons={{ superPositive: Thumb }} />
    )

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
    const { unmount } = zeroRender(<F0ENPSButton labels={LABELS} />)
    expect(face("Okay")).toHaveClass("[&_svg]:w-7")
    unmount()

    zeroRender(<F0ENPSButton labels={LABELS} size="md" />)
    expect(face("Okay")).toHaveClass("[&_svg]:w-6")
  })

  it("disables every face", () => {
    zeroRender(<F0ENPSButton labels={LABELS} disabled />)

    screen
      .getAllByRole("radio")
      .forEach((button) => expect(button).toBeDisabled())
  })
})
