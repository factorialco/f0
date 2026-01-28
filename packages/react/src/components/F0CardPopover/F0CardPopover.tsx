import { useControllable } from "use-controllable"

import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { ButtonInternal } from "../F0Button/internal"
import { CardActions, CardContent } from "../F0Card/internal-exports"
import { F0CardPopoverProps } from "./types"

export const F0CardPopover = ({
  open,
  onChangeOpen,
  children,
  ...cardProps
}: F0CardPopoverProps) => {
  const i18n = useI18n()
  const [isOpen, setIsOpen] = useControllable<boolean>({
    value: open,
    onChange: onChangeOpen,
  })

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <ButtonInternal
          className="absolute right-2 top-2 z-10"
          icon={Cross}
          variant="ghost"
          size="sm"
          label={i18n.actions.close}
          onClick={() => setIsOpen(false)}
          hideLabel
        />
        <CardContent metadata={cardProps.metadata} />
        <CardActions
          primaryAction={cardProps.primaryAction}
          secondaryActions={
            cardProps.secondaryActions
              ? {
                  actions: cardProps.secondaryActions,
                  hideLabels: true,
                }
              : undefined
          }
        />
      </PopoverContent>
    </Popover>
  )
}
