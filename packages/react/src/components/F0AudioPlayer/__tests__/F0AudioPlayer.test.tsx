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
})
