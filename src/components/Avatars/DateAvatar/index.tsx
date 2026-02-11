import { View, Text } from "react-native"

import { getAbbreviateMonth, getDayOfMonth } from "../../../lib/date"

type Props = {
  date: Date
}

export const DateAvatar = ({ date }: Props) => {
  const dateDay = getDayOfMonth(date)
  const month = getAbbreviateMonth(date)

  return (
    <View className="flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f0-border-secondary bg-f0-background-inverse-secondary">
      <Text className="dark:text-f0-foreground-inverse-secondary pt-0.5 text-xs font-semibold uppercase leading-3 text-f0-special-highlight">
        {month}
      </Text>
      <Text className="flex items-center justify-center text-lg font-medium leading-tight text-f0-foreground">
        {dateDay}
      </Text>
    </View>
  )
}
