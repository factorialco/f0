import React from "react"
import { View } from "react-native"

import { cn } from "../../lib/utils"

import { F0Tag } from "./F0Tag"
import type {
  F0TagAlertProps,
  F0TagBalanceProps,
  F0TagCompanyProps,
  F0TagDotProps,
  F0TagPersonProps,
  F0TagRawProps,
  F0TagStatusProps,
  F0TagTeamProps,
} from "./F0Tag.types"
import type { F0TagListProps, F0TagListType } from "./F0TagList.types"

/**
 * Renders a homogeneous list of `F0Tag` variants with a `+N` overflow counter.
 */
const F0TagList = React.memo(function F0TagList<T extends F0TagListType>({
  type,
  tags,
  max = 4,
  remainingCount,
  className,
}: F0TagListProps<T>) {
  const safeMax = Math.max(0, max)
  const visibleTags = tags.slice(0, safeMax)
  const overflowCount = Math.max(tags.length - visibleTags.length, 0)
  const counter = (remainingCount ?? 0) + overflowCount
  const renderedTags = (() => {
    if (type === "dot") {
      return (visibleTags as F0TagDotProps[]).map((tag, index) => (
        <F0Tag.Dot key={`${type}-${index}`} {...tag} />
      ))
    }
    if (type === "person") {
      return (visibleTags as F0TagPersonProps[]).map((tag, index) => (
        <F0Tag.Person key={`${type}-${index}`} {...tag} />
      ))
    }
    if (type === "team") {
      return (visibleTags as F0TagTeamProps[]).map((tag, index) => (
        <F0Tag.Team key={`${type}-${index}`} {...tag} />
      ))
    }
    if (type === "company") {
      return (visibleTags as F0TagCompanyProps[]).map((tag, index) => (
        <F0Tag.Company key={`${type}-${index}`} {...tag} />
      ))
    }
    if (type === "alert") {
      return (visibleTags as F0TagAlertProps[]).map((tag, index) => (
        <F0Tag.Alert key={`${type}-${index}`} {...tag} />
      ))
    }
    if (type === "status") {
      return (visibleTags as F0TagStatusProps[]).map((tag, index) => (
        <F0Tag.Status key={`${type}-${index}`} {...tag} />
      ))
    }
    if (type === "balance") {
      return (visibleTags as F0TagBalanceProps[]).map((tag, index) => (
        <F0Tag.Balance key={`${type}-${index}`} {...tag} />
      ))
    }
    return (visibleTags as F0TagRawProps[]).map((tag, index) => (
      <F0Tag.Raw key={`${type}-${index}`} {...tag} />
    ))
  })()

  return (
    <View className={cn("flex-row items-center gap-1", className)}>
      {renderedTags}
      {counter > 0 && <F0Tag.Raw text={`+${counter}`} />}
    </View>
  )
})

F0TagList.displayName = "F0TagList"

export { F0TagList }
