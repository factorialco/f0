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
      <Text className="pt-0.5 text-xs leading-3 font-semibold text-f0-special-highlight uppercase dark:text-f0-foreground-inverse-secondary">
        {month}
      </Text>
      <Text className="flex items-center justify-center text-lg leading-tight font-medium text-f0-foreground">
        {dateDay}
      </Text>
    </View>
  )
}
