import { ButtonInternal } from "@/components/F0Button/internal"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { toArray } from "@/lib/toArray"
import { cn } from "@/lib/utils"

import {
  DialogInternalProps,
  DialogVariant,
} from "../F0Dialog/internal/internal-types"
import { DialogAlikeActionsProps } from "./types"

export type FooterProps = DialogAlikeActionsProps & {
  variant?: DialogVariant
  type?: DialogInternalProps["type"]
  onClose: () => void
}

export const Footer = (props: FooterProps) => {
  const primaryActions = toArray(props.primaryAction)
  const secondaryActions = toArray(props.secondaryAction)

  const hasSecondaryAction = secondaryActions.length > 0
  const hasPrimaryAction = primaryActions.length > 0

  if (!hasPrimaryAction && !hasSecondaryAction) {
    return null
  }

  const toPromise = (onClick: () => void | Promise<void>) => {
    return new Promise((resolve) => {
      resolve(onClick())
    })
  }

  const renderPrimaryAction = () => {
    if (!hasPrimaryAction) return null

    const _variant = props.type === "critical" ? "critical" : "default"

    if (primaryActions.length > 1) {
      return (
        <F0ButtonDropdown
          items={primaryActions.map((action) => ({
            value: action.value ?? action.label,
            label: action.label,
            icon: action.icon,
            disabled: action.disabled,
            loading: action.loading,
          }))}
          onClick={async (value) => {
            const action = primaryActions.find((a) => a.value === value)
            await (action ? toPromise(action?.onClick) : Promise.resolve())
            if (action?.closeOnClick) {
              props.onClose()
            }
          }}
          variant="default"
        />
      )
    }

    return (
      <ButtonInternal
        block={props.variant === "notification"}
        label={primaryActions[0].label}
        onClick={async () => {
          await toPromise(primaryActions[0].onClick)
          if (primaryActions[0]?.closeOnClick) {
            props.onClose()
          }
        }}
        variant={_variant}
        icon={primaryActions[0].icon}
        disabled={primaryActions[0].disabled}
        loading={primaryActions[0].loading}
      />
    )
  }

  return (
    <div className="flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3">
      <div
        className={cn(
          "flex flex-row items-center gap-2 w-full",
          props.variant === "notification"
            ? "flex-1 justify-between"
            : "justify-end"
        )}
      >
        {secondaryActions.length > 0 &&
          secondaryActions.map((action) => (
            <ButtonInternal
              key={action.value ?? action.label}
              block={props.variant === "notification"}
              label={action.label}
              onClick={async () => {
                await toPromise(action.onClick)
                if (action.closeOnClick) {
                  props.onClose()
                }
              }}
              variant="outline"
              icon={action.icon}
              disabled={action.disabled}
              loading={action.loading}
            />
          ))}
        {renderPrimaryAction()}
      </div>
    </div>
  )
}
