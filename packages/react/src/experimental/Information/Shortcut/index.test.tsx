import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { defaultTranslations, I18nProvider } from "../../../lib/providers/i18n"
import {
  Platform,
  UserPlatformProvider,
} from "../../../lib/providers/user-platafform/UserPlatformProvider"
import { Shortcut } from "./index"

const renderShortcut = (keys: string[], { platform = "mac" }: { platform?: Platform } = {}) => {
  return render(
    <UserPlatformProvider platform={platform}>
      <I18nProvider translations={defaultTranslations}>
        <Shortcut keys={keys} />
      </I18nProvider>
    </UserPlatformProvider>
  )
}

describe("Shortcut", () => {
  it("renders all keys in the correct order", () => {
    renderShortcut(["A", "B"])

    expect(screen.getByText("A")).toBeInTheDocument()
    expect(screen.getByText("B")).toBeInTheDocument()
  })

  it("renders special keys", () => {
    renderShortcut(["cmd", "K"])

    expect(screen.getByText("⌘")).toBeInTheDocument()
    expect(screen.getByText("K")).toBeInTheDocument()
  })

  it("handles mixed case input", () => {
    renderShortcut(["CMD", "k"])

    expect(screen.getByText("⌘")).toBeInTheDocument()
    expect(screen.getByText("k")).toBeInTheDocument()
  })

  it("returns null when platform is unknown", () => {
    const { container } = renderShortcut(["A"], { platform: "unknown" })
    expect(container.innerHTML).toBe("")
  })

  it("returns null when platform is mobile", () => {
    const { container } = renderShortcut(["A"], { platform: "mobile" })
    expect(container.innerHTML).toBe("")
  })
})
