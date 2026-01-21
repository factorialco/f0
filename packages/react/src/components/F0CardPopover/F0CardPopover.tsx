import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useControllable } from "use-controllable"
import { F0CardPopoverProps } from "./types"
import { Cross } from "@/icons/app"
import { ButtonInternal } from "../F0Button/internal"
import { useI18n } from "@/lib/providers/i18n"
import { CardActions, CardContent } from "@/components/F0Card/internal-exports"

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
          className="absolute top-2 right-2 z-10"
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
          secondaryActions={{
            actions: cardProps.secondaryActions,
            hideLabels: true,
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
