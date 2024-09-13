import * as Accordion from "@radix-ui/react-accordion"
import {
  BookCheck,
  Calendar,
  ChevronDown,
  Clock,
  Folders,
  Home,
  Inbox,
  Store,
  Target,
  TreePalm,
  UserRound,
  UsersRound,
} from "lucide-react"
import React from "react"
import { useXRay } from "../lib/lib/xray"

import { Button, Split, Stack } from "@/factorial-one"
import Add from "@/icons/Add"
import Ellipsis from "@/icons/Ellipsis"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { ScrollArea } from "@/ui/scrollarea"

const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-f1-foreground-neutral flex h-14 items-center gap-2 px-3 font-medium">
    <Target size="20" />
    {title}
  </div>
)

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled: xRayEnabled,
    disable: disableXRay,
    enable: enableXRay,
  } = useXRay()

  return (
    <div className="bg-f1-background-neutral-secondary grid h-full grow grid-cols-1 p-4 md:grid-cols-[264px_1fr]">
      <Stack gap="4" overflow="hidden">
        <Stack className="md:hidden" alignItems="start">
          <Button hideLabel label="Menu" icon={Home} variant="ghost" />
        </Stack>
        <ScrollArea className="hidden h-full flex-col overflow-hidden pr-3 md:flex">
          <Stack gap="4">
            <Title title="A Cool Company 2" />
            <Stack gap="4">
              <Stack>
                <div
                  onClick={() => (xRayEnabled ? disableXRay() : enableXRay())}
                  className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer"
                >
                  <Home size="16" /> Dashboard
                </div>

                <div className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                  <Inbox size="16" /> Inbox
                </div>

                <div className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                  <Store size="16" /> Marketplace
                </div>
              </Stack>

              <Stack>
                <div className="text-f1-foreground-neutral/70 my-2 px-1.5 pb-1 text-sm font-medium uppercase">
                  You
                </div>

                <Accordion.Root type="single" collapsible>
                  <Accordion.Item value="item-1">
                    <Accordion.Trigger className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover group flex h-9 w-full items-center rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                      <div className="flex flex-1 items-center gap-2">
                        <UserRound size="16" />
                        Me
                      </div>
                      <div className="flex-none pr-1">
                        <ChevronDown size="12" />
                      </div>
                    </Accordion.Trigger>
                    <Accordion.Content className="mb-2 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="ml-3 flex flex-col border-l-2">
                        <div className="text-f1-foreground-neutral hover:text-f1-foreground-neutral flex h-8 items-center pl-5 text-sm font-normal hover:cursor-pointer">
                          Profile
                        </div>
                        <div className="text-f1-foreground-neutral hover:text-f1-foreground-neutral flex h-8 items-center pl-5 text-sm font-normal hover:cursor-pointer">
                          Personal
                        </div>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>

                <div className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                  <Clock size="16" /> Clock in
                </div>

                <div className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                  <TreePalm size="16" /> Time off
                </div>

                <div className="hover:bg-f1-background-neutral-secondary/50 text-f1-foreground-neutral bg-f1-background-neutral-secondary flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                  <Folders size="16" /> My documents
                </div>

                <div className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                  <BookCheck size="16" /> Tasks
                </div>
              </Stack>
              <Stack>
                <div className="text-f1-foreground-neutral/70 my-2 px-1.5 pb-1 text-sm font-medium uppercase">
                  Your company
                </div>

                <div className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                  <UsersRound size="16" /> Employees
                </div>

                <div className="text-f1-foreground-neutral hover:bg-f1-background-neutral-secondary-hover flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium transition-colors hover:cursor-pointer">
                  <Calendar size="16" /> Calendar
                </div>
              </Stack>
            </Stack>
          </Stack>
        </ScrollArea>
      </Stack>
      <Stack
        overflow="hidden"
        className="bg-f1-background-neutral rounded-lg shadow"
      >
        <Stack gap={null} className="h-full overflow-hidden">
          <Split paddingX="p-4" paddingY="p-4" alignItems="center" shrink>
            <Stack grow paddingX="p-2">
              <div className="text-f1-foreground-neutral text-sm font-medium">
                My documents
              </div>
            </Stack>
            <Split gap="2">
              <Button label="Upload files" icon={Add} />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    hideLabel
                    label="Submenu"
                    icon={Ellipsis}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-60">Menu!</PopoverContent>
              </Popover>
            </Split>
          </Split>
          <Stack grow className="overflow-hidden">
            {children}
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}
