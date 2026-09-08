import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"
import { DetailsItem } from ".."

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

  describe("drawer action", () => {
    const drawerContent = {
      type: "item" as const,
      text: "4.2 / 5",
      action: {
        type: "drawer" as const,
        details: [
          {
            title: "Q4 2025 review",
            content: { type: "item" as const, text: "4.2 / 5 · Feb 28, 2026" },
          },
          {
            title: "Mid-year 2025",
            content: { type: "item" as const, text: "3.8 / 5 · Aug 14, 2025" },
          },
        ],
      },
    }

    it("keeps the nested rows out of the DOM until the item is clicked", () => {
      render(<DetailsItem title="Performance" content={drawerContent} />)

      const trigger = screen.getByRole("button", { name: "4.2 / 5" })
      expect(trigger).toHaveAttribute("aria-expanded", "false")
      expect(trigger).not.toHaveAttribute("aria-controls")
      expect(screen.queryByText("Q4 2025 review")).not.toBeInTheDocument()
    })

    it("reveals the nested rows on click and points aria-controls at them", async () => {
      render(<DetailsItem title="Performance" content={drawerContent} />)

      const trigger = screen.getByRole("button", { name: "4.2 / 5" })
      await userEvent.click(trigger)

      expect(trigger).toHaveAttribute("aria-expanded", "true")
      expect(screen.getByText("Q4 2025 review")).toBeInTheDocument()
      expect(screen.getByText("Mid-year 2025")).toBeInTheDocument()

      const revealed = document.getElementById(
        trigger.getAttribute("aria-controls") ?? ""
      )
      expect(revealed).toContainElement(screen.getByText("Q4 2025 review"))
    })

    it("hides the nested rows again on a second click", async () => {
      render(<DetailsItem title="Performance" content={drawerContent} />)

      const trigger = screen.getByRole("button", { name: "4.2 / 5" })
      await userEvent.click(trigger)
      await userEvent.click(trigger)

      expect(trigger).toHaveAttribute("aria-expanded", "false")
      // The rows leave the DOM once the collapse animation finishes.
      await waitFor(() =>
        expect(screen.queryByText("Q4 2025 review")).not.toBeInTheDocument()
      )
    })

    it("accepts the drawer action on tag content", async () => {
      render(
        <DetailsItem
          title="Performance"
          content={{
            type: "raw-tag",
            text: "4.2 / 5",
            action: {
              type: "drawer",
              details: [
                {
                  title: "Q4 2025 review",
                  content: { type: "item", text: "Feb 28, 2026" },
                },
              ],
            },
          }}
        />
      )

      await userEvent.click(screen.getByRole("button", { name: /4.2 \/ 5/ }))
      expect(screen.getByText("Q4 2025 review")).toBeInTheDocument()
    })

    it("follows a controlled `expanded` and reports clicks through onToggle", async () => {
      const onToggle = vi.fn()
      render(
        <DetailsItem
          title="Performance"
          content={{
            ...drawerContent,
            action: { ...drawerContent.action, expanded: true, onToggle },
          }}
        />
      )

      // Open without any click, and it stays open: the owner decides.
      expect(screen.getByText("Q4 2025 review")).toBeInTheDocument()
      await userEvent.click(screen.getByRole("button", { name: "4.2 / 5" }))
      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(screen.getByText("Q4 2025 review")).toBeInTheDocument()
    })

    it("puts the id on the row so it can be scrolled to", () => {
      render(
        <DetailsItem
          id="details-performance"
          title="Performance"
          content={drawerContent}
        />
      )

      expect(document.getElementById("details-performance")).toContainElement(
        screen.getByText("Performance")
      )
    })

    it("still renders the other actions unchanged", () => {
      render(
        <DetailsItem
          title="Email"
          content={{
            type: "item",
            text: "alicia@factorial.co",
            action: { type: "copy" },
          }}
        />
      )

      expect(
        screen.getByRole("button", { name: "Copy alicia@factorial.co" })
      ).toBeInTheDocument()
    })
  })
})
