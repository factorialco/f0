import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { DetailsItem } from "../index"

describe("DetailsItem", () => {
  it("renders the title (label)", () => {
    render(
      <DetailsItem title="Document" content={{ type: "item", text: "Hello" }} />
    )

    expect(screen.getByText("Document")).toBeInTheDocument()
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  describe("file content", () => {
    const fileContent = {
      type: "file" as const,
      file: { name: "report.pdf", type: "application/pdf" },
    }

    it("renders the file name", () => {
      render(<DetailsItem title="Attachment" content={fileContent} />)

      expect(screen.getByText("report.pdf")).toBeInTheDocument()
    })

    it("does not leak the `type` discriminator onto the rendered DOM", () => {
      // The `type: "file"` discriminator must be stripped before spreading
      // onto FileItem, otherwise it would become an HTML `type` attribute
      // on the wrapper div (and could be confused with `<input type>`).
      const { container } = render(
        <DetailsItem title="Attachment" content={fileContent} />
      )

      expect(container.querySelector('[type="file"]')).toBeNull()
    })

    it("renders multiple file items when given an array of contents", () => {
      render(
        <DetailsItem
          title="Attachments"
          content={[
            {
              type: "file",
              file: { name: "report.pdf", type: "application/pdf" },
            },
            {
              type: "file",
              file: { name: "summary.docx", type: "application/msword" },
            },
          ]}
        />
      )

      expect(screen.getByText("report.pdf")).toBeInTheDocument()
      expect(screen.getByText("summary.docx")).toBeInTheDocument()
    })
  })
})
