import { Component } from "@/lib/component/component"
import { HomeLayout as HomeLayoutComponent } from "./HomeLayout"
import {
  TwoColumnLayout as TwoColumnLayoutComponent,
  TwoColumnLayoutProps,
} from "./TwoColumnLayout"

import {
  StandardLayout as StandardLayoutComponent,
  StandardLayoutProps,
} from "./StandardLayout"

export type { StandardLayoutProps, TwoColumnLayoutProps }

export const StandardLayout = Component(
  {
    name: "StandardLayout",
    type: "layout",
  },
  StandardLayoutComponent
)

export const TwoColumnLayout = Component(
  {
    name: "TwoColumnLayout",
    type: "layout",
  },
  TwoColumnLayoutComponent
)

export const HomeLayout = Component(
  {
    name: "HomeLayout",
    type: "layout",
  },
  HomeLayoutComponent
)

export {
  Dashboard,
  type DashboardProps,
  type DashboardWidget,
} from "./Dashboard"

export * from "./Layout"
