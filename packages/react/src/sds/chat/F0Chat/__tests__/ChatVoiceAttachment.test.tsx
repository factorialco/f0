import { beforeEach, describe, expect, it, vi } from "vitest"

import { fireEvent, zeroRender as render, screen } from "@/testing/test-utils"

import { ChatVoiceAttachment } from "../components/ChatVoiceAttachment"
import { type F0ChatVoiceAttachment } from "../types"
import { summariseAttachments } from "../utils/reply-preview"

const VOICE: F0ChatVoiceAttachment = {
  kind: "voice",
  url: "https://cdn.example.com/voice-note.webm",
  durationSeconds: 4,
  mimeType: "audio/webm",
}

describe("ChatVoiceAttachment", () => {
  beforeEach(() => {
    // The waveform decoder fetches the audio — keep tests offline (it falls
    // back to the neutral bar shape).
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")))
  })

  it("renders the audio element and the WhatsApp-style waveform bars", () => {
    render(<ChatVoiceAttachment voice={VOICE} />)
    const audio = document.querySelector("audio")
    expect(audio?.getAttribute("src")).toBe(VOICE.url)

    const waveform = screen.getByTestId("chat-voice-waveform")
    expect(waveform.querySelectorAll("span").length).toBe(32)
  })

  it("defaults to 320px and never exceeds its container", () => {
    render(<ChatVoiceAttachment voice={VOICE} />)
    const card = screen.getByTestId("chat-voice-attachment")
    expect(card.className).toContain("w-80")
    expect(card.className).toContain("max-w-full")
    expect(card.className).toContain("min-w-0")
  })

  it("shows the total duration before playback starts", () => {
    render(<ChatVoiceAttachment voice={VOICE} />)
    expect(screen.getByText("0:04")).toBeInTheDocument()
  })

  it("swaps the duration for the speed pill on hover (group classes)", () => {
    render(<ChatVoiceAttachment voice={VOICE} />)
    expect(screen.getByTestId("chat-voice-time").className).toContain(
      "group-hover/voice:hidden"
    )
    const pillWrapper = screen.getByTestId("chat-voice-rate").closest("div")
    expect(pillWrapper?.className).toContain("hidden")
    expect(pillWrapper?.className).toContain("group-hover/voice:flex")
  })

  it("keeps a fixed-width trailing slot so the waveform never resizes", () => {
    render(<ChatVoiceAttachment voice={VOICE} />)
    expect(screen.getByTestId("chat-voice-time").className).toContain("w-12")
    const pillWrapper = screen.getByTestId("chat-voice-rate").closest("div")
    expect(pillWrapper?.className).toContain("w-12")
  })

  it("cycles the playback rate 1x → 1.5x → 2x → 0.5x on the speed pill", () => {
    render(<ChatVoiceAttachment voice={VOICE} />)
    const pill = screen.getByTestId("chat-voice-rate")
    const audio = document.querySelector("audio") as HTMLAudioElement

    expect(pill).toHaveTextContent("1x")
    fireEvent.click(pill)
    expect(pill).toHaveTextContent("1.5x")
    expect(audio.playbackRate).toBe(1.5)
    fireEvent.click(pill)
    expect(pill).toHaveTextContent("2x")
    expect(audio.playbackRate).toBe(2)
    fireEvent.click(pill)
    expect(pill).toHaveTextContent("0.5x")
    expect(audio.playbackRate).toBe(0.5)
    fireEvent.click(pill)
    expect(pill).toHaveTextContent("1x")
  })

  it("matches the bubble surface: mine grey, others bordered white", () => {
    render(<ChatVoiceAttachment voice={VOICE} isMine />)
    expect(screen.getByTestId("chat-voice-attachment").className).toContain(
      "bg-f1-background-tertiary"
    )

    render(<ChatVoiceAttachment voice={VOICE} isMine={false} />)
    const cards = screen.getAllByTestId("chat-voice-attachment")
    expect(cards[1].className).toContain("border-f1-border-secondary")
  })

  it("applies the bubble's chained-corner classes", () => {
    render(
      <ChatVoiceAttachment
        voice={VOICE}
        cornerClass="rounded-2xl rounded-tl-sm"
      />
    )
    expect(screen.getByTestId("chat-voice-attachment").className).toContain(
      "rounded-tl-sm"
    )
  })
})

describe("reply preview with a voice note", () => {
  it("summarises a lone voice note as its own kind", () => {
    expect(summariseAttachments([VOICE])).toEqual({ kind: "voice" })
  })

  it("counts voice notes into mixed summaries", () => {
    expect(
      summariseAttachments([
        VOICE,
        { kind: "file", url: "https://x/f.pdf", name: "f.pdf" },
      ])
    ).toEqual({ kind: "mixed", count: 2 })
  })
})
