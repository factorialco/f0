import type { ReactElement } from "react"
import type { IconType } from "@/components/F0Icon"
import type { TagAlertProps } from "@/components/tags/F0TagAlert"
import type { TagBalanceProps } from "@/components/tags/F0TagBalance"
import type { TagDotProps } from "@/components/tags/F0TagDot"
import type { TagRawProps } from "@/components/tags/F0TagRaw"
import type { TagStatusProps } from "@/components/tags/F0TagStatus"
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

/**
 * The tag a record shows beside its title. Same shapes and `type` names as
 * the tag entries of DetailsItem's content union, so a status reads the same
 * wherever it sits.
 */
export type RecordDetail =
  | ({ type: "status-tag" } & TagStatusProps)
  | ({ type: "alert-tag" } & TagAlertProps)
  | ({ type: "dot-tag" } & TagDotProps)
  | ({ type: "raw-tag" } & TagRawProps)
  | ({ type: "balance-tag" } & TagBalanceProps)

/**
 * How far along a record is. `value` is out of `max` (100 by default); the
 * label defaults to the rounded percentage.
 */
export type RecordProgress = {
  value: number
  max?: number
  label?: string
}

/**
 * A row for an entry that is a thing (a review, a goal, a meeting) rather than
 * a plain fact: a title, an optional secondary line, an optional tag on the
 * right, an optional progress bar underneath, and the usual item action.
 */
export type RecordItemProps = {
  title: string
  description?: string
  detail?: RecordDetail
  progress?: RecordProgress
  action?: ActionType
}
