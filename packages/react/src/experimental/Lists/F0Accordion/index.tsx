"use client"

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { withSkeleton } from "@/lib/skeleton"

import { F0Accordion as _F0Accordion } from "./F0Accordion"
import { F0AccordionSkeleton } from "./F0AccordionSkeleton"

export * from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0Accordion = withDataTestId(
  withSkeleton(
    experimentalComponent("F0Accordion", _F0Accordion),
    F0AccordionSkeleton
  )
)
