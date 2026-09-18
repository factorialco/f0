import { describe, expect, it } from "vitest"
import {
  userEvent,
  waitFor,
  zeroRender as render,
  screen,
} from "@/testing/test-utils"
import { F0SwipeDeck } from "../F0SwipeDeck"
import { useSwipeDeck } from "../hooks/useSwipeDeck"

type Candidate = { id: string; name: string }

const candidates: Candidate[] = [
  { id: "a", name: "Jorge Manrique" },
  { id: "b", name: "Leire Etxeberria" },
]

const Harness = ({ label }: { label?: string }) => {
  const deck = useSwipeDeck<Candidate>({
    items: candidates,
    getItemId: (item) => item.id,
  })

  return (
    <>
      <F0SwipeDeck
        deck={deck}
        label={label}
        renderCard={(item) => <p>{item.name}</p>}
        empty={<p>No more candidates</p>}
      />
      <button onClick={deck.swipeRight}>Decide</button>
    </>
  )
}

describe("F0SwipeDeck", () => {
  it("renders the current card inside a labelled group", () => {
    render(<Harness />)

    expect(screen.getByRole("group", { name: "Swipe deck" })).toBeVisible()
    expect(screen.getByText("Jorge Manrique")).toBeVisible()
    expect(screen.queryByText("Leire Etxeberria")).not.toBeInTheDocument()
  })

  it("shows the next card once the current one is decided", async () => {
    render(<Harness />)

    await userEvent.click(screen.getByRole("button", { name: "Decide" }))

    expect(await screen.findByText("Leire Etxeberria")).toBeVisible()
  })

  it("renders the empty slot once every card has been decided", async () => {
    render(<Harness />)
    const decide = screen.getByRole("button", { name: "Decide" })

    await userEvent.click(decide)
    await userEvent.click(decide)

    await waitFor(() =>
      expect(screen.getByText("No more candidates")).toBeVisible()
    )
  })

  it("uses the label given by the consumer", () => {
    render(<Harness label="Candidate suggestions" />)

    expect(
      screen.getByRole("group", { name: "Candidate suggestions" })
    ).toBeVisible()
  })
})
