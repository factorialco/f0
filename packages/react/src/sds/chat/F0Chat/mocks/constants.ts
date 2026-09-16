export const MOCK_MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024

/** Captions keep the public video fixture accessible in chat examples. */
export const MOCK_VIDEO_CAPTIONS = [
  "WEBVTT",
  "",
  "00:00:00.000 --> 00:00:05.000",
  "[Music]",
  "",
  "00:00:05.000 --> 00:00:10.000",
  "Big Buck Bunny looks across the meadow.",
].join("\n")

/** Visual descriptions for the public video fixture's accessible demo. */
export const MOCK_VIDEO_DESCRIPTIONS = [
  "WEBVTT",
  "",
  "00:00:00.000 --> 00:00:05.000",
  "A large white rabbit steps into a sunny green meadow.",
  "",
  "00:00:05.000 --> 00:00:10.000",
  "The rabbit looks around and smiles beneath a tree.",
].join("\n")
