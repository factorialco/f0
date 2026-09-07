import { describe, expect, test, vi } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import { F0Dialog } from "../index"

/**
 * A footer action that LEAVES the dialog should be a link: "Go to post" is a
 * place, and a place you cannot cmd-click is a place the reader has to come
 * back from. The ones that act on what the dialog is showing stay handlers.
 */
const dialog = (props: Record<string, unknown>) =>
  render(
    <F0Dialog isOpen onClose={() => {}} header={{ title: "A post" }} {...props}>
      <p>the post</p>
    </F0Dialog>
  )

describe("footer actions", () => {
  test("draws a primary action with a route as a real link", () => {
    dialog({ primaryAction: { label: "Go to post", href: "/posts/1" } })

    expect(screen.getByRole("link", { name: "Go to post" })).toHaveAttribute(
      "href",
      "/posts/1"
    )
  })

  test("draws a secondary action with a route as a real link", () => {
    dialog({
      secondaryAction: { label: "Go to community", href: "/communities/2" },
    })

    expect(
      screen.getByRole("link", { name: "Go to community" })
    ).toHaveAttribute("href", "/communities/2")
  })

  test("keeps a handler action a button", async () => {
    const onClick = vi.fn()
    dialog({ primaryAction: { label: "Mark as read", onClick } })

    await userEvent.click(screen.getByRole("button", { name: "Mark as read" }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test("reports the press on a link that asked to hear about it", async () => {
    const onClick = vi.fn()
    dialog({
      primaryAction: { label: "Go to post", href: "/posts/1", onClick },
    })

    await userEvent.click(screen.getByRole("link", { name: "Go to post" }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
