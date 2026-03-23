import React from "react"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"

describe("renderCustomField", () => {
  it("renders a custom field via renderCustomField when customFieldName is set", () => {
    const schema = z.object({
      assignee: f0FormField(z.string().optional(), {
        label: "Assignee",
        fieldType: "custom",
        customFieldName: "employee-selector",
        fieldConfig: { team: "engineering" },
      }),
    })

    render(
      <F0Form
        name="test-render-custom-field"
        schema={schema}
        defaultValues={{ assignee: "" }}
        onSubmit={async () => ({ success: true })}
        renderCustomField={(props) => (
          <div data-testid="custom-rendered">
            {props.customFieldName}:{String(props.config?.team)}
          </div>
        )}
      />
    )

    expect(screen.getByTestId("custom-rendered")).toHaveTextContent(
      "employee-selector:engineering"
    )
  })

  it("still renders inline render functions (regression)", () => {
    const schema = z.object({
      custom: f0FormField(z.string().optional(), {
        label: "Custom",
        fieldType: "custom",
        render: (props) => (
          <input
            data-testid="inline-rendered"
            value={String(props.value ?? "")}
            onChange={(e) => props.onChange(e.target.value)}
          />
        ),
      }),
    })

    render(
      <F0Form
        name="test-inline-render"
        schema={schema}
        defaultValues={{ custom: "" }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByTestId("inline-rendered")).toBeInTheDocument()
  })

  it("prioritizes renderCustomField over inline render when customFieldName is set", () => {
    const inlineRender = vi.fn(() => (
      <div data-testid="inline-rendered">inline</div>
    ))

    const schema = z.object({
      field: f0FormField(z.string().optional(), {
        label: "Field",
        fieldType: "custom",
        customFieldName: "my-custom",
        render: inlineRender,
      }),
    })

    render(
      <F0Form
        name="test-priority"
        schema={schema}
        defaultValues={{ field: "" }}
        onSubmit={async () => ({ success: true })}
        renderCustomField={(props) => (
          <div data-testid="custom-rendered">{props.customFieldName}</div>
        )}
      />
    )

    expect(screen.getByTestId("custom-rendered")).toHaveTextContent("my-custom")
    expect(screen.queryByTestId("inline-rendered")).not.toBeInTheDocument()
    expect(inlineRender).not.toHaveBeenCalled()
  })

  it("throws when customFieldName is set but renderCustomField is missing", () => {
    const schema = z.object({
      broken: f0FormField(z.string().optional(), {
        label: "Broken",
        fieldType: "custom",
        customFieldName: "missing-handler",
      }),
    })

    // Suppress React error boundary console noise
    const spy = vi.spyOn(console, "error").mockImplementation(() => {})

    expect(() =>
      render(
        <F0Form
          name="test-missing-handler"
          schema={schema}
          defaultValues={{ broken: "" }}
          onSubmit={async () => ({ success: true })}
        />
      )
    ).toThrow(
      'Custom field "broken" has customFieldName "missing-handler" but no renderCustomField prop was provided to F0Form.'
    )

    spy.mockRestore()
  })

  it("dispatches multiple customFieldNames from a single renderCustomField", () => {
    const schema = z.object({
      assignee: f0FormField(z.string().optional(), {
        label: "Assignee",
        fieldType: "custom",
        customFieldName: "employee-selector",
      }),
      priority: f0FormField(z.string().optional(), {
        label: "Priority",
        fieldType: "custom",
        customFieldName: "priority-picker",
      }),
    })

    render(
      <F0Form
        name="test-multiple-names"
        schema={schema}
        defaultValues={{ assignee: "", priority: "" }}
        onSubmit={async () => ({ success: true })}
        renderCustomField={(props) => (
          <div data-testid={`custom-${props.customFieldName}`}>
            {props.customFieldName}
          </div>
        )}
      />
    )

    expect(screen.getByTestId("custom-employee-selector")).toHaveTextContent(
      "employee-selector"
    )
    expect(screen.getByTestId("custom-priority-picker")).toHaveTextContent(
      "priority-picker"
    )
  })

  it("passes fieldConfig through as config prop", () => {
    const schema = z.object({
      selector: f0FormField(z.string().optional(), {
        label: "Selector",
        fieldType: "custom",
        customFieldName: "selector",
        fieldConfig: { options: ["a", "b", "c"], maxItems: 2 },
      }),
    })

    render(
      <F0Form
        name="test-field-config"
        schema={schema}
        defaultValues={{ selector: "" }}
        onSubmit={async () => ({ success: true })}
        renderCustomField={(props) => (
          <div data-testid="config-output">{JSON.stringify(props.config)}</div>
        )}
      />
    )

    expect(screen.getByTestId("config-output")).toHaveTextContent(
      JSON.stringify({ options: ["a", "b", "c"], maxItems: 2 })
    )
  })

  it("throws when custom field has neither render nor customFieldName", () => {
    const schema = z.object({
      broken: f0FormField(z.string().optional(), {
        label: "Broken",
        fieldType: "custom",
      } as never),
    })

    const spy = vi.spyOn(console, "error").mockImplementation(() => {})

    expect(() =>
      render(
        <F0Form
          name="test-no-render-no-name"
          schema={schema}
          defaultValues={{ broken: "" }}
          onSubmit={async () => ({ success: true })}
        />
      )
    ).toThrow(
      'Custom field "broken" has neither a render function nor a customFieldName.'
    )

    spy.mockRestore()
  })
})
