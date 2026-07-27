import { fireEvent, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import { F0AudioPlayer, F0AudioPlayerCard } from ".."

const getAudio = (): HTMLAudioElement => {
  const audio = document.querySelector("audio")
  if (!audio) throw new Error("audio element not found")
  return audio
}

describe("F0AudioPlayer", () => {
  let playSpy: ReturnType<typeof vi.spyOn>
  let pauseSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    playSpy = vi
      .spyOn(HTMLMediaElement.prototype, "play")
      .mockImplementation(() => Promise.resolve())
    pauseSpy = vi
      .spyOn(HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders the player region and a play control", () => {
    render(<F0AudioPlayer src="test.mp3" />)
    expect(
      screen.getByRole("group", { name: "Audio player" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument()
  })

  it("renders the audio element with the given src and preload", () => {
    render(<F0AudioPlayer src="test.mp3" preload="auto" />)
    const audio = getAudio()
    expect(audio).toHaveAttribute("src", "test.mp3")
    expect(audio).toHaveAttribute("preload", "auto")
  })

  it("plays when the play control is clicked", () => {
    render(<F0AudioPlayer src="test.mp3" />)
    fireEvent.click(screen.getByRole("button", { name: "Play" }))
    expect(playSpy).toHaveBeenCalledOnce()
  })

  it("swaps to a pause control and pauses while playing", () => {
    const onPlay = vi.fn()
    render(<F0AudioPlayer src="test.mp3" onPlay={onPlay} />)

    fireEvent.play(getAudio())

    const pauseButton = screen.getByRole("button", { name: "Pause" })
    expect(pauseButton).toBeInTheDocument()
    expect(onPlay).toHaveBeenCalledOnce()

    fireEvent.click(pauseButton)
    expect(pauseSpy).toHaveBeenCalledOnce()
  })

  it("shows current and total time", () => {
    render(<F0AudioPlayer src="test.mp3" />)
    expect(screen.getByText("0:00 / 0:00")).toBeInTheDocument()
  })

  it("disables the controls when disabled", () => {
    render(<F0AudioPlayer src="test.mp3" disabled />)
    expect(screen.getByRole("button", { name: "Play" })).toBeDisabled()
  })

  it("reports load errors via onError", () => {
    const onError = vi.fn()
    render(<F0AudioPlayer src="test.mp3" onError={onError} />)
    fireEvent.error(getAudio())
    expect(onError).toHaveBeenCalledOnce()
  })

  it("applies dataTestId", () => {
    render(<F0AudioPlayer src="test.mp3" dataTestId="player" />)
    expect(screen.getByTestId("player")).toBeInTheDocument()
  })
})

describe("F0AudioPlayerCard", () => {
  beforeEach(() => {
    vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(() =>
      Promise.resolve()
    )
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders the title, subtitle, kebab and the embedded player", () => {
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call with Alex Williams"
        subtitle="May 9, 2025 - 10:00am"
      />
    )
    expect(screen.getByText("AI Call with Alex Williams")).toBeInTheDocument()
    expect(screen.getByText("May 9, 2025 - 10:00am")).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Recording options" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument()
  })

  it("changes playback speed from the kebab menu", async () => {
    const user = userEvent.setup()
    render(<F0AudioPlayerCard src="test.mp3" title="AI Call" />)

    await user.click(screen.getByRole("button", { name: "Recording options" }))
    const option = await screen.findByRole("menuitem", { name: "1.5x" })
    await user.click(option)

    // The f0 Dropdown defers item onClick by ~200ms.
    await waitFor(() => expect(getAudio().playbackRate).toBe(1.5))
  })

  const DETAILS = [
    { value: "summary", label: "Summary", content: <p>Summary text</p> },
    {
      value: "transcript",
      label: "Transcript",
      content: <p>Transcript text</p>,
    },
  ]

  it("does not render a detail toggle when no details are given", () => {
    render(<F0AudioPlayerCard src="test.mp3" title="AI Call" />)
    expect(
      screen.queryByRole("button", { name: "View detail" })
    ).not.toBeInTheDocument()
  })

  it("toggles the detail panel and flips the button label", async () => {
    const user = userEvent.setup()
    render(
      <F0AudioPlayerCard src="test.mp3" title="AI Call" details={DETAILS} />
    )

    const toggle = screen.getByRole("button", { name: "View detail" })
    expect(toggle).toHaveAttribute("aria-expanded", "false")

    await user.click(toggle)
    const hide = screen.getByRole("button", { name: "Hide detail" })
    expect(hide).toHaveAttribute("aria-expanded", "true")

    await user.click(hide)
    expect(screen.getByRole("button", { name: "View detail" })).toHaveAttribute(
      "aria-expanded",
      "false"
    )
  })

  it("switches between the summary and transcript tabs", async () => {
    const user = userEvent.setup()
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        details={DETAILS}
        defaultExpanded
      />
    )

    expect(screen.getByText("Summary text")).toBeInTheDocument()

    await user.click(screen.getByRole("radio", { name: "Transcript" }))
    expect(screen.getByText("Transcript text")).toBeInTheDocument()
  })

  it("supports a controlled expanded state", async () => {
    const user = userEvent.setup()
    const onExpandedChange = vi.fn()
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        details={DETAILS}
        expanded={false}
        onExpandedChange={onExpandedChange}
      />
    )

    await user.click(screen.getByRole("button", { name: "View detail" }))
    expect(onExpandedChange).toHaveBeenCalledWith(true)
    // Still collapsed because the prop didn't change (controlled).
    expect(
      screen.getByRole("button", { name: "View detail" })
    ).toBeInTheDocument()
  })

  it("keeps the detail toggle usable while the player is disabled", () => {
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        details={DETAILS}
        disabled
      />
    )
    expect(screen.getByRole("button", { name: "Play" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "View detail" })).toBeEnabled()
  })

  it("falls back to the first tab when details change to a new set", async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        details={DETAILS}
        defaultExpanded
      />
    )

    // Select the second tab, then swap in a brand-new details array.
    await user.click(screen.getByRole("radio", { name: "Transcript" }))
    rerender(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        details={[
          { value: "notes", label: "Notes", content: <p>Notes text</p> },
          { value: "score", label: "Score", content: <p>Score text</p> },
        ]}
        defaultExpanded
      />
    )

    // The stale "transcript" selection is gone, so the first new tab is active.
    expect(screen.getByText("Notes text")).toBeInTheDocument()
    expect(screen.getByRole("radio", { name: "Notes" })).toHaveAttribute(
      "data-state",
      "on"
    )
  })

  it("builds Summary and Transcription tabs from the content prop", async () => {
    const user = userEvent.setup()
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        content={{ summary: "Summary body", transcription: "Transcript body" }}
        defaultExpanded
      />
    )

    expect(screen.getByRole("radio", { name: "Summary" })).toBeInTheDocument()
    expect(
      screen.getByRole("radio", { name: "Transcription" })
    ).toBeInTheDocument()
    expect(screen.getByText("Summary body")).toBeInTheDocument()

    await user.click(screen.getByRole("radio", { name: "Transcription" }))
    expect(screen.getByText("Transcript body")).toBeInTheDocument()
  })

  it("prefers content over the deprecated details prop", () => {
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        content={{ summary: "New summary" }}
        details={DETAILS}
        defaultExpanded
      />
    )

    expect(screen.getByText("New summary")).toBeInTheDocument()
    // The legacy tab content is ignored when `content` is set.
    expect(screen.queryByText("Summary text")).not.toBeInTheDocument()
    expect(
      screen.queryByRole("radio", { name: "Transcript" })
    ).not.toBeInTheDocument()
  })

  it("drops the segmented control and names the toggle for a lone transcription", async () => {
    const user = userEvent.setup()
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        content={{ transcription: "Transcript body" }}
      />
    )

    const toggle = screen.getByRole("button", { name: "View transcription" })
    await user.click(toggle)
    expect(
      screen.getByRole("button", { name: "Hide transcription" })
    ).toBeInTheDocument()
    // A single tab has nothing to switch between — no segmented control.
    expect(screen.queryByRole("radio")).not.toBeInTheDocument()
    expect(screen.getByText("Transcript body")).toBeInTheDocument()
  })

  it("names the toggle for a lone summary", () => {
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        content={{ summary: "Summary body" }}
      />
    )
    expect(
      screen.getByRole("button", { name: "View summary" })
    ).toBeInTheDocument()
    expect(screen.queryByRole("radio")).not.toBeInTheDocument()
  })

  it("keeps the segmented control and generic label with multiple tabs", () => {
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        content={{ summary: "S", transcription: "T" }}
      />
    )
    expect(
      screen.getByRole("button", { name: "View detail" })
    ).toBeInTheDocument()
    expect(screen.getByRole("radio", { name: "Summary" })).toBeInTheDocument()
    expect(
      screen.getByRole("radio", { name: "Transcription" })
    ).toBeInTheDocument()
  })

  it("flags a card with no transcription for the a11y check", () => {
    render(<F0AudioPlayerCard src="test.mp3" title="AI Call" />)
    expect(screen.getByRole("group", { name: "AI Call" })).toHaveAttribute(
      "data-audio-transcription",
      "missing"
    )
  })

  it("marks the card available once a transcription is provided", () => {
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        content={{ transcription: "A spoken-word transcript" }}
      />
    )
    expect(screen.getByRole("group", { name: "AI Call" })).toHaveAttribute(
      "data-audio-transcription",
      "available"
    )
  })

  it("treats content without a transcription as still missing", () => {
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        content={{ summary: "Just a summary" }}
      />
    )
    expect(screen.getByRole("group", { name: "AI Call" })).toHaveAttribute(
      "data-audio-transcription",
      "missing"
    )
  })

  it("flags a legacy details card as missing a transcription", () => {
    // The deprecated `details` array is opaque — we can't confirm a transcript,
    // so it counts as missing (migrate to `content.transcription`).
    render(
      <F0AudioPlayerCard src="test.mp3" title="AI Call" details={DETAILS} />
    )
    expect(screen.getByRole("group", { name: "AI Call" })).toHaveAttribute(
      "data-audio-transcription",
      "missing"
    )
  })
})

describe("F0AudioPlayer lazy source", () => {
  let playSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    playSpy = vi
      .spyOn(HTMLMediaElement.prototype, "play")
      .mockImplementation(() => Promise.resolve())
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("does not resolve or set a src until play is requested", () => {
    const resolveSrc = vi.fn().mockResolvedValue("resolved.mp3")
    render(<F0AudioPlayer src={resolveSrc} duration={100} />)

    expect(resolveSrc).not.toHaveBeenCalled()
    expect(getAudio()).not.toHaveAttribute("src")
  })

  it("defaults preload to none in lazy mode", () => {
    render(<F0AudioPlayer src={vi.fn().mockResolvedValue("x.mp3")} />)
    expect(getAudio()).toHaveAttribute("preload", "none")
  })

  it("shows the total time from the duration prop before loading", () => {
    render(
      <F0AudioPlayer src={vi.fn().mockResolvedValue("x.mp3")} duration={272} />
    )
    expect(screen.getByText("0:00 / 4:32")).toBeInTheDocument()
  })

  it("resolves the src function and plays on first click", async () => {
    const resolveSrc = vi.fn().mockResolvedValue("resolved.mp3")
    render(<F0AudioPlayer src={resolveSrc} duration={100} />)

    fireEvent.click(screen.getByRole("button", { name: "Play" }))

    expect(resolveSrc).toHaveBeenCalledOnce()
    await waitFor(() =>
      expect(getAudio()).toHaveAttribute("src", "resolved.mp3")
    )
    await waitFor(() => expect(playSpy).toHaveBeenCalled())
  })

  it("re-resolves the src function once after a media error", async () => {
    const resolveSrc = vi
      .fn()
      .mockResolvedValueOnce("first.mp3")
      .mockResolvedValueOnce("second.mp3")
    render(<F0AudioPlayer src={resolveSrc} duration={100} />)

    fireEvent.click(screen.getByRole("button", { name: "Play" }))
    await waitFor(() => expect(getAudio()).toHaveAttribute("src", "first.mp3"))

    fireEvent.error(getAudio())
    await waitFor(() => expect(getAudio()).toHaveAttribute("src", "second.mp3"))
    expect(resolveSrc).toHaveBeenCalledTimes(2)
  })

  it("routes a src-resolver rejection to onError and recovers on retry", async () => {
    const onError = vi.fn()
    const resolveSrc = vi
      .fn()
      .mockRejectedValueOnce(new Error("expired"))
      .mockResolvedValueOnce("resolved.mp3")
    render(<F0AudioPlayer src={resolveSrc} duration={100} onError={onError} />)

    fireEvent.click(screen.getByRole("button", { name: "Play" }))
    await waitFor(() => expect(onError).toHaveBeenCalledWith(null))
    expect(playSpy).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole("button", { name: "Play" }))
    await waitFor(() =>
      expect(getAudio()).toHaveAttribute("src", "resolved.mp3")
    )
    await waitFor(() => expect(playSpy).toHaveBeenCalled())
    expect(resolveSrc).toHaveBeenCalledTimes(2)
  })
})
