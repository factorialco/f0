import { userEvent } from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0AudienceSelector } from "../index"
import type {
  F0AudienceEntity,
  F0AudienceOption,
  F0AudienceSelectorProps,
} from "../types"

type Rec = { entity: F0AudienceEntity }

const individualEntity = (id: string, name: string): F0AudienceEntity => {
  const [firstName, ...rest] = name.split(" ")
  return { kind: "individual", id, name, firstName, lastName: rest.join(" ") }
}

const ada: F0AudienceEntity = {
  kind: "individual",
  id: "1",
  name: "Ada Lovelace",
  firstName: "Ada",
  lastName: "Lovelace",
  subtitle: "VP of Engineering",
}

const alan: F0AudienceEntity = {
  kind: "individual",
  id: "2",
  name: "Alan Turing",
  firstName: "Alan",
  lastName: "Turing",
  subtitle: "Staff Engineer",
}

const payroll: F0AudienceEntity = {
  kind: "team",
  id: "1",
  name: "Payroll",
  memberCount: 3,
}

const staffRole: F0AudienceEntity = {
  kind: "role",
  id: "staff-engineer",
  name: "Staff Engineer",
  memberCount: 1,
}

const directory = [ada, alan, payroll, staffRole]

const createAdapter = (records: F0AudienceEntity[] = directory) => {
  const fetchData = vi.fn(({ search }: { search?: string }) => ({
    records: records
      .filter((entity) =>
        entity.name.toLowerCase().includes((search ?? "").toLowerCase())
      )
      .map((entity) => ({ entity })),
  }))
  return { fetchData }
}

const identityMapper = (record: Rec): F0AudienceOption => ({
  entity: record.entity,
})

const renderSelector = ({
  adapter = createAdapter(),
  onChange = vi.fn(),
  ...props
}: Partial<Omit<F0AudienceSelectorProps<Rec>, "source">> & {
  adapter?: ReturnType<typeof createAdapter>
} = {}) => {
  const result = render(
    <F0AudienceSelector<Rec>
      label="Audience"
      source={{ dataAdapter: adapter, search: { debounceTime: 0 } }}
      mapEntity={identityMapper}
      value={[]}
      onChange={onChange}
      {...props}
    />
  )
  return { ...result, adapter, onChange }
}

const getInput = () => screen.getByRole("combobox")

const searchFor = async (
  user: ReturnType<typeof userEvent.setup>,
  text: string
) => {
  await user.type(getInput(), text)
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
}

describe("F0AudienceSelector", () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it("renders chips for the selected entities, mixing kinds", () => {
    renderSelector({ value: [ada, payroll] })

    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.getByText("Payroll")).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Remove Ada Lovelace" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Remove Payroll" })
    ).toBeInTheDocument()
  })

  it("searches with the debounced query and renders name and subtitle", async () => {
    const user = userEvent.setup()
    const { adapter } = renderSelector()

    await searchFor(user, "ada")

    await waitFor(() =>
      expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    )
    expect(screen.getByText("VP of Engineering")).toBeInTheDocument()
    expect(adapter.fetchData).toHaveBeenCalledWith(
      expect.objectContaining({ search: "ada" })
    )
  })

  it("localizes group subtitles with plural member counts", async () => {
    const user = userEvent.setup()
    renderSelector()

    await searchFor(user, "payroll")
    await waitFor(() =>
      expect(screen.getByText("3 people · Team")).toBeInTheDocument()
    )

    await user.clear(getInput())
    await searchFor(user, "staff")
    await waitFor(() =>
      expect(screen.getByText("1 person · Role")).toBeInTheDocument()
    )
  })

  it("debounces the query so only the settled value hits the adapter", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    const adapter = createAdapter()
    render(
      <F0AudienceSelector<Rec>
        label="Debounced"
        source={{ dataAdapter: adapter, search: { debounceTime: 300 } }}
        mapEntity={identityMapper}
        value={[]}
        onChange={vi.fn()}
      />
    )

    await user.type(getInput(), "ada")
    expect(adapter.fetchData).not.toHaveBeenCalledWith(
      expect.objectContaining({ search: "a" })
    )
    vi.advanceTimersByTime(350)

    await waitFor(() =>
      expect(adapter.fetchData).toHaveBeenCalledWith(
        expect.objectContaining({ search: "ada" })
      )
    )
    const searched = adapter.fetchData.mock.calls
      .map(([options]) => options.search)
      .filter(Boolean)
    expect(searched).toEqual(["ada"])
  })

  it("never calls the adapter with an empty query", async () => {
    const user = userEvent.setup()
    const { adapter } = renderSelector()

    await user.click(getInput())
    await user.type(getInput(), "ada")
    await user.clear(getInput())
    await waitFor(() => {
      const searched = adapter.fetchData.mock.calls.map(
        ([options]) => options.search
      )
      expect(searched.every((search) => (search ?? "").trim() !== "")).toBe(
        true
      )
    })
  })

  it("never calls an explicit no-pagination adapter with an empty query", async () => {
    const user = userEvent.setup()
    // An adapter that opts into "no-pagination" is still gated on empty query
    const fetchData = vi.fn(({ search }: { search?: string }) => ({
      records: directory
        .filter((entity) =>
          entity.name.toLowerCase().includes((search ?? "").toLowerCase())
        )
        .map((entity) => ({ entity })),
    }))
    render(
      <F0AudienceSelector<Rec>
        label="Audience"
        source={{
          dataAdapter: { paginationType: "no-pagination", fetchData },
          search: { debounceTime: 0 },
        }}
        mapEntity={identityMapper}
        value={[]}
        onChange={vi.fn()}
      />
    )

    await user.click(getInput())
    await waitFor(() =>
      expect(screen.getByText("Start typing to search")).toBeInTheDocument()
    )
    await user.type(getInput(), "ada")
    await waitFor(() =>
      expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    )
    const searched = fetchData.mock.calls.map(([options]) => options.search)
    expect(searched.every((search) => (search ?? "").trim() !== "")).toBe(true)
  })

  it("replaces the subtitle with disabledReason and blocks selection", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    renderSelector({
      onChange,
      mapEntity: (record: Rec) => ({
        entity: record.entity,
        disabledReason:
          record.entity.id === alan.id ? "Already has access" : undefined,
      }),
    })

    await searchFor(user, "alan")
    await waitFor(() =>
      expect(screen.getByText("Already has access")).toBeInTheDocument()
    )
    expect(screen.queryByText("Staff Engineer")).not.toBeInTheDocument()

    const option = screen.getByRole("option", { name: /Alan Turing/ })
    expect(option).toHaveAttribute("aria-disabled", "true")
    await user.click(option)
    expect(onChange).not.toHaveBeenCalled()
  })

  it("appends the entity on pick, keeps the dropdown open and clears the query", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    renderSelector({ onChange })

    await searchFor(user, "ada")
    await waitFor(() =>
      expect(
        screen.getByRole("option", { name: /Ada Lovelace/ })
      ).toBeInTheDocument()
    )
    await user.click(screen.getByRole("option", { name: /Ada Lovelace/ }))

    expect(onChange).toHaveBeenCalledWith([ada])
    expect(screen.getByRole("listbox")).toBeInTheDocument()
    expect(getInput()).toHaveValue("")
  })

  it("removes an already-selected entity when its option is clicked again", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    renderSelector({ value: [ada], onChange })

    await searchFor(user, "ada")
    const option = await screen.findByRole("option", { name: /Ada Lovelace/ })
    expect(option).toHaveAttribute("aria-selected", "true")
    await user.click(option)

    expect(onChange).toHaveBeenCalledWith([])
  })

  it("treats the same id under two kinds as independent selections", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    // ada and payroll share id "1" with different kinds
    renderSelector({ value: [ada], onChange })

    await searchFor(user, "payroll")
    const option = await screen.findByRole("option", { name: /Payroll/ })
    expect(option).toHaveAttribute("aria-selected", "false")
    await user.click(option)

    expect(onChange).toHaveBeenCalledWith([ada, payroll])
  })

  it("removes the last chip with Backspace only when the query is empty", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    renderSelector({ value: [ada, payroll], onChange })

    await user.type(getInput(), "x{Backspace}")
    expect(onChange).not.toHaveBeenCalled()

    await user.clear(getInput())
    await user.type(getInput(), "{Backspace}")
    expect(onChange).toHaveBeenCalledWith([ada])
  })

  it("removes an entity from its chip close button", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    renderSelector({ value: [ada, payroll], onChange })

    await user.click(screen.getByRole("button", { name: "Remove Payroll" }))
    expect(onChange).toHaveBeenCalledWith([ada])
  })

  it("shows suggestions on focus without fetching", async () => {
    const user = userEvent.setup()
    const { adapter } = renderSelector({
      suggestions: [{ entity: alan }, { entity: payroll }],
    })

    await user.click(getInput())
    await waitFor(() =>
      expect(
        screen.getByRole("option", { name: /Alan Turing/ })
      ).toBeInTheDocument()
    )
    expect(screen.getByRole("option", { name: /Payroll/ })).toBeInTheDocument()
    // The consumer's adapter must never run for the empty (suggestions) query
    expect(adapter.fetchData).not.toHaveBeenCalled()
  })

  it("shows the type-to-search and no-results empty states", async () => {
    const user = userEvent.setup()
    renderSelector()

    await user.click(getInput())
    await waitFor(() =>
      expect(screen.getByText("Start typing to search")).toBeInTheDocument()
    )

    await user.type(getInput(), "zzzz")
    await waitFor(() =>
      expect(screen.getByText("No matches found")).toBeInTheDocument()
    )
  })

  it("honors the searchEmptyMessage override", async () => {
    const user = userEvent.setup()
    renderSelector({ searchEmptyMessage: "Nobody here" })

    await searchFor(user, "zzzz")
    await waitFor(() =>
      expect(screen.getByText("Nobody here")).toBeInTheDocument()
    )
  })

  it("renders the trailing slot only while entities are selected", () => {
    const { rerender, adapter } = renderSelector({
      trailing: <span>Role dropdown</span>,
    })
    expect(screen.queryByText("Role dropdown")).not.toBeInTheDocument()

    rerender(
      <F0AudienceSelector<Rec>
        label="Audience"
        source={{ dataAdapter: adapter, search: { debounceTime: 0 } }}
        mapEntity={identityMapper}
        value={[ada]}
        onChange={vi.fn()}
        trailing={<span>Role dropdown</span>}
      />
    )
    expect(screen.getByText("Role dropdown")).toBeInTheDocument()
  })

  it("hides the warning while the dropdown is open", async () => {
    const user = userEvent.setup()
    renderSelector({
      value: [alan],
      warning: {
        title: "Sharing outside your reporting line",
        description: "Alan Turing isn't in your reporting line.",
      },
    })

    expect(
      screen.getByText("Sharing outside your reporting line")
    ).toBeInTheDocument()

    await user.click(getInput())
    await waitFor(() =>
      expect(
        screen.queryByText("Sharing outside your reporting line")
      ).not.toBeInTheDocument()
    )
  })

  it("closes only the dropdown on Escape and propagates once closed", async () => {
    const user = userEvent.setup()
    const outerKeyDown = vi.fn()
    render(
      <div onKeyDown={outerKeyDown}>
        <F0AudienceSelector<Rec>
          label="Audience"
          source={{
            dataAdapter: createAdapter(),
            search: { debounceTime: 0 },
          }}
          mapEntity={identityMapper}
          value={[]}
          onChange={vi.fn()}
        />
      </div>
    )

    await user.click(getInput())
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())

    await user.keyboard("{Escape}")
    await waitFor(() =>
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    )
    expect(
      outerKeyDown.mock.calls.filter(([event]) => event.key === "Escape")
    ).toHaveLength(0)

    await user.keyboard("{Escape}")
    expect(
      outerKeyDown.mock.calls.filter(([event]) => event.key === "Escape")
    ).toHaveLength(1)
  })

  it("moves aria-activedescendant with the arrow keys skipping disabled options and toggles with Enter", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    renderSelector({
      onChange,
      mapEntity: (record: Rec) => ({
        entity: record.entity,
        disabledReason:
          record.entity.kind === "individual" && record.entity.id === ada.id
            ? "That's you"
            : undefined,
      }),
    })

    // "a" matches Ada (disabled), Alan, Payroll and Staff Engineer
    await searchFor(user, "a")
    const alanOption = await screen.findByRole("option", {
      name: /Alan Turing/,
    })

    // First enabled option is active by default (Ada is disabled)
    await waitFor(() =>
      expect(getInput()).toHaveAttribute("aria-activedescendant", alanOption.id)
    )

    await user.keyboard("{ArrowDown}")
    const payrollOption = screen.getByRole("option", { name: /Payroll/ })
    expect(getInput()).toHaveAttribute(
      "aria-activedescendant",
      payrollOption.id
    )

    await user.keyboard("{ArrowUp}")
    expect(getInput()).toHaveAttribute("aria-activedescendant", alanOption.id)

    await user.keyboard("{Enter}")
    expect(onChange).toHaveBeenCalledWith([alan])
  })

  it("clears the chips when the controlled value is emptied", () => {
    const { rerender, adapter } = renderSelector({ value: [ada] })
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()

    rerender(
      <F0AudienceSelector<Rec>
        label="Audience"
        source={{ dataAdapter: adapter, search: { debounceTime: 0 } }}
        mapEntity={identityMapper}
        value={[]}
        onChange={vi.fn()}
      />
    )
    expect(screen.queryByText("Ada Lovelace")).not.toBeInTheDocument()
  })

  it("passes dataTestId through", () => {
    renderSelector({ dataTestId: "audience-selector" })
    expect(screen.getByTestId("audience-selector")).toBeInTheDocument()
  })

  it("paginates an infinite-scroll adapter: gates empty query and appends pages on loadMore", async () => {
    // Capture the IntersectionObserver callback so we can drive the sentinel
    // (JSDOM has no real IntersectionObserver)
    let intersect: (() => void) | null = null
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        constructor(cb: (entries: { isIntersecting: boolean }[]) => void) {
          intersect = () => cb([{ isIntersecting: true }])
        }
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() {
          return []
        }
      }
    )

    const perPage = 3
    const all = Array.from({ length: 7 }, (_, i) =>
      individualEntity(`p${i}`, `Page Person ${i}`)
    )
    const fetchData = vi.fn(
      ({
        search,
        pagination,
      }: {
        search?: string
        pagination: { cursor?: string | null }
      }) => {
        const offset = pagination.cursor ? parseInt(pagination.cursor, 10) : 0
        const matched = all.filter((e) =>
          e.name.toLowerCase().includes((search ?? "").toLowerCase())
        )
        const records = matched
          .slice(offset, offset + perPage)
          .map((entity) => ({ entity }))
        return {
          records,
          total: matched.length,
          perPage,
          type: "infinite-scroll" as const,
          cursor: String(offset + perPage),
          hasMore: offset + perPage < matched.length,
        }
      }
    )

    const user = userEvent.setup()
    render(
      <F0AudienceSelector<Rec>
        label="Audience"
        source={{
          dataAdapter: {
            paginationType: "infinite-scroll",
            perPage,
            fetchData,
          },
          search: { debounceTime: 0 },
        }}
        mapEntity={identityMapper}
        value={[]}
        onChange={vi.fn()}
      />
    )

    // Empty query never reaches the consumer adapter
    await user.click(getInput())
    await waitFor(() =>
      expect(screen.getByText("Start typing to search")).toBeInTheDocument()
    )
    expect(fetchData).not.toHaveBeenCalled()

    // First page renders perPage options
    await user.type(getInput(), "page")
    await waitFor(() =>
      expect(screen.getAllByRole("option")).toHaveLength(perPage)
    )

    // Driving the sentinel loads and appends the next page
    await waitFor(() => expect(intersect).not.toBeNull())
    intersect!()
    await waitFor(() =>
      expect(screen.getAllByRole("option").length).toBeGreaterThan(perPage)
    )
  })
})
