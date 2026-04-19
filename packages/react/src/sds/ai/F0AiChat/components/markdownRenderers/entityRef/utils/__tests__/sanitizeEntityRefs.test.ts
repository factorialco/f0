import { describe, expect, it } from "vitest"

import { sanitizeEntityRefs } from "../sanitizeEntityRefs"

const OPEN = '<entity-ref type="person" id="123">'
const OPEN2 = '<entity-ref type="person" id="456">'
const CLOSE = "</entity-ref>"

describe("sanitizeEntityRefs", () => {
  it("returns input unchanged when no entity-ref tags are present", () => {
    expect(sanitizeEntityRefs("hello world")).toBe("hello world")
  })

  it("leaves fully balanced tags untouched", () => {
    const input = `Hi ${OPEN}Alice${CLOSE}!`
    expect(sanitizeEntityRefs(input)).toBe(input)
  })

  it("strips a single orphan closing tag", () => {
    const input = `Goodbye ${CLOSE}friend`
    expect(sanitizeEntityRefs(input)).toBe("Goodbye friend")
  })

  it("strips multiple orphan closing tags", () => {
    const input = `${CLOSE}a${CLOSE}b${CLOSE}`
    expect(sanitizeEntityRefs(input)).toBe("ab")
  })

  it("collapses an unterminated trailing open tag to its label", () => {
    const input = `Hello ${OPEN}Bob`
    expect(sanitizeEntityRefs(input)).toBe("Hello Bob")
  })

  it("sanitizes a mid-stream chunk that ends inside an entity-ref", () => {
    // First chunk: opened but not yet closed
    const chunkA = `Meeting with ${OPEN}Alice`
    expect(sanitizeEntityRefs(chunkA)).toBe("Meeting with Alice")
  })

  it("handles the orphan-close pattern produced by streaming the last ref", () => {
    // Second chunk arrives carrying only the dangling closer
    const chunk = `@Alice${CLOSE} and team`
    expect(sanitizeEntityRefs(chunk)).toBe("@Alice and team")
  })

  it("preserves earlier balanced refs while stripping a later orphan close", () => {
    const input = `${OPEN}Alice${CLOSE} and ${OPEN2}Bob${CLOSE}${CLOSE}`
    expect(sanitizeEntityRefs(input)).toBe(
      `${OPEN}Alice${CLOSE} and ${OPEN2}Bob${CLOSE}`
    )
  })

  it("preserves balanced refs while collapsing an unterminated trailing open", () => {
    const input = `${OPEN}Alice${CLOSE} and ${OPEN2}Bob`
    expect(sanitizeEntityRefs(input)).toBe(`${OPEN}Alice${CLOSE} and Bob`)
  })

  it("works inside markdown formatting", () => {
    const input = `**Hi ${OPEN}Alice${CLOSE}**, see \`${CLOSE}\``
    // The orphan close inside backticks is still stripped (we do not
    // parse markdown, but rehype-raw would not render the pill either).
    expect(sanitizeEntityRefs(input)).toBe("**Hi " + OPEN + "Alice" + CLOSE + "**, see ``")
  })

  it("is idempotent on already-sanitized input", () => {
    const raw = `${OPEN}Alice${CLOSE}${CLOSE}`
    const once = sanitizeEntityRefs(raw)
    const twice = sanitizeEntityRefs(once)
    expect(twice).toBe(once)
  })
})
