import React from "react"
import { View } from "react-native"

import { getAbbreviateMonth, getDayOfMonth } from "../../lib/date"
import { F0Text } from "../primitives/F0Text"

import { type F0AvatarDateProps } from "./F0Avatar.types"

export const F0AvatarDate = React.memo(function F0AvatarDate({
  date,
}: F0AvatarDateProps) {
  const dateDay = getDayOfMonth(date)
  const month = getAbbreviateMonth(date)

  return (
    <View className="flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f0-border-secondary bg-f0-background-inverse-secondary">
      <F0Text
        variant="body-xs-medium"
        color="accent"
        transform="uppercase"
        className="pt-0.5"
      >
        {month}
      </F0Text>
      <F0Text
        variant="body-md-medium"
        color="default"
        className="leading-tight"
      >
        {dateDay}
      </F0Text>
    </View>
  )
})
