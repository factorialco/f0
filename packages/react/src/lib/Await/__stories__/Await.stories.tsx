import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useCallback, useEffect, useState } from "react"
import { expect, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { Skeleton } from "@/ui/skeleton"

import { Await } from "../index"

// Deterministic promise states for the snapshot.
const pendingPromise = new Promise<string>(() => {})
const rejectedPromise = Promise.reject<string>(new Error("Failed to load"))
// Attach a no-op catch so this module-scope rejection isn't reported as an
// unhandled rejection before `Await` wires up its own handler.
rejectedPromise.catch(() => {})

const ExampleComponent = (args: Story["args"]) => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState<Promise<string> | null>(null)

  const triggerPromise = useCallback(() => {
    setValue(
      new Promise((resolve) =>
        setTimeout(() => resolve(`${args.resolve as string} - ${count}`), 1000)
      )
    )
    setCount(count + 1)
  }, [args.resolve, count])

  useEffect(() => {
    triggerPromise()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run once
  }, [])

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <F0Button onClick={() => triggerPromise()} label="Trigger promise" />
      </div>
      <Await fallback={args.fallback} resolve={value}>
        {args.children}
      </Await>
    </>
  )
}

const meta = {
  title: "Await",
  component: Await,
  argTypes: {
    fallback: {
      description:
        "Fallback to display when the promise is pending. It can be a ReactNode",
    },
    resolve: {
      description:
        "Value to await for, it can be a promise or a primitive value",
    },
    error: {
      description: "Error to display when the promise is rejected",
    },
    children: {
      description:
        "Children to display when the promise is resolved. It's a function that gets the resolved value as an argument",
    },
    ...dataTestIdArgs,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This is an utility component. The `Await` component is used to display a fallback component when a promise is resolved, but it accepts a promise or a primitive value as a prop, you don't need to take care. ",
      },
    },
  },
  tags: ["autodocs", "stable"],
} satisfies Meta<ComponentProps<typeof Await>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <ExampleComponent {...args} />,
  args: {
    resolve: "Hello",
    fallback: "Loading...",
    children: (value) => `${value}`,
  },
}

export const WithSkeleton: Story = {
  render: (args) => <ExampleComponent {...args} />,
  args: {
    resolve: "Hello",
    fallback: <Skeleton className="h-4 w-full" />,
    children: (value) => `${value}`,
  },
}

export const WithDataTestId: Story = {
  args: {
    resolve: "Resolved with Test ID",
    fallback: "Loading...",
    dataTestId: "my-test-await",
    children: (value: unknown) => String(value),
  },
  render: (args) => <Await {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("my-test-await")).toBeInTheDocument()
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-f1-foreground-secondary">
          Resolved
        </span>
        <Await resolve="Loaded value" fallback="Loading…">
          {(value) => <span>{value}</span>}
        </Await>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-f1-foreground-secondary">
          Pending (fallback)
        </span>
        <Await
          resolve={pendingPromise}
          fallback={<Skeleton className="h-4 w-40" />}
        >
          {(value) => <span>{value}</span>}
        </Await>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-f1-foreground-secondary">
          Rejected (error)
        </span>
        <Await
          resolve={rejectedPromise}
          fallback="Loading…"
          error={<span>Something went wrong</span>}
        >
          {(value) => <span>{value}</span>}
        </Await>
      </div>
    </div>
  ),
}
