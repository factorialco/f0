import { Component } from "@/lib/component/component"
import { withDataTestId } from "@/lib/data-testid"

import { HomeLayout as HomeLayoutComponent } from "./HomeLayout"
import {
  StandardLayout as StandardLayoutComponent,
  StandardLayoutProps,
} from "./StandardLayout"
import {
  TwoColumnLayout as TwoColumnLayoutComponent,
  TwoColumnLayoutProps,
} from "./TwoColumnLayout"

export type { StandardLayoutProps, TwoColumnLayoutProps }

export const StandardLayout = StandardLayoutComponent

export const TwoColumnLayout = TwoColumnLayoutComponent

export const HomeLayout = withDataTestId(
  Component(
    {
      name: "HomeLayout",
      type: "layout",
    },
    HomeLayoutComponent
  )
)

export {
  Dashboard,
  type DashboardProps,
  type DashboardWidget,
} from "./Dashboard"

export * from "./Layout"
