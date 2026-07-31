import { EditorContent, useEditor } from "@tiptap/react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ReactNode } from "react"
import { afterEach, describe, expect, it } from "vitest"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import {
  StarterKitExtension,
  TextStyleExtension,
} from "../../Extensions/configured"
import { FontSizeExtension } from "../../Extensions/FontSize"
import { Toolbar } from "../index"

const wrapper = ({ children }: { children: ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

let currentEditor: ReturnType<typeof useEditor> = null

const Harness = () => {
  const editor = useEditor({
    extensions: [StarterKitExtension, TextStyleExtension, FontSizeExtension],
    content: "<p>Small print</p>",
  })

  currentEditor = editor

  if (!editor) return null

  return (
    <>
      <Toolbar editor={editor} disableButtons={false} />
      <EditorContent editor={editor} />
    </>
  )
}

const markOf = () =>
  currentEditor?.getJSON().content?.[0]?.content?.[0]?.marks?.[0]

const openDropdown = async (user: ReturnType<typeof userEvent.setup>) => {
  render(<Harness />, { wrapper })
  currentEditor?.commands.selectAll()

  await user.click(
    screen.getByRole("button", {
      name: defaultTranslations.richTextEditor.textSize,
    })
  )
}

describe("font size dropdown", () => {
  afterEach(() => {
    currentEditor?.destroy()
    currentEditor = null
  })

  it("applies a size from the scale to the selection", async () => {
    const user = userEvent.setup()
    await openDropdown(user)

    await user.click(screen.getByText("24"))

    expect(markOf()?.attrs?.fontSize).toBe("24px")
  })

  it("removes the size again from the default entry", async () => {
    const user = userEvent.setup()
    await openDropdown(user)

    await user.click(screen.getByText("24"))
    currentEditor?.commands.selectAll()
    await user.click(
      screen.getByRole("button", {
        name: defaultTranslations.richTextEditor.textSize,
      })
    )
    await user.click(
      screen.getByText(defaultTranslations.richTextEditor.textSizeDefault)
    )

    expect(markOf()).toBeUndefined()
  })

  it("offers every step of the scale plus a default", async () => {
    const user = userEvent.setup()
    await openDropdown(user)

    const labels = ["12", "14", "16", "18", "20", "24", "29"]

    labels.forEach((label) => expect(screen.getByText(label)).toBeVisible())
    expect(
      screen.getByText(defaultTranslations.richTextEditor.textSizeDefault)
    ).toBeVisible()
  })
})
