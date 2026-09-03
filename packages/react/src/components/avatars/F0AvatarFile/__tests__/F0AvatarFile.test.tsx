import { createRef } from "react"
import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0AvatarFile } from "../F0AvatarFile"
import { getAvatarSize, getBadgeSize } from "../utils"

const pdf = { name: "document.pdf", type: "application/pdf" }

describe("F0AvatarFile", () => {
  it("renders the label for the file's type", () => {
    zeroRender(<F0AvatarFile file={pdf} size="lg" />)

    expect(screen.getByText("PDF")).toBeInTheDocument()
  })

  it("falls back to the generic label when neither MIME nor extension resolves", () => {
    zeroRender(<F0AvatarFile file={{ name: "report", type: "" }} size="lg" />)

    expect(screen.getByText("FILE")).toBeInTheDocument()
  })

  describe("size mapping", () => {
    // The component takes the file size scale and maps it back onto the
    // internal avatar sizes, which is where the rendered dimensions come from.
    const sizeTests = {
      xs: "size-5",
      sm: "size-6",
      md: "size-8",
      lg: "size-10",
    } as const

    Object.entries(sizeTests).forEach(([size, expectedClass]) => {
      it(`renders ${size} at ${expectedClass}`, () => {
        const { container } = zeroRender(
          <F0AvatarFile file={pdf} size={size as keyof typeof sizeTests} />
        )

        expect(container.firstChild).toHaveClass(expectedClass)
      })
    })

    it("falls back to the small avatar size when no size is given", () => {
      const { container } = zeroRender(<F0AvatarFile file={pdf} />)

      expect(container.firstChild).toHaveClass("size-6")
    })
  })

  it("renders a module badge alongside the label", () => {
    const { container } = zeroRender(
      <F0AvatarFile
        file={pdf}
        size="lg"
        badge={{ type: "module", module: "inbox" }}
      />
    )

    expect(screen.getByText("PDF")).toBeInTheDocument()
    // The module badge is the only aria-hidden subtree the avatar renders.
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })

  it("renders no badge when the badge prop is omitted", () => {
    const { container } = zeroRender(<F0AvatarFile file={pdf} size="lg" />)

    expect(container.querySelector('[aria-hidden="true"]')).toBeNull()
  })

  it("applies the data test id", () => {
    zeroRender(<F0AvatarFile file={pdf} size="lg" dataTestId="file-avatar" />)

    expect(screen.getByTestId("file-avatar")).toBeInTheDocument()
  })

  it("forwards the ref to the avatar root", () => {
    const ref = createRef<HTMLSpanElement>()

    zeroRender(<F0AvatarFile ref={ref} file={pdf} size="lg" />)

    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveTextContent("PDF")
  })

  // Both helpers only define entries for `lg` and `sm`; every other size falls
  // through to the `sm` entry rather than to its own value. Pinning the real
  // behaviour so a future fix has to be deliberate.
  describe("badge sizing helpers", () => {
    it("returns the sm mapping for sizes with no entry of their own", () => {
      expect(getBadgeSize("lg")).toBe("sm")
      expect(getBadgeSize("md")).toBe("sm")
      expect(getBadgeSize(undefined)).toBe("sm")

      expect(getAvatarSize("lg")).toBe("xs")
      expect(getAvatarSize("md")).toBe("xs")
      expect(getAvatarSize(undefined)).toBe("xs")
    })
  })
})
