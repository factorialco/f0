import type { Editor } from "@tiptap/react"
import type { ReactNode } from "react"

import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { EditorBubbleMenu } from "../index"

const { captureBubbleMenuProps } = vi.hoisted(() => ({
  captureBubbleMenuProps: vi.fn(),
}))

vi.mock("@tiptap/react/menus", () => ({
  BubbleMenu: (props: { children?: ReactNode }) => {
    captureBubbleMenuProps(props)
    return <div data-testid="bubble-menu-root">{props.children}</div>
  },
}))

vi.mock("../../Toolbar", () => ({
  Toolbar: () => <div>Formatting controls</div>,
  ToolbarDivider: () => <div />,
}))

vi.mock("../../Enhance/EnhanceActivator", () => ({
  EnhanceActivator: () => <div>Enhance</div>,
}))

type CapturedBubbleMenuProps = {
  appendTo: () => HTMLElement
  options: {
    placement: string
    shift: { padding: number; crossAxis: boolean }
    flip: { fallbackPlacements: string[] }
  }
  shouldShow: (context: {
    view: { hasFocus: () => boolean }
    state: {
      doc: { textBetween: (from: number, to: number) => string }
      selection: { empty: boolean }
    }
    from: number
    to: number
  }) => boolean
}

const editor = { isEditable: true } as unknown as Editor

describe("EditorBubbleMenu", () => {
  it("preserves container placement and selection visibility with Floating UI", () => {
    const editorContainer = document.createElement("div")
    editorContainer.id = "editor-under-test"
    document.body.appendChild(editorContainer)

    const view = render(
      <EditorBubbleMenu
        editor={editor}
        editorId={editorContainer.id}
        disableButtons={false}
        isToolbarOpen={false}
        isFullscreen={false}
      />
    )

    let props = captureBubbleMenuProps.mock.lastCall?.[0] as
      | CapturedBubbleMenuProps
      | undefined
    expect(props).toBeDefined()
    expect(props?.appendTo()).toBe(editorContainer)
    expect(props?.options).toEqual({
      placement: "bottom",
      shift: { padding: 12, crossAxis: true },
      flip: {
        fallbackPlacements: [
          "bottom-start",
          "bottom-end",
          "top",
          "top-start",
          "top-end",
        ],
      },
    })
    expect(screen.getByRole("toolbar")).toBeInTheDocument()

    const selectedTextContext = {
      view: { hasFocus: () => true },
      state: {
        doc: { textBetween: () => "Selected text" },
        selection: { empty: false },
      },
      from: 0,
      to: 13,
    }
    expect(props?.shouldShow(selectedTextContext)).toBe(true)
    expect(
      props?.shouldShow({
        ...selectedTextContext,
        view: { hasFocus: () => false },
      })
    ).toBe(false)

    view.rerender(
      <EditorBubbleMenu
        editor={editor}
        editorId={editorContainer.id}
        disableButtons={false}
        isToolbarOpen={false}
        isFullscreen
      />
    )
    props = captureBubbleMenuProps.mock.lastCall?.[0] as
      | CapturedBubbleMenuProps
      | undefined
    expect(props?.appendTo()).toBe(document.body)
  })
})
