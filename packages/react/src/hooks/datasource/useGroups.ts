import { useEffect, useState } from "react"

import { RecordType } from "./types/records.typings"
import { GroupRecord } from "./useData"

export const useGroups = <R extends RecordType>(
  groups: GroupRecord<R>[],
  defaultOpenGroups: boolean | GroupRecord<R>["key"][] = []
) => {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const defaultValue = groups.reduce(
      (acc, group) => {
        acc[group.key] =
          typeof defaultOpenGroups === "boolean"
            ? defaultOpenGroups
            : defaultOpenGroups.includes(group.key)
        return acc
      },
      {} as Record<string, boolean>
    )
    if (Object.values(defaultValue).length > 0) {
      setOpenGroups(defaultValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run on deep changes
  }, [JSON.stringify(groups), JSON.stringify(defaultOpenGroups)])

  const setGroupOpen = (key: string, open: boolean) => {
    setOpenGroups((prev) => ({ ...prev, [key]: open }))
  }

  return { openGroups, setGroupOpen }
}

type AnimationVariantsOptions = {
  delay?: number
  duration?: number
  maxDelay?: number
}

const DEFAULT_ANIMATION_OPTIONS: Required<AnimationVariantsOptions> = {
  delay: 0.03,
  duration: 0.03,
  maxDelay: 20,
}
export const getAnimationVariants = (options?: AnimationVariantsOptions) => {
  const { delay, duration, maxDelay } = {
    ...DEFAULT_ANIMATION_OPTIONS,
    ...options,
  }

  return {
    hidden: { opacity: 0, y: -10 }, // Start position for the animation
    visible: (i: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: Math.min(i * delay, maxDelay), // Delay each row based on its index
          duration, // Duration of the animation
          type: "spring", // Use a spring type animation for a bounce effect
          stiffness: 100, // Spring stiffness, adjust for more/less bounce
          damping: 10, // Spring damping, adjust to change how the bounce behaves
        },
      }
    },
  }
}
