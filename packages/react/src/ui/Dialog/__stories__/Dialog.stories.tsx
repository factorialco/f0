import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog"

const ExampleComponent = (props: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  withTranslateAnimation?: boolean
  container?: HTMLElement | null
}) => {
  const [open, setOpen] = useState(props.open ?? false)

  return (
    <Dialog open={open} onOpenChange={props.onOpenChange ?? setOpen}>
      <DialogTrigger asChild>
        <F0Button label="Open Dialog" />
      </DialogTrigger>
      <DialogContent
        withTranslateAnimation={props.withTranslateAnimation}
        container={props.container}
      >
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description. It provides additional context about
            the dialog content.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Dialog content goes here.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <F0Button variant="outline" label="Cancel" />
          </DialogClose>
          <F0Button label="Confirm" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const meta = {
  title: "Components/Dialog",
  component: ExampleComponent,
  parameters: {
    docs: {
      description: {
        component: [
          "The `Dialog` component is a modal dialog built on top of Radix UI primitives. It provides a flexible way to display content in a modal overlay.",
          "The dialog consists of several subcomponents: `DialogTrigger` to open the dialog, `DialogContent` for the main content area, `DialogHeader` and `DialogFooter` for structured layouts, `DialogTitle` and `DialogDescription` for accessible labeling, and `DialogClose` for closing the dialog.",
          "The dialog supports animations, custom container rendering, and follows accessibility best practices.",
        ]
          .map((text) => `<p>${text}.</p>`)
          .join(""),
      },
    },
  },
  tags: ["autodocs", "internal"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <F0Button label="Open Dialog" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Simple Dialog</DialogTitle>
            <DialogDescription>
              This is a simple dialog with minimal content.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>Dialog content goes here.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <F0Button variant="outline" label="Close" />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const WithHeaderAndFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <F0Button label="Open Dialog" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog with Header and Footer</DialogTitle>
            <DialogDescription>
              This dialog demonstrates the use of DialogHeader, DialogTitle,
              DialogDescription, and DialogFooter components.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>
              This is the main content area of the dialog. You can place any
              content here.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <F0Button variant="outline" label="Cancel" />
            </DialogClose>
            <F0Button label="Confirm" />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const CustomContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <F0Button label="Open Custom Dialog" />
        </DialogTrigger>
        <DialogContent>
          <div className="p-6">
            <h2 className="mb-2 text-lg font-semibold">Custom Content</h2>
            <p className="mb-4">
              This dialog uses custom content without the standard header and
              footer structure.
            </p>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <F0Button variant="outline" label="Close" />
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  },
}

export const WithoutAnimation: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <F0Button label="Open Dialog (No Animation)" />
        </DialogTrigger>
        <DialogContent withTranslateAnimation={false}>
          <DialogHeader>
            <DialogTitle>Dialog Without Translate Animation</DialogTitle>
            <DialogDescription>
              This dialog has translate animations disabled.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>Only fade and zoom animations are applied.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <F0Button variant="outline" label="Close" />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const LargeContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <F0Button label="Open Large Dialog" />
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Dialog with Large Content</DialogTitle>
            <DialogDescription>
              This dialog demonstrates how the component handles larger content
              areas.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <F0Button variant="outline" label="Cancel" />
            </DialogClose>
            <F0Button label="Save Changes" />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
