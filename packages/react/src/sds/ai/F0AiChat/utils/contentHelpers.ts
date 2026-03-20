/**
 * Normalize CopilotKit message content to a plain string.
 *
 * Since CopilotKit 1.54.0 / AG-UI, `message.content` may be
 * `string | InputContent[] | Record<string, any>`. This helper
 * extracts the text parts from the array form and concatenates them,
 * returns the string as-is, or falls back to "" for other shapes.
 */
export function getTextContent(
  content:
    | string
    | Array<{ type: string; text?: string }>
    | Record<string, unknown>
    | undefined
): string {
  if (typeof content === "string") return content
  if (Array.isArray(content)) {
    return content
      .filter((part) => part.type === "text" && part.text)
      .map((part) => part.text)
      .join("")
  }
  return ""
}
