import * as Clipboard from "expo-clipboard"
import { ReactNode, useEffect, useState } from "react"
import { Pressable, View } from "react-native"

import { CopyActionType } from ".."
import { CheckCircle, LayersFront } from "../../../../../icons/app"
import { cn } from "../../../../../lib/utils"
import { F0Icon } from "../../../../primitives/F0Icon"

const COPIED_SHOWN_MS = 750

export type CopyActionProps = {
  children: ReactNode
} & CopyActionType

export const CopyAction = ({ text, children }: CopyActionProps) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), COPIED_SHOWN_MS)

      return () => clearTimeout(timer)
    }
  }, [copied])

  const copyHandler = async () => {
    try {
      if (text) {
        await Clipboard.setStringAsync(text)
        setCopied(true)
      }
    } catch (error) {
      void error
    }
  }
  return (
    <Pressable
      aria-label={copied ? "Copied!" : `Copy ${text}`}
      className={cn(
        "group flex flex-row justify-between gap-1.5 rounded p-1.5",
        "transition-colors duration-300 active:bg-f0-background-secondary-hover",
        copied ? "bg-f0-background-positive" : undefined
      )}
      onPress={copyHandler}
    >
      <View className="flex flex-row items-center gap-1.5">{children}</View>
      <View className="flex">
        {!copied && (
          <F0Icon
            icon={LayersFront}
            size="md"
            aria-hidden={true}
            color="bold"
            className="col-start-1 col-end-2 row-start-1 row-end-2"
          />
        )}
        {copied && (
          <F0Icon
            icon={CheckCircle}
            size="md"
            aria-hidden={true}
            color="positive"
            className="col-start-1 col-end-2 row-start-1 row-end-2"
          />
        )}
      </View>
    </Pressable>
  )
}
