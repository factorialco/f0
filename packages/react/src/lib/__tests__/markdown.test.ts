import { describe, expect, it } from "vitest"

import { parseMarkdown, parseMarkdownDocument } from "../markdown"

describe("parseMarkdown", () => {
  it("keeps only inline emphasis tags", () => {
    const html = parseMarkdown("**bold** and [link](https://a.b)")
    expect(html).toContain("<strong>bold</strong>")
    expect(html).not.toContain("<a")
  })
})

describe("parseMarkdownDocument", () => {
  it("renders block-level structure including GFM tables", () => {
    const html = parseMarkdownDocument(
      "# Title\n\n- item\n\n| A | B |\n| - | - |\n| 1 | 2 |\n"
    )
    expect(html).toContain("<h1>Title</h1>")
    expect(html).toContain("<li>item</li>")
    expect(html).toContain("<table>")
    expect(html).toContain("<td>1</td>")
  })

  it("keeps safe links but strips javascript: hrefs", () => {
    expect(parseMarkdownDocument("[ok](https://factorial.co)")).toContain(
      'href="https://factorial.co"'
    )
    expect(parseMarkdownDocument("[bad](javascript:alert(1))")).not.toContain(
      "javascript:"
    )
  })

  it("strips scripts, event handlers and images", () => {
    const html = parseMarkdownDocument(
      'hello\n\n<script>alert(1)</script>\n\n<img src="https://evil.example/x.png" onerror="alert(1)">'
    )
    expect(html).not.toContain("<script")
    expect(html).not.toContain("onerror")
    expect(html).not.toContain("<img")
    expect(html).toContain("hello")
  })
})
