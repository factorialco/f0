import type { ReactElement } from "react"

import type { IconType } from "@/components/F0Icon"

import type { ActionType } from "./actions"

export type DataListProps = {
  children: ReactElement | ReactElement[]
  label?: string
  isHorizontal?: boolean
}

export type ItemProps = {
  text: string
  icon?: IconType
  action?: ActionType
}

type URL = string

export type EmployeeItemProps = {
  firstName: string
  lastName: string
  avatarUrl?: URL
  action?: ActionType
}

export type CompanyItemProps = {
  name: string
  avatarUrl?: URL
  action?: ActionType
}

export type TeamItemProps = {
  name: string
  action?: ActionType
}
