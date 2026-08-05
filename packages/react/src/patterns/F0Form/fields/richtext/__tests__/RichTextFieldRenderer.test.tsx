import type { ComponentProps } from "react"
import type { ControllerRenderProps, FieldValues } from "react-hook-form"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { ResolvedField } from "../../types"
import { RichTextFieldRenderer } from "../RichTextFieldRenderer"
import type { F0RichTextField, RichTextValue } from "../types"

const richTextEditorMock = vi.hoisted(() => ({
  results: [{ value: null }] as RichTextValue[],
}))

vi.mock("@/components/RichText/F0RichTextEditor", async () => {
  const React = await import("react")

  return {
    F0RichTextEditor: React.forwardRef(function MockRichTextEditor(
      props: ComponentProps<"button"> & {
        onChange: (result: RichTextValue) => void
      },
      _ref
    ) {
      return React.createElement(
        "button",
        {
          onClick: () =>
            richTextEditorMock.results.forEach((result) =>
              props.onChange(result)
            ),
        },
        "Change rich text"
      )
    }),
  }
})

const field: ResolvedField<F0RichTextField> = {
  id: "notes",
  label: "Notes",
  type: "richtext",
}

function renderField(value: RichTextValue | string | undefined) {
  const onChange = vi.fn()
  const formField = {
    name: "notes",
    value,
    onChange,
    onBlur: vi.fn(),
    ref: vi.fn(),
  } satisfies ControllerRenderProps<FieldValues>

  render(<RichTextFieldRenderer field={field} formField={formField} />)

  return onChange
}

describe("RichTextFieldRenderer", () => {
  it("ignores an editor null update when the form already contains empty content", async () => {
    richTextEditorMock.results = [{ value: null }]
    const onChange = renderField({ value: "" })

    await userEvent.click(
      screen.getByRole("button", { name: "Change rich text" })
    )

    expect(onChange).not.toHaveBeenCalled()
  })

  it("forwards a null update when it clears non-empty content", async () => {
    richTextEditorMock.results = [{ value: null }]
    const onChange = renderField({ value: "<p>Existing content</p>" })

    await userEvent.click(
      screen.getByRole("button", { name: "Change rich text" })
    )

    expect(onChange).toHaveBeenCalledOnce()
    expect(onChange).toHaveBeenCalledWith({
      value: null,
      mentionIds: undefined,
    })
  })

  it("forwards an update when only the mention IDs change", async () => {
    richTextEditorMock.results = [{ value: null, mentionIds: ["mention-2"] }]
    const onChange = renderField({ value: "", mentionIds: ["mention-1"] })

    await userEvent.click(
      screen.getByRole("button", { name: "Change rich text" })
    )

    expect(onChange).toHaveBeenCalledOnce()
    expect(onChange).toHaveBeenCalledWith({
      value: null,
      mentionIds: ["mention-2"],
    })
  })

  it("ignores an equivalent update when the form contains a plain string", async () => {
    richTextEditorMock.results = [{ value: "<p>Filled externally</p>" }]
    const onChange = renderField("<p>Filled externally</p>")

    await userEvent.click(
      screen.getByRole("button", { name: "Change rich text" })
    )

    expect(onChange).not.toHaveBeenCalled()
  })

  it("treats an undefined form value as empty content", async () => {
    richTextEditorMock.results = [{ value: null }]
    const onChange = renderField(undefined)

    await userEvent.click(
      screen.getByRole("button", { name: "Change rich text" })
    )

    expect(onChange).not.toHaveBeenCalled()
  })

  it("ignores an update with unchanged content and mention IDs", async () => {
    richTextEditorMock.results = [
      { value: "<p>Hello</p>", mentionIds: ["mention-1"] },
    ]
    const onChange = renderField({
      value: "<p>Hello</p>",
      mentionIds: ["mention-1"],
    })

    await userEvent.click(
      screen.getByRole("button", { name: "Change rich text" })
    )

    expect(onChange).not.toHaveBeenCalled()
  })

  it("forwards two synchronous updates when the second clears the first", async () => {
    richTextEditorMock.results = [
      { value: "<p>Transient content</p>" },
      { value: null },
    ]
    const onChange = renderField({ value: "" })

    await userEvent.click(
      screen.getByRole("button", { name: "Change rich text" })
    )

    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenNthCalledWith(1, {
      value: "<p>Transient content</p>",
      mentionIds: undefined,
    })
    expect(onChange).toHaveBeenNthCalledWith(2, {
      value: null,
      mentionIds: undefined,
    })
  })
})
