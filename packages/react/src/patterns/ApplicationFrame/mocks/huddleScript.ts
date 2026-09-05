/**
 * One written conversation, and everything else reads from it.
 *
 * Before this existed the demo had four independent random processes — a
 * turn-taking director, a bag of ten unrelated sentences, an empty chat and one
 * looping clip — and the reason it never felt like a call is that none of them
 * knew what the others were doing. Here the same lines drive who is audibly
 * speaking, whose tile lights up, what the transcript says, what arrives in the
 * call's chat, and what the summary on the ended card is about.
 *
 * `speaker` is a ROLE, not an id: `"me"` or an index into the other attendees.
 * That is what lets one script serve a 1:1 and a five-person room — indices wrap
 * (`others[i % others.length]`), and the script alternates with `"me"` so a DM
 * still reads as a clean back-and-forth.
 */

export type HuddleScriptLine = {
  /** Milliseconds from the moment the room connects. */
  at: number
  speaker: "me" | number
  /** Spoken: drives the voice, the speaking ring and the transcript. */
  say?: string
  /** Typed into the call's own chat instead of spoken. */
  chat?: string
}

export type HuddleScript = {
  lines: HuddleScriptLine[]
  /**
   * What the call decided, for the card in the conversation once it ends.
   * `{0}`, `{1}`, … are the other attendees' first names, `{me}` is yours.
   */
  summary: string
}

/** How long a line takes to say, which is also how long the ring stays lit. */
export const speechDurationMs = (text: string): number =>
  text.trim().split(/\s+/).length * 380 + 400

/**
 * A product 1:1 that actually decides something — a flag, an owner and a
 * blocker — because the summary on the ended card has to be a recap of
 * something, and prose about nothing reads as filler the moment you look at it.
 */
export const HUDDLE_SCRIPT: HuddleScript = {
  summary:
    "Agreed to ship the side panel behind a flag for the first week rather than to everyone. " +
    "{0} owns the migration script and will have it up for review on Thursday. " +
    "{me} is unblocking the staging seed today, which is what {0} is waiting on.",
  // `at` values leave a beat after each line ends. They are derived from the
  // word counts, not eyeballed: overlapping turns is exactly the noise the
  // random director produced, and a transcript of two people talking at once is
  // the thing this replaces.
  lines: [
    {
      at: 0,
      speaker: 0,
      say: "Right — the side panel. Did you get a look at the flag?",
    },
    {
      at: 5_940,
      speaker: "me",
      say: "I did. I think we ship it behind one, at least for the first week.",
    },
    {
      at: 12_640,
      speaker: 1,
      say: "That's the safer read. I don't want it on for everyone before we see numbers.",
    },
    {
      at: 19_340,
      speaker: "me",
      say: "Same. And if it's ugly we turn it off without a deploy.",
    },
    {
      at: 24_900,
      speaker: 0,
      chat: "here's the rollout doc — /docs/panel-rollout",
    },
    {
      at: 24_900,
      speaker: 2,
      say: "One thing. The migration has to land first or the flag reads stale data.",
    },
    {
      at: 31_220,
      speaker: "me",
      say: "Good catch. Who wants to own the migration script?",
    },
    {
      at: 35_640,
      speaker: 0,
      say: "I'll take it. I can have it up for review Thursday.",
    },
    {
      at: 40_820,
      speaker: "me",
      say: "Thursday works. Anything blocking you before then?",
    },
    {
      at: 44_480,
      speaker: 0,
      say: "The staging seed, still. I can't reproduce the migration locally without it.",
    },
    {
      at: 50_040,
      speaker: "me",
      say: "I'll unblock that today. It's a permissions thing.",
    },
    {
      at: 54_080,
      speaker: 1,
      chat: "I can pair on the seed if it's still broken after lunch",
    },
    {
      at: 54_080,
      speaker: 2,
      say: "Do we tell support before the flag goes on, or after we see the numbers?",
    },
    {
      at: 60_780,
      speaker: "me",
      say: "Before. A heads-up costs nothing and a surprise costs a week of tickets.",
    },
    {
      at: 66_720,
      speaker: 1,
      say: "I'll write the note. Short one, two paragraphs.",
    },
    {
      at: 70_760,
      speaker: 0,
      say: "Then that's everything from my side. I'll ping the channel when the script is up.",
    },
    { at: 77_460, speaker: "me", say: "Perfect. Thanks both — I'll drop off." },
    { at: 81_120, speaker: 2, chat: "👍" },
  ],
}

export type ResolvedScriptLine = {
  at: number
  /** Participant id, already resolved from the role. */
  participantId: string
  durationMs: number
  say?: string
  chat?: string
}

/**
 * Binds the roles to real people.
 *
 * `others` is the room minus you. An empty room (a huddle you opened alone)
 * yields only your own lines, which is correct: nobody else is there to talk.
 */
export const resolveScript = (
  script: HuddleScript,
  meId: string,
  otherIds: readonly string[]
): ResolvedScriptLine[] =>
  script.lines.flatMap((line) => {
    let participantId: string
    if (line.speaker === "me") {
      participantId = meId
    } else {
      if (otherIds.length === 0) return []
      participantId = otherIds[line.speaker % otherIds.length] as string
    }
    const text = line.say ?? line.chat ?? ""
    return [
      {
        at: line.at,
        participantId,
        durationMs: line.say ? speechDurationMs(line.say) : 0,
        ...(line.say ? { say: line.say } : {}),
        ...(line.chat ? { chat: line.chat } : {}),
      },
    ].filter(() => text.length > 0)
  })

/** Fills `{0}`, `{1}`, `{me}` with first names. */
export const resolveSummary = (
  summary: string,
  meName: string,
  otherNames: readonly string[]
): string => {
  const first = (name: string) => name.split(/\s+/)[0] ?? name
  return summary.replace(/\{(me|\d+)\}/g, (_match, key: string) => {
    if (key === "me") return first(meName)
    if (otherNames.length === 0) return first(meName)
    const name = otherNames[Number(key) % otherNames.length]
    return name ? first(name) : first(meName)
  })
}

/** When the conversation runs out, so the caller can loop or fall quiet. */
export const scriptDurationMs = (
  lines: readonly ResolvedScriptLine[]
): number =>
  lines.reduce(
    (longest, line) => Math.max(longest, line.at + line.durationMs),
    0
  )
