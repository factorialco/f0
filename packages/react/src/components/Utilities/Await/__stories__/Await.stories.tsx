import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useCallback, useEffect, useState } from "react"
import { expect, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { Skeleton } from "@/ui/skeleton"

import { Await } from "../index"

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
    await expect(canvas.getByText("Resolved with Test ID")).toBeInTheDocument()
  },
}
