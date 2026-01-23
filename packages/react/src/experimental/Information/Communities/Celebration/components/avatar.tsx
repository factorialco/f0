import { RefObject } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { getAvatarColor } from "@/components/avatars/internal/BaseAvatar/utils"
import { cn } from "@/lib/utils"

import { Picker } from "../../../Reactions/Picker"
import { BACKGROUND_COLORS } from "../types"

type CelebrationAvatarProps = {
  firstName: string
  lastName: string
  src?: string
  canReact: boolean
  lastEmojiReaction?: string
  onReactionSelect?: (emoji: string) => void
  pickerRef?: RefObject<HTMLDivElement>
}

export function CelebrationAvatar({
  firstName,
  lastName,
  src,
  canReact,
  lastEmojiReaction,
  onReactionSelect,
  pickerRef,
}: CelebrationAvatarProps) {
  return (
    <div
      className={cn(
        "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
        !src
          ? BACKGROUND_COLORS[
              getAvatarColor(
                [firstName, lastName].join("")
              ) as keyof typeof BACKGROUND_COLORS
            ]
          : ""
      )}
    >
      {src && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url("${src}")` }}
        />
      )}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur">
        <div className="relative h-fit w-fit">
          <div
            style={
              canReact
                ? {
                    clipPath:
                      "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')",
                  }
                : {}
            }
          >
            <F0AvatarPerson
              src={src}
              firstName={firstName}
              lastName={lastName}
              size="2xl"
            />
          </div>
          {canReact && (
            <div
              ref={pickerRef}
              className={cn(
                "absolute -right-0.5",
                src ? "bottom-0.5" : "-bottom-[3px]"
              )}
            >
              <Picker
                lastEmojiReaction={lastEmojiReaction}
                onSelect={onReactionSelect}
                size="sm"
                variant="neutral"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
