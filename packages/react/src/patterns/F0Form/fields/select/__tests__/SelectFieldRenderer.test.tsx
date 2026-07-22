import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import { createDataSourceDefinition } from "@/hooks/datasource"
import { Archive } from "@/icons/app"
import { useF0FormDefinition } from "@/patterns/F0WizardForm/useF0FormDefinition"
import { zeroRender as render, waitFor } from "@/testing/test-utils"

import { F0Form } from "../../../F0Form"
import { f0FormField } from "../../../f0Schema"

// Capture every props object passed to the underlying F0Select so we can assert
// what the F0Form -> SelectFieldRenderer pipeline forwards to it.
const { selectPropsSpy } = vi.hoisted(() => ({
  selectPropsSpy: vi.fn(),
}))

vi.mock("@/components/F0Select", () => ({
  F0Select: (props: Record<string, unknown>) => {
    selectPropsSpy(props)
    return <div data-testid="mock-f0select" />
  },
}))

function lastSelectProps(): Record<string, unknown> {
  const calls = selectPropsSpy.mock.calls
  return calls[calls.length - 1][0] as Record<string, unknown>
}

describe("SelectFieldRenderer prop threading", () => {
  it("forwards onOpenChange, loading, searchEmptyMessage, searchFn, icon and onCreate to F0Select in options mode", async () => {
    const onOpenChange = vi.fn()
    const onCreate = vi.fn()
    const searchFn = vi.fn(() => true)

    const schema = z.object({
      team: f0FormField.select({
        label: "Team",
        optional: true,
        options: [
          { value: "eng", label: "Engineering" },
          { value: "design", label: "Design" },
        ],
        showSearchBox: true,
        loading: true,
        searchEmptyMessage: "No teams",
        onOpenChange,
        onCreate,
        searchFn,
        icon: Archive,
      }),
    })

    render(
      <F0Form
        name="select-props-options"
        schema={schema}
        defaultValues={{ team: undefined }}
        onSubmit={async () => ({ success: true })}
      />
    )

    await waitFor(() => expect(selectPropsSpy).toHaveBeenCalled())

    const props = lastSelectProps()
    expect(props.onOpenChange).toBe(onOpenChange)
    expect(props.onCreate).toBe(onCreate)
    expect(props.searchFn).toBe(searchFn)
    expect(props.searchEmptyMessage).toBe("No teams")
    expect(props.icon).toBe(Archive)
    expect(props.options).toHaveLength(2)
  })

  it("shows loading when the field-level loading flag is set (form not loading)", async () => {
    const schema = z.object({
      team: f0FormField.select({
        label: "Team",
        optional: true,
        options: [{ value: "eng", label: "Engineering" }],
        loading: true,
      }),
    })

    render(
      <F0Form
        name="select-field-loading"
        schema={schema}
        defaultValues={{ team: undefined }}
        onSubmit={async () => ({ success: true })}
      />
    )

    await waitFor(() => expect(selectPropsSpy).toHaveBeenCalled())
    expect(lastSelectProps().loading).toBe(true)
  })

  it("shows loading when the form is loading async defaultValues (field flag unset)", async () => {
    const schema = z.object({
      team: f0FormField.select({
        label: "Team",
        optional: true,
        options: [{ value: "eng", label: "Engineering" }],
      }),
    })

    // Async defaultValues that never resolve keep the form in a loading state.
    function FormLoadingForm() {
      const formDefinition = useF0FormDefinition({
        name: "select-form-loading",
        schema,
        defaultValues: () =>
          new Promise<{ team: string | undefined }>(() => {}),
        onSubmit: async () => ({ success: true }),
      })
      return <F0Form formDefinition={formDefinition} />
    }

    render(<FormLoadingForm />)

    await waitFor(() => expect(selectPropsSpy).toHaveBeenCalled())
    expect(lastSelectProps().loading).toBe(true)
  })

  it("does not show loading when neither form nor field is loading", async () => {
    const schema = z.object({
      team: f0FormField.select({
        label: "Team",
        optional: true,
        options: [{ value: "eng", label: "Engineering" }],
      }),
    })

    render(
      <F0Form
        name="select-no-loading"
        schema={schema}
        defaultValues={{ team: undefined }}
        onSubmit={async () => ({ success: true })}
      />
    )

    await waitFor(() => expect(selectPropsSpy).toHaveBeenCalled())
    expect(lastSelectProps().loading).toBeFalsy()
  })

  it("does NOT forward searchFn in source mode (component forbids searchFn + source)", async () => {
    const source = createDataSourceDefinition<{ id: number; name: string }>({
      dataAdapter: {
        fetchData: async () => ({
          records: [{ id: 1, name: "Engineering" }],
        }),
      },
    })

    const schema = z.object({
      team: f0FormField(z.number().optional(), {
        label: "Team",
        source,
        mapOptions: (item: { id: number; name: string }) => ({
          value: item.id,
          label: item.name,
        }),
        searchEmptyMessage: "No teams",
      }),
    })

    render(
      <F0Form
        name="select-source-mode"
        schema={schema}
        defaultValues={{ team: undefined }}
        onSubmit={async () => ({ success: true })}
      />
    )

    await waitFor(() => expect(selectPropsSpy).toHaveBeenCalled())

    const props = lastSelectProps()
    expect(props.source).toBeDefined()
    expect(props.searchFn).toBeUndefined()
    // Base props still thread through in source mode
    expect(props.searchEmptyMessage).toBe("No teams")
  })
})
