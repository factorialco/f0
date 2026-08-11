import { describe, expect, test, vi } from "vitest"

import { Calendar, Clock } from "@/icons/app"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"
import { WidgetContainer } from "./index"

const widget = (id: string, extra: Partial<HomeWidgetItem> = {}) => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id, link: { title: `Go to ${id}`, onClick: () => {} } },
  slots: [
    {
      visualization: "indicators",
      params: { items: [{ label: id, content: "1" }] },
    },
  ],
  ...extra,
})

const WIDGETS = [widget("clock"), widget("events")]

describe("WidgetContainer", () => {
  test("view mode offers no arranging — but adding is always on offer", () => {
    zeroRender(
      <WidgetContainer
        widgets={WIDGETS}
        onRemoveWidget={() => {}}
        onClickAddNewWidget={() => {}}
      />
    )

    expect(screen.queryAllByLabelText("Remove widget")).toHaveLength(0)
    expect(
      screen.getByRole("button", { name: "Add widget" })
    ).toBeInTheDocument()
  })

  test("edit mode gives every widget a remove control", () => {
    zeroRender(
      <WidgetContainer
        widgets={WIDGETS}
        editing
        onRemoveWidget={() => {}}
        onClickAddNewWidget={() => {}}
      />
    )

    expect(screen.getAllByLabelText("Remove widget")).toHaveLength(2)
    expect(
      screen.getByRole("button", { name: "Add widget" })
    ).toBeInTheDocument()
  })

  test("disableEdition opts the column out of everything, adding included", () => {
    zeroRender(
      <WidgetContainer
        widgets={WIDGETS}
        editing
        disableEdition
        onRemoveWidget={() => {}}
        onClickAddNewWidget={() => {}}
      />
    )

    expect(screen.queryAllByLabelText("Remove widget")).toHaveLength(0)
    expect(
      screen.queryByRole("button", { name: "Add widget" })
    ).not.toBeInTheDocument()
  })

  test("reports the widget a remove control belongs to", async () => {
    const onRemoveWidget = vi.fn()
    zeroRender(
      <WidgetContainer
        widgets={WIDGETS}
        editing
        onRemoveWidget={onRemoveWidget}
      />
    )

    await userEvent.click(screen.getAllByLabelText("Remove widget")[1])

    expect(onRemoveWidget).toHaveBeenCalledWith("events")
  })

  describe("a locked widget", () => {
    const LOCKED = [widget("clock", { locked: true }), widget("events")]

    test("cannot be removed, and says why with a lock in the header", () => {
      zeroRender(
        <WidgetContainer widgets={LOCKED} editing onRemoveWidget={() => {}} />
      )

      // Only the unlocked widget offers removal.
      expect(screen.getAllByLabelText("Remove widget")).toHaveLength(1)
      expect(
        screen.getByLabelText("This widget is mandatory in your company.")
      ).toBeInTheDocument()
    })

    test("shows the lock only while editing — in view mode it is an ordinary widget", () => {
      const { rerender } = zeroRender(<WidgetContainer widgets={LOCKED} />)

      expect(
        screen.queryByLabelText("This widget is mandatory in your company.")
      ).not.toBeInTheDocument()

      rerender(<WidgetContainer widgets={LOCKED} editing />)

      expect(
        screen.getByLabelText("This widget is mandatory in your company.")
      ).toBeInTheDocument()
    })

    test("takes the tooltip copy from lockedLabel", () => {
      zeroRender(
        <WidgetContainer widgets={LOCKED} editing lockedLabel="Pinned by IT" />
      )

      expect(screen.getByLabelText("Pinned by IT")).toBeInTheDocument()
    })
  })

  describe("dragging", () => {
    test("is not offered without onReorder", () => {
      const { container } = zeroRender(
        <WidgetContainer widgets={WIDGETS} editing />
      )

      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
    })

    test("is not offered for a single widget", () => {
      const { container } = zeroRender(
        <WidgetContainer
          widgets={[widget("clock")]}
          editing
          onReorder={() => {}}
        />
      )

      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
    })

    test("is offered in edit mode with onReorder, and skips the locked widget", () => {
      const { container } = zeroRender(
        <WidgetContainer
          widgets={[widget("clock", { locked: true }), widget("events")]}
          editing
          onReorder={() => {}}
        />
      )

      // Each draggable wrapper carries the grab cursor; a locked one doesn't.
      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(1)
    })

    test("is not offered in view mode", () => {
      const { container } = zeroRender(
        <WidgetContainer widgets={WIDGETS} onReorder={() => {}} />
      )

      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
    })
  })
})
