import { screen, waitFor } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { zeroRender as render } from "@/testing/test-utils"
import { OneDataCollection } from ".."
import { useDataCollectionSource } from "../hooks/useDataCollectionSource"

/**
 * OneEmptyState is an inline-size container, so its contents no longer count
 * towards its own width. Centring it on the cross axis sizes it shrink-to-fit,
 * and the pair leaves it at its padding with a 0px-wide action button.
 *
 * jsdom does no layout, so the width itself is not observable here; the markup
 * contract that produces it is what this pins.
 */

type Person = { id: string; name: string }

const Collection = () => {
  const source = useDataCollectionSource<Person>({
    dataAdapter: { fetchData: async () => ({ records: [] }) },
  })

  return (
    <I18nProvider translations={defaultTranslations}>
      <OneDataCollection
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [{ label: "Name", render: (item: Person) => item.name }],
            },
          },
        ]}
        emptyStates={{
          "no-data": {
            emoji: "💼",
            title: "No levels yet",
            description: "Add one to get started",
            actions: [{ label: "New level", onClick: () => {} }],
          },
        }}
      />
    </I18nProvider>
  )
}

describe("OneDataCollection empty state", () => {
  test("gives the empty state the full width of its slot", async () => {
    render(<Collection />)

    const title = await screen.findByText("No levels yet")
    await waitFor(() => expect(screen.getByText("New level")).toBeVisible())

    const emptyState = title.closest("div.\\@container")
    expect(emptyState).not.toBeNull()

    const slot = emptyState!.parentElement!
    expect(slot.classList.contains("items-center")).toBe(false)
    expect(slot.classList.contains("items-stretch")).toBe(true)
  })
})
