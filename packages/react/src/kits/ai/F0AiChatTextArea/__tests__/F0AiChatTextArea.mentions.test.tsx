import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"
import { type PersonProfile } from "../../F0AiChat/types"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

const ANA: PersonProfile = { id: "ana-g", firstName: "Ana", lastName: "García" }

const ANA_REF = `<entity-ref type="person" id="ana-g">Ana García</entity-ref>`

/**
 * Type `@Ana`, take the popover's first row, and hand back the composer.
 * Mirrors what a user does before they keep writing the sentence.
 */
const composeMention = async () => {
  const onSubmit = vi.fn()
  const searchPersons = vi.fn(() => Promise.resolve([ANA]))
  const user = userEvent.setup()

  render(<F0AiChatTextArea onSubmit={onSubmit} searchPersons={searchPersons} />)

  const textarea = screen.getByRole("textbox")
  await user.click(textarea)
  await user.type(textarea, "Hola @Ana")
  await screen.findByRole("option", { name: /Ana García/ })
  await user.keyboard("{Enter}")
  await waitFor(() => expect(textarea).toHaveValue("Hola @Ana García "))

  return { user, textarea, onSubmit }
}

const send = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("button", { name: /send message/i }))
}

describe("F0AiChatTextArea — the sent payload keeps the mention", () => {
  it("sends the mention id when a comma follows the name", async () => {
    const { user, textarea, onSubmit } = await composeMention()

    await user.keyboard("{Backspace},")
    await waitFor(() => expect(textarea).toHaveValue("Hola @Ana García,"))

    await send(user)

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0]?.[0]).toMatchObject({
      text: `Hola ${ANA_REF},`,
    })
  })

  it("sends the mention id when the name ends the message", async () => {
    const { user, textarea, onSubmit } = await composeMention()

    await user.keyboard("{Backspace}")
    await waitFor(() => expect(textarea).toHaveValue("Hola @Ana García"))

    await send(user)

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit.mock.calls[0]?.[0]).toMatchObject({
      text: `Hola ${ANA_REF}`,
    })
  })
})
