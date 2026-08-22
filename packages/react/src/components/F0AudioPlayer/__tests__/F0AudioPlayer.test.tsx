import { fireEvent, waitFor } from "@testing-library/react"
import { type ComponentProps } from "react"
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

  it("offers a language selector for localized content and defaults correctly", () => {
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call"
        defaultExpanded
        defaultLanguage="en"
        content={{
          summary: [
            { locale: "en", value: "English summary" },
            { locale: "es", value: "Resumen en español" },
          ],
        }}
      />
    )
    // Language trigger present; its accessible name is the active language.
    expect(screen.getByRole("button", { name: /english/i })).toBeInTheDocument()
    // Default language ("en") content is shown.
    expect(screen.getByText("English summary")).toBeInTheDocument()
    expect(screen.queryByText("Resumen en español")).not.toBeInTheDocument()
  })

  it("offers dubbed audio languages in the kebab and swaps the source", async () => {
    const user = userEvent.setup()
    render(
      <F0AudioPlayerCard
        title="AI Call"
        defaultLanguage="en"
        src={[
          { locale: "en", value: "en.mp3" },
          { locale: "es", value: "es.mp3" },
        ]}
      />
    )
    // Default language ("en") is the loaded source.
    expect(getAudio()).toHaveAttribute("src", "en.mp3")

    await user.click(screen.getByRole("button", { name: "Recording options" }))
    expect(
      screen.getByRole("menuitem", { name: /english/i })
    ).toBeInTheDocument()
    await user.click(screen.getByRole("menuitem", { name: /spanish|español/i }))
    // Selecting a language swaps the dubbed track.
    expect(getAudio()).toHaveAttribute("src", "es.mp3")
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

describe("F0AudioPlayerCard timed transcription", () => {
  const CUES = [
    { text: "**Recruiter:** How did you hear about us?", startTime: 0 },
    { text: "**Alex:** A friend who works here", startTime: 10 },
    { text: "**Recruiter:** Tell me about the night shifts", startTime: 20 },
  ]

  const renderCard = (
    props: Partial<ComponentProps<typeof F0AudioPlayerCard>> = {}
  ) =>
    render(
      <F0AudioPlayerCard
        src="test.mp3"
        title="AI Call with Alex Williams"
        defaultExpanded
        content={{ transcription: CUES }}
        {...props}
      />
    )

  /** jsdom never loads media, so opt a test into the "already loaded" path. */
  const markLoaded = (audio: HTMLAudioElement) => {
    Object.defineProperty(audio, "readyState", { value: 1, configurable: true })
  }

  const playTo = (seconds: number) => {
    const audio = getAudio()
    audio.currentTime = seconds
    fireEvent.timeUpdate(audio)
  }

  const activeCue = () => document.querySelector("[aria-current='true']")

  beforeEach(() => {
    vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(() =>
      Promise.resolve()
    )
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders each cue as a control and counts as an available transcription", () => {
    renderCard()

    expect(
      screen.getAllByRole("button", { name: /Recruiter|Alex/ })
    ).toHaveLength(3)
    expect(
      screen.getByRole("group", { name: "AI Call with Alex Williams" })
    ).toHaveAttribute("data-audio-transcription", "available")
  })

  it("renders the speaker as markdown emphasis, not as literal asterisks", () => {
    renderCard({ content: { transcription: [{ text: "**Recruiter:** hi" }] } })

    expect(screen.getByText("Recruiter:").tagName).toBe("STRONG")
    expect(screen.queryByText(/\*\*/)).not.toBeInTheDocument()
  })

  it("keeps escaped markdown literal", () => {
    renderCard({
      content: {
        transcription: [{ text: "**Alex:** it costs 5 \\* 3 euros" }],
      },
    })

    expect(screen.getByText(/5 \* 3 euros/)).toBeInTheDocument()
  })

  it("marks the cue being spoken and follows the audio", () => {
    renderCard()

    playTo(0)
    expect(activeCue()).toHaveTextContent("How did you hear about us?")

    playTo(12)
    expect(activeCue()).toHaveTextContent("A friend who works here")
    expect(document.querySelectorAll("[aria-current='true']")).toHaveLength(1)
  })

  it("keeps the previous cue marked through a silence", () => {
    renderCard()

    playTo(15)
    expect(activeCue()).toHaveTextContent("A friend who works here")
  })

  it("marks no cue before the first one starts", () => {
    renderCard({
      content: { transcription: [{ text: "**Alex:** late", startTime: 5 }] },
    })

    playTo(2)
    expect(activeCue()).toBeNull()
  })

  it("renders an untimed transcript as plain text with no controls", () => {
    renderCard({
      content: {
        transcription: [
          { text: "**Recruiter:** no timings here" },
          { text: "**Alex:** none here either" },
        ],
      },
    })

    expect(screen.getByText(/no timings here/)).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /no timings here/ })
    ).not.toBeInTheDocument()
  })

  it("keeps an untimed cue in place between timed ones", () => {
    renderCard({
      content: {
        transcription: [
          { text: "first", startTime: 0 },
          { text: "untimed middle" },
          { text: "last", startTime: 10 },
        ],
      },
    })

    const lines = screen.getAllByRole("listitem").map((li) => li.textContent)
    expect(lines).toEqual(["first", "untimed middle", "last"])
  })

  it("moves playback to a cue when it is clicked, without changing play state", async () => {
    const onSeek = vi.fn()
    renderCard({ onSeek })
    markLoaded(getAudio())

    await userEvent.click(
      screen.getByRole("button", { name: /A friend who works here/ })
    )

    expect(getAudio().currentTime).toBe(10)
    expect(onSeek).toHaveBeenCalledExactlyOnceWith(10)
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled()
    expect(HTMLMediaElement.prototype.pause).not.toHaveBeenCalled()
  })

  it("marks the clicked cue straight away", async () => {
    renderCard()
    markLoaded(getAudio())

    await userEvent.click(screen.getByRole("button", { name: /night shifts/ }))

    expect(activeCue()).toHaveTextContent("night shifts")
  })

  it("moves playback from the keyboard", async () => {
    const onSeek = vi.fn()
    renderCard({ onSeek })
    markLoaded(getAudio())

    screen.getByRole("button", { name: /A friend who works here/ }).focus()
    await userEvent.keyboard("{Enter}")

    expect(onSeek).toHaveBeenCalledExactlyOnceWith(10)
  })

  it("still renders a string transcription as a paragraph", () => {
    renderCard({ content: { transcription: "Agent: hello\nUser: hi" } })

    expect(screen.getByText(/Agent: hello/)).toBeInTheDocument()
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument()
  })
})

describe("seeking before the audio has loaded", () => {
  const LAZY_CUES = [
    { text: "**Recruiter:** first question", startTime: 0 },
    { text: "**Alex:** an answer", startTime: 30 },
  ]

  beforeEach(() => {
    vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(() =>
      Promise.resolve()
    )
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("queues a cue click made before the source resolves, and applies it on load", async () => {
    const onSeek = vi.fn()
    render(
      <F0AudioPlayerCard
        src={vi.fn().mockResolvedValue("resolved.mp3")}
        duration={100}
        title="AI Call"
        defaultExpanded
        onSeek={onSeek}
        content={{ transcription: LAZY_CUES }}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: /an answer/ }))

    // Nothing to seek yet: the element has no source at all.
    expect(getAudio().currentTime).toBe(0)
    expect(onSeek).not.toHaveBeenCalled()
    // …but the readout already shows where playback will resume.
    expect(screen.getByText("0:30 / 1:40")).toBeInTheDocument()

    fireEvent.loadedMetadata(getAudio())

    expect(getAudio().currentTime).toBe(30)
    expect(onSeek).toHaveBeenCalledExactlyOnceWith(30)
  })

  it("marks the clicked cue while the seek is still queued", async () => {
    render(
      <F0AudioPlayerCard
        src={vi.fn().mockResolvedValue("resolved.mp3")}
        duration={100}
        title="AI Call"
        defaultExpanded
        content={{ transcription: LAZY_CUES }}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: /an answer/ }))

    expect(document.querySelector("[aria-current='true']")).toHaveTextContent(
      "an answer"
    )
  })

  it("does not resolve the source, or start playback, on a cue click", async () => {
    const resolveSrc = vi.fn().mockResolvedValue("resolved.mp3")
    render(
      <F0AudioPlayerCard
        src={resolveSrc}
        duration={100}
        title="AI Call"
        defaultExpanded
        content={{ transcription: LAZY_CUES }}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: /an answer/ }))

    expect(resolveSrc).not.toHaveBeenCalled()
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled()
  })

  it("keeps a queued position across the expired-source retry", async () => {
    const resolveSrc = vi
      .fn()
      .mockResolvedValueOnce("first.mp3")
      .mockResolvedValueOnce("second.mp3")
    const onSeek = vi.fn()
    render(
      <F0AudioPlayerCard
        src={resolveSrc}
        duration={100}
        title="AI Call"
        defaultExpanded
        onSeek={onSeek}
        content={{ transcription: LAZY_CUES }}
      />
    )

    fireEvent.click(screen.getByRole("button", { name: "Play" }))
    await waitFor(() => expect(getAudio()).toHaveAttribute("src", "first.mp3"))

    await userEvent.click(screen.getByRole("button", { name: /an answer/ }))
    fireEvent.error(getAudio())
    await waitFor(() => expect(getAudio()).toHaveAttribute("src", "second.mp3"))

    fireEvent.loadedMetadata(getAudio())
    expect(getAudio().currentTime).toBe(30)
    expect(onSeek).toHaveBeenCalledExactlyOnceWith(30)
  })

  it("queues a scrubber seek made before the source loads", async () => {
    const onSeek = vi.fn()
    render(
      <F0AudioPlayer
        src={vi.fn().mockResolvedValue("resolved.mp3")}
        duration={100}
        onSeek={onSeek}
      />
    )

    screen.getByRole("slider").focus()
    await userEvent.keyboard("{ArrowRight}")

    expect(getAudio().currentTime).toBe(0)
    fireEvent.loadedMetadata(getAudio())
    expect(getAudio().currentTime).toBe(1)
    expect(onSeek).toHaveBeenCalledExactlyOnceWith(1)
  })
})
