import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import {
  F0ToastProps,
  F0ToastVariant,
  toastVariants,
} from "@/internal/components/Toast/types"

import { ToastProvider } from "../ToastProvider"
import { ToastId, ToastOptions } from "../types"
import { useToast } from "../useToast"

const meta = {
  title: "Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof F0Button>

export default meta
type Story = StoryObj<typeof meta>

export const ToastPlayground: Story = {
  render: () => {
    const { toast, removeToast } = useToast()
    const [lastId, setLastId] = useState<ToastId[]>([])

    const longDescription = `This is a long description that demonstrates how the toast handles extended text content and wraps appropriately within the available space.
    
    This is a long description that demonstrates how the toast handles extended text content and wraps appropriately within the available space.
    This is a long description that demonstrates how the toast handles extended text content and wraps appropriately within the available space.`

    const variants: {
      label: string
      variant: F0ToastVariant
      description: string
      actions?: F0ToastProps["actions"]
    }[] = [
      {
        label: "Default",
        variant: "default",
        description: "This is a default toast notification",
        actions: [
          {
            type: "button",
            label: "Undo",
            onClick: () => alert("Undo clicked"),
          },
          {
            type: "link",
            label: "Details",
            href: "#",
          },
        ],
      },
      {
        label: "Success",
        variant: "success",
        description: "Operation completed successfully",
        actions: [
          {
            type: "button",
            label: "View",
            onClick: () => alert("View clicked"),
          },
        ],
      },
      {
        label: "Warning",
        variant: "warning",
        description: "Please check your inputs",
        actions: [
          {
            type: "button",
            label: "Review",
            onClick: () => alert("Review clicked"),
          },
        ],
      },
      {
        label: "Error",
        variant: "error",
        description: "Something went wrong",
        actions: [
          {
            type: "button",
            label: "Retry",
            onClick: () => alert("Retry clicked"),
          },
          {
            type: "link",
            label: "Report",
            href: "#",
          },
        ],
      },
    ]

    const newToast = (options: ToastOptions) => {
      return () => {
        toast(options)
      }
    }

    return (
      <div className="flex flex-col gap-8 p-4">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Variants</h3>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <F0Button
                key={variant.label}
                label={variant.label}
                onClick={newToast({
                  variant: variant.variant,
                  title: variant.label,
                })}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Variants with Actions</h3>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <F0Button
                key={variant.label}
                label={variant.label}
                onClick={newToast({
                  variant: variant.variant,
                  title: variant.label,
                  actions: variant.actions,
                })}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Variants with Description</h3>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <F0Button
                key={variant.label}
                label={variant.label}
                onClick={newToast({
                  variant: variant.variant,
                  description: variant.description,
                  title: variant.label,
                })}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Variants with Long Description</h3>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <F0Button
                key={variant.label}
                label={variant.label}
                onClick={newToast({
                  variant: variant.variant,
                  description: longDescription,
                  title: variant.label,
                })}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Programmatic Control</h3>
          <div className="flex flex-wrap gap-2">
            <F0Button
              label="Create Persistent"
              onClick={() => {
                const id = toast({
                  title: "Persistent Toast",
                  description: "Click the remove button to close me",
                  persistent: true,
                  variant:
                    toastVariants[
                      Math.floor(Math.random() * toastVariants.length)
                    ],
                })
                setLastId((prev) => [...prev, id])
              }}
            />
            <F0Button
              label="Remove Last"
              disabled={lastId.length === 0}
              onClick={() => {
                if (lastId.length > 0) {
                  const idToRemove = lastId[lastId.length - 1]
                  removeToast(idToRemove)
                  setLastId((prev) => prev.slice(0, -1))
                }
              }}
            />
          </div>
        </div>
      </div>
    )
  },
}
