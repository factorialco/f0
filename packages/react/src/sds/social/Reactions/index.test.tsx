import { expect, it, vi } from "vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"
import { getEmojiLabel } from "@/lib/emojis"

import { Reactions } from "./index"

it("forwards the lazy user loader and shows the resolved identities", async () => {
  const loadUsers = vi
    .fn()
    .mockResolvedValue([{ name: "Grace Liang" }, { name: "Marcus Bennett" }])

  render(
    <Reactions
      items={[
        {
          emoji: "🎉",
          initialCount: 2,
          loadUsers,
        },
      ]}
    />
  )

  await userEvent.hover(
    screen.getByRole("button", {
      name: `${getEmojiLabel("🎉")}: 2`,
    })
  )

  await waitFor(() => expect(loadUsers).toHaveBeenCalledTimes(1))
  expect(
    await screen.findAllByText("Grace Liang, Marcus Bennett")
  ).not.toHaveLength(0)
})
