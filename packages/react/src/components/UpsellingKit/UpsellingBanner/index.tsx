import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import {
  BaseBanner,
  type BannerAction,
  type BaseBannerProps,
} from "@/experimental/Banners/BaseBanner"
import { forwardRef } from "react"
import { UpsellingButton, type UpsellingButtonProps } from "../UpsellingButton"

type DefaultAction = BannerAction

type PromoteAction = {
  variant: "promote"
  label: string
  onClick: () => void
  errorMessage: UpsellingButtonProps["errorMessage"]
  successMessage: UpsellingButtonProps["successMessage"]
  loadingState: UpsellingButtonProps["loadingState"]
  nextSteps: UpsellingButtonProps["nextSteps"]
  closeLabel: UpsellingButtonProps["closeLabel"]
  showIcon?: boolean
  showConfirmation?: boolean
  icon?: IconType
}

type UpsellingBannerProps = Omit<
  BaseBannerProps,
  "primaryAction" | "secondaryAction" | "children"
> & {
  primaryAction?: DefaultAction | PromoteAction
  secondaryAction?: DefaultAction | PromoteAction
}

export const UpsellingBanner = forwardRef<HTMLDivElement, UpsellingBannerProps>(
  function UpsellingBanner(
    { primaryAction, secondaryAction, ...baseProps },
    ref
  ) {
    const renderAction = (action: DefaultAction | PromoteAction) => {
      if (action.variant === "promote") {
        return (
          <UpsellingButton
            label={action.label}
            onRequest={async () => {
              await action.onClick()
            }}
            errorMessage={action.errorMessage}
            successMessage={action.successMessage}
            loadingState={action.loadingState}
            nextSteps={action.nextSteps}
            closeLabel={action.closeLabel}
            showIcon={action.showIcon}
            showConfirmation={action.showConfirmation}
            variant={action.variant}
          />
        )
      }

      return (
        <F0Button
          onClick={action.onClick}
          label={action.label}
          variant={action.variant || "default"}
          size="md"
          icon={action.icon}
        />
      )
    }

    const basePrimaryAction =
      primaryAction?.variant !== "promote" ? primaryAction : undefined
    const baseSecondaryAction =
      secondaryAction?.variant !== "promote" ? secondaryAction : undefined

    return (
      <BaseBanner
        ref={ref}
        {...baseProps}
        primaryAction={basePrimaryAction}
        secondaryAction={baseSecondaryAction}
      >
        {primaryAction?.variant === "promote" && renderAction(primaryAction)}
        {secondaryAction?.variant === "promote" &&
          renderAction(secondaryAction)}
      </BaseBanner>
    )
  }
)

UpsellingBanner.displayName = "UpsellingBanner"
