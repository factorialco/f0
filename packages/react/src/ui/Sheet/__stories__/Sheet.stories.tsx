import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  sheetSides,
} from "../sheet"

type DemoProps = {
  side?: (typeof sheetSides)[number]
  withOverlay?: boolean
}

const Demo = ({ side = "right", withOverlay = true }: DemoProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-[500px] items-center justify-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <F0Button label={`Open ${side} sheet`} />
        </SheetTrigger>
        <SheetContent
          side={side}
          withOverlay={withOverlay}
          className={
            side === "left" || side === "right" ? "w-full max-w-[400px]" : ""
          }
        >
          <SheetHeader>
            <SheetTitle>Sheet title</SheetTitle>
            <SheetDescription>
              The sheet primitive renders Radix Dialog content with side-aware
              slide animations.
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <p className="text-sm text-f1-foreground-secondary">
              Compose the sheet however you need: this story shows the default
              header, body, and footer slots.
            </p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <F0Button variant="outline" label="Cancel" />
            </SheetClose>
            <SheetClose asChild>
              <F0Button label="Confirm" />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

const meta: Meta<typeof Demo> = {
  title: "Components/Sheet",
  component: Demo,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: [
          "Sheet is a low-level primitive built on Radix Dialog with slide-from-edge animations.",
          "It powers `F0Sidepanel` and any other sheet/drawer pattern that needs to slide in from a side.",
          "Internal use only — exposed via `@/ui/Sheet/sheet`, not part of the public f0 surface.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  tags: ["autodocs", "internal"],
  argTypes: {
    side: {
      description: "Which edge the sheet slides in from.",
      control: { type: "select" },
      options: sheetSides,
      table: { defaultValue: { summary: "right" } },
    },
    withOverlay: {
      description: "Render the dimmed background overlay.",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "true" } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Demo>

export const Right: Story = { args: { side: "right" } }
export const Left: Story = { args: { side: "left" } }
export const Top: Story = { args: { side: "top" } }
export const Bottom: Story = { args: { side: "bottom" } }
export const NoOverlay: Story = { args: { side: "right", withOverlay: false } }
