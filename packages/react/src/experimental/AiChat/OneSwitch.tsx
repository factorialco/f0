import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import OneIcon from "./OneIcon"
import { useAiChat } from "./providers/AiChatStateProvider"

export const OneSwitch = ({
  className,
  disabled,
  ...props
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>) => {
  const { enabled, setOpen, open } = useAiChat()
  const translations = useI18n()

  if (!enabled) {
    return null
  }

  return (
    <div className="flex items-center">
      <SwitchPrimitive.Root
        onCheckedChange={(val) => {
          setOpen(val)
        }}
        checked={open}
        aria-label={open ? translations.ai.closeChat : translations.ai.openChat}
        className={cn(
          "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] hover:bg-f1-background-hover",
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-['']",
          "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[hsla(229,57%,76%,0.7)] data-[state=checked]:via-[hsla(348,80%,50%,0.7)] data-[state=checked]:to-[hsla(18,80%,50%,0.7)]",
          disabled && "cursor-not-allowed opacity-50",
          focusRing(),
          className
        )}
        disabled={disabled}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "block h-[1.375rem] w-[1.375rem] translate-x-[0.25rem] rounded-full bg-f1-background transition-transform duration-300 group-hover:bg-gradient-to-r group-hover:from-[hsl(229,57%,76%)] group-hover:via-[hsl(348,80%,50%)] group-hover:to-[hsl(18,80%,50%)] *:group-hover:hidden data-[state=checked]:translate-x-[1.25rem] data-[state=checked]:bg-transparent"
          )}
        >
          <div>
            <OneIcon size="sm" background={open ? "white" : undefined} />
          </div>
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
    </div>
  )
}
