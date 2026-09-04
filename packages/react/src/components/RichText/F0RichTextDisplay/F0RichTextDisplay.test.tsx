import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { F0RichTextDisplay } from "./F0RichTextDisplay"

describe("F0RichTextDisplay sanitization", () => {
  it("strips event handlers from content", () => {
    const { container } = render(
      <F0RichTextDisplay content={`<img src="x" onerror="alert(1)">`} />
    )

    expect(container.innerHTML).not.toContain("onerror")
  })

  it("strips javascript: URLs from content", () => {
    const { container } = render(
      <F0RichTextDisplay content={`<a href="javascript:alert(1)">go</a>`} />
    )

    expect(container.innerHTML).not.toContain("javascript:")
  })

  // Regression: `{...props}` used to be spread AFTER `dangerouslySetInnerHTML`,
  // so a caller could hand over raw HTML and silently replace the sanitized
  // output. The prop type now omits the key, but a JS consumer (or a `{...rest}`
  // forwarded from a wider prop bag) can still reach the runtime path — so the
  // attribute ordering has to hold on its own.
  it("ignores a caller-supplied dangerouslySetInnerHTML instead of rendering it", () => {
    const { container } = render(
      <F0RichTextDisplay
        content="safe content"
        // @ts-expect-error -- omitted from the prop type on purpose; this
        // asserts the runtime is safe even when the type check is bypassed.
        dangerouslySetInnerHTML={{ __html: `<img src="x" onerror="alert(1)">` }}
      />
    )

    expect(container.innerHTML).not.toContain("onerror")
    expect(container.textContent).toContain("safe content")
  })
})
