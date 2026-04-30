import { forwardRef } from "react"

import { F0Button } from "@/components/F0Button"
import { withDataTestId } from "@/lib/data-testid"
import { BaseBanner, type BaseBannerProps } from "@/sds/ai/Banners/BaseBanner"

import { UpsellingButton, type UpsellingButtonProps } from "../UpsellingButton"

type UpsellAction = {
  label: string
  onClick: () => void
  errorMessage: UpsellingButtonProps["errorMessage"]
  successMessage: UpsellingButtonProps["successMessage"]
  loadingState: UpsellingButtonProps["loadingState"]
  nextSteps: UpsellingButtonProps["nextSteps"]
  closeLabel: UpsellingButtonProps["closeLabel"]
  showIcon?: boolean
  showConfirmation?: boolean
}

type GhostAction = {
  label: string
  onClick: () => void
}

type UpsellingBannerProps = Omit<
  BaseBannerProps,
  "primaryAction" | "secondaryAction" | "children"
> & {
  primaryAction: UpsellAction
  secondaryAction?: GhostAction
}

const _UpsellingBanner = forwardRef<HTMLDivElement, UpsellingBannerProps>(
  function UpsellingBanner(
    { primaryAction, secondaryAction, ...baseProps },
    ref
  ) {
    return (
      <BaseBanner ref={ref} {...baseProps}>
        <UpsellingButton
          label={primaryAction.label}
          onRequest={async () => {
            await primaryAction.onClick()
          }}
          errorMessage={primaryAction.errorMessage}
          successMessage={primaryAction.successMessage}
          loadingState={primaryAction.loadingState}
          nextSteps={primaryAction.nextSteps}
          closeLabel={primaryAction.closeLabel}
          showIcon={primaryAction.showIcon}
          showConfirmation={primaryAction.showConfirmation}
        />
        {secondaryAction && (
          <F0Button
            variant="ghost"
            label={secondaryAction.label}
            onClick={secondaryAction.onClick}
            size="md"
          />
        )}
      </BaseBanner>
    )
  }
)

_UpsellingBanner.displayName = "UpsellingBanner"

export const UpsellingBanner = withDataTestId(_UpsellingBanner)
