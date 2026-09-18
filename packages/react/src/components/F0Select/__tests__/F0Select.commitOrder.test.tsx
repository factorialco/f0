import "@testing-library/jest-dom/vitest"
import { fireEvent, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { beforeEach, expect, it, vi } from "vitest"
import { createDataSourceDefinition } from "@/hooks/datasource"
import { zeroRender as render } from "@/testing/test-utils"
import { F0Select } from ".."

beforeEach(() => {
  global.ResizeObserver = class {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver
  Object.defineProperty(HTMLElement.prototype, "offsetHeight", { value: 800 })
  Object.defineProperty(HTMLElement.prototype, "offsetWidth", { value: 800 })
})

it("delivers committed value when dismissal unmounts editor", async () => {
  const onChange = vi.fn()
  const onDismiss = vi.fn()
  const user = userEvent.setup()
  function Example() {
    const [mounted, setMounted] = useState(true)
    return mounted ? (
      <F0Select
        variant="inline"
        editing
        label="Role"
        value="viewer"
        options={[
          { value: "editor", label: "Editor" },
          { value: "viewer", label: "Viewer" },
        ]}
        onChange={onChange}
        onDismiss={(reason) => {
          onDismiss(reason)
          setMounted(false)
        }}
      />
    ) : (
      <span>Dismissed</span>
    )
  }
  render(<Example />)
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  fireEvent.animationStart(screen.getByRole("listbox"))
  await user.keyboard("{ArrowUp}{Enter}")
  expect(onDismiss).toHaveBeenCalledWith("commit")
  expect(screen.getByText("Dismissed")).toBeInTheDocument()
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange.mock.invocationCallOrder[0]).toBeLessThan(
    onDismiss.mock.invocationCallOrder[0]
  )
  expect(onChange).toHaveBeenCalledWith(
    "editor",
    undefined,
    expect.objectContaining({ value: "editor" })
  )
})

it("does not emit from controlled value or option refreshes after an interaction", async () => {
  const onChange = vi.fn()
  const user = userEvent.setup()
  const options = [
    { value: "editor", label: "Editor" },
    { value: "viewer", label: "Viewer" },
  ]
  const { rerender } = render(
    <F0Select
      variant="inline"
      editing
      label="Role"
      value="viewer"
      options={options}
      onChange={onChange}
    />
  )
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  fireEvent.animationStart(screen.getByRole("listbox"))
  await user.keyboard("{ArrowUp}{Enter}")
  expect(onChange).toHaveBeenCalledTimes(1)
  rerender(
    <F0Select
      variant="inline"
      label="Role"
      value="editor"
      options={options}
      onChange={onChange}
    />
  )
  await waitFor(() =>
    expect(screen.getByTestId("select-inline-value")).toHaveTextContent(
      "Editor"
    )
  )
  rerender(
    <F0Select
      variant="inline"
      label="Role"
      value="viewer"
      options={[
        { value: "editor", label: "Updated editor" },
        { value: "viewer", label: "Updated viewer" },
      ]}
      onChange={onChange}
    />
  )
  await waitFor(() =>
    expect(screen.getByTestId("select-inline-value")).toHaveTextContent(
      "Updated viewer"
    )
  )
  expect(onChange).toHaveBeenCalledTimes(1)
})

it.each(["inline", "field"] as const)(
  "does not emit when a %s source resolves its controlled selection",
  async (variant) => {
    const onChange = vi.fn()
    let resolveFetch: (() => void) | undefined
    const source = createDataSourceDefinition<{ id: string; name: string }>({
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: async () => {
          await new Promise<void>((resolve) => {
            resolveFetch = resolve
          })
          return {
            type: "infinite-scroll" as const,
            cursor: undefined,
            perPage: 100,
            hasMore: false,
            records: [{ id: "viewer", name: "Resolved viewer" }],
            total: 1,
          }
        },
      },
    })
    render(
      <F0Select
        variant={variant}
        label="Role"
        value="viewer"
        source={source}
        mapOptions={(item) => ({ value: item.id, label: item.name })}
        onChange={onChange}
      />
    )
    await waitFor(() => expect(resolveFetch).toBeDefined())
    resolveFetch?.()
    await waitFor(() =>
      expect(screen.getByText("Resolved viewer")).toBeInTheDocument()
    )
    expect(onChange).not.toHaveBeenCalled()
  }
)
